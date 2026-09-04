import React from 'react';
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const C = {
  ink: '#11110f',
  inkSoft: '#1c1c19',
  cream: '#f5f2ec',
  paper: '#fbfaf7',
  sage: '#bfd6c2',
  sageDeep: '#4f7a5c',
  mute: '#77756e',
};

const modules = [
  {d: 'M29.3404 0.216035C46.5615 -0.208891 64.8397 0.118436 82.1387 0.150959C82.1514 3.93499 82.4469 14.5433 81.8247 17.4619C76.3148 43.2933 49.8019 19.2571 25.7649 35.6319C16.4894 44.5193 16.2136 50.7702 16.2858 63.0018C9.15747 63.1248 6.95789 63.0195 0 61.2547C2.10766 35.9444 -6.32865 6.16429 29.3404 0.216035Z', x: 42.223, y: 0, sx: .9906, sy: .98497},
  {d: 'M7.8294 0.1018L21.4949 0C21.7289 9.36887 23.7404 16.7015 13.849 21.1395C-2.10017 21.7553 -4.50052 5.71633 7.8294 0.1018Z', x: 141.041, y: .095, sx: .99172, sy: .96168},
  {d: 'M20.934 0.178132C24.467 -0.130134 30.8317 0.0565276 34.5726 0.0508714C34.5549 8.85695 36.4512 31.6714 31.9849 37.9046C28.0552 40.4924 20.6215 39.6255 15.6779 39.5223L0.0411717 39.5859C-0.0401368 19.1273 -1.3877 7.05896 20.934 0.178132Z', x: 123.035, y: 38.858, sx: .9988, sy: .9936},
  {d: 'M5.36686 0.213343C14.7463 -0.16209 25.6382 0.076887 35.1315 0.054969C33.5626 15.9582 38.603 23.486 25.3702 35.9255C15.9851 41.8285 11.1928 41.2304 0.320072 41.1561C0.402795 30.0112 -0.701583 16.9382 0.771871 5.93959C1.16922 2.97571 2.99972 1.69599 5.36686 0.213343Z', x: 2.621, y: 62.87, sx: .97587, sy: .98112},
  {d: 'M65.3275 0.00268789C71.3825 -0.0100387 77.4369 0.0224585 83.4912 0.0995249L83.646 1.2633C80.0345 5.95657 81.5461 15.8911 81.6416 22.0126C82.3415 66.8737 53.2812 63.9049 19.152 63.7762L0.17604 63.7083C0.0551378 52.2537 -2.34102 33.3364 15.0527 33.7026C44.9827 34.3333 65.4399 36.3893 65.3275 0.00268789Z', x: 37.305, y: 78.554, sx: .99578, sy: .9978},
  {d: 'M9.25282 0C24.0934 0.79541 25.6524 17.4516 13.5678 21.1749L0.309569 21.2435C0.00766622 11.5331 -1.89706 3.32658 9.25282 0Z', x: 0, y: 121.059, sx: .98305, sy: .96559},
];

const clamp = (value: number, from: number, duration: number) => interpolate(value, [from, from + duration], [0, 1], {
  easing: Easing.out(Easing.cubic),
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
});

const enter = (frame: number, start: number, duration = 18) => clamp(frame, start, duration);
const leave = (frame: number, start: number, duration = 16) => 1 - clamp(frame, start, duration);
const scene = (frame: number, start: number, end: number) => enter(frame, start) * leave(frame, end - 18);
const word = (frame: number, start: number, end: number) => scene(frame, start, end);
const fadeStyle = (amount: number, y = 28): React.CSSProperties => ({
  opacity: amount,
  transform: `translateY(${(1 - amount) * y}px) scale(${0.985 + amount * .015})`,
});

const Grain = () => (
  <AbsoluteFill style={{opacity: .075, mixBlendMode: 'soft-light', pointerEvents: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 180 180\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'.9\'/%3E%3C/svg%3E")'}} />
);

const Backdrop = ({tone = 'dark'}: {tone?: 'dark' | 'light'}) => (
  <AbsoluteFill style={{
    overflow: 'hidden',
    background: tone === 'dark' ? C.ink : C.cream,
  }}>
    <div style={{position: 'absolute', width: 980, height: 980, borderRadius: '50%', left: -300, top: -530, background: `radial-gradient(circle, ${tone === 'dark' ? '#9fc9aa' : '#d6e7cc'} 0%, transparent 68%)`, filter: 'blur(30px)', opacity: tone === 'dark' ? .22 : .46}} />
    <div style={{position: 'absolute', width: 900, height: 900, borderRadius: '50%', right: -400, bottom: -470, background: `radial-gradient(circle, ${tone === 'dark' ? '#7c9e8e' : '#cbdacb'} 0%, transparent 66%)`, filter: 'blur(24px)', opacity: tone === 'dark' ? .17 : .32}} />
    <Grain />
  </AbsoluteFill>
);

