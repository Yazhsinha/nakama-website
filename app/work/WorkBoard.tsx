"use client";
import {useEffect,useRef,useState} from 'react';
import {ArrowUpRight,Check,Copy,Newspaper} from 'lucide-react';
import type {ReactNode} from 'react';
import {engineMarks,sourceMarks} from '../hero-marks';
import {proofClients} from '../proof-data';

const LOGO:Record<string,string>={'Synup':'/clients/color/synup.svg','Inventive AI':'/clients/color/inventive.png','HubEngage':'/clients/color/hubengage.png','StarAgile':'/clients/color/staragile.png','BacklinkOS':'/clients/color/backlinkos.png'};
const SECTOR:Record<string,string>={'Synup':'Local listings software','Inventive AI':'AI RFP software','HubEngage':'Internal communications','StarAgile':'Professional certification','BacklinkOS':'Backlink management'};

function engineOf(platform:string):{k:string;l:ReactNode}{
 const p=platform.toLowerCase();
 if(p.startsWith('perplexity'))return {k:'perplexity',l:engineMarks.perplexity};
 if(p.startsWith('chatgpt'))return {k:'chatgpt',l:engineMarks.chatgpt};
 if(p.startsWith('youtube'))return {k:'youtube',l:sourceMarks.YouTube};
 if(p.startsWith('google'))return {k:'google',l:engineMarks.google};
 return {k:'editorial',l:<Newspaper size={20} strokeWidth={1.8}/>};
}

function runLink(platform:string,q:string):{href:string;label:string}{
 const p=platform.toLowerCase(),e=encodeURIComponent(q);
 if(p.startsWith('perplexity'))return {href:`https://www.perplexity.ai/search?q=${e}`,label:'Run it on Perplexity'};
 if(p.startsWith('chatgpt'))return {href:`https://chatgpt.com/?q=${e}`,label:'Run it on ChatGPT'};
 if(p.startsWith('youtube'))return {href:`https://www.youtube.com/results?search_query=${e}`,label:'Run it on YouTube'};
 if(p.includes('ai mode'))return {href:`https://www.google.com/search?udm=50&q=${e}`,label:'Run it in AI Mode'};
 return {href:`https://www.google.com/search?q=${e}`,label:'Run it on Google'};
}

function Typed({text}:{text:string}){
 const [n,setN]=useState(0);
 useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){setN(text.length);return;}
  setN(0);let i=0;const t=setInterval(()=>{i+=1;setN(i);if(i>=text.length)clearInterval(t);},22);return()=>clearInterval(t);
 },[text]);
 return <>{text.slice(0,n)}<span className={`wb-caret${n>=text.length?' done':''}`} aria-hidden="true"/></>;
}

export function WorkBoard(){
 const [active,setActive]=useState(1);
 const [copied,setCopied]=useState<string|null>(null);
 const tabsRef=useRef<HTMLDivElement>(null);
 const [pill,setPill]=useState({x:0,w:0});

 useEffect(()=>{const c=new URLSearchParams(location.search).get('client');const i=proofClients.findIndex(p=>p.name===c);if(i>=0)setActive(i);},[]);
 useEffect(()=>{
  const place=()=>{const el=tabsRef.current?.querySelectorAll<HTMLButtonElement>('button')[active];if(el)setPill({x:el.offsetLeft,w:el.offsetWidth});};
  place();window.addEventListener('resize',place);return()=>window.removeEventListener('resize',place);
 },[active]);

 const c=proofClients[active];
 const copy=async(q:string)=>{try{await navigator.clipboard.writeText(q);}catch{}setCopied(q);setTimeout(()=>setCopied(null),1600);};

 return <div className="wb">
  <div className="wb-tabs-scroll">
   <div className="wb-tabs" ref={tabsRef} role="tablist" aria-label="Client">
    <span className="wb-pill" style={{transform:`translateX(${pill.x}px)`,width:pill.w}} aria-hidden="true"/>
    {proofClients.map((p,i)=><button key={p.name} role="tab" aria-selected={i===active} className={i===active?'on':''} onClick={()=>setActive(i)}>
     <img src={LOGO[p.name]} alt=""/><span>{p.name}</span>
    </button>)}
   </div>
  </div>

  <div className="wb-stage" key={c.name}>
   <aside className="wb-client">
    <span className="wb-logo"><img src={LOGO[c.name]} alt=""/></span>
    <span className="wb-sector">{SECTOR[c.name]}</span>
    <h3>{c.name}</h3>
    <p>{c.description}</p>
    <dl className="wb-meta">
     <div><dt>Documented</dt><dd>{c.entries.length} placements</dd></div>
     <div><dt>Surfaces</dt><dd>{[...new Set(c.entries.map(e=>e.platform.split(' · ')[0]))].join(', ')}</dd></div>
    </dl>
   </aside>
   <ol className="wb-list">
    {c.entries.map((e,i)=>{const eng=engineOf(e.platform);return <li key={e.query+i} className="wb-row" style={{animationDelay:`${80+i*90}ms`}}>
     <span className={`wb-engine e-${eng.k}`} title={e.platform.split(' · ')[0]} aria-hidden="true">{eng.l}</span>
     <div className="wb-body">
      <span className="wb-platform">{e.platform}</span>
      <div className="wb-query"><span className="wb-q-ico" aria-hidden="true">⌕</span><span><Typed text={e.query}/></span></div>
      <p>{e.description}</p>
      <div className="wb-actions">
       <button type="button" onClick={()=>copy(e.query)}>{copied===e.query?<><Check size={14}/>Copied</>:<><Copy size={14}/>Copy query</>}</button>
       {(()=>{const r=runLink(e.platform,e.query);return <a href={r.href} target="_blank" rel="noreferrer">{r.label}<ArrowUpRight size={14}/></a>;})()}
      </div>
     </div>
    </li>;})}
   </ol>
  </div>
  <p className="wb-note">Captured when each placement went live. Live answers vary by location, account and date.</p>
 </div>;
}
