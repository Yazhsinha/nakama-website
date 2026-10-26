import type {Metadata} from 'next';
import Link from 'next/link';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {BookCallButton} from '@/components/booking/BookCall';
import {ModIcon, type ModIconName} from './icons';
import './content.css';

const TITLE = 'Answer-First Content Writing for SaaS, Tech & AI - Nakama Growth';
const DESCRIPTION = 'Answer-first content for AI search: listicles and comparisons for SaaS, tech & AI. AEO content writing you own and publish.';
const CANONICAL = 'https://www.nakama.in/services/content';

/** Soften preview only. noindex, follow until go-live. Not indexable. */
const ROBOTS: Metadata['robots'] = {
 index: false,
 follow: true,
 googleBot: {index: false, follow: true},
};

const baseMeta = pageMeta('/services/content', {title: TITLE, description: DESCRIPTION});
export const metadata: Metadata = {
 ...baseMeta,
 robots: ROBOTS,
 alternates: {...baseMeta.alternates, canonical: CANONICAL},
 openGraph: {...baseMeta.openGraph, url: CANONICAL},
};

const H1A = 'Answer-first content';
const H1B = 'for SaaS, tech and AI.';
const DAL = 'Nakama Growth writes answer-first content for AI search: listicles, comparisons and articles for SaaS, tech and AI teams. You own every file. These are formats AI answers already pull from for best-of and X vs Y questions. Researched, fact-checked and refreshed on schedule.';

const formats: {n: string; icon: ModIconName; title: string; body: string}[] = [
 {n: '01', icon: 'listicle', title: 'Best-of listicle', body: 'Ranked best-[category] pieces with clear criteria and a fair take on each option.'},
 {n: '02', icon: 'compare', title: 'X vs Y comparison', body: 'Side-by-side comparisons that answer the buyer\'s real question in the first lines.'},
 {n: '03', icon: 'alternatives', title: 'Alternatives page', body: '[Tool] alternatives pieces that explain who should switch, and who should not.'},
 {n: '04', icon: 'guide', title: 'Buyer and use-case guide', body: 'Guides built around a job to be done, a role or an industry your buyers search for.'},
 {n: '05', icon: 'article', title: 'Answer-first article', body: 'Articles that open with a short direct answer, then back it with detail and sources.'},
];

const receive = [
 'Prompt and question research for each piece',
 'Brief and outline you approve',
 'Expert draft, edited by a human',
 'Claim check with sources for every fact',
 'Scheduled refreshes as the category changes',
 'Owned files: doc, markdown and images',
] as const;

const anatomy = [
 {n: '01', title: 'Answer capsule', body: 'A 40 to 60 word direct answer at the top.'},
 {n: '02', title: 'Criteria', body: 'A table of how options were judged.'},
 {n: '03', title: 'Honest weakness', body: 'One real limitation per tool.'},
 {n: '04', title: 'Sources', body: 'Claims linked to a primary source.'},
 {n: '05', title: 'Date', body: 'A visible updated date, refreshed on schedule.'},
] as const;

const fit = [
 {tag: 'Content · this page', body: 'Owned editorial pieces you publish anywhere.', href: null, link: null},
 {tag: 'GEO', body: 'Getting named in AI answers across the web.', href: '/services/geo', link: 'GEO services'},
 {tag: 'AEO', body: 'Making your own site answer buyer questions.', href: '/services/aeo', link: 'AEO services'},
 {tag: 'Reddit', body: 'Honest presence in the threads buyers read.', href: '/services/reddit', link: 'Reddit services'},
] as const;

const FIT_LINE = 'We write; placement is PR. Outreach and placement are a separate service, not part of this one.';

const steps = [
 {n: '01', title: 'Prompt research', body: 'The questions buyers ask AI and search.'},
 {n: '02', title: 'Brief', body: 'Angle, format and sources agreed.'},
 {n: '03', title: 'Outline', body: 'Structure you approve first.'},
 {n: '04', title: 'Expert draft', body: 'Written with your team\'s input.'},
 {n: '05', title: 'Claim check', body: 'Every fact traced to a source.'},
 {n: '06', title: 'Handoff', body: 'Owned files, ready to publish.'},
 {n: '07', title: 'Refresh', body: 'Updated as the category moves.'},
] as const;

const measure = [
 {title: 'Fixed prompt set', body: 'The same buyer questions, agreed up front.'},
 {title: 'Per engine', body: 'Results tracked engine by engine.'},
 {title: 'Repeated runs', body: 'Each prompt run more than once.'},
 {title: 'Before and after', body: 'A baseline before publishing, then compared.'},
] as const;

