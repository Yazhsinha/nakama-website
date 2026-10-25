import {pageMeta,Crumbs} from '@/lib/seo';
import type {Metadata} from 'next';
import Link from 'next/link';
import {Check} from 'lucide-react';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpHead,IpSection,BookBtn,LinkBtn,IpFaq,IpCta} from '../inner/kit';
import {BookCallButton} from '@/components/booking/BookCall';
import {SvcIcon} from './icons';
import './services.css';

export const metadata:Metadata=pageMeta('/services',{title:'AEO, GEO & AI Visibility Services — Nakama Growth',description:'GEO, AEO, Reddit and community, content, YouTube and digital PR, run by one team and included in one plan to get you named in AI answers.'});

const services=[
 {id:'geo',eyebrow:'Generative engines',name:'GEO services',lead:'Build a brand AI understands.',who:'For B2B SaaS & AI',body:'We strengthen the content, context and third-party sources that teach ChatGPT, Perplexity, Gemini and Google where your product fits.',items:['AI answer and competitor audits','Consistent product and category context','Source strategy for citation-ready content']},
 {id:'aeo',eyebrow:'Answer engines',name:'AEO services',lead:'Be part of the answer.',who:'For B2B SaaS & AI',body:'We turn buyer questions into clear, structured answers that search and answer engines can understand, retrieve and quote.',items:['Buyer-question and answer-gap research','Answer-first content and FAQ structure','Citation and visibility tracking']},
 {id:'reddit',name:'Reddit & community',lead:'Earn a place in the conversation.',body:'Useful, transparent participation in the communities your buyers trust, always within each community’s rules.',items:['Subreddit and conversation research','Helpful, disclosed answers and threads','Mention monitoring across Reddit, Quora and Discord']},
 {id:'content',name:'Content & editorial',lead:'Make your expertise useful.',body:'Original articles, comparisons and buyer guides that turn product knowledge into content people, and AI engines, rely on.',items:['Expert-led articles on Medium, Substack and LinkedIn','Comparison pages and buyer guides','Research, fact-checking and refreshes']},
 {id:'youtube',name:'YouTube & video',lead:'Questions, answered on camera.',body:'From idea to published video: explainers, walkthroughs and honest comparisons built around what buyers search.',items:['YouTube strategy, research and scripting','Editing, short-form cuts and thumbnails','Titles, chapters and publishing']},
 {id:'digital-pr',name:'Digital PR & links',lead:'Connect to credible sources.',body:'Relevant editorial placements and relationships that put your brand in front of the right audiences, and the right crawlers.',items:['Publisher and partner research','Editorial outreach and linkable assets','Placement and source-quality reporting']},
] as const;

const flow=[
 ['AI answers keep naming your competitors.','We lead with the answer audit and GEO work, then go after the exact sources that keep naming them.'],
 ['Your category is new and nobody searches for it yet','Editorial and video come first, explaining the problem in the words buyers use, before we chase comparisons.'],
 ['Reddit already has opinions about you','Community work starts with listening. We answer what is being asked, openly, before adding anything new.'],
] as const;

const faq=[
 ['What if a channel doesn’t suit us?','Then we skip it. A niche B2B tool may not need YouTube, so that effort moves to the channels that do matter for you.'],
 ['How is this different from SEO?','SEO focuses on your own site ranking in search. We focus on your brand being mentioned and cited everywhere buyers research, including AI answers, communities and video. The two work well together.'],
 ['Is community work transparent?','Always. We participate openly, follow each community’s rules and never post fake reviews or hidden endorsements.'],
] as const;

export default function Services(){
 return (
  <Shell className="services-page shell-cinema ip-page">
   <IpAtmos tone="teal"/><Crumbs trail={[{name:'Services',path:'/services'}]}/>
   <IpHero
    tone="teal"
    eyebrow="Services"
    title="One system for"
    accent="earned visibility."
    lead="Six disciplines, one team, all aimed at the questions your buyers ask before they shortlist."
   >
    <LinkBtn href="/pricing#quote">Get your custom quote</LinkBtn>
    <LinkBtn href="#services" ghost>Explore services</LinkBtn>
   </IpHero>

   <IpSection id="services">
    <IpHead eyebrow="What we do" title={<>Six capabilities. <em>One shared goal.</em></>} lead="All six come with the Nakama plan. We weight them toward the channels your category actually leans on."/>
    <div className="ip-g3">
     {services.map(s=><Reveal className="ip-card ip-svc" key={s.id} id={s.id}>
      <div className="ip-svc-top">
       <span className="ip-svc-ico"><SvcIcon name={s.id}/></span>
       {'eyebrow' in s&&<span className="ip-svc-eyebrow">{s.eyebrow}</span>}
      </div>
      <div className="ip-svc-head">
       <h3>{s.name}</h3>
       <p className="ip-svc-lead">{s.lead}</p>
       {'who' in s&&<p className="ip-svc-for">{s.who}</p>}
      </div>
      <div className="ip-svc-body">
       <p>{s.body}</p>
       <ul>{s.items.map(i=><li key={i}>{i}</li>)}</ul>
      </div>
     </Reveal>)}
    </div>
    <div className="ip-svc-band">
     <p>Not sure where to start?<span>Every partner gets all six. We pick the order with you.</span></p>
     <div className="ip-svc-band-actions">
      <Link className="ip-svc-btn ip-svc-btn-solid" href="/pricing#quote">Get a quote</Link>
      <BookCallButton className="ip-svc-btn ip-svc-btn-line">Book a call</BookCallButton>
     </div>
    </div>
   </IpSection>

   <IpSection>
    <IpHead eyebrow="Starting points" title={<>Where the effort <em>goes first.</em></>} lead="Every partner gets all six. What changes is the order."/>
    <div className="ip-flow">
     {flow.map(([t,p])=><Reveal className="ip-card" key={t}><h3>{t}</h3><p>{p}</p></Reveal>)}
    </div>
   </IpSection>

   <IpSection>
    <Reveal className="ip-agency">
     <div>
      <span className="ip-eyebrow"><i/>For agencies</span>
      <h2>Your team, with <em>more reach.</em></h2>
     </div>
     <div>
      <p>White-label AI visibility, content, video and reporting for agencies that want a specialist partner behind their name.</p>
      <ul>{['Your branding on every deliverable','Direct line between our team and yours','Capacity that scales with your roster'].map(i=><li key={i}><Check size={16}/>{i}</li>)}</ul>
      <div className="ip-actions"><BookBtn>Talk partnerships</BookBtn><LinkBtn href="/white-label" ghost>See the white-label program</LinkBtn></div>
     </div>
    </Reveal>
   </IpSection>

   <IpFaq items={faq}/>
   <IpCta/>
  </Shell>
 );
}
