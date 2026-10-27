import type {Article} from './articles';

/**
 * PREVIEW ONLY. Do not merge to main. Do not flip robots to index.
 * `noindex` keeps this URL out of the sitemap, llms.txt, llms-full.txt and RSS.
 * The page metadata is noindex,follow. Remove `noindex` only at go-live,
 * and set the real publish timestamp in the same change.
 *
 * Visible date line is "Updated 27 Oct 2026" (short month), from PUBLISHED_AT.
 * metaTitle matches the H1 so the journal fallback does not append an em dash.
 */
export const TOPICS_VS_KEYWORDS_PUBLISHED_AT = '2026-10-27T09:00:00+05:30';
const PUBLISHED_AT = TOPICS_VS_KEYWORDS_PUBLISHED_AT;
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
   "@id": "https://www.nakama.in/journal/topics-vs-keywords#article",
   "headline": "Topics vs Keywords: Which to Use for SEO and AI Search (2026)",
   "description": "Topics vs keywords: a topic is the subject a page covers; a keyword is an exact string people type. Plan with topics; title commercial pages with keywords.",
   "image": [
    "https://www.nakama.in/journal/topics-vs-keywords/topics-vs-keywords-og.png",
    "https://www.nakama.in/journal/topics-vs-keywords/topics-vs-keywords-cover.png"
   ],
   "datePublished": PUBLISHED_AT,
   "dateModified": PUBLISHED_AT,
   "inLanguage": "en",
   "articleSection": "Guide",
   "author": {
    "@id": "https://www.nakama.in/authors/yash-kumar#person"
   },
   "publisher": {
    "@id": "https://www.nakama.in/#organization"
   },
   "mainEntityOfPage": {
    "@id": "https://www.nakama.in/journal/topics-vs-keywords#webpage"
   },
   "url": "https://www.nakama.in/journal/topics-vs-keywords",
   "isPartOf": {
    "@id": "https://www.nakama.in/#website"
   }
  },
  {
   "@type": "WebPage",
   "@id": "https://www.nakama.in/journal/topics-vs-keywords#webpage",
   "url": "https://www.nakama.in/journal/topics-vs-keywords",
   "name": "Topics vs Keywords: Which to Use for SEO and AI Search (2026)",
   "description": "Topics vs keywords: a topic is the subject a page covers; a keyword is an exact string people type. Plan with topics; title commercial pages with keywords.",
   "inLanguage": "en",
   "isPartOf": {
    "@id": "https://www.nakama.in/#website"
   },
   "publisher": {
    "@id": "https://www.nakama.in/#organization"
   },
   "mainEntity": {
    "@id": "https://www.nakama.in/journal/topics-vs-keywords#article"
   },
   "breadcrumb": {
    "@id": "https://www.nakama.in/journal/topics-vs-keywords#breadcrumb"
   },
   "datePublished": PUBLISHED_AT,
   "dateModified": PUBLISHED_AT,
   "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://www.nakama.in/journal/topics-vs-keywords/topics-vs-keywords-cover.png",
    "width": 1920,
    "height": 1080,
    "caption": "Topics vs Keywords: which to plan around for Google, AI Overviews and ChatGPT, SEO + AI Search 2026, Nakama Growth journal"
   }
  },
  {
   "@type": "Person",
   "@id": "https://www.nakama.in/authors/yash-kumar#person",
   "name": "Yash Kumar",
   "jobTitle": "Co-founder and CEO",
   "url": "https://www.nakama.in/authors/yash-kumar",
   "description": "Yash Kumar is Co-founder and CEO of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask ChatGPT, Perplexity, Gemini and Google AI Overviews what to choose. He leads Nakama Growth's work on earning mentions on the sources those tools read.",
   "worksFor": {
    "@id": "https://www.nakama.in/#organization"
   }
  },
  {
   "@type": "BreadcrumbList",
   "@id": "https://www.nakama.in/journal/topics-vs-keywords#breadcrumb",
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
     "name": "Topics vs Keywords: Which to Use for SEO and AI Search (2026)",
     "item": "https://www.nakama.in/journal/topics-vs-keywords"
    }
   ]
  },
  {
   "@type": "FAQPage",
   "@id": "https://www.nakama.in/journal/topics-vs-keywords#faq",
   "isPartOf": {
    "@id": "https://www.nakama.in/journal/topics-vs-keywords#webpage"
   },
   "mainEntity": [
    {
     "@type": "Question",
     "name": "What is the difference between topics and keywords?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "A topic is the subject a page covers, and a keyword is the exact phrase someone types to find it. One topic holds many keywords. Plan your site around topics, then use keywords to title, track and phrase each page the way buyers search."
     }
    },
    {
     "@type": "Question",
     "name": "Are keywords still important for SEO in 2026?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Keywords still decide titles, slugs, commercial pages and rank tracking, and Google says optimizing for AI search is \"still SEO.\" What changed is that one keyword no longer equals one page. Group keyword variants into topics and give each topic one strong page."
     }
    },
    {
     "@type": "Question",
     "name": "Keywords vs topics in SEO: which should come first?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Topics come first for planning, keywords come first for individual commercial pages. Map the topics your buyers ask about, then choose a head keyword for each page. For \"best X,\" \"X vs Y\" and pricing pages, the exact keyword is the topic, so start there."
     }
    },
    {
     "@type": "Question",
     "name": "What is the difference between keywords and key topics?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Key topics are the essential nodes on your topical map, the subjects an authority in your category must cover. Keywords are the search strings attached to each node. Choose key topics by buyer relevance and product knowledge, then confirm demand with keyword, question and prompt data."
     }
    },
    {
     "@type": "Question",
     "name": "What is the difference between keywords, topics and entities?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Keywords are typed queries, topics are subjects, and entities are named things such as brands, products and standards. Topics define coverage, keywords define how pages are found, and entities make meaning unambiguous so search engines and AI tools know exactly what each page is about."
     }
    },
    {
     "@type": "Question",
     "name": "Do topics matter more than keywords for AI Overviews and ChatGPT?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "The evidence points that way for citations. Floyi found ranked coverage across a topical map correlated with AI Overview citations at 0.51 against 0.09 for Domain Rating, and 71.9% of ChatGPT citations went to sites outside the query's top 20. These are correlations, not proof of cause."
     }
    },
    {
     "@type": "Question",
     "name": "Should I create a separate page for every keyword variation?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Google's AI optimization guide says creating separate content for every search variation, including fan-out queries, primarily to manipulate rankings or AI answers violates its scaled content abuse policy. Put close variants on one page. Create a new page only when the intent or expected answer is different."
     }
    },
    {
     "@type": "Question",
     "name": "What is a topical map?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "A topical map is the structured set of topics a brand needs to cover to serve its audience, with pillars, subtopics and the links between them. Each node is one topic and one page, with its own head keyword, variants, questions and entities."
     }
    },
    {
     "@type": "Question",
     "name": "How many keywords should one page target?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "As many as share the same intent. One page usually has one head keyword plus its phrase match, term match and semantic variants. If two keywords return mostly the same search results, they belong on the same page. If the results differ, split them."
     }
    },
    {
     "@type": "Question",
     "name": "Topic vs keyword: is a topic just a long-tail keyword?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. A long-tail keyword is still one query string. A topic is the subject behind many queries, including long-tail ones. \"How to remove a duplicate Google listing\" is a long-tail keyword inside the topic \"duplicate listings,\" which also holds many other phrasings."
     }
    },
    {
     "@type": "Question",
     "name": "How do I measure topical authority?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Measure ranked coverage: the share of your map's topics where you hold a top-20 Google position, tracking one head term per topic. Add top-3 and top-10 counts for priority topics, and AI citation rates from repeated prompt runs. Floyi's report uses ranked coverage as its measurable signal."
     }
    },
    {
     "@type": "Question",
     "name": "Do zero-volume keywords matter?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, when they belong to the topic. Keyword tools miss many real buyer questions. A zero-volume question that names your category's entities and comes up in sales calls can be worth a section or a page, and it may match the long prompts buyers type into AI tools."
     }
    }
   ]
  }
 ]
};

