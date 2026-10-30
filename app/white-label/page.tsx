import type React from 'react';
import {pageMeta,Crumbs} from '@/lib/seo';
import type {Metadata} from 'next';
import {PenLine,MessageCircle,Sparkles,FileText,Share2,Link2,ChartNoAxesCombined,EyeOff,Handshake,Tag,Palette} from 'lucide-react';
import {Shell,Reveal} from '../site';
import Link from 'next/link';
import {IpAtmos,IpHero,IpHead,IpSection,BookBtn,LinkBtn,IpFaq,IpCta} from '../inner/kit';
import {LiteYouTube} from './LiteYouTube';
import {StickyBook} from './StickyBook';
import {HeroGate,CtaGate} from './Gate';
import {Spotlight} from './Spotlight';
import './white-label.css';

export const metadata:Metadata={
 ...pageMeta('/white-label',{title:'White label GEO and YouTube services for agencies | Nakama Growth',description:'Nakama Growth creates YouTube videos end to end and runs AEO and GEO, Reddit, content, digital PR and link building white-label, under your agency’s brand.'}),
};

const how=[
 {icon:Palette,t:'Your brand',p:'Unbranded delivery is available, so work goes to your client under your name.'},
 {icon:EyeOff,t:'We stay in the background',p:'You stay the client’s point of contact.'},
 {icon:Handshake,t:'Non-solicit',p:'Available on request. We don’t approach or pitch your clients.'},
 {icon:Tag,t:'You set your price',p:'You decide what to charge your clients.'},
] as const;

const yt=[
 ['Topic research from buyer prompts','We start from the questions your client’s buyers ask AI tools.'],
 ['Scripts','Scripts that answer one buyer question clearly.'],
 ['Shoot and edit','Filmed and edited by our team.'],
 ['Thumbnails','Designed for each video.'],
 ['Titles and descriptions','Written in the words buyers use.'],
 ['Publishing','Published on the client’s channel.'],
 ['Repurposing','Cut into Shorts, Reels, TikTok and Facebook clips.'],
] as const;

const videos=[
 {id:'QgVZs0fcTd8',t:'What Is the Best Local SEO Tool for Multi-Location Brands in 2026?',c:'Local SEO',p:'A buyer’s guide to choosing a local SEO tool when you manage many locations.'},
 {id:'_qmU2pb-0sc',t:'How to Use Claude for RFP Responses Without One Giant Prompt (2026)',c:'RFP workflows',p:'A practical guide to using Claude for RFP responses by breaking the work into smaller prompts instead of one giant one.'},
 {id:'elKnpdCfQEo',t:'What Is AI RFP Software? How It Works and How to Choose (2026)',c:'AI RFP software',p:'A plain walkthrough of what AI RFP software does and how a team should pick one.'},
] as const;

const services=[
 {icon:PenLine,t:'Publishing platforms',p:'Articles on Medium, LinkedIn Pulse, Substack and DEV Community.'},
 {icon:MessageCircle,t:'Reddit and Quora',p:'Posts, comments and answers in the communities where buyers ask for advice, written to be genuinely useful.'},
 {icon:Sparkles,t:'AEO and GEO',p:'Pages and content shaped around the questions buyers ask AI tools.'},
 {icon:FileText,t:'Content',p:'Articles and guides that answer a buyer’s question early.'},
 {icon:Share2,t:'Digital PR',p:<>Stories pitched to get your client named on third-party sites buyers read. See our <Link href="/services/digital-pr">Digital PR services</Link>.</>},
 {icon:Link2,t:'Link building',p:'Editorial links from relevant sites, placed in context.'},
 {icon:ChartNoAxesCombined,t:'Monthly AI-visibility report',p:<>Where your client shows up in AI answers. See how we approach a <Link href="/journal/geo-audit">GEO audit</Link>.</>},
] as const;

const steps=[
 ['Book a call','Tell us about the client and their market.'],
 ['Share deliverables and target queries','Tell us what you need and which buyer questions matter.'],
 ['Get a tailored offer','We reply with a package built around those queries.'],
 ['We deliver, and you report','The work runs behind your brand, with a monthly AI-visibility report.'],
] as const;

const faq=[
 ['Who do my clients deal with?','You. You stay the point of contact, and work can be delivered unbranded under your name.'],
 ['Will you sign an NDA?','Yes. We’re happy to sign an NDA, and your clients only hear from you.'],
 ['Are revisions included?','Yes. Revision rounds are included on videos and content.'],
 ['What if a Reddit post is removed or a link drops?','We replace it.'],
 ['Is there a minimum spend or contract length?','No. There is no minimum spend and no lock-in contract.'],
 ['Can we start with YouTube only?','Yes. You can start with YouTube only and add other services later.'],
 ['Can you guarantee AI citations?','No. We build the work to be easy for AI tools to mention and cite, but nobody controls what an AI answer includes.'],
 ['How is pricing set?','Pricing is custom and based on what each client needs. Share the requirements and we’ll send an offer.'],
 ['Who is this for?','Agencies whose clients want to show up when buyers ask AI tools what to choose.'],
 ['Which channels do you cover?','YouTube, AEO and GEO, Reddit and Quora, content, digital PR, link building and publishing platforms like Medium, LinkedIn Pulse, Substack and DEV Community.'],
 ['How do you report results?','A monthly AI-visibility report showing where the brand appears in AI answers.'],
] as const;

