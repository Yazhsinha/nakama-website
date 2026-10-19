"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import "./sequence.css";
import { MapDash, EarnDash, CompoundDash } from "./dashboards";

const SCRUB = 720;
const STAGE_INSET = 88;
const SNAP_IDLE = 420;

const ROWS = [
  {
    id: "map",
    eyebrow: "Map",
    heading: "Find the gaps",
    intro:
      "We run the questions your buyers ask through ChatGPT, Perplexity, Gemini and Google, and log who gets recommended.",
    steps: [
      {title: "Collect the real buyer prompts", body: "Category, comparison, 'alternative to' and use-case questions, written the way buyers actually type them."},
      {title: "Score who gets named", body: "Every prompt on every engine: named, cited, or missing while a competitor takes the slot."},
      {title: "Trace the sources behind it", body: "The threads, videos and articles the answers lean on, so we know exactly where to show up."},
    ],
  },
  {
    id: "earn",
    eyebrow: "Earn",
    heading: "Fill them",
    intro:
      "We write what is missing and publish it on the pages those answers already pull from.",
    steps: [
      {title: "Draft answers worth quoting", body: "Direct, specific, evidence-backed content a model can lift cleanly into an answer."},
      {title: "Place them off-site", body: "Each piece is rewritten for the platform it lands on, never pasted across."},
      {title: "Keep the story consistent", body: "Same category, same strengths, same proof everywhere, so every model describes you the same way."},
    ],
  },
  {
    id: "compound",
    eyebrow: "Compound",
    heading: "Let it compound",
    intro:
      "Placements keep working long after they go live. We watch which ones move the answers and build on those.",
    steps: [
      {title: "Track mentions weekly", body: "Named, cited or missing, per question and per engine, every week."},
      {title: "Tie it to real demand", body: "AI-referred visits, demo requests and the deals they touch, straight from your analytics."},
      {title: "Reinforce what works", body: "Refresh winning sources, close new gaps, and expand into the next set of prompts."},
    ],
  },
] as const;

function DragFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, x: 0, y: 0, dx: 0, dy: 0 });
  const [moved, setMoved] = useState(false);

  const setPosition = useCallback((dx: number, dy: number) => {
    drag.current.dx = dx;
    drag.current.dy = dy;
    frameRef.current?.style.setProperty("--drag-x", `${dx}px`);
    frameRef.current?.style.setProperty("--drag-y", `${dy}px`);
  }, []);

  const pointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0 || matchMedia("(max-width: 1199px), (pointer: coarse), (hover: none)").matches) return;
    if ((event.target as HTMLElement).closest("button,input,a,select,textarea")) return;
    drag.current.active = true;
    drag.current.x = event.clientX;
    drag.current.y = event.clientY;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add("dragging");
  };

  const pointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const nextX = Math.max(-90, Math.min(90, drag.current.dx + event.clientX - drag.current.x));
    const nextY = Math.max(-65, Math.min(65, drag.current.dy + event.clientY - drag.current.y));
    drag.current.x = event.clientX;
    drag.current.y = event.clientY;
    setPosition(nextX, nextY);
    setMoved(true);
  };

  const pointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    drag.current.active = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    event.currentTarget.classList.remove("dragging");
  };

  return (
    <>
      <div
        ref={frameRef}
        className={`visibility-frame ${className}`}
        onPointerDown={pointerDown}
        onPointerMove={pointerMove}
        onPointerUp={pointerUp}
        onPointerCancel={pointerUp}
      >
        {children}
      </div>
      <button
        className={`visibility-reset${moved ? " visible" : ""}`}
        type="button"
        onClick={() => {
          setPosition(0, 0);
          setMoved(false);
        }}
      >
        ↺ Reset
      </button>
    </>
  );
}

function MapPrototype({ step }: { step: number }) {
  return <DragFrame className="dx-frame"><MapDash step={step} /></DragFrame>;
}
function EarnPrototype({ step }: { step: number }) {
  return <DragFrame className="dx-frame"><EarnDash step={step} /></DragFrame>;
}
function CompoundPrototype({ step }: { step: number }) {
  return <DragFrame className="dx-frame"><CompoundDash step={step} /></DragFrame>;
}

const PROTOTYPES = [MapPrototype, EarnPrototype, CompoundPrototype];

