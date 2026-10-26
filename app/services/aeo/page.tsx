import type {Metadata} from 'next';
import Link from 'next/link';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {BookCallButton} from '@/components/booking/BookCall';
import {ModIcon, type ModIconName} from './icons';
import './aeo.css';

const TITLE = 'AEO Agency for B2B SaaS & AI - Nakama Growth';
const DESCRIPTION = 'AEO agency for B2B SaaS and AI. Nakama Growth maps the questions your buyers ask and builds answer-first pages, FAQs and site structure that answer them.';

export const metadata: Metadata = pageMeta('/services/aeo', {title: TITLE, description: DESCRIPTION});

const modules: {n: string; icon: ModIconName; title: string; body: string; feat?: boolean}[] = [
 {n: '01', icon: 'map', title: 'Buyer-question map', body: 'We list the questions your buyers ask and check which ones your site answers today.'},
 {n: '02', icon: 'pages', title: 'Answer-first page builds', body: 'We rewrite pricing, integration, comparison and use-case pages so each opens with a direct answer.', feat: true},
 {n: '03', icon: 'faq', title: 'Buyer FAQ blocks', body: 'FAQs built from real sales and support questions, not filler.'},
 {n: '04', icon: 'structure', title: 'On-site structure', body: 'Crawl, render and snippet checks plus clean Service, FAQ and breadcrumb markup as hygiene.'},
 {n: '05', icon: 'links', title: 'Internal links & scent', body: 'Links that take a reader from a question to the page that answers it.'},
 {n: '06', icon: 'coverage', title: 'Answer coverage check', body: 'A clear report of which target questions your site now answers and what shipped.'},
];

const steps = [
 {n: '01', title: 'Discovery', body: 'We learn your product, buyers and the questions sales hears most.'},
 {n: '02', title: 'Answer map', body: 'We audit your site against those questions and prioritize the gaps.'},
 {n: '03', title: 'Build', body: 'We rewrite and build the answer-first pages, FAQs and links, with your team reviewing.'},
 {n: '04', title: 'Measure', body: 'We report question coverage and shipped pages, then pick the next set.'},
] as const;

const clients = [
 {name: 'Synup', src: '/geo/synup.svg', hero: 22, proof: 30, word: false},
 {name: 'Inventive AI', src: '/geo/inventive.png', hero: 20, proof: 28, word: false},
 {name: 'HubEngage', src: '/geo/hubengage.png', hero: 22, proof: 30, word: true},
 {name: 'StarAgile', src: '/geo/staragile.png', hero: 27, proof: 38, word: false},
] as const;

const faq = [
 ['What does an answer engine optimization agency do for a B2B SaaS company?', 'Our AEO services find the questions your buyers ask and make your site answer them clearly, starting with pricing, integrations and comparisons. Get an AEO quote to see the scope for your site.'],
 ['Which pages do you work on first?', 'Usually the pages closest to a buying decision: pricing, integrations, comparisons and use cases. The answer map sets the order.'],
 ['Do you write new content or fix existing pages?', 'Both. Most engagements start by fixing pages you already have, then add pages only where a real buyer question has no answer.'],
 ['How is AEO different from GEO?', 'AEO works on your own site so it answers buyer questions directly. GEO works off your site so AI tools name your brand. Many teams start with one; the router above shows the split.'],
 ['Can you guarantee AI answers or rankings?', 'No. Nobody can promise placement in AI answers or Google results. We promise the work: clear answers on your pages and an honest report of what shipped and what it covers.'],
 ['Do you replace our SEO agency?', 'No. AEO sits alongside SEO and focuses on answers to buyer questions. We can work with your current team.'],
 ['What do you need from our team?', 'Site access, a few subject experts for questions, and someone to review drafts. Book a call and we will walk through it.'],
] as const;

const serviceLd = {
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': abs('/services/aeo#service'),
 name: 'Answer Engine Optimization',
 alternateName: 'AEO',
 serviceType: 'Answer Engine Optimization',
 description: DESCRIPTION,
 url: abs('/services/aeo'),
 provider: {'@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Nakama Growth', url: SITE_URL},
 audience: {'@type': 'Audience', audienceType: 'B2B SaaS, AI and software teams'},
};

const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: faq.map(([name, text]) => ({'@type': 'Question', name, acceptedAnswer: {'@type': 'Answer', text}})),
};

