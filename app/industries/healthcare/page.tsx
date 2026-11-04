import type {Metadata} from 'next';
import Link from 'next/link';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {
 COMPLY, CTA_PRIMARY, CTA_PRIMARY_HREF, CTA_SECONDARY, CTA_SECONDARY_HREF, DAL_COMPLY, DAL_DEF,
 DAL_FRAME, DAL_HOSP, DAL_NINETY, DAL_PROMPTS, DAL_SVC, DAL_WHO, DAL_WHY, DEF_ENTITY,
 DEF_FLOW, EYEBROW, FAQ, FIN_LEAD, FIT_NO, FIT_NO_H, FIT_YES, FIT_YES_H, H1, H2_COMPLY, H2_DEF,
 H2_FAQ, H2_FIN, H2_FIT, H2_FRAME, H2_HOSP, H2_NINETY, H2_PROMPTS, H2_SVC, H2_WHO, H2_WHY,
 H3_HEALTHTECH, H3_SOURCES, HEALTHTECH_BRIDGE, HERO_PROMPT, HOSP_BRIDGE, HOSP_PROMPT, HOSP_QUERY, HOSP_ROWS, LEAD, MEASURES,
 META, PHASES, PROMPT_STATES, PROMPTS, PROOF_LABEL, PROOF_LOGOS,
 RELATED_LIVE, SEGMENTS, SERVICES, SLUG, SOURCES, STATE_PROMPT, STEPS, TITLE, WHY_SHORT,
} from './copy';
import './healthcare.css';

const page = pageMeta(SLUG, {title: TITLE, description: META});
export const metadata: Metadata = {
 ...page,
 robots: {index: false, follow: false, googleBot: {index: false, follow: false}},
 openGraph: {...page.openGraph, locale: 'en_US'},
};

const serviceLd = {
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': abs(`${SLUG}#service`),
 name: 'Healthcare GEO',
 serviceType: 'Healthcare GEO',
 description: META,
 url: abs(SLUG),
 provider: {'@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Nakama Growth', url: SITE_URL},
 audience: {
  '@type': 'BusinessAudience',
  audienceType: 'Healthcare brands, including clinics, healthtech, hospitals and wellness companies',
 },
 areaServed: [
  {'@type': 'Country', name: 'United States'},
  {'@type': 'Country', name: 'United Kingdom'},
  {'@type': 'AdministrativeArea', name: 'European Union'},
  {'@type': 'Place', name: 'Middle East'},
  {'@type': 'Place', name: 'APAC'},
  {'@type': 'Country', name: 'India'},
 ],
};

const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: FAQ.map(({q, a}) => ({
  '@type': 'Question',
  name: q,
  acceptedAnswer: {'@type': 'Answer', text: a},
 })),
};

function FaqBody({a, href, linkLabel}: {a: string; href?: string; linkLabel?: string}) {
 if (!href || !linkLabel) return a;
 const at = a.indexOf(linkLabel);
 if (at < 0) return a;
 return (
  <>
   {a.slice(0, at)}
   <Link href={href}>{linkLabel}</Link>
   {a.slice(at + linkLabel.length)}
  </>
 );
}

function Ctas({id}: {id?: string}) {
 return (
  <div className="hc-btns" id={id}>
   <Link className="hc-btn hc-btn-p" href={CTA_PRIMARY_HREF}>{CTA_PRIMARY}</Link>
   <Link className="hc-btn hc-btn-s" href={CTA_SECONDARY_HREF}>{CTA_SECONDARY}</Link>
  </div>
 );
}

function Label({children}: {children: string}) {
 return <p className="hc-lbl">{children}</p>;
}

function Heart() {
 return (
  <span className="hc-mark" aria-hidden="true">
   <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7a9e8e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19.6C7.4 16.3 4.2 13.2 4.2 9.6c0-2.3 1.7-4 3.9-4 1.6 0 3 .9 3.9 2.3.9-1.4 2.3-2.3 3.9-2.3 2.2 0 3.9 1.7 3.9 4 0 2.1-1.1 4-3.2 6.1" />
   </svg>
  </span>
 );
}