export default function WhiteLabel(){
 return (
  <Shell className="white-label-page shell-cinema ip-page">
   <IpAtmos tone="ember"/><Crumbs trail={[{name:'Services',path:'/services'},{name:'White label',path:'/white-label'}]}/>
   <IpHero
    tone="ember"
    aside={<HeroGate/>}
    eyebrow="White label for agencies"
    title="Add YouTube to your AI visibility retainers. "
    accent="Under your brand."
    lead="Nakama Growth creates YouTube videos end to end, from script to publish, and runs the rest of your AI visibility work white-label. Every piece is built to get cited when buyers ask ChatGPT, Perplexity, Gemini and Google AI Overviews what to choose."
   >
    <BookBtn>Book a call</BookBtn>
    <LinkBtn href="#youtube" ghost>See the YouTube service</LinkBtn>
   </IpHero>

   <IpSection id="youtube">
    <IpHead eyebrow="YouTube" title={<>Why add YouTube to a <em>GEO retainer?</em></>} lead={<>YouTube is among the sources <Link href="/journal/how-to-rank-in-google-ai-overviews">Google’s AI answers</Link> cite most often, though it varies by AI tool. Many agencies skip it because video takes real production time. That’s the part we take on.</>}/>
    <h3 className="wl-h3">What we handle, end to end</h3>
    <Reveal className="wl-pipe">
    <div className="wl-rail" aria-hidden="true"><span className="wl-rail-track"/><span className="wl-rail-fill"/>{yt.map(([t],i)=><span className="wl-rail-node" key={t} style={{'--i':i} as React.CSSProperties}/>)}</div>
    <div className="wl-yt-steps">
     {yt.map(([t,p],i)=><Reveal className="ip-card" key={t} style={{'--i':i} as React.CSSProperties}><span className="ip-num">{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{p}</p></Reveal>)}
    </div>
    </Reveal>
    <div className="wl-notes">
    <p className="wl-note">Each video takes about 3 days from script to publish, and we can turn it around faster when you need it.</p>
    <p className="wl-note">Every video is built to get cited. Nobody can promise a citation, and we won’t.</p>
    </div>
   </IpSection>

   <IpSection id="proof">
    <IpHead eyebrow="Sample work" title={<>See what your <em>clients would get</em></>} lead="A few videos Nakama Growth has made, each built around a question buyers ask AI tools."/>
    <div className="ip-g3 wl-videos">
     {videos.map(v=><Reveal className="wl-video" key={v.id}>
      <LiteYouTube id={v.id} title={v.t}/>
      <span className="tag">{v.c}</span><h3>{v.t}</h3><p>{v.p}</p>
     </Reveal>)}
    </div>
    <div className="wl-cta-row"><BookBtn>Book a call</BookBtn></div>
   </IpSection>

   <IpSection id="how">
    <IpHead eyebrow="How white label works" title={<>How does white-label work with <em>Nakama Growth?</em></>} lead={<>We can run all of this white-label for your clients, alongside our <Link href="/services">other services</Link>. You sell it, and we do the work behind you.</>}/>
    <div className="ip-g4">
     {how.map(h=><Reveal className="ip-card ip-svc wl-spot" key={h.t}>
      <div className="ip-svc-top"><span className="ip-svc-ico"><h.icon size={20}/></span></div>
      <h3>{h.t}</h3><p>{h.p}</p>
     </Reveal>)}
    </div>
    <div className="wl-notes">
    <p className="wl-note">We work with you on Slack and email. You share the deliverables and target queries, we deliver to you, and you take it to your client.</p>
    <p className="wl-note">Terms are flexible. We shape them around how your agency already works.</p>
    </div>
   </IpSection>

   <IpSection id="services">
    <IpHead eyebrow="What else you can resell" title={<>What else can Nakama Growth run <em>under your brand?</em></>} lead="Packages are custom, built around each client’s target queries and needs."/>
    <div className="ip-g4">
     {services.map(s=><Reveal className="ip-card ip-svc wl-spot" key={s.t}>
      <div className="ip-svc-top"><span className="ip-svc-ico"><s.icon size={20}/></span></div>
      <h3>{s.t}</h3><p>{s.p}</p>
     </Reveal>)}
    </div>
   </IpSection>

   <IpSection id="process">
    <IpHead eyebrow="Process" title={<>How do we start <em>working together?</em></>}/>
    <div className="ip-g4">
     {steps.map(([t,p],i)=><Reveal className="ip-card" key={t}><span className="ip-num">{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{p}</p></Reveal>)}
    </div>
    <div className="wl-cta-row"><BookBtn>Book a call</BookBtn></div>
   </IpSection>

   <IpFaq items={faq}/>
   <IpCta title={<>Give your clients video and AI visibility<br/><em>without building the team.</em></>} text="Share the deliverables and target queries you have in mind, and we’ll send a tailored offer." actions={<><CtaGate/><BookBtn>Book a call</BookBtn></>}/>
   <StickyBook/>
   <Spotlight/>
  </Shell>
 );
}
