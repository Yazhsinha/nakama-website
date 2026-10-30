import type {Metadata} from 'next';
import {Fragment} from 'react';
import Link from 'next/link';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {BookLink} from './book';
import {
 C_HREF, CMP_COLS, CMP_LEAD, CMP_ROWS, CMP_SHARED, CTA_H2, CTA_SUB, DAL, EYEBROW, FAQ, FIT_NO,
 FIT_NO_H3, FIT_YES, FIT_YES_H3, GATE_LEAD, GEO_ALSO, GEO_HREF, GEO_P, H1, H2_CMP, H2_FAQ, H2_FIT,
 H2_GATE, H2_GEO, H2_INC, H2_MID, H2_STD, INC, INC_LEAD, KW_PRIMARY, KW_SECONDARY, META, PLACE,
 PLACE_H3, PREVIEW, PROSPECT_APPROVE, PROSPECT_GATE, PROSPECT_HOST, PROSPECT_LABEL, PROSPECT_META,
 PROSPECT_ROWS, PROSPECT_SKIP, Q_HREF, Q_LABEL, REDDIT_HREF, REDDIT_LINE, REFUSE, REFUSE_H3, ROLE,
 SLUG, STEPS, TARGET_H3, TARGET_P, TITLE, WHO, WL,
} from './copy';
import './digital-pr.css';

/** Soften twin V3, Hibiku LOCKED v1. PREVIEW false keeps robots index,follow. */
const robots: Metadata['robots'] = PREVIEW
 ? {index: false, follow: true, googleBot: {index: false, follow: true}}
 : {index: true, follow: true, googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1}};

export const metadata: Metadata = {
 ...pageMeta(SLUG, {title: TITLE, description: META}),
 keywords: [KW_PRIMARY, ...KW_SECONDARY],
 robots,
};

const serviceLd = {
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': abs(`${SLUG}#service`),
 name: EYEBROW,
 serviceType: ROLE,
 description: META,
 url: abs(SLUG),
 image: abs('/opengraph-image.png'),
 mainEntityOfPage: abs(SLUG),
 provider: {'@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Nakama Growth', url: SITE_URL},
 audience: {'@type': 'Audience', audienceType: 'SaaS, tech and AI companies'},
 areaServed: {'@type': 'Place', name: 'Worldwide'},
};
const webPageLd = {
 '@context': 'https://schema.org',
 '@type': 'WebPage',
 '@id': abs(`${SLUG}#webpage`),
 url: abs(SLUG),
 name: TITLE,
 isPartOf: {'@id': `${SITE_URL}/#website`},
 mainEntity: {'@id': abs(`${SLUG}#service`)},
};

const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: FAQ.map(([name, text]) => ({'@type': 'Question', name, acceptedAnswer: {'@type': 'Answer', text}})),
};

function Ctas() {
 return (
  <div className="btns">
   <Link className="btn p" href={Q_HREF}>{Q_LABEL}</Link>
   <BookLink className="btn s" />
  </div>
 );
}

function Checks({items, tone}: {items: readonly string[]; tone: 'y' | 'n'}) {
 return (
  <ul className={`chk ${tone}`}>
   {items.map(item => <li key={item}>{item}</li>)}
  </ul>
 );
}

function GeoLead() {
 const needle = 'GEO services';
 const at = GEO_P.indexOf(needle);
 return (
  <p className="lead">
   {GEO_P.slice(0, at)}
   <Link href={GEO_HREF}><u>{needle}</u></Link>
   {GEO_P.slice(at + needle.length)}
  </p>
 );
}

