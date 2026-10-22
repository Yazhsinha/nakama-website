import {pageMeta} from '@/lib/seo';
import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft,ArrowUpRight} from 'lucide-react';
import {Shell,Reveal} from '../../site';
import {IpAtmos} from '../../inner/kit';
import {openings,toSections} from '@/lib/content';

type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return openings.map(o=>({slug:o.slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const o=openings.find(x=>x.slug===slug);if(!o)return {title:'Careers'};return pageMeta(`/careers/${o.slug}`,{title:`${o.title} — Careers at Nakama Growth`,description:o.summary});}

export default async function Job({params}:Props){
 const {slug}=await params;const o=openings.find(x=>x.slug===slug);if(!o)notFound();
 const apply=o.apply||`mailto:contact@nakama.in?subject=${encodeURIComponent('Application: '+o.title)}`;
 return <Shell className="shell-cinema ip-page">
  <IpAtmos tone="teal"/>
  <article className="ip-wrap doc">
   <Reveal className="doc-head">
    <Link href="/careers" className="doc-back"><ArrowLeft size={15}/>All roles</Link>
    <span className="doc-kicker">{o.team} · {o.type} · {o.location}</span>
    <h1>{o.title}</h1>
    <p className="doc-lead">{o.summary}</p>
    <a className="ip-btn" href={apply} target={apply.startsWith('http')?'_blank':undefined} rel="noreferrer"><span>Apply for this role</span><i aria-hidden="true"><ArrowUpRight size={16}/></i></a>
   </Reveal>
   <div className="doc-body">{toSections(o.body,'The role').map(s=><Reveal key={s.heading} className="doc-sec"><h2>{s.heading}</h2>{s.paragraphs.map((p,i)=><p key={i}>{p}</p>)}</Reveal>)}</div>
  </article>
 </Shell>;
}
