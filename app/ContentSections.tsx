"use client";
import {useEffect,useRef,useState,type CSSProperties,type FormEvent} from 'react';
import {ArrowUpRight,Check,Copy,Search,MessageCircle,Play,FileText,Sparkles,Share2} from 'lucide-react';
import {Tabs,TabsList,TabsTrigger,TabsContent} from '@/components/ui/tabs';
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent} from '@/components/ui/accordion';
import {proofClients} from './proof-data';
import {Booking,Reveal,SectionTitle,Logo} from './site';

export const PROCESS_STEPS=[
 {n:'01',title:'Understand',tag:'Research',label:'Start with the real question.',body:'We read the threads, search the category and learn how your buyers make decisions. The work starts with the gap between what they want to know and what they can currently find.',output:'A focused map of questions, gaps and opportunities.'},
 {n:'02',title:'Create',tag:'Content',label:'Make the answer worth finding.',body:'Turn what we learn into useful articles, comparisons, expert perspectives and videos. Each asset has a job: make something easier to understand, evaluate or act on.',output:'Original, reviewable content grounded in your expertise.'},
 {n:'03',title:'Distribute',tag:'Channels',label:'Meet people where they are.',body:'Adapt the work for search, professional feeds, communities and video. We choose the channel and context carefully, with useful participation and clear disclosure.',output:'Platform-native work, published with purpose.'},
 {n:'04',title:'Prove',tag:'Evidence',label:'Learn from what shows up.',body:'Document citations, mentions and search or video visibility. Look at the gaps as well as the wins — then keep a clear record of what changed.',output:'A clear record of presence and visibility.'},
] as const;

function SceneUnderstand(){
 return (
  <div className="way-scene way-scene-understand">
   <article className="way-piece way-ai" style={{'--ex':'-1','--ey':'-1'} as CSSProperties}>
    <div className="way-ai-head"><span><Sparkles size={12}/> AI answer</span><span className="way-cited"><Check size={11}/> Cited pattern</span></div>
    <p>Buyers comparing AI RFP tools keep asking the same three things: accuracy, workflow fit, and whether they can see the product before a demo.</p>
    <div className="way-ai-sources"><span>reddit.com</span><span>search</span><span>youtube</span></div>
   </article>
   <article className="way-piece way-thread-card" style={{'--ex':'1','--ey':'-0.6'} as CSSProperties}>
    <div className="way-thread-topic"><span className="small-label">Working thread</span><h4>What are buyers trying to solve?</h4></div>
    {([
      ['u/ops_lead','r/saas','2d','Community','Has anyone found a proposal tool our whole team will actually use?'],
      ['Search','Query log','today','Search','How do AI RFP tools keep answers accurate?'],
      ['Product walkthrough','YouTube','1w','Video','Can I see the full workflow before booking a demo?'],
    ] as const).map(([who,where,when,tag,q],i)=>(
     <div className="way-msg" key={q} style={{'--i':i} as CSSProperties}>
      <div className="way-msg-meta"><strong>{who}</strong><span>{where}</span><span>{when}</span><em>{tag}</em></div>
      <p>{q}</p>
     </div>
    ))}
   </article>
   <div className="way-piece way-insight" style={{'--ex':'0','--ey':'1'} as CSSProperties}>
    <Check size={14}/><span>Opportunity map: accuracy trust · workflow adoption · pre-demo understanding</span>
   </div>
  </div>
 );
}

function SceneCreate(){
 return (
  <div className="way-scene way-scene-create">
   <article className="way-piece way-editor" style={{'--ex':'-0.35','--ey':'-0.2'} as CSSProperties}>
    <div className="way-editor-meta"><FileText size={14}/> Buyer guide <span>In development</span></div>
    <h5>How to evaluate an AI RFP platform</h5>
    <p>What a proposal team should test before making a decision — written from real buyer questions, not a feature dump.</p>
    <div className="way-editor-rule"/>
    <ol>
     {['Accuracy, sources and human review — show where answers come from.','Fit with the way your team already works — not another parallel process.','A practical product evaluation checklist buyers can reuse in the room.'].map((item,i)=>(
      <li key={item} style={{'--i':i} as CSSProperties}><Check size={14}/><span>{item}</span></li>
     ))}
    </ol>
    <div className="way-editor-note">
     <span>NK</span>
     <p>Expert pass queued: pull two customer quotes on review workflows before publish.</p>
    </div>
   </article>
   <aside className="way-piece way-brief-side" style={{'--ex':'1','--ey':'0.35'} as CSSProperties}>
    <span className="small-label">Brief</span>
    <strong>Job of the piece</strong>
    <p>Make evaluation easier than booking another demo. One clear answer for the recurring accuracy question.</p>
    <ul>
     <li>Audience: proposal ops leads</li>
     <li>Format: long-form + checklist</li>
     <li>Proof: product screens + expert line</li>
    </ul>
   </aside>
  </div>
 );
}

