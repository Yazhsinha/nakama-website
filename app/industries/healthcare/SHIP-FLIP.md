# Ship flip · /industries/healthcare

Yash ship GO. These items are in the go-live commit:

1. Page-level `noindex` override removed. The route inherits the site `index, follow` robots.
2. `/industries/healthcare` is in `corePages` (`lib/feed.ts`), so it is in `sitemap.xml` and `llms.txt`.
3. Footer Company column links Healthcare to `/industries/healthcare`. There is no `/industries` hub link.

Still later, not in this ship:

- P3: a page-specific Open Graph image. Title length is fine. `areaServed` already lists the United States, the United Kingdom, the European Union, the Middle East, APAC, and India. `og:locale` stays the sitewide `en_IN`.
