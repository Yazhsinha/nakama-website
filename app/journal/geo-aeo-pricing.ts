import type {Article} from './articles';

/**
 * PUBLISH TIME for this article. ISO 8601 with +05:30.
 * It feeds datePublished and dateModified in the schema, og/article times,
 * the RSS pubDate, the sitemap lastmod (via `date`) and the visible "Updated ..." line.
 *
 * GO-LIVE TODO: set PREVIEW to false.
 * That one flag flips robots to index,follow and adds this note to the sitemap,
 * llms.txt, llms-full.txt, RSS and the author index.
 * While PREVIEW is true the page stays noindex,follow and off those surfaces.
 */
export const GEO_AEO_PRICING_PUBLISHED_AT = '2026-11-02T09:00:00+05:30';
export const PUBLISHED_AT = GEO_AEO_PRICING_PUBLISHED_AT;
const MODIFIED_AT = PUBLISHED_AT;
const PREVIEW = false;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayOf = (iso: string) => iso.slice(0, 10);
const shortDate = (iso: string) => `${Number(iso.slice(8, 10))} ${MONTHS[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;
const modifiedDate = shortDate(MODIFIED_AT);

const TITLE = 'How Much Does GEO Cost in 2026? GEO & AEO Agency Pricing';
const H1 = 'How much does GEO cost in 2026? GEO and AEO agency pricing';
const DESCRIPTION = 'GEO costs $1,500 to $5,000 a month at entry level; $6,850 median. Sourced 2026 GEO and AEO agency pricing by tier, model, India (INR) and in-house.';
const CANONICAL = 'https://www.nakama.in/journal/geo-aeo-pricing';
const COVER_ALT = "Cover for Nakama Growth's 2026 GEO and AEO pricing guide showing a $3,000 typical and $6,850 median monthly retainer.";
const OG_ALT = 'Cover for Nakama Growth\'s 2026 GEO pricing guide: $3,000 typical, $6,850 median monthly retainer.';
const BARS_ALT = 'Bar chart of 2026 GEO price ranges by engagement type, from audits to enterprise programs.';
const TIERS_ALT = 'Four GEO pricing tiers with median monthly price and deliverables per month.';
const TIMELINE_ALT = 'Timeline of what a 90-day GEO budget should buy, month by month.';
const HERO_URL = 'https://www.nakama.in/journal/geo-aeo-pricing/geo-aeo-pricing-cover.webp';
const OG_URL = 'https://www.nakama.in/journal/geo-aeo-pricing/geo-aeo-pricing-og.png';
const TITLE_HTML = TITLE.replaceAll('&', '&amp;');

const FAQS: {q: string; a: string}[] = [
 {
  q: 'How much does GEO cost per month?',
  a: 'Most entry-level GEO retainers cost $1,500 to $5,000 a month. The typical published price is $3,000, and one agency survey puts the Q3 2026 median at $6,850.',
 },
 {
  q: 'What is AEO agency pricing in 2026?',
  a: 'AEO is usually priced and sold alongside GEO, so the same ranges apply: about $1,500 to $5,000 a month for entry retainers, rising to $22,000+ for enterprise programs.',
 },
 {
  q: 'How much does AI search optimization cost for a small business?',
  a: 'A small business can start with a tracking tool at $29 to $500 a month, or a productized service under $1,500. First Page Sage\'s Starter tier runs $1,800 to $4,200 a month.',
 },
 {
  q: 'What is the GEO agency cost in India?',
  a: 'Indian agencies that publish prices charge from about ₹15,000 a month for small-business bundles to ₹2,75,000 a month for enterprise retainers, based on pages read on 28 October 2026.',
 },
 {
  q: 'What is a typical GEO retainer cost and term?',
  a: 'Retainers center on $3,000 published and $6,850 median, with minimum terms from none to twelve months. Three to six months is most common.',
 },
 {
  q: 'Is GEO more expensive than SEO?',
  a: 'In First Page Sage\'s data, yes. GEO and AEO retainers had a $6,850 median in Q3 2026, about 45% above the $4,740 median for traditional SEO.',
 },
 {
  q: 'Can a GEO agency guarantee results?',
  a: 'No. AI answers vary between runs and users. Pay for named work and per-engine measurement, not for guaranteed citations.',
 },
];

const faqId = (q: string) => q.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const articleLd = {
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "Article",
   "@id": `${CANONICAL}#article`,
   "headline": TITLE,
   "description": DESCRIPTION,
   "image": [
    HERO_URL,
    OG_URL
   ],
   "datePublished": PUBLISHED_AT,
   "dateModified": MODIFIED_AT,
   "inLanguage": "en",
   "articleSection": "Guide",
   "author": {
    "@id": "https://www.nakama.in/authors/yash-kumar#person"
   },
   "publisher": {
    "@id": "https://www.nakama.in/#organization"
   },
   "mainEntityOfPage": {
    "@id": `${CANONICAL}#webpage`
   },
   "url": CANONICAL,
   "isPartOf": {
    "@id": "https://www.nakama.in/#website"
   }
  },
  {
   "@type": "WebPage",
   "@id": `${CANONICAL}#webpage`,
   "url": CANONICAL,
   "name": TITLE,
   "description": DESCRIPTION,
   "inLanguage": "en",
   "isPartOf": {
    "@id": "https://www.nakama.in/#website"
   },
   "publisher": {
    "@id": "https://www.nakama.in/#organization"
   },
   "mainEntity": {
    "@id": `${CANONICAL}#article`
   },
   "primaryImageOfPage": {
    "@id": `${CANONICAL}#primaryimage`
   },
   "breadcrumb": {
    "@id": `${CANONICAL}#breadcrumb`
   },
   "datePublished": PUBLISHED_AT,
   "dateModified": MODIFIED_AT
  },
  {
   "@type": "ImageObject",
   "@id": `${CANONICAL}#primaryimage`,
   "url": HERO_URL,
   "contentUrl": HERO_URL,
   "width": 1600,
   "height": 900,
   "caption": COVER_ALT
  },
  {
   "@type": "ImageObject",
   "@id": `${CANONICAL}#ogimage`,
   "url": OG_URL,
   "contentUrl": OG_URL,
   "width": 1200,
   "height": 630,
   "caption": OG_ALT
  },
  {
   "@type": "Person",
   "@id": "https://www.nakama.in/authors/yash-kumar#person",
   "name": "Yash Kumar",
   "jobTitle": "Co-founder and CEO",
   "url": "https://www.nakama.in/authors/yash-kumar",
   "description": "Yash Kumar is Co-founder and CEO of Nakama Growth, an AEO and AI visibility agency for SaaS, software and AI companies. He tracks how ChatGPT, Gemini, Perplexity and Google AI Overviews answer buyer prompts and publishes the results.",
   "worksFor": {
    "@id": "https://www.nakama.in/#organization"
   }
  },
  {
   "@type": "BreadcrumbList",
   "@id": `${CANONICAL}#breadcrumb`,
   "itemListElement": [
    {
     "@type": "ListItem",
     "position": 1,
     "name": "Home",
     "item": "https://www.nakama.in/"
    },
    {
     "@type": "ListItem",
     "position": 2,
     "name": "Resources",
     "item": "https://www.nakama.in/resources"
    },
    {
     "@type": "ListItem",
     "position": 3,
     "name": TITLE,
     "item": CANONICAL
    }
   ]
  },
  {
   "@type": "FAQPage",
   "@id": `${CANONICAL}#faq`,
   "isPartOf": {
    "@id": `${CANONICAL}#webpage`
   },
   "mainEntity": FAQS.map(({q, a}) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": {
     "@type": "Answer",
     "text": a
    }
   }))
  }
 ]
};