function SceneDistribute(){
 return (
  <div className="way-scene way-scene-distribute">
   <article className="way-piece way-source" style={{'--ex':'-1','--ey':'-0.15'} as CSSProperties}>
    <FileText size={16}/>
    <div>
     <strong>Source asset</strong>
     <small>How to evaluate an AI RFP platform</small>
    </div>
   </article>
   <div className="way-branches">
    {([
      [Search,'Search','Guide with clear answers on the page','Index + snippet'],
      [MessageCircle,'Community','Helpful contribution in the live thread','Disclose + add value'],
      [Share2,'LinkedIn','Expert perspective from the operator','POV, not a blog dump'],
      [Play,'Video','Practical walkthrough of the workflow','Show, don’t pitch'],
    ] as const).map(([Icon,title,text,meta],i)=>{
     const I=Icon;
     return (
      <div className="way-piece way-branch" key={title} style={{'--ex':'1','--ey':String((i-1.5)/2),'--i':i} as CSSProperties}>
       <I size={15}/>
       <div><strong>{title}</strong><small>{text}</small></div>
       <span>{meta}</span>
      </div>
     );
    })}
   </div>
  </div>
 );
}

function SceneProve(){
 return (
  <div className="way-scene way-scene-prove">
   <article className="way-piece way-evidence-board" style={{'--ex':'0','--ey':'0'} as CSSProperties}>
    <header className="way-ev-head"><span>Signal</span><span>What we captured</span><span>Context</span></header>
    {([
      [Sparkles,'AI citations','Source + answer context','3 observations this cycle'],
      [Search,'Search presence','Query + date','Guide ranking on primary terms'],
      [Play,'Video discovery','Query + result','Walkthrough in related results'],
      [MessageCircle,'Relevant mentions','URL + thread','2 operator discussions cited'],
    ] as const).map(([Icon,a,b,c],i)=>{
     const I=Icon;
     return (
      <div className="way-ev-row" key={a} style={{'--i':i} as CSSProperties}>
       <span className="way-ev-sig"><I size={14}/>{a}</span>
       <span>{b}</span>
       <small>{c}</small>
      </div>
     );
    })}
   </article>
  </div>
 );
}

const SCENES=[SceneUnderstand,SceneCreate,SceneDistribute,SceneProve];

