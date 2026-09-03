# Sources des visuels de marque

Déposez ici les rendus pleine résolution, nommés exactement :

| fichier          | visuel                                                            | utilisé dans      |
| ---------------- | ----------------------------------------------------------------- | ----------------- |
| `paysage.png`    | le paysage de vallée au soleil rasant, format 16/9               | `SecHero`         |
| `structure.png`  | la structure complète vue de face, sur ciel clair                 | `SecManifesto`    |
| `assemblage.png` | les modules suspendus au-dessus du socle de dalles                | `SecMethode`      |
| `detail.png`     | le gros plan avec le symbole gravé dans le béton                  | `SecPropriete`    |
| `portrait.png`   | le portrait éditorial du fondateur, cadrage carré                 | `SecOrigine`      |

Puis :

    npm run visuals

Le script écrit `public/visuals/<nom>-{800,1280,1920}.{avif,webp,jpg}`,
que `BrandVisual.vue` sert en `<picture>` responsive. Ce dossier n'est jamais
servi en production — seules les dérivées de `public/visuals` le sont.
