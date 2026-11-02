import type {Metadata} from 'next';
import Link from 'next/link';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {ReportScene} from './scene';
import {
 ANNS, BOOK, CMP, CMP_H2, CTA_H2, CTA_P, DEF_H2, DEF_P, ENG_LINE, EYEBROW, FAQ, FAQ_H2, FIT_NO,
 FIT_NO_ITEMS, FIT_YES, FIT_YES_ITEMS, FIXES, FREE_CTA, H1, KW_PRIMARY, LEAD, META, METRICS, MID,
 METRICS_H2, METRICS_LEAD, PAIN_H2, PAINS, PREVIEW, PRICE_H2, PRICE_ITEMS, PRICE_NAME, PRICE_ON,
 PROCESS_H2, Q_HREF, QUOTE, RELATED, REPORT_EXAMPLE, REPORT_H2, REPORT_NOTE, REPORT_RUNS,
 REPORT_TAG, RETAINER_H3, RETAINER_P, ROLE, SAMPLE_BODY, SAMPLE_EYE, SAMPLE_H2, SEE_PRICING,
 SEND, SLUG, SOURCES, STEPS, THANKS, THANKS_K, THANKS_NEXT, TITLE, VIZ,
} from './copy';
import './ai-visibility-audit.css';

/** Visual twin V3.0.1. PREVIEW true keeps robots noindex,follow and off the sitemap. */
const robots: Metadata['robots'] = PREVIEW
 ? {index: false, follow: true, googleBot: {index: false, follow: true}}
 : {index: true, follow: true, googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1}};

export const metadata: Metadata = {
 ...pageMeta(SLUG, {title: TITLE, description: META}),
 keywords: [KW_PRIMARY],
 robots,
};

const serviceLd = {
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': abs(`${SLUG}#service`),
 name: ROLE,
 serviceType: ROLE,
 description: META,
 url: abs(SLUG),
 provider: {'@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Nakama Growth'},
};

function Bar({size}: {size?: 's' | 'l'}) {
 return <span className={size === 's' ? 'rd rs' : size === 'l' ? 'rd rl' : 'rd'} aria-hidden="true" />;
}

function Dots({bits}: {bits: string}) {
 return <p>{bits.split('').map((bit, i) => <i key={i} className={bit === '1' ? 'on' : undefined} />)}</p>;
}

