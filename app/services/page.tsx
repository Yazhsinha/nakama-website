import {pageMeta,Crumbs,JsonLd,abs,SITE_URL} from '@/lib/seo';
import type {Metadata} from 'next';
import Link from 'next/link';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpHead,IpSection,LinkBtn,IpFaq} from '../inner/kit';
import {BookCallButton} from '@/components/booking/BookCall';
import {SvcIcon} from './icons';
import './services.css';

export const metadata:Metadata=pageMeta('/services',{title:'GEO, AEO & AI Visibility Services - Nakama Growth',description:'GEO, AEO, an AI visibility audit, Reddit and community, content, YouTube and digital PR, run by one team to get you named in AI answers.'});

const services=[
 {id:'geo',href:'/services/geo',eyebrow:'Generative engines',name:'GEO services',lead:'Build a brand AI understands.',who:'For SaaS, tech & AI teams',body:'We audit where AI names your competitors, then build the product context and third-party sources ChatGPT, Perplexity, Gemini and Google AI Overviews cite.',items:['Buyer prompt map and competitor audits','Product and category context AI can reuse','Source strategy across communities, editorial and review sites']},
 {id:'aeo',href:'/services/aeo',eyebrow:'Answer engines',name:'AEO services',lead:'Be part of the answer.',who:'For SaaS, tech & AI teams',body:'We turn buyer questions into answer-first pages and FAQs that search and answer engines can retrieve and quote.',items:['Buyer-question and answer-gap research','Answer-first articles, comparisons and FAQs','Citation and visibility tracking']},
 {id:'ai-visibility-audit',href:'/services/ai-visibility-audit',eyebrow:'Diagnosis',name:'AI Visibility Audit',lead:'See what AI answers say.',who:'For SaaS, tech & AI teams',body:'A free sample and a paid audit on one page. Nakama Growth reports each engine on its own: mentioned, recommended and cited, with no blended score.',items:['Free sample: 1 to 3 prompts, 2 engines, 3 runs','Paid audit: dated runs and average position per engine','Roadmap, walkthrough and a re-test date'],quoteHref:'/pricing#quote'},
 {id:'reddit',href:'/services/reddit',name:'Reddit & community',lead:'Earn a place in the conversation.',body:'Useful, transparent participation in the communities your buyers trust, always within each community’s rules.',items:['Subreddit and conversation research','Helpful, disclosed answers and threads','Mention monitoring across Reddit, Quora and Discord']},
 {id:'content',href:'/services/content',name:'Content & editorial',lead:'Make your expertise useful.',body:'Original articles, comparisons and buyer guides that turn product knowledge into content people, and AI engines, rely on.',items:['Expert-led articles on Medium, Substack and LinkedIn','Comparison pages and buyer guides','Research, fact-checking and refreshes']},
 {id:'youtube',href:'/services/youtube',name:'YouTube & video',lead:'Questions, answered on camera.',body:'From idea to published video: explainers, walkthroughs and honest comparisons built around what buyers search, so AI answers can cite the work.',items:['YouTube strategy, research and scripting','Editing, short-form cuts and thumbnails','Titles, chapters and publishing']},
 {id:'digital-pr',href:'/services/digital-pr',name:'Digital PR & links',lead:'Connect to credible sources.',body:'Relevant editorial placements and relationships that put your brand in front of the right audiences, and the right crawlers.',items:['Publisher and partner research','Editorial outreach and linkable assets','Placement and source-quality reporting']},
] as const;

const serviceUrl=(s:(typeof services)[number])=>abs(s.href);

const serviceListLd={
 '@context':'https://schema.org',
 '@type':'ItemList',
 '@id':abs('/services#services'),
 name:'Nakama Growth plan',
 itemListOrder:'https://schema.org/ItemListOrderAscending',
 numberOfItems:services.length,
 itemListElement:services.map((s,i)=>({'@type':'ListItem',position:i+1,item:{'@type':'Service','@id':serviceUrl(s),name:s.name,description:s.body,url:serviceUrl(s),provider:{'@id':`${SITE_URL}/#organization`}}})),
};

const flow=[
 ['AI answers keep naming your competitors.','We lead with the answer audit and GEO work, then go after the exact sources that keep naming them.'],
 ['Your category is new. Nobody searches it yet.','Editorial and video come first, explaining the problem in the words buyers use, before we chase comparisons.'],
 ['Reddit already has opinions about you','Community work starts with listening. We answer what is being asked, openly, before adding anything new.'],
] as const;

const faq=[
 ['What if a channel doesn’t suit us?','Then we skip that channel and put the effort into ones that fit. Usual skips are a placement surface with little buyer presence in your category, or a community whose norms block useful posting. We weigh citation value first: YouTube is often among the sources AI answers cite, so we drop it only when it clearly won’t help your topics.'],
 ['How is this different from SEO?','SEO focuses on your own site ranking in search. We focus on your brand being mentioned and cited everywhere buyers research, including AI answers, communities and video. The two work well together.'],
 ['Is community work transparent?','Always. We participate openly, follow each community’s rules and never post fake reviews or hidden endorsements.'],
 ['Which AI engines do you work toward?','ChatGPT, Perplexity, Gemini and Google AI Overviews. How often each engine cites a given source varies by tool and changes over time.'],
 ['What’s in the early work?','An answer and source audit first, then the off-site work those engines lean on: communities, video, editorial and review sites. We set the order from your category. We don’t promise a fixed week count.'],
 ['Which service do I need?','If buyers already ask AI about your category, start with GEO services and the answer audit. If you need clear answers to specific buyer questions on your pages and FAQs, lean on AEO services. Reddit, content, YouTube and digital PR are the channel work that feeds both. Not sure? Get a quote or book a call and we’ll map the order with you.'],
] as const;

