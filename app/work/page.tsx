import {pageMeta,Crumbs} from '@/lib/seo';
import type {Metadata} from 'next';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpSection,IpHead,LinkBtn,IpCta} from '../inner/kit';
import {WorkBoard} from './WorkBoard';
import {CaseCards} from './CaseCards';
import {caseStudies} from '@/lib/content';
export const metadata:Metadata=pageMeta('/work',{title:'Client Work & AI Search Results — Nakama Growth',description:'Documented client placements in Google AI Overviews, AI Mode, Perplexity, ChatGPT and YouTube. Pick a client and run the query yourself.'});
export default function Work(){
 return <Shell className="work-page shell-cinema ip-page">
  <IpAtmos tone="ember"/><Crumbs trail={[{name:'Work',path:'/work'}]}/>
  <IpHero tone="ember" eyebrow="Work" title="Built together." accent="Found in the right places." lead="Five clients, each with the exact searches where our work surfaced. Open one and run the query on the same engine.">
   <LinkBtn href="/resources#articles" ghost>Read the field notes</LinkBtn>
  </IpHero>
  {caseStudies.length?<IpSection id="case-studies"><IpHead eyebrow="Case studies" title={<>Stories in <em>depth</em></>}/><Reveal><CaseCards items={[...caseStudies].sort((a,b)=>b.date.localeCompare(a.date))}/></Reveal></IpSection>:null}
  <IpSection className="ip-work-proof"><Reveal><WorkBoard/></Reveal></IpSection>
  <IpCta title={<>Want results like <em>these?</em></>}/>
 </Shell>;
}
