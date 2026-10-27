import type {Metadata} from 'next';
import Link from 'next/link';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {BookCallButton} from '@/components/booking/BookCall';
import {ModIcon, type ModIconName} from './icons';
import './geo.css';

const TITLE = 'Generative Engine Optimization Services for SaaS, Tech & AI - Nakama Growth';
const DESCRIPTION = 'Generative engine optimization services for SaaS, tech and AI. We audit where AI names your competitors, then build product context and sources ChatGPT, Perplexity, Gemini and Google AI Overviews cite.';
const META_DESCRIPTION = 'Generative engine optimization services for SaaS, tech and AI. We audit AI competitor mentions and build sources ChatGPT, Perplexity and AI Overviews cite.';

export const metadata: Metadata = pageMeta('/services/geo', {title: TITLE, description: META_DESCRIPTION});

const pains = [
 {
  n: '01',
  title: 'Invisible in AI answers',
  body: 'Competitors get named when buyers ask; you don’t.',
  path: 'M2 40 C30 40 40 10 70 14 S110 30 118 8',
 },
 {
  n: '02',
  title: 'Wrong or stale product facts',
  body: 'Models describe your category with outdated or incomplete context.',
  path: 'M2 30 L40 30 L58 12 L80 44 L118 20',
 },
 {
  n: '03',
  title: 'SEO alone isn’t enough',
  body: 'Rankings and citations are different jobs; blue links don’t guarantee AI mentions.',
  path: 'M2 44 L118 44 M2 24 L60 24',
 },
] as const;

const flow = [
 {n: '01', title: 'Brand', body: 'Your product context'},
 {n: '02', title: 'Sources', body: 'Communities · Editorial · Reviews'},
 {n: '03', title: 'AI engines', body: 'ChatGPT · Perplexity · Gemini · AI Overviews'},
 {n: '04', title: 'Buyer answer', body: 'The Gate', end: true},
] as const;

const modules: {n: string; icon: ModIconName; title: string; body: string; feat?: boolean}[] = [
 {n: '01', icon: 'prompt', title: 'Buyer prompt map', body: 'The questions your buyers already ask AI in your category.'},
 {n: '02', icon: 'audit', title: 'Competitor answer audit', body: 'Where engines name others instead of you.', feat: true},
 {n: '03', icon: 'context', title: 'Product & category context', body: 'Facts and framing AI can reuse across site, docs and comparisons.'},
 {n: '04', icon: 'sources', title: 'Source strategy', body: 'Communities, editorial and review sites that feed answers.'},
 {n: '05', icon: 'video', title: 'YouTube & video (citation channel)', body: 'End-to-end video built so AI answers can cite the work.'},
 {n: '06', icon: 'tracking', title: 'Citation tracking', body: 'Visibility reporting inside the Nakama Growth plan, not a separate Measurement product.'},
];

const steps = [
 {n: '01', title: 'Audit', body: 'Answer and source audit: prompts, competitors, where AI already cites.'},
 {n: '02', title: 'Map', body: 'Order of work for your category: context, sources, channels.'},
 {n: '03', title: 'Build', body: 'Ship the off-site and context work in that order.'},
 {n: '04', title: 'Measure & iterate', body: 'Track citations and visibility; adjust the mix.'},
] as const;

const clients = [
 {name: 'Synup', src: '/geo/synup.svg', hero: 22, proof: 30, word: false},
 {name: 'Inventive AI', src: '/geo/inventive.png', hero: 20, proof: 28, word: false},
 {name: 'HubEngage', src: '/geo/hubengage.png', hero: 22, proof: 30, word: true},
 {name: 'StarAgile', src: '/geo/staragile.png', hero: 27, proof: 38, word: false},
] as const;

