import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import Link from 'next/link';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {BookCallButton} from '@/components/booking/BookCall';
import {ModIcon, type ModIconName} from './icons';
import './reddit.css';

const TITLE = 'Reddit Marketing Agency for SaaS, Tech & AI - Nakama Growth';
const DESCRIPTION = 'Reddit marketing agency for SaaS, tech and AI. Nakama Growth maps the subreddits your buyers use and joins their threads with helpful, rules-fit answers.';

/** Soften preview only. robots noindex, nofollow until go-live. */
const ROBOTS: Metadata['robots'] = {
 index: false,
 follow: false,
 googleBot: {index: false, follow: false},
};

export const metadata: Metadata = {
 ...pageMeta('/services/reddit', {title: TITLE, description: DESCRIPTION}),
 robots: ROBOTS,
};

const LEAD = 'Nakama Growth is a Reddit marketing agency for SaaS, tech and AI teams. We find the subreddits where your buyers already compare tools, then join those threads with helpful answers inside each community\'s rules. Quora, Medium and other niche communities relevant to your brand and industry are in scope too. Start with a quote or a call.';

const modules: {n: string; icon: ModIconName; title: string; body: string}[] = [
 {n: '01', icon: 'comment', title: 'Commenting', body: 'Helpful comments in threads where your buyers already compare tools, written to each community\'s rules.'},
 {n: '02', icon: 'post', title: 'Posting', body: 'Posts that fit the subreddit, not drive-by promo. Useful threads first; brand mention inside the conversation.'},
 {n: '03', icon: 'create', title: 'Creating a subreddit', body: 'When your brand needs its own community, we help set up the subreddit, rules and starter structure.'},
 {n: '04', icon: 'manage', title: 'Managing a subreddit', body: 'Ongoing community ops for brand subreddits: rules, moderation support and keeping discussion useful.'},
 {n: '05', icon: 'account', title: 'Brand Reddit accounts', body: 'We manage brands\' official Reddit accounts: aged profiles with real history, clearly identified, never fake personas.'},
 {n: '06', icon: 'niche', title: 'Quora, Medium and niche', body: 'Same rules-first participation on Quora, Medium and other niche communities relevant to your brand and industry.'},
];

const beats: {n: string; title: string; body: ReactNode}[] = [
 {n: '01', title: 'Aged accounts', body: 'We post from aged Reddit accounts with real history. Account ages vary by community; we don\'t invent a fixed age.'},
 {n: '02', title: 'Fit-first communities', body: 'We pick subreddits that fit your brand and that are realistic to participate in under their rules. Fit-first and rules-friendly.'},
 {n: '03', title: 'Reputation over time', body: 'We maintain account reputation over time: helpful replies, steady presence, no sudden spam spikes.'},
 {n: '04', title: 'Promo / non-promo mix', body: <>We keep a strict mix of promotional and non-promotional posts. Starting mix we use unless you set another: about <b>10 promotional to 5 non-promotional</b>. Edit this ratio per engagement; it is not a removal-rate promise.</>},
 {n: '05', title: 'Brand inside the conversation', body: 'Brand placement sits inside the conversation: natural, helpful answers, not a hard sell or "we\'re promoting a brand" energy.'},
 {n: '06', title: 'Read the rules first', body: 'Before we post, we read each subreddit\'s rules and posting norms.'},
 {n: '07', title: 'Several aged accounts', body: 'We run several aged accounts with real history so the engagement isn\'t dependent on one or two profiles. Clearly identified; never fake personas or sockpuppets.'},
];

const steps = [
 {n: '01', title: 'Listen-first audit', body: 'We read the threads about your category, brand and competitors.'},
 {n: '02', title: 'Community map', body: 'We pick the communities that matter and note each one\'s rules.'},
 {n: '03', title: 'Rules-first answers', body: 'We answer inside each community\'s rules, with your team reviewing anything technical.'},
 {n: '04', title: 'Monitor & report', body: 'We share threads answered and mention notes, then choose the next communities.'},
] as const;

const clients = [
 {name: 'Synup', src: '/geo/synup.svg', hero: 22, proof: 30, word: false},
 {name: 'Inventive AI', src: '/geo/inventive.png', hero: 20, proof: 28, word: false},
 {name: 'HubEngage', src: '/geo/hubengage.png', hero: 22, proof: 30, word: true},
 {name: 'StarAgile', src: '/geo/staragile.png', hero: 27, proof: 38, word: false},
] as const;

