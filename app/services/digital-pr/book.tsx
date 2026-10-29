'use client';

import {openBookCall} from '@/components/booking/BookCall';
import {C_HREF, C_LABEL} from './copy';

export function BookLink({className}: {className: string}) {
 return (
  <a className={className} href={C_HREF} onClick={(e) => { e.preventDefault(); openBookCall(); }}>
   {C_LABEL}
  </a>
 );
}
