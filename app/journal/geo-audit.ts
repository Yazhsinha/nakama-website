import type {Article} from './articles';

/**
 * PUBLISH TIME for this article. Set the real go-live time here at merge (ISO 8601 with +05:30).
 * It feeds datePublished and dateModified in the schema, og/article published and modified times,
 * the RSS pubDate, the sitemap lastmod (via `date`) and the visible "Updated ..." line.
 * Update MODIFIED_AT together with the visible "Updated" date on later edits.
 */
export const GEO_AUDIT_PUBLISHED_AT = '2026-10-21T16:25:35+05:30';
const PUBLISHED_AT = GEO_AUDIT_PUBLISHED_AT;
const MODIFIED_AT = PUBLISHED_AT;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayOf = (iso: string) => iso.slice(0, 10);
const shortDate = (iso: string) => `${Number(iso.slice(8, 10))} ${MONTHS[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;
const modifiedDate = shortDate(MODIFIED_AT);
const articleLd = {
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "Article",
   "@id": "https://www.nakama.in/journal/geo-audit#article",
   "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.nakama.in/journal/geo-audit"
   },
   "headline": "GEO audit: how to check your SaaS brand's AI visibility (2026)",
   "description": "Run a GEO audit in six steps: test buyer prompts in ChatGPT, Perplexity, Gemini, Claude and AI Overviews, then fix crawler, content and source gaps.",
   "datePublished": PUBLISHED_AT,
   "dateModified": MODIFIED_AT,
   "inLanguage": "en",
   "author": {
    "@id": "https://www.nakama.in/authors/yash-kumar#person"
   },
   "publisher": {
    "@id": "https://www.nakama.in/#organization"
   },
   "image": "https://www.nakama.in/journal/geo-audit/geo-audit-hero.png"
  },
  {
   "@type": "Person",
   "@id": "https://www.nakama.in/authors/yash-kumar#person",
   "name": "Yash Kumar",
   "jobTitle": "Co-founder and CEO",
   "url": "https://www.nakama.in/authors/yash-kumar",
   "worksFor": {
    "@id": "https://www.nakama.in/#organization"
   }
  },
  {
   "@type": "BreadcrumbList",
   "@id": "https://www.nakama.in/journal/geo-audit#breadcrumb",
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
     "name": "GEO audit: how to check your SaaS brand's AI visibility (2026)",
     "item": "https://www.nakama.in/journal/geo-audit"
    }
   ]
  }
 ]
};

const faqLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "@id": "https://www.nakama.in/journal/geo-audit#faq",
 "mainEntity": [
  {
   "@type": "Question",
   "name": "What is a GEO audit?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "A GEO audit is a structured check of how AI answer engines such as ChatGPT, Perplexity, Gemini, Copilot, Claude and Google AI Overviews mention, cite and describe your brand. It also checks whether AI crawlers can access your site and whether your key content is readable without JavaScript."
   }
  },
  {
   "@type": "Question",
   "name": "How long does a GEO audit for SaaS take?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Size a GEO audit for SaaS by its captures: prompts times engines times runs. For example, 25 prompts across 5 engines at 7 runs each is 875 logged answers, before any technical or source checks. Plan time and tooling around that number."
   }
  },
  {
   "@type": "Question",
   "name": "Do I need to block GPTBot to protect my content?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "That is a policy choice. OpenAI treats GPTBot (training) and OAI-SearchBot (ChatGPT search) as independent settings. Blocking GPTBot while allowing OAI-SearchBot keeps your pages eligible for ChatGPT search."
   }
  },
  {
   "@type": "Question",
   "name": "Do I need special schema or an llms.txt file for AI Overviews?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Google says no. Its guidance rules out AI text files such as llms.txt and special schema for its generative AI features. What you should verify is the Search Console opt-in for Search generative AI features, plus indexed key pages with snippets allowed."
   }
  },
  {
   "@type": "Question",
   "name": "What tools help with a GEO audit?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "A spreadsheet and manual prompt testing are enough for a first audit. Add Google Search Console's Generative AI performance report and Bing Webmaster Tools' AI Performance report for first-party data. Paid AI visibility tools can automate prompt tracking across engines once you know which prompts matter; our Peec AI alternatives roundup compares them."
   }
  }
 ]
};

export const geoAuditJsonLd = [articleLd, faqLd];

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">GEO audit: how to check your SaaS brand's AI visibility (2026)</li></ol></nav>
<h1 id="geo-audit-how-to-check-your-saas-brand-s-ai-visibility-2026">GEO audit: how to check your SaaS brand's AI visibility (2026)</h1>
<p>Updated ${modifiedDate}</p>
<p>By <a href="https://www.nakama.in/authors/yash-kumar" rel="author">Yash Kumar</a>, Co-founder and CEO, Nakama Growth</p>
<figure><img src="/journal/geo-audit/geo-audit-hero.png" alt="Nakama Growth journal cover: GEO audit, how to check your SaaS brand's AI visibility in 2026" width="1200" height="630" fetchpriority="high" decoding="async"></figure>
<p>A GEO audit is a structured check of whether AI answer engines can find, describe and recommend your brand. For a SaaS company, that means testing real buyer prompts in ChatGPT, Perplexity, Google AI Overviews, Gemini, Copilot and Claude, then fixing what blocks you: crawler access, JavaScript-only pages, thin third-party coverage and stale facts.</p>
<p>This guide gives you the full GEO audit for SaaS teams in six steps, plus a copyable checklist, so you can measure AI search visibility for SaaS buyers the same way every month.</p>
<figure><img src="/journal/geo-audit/geo-audit-six-steps.png" alt="Six-step GEO audit flow for SaaS: prompts, engine tests, crawlers, JavaScript, sources, structure" width="1600" height="1000" loading="lazy" decoding="async"></figure>
<h2 id="key-facts-before-you-start">Key facts before you start</h2>
<ul style="list-style:disc;padding-left:1.4em">
<li><strong>ChatGPT search depends on one crawler.</strong> Per OpenAI's crawler docs, blocking OAI-SearchBot removes a site from ChatGPT's search answers, leaving it reachable only as a plain navigation link (<a href="https://developers.openai.com/api/docs/bots">OpenAI</a>).</li>
<li><strong>Google needs indexing plus one setting.</strong> Pages need to sit in Google's index with snippets allowed, and Google's optimization guide also requires the site to stay opted in to "Search generative AI features" inside Search Console (<a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google</a>).</li>
<li><strong>Off-site mentions matter most for Google.</strong> In an Ahrefs study of 75,000 brands (May 2025), branded web mentions correlated with AI Overview visibility at 0.664, against 0.218 for backlinks (<a href="https://ahrefs.com/blog/ai-overview-brand-correlation/">Ahrefs</a>).</li>
<li><strong>Bing now reports AI citations.</strong> Since a public preview announced on 10 Feb 2026, Bing Webmaster Tools' AI Performance report shows how often your pages are cited in Microsoft Copilot and Bing AI summaries (<a href="https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/">Bing</a>).</li>
</ul>
<p>The Ahrefs studies cited here measure correlation. They show patterns and cannot prove cause.</p>
<h2 id="what-is-a-geo-audit">What is a GEO audit?</h2>
<p>A GEO audit measures your LLM visibility, meaning how generative engines treat your brand today, and lists the fixes that would improve it. It covers four layers: whether AI tools mention you, whether they cite your pages, whether what they say is accurate, and whether crawlers can read your site at all.</p>
<p>GEO stands for generative engine optimization. For the background on how it relates to SEO and AEO, read our guide to <a href="https://www.nakama.in/journal/aeo-vs-seo-vs-geo">AEO vs SEO vs GEO</a>.</p>
<h2 id="why-does-a-geo-audit-for-saas-need-its-own-process">Why does a GEO audit for SaaS need its own process?</h2>
<p>SaaS sites break AI visibility in specific ways: pricing loads through JavaScript, docs live on subdomains, trial pages are blocked, and buyers compare tools on G2 and YouTube before they visit your site. Buying is also comparison-heavy, so prompts like "alternatives to [competitor]" shape shortlists, and your audit must test exactly those.</p>
<h2 id="step-1-how-do-you-build-a-buyer-prompt-set">Step 1: How do you build a buyer prompt set?</h2>
<p>Start with 20 to 30 prompts your buyers would actually type, grouped by stage: category discovery, comparison, alternatives, pricing and branded. Keep branded prompts in their own group, because AI tools usually know your name when asked directly. The useful signal is in unbranded prompts.</p>
<div class="article-table"><table><thead><tr><th scope="col">Stage</th><th scope="col">Example prompt</th></tr></thead><tbody><tr><td>Discovery</td><td>What is the best customer support software for a 50-person SaaS team?</td></tr><tr><td>Comparison</td><td>Is [your brand] or [competitor] better for startups?</td></tr><tr><td>Alternatives</td><td>What are the best alternatives to [competitor]?</td></tr><tr><td>Pricing</td><td>How much does [your brand] cost per seat?</td></tr><tr><td>Branded</td><td>What does [your brand] do?</td></tr></tbody></table></div>
<p>Freeze this list. If you change prompts between audits, you cannot tell whether visibility moved or the test moved.</p>
<h2 id="step-2-how-do-you-test-prompts-across-ai-engines">Step 2: How do you test prompts across AI engines?</h2>
<p>Ask every prompt seven or more times on each engine, in fresh sessions with no chat history (logged out where the engine allows it), and record the date of every run. Report each engine on its own line with run counts, such as "named in 2 of 7 ChatGPT runs, 14 to 21 Oct 2026". Never add engines together into one score.</p>
<p>The reason is variance. In a 2026 University of St. Gallen study, only 34% to 42% of cited sources overlapped from one day to the next, and the authors set seven daily repeats of each prompt as the minimum for tracking brands (<a href="https://arxiv.org/abs/2604.07585">Schulte et al.</a>). The study used Swiss-German prompts and suggests at least 8 runs when you track cited sources, so treat 7 as a floor.</p>
<p>For each run, log six fields: whether your brand is <strong>mentioned</strong>, whether it is <strong>recommended</strong>, whether your URL is <strong>cited</strong>, whether price and features are <strong>accurate</strong>, which <strong>competitors</strong> appear, and which <strong>source domains</strong> the engine cites. For an example of the output this step should produce, see our post on <a href="https://www.nakama.in/journal/what-a-useful-visibility-report-shows">what a useful visibility report shows</a>.</p>
<h3 id="how-do-i-track-google-ai-overviews">How do I track Google AI Overviews?</h3>
<p>Search each prompt in Google and record whether an AI Overview appears at all. Many queries show none: a study of 55,393 trending Google queries (March to April 2026) found AI Overviews on 13.7% overall and 64.7% of question-form queries (<a href="https://arxiv.org/abs/2605.14021">Xu et al.</a>). Log "no overview" as its own outcome.</p>
<p>Because Google can use "query fan-out" to build one answer from several searches, a page on a narrow subtopic can earn a citation on a broad prompt (<a href="https://developers.google.com/search/docs/appearance/ai-features">Google</a>).</p>
<h3 id="how-do-i-check-perplexity-gemini-copilot-and-claude">How do I check Perplexity, Gemini, Copilot and Claude?</h3>
<p>Run the same prompts the same number of times on each, and record sources wherever the engine shows them. Expect different results per engine. Ahrefs found branded web mentions correlate far less with Perplexity (0.30) and ChatGPT (0.15) visibility, measured across the top 50 domains in each (<a href="https://ahrefs.com/blog/branded-web-mentions-visibility-ai-search/">Ahrefs, Jul 2025</a>).</p>
<h3 id="is-a-citation-proof-that-the-page-supports-the-answer">Is a citation proof that the page supports the answer?</h3>
<p>No. Check the cited page yourself. In the same AI Overviews study, 11.0% of 98,020 claims were unsupported by the pages cited for them (<a href="https://arxiv.org/abs/2605.14021">Xu et al.</a>). If an engine cites your page for a wrong claim, log it as an accuracy issue.</p>
<h2 id="step-3-which-ai-crawlers-should-i-allow">Step 3: Which AI crawlers should I allow?</h2>
<p>Allow the search crawlers for every engine you want to appear in, and decide the training crawlers by policy. Then confirm in your robots.txt and your CDN or firewall rules that those crawlers get a 200 response on key pages. One blanket bot rule can remove you from ChatGPT, Perplexity or Claude search.</p>
<figure><img src="/journal/geo-audit/geo-audit-crawlers.png" alt="Table of AI crawlers to allow in a GEO audit, with owner and audit check" width="1600" height="1200" loading="lazy" decoding="async"></figure>
<div class="article-table"><table><thead><tr><th scope="col" style="white-space:nowrap">Crawler</th><th scope="col" style="white-space:nowrap">Owner</th><th scope="col">What it does</th><th scope="col">Audit check</th></tr></thead><tbody><tr><td style="white-space:nowrap">OAI-SearchBot</td><td style="white-space:nowrap">OpenAI</td><td>Surfaces sites in ChatGPT search</td><td>Allowed in robots.txt and firewall</td></tr><tr><td style="white-space:nowrap">GPTBot</td><td style="white-space:nowrap">OpenAI</td><td>Crawls content that may train models</td><td>Matches your training policy</td></tr><tr><td style="white-space:nowrap">ChatGPT-User</td><td style="white-space:nowrap">OpenAI</td><td>Visits a page on a user's request</td><td>User-triggered; robots.txt may not apply</td></tr><tr><td style="white-space:nowrap">PerplexityBot</td><td style="white-space:nowrap">Perplexity</td><td>Surfaces and links sites in Perplexity search</td><td>Allowed in robots.txt and firewall</td></tr><tr><td style="white-space:nowrap">Perplexity-User</td><td style="white-space:nowrap">Perplexity</td><td>Fetches pages for user questions</td><td>User-triggered; generally ignores robots.txt</td></tr><tr><td style="white-space:nowrap">Claude-SearchBot</td><td style="white-space:nowrap">Anthropic</td><td>Indexes content to improve Claude search results</td><td>Allowed in robots.txt</td></tr><tr><td style="white-space:nowrap">ClaudeBot</td><td style="white-space:nowrap">Anthropic</td><td>Gathers pages that could feed model training</td><td>Matches your training policy</td></tr><tr><td style="white-space:nowrap">Claude-User</td><td style="white-space:nowrap">Anthropic</td><td>Retrieves pages when a Claude user asks</td><td>Allowed if you want user-directed visibility</td></tr><tr><td style="white-space:nowrap">Google-Extended</td><td style="white-space:nowrap">Google</td><td>Robots.txt token for AI training and grounding in Google systems outside Search</td><td>Matches your policy; it does not control AI Overviews</td></tr></tbody></table></div>
<p>Sources: <a href="https://developers.openai.com/api/docs/bots">OpenAI</a>, <a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers">Perplexity</a>, <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler">Anthropic</a>, <a href="https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers">Google</a>.</p>
<p>Anthropic warns that disabling Claude-SearchBot may reduce your visibility in Claude search results. If your SaaS site sits behind Cloudflare or AWS WAF, check firewall logs for blocked requests from these agents and verify them against each vendor's published IP lists.</p>
<p>For Google, open Search Console Settings and confirm the site is opted in to Search generative AI features. Then look for stray <code>nosnippet</code> or <code>max-snippet</code> tags, which Google lists as controls that limit what appears in AI features.</p>
<h2 id="step-4-is-your-key-saas-content-visible-without-javascript">Step 4: Is your key SaaS content visible without JavaScript?</h2>
<p>View the raw HTML of your homepage, pricing, feature and comparison pages, or run <code>curl</code> on each URL and search the output for your plan prices. If prices, plan names, feature lists or FAQs only appear after JavaScript runs, some AI crawlers may never see them. Server-render or pre-render anything you want quoted.</p>
<p>Google recommends keeping important content available in textual form (<a href="https://developers.google.com/search/docs/appearance/ai-features">Google</a>). For SaaS, the usual culprits are:</p>
<ul style="list-style:disc;padding-left:1.4em">
<li>Pricing toggles (monthly or annual) that inject numbers with JavaScript</li>
<li>Feature comparison grids built as interactive widgets</li>
<li>Docs and changelogs on a separate subdomain with weak internal links</li>
</ul>
<h2 id="step-5-which-sources-do-ai-engines-cite-for-my-category">Step 5: Which sources do AI engines cite for my category?</h2>
<p>List the domains the engines cited in Step 2 for prompts where you lost. Then check whether your brand appears on those pages, and whether the description matches your current product. Third-party coverage is often the largest gap the audit finds.</p>
<p>The off-site sources to check for a SaaS brand:</p>
<ul style="list-style:disc;padding-left:1.4em">
<li><strong>Review platforms:</strong> G2, Capterra and TrustRadius profiles, with current pricing and categories</li>
<li><strong>YouTube:</strong> demos, tutorials and comparison videos that name your product</li>
<li><strong>Roundups:</strong> "best X tools" listicles that engines cite repeatedly</li>
<li><strong>Profiles:</strong> LinkedIn, Crunchbase and your about page, with one consistent category description</li>
<li><strong>Reddit and forums:</strong> check these only if Step 2 shows an engine citing them for your prompts, since citation sources differ by engine</li>
</ul>
<p>In a December 2025 Ahrefs study, YouTube mentions had the strongest correlation with AI visibility (about 0.737), while a site's page count showed almost none (about 0.194) (<a href="https://ahrefs.com/blog/ai-brand-visibility-correlations/">Ahrefs</a>). Fix wrong facts at the source: if G2 shows last year's pricing, AI answers may repeat it.</p>
<h2 id="step-6-is-your-content-structured-and-fresh-enough-to-be-cited">Step 6: Is your content structured and fresh enough to be cited?</h2>
<p>Check that each priority prompt maps to one page that answers it in the first two sentences, with question-style headings, a visible update date that reflects real edits, and specific numbers with a named source. Add Organization schema with correct sameAs links as hygiene, and use FAQ markup only where it matches the visible text word for word.</p>
<p>As a working guideline, keep each heading's lead answer between 40 and 60 words. Google states structured data isn't required for its generative AI features (<a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google</a>), so answers and facts carry the weight. For ChatGPT-specific tactics, read our guide on <a href="https://www.nakama.in/journal/how-to-rank-in-chatgpt">how to rank in ChatGPT</a>.</p>
<h2 id="how-do-you-measure-results-over-time">How do you measure results over time?</h2>
<p>Rerun the same frozen prompt set on the same engines every month, with the same run count, and compare mention, recommendation and citation rates against your baseline. Keep visibility metrics and pipeline metrics in separate columns.</p>
<p>For first-party data, use Google Search Console's Generative AI performance report, which Google recommends for seeing how content performs in its AI features (<a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google</a>), and Bing's AI Performance report, which shows total citations, cited pages, grounding queries and page-level activity across Copilot and Bing AI summaries (<a href="https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/">Bing</a>). Treat these counts as directional; the report is still in preview. Our roundup of <a href="https://www.nakama.in/journal/peec-ai-alternatives">Peec AI alternatives</a> compares paid trackers.</p>
<h2 id="the-geo-audit-checklist">The GEO audit checklist</h2>
<p>Copy this into a sheet and add Pass/Fail, Owner and Due columns.</p>
<div class="article-table"><table><thead><tr><th scope="col" style="width:2.5em;min-width:0;white-space:nowrap">#</th><th scope="col" style="width:7em;min-width:0;white-space:nowrap">Area</th><th scope="col" style="min-width:210px">Check</th><th scope="col" style="min-width:190px">Pass if</th></tr></thead><tbody><tr><td style="width:2.5em;min-width:0;white-space:nowrap">1</td><td style="width:7em;min-width:0;white-space:nowrap">Prompts</td><td style="min-width:210px">20 to 30 buyer prompts, grouped by stage</td><td style="min-width:190px">Branded prompts kept separate</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">2</td><td style="width:7em;min-width:0;white-space:nowrap">Prompts</td><td style="min-width:210px">Prompt list frozen for repeat audits</td><td style="min-width:190px">Same list used each month</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">3</td><td style="width:7em;min-width:0;white-space:nowrap">Testing</td><td style="min-width:210px">At least 7 dated runs per prompt per engine</td><td style="min-width:190px">Run counts and dates logged</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">4</td><td style="width:7em;min-width:0;white-space:nowrap">Testing</td><td style="min-width:210px">ChatGPT, Perplexity, AI Overviews, Gemini, Copilot, Claude covered</td><td style="min-width:190px">Each engine reported separately</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">5</td><td style="width:7em;min-width:0;white-space:nowrap">Testing</td><td style="min-width:210px">Mentions, recommendations, citations and cited domains logged</td><td style="min-width:190px">Separate columns; cited pages checked against claims</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">6</td><td style="width:7em;min-width:0;white-space:nowrap">Access</td><td style="min-width:210px">OAI-SearchBot, PerplexityBot and Claude-SearchBot allowed</td><td style="min-width:190px">No disallow on key pages</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">7</td><td style="width:7em;min-width:0;white-space:nowrap">Access</td><td style="min-width:210px">GPTBot, ClaudeBot and Google-Extended rules match training policy</td><td style="min-width:190px">Decision documented</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">8</td><td style="width:7em;min-width:0;white-space:nowrap">Access</td><td style="min-width:210px">CDN and WAF let AI crawlers through</td><td style="min-width:190px">200 responses in logs</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">9</td><td style="width:7em;min-width:0;white-space:nowrap">Access</td><td style="min-width:210px">Key pages indexed in Google and Bing</td><td style="min-width:190px">Confirmed in Search Console and Bing Webmaster Tools</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">10</td><td style="width:7em;min-width:0;white-space:nowrap">Access</td><td style="min-width:210px">Search generative AI features opt-in on</td><td style="min-width:190px">Checked in Search Console</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">11</td><td style="width:7em;min-width:0;white-space:nowrap">Access</td><td style="min-width:210px">No accidental nosnippet or max-snippet</td><td style="min-width:190px">Tags reviewed on key pages</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">12</td><td style="width:7em;min-width:0;white-space:nowrap">Rendering</td><td style="min-width:210px">Pricing, feature lists and FAQs in raw HTML</td><td style="min-width:190px">Text found with curl</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">13</td><td style="width:7em;min-width:0;white-space:nowrap">Rendering</td><td style="min-width:210px">Docs and changelog linked from main site</td><td style="min-width:190px">Internal links in place</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">14</td><td style="width:7em;min-width:0;white-space:nowrap">Entity</td><td style="min-width:210px">Same category description everywhere</td><td style="min-width:190px">Site, G2, LinkedIn, Crunchbase match</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">15</td><td style="width:7em;min-width:0;white-space:nowrap">Entity</td><td style="min-width:210px">Branded AI answers accurate</td><td style="min-width:190px">No wrong prices or features</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">16</td><td style="width:7em;min-width:0;white-space:nowrap">Sources</td><td style="min-width:210px">Review profiles and YouTube coverage current</td><td style="min-width:190px">Pricing correct; product named in videos</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">17</td><td style="width:7em;min-width:0;white-space:nowrap">Sources</td><td style="min-width:210px">Presence on top cited roundups checked</td><td style="min-width:190px">Gaps listed with owners</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">18</td><td style="width:7em;min-width:0;white-space:nowrap">Sources</td><td style="min-width:210px">Forums reviewed only where engines cite them</td><td style="min-width:190px">Based on Step 2 source list</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">19</td><td style="width:7em;min-width:0;white-space:nowrap">Structure</td><td style="min-width:210px">Each priority prompt maps to one page</td><td style="min-width:190px">Direct answer in first two sentences</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">20</td><td style="width:7em;min-width:0;white-space:nowrap">Structure</td><td style="min-width:210px">Schema matches visible text</td><td style="min-width:190px">Organization and FAQ validated</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">21</td><td style="width:7em;min-width:0;white-space:nowrap">Freshness</td><td style="min-width:210px">Visible update dates on key pages</td><td style="min-width:190px">Dates reflect real edits</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">22</td><td style="width:7em;min-width:0;white-space:nowrap">Measurement</td><td style="min-width:210px">Monthly rerun on the same prompts</td><td style="min-width:190px">Trend sheet updated</td></tr><tr><td style="width:2.5em;min-width:0;white-space:nowrap">23</td><td style="width:7em;min-width:0;white-space:nowrap">Measurement</td><td style="min-width:210px">Search Console and Bing AI Performance reviewed</td><td style="min-width:190px">First-party AI data noted</td></tr></tbody></table></div>
<h2 id="which-fixes-should-saas-teams-do-first">Which fixes should SaaS teams do first?</h2>
<p>Fix access blockers first, because nothing else works if crawlers cannot read your pages.</p>
<ol style="list-style:decimal;padding-left:1.4em">
<li><strong>Blockers:</strong> robots.txt, firewall rules, the Search Console AI setting, JavaScript-only pricing</li>
<li><strong>High-intent pages:</strong> pricing, comparisons, alternatives, use cases</li>
<li><strong>Accuracy:</strong> outdated descriptions on your site and review profiles</li>
<li><strong>Coverage:</strong> roundups, YouTube and the community sources engines cite for you</li>
<li><strong>Depth:</strong> guides and original data that support the rest</li>
</ol>
<h2 id="should-you-run-a-geo-audit-yourself-or-hire-an-agency">Should you run a GEO audit yourself or hire an agency?</h2>
<p>A small team can run a first GEO audit in-house with this checklist and a spreadsheet, which is often the right call for geo for saas startups working from a small set of prompts. An agency helps when you need monthly tracking across many engines, or outreach for third-party coverage your team cannot staff.</p>
<p>If you are comparing partners, our list of the <a href="https://www.nakama.in/journal/best-geo-agencies-for-saas">best GEO agencies for SaaS</a> covers what to look for, and our roundup of <a href="https://www.nakama.in/journal/best-generative-engine-optimization-agencies">generative engine optimization agencies</a> covers the broader market.</p>
<p>Nakama Growth is a Delhi-based GEO agency founded in 2026. It works with SaaS and AI companies such as Synup, HubEngage, Inventive AI and StarAgile. <strong><a href="https://www.nakama.in/contact">Book a GEO audit call with Nakama Growth</a></strong></p>
<h2 id="faq">FAQ</h2>
<h3 id="what-is-a-geo-audit">What is a GEO audit?</h3>
<p>A GEO audit is a structured check of how AI answer engines such as ChatGPT, Perplexity, Gemini, Copilot, Claude and Google AI Overviews mention, cite and describe your brand. It also checks whether AI crawlers can access your site and whether your key content is readable without JavaScript.</p>
<h3 id="how-long-does-a-geo-audit-for-saas-take">How long does a GEO audit for SaaS take?</h3>
<p>Size a GEO audit for SaaS by its captures: prompts times engines times runs. For example, 25 prompts across 5 engines at 7 runs each is 875 logged answers, before any technical or source checks. Plan time and tooling around that number.</p>
<h3 id="do-i-need-to-block-gptbot-to-protect-my-content">Do I need to block GPTBot to protect my content?</h3>
<p>That is a policy choice. OpenAI treats GPTBot (training) and OAI-SearchBot (ChatGPT search) as independent settings. Blocking GPTBot while allowing OAI-SearchBot keeps your pages eligible for ChatGPT search.</p>
<h3 id="do-i-need-special-schema-or-an-llms-txt-file-for-ai-overviews">Do I need special schema or an llms.txt file for AI Overviews?</h3>
<p>Google says no. Its guidance rules out AI text files such as llms.txt and special schema for its generative AI features. What you should verify is the Search Console opt-in for Search generative AI features, plus indexed key pages with snippets allowed.</p>
<h3 id="what-tools-help-with-a-geo-audit">What tools help with a GEO audit?</h3>
<p>A spreadsheet and manual prompt testing are enough for a first audit. Add Google Search Console's Generative AI performance report and Bing Webmaster Tools' AI Performance report for first-party data. Paid AI visibility tools can automate prompt tracking across engines once you know which prompts matter; our <a href="https://www.nakama.in/journal/peec-ai-alternatives">Peec AI alternatives</a> roundup compares them.</p>
<h2 id="about-the-author">About the author</h2>
<div class="author-box" id="yash-kumar">
<img src="/authors/yash-kumar-nakama-ceo.webp" srcset="/authors/yash-kumar-nakama-ceo.webp 400w, /authors/yash-kumar-nakama-ceo-800.webp 800w" sizes="96px" alt="Yash Kumar, Co-founder and CEO of Nakama Growth" width="96" height="96" loading="lazy" decoding="async">
<div class="author-box-text">
<p><a href="https://www.nakama.in/authors/yash-kumar" rel="author">Yash Kumar</a> is Co-founder and CEO of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask ChatGPT, Perplexity, Gemini and Google AI Overviews what to choose. He leads Nakama's work on earning mentions on the sources those tools read.</p>
</div>
</div>`;

