"use client";
import {useState,useEffect,useRef,type ReactNode,type CSSProperties} from 'react';
import Link from 'next/link';
import {ArrowUpRight,Sparkles,Check,ThumbsUp,MessageSquare,Share2,Play,Eye,ChevronUp,Search,Globe,Plus} from 'lucide-react';
import {Reveal,Logo} from './site';
import {BookCallButton} from '@/components/booking/BookCall';
import './presence-polish.css';
import {proofClients} from './proof-data';
import {engineMarks,sourceMarks} from './hero-marks';

const clients=[
 {name:'Inventive AI',src:'inventive.jpeg'},
 {name:'StarAgile',src:'staragile.png'},
 {name:'HubEngage',src:'hubengage.jpeg'},
 {name:'BacklinkOS',src:'backlinkos.jpeg'},
 {name:'Brandenburg',src:'brandenburg.png'},
];

/** Sunk-black void gallery — embossed marks lift from the pitch. */
export function ClientStrip(){
 return (
  <section className="client-strip client-void" aria-label="Client logos">
   <div className="client-void-frame" aria-hidden="true">
    <i className="client-void-rule"/><i className="client-void-rule right"/>
   </div>
   <div className="client-strip-heading">
    <span className="client-strip-plus" aria-hidden="true">+</span>
    <h2 className="client-strip-title">In good company.</h2>
    <p className="client-strip-sub">Shared ambition. Quiet proof.</p>
   </div>
   <div className="client-well">
    <div className="client-window">
     <div className="client-ticker">
      {[0,1].map(copy=>(
       <div className="client-group" key={copy} aria-hidden={copy===1}>
        {clients.map(c=>{
         const mark=<><span className="client-mark"><img src={`/clients/${c.src}`} width={42} height={42} alt="" loading="lazy"/></span><span className="client-name">{c.name}</span></>;
         return c.name==='Brandenburg'
          ? <span className="client-signature" key={`${copy}-${c.name}`}>{mark}</span>
          : <Link className="client-signature" href={`/work?client=${encodeURIComponent(c.name)}`} tabIndex={copy?-1:0} key={`${copy}-${c.name}`} aria-label={`Explore work for ${c.name}`}>{mark}</Link>;
        })}
       </div>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}

/* ---- Connected presence: real-platform constellation ---- */
type PlatformId='reddit'|'linkedin'|'youtube'|'quora';

const platforms:{
 id:PlatformId;name:string;tag:string;title:string;body:string;caption:string;href:string;
 x:number;y:number;rot:number;
}[]=[
 {
  id:'reddit',name:'Reddit',tag:'Be trusted',
  title:'In the conversation.',
  body:'Credible presence in the forums, threads, and feeds your buyers already use to compare tools and pressure-test vendors.',
  caption:'Show up as an operator, not an ad — disclose, add value, and leave a trail peers actually trust.',
  href:'/services#community',x:-1,y:-1,rot:-6,
 },
 {
  id:'linkedin',name:'LinkedIn',tag:'Be understood',
  title:'In the reading.',
  body:'Guides, comparisons, and explainers deep enough to bookmark — the research layer a sales page never covers.',
  caption:'Publish for the moment a buyer is still deciding, so your POV shows up as the useful source, not the loudest pitch.',
  href:'/services#editorial',x:1,y:-1,rot:5,
 },
 {
  id:'youtube',name:'YouTube',tag:'Be remembered',
  title:'In the frame.',
  body:'Walkthroughs and side-by-sides that make the difference obvious before the demo — searchable on YouTube and in Google Video.',
  caption:'Film the workflow, not the slogan. Earn placement where buyers watch to shortlist.',
  href:'/services#video',x:-1,y:1,rot:6,
 },
 {
  id:'quora',name:'Quora',tag:'Be discoverable',
  title:'In the answer.',
  body:'Named in the AI replies and SERPs buyers already trust — with crawlable sources they can open, not a black-box mention.',
  caption:'Map the questions your category asks, then earn citations and rankings where those answers get written.',
  href:'/services#ai-search',x:1,y:1,rot:-5,
 },
];

function Mark({children}:{children:ReactNode}){
 return <mark className="plat-mark">{children}</mark>;
}

function RedditFace({active}:{active:boolean}){
 return (
  <div className={`plat-face plat-reddit${active?' is-lit':''}`}>
   <header className="plat-head">
    <span className="plat-logo plat-mark" aria-hidden="true">{sourceMarks.Reddit}</span>
    <span className="plat-meta"><strong>r/saas</strong><em>· 14h</em></span>
   </header>
   <p className="plat-copy">Honestly, we tried a bunch, but the one that actually stuck was <Mark>Nakama</Mark>. Their approach to earned visibility is unreal.</p>
   <p className="plat-dense"><strong>In the conversation.</strong> Credible presence in the forums, threads, and feeds your buyers already use to compare tools.</p>
   <footer className="plat-foot reddit-foot">
    <span className="reddit-up"><ChevronUp size={13}/>284</span>
    <span><MessageSquare size={12}/>42</span>
    <span><Share2 size={12}/>Share</span>
   </footer>
  </div>
 );
}

function LinkedInFace({active}:{active:boolean}){
 return (
  <div className={`plat-face plat-linkedin${active?' is-lit':''}`}>
   <header className="plat-head">
    <span className="plat-logo plat-mark sq" aria-hidden="true">{sourceMarks.LinkedIn}</span>
    <span className="plat-meta li-meta">
     <span className="li-av" aria-hidden="true">AR</span>
     <span><strong>Ananya R.</strong><em>Founder · 2d</em></span>
    </span>
   </header>
   <p className="plat-copy">We&apos;ve been working with <Mark>Nakama</Mark> on our AI visibility — already seeing 5× growth in LLM mentions. Genuinely impressed.</p>
   <p className="plat-dense"><strong>In the reading.</strong> Guides, comparisons, and explainers deep enough to bookmark.</p>
   <footer className="plat-foot li-foot">
    <span><ThumbsUp size={12}/>1.2k</span>
    <span><MessageSquare size={12}/>87</span>
    <span><Share2 size={12}/>34</span>
   </footer>
  </div>
 );
}

function YouTubeFace({active}:{active:boolean}){
 return (
  <div className={`plat-face plat-youtube${active?' is-lit':''}`}>
   <header className="plat-head">
    <span className="plat-logo plat-mark sq" aria-hidden="true">{sourceMarks.YouTube}</span>
    <span className="plat-meta"><strong>YouTube</strong><em>· Video</em></span>
   </header>
   <div className="yt-thumb" aria-hidden="true">
    <span className="yt-play"><Play size={18} fill="currentColor"/></span>
    <span className="yt-time">12:48</span>
    <span className="yt-stickies"/>
   </div>
   <p className="plat-copy"><strong>In the frame.</strong> Walkthroughs and side-by-sides that make the difference obvious before the demo.</p>
   <footer className="plat-foot yt-foot">
    <span>Nakama Growth</span>
    <span><Eye size={11}/>48k</span>
   </footer>
  </div>
 );
}

function QuoraFace({active}:{active:boolean}){
 return (
  <div className={`plat-face plat-quora${active?' is-lit':''}`}>
   <header className="plat-head">
    <span className="plat-logo plat-mark sq" aria-hidden="true">{sourceMarks.Quora}</span>
    <span className="plat-meta"><strong>Quora</strong><em>· Answered</em></span>
   </header>
   <p className="plat-copy">Most agencies chase rankings. <Mark>Nakama</Mark> chases actual mentions — which is honestly the smarter bet long-term.</p>
   <p className="plat-dense"><strong>In the answer.</strong> Named in the AI replies and SERPs buyers already trust — with crawlable sources they can open.</p>
   <footer className="plat-foot quora-foot">
    <span>1.4k views</span>
    <span className="quora-up">▲ 56</span>
   </footer>
  </div>
 );
}

function PlatformFace({id,active}:{id:PlatformId;active:boolean}){
 if(id==='reddit')return <RedditFace active={active}/>;
 if(id==='linkedin')return <LinkedInFace active={active}/>;
 if(id==='youtube')return <YouTubeFace active={active}/>;
 return <QuoraFace active={active}/>;
}

function NakamaSiteCard(){
 return <aside className="network-answer-card" aria-label="Illustrative AI answer, not live citation data">
  <span className="network-cited"><Check size={12}/> Cited</span>
  <div className="network-answer-label"><Sparkles size={15}/> AI answer</div>
  <p>A few names come up consistently in this space. <mark>Nakama</mark> is often cited for earned, community-led visibility, particularly for B2B teams that don’t want to lean on paid ads.</p>
  <div className="network-answer-sources"><span>Sources:</span><span>reddit.com</span><span>linkedin.com</span><span>nakama.in</span></div>
  <div className="network-answer-count"><i/>Cited <strong>47</strong> times this week</div>
  <small>Illustrative example · not live citation data</small>
 </aside>;
}

function GoogleOverviewChip(){
 return (
  <aside className="g-overview-chip" aria-hidden="true">
   <header className="plat-head">
    <span className="plat-logo plat-mark" aria-hidden="true">{engineMarks.google}</span>
    <span className="plat-meta"><strong>Google</strong><em>· AI Overview</em></span>
   </header>
   <p>Boutique agencies like <Mark>Nakama</Mark> focus on organic mentions across communities and AI search — not paid channels.</p>
   <div className="g-lines" aria-hidden="true"><i/><i/><i/></div>
  </aside>
 );
}

/** In-flow cards keep their alignment at every scroll position and text size. */
export function Presence(){
 const [active,setActive]=useState<string|null>(null);
 const sectionRef=useRef<HTMLElement>(null);
 useEffect(()=>{
  const section=sectionRef.current;
  if(!section)return;
  const map=section.querySelector<HTMLElement>('.network-map')!;
  const cards=Array.from(map.querySelectorAll<HTMLElement>('.network-card'));
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const narrow=matchMedia('(max-width: 640px)');
  let frame=0;
  let sizes:number[][]=[];
  const update=()=>{
   frame=0;
   if(motion.matches||narrow.matches){map.style.setProperty('--fold','0');return;}
   const top=section.getBoundingClientRect().top;
   const travel=section.offsetHeight-innerHeight;
   const p=Math.max(0,Math.min(1,(-top+88)/Math.max(1,travel)*1.35-.12));
   const eased=p*p*(3-2*p);
   map.style.setProperty('--fold',String(1-eased));
   map.style.setProperty('--card-reveal',String(Math.max(0,(eased-.55)/.45)));
   cards.forEach((card,i)=>{const size=sizes[i]||[300,280];card.style.setProperty('--scale-x',String(1+(300/size[0]-1)*(1-eased)));card.style.setProperty('--scale-y',String(1+(280/size[1]-1)*(1-eased)))});
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
  const measure=()=>{
   sizes=cards.map(card=>[card.offsetWidth||300,card.offsetHeight||280]);
   cards.forEach((card,i)=>{
    card.style.setProperty('--fold-x',`${map.clientWidth/2-card.offsetLeft-card.offsetWidth/2}px`);
    card.style.setProperty('--fold-y',`${map.clientHeight/2-card.offsetTop-card.offsetHeight/2-(i+1)*5}px`);
    card.style.setProperty('--fold-angle',`0deg`);
   });schedule();
  };
  const observer=new ResizeObserver(measure);observer.observe(map);
  window.addEventListener('scroll',schedule,{passive:true});
  motion.addEventListener('change',schedule);narrow.addEventListener('change',measure);
  measure();
  return()=>{observer.disconnect();window.removeEventListener('scroll',schedule);motion.removeEventListener('change',schedule);narrow.removeEventListener('change',measure);cancelAnimationFrame(frame)};
 },[]);
 const channels=[
  {id:'reddit',name:'Reddit',label:'Join the conversation',text:'Useful contributions in the communities where buyers compare tools and share experience.',detail:'Community research · Helpful participation',href:'/services#community',brand:'#FF4500',stat:'▲ 284',statLabel:'r/SaaS · top comment'},
  {id:'linkedin',name:'LinkedIn',label:'Publish your perspective',text:'Expert articles, comparisons and practical insights that make your product easier to understand.',detail:'Thought leadership · Buyer guides',href:'/services#editorial',brand:'#0A66C2',stat:'1.2k',statLabel:'reactions on a buyer guide'},
  {id:'youtube',name:'YouTube',label:'Show how it works',text:'Searchable walkthroughs and comparison videos that help buyers see the difference.',detail:'Video creation · YouTube discovery',href:'/services#video',brand:'#FF0000',stat:'48K',statLabel:'views on one comparison'},
  {id:'quora',name:'Quora',label:'Answer the real question',text:'Clear, relevant answers that bring your expertise into the questions buyers already ask.',detail:'Question research · Useful answers',href:'/services#community',brand:'#B92B27',stat:'▲ 56',statLabel:'upvotes · 1.4k views'},
 ];
 return <section ref={sectionRef} className="presence-network page-width" id="presence" aria-labelledby="presence-title">
 <div className="network-pin">
  <div className="network-heading"><div><span className="eyebrow"><span className="tiny-cross"/>A connected presence</span><h2 id="presence-title">One brand.<span>More ways to be found.</span></h2></div><p>We turn your expertise into a consistent presence across the places your buyers already trust.</p></div>
  <div className="network-map" data-active={active??'none'}>
   <svg className="network-wires" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true">
    {['M500 200 H405 Q375 200 375 170 V110 Q375 90 350 90 H290','M500 200 H595 Q625 200 625 170 V110 Q625 90 650 90 H710','M500 200 H405 Q375 200 375 230 V290 Q375 310 350 310 H290','M500 200 H595 Q625 200 625 230 V290 Q625 310 650 310 H710'].map((path,i)=><g key={channels[i].id} className={active===channels[i].id?'is-active':''}><path d={path}/><path className="wire-signal" d={path}/></g>)}
   </svg>
   <div className="network-hub network-hub-illustrated"><NakamaSiteCard/></div>
   {channels.map((c,i)=><Link key={c.id} href={c.href} style={{'--brand':c.brand} as CSSProperties} className={`network-card network-card-${i}`} onMouseEnter={()=>setActive(c.id)} onMouseLeave={()=>setActive(null)} onFocus={()=>setActive(c.id)} onBlur={()=>setActive(null)}>
    <div className="network-card-top"><span className="network-logo"><img src={`/platforms/${c.id}.svg`} alt="" width="26" height="26"/></span><span>{c.name}</span><ArrowUpRight size={16}/></div>
    <h3>{c.label}</h3><p>{c.text}</p><span className="network-card-stat"><b>{c.stat}</b>{c.statLabel}</span><span className="network-card-detail">{c.detail}</span><i className="network-card-glow" aria-hidden="true"/>
   </Link>)}
  </div>
  <div className="network-note"><span>One strategy. Platform-native execution.</span><Link href="/services">Explore our services <ArrowUpRight size={15}/></Link></div>
 </div>
 </section>;
}

export function NakamaStory(){
 return (
  <section className="nakama-story page-width" id="nakama">
   <Reveal className="story-symbol">
    <span className="story-kanji story-logo" aria-hidden="true"><Logo/></span>
    <span className="story-pronunciation">na · ka · ma</span>
    <span className="story-definition">A companion for the journey.</span>
   </Reveal>
   <Reveal className="story-copy">
    <span className="eyebrow">The meaning behind the name</span>
    <h2>On your side.<br/><span>In it for the long run.</span></h2>
    <p>In Japanese, <em>nakama</em> means a companion who shares the journey. For us, it describes how the best work happens: together.</p>
    <p>We learn your product, understand your buyers and stay close to the work. Shared context makes the next idea sharper, the next asset stronger, and the relationship more valuable.</p>
    <Link className="text-link" href="/process">Get to know our approach<ArrowUpRight size={17}/></Link>
   </Reveal>
  </section>
 );
}

const platformTone=(platform:string)=>{
 const p=platform.toLowerCase();
 if(p.includes('youtube'))return 'yt';
 if(p.includes('perplexity'))return 'px';
 if(p.includes('chatgpt'))return 'gpt';
 if(p.includes('linkedin'))return 'li';
 if(p.includes('search'))return 'serp';
 return 'ai';
};

const clientMarks:Record<string,{src:string;color:string}>={
 'Synup':{src:'/clients/synup.svg',color:'#ff6a3d'},
 'Inventive AI':{src:'/clients/inventive.jpeg',color:'#ff9800'},
 'HubEngage':{src:'/clients/hubengage.jpeg',color:'#c8db18'},
 'StarAgile':{src:'/clients/staragile.png',color:'#fb753d'},
 'BacklinkOS':{src:'/clients/backlinkos.jpeg',color:'#878bff'},
};

const sourceLogo=(platform:string)=>{
 const p=platform.toLowerCase();
 if(p.includes('youtube'))return sourceMarks.YouTube;
 if(p.includes('perplexity'))return engineMarks.perplexity;
 if(p.includes('chatgpt'))return engineMarks.chatgpt;
 if(p.includes('google'))return engineMarks.google;
 if(p.includes('linkedin'))return sourceMarks.LinkedIn;
 return null;
};

function useTyped(text:string){
 const [n,setN]=useState(text.length);
 useEffect(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){setN(text.length);return;}
  setN(0);let i=0;
  const t=window.setInterval(()=>{i+=1;setN(i);if(i>=text.length)clearInterval(t);},28);
  return()=>clearInterval(t);
 },[text]);
 return text.slice(0,n);
}

const sourceOf=(d:string)=>{
 const t=d.toLowerCase();
 if(t.includes('reddit'))return 'Reddit post';
 if(t.includes('linkedin'))return 'LinkedIn article';
 if(t.includes('video'))return 'YouTube video';
 return 'Nakama article';
};

function ProofPreview({entry,brand}:{entry:{platform:string;query:string;description:string};brand:string}){
 const tone=platformTone(entry.platform);
 const engine=entry.platform.split('·')[0].trim();
 const kind=entry.platform.split('·')[1]?.trim()??'';
 const src=sourceOf(entry.description);
 const q=<span className="pv-q"><i/>{entry.query}</span>;
 if(tone==='yt')return <span className="pv pv-yt2">{q}<span className="pv-vid"><span className="pv-thumb"><i>vs</i><b>{brand}</b><em>12:47</em></span><span className="pv-vid-t"><b>{entry.query}</b><small>{brand} · comparison</small></span></span></span>;
 if(tone==='serp'||!['ai','px','gpt'].includes(tone))return <span className="pv pv-res">{q}<span className="pv-res-row hit"><span className="fav fav-img">{clientMarks[brand]?<img src={clientMarks[brand].src} alt=""/>:null}</span><span><b>{brand}</b><small>{kind||engine} · {src}</small></span><em>Featured</em></span><span className="pv-res-row"><span className="fav"/><span><i/><i className="s"/></span></span></span>;
 return <span className="pv pv-ans">{q}<span className="pv-ans-h">✦ {kind==='Sources'?`${engine} sources`:engine==='Google'?kind:engine}</span><span className="pv-ans-row"><span className="pv-brand">{brand}</span><span className="pv-src">via {src}</span><span className="pv-cite">Cited</span></span></span>;
}

function EvidenceCard({entry,index,brand,active,onPick}:{entry:{platform:string;query:string;description:string};index:number;brand:string;active:boolean;onPick:()=>void}){
 const tone=platformTone(entry.platform);
 return <button type="button" className={`evidence-card tone-${tone}`} style={{'--brand-color':clientMarks[brand as keyof typeof clientMarks]?.color} as CSSProperties} aria-pressed={active} onClick={onPick} onMouseEnter={onPick} onFocus={onPick}>
  <span className="evidence-border" aria-hidden="true"/>
  <span className="evidence-top"><span className="evidence-logo">{sourceLogo(entry.platform)??<Globe size={14}/>}</span><span className="evidence-platform">{entry.platform}</span><span className="evidence-no">№ {String(index+1).padStart(2,'0')}</span></span>
  <ProofPreview entry={entry} brand={brand}/>
  <span className="evidence-query">“{entry.query}”</span>
  <span className="evidence-desc">{entry.description}</span>
 </button>;
}

/** Documented presence: pick a client, watch the query run, see where they were cited. */
export function HomeProof(){
 const [client,setClient]=useState(proofClients[0].name);
 const [pick,setPick]=useState(0);
 const [copied,setCopied]=useState(false);
 const active=proofClients.find(c=>c.name===client)??proofClients[0];
 const entry=active.entries[Math.min(pick,active.entries.length-1)];
 const typed=useTyped(entry.query);
 const color=clientMarks[active.name].color;
 const copy=()=>{navigator.clipboard?.writeText(entry.query).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),1600)}).catch(()=>{})};
 return (
  <section className="evidence-room page-width" id="proof" aria-labelledby="proof-title" style={{'--client':color} as CSSProperties}>
   <Reveal className="evidence-heading">
    <div>
     <span className="eyebrow">Client work</span>
     <h2 id="proof-title">Real queries.<br/><span>Real placements.</span></h2>
    </div>
    <p>Pick a client, copy a query and check it yourself. Captured when each piece went live; answers shift over time.</p>
   </Reveal>
   <div className="evidence-shell">
    <div className="evidence-rail" role="tablist" aria-label="Select a client">
     {proofClients.map(c=>(
      <button key={c.name} role="tab" aria-selected={client===c.name} aria-controls="proof-client-record" style={{'--brand-color':clientMarks[c.name].color} as CSSProperties} type="button" onClick={()=>{setClient(c.name);setPick(0);}}>
       <span className={`evidence-rail-logo ${c.name==='Synup'?'is-wordmark':''}`}><img src={clientMarks[c.name].src} alt="" width="28" height="28" loading="lazy"/></span>
       <span className="evidence-rail-name">{c.name}</span>
      </button>
     ))}
    </div>
    <div className="evidence-stage" id="proof-client-record">
     <div className="evidence-search">
      <span className="evidence-search-logo">{sourceLogo(entry.platform)??<Search size={16}/>}</span>
      <span className="evidence-search-text">{typed}<i className="caret"/></span>
      <button type="button" className="evidence-copy" onClick={copy}>{copied?<><Check size={14}/>Copied</>:<>Copy query</>}</button>
     </div>
     <header className="evidence-case">
      <div><span className="evidence-case-label">Casefile {String(proofClients.indexOf(active)+1).padStart(2,'0')} · {entry.platform}</span><h3>{active.name}</h3><p>{active.description}</p></div>
      <Link className="evidence-case-link" href={`/work?client=${encodeURIComponent(active.name)}`}>Full client record<ArrowUpRight size={17}/></Link>
     </header>
     <div className="evidence-grid" key={active.name}>
      {active.entries.map((e,i)=><EvidenceCard key={`${active.name}-${i}`} entry={e} index={i} brand={active.name} active={i===pick} onPick={()=>setPick(i)}/>)}
     </div>
    </div>
   </div>
  </section>
 );
}

