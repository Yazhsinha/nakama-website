import type {Metadata} from 'next';

export const SITE_URL=(process.env.NEXT_PUBLIC_SITE_URL||'https://www.nakama.in').replace(/\/$/,'');
export const SITE_NAME='Nakama Growth';
export const SITE_TAGLINE='Be the brand they already know.';
export const SITE_DESCRIPTION='Nakama gets brands named in AI answers. We earn the off-site sources ChatGPT, Perplexity, Gemini and Google AI Overviews rely on: Reddit, YouTube, LinkedIn, Quora, editorial and review sites.';
export const CONTACT_EMAIL='contact@nakama.in';
export const abs=(path='/')=>`${SITE_URL}${path.startsWith('/')?path:`/${path}`}`;

export const OG_IMAGE={url:'/opengraph-image.png',width:1200,height:630,alt:'Nakama Growth — Be the brand they already know.'};
export const FEEDS={'application/rss+xml':[{url:'/rss.xml',title:'Nakama Growth — Field notes'}]};

/** Per-page metadata: canonical URL plus matching Open Graph and Twitter cards. */
export function pageMeta(path:string,{title,description,type='website',publishedTime,modifiedTime,image,author}:{title:string;description:string;type?:'website'|'article';publishedTime?:string;modifiedTime?:string;image?:{url:string;width:number;height:number;alt:string;type?:string};author?:string}):Metadata{
 const ogImage=image??OG_IMAGE;
 return {
  title:{absolute:title},
  description,
  ...(author?{authors:[{name:author}]}:{}),
  alternates:{canonical:path,types:FEEDS},
  openGraph:{type,url:path,siteName:SITE_NAME,title,description,locale:'en_IN',images:[ogImage],...(publishedTime?{publishedTime}:{}),...(modifiedTime?{modifiedTime}:{})},
  twitter:{card:'summary_large_image',title,description,images:image?[image]:['/twitter-image.png']},
 };
}

export const organizationLd={
 '@context':'https://schema.org',
 '@type':'Organization',
 '@id':`${SITE_URL}/#organization`,
 name:SITE_NAME,
 alternateName:'Nakama',
 url:SITE_URL,
 logo:abs('/brand/icon-512.png'),
 image:abs('/opengraph-image.png'),
 sameAs:['https://www.linkedin.com/company/nakama-growth/','https://www.instagram.com/nakama.growth/'],
 email:CONTACT_EMAIL,
 description:SITE_DESCRIPTION,
hasOfferCatalog:{'@type':'OfferCatalog',name:'Nakama Growth plan',itemListElement:[
  {name:'Generative engine optimization (GEO)',slug:'/services/geo'},
  {name:'Answer engine optimization (AEO)',slug:'/services/aeo'},
  {name:'Reddit and community marketing',slug:'/services/reddit'},
  {name:'Content marketing',slug:'/services/content'},
  {name:'YouTube marketing',slug:'/services/youtube'},
  {name:'Digital PR',slug:'/services/digital-pr'},
 ].map(({name,slug})=>({'@type':'Offer',itemOffered:{'@type':'Service','@id':abs(`${slug}#service`),name,url:abs(slug),provider:{'@id':`${SITE_URL}/#organization`}}}))},
 knowsAbout:['Answer engine optimization','Generative engine optimization','AI search visibility','Reddit marketing','YouTube marketing','Digital PR','Content marketing'],
};
export const websiteLd={
 '@context':'https://schema.org',
 '@type':'WebSite',
 '@id':`${SITE_URL}/#website`,
 name:SITE_NAME,
 url:SITE_URL,
 inLanguage:'en',
 publisher:{'@id':`${SITE_URL}/#organization`},
};

export function JsonLd({data}:{data:object|object[]}){
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>;
}

/** BreadcrumbList structured data: Home › Section › Page. */
export function Crumbs({trail}:{trail:{name:string;path:string}[]}){
 const items=[{name:'Home',path:'/'},...trail];
 return <JsonLd data={{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:items.map((c,i)=>({'@type':'ListItem',position:i+1,name:c.name,item:abs(c.path)}))}}/>;
}
