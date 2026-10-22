/** Decorative Gate art for /white-label (inline SVG, no request). Geometry traced from nakama-gate-mark.png. */
const GATE='M0 374V171.5A171.5 171.5 0 0 1 343 171.5V374H247V171.5A75.5 75.5 0 0 0 96 171.5V374Z';
export function HeroGate(){
 return <div className="wl-hero-art" aria-hidden="true">
  <svg viewBox="0 0 560 560" focusable="false" aria-hidden="true">
   <defs><radialGradient id="wlg-g" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#f07c32" stopOpacity=".55"/><stop offset="1" stopColor="#f07c32" stopOpacity="0"/></radialGradient>
   <linearGradient id="wlg-f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f3f1ed"/><stop offset="1" stopColor="#f3f1ed" stopOpacity="0"/></linearGradient></defs>
   <g fill="none" stroke="#f3f1ed" strokeWidth="1">
    <path className="wlg-r wlg-r3" d="M40 560V280A240 240 0 0 1 520 280V560"/>
    <path className="wlg-r wlg-r2" d="M80 560V280A200 200 0 0 1 480 280V560"/>
    <path className="wlg-r wlg-r1" d="M120 560V280A160 160 0 0 1 440 280V560"/>
   </g>
   <g transform="translate(108.5 108.5)"><path className="wlg-gate" fill="url(#wlg-f)" d={GATE}/></g>
   <circle className="wlg-glow" cx="280" cy="280" r="130" fill="url(#wlg-g)"/>
   <circle className="wlg-dot" cx="280" cy="280" r="41.5" fill="#f07c32"/>
  </svg>
 </div>;
}
export function CtaGate(){
 return <div className="wl-cta-gate" aria-hidden="true">
  <span className="wl-cta-glow"/>
  <svg viewBox="0 0 343 374" focusable="false" aria-hidden="true"><path fill="none" stroke="#f3f1ed" strokeOpacity=".14" strokeWidth="1.5" d={GATE}/><circle className="wlc-dot" cx="171.5" cy="171.5" r="41.5" fill="#f07c32"/></svg>
 </div>;
}
