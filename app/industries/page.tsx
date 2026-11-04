import type {Metadata} from 'next';
import Link from 'next/link';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../site';
import './industries.css';

/**
 * PREVIEW ONLY — Soften CLEAR V2.4 industries hub.
 * Prod HOLD until Yash ships. Do not add this URL to corePages, the sitemap,
 * llms.txt, or the live nav/footer in this change.
 * Ship flip later: set PREVIEW false (index,follow), then add /industries to
 * corePages and one sitewide crawl path.
 */
const PREVIEW = true;

const SLUG = '/industries';
const TITLE = 'Industries We Serve | Nakama Growth';
const META = 'Industry pages for GEO and AI visibility at Nakama Growth. Healthcare is live; SaaS, tech and AI run through our services.';
const LEAD = 'AI answers each industry differently. We build visibility around the sources and prompts that matter in yours.';

const robots: Metadata['robots'] = PREVIEW
 ? {index: false, follow: true, googleBot: {index: false, follow: true}}
 : {index: true, follow: true, googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1}};

export const metadata: Metadata = {
 ...pageMeta(SLUG, {title: TITLE, description: META}),
 robots,
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
   <JsonLd data={collectionLd} />
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
    <p className="ih-eye"><span className="ih-dot" aria-hidden="true" />Industries</p>
    <h1>Industries <span className="ih-grad">we serve</span></h1>
    <p className="ih-lead">{LEAD}</p>
    <div className="ih-ctas">
     <Link className="ih-btn" href="/pricing#quote">
      Book a call
      <span className="ih-arr" aria-hidden="true">→</span>
     </Link>
     <Link className="ih-ghost" href="/services/ai-visibility-audit">AI visibility audit</Link>
    </div>

    <section className="ih-hall" aria-label="Industries index">
     <span className="ih-num ih-n1" aria-hidden="true">01</span>
     <article className="ih-door ih-door-f">
      <div>
       <Heart />
       <p className="ih-lab">Industry</p>
       <h2 id="ih-healthcare">Healthcare</h2>
       <p>AI answers in healthcare are held to YMYL standards, so assistants cite reviewed, accountable sources over marketing claims.</p>
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
     <div>
      <p className="ih-eye"><span className="ih-dot" aria-hidden="true" />Why it differs</p>
      <h3 id="ih-why-title">Why GEO changes by industry</h3>
     </div>
     <ol>
      <li><b>Prompt</b><span>Buyers ask different questions, in different words, at different stages.</span></li>
      <li><b>Source</b><span>Each industry has its own trusted sources that assistants cite.</span></li>
      <li><b>Claim</b><span>What counts as a safe, citable claim shifts with the stakes.</span></li>
     </ol>
    </section>
   </div>
  </Shell>
 );
}