export default function Services(){
 return (
  <Shell className="services-page shell-cinema ip-page">
   <JsonLd data={serviceListLd}/>
   <IpAtmos tone="teal"/><Crumbs trail={[{name:'Services',path:'/services'}]}/>
   <IpHero
    tone="teal"
    eyebrow="Services"
    title="AI visibility services "
    accent="for SaaS, tech and AI."
    lead="One team across seven services, aimed at the questions your buyers ask before they shortlist."
   >
    <LinkBtn href="/pricing#quote">Get a quote</LinkBtn>
    <LinkBtn href="#services" ghost>Explore services</LinkBtn>
   </IpHero>

   <IpSection id="services">
    <IpHead eyebrow="What we do" title={<>Seven services. One goal.<br/><em>Get named when buyers ask AI.</em></>} lead="Six channel services come with the Nakama Growth plan. The AI Visibility Audit is booked on its own."/>
    <div className="ip-g3">
     {services.map(s=><Reveal className="ip-card ip-svc" key={s.id} id={s.id}>
      <div className="ip-svc-top">
       <span className="ip-svc-ico"><SvcIcon name={s.id}/></span>
       {'eyebrow' in s&&<span className="ip-svc-eyebrow">{s.eyebrow}</span>}
      </div>
      <div className="ip-svc-head">
       <h3><Link href={s.href} className="ip-svc-cardlink">{s.name}</Link></h3>
       <p className="ip-svc-lead">{s.lead}</p>
       {'who' in s&&<p className="ip-svc-for">{s.who}</p>}
      </div>
      <div className="ip-svc-body">
       <p>{s.body}</p>
       <ul>{s.items.map(i=><li key={i}>{i}</li>)}{'quoteHref' in s&&<li className="ip-svc-quote"><Link href={s.quoteHref}>Get a quote</Link></li>}</ul>
      </div>
     </Reveal>)}
    </div>
    <div className="ip-svc-band">
     <p>Not sure where to start?<span>Every partner gets the six channel services. We pick the order with you.</span></p>
     <div className="ip-svc-band-actions">
      <Link className="ip-svc-btn ip-svc-btn-solid" href="/pricing#quote">Get a quote</Link>
      <BookCallButton className="ip-svc-btn ip-svc-btn-line">Book a call</BookCallButton>
     </div>
    </div>
   </IpSection>

   <IpSection>
    <IpHead eyebrow="Starting points" title={<>Where the effort <em>goes first.</em></>} lead="Every partner gets the six channel services. What changes is the order."/>
    <div className="ip-flow">
     {flow.map(([t,p])=><Reveal className="ip-card" key={t}><h3>{t}</h3><p>{p}</p></Reveal>)}
    </div>
   </IpSection>

   <IpSection>
    <Reveal className="ip-agency">
     <div>
      <span className="ip-eyebrow"><i/>For agencies</span>
      <h2>White-label AI visibility <em>under your brand.</em></h2>
     </div>
     <div>
      <p>Nakama Growth runs GEO, YouTube, content and the channel work behind your name. Built for agencies that want a specialist partner, not another logo on the hub.</p>
      <div className="ip-actions"><LinkBtn href="/white-label">See the white-label program</LinkBtn></div>
     </div>
    </Reveal>
   </IpSection>

   <IpFaq items={faq}/>
   <section className="svc-next-wrap" aria-label="Next step">
    <div className="ip-wrap">
     <div className="svc-next">
      <div className="svc-next-copy">
       <p className="svc-next-eye"><span className="svc-next-dot" aria-hidden="true"/>Next step</p>
       <h2>Let’s map where your brand <em>should show up next.</em></h2>
       <p className="svc-next-body">Every engagement is shaped around your product, your buyers and your category. Tell us where you are, and we’ll come back with a plan and a quote.</p>
       <p className="svc-next-meta"><span aria-hidden="true"/>Nakama Growth</p>
      </div>
      <aside className="svc-next-rail" aria-label="Actions">
       <svg className="svc-next-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><path d="M9 57V30A23 23 0 0 1 55 30V57H42V30A10 10 0 0 0 22 30V57Z" fill="#f3f1ed"/><circle cx="32" cy="30" r="5.6" fill="#f07c32"/></svg>
       <div className="svc-next-rail-in">
        <p className="svc-next-kicker"><span aria-hidden="true">●</span>Engage</p>
        <p className="svc-next-note">Two ways in. Same team behind both.</p>
        <div className="svc-next-actions">
         <Link className="svc-next-btn svc-next-btn-primary" href="/pricing#quote">Get a quote</Link>
         <BookCallButton className="svc-next-btn svc-next-btn-line">Book a call</BookCallButton>
        </div>
       </div>
      </aside>
     </div>
    </div>
   </section>
  </Shell>
 );
}
