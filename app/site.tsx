"use client";
import {useEffect,useRef,useState,type CSSProperties,type ReactNode,type RefObject} from 'react';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {ArrowUpRight,ArrowRight,Menu,Plus,ChevronDown} from 'lucide-react';
import {BookCallButton} from '@/components/booking/BookCall';
import {Sheet,SheetTrigger,SheetContent,SheetTitle,SheetDescription,SheetClose} from '@/components/ui/sheet';
export const BOOKING='https://app.cal.com/snehil-srivastava-4jm7sq';
export const navigationLinks=[['Pricing','/pricing'],['Resources','/resources'],['About','/about']] as const;
export const companyLinks=[['Services','/services','What we do, channel by channel'],['White label','/white-label','Resell our work under your brand'],['Work','/work','Where our clients show up'],['Process','/process','How an engagement runs'],['Careers','/careers','Join the team']] as const;
export function Logo({className=''}:{className?:string}){return <svg className={className} viewBox="0 0 64 64" aria-hidden="true"><path d="M9 57V30A23 23 0 0 1 55 30V57H42V30A10 10 0 0 0 22 30V57Z" fill="#f3f1ed"/><circle cx="32" cy="30" r="5.6" fill="#f07c32"/></svg>}
export function Booking({children='Book a conversation',className=''}:{children?:ReactNode,className?:string}){return <BookCallButton className={`button ${className}`}>{children}<ArrowUpRight size={17}/></BookCallButton>}
export function Header(){
  const path=usePathname();
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const update=()=>setScrolled(window.scrollY>18);
    update();
    addEventListener('scroll',update,{passive:true});
    return()=>removeEventListener('scroll',update);
  },[]);
  return <header className={`site-nav${scrolled?' is-scrolled':''}`}>
    <Link className="brand" href="/" aria-label="Nakama Growth home"><img className="nakama-gate-lockup" src="/brand/nakama-lockup-dark.svg" alt="Nakama" width="220" height="50"/></Link>
    <nav className="desktop-nav" aria-label="Main navigation"><div className={`nav-drop${companyLinks.some(([,h])=>path.startsWith(h))?' is-current':''}`}><button type="button" className="nav-drop-btn" aria-haspopup="true">Company<ChevronDown size={14}/></button><div className="nav-drop-panel"><div className="nav-drop-inner">{companyLinks.map(([label,href,sub])=><Link key={href} href={href} aria-current={path.startsWith(href)?'page':undefined}><b>{label}</b><small>{sub}</small></Link>)}</div></div></div><div className={`nav-drop${path.startsWith('/services')?' is-current':''}`}><button type="button" className="nav-drop-btn" aria-haspopup="true">Services<ChevronDown size={14}/></button><div className="nav-drop-panel"><div className="nav-drop-inner">{serviceLinks.map(([label,href])=><Link key={href} href={href} aria-current={path===href||path.startsWith(href+'/')?'page':undefined}><b>{label}</b></Link>)}</div></div></div>{navigationLinks.map(([label,href])=><Link key={href} href={href} aria-current={path===href||path.startsWith(href+'/')?'page':undefined}>{label}</Link>)}</nav>
    <div className="nav-actions">
      <Link className="nav-contact" href="/contact">Contact us<ArrowUpRight size={16}/></Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild><button className="menu-button" aria-label="Open navigation"><Menu size={21}/></button></SheetTrigger>
        <SheetContent className="mobile-menu">
          <SheetTitle>Nakama Growth</SheetTitle>
          <SheetDescription>Choose where to explore.</SheetDescription>
          <nav>{[['Home','/'],...companyLinks.map(([l,h])=>[l,h] as const),...navigationLinks,['Contact us','/contact']].map(([label,href])=><SheetClose asChild key={href}><Link href={href} aria-current={path===href?'page':undefined}>{label}<ArrowUpRight size={18}/></Link></SheetClose>)}</nav>
        </SheetContent>
      </Sheet>
    </div>
  </header>
}
export function Reveal({children,className='',style,id}:{children:ReactNode,className?:string,style?:CSSProperties,id?:string}){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{const el=ref.current;if(!el)return;const reduced=matchMedia('(prefers-reduced-motion: reduce)');if(reduced.matches)return;el.classList.add('reveal-ready');const observer=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add('reveal-in');observer.disconnect()}},{threshold:.08});observer.observe(el);return()=>observer.disconnect()},[]);return <div id={id} className={`reveal ${className}`} ref={ref} style={style}>{children}</div>}
export function SectionTitle({label,title,description,center=false}:{label:string,title:ReactNode,description?:string,center?:boolean}){return <Reveal className={`section-title ${center?'center':''}`}><span className="eyebrow">{label}</span><h2>{title}</h2>{description&&<p>{description}</p>}</Reveal>}
export function useScrollProgress(ref:RefObject<HTMLElement|null>){const [p,setP]=useState(0);useEffect(()=>{let frame=0;const q=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>{frame=0;if(!ref.current)return;const r=ref.current.getBoundingClientRect();setP(q.matches?1:Math.max(0,Math.min(1,(110-r.top)/Math.max(1,r.height-innerHeight+110))))};const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};update();addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);q.addEventListener('change',schedule);return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',schedule);removeEventListener('resize',schedule);q.removeEventListener('change',schedule)}},[ref]);return p}
export function PageIntro({label,title,accent,description,children}:{label:string,title:string,accent:string,description:string,children?:ReactNode}){return <section className="page-intro page-intro-cinema page-width"><Reveal className="intro-stack"><span className="eyebrow"><span className="tiny-cross"/>{label}</span><h1>{title}<br/><span>{accent}</span></h1><p>{description}</p>{children}</Reveal><div className="intro-rule" aria-hidden="true"><i/><Plus size={13}/><i/></div></section>}
export function NextChapter({title='Let’s build your next chapter.',text='A shared ambition. A good conversation. A place to start.'}:{title?:string,text?:string}){
  return (
    <Reveal className="next-chapter next-chapter-cinema next-chapter-frame next-contact-card page-width">
      <div className="next-frame-glow" aria-hidden="true"/>
      <div className="next-contact-surface">
        <div className="next-copy">
          <span className="eyebrow"><span className="tiny-cross"/>The next move</span>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="next-actions">
            <Link href="/contact" className="button next-contact-primary">Contact<ArrowUpRight size={17}/></Link>
            <Link href="/work" className="text-link next-contact-secondary">See the work<ArrowUpRight size={16}/></Link>
          </div>
          <p className="next-contact-meta">Continue on-site · <Link href="/contact">nakama.in/contact</Link></p>
        </div>
        <Link href="/contact" className="round-link" aria-label="Go to contact page"><ArrowUpRight size={27}/></Link>
      </div>
    </Reveal>
  );
}
export const serviceLinks=[['GEO services','/services/geo'],['AEO services','/services/aeo'],['AI Visibility Audit','/services/ai-visibility-audit'],['Reddit & community','/services/reddit'],['Content & editorial','/services/content'],['YouTube Marketing','/services/youtube'],['Digital PR services','/services/digital-pr']] as const;
const FOOT_COLS:[string,[string,string][]][]=[
 ['Company',[['About','/about'],['Services','/services'],['Work','/work'],['Process','/process'],['Careers','/careers']]],
 ['Services',serviceLinks.map(([l,h])=>[l,h])],
 ['Resources',[['Articles','/resources#articles'],['Case studies','/resources#case-studies'],['Pricing','/pricing'],['Get a quote','/pricing#quote']]],
 ['Contact',[['Contact us','/contact'],['contact@nakama.in','mailto:contact@nakama.in']]],
 ['Legal',[['Privacy','/privacy'],['Terms','/terms']]],
];
const LI_PATH="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";
export function Footer(){return <footer className="site-footer nk-foot">
 <div className="nkf-top page-width">
  <div className="nkf-brand">
   <Link href="/" className="nkf-logo" aria-label="Nakama home"><img src="/brand/nakama-lockup-dark.svg" alt="Nakama" width="220" height="50"/></Link>
   <p>Earned visibility across AI answers, search and the communities buyers already trust.</p>
   <div className="nkf-cta">
    <BookCallButton className="nkf-btn">Book a call<ArrowUpRight size={16}/></BookCallButton>
    <div className="nkf-social">
     <a href="https://www.linkedin.com/company/nakama-growth/" target="_blank" rel="noopener noreferrer" aria-label="Nakama on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d={LI_PATH}/></svg></a>
     <a href="https://www.instagram.com/nakama.growth/" target="_blank" rel="noopener noreferrer" aria-label="Nakama on Instagram"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg></a>
    </div>
   </div>
  </div>
  <div className="nkf-cols">{FOOT_COLS.map(([label,links])=><div key={label} className="nkf-col"><span>{label}</span><nav aria-label={label}>{links.map(([t,h])=>h.startsWith('mailto:')?<a key={h} href={h}>{t}</a>:<Link key={h} href={h}>{t}</Link>)}</nav></div>)}</div>
 </div>
 <div className="nkf-base page-width"><span>© {new Date().getFullYear()} Nakama Growth. Made in India.</span><span className="nkf-tag">na · ka · ma / in it together</span><a href="#top" className="nkf-top-link">Back to top<ArrowUpRight size={14}/></a></div>
 <div className="footer-wordmark footer-wordmark-bold fw-morph" tabIndex={0} role="img" aria-label="Nakama, in it together"><span className="fw-word" aria-hidden="true">{"nakama".split("").map((c,i)=><b key={i} style={{"--i":i} as CSSProperties}>{c}</b>)}</span><span className="fw-mark" aria-hidden="true"><svg viewBox="0 0 64 64"><defs><linearGradient id="fwg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#b9d2c6"/><stop offset=".5" stopColor="#d6d6e6"/><stop offset="1" stopColor="#e2b48e"/></linearGradient></defs><path d="M9 57V30A23 23 0 0 1 55 30V57H42V30A10 10 0 0 0 22 30V57Z" fill="url(#fwg)"/><circle cx="32" cy="30" r="5.6" fill="#f07c32"/></svg></span></div></footer>}
export function Shell({children,className=''}:{children:ReactNode,className?:string}){
  /* Frame carries cinema classes so Super Dude's .home-cinema .site-nav glass can match the header (sibling of main otherwise). */
  return <div className={`site-frame ${className}`.trim()}>
    <div id="top"/>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header/>
    <main id="main" className={className}>{children}</main>
    <Footer/>
  </div>
}