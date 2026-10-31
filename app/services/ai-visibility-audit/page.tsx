import type {Metadata} from 'next';
import Link from 'next/link';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {
 BOOK, CASE_HOLD, CMP, CMP_H2, CMP_PAID_HEAD, CTA_H2, CTA_LINE, DEF_H2, DEF_P, ENGINE_HOLD,
 ENGINES, EYEBROW, FAQ, FAQ_H2, FAQ_LEAD_BEFORE, FIT_NO, FIT_NO_H3, FIT_YES, FIT_YES_H3, FIXES,
 FREE_CTA, H1, HERO_LEAD, KW_PRIMARY, META, METRIC_DO, METRICS, METRICS_H2, METRICS_HOLD,
 METRICS_LEAD, PAIN_H2, PAINS, PREVIEW, PRICE_H2, PRICE_HOLD, PRICE_ITEMS, PRICE_NAME, PROCESS_H2,
 PROOF_HOLD, Q_HREF, QUOTE, RELATED, REPORT_EXAMPLE, REPORT_H2, REPORT_NOTE, REPORT_QUOTE,
 REPORT_RUNS, REPORT_TAG, RETAINER_H3, RETAINER_P, ROLE, SAMPLE_CHATGPT_HOLD, SAMPLE_EMAIL,
 SAMPLE_H2, SAMPLE_SCOPE, SAMPLE_SLA, SEE_PRICING, SEND, SEO_META, SEO_TITLE, SEO_UPDATED, SLUG,
 SOURCES, STAT_HOLD, STEP_LINE, STEPS, SLA_OPS, THANKS_LABEL, THANKS_LINE, TITLE,
} from './copy';
import './ai-visibility-audit.css';

/** Wireframe V1.0.3 preview. PREVIEW true keeps robots noindex,follow and off the sitemap. */
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

function Hold({text}: {text: string}) {
 return <span className="hold">{text}</span>;
}

function WithHold({text, hold}: {text: string; hold?: string}) {
 return <>{text}{hold ? <> <Hold text={hold} /></> : null}</>;
}

