'use client';

import {useEffect, useRef, type ReactNode} from 'react';

/** Sticky report scene. Highlights the panel that matches the annotation in view. */
export function ReportScene({children}: {children: ReactNode}) {
 const ref = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const root = ref.current;
  if (!root) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const narrow = matchMedia('(max-width: 860px)').matches;
  if (reduced || narrow) return;
  const rep = root.querySelector<HTMLElement>('.repx');
  const anns = [...root.querySelectorAll<HTMLElement>('.an')];
  if (!rep || !anns.length) return;
  const set = (r: string) => {
   rep.dataset.a = r;
   anns.forEach(a => a.classList.toggle('on', a.dataset.r === r));
  };
  const io = new IntersectionObserver(entries => {
   entries.forEach(entry => {
    if (entry.isIntersecting) set((entry.target as HTMLElement).dataset.r || 't');
   });
  }, {rootMargin: '-45% 0px -45% 0px'});
  anns.forEach(a => io.observe(a));
  return () => io.disconnect();
 }, []);
 return <div className="sc" ref={ref}>{children}</div>;
}