/** Sticky way: left stages + dashed wire + mid-hub workspace that emerges on scroll. */
export function Sequence(){
 const sectionRef=useRef<HTMLElement>(null);
 const stageRef=useRef<HTMLDivElement>(null);
 const railRef=useRef<Array<HTMLButtonElement|null>>([]);
 const workRef=useRef<HTMLDivElement>(null);
 const pathRef=useRef<SVGPathElement>(null);
 const dotRef=useRef<SVGCircleElement>(null);
 const activeRef=useRef(0);
 const [active,setActive]=useState(0);
 const [reduced,setReduced]=useState(false);

 useEffect(()=>{
  const q=matchMedia('(prefers-reduced-motion: reduce)');
  const sync=()=>setReduced(q.matches);
  sync();q.addEventListener('change',sync);
  return()=>q.removeEventListener('change',sync);
 },[]);

 useEffect(()=>{
  const el=sectionRef.current;if(!el)return;
  let raf=0;
  const draw=()=>{
   raf=0;
   const r=el.getBoundingClientRect();
   const travel=Math.max(1,r.height-innerHeight);
   const raw=Math.max(0,Math.min(0.999,(-r.top)/travel));
   const steps=PROCESS_STEPS.length;
   const idx=Math.min(steps-1,Math.floor(raw*steps));
   const local=(raw*steps)-idx;
   const emerge=reduced?1:Math.max(0,Math.min(1,local/0.32));
   const eased=emerge*emerge*(3-2*emerge);
   // CSS only — no React state per frame
   el.style.setProperty('--way-open',String(eased));
   el.style.setProperty('--way-step',String(idx));
   if(idx!==activeRef.current){
    activeRef.current=idx;
    setActive(idx);
   }
   // dashed wire: rail → workspace (layout once per frame, mutate SVG attrs — no setState)
   const stage=stageRef.current;
   const from=railRef.current[idx];
   const to=workRef.current;
   const path=pathRef.current;
   const dot=dotRef.current;
   if(!reduced&&stage&&from&&to&&path&&dot&&stage.offsetWidth>=900){
    const sb=stage.getBoundingClientRect();
    const fb=from.getBoundingClientRect();
    const tb=to.getBoundingClientRect();
    const x1=fb.right-sb.left;
    const y1=fb.top+fb.height/2-sb.top;
    const x2=tb.left-sb.left+18;
    const y2=tb.top+Math.min(56,tb.height*0.12)-sb.top;
    const mid=x1+(x2-x1)*0.55;
    path.setAttribute('d',`M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`);
    path.style.opacity='0.7';
    dot.setAttribute('cx',String(x2));
    dot.setAttribute('cy',String(y2));
    dot.style.opacity='1';
   }else if(path&&dot){
    path.style.opacity='0';
    dot.style.opacity='0';
   }
  };
  const onScroll=()=>{if(!raf)raf=requestAnimationFrame(draw)};
  draw();
  addEventListener('scroll',onScroll,{passive:true});
  addEventListener('resize',onScroll);
  return()=>{cancelAnimationFrame(raf);removeEventListener('scroll',onScroll);removeEventListener('resize',onScroll)};
 },[reduced]);

 const jump=(i:number)=>{
  const el=sectionRef.current;if(!el)return;
  const top=window.scrollY+el.getBoundingClientRect().top;
  const travel=Math.max(1,el.offsetHeight-innerHeight);
  window.scrollTo({top:top+(i+0.1)/PROCESS_STEPS.length*travel,behavior:reduced?'auto':'smooth'});
 };

 const s=PROCESS_STEPS[active]??PROCESS_STEPS[0];
 const Scene=SCENES[active]??SCENES[0];

 return (
  <section
   id="how-we-work"
   className="way-thread"
   ref={sectionRef}
   data-reduced={reduced?'1':'0'}
   aria-label="How we work"
  >
   <div className="way-pin">
    <div className="way-stage page-width" ref={stageRef}>
     <aside className="way-rail" aria-label="Process stages">
      {PROCESS_STEPS.map((step,i)=>(
       <button
        key={step.title}
        type="button"
        ref={el=>{railRef.current[i]=el}}
        className={`way-rail-item${active===i?' on':''}`}
        aria-current={active===i?'step':undefined}
        onClick={()=>jump(i)}
       >
        <span className="way-rail-n">{step.n}</span>
        <span className="way-rail-copy">
         <strong>{step.title}</strong>
         <small>{step.tag}</small>
        </span>
       </button>
      ))}
      <div className="way-rail-note">
       <h3>{s.label}</h3>
       <p>{s.body}</p>
       <p className="way-rail-out"><Check size={14}/>{s.output}</p>
      </div>
     </aside>

     <div className="way-workspace" ref={workRef} aria-live="polite">
      <div className="way-hub" aria-hidden="true">
       <div className="way-hub-core">
        <Logo/>
        <strong>{s.n}</strong>
        <span>{s.title}</span>
       </div>
      </div>
      <div className="way-emerge" key={s.title}>
       <header className="way-work-head">
        <span>Workspace · {s.n}</span>
        <span className="way-work-tag">{s.tag}</span>
       </header>
       <Scene/>
      </div>
     </div>

     {!reduced?(
      <svg className="way-wire" aria-hidden="true">
       <path ref={pathRef} className="way-wire-path"/>
       <circle ref={dotRef} r="4" className="way-wire-dot"/>
      </svg>
     ):null}
    </div>
   </div>
  </section>
 );
}

