"use client";
import {useCallback,useEffect,useRef,useState} from 'react';
import {Check,Newspaper} from 'lucide-react';
import {sourceMarks} from '../hero-marks';

const DURATION=7000;

const stages=[
 {n:'01',when:'Weeks 1 – 2',name:'Understand',short:'Map the questions buyers ask',p:'We start where your buyers talk: the threads, reviews, comparison videos and AI answers they read before they shortlist. We map the exact prompts they use and where you, and your competitors, appear today.',deliv:['Buyer prompt map across ChatGPT, Perplexity, Gemini and Google','Competitor and source audit','Priority gaps and a 90-day plan']},
 {n:'02',when:'Weeks 2 – 4',name:'Create',short:'Write answers worth quoting',p:'Every piece is written to an editor’s standard and built to earn its place: answer-first articles, honest comparisons, community answers and video scripts, all reviewed by your team before they go live.',deliv:['Editorial calendar tied to real prompts','Articles, comparisons and buyer guides','Video scripts and community answers']},
 {n:'03',when:'Month 2 onward',name:'Place',short:'Publish where attention sits',p:'We publish where people already research: Reddit, Quora, YouTube, Medium, Substack, LinkedIn, G2 and the editorial sources AI engines read, openly and within each platform’s rules.',deliv:['Placements across 12+ platforms','Transparent community participation','Digital PR and editorial outreach']},
 {n:'04',when:'Every month',name:'Prove',short:'Measure, keep, improve',p:'We re-run your prompts, track every citation and mention, and show you the evidence. What works gets more effort, and what doesn’t gets cut. Each cycle builds on the last.',deliv:['Monthly evidence report','Citations and mentions by engine and prompt','Next moves, agreed together']},
] as const;

function Visual({i}:{i:number}){
 if(i===0) return <div className="ps-vis v-understand" aria-hidden="true">
  {['best CRM for a small real estate team','Yext alternatives','best payroll software for startups','dentist open on Sunday','HubSpot vs Pipedrive','best sunscreen for oily skin','boutique hotels in Goa'].map((q,k)=><span key={q} className="ps-chipq" style={{animationDelay:`${k*120}ms`}}>{q}</span>)}
 </div>;
 if(i===1) return <div className="ps-vis v-create" aria-hidden="true">
  {[0,1,2].map(k=><div key={k} className="ps-doc" style={{animationDelay:`${k*140}ms`,['--r' as string]:`${(k-1)*5}deg`,['--o' as string]:`${(k-1)*26}px`}}>
   <i className="h"/><i/><i/><i className="s"/><i/><i className="s"/>
  </div>)}
 </div>;
 if(i===2) return <div className="ps-vis v-place" aria-hidden="true">
  <span className="ps-core"><img src="/brand/nakama-icon-dark.svg" alt=""/></span>
  <span className="ps-ring r1"/><span className="ps-ring r2"/>
  {['Reddit','YouTube','Quora','Medium','LinkedIn','G2','Substack','Editorial'].map((p,k)=><span key={p} className="ps-sat" style={{['--a' as string]:`${k*45}deg`,['--d' as string]:k%2?'1':'.82',animationDelay:`${k*70}ms`}}><i className="ps-sat-ico">{p==='Editorial'?<Newspaper size={12}/>:sourceMarks[p]}</i>{p}</span>)}
 </div>;
 return <div className="ps-vis v-prove" aria-hidden="true">
  <div className="ps-bars">{[28,36,34,48,55,63,72,84].map((h,k)=><span key={k} style={{['--h' as string]:`${h}%`,animationDelay:`${k*70}ms`}}/>)}</div>
  <div className="ps-legend"><b>AI mentions, month by month</b></div>
 </div>;
}

export function ProcessStepper(){
 const [active,setActive]=useState(0);
 const [inView,setInView]=useState(false);
 const [hold,setHold]=useState(false);
 const ref=useRef<HTMLDivElement>(null);
 const bars=useRef<(HTMLElement|null)[]>([]);
 const elapsed=useRef(0);
 const activeRef=useRef(0);
 useEffect(()=>{activeRef.current=active;},[active]);

 useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([e])=>setInView(e.isIntersecting),{threshold:0,rootMargin:'-20% 0px -20% 0px'});io.observe(el);return()=>io.disconnect();},[]);
 // Timer driven in JS so the bar and the step change always stay in sync.
 useEffect(()=>{
  if(!inView||hold||matchMedia("(pointer: coarse), (hover: none), (prefers-reduced-motion: reduce)").matches)return;
  let raf=0,last=performance.now();
  const loop=(now:number)=>{
   if(!document.hidden) elapsed.current+=now-last;
   last=now;
   const pct=Math.min(1,elapsed.current/DURATION);
   const bar=bars.current[activeRef.current];
   if(bar) bar.style.transform=`scaleX(${pct})`;
   if(pct>=1){elapsed.current=0;setActive(a=>(a+1)%stages.length);}
   raf=requestAnimationFrame(loop);
  };
  raf=requestAnimationFrame(loop);
  return()=>cancelAnimationFrame(raf);
 },[inView,hold]);
 useEffect(()=>{bars.current.forEach((b,i)=>{if(b&&i!==active)b.style.transform='scaleX(0)';});},[active]);
 const go=useCallback((i:number)=>{elapsed.current=0;const b=bars.current[i];if(b)b.style.transform='scaleX(0)';setActive(i);},[]);
 const onKey=(e:React.KeyboardEvent)=>{if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();go((active+1)%4);}if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();go((active+3)%4);}};
 const s=stages[active];

 return <div className="ps" ref={ref}>
  <div className="ps-nav" role="tablist" aria-label="Process stages" aria-orientation="vertical" onKeyDown={onKey}>
   {stages.map((st,i)=><button key={st.n} role="tab" aria-selected={i===active} tabIndex={i===active?0:-1} className={`ps-step${i===active?' on':''}${i<active?' done':''}`} onClick={()=>go(i)}>
    <span className="ps-n">{st.n}</span>
    <span className="ps-t"><b>{st.name}</b><small>{st.short}</small></span>
    <span className="ps-bar"><i ref={el=>{bars.current[i]=el;}}/></span>
   </button>)}
  </div>
  <div className="ps-panel" role="tabpanel" aria-live="polite" onMouseEnter={()=>setHold(true)} onMouseLeave={()=>setHold(false)}>
   <div className="ps-panel-in" key={active}>
    <Visual i={active}/>
    <div className="ps-copy">
     <span className="ps-when">{s.when}</span>
     <h3>{s.name}</h3>
     <p>{s.p}</p>
     <ul>{s.deliv.map((d,k)=><li key={d} style={{animationDelay:`${200+k*80}ms`}}><Check size={15}/>{d}</li>)}</ul>
    </div>
   </div>
  </div>
 </div>;
}
