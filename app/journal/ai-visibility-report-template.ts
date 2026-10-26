import type {Article} from './articles';

/**
 * PUBLISH TIME for this article. Set the real go-live time here at merge (ISO 8601 with +05:30).
 * It feeds datePublished and dateModified in the schema, og/article published and modified times,
 * the RSS pubDate, the sitemap lastmod (via `date`) and the visible "Updated ..." line.
 * Update MODIFIED_AT together with the visible "Updated" date on later edits.
 *
 * Preview only. Do not merge to main. The sheet is shared as anyone with the link, reader,
 * so the CTA is the /copy URL. Clicking it makes a copy in the reader's Drive.
 */
export const PUBLISHED_AT = '2026-10-26T17:10:00+05:30';
export const AI_VISIBILITY_REPORT_TEMPLATE_PUBLISHED_AT = PUBLISHED_AT;
const MODIFIED_AT = PUBLISHED_AT;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayOf = (iso: string) => iso.slice(0, 10);
const shortDate = (iso: string) => `${Number(iso.slice(8, 10))} ${MONTHS[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;
const modifiedDate = shortDate(MODIFIED_AT);

const SLUG = 'ai-visibility-report-template';
const PAGE = `https://www.nakama.in/journal/${SLUG}`;
const SHEET = 'https://docs.google.com/spreadsheets/d/12sqj68KEaRwfRnJrMesqwX81mKwWwnLXDxnXA3erxYQ/copy';
const TITLE = 'AI Visibility Report Template for SaaS Teams (Free Sheet)';
const DESCRIPTION = 'Free AI visibility report template for SaaS: a Google Sheet for prompt sampling, citation logs and a monthly score across ChatGPT, Perplexity and AI Overviews.';
const HERO_ALT = 'Free AI visibility report template Google Sheet for SaaS teams from Nakama Growth';

const fig = (file: string, alt: string, width: number, height: number, eager = false) =>
 `<figure><picture><source srcset="/journal/${SLUG}/${file}.webp" type="image/webp"><img src="/journal/${SLUG}/${file}.png" alt="${alt}" width="${width}" height="${height}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></picture></figure>`;