export const geoAuditArticle: Article = {
 slug: 'geo-audit',
 category: 'Guide',
 title: "GEO audit: how to check your SaaS brand's AI visibility (2026)",
 description: "Run a GEO audit in six steps: test buyer prompts in ChatGPT, Perplexity, Gemini, Claude and AI Overviews, then fix crawler, content and source gaps.",
 readTime: '11 min read',
 motif: 'guide',
 metaTitle: "GEO audit: how to check your SaaS brand's AI visibility",
 date: dayOf(PUBLISHED_AT),
 publishedAt: PUBLISHED_AT,
 authorName: 'Yash Kumar',
 coverImage: {src: '/journal/geo-audit/geo-audit-hero.png', width: 1200, height: 630},
 ogImage: {
  url: 'https://www.nakama.in/journal/geo-audit/geo-audit-og.png',
  width: 1200,
  height: 630,
  alt: "GEO audit for SaaS: six steps to check AI visibility, from Nakama Growth",
  type: 'image/png',
 },
 jsonLd: geoAuditJsonLd,
 bodyHtml,
 sections: [
 {
  "heading": "Introduction",
  "paragraphs": [
   "GEO audit: how to check your SaaS brand's AI visibility (2026)",
   `Updated ${modifiedDate}`,
   "By Yash Kumar, Co-founder and CEO, Nakama Growth",
   "A GEO audit is a structured check of whether AI answer engines can find, describe and recommend your brand. For a SaaS company, that means testing real buyer prompts in ChatGPT, Perplexity, Google AI Overviews, Gemini, Copilot and Claude, then fixing what blocks you: crawler access, JavaScript-only pages, thin third-party coverage and stale facts.",
   "This guide gives you the full GEO audit for SaaS teams in six steps, plus a copyable checklist, so you can measure AI search visibility for SaaS buyers the same way every month."
  ]
 },
 {
  "heading": "Key facts before you start",
  "paragraphs": [
   "ChatGPT search depends on one crawler. Per OpenAI's crawler docs, blocking OAI-SearchBot removes a site from ChatGPT's search answers, leaving it reachable only as a plain navigation link ( OpenAI ).",
   "Google needs indexing plus one setting. Pages need to sit in Google's index with snippets allowed, and Google's optimization guide also requires the site to stay opted in to \"Search generative AI features\" inside Search Console ( Google ).",
   "Off-site mentions matter most for Google. In an Ahrefs study of 75,000 brands (May 2025), branded web mentions correlated with AI Overview visibility at 0.664, against 0.218 for backlinks ( Ahrefs ).",
   "Bing now reports AI citations. Since a public preview announced on 10 Feb 2026, Bing Webmaster Tools' AI Performance report shows how often your pages are cited in Microsoft Copilot and Bing AI summaries ( Bing ).",
   "The Ahrefs studies cited here measure correlation. They show patterns and cannot prove cause."
  ]
 },
 {
  "heading": "What is a GEO audit?",
  "paragraphs": [
   "A GEO audit measures your LLM visibility, meaning how generative engines treat your brand today, and lists the fixes that would improve it. It covers four layers: whether AI tools mention you, whether they cite your pages, whether what they say is accurate, and whether crawlers can read your site at all.",
   "GEO stands for generative engine optimization. For the background on how it relates to SEO and AEO, read our guide to AEO vs SEO vs GEO ."
  ]
 },
 {
  "heading": "Why does a GEO audit for SaaS need its own process?",
  "paragraphs": [
   "SaaS sites break AI visibility in specific ways: pricing loads through JavaScript, docs live on subdomains, trial pages are blocked, and buyers compare tools on G2 and YouTube before they visit your site. Buying is also comparison-heavy, so prompts like \"alternatives to [competitor]\" shape shortlists, and your audit must test exactly those."
  ]
 },
 {
  "heading": "Step 1: How do you build a buyer prompt set?",
  "paragraphs": [
   "Start with 20 to 30 prompts your buyers would actually type, grouped by stage: category discovery, comparison, alternatives, pricing and branded. Keep branded prompts in their own group, because AI tools usually know your name when asked directly. The useful signal is in unbranded prompts.",
   "Stage | Example prompt Discovery | What is the best customer support software for a 50-person SaaS team? Comparison | Is [your brand] or [competitor] better for startups? Alternatives | What are the best alternatives to [competitor]? Pricing | How much does [your brand] cost per seat? Branded | What does [your brand] do?",
   "Freeze this list. If you change prompts between audits, you cannot tell whether visibility moved or the test moved."
  ]
 },
 {
  "heading": "Step 2: How do you test prompts across AI engines?",
  "paragraphs": [
   "Ask every prompt seven or more times on each engine, in fresh sessions with no chat history (logged out where the engine allows it), and record the date of every run. Report each engine on its own line with run counts, such as \"named in 2 of 7 ChatGPT runs, 14 to 21 Oct 2026\". Never add engines together into one score.",
   "The reason is variance. In a 2026 University of St. Gallen study, only 34% to 42% of cited sources overlapped from one day to the next, and the authors set seven daily repeats of each prompt as the minimum for tracking brands ( Schulte et al. ). The study used Swiss-German prompts and suggests at least 8 runs when you track cited sources, so treat 7 as a floor.",
   "For each run, log six fields: whether your brand is mentioned , whether it is recommended , whether your URL is cited , whether price and features are accurate , which competitors appear, and which source domains the engine cites. For an example of the output this step should produce, see our post on what a useful visibility report shows ."
  ]
 },
 {
  "heading": "How do I track Google AI Overviews?",
  "paragraphs": [
   "Search each prompt in Google and record whether an AI Overview appears at all. Many queries show none: a study of 55,393 trending Google queries (March to April 2026) found AI Overviews on 13.7% overall and 64.7% of question-form queries ( Xu et al. ). Log \"no overview\" as its own outcome.",
   "Because Google can use \"query fan-out\" to build one answer from several searches, a page on a narrow subtopic can earn a citation on a broad prompt ( Google )."
  ]
 },
 {
  "heading": "How do I check Perplexity, Gemini, Copilot and Claude?",
  "paragraphs": [
   "Run the same prompts the same number of times on each, and record sources wherever the engine shows them. Expect different results per engine. Ahrefs found branded web mentions correlate far less with Perplexity (0.30) and ChatGPT (0.15) visibility, measured across the top 50 domains in each ( Ahrefs, Jul 2025 )."
  ]
 },
 {
  "heading": "Is a citation proof that the page supports the answer?",
  "paragraphs": [
   "No. Check the cited page yourself. In the same AI Overviews study, 11.0% of 98,020 claims were unsupported by the pages cited for them ( Xu et al. ). If an engine cites your page for a wrong claim, log it as an accuracy issue."
  ]
 },
 {
  "heading": "Step 3: Which AI crawlers should I allow?",
  "paragraphs": [
   "Allow the search crawlers for every engine you want to appear in, and decide the training crawlers by policy. Then confirm in your robots.txt and your CDN or firewall rules that those crawlers get a 200 response on key pages. One blanket bot rule can remove you from ChatGPT, Perplexity or Claude search.",
   "Crawler | Owner | What it does | Audit check OAI-SearchBot | OpenAI | Surfaces sites in ChatGPT search | Allowed in robots.txt and firewall GPTBot | OpenAI | Crawls content that may train models | Matches your training policy ChatGPT-User | OpenAI | Visits a page on a user's request | User-triggered; robots.txt may not apply PerplexityBot | Perplexity | Surfaces and links sites in Perplexity search | Allowed in robots.txt and firewall Perplexity-User | Perplexity | Fetches pages for user questions | User-triggered; generally ignores robots.txt Claude-SearchBot | Anthropic | Indexes content to improve Claude search results | Allowed in robots.txt ClaudeBot | Anthropic | Gathers pages that could feed model training | Matches your training policy Claude-User | Anthropic | Retrieves pages when a Claude user asks | Allowed if you want user-directed visibility Google-Extended | Google | Robots.txt token for AI training and grounding in Google systems outside Search | Matches your policy; it does not control AI Overviews",
   "Sources: OpenAI , Perplexity , Anthropic , Google .",
   "Anthropic warns that disabling Claude-SearchBot may reduce your visibility in Claude search results. If your SaaS site sits behind Cloudflare or AWS WAF, check firewall logs for blocked requests from these agents and verify them against each vendor's published IP lists.",
   "For Google, open Search Console Settings and confirm the site is opted in to Search generative AI features. Then look for stray nosnippet or max-snippet tags, which Google lists as controls that limit what appears in AI features."
  ]
 },
 {
  "heading": "Step 4: Is your key SaaS content visible without JavaScript?",
  "paragraphs": [
   "View the raw HTML of your homepage, pricing, feature and comparison pages, or run curl on each URL and search the output for your plan prices. If prices, plan names, feature lists or FAQs only appear after JavaScript runs, some AI crawlers may never see them. Server-render or pre-render anything you want quoted.",
   "Google recommends keeping important content available in textual form ( Google ). For SaaS, the usual culprits are:",
   "Pricing toggles (monthly or annual) that inject numbers with JavaScript",
   "Feature comparison grids built as interactive widgets",
   "Docs and changelogs on a separate subdomain with weak internal links"
  ]
 },
 {
  "heading": "Step 5: Which sources do AI engines cite for my category?",
  "paragraphs": [
   "List the domains the engines cited in Step 2 for prompts where you lost. Then check whether your brand appears on those pages, and whether the description matches your current product. Third-party coverage is often the largest gap the audit finds.",
   "The off-site sources to check for a SaaS brand:",
   "Review platforms: G2, Capterra and TrustRadius profiles, with current pricing and categories",
   "YouTube: demos, tutorials and comparison videos that name your product",
   "Roundups: \"best X tools\" listicles that engines cite repeatedly",
   "Profiles: LinkedIn, Crunchbase and your about page, with one consistent category description",
   "Reddit and forums: check these only if Step 2 shows an engine citing them for your prompts, since citation sources differ by engine",
   "In a December 2025 Ahrefs study, YouTube mentions had the strongest correlation with AI visibility (about 0.737), while a site's page count showed almost none (about 0.194) ( Ahrefs ). Fix wrong facts at the source: if G2 shows last year's pricing, AI answers may repeat it."
  ]
 },
 {
  "heading": "Step 6: Is your content structured and fresh enough to be cited?",
  "paragraphs": [
   "Check that each priority prompt maps to one page that answers it in the first two sentences, with question-style headings, a visible update date that reflects real edits, and specific numbers with a named source. Add Organization schema with correct sameAs links as hygiene, and use FAQ markup only where it matches the visible text word for word.",
   "As a working guideline, keep each heading's lead answer between 40 and 60 words. Google states structured data isn't required for its generative AI features ( Google ), so answers and facts carry the weight. For ChatGPT-specific tactics, read our guide on how to rank in ChatGPT ."
  ]
 },
 {
  "heading": "How do you measure results over time?",
  "paragraphs": [
   "Rerun the same frozen prompt set on the same engines every month, with the same run count, and compare mention, recommendation and citation rates against your baseline. Keep visibility metrics and pipeline metrics in separate columns.",
   "For first-party data, use Google Search Console's Generative AI performance report, which Google recommends for seeing how content performs in its AI features ( Google ), and Bing's AI Performance report, which shows total citations, cited pages, grounding queries and page-level activity across Copilot and Bing AI summaries ( Bing ). Treat these counts as directional; the report is still in preview. Our roundup of Peec AI alternatives compares paid trackers."
  ]
 },
 {
  "heading": "The GEO audit checklist",
  "paragraphs": [
   "Copy this into a sheet and add Pass/Fail, Owner and Due columns.",
   "# | Area | Check | Pass if 1 | Prompts | 20 to 30 buyer prompts, grouped by stage | Branded prompts kept separate 2 | Prompts | Prompt list frozen for repeat audits | Same list used each month 3 | Testing | At least 7 dated runs per prompt per engine | Run counts and dates logged 4 | Testing | ChatGPT, Perplexity, AI Overviews, Gemini, Copilot, Claude covered | Each engine reported separately 5 | Testing | Mentions, recommendations, citations and cited domains logged | Separate columns; cited pages checked against claims 6 | Access | OAI-SearchBot, PerplexityBot and Claude-SearchBot allowed | No disallow on key pages 7 | Access | GPTBot, ClaudeBot and Google-Extended rules match training policy | Decision documented 8 | Access | CDN and WAF let AI crawlers through | 200 responses in logs 9 | Access | Key pages indexed in Google and Bing | Confirmed in Search Console and Bing Webmaster Tools 10 | Access | Search generative AI features opt-in on | Checked in Search Console 11 | Access | No accidental nosnippet or max-snippet | Tags reviewed on key pages 12 | Rendering | Pricing, feature lists and FAQs in raw HTML | Text found with curl 13 | Rendering | Docs and changelog linked from main site | Internal links in place 14 | Entity | Same category description everywhere | Site, G2, LinkedIn, Crunchbase match 15 | Entity | Branded AI answers accurate | No wrong prices or features 16 | Sources | Review profiles and YouTube coverage current | Pricing correct; product named in videos 17 | Sources | Presence on top cited roundups checked | Gaps listed with owners 18 | Sources | Forums reviewed only where engines cite them | Based on Step 2 source list 19 | Structure | Each priority prompt maps to one page | Direct answer in first two sentences 20 | Structure | Schema matches visible text | Organization and FAQ validated 21 | Freshness | Visible update dates on key pages | Dates reflect real edits 22 | Measurement | Monthly rerun on the same prompts | Trend sheet updated 23 | Measurement | Search Console and Bing AI Performance reviewed | First-party AI data noted"
  ]
 },
 {
  "heading": "Which fixes should SaaS teams do first?",
  "paragraphs": [
   "Fix access blockers first, because nothing else works if crawlers cannot read your pages.",
   "Blockers: robots.txt, firewall rules, the Search Console AI setting, JavaScript-only pricing",
   "High-intent pages: pricing, comparisons, alternatives, use cases",
   "Accuracy: outdated descriptions on your site and review profiles",
   "Coverage: roundups, YouTube and the community sources engines cite for you",
   "Depth: guides and original data that support the rest"
  ]
 },
 {
  "heading": "Should you run a GEO audit yourself or hire an agency?",
  "paragraphs": [
   "A small team can run a first GEO audit in-house with this checklist and a spreadsheet, which is often the right call for geo for saas startups working from a small set of prompts. An agency helps when you need monthly tracking across many engines, or outreach for third-party coverage your team cannot staff.",
   "If you are comparing partners, our list of the best GEO agencies for SaaS covers what to look for, and our roundup of generative engine optimization agencies covers the broader market.",
   "Nakama Growth is a Delhi-based GEO agency founded in 2026. It works with SaaS and AI companies such as Synup, HubEngage, Inventive AI and StarAgile. Book a GEO audit call with Nakama Growth"
  ]
 },
 {
  "heading": "FAQ",
  "paragraphs": [
   
  ]
 },
 {
  "heading": "What is a GEO audit?",
  "paragraphs": [
   "A GEO audit is a structured check of how AI answer engines such as ChatGPT, Perplexity, Gemini, Copilot, Claude and Google AI Overviews mention, cite and describe your brand. It also checks whether AI crawlers can access your site and whether your key content is readable without JavaScript."
  ]
 },
 {
  "heading": "How long does a GEO audit for SaaS take?",
  "paragraphs": [
   "Size a GEO audit for SaaS by its captures: prompts times engines times runs. For example, 25 prompts across 5 engines at 7 runs each is 875 logged answers, before any technical or source checks. Plan time and tooling around that number."
  ]
 },
 {
  "heading": "Do I need to block GPTBot to protect my content?",
  "paragraphs": [
   "That is a policy choice. OpenAI treats GPTBot (training) and OAI-SearchBot (ChatGPT search) as independent settings. Blocking GPTBot while allowing OAI-SearchBot keeps your pages eligible for ChatGPT search."
  ]
 },
 {
  "heading": "Do I need special schema or an llms.txt file for AI Overviews?",
  "paragraphs": [
   "Google says no. Its guidance rules out AI text files such as llms.txt and special schema for its generative AI features. What you should verify is the Search Console opt-in for Search generative AI features, plus indexed key pages with snippets allowed."
  ]
 },
 {
  "heading": "What tools help with a GEO audit?",
  "paragraphs": [
   "A spreadsheet and manual prompt testing are enough for a first audit. Add Google Search Console's Generative AI performance report and Bing Webmaster Tools' AI Performance report for first-party data. Paid AI visibility tools can automate prompt tracking across engines once you know which prompts matter; our Peec AI alternatives roundup compares them."
  ]
 },
 {
  "heading": "About the author",
  "paragraphs": [
   "Yash Kumar is Co-founder and CEO of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask ChatGPT, Perplexity, Gemini and Google AI Overviews what to choose. He leads Nakama's work on earning mentions on the sources those tools read."
  ]
 }
],
};
