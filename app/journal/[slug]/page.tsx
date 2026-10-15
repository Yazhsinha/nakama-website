import {pageMeta,abs,JsonLd,Crumbs} from '@/lib/seo';
import {articleDate} from '@/lib/feed';
import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft,ArrowUpRight} from 'lucide-react';
import {articles} from '../all';
import {Shell} from '../../site';
import {IpAtmos} from '../../inner/kit';
type Props={params:Promise<{slug:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params;
 const article=articles.find(a=>a.slug===slug);
 if(!article)return {title:'Note not found'};
 return pageMeta(`/journal/${article.slug}`,{
  title:article.metaTitle??`${article.title.replace(/\.$/,'')} — Nakama Growth`,
  description:article.description,
  type:'article',
  publishedTime:article.publishedAt??articleDate(article.slug),
  modifiedTime:article.publishedAt??article.date,
  image:article.ogImage,
  author:article.authorName,
 });
}
export default async function ArticlePage({params}:Props){
 const {slug}=await params;
 const a=articles.find(item=>item.slug===slug);
 if(!a)notFound();
 const next=articles[(articles.indexOf(a)+1)%articles.length];
 const html=a.bodyHtml;
 return <Shell className="article-page shell-cinema ip-page ip-article-page">
  {a.jsonLd?<JsonLd data={a.jsonLd}/>:<><Crumbs trail={[{name:'Resources',path:'/resources'},{name:a.title.replace(/\.$/,''),path:`/journal/${a.slug}`}]}/><JsonLd data={{"@context":"https://schema.org","@type":"Article",headline:a.title,description:a.description,articleSection:a.category,datePublished:articleDate(a.slug),dateModified:articleDate(a.slug),mainEntityOfPage:abs(`/journal/${a.slug}`),url:abs(`/journal/${a.slug}`),image:abs("/opengraph-image.png"),author:{"@type":"Organization",name:"Nakama Growth",url:abs("/")},publisher:{"@id":abs("/#organization")}}}/></>}
  <IpAtmos tone="teal"/>
  {html?<article><div className="article-rich page-width"><Link className="back-link" href="/resources#articles"><ArrowLeft size={16}/>Resources</Link><div dangerouslySetInnerHTML={{__html:html}}/></div></article>:<article><header className="article-heading page-width"><Link className="back-link" href="/resources#articles"><ArrowLeft size={16}/>Resources</Link><div className="article-meta"><span>{a.category}</span><span>{a.readTime}</span></div><h1>{a.title}</h1><p>{a.description}</p><div className="article-byline"><span className="byline-monogram">n.</span><span>Nakama Growth<small>Perspectives & practice</small></span></div></header><div className="article-body-layout page-width"><aside><span className="eyebrow">In this note</span><nav>{a.sections.map((s,i)=><a href={`#part-${i+1}`} key={s.heading}>{s.heading}</a>)}</nav></aside><div className="article-body">{a.sections.map((s,i)=><section id={`part-${i+1}`} key={s.heading}><span className="article-part">0{i+1}</span><h2>{s.heading}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}</section>)}<p className="article-endnote">A note on our approach, from the Nakama team.</p></div></div></article>}
  <Link href={`/journal/${next.slug}`} className={`next-article page-width${next.coverImage?' has-image':''}`}>{next.coverImage&&<img className="next-article-img" src={next.coverImage.src} alt="" width={next.coverImage.width} height={next.coverImage.height} loading="lazy" decoding="async"/>}<div><span className="eyebrow">Keep reading</span><h2>{next.title}</h2></div><ArrowUpRight size={27}/></Link>
 </Shell>;
}
