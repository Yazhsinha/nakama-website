import {pageMeta,abs,JsonLd,SITE_URL} from '@/lib/seo';
import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowUpRight} from 'lucide-react';
import {Shell,Reveal} from '../../site';
import {IpAtmos,IpHero,IpHead,IpSection} from '../../inner/kit';
import {authors,getAuthor,authorPath,authorUrl,authorId,articlesBy} from '@/lib/authors';
import {articleDate} from '@/lib/feed';

type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return authors.map(a=>({slug:a.slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params;
 const a=getAuthor(slug);
 if(!a)return {title:'Author not found'};
 return pageMeta(authorPath(a.slug),{title:a.metaTitle,description:a.metaDescription,image:{url:abs(a.image.src800),width:a.image.width,height:a.image.height,alt:a.image.alt,type:'image/webp'}});
}

const fmt=(d:string)=>new Date(`${d}T00:00:00Z`).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});

export default async function AuthorPage({params}:Props){
 const {slug}=await params;
 const a=getAuthor(slug);
 if(!a)notFound();
 const list=articlesBy(a).map(x=>({...x,date:articleDate(x.slug)})).sort((p,q)=>q.date.localeCompare(p.date));
 const url=authorUrl(a.slug);
 const org={'@id':`${SITE_URL}/#organization`};
 const graph={
  '@context':'https://schema.org',
  '@graph':[
   {'@type':'ProfilePage','@id':`${url}#profilepage`,url,name:a.metaTitle,description:a.metaDescription,inLanguage:'en',isPartOf:{'@id':`${SITE_URL}/#website`},breadcrumb:{'@id':`${url}#breadcrumb`},mainEntity:{'@id':authorId(a.slug)}},
   {'@type':'Person','@id':authorId(a.slug),name:a.name,jobTitle:a.jobTitle,description:a.bio[0],url,mainEntityOfPage:{'@id':`${url}#profilepage`},image:{'@type':'ImageObject',url:abs(a.image.src800),contentUrl:abs(a.image.src800),width:a.image.width,height:a.image.height,caption:a.image.alt},worksFor:org},
   {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:[{name:'Home',path:'/'},{name:a.name,path:authorPath(a.slug)}].map((c,i)=>({'@type':'ListItem',position:i+1,name:c.name,item:abs(c.path)}))},
   ...(list.length?[{'@type':'ItemList','@id':`${url}#articles`,name:`Articles by ${a.name}`,numberOfItems:list.length,itemListElement:list.map((x,i)=>({'@type':'ListItem',position:i+1,url:abs(`/journal/${x.slug}`),name:x.title}))}]:[]),
  ],
 };
 return <Shell className="author-page shell-cinema ip-page">
  <IpAtmos tone="ember"/>
  <JsonLd data={graph}/>
  <IpHero
   tone="ember"
   eyebrow="Author"
   title={a.name}
   accent=""
   lead={a.bio[0]}
   aside={<div className="author-card">
    <img src={a.image.src} srcSet={`${a.image.src} 400w, ${a.image.src800} 800w`} sizes="(max-width:900px) 200px, 280px" alt={a.image.alt} width={a.image.width} height={a.image.height} decoding="async" fetchPriority="high"/>
    <p className="author-card-role">{a.jobTitle}<small>Nakama Growth</small></p>
   </div>}
  >
   <Link href="/about" className="ip-ghost"><span>About Nakama</span><ArrowUpRight size={15}/></Link>
  </IpHero>

  {a.bio.length>1&&<IpSection className="author-bio-sec">
   <Reveal className="author-bio ip-prose">
    {a.bio.slice(1).map(p=><p key={p}>{p}</p>)}
   </Reveal>
  </IpSection>}

  {list.length>0&&<IpSection id="articles">
   <IpHead eyebrow="Articles" title={<>Written by <em>{a.name}.</em></>}/>
   <div className="author-articles">
    {list.map(x=><Reveal key={x.slug}><Link href={`/journal/${x.slug}`} className="ip-card author-article">
     <span className="author-article-meta">{x.category} · {x.readTime} · {fmt(x.date)}</span>
     <h3>{x.title}</h3>
     <p>{x.description}</p>
     <span className="author-article-go">Read the guide<ArrowUpRight size={16}/></span>
    </Link></Reveal>)}
   </div>
  </IpSection>}
 </Shell>;
}
