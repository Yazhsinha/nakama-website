import {pageMeta,Crumbs} from '@/lib/seo';
import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {Shell} from '../site';
import {IpAtmos,IpHero,IpHead,IpSection,IpCta} from '../inner/kit';
import {articles} from '../journal/all';

export const metadata:Metadata=pageMeta('/resources',{title:'Resources & Field Notes on AI Search — Nakama Growth',description:'Practical field notes and articles on SEO, AI visibility, answer engines, and how brands earn recommendations across AI search.'});

const ART=[
 {bg:'radial-gradient(120% 120% at 0% 0%,#3a2a6b,transparent 60%),radial-gradient(120% 120% at 100% 100%,#7a3a1c,transparent 55%),#14131b',dots:['#f07c32','#9aa6ff','#7fd1c3']},
 {bg:'radial-gradient(120% 120% at 100% 0%,#1d5a52,transparent 60%),radial-gradient(120% 120% at 0% 100%,#4a2a5f,transparent 55%),#14131b',dots:['#7fd1c3','#e8a3c4','#ffb27a']},
 {bg:'radial-gradient(120% 120% at 50% 0%,#6b3a1c,transparent 60%),radial-gradient(120% 120% at 50% 100%,#23315f,transparent 55%),#14131b',dots:['#ffb27a','#7fd1c3','#9aa6ff']},
];

function Art({i}:{i:number}){
 const a=ART[i%ART.length];
 return <div className="ip-art" style={{background:a.bg}} aria-hidden="true">
  <div className="m">
   <svg width="190" height="120" viewBox="0 0 190 120" fill="none">
    {i%3===0&&<><circle cx="60" cy="60" r="40" stroke="rgba(255,255,255,.25)"/><circle cx="130" cy="60" r="40" stroke="rgba(255,255,255,.25)"/><text x="95" y="72" textAnchor="middle" fontSize="40" fontWeight="700" fill="rgba(255,255,255,.85)" fontFamily="Manrope,Arial">?</text></>}
    {i%3===1&&<>{[0,1,2,3].map(k=><rect key={k} x={10+k*45} y={30+(k%2)*14} width="36" height="46" rx="8" stroke="rgba(255,255,255,.3)" fill={k===1?'rgba(255,255,255,.12)':'none'}/>)}</>}
    {i%3===2&&<>{[18,36,28,52,44,70,64].map((h,k)=><rect key={k} x={14+k*24} y={100-h} width="14" height={h} rx="4" fill={k===6?'#ffb27a':'rgba(255,255,255,.22)'}/>)}</>}
   </svg>
  </div>
  {a.dots.map((c,k)=><i key={c} style={{width:90,height:90,background:c,opacity:.35,left:`${15+k*30}%`,top:`${k%2?55:10}%`}}/>)}
 </div>;
}

export default function Resources(){
 const [lead,...more]=articles;
 return (
  <Shell className="resources-page shell-cinema ip-page">
   <IpAtmos tone="teal"/><Crumbs trail={[{name:'Resources',path:'/resources'}]}/>
   <IpHero
    tone="teal"
    eyebrow="Resources"
    title="Notes from the field."
    accent="Ideas you can use."
    lead="Practical reads on SEO, AI visibility, and how brands earn recommendations in search."
   />

   <IpSection id="articles">
    <IpHead eyebrow="Articles" title={<>Field notes on <em>earned visibility.</em></>} lead="Short reads on buyer questions, distribution and measurement."/>
    <div className="ip-g2">
     <Link href={`/journal/${lead.slug}`} className="ip-card ip-article big"><Art i={0}/><div className="ip-article-body"><div className="ip-article-meta"><span>{lead.category}</span><span>{lead.readTime}</span></div><h3>{lead.title}</h3><p>{lead.description}</p><div className="ip-case-go">Read the article<ArrowUpRight size={17}/></div></div></Link>
     {more.map((a,i)=><Link key={a.slug} href={`/journal/${a.slug}`} className="ip-card ip-article"><Art i={i+1}/><div className="ip-article-body"><div className="ip-article-meta"><span>{a.category}</span><span>{a.readTime}</span></div><h3>{a.title}</h3><p>{a.description}</p><div className="ip-case-go">Read the article<ArrowUpRight size={17}/></div></div></Link>)}
    </div>
   </IpSection>

   <IpCta title={<>Want more <em>visibility?</em></>}/>
  </Shell>
 );
}
