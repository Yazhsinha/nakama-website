/**
 * /industries/healthcare · Hibiku LOCKED v1.1.5 strings (Soften-patch).
 * Do not paraphrase. Ops HOLD notes from the lock file are not rendered.
 * Diagram labels marked twin chrome come from the Soften V1.1.2 visual, not new claims.
 * Preview only: this route stays noindex and off sitemap / llms / nav until a ship GO.
 * Ship queue: SHIP-FLIP.md.
 */

export const SLUG = '/industries/healthcare';
export const TITLE = 'Healthcare GEO Agency | AI Visibility for Health Brands | Nakama Growth';
export const META = 'Healthcare GEO agency helping clinics, hospitals, healthtech and wellness brands get named, cited and recommended in AI answers. Nakama Growth.';

export const EYEBROW = 'Healthcare';
export const H1 = 'GEO Agency for Healthcare Brands';
export const LEAD = 'Nakama Growth helps healthcare brands, including clinics, healthtech, hospitals and wellness companies, get named when buyers ask ChatGPT, Perplexity and Google AI Overviews what to choose. We earn mentions on the sources those tools read, keep claims reviewable, and measure mentions, citations and recommendations separately.';

export const CTA_PRIMARY = 'Book a call';
export const CTA_PRIMARY_HREF = '/pricing#quote';
export const CTA_SECONDARY = 'AI visibility audit';
export const CTA_SECONDARY_HREF = '/services/ai-visibility-audit';

export const PROOF_LABEL = 'Brands we have grown in AI search';
/** White marks from public/clients/white. Synup is a wordmark; the others are a symbol plus a visible name. */
export const PROOF_LOGOS = [
 {name: 'Synup', src: '/clients/white/synup.svg', w: 557, h: 151, word: true},
 {name: 'Inventive AI', src: '/clients/white/inventive.png', w: 158, h: 157, word: false},
 {name: 'HubEngage', src: '/clients/white/hubengage.png', w: 160, h: 160, word: false},
 {name: 'StarAgile', src: '/clients/white/staragile.png', w: 250, h: 150, word: false},
 {name: 'BacklinkOS', src: '/clients/white/backlinkos.png', w: 84, h: 79, word: false},
] as const;

export const H2_DEF = 'What is GEO for healthcare?';
export const DAL_DEF = 'GEO for healthcare is the work of making a health brand easy for AI answer engines to name, cite and recommend on buyer and patient research prompts. It covers source of truth pages, claim review, off site citations and ongoing prompt checks across ChatGPT, Perplexity and Google AI Overviews, without promising patient volume.';
export const DEF_ENTITY = 'A healthcare GEO agency does this work for health brands, from the first audit to monthly prompt tracking. Buyers searching for a geo agency for healthcare get the same program: prompt mapping, claim review and measured AI mentions.';

/** Twin chrome for the §03 pathway. Ember only on the named answer. */
export const DEF_FLOW = [
 {n: '01', title: 'Health brand', meta: 'source of truth', named: false},
 {n: '02', title: 'Trusted sources', meta: 'publisher · directory · review', named: false},
 {n: '03', title: 'AI engines', meta: 'ChatGPT · Perplexity · Google AI Overviews', named: false},
 {n: '04', title: 'Buyer or patient answer', meta: 'named', named: true},
] as const;

export const H2_WHY = 'Why AI answers matter for health brands';
export const DAL_WHY = 'AI answers now sit between health buyers and your website. When someone asks which clinic, app or device to trust, the engine picks a few names and summarizes them. If your facts are missing or outdated, it can describe you wrongly or leave you out. An AI visibility agency finds those gaps and fixes the sources.';
export const WHY_SHORT = 'Health is a your money or your life topic, so engines prefer corroborated or trusted sources on health questions. That raises the bar for clear, reviewed claims.';