const faq = [
 ['What does a Reddit marketing agency do for a SaaS, tech or AI company?', 'Our Reddit marketing services find where your buyers talk, read what they say about you, and join those threads with helpful answers. Get a Reddit quote to see the scope.'],
 ['Will this get our accounts banned?', 'We can\'t promise any moderator\'s decision, but we work rules-first: we read each subreddit\'s rules, stay clearly identified, and stay out where brand replies aren\'t welcome.'],
 ['Do you buy upvotes or use fake accounts?', 'Never. We never buy votes or use fake accounts. If a community doesn\'t allow brand replies, we listen and report instead.'],
 ['Who posts: our brand or people?', 'Either your brand account or named team members, always clearly identified, following each community\'s rules. Never fake personas.'],
 ['Does Reddit help us show up in ChatGPT and other AI answers?', 'Sometimes. Some AI tools cite Reddit threads, and how much changes by engine and month. We can\'t guarantee any AI mention; we report threads answered, mention trends and what we see, engine by engine.'],
 ['Do you run Reddit Ads?', 'No. Our work is organic, rules-first participation. If you want paid Reddit Ads, a media-buying agency is the better fit.'],
 ['Do you cover Quora, Medium and other communities?', 'Reddit first. Quora and Medium where your category already has questions or posts, plus other niche communities relevant to your brand and industry. Not general social media.'],
 ['How does pricing work, and how do we start?', 'One custom quote based on your communities and scope. Get a Reddit quote or book a call, and we start by listening to the threads about you.'],
] as const;

const serviceLd = {
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': abs('/services/reddit#service'),
 name: 'Reddit marketing services',
 serviceType: 'Reddit and community marketing',
 description: DESCRIPTION,
 url: abs('/services/reddit'),
 provider: {'@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Nakama Growth', url: SITE_URL},
 audience: {'@type': 'Audience', audienceType: 'SaaS, tech and AI'},
};

const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: faq.map(([name, text]) => ({'@type': 'Question', name, acceptedAnswer: {'@type': 'Answer', text}})),
};

type Bar = {label: string; value: string; width: string; tone?: 'hot' | 'light'};

const citeCards: {engine: string; big: string; bigHot?: boolean; who: ReactNode; bars: Bar[]}[] = [
 {
  engine: 'ChatGPT',
  big: '16.8%',
  bigHot: true,
  who: <>Reddit <span className="reddit-pill">#1</span></>,
  bars: [
   {label: '1. Reddit', value: '16.8%', width: '67.2%', tone: 'hot'},
   {label: '2. Wikipedia', value: '7.0%', width: '28.0%'},
   {label: '3. YouTube', value: '2.5%', width: '10.0%'},
  ],
 },
 {
  engine: 'Perplexity',
  big: '21.6%',
  bigHot: true,
  who: <>Reddit <span className="reddit-pill">#1</span></>,
  bars: [
   {label: '1. Reddit', value: '21.6%', width: '86.4%', tone: 'hot'},
   {label: '2. YouTube', value: '20.8%', width: '83.2%'},
   {label: '3. Wikipedia', value: '6.3%', width: '25.2%'},
  ],
 },
 {
  engine: 'Google AI Overviews',
  big: '22.9%',
  who: <>YouTube <span className="reddit-pill is-light">#1</span> <span className="reddit-dot-sep" aria-hidden="true">·</span> <span className="is-hot">Reddit 18.5%</span> <span className="reddit-pill">#2</span></>,
  bars: [
   {label: '1. YouTube', value: '22.9%', width: '91.6%', tone: 'light'},
   {label: '2. Reddit', value: '18.5%', width: '74.0%', tone: 'hot'},
   {label: '3. Quora', value: '4.7%', width: '18.8%'},
   {label: '4. Wikipedia', value: '4.0%', width: '16.0%'},
  ],
 },
];

function QuoteLink({className}: {className: string}) {
 return (
  <Link className={className} href="/pricing#quote">
   Get a Reddit quote <span className="reddit-ar" aria-hidden="true">→</span>
  </Link>
 );
}

