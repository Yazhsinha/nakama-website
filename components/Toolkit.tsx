import Image from 'next/image';
import styles from './Toolkit.module.css';

const tools = [
  { name: 'ChatGPT', asset: 'chatgpt.svg', monochrome: true },
  { name: 'Claude', asset: 'claude.svg', monochrome: false },
  { name: 'Gemini', asset: 'gemini.svg', monochrome: false },
  { name: 'Perplexity', asset: 'perplexity.svg', monochrome: false },
  { name: 'Grok', asset: 'grok.svg', monochrome: true },
  { name: 'Cursor', asset: 'cursor.svg', monochrome: true },
  { name: 'Codex', asset: 'codex.svg', monochrome: false },
  { name: 'Claude Code', asset: 'claude-code.svg', monochrome: false },
  { name: 'GitHub Copilot', asset: 'copilot.svg', monochrome: true },
  { name: 'Grok Bot', asset: 'grok-bot.svg', monochrome: false },
  { name: 'Semrush', asset: 'semrush.svg', monochrome: false },
  { name: 'Ahrefs', asset: 'ahrefs.svg', monochrome: false },
  { name: 'Screaming Frog', asset: 'screaming-frog.png', monochrome: false },
  { name: 'Google Search Console', asset: 'search-console.svg', monochrome: false },
  { name: 'Google Analytics', asset: 'analytics.svg', monochrome: false },
  { name: 'Looker Studio', asset: 'looker.png', monochrome: false },
  { name: 'Slack', asset: 'slack.svg', monochrome: false },
  { name: 'Notion', asset: 'notion.svg', monochrome: false },
  { name: 'Plane', asset: 'plane.svg', monochrome: true },
  { name: 'Craft', asset: 'craft.png', monochrome: false },
  { name: 'Milanote', asset: 'milanote.svg', monochrome: true },
  { name: 'Superwhisper', asset: 'superwhisper.png', monochrome: false },
  { name: 'Raycast', asset: 'raycast.svg', monochrome: false },
  { name: 'Granola', asset: 'granola.svg', monochrome: false },
  { name: 'GitHub', asset: 'github.svg', monochrome: true },
  { name: 'Vercel', asset: 'vercel.svg', monochrome: true },
  { name: 'Supabase', asset: 'supabase.svg', monochrome: false },
];

export function Toolkit() {
  return (
    <section className={`page-width ${styles.section}`} id="toolkit" aria-labelledby="toolkit-title">
      <h2 id="toolkit-title" className={styles.heading}>The tools behind the work.</h2>
      <ul className={styles.logos} aria-label="Our everyday toolkit">
        {tools.map(tool => (
          <li key={tool.name} className={styles.cell}>
            <span className={`${styles.tool} ${tool.monochrome ? styles.monochrome : ''}`}>
              <Image src={`/toolkit/${tool.asset}`} alt={tool.name} width={40} height={40} unoptimized />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