export const H3_SOURCES = 'Source types AI answers pull for health prompts';
export const SOURCES: readonly [string, string, string][] = [
 ['Official brand pages', 'Facts, services, locations, product claims', 'Source of truth pages with claim review'],
 ['Medical publishers and journals', 'Corroboration on clinical topics', 'Earn mentions where your category is already cited'],
 ['Review and directory sites', 'Shortlists and local or vendor picks', 'Claim and improve profiles engines already trust'],
 ['Reddit and YouTube', 'Lived experience and explainers', 'Disclosure-safe community and video answers when relevant'],
 ['Wikipedia and reference pages', 'Entity grounding', 'Keep your entity facts consistent where you can edit'],
];

export const H2_WHO = 'Who we work with in healthcare';
export const DAL_WHO = 'Nakama Growth can work with health brands whose buyers research in AI tools before they choose. That includes wellness and D2C health brands, clinics and provider groups, hospitals, healthtech and digital health products, and B2B pharma and medtech teams. Each group asks different prompts, so each gets its own prompt set.';

export const SEGMENTS: readonly [string, string, string][] = [
 ['Wellness and D2C health', 'Products people compare before they buy', '"Which magnesium supplement brands are third party tested?"'],
 ['Clinics and provider groups', 'Local and service answers that must be accurate', '"Best physiotherapy clinic near downtown Austin for a sports injury"'],
 ['Healthtech and digital health', 'Category and comparison answers', '"Best remote patient monitoring platforms for small practices"'],
 ['Pharma and medtech (B2B)', 'Vendor shortlists from procurement and clinical teams', '"Top contract research organizations for early phase oncology trials"'],
];

export const H3_HEALTHTECH = 'GEO for healthtech and digital health';
export const HEALTHTECH_BRIDGE = 'If you are looking for a healthtech SEO agency, Nakama Growth covers the AI answer side: comparison prompts, category pages and the review sites engines cite.';

export const H2_HOSP = 'GEO for hospitals and health systems';
export const DAL_HOSP = 'Hospitals need AI answers to get the basics right: which departments they run, which locations offer what, and how to book. Nakama Growth audits hospital prompts, fixes the pages and listings engines pull from, and tracks whether answers name the right hospital for each service line. Clinical claims go through your reviewers first.';
export const HERO_PROMPT = 'Best physiotherapy clinic near downtown Austin for a sports injury';
export const HOSP_QUERY = 'Which hospital in Boston has the best cardiac surgery department?';
export const HOSP_PROMPT = 'Example prompt: "Which hospital in Boston has the best cardiac surgery department?"';
export const STATE_PROMPT = 'Which hospitals in Dubai offer robotic knee replacement near me?';
export const HOSP_BRIDGE = 'Looking for a hospital SEO agency? We cover the AI answer side: department and location prompts, and whether engines name the right hospital for each service line.';

/** Twin chrome. Illustrative wayfinding, not a client result. */
export const HOSP_ROWS = [
 {title: 'Cardiac surgery', sub: 'Right hospital named for this service line', floors: ['WING B', 'FLOOR 3'], on: true},
 {title: 'Orthopedics', sub: 'Location that offers it', floors: ['WING A', 'FLOOR 2'], on: false},
 {title: 'Oncology', sub: 'Department listed correctly', floors: ['WING C', 'FLOOR 4'], on: false},
 {title: 'Book an appointment', sub: 'How to book', floors: ['LOBBY'], on: false},
] as const;

export const H2_FRAME = 'The Health Answer Readiness framework';
export const DAL_FRAME = 'Health Answer Readiness is the five step framework Nakama Growth uses on healthcare accounts. It moves from prompts to proof: map the questions buyers ask, set what is true, get claims reviewed, place that truth where engines read, then measure. Method detail for each step lives on our GEO and AEO pages.';

export const STEPS: readonly [string, string, string][] = [
 ['01', 'Map', 'Pick the buyer and patient prompts that matter for your category and markets.'],
 ['02', 'Define', 'Write one source of truth page per service, product or condition you serve.'],
 ['03', 'Review', 'Your clinical or medical reviewer approves every health claim before it ships.'],
 ['04', 'Place', 'Earn mentions on the directories, publishers and forums engines already cite.'],
 ['05', 'Measure', 'Track mentions, citations, recommendations and referrals as separate numbers.'],
];