export default function DigitalPrServices() {
 return (
  <Shell className="dpr-page shell-cinema">
   <Crumbs trail={[{name: 'Services', path: '/services'}, {name: ROLE, path: SLUG}]} />
   <JsonLd data={[serviceLd, webPageLd, faqLd]} />
   <div className="dpr">
    <div className="herow">
     <div className="atmo" aria-hidden="true">
      <div className="glow" />
      <div className="bay" />
      <div className="arch" />
      {/* eslint-disable-next-line @next/next/no-img-element -- brand mark, fixed size, decorative */}
      <img className="gmk" src="/brand/nakama-icon-dark.svg" alt="" width={120} height={120} />
      <div className="vig" />
     </div>
     <div className="w">
      <nav className="crumb" aria-label="Breadcrumb">
       <Link href="/">Home</Link>
       <span aria-hidden="true"> › </span>
       <Link href="/services">Services</Link>
       <span aria-hidden="true"> › </span>
       <b>{ROLE}</b>
      </nav>
      <section className="hero">
       <p className="eye">{EYEBROW}</p>
       <h1>{H1}</h1>
       <p className="lead">{DAL}</p>
       <p className="who">{WHO}</p>
       <Ctas />
      </section>
     </div>
    </div>

    <div className="w">
     <section>
      <h2>{H2_FIT}</h2>
      <div className="g2">
       <div className="card">
        <h3>{FIT_YES_H3}</h3>
        <Checks items={FIT_YES} tone="y" />
       </div>
       <div className="card">
        <h3>{FIT_NO_H3}</h3>
        <Checks items={FIT_NO} tone="n" />
       </div>
      </div>
     </section>

     <section>
      <h2>{H2_INC}</h2>
      <p className="lead">{INC_LEAD}</p>
      <div className="g5">
       {INC.map(([title, body], i) => (
        <div className="card" key={title}>
         <p className="num">{String(i + 1).padStart(2, '0')}</p>
         <h3>{title}</h3>
         <p>{body}</p>
        </div>
       ))}
      </div>
      <div className="target">
       <h3>{TARGET_H3}</h3>
       <p>{TARGET_P}</p>
      </div>
     </section>
    </div>

    <div className="alt">
     <div className="w">
      <section className="noborder">
       <h2>{H2_CMP}</h2>
       <p className="lead">{CMP_LEAD}</p>
       <table className="cmp">
        <thead>
         <tr>
          <th scope="col"><span className="vh">Compare</span></th>
          {CMP_COLS.map(col => <th scope="col" key={col}>{col}</th>)}
         </tr>
        </thead>
        <tbody>
         {CMP_ROWS.map(([label, left, right]) => (
          <tr key={label}>
           <th scope="row">{label}</th>
           <td>{left}</td>
           <td>{right}</td>
          </tr>
         ))}
         <tr className="sh">
          <th scope="row">{CMP_SHARED[0]}</th>
          <td colSpan={2}>{CMP_SHARED[1]}</td>
         </tr>
        </tbody>
       </table>
      </section>

      <section>
       <h2>{H2_STD}</h2>
       <div className="g2">
        <div className="card">
         <h3>{PLACE_H3}</h3>
         <Checks items={PLACE} tone="y" />
        </div>
        <div className="card">
         <h3>{REFUSE_H3}</h3>
         <Checks items={REFUSE} tone="n" />
        </div>
       </div>
       <p className="rl"><Link href={REDDIT_HREF}>{REDDIT_LINE}</Link></p>
      </section>
     </div>
    </div>

    <div className="w">
     <section className="noborder">
      <div className="gate-sec">
       <div>
        <h2>{H2_GATE}</h2>
        <p className="lead">{GATE_LEAD}</p>
       </div>
       <div className="pc" aria-label="Prospect card, illustrative">
        <div className="top">
         <span>{PROSPECT_LABEL}</span>
         <span className="gm">
          {/* eslint-disable-next-line @next/next/no-img-element -- brand mark inside the illustrative card */}
          <img src="/brand/nakama-icon-dark.svg" alt="" width={22} height={22} />
          {PROSPECT_GATE}
         </span>
        </div>
        <p className="phost">{PROSPECT_HOST}</p>
        <p className="meta">{PROSPECT_META}</p>
        <dl>
         {PROSPECT_ROWS.map(([term, detail]) => (
          <Fragment key={term}>
           <dt>{term}</dt>
           <dd>{detail}</dd>
          </Fragment>
         ))}
        </dl>
        <div className="acts">
         <span className="ap"><i />{PROSPECT_APPROVE}</span>
         <span className="sk">{PROSPECT_SKIP}</span>
        </div>
       </div>
      </div>
      <div className="steps">
       {STEPS.map(([title, body], i) => (
        <div className={i === 2 ? 'on' : undefined} key={title}>
         {String(i + 1).padStart(2, '0')}
         <b>{title}</b>
         {body}
        </div>
       ))}
      </div>
     </section>

     <section>
      <div className="mid">
       <h2>{H2_MID}</h2>
       <Ctas />
      </div>
     </section>
    </div>

    <div className="alt">
     <div className="w">
      <section className="noborder">
       <h2>{H2_GEO}</h2>
       <GeoLead />
       <p className="lead also">
        {GEO_ALSO.map(([label, href], i) => (
         <span key={href}>
          {i > 0 ? ' · ' : null}
          <Link href={href}><u>{label}</u></Link>
         </span>
        ))}
       </p>
      </section>

      <section>
       <div className="split">
        <div><h2>{H2_FAQ}</h2></div>
        <div className="faq">
         {FAQ.map(([q, a], i) => (
          <details key={q} open={i === 0}>
           <summary>{q}</summary>
           <p>{a}</p>
          </details>
         ))}
        </div>
       </div>
      </section>
     </div>
    </div>

    <div className="w">
     <section className="final noborder" id={C_HREF.slice(1)}>
      <p className="cta-h">{CTA_H2}</p>
      <p className="lead">{CTA_SUB}</p>
      <Ctas />
      <p className="wl">{WL}</p>
     </section>
    </div>
   </div>
  </Shell>
 );
}
