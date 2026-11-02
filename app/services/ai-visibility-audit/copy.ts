/**
 * /services/ai-visibility-audit. Hibiku LOCKED v1, with Gohan V2.0 quiet-HOLD edits.
 * Visual source of truth: ai-vis-audit-visual-desktop.html (V2.0).
 * PREVIEW true: robots noindex,follow. This URL stays off corePages, the sitemap and llms.
 */

export const PREVIEW = true;

export const SLUG = '/services/ai-visibility-audit';
export const TITLE = 'AI Visibility Audit for SaaS - Nakama Growth';
export const META = 'An AI visibility audit for SaaS. Nakama Growth runs your buyer prompts across AI engines and shows where you are mentioned, recommended, cited, or missing.';
export const KW_PRIMARY = 'ai visibility audit';
export const ROLE = 'AI Visibility Audit';
export const H1 = 'AI Visibility Audit for SaaS';
export const Q_HREF = '/pricing#quote';

export const EYEBROW = 'AI visibility audit';
export const LEAD = 'Nakama Growth\'s AI visibility audit runs your real buyer prompts through AI engines, repeats each run, and records where your brand is mentioned, recommended or cited next to named rivals. You get dated evidence, the sources engines trust and a fix list. Start with a free sample or book the full audit.';
export const BOOK = 'Book a call';
export const FREE_CTA = 'Get a free sample';
export const SEE_PRICING = 'See pricing';
export const ENG_LINE = 'Major AI answer engines, each reported separately.';

export const DEF_H2 = 'What is an AI visibility audit?';
export const DEF_P = 'An AI visibility audit is a repeated test of how AI engines answer the questions your buyers ask. For each prompt, it records whether your brand is mentioned, recommended or cited as a source, which competitors appear instead, which sites the engines pull from, and what they get wrong about you.';

export const PAIN_H2 = 'Signs your SaaS brand is missing from AI answers';
export const PAINS = [
 'A rival gets named in AI answers and you do not',
 'AI engines get your pricing or features wrong',
 'Engines cite review and list sites you are not on',
 'AI crawlers are blocked or your key pages need JavaScript to load',
 'You have no prompt baseline to re-test against',
 'You have a tool export but no plan for what to fix',
] as const;

export const METRICS_H2 = 'What the audit checks';
export const METRICS_LEAD = 'Mentioned, recommended and cited are counted separately. Never merged. No percentages, scores or grades.';
export const MID = 'We show where you stand today, what is likely driving it, and what to fix.';
/** Example run marks for the first three metric cards. 1 = lit. */
export const VIZ = [
 ['1101101', '1111011'],
 ['0100101', '1101001'],
 ['0100010', '0001000'],
] as const;
export const ANNS = [
 ['t', 'Mentioned, recommended and cited are counted separately. Never merged.', 'Engines reported separately. No blended cross-engine number.'],
 ['s', 'Citation source map', 'Which third-party sites the engines pull from for your category.'],
 ['f', 'Walkthrough + roadmap, re-test date', 'A call to walk the findings, a ranked fix list and a date to run it again.'],
] as const;
export const METRICS = [
 ['Mentioned', 'Whether your brand is named anywhere in the answer.', 'Find the buyer prompts where you are absent and start there.'],
 ['Recommended', 'Whether the engine suggests you as an option to choose.', 'Tighten the pages and proof that explain who you are best for.'],
 ['Cited', 'Whether one of your pages is linked as a source.', 'Make the cited-worthy pages clear, current and easy to quote.'],
 ['Competitor share', 'Which rivals show up on the same prompts, and how often across runs.', 'Learn which competitor positions you need to answer.'],
 ['Citation source map', 'Which third-party sites the engines pull from for your category.', 'Pick the review, list and media sites worth earning a place on.'],
 ['Accuracy & crawler access', 'What engines get wrong about you, and whether their bots can read your site.', 'Correct the facts at the source and unblock the pages that matter.'],
] as const;

export const REPORT_H2 = 'What the report looks like';
export const REPORT_TAG = 'Sample, redacted';
export const REPORT_EXAMPLE = 'Example data · 1 to 3 prompts × 2 engines × 3 runs';
export const REPORT_RUNS = [
 ['Engine A', '14–16 Oct', '2', '1', '1'],
 ['Engine B', '14–16 Oct', '3', '2', '0'],
] as const;
export const REPORT_NOTE = 'Engines reported separately. No blended cross-engine number.';
export const SOURCES = [
 ['Review sites', true],
 ['Community threads', false],
 ['Video', false],
 ['Directories', true],
 ['Listicles', false],
] as const;
export const FIXES = [
 ['Owned page', 'Answer the pricing question in the first lines of'],
 ['Third-party target', 'Earn a listing on'],
 ['Accuracy correction', 'Fix the outdated plan name engines repeat'],
] as const;

