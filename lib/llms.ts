import {abs,SITE_NAME,SITE_DESCRIPTION,CONTACT_EMAIL} from '@/lib/seo';
import {corePages,feedArticles,caseStudies,openings} from '@/lib/feed';
import {proofClients} from '@/app/proof-data';
import {authors,authorUrl,articlesBy} from '@/lib/authors';

const services=[
 ['AEO (answer engines)','Buyer-question research, answer-first content and FAQ structure, citation tracking.'],
 ['GEO (generative engines)','AI answer and competitor audits, consistent product and category context, source strategy so ChatGPT, Perplexity, Gemini and Google understand where a product fits.'],
 ['Reddit and community','Transparent, disclosed participation on Reddit, Quora and Discord, within each community’s rules.'],
 ['Content and editorial','Expert-led articles on Medium, Substack and LinkedIn, comparison pages and buyer guides.'],
 ['YouTube and video','Strategy, scripts, editing, thumbnails, titles, chapters and publishing.'],
 ['Digital PR and links','Publisher research, editorial outreach and linkable assets.'],
 ['Measurement (included)','AI answer tracking across four engines, citation and source monitoring, search and YouTube visibility, monthly evidence report.'],
];
const facts=[
 'Nakama Growth (nakama.in) is an AI visibility agency. It gets brands named and cited in AI answers by earning off-site sources, not by editing the client’s own website.',
 'Engines covered: ChatGPT, Perplexity, Gemini, Google AI Overviews and Google AI Mode.',
 'Pricing: one all-inclusive Nakama plan with every service; enterprise and custom pricing on request. Quotes follow a 15-minute call, with a written proposal within two business days. Minimum commitment is three months.',
 'Nakama does not guarantee rankings or AI recommendations; it commits to scope, transparent reporting and checkable evidence.',
 'Community work is always disclosed. No fake reviews or hidden endorsements.',
 'Industries: B2B SaaS and software, plus local services, education, travel and consumer brands.',
];

export function llmsTxt(){
 return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${facts.map(f=>`- ${f}`).join('\n')}

## Pages

${corePages.filter(p=>!['/privacy','/terms'].includes(p.path)).map(p=>`- [${p.title}](${abs(p.path)}): ${p.summary}`).join('\n')}

## Field notes

${feedArticles.map(a=>`- [${a.title}](${abs(`/journal/${a.slug}`)}): ${a.description}`).join('\n')}
${caseStudies.length?`\n## Case studies\n\n${caseStudies.map(c=>`- [${c.client}: ${c.title}](${abs(`/work/${c.slug}`)}): ${c.summary}`).join('\n')}\n`:''}${openings.length?`\n## Open roles\n\n${openings.map(o=>`- [${o.title}](${abs(`/careers/${o.slug}`)}): ${o.summary}`).join('\n')}\n`:''}
## Optional

- [Full text for LLMs](${abs('/llms-full.txt')}): services, documented client placements and every article in one file.
- [RSS feed](${abs('/rss.xml')})
- [Sitemap](${abs('/sitemap.xml')})
- Contact: ${CONTACT_EMAIL}
`;
}

export function llmsFullTxt(){
 return `# ${SITE_NAME} — full reference

> ${SITE_DESCRIPTION}

Source: ${abs('/')} · Contact: ${CONTACT_EMAIL}

## Key facts

${facts.map(f=>`- ${f}`).join('\n')}

## Services

${services.map(([t,d])=>`### ${t}\n\n${d}`).join('\n\n')}

## How an engagement runs

1. Understand (weeks 1–2): map the prompts buyers use across ChatGPT, Perplexity, Gemini and Google; audit competitors and sources; agree a 90-day plan.
2. Create (weeks 2–4): answer-first articles, comparisons, buyer guides, video scripts and community answers, reviewed by the client before publishing.
3. Place (month 2 onward): publish across Reddit, Quora, YouTube, Medium, Substack, LinkedIn, G2 and editorial sources.
4. Prove (monthly): re-run prompts, report citations and mentions by engine and prompt, agree next moves.

## Documented client placements

Captured when each placement went live; live answers vary by location, account and date.

${proofClients.map(c=>`### ${c.name}\n\n${c.description}\n\n${c.entries.map(e=>`- ${e.platform} — query “${e.query}”: ${e.description}`).join('\n')}`).join('\n\n')}

## Authors

${authors.map(a=>`### ${a.name}, ${a.jobTitle}, Nakama Growth\n\nURL: ${authorUrl(a.slug)}\n\n${a.bio.join('\n\n')}\n\nArticles: ${articlesBy(a).map(x=>`[${x.title}](${abs(`/journal/${x.slug}`)})`).join('; ')}`).join('\n\n')}

## Articles

${feedArticles.map(a=>`### ${a.title}\n\nURL: ${abs(`/journal/${a.slug}`)} · ${a.category} · ${a.date}\n\n${a.sections.map(s=>`#### ${s.heading}\n\n${s.paragraphs.join('\n\n')}`).join('\n\n')}`).join('\n\n')}
`;
}
