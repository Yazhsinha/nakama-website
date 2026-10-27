import type {ReactNode} from 'react';

/** Format marks from the Gohan content visual v1.1. Stroke follows currentColor; the Ember dot is baked in. */
const svgProps = {
 xmlns: 'http://www.w3.org/2000/svg',
 viewBox: '0 0 24 24',
 width: 24,
 height: 24,
 fill: 'none',
 stroke: 'currentColor',
 strokeWidth: 1.75,
 strokeLinecap: 'round' as const,
 strokeLinejoin: 'round' as const,
 'aria-hidden': true as const,
 focusable: false as const,
};

export type ModIconName = 'listicle' | 'compare' | 'alternatives' | 'guide' | 'article';

const marks: Record<ModIconName, ReactNode> = {
 listicle: (
  <>
   <circle cx="10.5" cy="10.5" r="6" />
   <path d="m15 15 4.75 4.75M8 10.5h5" />
   <circle cx="10.5" cy="10.5" r="1.4" fill="#f07c32" stroke="none" />
  </>
 ),
 compare: (
  <>
   <path d="M9 19V11.75a3 3 0 0 1 6 0V19M5 19h14M7 5h10" />
   <circle cx="12" cy="8.2" r="1.4" fill="#f07c32" stroke="none" />
  </>
 ),
 alternatives: (
  <>
   <circle cx="5" cy="6" r="1.75" />
   <circle cx="19" cy="6" r="1.75" />
   <circle cx="5" cy="18" r="1.75" />
   <path d="M6.4 7.2 10.6 11M17.6 7.2 13.4 11M6.4 16.8l4.2-3.8M14 12h5" />
   <circle cx="12" cy="12" r="1.5" fill="#f07c32" stroke="none" />
  </>
 ),
 guide: (
  <>
   <path d="M4 6.5h9M4 11.5h6M4 16.5h8" />
   <path d="M15.5 13.5 20 9l-2-2-4.5 4.5V13.5z" />
   <circle cx="18.5" cy="17.5" r="1.5" fill="#f07c32" stroke="none" />
  </>
 ),
 article: (
  <>
   <rect x="5" y="4" width="14" height="16" rx="2" />
   <path d="M8.5 9h7M8.5 12.5h7M8.5 16h4" />
   <circle cx="17" cy="4" r="1.4" fill="#f07c32" stroke="none" />
  </>
 ),
};

export function ModIcon({name}: {name: ModIconName}) {
 return <svg {...svgProps}>{marks[name]}</svg>;
}