export default function AiVisibilityAuditPage() {
 return (
  <Shell className="aia-page shell-cinema">
   <Crumbs trail={[{name: 'Services', path: '/services'}, {name: ROLE, path: SLUG}]} />
   <JsonLd data={serviceLd} />
   <div className="aia">
    <div className="w">
     <nav className="crumb" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span aria-hidden="true"> › </span>
      <Link href="/services">Services</Link>
      <span aria-hidden="true"> › </span>
      <b>{ROLE}</b>
     </nav>
     <div className="seo">
      <div><b>Title</b>{SEO_TITLE}</div>
      <div><b>Meta</b>{SEO_META}</div>
      <div><b>Primary KW</b>{KW_PRIMARY}</div>
      <div><b>Updated</b>{SEO_UPDATED}</div>
     </div>

     <section className="hero">
      <div>
       <p className="lbl">01 · Hero</p>
       <span className="eye"><span className="dot" aria-hidden="true" />{EYEBROW}</span>
       <h1>{H1}</h1>
       <p className="lead">{HERO_LEAD}</p>
       <div className="btns">
        <Link className="btn p" href={Q_HREF}>{BOOK}</Link>
        <Link className="btn s" href="#free-sample">{FREE_CTA}</Link>
        <Link className="tl" href="#pricing">{SEE_PRICING}</Link>
       </div>
       <div className="engines">
        <b>Engines <Hold text={ENGINE_HOLD} />:</b>
        {ENGINES.map(name => <span key={name}>{name}</span>)}
       </div>
      </div>
      <div className="ph tall">
       Hero visual slot<br />
       Cropped page of the redacted sample report<br />
       (no score · no dial · no fake brand)
      </div>
     </section>

     <section className="tight">
      <p className="lbl">02 · Proof</p>
      <div className="ph proof">{PROOF_HOLD}</div>
     </section>

     <section>
      <p className="lbl">03 · Definition</p>
      <div className="card def">
       <h2>{DEF_H2}</h2>
       <p className="lead flush">{DEF_P}</p>
      </div>
     </section>

     <section>
      <p className="lbl">04 · Pain</p>
      <h2>{PAIN_H2}</h2>
      <div className="g3">
       {PAINS.map(([title, body]) => (
        <div className="card" key={title}>
         <h3>{title}</h3>
         <p>{body}</p>
         <p className="k">Stat slot</p>
         <p><Hold text={STAT_HOLD} /></p>
        </div>
       ))}
      </div>
     </section>

     <section>
      <p className="lbl">05 · Six metrics</p>
      <h2>{METRICS_H2}</h2>
      <p className="lead"><Hold text={METRICS_HOLD} /> {METRICS_LEAD}</p>
      <div className="g3">
       {METRICS.map(([title, shows]) => (
        <div className="card" key={title}>
         <h3>{title}</h3>
         <p className="k">What it shows</p>
         <p>{shows}</p>
         <p className="k">What you do with it</p>
         <p>{METRIC_DO}</p>
        </div>
       ))}
      </div>
     </section>

     <section>
      <p className="lbl">06 · Redacted sample report · centrepiece</p>
      <h2>{REPORT_H2}</h2>
      <div className="report">
       <div className="rtag">
        <span>{REPORT_TAG}</span>
        <span>{REPORT_EXAMPLE}</span>
       </div>
       <div className="rgrid">
        <div className="rpage">
         <h4>Per-engine results · dated runs</h4>
         <table>
          <tbody>
           <tr>
            <th>Engine</th><th>Run date</th><th>Mentioned</th><th>Recommended</th><th>Cited</th>
           </tr>
           {REPORT_RUNS.map(([engine, mentioned, recommended, cited]) => (
            <tr key={engine}>
             <td>{engine}</td><td>[date]</td><td>{mentioned}</td><td>{recommended}</td><td>{cited}</td>
            </tr>
           ))}
          </tbody>
         </table>
         <p className="fine">{REPORT_NOTE}</p>
        </div>
        <div className="rpage">
         <h4>Verbatim answer quote</h4>
         <blockquote>
          “[verbatim engine answer] … <span className="bar" /> is often recommended for … while <span className="bar short" /> …”
         </blockquote>
         <p className="fine">{REPORT_QUOTE}</p>
        </div>
        <div className="rpage">
         <h4>Citation source map</h4>
         <table>
          <tbody>
           {SOURCES.map(source => (
            <tr key={source}>
             <td>{source}</td>
             <td><span className="bar" /></td>
             <td>[present / missing]</td>
            </tr>
           ))}
          </tbody>
         </table>
        </div>
        <div className="rpage">
         <h4>Top three fixes</h4>
         <ol className="fix">
          {FIXES.map(fix => <li key={fix}>{fix} <span className="bar" /></li>)}
         </ol>
         <p className="fine">Re-test date: [date]</p>
        </div>
       </div>
      </div>
     </section>

     <section>
      <p className="lbl">07 · Free sample vs paid audit</p>
      <h2>{CMP_H2}</h2>
      <table className="cmp dt">
       <tbody>
        <tr>
         <th />
         <th>Free sample</th>
         <th className="paid"><span className="dot" aria-hidden="true" /> {CMP_PAID_HEAD}</th>
        </tr>
        {CMP.map(row => (
         <tr key={row.label}>
          <td><b>{row.label}</b></td>
          <td><WithHold text={row.free} hold={row.freeHold} /></td>
          <td><WithHold text={row.paid} hold={row.paidHold} /></td>
         </tr>
        ))}
       </tbody>
      </table>
      <div className="mcmp">
       {CMP.map(row => (
        <div className="pair" key={row.label}>
         <h4>{row.label}</h4>
         <div>
          <span><b>Free sample</b><WithHold text={row.free} hold={row.freeHold} /></span>
          <span><b><span className="dot" aria-hidden="true" /> Paid audit</b><WithHold text={row.paid} hold={row.paidHold} /></span>
         </div>
        </div>
       ))}
      </div>
     </section>

     <section id="free-sample">
      <p className="lbl">08 · Free sample · #free-sample</p>
      <div className="split">
       <div>
        <h2 className="h-free">{SAMPLE_H2}</h2>
        <p className="lead sm">
         {SAMPLE_SCOPE} <Hold text={SAMPLE_CHATGPT_HOLD} />
         <br />
         {SAMPLE_EMAIL} Delivery <Hold text={SAMPLE_SLA} />
        </p>
        <div className="ty">
         <b>{THANKS_LABEL}</b>
         <br />
         {THANKS_LINE}
         <br />
         Next: <Link href={Q_HREF}>{BOOK}</Link> · #pricing (paid audit)
        </div>
       </div>
       <div className="form" aria-label="Free sample request, preview only">
        <div className="f"><label>Work email</label><div>[placeholder]</div></div>
        <div className="f"><label>Site URL</label><div>[placeholder]</div></div>
        <div className="f full"><label>Up to 3 competitors</label><div>[placeholder]</div></div>
        <div className="f full"><label>1 priority buyer prompt</label><div>[placeholder]</div></div>
        <div className="f full">
         <button type="button" className="btn s">{SEND}</button>
        </div>
       </div>
      </div>
     </section>

     <section>
      <p className="lbl">09 · Process</p>
      <h2>{PROCESS_H2}</h2>
      <div className="g4">
       {STEPS.map((title, i) => (
        <div className="card" key={title}>
         <p className="num">{String(i + 1).padStart(2, '0')}</p>
         <h3>{title}</h3>
         <p>{STEP_LINE}</p>
         <p><Hold text={SLA_OPS} /></p>
        </div>
       ))}
      </div>
     </section>

     <section>
      <p className="lbl">10 · Fit</p>
      <div className="split">
       <div className="card">
        <h3>{FIT_YES_H3}</h3>
        {FIT_YES.map(line => <p key={line}>{line}</p>)}
       </div>
       <div className="card">
        <h3>{FIT_NO_H3}</h3>
        {FIT_NO.map(line => <p key={line}>{line}</p>)}
       </div>
      </div>
     </section>

     <section id="pricing">
      <p className="lbl">11 · Pricing · #pricing</p>
      <h2>{PRICE_H2}</h2>
      <div className="pricing">
       <div className="card main">
        <h3><span className="dot" aria-hidden="true" /> {PRICE_NAME}</h3>
        <div className="price">{PRICE_HOLD}</div>
        <ul className="dl">
         {PRICE_ITEMS.map(item => (
          <li key={item.text}>
           {item.text}
           {'hold' in item && item.hold ? <> <Hold text={item.hold} /></> : null}
          </li>
         ))}
        </ul>
        <div className="btns flush">
         <Link className="btn p" href={Q_HREF}>{BOOK}</Link>
        </div>
       </div>
       <div className="card">
        <h3>{RETAINER_H3}</h3>
        <p>{RETAINER_P}</p>
        <div className="price sm">{PRICE_HOLD}</div>
        <br />
        <Link className="btn s" href={Q_HREF}>{QUOTE}</Link>
       </div>
      </div>
     </section>

     <section className="tight">
      <p className="lbl">12 · Case study</p>
      <div className="ph case">{CASE_HOLD}</div>
     </section>

     <section className="split">
      <div>
       <p className="lbl">13 · FAQ</p>
       <h2>{FAQ_H2}</h2>
       <p className="lead sm">{FAQ_LEAD_BEFORE}<Hold text={ENGINE_HOLD} />.</p>
      </div>
      <div className="faq">
       {FAQ.map(q => <div key={q}>{q}</div>)}
      </div>
     </section>

     <section className="end">
      <p className="lbl">14 · Final CTA</p>
      <div className="band">
       <div className="c">
        <h2>{CTA_H2}</h2>
        <p className="lead sm">{CTA_LINE}</p>
       </div>
       <aside className="rail">
        <small><span className="dot" aria-hidden="true" /> Start</small>
        <Link className="btn p" href={Q_HREF}>{BOOK}</Link>
        <Link className="btn s" href="#free-sample">{FREE_CTA}</Link>
       </aside>
      </div>
      <div className="rel">
       {RELATED.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </div>
     </section>
    </div>
   </div>
  </Shell>
 );
}