function QuoteLink({className}: {className: string}) {
 return (
  <Link className={className} href="/pricing#quote">
   Get an AEO quote <span className="aeo-ar" aria-hidden="true">→</span>
  </Link>
 );
}

function BookLink({className, rail = false}: {className: string; rail?: boolean}) {
 return (
  <BookCallButton className={className}>
   Book a call{rail ? <span className="aeo-ar" aria-hidden="true">↗</span> : null}
  </BookCallButton>
 );
}

function LogoMark({name, src, height, word, wordClass}: {name: string; src: string; height: number; word: boolean; wordClass: string}) {
 return (
  <>
   {/* eslint-disable-next-line @next/next/no-img-element -- pack marks are already trimmed to a fixed height */}
   <img src={src} alt={name} style={{height}} />
   {word ? <span className={wordClass} aria-hidden="true">{name}</span> : null}
  </>
 );
}

export default function AeoServices() {
 return (
  <Shell className="aeo-page shell-cinema">
   <Crumbs trail={[{name: 'Services', path: '/services'}, {name: 'AEO services', path: '/services/aeo'}]} />
   <JsonLd data={[serviceLd, faqLd]} />

   <section className="aeo-hero">
    <div className="aeo-atmo" aria-hidden="true">
     <i className="aeo-glow" />
     <i className="aeo-grid" />
     <i className="aeo-arch" />
    </div>
    <div className="aeo-wrap">
     <nav className="aeo-crumb" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span aria-hidden="true">›</span>
      <Link href="/services">Services</Link>
      <span aria-hidden="true">›</span>
      <span aria-current="page">AEO services</span>
     </nav>
     <div className="aeo-hero-copy">
      <p className="aeo-who"><span className="aeo-dot" aria-hidden="true" />For B2B SaaS, AI &amp; software teams</p>
      <h1>AEO agency for B2B SaaS <em>and AI companies.</em></h1>
      <p className="aeo-lead">Nakama Growth is an AEO agency for B2B SaaS and AI companies. We find the questions your buyers ask, then rewrite and build the pages on your site that answer them first: pricing, integrations, comparisons and use cases. Start with a quote or a call.</p>
      <div className="aeo-ctas">
       <QuoteLink className="aeo-btn aeo-btn-primary" />
       <BookLink className="aeo-btn aeo-btn-ghost" />
      </div>
      <div className="aeo-logos">
       <ul className="aeo-hero-logos">
        {clients.map(c => (
         <li key={c.name}>
          <LogoMark name={c.name} src={c.src} height={c.hero} word={c.word} wordClass="aeo-word" />
         </li>
        ))}
       </ul>
      </div>
     </div>
    </div>
   </section>

   <section className="aeo-s aeo-s-alt">
    <div className="aeo-wrap">
     <p className="aeo-idx">01 · Who it’s for</p>
     <h2>Who is AEO from Nakama Growth for?</h2>
     <div className="aeo-fit">
      <article className="aeo-card">
       <span className="aeo-tag">For</span>
       <p>B2B SaaS, AI and software teams whose site should answer the questions buyers ask before they book a demo.</p>
      </article>
      <article className="aeo-card is-out">
       <span className="aeo-tag">Not for</span>
       <p>Local businesses, hotels, ecommerce, or teams that want backlinks only.</p>
      </article>
     </div>
     <p className="aeo-scene">A buyer asks how your product handles SSO for teams over 200 seats. Your answer sits in a help doc three clicks deep, so the pricing page and the AI answer both come from someone else&apos;s page.</p>
     <p className="aeo-router">Answer engine optimization means your pages answer real buyer questions directly, in the first lines. Here it is hands-on work on your own site. <Link href="/journal/answer-engine-optimization">Read our answer engine optimization playbook</Link> for the full method.</p>
    </div>
   </section>

   <section className="aeo-s">
    <div className="aeo-wrap">
     <p className="aeo-idx">02 · Modules</p>
     <h2>What do AEO services from Nakama Growth include?</h2>
     <div className="aeo-mods">
      {modules.map(m => (
       <article className={m.feat ? 'aeo-mod is-feat' : 'aeo-mod'} key={m.n}>
        <span className="aeo-mod-n">{m.n}</span>
        <div className="aeo-ic"><ModIcon name={m.icon} /></div>
        <h3>{m.title}</h3>
        <p>{m.body}</p>
       </article>
      ))}
     </div>
    </div>
   </section>

   <section className="aeo-s aeo-mid-s">
    <div className="aeo-wrap">
     <div className="aeo-mid">
      <p>Know which buyer questions your site misses? Let&apos;s map them.</p>
      <div className="aeo-mid-actions">
       <QuoteLink className="aeo-btn aeo-btn-primary" />
       <BookLink className="aeo-btn aeo-btn-ghost" />
      </div>
     </div>
    </div>
   </section>

   <section className="aeo-s aeo-s-alt">
    <div className="aeo-wrap">
     <p className="aeo-idx">03 · Process</p>
     <h2>How does an AEO engagement start?</h2>
     <div className="aeo-steps">
      {steps.map(s => (
       <div className="aeo-step" key={s.n}>
        <b>{s.n}</b>
        <h3>{s.title}</h3>
        <p>{s.body}</p>
       </div>
      ))}
     </div>
     <p className="aeo-scents">
      <Link className="aeo-scent" href="/process">See how we work →</Link>
     </p>
    </div>
   </section>

   <section className="aeo-s">
    <div className="aeo-wrap">
     <p className="aeo-idx">04 · Proof</p>
     <h2>B2B teams that work with Nakama Growth</h2>
     <ul className="aeo-proof">
      {clients.map(c => (
       <li className="aeo-proof-cell" key={c.name}>
        <div className="aeo-proof-logo">
         <LogoMark name={c.name} src={c.src} height={c.proof} word={c.word} wordClass="aeo-word aeo-word-lg" />
        </div>
        <span className="aeo-role">AEO / answer-first content</span>
       </li>
      ))}
     </ul>
     <p className="aeo-scents">
      <Link className="aeo-scent" href="/work">See our work →</Link>
     </p>
    </div>
   </section>

   <section className="aeo-s aeo-s-alt">
    <div className="aeo-wrap">
     <p className="aeo-idx">05 · AEO vs GEO</p>
     <h2>AEO, GEO, or both?</h2>
     <div className="aeo-routes">
      <article className="aeo-card is-here">
       <span className="aeo-tag">AEO · this page</span>
       <p>Your own pages answer buyer questions directly.</p>
      </article>
      <article className="aeo-card">
       <span className="aeo-tag">GEO</span>
       <p>Getting named in AI answers through sources off your site. <Link href="/services/geo">Generative engine optimization (GEO) services →</Link></p>
      </article>
      <article className="aeo-card">
       <span className="aeo-tag">Generic AI SEO</span>
       <p>Broad SEO with AI labels; often no on-site answer plan.</p>
      </article>
     </div>
     <p className="aeo-scents">
      <Link className="aeo-scent" href="/journal/aeo-vs-seo-vs-geo">AEO vs SEO vs GEO →</Link>
      <Link className="aeo-scent" href="/journal/best-aeo-agencies">Compare agencies →</Link>
     </p>
    </div>
   </section>

   <section className="aeo-s">
    <div className="aeo-wrap aeo-faq">
     <div>
      <p className="aeo-idx">06 · FAQ</p>
      <h2>AEO questions</h2>
     </div>
     <div>
      {faq.map(([q, a], i) => (
       <details key={q} open={i === 0}>
        <summary>{q}</summary>
        <p>{a}</p>
       </details>
      ))}
     </div>
    </div>
   </section>

   <section className="aeo-s aeo-wl-s">
    <div className="aeo-wrap">
     <div className="aeo-wl">
      <span>Agency? We also deliver AEO under your brand.</span>
      <Link href="/white-label">White-label →</Link>
     </div>
    </div>
   </section>

   <section className="aeo-cta" aria-label="Next step">
    <div className="aeo-wrap">
     <div className="aeo-cta-copy">
      <h2>Let&apos;s make your site the answer.</h2>
      <p>Tell us your product and buyers. We&apos;ll show which questions to answer first.</p>
     </div>
     <div className="aeo-rail">
      <QuoteLink className="aeo-btn aeo-btn-primary" />
      <BookLink className="aeo-btn aeo-btn-ghost" rail />
     </div>
    </div>
   </section>
  </Shell>
 );
}