const MEAS_NOTE = 'AI visibility is probabilistic. We report what we see on a fixed prompt set, never as a promise.';

const faq = [
 ['Who owns the content?', 'You do. Every piece, draft and file is yours to edit, publish and republish.'],
 ['Where can we publish it?', 'Anywhere you choose: your site, a partner blog, Medium, LinkedIn or a guest post you arrange.'],
 ['Is it AI-written?', 'No. Writers use research tools, but every piece is drafted, edited and fact-checked by people.'],
 ['How is this different from GEO or AEO?', 'This is the writing, also called AEO content writing when peers label the same work that way. GEO and AEO are wider programs; pieces from this page can feed either one.'],
 ['How is this different from a content marketing agency?', 'We write fewer answer-first formats for buyer questions, with claim checks and refreshes. Not a full calendar, and not an AI content writing agency shipping bulk posts.'],
 ['How do we start?', 'Get a content quote or book a call. We start with the buyer questions your category already asks.'],
] as const;

const clients = [
 {name: 'Synup', src: '/geo/synup.svg', hero: 22, proof: 30, word: false},
 {name: 'Inventive AI', src: '/geo/inventive.png', hero: 20, proof: 28, word: false},
 {name: 'HubEngage', src: '/geo/hubengage.png', hero: 22, proof: 30, word: true},
 {name: 'StarAgile', src: '/geo/staragile.png', hero: 27, proof: 38, word: false},
] as const;

const serviceLd = {
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': abs('/services/content#service'),
 name: 'Content & editorial',
 serviceType: 'Answer-first content',
 description: DESCRIPTION,
 url: CANONICAL,
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
   Get a content quote <span className="content-ar" aria-hidden="true">→</span>
  </Link>
 );
}

