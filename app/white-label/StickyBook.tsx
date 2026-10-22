'use client';
import {useEffect,useState} from 'react';
import {BookBtn} from '../inner/kit';

/** Mobile-only sticky "Book a call" bar: appears once the hero leaves view, hides while the closing CTA or footer is on screen. */
export function StickyBook(){
 const [show,setShow]=useState(false);
 useEffect(()=>{
  const hero=document.querySelector('.white-label-page .ip-hero');
  const ends=[...document.querySelectorAll('.ip-cta-wrap, footer.site-footer')];
  if(!hero)return;
  let heroOut=false;const vis=new Set<Element>();
  const io=new IntersectionObserver(es=>{
   for(const e of es){
    if(e.target===hero)heroOut=!e.isIntersecting&&e.boundingClientRect.top<0;
    else if(e.isIntersecting)vis.add(e.target);else vis.delete(e.target);
   }
   setShow(heroOut&&vis.size===0);
  });
  io.observe(hero);ends.forEach(el=>io.observe(el));
  return()=>io.disconnect();
 },[]);
 return <div className={`wl-sticky${show?' is-on':''}`} aria-hidden={!show} inert={!show}>
  <BookBtn>Book a call</BookBtn>
 </div>;
}