const Mark = ({size = 160, color = C.sage, exploded = 0}: {size?: number; color?: string; exploded?: number}) => (
  <svg viewBox="0 0 162.86 142.3" width={size} height={size * (142.3 / 162.86)} style={{overflow: 'visible'}}>
    {modules.map((m, i) => {
      const offsets = [[0, -28], [22, -12], [24, 4], [-25, 7], [-3, 25], [-20, 24]][i];
      return <path key={i} d={m.d} transform={`translate(${m.x + offsets[0] * exploded} ${m.y + offsets[1] * exploded}) scale(${m.sx} ${m.sy})`} fill={color} />;
    })}
  </svg>
);

const Eyebrow = ({children, dark = true}: {children: React.ReactNode; dark?: boolean}) => (
  <div style={{fontSize: 16, letterSpacing: '0.19em', textTransform: 'uppercase', fontWeight: 600, color: dark ? 'rgba(245,242,236,.58)' : C.sageDeep}}>{children}</div>
);

const KineticTitle = ({children, active, size = 136, color = C.cream}: {children: React.ReactNode; active: number; size?: number; color?: string}) => (
  <div style={{...fadeStyle(active, 40), fontFamily: 'Arial, Helvetica, sans-serif', fontSize: size, fontWeight: 700, letterSpacing: '-.065em', lineHeight: .88, color, textAlign: 'center', maxWidth: 1500}}>{children}</div>
);

const Opening = ({frame}: {frame: number}) => {
  const active = scene(frame, 0, 105);
  const markProgress = enter(frame, 8, 42);
  const title = enter(frame, 40, 20) * leave(frame, 85, 14);
  const sub = enter(frame, 57, 16) * leave(frame, 90, 12);
  return <AbsoluteFill style={{opacity: active}}>
    <Backdrop />
    <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 42}}>
        <div style={{opacity: markProgress, transform: `scale(${.72 + markProgress * .28}) rotate(${(1 - markProgress) * -7}deg)`}}><Mark size={210} exploded={1 - markProgress} /></div>
        <div style={{...fadeStyle(title, 22), fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 102, fontWeight: 700, letterSpacing: '.12em', lineHeight: .8, color: C.cream, paddingLeft: '.12em'}}>SOTRAYA</div>
        <div style={{...fadeStyle(sub, 12), fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 22, letterSpacing: '.04em', color: 'rgba(245,242,236,.64)'}}>LES SYSTÈMES QUI FONT AVANCER VOTRE ENTREPRISE</div>
      </div>
    </div>
  </AbsoluteFill>;
};

const Problem = ({frame}: {frame: number}) => {
  const active = scene(frame, 90, 235);
  const a = word(frame, 106, 153);
  const b = word(frame, 148, 197);
  const c = word(frame, 192, 232);
  return <AbsoluteFill style={{opacity: active}}>
    <Backdrop />
    <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18}}>
        <KineticTitle active={a} size={124}>Vous n'avez pas besoin</KineticTitle>
        <KineticTitle active={b} size={124} color={C.sage}>d'un nouvel outil.</KineticTitle>
        <div style={{height: 30}} />
        <KineticTitle active={c} size={72} color="rgba(245,242,236,.72)">Vous avez besoin que les vôtres travaillent ensemble.</KineticTitle>
      </div>
    </div>
  </AbsoluteFill>;
};

const Tool = ({label, x, y, rotation, progress, index}: {label: string; x: number; y: number; rotation: number; progress: number; index: number}) => {
  const own = clamp(progress, index * 11, 22);
  const target = [[-540, -210], [-250, 270], [55, -255], [375, 215], [560, -90]][index];
  const px = x + (target[0] - x) * own;
  const py = y + (target[1] - y) * own;
  return <div style={{position: 'absolute', left: '50%', top: '50%', transform: `translate(calc(-50% + ${px}px), calc(-50% + ${py}px)) rotate(${rotation * (1 - own)}deg) scale(${.88 + own * .12})`, opacity: Math.min(1, own * 1.5), padding: '22px 27px', border: `1px solid rgba(191,214,194,${.22 + own * .5})`, color: C.cream, background: 'rgba(28,28,25,.84)', boxShadow: '0 18px 40px rgba(0,0,0,.23)', backdropFilter: 'blur(12px)', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 600, fontSize: 24, letterSpacing: '-.03em'}}>{label}</div>;
};