function BookLink({className, rail = false}: {className: string; rail?: boolean}) {
 return (
  <BookCallButton className={className}>
   Book a call{rail ? <span className="content-ar" aria-hidden="true">↗</span> : null}
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

export default function ContentServices() {
 return (
  <Shell className="content-page shell-cinema">
   <Crumbs trail={[{name: 'Services', path: '/services'}, {name: 'Content & editorial', path: '/services/content'}]} />
   <JsonLd data={[serviceLd, faqLd]} />

   <section className="content-hero">
    <div className="content-atmo" aria-hidden="true">
     <i className="content-glow" />
     <i className="content-grid" />
     <i className="content-arch" />
    </div>
    <div className="content-wrap">
     <nav className="content-crumb" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span aria-hidden="true">›</span>
      <Link href="/services">Services</Link>
      <span aria-hidden="true">›</span>
      <span aria-current="page">Content &amp; editorial</span>
     </nav>
     <div className="content-hero-copy">
      <p className="content-who"><span className="content-dot" aria-hidden="true" />Content &amp; editorial</p>
      <h1>{H1A} <em>{H1B}</em></h1>
      <p className="content-lead">{DAL}</p>
      <div className="content-ctas">
       <QuoteLink className="content-btn content-btn-primary" />
       <BookLink className="content-btn content-btn-ghost" />
      </div>
      <div className="content-logos">
       <ul className="content-hero-logos">
        {clients.map(c => (
         <li key={c.name}>
          <LogoMark name={c.name} src={c.src} height={c.hero} word={c.word} wordClass="content-word" />
         </li>
        ))}
       </ul>
      </div>
     </div>
    </div>
   </section>

   <section className="content-s content-proof-s">
    <div className="content-wrap">
     <p className="content-idx">01 · Proof</p>
     <ul className="content-proof">
      {clients.map(c => (
       <li className="content-proof-cell" key={c.name}>
        <div className="content-proof-logo">
         <LogoMark name={c.name} src={c.src} height={c.proof} word={c.word} wordClass="content-word content-word-lg" />
        </div>
        <span className="content-role">Content &amp; editorial</span>
       </li>
      ))}
     </ul>
     <p className="content-scents">
      <Link className="content-scent" href="/work">See our work →</Link>
     </p>
    </div>
   </section>

   <section className="content-s content-s-alt">
    <div className="content-wrap">
     <p className="content-idx">02 · What you get</p>
     <h2>What content does Nakama Growth write?</h2>
     <div className="content-mods">
      {formats.map(m => (
       <article className="content-mod" key={m.n}>
        <span className="content-mod-n">{m.n}</span>
        <div className="content-ic"><ModIcon name={m.icon} /></div>
        <h3>{m.title}</h3>
        <p>{m.body}</p>
       </article>
      ))}
     </div>
     <div className="content-receive">
      <div>
       <h3>What you receive</h3>
       <p className="content-receive-lead">Every piece, every engagement.</p>
      </div>
      <ul>
       {receive.map(item => <li key={item}>{item}</li>)}
      </ul>
     </div>
    </div>
   </section>

   <section className="content-s">
    <div className="content-wrap">
     <p className="content-idx">03 · Anatomy</p>
     <h2>What makes a piece LLM-ready?</h2>
     <div className="content-anat">
      <figure className="content-doc" aria-label="Sample LLM-ready outline, placeholders only">
       <div className="content-doc-h"><span>Sample outline</span><span>Placeholders</span></div>
       <p className="content-doc-title">Best [Category] tools for [use case]</p>
       <div className="content-blk is-on">
        <span className="content-tg">Answer capsule</span>
        <p>The best [Category] tool for most [buyer] teams is [Tool A], because [reason]. [Tool B] fits if [condition].</p>
       </div>
       <div className="content-blk">
        <span className="content-tg is-g">Criteria</span>
        <table>
         <thead>
          <tr><th>Tool</th><th>Best for</th><th>Watch out</th></tr>
         </thead>
         <tbody>
          <tr><td>[Tool A]</td><td>[use case]</td><td>[limit]</td></tr>
          <tr><td>[Tool B]</td><td>[use case]</td><td>[limit]</td></tr>
         </tbody>
        </table>
       </div>
       <div className="content-blk">
        <span className="content-tg is-g">Honest weakness</span>
        <p>[Tool A] is weaker at [area]; pick [Tool B] if that matters.</p>
       </div>
       <div className="content-blk">
        <span className="content-tg is-g">Sources</span>
        <p>[1] [primary source] · [2] [vendor docs]</p>
       </div>
       <div className="content-blk">
        <span className="content-tg is-g">Date</span>
        <p>Updated [Month Year] · next refresh [Month Year]</p>
       </div>
      </figure>
      <ol className="content-alist">
       {anatomy.map(item => (
        <li key={item.n}>
         <b>{item.n}</b>
         <div>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
         </div>
        </li>
       ))}
      </ol>
     </div>
    </div>
   </section>

   <section className="content-s content-s-alt">
    <div className="content-wrap">
     <p className="content-idx">04 · How it fits</p>
     <h2>Content, GEO, AEO and Reddit: how they fit</h2>
     <div className="content-routes">
      {fit.map(card => (
       <article className={card.href ? 'content-card' : 'content-card is-here'} key={card.tag}>
        <span className="content-tag">{card.tag}</span>
        <p>
         {card.body}
         {card.href && card.link ? <> <Link href={card.href}>{card.link} →</Link></> : null}
        </p>
       </article>
      ))}
     </div>
     <p className="content-router">{FIT_LINE}</p>
    </div>
   </section>

   <section className="content-s">
    <div className="content-wrap">
     <p className="content-idx">05 · Process</p>
     <h2>How does a content engagement work?</h2>
     <div className="content-steps">
      {steps.map(s => (
       <div className="content-step" key={s.n}>
        <b>{s.n}</b>
        <h3>{s.title}</h3>
        <p>{s.body}</p>
       </div>
      ))}
     </div>
     <p className="content-scents">
      <Link className="content-scent" href="/process">See how we work →</Link>
     </p>
    </div>
   </section>

   <section className="content-s content-s-alt">
    <div className="content-wrap">
     <p className="content-idx">06 · How we measure</p>
     <h2>How do we measure it?</h2>
     <div className="content-meas">
      {measure.map(item => (
       <article className="content-card" key={item.title}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
       </article>
      ))}
     </div>
     <p className="content-yes">{MEAS_NOTE}</p>
    </div>
   </section>

   <section className="content-s">
    <div className="content-wrap content-faq">
     <div>
      <p className="content-idx">07 · FAQ</p>
      <h2>Content questions</h2>
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

   <section className="content-cta" id="book-a-call" aria-label="Next step">
    <div className="content-wrap">
     <div className="content-cta-copy">
      <h2>Content your buyers and AI answers can use.</h2>
      <p>Tell us your product and buyers. We&apos;ll suggest the first pieces to write.</p>
     </div>
     <div className="content-rail">
      <QuoteLink className="content-btn content-btn-primary" />
      <BookLink className="content-btn content-btn-ghost" rail />
     </div>
    </div>
   </section>

   <section className="content-s content-wl-s">
    <div className="content-wrap">
     <div className="content-wl">
      <span>Agency? We also write answer-first content under your brand.</span>
      <Link href="/white-label">White-label →</Link>
     </div>
    </div>
   </section>
  </Shell>
 );
}
