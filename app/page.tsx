import {pageMeta} from '@/lib/seo';
import type {Metadata} from 'next';
import {Shell,BOOKING} from './site';
import {HeroRuntime} from './HeroRuntime';
import {FeaturesSection} from '@/components/cardboard-features/FeaturesSection';
import {HomeProof,HomeFaqLite,HomeContact} from './HomeSections';
import {PromptDirector} from '@/components/prompt-director';
import {SequenceShowcase} from '@/components/sequence';
import {Toolkit} from '@/components/Toolkit';

export const metadata:Metadata=pageMeta('/',{title:'Nakama Growth — Get your brand named in AI answers',description:'AI visibility agency: we get brands recommended in ChatGPT, Perplexity, Gemini and Google AI Overviews by earning the sources those answers cite.'});

export default function Home(){
 return (
  <Shell className="home-page home-cinema">
   <HeroRuntime booking={BOOKING}/>
   <FeaturesSection/>
   <PromptDirector/>
   <SequenceShowcase/>
   <Toolkit/>
   <HomeProof/>
   <HomeFaqLite/>
   <HomeContact/>
  </Shell>
 );
}