export default function AiVisibilityAuditPage() {
 return (
  <Shell className="aia-page shell-cinema">
   <Crumbs trail={[{name: 'Services', path: '/services'}, {name: ROLE, path: SLUG}]} />
   <JsonLd data={serviceLd} />
   <div className="aia">
    <div className="grain" aria-hidden="true" />
    <section className="hero">
     <div className="atmo" aria-hidden="true">
      <div className="glow" />
      <div className="floor" />
      <div className="arch" />
      <div className="fill" />
      <div className="vig" />
      <div className="hgr" />
      <div className="fl" />
     </div>
     <div className="wrap">
      <nav className="crumb" aria-label="Breadcrumb">
       <Link href="/">Home</Link>
       <span aria-hidden="true">›</span>
       <Link href="/services">Services</Link>
       <span aria-hidden="true">›</span>
       <b>{ROLE}</b>
      </nav>
      <div className="hero-grid">
       <div className="hero-copy">
        <span className="who"><span className="dot" aria-hidden="true" />{EYEBROW}</span>
        <h1>{H1}</h1>
        <p className="lead">{LEAD}</p>
        <div className="ctas">
         <Link className="btn btn-p" href={Q_HREF}>{BOOK} <span className="ar" aria-hidden="true">→</span></Link>
         <Link className="btn btn-g" href="#free-sample">{FREE_CTA}</Link>
         <Link className="tl" href="#pricing">{SEE_PRICING}</Link>
        </div>
        <p className="eng"><span className="dot" aria-hidden="true" />{ENG_LINE}</p>
       </div>
       <div className="stage">
        <div className="halo" aria-hidden="true" />
        <div className="rep rep-back" aria-hidden="true">
         <div className="rep-h"><b>Citation source map</b></div>
         <i /><i /><i /><i />
        </div>
        <figure className="rep rep-front" aria-label="Redacted sample report page, example data">
         <div className="rep-h">
          <b>
           {/* eslint-disable-next-line @next/next/no-img-element -- brand mark, fixed height */}
           <img src="/brand/nakama-icon-dark.svg" alt="" width={18} height={18} />
           AI visibility sample
          </b>
          <span className="stamp">{REPORT_TAG}</span>
         </div>
         <div className="rep-meta">
          <div>Prompts<b>1 to 3</b></div>
          <div>Engines<b>2</b></div>
          <div>Runs<b>3 each</b></div>
         </div>
         <p className="rp">Prompt 1 · “best <Bar size="s" /> tool for <Bar /> teams”</p>
         <table className="rt2">
          <tbody>
           <tr><th>Engine</th><th>Mentioned</th><th>Recommended</th><th>Cited</th></tr>
           <tr><td>Engine A</td><td className="of"><b>2</b> of 3</td><td className="of"><b>1</b> of 3</td><td className="of"><b>1</b> of 3</td></tr>
           <tr><td>Engine B</td><td className="of"><b>3</b> of 3</td><td className="of"><b>2</b> of 3</td><td className="of"><b>0</b> of 3</td></tr>
          </tbody>
         </table>
         <div className="quote">“…teams often shortlist <Bar /> and <Bar size="s" /> for this, while <Bar size="l" /> is cited for pricing…”<small>Verbatim answer · Engine B · run 2</small></div>
         <p className="rep-f">Example data. Engines reported separately. No blended cross-engine number.</p>
        </figure>
       </div>
      </div>
     </div>
    </section>

    <section className="s def-s">
     <div className="wrap">
      <article className="def">
       <h2>{DEF_H2}</h2>
       <p>{DEF_P}</p>
      </article>
     </div>
    </section>

    <section className="s s-alt pain-s">
     <div className="wrap">
      <h2>{PAIN_H2}</h2>
      <div className="pain">
       <article className="pl">
        <span className="big">01</span>
        <h3>{PAINS[0]}</h3>
       </article>
       <ol className="pr">
        {PAINS.slice(1).map((title, i) => (
         <li key={title}><span>{String(i + 2).padStart(2, '0')}</span><h3>{title}</h3></li>
        ))}
       </ol>
      </div>
     </div>
    </section>

    <section className="s mets-s">
     <div className="wrap">
      <h2>{METRICS_H2}</h2>
      <p className="sublead">{METRICS_LEAD}</p>
      <div className="mets3">
       {METRICS.slice(0, 3).map(([title, shows, does], i) => (
        <article className="card mh" key={title}>
         <h3>{title}</h3>
         <div className="viz" aria-label="Example data">
          <div><span>Engine A</span><Dots bits={VIZ[i][0]} /></div>
          <div><span>Engine B</span><Dots bits={VIZ[i][1]} /></div>
          <small>Example data</small>
         </div>
         <p className="k">What it shows</p>
         <p>{shows}</p>
         <p className="k">What you do with it</p>
         <p className="do">{does}</p>
        </article>
       ))}
      </div>
      <div className="mets3b">
       {METRICS.slice(3).map(([title, shows, does]) => (
        <article className="card ms" key={title}>
         <h3>{title}</h3>
         <p className="k">What it shows</p>
         <p>{shows}</p>
         <p className="k">What you do with it</p>
         <p className="do">{does}</p>
        </article>
       ))}
      </div>
      <div className="mid">
       <p>{MID}</p>
       <div className="rail">
        <Link className="btn btn-p" href={Q_HREF}>{BOOK} <span className="ar" aria-hidden="true">→</span></Link>
        <Link className="btn btn-g" href="#free-sample">{FREE_CTA}</Link>
       </div>
      </div>
     </div>
    </section>

    <section className="s s-alt rscene" id="report">
     <div className="wrap">
      <h2>{REPORT_H2}</h2>
      <ReportScene>
       <ol className="anns">
        {ANNS.map(([key, title, body], i) => (
         <li className={i === 0 ? 'an on' : 'an'} data-r={key} key={key}>
          <span className="ad" />
          <b>{title}</b>
          <p>{body}</p>
         </li>
        ))}
       </ol>
       <div className="pinw">
      <div className="repx" data-a="t">
       <div className="repx-top">
        <span className="stamp">{REPORT_TAG}</span>
        <span>{REPORT_EXAMPLE}</span>
       </div>
       <div className="repx-g">
        <div className="pg" data-r="t">
         <i className="md" />
         <h4>Per-engine results <span>dated runs</span></h4>
         <table className="rt2">
          <tbody>
           <tr><th>Engine</th><th>Run date</th><th>Mentioned</th><th>Recommended</th><th>Cited</th></tr>
           {REPORT_RUNS.map(([engine, date, mentioned, recommended, cited]) => (
            <tr key={engine}>
             <td>{engine}</td>
             <td>{date}</td>
             <td className="of"><b>{mentioned}</b> of 3 runs</td>
             <td className="of"><b>{recommended}</b> of 3 runs</td>
             <td className="of"><b>{cited}</b> of 3 runs</td>
            </tr>
           ))}
          </tbody>
         </table>
         <p className="note">{REPORT_NOTE}</p>
        </div>
        <div className="pg" data-r="q">
         <i className="md" />
         <h4>Verbatim answer quote <span>Engine B · 15 Oct</span></h4>
         <div className="quote flat">“For mid-market teams, <Bar /> is often recommended for onboarding, while <Bar size="l" /> is cited for pricing and <Bar size="s" /> for integrations…”<small>Brand redacted · engine + date shown</small></div>
        </div>
        <div className="pg" data-r="s">
         <i className="md" />
         <h4>Citation source map <span>top gaps</span></h4>
         <ul className="src">
          {SOURCES.map(([name, present]) => (
           <li key={name}><span>{name}</span><span className={present ? 'pill on' : 'pill'}>{present ? 'Present' : 'Missing'}</span></li>
          ))}
         </ul>
        </div>
        <div className="pg" data-r="f">
         <i className="md" />
         <h4>Top three fixes <span>re-test 30 Nov</span></h4>
         <ol className="fix">
          {FIXES.map(([title, detail], i) => (
           <li key={title}>
            <div>
             {title}
             <small>
              {detail}
              {i < 2 ? <> <Bar size={i === 1 ? 'l' : undefined} /></> : null}
             </small>
            </div>
           </li>
          ))}
         </ol>
        </div>
       </div>
      </div>
       </div>
      </ReportScene>
     </div>
    </section>

    <section className="s cmp-s">
     <div className="wrap">
      <h2>{CMP_H2}</h2>
      <div className="cmpw">
       <table className="cmp">
        <tbody>
         <tr>
          <th />
          <th><div className="hd"><span><small>Lighter step</small>Free sample</span></div></th>
          <th className="paid"><div className="hd"><span className="dot" aria-hidden="true" /><span><small>Full measurement</small>Paid AI Visibility Audit</span></div></th>
         </tr>
         {CMP.map(([label, free, paid]) => (
          <tr key={label}>
           <td>{label}</td>
           <td>{free}</td>
           <td className="p">{paid}</td>
          </tr>
         ))}
        </tbody>
       </table>
      </div>
      <div className="mcmp">
       {CMP.map(([label, free, paid]) => (
        <div className="pair" key={label}>
         <h4>{label}</h4>
         <div>
          <span><b>Free sample</b>{free}</span>
          <span className="pp"><b><i className="dot" aria-hidden="true" />Paid audit</b>{paid}</span>
         </div>
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="s s-alt fs-s" id="free-sample">
     <div className="fsa" aria-hidden="true"><div className="g2" /><div className="a2" /></div>
     <div className="wrap fs">
      <div>
       <p className="eyb">{SAMPLE_EYE}</p>
       <h2>{SAMPLE_H2}</h2>
       <div className="scope">
        <div><b>1<em>to</em>3</b><span>prompts</span></div>
        <div><b>2</b><span>engines</span></div>
        <div><b>3</b><span>runs each</span></div>
       </div>
       <p className="body">{SAMPLE_BODY}</p>
       <div className="ty">
        <b>{THANKS_K}</b>
        {THANKS}
        <br />
        {THANKS_NEXT} <Link href={Q_HREF}>{BOOK}</Link> · <Link href="#pricing">{SEE_PRICING}</Link>
       </div>
      </div>
      <div className="form" role="group" aria-label="Free sample request, preview only">
       <div className="f"><label>Work email</label><div className="in">you@company.com</div></div>
       <div className="f"><label>Site URL</label><div className="in">company.com</div></div>
       <div className="f full"><label>Competitors <small>· up to 3</small></label><div className="in">rival-one.com, rival-two.com</div></div>
       <div className="f full"><label>Buyer prompts <small>· 1 to 3</small></label><div className="in ta">best onboarding software for mid-market SaaS</div></div>
       <div className="f full"><button type="button" className="btn btn-g btn-w">{SEND}</button></div>
      </div>
     </div>
    </section>

    <section className="s">
     <div className="wrap">
      <h2>{PROCESS_H2}</h2>
      <div className="steps">
       <div className="srail" aria-hidden="true"><i /></div>
       {STEPS.map(([title, body], i) => (
        <div className="step" key={title}>
         <b>{String(i + 1).padStart(2, '0')}</b>
         <h3>{title}</h3>
         <p>{body}</p>
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="s s-alt">
     <div className="wrap">
      <div className="fit">
       <article className="card">
        <span className="tag">{FIT_YES}</span>
        <ul>{FIT_YES_ITEMS.map(item => <li key={item}>{item}</li>)}</ul>
       </article>
       <article className="card no">
        <span className="tag">{FIT_NO}</span>
        <ul>{FIT_NO_ITEMS.map(item => <li key={item}>{item}</li>)}</ul>
       </article>
      </div>
     </div>
    </section>

    <section className="s" id="pricing">
     <div className="wrap">
      <h2>{PRICE_H2}</h2>
      <div className="pri">
       <article className="card main">
        <h3><span className="dot" aria-hidden="true" />{PRICE_NAME}</h3>
        <p className="onc">{PRICE_ON}</p>
        <ul className="dl">{PRICE_ITEMS.map(item => <li key={item}>{item}</li>)}</ul>
        <Link className="btn btn-p" href={Q_HREF}>{BOOK} <span className="ar" aria-hidden="true">→</span></Link>
       </article>
       <article className="card side">
        <div>
         <h3>{RETAINER_H3}</h3>
         <p>{RETAINER_P}</p>
        </div>
        <Link className="btn btn-g" href={Q_HREF}>{QUOTE} <span aria-hidden="true">→</span></Link>
       </article>
      </div>
     </div>
    </section>

    <section className="s s-alt">
     <div className="wrap faqg">
      <div><h2>{FAQ_H2}</h2></div>
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

    <section className="cta">
     <div className="cg" aria-hidden="true" />
     <div className="wrap">
      <div>
       <h2>{CTA_H2}</h2>
       <p>{CTA_P}</p>
       <div className="rel">
        {RELATED.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
       </div>
      </div>
      <div className="rail">
       <Link className="btn btn-p" href={Q_HREF}>{BOOK} <span className="ar" aria-hidden="true">→</span></Link>
       <Link className="btn btn-g" href="#free-sample">{FREE_CTA}</Link>
      </div>
     </div>
    </section>
   </div>
  </Shell>
 );
}