export const H2_SVC = 'Healthcare answer engine optimization and GEO services';
export const DAL_SVC = 'Healthcare answer engine optimization sits in the same program, not as a separate add on. Nakama Growth runs GEO, AEO and AI visibility audits for health brands with the same methods as our core services pages, including teams that searched for a healthcare AI SEO agency and need the answer-engine layer.';

export const SERVICES: readonly [string, string, string][] = [
 ['GEO', 'Get named in AI answers through the sources engines trust', '/services/geo'],
 ['AEO', 'Make your pages the clearest answer to real health questions', '/services/aeo'],
 ['AI visibility audit', 'See how AI answers describe your health brand', '/services/ai-visibility-audit'],
];

export const H2_COMPLY = 'How we handle healthcare compliance';
export const DAL_COMPLY = 'Nakama Growth treats compliance as a process, not a certificate. We do not hold or claim a HIPAA certification. Instead, we keep patient data out of our work, route every health claim to your reviewer, and disclose who wrote and reviewed each page. Your legal and clinical teams keep final sign off.';

export const COMPLY: readonly {n: string; title: string; body: string}[] = [
 {n: '1', title: 'No PHI', body: 'No patient health information in tracking, prompt logs, briefs or reports.'},
 {n: '2', title: 'Claim rules', body: 'We agree a claim list with you: what can be said, what needs a source, what is off limits.'},
 {n: '3', title: 'Named reviewer', body: 'A clinician or medical reviewer from your side approves each health claim before publishing.'},
 {n: '4', title: 'Reviewer bylines', body: 'Pages show author and reviewer names with a last reviewed date.'},
 {n: '5', title: 'Market rules', body: 'Claim and disclosure checks follow the rules of each market you publish in.'},
];

export const H2_PROMPTS = 'Healthcare prompts we track';
export const DAL_PROMPTS = 'We track the questions your buyers actually type into AI tools. Each prompt is run repeatedly across engines, and results are logged with dates. The examples below show the kind of prompts we start from. They are illustrations, not results or promises of placement.';

export const PROMPTS = [
 '"Best fertility clinic in London for IVF with high success rates"',
 '"Which telehealth apps accept insurance for therapy?"',
 '"Best dermatology clinic in New York for acne scars"',
 '"Top EHR systems for a small multispecialty clinic"',
 '"Is [brand] safe for daily use during pregnancy?"',
 '"Which hospitals in Dubai offer robotic knee replacement near me?"',
] as const;

/** Twin chrome. Illustrative states, not measured results. */
export const PROMPT_STATES = [
 {engine: 'ChatGPT', state: 'Mentioned', hot: false},
 {engine: 'Perplexity', state: 'Cited', hot: false},
 {engine: 'Google AI Overviews', state: 'Recommended', hot: true},
] as const;

export const H2_NINETY = 'Your first 90 days with Nakama Growth';
export const DAL_NINETY = 'The first 90 days run in three phases. Days 1 to 30 set the baseline prompts and audit. Days 31 to 60 build source of truth pages and start claim review. Days 61 to 90 place content on cited sources and report mentions, citations, recommendations and referrals as four separate measures.';

export const PHASES: readonly [string, string, string][] = [
 ['DAYS 1 TO 30', 'Audit', 'Prompt set, engine baseline, source map, claim list agreed'],
 ['DAYS 31 TO 60', 'Implement', 'Source of truth pages, reviewer workflow, first off site placements'],
 ['DAYS 61 TO 90', 'Measure', 'Repeat runs; report mentions / citations / recommendations / referrals separately'],
];

export const MEASURES = ['Mentions', 'Citations', 'Recommendations', 'Referrals'] as const;