const articleLd = {
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "Article",
   "@id": `${PAGE}#article`,
   "headline": TITLE,
   "description": DESCRIPTION,
   "image": [
    `${PAGE}/aiviz-template-hero.png`,
    `${PAGE}/aiviz-template-1x1.png`,
    `${PAGE}/aiviz-template-4x3.png`
   ],
   "datePublished": PUBLISHED_AT,
   "dateModified": MODIFIED_AT,
   "inLanguage": "en-US",
   "articleSection": "Guide",
   "keywords": "ai visibility report template, how to track brand mentions in chatgpt, ai visibility tracking, track ai visibility, ai visibility audit",
   "author": {
    "@id": "https://www.nakama.in/authors/yash-kumar#person"
   },
   "publisher": {
    "@id": "https://www.nakama.in/#organization"
   },
   "mainEntityOfPage": {
    "@id": `${PAGE}#webpage`
   },
   "url": PAGE,
   "isPartOf": {
    "@id": "https://www.nakama.in/#website"
   }
  },
  {
   "@type": "Person",
   "@id": "https://www.nakama.in/authors/yash-kumar#person",
   "name": "Yash Kumar",
   "jobTitle": "Co-founder and CEO",
   "url": "https://www.nakama.in/authors/yash-kumar",
   "description": "Yash Kumar is Co-founder and CEO of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask ChatGPT, Perplexity, Gemini and Google AI Overviews what to choose. He leads Nakama Growth's work on earning mentions on the sources those tools read.",
   "image": {
    "@type": "ImageObject",
    "url": "https://www.nakama.in/authors/yash-kumar-nakama-ceo-800.webp",
    "contentUrl": "https://www.nakama.in/authors/yash-kumar-nakama-ceo-800.webp",
    "width": 800,
    "height": 800,
    "caption": "Yash Kumar, Co-founder and CEO of Nakama Growth"
   },
   "worksFor": {
    "@id": "https://www.nakama.in/#organization"
   }
  },
  {
   "@type": "WebPage",
   "@id": `${PAGE}#webpage`,
   "url": PAGE,
   "name": TITLE,
   "description": DESCRIPTION,
   "inLanguage": "en-US",
   "isPartOf": {
    "@id": "https://www.nakama.in/#website"
   },
   "publisher": {
    "@id": "https://www.nakama.in/#organization"
   },
   "mainEntity": {
    "@id": `${PAGE}#article`
   },
   "primaryImageOfPage": {
    "@id": `${PAGE}#primaryimage`
   },
   "breadcrumb": {
    "@id": `${PAGE}#breadcrumb`
   },
   "datePublished": PUBLISHED_AT,
   "dateModified": MODIFIED_AT
  },
  {
   "@type": "ImageObject",
   "@id": `${PAGE}#primaryimage`,
   "url": `${PAGE}/aiviz-template-hero.png`,
   "contentUrl": `${PAGE}/aiviz-template-hero.png`,
   "width": 1600,
   "height": 900,
   "caption": HERO_ALT
  },
  {
   "@type": "ImageObject",
   "@id": `${PAGE}#ogimage`,
   "url": `${PAGE}/aiviz-template-og.png`,
   "contentUrl": `${PAGE}/aiviz-template-og.png`,
   "width": 1200,
   "height": 630,
   "caption": HERO_ALT
  },
  {
   "@type": "BreadcrumbList",
   "@id": `${PAGE}#breadcrumb`,
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
     "item": PAGE
    }
   ]
  },
  {
   "@type": "FAQPage",
   "@id": `${PAGE}#faq`,
   "isPartOf": {
    "@id": `${PAGE}#webpage`
   },
   "mainEntity": [
    {
     "@type": "Question",
     "name": "Do I need a tool to track AI visibility, or can I do it manually?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can do it manually, and for most teams starting out with AI visibility tracking you should. A manual sample of 20 prompts across three engines is enough to see where you stand, and you see the full answers rather than a summary. Tools help once you need more prompts, more locations or daily tracking."
     }
    },
    {
     "@type": "Question",
     "name": "How many times should I run each prompt?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Run each prompt 7 times per engine each month, and 8 or more if you care about which sources get cited. The same prompt can get a different answer on every run, so a single run tells you what happened once, not how often it happens. Small samples swing a lot, so treat a change of one or two mentions as noise until it holds for another month."
     }
    },
    {
     "@type": "Question",
     "name": "How many prompts should an AI visibility report include?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Start with 15 to 25 prompts that cover brand, category, competitor and problem intent. The template ships with 20. More prompts give a steadier score, but only if you run the same set every month."
     }
    },
    {
     "@type": "Question",
     "name": "Does location change what ChatGPT or Gemini says about my brand?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, answers can differ by location, so always record it. Note the location ChatGPT declares for the session and the network country for Gemini. Compare months only when the location matches."
     }
    },
    {
     "@type": "Question",
     "name": "What is the difference between an AI visibility report and an AI visibility audit?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "A report is a repeatable monthly measurement; an audit is a one-time diagnosis of why you are or are not being named. The template here is for the report. Our GEO audit guide covers the diagnostic side."
     }
    },
    {
     "@type": "Question",
     "name": "How often should I run an AI visibility report?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Monthly is the right cadence for most SaaS teams. It is frequent enough to catch changes and slow enough to see the effect of content or off-site work. Run it in the same week each month with the same setup."
     }
    }
   ]
  }
 ]
};