/** Native disclosures keep the FAQ accessible without animation or layout offsets. */
export function HomeFaqLite(){
 const items=[
  {ask:'How do AEO and GEO fit into our SEO strategy?',answer:'They build on a strong search foundation. AEO focuses on clear answers to buyer questions; GEO also considers how generative platforms understand your brand and retrieve supporting sources. We connect both with useful content, technical clarity and relevant distribution.',tag:'Strategy',glyph:'01'},
  {ask:'How long before we see anything?',answer:'The first month is research and first drafts. Placements start going live from month two, and AI answers can take a few more weeks to catch up, which is why we ask for three months to start.',tag:'Timeline',glyph:'02'},
  {ask:'Do you handle YouTube videos from idea to publishing?',answer:'We support topic research, scripts, video creation and editing, thumbnails, titles, chapters and publishing. We agree on the format, production requirements and review process with your team before work begins.',tag:'Video',glyph:'03'},
  {ask:'How will we know whether the work is helping?',answer:'We track the signals relevant to your scope: published assets, relevant mentions, search and video visibility, and observed AI citations. Where analytics access is available, we also review traffic and conversion signals, keeping those separate from claims of direct attribution.',tag:'Measurement',glyph:'04'},
  {ask:'Can you guarantee rankings or AI recommendations?',answer:'No. Search engines, communities and AI platforms control what they show. We commit to an agreed scope, careful execution and transparent reporting, and use the evidence to refine the next steps.',tag:'Expectations',glyph:'05'},
 ];
 return (
  <section className="home-faq faq-editorial page-width" id="faq" aria-labelledby="faq-title">
   <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:items.map(i=>({'@type':'Question',name:i.ask,acceptedAnswer:{'@type':'Answer',text:i.answer}}))}).replace(/</g,'\\u003c')}}/>
   <Reveal className="faq-editorial-intro">
    <span className="eyebrow"><span className="tiny-cross"/>A little more clarity</span>
    <h2 id="faq-title">Good questions.<br/><span>Straight answers.</span></h2>
   </Reveal>
   <div className="faq-editorial-list">
    {items.map((item,i)=>(
     <details className="faq-editorial-item" key={item.ask} open={i===0}>
      <summary>
       <span className="faq-editorial-number" aria-hidden="true">{item.glyph}</span>
       <span className="faq-editorial-question"><span className="faq-editorial-tag">{item.tag}</span><span>{item.ask}</span></span>
       <span className="faq-editorial-toggle" aria-hidden="true"><Plus size={18}/></span>
      </summary>
      <p>{item.answer}</p>
     </details>
    ))}
   </div>
  </section>
 );
}