export function SequenceShowcase() {
  const rootRef = useRef<HTMLElement>(null);
  const stageInnerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLElement | null)[]>([]);
  const headRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const [compact, setCompact] = useState(false);
  const [activeRow, setActiveRow] = useState(0);
  const [steps, setSteps] = useState([0, 0, 0]);
  const activeRowRef = useRef(0);
  const stepsRef = useRef([0, 0, 0]);
  const snapTimer = useRef<number | null>(null);
  const snapping = useRef(false);

  useLayoutEffect(() => {
    const media = matchMedia("(max-width: 1199px), (pointer: coarse), (hover: none)");
    const layout = () => {
      const isCompact = media.matches;
      setCompact(isCompact);
      if (!isCompact && stageInnerRef.current && rootRef.current) {
        rootRef.current.style.setProperty("--visibility-stage-h", `${stageInnerRef.current.clientHeight}px`);
      }
    };
    layout();
    media.addEventListener("change", layout);
    const resize = new ResizeObserver(layout);
    if (stageInnerRef.current) resize.observe(stageInnerRef.current);
    return () => {
      media.removeEventListener("change", layout);
      resize.disconnect();
    };
  }, []);

  useEffect(() => {
    if (compact) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      if (snapping.current) return;
      const nextSteps = [...stepsRef.current];
      rowRefs.current.forEach((section, row) => {
        if (!section) return;
        const progress = Math.min(0.9999, Math.max(0, -section.getBoundingClientRect().top / SCRUB));
        nextSteps[row] = Math.min(2, Math.floor(progress * 3 + 1e-6));
      });
      if (nextSteps.some((value, i) => value !== stepsRef.current[i])) {
        stepsRef.current = nextSteps;
        setSteps(nextSteps);
      }

      let focused = activeRowRef.current;
      let head = headRefs.current[focused]?.getBoundingClientRect();
      while (focused < ROWS.length - 1 && head && head.bottom <= STAGE_INSET) {
        focused += 1;
        head = headRefs.current[focused]?.getBoundingClientRect();
      }
      while (focused > 0 && head && head.top >= innerHeight) {
        focused -= 1;
        head = headRefs.current[focused]?.getBoundingClientRect();
      }
      if (focused !== activeRowRef.current) {
        activeRowRef.current = focused;
        setActiveRow(focused);
      }
    };

    const settle = () => {
      if (snapping.current || matchMedia("(prefers-reduced-motion: reduce)").matches || matchMedia("(pointer: coarse)").matches) return;
      const root = rootRef.current;
      if (!root) return;
      const rootTop = root.getBoundingClientRect().top + scrollY;
      const rootBottom = rootTop + root.offsetHeight;
      if (scrollY < rootTop - innerHeight || scrollY > rootBottom) return;

      const targets: number[] = [];
      rowRefs.current.forEach((section) => {
        if (!section) return;
        const top = section.getBoundingClientRect().top + scrollY;
        for (let i = 0; i < 3; i += 1) targets.push(top + i * (SCRUB / 3));
      });
      const target = targets.reduce((best, value) =>
        Math.abs(value - scrollY) < Math.abs(best - scrollY) ? value : best,
      );
      if (Math.abs(target - scrollY) < 10 || Math.abs(target - scrollY) > 150) return;
      snapping.current = true;
      scrollTo({ top: target, behavior: "smooth" });
      window.setTimeout(() => {
        snapping.current = false;
      }, 550);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
      if (snapTimer.current) clearTimeout(snapTimer.current);
      snapTimer.current = window.setTimeout(settle, SNAP_IDLE);
    };
    const interrupt = () => {
      snapping.current = false;
      if (snapTimer.current) clearTimeout(snapTimer.current);
    };

    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    addEventListener("wheel", interrupt, { passive: true });
    addEventListener("touchstart", interrupt, { passive: true });
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      removeEventListener("wheel", interrupt);
      removeEventListener("touchstart", interrupt);
      if (raf) cancelAnimationFrame(raf);
      if (snapTimer.current) clearTimeout(snapTimer.current);
    };
  }, [compact]);

  const choose = useCallback(
    (row: number, step: number) => {
      const next = [...stepsRef.current];
      next[row] = step;
      stepsRef.current = next;
      setSteps(next);
      activeRowRef.current = row;
      setActiveRow(row);
      if (compact) return;
      const section = rowRefs.current[row];
      if (!section) return;
      const top = section.getBoundingClientRect().top + scrollY;
      snapping.current = true;
      // Browser smooth-scrolls can settle a few pixels short. Bias into the
      // intended band and hold the authored state until the glide is complete.
      scrollTo({ top: top + step * (SCRUB / 3) + 18, behavior: "smooth" });
      window.setTimeout(() => {
        snapping.current = false;
      }, 1800);
    },
    [compact],
  );

  return (
    <section id="how" ref={rootRef} className={`visibility-how${compact ? " is-compact" : ""}`}>
      <div className="visibility-layout">
        <div className="visibility-rails">
          {ROWS.map((row, rowIndex) => {
            const Prototype = PROTOTYPES[rowIndex];
            return (
              <section
                className={`visibility-row${activeRow === rowIndex ? " focused" : ""}`}
                key={row.id}
                ref={(node) => { rowRefs.current[rowIndex] = node; }}
              >
                <div className="visibility-row-sticky">
                  <div className="visibility-row-inner">
                    <div className="visibility-rail">
                      <div className="visibility-copy">
                        <div className="visibility-eyebrow"><i />{row.eyebrow}</div>
                        <h2 ref={(node) => { headRefs.current[rowIndex] = node; }}>{row.heading}</h2>
                        <p>{row.intro}</p>
                      </div>
                      {compact && (
                        <div className="visibility-compact-panel">
                          <div className="visibility-panel-glow" />
                          <Prototype step={steps[rowIndex]} />
                        </div>
                      )}
                      <div className="visibility-steps" role="group" aria-label={`${row.eyebrow} steps`}>
                        {row.steps.map((step, stepIndex) => (
                          <button
                            type="button"
                            aria-pressed={steps[rowIndex] === stepIndex}
                            className={`visibility-step${steps[rowIndex] === stepIndex ? " active" : ""}`}
                            onClick={() => choose(rowIndex, stepIndex)}
                            key={step.title}
                          >
                            <i className="visibility-progress" />
                            <strong>{step.title}</strong>
                            <span>{step.body}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <aside className="visibility-stage" aria-label="Nakama AI visibility workflow">
          <div className="visibility-stage-inner" ref={stageInnerRef}>
            {ROWS.map((row, rowIndex) => {
              const Prototype = PROTOTYPES[rowIndex];
              return (
                <div
                  className={`visibility-panel${activeRow === rowIndex ? " active" : ""}`}
                  aria-hidden={activeRow !== rowIndex}
                  key={row.id}
                >
                  <div className="visibility-panel-glow" />
                  <div className="visibility-panel-grain" />
                  <Prototype step={steps[rowIndex]} />
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}