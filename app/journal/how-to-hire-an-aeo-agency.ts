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
export const HOW_TO_HIRE_AN_AEO_AGENCY_PUBLISHED_AT = '2026-10-31T09:00:00+05:30';
export const PUBLISHED_AT = HOW_TO_HIRE_AN_AEO_AGENCY_PUBLISHED_AT;
const MODIFIED_AT = PUBLISHED_AT;
const PREVIEW = true;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayOf = (iso: string) => iso.slice(0, 10);
const shortDate = (iso: string) => `${Number(iso.slice(8, 10))} ${MONTHS[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;
const modifiedDate = shortDate(MODIFIED_AT);

const TITLE = 'How to Hire an AEO Agency: Costs, Questions, and Red Flags (2026)';
const H1 = 'How to hire an AEO agency: costs, questions, and red flags';
const DESCRIPTION = 'How to hire an AEO agency: timeline, 12 questions with good and weak answers, proof checks, cost drivers, and red flags. Process guide, not a shortlist.';
const CANONICAL = 'https://www.nakama.in/journal/how-to-hire-an-aeo-agency';
const COVER_ALT = 'How to Hire an AEO Agency: costs, questions, and red flags. A process guide by Nakama Growth';
const OG_ALT = 'How to Hire an AEO Agency, Nakama Growth Journal';
const FRAMEWORK_ALT = 'Agency, consultant, or software? Visibility software fits tracking prompts and mentions but shows the gap without closing it. A consultant fits teams with writers and dev time, but execution stays yours. An agency covers strategy, content and off-site together, at a higher monthly commitment';
const TIMELINE_ALT = 'A careful AEO agency hire takes 3 to 5 weeks: baseline and brief in week 1, shortlist in weeks 1 to 2, calls with 12 questions in weeks 2 to 3, proof and reference checks in weeks 3 to 4, proposal and contract in weeks 4 to 5';
const HERO_URL = 'https://www.nakama.in/journal/how-to-hire-an-aeo-agency/how-to-hire-aeo-agency-cover.webp';
const OG_URL = 'https://www.nakama.in/journal/how-to-hire-an-aeo-agency/how-to-hire-aeo-agency-og.png';

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
   "width": 1920,
   "height": 1080,
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
  }
 ]
};

export const howToHireAnAeoAgencyJsonLd = articleLd;

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">${TITLE}</li></ol></nav>
<h1 id="how-to-hire-an-aeo-agency-costs-questions-and-red-flags">${H1}</h1>
<p>Updated ${modifiedDate}</p>
<p>By <a href="https://www.nakama.in/authors/yash-kumar" rel="author">Yash Kumar</a>, Co-founder and CEO, Nakama Growth</p>
<figure><picture><source srcset="/journal/how-to-hire-an-aeo-agency/how-to-hire-aeo-agency-cover.webp" type="image/webp"><img src="/journal/how-to-hire-an-aeo-agency/how-to-hire-aeo-agency-cover.png" alt="${COVER_ALT}" width="1920" height="1080" fetchpriority="high" decoding="async"></picture></figure>
<p>Hiring an AEO agency means paying a team to get your brand named and cited in AI answers from ChatGPT, Perplexity, Google AI Overviews and similar engines. This guide walks through the full hire process: when to hire, a step-by-step timeline, 12 questions with good and weak answers, proof checks, cost drivers and red flags.</p>
<p>This is a process guide, not a shortlist. If you only want ranked agencies, read the <a href="https://www.nakama.in/journal/best-aeo-agencies">list of the best AEO agencies</a>.</p>
<h2 id="what-you-are-actually-buying">What you are actually buying</h2>
<p>An AEO agency works on the sources AI engines read and the pages they quote. That usually covers on-site content structure, off-site mentions such as reviews, Reddit and press, and tracking how often engines mention you for a set of buyer prompts.</p>
<p>AEO overlaps with GEO and SEO but is judged differently. SEO is judged on rankings and clicks. AEO is judged on whether answer engines mention, cite and recommend you. For the full distinction, see <a href="https://www.nakama.in/journal/aeo-vs-seo-vs-geo">AEO vs SEO vs GEO</a>.</p>
<h2 id="step-1-decide-if-you-need-an-agency-at-all">Step 1: Decide if you need an agency at all</h2>
<p>Hire an agency when you need both execution and off-site reach, and nobody in-house owns AI visibility. Use software alone when you only need monitoring. Use a consultant when you have a team that can execute and you need a strategy owner.</p>
<figure><img src="/journal/how-to-hire-an-aeo-agency/how-to-hire-aeo-agency-framework.webp" alt="${FRAMEWORK_ALT}" width="1920" height="1080" loading="lazy" decoding="async"></figure>
<div class="article-table"><table><thead><tr><th scope="col">Option</th><th scope="col">Fits when</th><th scope="col">Main limit</th></tr></thead><tbody><tr><td>Visibility software</td><td>You want to track prompts and mentions</td><td>Shows the gap, does not close it</td></tr><tr><td>Consultant</td><td>You have writers and dev time</td><td>Execution capacity stays yours</td></tr><tr><td>Agency</td><td>You need strategy, content and off-site work together</td><td>Higher monthly commitment</td></tr></tbody></table></div>
<p>If the agency route fits, look for one that covers on-site and off-site work together, such as an <a href="https://www.nakama.in/services/aeo">AEO service</a> with a named strategist.</p>
<p>If the consultant route fits, the <a href="https://www.nakama.in/journal/best-aeo-consultants">AEO consultants guide</a> covers it.</p>
<h2 id="step-2-set-your-baseline-before-any-sales-call">Step 2: Set your baseline before any sales call</h2>
<p>Run your own baseline first so every agency pitch is measured against the same facts. Write 15 to 30 prompts your buyers would type, such as &quot;best [category] tool for [use case]&quot;. Run each in at least two engines and record whether you appear.</p>
<p>Note the date, the engine and whether you were signed in. AI answers vary run to run, so treat one result as a sample, not a score. The <a href="https://www.nakama.in/journal/geo-audit">GEO audit walkthrough</a> shows one way to do this.</p>
<h2 id="step-3-follow-a-realistic-hire-timeline">Step 3: Follow a realistic hire timeline</h2>
<p>A careful hire takes about three to five weeks from first shortlist to signed contract. Rushing it usually means you skip proof checks, which is where weak agencies get filtered out.</p>
<figure><img src="/journal/how-to-hire-an-aeo-agency/how-to-hire-aeo-agency-timeline.webp" alt="${TIMELINE_ALT}" width="1920" height="1080" loading="lazy" decoding="async"></figure>
<div class="article-table"><table><thead><tr><th scope="col">Week</th><th scope="col">What happens</th><th scope="col">Output</th></tr></thead><tbody><tr><td>1</td><td>Baseline prompts, internal goals, budget band</td><td>Prompt sheet and one-page brief</td></tr><tr><td>1 to 2</td><td>Shortlist three to five agencies, send the brief</td><td>Discovery calls booked</td></tr><tr><td>2 to 3</td><td>Calls using the 12 questions below</td><td>Scored question sheet per agency</td></tr><tr><td>3 to 4</td><td>Proof checks and reference calls</td><td>Verified or rejected claims</td></tr><tr><td>4 to 5</td><td>Proposal review and contract terms</td><td>Signed scope with exit terms</td></tr></tbody></table></div>
<p>After signing, expect the first month to be mostly research and setup. Movement in AI mentions is usually measured over a quarter, not weeks.</p>
<h2 id="step-4-ask-these-12-questions">Step 4: Ask these 12 questions</h2>
<p>Use the same questions with every agency and score each answer from 0 to 2. A good answer is specific and checkable. A weak answer is general, promises outcomes, or avoids naming engines and prompts.</p>
<p><strong>1. Which engines do you track, and how often?</strong></p>
<p>Good: names each engine and a fixed cadence, reported per engine. Weak: one blended &quot;AI visibility score&quot; with no engine split.</p>
<p><strong>2. Which prompts will you track for us, and who picks them?</strong></p>
<p>Good: a draft prompt set built from your buyers&apos; words, agreed with you before work starts. Weak: &quot;we track thousands of keywords&quot;.</p>
<p><strong>3. Show me a dated before and after for a past client.</strong></p>
<p>Good: named engine, named prompt, dates, and screenshots or logs. Weak: a percentage with no prompt or date.</p>
<p><strong>4. What share of the work is on-site versus off-site?</strong></p>
<p>Good: a clear split with examples of each, since engines lean heavily on third-party sources. Weak: only blog posts on your own domain.</p>
<p><strong>5. Where will off-site mentions come from?</strong></p>
<p>Good: named channel types such as reviews, Reddit, comparisons, press, with how each is earned. Weak: vague &quot;link building&quot; or paid placements they will not name.</p>
<p><strong>6. Who will own our account day to day?</strong></p>
<p>Good: one named strategist and their other client load. Weak: a rotating pool or &quot;the team&quot;.</p>
<p><strong>7. What do we approve before it goes live?</strong></p>
<p>Good: you sign off on every piece. Weak: they publish under your brand without review.</p>
<p><strong>8. What does a monthly report contain?</strong></p>
<p>Good: per-engine mention and citation changes on the agreed prompts, plus work shipped. Weak: traffic charts only.</p>
<p><strong>9. How do you handle results that do not move?</strong></p>
<p>Good: a review point, usually at the end of a quarter, with a plan change. Weak: &quot;it just takes time&quot; with no checkpoint.</p>
<p><strong>10. What is the minimum term and the exit clause?</strong></p>
<p>Good: a stated minimum and a clean notice period. Weak: long lock-ins or unclear cancellation.</p>
<p><strong>11. What do you need from our team each month?</strong></p>
<p>Good: an honest estimate of hours for reviews, SME input and approvals. Weak: &quot;nothing, we handle it all&quot;.</p>
<p><strong>12. What will you not do?</strong></p>
<p>Good: clear limits, such as no fake reviews or spam accounts. Weak: no limits, or &quot;whatever it takes&quot;.</p>
<p>Add the scores. Any agency under 16 out of 24, or with a 0 on questions 3, 5 or 12, should drop off the list.</p>
<h2 id="step-5-check-the-proof-yourself">Step 5: Check the proof yourself</h2>
<p>Do not accept a case study until you can reproduce part of it. Ask for the exact prompt and engine behind one claim, run it yourself, and compare. A single run can differ from theirs, so run it two or three times.</p>
<p>Then check these points:</p>
<ul>
<li>The client in the case study is real and still a customer, or will take a reference call.</li>
<li>The dates make sense against when the agency started work.</li>
<li>Mentions come from sources the agency can explain, not from pages they control.</li>
<li>Results are reported per engine, not as one blended number.</li>
</ul>
<p>If an agency refuses to share any prompt or engine detail, treat the claim as unverified.</p>
<h2 id="step-6-understand-what-drives-the-cost">Step 6: Understand what drives the cost</h2>
<p>AEO agency pricing depends mostly on scope, not on a fixed market rate. We have not found sourced, dated market ranges we trust enough to publish, so this section covers drivers only. Ask every agency to price against the same brief.</p>
<p>The main cost drivers are:</p>
<ul>
<li><strong>Off-site work.</strong> Earning reviews, community and press mentions takes more time than on-site edits.</li>
<li><strong>Engines and prompts tracked.</strong> More engines and a bigger prompt set mean more monitoring and reporting.</li>
<li><strong>Content volume.</strong> The number of new or rebuilt pages per month.</li>
<li><strong>Markets and languages.</strong> Each extra region adds research and channels.</li>
<li><strong>Term length.</strong> Longer commitments often lower the monthly rate.</li>
<li><strong>Bundled services.</strong> Some agencies fold in SEO, video or digital PR; others charge separately.</li>
</ul>
<p>When you evaluate providers, line them up by the same drivers rather than by headline price. A cheaper quote with no off-site work is usually a different product.</p>
<p>For an all-inclusive plan example, see <a href="https://www.nakama.in/pricing#quote">Nakama Growth pricing</a>.</p>
<h2 id="red-flags-before-you-sign">Red flags before you sign</h2>
<p>Walk away, or slow down, if you see any of these. Each one shows up in sales calls before it shows up in results.</p>
<ul>
<li><strong>Guaranteed citations or rankings.</strong> No one controls what an AI engine says. Probabilistic language is the honest kind.</li>
<li><strong>No named prompts or engines.</strong> You cannot check what you cannot see.</li>
<li><strong>One blended &quot;AI score&quot;.</strong> Engines behave differently and need separate tracking.</li>
<li><strong>Fake or paid-review tactics.</strong> These risk your brand and platform bans, especially on Reddit and review sites.</li>
<li><strong>Publishing without your sign-off.</strong> Your brand voice and claims stay your responsibility.</li>
<li><strong>No exit clause.</strong> A confident agency does not need to lock you in.</li>
<li><strong>Case studies you cannot reproduce.</strong> See step 5.</li>
</ul>
<h2 id="hiring-from-india-or-for-india-buyers">Hiring from India or for India buyers</h2>
<p>If you are hiring an agency based in India, or hiring for buyers in India, the same process applies with three extra checks. Confirm working-hour overlap for calls and approvals. Ask which engines and languages they track for each market. Ask for proof from your target market, not only from another region.</p>
<p>For ranked options, see the <a href="https://www.nakama.in/journal/best-aeo-agencies-india">best AEO agencies in India</a>.</p>
<h2 id="talking-to-us">Talking to us</h2>
<p>Nakama Growth is one option to put through this process. We run AEO and GEO for SaaS, tech and AI companies with one dedicated strategist per account, and nothing goes live without your sign-off. One honest limit: we ask for a three-month minimum, because the first month is mostly research, so we are not a fit for a one-off sprint.</p>
<p>If AI answers are your main goal, see our <a href="https://www.nakama.in/services/aeo">AEO service</a>. If you want broader generative engine coverage, see our <a href="https://www.nakama.in/services/geo">GEO service</a>.</p>
<p><strong><a href="https://www.nakama.in/pricing#quote">Get an AEO quote</a></strong> or book a call from the same page.</p>
<h2 id="faq">FAQ</h2>
<h3 id="how-long-does-it-take-to-hire-an-aeo-agency">How long does it take to hire an AEO agency?</h3>
<p>About three to five weeks if you run baseline prompts, discovery calls, proof checks and contract review properly.</p>
<h3 id="how-soon-should-i-expect-results">How soon should I expect results?</h3>
<p>Expect the first month to be research and setup. Judge movement on your agreed prompts over a quarter, per engine.</p>
<h3 id="can-an-aeo-agency-guarantee-chatgpt-citations">Can an AEO agency guarantee ChatGPT citations?</h3>
<p>No. AI answers vary between runs and users. Treat any guarantee as a red flag.</p>
<h2 id="about-the-author">About the author</h2>
<div class="author-box" id="yash-kumar"><img src="/authors/yash-kumar-nakama-ceo.webp" srcset="/authors/yash-kumar-nakama-ceo.webp 400w, /authors/yash-kumar-nakama-ceo-800.webp 800w" sizes="96px" alt="Yash Kumar, Co-founder and CEO of Nakama Growth" width="96" height="96" loading="lazy" decoding="async"><div class="author-box-text"><p><a href="https://www.nakama.in/authors/yash-kumar" rel="author">Yash Kumar</a> is Co-founder and CEO of Nakama Growth, an AEO and AI visibility agency for SaaS, software and AI companies. He tracks how ChatGPT, Gemini, Perplexity and Google AI Overviews answer buyer prompts and publishes the results.</p></div></div>`;

