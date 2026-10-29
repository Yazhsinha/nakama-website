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
export const BEST_AEO_CONSULTANTS_PUBLISHED_AT = '2026-10-29T09:00:00+05:30';
const PUBLISHED_AT = BEST_AEO_CONSULTANTS_PUBLISHED_AT;
const MODIFIED_AT = PUBLISHED_AT;
const PREVIEW = false;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayOf = (iso: string) => iso.slice(0, 10);
const shortDate = (iso: string) => `${Number(iso.slice(8, 10))} ${MONTHS[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;
const modifiedDate = shortDate(MODIFIED_AT);

const TITLE = 'Best AEO Consultants (2026): Independent Consultants Compared';
const DESCRIPTION = 'Compare the best AEO consultants of 2026 on specialty, public pricing and proof. See when a consultant beats an agency.';
const CANONICAL = 'https://www.nakama.in/journal/best-aeo-consultants';
const COVER_ALT = 'Best AEO Consultants (2026): independent consultants compared on public offer, named proof and published prices, by Nakama Growth';
const OG_ALT = 'Best AEO Consultants (2026), Nakama Growth Journal';

const articleLd = {
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "Article",
   "@id": `${CANONICAL}#article`,
   "headline": TITLE,
   "description": DESCRIPTION,
   "image": [
    "https://www.nakama.in/journal/best-aeo-consultants/best-aeo-consultants-og.png",
    "https://www.nakama.in/journal/best-aeo-consultants/best-aeo-consultants-cover.png"
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
   "@type": "ItemList",
   "@id": `${CANONICAL}#itemlist`,
   "name": TITLE,
   "itemListOrder": "https://schema.org/ItemListOrderAscending",
   "numberOfItems": 7,
   "isPartOf": {
    "@id": `${CANONICAL}#webpage`
   },
   "itemListElement": [
    {
     "@type": "ListItem",
     "position": 1,
     "name": "Kevin Indig",
     "url": `${CANONICAL}#1-kevin-indig-best-for-growth-stage-b2b-and-ai-companies`,
     "item": {
      "@type": "Person",
      "name": "Kevin Indig",
      "url": "https://www.kevin-indig.com/services/seo-aeo-advisory"
     }
    },
    {
     "@type": "ListItem",
     "position": 2,
     "name": "Aleyda Solís",
     "url": `${CANONICAL}#2-aleyda-solis-best-for-international-ecommerce-and-saas-brands`,
     "item": {
      "@type": "Person",
      "name": "Aleyda Solís",
      "url": "https://www.orainti.com/"
     }
    },
    {
     "@type": "ListItem",
     "position": 3,
     "name": "Lily Ray",
     "url": `${CANONICAL}#3-lily-ray-best-for-trust-e-e-a-t-and-ai-search-quality`,
     "item": {
      "@type": "Person",
      "name": "Lily Ray",
      "url": "https://algorythmic.co/"
     }
    },
    {
     "@type": "ListItem",
     "position": 4,
     "name": "Gaetano DiNardi",
     "url": `${CANONICAL}#4-gaetano-dinardi-best-for-b2b-saas-demand-capture`,
     "item": {
      "@type": "Person",
      "name": "Gaetano DiNardi",
      "url": "https://marketingadvice.io/about-me/"
     }
    },
    {
     "@type": "ListItem",
     "position": 5,
     "name": "Taylor Scher",
     "url": `${CANONICAL}#5-taylor-scher-best-for-transparent-saas-retainers`,
     "item": {
      "@type": "Person",
      "name": "Taylor Scher",
      "url": "https://www.taylorscherseo.com/services-pricing"
     }
    },
    {
     "@type": "ListItem",
     "position": 6,
     "name": "Jason Burns",
     "url": `${CANONICAL}#6-jason-burns-best-for-hands-on-senior-help-at-a-day-rate`,
     "item": {
      "@type": "Person",
      "name": "Jason Burns",
      "url": "https://jasonburns.co.uk"
     }
    },
    {
     "@type": "ListItem",
     "position": 7,
     "name": "Marie Haynes",
     "url": `${CANONICAL}#7-marie-haynes-best-for-google-ai-overviews-and-agentic-search`,
     "item": {
      "@type": "Person",
      "name": "Marie Haynes",
      "url": "https://www.mariehaynes.com/"
     }
    }
   ]
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
   "breadcrumb": {
    "@id": `${CANONICAL}#breadcrumb`
   },
   "datePublished": PUBLISHED_AT,
   "dateModified": MODIFIED_AT,
   "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://www.nakama.in/journal/best-aeo-consultants/best-aeo-consultants-cover.png",
    "width": 1920,
    "height": 1080,
    "caption": COVER_ALT
   }
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
   "mainEntity": [
    {
     "@type": "Question",
     "name": "What does an AEO consultant do?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "An AEO consultant audits how AI answer engines describe and cite your brand, finds the gaps versus competitors, and gives your team a prioritised plan. Typical work includes a prompt-set baseline, citation-gap analysis, an entity and schema audit, answer-first content rewrites and team training."
     }
    },
    {
     "@type": "Question",
     "name": "AEO consultant vs AEO agency: which should I hire?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Hire a consultant if you have people to execute and need senior direction. Hire an agency if you need content, technical fixes, digital PR and monitoring done for you. A common path is a consultant audit first, then execution by an agency or in-house team."
     }
    },
    {
     "@type": "Question",
     "name": "How much does an AEO consultant cost?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Published independent rates in 2026 start at about £450 a day, $500 for a diagnostic report, and from $1,000 for an AI visibility audit. Ongoing retainers start from about $4,000 a month, and senior 1:1 consulting can start at $5,000+. Many top advisors do not publish rates. Always ask for a written scope that lists prompts, engines and deliverables."
     }
    },
    {
     "@type": "Question",
     "name": "How do I choose an AEO consultant?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Before you hire an AEO consultant, check three things: a clear measurement method (prompts, engines, runs), named proof from similar companies, and direct access to the person you are hiring. Match their specialty to your stage and market using the shortlist above."
     }
    },
    {
     "@type": "Question",
     "name": "Who are the best AEO consultants in 2026?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our 2026 shortlist is Kevin Indig, Aleyda Solís, Lily Ray, Gaetano DiNardi, Taylor Scher, Jason Burns and Marie Haynes. See the comparison table at the top of this guide for type, best fit, engagement and published pricing."
     }
    },
    {
     "@type": "Question",
     "name": "Is AEO different from GEO?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "The terms overlap. AEO usually means optimizing to be the answer in AI and search answer features. GEO usually means optimizing for generative engines like ChatGPT and Gemini. Most consultants in this guide do both, so a GEO consultant and an AEO consultant are usually offering the same core service under different names."
     }
    },
    {
     "@type": "Question",
     "name": "Do I need SEO before AEO?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, in most cases. AI engines retrieve from the open web and lean on the same crawlability, authority and content quality signals as search. A site that is hard to crawl or thin on content rarely gets cited."
     }
    },
    {
     "@type": "Question",
     "name": "Is an LLM SEO consultant or AI visibility consultant the same as an AEO consultant?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Mostly, yes. LLM SEO consultant, AI visibility consultant and GEO consultant are labels for the same job: improving how often AI answers mention and cite your brand. Judge the person on method and proof, not the title they use."
     }
    },
    {
     "@type": "Question",
     "name": "Can an AEO consultant guarantee citations in ChatGPT?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. AI answers change between runs and between model updates. A credible consultant promises a process and measurement, not a placement."
     }
    },
    {
     "@type": "Question",
     "name": "How long until we see results?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Technical and on-page fixes can show up within weeks for engines that browse the live web. Off-site authority work usually takes three to six months. Results vary by category and competition."
     }
    }
   ]
  }
 ]
};

