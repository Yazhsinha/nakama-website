import Image from 'next/image';
import styles from './Toolkit.module.css';

type Tool = { name: string; asset: string; url: string; original?: boolean };
const groups: { name: string; tools: Tool[] }[] = [
  { name: 'AI assistants & research', tools: [
    { name: 'ChatGPT', asset: 'chatgpt.svg', url: 'https://chatgpt.com' },
    { name: 'Claude', asset: 'claude.svg', url: 'https://claude.ai' },
    { name: 'Gemini', asset: 'gemini.svg', url: 'https://gemini.google.com', original: true },
    { name: 'Perplexity', asset: 'perplexity.svg', url: 'https://www.perplexity.ai' },
    { name: 'Grok', asset: 'grok.svg', url: 'https://grok.com' },
  ] },
  { name: 'AI coding & agents', tools: [
    { name: 'Cursor', asset: 'cursor.svg', url: 'https://cursor.com' },
    { name: 'Codex', asset: 'codex.svg', url: 'https://openai.com/codex/' },
    { name: 'Claude Code', asset: 'claude-code.svg', url: 'https://claude.com/product/claude-code' },
    { name: 'GitHub Copilot', asset: 'copilot.svg', url: 'https://github.com/features/copilot' },
    { name: 'Grok Bot', asset: 'grok-bot.svg', url: 'https://x.ai/bot', original: true },
  ] },
  { name: 'SEO & competitive research', tools: [
    { name: 'Semrush', asset: 'semrush.svg', url: 'https://www.semrush.com' },
    { name: 'Ahrefs', asset: 'ahrefs.svg', url: 'https://ahrefs.com' },
    { name: 'Screaming Frog', asset: 'screaming-frog.png', url: 'https://www.screamingfrog.co.uk/seo-spider/', original: true },
  ] },
  { name: 'Analytics & reporting', tools: [
    { name: 'Google Search Console', asset: 'search-console.svg', url: 'https://search.google.com/search-console/' },
    { name: 'Google Analytics', asset: 'analytics.svg', url: 'https://analytics.google.com' },
    { name: 'Looker Studio', asset: 'looker.png', url: 'https://lookerstudio.google.com', original: true },
  ] },
  { name: 'Planning & collaboration', tools: [
    { name: 'Slack', asset: 'slack.svg', url: 'https://slack.com', original: true },
    { name: 'Notion', asset: 'notion.svg', url: 'https://www.notion.com', original: true },
    { name: 'Plane', asset: 'plane.svg', url: 'https://plane.so' },
    { name: 'Craft', asset: 'craft.png', url: 'https://www.craft.do', original: true },
    { name: 'Milanote', asset: 'milanote.svg', url: 'https://milanote.com' },
  ] },
  { name: 'Everyday productivity', tools: [
    { name: 'Superwhisper', asset: 'superwhisper.png', url: 'https://superwhisper.com', original: true },
    { name: 'Raycast', asset: 'raycast.svg', url: 'https://www.raycast.com' },
    { name: 'Granola', asset: 'granola.svg', url: 'https://www.granola.ai', original: true },
  ] },
  { name: 'Website infrastructure', tools: [
    { name: 'GitHub', asset: 'github.svg', url: 'https://github.com' },
    { name: 'Vercel', asset: 'vercel.svg', url: 'https://vercel.com' },
    { name: 'Supabase', asset: 'supabase.svg', url: 'https://supabase.com', original: true },
  ] },
];

export function Toolkit() {
  return (
    <section className={styles.section} id="toolkit" aria-labelledby="toolkit-title">
      <header className={styles.heading}>
        <span className={styles.eyebrow}>Our everyday toolkit</span>
        <h2 id="toolkit-title">The tools behind the work.</h2>
      </header>
      <div className={styles.rows}>
        {groups.map(group => (
          <div className={styles.row} key={group.name}>
            <h3 className={styles.category}>{group.name}</h3>
            <ul className={styles.logos} aria-label={group.name}>
              {group.tools.map(tool => (
                <li key={tool.name}>
                  <a className={styles.tool} href={tool.url} target="_blank" rel="noopener noreferrer" aria-label={`${tool.name} (opens in a new tab)`}>
                    <Image src={`/toolkit/${tool.asset}`} alt="" width={34} height={34} unoptimized className={tool.original ? styles.original : styles.mono}/>
                    <span className={styles.tooltip} aria-hidden="true">{tool.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
