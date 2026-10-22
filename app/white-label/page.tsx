import {pageMeta,Crumbs} from '@/lib/seo';
import type {Metadata} from 'next';
import {Play,Sparkles,MessageCircle,FileText,Share2,Link2,EyeOff,Handshake,Tag,Palette} from 'lucide-react';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpHead,IpSection,BookBtn,LinkBtn,IpFaq,IpCta} from '../inner/kit';
import {LiteYouTube} from './LiteYouTube';
import './white-label.css';

/*
 PREVIEW ONLY. Copy marked [PH] is placeholder; final copy comes from Hibiku.
 Launch checklist: remove `robots` below, add {path:'/white-label',...} to corePages in lib/feed.ts
 so it enters the sitemap, and replace every [PH] marker and proof slot.
*/
export const metadata:Metadata={
 ...pageMeta('/white-label',{title:'White-Label AEO, GEO & YouTube for Agencies | Nakama Growth',description:'[PH] White-label YouTube, AEO/GEO, Reddit, content, digital PR and link building that agencies resell under their own brand, delivered by Nakama Growth.'}),
 robots:{index:false,follow:false},
};

const PH=()=> <span className="wl-ph">Placeholder</span>;

const how=[
 {icon:Palette,t:'Your brand',p:'[PH] Every deliverable, report and touchpoint carries your agency name and look.'},
 {icon:EyeOff,t:'We stay invisible',p:'[PH] Your clients only ever deal with you. Nakama Growth works quietly behind your team.'},
 {icon:Handshake,t:'Non-solicit',p:'[PH] We never approach or accept your clients directly. Your roster stays yours.'},
 {icon:Tag,t:'You set the price',p:'[PH] You package and price the work however suits your agency and your margins.'},
] as const;

const yt=[
 ['Topic research','[PH] Topics pulled from the prompts buyers type into AI assistants.'],
 ['Script','[PH] Answer-first scripts written around those buyer questions.'],
 ['Shoot or animate','[PH] Filmed, presenter-led or animated, whichever suits the brand.'],
 ['Edit','[PH] Tight edits built for watch time and clarity.'],
 ['Thumbnails','[PH] Thumbnails designed to earn the click.'],
 ['Metadata for citation','[PH] Titles, descriptions, chapters and transcripts shaped so AI engines can cite the video.'],
 ['Repurposing','[PH] Cut into Shorts, Reels, TikTok and Facebook clips.'],
 ['Publishing','[PH] Uploaded and scheduled on the client channel under your brand.'],
] as const;

const services=[
 {icon:Sparkles,tag:'AEO / GEO',p:'[PH] Answer-gap research, citation-ready content and AI answer tracking, delivered under your brand.'},
 {icon:MessageCircle,tag:'Reddit',p:'[PH] Transparent, rule-following community participation in the subreddits buyers trust.'},
 {icon:FileText,tag:'Content',p:'[PH] Expert-led articles, comparisons and buyer guides.'},
 {icon:Share2,tag:'Digital PR',p:'[PH] Editorial placements and relationships with credible publishers.'},
 {icon:Link2,tag:'Link building',p:'[PH] Relevant, editorial links from sites that matter in the category.'},
] as const;

const steps=[
 ['Intro call','[PH] We learn about your agency, clients and the services you want to offer.'],
 ['Scope and pilot','[PH] We agree a first client and scope together.'],
 ['Delivery under your brand','[PH] Our team produces the work in your templates and voice.'],
 ['Review and report','[PH] You get white-label reports to share with your client.'],
] as const;

const faq=[
 ['[PH] Will my clients know Nakama Growth is involved?','[PH] Placeholder answer. Final copy from Hibiku.'],
 ['[PH] Can I resell only YouTube, or do I need every service?','[PH] Placeholder answer. Final copy from Hibiku.'],
 ['[PH] How do you handle client communication?','[PH] Placeholder answer. Final copy from Hibiku.'],
 ['[PH] What does the non-solicit cover?','[PH] Placeholder answer. Final copy from Hibiku.'],
] as const;

