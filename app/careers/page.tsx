import {pageMeta,Crumbs} from '@/lib/seo';
import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight,MapPin,Briefcase} from 'lucide-react';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpSection,IpHead,LinkBtn} from '../inner/kit';
import {openings} from '@/lib/content';

export const metadata:Metadata=pageMeta('/careers',{title:'Careers at Nakama — Nakama Growth',description:'Join Nakama: a small team of writers, researchers and strategists whose work gets quoted by AI engines. See open roles and internships, and how we hire.'});

const values=[
 ['Craft over volume','We would rather publish one piece people quote than ten nobody reads.'],
 ['Honest by default','Disclosed participation, real evidence and plain reporting, every time.'],
 ['Small team, real ownership','You own your work end to end and see exactly where it lands.'],
] as const;

export default function Careers(){
 const list=[...openings].sort((a,b)=>b.date.localeCompare(a.date));
 return <Shell className="shell-cinema ip-page">
  <IpAtmos tone="teal"/><Crumbs trail={[{name:'Careers',path:'/careers'}]}/>
  <IpHero tone="teal" eyebrow="Careers" title="Do the work" accent="people actually quote." lead="A small team of writers, researchers and strategists. We write the threads, articles and videos AI engines end up quoting.">
   <LinkBtn href="#openings">See open roles</LinkBtn>
  </IpHero>

  <IpSection id="openings">
   <IpHead eyebrow="Open roles" title={<>Current <em>openings</em></>}/>
   {list.length?<div className="job-list">
    {list.map(j=><Reveal key={j.slug}><Link href={`/careers/${j.slug}`} className="ip-card job">
     <div className="job-main"><h3>{j.title}</h3><p>{j.summary}</p></div>
     <div className="job-meta"><span><Briefcase size={14}/>{j.team} · {j.type}</span><span><MapPin size={14}/>{j.location}</span></div>
     <span className="job-go" aria-hidden="true"><ArrowUpRight size={18}/></span>
    </Link></Reveal>)}
   </div>:<Reveal className="ip-card job-empty">
    <div className="je-art" aria-hidden="true"><span className="je-orbit"/><span className="je-orbit two"/><img src="/brand/nakama-icon-dark.svg" alt=""/></div>
    <div className="je-copy">
     <h3>The team is full, for now.</h3>
     <p>We’re heads-down on client work and not hiring this month. New roles open as we grow, so check back soon. If you’re exceptional at writing, research or community work, we’d still like to hear from you.</p>
     <a className="ip-ghost" href="mailto:contact@nakama.in?subject=Future%20roles%20at%20Nakama">Introduce yourself<ArrowUpRight size={15}/></a>
    </div>
   </Reveal>}
  </IpSection>

  <IpSection>
   <IpHead eyebrow="How we work" title={<>What it’s like <em>here</em></>}/>
   <div className="ip-g3">{values.map(([t,p])=><Reveal key={t} className="ip-card"><h3>{t}</h3><p>{p}</p></Reveal>)}</div>
  </IpSection>
 </Shell>;
}