const faq = [
 ['How is GEO different from SEO?', 'GEO aims at being named and cited in generative answers, not only ranking blue links. Many teams need both. For scope on your category, get a GEO quote.'],
 ['What does a GEO agency do for SaaS?', 'A generative engine optimization agency maps the prompts your buyers ask AI, audits where competitors get named, then builds product context and third-party sources so ChatGPT, Perplexity, Gemini and Google AI Overviews can cite you. That is the Nakama Growth GEO engagement for SaaS, tech and AI teams. Get a GEO quote for scope on your category.'],
 ['Which AI engines do you cover?', 'ChatGPT, Perplexity, Gemini and Google AI Overviews. How often each cites a given source varies by tool and changes over time. We don’t promise a citation count.'],
 ['How long until we see citations?', 'It depends on your category, current sources and the engines buyers use. We start with an audit and set order from that; we don’t promise a fixed date. Get a GEO quote for what the first stretch would include.'],
 ['How do you measure GEO?', 'Citation and visibility tracking against the prompts that matter for your category, reported inside the Nakama Growth plan. Details on a quote or call.'],
 ['Do you work with non-SaaS brands?', 'This page is for SaaS, tech and AI companies. If you’re outside that, say so on a call and we’ll tell you honestly if we’re a fit.'],
 ['GEO vs AEO: which do I need?', 'If buyers already ask AI about your category and competitors get named, start with GEO. If you need answer-first pages and FAQs on your own site for specific questions, lean on AEO. Many teams use both. We’ll map the order on a quote or call.'],
 ['How does pricing work?', 'Custom scope under the Nakama Growth plan. Details and the quote form live on pricing. Get a GEO quote and we’ll price the modules that fit.'],
] as const;

const serviceLd = {
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': abs('/services/geo#service'),
 name: 'Generative engine optimization services',
 serviceType: 'Generative Engine Optimization',
 description: DESCRIPTION,
 url: abs('/services/geo'),
 provider: {'@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Nakama Growth', url: SITE_URL},
 audience: {'@type': 'Audience', audienceType: 'SaaS, tech and AI'},
};

const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: faq.map(([name, text]) => ({'@type': 'Question', name, acceptedAnswer: {'@type': 'Answer', text}})),
};

function QuoteLink({className}: {className: string}) {
 return (
  <Link className={className} href="/pricing#quote">
   Get a GEO quote <span className="geo-ar" aria-hidden="true">→</span>
  </Link>
 );
}