function CopyQuery({query}:{query:string}){const [status,setStatus]=useState('Copy query');return <button className="copy-query" onClick={async()=>{try{await navigator.clipboard.writeText(query);setStatus('Copied');setTimeout(()=>setStatus('Copy query'),2200)}catch{setStatus('Select the query above to copy')}}}>{status==='Copied'?<Check size={14}/>:<Copy size={14}/>}<span>{status}</span></button>}
export function Proof({client,setClient}:{client:string,setClient:(c:string)=>void}){return <section className="proof content-section" id="cited-proof"><Tabs value={client} onValueChange={setClient}><TabsList className="proof-client-tabs" aria-label="Select a client">{proofClients.map(c=><TabsTrigger value={c.name} key={c.name}>{c.name}</TabsTrigger>)}</TabsList>{proofClients.map(c=><TabsContent value={c.name} key={c.name} className="proof-content"><div className="proof-client-summary"><span className="small-label">{c.name}</span><h3>{c.description}</h3></div><div className="proof-cards">{c.entries.map((e,i)=><article className="proof-card" key={i}><div className="proof-platform"><span>{e.platform}</span><ArrowUpRight size={16}/></div><h4>{e.query}</h4><p>{e.description}</p><CopyQuery query={e.query}/></article>)}</div></TabsContent>)}</Tabs><p className="proof-disclaimer">Historical examples documented in Nakama’s portfolio. Results vary by query, location and time; this is not a live ranking report.</p></section>}

const faqs=[['What does earned visibility mean?','It means building a credible presence through useful content, relevant participation and sources buyers can discover. We work across search, AI-assisted research, communities, editorial and video so your brand has more ways to be found and understood.'],['Who is Nakama a good fit for?','SaaS and software businesses with a clear product and audience, and teams ready to invest consistently in how buyers discover them. We also work with agencies that need specialist strategy, content, video or reporting support.'],['How do you measure the work?','We monitor relevant citations, source presence, search and video visibility, and mentions. We keep the context and evidence through URLs and screenshots, then report what changed, where the gaps remain and what we recommend next.'],['Can you guarantee rankings or AI citations?','No. Search engines and AI platforms decide what they show. We focus on useful work, credible distribution and observable evidence rather than promising a position or citation.'],['What happens after we get in touch?','We learn about your product, audience and current priorities. From there, we can outline the most useful opportunities, an appropriate scope and a clear next step.']];
export function Faq(){return <section className="faq content-section"><SectionTitle label="A little more clarity" title={<>Good questions.<br/><em>Straight answers.</em></>}/><Accordion type="single" collapsible className="faq-list">{faqs.map(([q,a],i)=><AccordionItem value={String(i)} key={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion></section>}
export function Contact(){const [status,setStatus]=useState('');function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const d=new FormData(e.currentTarget);const subject='A conversation about '+d.get('company');const body=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nCompany: ${d.get('company')}\n\n${d.get('message')||''}`;location.href=`mailto:contact@nakama.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;setStatus('Your draft is ready to send in your email app. You can also email contact@nakama.in directly.')}return <section className="contact content-section" id="contact"><Reveal className="contact-copy"><span className="eyebrow">A conversation, to begin</span><h2>Tell us what<br/>you’re building.</h2><p>A product, a priority, a question. Bring a little context and we’ll work out the right next step together.</p><Booking>Book a conversation</Booking><a className="contact-email" href="mailto:contact@nakama.in">contact@nakama.in<ArrowUpRight size={15}/></a></Reveal><Reveal className="contact-form-wrap"><form className="contact-form" onSubmit={submit}><div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Name" maxLength={100}/></label><label>Work email<input name="email" autoComplete="email" type="email" required placeholder="you@company.com" maxLength={200}/></label></div><label>Company<input name="company" autoComplete="organization" required placeholder="What are you building?" maxLength={200}/></label><label>What would you like to change?<textarea name="message" rows={3} placeholder="A little context goes a long way." maxLength={4000}/></label><button className="form-submit" type="submit">Create email enquiry<ArrowUpRight size={18}/></button><p className="form-note" role="status">{status||'Opens a draft in your email app. You choose when to send.'}</p></form></Reveal></section>}