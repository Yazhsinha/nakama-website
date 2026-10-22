import {pageMeta,Crumbs} from '@/lib/seo';
import type {Metadata} from 'next';
import {CalendarDays,Receipt,Mail} from 'lucide-react';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpHead,IpSection,BookBtn,LinkBtn} from '../inner/kit';
export const metadata:Metadata=pageMeta('/contact',{title:'Contact Nakama — Book a Call',description:'Book a call, ask for a custom quote or email contact@nakama.in about getting your brand named in AI answers. We reply within one business day.'});
export default function ContactPage(){
 return <Shell className="contact-page shell-cinema ip-page">
  <IpAtmos tone="indigo"/><Crumbs trail={[{name:'Contact',path:'/contact'}]}/>
  <IpHero tone="indigo" eyebrow="Contact" title="Let’s talk about" accent="where you show up." lead="Pick whatever is easiest. Every route reaches the founding team, and we reply within one business day."/>
  <IpSection>
   <div className="ip-ways">
    <Reveal className="ip-card ip-way primary"><span className="ip-svc-ico"><CalendarDays size={21}/></span><h3>Book a call</h3><p>A 15 or 30-minute video call. We look at where your brand appears in AI answers today and suggest a clear first move.</p><BookBtn>Pick a time</BookBtn></Reveal>
    <Reveal className="ip-card ip-way"><span className="ip-svc-ico"><Receipt size={21}/></span><h3>Get a custom quote</h3><p>Share your goals in two minutes, then book a 15-minute pricing call. A written proposal follows.</p><LinkBtn href="/pricing#quote">Start your quote</LinkBtn></Reveal>
    <Reveal className="ip-card ip-way"><span className="ip-svc-ico"><Mail size={21}/></span><h3>Email us</h3><p>Prefer writing? Send context, links or questions and we will come back with a useful answer.</p><a className="ip-way-mail" href="mailto:contact@nakama.in">contact@nakama.in<span aria-hidden="true">↗</span></a></Reveal>
   </div>
  </IpSection>
  <IpSection>
   <IpHead eyebrow="What happens next" title={<>No pitch decks. <em>Just a useful conversation.</em></>}/>
   <div className="ip-flow">
    {[['We look first','Before the call we check how your brand appears for a few of your buyers’ questions.'],['We talk it through','You share goals and context, we share what we found and where we would start.'],['You get a clear next step','An audit, a proposal or an honest “not a fit”. Whatever is most useful.']].map(([t,p])=><Reveal className="ip-card" key={t}><h3>{t}</h3><p>{p}</p></Reveal>)}
   </div>
  </IpSection>
 </Shell>;
}
