import {pageMeta,Crumbs} from '@/lib/seo';
import type {Metadata} from 'next';
import Link from 'next/link';
import {Check} from 'lucide-react';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpSection,BookBtn,LinkBtn,FitSplit,IpFaq} from '../inner/kit';
import {QuoteForm} from './QuoteForm';

export const metadata:Metadata=pageMeta('/pricing',{title:'Pricing: One All-Inclusive Plan — Nakama Growth',description:'One Nakama plan with every AI visibility service included, with no tiers or add-ons. Need enterprise scope or custom pricing? Book a call and we will scope it.'});

const features=[
 ['Buyer prompt map','the exact questions your buyers ask AI'],
 ['AI visibility tracking','ChatGPT, Perplexity, Gemini and Google AI Overviews'],
 ['Competitor and source audit','which sites AI trusts in your category'],
 ['Editorial content','answer-first articles, comparisons and buyer guides'],
 ['Community participation','Reddit, Quora and forums, always disclosed'],
 ['YouTube and video','scripts, edits and short-form'],
 ['Medium, Substack and LinkedIn','placements where your buyers read'],
 ['Digital PR and listicles',<>outreach to the sources AI engines cite. Learn more about our <Link href="/services/digital-pr">Digital PR services</Link>.</>],
 ['Review site presence','G2 and category review pages kept current'],
 ['A dedicated strategist','one owner for your account, every month'],
 ['Your review before anything goes live','nothing publishes without your sign-off'],
 ['Monthly evidence report','citations, mentions and next moves'],
] as const;

const faq=[
 ['Why only one plan?','Because tiers make you guess what you need. Every partner gets the full set of services from day one, and we put more effort where your category needs it most.'],
 ['How quickly will I get a quote?','Fill in the form and book the 15-minute pricing call. We send a written proposal with scope and price within two business days of that call.'],
 ['Is there a minimum commitment?','Three months, because earned visibility compounds and the first month is mostly research and setup.'],
 ['What do you need from our team?','Product context, access to someone who knows your customers, and a quick review of drafts. Typically an hour or two a week.'],
] as const;

export default function Pricing(){
 return (
  <Shell className="pricing-page shell-cinema ip-page">
   <IpAtmos tone="ember"/><Crumbs trail={[{name:'Pricing',path:'/pricing'}]}/>
   <IpHero
    tone="ember"
    eyebrow="Pricing"
    title="One plan. Everything included."
    accent="No tiers or add‑ons."
    lead="Every partner gets the full Nakama team from day one: strategy, content, community, video, PR and reporting. No upgrades to unlock, no surprises."
   >
    <LinkBtn href="#quote">Get your quote</LinkBtn>
    <LinkBtn href="#plan" ghost>See what’s included</LinkBtn>
   </IpHero>

   <IpSection id="plan">
    <p className="pr-aeo-note">Comparing providers? See how <Link href="/journal/best-aeo-agencies#how-much-do-aeo-services-cost">AEO services cost</Link> across ten agencies.</p>
    <Reveal className="ip-card pr-one">
     <div className="pr-one-head">
      <div>
       <span className="pr-one-tag">The Nakama plan</span>
       <h2>Everything you need to show up in AI answers.</h2>
      </div>
      <LinkBtn href="#quote">Get your quote</LinkBtn>
     </div>
     <ul className="pr-feats">
      {features.map(([t,d])=><li key={t}><span className="pr-tick"><Check size={14}/></span><span><b>{t}</b> — {d}</span></li>)}
     </ul>
    </Reveal>

    <Reveal className="pr-ent">
     <h2>Need enterprise or custom pricing?</h2>
     <p>For large teams, multiple brands or markets, and agencies that want white-label delivery, we build a tailored plan with dedicated support. Talk to us and we’ll shape it around your needs.</p>
     <BookBtn>Schedule a call</BookBtn>
    </Reveal>
   </IpSection>

   <IpSection id="quote">
    <Reveal className="ip-quote">
     <div className="ip-quote-side">
      <span className="ip-eyebrow"><i/>Custom quote</span>
      <h2>Get your <em>custom quote.</em></h2>
      <p>Tell us a little about your brand. When you send it, you will pick a time for a 15-minute pricing call, without leaving this page.</p>
      <ol className="ip-steps">
       <li><b>1</b><div><strong>Share the basics</strong><span>Two minutes. Your answers come with you to the call.</span></div></li>
       <li><b>2</b><div><strong>15-minute pricing call</strong><span>We confirm goals, channels and where you appear today.</span></div></li>
       <li><b>3</b><div><strong>Written proposal</strong><span>Scope, timeline and price, within two business days.</span></div></li>
      </ol>
     </div>
     <QuoteForm/>
    </Reveal>
   </IpSection>

   <FitSplit eyebrow="Before you ask for a quote" title={<>Are we the <em>right fit?</em></>}/>
   <IpFaq items={faq} eyebrow="Pricing questions"/>
  </Shell>
 );
}
