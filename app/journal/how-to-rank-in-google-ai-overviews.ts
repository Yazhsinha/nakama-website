import type {Article} from './articles';

/**
 * PUBLISH TIME for this article. Set the real go-live time here at merge (ISO 8601 with +05:30).
 * It feeds datePublished and dateModified in the schema, og/article published and modified times,
 * the RSS pubDate, the sitemap lastmod (via `date`) and the visible "Last updated ..." line.
 * Update MODIFIED_AT together with the visible "Last updated" date on later edits.
 */
export const AI_OVERVIEWS_PUBLISHED_AT = '2026-10-22T21:00:31+05:30';
const PUBLISHED_AT = AI_OVERVIEWS_PUBLISHED_AT;
const MODIFIED_AT = PUBLISHED_AT;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayOf = (iso: string) => iso.slice(0, 10);
const shortDate = (iso: string) => `${Number(iso.slice(8, 10))} ${MONTHS[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;
const modifiedDate = shortDate(MODIFIED_AT);
const articleLd = {
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "BlogPosting",
   "@id": "https://www.nakama.in/journal/how-to-rank-in-google-ai-overviews#article",
   "headline": "How to rank in Google AI Overviews (2026)",
   "description": "How to rank in Google AI Overviews in 2026: what Google says, what the citation data shows, and the tactics that get pages cited.",
   "url": "https://www.nakama.in/journal/how-to-rank-in-google-ai-overviews",
   "mainEntityOfPage": "https://www.nakama.in/journal/how-to-rank-in-google-ai-overviews",
   "inLanguage": "en",
   "datePublished": PUBLISHED_AT,
   "dateModified": MODIFIED_AT,
   "author": {
    "@id": "https://www.nakama.in/authors/sandeep-kumar#person"
   },
   "publisher": {
    "@id": "https://www.nakama.in/#organization"
   },
   "image": "https://www.nakama.in/journal/how-to-rank-in-google-ai-overviews/ai-overviews-og.png"
  },
  {
   "@type": "Person",
   "@id": "https://www.nakama.in/authors/sandeep-kumar#person",
   "name": "Sandeep Kumar",
   "url": "https://www.nakama.in/authors/sandeep-kumar",
   "worksFor": {
    "@id": "https://www.nakama.in/#organization"
   },
   "jobTitle": "SEO and GEO Specialist",
   "image": "https://www.nakama.in/authors/sandeep-kumar-nakama-seo-geo-800.webp",
   "sameAs": [
    "https://www.linkedin.com/in/marketingbysandeep/"
   ]
  },
  {
   "@type": "BreadcrumbList",
   "@id": "https://www.nakama.in/journal/how-to-rank-in-google-ai-overviews#breadcrumb",
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
     "name": "How to rank in Google AI Overviews (2026)",
     "item": "https://www.nakama.in/journal/how-to-rank-in-google-ai-overviews"
    }
   ]
  },
  {
   "@type": "FAQPage",
   "@id": "https://www.nakama.in/journal/how-to-rank-in-google-ai-overviews#faq",
   "mainEntity": [
    {
     "@type": "Question",
     "name": "How to rank in Google AI Overviews?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "To rank in Google AI Overviews, make sure your page is indexed and eligible for a snippet, then answer the main question and its related sub-questions clearly near the top of each section. Support claims with sources, add original data, and earn mentions on third-party sites Google already cites."
     }
    },
    {
     "@type": "Question",
     "name": "Do you need special schema to appear in AI Overviews?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Google says there is no special schema.org structured data or AI text file needed to appear in AI Overviews or AI Mode. Structured data should still match the visible text on the page."
     }
    },
    {
     "@type": "Question",
     "name": "Does ranking in the top 10 guarantee an AI Overview citation?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Ahrefs found in March 2026 that about 38% of URLs cited in AI Overviews also ranked in the top 10 for the same query. Many citations come from pages that rank for related fan-out queries instead."
     }
    },
    {
     "@type": "Question",
     "name": "What is query fan-out in Google AI Mode?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Query fan-out is when Google issues multiple related searches across subtopics to build one AI response. Google says both AI Overviews and AI Mode may use it, which is why pages can be cited for queries they don't rank for."
     }
    },
    {
     "@type": "Question",
     "name": "Can you opt out of AI Overviews?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can limit what Google shows from your pages using nosnippet, data-nosnippet, max-snippet or noindex. Google says these preview controls apply to AI features in Search as well. Blocking Google-Extended does not remove you from AI Overviews. It applies to Gemini Apps and Vertex AI, and Google says it has no effect on Search."
     }
    },
    {
     "@type": "Question",
     "name": "How do you track AI Overview traffic?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "AI Overview and AI Mode traffic is counted in Search Console's Performance report under the Web search type, and Google's generative AI guide points to a Generative AI performance report as well. To track citations, sample your key queries several times on a schedule and record which URLs appear in the AI Overview."
     }
    }
   ]
  }
 ]
};

export const aiOverviewsJsonLd = [articleLd];

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">How to rank in Google AI Overviews (2026)</li></ol></nav>
<h1 id="how-to-rank-in-google-ai-overviews-2026">How to rank in Google AI Overviews (2026)</h1>
<p>Last updated: ${modifiedDate}</p>
<p>By <a href="https://www.nakama.in/authors/sandeep-kumar" rel="author">Sandeep Kumar</a>, SEO and GEO Specialist, Nakama Growth</p>
<figure><img src="/journal/how-to-rank-in-google-ai-overviews/ai-overviews-og.webp" alt="How to rank in Google AI Overviews, a 2026 guide by Nakama Growth" width="1200" height="630" fetchpriority="high" decoding="async"></figure>
<p>Here is how to rank in Google AI Overviews: your page must be indexed and eligible for a snippet. Then answer the main question and the sub-questions buyers ask next, each in a short self-contained passage, back claims with sources, publish facts no one else has, and earn mentions on the third-party sites Google already cites. Ranking and being cited are now two different jobs: Ahrefs found only about 38% of AI Overview citations also appear in the top 10 for the same query.</p>
<p>This guide is for marketing leads at tech, SaaS and AI companies. It covers what Google has actually said, what the 2025 and 2026 studies show, and where we at Nakama Growth think most advice on this topic goes wrong.</p>
<h2 id="the-short-version">The short version</h2>
<p>An AI Overview is the AI-generated summary Google shows above some search results, with links to the pages it drew from.</p>
<p>Google says there is no special trick. Everything past the basics is about making your page the easiest source to quote for the many sub-questions Google runs behind the scenes.</p>
<p>Here are the numbers worth knowing before you plan anything:</p>
<ul style="list-style:disc;padding-left:1.4em">
<li><strong>38% overlap.</strong> In a March 2026 study of 863,000 keyword SERPs and 4 million AI Overview URLs, Ahrefs found 37.9% of cited URLs appeared in the first 10 positions of the results page, counting ads, featured snippets and other blocks. Counting organic results only, the figure was 37.1%. In July 2025 the same team reported 76%, though it says the methods changed and the two numbers are not directly comparable.</li>
<li><strong>About 17%.</strong> BrightEdge reported in February 2026 that only about 17% of sources cited in AI Overviews also rank in the organic top 10, using its own tracked keyword set. For B2B Tech it was 22.6%. The method differs from Ahrefs, so treat the two as a range rather than a trend.</li>
<li><strong>CTR fell, then partly recovered.</strong> Seer Interactive's April 2026 update, covering 53 brands and 5.47 million queries, found organic CTR on queries with an AI Overview hit 1.3% in December 2025, then rose to 2.4% by February 2026. Seer warns against reading two months as a lasting recovery.</li>
<li><strong>Citation helps.</strong> On informational queries, being cited in the AI Overview came with 120% more organic clicks per impression than not being cited. Cited results still trailed queries with no AI Overview by 38%, and Seer cannot say the citation causes the lift.</li>
</ul>
<figure><img src="/journal/how-to-rank-in-google-ai-overviews/ai-overviews-ctr.webp" alt="Bar chart: organic CTR with AI Overviews rose from 1.3% to 2.4%, Seer Interactive" width="1600" height="900" loading="lazy" decoding="async"></figure>
<p>The takeaway: the click is smaller than it used to be, and the citation is where most of the remaining value sits.</p>
<h2 id="what-does-google-officially-say-about-ai-overviews">What does Google officially say about AI Overviews?</h2>
<p>Google says there are no extra requirements to appear in AI Overviews or AI Mode. A page must be indexed and eligible to show in Search with a snippet. Google also says you don't need new machine-readable files, AI text files or special schema. Standard SEO fundamentals and helpful, people-first content are the stated path.</p>
<p>That comes from Google Search Central's "AI features and your website" page. It lists the usual basics: allow crawling, use internal links, keep important content in text, and make sure structured data matches what is visible on the page.</p>
<p>Google also confirms that both AI Overviews and AI Mode may use a "query fan-out" technique, issuing multiple related searches across subtopics to build one response. Fan-out explains most of the citation data in this guide.</p>
<p>On 15 October 2026, Google said AI Overviews and AI Mode now show more inline links, placed higher in the answer, and that it is testing a top section with one or two official links for task queries.</p>
<p>One more detail people skip: Google says AI Overviews only show when its systems decide they add something beyond classic results, so they often don't trigger at all. Not every keyword is an AI Overview keyword.</p>
<h2 id="why-is-ranking-not-the-same-as-being-cited">Why is ranking not the same as being cited?</h2>
<p>Ranking means Google placed your page in the blue links for one query. Being cited means Gemini chose your page as a source for one part of a generated answer. AI Overviews pull from searches beyond the one the user typed, so pages outside the top 10 regularly get cited while top results get skipped.</p>
<p>Ahrefs puts it plainly in its 2026 update. Its read is that AI Overviews are relying less on the direct search results and more on the sources showing up in fan-out query SERPs. It also notes AI Overviews have run on Gemini 3 since January 2026.</p>
<p>The split is striking. In Ahrefs' organic-only test, 37.1% of cited URLs ranked in the top 10, 26.2% ranked 11 to 100, and 36.7% sat outside the top 100 entirely.</p>
<figure><img src="/journal/how-to-rank-in-google-ai-overviews/ai-overviews-citation-rank-split.webp" alt="Bar chart: 37.1% of AI Overview citations rank top 10, 36.7% outside top 100" width="1600" height="1000" loading="lazy" decoding="async"></figure>
<p>So a page can hold position 3 and never get quoted. Another page sitting at position 40 for the head term can get cited because it ranks well for one of the hidden sub-questions.</p>
<p>This is why we track citations and rankings as separate metrics at Nakama Growth. If you only report rankings, you can't see the gap.</p>
<h2 id="ai-overviews-vs-classic-rankings">AI Overviews vs classic rankings</h2>
<div class="article-table"><table><thead><tr><th scope="col"></th><th scope="col">Classic rankings</th><th scope="col">AI Overview citations</th></tr></thead><tbody><tr><td>What wins</td><td>The best page for one query</td><td>The clearest source for one sub-question</td></tr><tr><td>Unit of competition</td><td>The whole page</td><td>A passage, a table row, a definition</td></tr><tr><td>Query scope</td><td>The query the user typed</td><td>The typed query plus fan-out sub-queries</td></tr><tr><td>Top-10 overlap</td><td>100% by definition</td><td>About 38% (Ahrefs, 2026) to about 17% (BrightEdge, 2026)</td></tr><tr><td>Traffic pattern</td><td>Clicks scale with position</td><td>Lower CTR overall, higher CTR when cited (Seer, 2025 and 2026)</td></tr><tr><td>How to measure</td><td>Search Console position</td><td>Repeated sampling of priority queries, plus Search Console</td></tr><tr><td>Special markup needed</td><td>No</td><td>No, per Google</td></tr></tbody></table></div>
<h2 id="how-does-query-fan-out-change-your-content-strategy">How does query fan-out change your content strategy?</h2>
<figure><img src="/journal/how-to-rank-in-google-ai-overviews/ai-overviews-fan-out.webp" alt="Diagram: one query fans out into sub-questions, each source feeding one AI Overview" width="1600" height="1000" loading="lazy" decoding="async"></figure>
<p>Query fan-out means Google splits one question into several related searches, then assembles an answer from the best sources for each. For your content, that means covering the sub-questions a buyer would ask next, each with a clear, quotable answer, instead of writing one page aimed at one exact keyword.</p>
<p>Take a query like "best SOC 2 automation tool." The fan-out could easily touch pricing, integrations, audit timelines and how the tools differ. A page that answers each of those cleanly has several chances to be cited. A page that only lists ten logos has one.</p>
<p>We made a related case in <a href="https://www.nakama.in/journal/build-around-the-buyers-next-question">build around the buyer's next question</a>, and the same thinking runs through our piece on <a href="https://www.nakama.in/journal/how-to-rank-in-chatgpt">how to rank in ChatGPT</a>. Different assistants, same reward for pages that get ahead of the follow-up.</p>
<h2 id="are-fan-out-page-factories-a-good-idea">Are fan-out page factories a good idea?</h2>
<p>No. Spinning up hundreds of thin pages, one per guessed sub-query, is scaled content abuse under Google's spam policies. Google defines that as generating many pages mainly to manipulate rankings rather than help users, no matter whether AI or people made them. Its spam policy explicitly covers attempts to manipulate generative AI responses.</p>
<p>Google's guide to generative AI features is blunter still. Building separate pages for fan-out queries, mainly to game rankings or AI answers, breaks its rules on scaled content abuse.</p>
<p>Google's own examples of scaled abuse include using generative AI to create many pages without adding value, and stitching content from other pages together. A fan-out factory usually does both.</p>
<p>The risk is real. Google says sites that violate these policies may rank lower or not appear in results at all. If your pages drop out of Search, they drop out of AI Overviews too, since eligibility starts with being indexed.</p>
<p>The better move is fewer, deeper pages. One strong page that handles ten related questions well beats ten pages that each handle one badly.</p>
<h2 id="how-to-rank-in-google-ai-overviews-7-tactics-that-hold-up">How to rank in Google AI Overviews: 7 tactics that hold up</h2>
<p>To rank in Google AI Overviews, get the basics right first: indexable pages, snippet-eligible content and clean structure. Then write answer-first sections for the sub-questions buyers ask, back claims with sources, publish data nobody else has, and earn mentions on the third-party sites Google already cites.</p>
<h3 id="1-check-eligibility-before-anything-else">1. Check eligibility before anything else</h3>
<p>Confirm the page is indexed, crawlable in robots.txt and through your CDN, and free of nosnippet or a tight max-snippet setting. Google's docs say those preview controls limit what can show in AI features. Google's generative AI guide also says a site must be included in Search generative AI features in Search Console to be eligible, so check that setting.</p>
<h3 id="2-lead-every-section-with-the-answer">2. Lead every section with the answer</h3>
<p>Open each question-based heading with a direct answer in the first two sentences, then expand. Google says there is no need to split content into tiny pieces, so keep sections whole and readable. A short, self-contained answer is easier to quote. Make it obvious.</p>
<h3 id="3-map-the-sub-questions-then-cover-them-on-one-page">3. Map the sub-questions, then cover them on one page</h3>
<p>List the five to ten questions a buyer asks around your topic: what it is, what it costs, how it compares, who it suits, and what goes wrong. Cover them as clear sections. People Also Ask boxes are a free starting point.</p>
<h3 id="4-publish-something-only-you-can-say">4. Publish something only you can say</h3>
<p>Google's own guide asks for "non-commodity content", meaning expert or first-hand takes that go beyond common knowledge. Original data, real pricing ranges, customer benchmarks and honest weaknesses all qualify, and they give the model a reason to pick you over the dozens of other pages saying the same thing. This is our main bet at Nakama Growth: with fan-out, being the only source of a fact is worth more than being the tenth source of a common one.</p>
<h3 id="5-use-tables-for-comparisons">5. Use tables for comparisons</h3>
<p>Comparison queries are where AI answers do the most work. A clean table with consistent rows is easy to parse and easy to quote.</p>
<h3 id="6-keep-structured-data-honest">6. Keep structured data honest</h3>
<p>Google says no special schema is needed, but it does ask that structured data match the visible text. Use Article and FAQPage where they fit, and never mark up content the reader can't see.</p>
<h3 id="7-earn-citations-off-your-own-site">7. Earn citations off your own site</h3>
<p><a href="https://ahrefs.com/blog/ai-overview-citations-top-10/#nonranking-citations">Ahrefs found</a> that 18% of AI Overview citations that didn't rank in the top 100 came from YouTube. Reviews, community threads, videos and analyst coverage all feed the sources Gemini can pull from.</p>
<p>Off-site sources often carry much of the answer. When we sampled four "AI RFP software" queries twice each on 22 October 2026, every one of the 8 AI Overviews referenced Reddit, YouTube and Gartner alongside vendor pages. That is a small sample, so treat it as directional.</p>
<p>One caution for "best X" pages. Lily Ray's analysis of 100 B2B software queries, covered by Search Engine Land on 18 June 2026, found that when AI Overviews cited a brand's own self-ranked list, they left that brand out of the recommendation 69% of the time. Being cited is different from being chosen.</p>
<p>Google's generative AI guide warns that seeking inauthentic mentions isn't helpful. Earn real coverage instead of planting posts.</p>
<h2 id="tactic-effort-and-impact-at-a-glance">Tactic, effort and impact at a glance</h2>
<div class="article-table"><table><thead><tr><th scope="col">Tactic</th><th scope="col">Effort</th><th scope="col">Likely impact</th><th scope="col">Notes</th></tr></thead><tbody><tr><td>Fix indexing and snippet controls</td><td>Low</td><td>High if broken</td><td>Prerequisite, per Google</td></tr><tr><td>Answer-first sections</td><td>Low</td><td>Medium to high</td><td>Easy retrofit on existing pages</td></tr><tr><td>Sub-question coverage on one page</td><td>Medium</td><td>High</td><td>Matches fan-out behavior</td></tr><tr><td>Original data or pricing</td><td>High</td><td>High</td><td>Hardest to copy</td></tr><tr><td>Comparison tables</td><td>Low</td><td>Medium</td><td>Strong for "vs" and "best" queries</td></tr><tr><td>Honest structured data</td><td>Low</td><td>Low to medium</td><td>Hygiene only</td></tr><tr><td>Third-party mentions and video</td><td>High</td><td>Medium to high</td><td>Slow, but compounds</td></tr><tr><td>Fan-out page factory</td><td>Medium</td><td>Negative</td><td>Scaled content abuse risk</td></tr></tbody></table></div>
<h2 id="how-do-you-measure-ai-overview-visibility">How do you measure AI Overview visibility?</h2>
<p>Google's AI features page says AI Overview and AI Mode traffic is counted in the regular Performance report under the "Web" search type. Google's newer guide to generative AI features also points to a Generative AI performance report in Search Console. Check what your property shows before you rely on it. To see which pages get cited, sample your priority queries several times, record which URLs Google cites, and track citation share alongside rankings and clicks.</p>
<p>Google also says clicks from results pages with AI Overviews tend to be higher quality, with people spending more time on the site. So watch engagement and conversions alongside sessions.</p>
<p>AI Overviews change from run to run, so never judge from one search. We sample each priority query several times on the same day, log every cited domain, and repeat on a schedule.</p>
<p>Be careful with rank-tracker data from late September 2026 onward. Search Engine Roundtable reported on 12 October that third-party rank tracking was not fully working, and Search Engine Journal covered a Nozzle analysis on 14 October showing that the skewed results pages trackers received carried fewer AI Overviews. Tracker counts can understate presence.</p>
<p>If you'd rather use a tool for citation sampling, see our <a href="https://www.nakama.in/journal/peec-ai-alternatives">Peec AI alternatives</a> roundup. For the metrics worth reporting, see our note on <a href="https://www.nakama.in/journal/what-a-useful-visibility-report-shows">useful visibility reports</a>. Our <a href="https://www.nakama.in/journal/geo-audit">GEO audit</a> guide walks through the full method, and <a href="https://www.nakama.in/journal/aeo-vs-seo-vs-geo">AEO vs SEO vs GEO</a> covers how this fits with classic SEO.</p>
<h2 id="where-most-ai-overview-advice-goes-wrong">Where most AI Overview advice goes wrong</h2>
<p>Most top-ranking guides on this topic say the same five things: write good content, add schema, use E-E-A-T, add FAQs, be concise. None of that is wrong. It just isn't enough to win.</p>
<p>The data points somewhere else. If roughly six in ten citations come from outside the top 10, the real contest is in the sub-queries you aren't tracking. Teams that only optimize for the head term are working on a minority of the citation pool.</p>
<p>Our view at Nakama Growth: treat each important page as an answer bank for one buyer journey. Track citations as well as positions. Add facts no one else has. And skip anything that creates pages faster than you can make them useful.</p>
<h2 id="faq">FAQ</h2>
<h3 id="how-to-rank-in-google-ai-overviews">How to rank in Google AI Overviews?</h3>
<p>To rank in Google AI Overviews, make sure your page is indexed and eligible for a snippet, then answer the main question and its related sub-questions clearly near the top of each section. Support claims with sources, add original data, and earn mentions on third-party sites Google already cites.</p>
<h3 id="do-you-need-special-schema-to-appear-in-ai-overviews">Do you need special schema to appear in AI Overviews?</h3>
<p>No. Google says there is no special schema.org structured data or AI text file needed to appear in AI Overviews or AI Mode. Structured data should still match the visible text on the page.</p>
<h3 id="does-ranking-in-the-top-10-guarantee-an-ai-overview-citation">Does ranking in the top 10 guarantee an AI Overview citation?</h3>
<p>No. Ahrefs found in March 2026 that about 38% of URLs cited in AI Overviews also ranked in the top 10 for the same query. Many citations come from pages that rank for related fan-out queries instead.</p>
<h3 id="what-is-query-fan-out-in-google-ai-mode">What is query fan-out in Google AI Mode?</h3>
<p>Query fan-out is when Google issues multiple related searches across subtopics to build one AI response. Google says both AI Overviews and AI Mode may use it, which is why pages can be cited for queries they don't rank for.</p>
<h3 id="can-you-opt-out-of-ai-overviews">Can you opt out of AI Overviews?</h3>
<p>You can limit what Google shows from your pages using nosnippet, data-nosnippet, max-snippet or noindex. Google says these preview controls apply to AI features in Search as well. Blocking Google-Extended does not remove you from AI Overviews. It applies to Gemini Apps and Vertex AI, and Google says it has no effect on Search.</p>
<h3 id="how-do-you-track-ai-overview-traffic">How do you track AI Overview traffic?</h3>
<p>AI Overview and AI Mode traffic is counted in Search Console's Performance report under the Web search type, and Google's generative AI guide points to a Generative AI performance report as well. To track citations, sample your key queries several times on a schedule and record which URLs appear in the AI Overview.</p>
<h2 id="want-to-see-where-you-re-cited-today">Want to see where you're cited today?</h2>
<p>Most teams we talk to have never checked which of their pages Google actually quotes. If you'd like a clear picture of where you rank, where you're cited and where the gap is, <a href="https://www.nakama.in/contact">book a GEO audit call with Nakama Growth</a>. We'll walk you through what we find. No one can guarantee an AI Overview citation, and we won't.</p>
<h2 id="about-the-author">About the author</h2>
<div class="author-box" id="sandeep-kumar">
<img src="/authors/sandeep-kumar-nakama-seo-geo.webp" srcset="/authors/sandeep-kumar-nakama-seo-geo.webp 400w, /authors/sandeep-kumar-nakama-seo-geo-800.webp 800w" sizes="96px" alt="Sandeep, SEO and GEO Specialist at Nakama Growth" width="96" height="96" loading="lazy" decoding="async">
<div class="author-box-text">
<p><a href="https://www.nakama.in/authors/sandeep-kumar" rel="author">Sandeep Kumar</a> is an SEO and GEO Specialist at Nakama Growth in Delhi. He writes content built for AI answers: pages that answer a buyer's question in plain words, so ChatGPT, Perplexity and Google AI Overviews can quote them. His focus is B2B software comparison content that AI tools can pick up and cite.</p>
</div>
</div>`;

