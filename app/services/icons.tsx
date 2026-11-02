/** Gohan service marks. Stroke follows currentColor; the Ember dot is baked in. */
export function SvcIcon({name}: {name: 'geo' | 'aeo' | 'reddit' | 'content' | 'youtube' | 'digital-pr' | 'ai-visibility-audit'}) {
 switch (name) {
  case 'geo':
   return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
     <path d="M9 17v-5.25a3 3 0 0 1 6 0V17"/>
     <circle cx="4.75" cy="5" r="1.75"/>
     <circle cx="19.25" cy="5" r="1.75"/>
     <path d="M6.1 6.3 9.3 9.4M17.9 6.3l-3.2 3.1M7 19.75h10"/>
     <circle cx="12" cy="12.6" r="1.45" fill="#f07c32" stroke="none"/>
    </svg>
   );
  case 'aeo':
   return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
     <path d="M5.5 3.75h13a2.25 2.25 0 0 1 2.25 2.25v8.25a2.25 2.25 0 0 1-2.25 2.25H12l-4.25 3.75V16.5H5.5a2.25 2.25 0 0 1-2.25-2.25V6A2.25 2.25 0 0 1 5.5 3.75z"/>
     <path d="M10.5 8.5h6.25M7.25 12.25h9.5"/>
     <circle cx="7.4" cy="8.5" r="1.5" fill="#f07c32" stroke="none"/>
    </svg>
   );
  case 'reddit':
   return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
     <circle cx="5.25" cy="5" r="2"/>
     <path d="M10 5h10M5.25 7v1.5a3 3 0 0 0 3 3H9.5M5.25 8.5V15a3 3 0 0 0 3 3H9.5M14.75 11.5H20M14.75 18H20"/>
     <circle cx="12" cy="11.5" r="2"/>
     <circle cx="12" cy="18" r="2" fill="#f07c32" stroke="none"/>
    </svg>
   );
  case 'content':
   return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
     <rect x="4.75" y="3" width="14.5" height="18" rx="2.5"/>
     <path d="M8 7.25h8M11 11h5M8 14.5h8M8 17.5h5"/>
     <circle cx="8.6" cy="11" r="1.35" fill="#f07c32" stroke="none"/>
    </svg>
   );
  case 'youtube':
   return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
     <rect x="3" y="4" width="18" height="13" rx="2.75"/>
     <path d="M10.25 8.4v5.2l4.4-2.6z"/>
     <path d="M8.5 20.5h7"/>
     <circle cx="17.5" cy="7.4" r="1.1" fill="#f07c32" stroke="none"/>
    </svg>
   );
  case 'ai-visibility-audit':
   return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
     <rect x="4.5" y="3.25" width="15" height="17.5" rx="2.25"/>
     <path d="M8 8h8M8 11.5h8M8 15h4.5"/>
     <circle cx="16.2" cy="16.4" r="1.35" fill="#f07c32" stroke="none"/>
    </svg>
   );
  case 'digital-pr':
   return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
     <path d="M4 20.5V11a5 5 0 0 1 10 0v9.5M2.75 20.5h12.5"/>
     <path d="M14 9.5c1.6-.2 3-1.2 3.75-2.6"/>
     <circle cx="19" cy="4.75" r="2"/>
     <circle cx="9" cy="12" r="1.5" fill="#f07c32" stroke="none"/>
    </svg>
   );
 }
}
