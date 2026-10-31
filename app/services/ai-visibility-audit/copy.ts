/**
 * /services/ai-visibility-audit strings. Wireframe V1.0.3 (HTML is source of truth).
 * Hibiku slots stay visible placeholders. HOLD chips stay visible.
 * PREVIEW true: robots noindex,follow. Do not add this URL to corePages or the sitemap.
 */

export const PREVIEW = true;

export const SLUG = '/services/ai-visibility-audit';
export const TITLE = 'AI Visibility Audit for SaaS | Nakama Growth';
export const META = 'AI visibility audit for SaaS. Nakama Growth checks mentions, recommendations and citations per engine, with a free sample and a paid audit.';
export const KW_PRIMARY = 'ai visibility audit';
export const ROLE = 'AI Visibility Audit';
export const H1 = 'AI Visibility Audit for SaaS';
export const Q_HREF = '/pricing#quote';

export const EYEBROW = '[Eyebrow · Hibiku]';
export const HERO_LEAD = '[Answer-first lead 40–60w · Hibiku: what Nakama Growth\'s audit diagnoses across AI engines, who it is for, and the two ways to start. Placeholder length runs to roughly this many words so hierarchy reads true.]';
export const BOOK = '[Book a call · Hibiku]';
export const FREE_CTA = '[Get a free sample · Hibiku]';
export const SEE_PRICING = 'See pricing';
export const SEND = '[Send my free sample · Hibiku]';
export const QUOTE = '[Get a quote] → /pricing#quote';

export const ENGINE_HOLD = '[engine count HOLD · Inyou]';
export const ENGINES = ['ChatGPT', 'Google AI Overviews & AI Mode', 'Gemini', 'Claude', 'Perplexity', 'Copilot'] as const;
export const ENGINE_LINE = ENGINES.join(' · ');

export const SEO_TITLE = '[Title · Hibiku] … | Nakama Growth';
export const SEO_META = '[Meta 150–160 ch · Hibiku]';
export const SEO_UPDATED = '[visible date slot]';

export const DEF_H2 = 'What is an AI visibility audit?';
export const DEF_P = '[Definition 40–60w · Hibiku · answer-first, citation-ready. A plain card, no art. Placeholder runs to realistic length so the passage reads as one quotable block.]';

export const PAIN_H2 = '[Pain H2 · Hibiku]';
export const PAINS = [
 ['[Pain 1 · Hibiku]', 'Rival named in AI answers, you are not'],
 ['[Pain 2 · Hibiku]', 'Wrong facts about your pricing or features'],
 ['[Pain 3 · Hibiku]', 'Cited sources you are missing from'],
 ['[Pain 4 · Hibiku]', 'Crawlers blocked or JS-only pages'],
 ['[Pain 5 · Hibiku]', 'No prompt baseline to re-test against'],
 ['[Pain 6 · Hibiku]', 'Tool export, no roadmap'],
] as const;
export const STAT_HOLD = 'STAT HOLD · source + date';

export const METRICS_H2 = '[What the audit checks · H2 · Hibiku]';
export const METRICS_HOLD = 'final six · Inyou';
export const METRICS_LEAD = 'No percentages, scores or grades.';
export const METRICS = [
 ['Mentioned', 'Is the brand named in the answer [Hibiku]'],
 ['Recommended', 'Is it suggested as an option [Hibiku]'],
 ['Cited', 'Is your page linked as a source [Hibiku]'],
 ['Competitor share', 'Which rivals appear on the same prompts [Hibiku]'],
 ['Citation source map', 'Which third-party domains engines pull from [Hibiku]'],
 ['Accuracy & crawler access', 'What engines get wrong; can their bots read you [Hibiku]'],
] as const;
export const METRIC_DO = '[one line · Hibiku]';

export const REPORT_H2 = '[What the report looks like · H2 · Hibiku]';
export const REPORT_TAG = 'Sample, redacted';
export const REPORT_EXAMPLE = 'Example data · 1–3 prompts × 2 engines × 3 runs';
export const REPORT_RUNS = [
 ['Engine A', '2 of 3 runs', '1 of 3 runs', '1 of 3 runs'],
 ['Engine B', '3 of 3 runs', '2 of 3 runs', '0 of 3 runs'],
] as const;
export const REPORT_NOTE = 'Engines reported separately. No blended cross-engine number.';
export const REPORT_QUOTE = 'Brand redacted · engine + date shown';
export const SOURCES = ['Review sites', 'Community threads', 'Video', 'Directories', 'Listicles'] as const;
export const FIXES = ['[Fix 1 · owned page]', '[Fix 2 · third-party target]', '[Fix 3 · accuracy correction]'] as const;

export const CMP_H2 = '[Free sample vs full audit · H2 · Hibiku]';
export const CMP_PAID_HEAD = 'Paid AI Visibility Audit';

export type CmpRow = {
 label: string;
 free: string;
 paid: string;
 freeHold?: string;
 paidHold?: string;
};