export const topicsVsKeywordsJsonLd = articleLd;

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">Topics vs Keywords: Which to Use for SEO and AI Search (2026)</li></ol></nav>
<h1 id="topics-vs-keywords-which-to-use-for-seo-and-ai-search-2026">Topics vs Keywords: Which to Use for SEO and AI Search (2026)</h1>
<p>Updated ${modifiedDate}</p>
<p>By <a href="https://www.nakama.in/authors/yash-kumar" rel="author">Yash Kumar</a>, Co-founder and CEO, Nakama Growth</p>
<figure><picture><source srcset="/journal/topics-vs-keywords/topics-vs-keywords-cover.webp" type="image/webp"><img src="/journal/topics-vs-keywords/topics-vs-keywords-cover.png" alt="Topics vs Keywords: which to plan around for Google, AI Overviews and ChatGPT, SEO + AI Search 2026, Nakama Growth journal" width="1920" height="1080" fetchpriority="high" decoding="async"></picture></figure>
<p><strong>Topics vs keywords:</strong> a topic is the subject a page covers; a keyword is the exact string someone types into search. Use keywords for titles and commercial pages. Use topics to plan coverage, because Google and AI engines judge relevance at the subject level and often cite deep topic pages even off the exact query.</p>
<p><strong>Sources checked 27 Oct 2026:</strong> Google Search Central's <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">guide to optimizing for generative AI features</a>, Google's <a href="https://developers.google.com/search/docs/appearance/ai-features">AI features and your website</a>, Google's <a href="https://developers.google.com/search/docs/appearance/ranking-systems-guide">ranking systems guide</a>, Google's <a href="https://developers.google.com/search/docs/essentials/spam-policies">spam policies</a>, the <a href="https://floyi.com/research/topical-authority-report/">Floyi Topical Authority Report 2026</a> and Ahrefs' <a href="https://ahrefs.com/blog/how-to-rank-in-ai-overviews/">How to Rank in AI Overviews</a>.</p>
<h2 id="the-short-answer-which-should-you-use">The short answer: which should you use?</h2>
<p>Use both, in a set order. Start with topics to decide what your site must cover, then assign keywords to each page so you can title it, track it and match how buyers phrase the query. Add entities so search engines and AI tools know exactly which product, brand or concept each page is about.</p>
<p>Here is the evidence that shapes that order, in four lines:</p>
<ol><li><strong>Google says AI search is still SEO.</strong> Its guide states that "from Google Search's perspective, optimizing for generative AI search is optimizing for the search experience, and thus still SEO." Keywords still matter for classic rankings (<a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google</a>).</li><li><strong>Google warns against a page for every keyword variant.</strong> Creating separate content for every variation of how people search, including fan-out queries, "primarily to manipulate rankings or generative AI responses" violates its scaled content abuse policy (<a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google</a>).</li><li><strong>Topic coverage tracked AI citations far more closely than links did.</strong> In Floyi's study of 42 topical maps, ranking across more of a map's topics correlated with AI Overview citations at 0.51, against 0.09 for Ahrefs Domain Rating (<a href="https://floyi.com/research/topical-authority-report/">Floyi</a>).</li><li><strong>Many AI citations go to pages outside the query's top 20.</strong> Floyi found 40.2% of AI Overview citations, and 71.9% of ChatGPT citations, went to websites not in that exact query's Google top 20 (<a href="https://floyi.com/research/topical-authority-report/">Floyi</a>).</li></ol>
<p>Floyi's numbers are correlations from a snapshot of curated maps. They do not prove that covering more topics causes more citations, and Floyi says so itself. They do show that a keyword-by-keyword view misses where a large share of AI visibility comes from.</p>
<nav class="toc" aria-labelledby="toc-h"><p class="toc-head" id="toc-h">On this page <span>12 sections</span></p><ol><li><a href="#topics-vs-keywords-vs-entities-at-a-glance">Topics vs keywords vs entities at a glance</a></li><li><a href="#what-are-topics-in-seo-and-ai-search">What are topics in SEO and AI search?</a></li><li><a href="#what-are-keywords">What are keywords?</a></li><li><a href="#what-are-entities-and-how-do-they-connect-topics-and-keywords">What are entities?</a></li><li><a href="#topics-vs-keywords-what-are-the-main-differences">The main differences</a></li><li><a href="#keywords-vs-topics-in-seo-which-comes-first">Which comes first in SEO?</a></li><li><a href="#why-do-topical-maps-beat-keyword-lists-for-ai-overviews-and-chatgpt">Why topical maps beat keyword lists for AI search</a></li><li><a href="#how-do-you-build-a-topic-and-keyword-strategy-8-steps">How to build a topic-and-keyword strategy (8 steps)</a></li><li><a href="#worked-example-a-topical-map-for-local-listings-management-software">Worked example: local listings management</a></li><li><a href="#what-are-the-most-common-topics-vs-keywords-mistakes">Common mistakes</a></li><li><a href="#how-is-this-different-from-aeo-vs-seo-vs-geo">How this differs from AEO vs SEO vs GEO</a></li><li><a href="#faq-topics-vs-keywords">FAQ</a></li></ol></nav>
<h2 id="topics-vs-keywords-vs-entities-at-a-glance">Topics vs keywords vs entities at a glance</h2>
<p>Topics are subjects, keywords are typed queries, and entities are the named things both refer to. The table compares them on what they are, who uses them, how you find them and how you measure them. Keywords sit inside topics, and entities ground the meaning of both.</p>
<p><strong>One SaaS example side by side.</strong> Topic: local listings management. Keyword: "best local listings management software". Entity: Google Business Profile. The topic is the subject you cover with a pillar page and cluster. The keyword is the head term for a commercial page inside that topic. The entity is a named thing the page must get right so search and AI tools do not confuse it with another product.</p>
<figure><picture><source srcset="/journal/topics-vs-keywords/topics-vs-keywords-vs-entities.webp" type="image/webp"><img src="/journal/topics-vs-keywords/topics-vs-keywords-vs-entities.png" alt="Comparison of topics, keywords and entities by what each is, an example, unit of work, how search uses it and how AI uses it" width="1920" height="1080" loading="lazy" decoding="async"></picture></figure>
<div class="article-table"><table><thead><tr><th scope="col">Dimension</th><th scope="col">Topics</th><th scope="col">Keywords</th><th scope="col">Entities</th></tr></thead><tbody><tr><td>What it is</td><td>A subject a page or site covers, such as "local listings management"</td><td>A query string people type, such as "best local listings management software"</td><td>A named thing a search engine can identify, such as Google Business Profile or Yelp</td></tr><tr><td>Unit of work</td><td>One page per distinct topic or intent</td><td>Many keywords per page</td><td>Many entities per page, used consistently across the site</td></tr><tr><td>How search engines use it</td><td>Judge whether a page and site cover a subject in depth</td><td>Match pages to the words in a query</td><td>Resolve ambiguity and connect related facts ("things, not strings")</td></tr><tr><td>How AI answer engines use it</td><td>Retrieve pages across related sub-queries (query fan-out)</td><td>Seed the prompt or the head query</td><td>Ground claims about brands, products and concepts</td></tr><tr><td>How you find it</td><td>Topical map, customer questions, sales calls, fan-out research</td><td>Keyword tools (volume, difficulty, intent)</td><td>Knowledge panels, Wikipedia/Wikidata, product docs, competitor pages</td></tr><tr><td>Example match types</td><td>Hub topic, subtopic, sibling topic</td><td>Phrase match, term match, semantic</td><td>Brand, product, feature, standard, person, place</td></tr><tr><td>What you measure</td><td>Ranked coverage across the map, AI citations per topic</td><td>Position, clicks, impressions per head term</td><td>Brand mentions, correct descriptions in AI answers</td></tr><tr><td>Main risk if ignored</td><td>Thin site that ranks for nothing in depth</td><td>Pages no one searches for, weak titles</td><td>AI tools describe you wrongly or confuse you with another brand</td></tr></tbody></table></div>
<h2 id="what-are-topics-in-seo-and-ai-search">What are topics in SEO and AI search?</h2>
<p>A topic is one subject your content covers, wide enough to serve a real question and narrow enough to fit one page. "Topics" in SEO also means the larger subject areas your whole site covers. Search engines and AI systems reason over these subjects, not over single strings, when they decide whether your page is relevant.</p>
<p>Floyi gives a useful working definition in its report: "A topic is one subject a website covers with one page." It builds each topic "by clustering keywords that serve the same search intent, so one topic can gather many keyword variants" (<a href="https://floyi.com/research/topical-authority-report/">Floyi</a>). That is the definition this guide uses.</p>
<p>Topics come in layers. A <strong>pillar topic</strong> is the broad subject, such as "RFP management." A <strong>subtopic</strong> is a distinct question inside it, such as "how to answer a security questionnaire." A <strong>sibling topic</strong> is related but separate, such as "proposal management" or "sales enablement."</p>
<p>Google has said for years that its systems match meaning, not just words. Its ranking systems guide describes RankBrain as a system that "helps us understand how words are related to concepts," and neural matching as a system used "to understand representations of concepts in queries and pages and match them to one another" (<a href="https://developers.google.com/search/docs/appearance/ranking-systems-guide">Google</a>).</p>
<p>The same guide describes passage ranking as a way "to identify individual sections or 'passages' of a web page to better understand how relevant a page is to a search" (<a href="https://developers.google.com/search/docs/appearance/ranking-systems-guide">Google</a>). So a page that covers a topic well can be relevant to queries that only one section answers.</p>
<p>AI search pushes this further. Google says AI Overviews and AI Mode may use a "query fan-out" technique, "issuing multiple related searches across subtopics and data sources" to build a response (<a href="https://developers.google.com/search/docs/appearance/ai-features">Google</a>). One question from a buyer becomes many searches across a topic, and the answer draws from whatever ranks for those searches.</p>
<h3 id="topic-examples-for-saas-teams">Topic examples for SaaS teams</h3>
<p>Three short examples show how a topic breaks into subjects. Each pillar holds subtopics that deserve their own page because each answers a different question.</p>
<ul><li><strong>Local listings management:</strong> NAP consistency, duplicate listing cleanup, Google Business Profile suspensions, Apple Business Connect setup, review response workflows, multi-location reporting.</li><li><strong>AI RFP software:</strong> RFP response process, security questionnaires, content library upkeep, go/no-go decisions, proposal win rates, RFP software pricing.</li><li><strong>Internal communications:</strong> employee newsletters, frontline worker apps, intranet vs employee app, internal comms metrics, change communication plans.</li></ul>
<p>Notice that none of these subtopics is a synonym of another. Each one would make a reader expect a different page. That is the test for a real topic.</p>
<figure><picture><source srcset="/journal/topics-vs-keywords/topics-vs-keywords-topical-map.webp" type="image/webp"><img src="/journal/topics-vs-keywords/topics-vs-keywords-topical-map.png" alt="Topical map for local listings management: pillar topic branching to six subtopics, each with its head keyword and key entities" width="1920" height="1080" loading="lazy" decoding="async"></picture></figure>
<h2 id="what-are-keywords">What are keywords?</h2>
<p>A keyword is the exact word or phrase a person types or speaks into a search engine, and the term you track in a rank tool. Keywords carry measurable data, such as search volume, difficulty and intent. They tell you how buyers phrase a need, which makes them the right input for titles, slugs and commercial pages.</p>
<p>Keywords are still useful because search demand is still phrased in words. A head term like "rfp software" tells you a buyer is shopping. A longer phrase like "how to answer an rfp faster" tells you they are working, not buying yet. Those two need different pages.</p>
<p>Keywords are also how you measure classic SEO. Search Console reports queries, rank trackers report positions, and paid search bids on keywords. None of that goes away in 2026.</p>
<p>What has changed is the job a keyword does. It used to be the whole plan. Now it is the label on a page that serves a topic. Google's guide says its AI systems can "understand the relevance of pages, even when there is no exact match between the query and the page's primary content" (<a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google</a>).</p>
<h3 id="what-are-the-3-types-of-keywords-inside-a-topic">What are the 3 types of keywords inside a topic?</h3>
<p>Keywords inside a topic fall into three useful types: phrase match, term match and semantic. Phrase match keeps the topic's words in order, term match uses the words in any order, and semantic keywords share meaning without sharing words. Most teams over-collect the first type and miss the third.</p>
<p>These labels describe how a keyword relates to a topic. They are different from Google Ads match types, which control which searches trigger an ad.</p>
<div class="article-table"><table><thead><tr><th scope="col">Keyword type</th><th scope="col">Definition</th><th scope="col">Local listings example</th><th scope="col">AI RFP software example</th><th scope="col">What to do with it</th></tr></thead><tbody><tr><td>Phrase match</td><td>Contains the topic's words in the same order</td><td>"local listings management software"</td><td>"rfp software pricing"</td><td>Use as head terms and page titles</td></tr><tr><td>Term match</td><td>Contains all the topic's words, in any order</td><td>"manage local business listings"</td><td>"software for rfp responses"</td><td>Fold into the same page as a variant, unless intent differs</td></tr><tr><td>Semantic</td><td>Shares meaning, not words</td><td>"NAP consistency," "duplicate Google Business Profile"</td><td>"security questionnaire automation," "proposal content library"</td><td>Often deserves its own subtopic page</td></tr></tbody></table></div>
<p><strong>Phrase match keywords</strong> are the easiest to find. Type the topic into any keyword tool and filter by "matching terms." They are good page anchors because they map cleanly to titles.</p>
<p><strong>Term match keywords</strong> usually mean the same thing as a phrase match. "Software for rfp responses" and "rfp response software" want the same page. Floyi's study treats this as one topic for the same reason, noting that "ten keywords that mean the same thing return nearly the same results" (<a href="https://floyi.com/research/topical-authority-report/">Floyi</a>).</p>
<p><strong>Semantic keywords</strong> are where depth lives. A buyer researching listings software may never type "listings." They type "why is my business showing the wrong hours on Google." That query belongs to your topic, and most keyword lists built on phrase match will never surface it.</p>
<h2 id="what-are-entities-and-how-do-they-connect-topics-and-keywords">What are entities, and how do they connect topics and keywords?</h2>
<p>An entity is a specific, named thing that a search engine can identify and connect to facts: a brand, product, person, place, standard or concept. Entities ground meaning. They tell Google and AI tools which "Taj Mahal" or which "Responsive" a page means, and they link your keywords and topics to things the systems already know.</p>
<p>Google introduced its Knowledge Graph in 2012 with the phrase "things, not strings." Its launch post said the graph "understands real-world entities and their relationships to one another," and held "more than 500 million objects" and "more than 3.5 billion facts" at launch (<a href="https://blog.google/products/search/introducing-knowledge-graph-things-not/">Google</a>).</p>
<p>The example in that post still explains the idea best. To a keyword-only system, [taj mahal] is two words. To an entity-aware system, it might mean a monument, a musician or a casino, and Google can tell which one you mean.</p>
<p>In SaaS, the same problem shows up constantly. Brand names are often ordinary words. Product categories have three names. A feature in your docs may be called something different in a buyer's head. Entities are how you close those gaps.</p>
<p>Here is how the three layers connect in one page:</p>
<ul><li><strong>Topic:</strong> security questionnaire automation.</li><li><strong>Keywords:</strong> "security questionnaire software," "automate security questionnaires," "how to answer a vendor security questionnaire."</li><li><strong>Entities:</strong> SOC 2, ISO 27001, SIG questionnaire, CAIQ, vendor risk management, your product name, your company name.</li></ul>
<p>The topic decides what the page is for. The keywords decide how it is titled and tracked. The entities make the page unambiguous, both for search engines and for AI models deciding whether to cite it as a source on SOC 2 questionnaires.</p>
<h2 id="topics-vs-keywords-what-are-the-main-differences">Topics vs keywords: what are the main differences?</h2>
<p>The main differences between topics and keywords are scope, structure, data and how each is evaluated. Topics are broad subjects that hold many keywords, while keywords are single strings with measurable demand. In AI search, topics also decide which sub-queries you can be cited for, while keywords decide only one query.</p>
<div class="article-table"><table><thead><tr><th scope="col">Difference</th><th scope="col">Topics</th><th scope="col">Keywords</th></tr></thead><tbody><tr><td>Scope</td><td>A subject with many questions inside</td><td>One query string</td></tr><tr><td>Relationship</td><td>Contain keywords</td><td>Belong to a topic</td></tr><tr><td>Data in SEO tools</td><td>Partly visible, often built by clustering</td><td>Volume, difficulty, CPC, intent shown per term</td></tr><tr><td>Zero-volume terms</td><td>Still count if they belong to the subject</td><td>Often filtered out of keyword lists</td></tr><tr><td>How Google judges relevance</td><td>Concepts, passages, site-wide signals</td><td>Words in the query and page</td></tr><tr><td>How AI search uses them</td><td>Fan-out across subtopics, citations from across the topic</td><td>Seed query only</td></tr><tr><td>Page planning</td><td>One page per distinct topic or intent</td><td>Many keywords per page</td></tr><tr><td>Measurement</td><td>Ranked coverage, AI citations across the map</td><td>Rank and clicks per term</td></tr></tbody></table></div>
<h3 id="difference-1-keywords-live-inside-topics-not-the-other-way-round">Difference 1: Keywords live inside topics, not the other way round</h3>
<p>A topic holds many keywords. "Local listings management" contains hundreds of phrase, term and semantic keywords. No single keyword contains the topic. That is why a keyword list, however long, is not a content plan.</p>
<h3 id="difference-2-keyword-tools-miss-part-of-every-topic">Difference 2: Keyword tools miss part of every topic</h3>
<p>Keyword tools report terms with measurable demand. Many real buyer questions show little or zero volume because they are new, long or phrased many ways. "How do I merge duplicate Google Business Profile listings for 40 locations" may show nothing in a tool and still be the question that closes a deal.</p>
<h3 id="difference-3-a-topic-s-keywords-are-often-not-phrase-or-term-matches">Difference 3: A topic's keywords are often not phrase or term matches</h3>
<p>The keywords that show depth are usually semantic. A page on AI RFP software that never mentions "content library," "SME review" or "security questionnaire" looks shallow to a reader who knows the job. It looks shallow to retrieval systems too.</p>
<h3 id="difference-4-ai-answers-fan-out-across-a-topic">Difference 4: AI answers fan out across a topic</h3>
<p>This difference is new. When Google's AI features fan out a query, they search for related subtopics. Ahrefs reports research by Joshua Hardwick, run with Surfer, which found that pages ranking across fan-out queries were 161% more likely to be cited in the final AI Overview than pages ranking only for the main term (<a href="https://ahrefs.com/blog/how-to-rank-in-ai-overviews/">Ahrefs</a>). Treat that as reported third-party research. Fan-outs are also unstable: Surfer found only about 27% of fan-out queries stayed consistent across repeated runs (<a href="https://surferseo.com/blog/keyword-query-fan-out-research/">Surfer</a>), so cover the subtopics that recur, not every fan-out.</p>
<h3 id="difference-5-citations-reward-coverage-across-the-map">Difference 5: Citations reward coverage across the map</h3>
<p>Floyi found that 26.8% to 43.7% of AI citations, depending on the engine, went to websites that did not rank for that query but did rank elsewhere in the same topical map (<a href="https://floyi.com/research/topical-authority-report/">Floyi</a>). A keyword report cannot see those citations, because they happen on queries you do not rank for.</p>
<h3 id="difference-6-keywords-tell-you-how-to-win-one-query-topics-tell-you-how-to-win-many">Difference 6: Keywords tell you how to win one query, topics tell you how to win many</h3>
<p>Floyi also found that on a query a site already ranks for, position decided citation odds, and wider coverage "adds nothing on top of it." Coverage helped on queries the site did not rank for (<a href="https://floyi.com/research/topical-authority-report/">Floyi</a>). So keyword work wins individual queries. Topic work multiplies how many queries you are in contention for.</p>
<h2 id="keywords-vs-topics-in-seo-which-comes-first">Keywords vs topics in SEO: which comes first?</h2>
<p>For keywords vs topics in SEO, topics come first for planning and keywords come first for page-level decisions. Map the topics you must cover, then pick the head keyword for each page. The exception is bottom-funnel commercial pages, where the exact keyword, such as "X vs Y" or "best X software," is the topic.</p>
<figure><picture><source srcset="/journal/topics-vs-keywords/topics-vs-keywords-order.webp" type="image/webp"><img src="/journal/topics-vs-keywords/topics-vs-keywords-order.png" alt="Order of work: topics plan, keywords title, entities ground, with bottom-funnel commercial pages as the exception that starts from the keyword" width="1920" height="1080" loading="lazy" decoding="async"></picture></figure>
<p>The order changes with the goal. Here is how we decide.</p>
<div class="article-table"><table><thead><tr><th scope="col">Your goal</th><th scope="col">Start from</th><th scope="col">Why</th><th scope="col">Example</th></tr></thead><tbody><tr><td>Rank a commercial page that buyers search by name</td><td>Keywords</td><td>The query wording is fixed and high intent</td><td>"best AI RFP software," "Loopio alternatives"</td></tr><tr><td>Win a comparison query</td><td>Keywords</td><td>Buyers type the exact pairing</td><td>"Yext vs BrightLocal"</td></tr><tr><td>Build authority in a new category</td><td>Topics</td><td>You need coverage before any page ranks</td><td>"local listings management" hub and subtopics</td></tr><tr><td>Get cited in AI Overviews, AI Mode, ChatGPT</td><td>Topics, then questions</td><td>Fan-out and off-query citations reward coverage</td><td>Answer every question a buyer asks about RFP security reviews</td></tr><tr><td>Fix a site with many overlapping pages</td><td>Topics</td><td>Cluster keywords to find duplicates</td><td>Merge five "listings sync" posts into one</td></tr><tr><td>Refresh a page that dropped</td><td>Keywords, then topics</td><td>Check the query first, then the gaps</td><td>Re-check intent, then add missing subtopics</td></tr></tbody></table></div>
<h3 id="when-should-you-start-from-keywords">When should you start from keywords?</h3>
<p>Start from keywords when the buyer's wording is the product. Comparison pages, "best X" lists, alternatives pages, pricing pages and integration pages all target a known string. Getting that string right in the title, H1 and slug still matters, because it is what people type and what they recognise in results.</p>
<h3 id="when-should-you-start-from-topics">When should you start from topics?</h3>
<p>Start from topics when you want authority, AI citations or a plan for more than a few pages. Ahrefs' analysis of 146 million SERPs, in a guide published in January 2026, found AI Overviews appear on 21% of all keywords but on 57.9% of question queries and 46.4% of queries with seven or more words (<a href="https://ahrefs.com/blog/how-to-rank-in-ai-overviews/">Ahrefs</a>). Those long, question-shaped queries are exactly what a topic map surfaces and a head-term list misses.</p>
<p>The same Ahrefs page reports that 99.9% of AI Overview keywords are informational. Newer data cuts the other way for SaaS buying queries. Semrush's 21 Oct 2026 study of 400 US commercial keywords found AI Overviews on 88% of them by August 2026, on 96% of "best X for Y" searches and on 100% of software "alternatives" searches (<a href="https://www.semrush.com/blog/ai-overviews-commercial-modifiers-study/">Semrush</a>). Commercial SaaS queries now mostly show AI Overviews too, so map your commercial pages into the same topics as the questions around them.</p>
<h3 id="does-this-change-for-chatgpt-and-perplexity">Does this change for ChatGPT and Perplexity?</h3>
<p>The logic holds, with one difference: ChatGPT and Perplexity users type prompts, not keywords. Prompts are longer and more specific, and they carry context such as company size or stack. Research prompts by grouping them under the same topics you mapped for search, not as a separate list.</p>
<p>Floyi's data shows ChatGPT relied least on the exact query's top 20. 71.9% of ChatGPT citations went to websites outside that query's Google top 20 (<a href="https://floyi.com/research/topical-authority-report/">Floyi</a>). ChatGPT citations depend least on the exact query's Google top 20 (71.9% outside). Floyi's coverage link was weakest on ChatGPT, so treat topic coverage as groundwork, not the whole ChatGPT answer.</p>
<p>Floyi also reports that 54% of ChatGPT answers and 61% of Gemini answers in its dataset cited no websites at all, against 7% for AI Mode. Our inference, not a Floyi finding: on those engines, being named in the text matters as much as being linked, which is where entities and off-site mentions come in. Floyi itself calls its evidence on naming weaker.</p>
<h2 id="keywords-vs-key-topics-how-do-you-pick-the-map-nodes">Keywords vs key topics: how do you pick the map nodes?</h2>
<p>Keywords vs key topics is a question of priority. Key topics are the nodes of your topical map that a buyer would expect an authority to cover, while keywords are the search strings attached to each node. Pick key topics by buyer journey and product fit first, then confirm each with keyword and question data.</p>
<p>A key topic earns its place if it passes four tests:</p>
<ol><li><strong>Buyer relevance.</strong> Would a buyer evaluating your category ask about this before, during or after purchase?</li><li><strong>Distinct intent.</strong> Would a reader expect a different page for it, or is it a synonym of something already on the map?</li><li><strong>Product truth.</strong> Can you say something specific and first-hand about it, from your product, your data or your customers?</li><li><strong>Demand signal.</strong> Is there evidence people ask about it, from keyword tools, People Also Ask, sales calls, support tickets, Reddit threads or AI prompts?</li></ol>
<p>Demand signal is last on purpose. A key topic with zero tool volume can still pass the first three tests and belong on the map. A high-volume keyword that fails the product truth test usually does not.</p>
<h3 id="how-many-key-topics-does-a-saas-topical-map-need">How many key topics does a SaaS topical map need?</h3>
<p>There is no fixed number. Floyi's 42 maps ranged from 107 to 3,489 queries, with one query per topic (<a href="https://floyi.com/research/topical-authority-report/">Floyi</a>). A focused B2B SaaS product might start with 40 to 120 key topics in its core category and grow from there. Size the map to the subject, not to a quota.</p>
<h3 id="how-do-you-know-a-key-topic-is-covered">How do you know a key topic is covered?</h3>
<p>A key topic is covered when one page answers its main question well, ranks or is close to ranking for its head term, and links to and from related pages on the map. Publishing a page is not coverage. Floyi deliberately measured ranked coverage, the share of topics where a site holds a top-20 position, because a page that never ranks does not count.</p>
<h2 id="keywords-vs-topics-vs-entities-how-do-they-work-together">Keywords vs topics vs entities: how do they work together?</h2>
<p>Keywords vs topics vs entities is not a choice between three options. They are three layers of the same plan. Topics define what you cover, keywords define how each page is found and tracked, and entities define exactly which things each page is about, so search engines and AI tools can connect and trust it.</p>
<div class="article-table"><table><thead><tr><th scope="col">Layer</th><th scope="col">Question it answers</th><th scope="col">Owned by</th><th scope="col">Lives on the page as</th><th scope="col">Measured by</th><th scope="col">Common failure</th></tr></thead><tbody><tr><td>Topics</td><td>What must we cover to be an authority?</td><td>Content strategy</td><td>The page's purpose, H1 and sections</td><td>Ranked coverage across the map</td><td>Gaps, or ten pages on one topic</td></tr><tr><td>Keywords</td><td>How do buyers phrase it?</td><td>SEO</td><td>Title, H1, slug, headings, first lines</td><td>Position, clicks, impressions</td><td>Synonym pages, keyword stuffing</td></tr><tr><td>Entities</td><td>Which exact things are we talking about?</td><td>Content, product marketing, PR</td><td>Brand, product, feature and standard names used consistently</td><td>Mentions, correct AI descriptions</td><td>Inconsistent names, vague claims</td></tr></tbody></table></div>
<h3 id="why-do-entities-matter-more-in-ai-answers">Why do entities matter more in AI answers?</h3>
<p>AI answers name things. When a buyer asks ChatGPT for "the best local listings tools for franchises," the answer is a list of entities, usually brands. If your brand is described inconsistently across your site, review sites and third-party articles, the model has a weaker basis for naming you.</p>
<p>Ahrefs reports that in its own research, brand mentions are "the number one correlating factor with AI Overview visibility," and that YouTube mentions showed the strongest correlation in its brand factor study (<a href="https://ahrefs.com/blog/how-to-rank-in-ai-overviews/">Ahrefs</a>). Mentions are entity signals. They live mostly off your site.</p>
<p>Google's guidance adds a guardrail. It says "seeking inauthentic 'mentions' across the web isn't as helpful as it might seem" (<a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google</a>). The work is earning real coverage, not planting your name.</p>
<h3 id="how-do-you-use-entities-on-a-page-without-stuffing">How do you use entities on a page without stuffing?</h3>
<p>Name things precisely and consistently. Use your full product name once near the top, then a stable short form. Name standards, integrations and categories the way your buyers and their tools name them. Link to the canonical source for each the first time it appears. Keep your category description the same on your site, your G2 or Capterra profile, LinkedIn and press pages.</p>
<p>Structured data can help with consistency, but it is not a shortcut. Google says "structured data isn't required for generative AI search, and there's no special schema.org markup you need to add," while it is still worth using for rich results (<a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google</a>). Our view: Organization and Product schema with one consistent name and sameAs links to your official profiles helps keep entities consistent. Treat it as a consistency aid, not an AI ranking lever.</p>
<h2 id="why-do-topical-maps-beat-keyword-lists-for-ai-overviews-and-chatgpt">Why do topical maps beat keyword lists for AI Overviews and ChatGPT?</h2>
<p>Topical maps track more AI citations than keyword lists because AI answers retrieve across a subject, not one string. Google fans a query out into related sub-queries, and Floyi found sites covering more of a topical map were cited more often on all four engines it tested, including on queries where those sites did not rank in the top 20.</p>
<p>Here is what the Floyi Topical Authority Report 2026 measured. Read every figure as a correlation from one dataset, not proof of cause.</p>
<div class="article-table"><table><thead><tr><th scope="col">Floyi finding</th><th scope="col">Figure</th><th scope="col">Why it matters for topics vs keywords</th></tr></thead><tbody><tr><td>Dataset size</td><td>42 topical maps, six industries, 29,319 topics, 535,239 top-20 Google positions, 354,955 AI citations</td><td>Large enough to see patterns across AI Overviews, AI Mode, ChatGPT and Gemini</td></tr><tr><td>Citation rate for sites ranking on 50%+ of a map's topics (platforms excluded)</td><td>30.8% of citing AI Overviews</td><td>Broad coverage tracks with frequent citation</td></tr><tr><td>Citation rate for sites ranking on under 5% of topics</td><td>0.14% of citing AI Overviews</td><td>Low-coverage sites are rarely cited individually, though as a group they still take 55.3% of AI Overview citations</td></tr><tr><td>Correlation of ranked coverage with AI citations</td><td>0.51 AI Overviews, 0.48 AI Mode, 0.33 ChatGPT, 0.36 Gemini</td><td>Coverage moved with citations on every engine</td></tr><tr><td>Correlation of Domain Rating with AI citations</td><td>0.09 AI Overviews, 0.16 AI Mode, 0.15 ChatGPT, 0.11 Gemini</td><td>Links alone told you little about citations</td></tr><tr><td>AI Overview citations to sites outside that query's top 20</td><td>40.2% (52.4% AI Mode, 71.9% ChatGPT, 41.1% Gemini)</td><td>A big share of citations cannot be won by one keyword ranking</td></tr><tr><td>Same-map, off-query citations</td><td>26.8% to 43.7% across engines</td><td>Ranking elsewhere in the topic still earned citations</td></tr><tr><td>AI Overview citation rate at positions 1 to 3</td><td>60.7% (38.6% at 4 to 10, 12.9% at 11 to 20)</td><td>Keyword position still matters on queries you rank for</td></tr></tbody></table></div>
<p>Source for every row: <a href="https://floyi.com/research/topical-authority-report/">Floyi Topical Authority Report 2026</a>, last updated 2 Sep 2026, data collected to 17 Aug 2026.</p>
<figure><picture><source srcset="/journal/topics-vs-keywords/topics-vs-keywords-floyi-coverage.webp" type="image/webp"><img src="/journal/topics-vs-keywords/topics-vs-keywords-floyi-coverage.png" alt="Bar chart from Floyi's Topical Authority Report 2026: ranked topic coverage correlates with AI citations at 0.51 AI Overviews, 0.48 AI Mode, 0.33 ChatGPT, 0.36 Gemini versus Domain Rating at 0.09, 0.16, 0.15, 0.11; 40.2% of AI Overview and 71.9% of ChatGPT citations went outside the query's top 20. Correlations, not causation" width="1920" height="1080" loading="lazy" decoding="async"></picture></figure>
<h3 id="what-does-the-floyi-data-actually-say-about-keywords">What does the Floyi data actually say about keywords?</h3>
<p>It says keywords still win individual queries. When a site ranked for the exact query, a better position went with a higher citation rate on all four engines. Floyi also found that wider coverage did not improve citation odds on a query a site already ranked for. Position did that work.</p>
<p>What coverage changed was the number of chances. Floyi's average "Giant" site ranked for 211 of its map's queries and a "Tourist" for 2.6. Per ranked query, their citation ratios sat close together, at 0.42 and 0.39, which Floyi describes as a ratio, not a conversion rate, since it includes off-query citations. The broad site was not better per query. It was in contention far more often.</p>
<p>That is the cleanest answer to topics vs keywords we have seen in data. Keywords decide how well you do on a query. Topics decide how many queries you get to compete on, and whether AI answers pick you up on the ones you do not rank for.</p>
<h3 id="what-does-google-say-about-building-pages-for-every-keyword">What does Google say about building pages for every keyword?</h3>
<p>Google says not to. Its AI optimization guide warns that creating separate content "for every possible variation of how people might search," including fan-out queries, primarily to manipulate rankings or AI responses "violates Google's scaled content abuse spam policy." It also calls this "an ineffective long-term strategy" (<a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google</a>).</p>
<p>The same guide tells site owners that AI systems understand synonyms, so "you don't have to worry that you don't have enough 'long-tail' keywords or haven't captured every variation" (<a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google</a>). That is a direct argument for one page per topic, with keyword variants folded in.</p>
<h3 id="what-does-google-say-you-can-ignore">What does Google say you can ignore?</h3>
<p>Google's guide lists things you can ignore for Google Search, including llms.txt and other "special" markup, and "chunking" content. It says "there's no requirement to break your content into tiny pieces for AI to better understand it" and "there's no ideal page length" (<a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google</a>).</p>
<p>That fits Ahrefs' finding of a near-zero correlation (Spearman about 0.04) between word count and AI citations (<a href="https://ahrefs.com/blog/how-to-rank-in-ai-overviews/">Ahrefs</a>). Depth means covering the topic's real questions, not adding words.</p>
<p>Answer-first writing is different from chunking. A clear direct answer under each heading is for readers who skim and for any system quoting a passage. It does not mean splitting one topic across many thin pages.</p>
<h3 id="what-does-google-say-matters-most">What does Google say matters most?</h3>
<p>Google says unique, non-commodity content. Its guide says content people find "unique, compelling, and useful" will likely influence AI search presence "more than any of the other suggestions in this guide," and asks for "a unique point of view" rather than recycling what others have said (<a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google</a>).</p>
<p>For a SaaS team, that means each topic page should carry something only you can say: product data, customer patterns, implementation detail, pricing reality or an opinion your team will defend. That is what makes a page worth citing over the nine others that cover the same topic.</p>
<h2 id="how-do-you-build-a-topic-and-keyword-strategy-8-steps">How do you build a topic-and-keyword strategy? (8 steps)</h2>
<p>Build a topic-and-keyword strategy in eight steps: map topics, assign one intent per page, attach keywords to each topic, set clean URLs, write answer-first pages with consistent entities, link the cluster, earn off-site and YouTube citations, and measure ranked coverage plus AI citations. Each step uses the output of the one before.</p>
<h3 id="step-1-build-the-topical-map">Step 1: Build the topical map</h3>
<p>List every subject a buyer in your category asks about, from first problem to renewal. Pull from sales calls, support tickets, onboarding docs, competitor sites, People Also Ask, Reddit and the prompts your buyers use in ChatGPT. Group them into pillars and subtopics.</p>
<p>Floyi's report gives this advice: "Build the topical map before you measure anything," because "every number in this study divides by the map" (<a href="https://floyi.com/research/topical-authority-report/">Floyi</a>). Your map is your denominator. A weak map makes every later metric misleading.</p>
<h3 id="step-2-assign-one-intent-per-page-not-one-keyword-per-page">Step 2: Assign one intent per page, not one keyword per page</h3>
<p>Cluster keywords by intent. If two keywords return mostly the same results and want the same answer, they belong on one page. If they want different answers, they need different pages.</p>
<p>A quick test: search both terms and compare the top results. Heavy overlap means one page. Different page types, such as a guide vs a pricing comparison, mean two pages.</p>
<h3 id="step-3-attach-a-keyword-set-to-each-topic">Step 3: Attach a keyword set to each topic</h3>
<p>For each topic, choose one head keyword and record the phrase match, term match and semantic variants. Add the questions from People Also Ask and from AI prompts. Note related entities. This becomes the brief.</p>
<p>Floyi tracked one head query per topic so that keyword variants did not count the same coverage many times over (<a href="https://floyi.com/research/topical-authority-report/">Floyi</a>). Do the same in your rank tracker. One head term per topic keeps reporting honest.</p>
<h3 id="step-4-set-the-url-and-slug">Step 4: Set the URL and slug</h3>
<p>Give each topic a short, stable slug built from its head keyword. Keep hub and spoke relationships visible in folders only if your site architecture supports it. Avoid dates and filler words in slugs so pages can be updated without redirects.</p>
<p>Examples: <code>/local-listings-management</code>, <code>/local-listings-management/nap-consistency</code>, <code>/rfp-software/security-questionnaires</code>.</p>
<h3 id="step-5-write-answer-first-pages-with-consistent-entities">Step 5: Write answer-first pages with consistent entities</h3>
<p>Open each page and each major section with a direct answer in 40 to 60 words. That target is our working rule, not a Google requirement. Then support it with original detail: steps, data, screenshots, examples, tables.</p>
<p>Use the head keyword in the title, H1 and first sentence. Use variants naturally in headings where they fit. Name entities precisely and consistently. Ahrefs' advice matches this: answer "directly and early on," because burying the lede delays a model's understanding of the content (<a href="https://ahrefs.com/blog/how-to-rank-in-ai-overviews/">Ahrefs</a>).</p>
<h3 id="step-6-link-the-cluster">Step 6: Link the cluster</h3>
<p>Link every subtopic page to its pillar and to its closest siblings, with anchor text that describes the destination. Google's AI features page lists "making your content easily findable through internal links on your website" among the SEO fundamentals that still apply (<a href="https://developers.google.com/search/docs/appearance/ai-features">Google</a>).</p>
<p>Internal links also show readers the shape of the topic. A buyer who lands on "security questionnaires" should reach "RFP content library" and "RFP software pricing" in one click.</p>
<h3 id="step-7-earn-off-site-coverage-and-youtube-citations">Step 7: Earn off-site coverage and YouTube citations</h3>
<p>Topic coverage on your own site is half the job. AI answers also draw on reviews, comparison articles, videos and forums. Ahrefs reports that YouTube is the most cited domain in AI Overviews according to its Brand Radar data (<a href="https://ahrefs.com/blog/how-to-rank-in-ai-overviews/">Ahrefs</a>). Floyi found YouTube ranked in the top 20 for at least half the topics in 12 of its 42 maps (<a href="https://floyi.com/research/topical-authority-report/">Floyi</a>).</p>
<p>Map your off-site work to the same topics. For each key topic, ask: which third-party pages, videos and threads already get cited, and are we on them? That turns PR, partnerships and video into topic coverage, not random placements.</p>
<h3 id="step-8-measure-ranked-coverage-and-ai-citations-not-one-keyword-rank">Step 8: Measure ranked coverage and AI citations, not one keyword rank</h3>
<p>Track three numbers per topical map:</p>
<ol><li><strong>Ranked coverage:</strong> the share of map topics where you hold a top-20 Google position, using one head term per topic.</li><li><strong>Position on priority topics:</strong> top-3 and top-10 counts for commercial and high-value topics.</li><li><strong>AI citations and mentions:</strong> for a fixed set of prompts per topic, how often each engine cites or names you, run more than once because answers vary.</li></ol>
<p>In Google, use the Generative AI performance report in Search Console, which Google recommends for measuring how content performs in its generative AI features (<a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google</a>). For other engines, log repeated prompt runs. Our <a href="https://www.nakama.in/journal/ai-visibility-report-template">AI visibility report template</a> is a free sheet for this.</p>
<h2 id="worked-example-a-topical-map-for-local-listings-management-software">Worked example: a topical map for local listings management software</h2>
<p>Here is a realistic topical map for a B2B SaaS product that manages local business listings for multi-location brands. It shows how topics, keywords and entities fit together on one plan. Keyword examples are illustrative. Pull volumes and difficulty from your own tool before you prioritise.</p>
<h3 id="pillar-local-listings-management">Pillar: local listings management</h3>
<div class="article-table"><table><thead><tr><th scope="col">Map node (topic)</th><th scope="col">Intent</th><th scope="col">Head keyword (phrase match)</th><th scope="col">Term match variants</th><th scope="col">Semantic keywords and questions</th><th scope="col">Key entities</th><th scope="col">Page type</th></tr></thead><tbody><tr><td>Local listings management (pillar)</td><td>Learn, evaluate</td><td>local listings management</td><td>manage local listings, listings management for businesses</td><td>how to keep business info correct everywhere</td><td>Google Business Profile, Apple Business Connect, Bing Places, Yelp</td><td>Pillar guide</td></tr><tr><td>Local listings management software</td><td>Buy</td><td>local listings management software</td><td>software to manage local listings</td><td>best tool to update hours across directories</td><td>Yext, Synup, BrightLocal, Uberall, Moz Local</td><td>Best-of / comparison</td></tr><tr><td>NAP consistency</td><td>Learn, fix</td><td>nap consistency</td><td>consistent name address phone</td><td>why does Google show my old address</td><td>NAP, citations, local pack</td><td>How-to guide</td></tr><tr><td>Duplicate listings</td><td>Fix</td><td>duplicate google business profile</td><td>remove duplicate business listings</td><td>two Google listings for one location</td><td>Google Business Profile, Google Maps</td><td>Troubleshooting guide</td></tr><tr><td>Google Business Profile suspensions</td><td>Fix</td><td>google business profile suspended</td><td>suspended business profile fix</td><td>why was my listing suspended</td><td>Google Business Profile guidelines, reinstatement</td><td>Troubleshooting guide</td></tr><tr><td>Apple Business Connect</td><td>Set up</td><td>apple business connect</td><td>apple maps business listing</td><td>how to get my business on Apple Maps</td><td>Apple Maps, Apple Business Connect, Siri</td><td>Setup guide</td></tr><tr><td>Review management</td><td>Evaluate, run</td><td>review management software</td><td>managing online reviews</td><td>how to respond to negative Google reviews</td><td>Google reviews, Yelp, Trustpilot, G2</td><td>Guide plus comparison</td></tr><tr><td>Multi-location reporting</td><td>Run</td><td>multi location seo reporting</td><td>reporting for multiple locations</td><td>which locations are losing calls</td><td>Google Business Profile Performance, call tracking</td><td>Guide with template</td></tr><tr><td>Data aggregators</td><td>Learn</td><td>local data aggregators</td><td>business data aggregators</td><td>do data aggregators still matter</td><td>Data Axle, Foursquare</td><td>Explainer</td></tr><tr><td>Listings for AI answers</td><td>Learn</td><td>local business info in ai search</td><td>ai search for local businesses</td><td>why ChatGPT shows wrong opening hours</td><td>ChatGPT, Google AI Mode, Apple Maps</td><td>Opinion plus guide</td></tr><tr><td>Comparison pages</td><td>Buy</td><td>[Brand A] vs [Brand B]</td><td>[Brand A] or [Brand B]</td><td>which is better for franchises</td><td>Named competitor brands</td><td>Comparison page</td></tr><tr><td>Pricing</td><td>Buy</td><td>listings management pricing</td><td>cost of listings software</td><td>how much should I pay per location</td><td>Per-location pricing, annual contracts</td><td>Pricing guide</td></tr></tbody></table></div>
<p>Read the table left to right. The topic decides the page. The head keyword names it. Variants fold into it. Semantic questions become sections or, if the intent differs, their own nodes. Entities make the page specific enough to trust.</p>
<h3 id="how-the-same-map-works-for-ai-rfp-software">How the same map works for AI RFP software</h3>
<p>The method carries over to any SaaS category. A short version for AI RFP software:</p>
<div class="article-table"><table><thead><tr><th scope="col">Map node (topic)</th><th scope="col">Head keyword</th><th scope="col">Semantic questions</th><th scope="col">Key entities</th></tr></thead><tbody><tr><td>RFP software (pillar)</td><td>rfp software</td><td>how do teams answer RFPs faster</td><td>RFP, RFI, RFQ, proposal management</td></tr><tr><td>AI RFP software</td><td>ai rfp software</td><td>can AI write RFP responses accurately</td><td>large language models, content library, SME review</td></tr><tr><td>Security questionnaires</td><td>security questionnaire software</td><td>how to answer a vendor security review</td><td>SOC 2, ISO 27001, SIG, CAIQ</td></tr><tr><td>RFP content library</td><td>rfp content library</td><td>how to keep answers up to date</td><td>knowledge base, Google Drive, SharePoint, Confluence</td></tr><tr><td>Go/no-go decisions</td><td>rfp go no go</td><td>which RFPs should we skip</td><td>bid qualification, win rate</td></tr><tr><td>RFP software pricing</td><td>rfp software pricing</td><td>what does RFP software cost per user</td><td>per-seat pricing, enterprise plans</td></tr><tr><td>Comparisons</td><td>[Brand A] vs [Brand B]</td><td>which RFP tool fits a small team</td><td>named competitor brands</td></tr></tbody></table></div>
<p>Notice what is missing from both maps: separate pages for "rfp software tool," "rfp tool," "rfp response tool" and "rfp management software" if they return the same results. They are keyword variants of one topic. One strong page beats four thin ones, and Google's guidance points the same way.</p>
<h2 id="what-are-the-most-common-topics-vs-keywords-mistakes">What are the most common topics vs keywords mistakes?</h2>
<p>The most common mistakes are building a page per keyword variant, letting several pages compete for one topic, ignoring zero-volume questions that belong to the topic, using inconsistent entity names, and judging progress only by Domain Rating or one head-term rank. Each one makes a site look broad while covering less.</p>
<h3 id="mistake-1-keyword-cannibalization">Mistake 1: Keyword cannibalization</h3>
<p>Two or more of your pages target the same topic and intent, so neither ranks well. It usually starts with a keyword list where near-synonyms each got a post. Fix it by clustering, choosing one page per topic, merging content into it and redirecting the rest.</p>
<h3 id="mistake-2-synonym-pages-and-fan-out-factories">Mistake 2: Synonym pages and fan-out factories</h3>
<p>Some teams now generate a page for every fan-out query an AI tool suggests. Google's guide names this directly as a scaled content abuse risk. Its spam policies define scaled content abuse as "when many pages are generated for the primary purpose of manipulating search rankings and not helping users" (<a href="https://developers.google.com/search/docs/essentials/spam-policies">Google</a>). Use fan-out research to find gaps inside a topic, then cover them as sections.</p>
<h3 id="mistake-3-ignoring-zero-volume-but-entity-relevant-questions">Mistake 3: Ignoring zero-volume but entity-relevant questions</h3>
<p>A question about "SOC 2 Type II answers in RFPs" may show no volume. It still belongs to the topic, names entities your buyers care about and may be exactly what a buyer types into ChatGPT. Judge these by buyer relevance and product truth, not by tool volume.</p>
<h3 id="mistake-4-optimizing-only-for-domain-rating">Mistake 4: Optimizing only for Domain Rating</h3>
<p>Links still matter for SEO. But in Floyi's dataset, Domain Rating correlated with AI Overview citations at 0.09, against 0.51 for ranked coverage, and the two measures barely moved together (0.11) (<a href="https://floyi.com/research/topical-authority-report/">Floyi</a>). Floyi notes 7.9% of its lowest-coverage placements had a DR of 90 or higher. A strong link profile does not tell you whether you cover the topic.</p>
<h3 id="mistake-5-inconsistent-entity-names">Mistake 5: Inconsistent entity names</h3>
<p>Your product is "Acme Listings" on the homepage, "Acme Local" in docs and "AcmeLL" on G2. Buyers and AI models see three things. Pick one name, one short form and one category line, and use them everywhere.</p>
<h3 id="mistake-6-writing-commodity-content-for-every-node">Mistake 6: Writing commodity content for every node</h3>
<p>A topic map can tempt teams to fill every node fast with generic posts. Google's guide contrasts commodity content, which "adds little unique insight," with non-commodity content that "provides unique expert or experienced takes" (<a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google</a>). A smaller map filled with first-hand pages beats a large map of summaries.</p>
<h3 id="mistake-7-measuring-one-keyword-and-calling-it-the-topic">Mistake 7: Measuring one keyword and calling it the topic</h3>
<p>A single head-term rank tells you about one query. It hides the off-query citations, the subtopics you rank for and the ones you miss. Report by topic map: ranked coverage, priority positions and AI citations together.</p>
<h2 id="how-is-this-different-from-aeo-vs-seo-vs-geo">How is this different from AEO vs SEO vs GEO?</h2>
<p>This guide is about the research and planning unit: what you build your content plan around. Our <a href="https://www.nakama.in/journal/aeo-vs-seo-vs-geo">AEO vs SEO vs GEO</a> guide defines the three disciplines and what to do first. In short, SEO, AEO and GEO are the jobs, and topics, keywords and entities are the inputs all three use.</p>
<p>The two fit together. SEO's classic research unit is the keyword. AEO works at the level of the question, and GEO at the level of prompts and the sources cited for them. A topical map holds all three, because each topic carries its keywords, its questions and the prompts buyers use about it.</p>
<p>For the page-level side of that work, see our <a href="https://www.nakama.in/journal/answer-engine-optimization">answer engine optimization for SaaS playbook</a>. For engine-specific guides, see <a href="https://www.nakama.in/journal/how-to-rank-in-google-ai-overviews">how to rank in Google AI Overviews</a> and <a href="https://www.nakama.in/journal/how-to-rank-in-chatgpt">how to rank in ChatGPT</a>.</p>
<p>Engine-specific how-to guides and Floyi-style ranking playbooks live on those pages. This article stays on the planning unit: topics vs keywords vs entities.</p>
<h2 id="faq-topics-vs-keywords">FAQ: topics vs keywords</h2>
<h3 id="what-is-the-difference-between-topics-and-keywords">What is the difference between topics and keywords?</h3>
<p>A topic is the subject a page covers, and a keyword is the exact phrase someone types to find it. One topic holds many keywords. Plan your site around topics, then use keywords to title, track and phrase each page the way buyers search.</p>
<h3 id="are-keywords-still-important-for-seo-in-2026">Are keywords still important for SEO in 2026?</h3>
<p>Yes. Keywords still decide titles, slugs, commercial pages and rank tracking, and Google says optimizing for AI search is "still SEO." What changed is that one keyword no longer equals one page. Group keyword variants into topics and give each topic one strong page.</p>
<h3 id="keywords-vs-topics-in-seo-which-should-come-first">Keywords vs topics in SEO: which should come first?</h3>
<p>Topics come first for planning, keywords come first for individual commercial pages. Map the topics your buyers ask about, then choose a head keyword for each page. For "best X," "X vs Y" and pricing pages, the exact keyword is the topic, so start there.</p>
<h3 id="what-is-the-difference-between-keywords-and-key-topics">What is the difference between keywords and key topics?</h3>
<p>Key topics are the essential nodes on your topical map, the subjects an authority in your category must cover. Keywords are the search strings attached to each node. Choose key topics by buyer relevance and product knowledge, then confirm demand with keyword, question and prompt data.</p>
<h3 id="what-is-the-difference-between-keywords-topics-and-entities">What is the difference between keywords, topics and entities?</h3>
<p>Keywords are typed queries, topics are subjects, and entities are named things such as brands, products and standards. Topics define coverage, keywords define how pages are found, and entities make meaning unambiguous so search engines and AI tools know exactly what each page is about.</p>
<h3 id="do-topics-matter-more-than-keywords-for-ai-overviews-and-chatgpt">Do topics matter more than keywords for AI Overviews and ChatGPT?</h3>
<p>The evidence points that way for citations. Floyi found ranked coverage across a topical map correlated with AI Overview citations at 0.51 against 0.09 for Domain Rating, and 71.9% of ChatGPT citations went to sites outside the query's top 20. These are correlations, not proof of cause.</p>
<h3 id="should-i-create-a-separate-page-for-every-keyword-variation">Should I create a separate page for every keyword variation?</h3>
<p>No. Google's AI optimization guide says creating separate content for every search variation, including fan-out queries, primarily to manipulate rankings or AI answers violates its scaled content abuse policy. Put close variants on one page. Create a new page only when the intent or expected answer is different.</p>
<h3 id="what-is-a-topical-map">What is a topical map?</h3>
<p>A topical map is the structured set of topics a brand needs to cover to serve its audience, with pillars, subtopics and the links between them. Each node is one topic and one page, with its own head keyword, variants, questions and entities.</p>
<h3 id="how-many-keywords-should-one-page-target">How many keywords should one page target?</h3>
<p>As many as share the same intent. One page usually has one head keyword plus its phrase match, term match and semantic variants. If two keywords return mostly the same search results, they belong on the same page. If the results differ, split them.</p>
<h3 id="topic-vs-keyword-is-a-topic-just-a-long-tail-keyword">Topic vs keyword: is a topic just a long-tail keyword?</h3>
<p>No. A long-tail keyword is still one query string. A topic is the subject behind many queries, including long-tail ones. "How to remove a duplicate Google listing" is a long-tail keyword inside the topic "duplicate listings," which also holds many other phrasings.</p>
<h3 id="how-do-i-measure-topical-authority">How do I measure topical authority?</h3>
<p>Measure ranked coverage: the share of your map's topics where you hold a top-20 Google position, tracking one head term per topic. Add top-3 and top-10 counts for priority topics, and AI citation rates from repeated prompt runs. Floyi's report uses ranked coverage as its measurable signal.</p>
<h3 id="do-zero-volume-keywords-matter">Do zero-volume keywords matter?</h3>
<p>Yes, when they belong to the topic. Keyword tools miss many real buyer questions. A zero-volume question that names your category's entities and comes up in sales calls can be worth a section or a page, and it may match the long prompts buyers type into AI tools.</p>
<h2 id="the-one-thing-to-remember">The one thing to remember</h2>
<p>Topics vs keywords is not a contest. Topics decide what you cover and how many queries you can win, keywords decide how each page is named and found, and entities decide whether search engines and AI tools trust what you say. Plan by topic, write by keyword, and name things precisely.</p>
<p>If you want this done end to end, Nakama Growth builds topic maps for SaaS categories and pairs them with the off-site work AI answers draw on: YouTube, third-party coverage and AEO and GEO measurement. See our <a href="https://www.nakama.in/services/geo">GEO services</a> and <a href="https://www.nakama.in/services/content">content services</a>, or keep reading below.</p>
<h2 id="about-the-author">About the author</h2>
<div class="author-box" id="yash-kumar"><img src="/authors/yash-kumar-nakama-ceo.webp" srcset="/authors/yash-kumar-nakama-ceo.webp 400w, /authors/yash-kumar-nakama-ceo-800.webp 800w" sizes="96px" alt="Yash Kumar, Co-founder and CEO of Nakama Growth" width="96" height="96" loading="lazy" decoding="async"><div class="author-box-text"><p><a href="https://www.nakama.in/authors/yash-kumar" rel="author">Yash Kumar</a> is Co-founder and CEO of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask ChatGPT, Perplexity, Gemini and Google AI Overviews what to choose. He leads Nakama Growth's work on earning mentions on the sources those tools read.</p></div></div>`;

