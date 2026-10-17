import type {Article} from './articles';

/**
 * PUBLISH TIME for this article. Set the real go-live time here at merge (ISO 8601 with +05:30).
 * It feeds datePublished and dateModified in the schema, og/article published and modified times,
 * the RSS pubDate, the sitemap lastmod (via `date`) and the visible "Published ... Last updated ..." line.
 * Update MODIFIED_AT together with the visible "Last updated" date on later edits.
 */
export const HOW_TO_RANK_IN_CHATGPT_PUBLISHED_AT = '2026-10-17T18:12:57+05:30';
const PUBLISHED_AT = HOW_TO_RANK_IN_CHATGPT_PUBLISHED_AT;
const MODIFIED_AT = PUBLISHED_AT;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayOf = (iso: string) => iso.slice(0, 10);
const shortDate = (iso: string) => `${Number(iso.slice(8, 10))} ${MONTHS[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;
const publishedDate = shortDate(PUBLISHED_AT);
const modifiedDate = shortDate(MODIFIED_AT);
const articleLd = {
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "Article",
   "@id": "https://www.nakama.in/journal/how-to-rank-in-chatgpt#article",
   "headline": "How to rank in ChatGPT (and get cited): what works in 2026",
   "description": "How to rank in ChatGPT and get cited: what works in 2026, ranked by evidence, with a table of what to do first. Updated Oct 2026.",
   "image": [
    "https://www.nakama.in/journal/how-to-rank-in-chatgpt/how-to-rank-in-chatgpt-hero.png",
    "https://www.nakama.in/journal/how-to-rank-in-chatgpt/how-to-rank-in-chatgpt-hero-1x1.png",
    "https://www.nakama.in/journal/how-to-rank-in-chatgpt/how-to-rank-in-chatgpt-hero-4x3.png"
   ],
   "datePublished": PUBLISHED_AT,
   "dateModified": MODIFIED_AT,
   "inLanguage": "en-US",
   "articleSection": "Answer engine optimization",
   "keywords": "how to rank in chatgpt, chatgpt seo, how to get cited by chatgpt, how to optimize for chatgpt, how to appear in chatgpt, how to get recommended by chatgpt, how to track brand mentions in chatgpt",
   "author": {
    "@id": "https://www.nakama.in/authors/snehil-srivastava#person"
   },
   "publisher": {
    "@id": "https://www.nakama.in/#organization"
   },
   "mainEntityOfPage": {
    "@id": "https://www.nakama.in/journal/how-to-rank-in-chatgpt#webpage"
   },
   "url": "https://www.nakama.in/journal/how-to-rank-in-chatgpt",
   "isPartOf": {
    "@id": "https://www.nakama.in/#website"
   }
  },
  {
   "@type": "Person",
   "@id": "https://www.nakama.in/authors/snehil-srivastava#person",
   "name": "Snehil Srivastava",
   "jobTitle": "CEO & Creative Director",
   "url": "https://www.nakama.in/authors/snehil-srivastava",
   "worksFor": {
    "@id": "https://www.nakama.in/#organization"
   },
   "description": "Snehil Srivastava is CEO and Creative Director of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask AI tools what to choose. He is a creative strategist and content lead. He has spent multiple years building brands.",
   "sameAs": [
    "https://www.linkedin.com/in/snehil-srivastava-356739175/"
   ]
  },
  {
   "@type": "WebPage",
   "@id": "https://www.nakama.in/journal/how-to-rank-in-chatgpt#webpage",
   "url": "https://www.nakama.in/journal/how-to-rank-in-chatgpt",
   "name": "How to rank in ChatGPT (and get cited): what works in 2026",
   "description": "How to rank in ChatGPT and get cited: what works in 2026, ranked by evidence, with a table of what to do first. Updated Oct 2026.",
   "inLanguage": "en-US",
   "isPartOf": {
    "@id": "https://www.nakama.in/#website"
   },
   "publisher": {
    "@id": "https://www.nakama.in/#organization"
   },
   "mainEntity": {
    "@id": "https://www.nakama.in/journal/how-to-rank-in-chatgpt#article"
   },
   "primaryImageOfPage": {
    "@id": "https://www.nakama.in/journal/how-to-rank-in-chatgpt#primaryimage"
   },
   "breadcrumb": {
    "@id": "https://www.nakama.in/journal/how-to-rank-in-chatgpt#breadcrumb"
   },
   "datePublished": PUBLISHED_AT,
   "dateModified": MODIFIED_AT
  },
  {
   "@type": "ImageObject",
   "@id": "https://www.nakama.in/journal/how-to-rank-in-chatgpt#primaryimage",
   "url": "https://www.nakama.in/journal/how-to-rank-in-chatgpt/how-to-rank-in-chatgpt-hero.png",
   "contentUrl": "https://www.nakama.in/journal/how-to-rank-in-chatgpt/how-to-rank-in-chatgpt-hero.png",
   "width": 1600,
   "height": 900,
   "caption": "Graded list of ChatGPT citation tactics with evidence labels on a dark Nakama background"
  },
  {
   "@type": "ImageObject",
   "@id": "https://www.nakama.in/journal/how-to-rank-in-chatgpt#ogimage",
   "url": "https://www.nakama.in/journal/how-to-rank-in-chatgpt/how-to-rank-in-chatgpt-og.png",
   "contentUrl": "https://www.nakama.in/journal/how-to-rank-in-chatgpt/how-to-rank-in-chatgpt-og.png",
   "width": 1200,
   "height": 630,
   "caption": "How to rank in ChatGPT and get cited, tactics graded by evidence, Nakama journal"
  }
 ]
};

const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "@id": "https://www.nakama.in/journal/how-to-rank-in-chatgpt#breadcrumb",
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
   "name": "How to rank in ChatGPT (and get cited): what works in 2026",
   "item": "https://www.nakama.in/journal/how-to-rank-in-chatgpt"
  }
 ]
};

const faqLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "@id": "https://www.nakama.in/journal/how-to-rank-in-chatgpt#faq",
 "mainEntity": [
  {
   "@type": "Question",
   "name": "What does ChatGPT SEO mean?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "ChatGPT SEO is the search work that lets ChatGPT's own search reach, understand and cite your pages. It covers OAI-SearchBot access, pages that match how buyers phrase questions, facts in plain text and mentions on other sites. Google describes the same kind of work for its own AI features as SEO."
   }
  },
  {
   "@type": "Question",
   "name": "Can you rank in ChatGPT?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Ranking in ChatGPT has no fixed positions, since ChatGPT writes a new answer each time and the brands and sources it uses change between runs. What you can raise is how often your brand is named and your pages are cited across many runs of the same buyer questions."
   }
  },
  {
   "@type": "Question",
   "name": "Does ranking in Google get you cited by ChatGPT?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Ranking in Google rarely gets you cited by ChatGPT on its own. In the API replay of a 2026 University of Toronto preprint, 97% of the pages ChatGPT retrieved were absent from Google's top 50 for the same searches, though about half came from websites that did appear there."
   }
  },
  {
   "@type": "Question",
   "name": "Which OpenAI crawler controls ChatGPT search?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "OAI-SearchBot is the OpenAI crawler that controls ChatGPT search. Per OpenAI's crawler docs, opting out of it keeps a site out of ChatGPT search answers, apart from navigational links. GPTBot is a separate training crawler, so one robots.txt file can disallow GPTBot and still allow OAI-SearchBot."
   }
  },
  {
   "@type": "Question",
   "name": "How many times should I run a prompt?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Each prompt should run at least seven times per day for a stable per-brand rate, and eight when source coverage matters. A University of St. Gallen preprint derived both numbers from ten simultaneous runs per prompt, using Swiss-German prompts in early 2026. Even seven runs only separate large gaps between brands."
   }
  },
  {
   "@type": "Question",
   "name": "Why did ChatGPT referrals drop in GA4 in October 2026?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "ChatGPT referrals in GA4 fell from about 8 Oct 2026 after links in ChatGPT's answer text reportedly lost the utm_source=chatgpt.com tag, so some visits can appear as Direct. Adobe's Cedric Huesler says a fix began rolling out on 15 Oct. Annotate 8 to 15 Oct before comparing months."
   }
  },
  {
   "@type": "Question",
   "name": "How long until I appear in ChatGPT?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Appearing in ChatGPT has no promised timeline. OpenAI says robots.txt changes can take about 24 hours to take effect in search, but retrieval and citation depend on ChatGPT's own ranking, and OpenAI says placement is not guaranteed. A 2026 Toronto preprint also found cited pages drifting over weeks, so measure monthly."
   }
  }
 ]
};

export const howToRankInChatgptJsonLd = [articleLd, breadcrumbLd, faqLd];

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">How to rank in ChatGPT (and get cited): what works in 2026</li></ol></nav>
<h1 id="how-to-rank-in-chatgpt-and-get-cited-what-works-in-2026">How to rank in ChatGPT (and get cited): what works in 2026</h1>
<p>Published ${publishedDate}. Last updated ${modifiedDate}.</p>
<p>By <a href="https://www.nakama.in/authors/snehil-srivastava" rel="author">Snehil Srivastava</a>, CEO &amp; Creative Director, Nakama Growth</p>
<p>How to rank in ChatGPT starts with one fact: ChatGPT cites pages its own search retrieves, and a top Google position predicts little about which ones. Let OpenAI's search crawler in, answer the buyer's exact question in plain words, and earn other sites that name you.</p>
<figure><img src="/journal/how-to-rank-in-chatgpt/how-to-rank-in-chatgpt-hero.png" alt="Graded list of ChatGPT citation tactics with evidence labels on a dark Nakama background" width="1600" height="900" fetchpriority="high" decoding="async"></figure>
<blockquote>
<p><strong>TL;DR</strong></p>
<ul>
<li>"Ranking" in ChatGPT means being named or cited often across repeated runs of one question.</li>
<li>Blocking GPTBot leaves you in ChatGPT search; opting out of OAI-SearchBot removes you, apart from navigational links.</li>
<li>ChatGPT cited Reddit far less in 2026, though Google's AI Overviews still cited it in our 17 Oct test.</li>
</ul>
</blockquote>
<div class="article-table"><table>
<caption style="caption-side:top;text-align:left;color:#8e8a84;font-size:13px;line-height:1.5;padding:0 0 10px">ChatGPT citation tactics graded Documented (OpenAI or Google states it), Measured in a study, Practitioner report or Unproven (no evidence found); sources read 17 Oct 2026.</caption>
<thead><tr><th scope="col">Tactic and evidence grade</th><th scope="col">What the source measured</th><th scope="col">Source, date and data period</th><th scope="col">Effort</th></tr></thead>
<tbody>
<tr><th scope="row">Allow OAI-SearchBot in robots.txt and your CDN. Grade: Documented</th><td>OpenAI says sites opted out of OAI-SearchBot "will not be shown in ChatGPT search answers", apart from navigational links</td><td><a href="https://developers.openai.com/api/docs/bots">OpenAI crawler docs</a>, read 17 Oct 2026</td><td>Low</td></tr>
<tr><th scope="row">Match the best paragraph, then the title, to the buyer's question. Grade: Measured in a study</th><td>For ChatGPT, a closer best-paragraph match went with 9.5% more citations within a website; title match showed no effect</td><td><a href="https://arxiv.org/abs/2610.15033">arXiv 2610.15033</a>, 10 Oct 2026; 58,590 ChatGPT API answers, 24 Jun to 21 Sep 2026</td><td>Low</td></tr>
<tr><th scope="row">Earn third-party pages that name the brand. Grade: Measured in a study</th><td>In a small B2B software niche, ChatGPT answers citing a third-party page naming a vendor had 39.7 times the odds of naming it</td><td><a href="https://arxiv.org/abs/2610.15033">arXiv 2610.15033</a>, 10 Oct 2026; 55 questions, 14,850 API answers from all three engines (39.7 is ChatGPT's), 24 Jun to 21 Sep 2026</td><td>High</td></tr>
<tr><th scope="row">Publish official facts on plain pages. Grade: Measured in a study</th><td>ChatGPT cited an official source for 84.4% of factual questions on price, features or company details; the tactic itself is untested</td><td><a href="https://ahrefs.com/blog/query-fan-out-chatgpt/">Ahrefs</a>, 12 Oct 2026; 20,000 US prompts, model and dates not stated; vendor</td><td>Medium</td></tr>
<tr><th scope="row">Win coverage in listicles. Grade: Practitioner report</th><td>Listicles rose from 6.45% to 9.70% of ChatGPT's cited URLs after the switch to GPT-6; method not detailed</td><td><a href="https://www.linkedin.com/posts/davidkonitzny_chatgpt-has-a-new-default-model-gpt-6-activity-7514242273497391104-gvdt">David Konitzny, LinkedIn</a>, 9 Oct 2026; 2.2 million responses; author works at Peec AI, a vendor</td><td>High</td></tr>
<tr><th scope="row">Rely on Reddit for ChatGPT citations. Grade: Measured in a study</th><td>Reddit fell from about 1 in 5 ChatGPT answers in March 2026 to about 1 in 43 by late September</td><td><a href="https://ahrefs.com/blog/query-fan-out-chatgpt/">Ahrefs</a>, 12 Oct 2026; US, 2.4 to 3.8 million answers a month, March to September 2026; vendor</td><td>Medium</td></tr>
<tr><th scope="row">Rely on Reddit and YouTube for Google AI Overviews. Grade: Practitioner report</th><td>AI Overviews for two ChatGPT queries cited Reddit threads and YouTube clips in every run</td><td>Nakama check of Google results set to the US, fetched from India, 17 Oct 2026; 2 queries, 2 identical runs each</td><td>Medium</td></tr>
<tr><th scope="row">Add FAQ blocks or schema markup to get cited by ChatGPT. Grade: Measured in a study</th><td>Within one website, FAQ blocks went with 3.4% fewer ChatGPT, Gemini and Perplexity citations and schema 5.3% fewer, neither significant</td><td><a href="https://arxiv.org/abs/2610.15033">arXiv 2610.15033</a>, 143,249 API answers, 24 Jun to 21 Sep 2026</td><td>Low</td></tr>
<tr><th scope="row">Publish an llms.txt file for ChatGPT. Grade: Measured in a study</th><td>97% of llms.txt files on about 38,000 domains got zero requests in May 2026; no study we found links the file to ChatGPT citations</td><td><a href="https://ahrefs.com/blog/llmstxt-study/">Ahrefs</a>, 15 Jun 2026; 137,210 domains, 28% publish the file; vendor</td><td>Low</td></tr>
<tr><th scope="row">Get pages indexed in Bing for ChatGPT. Grade: Unproven</th><td>No study we found shows Bing indexing raises ChatGPT citations; in one API replay, 99% of retrieved pages missed Bing's top 30</td><td><a href="https://arxiv.org/abs/2610.15033">arXiv 2610.15033</a>, replay of 651 questions up to 7 Oct 2026</td><td>Low</td></tr>
<tr><th scope="row">Fake mentions or mass pages for every query variation. Grade: Unproven</th><td>No study we found shows a lasting ChatGPT gain; Google calls query-variation pages made mainly to manipulate AI answers scaled content abuse</td><td><a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google AI optimization guide</a>, updated 10 Jul 2026</td><td>Do not do</td></tr>
</tbody>
</table></div>
<h2 id="how-do-you-rank-in-chatgpt">How do you rank in ChatGPT?</h2>
<p>Ranking is a loose word for ChatGPT, because its answers have no fixed positions and OpenAI's help page says placement is not guaranteed. A page appears in an answer when ChatGPT's own search retrieves it and the model chooses to cite it. Letting OAI-SearchBot crawl and answering the exact question have the strongest support.</p>
<p>Search runs on a minority of free, logged-out chats. Of 66.6 million GPT-5.6 Luna responses in August and September 2026, 14.4% triggered a web search (<a href="https://ahrefs.com/blog/query-fan-out-chatgpt/">Ahrefs, 12 Oct 2026</a>). OpenAI says GPT-6 "makes better decisions about when to look something up" (<a href="https://openai.com/index/gpt-6-for-everyone/">OpenAI, 7 Oct 2026</a>).</p>
<p>In <a href="https://arxiv.org/abs/2610.15033">arXiv 2610.15033</a>, a University of Toronto preprint, the authors replayed 651 questions through ChatGPT's API (GPT-5.4 nano with web search) 13 times up to 7 Oct 2026. All 22,315 cited URLs came from ChatGPT's own searches, and ChatGPT consulted about 26 pages per question to cite about 3.</p>
<p>In the preprint's replay, 97% of retrieved pages were absent from Google's top 50 for the same queries.</p>
<p>OpenAI says it introduced the first GPT-6 models for paid customers in September; GPT-6 began rolling out as ChatGPT's Chat model on 7 Oct 2026. Most data here was collected before 7 Oct.</p>
<h2 id="how-to-get-cited-by-chatgpt-what-does-the-evidence-say">How to get cited by ChatGPT: what does the evidence say?</h2>
<p>How to get cited by ChatGPT, on current evidence, is to make one page the closest match to how buyers phrase the question and put facts on it only you can publish. In a Toronto preprint on commercial questions about US home internet service, plus a small B2B niche, matching wording held up within websites.</p>
<p>For ChatGPT alone, one standard deviation better best-paragraph match went with 9.5% more citations, and title match had no effect (0.2% fewer). Across ChatGPT, Gemini and Perplexity together the figures were 15.5% and 14.1%. All come from a 143,249-answer dataset (58,590 from ChatGPT) from 24 Jun to 21 Sep 2026, in English about the US market. They are associations, and the paper is a preprint.</p>
<p>Ahrefs found official sources cited for 84.4% of factual questions and 68.3% of comparison questions in 20,000 US prompts, so put prices, plans and specifications on crawlable pages in plain text.</p>
<h2 id="what-do-the-top-google-results-for-how-to-rank-in-chatgpt-miss">What do the top Google results for how to rank in ChatGPT miss?</h2>
<p>The top Google results for how to rank in ChatGPT and how to get cited by ChatGPT mostly agree on answer-first writing and brand mentions. On 17 Oct 2026, 2 of the eight we could read still called Reddit ChatGPT's most-cited domain, 4 named OAI-SearchBot, and in our reading none graded its tactics by evidence.</p>
<p>Method: of 15 organic results Google showed on 17 Oct 2026 (set to the US, fetched from India), we left out two Reddit results, two LinkedIn results, one Medium post and one unrelated APA Style page. That left nine pages, one unreadable, last updated between 19 Nov 2025 and 16 Oct 2026.</p>
<div class="article-table"><table>
<caption style="caption-side:top;text-align:left;color:#8e8a84;font-size:13px;line-height:1.5;padding:0 0 10px">What the eight readable top Google results cover, 17 Oct 2026 (our observations).</caption>
<thead><tr><th scope="col">Topic</th><th scope="col">Pages that cover it (of 8)</th><th scope="col">What the newest evidence says</th></tr></thead>
<tbody>
<tr><th scope="row">OAI-SearchBot access</th><td>4 name it</td><td>Documented by OpenAI</td></tr>
<tr><th scope="row">Schema markup as a citation tactic</th><td>3 recommend it; 1 says it gives no boost</td><td>No within-site effect in arXiv 2610.15033</td></tr>
<tr><th scope="row">Reddit as ChatGPT's most-cited domain</th><td>2 say so</td><td>About 1 in 43 ChatGPT answers by late September (Ahrefs)</td></tr>
<tr><th scope="row">Tactics graded by evidence</th><td>0 in our reading</td><td>Graded in the table above</td></tr>
</tbody>
</table></div>
<h2 id="what-is-chatgpt-seo">What is ChatGPT SEO?</h2>
<p>ChatGPT SEO is the SEO work that helps ChatGPT's search find, read and cite your pages: crawler access, pages that answer real buyer questions, and mentions on other sites. Google's AI optimization guide says optimizing for its own generative AI features is "still SEO."</p>
<p>For definitions of AEO and GEO, see <a href="https://www.nakama.in/journal/aeo-vs-seo-vs-geo">AEO vs SEO vs GEO</a>.</p>
<h2 id="how-do-you-make-a-page-eligible-for-chatgpt-search">How do you make a page eligible for ChatGPT search?</h2>
<p>You make a page eligible for ChatGPT search, the first step to optimize for ChatGPT, by letting OpenAI's search crawler reach it. <a href="https://help.openai.com/en/articles/9237897-chatgpt-search">OpenAI's Help Center</a> says to allow OAI-SearchBot and to confirm your host or CDN accepts traffic from OpenAI's published search IP addresses.</p>
<p>Check robots.txt and your CDN's bot protection, since robots.txt never shows CDN rules. OpenAI says it can take about 24 hours for robots.txt changes to take effect in search (<a href="https://developers.openai.com/api/docs/bots">OpenAI crawler docs</a>).</p>
<p>Blocking GPTBot is a separate choice. OpenAI says GPTBot crawls content that may be used for training, and a site can disallow it while allowing OAI-SearchBot.</p>
<p>Then rewrite the opening paragraph and title of key pages so they answer the buyer's question in the first sentence. In the preprint, title match helped Gemini and Perplexity and showed no effect for ChatGPT.</p>
<h2 id="how-do-you-get-your-brand-to-appear-in-chatgpt-answers">How do you get your brand to appear in ChatGPT answers?</h2>
<p>Your brand appears in ChatGPT answers when the model already knows it or when the pages ChatGPT reads name it. For small brands the second route matters more. In the Toronto study's small B2B software niche, the models barely knew the vendors, and answers named them mainly when a cited third-party page named them.</p>
<p>In that niche, a cited third-party page naming a vendor multiplied the odds that ChatGPT names it by 39.7, though ChatGPT cited anything in only 35% of answers. To get cited in ChatGPT more often, aim for several pages per buying question that name you; that is our inference from one niche.</p>
<p>One caution from the same preprint: at equal rank in its API replay, lists (0.54 times the odds), comparisons (0.34) and Reddit threads (0.30) were consulted often but cited rarely. Konitzny's listicle row measures something else, share of cited URLs after the GPT-6 switch.</p>
<h2 id="does-reddit-still-get-you-cited-by-chatgpt">Does Reddit still get you cited by ChatGPT?</h2>
<p>Reddit still gets cited by ChatGPT, though far less than early in 2026. In Ahrefs' data, about 1 in 5 ChatGPT answers cited Reddit in March and about 1 in 43 by late September. Google's AI Overviews for our two test queries still cited Reddit on 17 Oct.</p>
<p>In the Toronto API answers, Reddit took 2.2% of ChatGPT's citations and 13.1% of Gemini's. We found no GPT-6 Reddit figure yet and no trend data for Perplexity or Gemini.</p>
<h2 id="what-does-not-work">What does not work?</h2>
<p>What does not work for ChatGPT citations, on current evidence, is special AI schema and FAQ blocks added as a citation trick, while llms.txt and mass pages for every query variation have no evidence behind them. Keep schema accurate for the rich results Google still shows.</p>
<ul>
<li><strong>llms.txt.</strong> No study we found shows llms.txt affects ChatGPT citations (<a href="https://ahrefs.com/blog/llmstxt-study/">Ahrefs, 15 Jun 2026</a>), and OpenAI's crawler docs list no llms.txt setting.</li>
<li><strong>Special AI schema.</strong> Google says its AI features need no special schema.org markup.</li>
<li><strong>FAQ blocks as a trick.</strong> Across websites FAQ blocks looked like 18.1% more citations; within one website the figure was 3.4% fewer and not significant, because more-cited sites use them more often. Google stopped showing FAQ rich results on 7 May 2026.</li>
<li><strong>Mass pages for every query variation.</strong> Google says making them mainly to manipulate AI responses violates its scaled content abuse policy.</li>
</ul>
<h2 id="how-do-you-track-brand-mentions-in-chatgpt">How do you track brand mentions in ChatGPT?</h2>
<p>You track brand mentions in ChatGPT with a fixed set of 10 to 20 buyer prompts that do not name you, each run several times in a fresh chat. One run proves little, because the same prompt can return different brands and sources minutes apart.</p>
<ol>
<li>Write 10 to 20 unbranded prompts across category, problem and comparison questions (our suggestion).</li>
<li>Run each prompt at least 7 times per day for brand estimates and 8 for cited sources, per the <a href="https://arxiv.org/abs/2604.07585">St. Gallen preprint</a>, which calls a single run essentially uninformative.</li>
<li>Log mentions, position, cited URLs and competitors, and compare months.</li>
</ol>
<p>In that preprint, cited sources for runs within 24 hours had a mean Jaccard similarity of 0.32 to 0.43, pooled over four engines (Swiss-German prompts, Swiss servers, early 2026). For ChatGPT alone it was 0.23, and 57.8% of its runs returned no citations.</p>
<p>In GA4, links in ChatGPT's answer text reportedly lost the utm_source=chatgpt.com tag from about 8 Oct 2026 (Huesler) or 9 Oct (Graphite), so some visits can appear as Direct. Adobe's Cedric Huesler says a fix began rolling out on 15 Oct, with tagged clicks back to roughly 95 to 100% of the same hour a week earlier by 9 a.m. Pacific (<a href="https://www.searchenginejournal.com/chatgpt-traffic-drop-appears-to-be-a-tracking-problem/593157/">Search Engine Journal, 15 Oct 2026</a>). Huesler says most ChatGPT clicks still arrive without a referrer, so count the UTM tag and annotate 8 to 15 Oct in GA4.</p>
<p>See also <a href="https://www.nakama.in/journal/what-a-useful-visibility-report-shows">what a useful visibility report shows</a>.</p>
<h2 id="what-to-do-first">What should you do first?</h2>
<p>What you should do first is the documented work, then the work with measured support. Fix crawler access this week, rewrite key pages around buyer questions this month, and start the third-party coverage that takes longest. Record a prompt baseline before you change anything.</p>
<ol>
<li>This week: allow OAI-SearchBot and record a prompt baseline.</li>
<li>This month: rewrite the opening paragraph and the title on your ten key pages.</li>
<li>This quarter: earn coverage on review, comparison and partner sites.</li>
<li>Every month: rerun the prompt set.</li>
</ol>
<p>For help, see <a href="https://www.nakama.in/services">Nakama's services</a>, or compare <a href="https://www.nakama.in/journal/best-aeo-agencies">AEO agencies</a> and <a href="https://www.nakama.in/journal/best-generative-engine-optimization-agencies">GEO agencies</a>.</p>
<h2 id="what-changed-in-october-2026">What changed in October 2026?</h2>
<p>October 2026 changed the evidence behind this page. GPT-6 began rolling out as ChatGPT's Chat model, a large preprint tested common advice within websites, Ahrefs published new data on what ChatGPT cites, and a reported tagging bug hid some ChatGPT referrals in GA4 for about a week.</p>
<ul>
<li><strong>September 2026:</strong> first GPT-6 models for paid customers, per OpenAI.</li>
<li><strong>7 Oct 2026:</strong> GPT-6 with Intelligent UI started rolling out in ChatGPT's Chat tab for paid tiers, and for Free and Go from 8 Oct.</li>
<li><strong>8 to 15 Oct 2026:</strong> ChatGPT links reportedly lost the UTM tag; a fix began rolling out on 15 Oct.</li>
<li><strong>10 Oct 2026:</strong> Toronto researchers posted arXiv 2610.15033.</li>
<li><strong>12 Oct 2026:</strong> Ahrefs published its ChatGPT fan-out study.</li>
</ul>
<h2 id="what-do-people-ask-about-ranking-in-chatgpt">What do people ask about ranking in ChatGPT?</h2>
<p>These are the questions marketers ask most often about ranking in ChatGPT, answered in under 60 words each with the sources above. Where an answer rests on a single study, it says so. No answer here promises a position or a date, because nobody outside OpenAI can.</p>
<h3 id="what-does-chatgpt-seo-mean">What does ChatGPT SEO mean?</h3>
<p>ChatGPT SEO is the search work that lets ChatGPT's own search reach, understand and cite your pages. It covers OAI-SearchBot access, pages that match how buyers phrase questions, facts in plain text and mentions on other sites. Google describes the same kind of work for its own AI features as SEO.</p>
<h3 id="can-you-rank-in-chatgpt">Can you rank in ChatGPT?</h3>
<p>Ranking in ChatGPT has no fixed positions, since ChatGPT writes a new answer each time and the brands and sources it uses change between runs. What you can raise is how often your brand is named and your pages are cited across many runs of the same buyer questions.</p>
<h3 id="does-ranking-in-google-get-you-cited-by-chatgpt">Does ranking in Google get you cited by ChatGPT?</h3>
<p>Ranking in Google rarely gets you cited by ChatGPT on its own. In the API replay of a 2026 University of Toronto preprint, 97% of the pages ChatGPT retrieved were absent from Google's top 50 for the same searches, though about half came from websites that did appear there.</p>
<h3 id="which-openai-crawler-controls-chatgpt-search">Which OpenAI crawler controls ChatGPT search?</h3>
<p>OAI-SearchBot is the OpenAI crawler that controls ChatGPT search. Per OpenAI's crawler docs, opting out of it keeps a site out of ChatGPT search answers, apart from navigational links. GPTBot is a separate training crawler, so one robots.txt file can disallow GPTBot and still allow OAI-SearchBot.</p>
<h3 id="how-many-times-should-i-run-a-prompt">How many times should I run a prompt?</h3>
<p>Each prompt should run at least seven times per day for a stable per-brand rate, and eight when source coverage matters. A University of St. Gallen preprint derived both numbers from ten simultaneous runs per prompt, using Swiss-German prompts in early 2026. Even seven runs only separate large gaps between brands.</p>
<h3 id="why-did-chatgpt-referrals-drop-in-ga4-in-october-2026">Why did ChatGPT referrals drop in GA4 in October 2026?</h3>
<p>ChatGPT referrals in GA4 fell from about 8 Oct 2026 after links in ChatGPT's answer text reportedly lost the utm_source=chatgpt.com tag, so some visits can appear as Direct. Adobe's Cedric Huesler says a fix began rolling out on 15 Oct. Annotate 8 to 15 Oct before comparing months.</p>
<h3 id="how-long-until-i-appear-in-chatgpt">How long until I appear in ChatGPT?</h3>
<p>Appearing in ChatGPT has no promised timeline. OpenAI says robots.txt changes can take about 24 hours to take effect in search, but retrieval and citation depend on ChatGPT's own ranking, and OpenAI says placement is not guaranteed. A 2026 Toronto preprint also found cited pages drifting over weeks, so measure monthly.</p>
<h2 id="about-the-author">About the author</h2>
<div class="author-box" id="snehil-srivastava">
<img src="/authors/snehil-srivastava-nakama-ceo.webp" srcset="/authors/snehil-srivastava-nakama-ceo.webp 400w, /authors/snehil-srivastava-nakama-ceo-800.webp 800w" sizes="96px" alt="Snehil Srivastava, CEO &amp; Creative Director of Nakama Growth" width="96" height="96" loading="lazy" decoding="async">
<div class="author-box-text">
<p><a href="https://www.nakama.in/authors/snehil-srivastava" rel="author">Snehil Srivastava</a> is CEO and Creative Director of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask AI tools what to choose. He is a creative strategist and content lead. He has spent multiple years building brands.</p>
</div>
</div>`;

