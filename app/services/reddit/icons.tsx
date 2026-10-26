import type {ReactNode} from 'react';

/** Module marks from the Gohan v1.7 Reddit pack. Stroke follows currentColor; the Ember dot is baked in. */
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

export type ModIconName = 'comment' | 'post' | 'create' | 'manage' | 'account' | 'niche';

const marks: Record<ModIconName, ReactNode> = {
 comment: (
  <>
   <path d="M5 6h14v9H10l-4 3.5V15H5z" />
   <path d="M8.5 9.5h7M8.5 12h4" />
   <circle cx="17" cy="6" r="1.4" fill="#f07c32" stroke="none" />
  </>
 ),
 post: (
  <>
   <rect x="5" y="4" width="14" height="16" rx="2" />
   <path d="M8.5 9h7M8.5 12.5h7M8.5 16h4" />
   <circle cx="17" cy="4" r="1.4" fill="#f07c32" stroke="none" />
  </>
 ),
 create: (
  <>
   <circle cx="12" cy="12" r="7.5" />
   <path d="M12 8.5v7M8.5 12h7" />
   <circle cx="17.3" cy="6.7" r="1.4" fill="#f07c32" stroke="none" />
  </>
 ),
 manage: (
  <>
   <path d="M12 3.5l7 3v5c0 4.2-3 7.4-7 9-4-1.6-7-4.8-7-9v-5z" />
   <path d="M9 12l2 2 4-4" />
   <circle cx="19" cy="6.5" r="1.4" fill="#f07c32" stroke="none" />
  </>
 ),
 account: (
  <>
   <circle cx="12" cy="9" r="3.5" />
   <path d="M5.5 19.5c1-3.3 3.6-5 6.5-5s5.5 1.7 6.5 5" />
   <circle cx="17.5" cy="5.5" r="1.4" fill="#f07c32" stroke="none" />
  </>
 ),
 niche: (
  <>
   <circle cx="7" cy="8" r="2.5" />
   <circle cx="17" cy="8" r="2.5" />
   <circle cx="12" cy="17" r="2.5" />
   <path d="M9 9.5l2 5.3M15 9.5l-2 5.3M9.5 8h5" />
   <circle cx="12" cy="17" r="1.4" fill="#f07c32" stroke="none" />
  </>
 ),
};

export function ModIcon({name}: {name: ModIconName}) {
 return <svg {...svgProps}>{marks[name]}</svg>;
}
