import type {MetadataRoute} from 'next';
import {abs} from '@/lib/seo';
import {corePages,feedArticles,caseStudies,openings} from '@/lib/feed';
import {lastChanged} from '@/lib/lastmod';

export default function sitemap():MetadataRoute.Sitemap{
 return [
  ...corePages.map(p=>({url:abs(p.path),lastModified:lastChanged(p.src),changeFrequency:p.freq,priority:p.priority})),
  ...feedArticles
   .filter(a=>!a.canonical||a.canonical===`/journal/${a.slug}`)
   .map(a=>({url:abs(`/journal/${a.slug}`),lastModified:a.date,changeFrequency:'monthly' as const,priority:.6})),
  ...caseStudies.map(c=>({url:abs(`/work/${c.slug}`),lastModified:c.date,changeFrequency:'monthly' as const,priority:.7})),
  ...openings.map(o=>({url:abs(`/careers/${o.slug}`),lastModified:o.date,changeFrequency:'weekly' as const,priority:.5})),
 ];
}