export const topicsVsKeywordsArticle: Article = {
 slug: 'topics-vs-keywords',
 category: 'Guide',
 title: "Topics vs Keywords: Which to Use for SEO and AI Search (2026)",
 description: "Topics vs keywords: a topic is the subject a page covers; a keyword is an exact string people type. Plan with topics; title commercial pages with keywords.",
 readTime: "36 min read",
 motif: 'guide',
 metaTitle: "Topics vs Keywords: Which to Use for SEO and AI Search (2026)",
 date: dayOf(PUBLISHED_AT),
 publishedAt: PUBLISHED_AT,
 authorName: 'Yash Kumar',
 /** Preview gate. Excluded from sitemap, llms, RSS and the author index. */
 noindex: true,
 /** Soften preview is noindex, so the automatic next note is hidden. This still shows one Keep reading card. */
 nextSlug: 'aeo-vs-seo-vs-geo',
 coverImage: {src: '/journal/topics-vs-keywords/topics-vs-keywords-cover.png', width: 1920, height: 1080},
 ogImage: {
  url: 'https://www.nakama.in/journal/topics-vs-keywords/topics-vs-keywords-og.png',
  width: 1200,
  height: 630,
  alt: "Topics vs Keywords: which to plan around for Google, AI Overviews and ChatGPT, SEO + AI Search 2026, Nakama Growth journal",
  type: 'image/png',
 },
 jsonLd: topicsVsKeywordsJsonLd,
 bodyHtml,
 sections: [
 {
  "heading": "Introduction",
  "paragraphs": [
   "Topics vs Keywords: Which to Use for SEO and AI Search (2026)",
   "Updated 27 Oct 2026",
   "By Yash Kumar, Co-founder and CEO, Nakama Growth",
   "Topics vs keywords: a topic is the subject a page covers; a keyword is the exact string someone types into search. Use keywords for titles and commercial pages. Use topics to plan coverage, because Google and AI engines judge relevance at the subject level and often cite deep topic pages even off the exact query.",
   "Sources checked 27 Oct 2026: Google Search Central's guide to optimizing for generative AI features, Google's AI features and your website, Google's ranking systems guide, Google's spam policies, the Floyi Topical Authority Report 2026 and Ahrefs' How to Rank in AI Overviews."
  ]
 },
 {
  "heading": "The short answer: which should you use?",
  "paragraphs": [
   "Use both, in a set order. Start with topics to decide what your site must cover, then assign keywords to each page so you can title it, track it and match how buyers phrase the query. Add entities so search engines and AI tools know exactly which product, brand or concept each page is about.",
   "Here is the evidence that shapes that order, in four lines:",
   "Google says AI search is still SEO. Its guide states that \"from Google Search's perspective, optimizing for generative AI search is optimizing for the search experience, and thus still SEO.\" Keywords still matter for classic rankings (Google).",
   "Google warns against a page for every keyword variant. Creating separate content for every variation of how people search, including fan-out queries, \"primarily to manipulate rankings or generative AI responses\" violates its scaled content abuse policy (Google).",
   "Topic coverage tracked AI citations far more closely than links did. In Floyi's study of 42 topical maps, ranking across more of a map's topics correlated with AI Overview citations at 0.51, against 0.09 for Ahrefs Domain Rating (Floyi).",
   "Many AI citations go to pages outside the query's top 20. Floyi found 40.2% of AI Overview citations, and 71.9% of ChatGPT citations, went to websites not in that exact query's Google top 20 (Floyi).",
   "Floyi's numbers are correlations from a snapshot of curated maps. They do not prove that covering more topics causes more citations, and Floyi says so itself. They do show that a keyword-by-keyword view misses where a large share of AI visibility comes from.",
   "On this page",
   "Topics vs keywords vs entities at a glance",
   "What are topics in SEO and AI search?",
   "What are keywords?",
   "What are entities?",
   "The main differences",
   "Which comes first in SEO?",
   "Why topical maps beat keyword lists for AI search",
   "How to build a topic-and-keyword strategy (8 steps)",
   "Worked example: local listings management",
   "Common mistakes",
   "How this differs from AEO vs SEO vs GEO",
   "FAQ"
  ]
 },
 {
  "heading": "Topics vs keywords vs entities at a glance",
  "paragraphs": [
   "Topics are subjects, keywords are typed queries, and entities are the named things both refer to. The table compares them on what they are, who uses them, how you find them and how you measure them. Keywords sit inside topics, and entities ground the meaning of both.",
   "One SaaS example side by side. Topic: local listings management. Keyword: \"best local listings management software\". Entity: Google Business Profile. The topic is the subject you cover with a pillar page and cluster. The keyword is the head term for a commercial page inside that topic. The entity is a named thing the page must get right so search and AI tools do not confuse it with another product.",
   "Dimension | Topics | Keywords | Entities",
   "What it is | A subject a page or site covers, such as \"local listings management\" | A query string people type, such as \"best local listings management software\" | A named thing a search engine can identify, such as Google Business Profile or Yelp",
   "Unit of work | One page per distinct topic or intent | Many keywords per page | Many entities per page, used consistently across the site",
   "How search engines use it | Judge whether a page and site cover a subject in depth | Match pages to the words in a query | Resolve ambiguity and connect related facts (\"things, not strings\")",
   "How AI answer engines use it | Retrieve pages across related sub-queries (query fan-out) | Seed the prompt or the head query | Ground claims about brands, products and concepts",
   "How you find it | Topical map, customer questions, sales calls, fan-out research | Keyword tools (volume, difficulty, intent) | Knowledge panels, Wikipedia/Wikidata, product docs, competitor pages",
   "Example match types | Hub topic, subtopic, sibling topic | Phrase match, term match, semantic | Brand, product, feature, standard, person, place",
   "What you measure | Ranked coverage across the map, AI citations per topic | Position, clicks, impressions per head term | Brand mentions, correct descriptions in AI answers",
   "Main risk if ignored | Thin site that ranks for nothing in depth | Pages no one searches for, weak titles | AI tools describe you wrongly or confuse you with another brand"
  ]
 },
 {
  "heading": "What are topics in SEO and AI search?",
  "paragraphs": [
   "A topic is one subject your content covers, wide enough to serve a real question and narrow enough to fit one page. \"Topics\" in SEO also means the larger subject areas your whole site covers. Search engines and AI systems reason over these subjects, not over single strings, when they decide whether your page is relevant.",
   "Floyi gives a useful working definition in its report: \"A topic is one subject a website covers with one page.\" It builds each topic \"by clustering keywords that serve the same search intent, so one topic can gather many keyword variants\" (Floyi). That is the definition this guide uses.",
   "Topics come in layers. A pillar topic is the broad subject, such as \"RFP management.\" A subtopic is a distinct question inside it, such as \"how to answer a security questionnaire.\" A sibling topic is related but separate, such as \"proposal management\" or \"sales enablement.\"",
   "Google has said for years that its systems match meaning, not just words. Its ranking systems guide describes RankBrain as a system that \"helps us understand how words are related to concepts,\" and neural matching as a system used \"to understand representations of concepts in queries and pages and match them to one another\" (Google).",
   "The same guide describes passage ranking as a way \"to identify individual sections or 'passages' of a web page to better understand how relevant a page is to a search\" (Google). So a page that covers a topic well can be relevant to queries that only one section answers.",
   "AI search pushes this further. Google says AI Overviews and AI Mode may use a \"query fan-out\" technique, \"issuing multiple related searches across subtopics and data sources\" to build a response (Google). One question from a buyer becomes many searches across a topic, and the answer draws from whatever ranks for those searches."
  ]
 },
 {
  "heading": "Topic examples for SaaS teams",
  "paragraphs": [
   "Three short examples show how a topic breaks into subjects. Each pillar holds subtopics that deserve their own page because each answers a different question.",
   "Local listings management: NAP consistency, duplicate listing cleanup, Google Business Profile suspensions, Apple Business Connect setup, review response workflows, multi-location reporting.",
   "AI RFP software: RFP response process, security questionnaires, content library upkeep, go/no-go decisions, proposal win rates, RFP software pricing.",
   "Internal communications: employee newsletters, frontline worker apps, intranet vs employee app, internal comms metrics, change communication plans.",
   "Notice that none of these subtopics is a synonym of another. Each one would make a reader expect a different page. That is the test for a real topic."
  ]
 },
 {
  "heading": "What are keywords?",
  "paragraphs": [
   "A keyword is the exact word or phrase a person types or speaks into a search engine, and the term you track in a rank tool. Keywords carry measurable data, such as search volume, difficulty and intent. They tell you how buyers phrase a need, which makes them the right input for titles, slugs and commercial pages.",
   "Keywords are still useful because search demand is still phrased in words. A head term like \"rfp software\" tells you a buyer is shopping. A longer phrase like \"how to answer an rfp faster\" tells you they are working, not buying yet. Those two need different pages.",
   "Keywords are also how you measure classic SEO. Search Console reports queries, rank trackers report positions, and paid search bids on keywords. None of that goes away in 2026.",
   "What has changed is the job a keyword does. It used to be the whole plan. Now it is the label on a page that serves a topic. Google's guide says its AI systems can \"understand the relevance of pages, even when there is no exact match between the query and the page's primary content\" (Google)."
  ]
 },
 {
  "heading": "What are the 3 types of keywords inside a topic?",
  "paragraphs": [
   "Keywords inside a topic fall into three useful types: phrase match, term match and semantic. Phrase match keeps the topic's words in order, term match uses the words in any order, and semantic keywords share meaning without sharing words. Most teams over-collect the first type and miss the third.",
   "These labels describe how a keyword relates to a topic. They are different from Google Ads match types, which control which searches trigger an ad.",
   "Keyword type | Definition | Local listings example | AI RFP software example | What to do with it",
   "Phrase match | Contains the topic's words in the same order | \"local listings management software\" | \"rfp software pricing\" | Use as head terms and page titles",
   "Term match | Contains all the topic's words, in any order | \"manage local business listings\" | \"software for rfp responses\" | Fold into the same page as a variant, unless intent differs",
   "Semantic | Shares meaning, not words | \"NAP consistency,\" \"duplicate Google Business Profile\" | \"security questionnaire automation,\" \"proposal content library\" | Often deserves its own subtopic page",
   "Phrase match keywords are the easiest to find. Type the topic into any keyword tool and filter by \"matching terms.\" They are good page anchors because they map cleanly to titles.",
   "Term match keywords usually mean the same thing as a phrase match. \"Software for rfp responses\" and \"rfp response software\" want the same page. Floyi's study treats this as one topic for the same reason, noting that \"ten keywords that mean the same thing return nearly the same results\" (Floyi).",
   "Semantic keywords are where depth lives. A buyer researching listings software may never type \"listings.\" They type \"why is my business showing the wrong hours on Google.\" That query belongs to your topic, and most keyword lists built on phrase match will never surface it."
  ]
 },
 {
  "heading": "What are entities, and how do they connect topics and keywords?",
  "paragraphs": [
   "An entity is a specific, named thing that a search engine can identify and connect to facts: a brand, product, person, place, standard or concept. Entities ground meaning. They tell Google and AI tools which \"Taj Mahal\" or which \"Responsive\" a page means, and they link your keywords and topics to things the systems already know.",
   "Google introduced its Knowledge Graph in 2012 with the phrase \"things, not strings.\" Its launch post said the graph \"understands real-world entities and their relationships to one another,\" and held \"more than 500 million objects\" and \"more than 3.5 billion facts\" at launch (Google).",
   "The example in that post still explains the idea best. To a keyword-only system, [taj mahal] is two words. To an entity-aware system, it might mean a monument, a musician or a casino, and Google can tell which one you mean.",
   "In SaaS, the same problem shows up constantly. Brand names are often ordinary words. Product categories have three names. A feature in your docs may be called something different in a buyer's head. Entities are how you close those gaps.",
   "Here is how the three layers connect in one page:",
   "Topic: security questionnaire automation.",
   "Keywords: \"security questionnaire software,\" \"automate security questionnaires,\" \"how to answer a vendor security questionnaire.\"",
   "Entities: SOC 2, ISO 27001, SIG questionnaire, CAIQ, vendor risk management, your product name, your company name.",
   "The topic decides what the page is for. The keywords decide how it is titled and tracked. The entities make the page unambiguous, both for search engines and for AI models deciding whether to cite it as a source on SOC 2 questionnaires."
  ]
 },
 {
  "heading": "Topics vs keywords: what are the main differences?",
  "paragraphs": [
   "The main differences between topics and keywords are scope, structure, data and how each is evaluated. Topics are broad subjects that hold many keywords, while keywords are single strings with measurable demand. In AI search, topics also decide which sub-queries you can be cited for, while keywords decide only one query.",
   "Difference | Topics | Keywords",
   "Scope | A subject with many questions inside | One query string",
   "Relationship | Contain keywords | Belong to a topic",
   "Data in SEO tools | Partly visible, often built by clustering | Volume, difficulty, CPC, intent shown per term",
   "Zero-volume terms | Still count if they belong to the subject | Often filtered out of keyword lists",
   "How Google judges relevance | Concepts, passages, site-wide signals | Words in the query and page",
   "How AI search uses them | Fan-out across subtopics, citations from across the topic | Seed query only",
   "Page planning | One page per distinct topic or intent | Many keywords per page",
   "Measurement | Ranked coverage, AI citations across the map | Rank and clicks per term"
  ]
 },
 {
  "heading": "Difference 1: Keywords live inside topics, not the other way round",
  "paragraphs": [
   "A topic holds many keywords. \"Local listings management\" contains hundreds of phrase, term and semantic keywords. No single keyword contains the topic. That is why a keyword list, however long, is not a content plan."
  ]
 },
 {
  "heading": "Difference 2: Keyword tools miss part of every topic",
  "paragraphs": [
   "Keyword tools report terms with measurable demand. Many real buyer questions show little or zero volume because they are new, long or phrased many ways. \"How do I merge duplicate Google Business Profile listings for 40 locations\" may show nothing in a tool and still be the question that closes a deal."
  ]
 },
 {
  "heading": "Difference 3: A topic's keywords are often not phrase or term matches",
  "paragraphs": [
   "The keywords that show depth are usually semantic. A page on AI RFP software that never mentions \"content library,\" \"SME review\" or \"security questionnaire\" looks shallow to a reader who knows the job. It looks shallow to retrieval systems too."
  ]
 },
 {
  "heading": "Difference 4: AI answers fan out across a topic",
  "paragraphs": [
   "This difference is new. When Google's AI features fan out a query, they search for related subtopics. Ahrefs reports research by Joshua Hardwick, run with Surfer, which found that pages ranking across fan-out queries were 161% more likely to be cited in the final AI Overview than pages ranking only for the main term (Ahrefs). Treat that as reported third-party research. Fan-outs are also unstable: Surfer found only about 27% of fan-out queries stayed consistent across repeated runs (Surfer), so cover the subtopics that recur, not every fan-out."
  ]
 },
 {
  "heading": "Difference 5: Citations reward coverage across the map",
  "paragraphs": [
   "Floyi found that 26.8% to 43.7% of AI citations, depending on the engine, went to websites that did not rank for that query but did rank elsewhere in the same topical map (Floyi). A keyword report cannot see those citations, because they happen on queries you do not rank for."
  ]
 },
 {
  "heading": "Difference 6: Keywords tell you how to win one query, topics tell you how to win many",
  "paragraphs": [
   "Floyi also found that on a query a site already ranks for, position decided citation odds, and wider coverage \"adds nothing on top of it.\" Coverage helped on queries the site did not rank for (Floyi). So keyword work wins individual queries. Topic work multiplies how many queries you are in contention for."
  ]
 },
 {
  "heading": "Keywords vs topics in SEO: which comes first?",
  "paragraphs": [
   "For keywords vs topics in SEO, topics come first for planning and keywords come first for page-level decisions. Map the topics you must cover, then pick the head keyword for each page. The exception is bottom-funnel commercial pages, where the exact keyword, such as \"X vs Y\" or \"best X software,\" is the topic.",
   "The order changes with the goal. Here is how we decide.",
   "Your goal | Start from | Why | Example",
   "Rank a commercial page that buyers search by name | Keywords | The query wording is fixed and high intent | \"best AI RFP software,\" \"Loopio alternatives\"",
   "Win a comparison query | Keywords | Buyers type the exact pairing | \"Yext vs BrightLocal\"",
   "Build authority in a new category | Topics | You need coverage before any page ranks | \"local listings management\" hub and subtopics",
   "Get cited in AI Overviews, AI Mode, ChatGPT | Topics, then questions | Fan-out and off-query citations reward coverage | Answer every question a buyer asks about RFP security reviews",
   "Fix a site with many overlapping pages | Topics | Cluster keywords to find duplicates | Merge five \"listings sync\" posts into one",
   "Refresh a page that dropped | Keywords, then topics | Check the query first, then the gaps | Re-check intent, then add missing subtopics"
  ]
 },
 {
  "heading": "When should you start from keywords?",
  "paragraphs": [
   "Start from keywords when the buyer's wording is the product. Comparison pages, \"best X\" lists, alternatives pages, pricing pages and integration pages all target a known string. Getting that string right in the title, H1 and slug still matters, because it is what people type and what they recognise in results."
  ]
 },
 {
  "heading": "When should you start from topics?",
  "paragraphs": [
   "Start from topics when you want authority, AI citations or a plan for more than a few pages. Ahrefs' analysis of 146 million SERPs, in a guide published in January 2026, found AI Overviews appear on 21% of all keywords but on 57.9% of question queries and 46.4% of queries with seven or more words (Ahrefs). Those long, question-shaped queries are exactly what a topic map surfaces and a head-term list misses.",
   "The same Ahrefs page reports that 99.9% of AI Overview keywords are informational. Newer data cuts the other way for SaaS buying queries. Semrush's 21 Oct 2026 study of 400 US commercial keywords found AI Overviews on 88% of them by August 2026, on 96% of \"best X for Y\" searches and on 100% of software \"alternatives\" searches (Semrush). Commercial SaaS queries now mostly show AI Overviews too, so map your commercial pages into the same topics as the questions around them."
  ]
 },
 {
  "heading": "Does this change for ChatGPT and Perplexity?",
  "paragraphs": [
   "The logic holds, with one difference: ChatGPT and Perplexity users type prompts, not keywords. Prompts are longer and more specific, and they carry context such as company size or stack. Research prompts by grouping them under the same topics you mapped for search, not as a separate list.",
   "Floyi's data shows ChatGPT relied least on the exact query's top 20. 71.9% of ChatGPT citations went to websites outside that query's Google top 20 (Floyi). ChatGPT citations depend least on the exact query's Google top 20 (71.9% outside). Floyi's coverage link was weakest on ChatGPT, so treat topic coverage as groundwork, not the whole ChatGPT answer.",
   "Floyi also reports that 54% of ChatGPT answers and 61% of Gemini answers in its dataset cited no websites at all, against 7% for AI Mode. Our inference, not a Floyi finding: on those engines, being named in the text matters as much as being linked, which is where entities and off-site mentions come in. Floyi itself calls its evidence on naming weaker."
  ]
 },
 {
  "heading": "Keywords vs key topics: how do you pick the map nodes?",
  "paragraphs": [
   "Keywords vs key topics is a question of priority. Key topics are the nodes of your topical map that a buyer would expect an authority to cover, while keywords are the search strings attached to each node. Pick key topics by buyer journey and product fit first, then confirm each with keyword and question data.",
   "A key topic earns its place if it passes four tests:",
   "Buyer relevance. Would a buyer evaluating your category ask about this before, during or after purchase?",
   "Distinct intent. Would a reader expect a different page for it, or is it a synonym of something already on the map?",
   "Product truth. Can you say something specific and first-hand about it, from your product, your data or your customers?",
   "Demand signal. Is there evidence people ask about it, from keyword tools, People Also Ask, sales calls, support tickets, Reddit threads or AI prompts?",
   "Demand signal is last on purpose. A key topic with zero tool volume can still pass the first three tests and belong on the map. A high-volume keyword that fails the product truth test usually does not."
  ]
 },
 {
  "heading": "How many key topics does a SaaS topical map need?",
  "paragraphs": [
   "There is no fixed number. Floyi's 42 maps ranged from 107 to 3,489 queries, with one query per topic (Floyi). A focused B2B SaaS product might start with 40 to 120 key topics in its core category and grow from there. Size the map to the subject, not to a quota."
  ]
 },
 {
  "heading": "How do you know a key topic is covered?",
  "paragraphs": [
   "A key topic is covered when one page answers its main question well, ranks or is close to ranking for its head term, and links to and from related pages on the map. Publishing a page is not coverage. Floyi deliberately measured ranked coverage, the share of topics where a site holds a top-20 position, because a page that never ranks does not count."
  ]
 },
 {
  "heading": "Keywords vs topics vs entities: how do they work together?",
  "paragraphs": [
   "Keywords vs topics vs entities is not a choice between three options. They are three layers of the same plan. Topics define what you cover, keywords define how each page is found and tracked, and entities define exactly which things each page is about, so search engines and AI tools can connect and trust it.",
   "Layer | Question it answers | Owned by | Lives on the page as | Measured by | Common failure",
   "Topics | What must we cover to be an authority? | Content strategy | The page's purpose, H1 and sections | Ranked coverage across the map | Gaps, or ten pages on one topic",
   "Keywords | How do buyers phrase it? | SEO | Title, H1, slug, headings, first lines | Position, clicks, impressions | Synonym pages, keyword stuffing",
   "Entities | Which exact things are we talking about? | Content, product marketing, PR | Brand, product, feature and standard names used consistently | Mentions, correct AI descriptions | Inconsistent names, vague claims"
  ]
 },
 {
  "heading": "Why do entities matter more in AI answers?",
  "paragraphs": [
   "AI answers name things. When a buyer asks ChatGPT for \"the best local listings tools for franchises,\" the answer is a list of entities, usually brands. If your brand is described inconsistently across your site, review sites and third-party articles, the model has a weaker basis for naming you.",
   "Ahrefs reports that in its own research, brand mentions are \"the number one correlating factor with AI Overview visibility,\" and that YouTube mentions showed the strongest correlation in its brand factor study (Ahrefs). Mentions are entity signals. They live mostly off your site.",
   "Google's guidance adds a guardrail. It says \"seeking inauthentic 'mentions' across the web isn't as helpful as it might seem\" (Google). The work is earning real coverage, not planting your name."
  ]
 },
 {
  "heading": "How do you use entities on a page without stuffing?",
  "paragraphs": [
   "Name things precisely and consistently. Use your full product name once near the top, then a stable short form. Name standards, integrations and categories the way your buyers and their tools name them. Link to the canonical source for each the first time it appears. Keep your category description the same on your site, your G2 or Capterra profile, LinkedIn and press pages.",
   "Structured data can help with consistency, but it is not a shortcut. Google says \"structured data isn't required for generative AI search, and there's no special schema.org markup you need to add,\" while it is still worth using for rich results (Google). Our view: Organization and Product schema with one consistent name and sameAs links to your official profiles helps keep entities consistent. Treat it as a consistency aid, not an AI ranking lever."
  ]
 },
 {
  "heading": "Why do topical maps beat keyword lists for AI Overviews and ChatGPT?",
  "paragraphs": [
   "Topical maps track more AI citations than keyword lists because AI answers retrieve across a subject, not one string. Google fans a query out into related sub-queries, and Floyi found sites covering more of a topical map were cited more often on all four engines it tested, including on queries where those sites did not rank in the top 20.",
   "Here is what the Floyi Topical Authority Report 2026 measured. Read every figure as a correlation from one dataset, not proof of cause.",
   "Floyi finding | Figure | Why it matters for topics vs keywords",
   "Dataset size | 42 topical maps, six industries, 29,319 topics, 535,239 top-20 Google positions, 354,955 AI citations | Large enough to see patterns across AI Overviews, AI Mode, ChatGPT and Gemini",
   "Citation rate for sites ranking on 50%+ of a map's topics (platforms excluded) | 30.8% of citing AI Overviews | Broad coverage tracks with frequent citation",
   "Citation rate for sites ranking on under 5% of topics | 0.14% of citing AI Overviews | Low-coverage sites are rarely cited individually, though as a group they still take 55.3% of AI Overview citations",
   "Correlation of ranked coverage with AI citations | 0.51 AI Overviews, 0.48 AI Mode, 0.33 ChatGPT, 0.36 Gemini | Coverage moved with citations on every engine",
   "Correlation of Domain Rating with AI citations | 0.09 AI Overviews, 0.16 AI Mode, 0.15 ChatGPT, 0.11 Gemini | Links alone told you little about citations",
   "AI Overview citations to sites outside that query's top 20 | 40.2% (52.4% AI Mode, 71.9% ChatGPT, 41.1% Gemini) | A big share of citations cannot be won by one keyword ranking",
   "Same-map, off-query citations | 26.8% to 43.7% across engines | Ranking elsewhere in the topic still earned citations",
   "AI Overview citation rate at positions 1 to 3 | 60.7% (38.6% at 4 to 10, 12.9% at 11 to 20) | Keyword position still matters on queries you rank for",
   "Source for every row: Floyi Topical Authority Report 2026, last updated 2 Sep 2026, data collected to 17 Aug 2026."
  ]
 },
 {
  "heading": "What does the Floyi data actually say about keywords?",
  "paragraphs": [
   "It says keywords still win individual queries. When a site ranked for the exact query, a better position went with a higher citation rate on all four engines. Floyi also found that wider coverage did not improve citation odds on a query a site already ranked for. Position did that work.",
   "What coverage changed was the number of chances. Floyi's average \"Giant\" site ranked for 211 of its map's queries and a \"Tourist\" for 2.6. Per ranked query, their citation ratios sat close together, at 0.42 and 0.39, which Floyi describes as a ratio, not a conversion rate, since it includes off-query citations. The broad site was not better per query. It was in contention far more often.",
   "That is the cleanest answer to topics vs keywords we have seen in data. Keywords decide how well you do on a query. Topics decide how many queries you get to compete on, and whether AI answers pick you up on the ones you do not rank for."
  ]
 },
 {
  "heading": "What does Google say about building pages for every keyword?",
  "paragraphs": [
   "Google says not to. Its AI optimization guide warns that creating separate content \"for every possible variation of how people might search,\" including fan-out queries, primarily to manipulate rankings or AI responses \"violates Google's scaled content abuse spam policy.\" It also calls this \"an ineffective long-term strategy\" (Google).",
   "The same guide tells site owners that AI systems understand synonyms, so \"you don't have to worry that you don't have enough 'long-tail' keywords or haven't captured every variation\" (Google). That is a direct argument for one page per topic, with keyword variants folded in."
  ]
 },
 {
  "heading": "What does Google say you can ignore?",
  "paragraphs": [
   "Google's guide lists things you can ignore for Google Search, including llms.txt and other \"special\" markup, and \"chunking\" content. It says \"there's no requirement to break your content into tiny pieces for AI to better understand it\" and \"there's no ideal page length\" (Google).",
   "That fits Ahrefs' finding of a near-zero correlation (Spearman about 0.04) between word count and AI citations (Ahrefs). Depth means covering the topic's real questions, not adding words.",
   "Answer-first writing is different from chunking. A clear direct answer under each heading is for readers who skim and for any system quoting a passage. It does not mean splitting one topic across many thin pages."
  ]
 },
 {
  "heading": "What does Google say matters most?",
  "paragraphs": [
   "Google says unique, non-commodity content. Its guide says content people find \"unique, compelling, and useful\" will likely influence AI search presence \"more than any of the other suggestions in this guide,\" and asks for \"a unique point of view\" rather than recycling what others have said (Google).",
   "For a SaaS team, that means each topic page should carry something only you can say: product data, customer patterns, implementation detail, pricing reality or an opinion your team will defend. That is what makes a page worth citing over the nine others that cover the same topic."
  ]
 },
 {
  "heading": "How do you build a topic-and-keyword strategy? (8 steps)",
  "paragraphs": [
   "Build a topic-and-keyword strategy in eight steps: map topics, assign one intent per page, attach keywords to each topic, set clean URLs, write answer-first pages with consistent entities, link the cluster, earn off-site and YouTube citations, and measure ranked coverage plus AI citations. Each step uses the output of the one before."
  ]
 },
 {
  "heading": "Step 1: Build the topical map",
  "paragraphs": [
   "List every subject a buyer in your category asks about, from first problem to renewal. Pull from sales calls, support tickets, onboarding docs, competitor sites, People Also Ask, Reddit and the prompts your buyers use in ChatGPT. Group them into pillars and subtopics.",
   "Floyi's report gives this advice: \"Build the topical map before you measure anything,\" because \"every number in this study divides by the map\" (Floyi). Your map is your denominator. A weak map makes every later metric misleading."
  ]
 },
 {
  "heading": "Step 2: Assign one intent per page, not one keyword per page",
  "paragraphs": [
   "Cluster keywords by intent. If two keywords return mostly the same results and want the same answer, they belong on one page. If they want different answers, they need different pages.",
   "A quick test: search both terms and compare the top results. Heavy overlap means one page. Different page types, such as a guide vs a pricing comparison, mean two pages."
  ]
 },
 {
  "heading": "Step 3: Attach a keyword set to each topic",
  "paragraphs": [
   "For each topic, choose one head keyword and record the phrase match, term match and semantic variants. Add the questions from People Also Ask and from AI prompts. Note related entities. This becomes the brief.",
   "Floyi tracked one head query per topic so that keyword variants did not count the same coverage many times over (Floyi). Do the same in your rank tracker. One head term per topic keeps reporting honest."
  ]
 },
 {
  "heading": "Step 4: Set the URL and slug",
  "paragraphs": [
   "Give each topic a short, stable slug built from its head keyword. Keep hub and spoke relationships visible in folders only if your site architecture supports it. Avoid dates and filler words in slugs so pages can be updated without redirects.",
   "Examples: /local-listings-management, /local-listings-management/nap-consistency, /rfp-software/security-questionnaires."
  ]
 },
 {
  "heading": "Step 5: Write answer-first pages with consistent entities",
  "paragraphs": [
   "Open each page and each major section with a direct answer in 40 to 60 words. That target is our working rule, not a Google requirement. Then support it with original detail: steps, data, screenshots, examples, tables.",
   "Use the head keyword in the title, H1 and first sentence. Use variants naturally in headings where they fit. Name entities precisely and consistently. Ahrefs' advice matches this: answer \"directly and early on,\" because burying the lede delays a model's understanding of the content (Ahrefs)."
  ]
 },
 {
  "heading": "Step 6: Link the cluster",
  "paragraphs": [
   "Link every subtopic page to its pillar and to its closest siblings, with anchor text that describes the destination. Google's AI features page lists \"making your content easily findable through internal links on your website\" among the SEO fundamentals that still apply (Google).",
   "Internal links also show readers the shape of the topic. A buyer who lands on \"security questionnaires\" should reach \"RFP content library\" and \"RFP software pricing\" in one click."
  ]
 },
 {
  "heading": "Step 7: Earn off-site coverage and YouTube citations",
  "paragraphs": [
   "Topic coverage on your own site is half the job. AI answers also draw on reviews, comparison articles, videos and forums. Ahrefs reports that YouTube is the most cited domain in AI Overviews according to its Brand Radar data (Ahrefs). Floyi found YouTube ranked in the top 20 for at least half the topics in 12 of its 42 maps (Floyi).",
   "Map your off-site work to the same topics. For each key topic, ask: which third-party pages, videos and threads already get cited, and are we on them? That turns PR, partnerships and video into topic coverage, not random placements."
  ]
 },
 {
  "heading": "Step 8: Measure ranked coverage and AI citations, not one keyword rank",
  "paragraphs": [
   "Track three numbers per topical map:",
   "Ranked coverage: the share of map topics where you hold a top-20 Google position, using one head term per topic.",
   "Position on priority topics: top-3 and top-10 counts for commercial and high-value topics.",
   "AI citations and mentions: for a fixed set of prompts per topic, how often each engine cites or names you, run more than once because answers vary.",
   "In Google, use the Generative AI performance report in Search Console, which Google recommends for measuring how content performs in its generative AI features (Google). For other engines, log repeated prompt runs. Our AI visibility report template is a free sheet for this."
  ]
 },
 {
  "heading": "Worked example: a topical map for local listings management software",
  "paragraphs": [
   "Here is a realistic topical map for a B2B SaaS product that manages local business listings for multi-location brands. It shows how topics, keywords and entities fit together on one plan. Keyword examples are illustrative. Pull volumes and difficulty from your own tool before you prioritise."
  ]
 },
 {
  "heading": "Pillar: local listings management",
  "paragraphs": [
   "Map node (topic) | Intent | Head keyword (phrase match) | Term match variants | Semantic keywords and questions | Key entities | Page type",
   "Local listings management (pillar) | Learn, evaluate | local listings management | manage local listings, listings management for businesses | how to keep business info correct everywhere | Google Business Profile, Apple Business Connect, Bing Places, Yelp | Pillar guide",
   "Local listings management software | Buy | local listings management software | software to manage local listings | best tool to update hours across directories | Yext, Synup, BrightLocal, Uberall, Moz Local | Best-of / comparison",
   "NAP consistency | Learn, fix | nap consistency | consistent name address phone | why does Google show my old address | NAP, citations, local pack | How-to guide",
   "Duplicate listings | Fix | duplicate google business profile | remove duplicate business listings | two Google listings for one location | Google Business Profile, Google Maps | Troubleshooting guide",
   "Google Business Profile suspensions | Fix | google business profile suspended | suspended business profile fix | why was my listing suspended | Google Business Profile guidelines, reinstatement | Troubleshooting guide",
   "Apple Business Connect | Set up | apple business connect | apple maps business listing | how to get my business on Apple Maps | Apple Maps, Apple Business Connect, Siri | Setup guide",
   "Review management | Evaluate, run | review management software | managing online reviews | how to respond to negative Google reviews | Google reviews, Yelp, Trustpilot, G2 | Guide plus comparison",
   "Multi-location reporting | Run | multi location seo reporting | reporting for multiple locations | which locations are losing calls | Google Business Profile Performance, call tracking | Guide with template",
   "Data aggregators | Learn | local data aggregators | business data aggregators | do data aggregators still matter | Data Axle, Foursquare | Explainer",
   "Listings for AI answers | Learn | local business info in ai search | ai search for local businesses | why ChatGPT shows wrong opening hours | ChatGPT, Google AI Mode, Apple Maps | Opinion plus guide",
   "Comparison pages | Buy | [Brand A] vs [Brand B] | [Brand A] or [Brand B] | which is better for franchises | Named competitor brands | Comparison page",
   "Pricing | Buy | listings management pricing | cost of listings software | how much should I pay per location | Per-location pricing, annual contracts | Pricing guide",
   "Read the table left to right. The topic decides the page. The head keyword names it. Variants fold into it. Semantic questions become sections or, if the intent differs, their own nodes. Entities make the page specific enough to trust."
  ]
 },
 {
  "heading": "How the same map works for AI RFP software",
  "paragraphs": [
   "The method carries over to any SaaS category. A short version for AI RFP software:",
   "Map node (topic) | Head keyword | Semantic questions | Key entities",
   "RFP software (pillar) | rfp software | how do teams answer RFPs faster | RFP, RFI, RFQ, proposal management",
   "AI RFP software | ai rfp software | can AI write RFP responses accurately | large language models, content library, SME review",
   "Security questionnaires | security questionnaire software | how to answer a vendor security review | SOC 2, ISO 27001, SIG, CAIQ",
   "RFP content library | rfp content library | how to keep answers up to date | knowledge base, Google Drive, SharePoint, Confluence",
   "Go/no-go decisions | rfp go no go | which RFPs should we skip | bid qualification, win rate",
   "RFP software pricing | rfp software pricing | what does RFP software cost per user | per-seat pricing, enterprise plans",
   "Comparisons | [Brand A] vs [Brand B] | which RFP tool fits a small team | named competitor brands",
   "Notice what is missing from both maps: separate pages for \"rfp software tool,\" \"rfp tool,\" \"rfp response tool\" and \"rfp management software\" if they return the same results. They are keyword variants of one topic. One strong page beats four thin ones, and Google's guidance points the same way."
  ]
 },
 {
  "heading": "What are the most common topics vs keywords mistakes?",
  "paragraphs": [
   "The most common mistakes are building a page per keyword variant, letting several pages compete for one topic, ignoring zero-volume questions that belong to the topic, using inconsistent entity names, and judging progress only by Domain Rating or one head-term rank. Each one makes a site look broad while covering less."
  ]
 },
 {
  "heading": "Mistake 1: Keyword cannibalization",
  "paragraphs": [
   "Two or more of your pages target the same topic and intent, so neither ranks well. It usually starts with a keyword list where near-synonyms each got a post. Fix it by clustering, choosing one page per topic, merging content into it and redirecting the rest."
  ]
 },
 {
  "heading": "Mistake 2: Synonym pages and fan-out factories",
  "paragraphs": [
   "Some teams now generate a page for every fan-out query an AI tool suggests. Google's guide names this directly as a scaled content abuse risk. Its spam policies define scaled content abuse as \"when many pages are generated for the primary purpose of manipulating search rankings and not helping users\" (Google). Use fan-out research to find gaps inside a topic, then cover them as sections."
  ]
 },
 {
  "heading": "Mistake 3: Ignoring zero-volume but entity-relevant questions",
  "paragraphs": [
   "A question about \"SOC 2 Type II answers in RFPs\" may show no volume. It still belongs to the topic, names entities your buyers care about and may be exactly what a buyer types into ChatGPT. Judge these by buyer relevance and product truth, not by tool volume."
  ]
 },
 {
  "heading": "Mistake 4: Optimizing only for Domain Rating",
  "paragraphs": [
   "Links still matter for SEO. But in Floyi's dataset, Domain Rating correlated with AI Overview citations at 0.09, against 0.51 for ranked coverage, and the two measures barely moved together (0.11) (Floyi). Floyi notes 7.9% of its lowest-coverage placements had a DR of 90 or higher. A strong link profile does not tell you whether you cover the topic."
  ]
 },
 {
  "heading": "Mistake 5: Inconsistent entity names",
  "paragraphs": [
   "Your product is \"Acme Listings\" on the homepage, \"Acme Local\" in docs and \"AcmeLL\" on G2. Buyers and AI models see three things. Pick one name, one short form and one category line, and use them everywhere."
  ]
 },
 {
  "heading": "Mistake 6: Writing commodity content for every node",
  "paragraphs": [
   "A topic map can tempt teams to fill every node fast with generic posts. Google's guide contrasts commodity content, which \"adds little unique insight,\" with non-commodity content that \"provides unique expert or experienced takes\" (Google). A smaller map filled with first-hand pages beats a large map of summaries."
  ]
 },
 {
  "heading": "Mistake 7: Measuring one keyword and calling it the topic",
  "paragraphs": [
   "A single head-term rank tells you about one query. It hides the off-query citations, the subtopics you rank for and the ones you miss. Report by topic map: ranked coverage, priority positions and AI citations together."
  ]
 },
 {
  "heading": "How is this different from AEO vs SEO vs GEO?",
  "paragraphs": [
   "This guide is about the research and planning unit: what you build your content plan around. Our AEO vs SEO vs GEO guide defines the three disciplines and what to do first. In short, SEO, AEO and GEO are the jobs, and topics, keywords and entities are the inputs all three use.",
   "The two fit together. SEO's classic research unit is the keyword. AEO works at the level of the question, and GEO at the level of prompts and the sources cited for them. A topical map holds all three, because each topic carries its keywords, its questions and the prompts buyers use about it.",
   "For the page-level side of that work, see our answer engine optimization for SaaS playbook. For engine-specific guides, see how to rank in Google AI Overviews and how to rank in ChatGPT.",
   "Engine-specific how-to guides and Floyi-style ranking playbooks live on those pages. This article stays on the planning unit: topics vs keywords vs entities."
  ]
 },
 {
  "heading": "What is the difference between topics and keywords?",
  "paragraphs": [
   "A topic is the subject a page covers, and a keyword is the exact phrase someone types to find it. One topic holds many keywords. Plan your site around topics, then use keywords to title, track and phrase each page the way buyers search."
  ]
 },
 {
  "heading": "Are keywords still important for SEO in 2026?",
  "paragraphs": [
   "Yes. Keywords still decide titles, slugs, commercial pages and rank tracking, and Google says optimizing for AI search is \"still SEO.\" What changed is that one keyword no longer equals one page. Group keyword variants into topics and give each topic one strong page."
  ]
 },
 {
  "heading": "Keywords vs topics in SEO: which should come first?",
  "paragraphs": [
   "Topics come first for planning, keywords come first for individual commercial pages. Map the topics your buyers ask about, then choose a head keyword for each page. For \"best X,\" \"X vs Y\" and pricing pages, the exact keyword is the topic, so start there."
  ]
 },
 {
  "heading": "What is the difference between keywords and key topics?",
  "paragraphs": [
   "Key topics are the essential nodes on your topical map, the subjects an authority in your category must cover. Keywords are the search strings attached to each node. Choose key topics by buyer relevance and product knowledge, then confirm demand with keyword, question and prompt data."
  ]
 },
 {
  "heading": "What is the difference between keywords, topics and entities?",
  "paragraphs": [
   "Keywords are typed queries, topics are subjects, and entities are named things such as brands, products and standards. Topics define coverage, keywords define how pages are found, and entities make meaning unambiguous so search engines and AI tools know exactly what each page is about."
  ]
 },
 {
  "heading": "Do topics matter more than keywords for AI Overviews and ChatGPT?",
  "paragraphs": [
   "The evidence points that way for citations. Floyi found ranked coverage across a topical map correlated with AI Overview citations at 0.51 against 0.09 for Domain Rating, and 71.9% of ChatGPT citations went to sites outside the query's top 20. These are correlations, not proof of cause."
  ]
 },
 {
  "heading": "Should I create a separate page for every keyword variation?",
  "paragraphs": [
   "No. Google's AI optimization guide says creating separate content for every search variation, including fan-out queries, primarily to manipulate rankings or AI answers violates its scaled content abuse policy. Put close variants on one page. Create a new page only when the intent or expected answer is different."
  ]
 },
 {
  "heading": "What is a topical map?",
  "paragraphs": [
   "A topical map is the structured set of topics a brand needs to cover to serve its audience, with pillars, subtopics and the links between them. Each node is one topic and one page, with its own head keyword, variants, questions and entities."
  ]
 },
 {
  "heading": "How many keywords should one page target?",
  "paragraphs": [
   "As many as share the same intent. One page usually has one head keyword plus its phrase match, term match and semantic variants. If two keywords return mostly the same search results, they belong on the same page. If the results differ, split them."
  ]
 },
 {
  "heading": "Topic vs keyword: is a topic just a long-tail keyword?",
  "paragraphs": [
   "No. A long-tail keyword is still one query string. A topic is the subject behind many queries, including long-tail ones. \"How to remove a duplicate Google listing\" is a long-tail keyword inside the topic \"duplicate listings,\" which also holds many other phrasings."
  ]
 },
 {
  "heading": "How do I measure topical authority?",
  "paragraphs": [
   "Measure ranked coverage: the share of your map's topics where you hold a top-20 Google position, tracking one head term per topic. Add top-3 and top-10 counts for priority topics, and AI citation rates from repeated prompt runs. Floyi's report uses ranked coverage as its measurable signal."
  ]
 },
 {
  "heading": "Do zero-volume keywords matter?",
  "paragraphs": [
   "Yes, when they belong to the topic. Keyword tools miss many real buyer questions. A zero-volume question that names your category's entities and comes up in sales calls can be worth a section or a page, and it may match the long prompts buyers type into AI tools."
  ]
 },
 {
  "heading": "The one thing to remember",
  "paragraphs": [
   "Topics vs keywords is not a contest. Topics decide what you cover and how many queries you can win, keywords decide how each page is named and found, and entities decide whether search engines and AI tools trust what you say. Plan by topic, write by keyword, and name things precisely.",
   "If you want this done end to end, Nakama Growth builds topic maps for SaaS categories and pairs them with the off-site work AI answers draw on: YouTube, third-party coverage and AEO and GEO measurement. See our GEO services and content services, or keep reading below."
  ]
 },
 {
  "heading": "About the author",
  "paragraphs": [
   "Yash Kumar is Co-founder and CEO of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask ChatGPT, Perplexity, Gemini and Google AI Overviews what to choose. He leads Nakama Growth's work on earning mentions on the sources those tools read."
  ]
 }
],
};