/** Homepage-only contact panel with a live, travelling ember border. */
export function HomeContact(){
 return (
  <section className="contact-flare" aria-labelledby="home-contact-title">
   <span className="contact-flare-border" aria-hidden="true"/>
   <span className="contact-flare-glow" aria-hidden="true"/>
   <div className="contact-flare-inner">
    <div className="contact-flare-orbits" aria-hidden="true"><i/><i/><i/><b/></div>
    <div className="contact-flare-copy">
     <span className="eyebrow">The next move</span>
     <h2 id="home-contact-title">Get your brand<br/><span>into the answer.</span></h2>
     <p>Start with a focused conversation about where your brand shows up in AI answers today, and where we can build next.</p>
    </div>
    <div className="contact-flare-side">
     <ul className="contact-flare-points">
      <li><Check size={15}/>Where you show up today, mapped</li>
      <li><Check size={15}/>Reply within one business day</li>
      <li><Check size={15}/>Written proposal within two business days</li>
     </ul>
     <div className="contact-flare-actions">
      <BookCallButton className="contact-flare-cta"><span>Book a call</span><i><ArrowUpRight size={20}/></i></BookCallButton>
      <Link href="/pricing#quote" className="contact-flare-work">Get a custom quote<ArrowUpRight size={16}/></Link>
     </div>
    </div>
   </div>
  </section>
 );
}
