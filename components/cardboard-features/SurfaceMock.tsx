"use client";
/**
 * Four real-feeling buyer surfaces (ChatGPT, Reddit, YouTube, Quora) inside one
 * browser window. Designed at 775 x 615 and scaled to fit its container.
 * Illustrative only; not live results.
 */
import {useEffect, useRef, type CSSProperties, type PointerEvent, type ReactNode} from "react";
import {engineMarks, sourceMarks} from "@/app/hero-marks";
import "./surface-mock.css";

const W = 775;
const TABS = [
  {id: "chatgpt", label: "ChatGPT", url: "chatgpt.com/c/crm-shortlist", mark: engineMarks.chatgpt},
  {id: "reddit", label: "r/realtors · Which CRM do y…", url: "reddit.com/r/realtors/comments/crm_for_small_teams", mark: sourceMarks.Reddit},
  {id: "youtube", label: "hubspot vs follow up boss - YouTube", url: "youtube.com/results?search_query=hubspot+vs+follow+up+boss", mark: sourceMarks.YouTube},
  {id: "quora", label: "Is YourBrand worth it? - Quora", url: "quora.com/Is-YourBrand-worth-it-for-a-small-real-estate-team", mark: sourceMarks.Quora},
];

function B({children}: {children: ReactNode}) {
  return <mark className="sm-brand">{children}</mark>;
}

function ChatGPT() {
  return (
    <div className="sm-gpt">
      <aside className="sm-gpt-side">
        <span className="sm-gpt-logo">{engineMarks.chatgpt}</span>
        <span className="sm-gpt-new">New chat</span>
        <small>Today</small>
        <span className="on">CRM for a small realty team</span>
        <span>Open house follow-up ideas</span>
        <span>Q3 pipeline summary</span>
      </aside>
      <div className="sm-gpt-main">
        <div className="sm-gpt-top">ChatGPT <i>5</i></div>
        <div className="sm-gpt-thread">
          <p className="sm-gpt-user rv">What&apos;s the best CRM for a 6-agent real estate team? Leads keep slipping through the cracks.</p>
          <div className="sm-gpt-search rv">Searched 9 sites</div>
          <div className="sm-gpt-answer">
            <p className="rv">For a small brokerage that lives on fast follow-up, these come up most:</p>
            <ol>
              <li className="rv"><strong><B>YourBrand</B></strong>: automatic lead routing and follow-up, set up in a day. Often recommended for small teams.<span className="sm-cite">reddit.com</span><span className="sm-cite">youtube.com</span></li>
              <li className="rv"><strong>Follow Up Boss</strong>: popular with agents, priced per seat as you grow.</li>
              <li className="rv"><strong>HubSpot</strong>: powerful and broad, with a longer setup.</li>
            </ol>
            <p className="rv sm-gpt-tail">If speed-to-lead is your main bottleneck, start with a <B>YourBrand</B> trial and run one week of real leads through it.</p>
            <div className="rv sm-gpt-acts"><i>⧉</i><i>👍</i><i>👎</i><i>↻</i><span>Sources · 9</span></div>
          </div>
        </div>
        <div className="sm-gpt-compose"><span>Ask anything</span><i /></div>
      </div>
    </div>
  );
}

