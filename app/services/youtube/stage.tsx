'use client';
/* eslint-disable @next/next/no-img-element */

import {useLayoutEffect, useRef, useState, type CSSProperties} from 'react';
import Link from 'next/link';
import {openBookCall} from '@/components/booking/BookCall';
import {bootYoutube} from './motion';
import {
 ANAT_H2, ANAT_LEAD, ANAT_TITLE, BOOK_HREF, BOOK_LABEL, CAD_BIG, CAD_H2, CAD_STEPS, CAD_SUB,
 CALLOUTS, CHAPTERS, CTA_H2, CTA_HREF, CTA_LABEL, CTA_SUB, DAL, ENGINES, EYEBROW, FAQ, FAQ_H2,
 FIT, FIT_H2, FIT_LEAD, H1, PIPE, PIPE_H2, PIPE_LEAD, PROOF, PROOF_LBL, SAMPLES, SAMPLES_H2,
 SAMPLES_LEAD, START, START_H2, WHY_H2, WHY_LEAD, WL_HREF, WL_LABEL,
} from './copy';

const ASSET = '/services/youtube/v3';
/** Twin script card. Lines that start with # get the ember marker. */
const SCRIPT_FULL = '# Ch 1  The question\n# Ch 2  The short answer\n  Start with what buyers already ask\n# Ch 3  How to decide';

const RAIL = [
 ['yt-top', 'Title'],
 ['proof', 'Proof'],
 ['samples', 'Samples'],
 ['why', 'Why now'],
 ['pipe', 'Pipeline'],
 ['anat', 'Anatomy'],
 ['cad', 'Cadence'],
 ['fit', 'Fit'],
 ['start', 'Start'],
 ['faq', 'FAQ'],
 ['band', 'Quote'],
] as const;

function BookLink({className, id}: {className: string; id?: string}) {
 return (
  <a className={className} id={id} href={BOOK_HREF} onClick={(e) => { e.preventDefault(); openBookCall(); }}>
   {BOOK_LABEL}
  </a>
 );
}

function QuoteLink({className}: {className: string}) {
 return <Link className={className} href={CTA_HREF}>{CTA_LABEL}</Link>;
}

function Chip({n, children}: {n: string; children: string}) {
 return <p className="chip rv"><span>{n}</span>{children}</p>;
}

function Check() {
 return <svg className="ck" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" /></svg>;
}

/** Local stills and one player at a time. asmit LiteYouTube stays thumbnail-only for white-label. */
function SamplePlayer({id, title, poster, active, onPlay}: {id: string; title: string; poster: string; active: boolean; onPlay: () => void}) {
 return (
  <div className="wl-yt">
   {active
    ? <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title={title} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
    : <button type="button" onClick={onPlay} aria-label={`Play video: ${title}`}>
       <img src={poster} alt="" width={480} height={360} />
       <span className="wl-yt-play" aria-hidden="true" />
      </button>}
  </div>
 );
}