export const geoAeoPricingJsonLd = articleLd;

const figure = (name: string, alt: string, width: number, height: number, eager = false) =>
 `<figure><picture><source srcset="/journal/geo-aeo-pricing/${name}.webp" type="image/webp"><img src="/journal/geo-aeo-pricing/${name}.png" alt="${alt}" width="${width}" height="${height}" ${eager ? 'fetchpriority="high" ' : 'loading="lazy" '}decoding="async"></picture></figure>`;

const faqHtml = FAQS.map(({q, a}) => `<h3 id="${faqId(q)}">${q}</h3>\n<p>${a}</p>`).join('\n');

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">${TITLE_HTML}</li></ol></nav>
<h1 id="how-much-does-geo-cost-in-2026-geo-and-aeo-agency-pricing">${H1}</h1>
<p>Updated ${modifiedDate}</p>
<p>By <a href="https://www.nakama.in/authors/yash-kumar" rel="author">Yash Kumar</a>, Co-founder and CEO, Nakama Growth</p>
${figure('geo-aeo-pricing-cover', COVER_ALT, 1600, 900, true)}
<p>GEO (generative engine optimization) costs about $1,500 to $5,000 a month for an entry-level agency retainer in 2026. The typical published price is $3,000 a month, while one agency survey puts the market median at $6,850. Enterprise programs run $22,000 to $60,000+ a month. Sprints cost $3,000 to $8,000, and consultants charge around $200 an hour. Prices checked 2 November 2026.</p>
<p>AEO (answer engine optimization) is priced the same way, and most agencies sell the two together. This guide shows what each price band buys, why quoted prices run higher than published ones, how India pricing compares, and what a 90-day budget should get you.</p>
<p>This is a pricing guide, not a shortlist and not a hiring process. For the hire process, read <a href="https://www.nakama.in/journal/how-to-hire-an-aeo-agency">how to hire an AEO agency</a>.</p>
<h2 id="what-are-the-key-geo-cost-numbers-in-2026">What are the key GEO cost numbers in 2026?</h2>
<p>The key GEO cost numbers in 2026 are a $3,000 typical published monthly retainer, a $6,850 survey median across 1,146 quotes, and an entry band of about $1,500 to $5,000 a month for done-for-you agency work. Indian published retainers span roughly ₹15,000 to ₹2,75,000 a month. Every source below is a seller, so treat the numbers as reference points.</p>
<ul>
<li><strong>$3,000 a month:</strong> typical published GEO retainer, middle half $1,250 to $7,500 (John Lawson, checked August 2026).</li>
<li><strong>$6,850 a month:</strong> median GEO and AEO retainer across 1,146 quotes from 214 agencies, Q3 2026 (First Page Sage agency survey).</li>
<li><strong>66%:</strong> rise in that median since Q1 2024, against 6% for SEO retainers (First Page Sage).</li>
<li><strong>$1,500 to $3,500 a month:</strong> where most entry-level done-for-you retainers sit among 21 sellers with a public price (Forty Questions, read 5 October 2026).</li>
<li><strong>₹15,000 to ₹2,75,000 a month:</strong> published AEO retainers from Indian agencies (Nakama research, 28 October 2026).</li>
</ul>
<p>Every market-range article we found, including ours, is written by a seller. Treat each number as a reference point and check the seller's own page before you rely on it.</p>
<h2 id="how-much-does-geo-cost-by-engagement-type">How much does GEO cost by engagement type?</h2>
<p>GEO costs depend first on what you buy: a retainer, a fixed sprint, hourly advice or an enterprise program. Retainers start around $1,500 a month and center near $3,000 published. Sprints run $3,000 to $8,000 one-time. Hourly consulting sits near $200. Enterprise programs start around $10,000 to $22,000 a month.</p>
<div class="article-table"><table><thead><tr><th scope="col">Engagement type</th><th scope="col">Published price range</th><th scope="col">Survey or guide range</th><th scope="col">Typical term</th><th scope="col">Sources</th></tr></thead><tbody><tr><td>One-time audit</td><td>$99 to $450 (productized)</td><td>$1,500 to $12,000</td><td>2 to 6 weeks</td><td>John Lawson; First Page Sage</td></tr><tr><td>Fixed sprint or project</td><td>$3,000 to $8,000</td><td>$5,000 to $40,000 (median $14,500)</td><td>30 to 90 days</td><td>John Lawson; First Page Sage</td></tr><tr><td>Monthly retainer</td><td>$3,000 typical ($1,250 to $7,500)</td><td>$6,850 median</td><td>3 to 6 months</td><td>John Lawson; First Page Sage</td></tr><tr><td>Hourly consulting</td><td>$200 typical</td><td>$50 to $325</td><td>None</td><td>John Lawson; WebFX; First Page Sage</td></tr><tr><td>Enterprise program</td><td>$10,000 to $68,250 a month</td><td>$22,000 to $60,000+ (median $31,500)</td><td>12 months</td><td>John Lawson; First Page Sage</td></tr><tr><td>Tracking software only</td><td>$29 to $1,000+ a month</td><td>n/a</td><td>Monthly</td><td>Forty Questions; WebFX</td></tr></tbody></table></div>
<p><em>All figures USD, from the sources listed, checked between August and November 2026. Full links in the sources list at the end.</em></p>
${figure('geo-aeo-pricing-engagement-bars', BARS_ALT, 1600, 1000)}
<p>Software is a separate line. A tracking tool shows where you appear in AI answers, but it does not write, publish or earn mentions for you.</p>
<p>If you want to measure yourself before paying anyone, the <a href="https://www.nakama.in/journal/geo-audit">GEO audit walkthrough</a> shows a do-it-yourself method.</p>
<h2 id="what-do-you-get-at-each-price-tier">What do you get at each price tier?</h2>
<p>Each tier buys a different amount of senior time and off-site work, not just more of the same. Under $1,500 a month buys fixed, productized deliverables. $1,500 to $5,000 is the core full-service market. $5,000 to $15,000 buys senior-led programs, and above $15,000 is enterprise scope with long terms.</p>
<div class="article-table"><table><thead><tr><th scope="col">Monthly budget</th><th scope="col">What it usually buys</th><th scope="col">Typical term</th></tr></thead><tbody><tr><td>Under $1,500</td><td>Fixed deliverables, schema and entity fixes, a monthly citation report</td><td>Month to month</td></tr><tr><td>$1,500 to $5,000</td><td>Content production, tracking across ChatGPT, Perplexity and AI Overviews, some off-site work</td><td>3 months common</td></tr><tr><td>$5,000 to $15,000</td><td>Senior strategist, more content, digital PR and community work, per-engine reporting</td><td>3 to 6 months</td></tr><tr><td>$15,000+</td><td>Multi-brand or multi-market scope, larger content volume, dedicated team</td><td>6 to 12 months</td></tr></tbody></table></div>
<p><em>Tier descriptions from John Lawson's market review (checked August 2026). Term ranges from First Page Sage and Forty Questions.</em></p>
<p>First Page Sage's survey adds one useful warning. Enterprise clients pay about 10.7 times the Starter median for about 4.2 times the monthly deliverables. Price climbs faster than output, so ask for a deliverable count in writing.</p>
<div class="article-table"><table><thead><tr><th scope="col">Survey tier</th><th scope="col">Price range</th><th scope="col">Median</th><th scope="col">Deliverables a month</th></tr></thead><tbody><tr><td>Starter (local and small)</td><td>$1,800 to $4,200</td><td>$2,950</td><td>3.4</td></tr><tr><td>Growth (mid-market)</td><td>$4,500 to $11,000</td><td>$7,400</td><td>6.5</td></tr><tr><td>Advanced (upper mid-market)</td><td>$11,000 to $22,000</td><td>$14,600</td><td>9.8</td></tr><tr><td>Enterprise</td><td>$22,000 to $60,000+</td><td>$31,500</td><td>14.2</td></tr></tbody></table></div>
<p><em>Source: First Page Sage, 1,146 quotes from 214 agencies, collected July 6 to October 2, 2026.</em></p>
${figure('geo-aeo-pricing-tier-cards', TIERS_ALT, 1600, 900)}
<h2 id="why-do-quoted-geo-prices-run-higher-than-published-prices">Why do quoted GEO prices run higher than published prices?</h2>
<p>Quoted prices run about twice published prices. Sellers that publish a price cluster around $3,000 a month, while agency pricing guides claim a typical $6,000. Published pages lead with entry tiers, and custom quotes add off-site work, more engines and senior time. Read both numbers before you set a budget.</p>
<p>John Lawson compared every seller that publishes GEO prices against the figures in agency pricing guides. Published retainers came in at a typical $3,000 a month. Guides claimed $6,000, with a range of $1,750 to $15,000.</p>
<p>The audit gap is even wider. Productized audits are published from $99 to $450, while guides claim $1,500 to $5,000.</p>
<p>First Page Sage saw the same pattern from the other side. The median published starting price among the agencies it tracked was $4,500 a month, below its $6,850 market median, because pricing pages lead with the cheapest tier.</p>
<p>So a published &quot;from&quot; price is a floor, not a forecast. Ask any seller what a client like you actually pays.</p>
<h2 id="how-much-do-geo-and-aeo-agencies-cost-in-india-vs-globally">How much do GEO and AEO agencies cost in India vs globally?</h2>
<p>Indian AEO agencies that publish prices charge about ₹15,000 to ₹20,000 a month for small-business bundles, ₹35,000 to ₹90,000 for mid-market, and ₹75,000 to ₹2,75,000 for enterprise retainers. That is far below US list prices, but only 4 of 9 agencies we reviewed publish a rupee price at all.</p>
<p>These figures come from the agencies' own pages, read on 28 October 2026, for our <a href="https://www.nakama.in/journal/best-aeo-agencies-india">best AEO agencies in India</a> review.</p>
<div class="article-table"><table><thead><tr><th scope="col">Tier</th><th scope="col">Published India range (INR a month)</th><th scope="col">Examples</th></tr></thead><tbody><tr><td>Small business bundle</td><td>₹15,000 to ₹20,000</td><td>VGraple, Adexorb</td></tr><tr><td>Mid-market</td><td>₹35,000 to ₹90,000</td><td>VGraple mid-market, Techmadeazy</td></tr><tr><td>Enterprise</td><td>₹75,000 to ₹2,75,000</td><td>ibs Fulcro, Techmadeazy upper levels</td></tr><tr><td>US-facing B2B</td><td>Usually custom quote</td><td>Several India agencies serving US buyers</td></tr></tbody></table></div>
<p><em>Published prices exclude GST unless the agency states otherwise.</em></p>
<h3 id="what-do-global-geo-prices-look-like-in-rupees">What do global GEO prices look like in rupees?</h3>
<p>Converted at an estimated ₹95 to the dollar (market rate on 2 November 2026), global benchmarks are much higher than Indian list prices. This is a currency conversion of USD sources, not an India market survey. Indian agencies selling to US buyers often quote in dollars.</p>
<div class="article-table"><table><thead><tr><th scope="col">Global benchmark (USD)</th><th scope="col">Approx. INR a month at ₹95</th></tr></thead><tbody><tr><td>$1,500 entry retainer</td><td>₹1,42,500</td></tr><tr><td>$3,000 typical published retainer</td><td>₹2,85,000</td></tr><tr><td>$6,850 survey median</td><td>₹6,50,750</td></tr><tr><td>$31,500 enterprise median</td><td>₹29,92,500</td></tr></tbody></table></div>
<p><em>Estimate only. Exchange rates move; recheck before you compare quotes.</em></p>
<p>The practical read: if you sell mainly to Indian buyers, rupee retainers are a fair benchmark. If you sell to US or global buyers, expect global pricing, because the engines, prompts and sources you need to win are the same ones US competitors pay to win.</p>
<h2 id="which-geo-pricing-model-fits-retainer-sprint-or-performance">Which GEO pricing model fits: retainer, sprint or performance?</h2>
<p>Most agencies sell GEO as a monthly retainer, which fits ongoing work where AI answers keep changing. Sprints suit a fixed fix-up project with a clear end. Performance pricing is rare and usually pairs a base fee with per-result charges, which is hard to define when no one controls AI answers.</p>
<div class="article-table"><table><thead><tr><th scope="col">Pricing model</th><th scope="col">Share of agencies</th><th scope="col">Typical price</th><th scope="col">Median</th><th scope="col">Typical term</th></tr></thead><tbody><tr><td>Custom monthly retainer</td><td>41%</td><td>$3,000 to $15,000 a month</td><td>$7,200</td><td>6 months</td></tr><tr><td>Tiered package retainer</td><td>27%</td><td>$2,500 to $25,000 a month</td><td>$6,300</td><td>3 to 6 months</td></tr><tr><td>Project or sprint</td><td>13%</td><td>$5,000 to $40,000</td><td>$14,500</td><td>30 to 90 days</td></tr><tr><td>One-time audit</td><td>8%</td><td>$1,500 to $12,000</td><td>$4,300</td><td>2 to 6 weeks</td></tr><tr><td>Hourly consulting</td><td>6%</td><td>$125 to $325 an hour</td><td>$205</td><td>None</td></tr><tr><td>Performance-based</td><td>5%</td><td>$1,500 to $4,000 base plus per-result fees</td><td>$2,600</td><td>Varies</td></tr></tbody></table></div>
<p><em>Source: First Page Sage, October 2026.</em></p>
<h3 id="when-does-a-retainer-make-sense">When does a retainer make sense?</h3>
<p>A retainer makes sense when you need steady content, off-site mentions and monthly tracking. AI answers shift from run to run and month to month, so one-time work tends to fade. Watch the minimum term: a three-month minimum on $3,000 is a $9,000 decision.</p>
<h3 id="when-does-a-sprint-make-sense">When does a sprint make sense?</h3>
<p>A sprint makes sense when you have a defined gap, such as missing schema, thin comparison pages or no review presence, and a team that can maintain the work afterward. Published sprints start around $3,000 to $3,500 for about 90 days, which is a fit when you need a fixed fix-up rather than ongoing retainer work.</p>
<h3 id="is-performance-based-geo-pricing-safe">Is performance-based GEO pricing safe?</h3>
<p>Performance pricing can work if &quot;a result&quot; is defined in writing, per engine and per prompt. Be careful with any offer that guarantees citations. No agency controls what an AI engine says, so honest contracts promise work and measurement, not outcomes.</p>
<h2 id="is-a-geo-agency-cheaper-than-an-in-house-team">Is a GEO agency cheaper than an in-house team?</h2>
<p>An agency is usually cheaper per year than hiring. First Page Sage models a Growth-tier agency at $98,400 a year all-in, against $146,028 for one in-house GEO specialist and $363,512 for a specialist plus two writers. In-house teams build lasting skill but take longer to produce their first work.</p>
<div class="article-table"><table><thead><tr><th scope="col">Option</th><th scope="col">Annual cost</th><th scope="col">Monthly equivalent</th><th scope="col">Deliverables a month</th><th scope="col">Weeks to first deliverable</th></tr></thead><tbody><tr><td>In-house, one GEO/AEO specialist</td><td>$146,028</td><td>$12,169</td><td>3.1</td><td>13.6</td></tr><tr><td>In-house team (specialist plus two writers)</td><td>$363,512</td><td>$30,293</td><td>9.4</td><td>17.9</td></tr><tr><td>Agency, Growth tier</td><td>$98,400</td><td>$8,200</td><td>6.5</td><td>3.4</td></tr></tbody></table></div>
<p><em>Source: First Page Sage, October 2026. Model uses a median specialist salary of $96,400, writer salary of $74,600 and 27% benefits and payroll taxes. US salaries; India salaries are lower, so recheck this math for an India team.</em></p>
<p>Treat this as a model, not a quote. It comes from an agency that sells GEO. The direction holds in most markets, though: one hire covers less ground than a team, and a full team costs more than most retainers.</p>
<p>Many companies mix the two. An in-house owner sets goals and approves content, while an agency handles off-site work and tracking.</p>
<h2 id="what-should-a-90-day-geo-budget-buy">What should a 90-day GEO budget buy?</h2>
<p>A 90-day budget of about $4,500 to $15,000 (three months at $1,500 to $5,000) should buy a baseline, a fix plan, real published work and a per-engine report at day 90. The first month is mostly research. Expect movement to be judged over the quarter, not in week two.</p>
<div class="article-table"><table><thead><tr><th scope="col">Days</th><th scope="col">What your budget should buy</th><th scope="col">What you should see</th></tr></thead><tbody><tr><td>1 to 30</td><td>Buyer prompt map, baseline across engines, competitor and source review</td><td>Baseline report with named prompts and engines</td></tr><tr><td>31 to 60</td><td>On-site fixes, first answer-first content, first off-site placements</td><td>Published pages and placements you can open</td></tr><tr><td>61 to 90</td><td>More content and mentions, re-run of the same prompts</td><td>Per-engine change against the day-1 baseline</td></tr></tbody></table></div>
${figure('geo-aeo-pricing-90-day', TIMELINE_ALT, 1600, 700)}
<p>If day 90 arrives with only a dashboard and no published work, you paid retainer prices for a tracking tool.</p>
<p>For context on cost: at the $6,850 median, the same quarter is about $20,550. At Indian mid-market list prices (₹35,000 to ₹90,000 a month), it is about ₹1,05,000 to ₹2,70,000.</p>
<h2 id="what-changes-the-price-you-are-quoted">What changes the price you are quoted?</h2>
<p>Scope moves price more than any market rate. The biggest factors are off-site work, how many engines and prompts are tracked, content volume and how competitive your category is. Our <a href="https://www.nakama.in/journal/how-to-hire-an-aeo-agency">guide to hiring an AEO agency</a> covers these cost drivers and the red flags to watch for.</p>
<p>The simplest fix is to send every agency the same brief, then compare scope line by line instead of headline price.</p>
<h2 id="what-does-nakamas-geo-and-aeo-plan-include">What does Nakama's GEO and AEO plan include?</h2>
<p>Nakama Growth sells one all-inclusive plan, with no tiers or add-ons, and quotes it after a 15-minute call. The plan covers GEO and AEO strategy, content, community, video, digital PR and monthly reporting with one dedicated strategist. We ask for a three-month minimum, so we are not a fit for a one-off sprint.</p>
<p>See what the plan includes on our <a href="https://www.nakama.in/services/geo">GEO service</a> and <a href="https://www.nakama.in/services/aeo">AEO service</a> pages.</p>
<p><strong><a href="https://www.nakama.in/pricing#quote">Get your quote</a></strong>: tell us about your brand and you get a written proposal with scope, timeline and price within two business days.</p>
<h2 id="faq">FAQ</h2>
${faqHtml}
<h2 id="sources">Sources</h2>
<p>Prices move often. Each figure above was read on the source page on the date shown.</p>
<ul>
<li>John Lawson, <a href="https://johnlawson.dev/geo-agency-service-cost/">What does a GEO agency cost?</a> (checked August 2026)</li>
<li>First Page Sage, <a href="https://firstpagesage.com/seo-blog/geo-aeo-pricing-statistics/">GEO and AEO pricing statistics</a> (data July to October 2026)</li>
<li>Forty Questions, <a href="https://fortyquestions.io/geo-pricing">GEO pricing</a> (read 5 October 2026)</li>
<li>WebFX, <a href="https://www.webfx.com/blog/ai/generative-engine-optimization-cost/">Generative engine optimization cost</a> (read 2 November 2026)</li>
<li>Citant.ai, <a href="https://citant.ai/blog/how-much-does-geo-cost/">How much does GEO cost?</a> (prices checked 1 November 2026)</li>
</ul>
<h2 id="about-the-author">About the author</h2>
<div class="author-box" id="yash-kumar"><img src="/authors/yash-kumar-nakama-ceo.webp" srcset="/authors/yash-kumar-nakama-ceo.webp 400w, /authors/yash-kumar-nakama-ceo-800.webp 800w" sizes="96px" alt="Yash Kumar, Co-founder and CEO of Nakama Growth" width="96" height="96" loading="lazy" decoding="async"><div class="author-box-text"><p><a href="https://www.nakama.in/authors/yash-kumar" rel="author">Yash Kumar</a> is Co-founder and CEO of Nakama Growth, an AEO and AI visibility agency for SaaS, software and AI companies. He tracks how ChatGPT, Gemini, Perplexity and Google AI Overviews answer buyer prompts and publishes the results.</p></div></div>`;

export const geoAeoPricingArticle: Article = {
 slug: 'geo-aeo-pricing',
 category: 'Guide',
 title: TITLE,
 description: DESCRIPTION,
 readTime: '13 min read',
 motif: 'guide',
 metaTitle: TITLE,
 date: dayOf(PUBLISHED_AT),
 publishedAt: PUBLISHED_AT,
 authorName: 'Yash Kumar',
 /** GO-LIVE TODO: PREVIEW is the only switch. false => index,follow plus sitemap, llms and RSS. */
 noindex: PREVIEW,
 /** Keep reading stays on the hire guide. Its cover alt is set so this card is not empty. */
 nextSlug: 'how-to-hire-an-aeo-agency',
 coverImage: {src: '/journal/geo-aeo-pricing/geo-aeo-pricing-cover.webp', width: 1600, height: 900, alt: COVER_ALT},
 ogImage: {
  url: OG_URL,
  width: 1200,
  height: 630,
  alt: OG_ALT,
  type: 'image/png',
 },
 jsonLd: geoAeoPricingJsonLd,
 bodyHtml,
 sections: [
  {
   heading: 'Introduction',
   paragraphs: [
    H1,
    `Updated ${modifiedDate}`,
    'By Yash Kumar, Co-founder and CEO, Nakama Growth',
    'GEO (generative engine optimization) costs about $1,500 to $5,000 a month for an entry-level agency retainer in 2026. The typical published price is $3,000 a month, while one agency survey puts the market median at $6,850. Enterprise programs run $22,000 to $60,000+ a month. Sprints cost $3,000 to $8,000, and consultants charge around $200 an hour. Prices checked 2 November 2026.',
    'AEO (answer engine optimization) is priced the same way, and most agencies sell the two together. This guide shows what each price band buys, why quoted prices run higher than published ones, how India pricing compares, and what a 90-day budget should get you.',
    'This is a pricing guide, not a shortlist and not a hiring process. For the hire process, read how to hire an AEO agency.',
   ],
  },
  {
   heading: 'What are the key GEO cost numbers in 2026?',
   paragraphs: [
    'The key GEO cost numbers in 2026 are a $3,000 typical published monthly retainer, a $6,850 survey median across 1,146 quotes, and an entry band of about $1,500 to $5,000 a month for done-for-you agency work. Indian published retainers span roughly ₹15,000 to ₹2,75,000 a month. Every source below is a seller, so treat the numbers as reference points.',
    '$3,000 a month: typical published GEO retainer, middle half $1,250 to $7,500 (John Lawson, checked August 2026).',
    '$6,850 a month: median GEO and AEO retainer across 1,146 quotes from 214 agencies, Q3 2026 (First Page Sage agency survey).',
    '66%: rise in that median since Q1 2024, against 6% for SEO retainers (First Page Sage).',
    '$1,500 to $3,500 a month: where most entry-level done-for-you retainers sit among 21 sellers with a public price (Forty Questions, read 5 October 2026).',
    '₹15,000 to ₹2,75,000 a month: published AEO retainers from Indian agencies (Nakama research, 28 October 2026).',
    "Every market-range article we found, including ours, is written by a seller. Treat each number as a reference point and check the seller's own page before you rely on it.",
   ],
  },
  {
   heading: 'How much does GEO cost by engagement type?',
   paragraphs: [
    'GEO costs depend first on what you buy: a retainer, a fixed sprint, hourly advice or an enterprise program. Retainers start around $1,500 a month and center near $3,000 published. Sprints run $3,000 to $8,000 one-time. Hourly consulting sits near $200. Enterprise programs start around $10,000 to $22,000 a month.',
    'Engagement type | Published price range | Survey or guide range | Typical term | Sources',
    'One-time audit | $99 to $450 (productized) | $1,500 to $12,000 | 2 to 6 weeks | John Lawson; First Page Sage',
    'Fixed sprint or project | $3,000 to $8,000 | $5,000 to $40,000 (median $14,500) | 30 to 90 days | John Lawson; First Page Sage',
    'Monthly retainer | $3,000 typical ($1,250 to $7,500) | $6,850 median | 3 to 6 months | John Lawson; First Page Sage',
    'Hourly consulting | $200 typical | $50 to $325 | None | John Lawson; WebFX; First Page Sage',
    'Enterprise program | $10,000 to $68,250 a month | $22,000 to $60,000+ (median $31,500) | 12 months | John Lawson; First Page Sage',
    'Tracking software only | $29 to $1,000+ a month | n/a | Monthly | Forty Questions; WebFX',
    'All figures USD, from the sources listed, checked between August and November 2026. Full links in the sources list at the end.',
    'Software is a separate line. A tracking tool shows where you appear in AI answers, but it does not write, publish or earn mentions for you.',
    'If you want to measure yourself before paying anyone, the GEO audit walkthrough shows a do-it-yourself method.',
   ],
  },
  {
   heading: 'What do you get at each price tier?',
   paragraphs: [
    'Each tier buys a different amount of senior time and off-site work, not just more of the same. Under $1,500 a month buys fixed, productized deliverables. $1,500 to $5,000 is the core full-service market. $5,000 to $15,000 buys senior-led programs, and above $15,000 is enterprise scope with long terms.',
    'Monthly budget | What it usually buys | Typical term',
    'Under $1,500 | Fixed deliverables, schema and entity fixes, a monthly citation report | Month to month',
    '$1,500 to $5,000 | Content production, tracking across ChatGPT, Perplexity and AI Overviews, some off-site work | 3 months common',
    '$5,000 to $15,000 | Senior strategist, more content, digital PR and community work, per-engine reporting | 3 to 6 months',
    '$15,000+ | Multi-brand or multi-market scope, larger content volume, dedicated team | 6 to 12 months',
    "Tier descriptions from John Lawson's market review (checked August 2026). Term ranges from First Page Sage and Forty Questions.",
    "First Page Sage's survey adds one useful warning. Enterprise clients pay about 10.7 times the Starter median for about 4.2 times the monthly deliverables. Price climbs faster than output, so ask for a deliverable count in writing.",
    'Survey tier | Price range | Median | Deliverables a month',
    'Starter (local and small) | $1,800 to $4,200 | $2,950 | 3.4',
    'Growth (mid-market) | $4,500 to $11,000 | $7,400 | 6.5',
    'Advanced (upper mid-market) | $11,000 to $22,000 | $14,600 | 9.8',
    'Enterprise | $22,000 to $60,000+ | $31,500 | 14.2',
    'Source: First Page Sage, 1,146 quotes from 214 agencies, collected July 6 to October 2, 2026.',
   ],
  },
  {
   heading: 'Why do quoted GEO prices run higher than published prices?',
   paragraphs: [
    'Quoted prices run about twice published prices. Sellers that publish a price cluster around $3,000 a month, while agency pricing guides claim a typical $6,000. Published pages lead with entry tiers, and custom quotes add off-site work, more engines and senior time. Read both numbers before you set a budget.',
    'John Lawson compared every seller that publishes GEO prices against the figures in agency pricing guides. Published retainers came in at a typical $3,000 a month. Guides claimed $6,000, with a range of $1,750 to $15,000.',
    'The audit gap is even wider. Productized audits are published from $99 to $450, while guides claim $1,500 to $5,000.',
    'First Page Sage saw the same pattern from the other side. The median published starting price among the agencies it tracked was $4,500 a month, below its $6,850 market median, because pricing pages lead with the cheapest tier.',
    'So a published "from" price is a floor, not a forecast. Ask any seller what a client like you actually pays.',
   ],
  },
  {
   heading: 'How much do GEO and AEO agencies cost in India vs globally?',
   paragraphs: [
    'Indian AEO agencies that publish prices charge about ₹15,000 to ₹20,000 a month for small-business bundles, ₹35,000 to ₹90,000 for mid-market, and ₹75,000 to ₹2,75,000 for enterprise retainers. That is far below US list prices, but only 4 of 9 agencies we reviewed publish a rupee price at all.',
    "These figures come from the agencies' own pages, read on 28 October 2026, for our best AEO agencies in India review.",
    'Tier | Published India range (INR a month) | Examples',
    'Small business bundle | ₹15,000 to ₹20,000 | VGraple, Adexorb',
    'Mid-market | ₹35,000 to ₹90,000 | VGraple mid-market, Techmadeazy',
    'Enterprise | ₹75,000 to ₹2,75,000 | ibs Fulcro, Techmadeazy upper levels',
    'US-facing B2B | Usually custom quote | Several India agencies serving US buyers',
    'Published prices exclude GST unless the agency states otherwise.',
    'What do global GEO prices look like in rupees?',
    'Converted at an estimated ₹95 to the dollar (market rate on 2 November 2026), global benchmarks are much higher than Indian list prices. This is a currency conversion of USD sources, not an India market survey. Indian agencies selling to US buyers often quote in dollars.',
    'Global benchmark (USD) | Approx. INR a month at ₹95',
    '$1,500 entry retainer | ₹1,42,500',
    '$3,000 typical published retainer | ₹2,85,000',
    '$6,850 survey median | ₹6,50,750',
    '$31,500 enterprise median | ₹29,92,500',
    'Estimate only. Exchange rates move; recheck before you compare quotes.',
    'The practical read: if you sell mainly to Indian buyers, rupee retainers are a fair benchmark. If you sell to US or global buyers, expect global pricing, because the engines, prompts and sources you need to win are the same ones US competitors pay to win.',
   ],
  },
  {
   heading: 'Which GEO pricing model fits: retainer, sprint or performance?',
   paragraphs: [
    'Most agencies sell GEO as a monthly retainer, which fits ongoing work where AI answers keep changing. Sprints suit a fixed fix-up project with a clear end. Performance pricing is rare and usually pairs a base fee with per-result charges, which is hard to define when no one controls AI answers.',
    'Pricing model | Share of agencies | Typical price | Median | Typical term',
    'Custom monthly retainer | 41% | $3,000 to $15,000 a month | $7,200 | 6 months',
    'Tiered package retainer | 27% | $2,500 to $25,000 a month | $6,300 | 3 to 6 months',
    'Project or sprint | 13% | $5,000 to $40,000 | $14,500 | 30 to 90 days',
    'One-time audit | 8% | $1,500 to $12,000 | $4,300 | 2 to 6 weeks',
    'Hourly consulting | 6% | $125 to $325 an hour | $205 | None',
    'Performance-based | 5% | $1,500 to $4,000 base plus per-result fees | $2,600 | Varies',
    'Source: First Page Sage, October 2026.',
    'When does a retainer make sense? A retainer makes sense when you need steady content, off-site mentions and monthly tracking. AI answers shift from run to run and month to month, so one-time work tends to fade. Watch the minimum term: a three-month minimum on $3,000 is a $9,000 decision.',
    'When does a sprint make sense? A sprint makes sense when you have a defined gap, such as missing schema, thin comparison pages or no review presence, and a team that can maintain the work afterward. Published sprints start around $3,000 to $3,500 for about 90 days, which is a fit when you need a fixed fix-up rather than ongoing retainer work.',
    'Is performance-based GEO pricing safe? Performance pricing can work if "a result" is defined in writing, per engine and per prompt. Be careful with any offer that guarantees citations. No agency controls what an AI engine says, so honest contracts promise work and measurement, not outcomes.',
   ],
  },
  {
   heading: 'Is a GEO agency cheaper than an in-house team?',
   paragraphs: [
    'An agency is usually cheaper per year than hiring. First Page Sage models a Growth-tier agency at $98,400 a year all-in, against $146,028 for one in-house GEO specialist and $363,512 for a specialist plus two writers. In-house teams build lasting skill but take longer to produce their first work.',
    'Option | Annual cost | Monthly equivalent | Deliverables a month | Weeks to first deliverable',
    'In-house, one GEO/AEO specialist | $146,028 | $12,169 | 3.1 | 13.6',
    'In-house team (specialist plus two writers) | $363,512 | $30,293 | 9.4 | 17.9',
    'Agency, Growth tier | $98,400 | $8,200 | 6.5 | 3.4',
    'Source: First Page Sage, October 2026. Model uses a median specialist salary of $96,400, writer salary of $74,600 and 27% benefits and payroll taxes. US salaries; India salaries are lower, so recheck this math for an India team.',
    'Treat this as a model, not a quote. It comes from an agency that sells GEO. The direction holds in most markets, though: one hire covers less ground than a team, and a full team costs more than most retainers.',
    'Many companies mix the two. An in-house owner sets goals and approves content, while an agency handles off-site work and tracking.',
   ],
  },
  {
   heading: 'What should a 90-day GEO budget buy?',
   paragraphs: [
    'A 90-day budget of about $4,500 to $15,000 (three months at $1,500 to $5,000) should buy a baseline, a fix plan, real published work and a per-engine report at day 90. The first month is mostly research. Expect movement to be judged over the quarter, not in week two.',
    'Days | What your budget should buy | What you should see',
    '1 to 30 | Buyer prompt map, baseline across engines, competitor and source review | Baseline report with named prompts and engines',
    '31 to 60 | On-site fixes, first answer-first content, first off-site placements | Published pages and placements you can open',
    '61 to 90 | More content and mentions, re-run of the same prompts | Per-engine change against the day-1 baseline',
    'If day 90 arrives with only a dashboard and no published work, you paid retainer prices for a tracking tool.',
    'For context on cost: at the $6,850 median, the same quarter is about $20,550. At Indian mid-market list prices (₹35,000 to ₹90,000 a month), it is about ₹1,05,000 to ₹2,70,000.',
   ],
  },
  {
   heading: 'What changes the price you are quoted?',
   paragraphs: [
    'Scope moves price more than any market rate. The biggest factors are off-site work, how many engines and prompts are tracked, content volume and how competitive your category is. Our guide to hiring an AEO agency covers these cost drivers and the red flags to watch for.',
    'The simplest fix is to send every agency the same brief, then compare scope line by line instead of headline price.',
   ],
  },
  {
   heading: "What does Nakama's GEO and AEO plan include?",
   paragraphs: [
    'Nakama Growth sells one all-inclusive plan, with no tiers or add-ons, and quotes it after a 15-minute call. The plan covers GEO and AEO strategy, content, community, video, digital PR and monthly reporting with one dedicated strategist. We ask for a three-month minimum, so we are not a fit for a one-off sprint.',
    'See what the plan includes on our GEO service and AEO service pages.',
    'Get your quote: tell us about your brand and you get a written proposal with scope, timeline and price within two business days.',
   ],
  },
  {
   heading: 'FAQ',
   paragraphs: FAQS.map(({q, a}) => `${q} ${a}`),
  },
  {
   heading: 'Sources',
   paragraphs: [
    'Prices move often. Each figure above was read on the source page on the date shown.',
    'John Lawson, What does a GEO agency cost? (checked August 2026) https://johnlawson.dev/geo-agency-service-cost/',
    'First Page Sage, GEO and AEO pricing statistics (data July to October 2026) https://firstpagesage.com/seo-blog/geo-aeo-pricing-statistics/',
    'Forty Questions, GEO pricing (read 5 October 2026) https://fortyquestions.io/geo-pricing',
    'WebFX, Generative engine optimization cost (read 2 November 2026) https://www.webfx.com/blog/ai/generative-engine-optimization-cost/',
    'Citant.ai, How much does GEO cost? (prices checked 1 November 2026) https://citant.ai/blog/how-much-does-geo-cost/',
   ],
  },
  {
   heading: 'About the author',
   paragraphs: [
    'Yash Kumar is Co-founder and CEO of Nakama Growth, an AEO and AI visibility agency for SaaS, software and AI companies. He tracks how ChatGPT, Gemini, Perplexity and Google AI Overviews answer buyer prompts and publishes the results.',
   ],
  },
 ],
};