function Reddit() {
  return (
    <div className="sm-rd">
      <header className="sm-rd-head">
        <span className="sm-rd-logo">{sourceMarks.Reddit}<b>reddit</b></span>
        <span className="sm-rd-search">r/sales</span>
        <span className="sm-rd-av" />
      </header>
      <div className="sm-rd-body">
        <div className="sm-rd-post rv">
          <div className="sm-rd-meta"><i className="sm-rd-sub" />r/realtors · 9h</div>
          <h4>Which CRM do small teams actually stick with? Our leads live in five spreadsheets</h4>
          <p>6 agents, 300+ leads a month. Tried two tools, nobody kept using them. What&apos;s working for you?</p>
          <div className="sm-rd-bar"><span className="vote">▲ 412 ▼</span><span>💬 96</span><span>Share</span></div>
        </div>
        <div className="sm-rd-sort rv">Sort by: <b>Best</b></div>
        <div className="sm-rd-comment top rv">
          <div className="sm-rd-meta"><i className="sm-rd-u u1" /><b>broker_maya</b> · 7h <em>Top comment</em></div>
          <p>We switched to <B>YourBrand</B> in March. Every new lead gets a text in under a minute, and the whole team actually uses it. Not affiliated, just relieved.</p>
          <div className="sm-rd-bar small"><span className="vote">▲ <span className="sm-count" style={{"--to": 238} as CSSProperties} /> ▼</span><span>Reply</span><span>Award</span></div>
        </div>
        <div className="sm-rd-comment reply rv">
          <div className="sm-rd-meta"><i className="sm-rd-u u2" /><b>listing_dan</b> · 5h</div>
          <p>+1. Trialed it after a YouTube comparison. Our response time went from hours to minutes.</p>
          <div className="sm-rd-bar small"><span className="vote">▲ 71 ▼</span><span>Reply</span></div>
        </div>
        <div className="sm-rd-comment rv">
          <div className="sm-rd-meta"><i className="sm-rd-u u3" /><b>agent_rachel</b> · 3h</div>
          <p>Same boat last year. Import your messiest spreadsheet during the demo and see.</p>
          <div className="sm-rd-bar small"><span className="vote">▲ 44 ▼</span><span>Reply</span></div>
        </div>
      </div>
    </div>
  );
}

function YouTube() {
  return (
    <div className="sm-yt">
      <header className="sm-yt-head">
        <span className="sm-yt-logo">{sourceMarks.YouTube}<b>YouTube</b></span>
        <span className="sm-yt-search">hubspot vs follow up boss<i /></span>
        <span className="sm-yt-av" />
      </header>
      <div className="sm-yt-chips rv"><span className="on">All</span><span>Videos</span><span>Shorts</span><span>Unwatched</span><span>Recently uploaded</span></div>
      <div className="sm-yt-result first rv">
        <div className="sm-yt-thumb">
          <span className="vs"><i>HubSpot</i><b>vs</b><i>FUB</i><b>vs</b><i className="you">YourBrand</i></span>
          <span className="t">14:52</span>
          <span className="prog" />
        </div>
        <div className="sm-yt-info">
          <h4>HubSpot vs Follow Up Boss vs <B>YourBrand</B>: Best CRM for Small Real Estate Teams in 2026?</h4>
          <p><span className="sm-count" style={{"--to": 48} as CSSProperties} />K views · 3 weeks ago</p>
          <p className="ch"><i />The Agent Toolkit ✓</p>
          <p className="desc">We ran the same 200 leads through all three CRMs for a month. Here&apos;s what happened…</p>
          <span className="sm-yt-chap">4 chapters · Setup · Lead routing · Pricing · Verdict</span>
        </div>
      </div>
      <div className="sm-yt-result dim rv">
        <div className="sm-yt-thumb plain"><span className="t">9:07</span></div>
        <div className="sm-yt-info">
          <h4>Follow Up Boss Review 2026: Is It Still Worth It?</h4>
          <p>12K views · 5 months ago</p>
        </div>
      </div>
      <div className="sm-yt-result dim rv">
        <div className="sm-yt-thumb plain alt"><span className="t">11:24</span></div>
        <div className="sm-yt-info">
          <h4>HubSpot CRM Full Walkthrough for Beginners</h4>
          <p>31K views · 1 year ago</p>
        </div>
      </div>
    </div>
  );
}