const Connection = ({frame}: {frame: number}) => {
  const active = scene(frame, 215, 375);
  // This scene has five staggered arrivals; use a 0–100 timeline so each
  // source can keep its own readable delay rather than appearing at once.
  const p = clamp(frame, 230, 108) * 100;
  const captions = enter(frame, 248, 18) * leave(frame, 346, 18);
  const labels = ['CRM', 'DEVIS', 'CALENDRIER', 'EMAIL', 'DOCUMENTS'];
  const origins = [[-620,-180], [-360,280], [50,-340], [415,275], [650,-95]];
  return <AbsoluteFill style={{opacity: active}}>
    <Backdrop />
    <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <svg width="1500" height="750" viewBox="0 0 1500 750" style={{position: 'absolute', overflow: 'visible'}}>
        {origins.map((o, i) => {
          const reach = clamp(p, i * 13 + 8, 30);
          return <path key={i} d={`M ${750 + o[0]} ${375 + o[1]} C ${750 + o[0] * .38} ${375 + o[1] * .42}, ${750 + o[0] * .13} ${375 + o[1] * .13}, 750 375`} fill="none" stroke={C.sage} strokeWidth="2" strokeDasharray="5 9" strokeDashoffset={(1 - reach) * 200} opacity={reach * .8} />;
        })}
      </svg>
      {labels.map((label, i) => <Tool key={label} label={label} x={origins[i][0]} y={origins[i][1]} rotation={[-12,8,-4,11,-8][i]} progress={p} index={i} />)}
      <div style={{position: 'relative', zIndex: 2, opacity: clamp(p, 70, 23), transform: `scale(${.78 + clamp(p, 70, 23) * .22})`}}><Mark size={220} /></div>
      <div style={{position: 'absolute', bottom: 105, textAlign: 'center', ...fadeStyle(captions, 14)}}><Eyebrow>Connecter ce qui est dispersé</Eyebrow></div>
    </div>
  </AbsoluteFill>;
};

const StepCard = ({i, title, destination, frame}: {i: number; title: string; destination: string; frame: number}) => {
  const p = enter(frame, 385 + i * 16, 20) * leave(frame, 538, 15);
  return <div style={{width: 246, minHeight: 162, padding: 22, border: '1px solid rgba(245,242,236,.16)', background: `rgba(245,242,236,${.03 + p * .055})`, opacity: p, transform: `translateY(${(1-p)*26}px)`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
    <div style={{fontFamily: 'monospace', letterSpacing: '.14em', fontSize: 13, color: C.sage}}>0{i + 1}</div>
    <div style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 26, lineHeight: 1.04, fontWeight: 600, letterSpacing: '-.045em', color: C.cream}}>{title}</div>
    <div style={{fontFamily: 'monospace', letterSpacing: '.1em', fontSize: 12, color: 'rgba(245,242,236,.48)', textTransform: 'uppercase'}}>{destination}</div>
  </div>;
};

