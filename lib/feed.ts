import {articles} from '@/app/journal/all';
import {posts,caseStudies,openings} from '@/lib/content';
import {authors,authorPath} from '@/lib/authors';

/** The original article library shipped on 28 Sep 2026; admin posts carry their own date. */
export const LIBRARY_DATE='2026-09-28';

export function articleDate(slug:string){return posts.find(p=>p.slug===slug)?.date||articles.find(a=>a.slug===slug)?.date||LIBRARY_DATE;}
export const feedArticles=articles.map(a=>({...a,date:articleDate(a.slug)}));

export const corePages:{path:string;title:string;summary:string;priority:number;freq:'weekly'|'monthly'|'yearly';src:string[]}[]=[
 {path:'/',title:'Home',summary:'What Nakama does: gets brands named in AI answers through earned, off-site sources.',priority:1,freq:'weekly',src:['app/page.tsx', 'app/HomeSections.tsx', 'app/ContentSections.tsx', 'app/proof-data.ts', 'app/hero-panels.ts', 'components']},
 {path:'/services',title:'Services',summary:'AEO, GEO, Reddit and community, content and editorial, YouTube and video, digital PR, plus measurement.',priority:.9,freq:'monthly',src:['app/services']},
 {path:'/work',title:'Work',summary:'Documented client placements in Google AI Overviews, AI Mode, Perplexity, ChatGPT, YouTube and search, with queries you can run.',priority:.9,freq:'weekly',src:['app/work', 'app/proof-data.ts', 'content/case-studies.json']},
 {path:'/process',title:'Process',summary:'Understand, create, place, prove: the monthly cycle and working cadence.',priority:.8,freq:'monthly',src:['app/process']},
 {path:'/pricing',title:'Pricing',summary:'One all-inclusive Nakama plan, enterprise and custom pricing, and a quote form.',priority:.8,freq:'monthly',src:['app/pricing']},
 {path:'/about',title:'About',summary:'Who Nakama is and the principles behind the work.',priority:.7,freq:'monthly',src:['app/about']},
 {path:'/resources',title:'Resources',summary:'Field notes on AI visibility and an index of client work.',priority:.7,freq:'weekly',src:['app/resources', 'app/journal', 'content/posts.json', 'content/case-studies.json']},
 {path:'/careers',title:'Careers',summary:'Open roles at Nakama.',priority:.5,freq:'weekly',src:['app/careers', 'content/careers.json']},
 ...authors.map(a=>({path:authorPath(a.slug),title:a.name,summary:`${a.jobTitle} of Nakama Growth, and author of the Nakama guides to AEO and GEO agencies.`,priority:.5,freq:'monthly' as const,src:['app/authors','lib/authors.ts']})),
 {path:'/contact',title:'Contact',summary:'Book a call, request a quote or email hello@nakama.in.',priority:.6,freq:'yearly',src:['app/contact']},
 {path:'/privacy',title:'Privacy',summary:'Privacy policy.',priority:.2,freq:'yearly',src:['app/privacy']},
 {path:'/terms',title:'Terms',summary:'Terms of service.',priority:.2,freq:'yearly',src:['app/terms']},
];
export {caseStudies,openings};

/** Shared parts every page renders (header, footer, global styles). */
export const SHARED_SOURCES=['app/layout.tsx','app/site.tsx','app/globals.css'];