export const aiVisibilityReportTemplateJsonLd = [articleLd];

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">${TITLE}</li></ol></nav>
<h1 id="ai-visibility-report-template-for-saas-teams-free-sheet">${TITLE}</h1>
<p>Updated ${modifiedDate}</p>
<p>By <a href="https://www.nakama.in/authors/yash-kumar" rel="author">Yash Kumar</a>, Co-founder and CEO, Nakama Growth</p>
<p>An AI visibility report template is a fixed structure for checking, every month, whether ChatGPT, Perplexity and Google AI Overviews name your SaaS brand for the questions your buyers ask. This free Google Sheet from Nakama Growth gives you a prompt library, a run log, a citation tracker, a monthly score and a decision log.</p>
<p><strong><a href="${SHEET}">Copy the free template (Google Sheet)</a></strong></p>
<p>Click the link to make your own copy in Drive. You do not need to request access.</p>
${fig('aiviz-template-hero', HERO_ALT, 1600, 900, true)}
<h2 id="whats-inside-the-template">What's inside the template</h2>
<p>The sheet has six tabs. Each one does one job, and they are designed to be filled in order.</p>
${fig('aiviz-template-tabs', 'Six tabs in the AI visibility report template: Readme, Prompt library, Run log, Citations, Monthly score, Decision', 1600, 900)}
<div class="article-table"><table><thead><tr><th scope="col">Tab</th><th scope="col">What it is for</th></tr></thead><tbody>
<tr><td>Readme</td><td>How to copy the sheet, the monthly cadence, which engines to sample, and the location and mode notes that keep months comparable.</td></tr>
<tr><td>Prompt library</td><td>20 starter prompts for B2B SaaS, written with <code>[Brand]</code>, <code>[Category]</code> and <code>[Competitor]</code> placeholders and tagged by intent: brand, category, competitor or problem.</td></tr>
<tr><td>Run log</td><td>One row per prompt, per engine, per run. Date, engine, mode, location, prompt ID, whether you were mentioned, whether you were recommended, your order in the list, cited URLs, and which competitor was named instead.</td></tr>
<tr><td>Citations</td><td>Every unique URL the engines cited, tagged by type (YouTube, Reddit, docs, review, editorial, other). Hits count automatically from the run log. Report citations per engine, never as one blended list.</td></tr>
<tr><td>Monthly score</td><td>Rows logged, mentions, visibility percentage and engines covered for each month, with runs per prompt noted so every score reads as k of n.</td></tr>
<tr><td>Decision</td><td>What improved, what is missing, the next action (content, off-site or audit) and who owns it.</td></tr>
</tbody></table></div>
<p>If you want a wider view of the software that automates parts of this, our roundup of <a href="https://www.nakama.in/journal/best-ai-visibility-tools">AI visibility tools</a> covers that. The template stays deliberately manual so you can see exactly what each engine said.</p>
<h2 id="what-a-useful-ai-visibility-report-includes">What a useful AI visibility report includes</h2>
<p>Most AI visibility reports fail for the same reason: they show a number without the context needed to act on it. A useful report does four things.</p>
${fig('aiviz-template-four-beats', 'Four parts of a useful AI visibility report mapped to Decision, Run log and Citations tabs', 1600, 900)}
<h3 id="decision-tab-for-work-run-log-for-observations">Decision tab for work, Run log for observations</h3>
<p>Keep what your team did apart from what the engines showed. "We published a comparison page on 4 November" is work. "Perplexity named us for P12 on 18 November" is an observation.</p>
<p>When the two are mixed, every improvement looks like it was caused by the last thing someone shipped. Keeping them in separate places (the Decision tab for work, the Run log for observations) lets you check whether a change actually lines up with a result.</p>
<h3 id="context-columns-on-every-run-log-row">Context columns on every Run log row</h3>
<p>An answer from ChatGPT means little without knowing how it was produced. Record the date, engine, mode, location and the exact prompt ID next to every result.</p>
<p>AI answers vary by location, by whether search is on, and by which model or mode is active. A visibility drop that is really a different sampling location is not a drop. The Run log has a column for each of these so the evidence never travels without its context.</p>
<h3 id="gaps-in-citations-and-competitor-fields">Gaps in Citations and competitor fields</h3>
<p>The most useful rows in a report are often the ones where you were not named. Log the competitor that was named instead, and the sources the engine cited for that answer.</p>
<p>Those gaps tell you where to work. If a category prompt keeps citing a Reddit thread or a review site where you have no presence, that is a specific, fixable problem. A report that only lists wins hides it.</p>
<h3 id="close-the-month-on-the-decision-tab">Close the month on the Decision tab</h3>
<p>Every month should close with one decision: keep going, change the content, earn mentions on a source that keeps getting cited, or bring in a deeper audit.</p>
<p>A report without a decision becomes a ritual. The Decision tab asks for a next action and an owner, so the report produces work rather than just a status update.</p>
<h2 id="how-to-run-a-monthly-sample">How to run a monthly sample</h2>
<p>This is the part most teams are actually searching for when they ask how to track brand mentions in ChatGPT. The method is simple. Consistency is what makes it useful.</p>
<p>Method checked 26 October 2026.</p>
${fig('aiviz-template-method', 'Monthly AI visibility sampling method with seven runs per prompt per engine', 1600, 900)}
<ol>
<li><strong>Make your copy and set your terms.</strong> Copy the sheet, then replace the placeholders in the Prompt library with your brand, your category, your main competitors, your buyer roles and the problems you solve.</li>
<li><strong>Pick a prompt set and freeze it.</strong> Keep the IDs stable from month to month. If you retire a prompt, mark it in Notes rather than reusing its ID. Cover all four intents: brand, category, competitor and problem.</li>
<li><strong>Choose your engines.</strong> The core set is ChatGPT, Perplexity, and Google AI Overviews or AI Mode. Gemini and Microsoft Copilot are optional additions if your buyers use them.</li>
<li><strong>Note the sampling location every time.</strong> For ChatGPT, record the location the app declares or uses for the session. For Gemini, record the country of the network you sampled from. If you switch locations, treat it as a separate series.</li>
<li><strong>Record the mode.</strong> The template's series default is logged out, a fresh chat for every run, and memory or personalization off. Never mix logged-in and logged-out runs inside one monthly series. Also note anything else that changes the answer: search on or off, model name, AI Overview versus AI Mode. If you sample Claude, record whether you used standard or extended search, and never mix the two within one series.</li>
<li><strong>Run every prompt on every engine, several times.</strong> The default is 7 runs per prompt per engine per period, and 8 or more when you track source or URL coverage. AI answers vary from run to run, so one run is a sample, not a rate. Open a fresh chat for each run and log one row per prompt, per engine, per run.</li>
<li><strong>Capture the answer details.</strong> Mark whether your brand was mentioned (Y or N), whether it was recommended (Y or N, meaning named as the pick or chosen over alternatives), your rank or order (fill only when the answer is a list), every cited URL, and the competitor named instead if you were missing.</li>
<li><strong>Update the Citations tab.</strong> Paste each new cited URL once and tag its type. Hit counts fill in from the Run log.</li>
<li><strong>Break the series when the engine changes.</strong> If an engine changes its index or search behavior in a way you know about, note the date and start a new series rather than comparing across the change.</li>
</ol>
<p>Run the sample in the same week each month. That way, changes in the score reflect the engines and your work, not a change in method.</p>
<h2 id="how-to-score-the-month">How to score the month</h2>
<p>The Monthly score tab calculates the core numbers for you from the Run log. Use them as your own baseline, not against an industry average. There is no reliable public benchmark for what a "good" AI visibility score is for a SaaS brand, and any number you are shown should come with its prompt set and method.</p>
<p>Always report a score as k of n, for example "named in 6 of 21 prompt × engine × run cells." A percentage without the run count behind it is not a measurement, and a month built on a single run per prompt is noise. The example rows in the sheet are there to show the format, not a baseline.</p>
${fig('aiviz-template-three-metrics', 'Mentioned, Recommended and Cited kept as separate AI visibility metrics with k of n scoring', 1600, 900)}
<p>Track three metrics and keep them separate. Never blend them into one vanity score:</p>
<ul>
<li><strong>Mentioned.</strong> Your brand appears in the answer at all.</li>
<li><strong>Recommended.</strong> The answer names you as the pick or puts you ahead of alternatives.</li>
<li><strong>Cited.</strong> The engine links to one of your URLs as a source.</li>
</ul>
<p>Then read the month on three things:</p>
<ul>
<li><strong>Visibility percentage.</strong> Mentions divided by rows logged, always shown with k of n and runs per prompt. This is the headline number to trend over time.</li>
<li><strong>Coverage.</strong> How many engines you sampled and whether your visibility holds across them. Being named by one engine and absent from the rest is a different situation from steady visibility across all of them.</li>
<li><strong>Citation quality.</strong> Look at the Citations tab, per engine. Are the cited sources ones you own, ones that describe you accurately, or ones where a competitor is the only option discussed?</li>
</ul>
<p>A simple way to read the result:</p>
<div class="article-table"><table><thead><tr><th scope="col">Signal</th><th scope="col">What it usually means</th><th scope="col">Typical next action</th></tr></thead><tbody>
<tr><td>Visibility rising, citations include your pages</td><td>Your content is being read and used</td><td>Keep publishing to the gaps</td></tr>
<tr><td>Visibility flat, competitor named instead</td><td>Engines know the category but not you</td><td>Earn mentions on the sources they cite</td></tr>
<tr><td>Named on brand prompts only</td><td>Engines know you exist but do not recommend you</td><td>Build category and comparison content</td></tr>
<tr><td>Visibility swings with no work shipped</td><td>Sampling noise or an engine change</td><td>Check location and mode, then re-run</td></tr>
</tbody></table></div>
<p>Write the reasoning in the Notes column. Next month, you will want to know why you scored it the way you did.</p>
<h2 id="when-diy-reporting-isnt-enough">When DIY reporting isn't enough</h2>
<p>A monthly sheet tells you where you stand. It does not always tell you why. If your visibility is flat after a few months of work, or the engines keep citing sources you cannot influence on your own, a structured <a href="https://www.nakama.in/journal/geo-audit">GEO audit</a> is the next step. Nakama Growth runs audits and ongoing <a href="https://www.nakama.in/services/geo">GEO work</a> for B2B SaaS, AI and software teams that want to get named in the answers their buyers read.</p>
<h2 id="faq">FAQ</h2>
<h3 id="do-i-need-a-tool-to-track-ai-visibility-or-can-i-do-it-manually">Do I need a tool to track AI visibility, or can I do it manually?</h3>
<p>You can do it manually, and for most teams starting out with AI visibility tracking you should. A manual sample of 20 prompts across three engines is enough to see where you stand, and you see the full answers rather than a summary. Tools help once you need more prompts, more locations or daily tracking.</p>
<h3 id="how-many-times-should-i-run-each-prompt">How many times should I run each prompt?</h3>
<p>Run each prompt 7 times per engine each month, and 8 or more if you care about which sources get cited. The same prompt can get a different answer on every run, so a single run tells you what happened once, not how often it happens. Small samples swing a lot, so treat a change of one or two mentions as noise until it holds for another month.</p>
<h3 id="how-many-prompts-should-an-ai-visibility-report-include">How many prompts should an AI visibility report include?</h3>
<p>Start with 15 to 25 prompts that cover brand, category, competitor and problem intent. The template ships with 20. More prompts give a steadier score, but only if you run the same set every month.</p>
<h3 id="does-location-change-what-chatgpt-or-gemini-says-about-my-brand">Does location change what ChatGPT or Gemini says about my brand?</h3>
<p>Yes, answers can differ by location, so always record it. Note the location ChatGPT declares for the session and the network country for Gemini. Compare months only when the location matches.</p>
<h3 id="what-is-the-difference-between-an-ai-visibility-report-and-an-ai-visibility-audit">What is the difference between an AI visibility report and an AI visibility audit?</h3>
<p>A report is a repeatable monthly measurement; an audit is a one-time diagnosis of why you are or are not being named. The template here is for the report. Our <a href="https://www.nakama.in/journal/geo-audit">GEO audit</a> guide covers the diagnostic side.</p>
<h3 id="how-often-should-i-run-an-ai-visibility-report">How often should I run an AI visibility report?</h3>
<p>Monthly is the right cadence for most SaaS teams. It is frequent enough to catch changes and slow enough to see the effect of content or off-site work. Run it in the same week each month with the same setup.</p>
<h2 id="about-the-author">About the author</h2>
<div class="author-box" id="yash-kumar">
<img src="/authors/yash-kumar-nakama-ceo.webp" srcset="/authors/yash-kumar-nakama-ceo.webp 400w, /authors/yash-kumar-nakama-ceo-800.webp 800w" sizes="96px" alt="Yash Kumar, Co-founder and CEO of Nakama Growth" width="96" height="96" loading="lazy" decoding="async">
<div class="author-box-text">
<p><a href="https://www.nakama.in/authors/yash-kumar" rel="author">Yash Kumar</a> is Co-founder and CEO of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask ChatGPT, Perplexity, Gemini and Google AI Overviews what to choose. He leads Nakama Growth's work on earning mentions on the sources those tools read.</p>
</div>
</div>`;

export const aiVisibilityReportTemplateArticle: Article = {
 slug: SLUG,
 category: 'Guide',
 title: TITLE,
 description: DESCRIPTION,
 readTime: '9 min read',
 motif: 'guide',
 metaTitle: TITLE,
 date: dayOf(PUBLISHED_AT),
 publishedAt: PUBLISHED_AT,
 authorName: 'Yash Kumar',
 coverImage: {src: `/journal/${SLUG}/aiviz-template-hero.webp`, width: 1600, height: 900},
 ogImage: {
  url: `${PAGE}/aiviz-template-og.png`,
  width: 1200,
  height: 630,
  alt: HERO_ALT,
  type: 'image/png',
 },
 jsonLd: aiVisibilityReportTemplateJsonLd,
 bodyHtml,
 sections: [
  {
   heading: 'Introduction',
   paragraphs: [
    TITLE,
    `Updated ${modifiedDate}`,
    'By Yash Kumar, Co-founder and CEO, Nakama Growth',
    'An AI visibility report template is a fixed structure for checking, every month, whether ChatGPT, Perplexity and Google AI Overviews name your SaaS brand for the questions your buyers ask. This free Google Sheet from Nakama Growth gives you a prompt library, a run log, a citation tracker, a monthly score and a decision log.',
    'Copy the free template (Google Sheet)',
    'Click the link to make your own copy in Drive. You do not need to request access.',
   ],
  },
  {
   heading: "What's inside the template",
   paragraphs: [
    'The sheet has six tabs. Each one does one job, and they are designed to be filled in order.',
    'Readme: How to copy the sheet, the monthly cadence, which engines to sample, and the location and mode notes that keep months comparable.',
    'Prompt library: 20 starter prompts for B2B SaaS, written with [Brand], [Category] and [Competitor] placeholders and tagged by intent: brand, category, competitor or problem.',
    'Run log: One row per prompt, per engine, per run. Date, engine, mode, location, prompt ID, whether you were mentioned, whether you were recommended, your order in the list, cited URLs, and which competitor was named instead.',
    'Citations: Every unique URL the engines cited, tagged by type (YouTube, Reddit, docs, review, editorial, other). Hits count automatically from the run log. Report citations per engine, never as one blended list.',
    'Monthly score: Rows logged, mentions, visibility percentage and engines covered for each month, with runs per prompt noted so every score reads as k of n.',
    'Decision: What improved, what is missing, the next action (content, off-site or audit) and who owns it.',
    'If you want a wider view of the software that automates parts of this, our roundup of AI visibility tools covers that. The template stays deliberately manual so you can see exactly what each engine said.',
   ],
  },
  {
   heading: 'What a useful AI visibility report includes',
   paragraphs: [
    'Most AI visibility reports fail for the same reason: they show a number without the context needed to act on it. A useful report does four things.',
   ],
  },
  {
   heading: 'Decision tab for work, Run log for observations',
   paragraphs: [
    'Keep what your team did apart from what the engines showed. "We published a comparison page on 4 November" is work. "Perplexity named us for P12 on 18 November" is an observation.',
    'When the two are mixed, every improvement looks like it was caused by the last thing someone shipped. Keeping them in separate places (the Decision tab for work, the Run log for observations) lets you check whether a change actually lines up with a result.',
   ],
  },
  {
   heading: 'Context columns on every Run log row',
   paragraphs: [
    'An answer from ChatGPT means little without knowing how it was produced. Record the date, engine, mode, location and the exact prompt ID next to every result.',
    'AI answers vary by location, by whether search is on, and by which model or mode is active. A visibility drop that is really a different sampling location is not a drop. The Run log has a column for each of these so the evidence never travels without its context.',
   ],
  },
  {
   heading: 'Gaps in Citations and competitor fields',
   paragraphs: [
    'The most useful rows in a report are often the ones where you were not named. Log the competitor that was named instead, and the sources the engine cited for that answer.',
    'Those gaps tell you where to work. If a category prompt keeps citing a Reddit thread or a review site where you have no presence, that is a specific, fixable problem. A report that only lists wins hides it.',
   ],
  },
  {
   heading: 'Close the month on the Decision tab',
   paragraphs: [
    'Every month should close with one decision: keep going, change the content, earn mentions on a source that keeps getting cited, or bring in a deeper audit.',
    'A report without a decision becomes a ritual. The Decision tab asks for a next action and an owner, so the report produces work rather than just a status update.',
   ],
  },
  {
   heading: 'How to run a monthly sample',
   paragraphs: [
    'This is the part most teams are actually searching for when they ask how to track brand mentions in ChatGPT. The method is simple. Consistency is what makes it useful.',
    'Method checked 26 October 2026.',
    'Make your copy and set your terms. Copy the sheet, then replace the placeholders in the Prompt library with your brand, your category, your main competitors, your buyer roles and the problems you solve.',
    'Pick a prompt set and freeze it. Keep the IDs stable from month to month. If you retire a prompt, mark it in Notes rather than reusing its ID. Cover all four intents: brand, category, competitor and problem.',
    'Choose your engines. The core set is ChatGPT, Perplexity, and Google AI Overviews or AI Mode. Gemini and Microsoft Copilot are optional additions if your buyers use them.',
    'Note the sampling location every time. For ChatGPT, record the location the app declares or uses for the session. For Gemini, record the country of the network you sampled from. If you switch locations, treat it as a separate series.',
    "Record the mode. The template's series default is logged out, a fresh chat for every run, and memory or personalization off. Never mix logged-in and logged-out runs inside one monthly series. Also note anything else that changes the answer: search on or off, model name, AI Overview versus AI Mode. If you sample Claude, record whether you used standard or extended search, and never mix the two within one series.",
    'Run every prompt on every engine, several times. The default is 7 runs per prompt per engine per period, and 8 or more when you track source or URL coverage. AI answers vary from run to run, so one run is a sample, not a rate. Open a fresh chat for each run and log one row per prompt, per engine, per run.',
    'Capture the answer details. Mark whether your brand was mentioned (Y or N), whether it was recommended (Y or N, meaning named as the pick or chosen over alternatives), your rank or order (fill only when the answer is a list), every cited URL, and the competitor named instead if you were missing.',
    'Update the Citations tab. Paste each new cited URL once and tag its type. Hit counts fill in from the Run log.',
    'Break the series when the engine changes. If an engine changes its index or search behavior in a way you know about, note the date and start a new series rather than comparing across the change.',
    'Run the sample in the same week each month. That way, changes in the score reflect the engines and your work, not a change in method.',
   ],
  },
  {
   heading: 'How to score the month',
   paragraphs: [
    'The Monthly score tab calculates the core numbers for you from the Run log. Use them as your own baseline, not against an industry average. There is no reliable public benchmark for what a "good" AI visibility score is for a SaaS brand, and any number you are shown should come with its prompt set and method.',
    'Always report a score as k of n, for example "named in 6 of 21 prompt × engine × run cells." A percentage without the run count behind it is not a measurement, and a month built on a single run per prompt is noise. The example rows in the sheet are there to show the format, not a baseline.',
    'Track three metrics and keep them separate. Never blend them into one vanity score:',
    'Mentioned. Your brand appears in the answer at all.',
    'Recommended. The answer names you as the pick or puts you ahead of alternatives.',
    'Cited. The engine links to one of your URLs as a source.',
    'Then read the month on three things:',
    'Visibility percentage. Mentions divided by rows logged, always shown with k of n and runs per prompt. This is the headline number to trend over time.',
    'Coverage. How many engines you sampled and whether your visibility holds across them. Being named by one engine and absent from the rest is a different situation from steady visibility across all of them.',
    'Citation quality. Look at the Citations tab, per engine. Are the cited sources ones you own, ones that describe you accurately, or ones where a competitor is the only option discussed?',
    'Visibility rising, citations include your pages: Your content is being read and used. Keep publishing to the gaps.',
    'Visibility flat, competitor named instead: Engines know the category but not you. Earn mentions on the sources they cite.',
    'Named on brand prompts only: Engines know you exist but do not recommend you. Build category and comparison content.',
    'Visibility swings with no work shipped: Sampling noise or an engine change. Check location and mode, then re-run.',
    'Write the reasoning in the Notes column. Next month, you will want to know why you scored it the way you did.',
   ],
  },
  {
   heading: "When DIY reporting isn't enough",
   paragraphs: [
    'A monthly sheet tells you where you stand. It does not always tell you why. If your visibility is flat after a few months of work, or the engines keep citing sources you cannot influence on your own, a structured GEO audit is the next step. Nakama Growth runs audits and ongoing GEO work for B2B SaaS, AI and software teams that want to get named in the answers their buyers read.',
   ],
  },
  {
   heading: 'FAQ',
   paragraphs: [
    'Do I need a tool to track AI visibility, or can I do it manually?',
    'You can do it manually, and for most teams starting out with AI visibility tracking you should. A manual sample of 20 prompts across three engines is enough to see where you stand, and you see the full answers rather than a summary. Tools help once you need more prompts, more locations or daily tracking.',
    'How many times should I run each prompt?',
    'Run each prompt 7 times per engine each month, and 8 or more if you care about which sources get cited. The same prompt can get a different answer on every run, so a single run tells you what happened once, not how often it happens. Small samples swing a lot, so treat a change of one or two mentions as noise until it holds for another month.',
    'How many prompts should an AI visibility report include?',
    'Start with 15 to 25 prompts that cover brand, category, competitor and problem intent. The template ships with 20. More prompts give a steadier score, but only if you run the same set every month.',
    'Does location change what ChatGPT or Gemini says about my brand?',
    'Yes, answers can differ by location, so always record it. Note the location ChatGPT declares for the session and the network country for Gemini. Compare months only when the location matches.',
    'What is the difference between an AI visibility report and an AI visibility audit?',
    'A report is a repeatable monthly measurement; an audit is a one-time diagnosis of why you are or are not being named. The template here is for the report. Our GEO audit guide covers the diagnostic side.',
    'How often should I run an AI visibility report?',
    'Monthly is the right cadence for most SaaS teams. It is frequent enough to catch changes and slow enough to see the effect of content or off-site work. Run it in the same week each month with the same setup.',
   ],
  },
  {
   heading: 'About the author',
   paragraphs: [
    "Yash Kumar is Co-founder and CEO of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask ChatGPT, Perplexity, Gemini and Google AI Overviews what to choose. He leads Nakama Growth's work on earning mentions on the sources those tools read.",
   ],
  },
 ],
};