export default function HealthcareIndustry() {
 return (
  <Shell className="hc-page shell-cinema">
   <Crumbs trail={[{name: 'Healthcare', path: SLUG}]} />
   <JsonLd data={[serviceLd, faqLd]} />
   <div className="hc">
    <section className="hc-hero">
     <div className="hc-vap" aria-hidden="true" />
     <div className="hc-w">
      <nav className="hc-crumb" aria-label="Breadcrumb">
       <span>Industries</span>
       <span aria-hidden="true"> / </span>
       <b>Healthcare</b>
      </nav>
      <div className="hc-hg">
       <div>
        <p className="hc-eye">{EYEBROW}</p>
        <h1>{H1}</h1>
        <p className="hc-lead">{LEAD}</p>
        <Ctas />
       </div>
       <div className="hc-panel">
        <p className="hc-pl"><span>Buyer prompt</span><span>Sample</span></p>
        <div className="hc-prompt"><span className="hc-chev" aria-hidden="true">›</span>{HERO_PROMPT}</div>
        <div className="hc-answer">
         <span className="hc-pulse" aria-hidden="true" />
         <div className="hc-rev"><b>Claims reviewed</b></div>
         <p className="hc-pl"><span>AI answer</span><span>Named</span></p>
         <div className="hc-nm"><Heart />Your brand</div>
         <div className="hc-line" />
         <div className="hc-line hc-line-sh" />
         <div className="hc-line hc-line-xs" />
         <div className="hc-chips">
          <span className="hc-chip">Publisher</span>
          <span className="hc-chip">Directory</span>
          <span className="hc-chip">Review</span>
         </div>
        </div>
       </div>
      </div>
     </div>
    </section>

    <section className="hc-logos" aria-labelledby="hc-proof-label">
     <div className="hc-w">
      <p className="hc-cap" id="hc-proof-label">{PROOF_LABEL}</p>
      <ul className="hc-lr">
       {PROOF_LOGOS.map(logo => (
        <li key={logo.name} className={logo.word ? 'is-word' : undefined}>
         {/* eslint-disable-next-line @next/next/no-img-element -- existing client marks, fixed size */}
         <img src={logo.src} alt={logo.name} width={logo.w} height={logo.h} loading="lazy" decoding="async" />
         {logo.word ? null : <span>{logo.name}</span>}
        </li>
       ))}
      </ul>
     </div>
    </section>

    <section className="hc-sec" aria-labelledby="hc-def">
     <div className="hc-w hc-split">
      <div>
       <Label>03 · Definition</Label>
       <h2 id="hc-def">{H2_DEF}</h2>
       <p className="hc-ans">{DAL_DEF}</p>
       <p className="hc-sub">{DEF_ENTITY}</p>
      </div>
      <div className="hc-flow">
       {DEF_FLOW.map((step, i) => (
        <div key={step.n} className="hc-flow-step">
         {i > 0 ? <div className="hc-arr" aria-hidden="true" /> : null}
         <div className={step.named ? 'hc-fn is-named' : 'hc-fn'}>
          <span>{step.n}</span>
          <b>{step.title}</b>
          <em>{step.meta}</em>
         </div>
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="hc-sec hc-alt" aria-labelledby="hc-why">
     <div className="hc-w">
      <Label>04 · Why it matters</Label>
      <h2 id="hc-why">{H2_WHY}</h2>
      <p className="hc-ans">{DAL_WHY}</p>
      <p className="hc-sub">{WHY_SHORT}</p>
      <h3 className="hc-h3-sec">{H3_SOURCES}</h3>
      <div className="hc-g3">
       {SOURCES.map(([type, use, work]) => (
        <div className="hc-card hc-rule" key={type}>
         <small>{type}</small>
         <h3>{use}</h3>
         <p>{work}</p>
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="hc-sec" aria-labelledby="hc-who">
     <div className="hc-w">
      <Label>05 · Who we work with</Label>
      <h2 id="hc-who">{H2_WHO}</h2>
      <p className="hc-ans">{DAL_WHO}</p>
      <div className="hc-g4">
       {SEGMENTS.map(([title, line, prompt]) => (
        <div className="hc-card" key={title}>
         <h3>{title}</h3>
         <p>{line}</p>
         <span className="hc-pr">{prompt}</span>
        </div>
       ))}
      </div>
      <div className="hc-card hc-bridge">
       <h3>{H3_HEALTHTECH}</h3>
       <p>{HEALTHTECH_BRIDGE}</p>
      </div>
     </div>
    </section>

    <section className="hc-sec hc-raise hc-hosp" aria-labelledby="hc-hosp">
     <div className="hc-w hc-split">
      <div>
       <Label>05b · Hospitals</Label>
       <h2 id="hc-hosp">{H2_HOSP}</h2>
       <p className="hc-ans">{DAL_HOSP}</p>
       <p className="hc-sub">{HOSP_BRIDGE}</p>
       <p className="hc-pr hc-pr-block">{HOSP_PROMPT}</p>
      </div>
      <div className="hc-way">
       <div className="hc-wh"><span className="hc-cap">Department + location</span><span className="hc-cap is-quiet">Sample</span></div>
       <div className="hc-wq"><span className="hc-chev" aria-hidden="true">›</span>{HOSP_QUERY}</div>
       {HOSP_ROWS.map(row => (
        <div className={row.on ? 'hc-wr is-on' : 'hc-wr'} key={row.title}>
         <span className="hc-ar" aria-hidden="true">→</span>
         <div><b>{row.title}</b><small>{row.sub}</small></div>
         <div className="hc-fl">{row.floors.map(floor => <span key={floor}>{floor}</span>)}</div>
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="hc-sec" aria-labelledby="hc-frame">
     <div className="hc-w">
      <Label>06 · Framework</Label>
      <h2 id="hc-frame">{H2_FRAME}</h2>
      <p className="hc-ans">{DAL_FRAME}</p>
      <div className="hc-g5">
       <div className="hc-track" aria-hidden="true" />
       {STEPS.map(([n, title, line]) => (
        <div className="hc-st" key={n}>
         <div className="hc-ring">{n}</div>
         <h3>{title}</h3>
         <p>{line}</p>
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="hc-sec hc-alt" aria-labelledby="hc-svc">
     <div className="hc-w">
      <Label>07 · Services</Label>
      <h2 id="hc-svc">{H2_SVC}</h2>
      <p className="hc-ans">{DAL_SVC}</p>
      <div className="hc-g3">
       {SERVICES.map(([title, line, href]) => (
        <div className="hc-card" key={title}>
         <h3>{title}</h3>
         <p>{line}</p>
         <Link className="hc-lk" href={href}>{title} →</Link>
        </div>
       ))}
      </div>
      <Ctas id="mid-cta" />
     </div>
    </section>

    <section className="hc-sec" aria-labelledby="hc-comply">
     <div className="hc-w">
      <Label>08 · Compliance as process</Label>
      <h2 id="hc-comply">{H2_COMPLY}</h2>
      <p className="hc-ans">{DAL_COMPLY}</p>
      <div className="hc-g3">
       {COMPLY.map(step => (
        <div className="hc-card hc-ck" key={step.n}>
         <span className="hc-bx">{step.n}</span>
         <div>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
         </div>
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="hc-sec hc-alt" aria-labelledby="hc-prompts">
     <div className="hc-w hc-split hc-split-start">
      <div>
       <Label>09 · Prompts</Label>
       <h2 id="hc-prompts">{H2_PROMPTS}</h2>
       <p className="hc-ans">{DAL_PROMPTS}</p>
       <ul className="hc-pls">
        {PROMPTS.map(prompt => <li key={prompt}>{prompt}</li>)}
       </ul>
      </div>
      <div className="hc-way hc-states">
       <div className="hc-wh"><span className="hc-cap">Prompt → engine → state</span><span className="hc-cap is-quiet">Sample</span></div>
       <div className="hc-wq"><span className="hc-chev" aria-hidden="true">›</span>{STATE_PROMPT}</div>
       {PROMPT_STATES.map(row => (
        <div className="hc-state" key={row.engine}>
         <span>Your brand</span>
         <span className="hc-eng">{row.engine}</span>
         <span className={row.hot ? 'hc-tag is-hot' : 'hc-tag'}>{row.state}</span>
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="hc-sec" aria-labelledby="hc-ninety">
     <div className="hc-w">
      <Label>10 · First 90 days</Label>
      <h2 id="hc-ninety">{H2_NINETY}</h2>
      <p className="hc-ans">{DAL_NINETY}</p>
      <div className="hc-g3">
       {PHASES.map(([num, title, line]) => (
        <div className="hc-card" key={num}>
         <span className="hc-num">{num}</span>
         <h3>{title}</h3>
         <p>{line}</p>
        </div>
       ))}
      </div>
      <div className="hc-mets">
       {MEASURES.map(measure => <span className="hc-met" key={measure}>{measure}</span>)}
      </div>
     </div>
    </section>

    <section className="hc-sec hc-alt" aria-labelledby="hc-fit">
     <div className="hc-w">
      <Label>11 · Fit</Label>
      <h2 id="hc-fit">{H2_FIT}</h2>
      <div className="hc-split hc-fit">
       <div className="hc-card hc-good">
        <h3>{FIT_YES_H}</h3>
        <ul>{FIT_YES.map(item => <li key={item}>{item}</li>)}</ul>
       </div>
       <div className="hc-card hc-bad">
        <h3>{FIT_NO_H}</h3>
        <ul>{FIT_NO.map(item => <li key={item}>{item}</li>)}</ul>
       </div>
      </div>
     </div>
    </section>

    <section className="hc-sec" aria-labelledby="hc-faq">
     <div className="hc-w">
      <Label>12 · FAQ</Label>
      <h2 id="hc-faq">{H2_FAQ}</h2>
      <div className="hc-faq">
       {FAQ.map((item, i) => (
        <details className="hc-fq" key={item.q} open={i === 0}>
         <summary><h3>{item.q}</h3></summary>
         <p><FaqBody a={item.a} href={item.href} linkLabel={item.linkLabel} /></p>
        </details>
       ))}
      </div>
     </div>
    </section>

    <section className="hc-sec" aria-labelledby="hc-fin">
     <div className="hc-w">
      <div className="hc-fin">
       <div className="hc-vap hc-vap-fin" aria-hidden="true" />
       <div className="hc-fin-copy">
        <Label>13 · Next step</Label>
        <h2 id="hc-fin">{H2_FIN}</h2>
        <p className="hc-lead hc-lead-fin">{FIN_LEAD}</p>
       </div>
       <Ctas />
      </div>
      <div className="hc-rel">
       {RELATED_LIVE.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </div>
     </div>
    </section>
   </div>
  </Shell>
 );
}
