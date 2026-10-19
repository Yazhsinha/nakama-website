"use client";
/* Interactive, illustrative dashboards for Map / Earn / Compound. Fictional brands and numbers. */
import {useMemo, useState, type CSSProperties} from "react";
import {engineMarks, sourceMarks} from "@/app/hero-marks";
import "./dashboards.css";

const ENG = [
  {id: "chatgpt", name: "ChatGPT", short: "ChatGPT", mark: engineMarks.chatgpt},
  {id: "perplexity", name: "Perplexity", short: "Perplexity", mark: engineMarks.perplexity},
  {id: "gemini", name: "Gemini", short: "Gemini", mark: engineMarks.gemini},
  {id: "google", name: "AI Overview", short: "Google", mark: engineMarks.google},
];

function Bar({title, right}: {title: string; right?: string}) {
  return (
    <div className="dx-bar">
      <span className="dx-dots"><i /><i /><i /></span>
      <b>{title}</b>
      <span className="dx-bar-r"><i className="dx-live" />{right ?? "Example data"}</span>
    </div>
  );
}

function EngineIcon({i}: {i: number}) {
  return <span className={`dx-eng dx-eng-${ENG[i].id}`}>{ENG[i].mark}</span>;
}

/* ---------------- MAP ---------------- */
type Verdict = "named" | "cited" | "missing";
const PROMPTS: {q: string; tag: string; v: Verdict[]; who: string}[] = [
  {q: "best payroll software for startups", tag: "Category", v: ["named", "missing", "cited", "missing"], who: "ChatGPT and Gemini mention you. Perplexity and Google recommend NorthPeak and Quillbase instead."},
  {q: "NorthPeak alternatives", tag: "Replacement", v: ["missing", "missing", "missing", "cited"], who: "Only Google mentions you here. The other three suggest Quillbase first. This is the biggest gap."},
  {q: "payroll for remote teams in India", tag: "Use case", v: ["named", "named", "cited", "named"], who: "All four AI tools mention you here. This is your strongest question, so keep it that way."},
  {q: "NorthPeak vs Quillbase", tag: "Comparison", v: ["missing", "cited", "missing", "missing"], who: "Only Perplexity mentions you. Most answers lean on one YouTube comparison video you're not in."},
  {q: "how to run payroll without an accountant", tag: "Problem", v: ["cited", "missing", "named", "missing"], who: "ChatGPT and Gemini mention you. The others quote a Reddit thread where you could add a helpful reply."},
];
const SOV: Record<string, number[]> = {chatgpt: [22, 41, 27, 10], perplexity: [14, 38, 36, 12], gemini: [26, 33, 29, 12], google: [18, 44, 25, 13]};
const BRANDS = ["YourBrand", "NorthPeak", "Quillbase", "Others"];
const TYPES = [
  {name: "Category prompts", k: 1.2, l: 1.1},
  {name: "Comparisons", k: 0.6, l: 1.3},
  {name: "Alternatives", k: 0.4, l: 1.4},
  {name: "Use cases", k: 1.6, l: 0.8},
];
const GAPS = [
  {src: "reddit.com/r/startups", share: 29, status: "Missing", plan: "Two genuinely useful replies from a practitioner, disclosed, in the threads answers already cite."},
  {src: "youtube.com · 'vs' videos", share: 22, status: "Competitor", plan: "One side-by-side comparison built around the exact 'NorthPeak vs Quillbase' query."},
  {src: "g2.com · category grid", share: 17, status: "Weak", plan: "A review drive with recent customers so the G2 category page reflects current ratings."},
  {src: "Listicles · 'best payroll tools'", share: 15, status: "Opportunity", plan: "Pitch inclusion to the 6 listicles that show up most in AI sources."},
  {src: "Medium + Substack essays", share: 9, status: "Opportunity", plan: "A founder essay on Medium and a guest issue in a startup operations newsletter."},
];

