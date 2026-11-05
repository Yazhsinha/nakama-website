import type {Metadata} from 'next';
import Link from 'next/link';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../site';
import './industries.css';

/** Live industries hub. Yash ship GO, V2.6.1. Indexable, in the sitemap and nav. */
const PREVIEW = false;

const SLUG = '/industries';
const TITLE = 'Industries We Serve: GEO & AI Visibility by Sector | Nakama';
const META = 'Industry pages for GEO and AI visibility at Nakama Growth. Healthcare is live; SaaS, tech and AI run through our services.';
const LEAD = 'AI answers each industry differently. We build visibility around the sources and prompts that matter in yours.';
const ENTITY = 'Nakama Growth helps brands get named, cited and recommended in ChatGPT, Perplexity, Gemini and Google AI Overviews, with industry pages where the rules change most.';
const WHY_LEAD = 'The method stays the same in every industry. What changes is what buyers ask, which sources engines trust, and how risky a claim is.';

const WHY_ROWS = [
 ['Prompts', 'Patients and buyers ask about safety, location, reviews and who to trust.', 'Buyers ask for comparisons, alternatives, integrations and pricing.'],
 ['Sources', 'Medical publishers, review and directory sites, and reviewed brand pages.', 'Docs, review platforms, comparison articles and community threads.'],
 ['Claim risk', 'High. Health claims need clinical review before they publish.', 'Moderate. Claims need current docs, pricing and dated sources.'],
] as const;

const FAQ: {q: string; text: string}[] = [
 {
  q: 'Why does GEO change by industry?',
  text: 'GEO is one method, but each industry changes what goes into it. A clinic needs reviewed health pages and trusted directory listings. A software company needs current docs and honest comparisons. We map those inputs for your category first, then build the plan around them.',
 },
 {
  q: 'Which industries does Nakama Growth work with today?',
  text: 'Healthcare has its own page, covering clinics, hospitals, healthtech and wellness brands. SaaS, tech and AI companies work through our GEO and AEO services, which cover how those buyers ask and which sources engines cite. Other categories can still start with a prompt and source check before any commitment.',
 },
 {
  q: 'Should I start with an industry page or a service page?',
  text: 'Start with your industry page if one exists. It shows the prompts, sources and claim rules for your category. If not, GEO services cover being named in AI answers, and AEO services cover answer-first pages and FAQs. We can set the order together on a call.',
 },
 {
  q: 'My industry is not listed. Can you still help?',
  text: 'Often, yes. We start by running the prompts your buyers ask and checking which sources the engines cite. That shows quickly whether the work fits your category. If it does not, we will tell you plainly instead of selling you a program.',
 },
 {
  q: 'How do you measure AI visibility for an industry?',
  text: 'We run a prompt set in your buyers\' words on dated checks. Each check lists the prompts, the engine, the date and how many runs, because answers vary run to run. Mentions, citations and recommendations are reported separately for each engine. We do not roll them into a single visibility score. Prompts change by industry; reporting rules do not.',
 },
];

const robots: Metadata['robots'] = PREVIEW
 ? {index: false, follow: true, googleBot: {index: false, follow: true}}
 : {index: true, follow: true, googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1}};

export const metadata: Metadata = {
 ...pageMeta(SLUG, {title: TITLE, description: META}),
 robots,
};

const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: FAQ.map(({q, text}) => ({
  '@type': 'Question',
  name: q,
  acceptedAnswer: {'@type': 'Answer', text},
 })),
};

const collectionLd = {
 '@context': 'https://schema.org',
 '@type': 'CollectionPage',
 '@id': abs(`${SLUG}#webpage`),
 name: 'Industries we serve',
 url: abs(SLUG),
 description: META,
 isPartOf: {'@id': `${SITE_URL}/#website`},
 publisher: {'@id': `${SITE_URL}/#organization`},
 mainEntity: {
  '@type': 'ItemList',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  numberOfItems: 1,
  itemListElement: [
   {'@type': 'ListItem', position: 1, name: 'Healthcare', url: abs('/industries/healthcare')},
  ],
 },
};

function Heart() {
 return (
  <span className="ih-heart" aria-hidden="true">
   <svg viewBox="0 0 48 48" fill="none" stroke="#f3f1ed" strokeWidth="1.5" vectorEffect="non-scaling-stroke">
    <path d="M24 40S6 29 6 17a9 9 0 0 1 18-3 9 9 0 0 1 18 3c0 12-18 23-18 23z" />
    <path d="M12 24h7l3-5 4 10 3-5h7" />
   </svg>
  </span>
 );
}