export const bestAeoConsultantsJsonLd = articleLd;

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">${TITLE}</li></ol></nav>
<h1 id="best-aeo-consultants-2026-independent-consultants-compared">${TITLE}</h1>
<p>Updated ${modifiedDate}</p>
<p>By <a href="https://www.nakama.in/authors/yash-kumar" rel="author">Yash Kumar</a>, Co-founder and CEO, Nakama Growth</p>
<figure><picture><source srcset="/journal/best-aeo-consultants/best-aeo-consultants-cover.webp" type="image/webp"><img src="/journal/best-aeo-consultants/best-aeo-consultants-cover.png" alt="${COVER_ALT}" width="1920" height="1080" fetchpriority="high" decoding="async"></picture></figure>
<h2 id="quick-answer-who-are-the-best-aeo-consultants-in-2026">Quick answer: who are the best AEO consultants in 2026?</h2>
<p>The best AEO consultants in 2026 are Kevin Indig (growth-stage B2B and AI companies), Aleyda Solís (international, ecommerce and SaaS), Lily Ray (trust, E-E-A-T and AI search quality), Gaetano DiNardi (B2B SaaS demand capture), Taylor Scher (transparent SaaS retainers), Jason Burns (hands-on UK day-rate work) and Marie Haynes (Google AI Overviews and agentic search diagnostics).</p>
<p>An AEO consultant (answer engine optimization consultant) is a senior individual who diagnoses why AI answer engines do or do not mention and cite your brand, then gives your team a prioritised plan. An agency usually does the execution as well.</p>
<p>Published independent rates in this guide start at £450 a day for hands-on work, $500 for a diagnostic report, and from $4,000 a month for a retainer.</p>
<p><strong>How we picked:</strong> we checked each person's own website between 20 and 29 Oct 2026, plus at least one independent source during research (not every source is linked in the entry). We kept only people with a public consulting, advisory or fractional offer. Founders who lead a firm are moved to a separate box and labelled &quot;Firm principal&quot;.</p>
<p>Nakama Growth is an AEO agency; we are not ranked as an independent consultant in this list.</p>
<nav class="toc" aria-labelledby="toc-h"><p class="toc-head" id="toc-h">On this page <span>14 sections</span></p><ol><li><a href="#quick-answer-who-are-the-best-aeo-consultants-in-2026">Quick answer: who are the best AEO consultants in 2026?</a></li><li><a href="#what-is-an-aeo-consultant">What is an AEO consultant?</a></li><li><a href="#how-do-the-best-aeo-consultants-compare">How do the best AEO consultants compare?</a></li><li><a href="#how-did-we-pick-these-aeo-consultants">How did we pick these AEO consultants?</a></li><li><a href="#the-7-best-independent-aeo-consultants-in-2026">The 7 best independent AEO consultants in 2026</a></li><li><a href="#what-does-an-aeo-consultant-actually-do">What does an AEO consultant actually do?</a></li><li><a href="#aeo-consultant-vs-agency-which-should-you-hire">AEO consultant vs agency: which should you hire?</a></li><li><a href="#when-does-a-firm-beat-an-independent-consultant">When does a firm beat an independent consultant?</a></li><li><a href="#how-much-do-aeo-consultants-cost-in-2026">How much do AEO consultants cost in 2026?</a></li><li><a href="#which-aeo-consultant-is-best-for-your-situation">Which AEO consultant is best for your situation?</a></li><li><a href="#how-do-you-vet-an-aeo-consultant">How do you vet an AEO consultant?</a></li><li><a href="#what-are-the-red-flags-when-hiring-an-aeo-consultant">What are the red flags when hiring an AEO consultant?</a></li><li><a href="#frequently-asked-questions">Frequently asked questions</a></li><li><a href="#final-take">Final take</a></li></ol></nav>
<h2 id="what-is-an-aeo-consultant">What is an AEO consultant?</h2>
<p>An AEO (answer engine optimization) consultant is a specialist who helps a brand get mentioned, recommended and cited in AI-generated answers from ChatGPT, Perplexity, Gemini, Claude and Google AI Overviews. They audit how engines describe you, find the sources those engines trust, and turn that into a roadmap your team or agency can ship.</p>
<p>The key difference from an agency is ownership. A consultant owns the diagnosis and the plan. Your team usually owns the doing.</p>
<p>Some consultants also call this work GEO (generative engine optimization), LLM SEO or AI search optimization, so you will see the same person described as a GEO consultant, a generative engine optimization consultant, an LLM SEO consultant or an AI visibility consultant. For buyers, the labels describe the same goal: being part of the answer.</p>
<h2 id="how-do-the-best-aeo-consultants-compare">How do the best AEO consultants compare?</h2>
<p>The seven best AEO consultants compare most clearly on specialty, engagement type and pricing transparency. Kevin Indig and Lily Ray suit advisory and trust work, Aleyda Solís suits international brands, and Gaetano DiNardi suits B2B SaaS. Taylor Scher, Jason Burns and Marie Haynes publish rates; the other four quote per scope after a scoping call.</p>
<figure><picture><source srcset="/journal/best-aeo-consultants/best-aeo-consultants-compare.webp" type="image/webp"><img src="/journal/best-aeo-consultants/best-aeo-consultants-compare.png" alt="Table of 7 independent AEO consultants with best fit, engagement type and price band, from their own websites on 29 October 2026" width="1920" height="1080" loading="lazy" decoding="async"></picture></figure>
<div class="article-table"><table><thead><tr><th scope="col">Name</th><th scope="col">Type</th><th scope="col">Best for</th><th scope="col">Engagement</th><th scope="col">Notable proof</th><th scope="col">Price band</th></tr></thead><tbody><tr><td>Kevin Indig</td><td>Independent</td><td>Growth-stage B2B, SaaS and AI companies</td><td>Advisory, 6 to 12 months</td><td>Client testimonials from Ramp and Nextdoor on his advisory page</td><td>Not public</td></tr><tr><td>Aleyda Solís (Orainti)</td><td>Independent (boutique consultancy)</td><td>International, multilingual, ecommerce and SaaS</td><td>Audits, ongoing advice, training</td><td>Founded Orainti in 2014; runs LearningAIsearch.com</td><td>Not public</td></tr><tr><td>Lily Ray (Algorythmic)</td><td>Independent (also VP at Amsive)</td><td>E-E-A-T, trust, AI search quality</td><td>Selective 1:1 projects, hourly, training</td><td>Runs Algorythmic alongside her VP role at Amsive</td><td>Not public</td></tr><tr><td>Gaetano DiNardi (Marketing Advice)</td><td>Independent</td><td>B2B SaaS at $10M+ ARR</td><td>Hands-on, month to month (waitlist)</td><td>Clients include Cognism and Aura</td><td>Not public</td></tr><tr><td>Taylor Scher</td><td>Independent</td><td>B2B SaaS wanting pipeline-first SEO and AEO</td><td>Monthly, cancel anytime</td><td>Public SaaS case studies on his site</td><td>From $4,000/month; top tier from $10,000/month (published)</td></tr><tr><td>Jason Burns</td><td>Independent</td><td>UK and EU teams wanting hands-on senior help</td><td>Day rate, project blocks, retainer</td><td>Founded SEO Moves; past work with 3M, BlackRock, Unilever, E.ON</td><td>£450/day; retainers from £1,800/month (published)</td></tr><tr><td>Marie Haynes</td><td>Independent</td><td>Google AI Overviews, AI Mode, agentic search</td><td>Site reviews, strategy reports, coaching</td><td>Author of SEO in the Gemini Era</td><td>Diagnostic reports $500; 1:1 consulting $5,000+ (published)</td></tr></tbody></table></div>
<h2 id="how-did-we-pick-these-aeo-consultants">How did we pick these AEO consultants?</h2>
<p>We picked these AEO consultants with one Required gate, a live public consulting offer, plus five weighted criteria: published AI search work, named proof, hands-on access, pricing transparency and fit for tech buyers. Each criterion maps to a question a buyer actually asks before hiring a consultant.</p>
<figure><picture><source srcset="/journal/best-aeo-consultants/best-aeo-consultants-criteria.webp" type="image/webp"><img src="/journal/best-aeo-consultants/best-aeo-consultants-criteria.png" alt="How we picked them: a required public consulting offer, then five weighted criteria: published AI search work 30%, named proof 25%, hands-on access 20%, pricing transparency 15%, fit for tech, SaaS and AI buyers 10%" width="1920" height="1080" loading="lazy" decoding="async"></picture></figure>
<div class="article-table"><table><thead><tr><th scope="col">Criterion</th><th scope="col">Weight</th><th scope="col">What we looked for</th></tr></thead><tbody><tr><td>Public consulting offer</td><td>Required</td><td>A live page that sells consulting, advisory or fractional work</td></tr><tr><td>Published AI search work</td><td>30%</td><td>Original research, frameworks or talks on AI answers, not just classic SEO</td></tr><tr><td>Named proof</td><td>25%</td><td>Named clients, testimonials or public case studies</td></tr><tr><td>Hands-on access</td><td>20%</td><td>You work with the named person, not a junior team</td></tr><tr><td>Pricing transparency</td><td>15%</td><td>Published rates or clear engagement shape</td></tr><tr><td>Fit for tech, SaaS and AI buyers</td><td>10%</td><td>Evidence of software or AI company work</td></tr></tbody></table></div>
<p>We dropped anyone we could not verify on their own site plus one independent source. We also moved firm founders out of the independent list, even when they are excellent, so the word &quot;independent&quot; stays honest.</p>
<p>Limits: we did not hire these consultants. Prices change, and anything we could not confirm on the seller's own site is marked &quot;not public&quot; or left out.</p>
<h2 id="the-7-best-independent-aeo-consultants-in-2026">The 7 best independent AEO consultants in 2026</h2>
<p>Each AEO consultant below passed the public-offer gate and is listed with best fit, proof we could verify on 29 October 2026, and pricing where published.</p>
<h3 id="1-kevin-indig-best-for-growth-stage-b2b-and-ai-companies">1. Kevin Indig: best for growth-stage B2B and AI companies</h3>
<p>Kevin Indig is an independent organic growth advisor who writes a weekly research newsletter on search and AI visibility.</p>
<p>His SEO/AEO advisory covers AI visibility strategy, technical accessibility, content systems, authority building through first-party research, and measurement across search and AI visibility.</p>
<p>His advisory page carries testimonials from growth leaders at Ramp and Nextdoor.</p>
<p><strong>Best for:</strong> growth-stage B2B and AI companies with executive buy-in for a 6 to 12 month programme.</p>
<p><strong>Weakness:</strong> this is advisory, not execution. You need an in-house team or agency to ship the work, and his time is expensive.</p>
<p><strong>Price:</strong> not public.</p>
<p><strong>Source:</strong> <a href="https://www.kevin-indig.com/services/seo-aeo-advisory">kevin-indig.com/services/seo-aeo-advisory</a></p>
<h3 id="2-aleyda-solis-best-for-international-ecommerce-and-saas-brands">2. Aleyda Solís: best for international, ecommerce and SaaS brands</h3>
<p>Aleyda Solís founded Orainti in 2014, a boutique SEO and AI search consultancy. She has more than 19 years of experience and has spoken at 200+ events in 30+ countries.</p>
<p>She publishes LearningAIsearch.com, a free AI search optimization roadmap, plus the SEOFOMO and AI Marketers newsletters. Her 2026 talks focus on ecommerce AI search and the technical foundations that decide AI visibility.</p>
<p><strong>Best for:</strong> companies selling across several countries and languages, marketplaces, and SaaS teams with in-house SEO capacity.</p>
<p><strong>Weakness:</strong> the deliverable is usually a documented playbook, not done-for-you execution. Capacity is limited and pricing is not published.</p>
<p><strong>Price:</strong> not public.</p>
<p><strong>Source:</strong> <a href="https://www.orainti.com/">orainti.com</a></p>
<h3 id="3-lily-ray-best-for-trust-e-e-a-t-and-ai-search-quality">3. Lily Ray: best for trust, E-E-A-T and AI search quality</h3>
<p>Lily Ray runs Algorythmic, a selective 1:1 SEO and AI search consultancy. She also continues as a VP at Amsive.</p>
<p>Algorythmic offers AEO consulting, audits and strategy for ChatGPT, Gemini, Perplexity and AI Overviews, plus E-E-A-T audits, Google Discover strategy, training and hourly consulting.</p>
<p><strong>Best for:</strong> brands and publishers where trust signals and content quality decide whether AI systems cite them.</p>
<p><strong>Weakness:</strong> she takes on a small number of projects and recommends Amsive for larger team-based work, so a big programme may route you to an agency. Pricing is not published.</p>
<p><strong>Price:</strong> not public.</p>
<p><strong>Source:</strong> <a href="https://algorythmic.co/">algorythmic.co</a></p>
<h3 id="4-gaetano-dinardi-best-for-b2b-saas-demand-capture">4. Gaetano DiNardi: best for B2B SaaS demand capture</h3>
<p>Gaetano DiNardi is principal consultant at Marketing Advice. His site names Cognism and Aura among the B2B companies he has helped grow.</p>
<p>His positioning is &quot;AI SEO for B2B SaaS&quot; connected to demand capture and paid search. He works directly with clients, month to month, with no long contracts.</p>
<p><strong>Best for:</strong> B2B SaaS teams that want AI search tied to pipeline, not just visibility charts.</p>
<p><strong>Weakness:</strong> he runs a waitlist, and his practice spans SEO and Google Ads, so pure AEO research depth may be lighter than research-led specialists.</p>
<p><strong>Price:</strong> not public.</p>
<p><strong>Source:</strong> <a href="https://marketingadvice.io/about-me/">marketingadvice.io</a></p>
<h3 id="5-taylor-scher-best-for-transparent-saas-retainers">5. Taylor Scher: best for transparent SaaS retainers</h3>
<p>Taylor Scher runs Taylor Scher Consulting, focused on B2B SaaS SEO and AEO. He is one of the few consultants in this list who publishes his full price ladder.</p>
<p>Engagements run month to month and can be cancelled anytime. Scope is adjusted after an initial audit.</p>
<p><strong>Best for:</strong> seed to Series B SaaS companies that want pipeline-first SEO plus AEO at a known monthly cost.</p>
<p><strong>Weakness:</strong> the higher tiers bundle classic SEO, content and link building, so check how much of the retainer is AI answer work specifically.</p>
<p><strong>Price (published, &quot;starting from&quot;):</strong> from $4,000/month for strategy, from $5,500/month for done-for-you content, from $7,500/month for fractional SEO, and from $10,000/month for fractional SEO plus link building.</p>
<p><strong>Source:</strong> <a href="https://www.taylorscherseo.com/services-pricing">taylorscherseo.com/services-pricing</a></p>
<h3 id="6-jason-burns-best-for-hands-on-senior-help-at-a-day-rate">6. Jason Burns: best for hands-on senior help at a day rate</h3>
<p>Jason Burns is an independent UK consultant who has worked in search since 2007 and founded the agency SEO Moves. He covers SEO, GEO and practical AI workflow builds.</p>
<p>He works either embedded in your team or as an outside contractor on fixed-output projects. Past clients named on his site include 3M, BlackRock, Unilever and E.ON.</p>
<p><strong>Best for:</strong> UK and European teams that want a senior pair of hands for audits, migrations and AI search fixes without an agency layer.</p>
<p><strong>Weakness:</strong> one person means limited capacity, and his client proof is mostly classic SEO rather than published AI citation case studies.</p>
<p><strong>Price (published):</strong> £450/day, £225 half day, multi-day projects and monthly retainers from £1,800.</p>
<p><strong>Source:</strong> <a href="https://jasonburns.co.uk">jasonburns.co.uk</a></p>
<h3 id="7-marie-haynes-best-for-google-ai-overviews-and-agentic-search">7. Marie Haynes: best for Google AI Overviews and agentic search</h3>
<p>Dr. Marie Haynes has 16+ years of experience with Google's algorithms and wrote SEO in the Gemini Era. She focuses on AI Overviews, AI Mode and preparing for agentic search.</p>
<p>Her products are mostly diagnostic: $500 reports built from your Search Console and analytics data (traffic drop, post-update, spam recovery, helpfulness and AI search reviews), plus 1:1 consulting for a small client list.</p>
<p><strong>Best for:</strong> sites that depend on Google and want to understand how AI features change their traffic.</p>
<p><strong>Weakness:</strong> she is openly sceptical of chasing LLM mentions outside Google, and her site notes the $500 price may rise or orders may pause if demand grows, so confirm availability when you book. None of the work is done for you.</p>
<p><strong>Price (published):</strong> diagnostic reports $500; 1:1 consulting $5,000+.</p>
<p><strong>Source:</strong> <a href="https://www.mariehaynes.com/">mariehaynes.com</a></p>
<h2 id="what-does-an-aeo-consultant-actually-do">What does an AEO consultant actually do?</h2>
<p>A good AEO consultant measures how AI engines describe your brand today, finds why competitors get cited instead, and gives you a ranked plan to close the gap. The typical output is a baseline report, a source and citation-gap analysis, an entity and schema audit, content rewrites, and a 90-day roadmap.</p>
<p>Here is what AEO consulting deliverables look like in practice.</p>
<p><strong>Prompt-set baseline.</strong> A list of 25 to 100 buyer prompts, run across several engines, several times each, because AI answers vary between runs.</p>
<p><strong>Citation-gap analysis.</strong> Which domains engines cite when they answer your category prompts, and where your brand is missing.</p>
<p><strong>Entity audit.</strong> Consistent descriptions of your brand across your site, LinkedIn, Wikidata, review sites and directories, plus Organization and Person schema.</p>
<p><strong>Answer-first content.</strong> Restructuring key pages so each question has a short, liftable answer near the top.</p>
<p><strong>Off-site plan.</strong> The third-party pages, communities and publications that engines lean on, and how to earn a place on them.</p>
<p><strong>Training.</strong> Teaching your team to run the prompt set and repeat the process without the consultant.</p>
<h2 id="aeo-consultant-vs-agency-which-should-you-hire">AEO consultant vs agency: which should you hire?</h2>
<p>Hire an AEO consultant when you have people who can execute and you need senior judgement on what to do first. Hire an agency when you need the content, technical fixes, digital PR and monthly monitoring done for you. Many SaaS teams start with a consultant audit, then hand execution to an agency or in-house team.</p>
<div class="article-table"><table><thead><tr><th scope="col">Factor</th><th scope="col">Independent consultant</th><th scope="col">Agency</th><th scope="col">In-house hire</th></tr></thead><tbody><tr><td>Typical cost</td><td>From £450/day; retainers from $4,000/month</td><td>Usually higher than a solo retainer; few publish rates</td><td>Full salary plus tools</td></tr><tr><td>Who owns the outcome</td><td>You, with their plan</td><td>Shared, agency executes</td><td>You</td></tr><tr><td>Typical length</td><td>4 to 16 weeks or rolling advisory</td><td>6 to 12 month retainer</td><td>Permanent</td></tr><tr><td>Breadth</td><td>Deep in one person's specialty</td><td>Content, tech, PR, reporting</td><td>Depends on the hire</td></tr><tr><td>Speed to start</td><td>Days to weeks</td><td>Weeks (onboarding)</td><td>Months (hiring)</td></tr><tr><td>Best stage</td><td>Teams with execution capacity</td><td>Teams without capacity</td><td>Teams where AI search is core</td></tr><tr><td>Biggest risk</td><td>Plan sits unshipped</td><td>Paying for activity, not outcomes</td><td>Slow ramp, single point of failure</td></tr></tbody></table></div>
<p>For a full ranking of firms, read our guide to the <a href="https://www.nakama.in/journal/best-aeo-agencies">best AEO agencies</a>.</p>
<h2 id="when-does-a-firm-beat-an-independent-consultant">When does a firm beat an independent consultant?</h2>
<p>A firm beats an independent consultant when the bottleneck is capacity, not knowledge. If you already know what to fix but nobody has time to rewrite 50 pages, earn mentions on third-party sites and track prompts every month, a team will usually move faster.</p>
<p>Three signals point to a firm:</p>
<ul><li>You need ongoing off-site work such as digital PR, community and review site coverage.</li><li>You need monthly prompt tracking and reporting across several engines.</li><li>You have no in-house writer, developer or SEO to own the roadmap.</li></ul>
<h3 id="firms-you-might-also-hire-not-ranked-as-independent-consultants">Firms you might also hire (not ranked as independent consultants)</h3>
<p>These are well-known leaders who run firms. They are labelled &quot;Firm principal&quot; because you are hiring a company, not one person.</p>
<div class="article-table"><table><thead><tr><th scope="col">Name</th><th scope="col">Type</th><th scope="col">Best for</th><th scope="col">Engagement</th><th scope="col">Notable proof</th><th scope="col">Price band</th></tr></thead><tbody><tr><td>Mike King (iPullRank)</td><td>Firm principal</td><td>Enterprise, research-grade technical AEO</td><td>Agency retainer</td><td>Author of the AI Search Manual; &quot;Relevance Engineering&quot; framework</td><td>Published engagement ranges: $30K to $150K, $150K to $500K, $500K+ (not monthly)</td></tr><tr><td>Dan Petrovic (DEJAN)</td><td>Firm principal</td><td>Teams wanting experiment-led AI visibility</td><td>Audits and retainers</td><td>Published model-perception research</td><td>From AUD 5,000 (audit or monthly) per DEJAN</td></tr><tr><td>Evan Bailyn (First Page Sage)</td><td>Firm principal</td><td>Healthcare, finance, professional services</td><td>Agency team</td><td>Long-running GEO service and published rankings</td><td>Not public</td></tr><tr><td>Ross Simmonds (Foundation)</td><td>Firm principal</td><td>Content distribution for B2B brands</td><td>Agency retainer</td><td>Distribution-first content methodology</td><td>Not public</td></tr><tr><td>Olaf Kopp (Aufgesang)</td><td>Firm principal</td><td>German-speaking markets, LLM readability</td><td>Agency services</td><td>Developed the LLM-Readability concept</td><td>Not public</td></tr><tr><td>Brendan Hufford (Growth Sprints)</td><td>Firm principal</td><td>SaaS at $10M to $100M ARR</td><td>90-day sprints</td><td>Brendan works on client accounts directly</td><td>Not public</td></tr><tr><td>Nakama Growth</td><td>Agency</td><td>SaaS, tech and AI brands, India and global</td><td>Retainer</td><td>Process: prompt baseline, citation gaps, answer-first content</td><td>See <a href="https://www.nakama.in/pricing">/pricing</a></td></tr></tbody></table></div>
<p>If you want a team to run the work end to end, see <a href="https://www.nakama.in/services/aeo">Nakama Growth's AEO services</a>. We do not promise placements in any AI engine.</p>
<h2 id="how-much-do-aeo-consultants-cost-in-2026">How much do AEO consultants cost in 2026?</h2>
<p>Published independent AEO consultant rates in 2026 start at about £450 a day for hands-on work, $500 for a diagnostic report, and from $4,000 a month for an ongoing retainer. Senior 1:1 consulting can start at $5,000+. Many top advisors do not publish rates, so ask for a written scope. Agencies usually charge more because you are paying for execution capacity.</p>
<div class="article-table"><table><thead><tr><th scope="col">Engagement</th><th scope="col">Published price</th><th scope="col">Source</th></tr></thead><tbody><tr><td>Diagnostic report</td><td>$500</td><td><a href="https://www.mariehaynes.com/services/">Marie Haynes</a></td></tr><tr><td>Day rate</td><td>£450/day</td><td><a href="https://jasonburns.co.uk">Jason Burns</a></td></tr><tr><td>AI visibility audit</td><td>From $1,000</td><td><a href="https://stradiji.com">Stradiji</a></td></tr><tr><td>1:1 senior consulting</td><td>$5,000+</td><td><a href="https://www.mariehaynes.com/services/">Marie Haynes</a></td></tr><tr><td>Full audit</td><td>From $5,500 (10 pages)</td><td><a href="https://smallfactory5.com">Small Factory 5</a></td></tr><tr><td>Monthly retainer, solo</td><td>From $4,000/month (top tier from $10,000)</td><td><a href="https://www.taylorscherseo.com/services-pricing">Taylor Scher</a></td></tr></tbody></table></div>
<p><strong>Note for India buyers:</strong> at Oct 2026 exchange rates, a $4,000 monthly retainer is roughly ₹3.8 lakh (at about ₹95 to the dollar on 29 Oct 2026). Independent consultants based in India often quote lower, but few publish rates, so ask for a written scope.</p>
<h2 id="which-aeo-consultant-is-best-for-your-situation">Which AEO consultant is best for your situation?</h2>
<p>The best AEO consultant for you depends on three things: your company stage, the markets you sell in, and how much execution your own team can handle. A consultant gives direction, so pick the one whose specialty matches your biggest gap. Use the matches below as a shortlist, then run the vetting questions in the next section.</p>
<p><strong>B2B SaaS, seed to Series B:</strong> Taylor Scher for known monthly pricing, or Gaetano DiNardi if you want AI search tied to pipeline.</p>
<p><strong>Growth-stage SaaS and AI companies:</strong> Kevin Indig for executive-level advisory.</p>
<p><strong>International and ecommerce:</strong> Aleyda Solís for multi-market and multilingual programmes.</p>
<p><strong>Trust-sensitive categories:</strong> Lily Ray for E-E-A-T and content quality.</p>
<p><strong>Google-dependent sites:</strong> Marie Haynes for AI Overviews and AI Mode diagnostics.</p>
<p><strong>Small budget, UK or EU:</strong> Jason Burns for day-rate audits.</p>
<p><strong>India and APAC:</strong> few independent AEO consultants publish verifiable proof yet. Ask any local candidate for before-and-after prompt screenshots and named references. If you would rather hire a team, see our guide to the <a href="https://www.nakama.in/journal/best-aeo-agencies-india">best AEO agencies in India</a>.</p>
<h2 id="how-do-you-vet-an-aeo-consultant">How do you vet an AEO consultant?</h2>
<p>Vet an AEO consultant by asking how they measure AI visibility, not just what they will change. A strong candidate can name the prompts, engines and number of runs they will track, show before-and-after evidence from real clients, and tell you who does the work. Use these 10 questions.</p>
<ol><li>Which buyer prompts will you track, and who writes them?</li><li>Which engines do you test: ChatGPT, Perplexity, Gemini, Claude, Google AI Overviews, AI Mode?</li><li>How many runs per prompt, given that answers vary?</li><li>Can you show before-and-after screenshots from a past client, with dates?</li><li>How do you separate mentions from citations with links?</li><li>How do you find which third-party sources engines trust in our category?</li><li>What will you hand over: a report, a roadmap, rewritten pages?</li><li>Who does the work, you or someone else?</li><li>How will we connect AI visibility to traffic, signups or pipeline?</li><li>What would make you tell us not to hire you?</li></ol>
<h2 id="what-are-the-red-flags-when-hiring-an-aeo-consultant">What are the red flags when hiring an AEO consultant?</h2>
<p>The biggest red flag is a guarantee. No consultant controls what ChatGPT, Gemini or Google AI Overviews say, so any promise of a &quot;#1 spot in ChatGPT&quot; is a sales line, not a plan. The second is vague measurement: if a consultant cannot show the prompts, engines and run counts behind their numbers, you cannot tell whether anything improved.</p>
<p>Watch for these too:</p>
<ul><li>A single &quot;visibility score&quot; with no prompt list behind it.</li><li>Classic backlink packages relabelled as AEO.</li><li>No named clients, case studies or public writing.</li><li>Reports built on one run per prompt.</li><li>A founder who sells, then hands you to someone you never met.</li></ul>
<h2 id="frequently-asked-questions">Frequently asked questions</h2>
<h3 id="what-does-an-aeo-consultant-do">What does an AEO consultant do?</h3>
<p>An AEO consultant audits how AI answer engines describe and cite your brand, finds the gaps versus competitors, and gives your team a prioritised plan. Typical work includes a prompt-set baseline, citation-gap analysis, an entity and schema audit, answer-first content rewrites and team training.</p>
<h3 id="aeo-consultant-vs-aeo-agency-which-should-i-hire">AEO consultant vs AEO agency: which should I hire?</h3>
<p>Hire a consultant if you have people to execute and need senior direction. Hire an agency if you need content, technical fixes, digital PR and monitoring done for you. A common path is a consultant audit first, then execution by an agency or in-house team.</p>
<h3 id="how-much-does-an-aeo-consultant-cost">How much does an AEO consultant cost?</h3>
<p>Published independent rates in 2026 start at about £450 a day, $500 for a diagnostic report, and from $1,000 for an AI visibility audit. Ongoing retainers start from about $4,000 a month, and senior 1:1 consulting can start at $5,000+. Many top advisors do not publish rates. Always ask for a written scope that lists prompts, engines and deliverables.</p>
<h3 id="how-do-i-choose-an-aeo-consultant">How do I choose an AEO consultant?</h3>
<p>Before you hire an AEO consultant, check three things: a clear measurement method (prompts, engines, runs), named proof from similar companies, and direct access to the person you are hiring. Match their specialty to your stage and market using the shortlist above.</p>
<h3 id="who-are-the-best-aeo-consultants-in-2026">Who are the best AEO consultants in 2026?</h3>
<p>Our 2026 shortlist is Kevin Indig, Aleyda Solís, Lily Ray, Gaetano DiNardi, Taylor Scher, Jason Burns and Marie Haynes. See the comparison table at the top of this guide for type, best fit, engagement and published pricing.</p>
<h3 id="is-aeo-different-from-geo">Is AEO different from GEO?</h3>
<p>The terms overlap. AEO usually means optimizing to be the answer in AI and search answer features. GEO usually means optimizing for generative engines like ChatGPT and Gemini. Most consultants in this guide do both, so a GEO consultant and an AEO consultant are usually offering the same core service under different names.</p>
<h3 id="do-i-need-seo-before-aeo">Do I need SEO before AEO?</h3>
<p>Yes, in most cases. AI engines retrieve from the open web and lean on the same crawlability, authority and content quality signals as search. A site that is hard to crawl or thin on content rarely gets cited.</p>
<h3 id="is-an-llm-seo-consultant-or-ai-visibility-consultant-the-same-as-an-aeo-consultant">Is an LLM SEO consultant or AI visibility consultant the same as an AEO consultant?</h3>
<p>Mostly, yes. LLM SEO consultant, AI visibility consultant and GEO consultant are labels for the same job: improving how often AI answers mention and cite your brand. Judge the person on method and proof, not the title they use.</p>
<h3 id="can-an-aeo-consultant-guarantee-citations-in-chatgpt">Can an AEO consultant guarantee citations in ChatGPT?</h3>
<p>No. AI answers change between runs and between model updates. A credible consultant promises a process and measurement, not a placement.</p>
<h3 id="how-long-until-we-see-results">How long until we see results?</h3>
<p>Technical and on-page fixes can show up within weeks for engines that browse the live web. Off-site authority work usually takes three to six months. Results vary by category and competition.</p>
<h2 id="final-take">Final take</h2>
<p>The best AEO consultant for you is the one whose specialty matches your bottleneck, whether that is trust signals, international reach, B2B SaaS pipeline or Google AI Overviews. Pick an independent consultant for senior diagnosis and a clear plan your team can ship. Pick a firm when you need the plan shipped every month. Either way, check named proof and published pricing first.</p>
<p>Start with the comparison table, shortlist two names, and run the 10 vetting questions on a call. If you would rather have a team handle execution, compare firms in our <a href="https://www.nakama.in/journal/best-aeo-agencies">best AEO agencies</a> guide or see <a href="https://www.nakama.in/services/aeo">how Nakama Growth approaches AEO</a>.</p>
<p>Want a baseline first? <a href="https://www.nakama.in/contact">Ask for a free AI visibility check</a> and we will show you which prompts mention your brand today.</p>
<h2 id="about-the-author">About the author</h2>
<div class="author-box" id="yash-kumar"><img src="/authors/yash-kumar-nakama-ceo.webp" srcset="/authors/yash-kumar-nakama-ceo.webp 400w, /authors/yash-kumar-nakama-ceo-800.webp 800w" sizes="96px" alt="Yash Kumar, Co-founder and CEO of Nakama Growth" width="96" height="96" loading="lazy" decoding="async"><div class="author-box-text"><p><a href="https://www.nakama.in/authors/yash-kumar" rel="author">Yash Kumar</a> is Co-founder and CEO of Nakama Growth, an AEO and AI visibility agency for SaaS, software and AI companies. He tracks how ChatGPT, Gemini, Perplexity and Google AI Overviews answer buyer prompts and publishes the results.</p></div></div>`;

export const bestAeoConsultantsArticle: Article = {
 slug: 'best-aeo-consultants',
 category: 'Guide',
 title: TITLE,
 description: DESCRIPTION,
 readTime: '19 min read',
 motif: 'guide',
 metaTitle: TITLE,
 date: dayOf(PUBLISHED_AT),
 publishedAt: PUBLISHED_AT,
 authorName: 'Yash Kumar',
 /** GO-LIVE TODO: PREVIEW is the only switch. false => index,follow plus sitemap, llms and RSS. */
 noindex: PREVIEW,
 /** Keep reading stays on the global AEO agencies guide. */
 nextSlug: 'best-aeo-agencies',
 coverImage: {src: '/journal/best-aeo-consultants/best-aeo-consultants-cover.png', width: 1920, height: 1080},
 ogImage: {
  url: 'https://www.nakama.in/journal/best-aeo-consultants/best-aeo-consultants-og.png',
  width: 1200,
  height: 630,
  alt: OG_ALT,
  type: 'image/png',
 },
 jsonLd: bestAeoConsultantsJsonLd,
 bodyHtml,
 sections: [
 {
 "heading": "Introduction",
 "paragraphs": [
  TITLE,
  `Updated ${modifiedDate}`,
  "By Yash Kumar, Co-founder and CEO, Nakama Growth"
 ]
},
 {
 "heading": "Quick answer: who are the best AEO consultants in 2026?",
 "paragraphs": [
  "The best AEO consultants in 2026 are Kevin Indig (growth-stage B2B and AI companies), Aleyda Solís (international, ecommerce and SaaS), Lily Ray (trust, E-E-A-T and AI search quality), Gaetano DiNardi (B2B SaaS demand capture), Taylor Scher (transparent SaaS retainers), Jason Burns (hands-on UK day-rate work) and Marie Haynes (Google AI Overviews and agentic search diagnostics).",
  "An AEO consultant (answer engine optimization consultant) is a senior individual who diagnoses why AI answer engines do or do not mention and cite your brand, then gives your team a prioritised plan. An agency usually does the execution as well.",
  "Published independent rates in this guide start at £450 a day for hands-on work, $500 for a diagnostic report, and from $4,000 a month for a retainer.",
  "How we picked: we checked each person's own website between 20 and 29 Oct 2026, plus at least one independent source during research (not every source is linked in the entry). We kept only people with a public consulting, advisory or fractional offer. Founders who lead a firm are moved to a separate box and labelled \"Firm principal\".",
  "Nakama Growth is an AEO agency; we are not ranked as an independent consultant in this list."
 ]
},
 {
 "heading": "What is an AEO consultant?",
 "paragraphs": [
  "An AEO (answer engine optimization) consultant is a specialist who helps a brand get mentioned, recommended and cited in AI-generated answers from ChatGPT, Perplexity, Gemini, Claude and Google AI Overviews. They audit how engines describe you, find the sources those engines trust, and turn that into a roadmap your team or agency can ship.",
  "The key difference from an agency is ownership. A consultant owns the diagnosis and the plan. Your team usually owns the doing.",
  "Some consultants also call this work GEO (generative engine optimization), LLM SEO or AI search optimization, so you will see the same person described as a GEO consultant, a generative engine optimization consultant, an LLM SEO consultant or an AI visibility consultant. For buyers, the labels describe the same goal: being part of the answer."
 ]
},
 {
 "heading": "How do the best AEO consultants compare?",
 "paragraphs": [
  "The seven best AEO consultants compare most clearly on specialty, engagement type and pricing transparency. Kevin Indig and Lily Ray suit advisory and trust work, Aleyda Solís suits international brands, and Gaetano DiNardi suits B2B SaaS. Taylor Scher, Jason Burns and Marie Haynes publish rates; the other four quote per scope after a scoping call.",
  "Name | Type | Best for | Engagement | Notable proof | Price band",
  "Kevin Indig | Independent | Growth-stage B2B, SaaS and AI companies | Advisory, 6 to 12 months | Client testimonials from Ramp and Nextdoor on his advisory page | Not public",
  "Aleyda Solís (Orainti) | Independent (boutique consultancy) | International, multilingual, ecommerce and SaaS | Audits, ongoing advice, training | Founded Orainti in 2014; runs LearningAIsearch.com | Not public",
  "Lily Ray (Algorythmic) | Independent (also VP at Amsive) | E-E-A-T, trust, AI search quality | Selective 1:1 projects, hourly, training | Runs Algorythmic alongside her VP role at Amsive | Not public",
  "Gaetano DiNardi (Marketing Advice) | Independent | B2B SaaS at $10M+ ARR | Hands-on, month to month (waitlist) | Clients include Cognism and Aura | Not public",
  "Taylor Scher | Independent | B2B SaaS wanting pipeline-first SEO and AEO | Monthly, cancel anytime | Public SaaS case studies on his site | From $4,000/month; top tier from $10,000/month (published)",
  "Jason Burns | Independent | UK and EU teams wanting hands-on senior help | Day rate, project blocks, retainer | Founded SEO Moves; past work with 3M, BlackRock, Unilever, E.ON | £450/day; retainers from £1,800/month (published)",
  "Marie Haynes | Independent | Google AI Overviews, AI Mode, agentic search | Site reviews, strategy reports, coaching | Author of SEO in the Gemini Era | Diagnostic reports $500; 1:1 consulting $5,000+ (published)"
 ]
},
 {
 "heading": "How did we pick these AEO consultants?",
 "paragraphs": [
  "We picked these AEO consultants with one Required gate, a live public consulting offer, plus five weighted criteria: published AI search work, named proof, hands-on access, pricing transparency and fit for tech buyers. Each criterion maps to a question a buyer actually asks before hiring a consultant.",
  "Criterion | Weight | What we looked for",
  "Public consulting offer | Required | A live page that sells consulting, advisory or fractional work",
  "Published AI search work | 30% | Original research, frameworks or talks on AI answers, not just classic SEO",
  "Named proof | 25% | Named clients, testimonials or public case studies",
  "Hands-on access | 20% | You work with the named person, not a junior team",
  "Pricing transparency | 15% | Published rates or clear engagement shape",
  "Fit for tech, SaaS and AI buyers | 10% | Evidence of software or AI company work",
  "We dropped anyone we could not verify on their own site plus one independent source. We also moved firm founders out of the independent list, even when they are excellent, so the word \"independent\" stays honest.",
  "Limits: we did not hire these consultants. Prices change, and anything we could not confirm on the seller's own site is marked \"not public\" or left out."
 ]
},
 {
 "heading": "The 7 best independent AEO consultants in 2026",
 "paragraphs": [
  "Each AEO consultant below passed the public-offer gate and is listed with best fit, proof we could verify on 29 October 2026, and pricing where published."
 ]
},
 {
 "heading": "1. Kevin Indig: best for growth-stage B2B and AI companies",
 "paragraphs": [
  "Kevin Indig is an independent organic growth advisor who writes a weekly research newsletter on search and AI visibility.",
  "His SEO/AEO advisory covers AI visibility strategy, technical accessibility, content systems, authority building through first-party research, and measurement across search and AI visibility.",
  "His advisory page carries testimonials from growth leaders at Ramp and Nextdoor.",
  "Best for: growth-stage B2B and AI companies with executive buy-in for a 6 to 12 month programme.",
  "Weakness: this is advisory, not execution. You need an in-house team or agency to ship the work, and his time is expensive.",
  "Price: not public.",
  "Source: kevin-indig.com/services/seo-aeo-advisory"
 ]
},
 {
 "heading": "2. Aleyda Solís: best for international, ecommerce and SaaS brands",
 "paragraphs": [
  "Aleyda Solís founded Orainti in 2014, a boutique SEO and AI search consultancy. She has more than 19 years of experience and has spoken at 200+ events in 30+ countries.",
  "She publishes LearningAIsearch.com, a free AI search optimization roadmap, plus the SEOFOMO and AI Marketers newsletters. Her 2026 talks focus on ecommerce AI search and the technical foundations that decide AI visibility.",
  "Best for: companies selling across several countries and languages, marketplaces, and SaaS teams with in-house SEO capacity.",
  "Weakness: the deliverable is usually a documented playbook, not done-for-you execution. Capacity is limited and pricing is not published.",
  "Price: not public.",
  "Source: orainti.com"
 ]
},
 {
 "heading": "3. Lily Ray: best for trust, E-E-A-T and AI search quality",
 "paragraphs": [
  "Lily Ray runs Algorythmic, a selective 1:1 SEO and AI search consultancy. She also continues as a VP at Amsive.",
  "Algorythmic offers AEO consulting, audits and strategy for ChatGPT, Gemini, Perplexity and AI Overviews, plus E-E-A-T audits, Google Discover strategy, training and hourly consulting.",
  "Best for: brands and publishers where trust signals and content quality decide whether AI systems cite them.",
  "Weakness: she takes on a small number of projects and recommends Amsive for larger team-based work, so a big programme may route you to an agency. Pricing is not published.",
  "Price: not public.",
  "Source: algorythmic.co"
 ]
},
 {
 "heading": "4. Gaetano DiNardi: best for B2B SaaS demand capture",
 "paragraphs": [
  "Gaetano DiNardi is principal consultant at Marketing Advice. His site names Cognism and Aura among the B2B companies he has helped grow.",
  "His positioning is \"AI SEO for B2B SaaS\" connected to demand capture and paid search. He works directly with clients, month to month, with no long contracts.",
  "Best for: B2B SaaS teams that want AI search tied to pipeline, not just visibility charts.",
  "Weakness: he runs a waitlist, and his practice spans SEO and Google Ads, so pure AEO research depth may be lighter than research-led specialists.",
  "Price: not public.",
  "Source: marketingadvice.io"
 ]
},
 {
 "heading": "5. Taylor Scher: best for transparent SaaS retainers",
 "paragraphs": [
  "Taylor Scher runs Taylor Scher Consulting, focused on B2B SaaS SEO and AEO. He is one of the few consultants in this list who publishes his full price ladder.",
  "Engagements run month to month and can be cancelled anytime. Scope is adjusted after an initial audit.",
  "Best for: seed to Series B SaaS companies that want pipeline-first SEO plus AEO at a known monthly cost.",
  "Weakness: the higher tiers bundle classic SEO, content and link building, so check how much of the retainer is AI answer work specifically.",
  "Price (published, \"starting from\"): from $4,000/month for strategy, from $5,500/month for done-for-you content, from $7,500/month for fractional SEO, and from $10,000/month for fractional SEO plus link building.",
  "Source: taylorscherseo.com/services-pricing"
 ]
},
 {
 "heading": "6. Jason Burns: best for hands-on senior help at a day rate",
 "paragraphs": [
  "Jason Burns is an independent UK consultant who has worked in search since 2007 and founded the agency SEO Moves. He covers SEO, GEO and practical AI workflow builds.",
  "He works either embedded in your team or as an outside contractor on fixed-output projects. Past clients named on his site include 3M, BlackRock, Unilever and E.ON.",
  "Best for: UK and European teams that want a senior pair of hands for audits, migrations and AI search fixes without an agency layer.",
  "Weakness: one person means limited capacity, and his client proof is mostly classic SEO rather than published AI citation case studies.",
  "Price (published): £450/day, £225 half day, multi-day projects and monthly retainers from £1,800.",
  "Source: jasonburns.co.uk"
 ]
},
 {
 "heading": "7. Marie Haynes: best for Google AI Overviews and agentic search",
 "paragraphs": [
  "Dr. Marie Haynes has 16+ years of experience with Google's algorithms and wrote SEO in the Gemini Era. She focuses on AI Overviews, AI Mode and preparing for agentic search.",
  "Her products are mostly diagnostic: $500 reports built from your Search Console and analytics data (traffic drop, post-update, spam recovery, helpfulness and AI search reviews), plus 1:1 consulting for a small client list.",
  "Best for: sites that depend on Google and want to understand how AI features change their traffic.",
  "Weakness: she is openly sceptical of chasing LLM mentions outside Google, and her site notes the $500 price may rise or orders may pause if demand grows, so confirm availability when you book. None of the work is done for you.",
  "Price (published): diagnostic reports $500; 1:1 consulting $5,000+.",
  "Source: mariehaynes.com"
 ]
},
 {
 "heading": "What does an AEO consultant actually do?",
 "paragraphs": [
  "A good AEO consultant measures how AI engines describe your brand today, finds why competitors get cited instead, and gives you a ranked plan to close the gap. The typical output is a baseline report, a source and citation-gap analysis, an entity and schema audit, content rewrites, and a 90-day roadmap.",
  "Here is what AEO consulting deliverables look like in practice.",
  "Prompt-set baseline. A list of 25 to 100 buyer prompts, run across several engines, several times each, because AI answers vary between runs.",
  "Citation-gap analysis. Which domains engines cite when they answer your category prompts, and where your brand is missing.",
  "Entity audit. Consistent descriptions of your brand across your site, LinkedIn, Wikidata, review sites and directories, plus Organization and Person schema.",
  "Answer-first content. Restructuring key pages so each question has a short, liftable answer near the top.",
  "Off-site plan. The third-party pages, communities and publications that engines lean on, and how to earn a place on them.",
  "Training. Teaching your team to run the prompt set and repeat the process without the consultant."
 ]
},
 {
 "heading": "AEO consultant vs agency: which should you hire?",
 "paragraphs": [
  "Hire an AEO consultant when you have people who can execute and you need senior judgement on what to do first. Hire an agency when you need the content, technical fixes, digital PR and monthly monitoring done for you. Many SaaS teams start with a consultant audit, then hand execution to an agency or in-house team.",
  "Factor | Independent consultant | Agency | In-house hire",
  "Typical cost | From £450/day; retainers from $4,000/month | Usually higher than a solo retainer; few publish rates | Full salary plus tools",
  "Who owns the outcome | You, with their plan | Shared, agency executes | You",
  "Typical length | 4 to 16 weeks or rolling advisory | 6 to 12 month retainer | Permanent",
  "Breadth | Deep in one person's specialty | Content, tech, PR, reporting | Depends on the hire",
  "Speed to start | Days to weeks | Weeks (onboarding) | Months (hiring)",
  "Best stage | Teams with execution capacity | Teams without capacity | Teams where AI search is core",
  "Biggest risk | Plan sits unshipped | Paying for activity, not outcomes | Slow ramp, single point of failure",
  "For a full ranking of firms, read our guide to the best AEO agencies."
 ]
},
 {
 "heading": "When does a firm beat an independent consultant?",
 "paragraphs": [
  "A firm beats an independent consultant when the bottleneck is capacity, not knowledge. If you already know what to fix but nobody has time to rewrite 50 pages, earn mentions on third-party sites and track prompts every month, a team will usually move faster.",
  "Three signals point to a firm:",
  "You need ongoing off-site work such as digital PR, community and review site coverage.",
  "You need monthly prompt tracking and reporting across several engines.",
  "You have no in-house writer, developer or SEO to own the roadmap."
 ]
},
 {
 "heading": "Firms you might also hire (not ranked as independent consultants)",
 "paragraphs": [
  "These are well-known leaders who run firms. They are labelled \"Firm principal\" because you are hiring a company, not one person.",
  "Name | Type | Best for | Engagement | Notable proof | Price band",
  "Mike King (iPullRank) | Firm principal | Enterprise, research-grade technical AEO | Agency retainer | Author of the AI Search Manual; \"Relevance Engineering\" framework | Published engagement ranges: $30K to $150K, $150K to $500K, $500K+ (not monthly)",
  "Dan Petrovic (DEJAN) | Firm principal | Teams wanting experiment-led AI visibility | Audits and retainers | Published model-perception research | From AUD 5,000 (audit or monthly) per DEJAN",
  "Evan Bailyn (First Page Sage) | Firm principal | Healthcare, finance, professional services | Agency team | Long-running GEO service and published rankings | Not public",
  "Ross Simmonds (Foundation) | Firm principal | Content distribution for B2B brands | Agency retainer | Distribution-first content methodology | Not public",
  "Olaf Kopp (Aufgesang) | Firm principal | German-speaking markets, LLM readability | Agency services | Developed the LLM-Readability concept | Not public",
  "Brendan Hufford (Growth Sprints) | Firm principal | SaaS at $10M to $100M ARR | 90-day sprints | Brendan works on client accounts directly | Not public",
  "Nakama Growth | Agency | SaaS, tech and AI brands, India and global | Retainer | Process: prompt baseline, citation gaps, answer-first content | See /pricing",
  "If you want a team to run the work end to end, see Nakama Growth's AEO services. We do not promise placements in any AI engine."
 ]
},
 {
 "heading": "How much do AEO consultants cost in 2026?",
 "paragraphs": [
  "Published independent AEO consultant rates in 2026 start at about £450 a day for hands-on work, $500 for a diagnostic report, and from $4,000 a month for an ongoing retainer. Senior 1:1 consulting can start at $5,000+. Many top advisors do not publish rates, so ask for a written scope. Agencies usually charge more because you are paying for execution capacity.",
  "Engagement | Published price | Source",
  "Diagnostic report | $500 | Marie Haynes",
  "Day rate | £450/day | Jason Burns",
  "AI visibility audit | From $1,000 | Stradiji",
  "1:1 senior consulting | $5,000+ | Marie Haynes",
  "Full audit | From $5,500 (10 pages) | Small Factory 5",
  "Monthly retainer, solo | From $4,000/month (top tier from $10,000) | Taylor Scher",
  "Note for India buyers: at Oct 2026 exchange rates, a $4,000 monthly retainer is roughly ₹3.8 lakh (at about ₹95 to the dollar on 29 Oct 2026). Independent consultants based in India often quote lower, but few publish rates, so ask for a written scope."
 ]
},
 {
 "heading": "Which AEO consultant is best for your situation?",
 "paragraphs": [
  "The best AEO consultant for you depends on three things: your company stage, the markets you sell in, and how much execution your own team can handle. A consultant gives direction, so pick the one whose specialty matches your biggest gap. Use the matches below as a shortlist, then run the vetting questions in the next section.",
  "B2B SaaS, seed to Series B: Taylor Scher for known monthly pricing, or Gaetano DiNardi if you want AI search tied to pipeline.",
  "Growth-stage SaaS and AI companies: Kevin Indig for executive-level advisory.",
  "International and ecommerce: Aleyda Solís for multi-market and multilingual programmes.",
  "Trust-sensitive categories: Lily Ray for E-E-A-T and content quality.",
  "Google-dependent sites: Marie Haynes for AI Overviews and AI Mode diagnostics.",
  "Small budget, UK or EU: Jason Burns for day-rate audits.",
  "India and APAC: few independent AEO consultants publish verifiable proof yet. Ask any local candidate for before-and-after prompt screenshots and named references. If you would rather hire a team, see our guide to the best AEO agencies in India."
 ]
},
 {
 "heading": "How do you vet an AEO consultant?",
 "paragraphs": [
  "Vet an AEO consultant by asking how they measure AI visibility, not just what they will change. A strong candidate can name the prompts, engines and number of runs they will track, show before-and-after evidence from real clients, and tell you who does the work. Use these 10 questions.",
  "Which buyer prompts will you track, and who writes them?",
  "Which engines do you test: ChatGPT, Perplexity, Gemini, Claude, Google AI Overviews, AI Mode?",
  "How many runs per prompt, given that answers vary?",
  "Can you show before-and-after screenshots from a past client, with dates?",
  "How do you separate mentions from citations with links?",
  "How do you find which third-party sources engines trust in our category?",
  "What will you hand over: a report, a roadmap, rewritten pages?",
  "Who does the work, you or someone else?",
  "How will we connect AI visibility to traffic, signups or pipeline?",
  "What would make you tell us not to hire you?"
 ]
},
 {
 "heading": "What are the red flags when hiring an AEO consultant?",
 "paragraphs": [
  "The biggest red flag is a guarantee. No consultant controls what ChatGPT, Gemini or Google AI Overviews say, so any promise of a \"#1 spot in ChatGPT\" is a sales line, not a plan. The second is vague measurement: if a consultant cannot show the prompts, engines and run counts behind their numbers, you cannot tell whether anything improved.",
  "Watch for these too:",
  "A single \"visibility score\" with no prompt list behind it.",
  "Classic backlink packages relabelled as AEO.",
  "No named clients, case studies or public writing.",
  "Reports built on one run per prompt.",
  "A founder who sells, then hands you to someone you never met."
 ]
},
 {
 "heading": "Frequently asked questions",
 "paragraphs": []
},
 {
 "heading": "What does an AEO consultant do?",
 "paragraphs": [
  "An AEO consultant audits how AI answer engines describe and cite your brand, finds the gaps versus competitors, and gives your team a prioritised plan. Typical work includes a prompt-set baseline, citation-gap analysis, an entity and schema audit, answer-first content rewrites and team training."
 ]
},
 {
 "heading": "AEO consultant vs AEO agency: which should I hire?",
 "paragraphs": [
  "Hire a consultant if you have people to execute and need senior direction. Hire an agency if you need content, technical fixes, digital PR and monitoring done for you. A common path is a consultant audit first, then execution by an agency or in-house team."
 ]
},
 {
 "heading": "How much does an AEO consultant cost?",
 "paragraphs": [
  "Published independent rates in 2026 start at about £450 a day, $500 for a diagnostic report, and from $1,000 for an AI visibility audit. Ongoing retainers start from about $4,000 a month, and senior 1:1 consulting can start at $5,000+. Many top advisors do not publish rates. Always ask for a written scope that lists prompts, engines and deliverables."
 ]
},
 {
 "heading": "How do I choose an AEO consultant?",
 "paragraphs": [
  "Before you hire an AEO consultant, check three things: a clear measurement method (prompts, engines, runs), named proof from similar companies, and direct access to the person you are hiring. Match their specialty to your stage and market using the shortlist above."
 ]
},
 {
 "heading": "Who are the best AEO consultants in 2026?",
 "paragraphs": [
  "Our 2026 shortlist is Kevin Indig, Aleyda Solís, Lily Ray, Gaetano DiNardi, Taylor Scher, Jason Burns and Marie Haynes. See the comparison table at the top of this guide for type, best fit, engagement and published pricing."
 ]
},
 {
 "heading": "Is AEO different from GEO?",
 "paragraphs": [
  "The terms overlap. AEO usually means optimizing to be the answer in AI and search answer features. GEO usually means optimizing for generative engines like ChatGPT and Gemini. Most consultants in this guide do both, so a GEO consultant and an AEO consultant are usually offering the same core service under different names."
 ]
},
 {
 "heading": "Do I need SEO before AEO?",
 "paragraphs": [
  "Yes, in most cases. AI engines retrieve from the open web and lean on the same crawlability, authority and content quality signals as search. A site that is hard to crawl or thin on content rarely gets cited."
 ]
},
 {
 "heading": "Is an LLM SEO consultant or AI visibility consultant the same as an AEO consultant?",
 "paragraphs": [
  "Mostly, yes. LLM SEO consultant, AI visibility consultant and GEO consultant are labels for the same job: improving how often AI answers mention and cite your brand. Judge the person on method and proof, not the title they use."
 ]
},
 {
 "heading": "Can an AEO consultant guarantee citations in ChatGPT?",
 "paragraphs": [
  "No. AI answers change between runs and between model updates. A credible consultant promises a process and measurement, not a placement."
 ]
},
 {
 "heading": "How long until we see results?",
 "paragraphs": [
  "Technical and on-page fixes can show up within weeks for engines that browse the live web. Off-site authority work usually takes three to six months. Results vary by category and competition."
 ]
},
 {
 "heading": "Final take",
 "paragraphs": [
  "The best AEO consultant for you is the one whose specialty matches your bottleneck, whether that is trust signals, international reach, B2B SaaS pipeline or Google AI Overviews. Pick an independent consultant for senior diagnosis and a clear plan your team can ship. Pick a firm when you need the plan shipped every month. Either way, check named proof and published pricing first.",
  "Start with the comparison table, shortlist two names, and run the 10 vetting questions on a call. If you would rather have a team handle execution, compare firms in our best AEO agencies guide or see how Nakama Growth approaches AEO.",
  "Want a baseline first? Ask for a free AI visibility check and we will show you which prompts mention your brand today."
 ]
},
 {
 "heading": "About the author",
 "paragraphs": [
  "Yash Kumar is Co-founder and CEO of Nakama Growth, an AEO and AI visibility agency for SaaS, software and AI companies. He tracks how ChatGPT, Gemini, Perplexity and Google AI Overviews answer buyer prompts and publishes the results."
 ]
}
 ],
};
