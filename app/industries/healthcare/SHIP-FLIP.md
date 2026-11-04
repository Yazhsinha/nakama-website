# Ship flip · /industries/healthcare

Preview only until Yash says ship. Do not merge this queue in the preview PR.

The page stays `noindex, nofollow`. It is not in `corePages`, `sitemap.ts`, `llms.txt`, or the nav.

## When Yash says ship

1. Remove the hardcoded `robots: {index: false, follow: false}` in `app/industries/healthcare/page.tsx`. A Vercel preview can stay noindex from deployment protection. Production should be indexable.
2. Add `/industries/healthcare` to `corePages` in `lib/feed.ts` so `sitemap.xml` includes it.
3. Add a crawl path from a page that already exists. A footer Industries link, or a link from `/services` or home, is enough. `/industries` is 404 on production. Do not point the only crawl path at a hub that does not exist.

## Later

- P2: `llms.txt` entry. Width, height, and lazy loading on the five client logos.
- P3: Title length is fine at 71 characters. Add a page Open Graph image. `areaServed` already lists the United States, the United Kingdom, the European Union, the Middle East, APAC, and India.
- `og:locale` stays `en_IN` from the site metadata helper. Dodai decides if a global page should use another locale. Do not change it in this preview.

`/services/ai-visibility-audit` is live. Keep that secondary CTA as a real link.
