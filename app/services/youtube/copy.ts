/**
 * /services/youtube strings. Hibiku LOCKED v1.1.2.
 * Do not paraphrase. The edit bay is Soften twin v7.7.1 chrome, not POSTER.
 * POSTER stays locked and is not rendered.
 */

export const SLUG = '/services/youtube';
export const TITLE = 'YouTube Marketing Agency for SaaS, Tech & AI - Nakama Growth';
export const META = 'Nakama Growth runs YouTube end to end for SaaS, tech and AI brands: script, shoot, edit, publish. Long-form, chaptered videos built to be easy to cite.';
export const EYEBROW = 'YouTube marketing agency';
export const H1 = 'YouTube, done end to end, for SaaS, tech and AI teams.';
export const DAL = 'Nakama Growth is a YouTube marketing agency for SaaS, tech and AI. We run YouTube end to end: long-form, chaptered videos built to be easy to cite.';
export const CTA_LABEL = 'Get a YouTube quote';
export const CTA_HREF = '/pricing#quote';
export const BOOK_LABEL = 'Book a call';
export const BOOK_HREF = '#book-a-call';
export const WL_LABEL = 'White-label →';
export const WL_HREF = '/white-label';
export const ROLE = 'YouTube marketing';

/** Static strip only. No hrefs, no role labels, no lead. StarAgile is out. */
export const PROOF_LBL = 'Teams we make video with';
export const PROOF = [
 {name: 'Synup', src: '/services/youtube/logos/synup.svg', h: 26},
 {name: 'Inventive AI', src: '/services/youtube/logos/inventive.png', h: 26},
 {name: 'HubEngage', src: '/services/youtube/logos/hubengage.png', h: 24},
 {name: 'TOW', src: '/services/youtube/logos/tow.png', h: 24},
 {name: 'Win More RFP', src: '/services/youtube/logos/winmore-rfp.png', h: 24},
] as const;

export const WHY_H2 = 'Why does YouTube matter for AI search now?';
export const WHY_LEAD = 'Google AI Overviews, AI Mode and Perplexity often pull long-form YouTube videos into answers for how-to, demo and comparison questions. ChatGPT rarely does. We package videos for the engines that already cite video, and we measure each engine on its own.';

export const ENGINES = [
 {name: 'Google AI Overviews', tier: 'High', value: 0.92, note: 'Regularly cites YouTube videos.'},
 {name: 'Google AI Mode', tier: 'Medium to high', value: 0.66, note: 'Cites YouTube in a different mix. We track it separately.'},
 {name: 'Perplexity', tier: 'High', value: 0.86, note: 'Often cites YouTube for explainers and recommendations.'},
 {name: 'ChatGPT', tier: 'Low', value: 0.14, note: 'Rarely cites YouTube. We do not sell it as a ChatGPT shortcut.'},
] as const;

export const PIPE_H2 = 'YouTube video production services, end to end';
export const PIPE_LEAD = 'One team runs every step. You approve, we ship.';
export const PIPE = [
 {name: 'Script', body: 'Answer-first outlines from real buyer questions.', points: ['Prompt and question map', 'Answer in the first 30 seconds', 'Chapter plan before the shoot']},
 {name: 'Shoot', body: 'Remote or on location, with or without your team on camera.', points: ['Remote kit or crew', 'Screen and product capture', 'Founder, SME or host formats']},
 {name: 'Edit', body: 'Tight, chaptered long-form cuts with clean captions.', points: ['Chapter-led structure', 'Human-checked captions', 'Thumbnail and title options']},
 {name: 'Publish', body: 'YouTube SEO services built into every upload.', points: ['Titles, descriptions, chapters', 'Transcript and captions file', 'Playlists and end screens']},
] as const;

export const ANAT_H2 = 'Anatomy of a citable video';
export const ANAT_LEAD = 'Citation-ready packaging is mostly structure. Every video ships with chapters from 00:00, a spoken answer in the opening minutes, human-checked captions and a clear description summary, so Google AI Overviews and Perplexity can extract and quote it when the prompt fits. No engine guarantees.';
export const ANAT_TITLE = 'How [Category] teams evaluate [Tool]';
export const CHAPTERS = [
 ['00:00', 'The short answer'],
 ['00:42', 'What to look for'],
 ['03:10', 'Live product walkthrough'],
 ['07:25', 'Pricing questions to ask'],
 ['09:50', 'Who it is not for'],
] as const;
export const CALLOUTS = [
 ['Chapters from 00:00', 'Timestamps a search engine can link to directly.'],
 ['Spoken answer early', 'The answer is said out loud in the first chapter.'],
 ['Captions checked by a person', 'Clean transcript, not raw auto-captions alone.'],
 ['Description summary', 'A plain answer block plus chapter list in the description.'],
] as const;