export const howToRankInChatgptArticle: Article = {
 slug: 'how-to-rank-in-chatgpt',
 category: 'Guide',
 title: "How to rank in ChatGPT (and get cited): what works in 2026",
 description: "How to rank in ChatGPT and get cited: what works in 2026, ranked by evidence, with a table of what to do first. Updated Oct 2026.",
 readTime: '13 min read',
 motif: 'guide',
 metaTitle: "How to rank in ChatGPT (and get cited): what works in 2026",
 date: dayOf(PUBLISHED_AT),
 publishedAt: PUBLISHED_AT,
 authorName: 'Snehil Srivastava',
 coverImage: {src: '/journal/how-to-rank-in-chatgpt/how-to-rank-in-chatgpt-hero.png', width: 1600, height: 900},
 ogImage: {
  url: 'https://www.nakama.in/journal/how-to-rank-in-chatgpt/how-to-rank-in-chatgpt-og.png',
  width: 1200,
  height: 630,
  alt: "How to rank in ChatGPT and get cited, tactics graded by evidence, Nakama journal",
  type: 'image/png',
 },
 jsonLd: howToRankInChatgptJsonLd,
 bodyHtml,
 sections: [
 {
  "heading": "Introduction",
  "paragraphs": [
   "How to rank in ChatGPT (and get cited): what works in 2026",
   "Published 17 Oct 2026. Last updated 17 Oct 2026.",
   "By Snehil Srivastava , CEO & Creative Director, Nakama Growth",
   "How to rank in ChatGPT starts with one fact: ChatGPT cites pages its own search retrieves, and a top Google position predicts little about which ones. Let OpenAI's search crawler in, answer the buyer's exact question in plain words, and earn other sites that name you.",
   "TL;DR",
   "\"Ranking\" in ChatGPT means being named or cited often across repeated runs of one question.",
   "Blocking GPTBot leaves you in ChatGPT search; opting out of OAI-SearchBot removes you, apart from navigational links.",
   "ChatGPT cited Reddit far less in 2026, though Google's AI Overviews still cited it in our 17 Oct test.",
   "ChatGPT citation tactics graded Documented (OpenAI or Google states it), Measured in a study, Practitioner report or Unproven (no evidence found); sources read 17 Oct 2026. Tactic and evidence grade | What the source measured | Source, date and data period | Effort Allow OAI-SearchBot in robots.txt and your CDN. Grade: Documented | OpenAI says sites opted out of OAI-SearchBot \"will not be shown in ChatGPT search answers\", apart from navigational links | OpenAI crawler docs , read 17 Oct 2026 | Low Match the best paragraph, then the title, to the buyer's question. Grade: Measured in a study | For ChatGPT, a closer best-paragraph match went with 9.5% more citations within a website; title match showed no effect | arXiv 2610.15033 , 10 Oct 2026; 58,590 ChatGPT API answers, 24 Jun to 21 Sep 2026 | Low Earn third-party pages that name the brand. Grade: Measured in a study | In a small B2B software niche, ChatGPT answers citing a third-party page naming a vendor had 39.7 times the odds of naming it | arXiv 2610.15033 , 10 Oct 2026; 55 questions, 14,850 API answers from all three engines (39.7 is ChatGPT's), 24 Jun to 21 Sep 2026 | High Publish official facts on plain pages. Grade: Measured in a study | ChatGPT cited an official source for 84.4% of factual questions on price, features or company details; the tactic itself is untested | Ahrefs , 12 Oct 2026; 20,000 US prompts, model and dates not stated; vendor | Medium Win coverage in listicles. Grade: Practitioner report | Listicles rose from 6.45% to 9.70% of ChatGPT's cited URLs after the switch to GPT-6; method not detailed | David Konitzny, LinkedIn , 9 Oct 2026; 2.2 million responses; author works at Peec AI, a vendor | High Rely on Reddit for ChatGPT citations. Grade: Measured in a study | Reddit fell from about 1 in 5 ChatGPT answers in March 2026 to about 1 in 43 by late September | Ahrefs , 12 Oct 2026; US, 2.4 to 3.8 million answers a month, March to September 2026; vendor | Medium Rely on Reddit and YouTube for Google AI Overviews. Grade: Practitioner report | AI Overviews for two ChatGPT queries cited Reddit threads and YouTube clips in every run | Nakama check of Google results set to the US, fetched from India, 17 Oct 2026; 2 queries, 2 identical runs each | Medium Add FAQ blocks or schema markup to get cited by ChatGPT. Grade: Measured in a study | Within one website, FAQ blocks went with 3.4% fewer ChatGPT, Gemini and Perplexity citations and schema 5.3% fewer, neither significant | arXiv 2610.15033 , 143,249 API answers, 24 Jun to 21 Sep 2026 | Low Publish an llms.txt file for ChatGPT. Grade: Measured in a study | 97% of llms.txt files on about 38,000 domains got zero requests in May 2026; no study we found links the file to ChatGPT citations | Ahrefs , 15 Jun 2026; 137,210 domains, 28% publish the file; vendor | Low Get pages indexed in Bing for ChatGPT. Grade: Unproven | No study we found shows Bing indexing raises ChatGPT citations; in one API replay, 99% of retrieved pages missed Bing's top 30 | arXiv 2610.15033 , replay of 651 questions up to 7 Oct 2026 | Low Fake mentions or mass pages for every query variation. Grade: Unproven | No study we found shows a lasting ChatGPT gain; Google calls query-variation pages made mainly to manipulate AI answers scaled content abuse | Google AI optimization guide , updated 10 Jul 2026 | Do not do"
  ]
 },
 {
  "heading": "How do you rank in ChatGPT?",
  "paragraphs": [
   "Ranking is a loose word for ChatGPT, because its answers have no fixed positions and OpenAI's help page says placement is not guaranteed. A page appears in an answer when ChatGPT's own search retrieves it and the model chooses to cite it. Letting OAI-SearchBot crawl and answering the exact question have the strongest support.",
   "Search runs on a minority of free, logged-out chats. Of 66.6 million GPT-5.6 Luna responses in August and September 2026, 14.4% triggered a web search ( Ahrefs, 12 Oct 2026 ). OpenAI says GPT-6 \"makes better decisions about when to look something up\" ( OpenAI, 7 Oct 2026 ).",
   "In arXiv 2610.15033 , a University of Toronto preprint, the authors replayed 651 questions through ChatGPT's API (GPT-5.4 nano with web search) 13 times up to 7 Oct 2026. All 22,315 cited URLs came from ChatGPT's own searches, and ChatGPT consulted about 26 pages per question to cite about 3.",
   "In the preprint's replay, 97% of retrieved pages were absent from Google's top 50 for the same queries.",
   "OpenAI says it introduced the first GPT-6 models for paid customers in September; GPT-6 began rolling out as ChatGPT's Chat model on 7 Oct 2026. Most data here was collected before 7 Oct."
  ]
 },
 {
  "heading": "How to get cited by ChatGPT: what does the evidence say?",
  "paragraphs": [
   "How to get cited by ChatGPT, on current evidence, is to make one page the closest match to how buyers phrase the question and put facts on it only you can publish. In a Toronto preprint on commercial questions about US home internet service, plus a small B2B niche, matching wording held up within websites.",
   "For ChatGPT alone, one standard deviation better best-paragraph match went with 9.5% more citations, and title match had no effect (0.2% fewer). Across ChatGPT, Gemini and Perplexity together the figures were 15.5% and 14.1%. All come from a 143,249-answer dataset (58,590 from ChatGPT) from 24 Jun to 21 Sep 2026, in English about the US market. They are associations, and the paper is a preprint.",
   "Ahrefs found official sources cited for 84.4% of factual questions and 68.3% of comparison questions in 20,000 US prompts, so put prices, plans and specifications on crawlable pages in plain text."
  ]
 },
 {
  "heading": "What do the top Google results for how to rank in ChatGPT miss?",
  "paragraphs": [
   "The top Google results for how to rank in ChatGPT and how to get cited by ChatGPT mostly agree on answer-first writing and brand mentions. On 17 Oct 2026, 2 of the eight we could read still called Reddit ChatGPT's most-cited domain, 4 named OAI-SearchBot, and in our reading none graded its tactics by evidence.",
   "Method: of 15 organic results Google showed on 17 Oct 2026 (set to the US, fetched from India), we left out two Reddit results, two LinkedIn results, one Medium post and one unrelated APA Style page. That left nine pages, one unreadable, last updated between 19 Nov 2025 and 16 Oct 2026.",
   "What the eight readable top Google results cover, 17 Oct 2026 (our observations). Topic | Pages that cover it (of 8) | What the newest evidence says OAI-SearchBot access | 4 name it | Documented by OpenAI Schema markup as a citation tactic | 3 recommend it; 1 says it gives no boost | No within-site effect in arXiv 2610.15033 Reddit as ChatGPT's most-cited domain | 2 say so | About 1 in 43 ChatGPT answers by late September (Ahrefs) Tactics graded by evidence | 0 in our reading | Graded in the table above"
  ]
 },
 {
  "heading": "What is ChatGPT SEO?",
  "paragraphs": [
   "ChatGPT SEO is the SEO work that helps ChatGPT's search find, read and cite your pages: crawler access, pages that answer real buyer questions, and mentions on other sites. Google's AI optimization guide says optimizing for its own generative AI features is \"still SEO.\"",
   "For definitions of AEO and GEO, see AEO vs SEO vs GEO ."
  ]
 },
 {
  "heading": "How do you make a page eligible for ChatGPT search?",
  "paragraphs": [
   "You make a page eligible for ChatGPT search, the first step to optimize for ChatGPT, by letting OpenAI's search crawler reach it. OpenAI's Help Center says to allow OAI-SearchBot and to confirm your host or CDN accepts traffic from OpenAI's published search IP addresses.",
   "Check robots.txt and your CDN's bot protection, since robots.txt never shows CDN rules. OpenAI says it can take about 24 hours for robots.txt changes to take effect in search ( OpenAI crawler docs ).",
   "Blocking GPTBot is a separate choice. OpenAI says GPTBot crawls content that may be used for training, and a site can disallow it while allowing OAI-SearchBot.",
   "Then rewrite the opening paragraph and title of key pages so they answer the buyer's question in the first sentence. In the preprint, title match helped Gemini and Perplexity and showed no effect for ChatGPT."
  ]
 },
 {
  "heading": "How do you get your brand to appear in ChatGPT answers?",
  "paragraphs": [
   "Your brand appears in ChatGPT answers when the model already knows it or when the pages ChatGPT reads name it. For small brands the second route matters more. In the Toronto study's small B2B software niche, the models barely knew the vendors, and answers named them mainly when a cited third-party page named them.",
   "In that niche, a cited third-party page naming a vendor multiplied the odds that ChatGPT names it by 39.7, though ChatGPT cited anything in only 35% of answers. To get cited in ChatGPT more often, aim for several pages per buying question that name you; that is our inference from one niche.",
   "One caution from the same preprint: at equal rank in its API replay, lists (0.54 times the odds), comparisons (0.34) and Reddit threads (0.30) were consulted often but cited rarely. Konitzny's listicle row measures something else, share of cited URLs after the GPT-6 switch."
  ]
 },
 {
  "heading": "Does Reddit still get you cited by ChatGPT?",
  "paragraphs": [
   "Reddit still gets cited by ChatGPT, though far less than early in 2026. In Ahrefs' data, about 1 in 5 ChatGPT answers cited Reddit in March and about 1 in 43 by late September. Google's AI Overviews for our two test queries still cited Reddit on 17 Oct.",
   "In the Toronto API answers, Reddit took 2.2% of ChatGPT's citations and 13.1% of Gemini's. We found no GPT-6 Reddit figure yet and no trend data for Perplexity or Gemini."
  ]
 },
 {
  "heading": "What does not work?",
  "paragraphs": [
   "What does not work for ChatGPT citations, on current evidence, is special AI schema and FAQ blocks added as a citation trick, while llms.txt and mass pages for every query variation have no evidence behind them. Keep schema accurate for the rich results Google still shows.",
   "llms.txt. No study we found shows llms.txt affects ChatGPT citations ( Ahrefs, 15 Jun 2026 ), and OpenAI's crawler docs list no llms.txt setting.",
   "Special AI schema. Google says its AI features need no special schema.org markup.",
   "FAQ blocks as a trick. Across websites FAQ blocks looked like 18.1% more citations; within one website the figure was 3.4% fewer and not significant, because more-cited sites use them more often. Google stopped showing FAQ rich results on 7 May 2026.",
   "Mass pages for every query variation. Google says making them mainly to manipulate AI responses violates its scaled content abuse policy."
  ]
 },
 {
  "heading": "How do you track brand mentions in ChatGPT?",
  "paragraphs": [
   "You track brand mentions in ChatGPT with a fixed set of 10 to 20 buyer prompts that do not name you, each run several times in a fresh chat. One run proves little, because the same prompt can return different brands and sources minutes apart.",
   "Write 10 to 20 unbranded prompts across category, problem and comparison questions (our suggestion).",
   "Run each prompt at least 7 times per day for brand estimates and 8 for cited sources, per the St. Gallen preprint , which calls a single run essentially uninformative.",
   "Log mentions, position, cited URLs and competitors, and compare months.",
   "In that preprint, cited sources for runs within 24 hours had a mean Jaccard similarity of 0.32 to 0.43, pooled over four engines (Swiss-German prompts, Swiss servers, early 2026). For ChatGPT alone it was 0.23, and 57.8% of its runs returned no citations.",
   "In GA4, links in ChatGPT's answer text reportedly lost the utm_source=chatgpt.com tag from about 8 Oct 2026 (Huesler) or 9 Oct (Graphite), so some visits can appear as Direct. Adobe's Cedric Huesler says a fix began rolling out on 15 Oct, with tagged clicks back to roughly 95 to 100% of the same hour a week earlier by 9 a.m. Pacific ( Search Engine Journal, 15 Oct 2026 ). Huesler says most ChatGPT clicks still arrive without a referrer, so count the UTM tag and annotate 8 to 15 Oct in GA4.",
   "See also what a useful visibility report shows ."
  ]
 },
 {
  "heading": "What should you do first?",
  "paragraphs": [
   "What you should do first is the documented work, then the work with measured support. Fix crawler access this week, rewrite key pages around buyer questions this month, and start the third-party coverage that takes longest. Record a prompt baseline before you change anything.",
   "This week: allow OAI-SearchBot and record a prompt baseline.",
   "This month: rewrite the opening paragraph and the title on your ten key pages.",
   "This quarter: earn coverage on review, comparison and partner sites.",
   "Every month: rerun the prompt set.",
   "For help, see Nakama's services , or compare AEO agencies and GEO agencies ."
  ]
 },
 {
  "heading": "What changed in October 2026?",
  "paragraphs": [
   "October 2026 changed the evidence behind this page. GPT-6 began rolling out as ChatGPT's Chat model, a large preprint tested common advice within websites, Ahrefs published new data on what ChatGPT cites, and a reported tagging bug hid some ChatGPT referrals in GA4 for about a week.",
   "September 2026: first GPT-6 models for paid customers, per OpenAI.",
   "7 Oct 2026: GPT-6 with Intelligent UI started rolling out in ChatGPT's Chat tab for paid tiers, and for Free and Go from 8 Oct.",
   "8 to 15 Oct 2026: ChatGPT links reportedly lost the UTM tag; a fix began rolling out on 15 Oct.",
   "10 Oct 2026: Toronto researchers posted arXiv 2610.15033.",
   "12 Oct 2026: Ahrefs published its ChatGPT fan-out study."
  ]
 },
 {
  "heading": "What do people ask about ranking in ChatGPT?",
  "paragraphs": [
   "These are the questions marketers ask most often about ranking in ChatGPT, answered in under 60 words each with the sources above. Where an answer rests on a single study, it says so. No answer here promises a position or a date, because nobody outside OpenAI can."
  ]
 },
 {
  "heading": "What does ChatGPT SEO mean?",
  "paragraphs": [
   "ChatGPT SEO is the search work that lets ChatGPT's own search reach, understand and cite your pages. It covers OAI-SearchBot access, pages that match how buyers phrase questions, facts in plain text and mentions on other sites. Google describes the same kind of work for its own AI features as SEO."
  ]
 },
 {
  "heading": "Can you rank in ChatGPT?",
  "paragraphs": [
   "Ranking in ChatGPT has no fixed positions, since ChatGPT writes a new answer each time and the brands and sources it uses change between runs. What you can raise is how often your brand is named and your pages are cited across many runs of the same buyer questions."
  ]
 },
 {
  "heading": "Does ranking in Google get you cited by ChatGPT?",
  "paragraphs": [
   "Ranking in Google rarely gets you cited by ChatGPT on its own. In the API replay of a 2026 University of Toronto preprint, 97% of the pages ChatGPT retrieved were absent from Google's top 50 for the same searches, though about half came from websites that did appear there."
  ]
 },
 {
  "heading": "Which OpenAI crawler controls ChatGPT search?",
  "paragraphs": [
   "OAI-SearchBot is the OpenAI crawler that controls ChatGPT search. Per OpenAI's crawler docs, opting out of it keeps a site out of ChatGPT search answers, apart from navigational links. GPTBot is a separate training crawler, so one robots.txt file can disallow GPTBot and still allow OAI-SearchBot."
  ]
 },
 {
  "heading": "How many times should I run a prompt?",
  "paragraphs": [
   "Each prompt should run at least seven times per day for a stable per-brand rate, and eight when source coverage matters. A University of St. Gallen preprint derived both numbers from ten simultaneous runs per prompt, using Swiss-German prompts in early 2026. Even seven runs only separate large gaps between brands."
  ]
 },
 {
  "heading": "Why did ChatGPT referrals drop in GA4 in October 2026?",
  "paragraphs": [
   "ChatGPT referrals in GA4 fell from about 8 Oct 2026 after links in ChatGPT's answer text reportedly lost the utm_source=chatgpt.com tag, so some visits can appear as Direct. Adobe's Cedric Huesler says a fix began rolling out on 15 Oct. Annotate 8 to 15 Oct before comparing months."
  ]
 },
 {
  "heading": "How long until I appear in ChatGPT?",
  "paragraphs": [
   "Appearing in ChatGPT has no promised timeline. OpenAI says robots.txt changes can take about 24 hours to take effect in search, but retrieval and citation depend on ChatGPT's own ranking, and OpenAI says placement is not guaranteed. A 2026 Toronto preprint also found cited pages drifting over weeks, so measure monthly."
  ]
 },
 {
  "heading": "About the author",
  "paragraphs": [
   "Snehil Srivastava is CEO and Creative Director of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask AI tools what to choose. He is a creative strategist and content lead. He has spent multiple years building brands."
  ]
 }
],
};
