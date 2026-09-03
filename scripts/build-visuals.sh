#!/usr/bin/env bash
# Turns the full-size brand renders in /visuals-src into the responsive
# derivatives BrandVisual.vue expects: public/visuals/<name>-<width>.{avif,webp,jpg}
#
#   npm run visuals
#
# Requires: sips (macOS), cwebp + avifenc (brew install webp libavif)
set -euo pipefail

SRC_DIR=${1:-visuals-src}
OUT_DIR=${2:-public/visuals}
WIDTHS=(800 1280 1920)

for bin in sips cwebp avifenc; do
  command -v "$bin" >/dev/null || { echo "missing: $bin" >&2; exit 1; }
done

mkdir -p "$OUT_DIR"
shopt -s nullglob nocaseglob
sources=("$SRC_DIR"/*.png "$SRC_DIR"/*.jpg "$SRC_DIR"/*.jpeg "$SRC_DIR"/*.webp "$SRC_DIR"/*.tif "$SRC_DIR"/*.tiff)

if [ ${#sources[@]} -eq 0 ]; then
  echo "no source images in $SRC_DIR/ — drop structure.png, assemblage.png, detail.png there first" >&2
  exit 1
fi

for src in "${sources[@]}"; do
  base=$(basename "$src"); name=${base%.*}
  src_w=$(sips -g pixelWidth "$src" | awk '/pixelWidth/ {print $2}')
  echo "→ $name (${src_w}px)"

  for w in "${WIDTHS[@]}"; do
    # never upscale: the widest derivative caps at the source width
    target=$w
    [ "$w" -gt "$src_w" ] && target=$src_w

    tmp="$OUT_DIR/.tmp-$name-$w.png"
    sips -Z "$target" "$src" --out "$tmp" >/dev/null
    cwebp -quiet -q 82 -sharp_yuv "$tmp" -o "$OUT_DIR/$name-$w.webp"
    avifenc -q 58 -s 6 "$tmp" "$OUT_DIR/$name-$w.avif" >/dev/null
    sips -s format jpeg -s formatOptions 82 "$tmp" --out "$OUT_DIR/$name-$w.jpg" >/dev/null
    rm -f "$tmp"

    printf '   %5dw  %s\n' "$w" "$(du -h "$OUT_DIR/$name-$w.avif" | cut -f1 | tr -d ' ') avif"
    [ "$target" -lt "$w" ] && break   # source exhausted, no point going wider
  done
done

echo "done → $OUT_DIR"