export const CMP_H2 = 'Free sample vs full audit';
export const CMP = [
 ['Prompts', '1 to 3 prompts (yours + up to 2 we write)', 'Agreed buyer prompt set'],
 ['Engines', '2 engines, reported separately', 'Major AI answer engines, each reported separately'],
 ['Competitors', 'Up to 3 you name', 'Named rivals + new names that recur'],
 ['Runs', '3 runs each, per engine, dated', 'At least 7 dated runs per prompt per engine'],
 ['Source map', 'Top gaps only', 'Full citation source map'],
 ['Average position', '—', 'Yes, per engine'],
 ['Accuracy check', '—', 'Yes, per engine'],
 ['Roadmap', '—', 'Prioritised fixes + re-test date'],
 ['Walkthrough call', '—', 'Yes'],
 ['Delivery', 'Emailed, not instant', 'Report + call'],
] as const;

export const SAMPLE_EYE = 'Free sample';
export const SAMPLE_H2 = 'Get a free AI visibility sample';
export const SAMPLE_BODY = 'Emailed, not instant. A person runs your prompts and checks each answer before we send it. No score, no average position.';
export const SEND = 'Send my free sample';
export const THANKS_K = 'After you send it';
export const THANKS = 'Thanks. We will run your prompts and email your sample once every run is checked.';
export const THANKS_NEXT = 'Want the full audit?';

export const PROCESS_H2 = 'How the audit runs';
export const STEPS = [
 ['Agree prompts and rivals', 'We agree the buyer prompts and named competitors with you before any runs.'],
 ['Run and sample', 'Each prompt runs at least 7 times per engine, with every run dated.'],
 ['Diagnose', 'We map mentions, recommendations, citations, sources and errors, engine by engine.'],
 ['Walkthrough + roadmap, re-test date', 'A call to walk the findings, a ranked fix list and a date to run it again.'],
] as const;

export const FIT_YES = 'Good fit';
export const FIT_YES_ITEMS = [
 'SaaS, tech and AI marketing leads who need to see how AI engines describe them',
 'Teams with buyer prompts and named competitors they already track',
 'Teams ready to act on fixes, in-house or with Nakama Growth',
] as const;
export const FIT_NO = 'Not a fit';
export const FIT_NO_ITEMS = [
 'Anyone who wants a guaranteed rank or an instant score',
 'Buyers looking for a single blended visibility number',
 'Local, hotel and ecommerce stores outside SaaS',
] as const;

export const PRICE_H2 = 'AI visibility audit pricing';
export const PRICE_NAME = 'AI Visibility Audit';
export const PRICE_ON = 'Pricing on a call';
export const PRICE_ITEMS = [
 'Per-engine dated runs',
 'Competitor share + citation source map',
 'Accuracy + crawler access check',
 'Average position per engine',
 'Prioritised roadmap + walkthrough call',
] as const;
export const RETAINER_H3 = 'Audit plus fixes';
export const RETAINER_P = 'Want us to fix what the audit finds? We run GEO and AEO work after the audit and re-test the same prompts.';
export const QUOTE = 'Get a quote';

export const FAQ_H2 = 'AI visibility audit questions';
export const FAQ = [
 ['Do you guarantee we get cited or recommended?', 'No. Nobody controls what AI engines say. We show where you stand today, what is likely driving it, and what to fix. Then we re-test the same prompts so you can see what changed.'],
 ['Why do AI answers vary, and how do you repeat runs?', 'AI engines can give different answers to the same prompt from one run to the next. In the paid audit we run each prompt at least 7 times per engine and date every run, so you see a pattern instead of one lucky or unlucky answer.'],
 ['What is the difference between a mention and a citation?', 'A mention is your brand named in the answer. A recommendation is the engine suggesting you as an option. A citation is your page linked as a source. We count all three separately because one can happen without the others.'],
 ['How is this different from a free AI visibility grader?', 'Most graders run a prompt once and return a single score. We repeat runs, report each engine on its own, show the exact answers and sources, and hand you a ranked fix list with a walkthrough call.'],
 ['What do you need from us?', 'Your site, the buyer prompts you care about, and the competitors you want to compare against. If you are unsure about prompts, we draft a set with you before any runs.'],
 ['What happens after the audit?', 'You get the report, a walkthrough call and a prioritized roadmap with a re-test date. You can run the fixes yourself or ask Nakama Growth to handle the GEO and AEO work.'],
 ['Which engines do you check?', 'The paid audit covers the engines agreed for your audit, each reported separately. The free sample uses 2 engines.'],
 ['Is the free sample really free?', 'Yes. You get 1 to 3 prompts across 2 engines, with 3 runs each per engine, emailed to you. It is a sample, not a full measurement, so it has no score and no average position.'],
 ['How long does the audit take?', 'It depends on how many prompts and engines are in scope. We confirm the timeline when we agree the prompt set.'],
 ['How does pricing work?', 'Pricing depends on the number of prompts, engines and competitors in scope. Book a call and we will quote the audit, or the audit plus fixes, for your site.'],
] as const;

export const CTA_H2 = 'See how AI engines answer your buyers';
export const CTA_P = 'Book the full audit, or start with a free sample emailed to you.';
export const RELATED = [
 ['GEO services', '/services/geo'],
 ['AEO services', '/services/aeo'],
 ['GEO audit guide', '/journal/geo-audit'],
] as const;
