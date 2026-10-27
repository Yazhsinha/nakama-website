import type {Metadata} from 'next';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {YouTubeStage} from './stage';
import {FAQ, META, SLUG, TITLE} from './copy';
import './youtube.css';

/** Soften twin v7.7.1, prod. Robots stay index,follow from the root layout. */
export const metadata: Metadata = pageMeta(SLUG, {title: TITLE, description: META});

const serviceLd = {
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': abs(`${SLUG}#service`),
 name: 'YouTube marketing services',
 serviceType: 'YouTube marketing and video production',
 description: META,
 url: abs(SLUG),
 provider: {'@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Nakama Growth', url: SITE_URL},
 audience: {'@type': 'Audience', audienceType: 'B2B SaaS, tech and AI teams'},
};

const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: FAQ.map(([name, text]) => ({'@type': 'Question', name, acceptedAnswer: {'@type': 'Answer', text}})),
};

export default function YouTubeServices() {
 return (
  <Shell className="yt-page shell-cinema">
   <Crumbs trail={[{name: 'Services', path: '/services'}, {name: 'YouTube marketing', path: SLUG}]} />
   <JsonLd data={[serviceLd, faqLd]} />
   <YouTubeStage />
  </Shell>
 );
}
