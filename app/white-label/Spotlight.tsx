'use client';
import {useEffect} from 'react';
/** Sets --mx/--my on white-label service cards for a pointer-following glow. Fine pointers only. */
export function Spotlight(){
 useEffect(()=>{
  if(!matchMedia('(pointer:fine)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  let raf=0,el:HTMLElement|null=null,x=0,y=0;
  const move=(e:PointerEvent)=>{
   const t=(e.target as Element|null)?.closest<HTMLElement>('.white-label-page .wl-spot');if(!t)return;
   const r=t.getBoundingClientRect();el=t;x=e.clientX-r.left;y=e.clientY-r.top;
   if(!raf)raf=requestAnimationFrame(()=>{raf=0;el?.style.setProperty('--mx',x+'px');el?.style.setProperty('--my',y+'px')});
  };
  document.addEventListener('pointermove',move,{passive:true});
  return()=>{document.removeEventListener('pointermove',move);cancelAnimationFrame(raf)};
 },[]);
 return null;
}