export const howToHireAnAeoAgencyArticle: Article = {
 slug: 'how-to-hire-an-aeo-agency',
 category: 'Guide',
 title: TITLE,
 description: DESCRIPTION,
 readTime: '9 min read',
 motif: 'guide',
 metaTitle: TITLE,
 date: dayOf(PUBLISHED_AT),
 publishedAt: PUBLISHED_AT,
 authorName: 'Yash Kumar',
 /** GO-LIVE TODO: PREVIEW is the only switch. false => index,follow plus sitemap, llms and RSS. */
 noindex: PREVIEW,
 /** Keep reading stays on the AEO agencies guide. A noindex preview can still show that one card. */
 nextSlug: 'best-aeo-agencies',
 coverImage: {src: '/journal/how-to-hire-an-aeo-agency/how-to-hire-aeo-agency-cover.webp', width: 1920, height: 1080},
 ogImage: {
  url: OG_URL,
  width: 1200,
  height: 630,
  alt: OG_ALT,
  type: 'image/png',
 },
 jsonLd: howToHireAnAeoAgencyJsonLd,
 bodyHtml,
 sections: [
  {
   heading: 'Introduction',
   paragraphs: [
    H1,
    `Updated ${modifiedDate}`,
    'By Yash Kumar, Co-founder and CEO, Nakama Growth',
    'Hiring an AEO agency means paying a team to get your brand named and cited in AI answers from ChatGPT, Perplexity, Google AI Overviews and similar engines. This guide walks through the full hire process: when to hire, a step-by-step timeline, 12 questions with good and weak answers, proof checks, cost drivers and red flags.',
    'This is a process guide, not a shortlist. If you only want ranked agencies, read the list of the best AEO agencies.',
   ],
  },
  {
   heading: 'What you are actually buying',
   paragraphs: [
    'An AEO agency works on the sources AI engines read and the pages they quote. That usually covers on-site content structure, off-site mentions such as reviews, Reddit and press, and tracking how often engines mention you for a set of buyer prompts.',
    'AEO overlaps with GEO and SEO but is judged differently. SEO is judged on rankings and clicks. AEO is judged on whether answer engines mention, cite and recommend you. For the full distinction, see AEO vs SEO vs GEO.',
   ],
  },
  {
   heading: 'Step 1: Decide if you need an agency at all',
   paragraphs: [
    'Hire an agency when you need both execution and off-site reach, and nobody in-house owns AI visibility. Use software alone when you only need monitoring. Use a consultant when you have a team that can execute and you need a strategy owner.',
    'Option | Fits when | Main limit',
    'Visibility software | You want to track prompts and mentions | Shows the gap, does not close it',
    'Consultant | You have writers and dev time | Execution capacity stays yours',
    'Agency | You need strategy, content and off-site work together | Higher monthly commitment',
    'If the agency route fits, look for one that covers on-site and off-site work together, such as an AEO service with a named strategist.',
    'If the consultant route fits, the AEO consultants guide covers it.',
   ],
  },
  {
   heading: 'Step 2: Set your baseline before any sales call',
   paragraphs: [
    'Run your own baseline first so every agency pitch is measured against the same facts. Write 15 to 30 prompts your buyers would type, such as "best [category] tool for [use case]". Run each in at least two engines and record whether you appear.',
    'Note the date, the engine and whether you were signed in. AI answers vary run to run, so treat one result as a sample, not a score. The GEO audit walkthrough shows one way to do this.',
   ],
  },
  {
   heading: 'Step 3: Follow a realistic hire timeline',
   paragraphs: [
    'A careful hire takes about three to five weeks from first shortlist to signed contract. Rushing it usually means you skip proof checks, which is where weak agencies get filtered out.',
    'Week | What happens | Output',
    '1 | Baseline prompts, internal goals, budget band | Prompt sheet and one-page brief',
    '1 to 2 | Shortlist three to five agencies, send the brief | Discovery calls booked',
    '2 to 3 | Calls using the 12 questions below | Scored question sheet per agency',
    '3 to 4 | Proof checks and reference calls | Verified or rejected claims',
    '4 to 5 | Proposal review and contract terms | Signed scope with exit terms',
    'After signing, expect the first month to be mostly research and setup. Movement in AI mentions is usually measured over a quarter, not weeks.',
   ],
  },
  {
   heading: 'Step 4: Ask these 12 questions',
   paragraphs: [
    'Use the same questions with every agency and score each answer from 0 to 2. A good answer is specific and checkable. A weak answer is general, promises outcomes, or avoids naming engines and prompts.',
    '1. Which engines do you track, and how often? Good: names each engine and a fixed cadence, reported per engine. Weak: one blended "AI visibility score" with no engine split.',
    '2. Which prompts will you track for us, and who picks them? Good: a draft prompt set built from your buyers\' words, agreed with you before work starts. Weak: "we track thousands of keywords".',
    '3. Show me a dated before and after for a past client. Good: named engine, named prompt, dates, and screenshots or logs. Weak: a percentage with no prompt or date.',
    '4. What share of the work is on-site versus off-site? Good: a clear split with examples of each, since engines lean heavily on third-party sources. Weak: only blog posts on your own domain.',
    '5. Where will off-site mentions come from? Good: named channel types such as reviews, Reddit, comparisons, press, with how each is earned. Weak: vague "link building" or paid placements they will not name.',
    '6. Who will own our account day to day? Good: one named strategist and their other client load. Weak: a rotating pool or "the team".',
    '7. What do we approve before it goes live? Good: you sign off on every piece. Weak: they publish under your brand without review.',
    '8. What does a monthly report contain? Good: per-engine mention and citation changes on the agreed prompts, plus work shipped. Weak: traffic charts only.',
    '9. How do you handle results that do not move? Good: a review point, usually at the end of a quarter, with a plan change. Weak: "it just takes time" with no checkpoint.',
    '10. What is the minimum term and the exit clause? Good: a stated minimum and a clean notice period. Weak: long lock-ins or unclear cancellation.',
    '11. What do you need from our team each month? Good: an honest estimate of hours for reviews, SME input and approvals. Weak: "nothing, we handle it all".',
    '12. What will you not do? Good: clear limits, such as no fake reviews or spam accounts. Weak: no limits, or "whatever it takes".',
    'Add the scores. Any agency under 16 out of 24, or with a 0 on questions 3, 5 or 12, should drop off the list.',
   ],
  },
  {
   heading: 'Step 5: Check the proof yourself',
   paragraphs: [
    'Do not accept a case study until you can reproduce part of it. Ask for the exact prompt and engine behind one claim, run it yourself, and compare. A single run can differ from theirs, so run it two or three times.',
    'The client in the case study is real and still a customer, or will take a reference call.',
    'The dates make sense against when the agency started work.',
    'Mentions come from sources the agency can explain, not from pages they control.',
    'Results are reported per engine, not as one blended number.',
    'If an agency refuses to share any prompt or engine detail, treat the claim as unverified.',
   ],
  },
  {
   heading: 'Step 6: Understand what drives the cost',
   paragraphs: [
    'AEO agency pricing depends mostly on scope, not on a fixed market rate. We have not found sourced, dated market ranges we trust enough to publish, so this section covers drivers only. Ask every agency to price against the same brief.',
    'Off-site work. Earning reviews, community and press mentions takes more time than on-site edits.',
    'Engines and prompts tracked. More engines and a bigger prompt set mean more monitoring and reporting.',
    'Content volume. The number of new or rebuilt pages per month.',
    'Markets and languages. Each extra region adds research and channels.',
    'Term length. Longer commitments often lower the monthly rate.',
    'Bundled services. Some agencies fold in SEO, video or digital PR; others charge separately.',
    'When you evaluate providers, line them up by the same drivers rather than by headline price. A cheaper quote with no off-site work is usually a different product.',
    'For an all-inclusive plan example, see Nakama Growth pricing.',
   ],
  },
  {
   heading: 'Red flags before you sign',
   paragraphs: [
    'Walk away, or slow down, if you see any of these. Each one shows up in sales calls before it shows up in results.',
    'Guaranteed citations or rankings. No one controls what an AI engine says. Probabilistic language is the honest kind.',
    'No named prompts or engines. You cannot check what you cannot see.',
    'One blended "AI score". Engines behave differently and need separate tracking.',
    'Fake or paid-review tactics. These risk your brand and platform bans, especially on Reddit and review sites.',
    'Publishing without your sign-off. Your brand voice and claims stay your responsibility.',
    'No exit clause. A confident agency does not need to lock you in.',
    'Case studies you cannot reproduce. See step 5.',
   ],
  },
  {
   heading: 'Hiring from India or for India buyers',
   paragraphs: [
    'If you are hiring an agency based in India, or hiring for buyers in India, the same process applies with three extra checks. Confirm working-hour overlap for calls and approvals. Ask which engines and languages they track for each market. Ask for proof from your target market, not only from another region.',
    'For ranked options, see the best AEO agencies in India.',
   ],
  },
  {
   heading: 'Talking to us',
   paragraphs: [
    'Nakama Growth is one option to put through this process. We run AEO and GEO for SaaS, tech and AI companies with one dedicated strategist per account, and nothing goes live without your sign-off. One honest limit: we ask for a three-month minimum, because the first month is mostly research, so we are not a fit for a one-off sprint.',
    'If AI answers are your main goal, see our AEO service. If you want broader generative engine coverage, see our GEO service.',
    'Get an AEO quote or book a call from the same page.',
   ],
  },
  {
   heading: 'FAQ',
   paragraphs: [
    'How long does it take to hire an AEO agency? About three to five weeks if you run baseline prompts, discovery calls, proof checks and contract review properly.',
    'How soon should I expect results? Expect the first month to be research and setup. Judge movement on your agreed prompts over a quarter, per engine.',
    'Can an AEO agency guarantee ChatGPT citations? No. AI answers vary between runs and users. Treat any guarantee as a red flag.',
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