export default function WhiteLabel(){
 return (
  <Shell className="white-label-page shell-cinema ip-page">
   <IpAtmos tone="ember"/><Crumbs trail={[{name:'Services',path:'/services'},{name:'White label',path:'/white-label'}]}/>
   <IpHero
    tone="ember"
    eyebrow="White label for agencies"
    title="[PH] Your brand on the work,"
    accent="Nakama Growth behind it."
    lead={<>[PH] YouTube, AEO/GEO, Reddit, content, digital PR and link building for agencies that want to offer AI visibility under their own name. <PH/></>}
   >
    <BookBtn>Book a call</BookBtn>
    <LinkBtn href="#youtube" ghost>See the YouTube service</LinkBtn>
   </IpHero>

   <IpSection id="how">
    <IpHead eyebrow="How white label works" title={<>[PH] Your client. Your name. <em>Our team.</em></>} lead={<>[PH] Four promises that hold for every partner. <PH/></>}/>
    <div className="ip-g4">
     {how.map(h=><Reveal className="ip-card ip-svc" key={h.t}>
      <div className="ip-svc-top"><span className="ip-svc-ico"><h.icon size={21}/></span></div>
      <h3>{h.t}</h3><p>{h.p}</p>
     </Reveal>)}
    </div>
   </IpSection>

   <IpSection id="youtube">
    <IpHead eyebrow="Service 01 / YouTube and AI citations" title={<>[PH] Videos that AI engines <em>cite.</em></>} lead={<>[PH] End to end YouTube production, from buyer prompts to published video and short-form cuts, built to be cited in AI answers. <PH/></>}/>
    <div className="wl-yt-steps">
     {yt.map(([t,p],i)=><Reveal className="ip-card" key={t}><span className="ip-num">{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{p}</p></Reveal>)}
    </div>
    <div className="ip-g2 wl-videos">
     <Reveal><LiteYouTube id="QgVZs0fcTd8" title="Nakama Growth sample video 1"/></Reveal>
     <Reveal><LiteYouTube id="NUtceYnpoAk" title="Nakama Growth sample video 2"/></Reveal>
    </div>
   </IpSection>

   <IpSection id="proof">
    <IpHead eyebrow="Citation proof" title={<>[PH] Where our videos <em>show up.</em></>} lead={<>[PH] Screenshots of AI answers citing videos we produced. <PH/></>}/>
    <div className="ip-g3">
     {[1,2,3,4,5,6].map(n=><Reveal className="wl-proof" key={n}><div><b>Proof screenshot {n}</b>Placeholder slot. Cropped citation image from Goku goes here.</div></Reveal>)}
    </div>
   </IpSection>

   <IpSection id="services">
    <IpHead eyebrow="Also white label" title={<>[PH] Everything else your clients <em>ask for.</em></>} lead={<>[PH] Add any of these alongside YouTube. <PH/></>}/>
    <div className="ip-g3">
     {services.map(s=><Reveal className="ip-card ip-svc" key={s.tag}>
      <div className="ip-svc-top"><span className="ip-svc-ico"><s.icon size={21}/></span></div>
      <h3>{s.tag}</h3><p>{s.p}</p>
     </Reveal>)}
    </div>
   </IpSection>

   <IpSection id="process">
    <IpHead eyebrow="Process" title={<>[PH] From first call to <em>first delivery.</em></>} lead={<>[PH] How a partnership starts. <PH/></>}/>
    <div className="ip-g4">
     {steps.map(([t,p],i)=><Reveal className="ip-card" key={t}><span className="ip-num">{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{p}</p></Reveal>)}
    </div>
   </IpSection>

   <IpFaq items={faq}/>
   <IpCta title={<>[PH] Ready to offer AI visibility<br/><em>under your brand?</em></>} text="[PH] Book a call and we will walk through how a white-label partnership with Nakama Growth would work for your agency."/>
  </Shell>
 );
}