function Samples() {
 const ref = useRef<HTMLElement>(null);
 const [activeId, setActiveId] = useState<string | null>(null);
 useLayoutEffect(() => {
  if (!activeId) return;
  ref.current?.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
 }, [activeId]);
 return (
  <section id="samples" className="sec" ref={ref}>
   <Chip n="CH 02">Samples</Chip>
   <div className="sh">
    <h2 className="rv">{SAMPLES_H2}</h2>
    <p className="lead rv">{SAMPLES_LEAD}</p>
   </div>
   <div className="cut" id="cut">
    {SAMPLES.map((video, index) => (
     <article className="card rv" key={video.id}>
      <div className={`poster${activeId === video.id ? ' is-on' : ''}`}>
       <SamplePlayer
        id={video.id}
        title={video.title}
        poster={`/services/youtube/samples/${video.id}.jpg`}
        active={activeId === video.id}
        onPlay={() => setActiveId(video.id)}
       />
       <span className="tc">REEL {String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="cb">
       <p className="tag">{video.channel}</p>
       <h3>{video.title}</h3>
       <p>{video.lead}</p>
       <a className="yt" href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">Open on YouTube ↗</a>
      </div>
     </article>
    ))}
   </div>
   <div className="cutbar"><i id="cutp" /></div>
  </section>
 );
}

export function YouTubeStage() {
 const rootRef = useRef<HTMLDivElement>(null);
 useLayoutEffect(() => {
  const root = rootRef.current;
  if (!root) return;
  return bootYoutube(root);
 }, []);

 return (
  <div className="y7" ref={rootRef}>
   <div id="pre" className="roll" aria-hidden="true">
    <div className="roll__stack">
     <div className="roll__archw">
      <img className="roll__arch" src={`${ASSET}/gate-arch-cream.png`} alt="" />
      <span className="roll__ember" />
     </div>
    <span className="pre-tc">00:00:00:00</span>
    <span className="roll__label">ROLL</span>
    </div>
   </div>

   <nav className="rail" aria-label="Chapters">
    <div className="rail-bar"><i id="scrub" /></div>
    <span className="rail-head" id="rhead" />
    {RAIL.map(([id, label]) => (
     <a href={`#${id}`} data-k={id} key={id}><b /><span>{label}</span></a>
    ))}
    <p className="rail-tc" id="rtc">00:00:00:00</p>
   </nav>

   <section className="hero dark74" id="yt-top">
    <div className="field" aria-hidden="true"><i className="breath" /></div>
    <div className="hero-in">
     <div className="copy">
      <nav aria-label="Breadcrumb">
       <p className="crumb">
        <Link href="/">Home</Link>
        <span className="sep" aria-hidden="true">›</span>
        <Link href="/services">Services</Link>
        <span className="sep" aria-hidden="true">›</span>
        <span aria-current="page">YouTube</span>
       </p>
      </nav>
      <p className="eyebrow"><span className="rec" />{EYEBROW}</p>
      <h1>{H1}</h1>
      <p className="dal">{DAL}</p>
      <div className="ctas">
       <QuoteLink className="btn ember" />
       <BookLink className="btn ghost" />
      </div>
     </div>
     <div className="bay" id="bay">
      <div className="mon" id="mon" aria-label="Live edit bay: drive the pipeline">
       <div className="mon-top">
        <span className="lbl-rec">● REC</span>
        <span className="lbl-cut">LONG-FORM · CUT 03</span>
        <span className="tcl" id="mtc">00:02:52:00</span>
       </div>
       <div className="scr" id="scr">
        <img className="frame" src="/services/youtube/samples/QgVZs0fcTd8-frame.jpg" alt="" aria-hidden="true" />
        <div className="st st-script" data-st="script">
         <div className="mrg" aria-hidden="true"><i>1</i><i>2</i><i>3</i></div>
         <pre className="type" id="type" data-full={SCRIPT_FULL} />
        </div>
        <div className="st st-shoot" data-st="shoot">
         <div className="rack"><i className="subj" /></div>
         <i className="g gv g1" /><i className="g gv g2" /><i className="g gh g3" /><i className="g gh g4" />
         <i className="safe" />
         <span className="fr">1/50 · f2.8 · ISO 800</span>
        </div>
        <div className="st st-edit" data-st="edit">
         <div className="ccard">
          <p className="k" id="ck">Ch 2 · The short answer</p>
          <p className="t" id="ct">How to choose the right tool for your team</p>
          <p className="s" id="cs">The short answer: start with the questions your buyers already ask.</p>
         </div>
        </div>
        <div className="st st-pub" data-st="publish">
         <ul className="pp">
          <li className="pn"><b>Chapters</b><span><time>00:00</time> The question</span><span><time>01:12</time> The short answer</span><span><time>03:40</time> How to decide</span></li>
          <li className="pn chipx">captions.srt</li>
          <li className="pn"><Check />Title</li>
          <li className="pn"><Check />Description</li>
          <li className="pn cited">Cited-ready</li>
         </ul>
        </div>
        <i className="flash" id="flash" aria-hidden="true" />
       </div>
       <div className="tracks" id="tracks">
        <div className="tr ru"><span /><div className="ruler" id="ruler" aria-hidden="true"><b className="flag" style={{left: '0'}}>00:00</b><b className="flag" style={{left: '18.46%'}}>01:12</b><b className="flag" style={{left: '56.41%'}}>03:40</b></div></div>
        <div className="tr"><span>V1</span><div className="lane" id="lane"><span className="phd" id="phd" role="slider" tabIndex={0} aria-label="Playhead" aria-valuemin={0} aria-valuemax={100} aria-valuenow={45} aria-valuetext="" /></div></div>
        <div className="tr"><span>A1</span><div className="ccw" id="ccw" aria-hidden="true" /></div>
       </div>
       <div className="stg" role="group" aria-label="Pipeline stage">
        <i className="uline" id="pill" aria-hidden="true" />
        <button type="button" data-s="script" aria-pressed="false">SCRIPT</button>
        <button type="button" data-s="shoot" aria-pressed="false">SHOOT</button>
        <button type="button" data-s="edit" aria-pressed="true">EDIT</button>
        <button type="button" data-s="publish" aria-pressed="false">PUBLISH</button>
       </div>
       <p className="sr" aria-live="polite" id="live" />
      </div>
     </div>
    </div>
   </section>

   <section id="proof" className="sec proof">
    <Chip n="CH 01">Proof</Chip>
    <p className="lbl">{PROOF_LBL}</p>
    <ul className="strip">
     {PROOF.map(logo => (
      <li className="frame" key={logo.name}>
       <img src={logo.src} alt={logo.name} style={{height: logo.h}} />
      </li>
     ))}
    </ul>
   </section>

   <Samples />

   <section id="why" className="sec split">
    <Chip n="CH 03">Why now</Chip>
    <div>
     <h2 className="rv">{WHY_H2}</h2>
     <p className="lead rv">{WHY_LEAD}</p>
    </div>
    <ul className="eng">
     {ENGINES.map(engine => (
      <li className="rv" key={engine.name}>
       <div className="eh"><b>{engine.name}</b><span>{engine.tier}</span></div>
       <div className="meter"><i style={{'--v': engine.value} as CSSProperties} /></div>
       <p>{engine.note}</p>
      </li>
     ))}
    </ul>
   </section>

   <section id="pipe" className="sec pipe">
    <Chip n="CH 04">Pipeline</Chip>
    <div className="pgrid">
     <div className="psticky">
      <h2>{PIPE_H2}</h2>
      <p className="lead">{PIPE_LEAD}</p>
      <ol className="pnav">
       {PIPE.map((step, index) => (
        <li data-s={index} key={step.name}><span>0{index + 1}</span>{step.name}</li>
       ))}
      </ol>
     </div>
     <div className="psteps">
      {PIPE.map((step, index) => (
       <div className="pstep" data-s={index} key={step.name}>
        <p className="pn">0{index + 1} / 04</p>
        <h3>{step.name}</h3>
        <p className="pl">{step.body}</p>
        <ul>{step.points.map(point => <li key={point}>{point}</li>)}</ul>
       </div>
      ))}
     </div>
    </div>
   </section>

   <section id="anat" className="sec">
    <Chip n="CH 05">Anatomy</Chip>
    <div className="sh">
     <h2 className="rv">{ANAT_H2}</h2>
     <p className="lead rv">{ANAT_LEAD}</p>
    </div>
    <div className="anat">
     <div className="vid rv">
      <div className="vf">
       <p>{ANAT_TITLE}</p>
       <span className="play" aria-hidden="true" />
      </div>
      <ol className="chaps">
       {CHAPTERS.map(([time, label]) => <li key={time}><time>{time}</time>{label}</li>)}
      </ol>
     </div>
     <ul className="calls">
      {CALLOUTS.map(([title, body], index) => (
       <li className="pin rv" key={title}>
        <span className="pd">{index + 1}</span>
        <b>{title}</b>
        <p>{body}</p>
       </li>
      ))}
     </ul>
    </div>
   </section>

   <section id="cad" className="sec split">
    <Chip n="CH 06">Cadence</Chip>
    <div>
     <h2 className="rv">{CAD_H2}</h2>
     <p className="big rv">{CAD_BIG}</p>
     <p className="lead rv">{CAD_SUB}</p>
    </div>
    <ol className="cad rv">
     {CAD_STEPS.map(step => <li key={step}>{step}</li>)}
    </ol>
   </section>

   <section id="fit" className="sec">
    <Chip n="CH 07">Fit</Chip>
    <div className="sh">
     <h2 className="rv">{FIT_H2}</h2>
     <p className="lead rv">{FIT_LEAD}</p>
    </div>
    <div className="fits">
     {FIT.map(item => (
      <Link className="fit rv" href={item.href} key={item.name}>
       <b>{item.name}</b>
       <p>{item.body}</p>
       <span>→</span>
      </Link>
     ))}
    </div>
   </section>

   <section id="start" className="sec split">
    <Chip n="CH 08">Start</Chip>
    <h2 className="rv">{START_H2}</h2>
    <ol className="start">
     {START.map((step, index) => <li className="rv" key={step}><span>0{index + 1}</span>{step}</li>)}
    </ol>
   </section>

   <section id="faq" className="sec split">
    <Chip n="CH 09">FAQ</Chip>
    <h2 className="rv">{FAQ_H2}</h2>
    <div className="faq">
     {FAQ.map(([q, a]) => (
      <details key={q}>
       <summary>{q}</summary>
       <p>{a}</p>
      </details>
     ))}
    </div>
   </section>

   <section id="band" className="band">
    <div className="atmo sm" aria-hidden="true"><i className="key" /><i className="vig" /></div>
    <Chip n="CH 10">Quote</Chip>
    <h2 className="rv">{CTA_H2.endsWith(' on YouTube?') ? <>{CTA_H2.slice(0, -' on YouTube?'.length)}<br className="br-d" />on YouTube?</> : CTA_H2}</h2>
    <p className="lead rv">{CTA_SUB}</p>
    <div className="ctas ctas--center">
     <QuoteLink className="btn ember" />
     <BookLink className="btn ghost" id="book-a-call" />
     <Link className="btn ghost" href={WL_HREF}>{WL_LABEL}</Link>
    </div>
   </section>

   <footer className="foot">
    <img src={`${ASSET}/gate-mark.png`} alt="" width={28} height={28} />
    <span>Nakama Growth</span>
    <span className="v">Soften twin v7.7.1</span>
   </footer>
  </div>
 );
}