export const H2_FIT = 'Is Nakama Growth the right healthcare GEO agency for you?';
export const FIT_YES_H = 'A good fit';
export const FIT_NO_H = 'Not a fit';
export const FIT_YES = [
 'Healthtech and digital health brands with comparison prompts buyers ask AI tools',
 'Clinics, provider groups and hospitals that need accurate service and location answers',
 'Wellness and D2C health brands ready for claim review before publishing',
 'Teams that already invest in content or PR and want AI visibility measured',
] as const;
export const FIT_NO = [
 'Buyers who want a guaranteed ChatGPT mention or patient lead count',
 'Pure PPC or website redesign briefs with no AI answer work',
 'Brands that will not review health claims before they go live',
 'Classic medical SEO encyclopedia builds that skip GEO and AEO',
] as const;

export const H2_FAQ = 'FAQ about hiring a healthcare GEO agency';

export const PRICING_HREF = '/journal/geo-aeo-pricing';

export const FAQ: readonly {q: string; a: string; href?: string; linkLabel?: string}[] = [
 {
  q: 'How much does a healthcare GEO agency engagement cost?',
  a: 'Pricing depends on prompt scope, engines covered and how much claim review your team needs. Book a call for a quote on your category; we do not publish a single flat fee on this page. For how we think about GEO and AEO pricing, see our GEO and AEO pricing guide.',
  href: PRICING_HREF,
  linkLabel: 'our GEO and AEO pricing guide',
 },
 {
  q: 'How long before we see movement in AI answers?',
  a: 'Most teams start with an audit and a 90 day plan. Early work is baseline prompts, source of truth pages and claim review; citation and mention movement usually follows once those foundations are live.',
 },
 {
  q: 'How do you handle HIPAA and privacy?',
  a: 'We treat compliance as a process, not a badge. No PHI in tracking or prompt logs, claim review before public copy ships, and clear ownership of who approves health claims on your side.',
 },
 {
  q: 'Can you guarantee ChatGPT will mention us?',
  a: 'No. No agency can guarantee mentions in ChatGPT or any other AI answer. We measure mentions, citations and recommendations separately and work the sources engines already trust.',
 },
 {
  q: 'How is GEO different from a healthcare SEO firm?',
  a: 'A healthcare SEO firm focuses on rankings and clicks. GEO and AEO focus on whether AI answers name, cite or recommend you on the same buyer questions. If you compared healthcare SEO firms, medical industry SEO services, or the best seo agency for healthcare, classic rankings still matter; this page is about what AI answers say about you.',
 },
 {
  q: 'Which AI engines do you cover?',
  a: 'Typical coverage includes ChatGPT, Perplexity and Google AI Overviews, with Gemini or Claude added when your buyers use them. Scope is set per engagement, not as a fixed public list.',
 },
 {
  q: 'Which markets do you work in?',
  a: 'Nakama Growth can work with healthcare and healthtech brands that publish for buyers in the US, UK and EU, the Middle East, APAC, and India. We match claim and disclosure rules to the markets you publish in.',
 },
 {
  q: 'Is this a fit for clinics and for healthtech?',
  a: 'Yes for both when you have clear buyer prompts and a willingness to review claims. Clinics and provider groups need local and service answers; healthtech needs comparison and category prompts. Pure ad buying or patient volume guarantees are not a fit.',
 },
 {
  q: 'Who are the best GEO agencies for healthcare brands?',
  a: 'There is no single public ranking every health brand should trust. Look for a healthcare GEO agency that maps your buyer prompts, runs claim review before publish, and measures mentions, citations and recommendations separately. Nakama Growth does that work for health brands that publish across the US, UK and EU, the Middle East, APAC, and India.',
 },
];

export const H2_FIN = 'See how AI answers describe your health brand';
export const FIN_LEAD = 'Book a call and we will walk through your prompts, engines and claim review needs.';

export const RELATED_LIVE = [
 {href: '/services/geo', label: 'GEO services'},
 {href: '/services/aeo', label: 'AEO services'},
 {href: '/services/ai-visibility-audit', label: 'AI visibility audit'},
 {href: PRICING_HREF, label: 'GEO and AEO pricing guide'},
] as const;