export const CAD_H2 = 'How long does each video take?';
export const CAD_BIG = '~3 days';
export const CAD_SUB = 'Typical turnaround per video once the script is approved. That is our working cadence, not a promise about rankings or citations.';
export const CAD_STEPS = ['Day 1: script lock and shoot', 'Day 2: edit and captions', 'Day 3: review, package, publish'] as const;

export const FIT_H2 = 'How YouTube fits with the rest of Nakama Growth';
export const FIT_LEAD = 'This service owns YouTube end to end. GEO runs the wider citation system across AI engines.';
export const FIT = [
 {name: 'GEO', body: 'The citation system across AI engines.', href: '/services/geo'},
 {name: 'AEO', body: 'Answer-ready pages on your own site.', href: '/services/aeo'},
 {name: 'Reddit', body: 'Real participation in the threads AI reads.', href: '/services/reddit'},
 {name: 'Content', body: 'Owned articles and listicles.', href: '/services/content'},
] as const;

export const START_H2 = 'How we start';
export const START = [
 'Intro call and channel review',
 'Buyer prompt map for your category',
 'First script and fixed prompt set',
 'First video live, then measure per engine',
] as const;

export const FAQ_H2 = 'YouTube marketing agency FAQ';
export const FAQ = [
 ['What drives the cost of a YouTube engagement?', 'Videos per month, shoot format (remote or on location), on-camera talent, and how much product capture each video needs. We quote after a short call.'],
 ['Who owns the YouTube channel?', 'You do. Channel, videos, footage and transcripts stay yours. We work as managers on your account.'],
 ['Do we have to be on camera, or can this be remote?', 'Either. Founders and SMEs can record remotely with our kit, or we use a host and screen-led formats so nobody has to be on camera.'],
 ['How is this different from hiring a GEO agency?', 'GEO is the citation system across AI engines. This service makes and publishes the YouTube videos. Many teams run both, and our GEO page covers the system.'],
 ['Is this YouTube SEO or video production?', 'Both. We produce the video and handle YouTube SEO services at publish: titles, descriptions, chapters, captions and playlists.'],
 ['How long until we see results?', 'Each video typically ships in about 3 days once the script is approved. That is production turnaround. Search and AI visibility take longer and are never guaranteed.'],
 ['Will YouTube get us cited in ChatGPT?', 'Rarely. ChatGPT seldom cites YouTube today. Google AI Overviews, AI Mode and Perplexity cite YouTube more often. We measure per engine on a fixed prompt set and never promise a placement.'],
] as const;

export const CTA_H2 = 'Ready to put your product on YouTube?';
export const CTA_SUB = 'Tell us what you sell. We will map your first five videos on a call.';

export const POSTER_KICK = 'Buyer guide · Long-form';
export const POSTER = [
 {title: 'Why [category] buyers get this choice wrong', chapter: 'Ch 1 · Hook', caption: 'Most teams compare features first. Start somewhere else.'},
 {title: 'How to choose a [category] tool', chapter: 'Ch 2 · The short answer', caption: 'The short answer: start with the questions your buyers already ask.'},
 {title: 'Live walkthrough: [Tool] in 4 minutes', chapter: 'Ch 3 · Walkthrough', caption: 'Here is the screen your buyer sees on day one.'},
] as const;

export const SAMPLES_H2 = 'See the work';
export const SAMPLES_LEAD = 'A few long-form videos Nakama Growth has made, each built around a question buyers ask AI tools.';

/** Channel tag is the text before " · " in the locked cap. Card 2 is Win More RFP on this band only. */
export const SAMPLES = [
 {id: 'QgVZs0fcTd8', title: 'What Is the Best Local SEO Tool for Multi-Location Brands in 2026?', lead: 'A chaptered buyer guide for multi-location brands comparing local SEO tools.', channel: 'Local SEO Checklist'},
 {id: '_qmU2pb-0sc', title: 'How to Use Claude for RFP Responses Without One Giant Prompt (2026)', lead: 'A practical walkthrough of a step-by-step RFP workflow with Claude.', channel: 'Win More RFP'},
 {id: 'elKnpdCfQEo', title: 'What Is AI RFP Software? How It Works and How to Choose (2026)', lead: 'An answer-first explainer on what AI RFP software does and how to pick one.', channel: 'Inventive AI'},
] as const;
