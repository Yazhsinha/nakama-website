import Link from 'next/link';
import type {ReactNode} from 'react';
import {ArrowUpRight,Check,X} from 'lucide-react';
import {Reveal} from '../site';
import {BookCallButton} from '@/components/booking/BookCall';
import './inner.css';

type Tone='teal'|'ember'|'indigo'|'rose';

/** Atmosphere that sits behind a whole inner page: soft aurora glows that drift, never hard edges. */
export function IpAtmos({tone='teal'}:{tone?:Tone}){
 return <div className={`ip-atmos ip-tone-${tone}`} aria-hidden="true"><i className="a1"/><i className="a2"/><i className="a3"/><div className="ip-grid"/></div>;
}

export function IpHero({eyebrow,title,accent,lead,children,aside,tone='teal'}:{eyebrow:string;title:ReactNode;accent:ReactNode;lead:ReactNode;children?:ReactNode;aside?:ReactNode;tone?:Tone}){
 return <section className={`ip-hero ip-tone-${tone}${aside?' has-aside':''}`}>
  <div className="ip-wrap ip-hero-in">
   <Reveal className="ip-hero-copy">
    <span className="ip-eyebrow"><i/>{eyebrow}</span>
    <h1>{title}<span className="ip-grad">{accent}</span></h1>
    <p className="ip-lead">{lead}</p>
    {children&&<div className="ip-actions">{children}</div>}
   </Reveal>
   {aside&&<Reveal className="ip-hero-aside">{aside}</Reveal>}
  </div>
 </section>;
}

export function IpHead({eyebrow,title,lead,center=false,children}:{eyebrow:string;title:ReactNode;lead?:ReactNode;center?:boolean;children?:ReactNode}){
 return <Reveal className={`ip-head${center?' center':''}`}>
  <span className="ip-eyebrow"><i/>{eyebrow}</span>
  <h2>{title}</h2>
  {lead&&<p>{lead}</p>}
  {children}
 </Reveal>;
}

export function IpSection({id,className='',children}:{id?:string;className?:string;children:ReactNode}){
 return <section id={id} className={`ip-section ${className}`.trim()}><div className="ip-wrap">{children}</div></section>;
}

export function BookBtn({children='Book a call',className='ip-btn'}:{children?:ReactNode;className?:string}){
 return <BookCallButton className={className}><span>{children}</span><i aria-hidden="true"><ArrowUpRight size={16}/></i></BookCallButton>;
}
export function LinkBtn({href,children,ghost=false}:{href:string;children:ReactNode;ghost?:boolean}){
 return <Link href={href} className={ghost?'ip-ghost':'ip-btn'}><span>{children}</span>{ghost?<ArrowUpRight size={15}/>:<i aria-hidden="true"><ArrowUpRight size={16}/></i>}</Link>;
}

export const GOOD_FIT=['SaaS and software companies','Brands in researched or competitive categories','Teams with a clear product and customer','Companies willing to invest consistently','Agencies seeking a specialist partner'];
export const NOT_FIT=['Teams seeking overnight results','Brands seeking undisclosed endorsements','Companies expecting guaranteed rankings','Businesses seeking high-volume filler content','Teams unwilling to provide product or customer context'];

export function FitSplit({eyebrow='Who we work with',title=<>Built for teams playing<br/><em>the long game.</em></>,lead='We take on a small number of partners at a time, so we are honest about fit before anyone signs anything.'}:{eyebrow?:string;title?:ReactNode;lead?:string}){
 return <IpSection className="ip-fit">
  <IpHead eyebrow={eyebrow} title={title} lead={lead} center/>
  <div className="ip-fit-grid">
   <Reveal className="ip-fit-card good">
    <span className="ip-fit-tag"><i/>Good fit</span>
    <ul>{GOOD_FIT.map(t=><li key={t}><span className="ip-fit-ico"><Check size={14}/></span>{t}</li>)}</ul>
   </Reveal>
   <Reveal className="ip-fit-card bad">
    <span className="ip-fit-tag"><i/>Not a fit</span>
    <ul>{NOT_FIT.map(t=><li key={t}><span className="ip-fit-ico"><X size={13}/></span>{t}</li>)}</ul>
   </Reveal>
  </div>
 </IpSection>;
}

export function IpFaq({items,eyebrow='Questions',title=<>Straight <em>answers.</em></>}:{items:readonly (readonly [string,string])[];eyebrow?:string;title?:ReactNode}){
 return <IpSection className="ip-faq">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:items.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))}).replace(/</g,'\\u003c')}}/>
  <div className="ip-faq-grid">
   <IpHead eyebrow={eyebrow} title={title} lead={<>Something else on your mind? Write to <a href="mailto:contact@nakama.in">contact@nakama.in</a>.</>}/>
   <div className="ip-faq-list">
    {items.map(([q,a],i)=><details key={q} className="ip-faq-item" open={i===0}>
     <summary><span>{q}</span><i aria-hidden="true"/></summary>
     <p>{a}</p>
    </details>)}
   </div>
  </div>
 </IpSection>;
}

export function IpCta({title=<>Let’s map where your brand<br/><em>should show up next.</em></>,text='Every engagement is shaped around your product, your buyers and your category. Tell us where you are, and we’ll come back with a plan and a quote.'}:{title?:ReactNode;text?:string}){
 return <section className="ip-section ip-cta-wrap"><div className="ip-wrap">
  <Reveal className="ip-cta">
   <div className="ip-cta-glow" aria-hidden="true"/>
   <div className="ip-cta-copy">
    <span className="ip-eyebrow"><i/>Next step</span>
    <h2>{title}</h2>
    <p>{text}</p>
   </div>
   <div className="ip-cta-actions">
    <LinkBtn href="/pricing#quote">Get your custom quote</LinkBtn>
    <BookBtn className="ip-btn ip-btn-glass">Book a call</BookBtn>
   </div>
  </Reveal>
 </div></section>;
}

export const CLIENT_LOGOS=[
 ['Inventive AI','/clients/white/inventive.png'],
 ['Synup','/clients/white/synup.svg'],
 ['HubEngage','/clients/white/hubengage.png'],
 ['StarAgile','/clients/white/staragile.png'],
 ['BacklinkOS','/clients/white/backlinkos.png'],
 ['SERPsGrowth','/clients/white/serps.png'],
 ['Inbound Blogging','/clients/white/inbound.png'],
] as const;

export function LogoRow({label='Trusted by growth teams at'}:{label?:string}){
 return <div className="ip-logos">
  <span>{label}</span>
  <div className="ip-logos-track">{CLIENT_LOGOS.map(([n,src])=><span className="ip-logo" key={n}><img src={src} alt="" aria-hidden="true"/><b>{n}</b></span>)}</div>
 </div>;
}
