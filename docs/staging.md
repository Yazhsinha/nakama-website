# Nakama testing preview

The permanent `staging` branch is the testing copy of this website. Push changes there to update its Vercel branch preview. Keep `main` as the production branch for nakama.in.

Vercel Authentication is enabled for all preview deployments in the Nakama team. Only authorized team members and explicitly granted viewers may open them. Do not create public share/bypass links for staging.

Preview responses carry `X-Robots-Tag: noindex, nofollow, noarchive`. Admin API mutations are disabled in previews because the existing CMS publishes into the production repository branch. Make testing edits through Git on `staging` instead. External booking and email destinations remain real; do not submit test bookings to the live calendar.

Workflow:

1. Bring `staging` up to date with `main`, preserving any unmerged test work.
2. Commit experiments to `staging` and review its stable Vercel branch URL.
3. Merge reviewed changes into `main` only when ready to release. A staging push alone never updates nakama.in.
4. Keep the staging branch and its Vercel project connection in place so its preview address remains stable.

Tool marks in `public/toolkit` are sourced from the brands' websites, Simple Icons, SVGL and LobeHub's icon library. The Grok Bot mark is extracted from its official product page; Superwhisper, Craft, Screaming Frog and Looker Studio use their official app/site icons. No runtime third-party logo requests are required.