function BookLink({className, rail = false}: {className: string; rail?: boolean}) {
 return (
  <BookCallButton className={className}>
   Book a call{rail ? <span className="geo-ar" aria-hidden="true">↗</span> : null}
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

export default function GeoServices() {
 return (
  <Shell className="geo-page shell-cinema">
   <Crumbs trail={[{name: 'Services', path: '/services'}, {name: 'GEO services', path: '/services/geo'}]} />
   <JsonLd data={[serviceLd, faqLd]} />

   <section className="geo-hero">
    <div className="geo-atmo" aria-hidden="true">
     <i className="geo-glow" />
     <i className="geo-grid" />
     <i className="geo-arch" />
    </div>
    <div className="geo-wrap">
     <nav className="geo-crumb" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span aria-hidden="true">›</span>
      <Link href="/services">Services</Link>
      <span aria-hidden="true">›</span>
      <span aria-current="page">GEO services</span>
     </nav>
     <div className="geo-hero-copy">
      <p className="geo-who"><span className="geo-dot" aria-hidden="true" />For SaaS, tech &amp; AI teams</p>
      <p className="geo-eyebrow">Build a brand AI understands.</p>
      <h1>Generative engine optimization services <em>for SaaS, tech and AI.</em></h1>
      <p className="geo-lead">Our generative engine optimization services audit where AI names your competitors, then build the product context and third-party sources ChatGPT, Perplexity, Gemini and Google AI Overviews cite.</p>
      <div className="geo-ctas">
       <QuoteLink className="geo-btn geo-btn-primary" />
       <BookLink className="geo-btn geo-btn-ghost" />
      </div>
      <div className="geo-logos">
       <ul className="geo-hero-logos">
        {clients.map(c => (
         <li key={c.name}>
          <LogoMark name={c.name} src={c.src} height={c.hero} word={c.word} wordClass="geo-word" />
         </li>
        ))}
       </ul>
      </div>
     </div>
    </div>
   </section>

   <section className="geo-s geo-s-alt">
    <div className="geo-wrap">
     <p className="geo-idx">01 · Problem</p>
     <h2>Buyers ask AI first. Is your brand in the answer?</h2>
     <div className="geo-cards">
      {pains.map(p => (
       <article className="geo-card" key={p.n}>
        <div className="geo-pain-n">
         {p.n}
         <svg viewBox="0 0 120 46" aria-hidden="true"><path d={p.path} /></svg>
        </div>
        <h3>{p.title}</h3>
        <p>{p.body}</p>
       </article>
      ))}
     </div>
    </div>
   </section>

   <section className="geo-s geo-what">
    <div className="geo-wrap geo-split">
     <div>
      <p className="geo-idx">02 · What GEO is</p>
      <h2>Generative engine optimization, plainly.</h2>
      <p className="geo-body">As a generative engine optimization agency for SaaS, tech and AI, Nakama Growth makes your brand easy for generative engines to find, trust and cite, through product context and the third-party sources those answers already lean on.</p>
      <p className="geo-router">Need answer-first pages on your own site? That’s AEO. Many teams use both. <Link href="/journal/aeo-vs-seo-vs-geo">AEO vs SEO vs GEO →</Link></p>
     </div>
     <ol className="geo-flow">
      {flow.map(step => (
       <li className={'end' in step && step.end ? 'is-end' : undefined} key={step.n}>
        <i>{step.n}</i>{step.title}
        <span>{step.body}</span>
       </li>
      ))}
     </ol>
    </div>
   </section>

   <section className="geo-s">
    <div className="geo-wrap">
     <p className="geo-idx">03 · Modules</p>
     <h2>What’s in a GEO engagement</h2>
     <div className="geo-mods">
      {modules.map(m => (
       <article className={m.feat ? 'geo-mod is-feat' : 'geo-mod'} key={m.n}>
        <span className="geo-mod-n">{m.n}</span>
        <div className="geo-ic"><ModIcon name={m.icon} /></div>
        <h3>{m.n === '05' ? <Link href="/services/youtube">{m.title}</Link> : m.title}</h3>
        <p>{m.body}</p>
       </article>
      ))}
     </div>
    </div>
   </section>

   <section className="geo-s geo-s-alt">
    <div className="geo-wrap">
     <p className="geo-idx">04 · Process</p>
     <h2>How we work</h2>
     <div className="geo-steps">
      {steps.map(s => (
       <div className="geo-step" key={s.n}>
        <b>{s.n}</b>
        <h3>{s.title}</h3>
        <p>{s.body}</p>
       </div>
      ))}
     </div>
     <p className="geo-scents">
      <Link className="geo-scent" href="/process">See our full process →</Link>
      <Link className="geo-scent" href="/journal/geo-audit">How we audit →</Link>
     </p>
    </div>
   </section>

   <section className="geo-s">
    <div className="geo-wrap">
     <p className="geo-idx">05 · Proof</p>
     <h2>Teams already showing up</h2>
     <ul className="geo-proof">
      {clients.map(c => (
       <li className="geo-proof-cell" key={c.name}>
        <div className="geo-proof-logo">
         <LogoMark name={c.name} src={c.src} height={c.proof} word={c.word} wordClass="geo-word geo-word-lg" />
        </div>
        <span className="geo-role">GEO / AI visibility</span>
       </li>
      ))}
     </ul>
     <p className="geo-scents">
      <Link className="geo-scent" href="/work">See our work →</Link>
      <Link className="geo-scent" href="/journal/best-generative-engine-optimization-agencies">Compare agencies →</Link>
     </p>
    </div>
   </section>

   <section className="geo-s geo-s-alt">
    <div className="geo-wrap geo-faq">
     <div>
      <p className="geo-idx">06 · FAQ</p>
      <h2>GEO questions</h2>
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

   <section className="geo-s geo-wl-s">
    <div className="geo-wrap">
     <div className="geo-wl">
      <span>Agency? Nakama Growth delivers GEO white-label for partners.</span>
      <Link href="/white-label">White-label →</Link>
     </div>
    </div>
   </section>

   <section className="geo-cta" aria-label="Next step">
    <div className="geo-wrap">
     <div className="geo-cta-copy">
      <h2>Let’s map where your brand should show up next.</h2>
      <p>Tell us where you are; we’ll come back with a GEO plan and a quote.</p>
     </div>
     <div className="geo-rail">
       <QuoteLink className="geo-btn geo-btn-primary" />
      <BookLink className="geo-btn geo-btn-ghost" rail />
     </div>
    </div>
   </section>
  </Shell>
 );
}