export default function IndustriesHub() {
 return (
  <Shell className="ih-page shell-cinema">
   <Crumbs trail={[{name: 'Industries', path: SLUG}]} />
   <JsonLd data={[collectionLd, faqLd]} />
   <div className="ih-atmos" aria-hidden="true">
    <i className="a1" />
    <i className="a2" />
    <i className="a3" />
    <i className="a4" />
   </div>
   <div className="ih-wrap">
    <nav className="ih-crumb" aria-label="Breadcrumb">
     <Link href="/">Home</Link>
     <span aria-hidden="true"> › </span>
     <span aria-current="page">Industries</span>
    </nav>
    <div className="ih-hero">
     <p className="ih-eye"><span className="ih-dot" aria-hidden="true" />Industries</p>
     <h1>Industries <em className="ih-grad">we serve</em></h1>
     <p className="ih-lead">{LEAD}</p>
     <p className="ih-entity">{ENTITY}</p>
     <div className="ih-ctas">
      <Link className="ih-btn" href="/pricing#quote">
       Book a call
       <span className="ih-arr" aria-hidden="true">→</span>
      </Link>
      <Link className="ih-ghost" href="/services/ai-visibility-audit">AI visibility audit</Link>
     </div>
    </div>

    <section className="ih-hall" aria-label="Industries index">
     <span className="ih-num ih-n1" aria-hidden="true">01</span>
     <article className="ih-door ih-door-f">
      <div>
       <Heart />
       <p className="ih-lab">Industry</p>
       <h2 id="ih-healthcare">Healthcare</h2>
       <p>AI answers in healthcare are held to a higher trust bar, so assistants cite reviewed, accountable sources over marketing claims.</p>
      </div>
      <Link className="ih-go" href="/industries/healthcare">View healthcare →</Link>
     </article>
     <article className="ih-door ih-door-c">
      <span className="ih-num ih-n2" aria-hidden="true">02</span>
      <p className="ih-lab">Via services</p>
      <h2 id="ih-saas">SaaS, tech and AI</h2>
      <p>AI answers here lean on comparisons, docs, and community threads, not your homepage.</p>
      <div className="ih-links">
       <Link className="ih-go" href="/services/geo">GEO services →</Link>
       <Link className="ih-go" href="/services/aeo">AEO services →</Link>
      </div>
     </article>
    </section>

    <section className="ih-why" aria-labelledby="ih-why-title">
     <div className="ih-why-head">
      <p className="ih-eye"><span className="ih-dot" aria-hidden="true" />Why it differs</p>
      <h2 id="ih-why-title">Why GEO changes by industry</h2>
      <p className="ih-why-lead">{WHY_LEAD}</p>
     </div>
     <div className="ih-why-table" role="table" aria-label="How GEO differs by industry">
      <div className="ih-why-tr ih-why-th" role="row">
       <span className="ih-why-td ih-why-lab" role="columnheader" />
       <span className="ih-why-td" role="columnheader">Healthcare</span>
       <span className="ih-why-td" role="columnheader">SaaS, tech and AI</span>
      </div>
      {WHY_ROWS.map(([label, healthcare, saas]) => (
       <div className="ih-why-tr" role="row" key={label}>
        <span className="ih-why-td ih-why-lab" role="rowheader">{label}</span>
        <span className="ih-why-td" role="cell" data-col="Healthcare">{healthcare}</span>
        <span className="ih-why-td" role="cell" data-col="SaaS, tech and AI">{saas}</span>
       </div>
      ))}
     </div>
    </section>

    <section className="ih-faq ip-section ip-faq" aria-labelledby="ih-faq-title">
     <div className="ip-faq-grid">
      <div className="ip-head">
       <p className="ih-eye"><span className="ih-dot" aria-hidden="true" />Questions</p>
       <h2 id="ih-faq-title">Questions about industries we serve</h2>
       <p>Something else on your mind? Write to <a href="mailto:contact@nakama.in">contact@nakama.in</a>.</p>
      </div>
      <div className="ip-faq-list">
       {FAQ.map((item, i) => (
        <details className="ip-faq-item" key={item.q} open={i === 0}>
         <summary><span>{item.q}</span><i aria-hidden="true" /></summary>
         <p>{faqAnswer(item.q)}</p>
        </details>
       ))}
      </div>
     </div>
    </section>

    <section className="ip-svc-band" aria-label="Book a call">
     <p>Not sure where your industry fits?<span>We will map the prompts and sources with you.</span></p>
     <div className="ip-svc-band-actions">
      <Link className="ip-svc-btn svc-next-btn-primary" href="/pricing#quote">Book a call</Link>
      <Link className="ip-svc-btn ip-svc-btn-line" href="/services/ai-visibility-audit">AI visibility audit</Link>
     </div>
    </section>
   </div>
  </Shell>
 );
}

function faqAnswer(q: string) {
 if (q.startsWith('Which industries')) {
  return (
   <>
    <Link href="/industries/healthcare">Healthcare</Link>
    {' has its own page, covering clinics, hospitals, healthtech and wellness brands. SaaS, tech and AI companies work through our '}
    <Link href="/services/geo">GEO</Link>
    {' and '}
    <Link href="/services/aeo">AEO</Link>
    {' services, which cover how those buyers ask and which sources engines cite. Other categories can still start with a prompt and source check before any commitment.'}
   </>
  );
 }
 if (q.startsWith('Should I start')) {
  return (
   <>
    {'Start with your industry page if one exists. It shows the prompts, sources and claim rules for your category. If not, '}
    <Link href="/services/geo">GEO services</Link>
    {' cover being named in AI answers, and '}
    <Link href="/services/aeo">AEO services</Link>
    {' cover answer-first pages and FAQs. We can set the order together on a call.'}
   </>
  );
 }
 return FAQ.find(item => item.q === q)?.text;
}
