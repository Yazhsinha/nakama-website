"use client";
import {useEffect, useRef, useState, type ReactNode} from "react";
import {Check, Copy, Mail, X} from "lucide-react";
import "./book-call.css";

export const CONTACT_EMAIL = "contact@nakama.in";
const CAL = "https://cal.com/snehil-srivastava-4jm7sq";
const EVENT = "book-call";

/** Opens the on-site booking sheet. Visitors never leave nakama. */
export type BookCallOptions = {len?: "15min" | "30min"; name?: string; email?: string; notes?: string};
export function openBookCall(opts?: BookCallOptions) {
  window.dispatchEvent(new CustomEvent<BookCallOptions | undefined>(EVENT, {detail: opts}));
}

export function BookCallButton({children, className = "", ariaLabel}: {children: ReactNode; className?: string; ariaLabel?: string}) {
  return (
    <button type="button" className={className} aria-label={ariaLabel} aria-haspopup="dialog" onClick={() => openBookCall()}>
      {children}
    </button>
  );
}

export function EmailLink({className = ""}: {className?: string}) {
  return <a className={className} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
}

export function BookCallModal() {
  const ref = useRef<HTMLDialogElement>(null);
  const [opened, setOpened] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [len, setLen] = useState<"15min" | "30min">("30min");
  const [prefill, setPrefill] = useState<BookCallOptions>({});

  useEffect(() => {
    const open = (e?: Event) => {
      const d0 = (e as CustomEvent<BookCallOptions | undefined> | undefined)?.detail;
      if (d0 && typeof d0 === "object" && "len" in d0) {
        setPrefill({name: d0.name, email: d0.email, notes: d0.notes});
        if (d0.len) {setLen(d0.len); setLoaded(false);}
      }
      setOpened(true);
      const d = ref.current;
      if (d && !d.open) d.showModal();
      document.documentElement.classList.add("bc-lock");
    };
    window.addEventListener(EVENT, open);
    // Any leftover link to the booking page also opens the sheet instead of leaving the site.
    const intercept = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (a && /cal\.com\/snehil-srivastava/.test(a.href)) {e.preventDefault(); open();}
    };
    document.addEventListener("click", intercept, true);
    if (location.hash === "#book") open();
    return () => {window.removeEventListener(EVENT, open); document.removeEventListener("click", intercept, true);};
  }, []);

  const close = () => {ref.current?.close();};
  const copy = async () => {
    try {await navigator.clipboard.writeText(CONTACT_EMAIL); setCopied(true); setTimeout(() => setCopied(false), 1600);} catch {}
  };

  return (
    <dialog
      ref={ref}
      className="bc"
      aria-labelledby="bc-title"
      onClose={() => document.documentElement.classList.remove("bc-lock")}
      onClick={e => {if (e.target === ref.current) close();}}
    >
      <div className="bc-sheet">
        <aside className="bc-side">
          <span className="bc-eyebrow">Book a call</span>
          <p id="bc-title" className="bc-title">Let’s map where your brand<span> shows up next.</span></p>
          <div className="bc-len" role="radiogroup" aria-label="Call length">
            {(["30min", "15min"] as const).map(v => (
              <button key={v} type="button" role="radio" aria-checked={len === v} onClick={() => {if (v !== len) {setLen(v); setLoaded(false);}}}>
                <b>{v === "30min" ? "30 min" : "15 min"}</b><small>{v === "30min" ? "Full walkthrough" : "Quick intro"}</small>
              </button>
            ))}
          </div>
          <ul>
            <li><Check size={15} />Video call, link sent by email</li>
            <li><Check size={15} />Where you appear in AI answers today</li>
            <li><Check size={15} />A clear first move, no obligation</li>
          </ul>
          <div className="bc-mail">
            <small>Prefer email?</small>
            <div>
              <a href={`mailto:${CONTACT_EMAIL}`}><Mail size={15} />{CONTACT_EMAIL}</a>
              <button type="button" onClick={copy} aria-label="Copy email address">{copied ? <Check size={14} /> : <Copy size={14} />}</button>
            </div>
          </div>
        </aside>
        <div className="bc-cal">
          {!loaded && <div className="bc-loading"><i /><span>Loading available times…</span></div>}
          {opened && (
            <iframe
              title="Book a call with Nakama"
              key={len}
              src={`${CAL}/${len}?embed=true&theme=dark&layout=month_view${prefill.name ? `&name=${encodeURIComponent(prefill.name)}` : ""}${prefill.email ? `&email=${encodeURIComponent(prefill.email)}` : ""}${prefill.notes ? `&notes=${encodeURIComponent(prefill.notes)}` : ""}`}
              onLoad={() => setLoaded(true)}
              allow="payment"
            />
          )}
        </div>
        <button type="button" className="bc-close" onClick={close} aria-label="Close booking"><X size={18} /></button>
      </div>
    </dialog>
  );
}

