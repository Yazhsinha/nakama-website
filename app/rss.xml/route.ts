import {abs,SITE_NAME,SITE_DESCRIPTION,CONTACT_EMAIL} from '@/lib/seo';
import {feedArticles} from '@/lib/feed';
export const dynamic='force-static';
const esc=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
export function GET(){
 const items=[...feedArticles].sort((a,b)=>b.date.localeCompare(a.date));
 const origin=abs('/').replace(/\/$/,'');
 const body=items.map(a=>{const url=abs(`/journal/${a.slug}`);const text=a.bodyHtml?a.bodyHtml.replace(/((?:href|src)=")\//g,`$1${origin}/`):a.sections.map(s=>`<h2>${esc(s.heading)}</h2>${s.paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}`).join('');return `<item><title>${esc(a.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><pubDate>${new Date(a.publishedAt||`${a.date}T09:00:00+05:30`).toUTCString()}</pubDate><category>${esc(a.category)}</category><description>${esc(a.description)}</description><content:encoded><![CDATA[${text}]]></content:encoded></item>`;}).join('');
 const xml=`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/"><channel><title>${SITE_NAME} — Field notes</title><link>${abs('/resources')}</link><atom:link href="${abs('/rss.xml')}" rel="self" type="application/rss+xml"/><description>${esc(SITE_DESCRIPTION)}</description><language>en</language><managingEditor>${CONTACT_EMAIL} (${SITE_NAME})</managingEditor><lastBuildDate>${new Date(items[0]?.publishedAt||`${items[0]?.date||'2026-10-10'}T09:00:00+05:30`).toUTCString()}</lastBuildDate>${body}</channel></rss>`;
 return new Response(xml,{headers:{'Content-Type':'application/rss+xml; charset=utf-8','Cache-Control':'public, max-age=3600, s-maxage=3600'}});
}