export const CMP: readonly CmpRow[] = [
 {label: 'Prompts', free: '1 to 3 prompts (yours + up to 2 we write)', paid: 'Agreed buyer prompt set', paidHold: 'SCOPE HOLD · Yash'},
 {label: 'Engines', free: '2 engines, reported separately', freeHold: 'engine names HOLD · ChatGPT not promised', paid: `Each engine reported separately: ${ENGINE_LINE}`, paidHold: ENGINE_HOLD},
 {label: 'Competitors', free: 'Up to 3 you name', paid: 'Named rivals + new names that recur', paidHold: 'SCOPE HOLD · Yash'},
 {label: 'Runs', free: '3 runs each, per engine, dated', paid: 'At least 7 dated runs per prompt per engine', paidHold: 'SCOPE HOLD · Yash'},
 {label: 'Source map', free: 'Top gaps only', paid: 'Full citation source map'},
 {label: 'Average position', free: '—', paid: 'Yes, per engine'},
 {label: 'Accuracy check', free: '—', paid: 'Yes, per engine'},
 {label: 'Roadmap', free: '—', paid: 'Prioritised fixes + re-test date'},
 {label: 'Walkthrough call', free: '—', paid: 'Yes'},
 {label: 'Delivery', free: 'Emailed, not instant', freeHold: 'SLA HOLD · ops', paid: 'Report + call', paidHold: 'SLA HOLD · ops'},
];

export const SAMPLE_H2 = '[Free sample H2 · Hibiku]';
export const SAMPLE_SCOPE = 'Scope: 1 to 3 prompts × 2 engines × 3 runs each, per engine. No score, no %.';
export const SAMPLE_CHATGPT_HOLD = 'ChatGPT HOLD';
export const SAMPLE_EMAIL = '[Emailed, not instant · Hibiku]';
export const SAMPLE_SLA = 'SLA HOLD';
export const THANKS_LABEL = 'Thank-you state (inset)';
export const THANKS_LINE = '[Thanks line · Hibiku]';

export const PROCESS_H2 = '[How the audit runs · H2 · Hibiku]';
export const STEPS = [
 'Agree prompts and rivals',
 'Run and sample',
 'Diagnose',
 'Walkthrough + roadmap, re-test date',
] as const;
export const STEP_LINE = '[one line · Hibiku]';
export const SLA_OPS = 'SLA HOLD · ops';

export const FIT_YES_H3 = 'Good fit';
export const FIT_YES = [
 '[SaaS / tech / AI marketing lead · Hibiku]',
 '[line 2 · Hibiku]',
 '[line 3 · Hibiku]',
] as const;
export const FIT_NO_H3 = 'Not a fit';
export const FIT_NO = [
 '[wants a guaranteed rank or instant score · Hibiku]',
 '[line 2 · Hibiku]',
 '[line 3 · Hibiku]',
] as const;

export const PRICE_H2 = '[Pricing H2 · Hibiku]';
export const PRICE_HOLD = '[PRICE HOLD · Yash]';
export const PRICE_NAME = 'AI Visibility Audit';
export const PRICE_ITEMS = [
 {text: 'Per-engine dated runs', hold: 'SCOPE HOLD'},
 {text: 'Competitor share + citation source map'},
 {text: 'Accuracy + crawler access check'},
 {text: 'Average position per engine'},
 {text: 'Prioritised roadmap + walkthrough call'},
] as const;
export const RETAINER_H3 = 'Audit plus fixes';
export const RETAINER_P = '[Retainer line · Hibiku] GEO / AEO work after the audit.';

export const CASE_HOLD = '[CASE HOLD · needs written client approval]';
export const PROOF_HOLD = '[PROOF HOLD · real logos pending Yash]';

export const FAQ_H2 = '[AI visibility audit questions · Hibiku]';
export const FAQ_LEAD_BEFORE = 'FAQPage-ready. 10 slots. Engine answers use ';
export const FAQ = [
 '[FAQ Q1 · Hibiku] Do you guarantee we get cited or recommended? [no guarantee]',
 '[FAQ Q2 · Hibiku] Why do AI answers vary, and how do you repeat runs?',
 '[FAQ Q3 · Hibiku] What is the difference between a mention and a citation?',
 '[FAQ Q4 · Hibiku] How is this different from a free AI visibility grader?',
 '[FAQ Q5 · Hibiku] What do you need from us?',
 '[FAQ Q6 · Hibiku] What happens after the audit?',
 `[FAQ Q7 · Hibiku] Which engines do you check? [paid: ${ENGINE_LINE} · ${ENGINE_HOLD}; free: 2 engines, names HOLD]`,
 '[FAQ Q8 · Hibiku] Is the free sample really free? [1–3 prompts × 2 engines × 3 runs · emailed]',
 '[FAQ Q9 · Hibiku] How long does the audit take?',
 '[FAQ Q10 · Hibiku] How does pricing work?',
] as const;

export const CTA_H2 = '[Final CTA H2 · Hibiku]';
export const CTA_LINE = '[1 line · Hibiku]';
export const RELATED = [
 ['/services/geo', '/services/geo'],
 ['/services/aeo', '/services/aeo'],
 ['/journal/geo-audit', '/journal/geo-audit'],
] as const;