const Workflow = ({frame}: {frame: number}) => {
  const active = scene(frame, 355, 565);
  const title = enter(frame, 365, 20) * leave(frame, 520, 15);
  const pulse = clamp(frame, 390, 110);
  const steps = [['Crée le client', 'CRM'], ['Génère le dossier', 'Espace client'], ['Prépare les documents', 'Documents'], ['Envoie l’onboarding', 'Email'], ['Prévient l’équipe', 'Notification'], ['Programme le suivi', 'Agenda']];
  return <AbsoluteFill style={{opacity: active}}>
    <Backdrop />
    <div style={{position: 'absolute', top: 110, left: 120, right: 120, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', ...fadeStyle(title)}}>
      <div><Eyebrow>Un système, en conditions réelles</Eyebrow><div style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 70, fontWeight: 700, letterSpacing: '-.06em', color: C.cream, marginTop: 22}}>Un déclencheur.<br />Six actions.</div></div>
      <div style={{border: '1px solid rgba(191,214,194,.32)', color: C.sage, padding: '13px 18px', fontFamily: 'monospace', fontSize: 13, letterSpacing: '.13em'}}>● EN LIGNE</div>
    </div>
    <div style={{position: 'absolute', left: 120, right: 120, bottom: 120, display: 'flex', alignItems: 'center', gap: 26}}>
      <div style={{width: 255, minHeight: 162, border: `1px solid rgba(191,214,194,${.28 + pulse * .34})`, padding: 22, background: 'rgba(191,214,194,.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div style={{fontFamily: 'monospace', color: C.sage, fontSize: 13, letterSpacing: '.13em'}}>DÉCLENCHEUR</div><div style={{fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: 30, letterSpacing: '-.05em', color: C.cream}}>Nouveau<br />client</div><div style={{fontSize: 14, color: 'rgba(245,242,236,.5)'}}>Contrat signé</div></div>
      <div style={{height: 2, flex: 1, background: 'rgba(191,214,194,.2)', position: 'relative'}}><div style={{position: 'absolute', top: -5, left: `${pulse * 100}%`, width: 12, height: 12, borderRadius: '50%', background: C.sage, boxShadow: '0 0 20px 7px rgba(191,214,194,.26)'}} /></div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 246px)', gap: 14}}>{steps.map(([title, destination], i) => <StepCard key={title} i={i} title={title} destination={destination} frame={frame} />)}</div>
    </div>
  </AbsoluteFill>;
};

const CaseStudy = ({frame}: {frame: number}) => {
  const active = scene(frame, 545, 725);
  const p = enter(frame, 562, 28) * leave(frame, 700, 18);
  const image = staticFile('visuals/maison-awl-operations-v3-1920.jpg');
  const quote = enter(frame, 600, 20) * leave(frame, 700, 17);
  return <AbsoluteFill style={{opacity: active}}>
    <Backdrop tone="light" />
    <div style={{position: 'absolute', left: 110, top: 100, ...fadeStyle(p)}}><Eyebrow dark={false}>Système en production / Maison AWL</Eyebrow><div style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 76, fontWeight: 700, lineHeight: .92, letterSpacing: '-.065em', color: C.ink, marginTop: 24}}>Plus de structure.<br />Plus de temps pour créer.</div></div>
    <div style={{position: 'absolute', right: 110, bottom: 110, width: 930, height: 520, background: C.paper, overflow: 'hidden', boxShadow: '0 32px 70px rgba(17,17,15,.18)', opacity: p, transform: `perspective(1400px) rotateY(${-5 + p * 5}deg) rotateX(${4 - p * 4}deg) translateY(${(1-p)*45}px)`}}><Img src={image} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}} /></div>
    <div style={{position: 'absolute', left: 110, bottom: 120, width: 540, padding: '27px 30px', background: C.ink, color: C.cream, ...fadeStyle(quote)}}><div style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 27, fontWeight: 600, letterSpacing: '-.04em', lineHeight: 1.08}}>« L’opérationnel prend moins de place. La création reprend la sienne. »</div><div style={{fontFamily: 'monospace', marginTop: 20, color: C.sage, fontSize: 12, letterSpacing: '.12em'}}>MAISON AWL</div></div>
  </AbsoluteFill>;
};

const Ownership = ({frame}: {frame: number}) => {
  const active = scene(frame, 700, 900);
  const a = word(frame, 715, 770);
  const b = word(frame, 752, 808);
  const c = word(frame, 790, 840);
  const end = enter(frame, 832, 26);
  return <AbsoluteFill style={{opacity: active}}>
    <Backdrop />
    <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18}}>
        <KineticTitle active={a} size={108}>Vos comptes.</KineticTitle>
        <KineticTitle active={b} size={108}>Vos données.</KineticTitle>
        <KineticTitle active={c} size={108} color={C.sage}>Vos workflows.</KineticTitle>
      </div>
      <div style={{position: 'absolute', bottom: 88, display: 'flex', alignItems: 'center', gap: 22, ...fadeStyle(end, 16)}}><Mark size={60} /><div><div style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 33, fontWeight: 700, letterSpacing: '.08em', color: C.cream}}>SOTRAYA</div><div style={{fontFamily: 'monospace', fontSize: 13, color: 'rgba(245,242,236,.55)', letterSpacing: '.12em', marginTop: 7}}>SOTRAYA.COM</div></div></div>
    </div>
  </AbsoluteFill>;
};

export const SotrayaFilm = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();
  return <AbsoluteFill style={{width, height, overflow: 'hidden', fontFamily: 'Arial, Helvetica, sans-serif'}}>
    <Opening frame={frame} />
    <Problem frame={frame} />
    <Connection frame={frame} />
    <Workflow frame={frame} />
    <CaseStudy frame={frame} />
    <Ownership frame={frame} />
  </AbsoluteFill>;
};