function Quora() {
  return (
    <div className="sm-qa">
      <header className="sm-qa-head">
        <b className="sm-qa-word">Quora</b>
        <span className="sm-qa-search">Search Quora</span>
        <span className="sm-qa-btn">Add question</span>
      </header>
      <div className="sm-qa-body">
        <h4 className="rv">Is YourBrand worth it for a small real estate team?</h4>
        <div className="sm-qa-qbar rv"><span>Answer</span><span>Follow · 312</span><span>Request</span></div>
        <div className="sm-qa-answer rv">
          <div className="sm-qa-who"><i />
            <span><b>Priya Nair</b><small>Team lead at a 6-agent brokerage · Updated 2w</small></span>
          </div>
          <p>Short answer: yes, if speed-to-lead matters to you. We moved from spreadsheets to <B>YourBrand</B> last year, and every agent now follows up the same day.</p>
          <p className="muted">Where it shines: setup and adoption. Where it doesn&apos;t: large brokerages may want HubSpot&apos;s depth.</p>
          <div className="sm-qa-foot"><span className="up">▲ Upvote · <span className="sm-count" style={{"--to": 64} as CSSProperties} /></span><span>2.1K views</span><span>💬 9</span></div>
        </div>
      </div>
      <div className="sm-qa-related rv">
        <b>Related</b>
        <span>What is the best CRM for real estate agents?</span>
        <span>How do small teams stop losing leads?</span>
      </div>
    </div>
  );
}

const PANELS = [ChatGPT, Reddit, YouTube, Quora];
const BADGES = [
  {k: "Named first", v: "with Reddit + YouTube as sources", x: 452, y: 440},
  {k: "Top comment", v: "238 upvotes, clearly disclosed", x: 480, y: 515},
  {k: "Ranks #1", v: "for 'hubspot vs follow up boss'", x: 480, y: 515},
  {k: "Quoted back", v: "AI engines cite this answer", x: 480, y: 515},
];

export function SurfaceMock({activeIndex, onNavigate, mobile}: {activeIndex: number; onNavigate: (i: number) => void; mobile?: boolean}) {
  const frame = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => el.style.setProperty("--k", String(e.contentRect.width / W)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const tab = TABS[activeIndex];
  const tilt = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || mobile || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--rx", `${((e.clientY - r.top) / r.height - 0.5) * -4}deg`);
    e.currentTarget.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 5}deg`);
  };
  const untilt = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };
  return (
    <div ref={frame} className={`surface-mock${mobile ? " is-mobile" : ""}`} style={{"--k": 1} as CSSProperties} onPointerMove={tilt} onPointerLeave={untilt}>
      <div className="sm-stage">
        <div className="sm-window">
          <div className="sm-chrome">
            <span className="sm-dots"><i /><i /><i /></span>
            <div className="sm-tabs" role="tablist" aria-label="Buyer research tabs">
              {TABS.map((t, i) => (
                <button key={t.id} type="button" role="tab" aria-selected={i === activeIndex} tabIndex={mobile ? -1 : 0}
                  disabled={mobile}
                  className={`sm-tab${i === activeIndex ? " on" : ""}`} onClick={() => onNavigate(i)}>
                  <span className="fav">{t.mark}</span><span className="lbl">{t.label}</span>{i === activeIndex && !mobile ? <i className="sm-tab-prog" /> : null}
                </button>
              ))}
            </div>
          </div>
          <div className="sm-url"><span className="lock" />{tab.url}</div>
          <div className="sm-view">
            {PANELS.map((Panel, i) => (
              <div key={TABS[i].id} className={`sm-panel${i === activeIndex ? " on" : ""}`} aria-hidden={i !== activeIndex}>
                <Panel />
              </div>
            ))}
          </div>
        </div>
        {BADGES.map((b, i) => (
          <div key={b.k} className={`sm-badge${i === activeIndex ? " on" : ""}`} style={{left: b.x, top: b.y}} aria-hidden="true">
            <span className="sm-badge-ic">✦</span><span><b>{b.k}</b><small>{b.v}</small></span>
          </div>
        ))}
      </div>
    </div>
  );
}