function BookLink({className, rail = false}: {className: string; rail?: boolean}) {
 return (
  <BookCallButton className={className}>
   Book a call{rail ? <span className="reddit-ar" aria-hidden="true">↗</span> : null}
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

function BarRow({label, value, width, tone}: Bar) {
 return (
  <div className="reddit-bar">
   <div className="reddit-bar-l">
    <span className={tone === 'hot' ? 'is-hot' : undefined}>{label}</span>
    <b className={tone === 'hot' ? 'is-hot' : undefined}>{value}</b>
   </div>
   <div className="reddit-bar-t" aria-hidden="true">
    <div className={tone === 'hot' ? 'is-hot' : tone === 'light' ? 'is-light' : undefined} style={{width}} />
   </div>
  </div>
 );
}

export default function RedditServices() {
 return (
  <Shell className="reddit-page shell-cinema">
   <Crumbs trail={[{name: 'Services', path: '/services'}, {name: 'Reddit marketing services', path: '/services/reddit'}]} />
   <JsonLd data={[serviceLd, faqLd]} />

   <section className="reddit-hero">
    <div className="reddit-atmo" aria-hidden="true">
     <i className="reddit-glow" />
     <i className="reddit-grid" />
     <i className="reddit-arch" />
    </div>
    <div className="reddit-wrap">
     <nav className="reddit-crumb" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span aria-hidden="true">›</span>
      <Link href="/services">Services</Link>
      <span aria-hidden="true">›</span>
      <span aria-current="page">Reddit marketing services</span>
     </nav>
     <div className="reddit-hero-copy">
      <p className="reddit-who"><span className="reddit-dot" aria-hidden="true" />For SaaS, tech &amp; AI teams</p>
      <h1>Reddit marketing agency <em>for SaaS, tech and AI.</em></h1>
      <p className="reddit-lead">{LEAD}</p>
      <div className="reddit-ctas">
       <QuoteLink className="reddit-btn reddit-btn-primary" />
       <BookLink className="reddit-btn reddit-btn-ghost" />
      </div>
      <div className="reddit-logos">
       <ul className="reddit-hero-logos">
        {clients.map(c => (
         <li key={c.name}>
          <LogoMark name={c.name} src={c.src} height={c.hero} word={c.word} wordClass="reddit-word" />
         </li>
        ))}
       </ul>
      </div>
      <figure className="reddit-thread" aria-label="Sample community thread">
       <div className="reddit-th">
        <span className="reddit-rtext">Reddit</span>
        <b>r/SaaS</b>
        <span>buyer thread</span>
       </div>
       <p className="reddit-q">Anyone moved off [Tool A]? Looking at alternatives for a 40-person team</p>
       <div className="reddit-c">
        <span className="reddit-v"><i aria-hidden="true">▲</i> 18</span>
        <div><span className="reddit-who2">u/ops_lead</span>We tried [Your brand]. Setup was fine, support was slow at first.</div>
       </div>
       <div className="reddit-c is-us">
        <span className="reddit-v"><i aria-hidden="true">▲</i> 9</span>
        <div><span className="reddit-who2">u/yourbrand_team</span>Fair point, I work there 🙂 Here is what changed since, plus where we are not the right fit.</div>
       </div>
      </figure>
     </div>
    </div>
   </section>

   <section className="reddit-s reddit-s-alt reddit-cite">
    <div className="reddit-wrap">
     <p className="reddit-idx">01 · AI visibility</p>
     <h2>Where AI answers find their sources</h2>
     <p className="reddit-cite-sub">Mention share among top sources, by AI engine · Bars scaled 0–25%</p>
     <div className="reddit-cite-grid">
      {citeCards.map(card => (
       <article className="reddit-cite-card" key={card.engine}>
        <div className="reddit-cite-en">{card.engine}</div>
        <div className={card.bigHot ? 'reddit-cite-big is-hot' : 'reddit-cite-big'}>{card.big}</div>
        <div className="reddit-cite-who">{card.who}</div>
        <div className="reddit-bars">
         {card.bars.map(bar => <BarRow key={bar.label} {...bar} />)}
        </div>
       </article>
      ))}
     </div>
     <p className="reddit-cite-cap">Independent AI-visibility studies rank Reddit among the most-cited websites in AI answers. Ahrefs&apos; September 2026 data puts it at #1 in ChatGPT and Perplexity and #2 in Google AI Overviews.</p>
     <p className="reddit-cite-src">Ahrefs Brand Radar · US · Sep 2026 · mention share among top sources</p>
    </div>
   </section>

   <section className="reddit-s">
    <div className="reddit-wrap">
     <p className="reddit-idx">02 · Modules</p>
     <h2>What do Reddit marketing services from Nakama Growth include?</h2>
     <div className="reddit-mods">
      {modules.map(m => (
       <article className="reddit-mod" key={m.n}>
        <span className="reddit-mod-n">{m.n}</span>
        <div className="reddit-ic"><ModIcon name={m.icon} /></div>
        <h3>{m.title}</h3>
        <p>{m.body}</p>
       </article>
      ))}
     </div>
     <p className="reddit-chip"><small>Reddit-first · plus Quora, Medium &amp; niche</small></p>
    </div>
   </section>

   <section className="reddit-s reddit-mid-s">
    <div className="reddit-wrap">
     <div className="reddit-mid">
      <p>Want to know what Reddit says about you? Let&apos;s read the threads.</p>
      <div className="reddit-mid-actions">
       <QuoteLink className="reddit-btn reddit-btn-primary" />
       <BookLink className="reddit-btn reddit-btn-ghost" />
      </div>
     </div>
    </div>
   </section>

   <section className="reddit-s reddit-s-alt">
    <div className="reddit-wrap">
     <p className="reddit-idx">03 · Keep posts from getting removed</p>
     <h2>How do we keep Reddit posts from getting removed?</h2>
     <p className="reddit-keep-lead">A Reddit marketing agency that lasts on the platform works the community&apos;s way, not against it. We still can&apos;t promise any moderator&apos;s decision.</p>
     <ol className="reddit-beats">
      {beats.map(beat => (
       <li className="reddit-beat" key={beat.n}>
        <span className="reddit-bn" aria-hidden="true">{beat.n}</span>
        <div>
         <h3>{beat.title}</h3>
         <p>{beat.body}</p>
        </div>
       </li>
      ))}
     </ol>
     <p className="reddit-yes">Moderators still decide. This is how we reduce risk of removals; it is not a guarantee of zero bans or zero removals.</p>
    </div>
   </section>

   <section className="reddit-s">
    <div className="reddit-wrap">
     <p className="reddit-idx">04 · Proof</p>
     <h2>Teams that work with Nakama Growth</h2>
     <ul className="reddit-proof">
      {clients.map(c => (
       <li className="reddit-proof-cell" key={c.name}>
        <div className="reddit-proof-logo">
         <LogoMark name={c.name} src={c.src} height={c.proof} word={c.word} wordClass="reddit-word reddit-word-lg" />
        </div>
        <span className="reddit-role">Reddit / community</span>
       </li>
      ))}
     </ul>
     <p className="reddit-scents">
      <Link className="reddit-scent" href="/work">See our work →</Link>
     </p>
    </div>
   </section>

   <section className="reddit-s reddit-s-alt">
    <div className="reddit-wrap">
     <p className="reddit-idx">05 · How it fits</p>
     <h2>Reddit, GEO and AEO: how they fit</h2>
     <div className="reddit-routes">
      <article className="reddit-card is-here">
       <span className="reddit-tag">Reddit · this page</span>
       <p>Being present, honestly, in the threads buyers read.</p>
      </article>
      <article className="reddit-card">
       <span className="reddit-tag">GEO</span>
       <p>Reddit is one channel in a wider plan to get named in AI answers. <Link href="/services/geo">generative engine optimization services →</Link></p>
      </article>
      <article className="reddit-card">
       <span className="reddit-tag">AEO</span>
       <p>Making your own site answer buyer questions first. <Link href="/services/aeo">AEO services →</Link></p>
      </article>
     </div>
     <p className="reddit-router">Some AI answer engines cite Reddit often; how much varies by engine and changes over time. We report it per engine, never as a promise.</p>
    </div>
   </section>

   <section className="reddit-s">
    <div className="reddit-wrap">
     <p className="reddit-idx">06 · How we start</p>
     <h2>How does a Reddit engagement with Nakama Growth start?</h2>
     <div className="reddit-steps">
      {steps.map(s => (
       <div className="reddit-step" key={s.n}>
        <b>{s.n}</b>
        <h3>{s.title}</h3>
        <p>{s.body}</p>
       </div>
      ))}
     </div>
     <p className="reddit-scents">
      <Link className="reddit-scent" href="/process">See how we work →</Link>
     </p>
    </div>
   </section>

   <section className="reddit-s reddit-s-alt">
    <div className="reddit-wrap reddit-faq">
     <div>
      <p className="reddit-idx">07 · FAQ</p>
      <h2>Reddit marketing questions</h2>
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

   <section className="reddit-s reddit-wl-s">
    <div className="reddit-wrap">
     <div className="reddit-wl">
      <span>Agency? We also deliver Reddit marketing under your brand.</span>
      <Link href="/white-label">White-label →</Link>
     </div>
    </div>
   </section>

   <section className="reddit-cta" aria-label="Next step">
    <div className="reddit-wrap">
     <div className="reddit-cta-copy">
      <h2>Join the threads your buyers already read.</h2>
      <p>Tell us your product and buyers. We&apos;ll show you what Reddit is saying and where to start.</p>
     </div>
     <div className="reddit-rail">
      <QuoteLink className="reddit-btn reddit-btn-primary" />
      <BookLink className="reddit-btn reddit-btn-ghost" rail />
     </div>
    </div>
   </section>
  </Shell>
 );
}