export const howToRankInGoogleAiOverviewsArticle: Article = {
 slug: 'how-to-rank-in-google-ai-overviews',
 category: 'Guide',
 title: "How to rank in Google AI Overviews (2026)",
 description: "How to rank in Google AI Overviews in 2026: what Google says, what the citation data shows, and the tactics that get pages cited.",
 readTime: '12 min read',
 motif: 'guide',
 metaTitle: "How to rank in Google AI Overviews (2026 guide) | Nakama Growth",
 date: dayOf(PUBLISHED_AT),
 publishedAt: PUBLISHED_AT,
 authorName: 'Sandeep Kumar',
 coverImage: {src: '/journal/how-to-rank-in-google-ai-overviews/ai-overviews-og.webp', width: 1200, height: 630},
 ogImage: {
  url: 'https://www.nakama.in/journal/how-to-rank-in-google-ai-overviews/ai-overviews-og.png',
  width: 1200,
  height: 630,
  alt: "How to rank in Google AI Overviews, a 2026 guide by Nakama Growth",
  type: 'image/png',
 },
 jsonLd: aiOverviewsJsonLd,
 bodyHtml,
 sections: [
 {
  "heading": "Introduction",
  "paragraphs": [
   "How to rank in Google AI Overviews (2026)",
   `Last updated: ${modifiedDate}`,
   "By Sandeep Kumar, SEO and GEO Specialist, Nakama Growth",
   "Here is how to rank in Google AI Overviews: your page must be indexed and eligible for a snippet. Then answer the main question and the sub-questions buyers ask next, each in a short self-contained passage, back claims with sources, publish facts no one else has, and earn mentions on the third-party sites Google already cites. Ranking and being cited are now two different jobs: Ahrefs found only about 38% of AI Overview citations also appear in the top 10 for the same query.",
   "This guide is for marketing leads at tech, SaaS and AI companies. It covers what Google has actually said, what the 2025 and 2026 studies show, and where we at Nakama Growth think most advice on this topic goes wrong."
  ]
 },
 {
  "heading": "The short version",
  "paragraphs": [
   "An AI Overview is the AI-generated summary Google shows above some search results, with links to the pages it drew from.",
   "Google says there is no special trick. Everything past the basics is about making your page the easiest source to quote for the many sub-questions Google runs behind the scenes.",
   "Here are the numbers worth knowing before you plan anything:",
   "38% overlap. In a March 2026 study of 863,000 keyword SERPs and 4 million AI Overview URLs, Ahrefs found 37.9% of cited URLs appeared in the first 10 positions of the results page, counting ads, featured snippets and other blocks. Counting organic results only, the figure was 37.1%. In July 2025 the same team reported 76%, though it says the methods changed and the two numbers are not directly comparable.",
   "About 17%. BrightEdge reported in February 2026 that only about 17% of sources cited in AI Overviews also rank in the organic top 10, using its own tracked keyword set. For B2B Tech it was 22.6%. The method differs from Ahrefs, so treat the two as a range rather than a trend.",
   "CTR fell, then partly recovered. Seer Interactive's April 2026 update, covering 53 brands and 5.47 million queries, found organic CTR on queries with an AI Overview hit 1.3% in December 2025, then rose to 2.4% by February 2026. Seer warns against reading two months as a lasting recovery.",
   "Citation helps. On informational queries, being cited in the AI Overview came with 120% more organic clicks per impression than not being cited. Cited results still trailed queries with no AI Overview by 38%, and Seer cannot say the citation causes the lift.",
   "The takeaway: the click is smaller than it used to be, and the citation is where most of the remaining value sits."
  ]
 },
 {
  "heading": "What does Google officially say about AI Overviews?",
  "paragraphs": [
   "Google says there are no extra requirements to appear in AI Overviews or AI Mode. A page must be indexed and eligible to show in Search with a snippet. Google also says you don't need new machine-readable files, AI text files or special schema. Standard SEO fundamentals and helpful, people-first content are the stated path.",
   "That comes from Google Search Central's \"AI features and your website\" page. It lists the usual basics: allow crawling, use internal links, keep important content in text, and make sure structured data matches what is visible on the page.",
   "Google also confirms that both AI Overviews and AI Mode may use a \"query fan-out\" technique, issuing multiple related searches across subtopics to build one response. Fan-out explains most of the citation data in this guide.",
   "On 15 October 2026, Google said AI Overviews and AI Mode now show more inline links, placed higher in the answer, and that it is testing a top section with one or two official links for task queries.",
   "One more detail people skip: Google says AI Overviews only show when its systems decide they add something beyond classic results, so they often don't trigger at all. Not every keyword is an AI Overview keyword."
  ]
 },
 {
  "heading": "Why is ranking not the same as being cited?",
  "paragraphs": [
   "Ranking means Google placed your page in the blue links for one query. Being cited means Gemini chose your page as a source for one part of a generated answer. AI Overviews pull from searches beyond the one the user typed, so pages outside the top 10 regularly get cited while top results get skipped.",
   "Ahrefs puts it plainly in its 2026 update. Its read is that AI Overviews are relying less on the direct search results and more on the sources showing up in fan-out query SERPs. It also notes AI Overviews have run on Gemini 3 since January 2026.",
   "The split is striking. In Ahrefs' organic-only test, 37.1% of cited URLs ranked in the top 10, 26.2% ranked 11 to 100, and 36.7% sat outside the top 100 entirely.",
   "So a page can hold position 3 and never get quoted. Another page sitting at position 40 for the head term can get cited because it ranks well for one of the hidden sub-questions.",
   "This is why we track citations and rankings as separate metrics at Nakama Growth. If you only report rankings, you can't see the gap."
  ]
 },
 {
  "heading": "AI Overviews vs classic rankings",
  "paragraphs": [
   "Classic rankings | AI Overview citations What wins | The best page for one query | The clearest source for one sub-question Unit of competition | The whole page | A passage, a table row, a definition Query scope | The query the user typed | The typed query plus fan-out sub-queries Top-10 overlap | 100% by definition | About 38% (Ahrefs, 2026) to about 17% (BrightEdge, 2026) Traffic pattern | Clicks scale with position | Lower CTR overall, higher CTR when cited (Seer, 2025 and 2026) How to measure | Search Console position | Repeated sampling of priority queries, plus Search Console Special markup needed | No | No, per Google"
  ]
 },
 {
  "heading": "How does query fan-out change your content strategy?",
  "paragraphs": [
   "Query fan-out means Google splits one question into several related searches, then assembles an answer from the best sources for each. For your content, that means covering the sub-questions a buyer would ask next, each with a clear, quotable answer, instead of writing one page aimed at one exact keyword.",
   "Take a query like \"best SOC 2 automation tool.\" The fan-out could easily touch pricing, integrations, audit timelines and how the tools differ. A page that answers each of those cleanly has several chances to be cited. A page that only lists ten logos has one.",
   "We made a related case in build around the buyer's next question, and the same thinking runs through our piece on how to rank in ChatGPT. Different assistants, same reward for pages that get ahead of the follow-up."
  ]
 },
 {
  "heading": "Are fan-out page factories a good idea?",
  "paragraphs": [
   "No. Spinning up hundreds of thin pages, one per guessed sub-query, is scaled content abuse under Google's spam policies. Google defines that as generating many pages mainly to manipulate rankings rather than help users, no matter whether AI or people made them. Its spam policy explicitly covers attempts to manipulate generative AI responses.",
   "Google's guide to generative AI features is blunter still. Building separate pages for fan-out queries, mainly to game rankings or AI answers, breaks its rules on scaled content abuse.",
   "Google's own examples of scaled abuse include using generative AI to create many pages without adding value, and stitching content from other pages together. A fan-out factory usually does both.",
   "The risk is real. Google says sites that violate these policies may rank lower or not appear in results at all. If your pages drop out of Search, they drop out of AI Overviews too, since eligibility starts with being indexed.",
   "The better move is fewer, deeper pages. One strong page that handles ten related questions well beats ten pages that each handle one badly."
  ]
 },
 {
  "heading": "How to rank in Google AI Overviews: 7 tactics that hold up",
  "paragraphs": [
   "To rank in Google AI Overviews, get the basics right first: indexable pages, snippet-eligible content and clean structure. Then write answer-first sections for the sub-questions buyers ask, back claims with sources, publish data nobody else has, and earn mentions on the third-party sites Google already cites."
  ]
 },
 {
  "heading": "1. Check eligibility before anything else",
  "paragraphs": [
   "Confirm the page is indexed, crawlable in robots.txt and through your CDN, and free of nosnippet or a tight max-snippet setting. Google's docs say those preview controls limit what can show in AI features. Google's generative AI guide also says a site must be included in Search generative AI features in Search Console to be eligible, so check that setting."
  ]
 },
 {
  "heading": "2. Lead every section with the answer",
  "paragraphs": [
   "Open each question-based heading with a direct answer in the first two sentences, then expand. Google says there is no need to split content into tiny pieces, so keep sections whole and readable. A short, self-contained answer is easier to quote. Make it obvious."
  ]
 },
 {
  "heading": "3. Map the sub-questions, then cover them on one page",
  "paragraphs": [
   "List the five to ten questions a buyer asks around your topic: what it is, what it costs, how it compares, who it suits, and what goes wrong. Cover them as clear sections. People Also Ask boxes are a free starting point."
  ]
 },
 {
  "heading": "4. Publish something only you can say",
  "paragraphs": [
   "Google's own guide asks for \"non-commodity content\", meaning expert or first-hand takes that go beyond common knowledge. Original data, real pricing ranges, customer benchmarks and honest weaknesses all qualify, and they give the model a reason to pick you over the dozens of other pages saying the same thing. This is our main bet at Nakama Growth: with fan-out, being the only source of a fact is worth more than being the tenth source of a common one."
  ]
 },
 {
  "heading": "5. Use tables for comparisons",
  "paragraphs": [
   "Comparison queries are where AI answers do the most work. A clean table with consistent rows is easy to parse and easy to quote."
  ]
 },
 {
  "heading": "6. Keep structured data honest",
  "paragraphs": [
   "Google says no special schema is needed, but it does ask that structured data match the visible text. Use Article and FAQPage where they fit, and never mark up content the reader can't see."
  ]
 },
 {
  "heading": "7. Earn citations off your own site",
  "paragraphs": [
   "Ahrefs found that 18% of AI Overview citations that didn't rank in the top 100 came from YouTube. Reviews, community threads, videos and analyst coverage all feed the sources Gemini can pull from.",
   "Off-site sources often carry much of the answer. When we sampled four \"AI RFP software\" queries twice each on 22 October 2026, every one of the 8 AI Overviews referenced Reddit, YouTube and Gartner alongside vendor pages. That is a small sample, so treat it as directional.",
   "One caution for \"best X\" pages. Lily Ray's analysis of 100 B2B software queries, covered by Search Engine Land on 18 June 2026, found that when AI Overviews cited a brand's own self-ranked list, they left that brand out of the recommendation 69% of the time. Being cited is different from being chosen.",
   "Google's generative AI guide warns that seeking inauthentic mentions isn't helpful. Earn real coverage instead of planting posts."
  ]
 },
 {
  "heading": "Tactic, effort and impact at a glance",
  "paragraphs": [
   "Tactic | Effort | Likely impact | Notes Fix indexing and snippet controls | Low | High if broken | Prerequisite, per Google Answer-first sections | Low | Medium to high | Easy retrofit on existing pages Sub-question coverage on one page | Medium | High | Matches fan-out behavior Original data or pricing | High | High | Hardest to copy Comparison tables | Low | Medium | Strong for \"vs\" and \"best\" queries Honest structured data | Low | Low to medium | Hygiene only Third-party mentions and video | High | Medium to high | Slow, but compounds Fan-out page factory | Medium | Negative | Scaled content abuse risk"
  ]
 },
 {
  "heading": "How do you measure AI Overview visibility?",
  "paragraphs": [
   "Google's AI features page says AI Overview and AI Mode traffic is counted in the regular Performance report under the \"Web\" search type. Google's newer guide to generative AI features also points to a Generative AI performance report in Search Console. Check what your property shows before you rely on it. To see which pages get cited, sample your priority queries several times, record which URLs Google cites, and track citation share alongside rankings and clicks.",
   "Google also says clicks from results pages with AI Overviews tend to be higher quality, with people spending more time on the site. So watch engagement and conversions alongside sessions.",
   "AI Overviews change from run to run, so never judge from one search. We sample each priority query several times on the same day, log every cited domain, and repeat on a schedule.",
   "Be careful with rank-tracker data from late September 2026 onward. Search Engine Roundtable reported on 12 October that third-party rank tracking was not fully working, and Search Engine Journal covered a Nozzle analysis on 14 October showing that the skewed results pages trackers received carried fewer AI Overviews. Tracker counts can understate presence.",
   "If you'd rather use a tool for citation sampling, see our Peec AI alternatives roundup. For the metrics worth reporting, see our note on useful visibility reports. Our GEO audit guide walks through the full method, and AEO vs SEO vs GEO covers how this fits with classic SEO."
  ]
 },
 {
  "heading": "Where most AI Overview advice goes wrong",
  "paragraphs": [
   "Most top-ranking guides on this topic say the same five things: write good content, add schema, use E-E-A-T, add FAQs, be concise. None of that is wrong. It just isn't enough to win.",
   "The data points somewhere else. If roughly six in ten citations come from outside the top 10, the real contest is in the sub-queries you aren't tracking. Teams that only optimize for the head term are working on a minority of the citation pool.",
   "Our view at Nakama Growth: treat each important page as an answer bank for one buyer journey. Track citations as well as positions. Add facts no one else has. And skip anything that creates pages faster than you can make them useful."
  ]
 },
 {
  "heading": "FAQ",
  "paragraphs": []
 },
 {
  "heading": "How to rank in Google AI Overviews?",
  "paragraphs": [
   "To rank in Google AI Overviews, make sure your page is indexed and eligible for a snippet, then answer the main question and its related sub-questions clearly near the top of each section. Support claims with sources, add original data, and earn mentions on third-party sites Google already cites."
  ]
 },
 {
  "heading": "Do you need special schema to appear in AI Overviews?",
  "paragraphs": [
   "No. Google says there is no special schema.org structured data or AI text file needed to appear in AI Overviews or AI Mode. Structured data should still match the visible text on the page."
  ]
 },
 {
  "heading": "Does ranking in the top 10 guarantee an AI Overview citation?",
  "paragraphs": [
   "No. Ahrefs found in March 2026 that about 38% of URLs cited in AI Overviews also ranked in the top 10 for the same query. Many citations come from pages that rank for related fan-out queries instead."
  ]
 },
 {
  "heading": "What is query fan-out in Google AI Mode?",
  "paragraphs": [
   "Query fan-out is when Google issues multiple related searches across subtopics to build one AI response. Google says both AI Overviews and AI Mode may use it, which is why pages can be cited for queries they don't rank for."
  ]
 },
 {
  "heading": "Can you opt out of AI Overviews?",
  "paragraphs": [
   "You can limit what Google shows from your pages using nosnippet, data-nosnippet, max-snippet or noindex. Google says these preview controls apply to AI features in Search as well. Blocking Google-Extended does not remove you from AI Overviews. It applies to Gemini Apps and Vertex AI, and Google says it has no effect on Search."
  ]
 },
 {
  "heading": "How do you track AI Overview traffic?",
  "paragraphs": [
   "AI Overview and AI Mode traffic is counted in Search Console's Performance report under the Web search type, and Google's generative AI guide points to a Generative AI performance report as well. To track citations, sample your key queries several times on a schedule and record which URLs appear in the AI Overview."
  ]
 },
 {
  "heading": "Want to see where you're cited today?",
  "paragraphs": [
   "Most teams we talk to have never checked which of their pages Google actually quotes. If you'd like a clear picture of where you rank, where you're cited and where the gap is, book a GEO audit call with Nakama Growth. We'll walk you through what we find. No one can guarantee an AI Overview citation, and we won't."
  ]
 },
 {
  "heading": "About the author",
  "paragraphs": [
   "Sandeep Kumar is an SEO and GEO Specialist at Nakama Growth in Delhi. He writes content built for AI answers: pages that answer a buyer's question in plain words, so ChatGPT, Perplexity and Google AI Overviews can quote them. His focus is B2B software comparison content that AI tools can pick up and cite."
  ]
 }
],
};