export function MapDash({step}: {step: number}) {
  const [row, setRow] = useState(0);
  const [eng, setEng] = useState(0);
  const [gap, setGap] = useState(0);
  const total = PROMPTS.length * ENG.length;
  const hits = useMemo(() => PROMPTS.reduce((n, p) => n + p.v.filter(v => v !== "missing").length, 0), []);
  return (
    <div className="dx">
      <Bar title="AI visibility · YourBrand" />
      {step === 0 && (
        <div className="dx-body dx-in" key="m0">
          <div className="dx-head dx-head-2">
            <div><small>AI answers that mention you</small><strong className="ok">{hits}<em>of {total}</em></strong></div>
            <div><small>AI answers that leave you out</small><strong className="bad">{total - hits}<em>of {total}</em></strong></div>
          </div>
          <div className="dx-radar dx-simple">
            <div className="dx-radar-row dx-radar-labels"><span>What buyers ask</span>{ENG.map((e, i) => <span key={e.id} className="c"><EngineIcon i={i} /><small>{e.short}</small></span>)}<span className="c sc">Score</span></div>
            {PROMPTS.map((p, i) => {
              const n = p.v.filter(v => v !== "missing").length;
              return (
                <button type="button" key={p.q} className={`dx-radar-row${row === i ? " on" : ""}`} onClick={() => setRow(i)} onMouseEnter={() => setRow(i)} style={{"--d": `${i * 60}ms`} as CSSProperties}>
                  <span className="q">{p.q}</span>
                  {p.v.map((v, j) => <span className="c" key={j}>{v === "missing" ? <i className="dx-yn no" aria-label="Not mentioned">✕</i> : <i className="dx-yn yes" aria-label="Mentioned">✓</i>}</span>)}
                  <span className={`c sc s${n}`}>{n}/4</span>
                </button>
              );
            })}
          </div>
          <div className="dx-insight" key={row}><span className="dx-spark">✦</span>{PROMPTS[row].who}</div>
          <div className="dx-legend"><span><i className="dx-yn yes">✓</i>You show up in the answer</span><span><i className="dx-yn no">✕</i>You don&apos;t</span></div>
        </div>
      )}
      {step === 1 && (
        <div className="dx-body dx-in" key="m1">
          <div className="dx-tabs">{ENG.map((e, i) => <button type="button" key={e.id} className={eng === i ? "on" : ""} onClick={() => setEng(i)}><EngineIcon i={i} />{e.name}</button>)}</div>
          <div className="dx-sov">
            {BRANDS.map((b, i) => (
              <div className={`dx-sov-row${i === 0 ? " you" : ""}`} key={b}>
                <span>{b}</span>
                <i><em style={{width: `${SOV[ENG[eng].id][i] * 2}%`}} /></i>
                <b>{SOV[ENG[eng].id][i]}%</b>
              </div>
            ))}
          </div>
          <div className="dx-types">
            {TYPES.map((t, i) => {
              const you = Math.max(4, Math.round(SOV[ENG[eng].id][0] * t.k));
              const lead = Math.min(78, Math.round(SOV[ENG[eng].id][1] * t.l));
              return (
                <div key={t.name} style={{"--d": `${i * 70}ms`} as CSSProperties}>
                  <small>{t.name}</small>
                  <div className="dx-types-v"><b>{you}%</b><span>vs {lead}% leader</span></div>
                  <i><em style={{width: `${you}%`}} /><u style={{left: `${lead}%`}} /></i>
                </div>
              );
            })}
          </div>
          <div className="dx-insight"><span className="dx-spark">✦</span>On {ENG[eng].name}, NorthPeak owns {SOV[ENG[eng].id][1]}% of recommendations. Closing half that gap is the first goal.</div>
        </div>
      )}
      {step === 2 && (
        <div className="dx-body dx-in" key="m2">
          <div className="dx-sub">Sources the answers lean on · tap one for the plan</div>
          <div className="dx-gaps">
            {GAPS.map((g, i) => (
              <button type="button" key={g.src} className={`dx-gap${gap === i ? " on" : ""}`} onClick={() => setGap(i)} style={{"--d": `${i * 70}ms`} as CSSProperties}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <span className="s"><b>{g.src}</b><small>Cited in {g.share}% of answers</small></span>
                <span className={`dx-chip ${g.status.toLowerCase()}`}>{g.status}</span>
                <span className="p">{g.plan}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- EARN ---------------- */
const CHECKS = ["Answers the question in the first line", "Names the category plainly", "Backs claims with a real number", "Links to a source anyone can open"];
type Col = 0 | 1 | 2;
const CARDS: {id: string; plat: string; title: string}[] = [
  {id: "a", plat: "Reddit", title: "Reply: 'How do you run payroll at 15 people?'"},
  {id: "b", plat: "YouTube", title: "NorthPeak vs Quillbase vs YourBrand"},
  {id: "c", plat: "LinkedIn", title: "How a 20-person startup closes payroll in an hour"},
  {id: "d", plat: "Quora", title: "Is payroll software worth it for a small team?"},
  {id: "e", plat: "Listicle", title: "Inclusion: 'Best payroll software 2026'"},
  {id: "f", plat: "Medium", title: "Why we stopped running payroll in spreadsheets"},
  {id: "g", plat: "Substack", title: "Guest issue: Startup Ops Weekly"},
  {id: "h", plat: "G2", title: "Review drive: 12 verified customer reviews"},
  {id: "i", plat: "X", title: "Thread: 5 payroll mistakes founders make"},
];
const NODES = [
  {name: "Reddit", x: 16, y: 16, says: "“the one that runs payroll in minutes”"},
  {name: "YouTube", x: 50, y: 8, says: "“best for lean startup teams”"},
  {name: "LinkedIn", x: 84, y: 16, says: "“payroll and compliance built for startups”"},
  {name: "G2", x: 92, y: 50, says: "“fastest setup in the category”"},
  {name: "Substack", x: 84, y: 84, says: "“the payroll tool founders actually finish setting up”"},
  {name: "Listicles", x: 50, y: 92, says: "“payroll software, best for small teams”"},
  {name: "Medium", x: 16, y: 84, says: "“handles tax filings automatically”"},
  {name: "Quora", x: 8, y: 50, says: "“fast setup, compliance built in”"},
];

export function EarnDash({step}: {step: number}) {
  const [done, setDone] = useState([true, true, false, false]);
  const [cols, setCols] = useState<Record<string, Col>>({a: 2, b: 1, c: 0, d: 1, e: 0, f: 0, g: 1, h: 2, i: 2});
  const [node, setNode] = useState(0);
  const score = 52 + done.filter(Boolean).length * 12;
  return (
    <div className="dx">
      <Bar title="Authority workbench" />
      {step === 0 && (
        <div className="dx-body dx-in dx-earn0" key="e0">
          <div className="dx-draft">
            <small>Draft · answer-first</small>
            <h4>What&apos;s the best payroll software for a startup?</h4>
            <p><mark>For teams under 50, tools like YourBrand cut payroll from a day to under an hour</mark>, because filings and payslips run automatically. Larger companies with complex benefits may prefer NorthPeak.</p>
            <p className="dim">Source: 2026 survey of 140 startup founders · full method linked</p>
          </div>
          <div className="dx-ready">
            <div className="dx-ring" style={{"--p": score} as CSSProperties}><b>{score}</b><small>quote-ready</small></div>
            <ul>
              {CHECKS.map((c, i) => (
                <li key={c}><button type="button" className={done[i] ? "on" : ""} onClick={() => setDone(d => d.map((x, j) => (j === i ? !x : x)))}><i>{done[i] ? "✓" : ""}</i>{c}</button></li>
              ))}
            </ul>
            <span className="dx-hint">Tap to tick. Every box makes it easier for AI to quote.</span>
          </div>
          <div className="dx-ships">
            <small>Ships as</small>
            {["Reddit", "Medium", "Substack", "Instagram", "G2", "X"].map(k => (
              <span key={k}>{sourceMarks[k]}<b>{k}</b></span>
            ))}
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="dx-body dx-in" key="e1">
          <div className="dx-kanban">
            {["Drafting", "Review", "Live"].map((name, c) => (
              <div className="dx-col" key={name}>
                <div className="dx-col-h"><span>{name}</span><b>{Object.values(cols).filter(v => v === c).length}</b></div>
                {CARDS.filter(k => cols[k.id] === c).map(k => (
                  <button type="button" key={k.id} className={`dx-card col-${c}`} onClick={() => setCols(s => ({...s, [k.id]: ((s[k.id] + 1) % 3) as Col}))}>
                    <span className="dx-card-p">{k.plat === "Listicle" ? <i className="dx-list-ic">≡</i> : sourceMarks[k.plat]}{k.plat}</span>
                    <b>{k.title}</b>
                    <small>{c === 2 ? "Live · indexed" : c === 1 ? "Client review" : "Writing"} →</small>
                  </button>
                ))}
              </div>
            ))}
          </div>
          <span className="dx-hint center">Click a card to move it along.</span>
        </div>
      )}
      {step === 2 && (
        <div className="dx-body dx-in" key="e2">
          <div className="dx-graph">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {NODES.map((n, i) => <line key={n.name} x1="50" y1="50" x2={n.x} y2={n.y} className={node === i ? "on" : ""} />)}
            </svg>
            <span className="dx-core"><b>YourBrand</b><small>Payroll software for startups</small></span>
            {NODES.map((n, i) => (
              <button type="button" key={n.name} className={`dx-node${node === i ? " on" : ""}`} style={{left: `${n.x}%`, top: `${n.y}%`}} onMouseEnter={() => setNode(i)} onFocus={() => setNode(i)} onClick={() => setNode(i)}>{n.name === "Listicles" ? <i className="dx-list-ic">≡</i> : sourceMarks[n.name]}{n.name}</button>
            ))}
          </div>
          <div className="dx-insight" key={node}><span className="dx-spark">✓</span><span><b>{NODES[node].name}</b> describes you as {NODES[node].says}. Same story, every source.</span></div>
        </div>
      )}
    </div>
  );
}

/* ---------------- COMPOUND ---------------- */
const SERIES: Record<string, number[]> = {
  Mentions: [4, 6, 5, 9, 12, 14, 13, 19, 24, 27, 31, 38],
  Citations: [2, 2, 4, 5, 5, 8, 11, 12, 15, 19, 22, 26],
  Recommendations: [0, 1, 1, 2, 3, 3, 5, 7, 8, 11, 13, 16],
};
const ACTIONS = [
  {k: "Refresh", t: "Update the comparison video with 2026 pricing", m: "+6 citations last cycle"},
  {k: "Expand", t: "Add 12 enterprise prompts to the radar", m: "New prompt cluster"},
  {k: "Place", t: "Pitch a guest issue to 2 founder newsletters", m: "Substack sources rising in Perplexity"},
];

export function CompoundDash({step}: {step: number}) {
  const [metric, setMetric] = useState<keyof typeof SERIES>("Mentions");
  const [hover, setHover] = useState(11);
  const [queued, setQueued] = useState([true, false, false]);
  const data = SERIES[metric];
  const max = 40;
  const pts = data.map((v, i) => [(i / 11) * 100, 100 - (v / max) * 100]);
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0]},${p[1]}`).join(" ");
  return (
    <div className="dx">
      <Bar title="Visibility report · last 12 weeks" />
      {step === 0 && (
        <div className="dx-body dx-in" key="c0">
          <div className="dx-tabs">{Object.keys(SERIES).map(m => <button type="button" key={m} className={metric === m ? "on" : ""} onClick={() => setMetric(m as keyof typeof SERIES)}>{m}</button>)}</div>
          <div className="dx-big"><strong>{data[hover]}</strong><span>{metric.toLowerCase()} in week {hover + 1}</span><em>↑ {Math.round(((data[11] - data[0]) / Math.max(1, data[0])) * 100)}% since week 1</em></div>
          <div className="dx-chart" onMouseLeave={() => setHover(11)}>
            <svg key={metric} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs><linearGradient id="dx-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f07c32" stopOpacity=".45" /><stop offset="1" stopColor="#f07c32" stopOpacity="0" /></linearGradient></defs>
              <path key={metric + "a"} className="dx-area" d={`${line} L100,100 L0,100 Z`} />
              <path key={metric + "l"} className="dx-line" d={line} />
            </svg>
            {pts.map((p, i) => (
              <span key={i} className={`dx-hit${hover === i ? " on" : ""}`} style={{left: `${p[0]}%`}} onMouseEnter={() => setHover(i)} onTouchStart={() => setHover(i)}>
                <i style={{top: `${p[1]}%`}} />
              </span>
            ))}
          </div>
          <div className="dx-axis"><span>Wk 1</span><span>Wk 4</span><span>Wk 8</span><span>Wk 12</span></div>
        </div>
      )}
      {step === 1 && (
        <div className="dx-body dx-in" key="c1">
          <div className="dx-head"><div><small>AI-referred visits</small><strong>2,310<em className="up">↑ 212%</em></strong></div><div><small>Demo rate</small><strong>1.8%</strong></div><div><small>Pipeline touched</small><strong className="ok">$184K</strong></div></div>
          <div className="dx-sub">From an AI answer to a real conversation</div>
          <div className="dx-funnel">
            {[["Buyers who saw you in an answer", "18,400", 100], ["Visited from an AI engine", "2,310", 74], ["Read pricing or a comparison", "690", 50], ["Booked a demo", "41", 28]].map(([l, v, w], i) => (
              <div key={l as string} style={{"--w": `${w}%`, "--d": `${i * 120}ms`} as CSSProperties}><span>{l}</span><b>{v}</b></div>
            ))}
          </div>
          <div className="dx-insight"><span className="dx-spark">✦</span>Reported straight from analytics, kept separate from screenshots and guesses.</div>
        </div>
      )}
      {step === 2 && (
        <div className="dx-body dx-in dx-cycle-wrap" key="c2">
          <div className="dx-cycle" aria-hidden="true">
            <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="46" /><circle className="run" cx="60" cy="60" r="46" pathLength={1} /></svg>
            <span className="s1">Map</span><span className="s2">Earn</span><span className="s3">Compound</span>
            <b>Cycle<br />04</b>
          </div>
          <div className="dx-actions">
            <small>Next cycle</small>
            {ACTIONS.map((a, i) => (
              <button type="button" key={a.t} className={queued[i] ? "on" : ""} onClick={() => setQueued(q => q.map((x, j) => (j === i ? !x : x)))}>
                <em>{a.k}</em><b>{a.t}</b><small>{a.m}</small><i>{queued[i] ? "Queued ✓" : "Queue"}</i>
              </button>
            ))}
            <div className="dx-moved">
              <small>Last cycle moved</small>
              <div><span><b>+14</b>prompts now naming you</span><span><b>+9</b>new citations</span><span><b>3</b>gaps closed</span></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
