import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Mail, Linkedin, Globe, Clock, Send, CheckCircle2, Calendar, MessageSquare } from "lucide-react";
import { Pill } from "@/components/ui-bits";
import { Reveal } from "@/components/Reveal";

type Interest = "diagnostic" | "system-building" | "fractional" | "";

const INTEREST_MAP: Record<Exclude<Interest, "">, { label: string; pill: string }> = {
  "diagnostic": { label: "Diagnostic", pill: "Diagnostic" },
  "system-building": { label: "System Building", pill: "System Building" },
  "fractional": { label: "Fractional CRO", pill: "Trial Sprint" },
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vonerio" },
      { name: "description", content: "Tell me about your team and pipeline. I'll reply personally usually within 1 business day." },
      { property: "og:title", content: "Contact Vonerio" },
      { property: "og:description", content: "Reach Loïc Caudan directly. Founding Cohort enquiries are prioritized." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [interest, setInterest] = useState<Interest>("");
  const [tab, setTab] = useState<"book" | "message">("book");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const raw = (params.get("interest") || "").toLowerCase();
    if (raw === "diagnostic" || raw === "system-building" || raw === "fractional") {
      setInterest(raw);
    }
  }, []);

  const pill = interest ? INTEREST_MAP[interest].pill : null;

  return (
    <>
      {/* Hero */}
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <Pill>Contact</Pill>
          <h1 className="text-hero mt-6 max-w-4xl">Tell me about your team and pipeline.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I'll reply personally and point you to the right starting point, usually a Diagnostic or a 6-week Trial Sprint. Founding Cohort spots are limited.
          </p>
          {pill && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-violet)]/30 bg-[var(--color-violet)]/10 px-3 py-1.5 text-xs font-medium text-[var(--color-violet)] dark:border-[var(--color-magenta)]/40 dark:bg-[var(--color-magenta)]/10 dark:text-[var(--color-magenta)]">
              Starting point: {pill}
            </div>
          )}
        </Reveal>
      </section>

      {/* Start the conversation */}
      <section className="container-page pb-16 md:pb-24">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            Start the conversation
          </h2>
          <div
            role="tablist"
            aria-label="Contact methods"
            className="mt-6 inline-flex rounded-full border border-border bg-card p-1"
          >
            <TabButton active={tab === "book"} onClick={() => setTab("book")} icon={Calendar}>
              Book a call
            </TabButton>
            <TabButton active={tab === "message"} onClick={() => setTab("message")} icon={MessageSquare}>
              Send a message
            </TabButton>
          </div>
        </Reveal>

        <div className="mt-8">
          {tab === "book" ? (
            <Reveal>
              <p className="mb-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                The fastest way to start. Pick a time, we talk for 20 minutes, and I point you to the right first step.
              </p>
              <SchedulingWidget />
            </Reveal>
          ) : (
            <Reveal>
              <p className="mb-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Prefer async? Tell me about your team and I'll reply within 1 business day.
              </p>
              <MessageForm interest={interest} onSwitchToBook={() => setTab("book")} />
            </Reveal>
          )}
        </div>
      </section>

      {/* Supporting details strip */}
      <section className="container-page pb-24 md:pb-32">
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-7">
            <div className="grid gap-6 md:grid-cols-4">
              <DetailItem icon={Mail} title="Email">
                <a href="mailto:loic.caudan@vonerio.com" className="text-[var(--color-violet)] hover:underline dark:text-[var(--color-magenta)]">
                  loic.caudan@vonerio.com
                </a>
              </DetailItem>
              <DetailItem icon={Linkedin} title="LinkedIn">
                <a href="https://www.linkedin.com/in/lcaudan/" target="_blank" rel="noreferrer" className="text-[var(--color-violet)] hover:underline dark:text-[var(--color-magenta)]">
                  Connect with Loïc Caudan
                </a>
              </DetailItem>
              <DetailItem icon={Globe} title="Where I work">
                Remotely across APAC &amp; EMEA. Fluent in English, French, Spanish &amp; Portuguese; Bahasa Indonesia ongoing.
              </DetailItem>
              <DetailItem icon={Clock} title="Response time">
                Within 1 business day. Founding Cohort enquiries prioritized.
              </DetailItem>
            </div>
            <div className="mt-6 border-t border-border pt-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-tangerine)]/10 px-3 py-1 text-xs font-medium text-[var(--color-tangerine)]">
                Founding Cohort · −20%
              </span>
              <span className="ml-3 text-xs text-muted-foreground">
                The first five clients get -20% on flagship engagements, in exchange for a reference once the work pays off.
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function TabButton({
  active,
  onClick,
  icon: Icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Calendar;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
        active
          ? "bg-[var(--color-violet)] text-white shadow-[0_8px_24px_-12px_rgba(123,63,228,0.7)] dark:bg-[var(--color-magenta)]"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <Icon className="h-4 w-4" />
      {children}
    </button>
  );
}

function DetailItem({ icon: Icon, title, children }: { icon: typeof Mail; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-mist)] text-[var(--color-violet)] dark:bg-[var(--color-violet)]/20 dark:text-[var(--color-magenta)]">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <div className="text-eyebrow">{title}</div>
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

function MessageForm({ interest, onSwitchToBook }: { interest: Interest; onSwitchToBook: () => void }) {
  const initialInterest = useMemo(() => (interest ? INTEREST_MAP[interest].label : ""), [interest]);
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: initialInterest,
    message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Sync interest from URL param after mount.
  useEffect(() => {
    if (initialInterest && !values.interest) {
      setValues((v) => ({ ...v, interest: initialInterest }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialInterest]);

  const errors = {
    name: !values.name.trim() ? "Please enter your full name." : "",
    email: !values.email.trim()
      ? "Please enter your work email."
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
        ? "Please enter a valid email address."
        : "",
    interest: !values.interest ? "Please pick one." : "",
    message: !values.message.trim() ? "Tell me what you're trying to fix." : "",
  };
  const isValid = !errors.name && !errors.email && !errors.interest && !errors.message;

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));
  const blur = (k: string) => () => setTouched((t) => ({ ...t, [k]: true }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, interest: true, message: true });
    if (!isValid || status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("https://formsubmit.co/ajax/loic.caudan@vonerio.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New Vonerio enquiry from the website",
          _template: "table",
          _captcha: "false",
          name: values.name,
          email: values.email,
          company: values.company,
          phone: values.phone,
          interest: values.interest,
          message: values.message,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("success");
      try {
        const m = await import("@/lib/analytics");
        m.track("contact_form_submit");
      } catch { /* noop */ }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-7 md:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 text-[var(--color-violet)] dark:text-[var(--color-magenta)]" />
          <div>
            <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>Got it.</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              I'll reply personally within 1 business day. Want to skip the wait?{" "}
              <button
                type="button"
                onClick={onSwitchToBook}
                className="font-medium text-[var(--color-violet)] underline underline-offset-4 hover:opacity-80 dark:text-[var(--color-magenta)]"
              >
                Book a call
              </button>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-7 md:p-8">
      <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>Send a message</h3>
      <div className="mt-5 grid gap-5">
        <TextField label="Full name" name="name" required value={values.name} onChange={set("name")} onBlur={blur("name")} error={touched.name ? errors.name : ""} />
        <TextField label="Work email" name="email" type="email" required value={values.email} onChange={set("email")} onBlur={blur("email")} error={touched.email ? errors.email : ""} />
        <TextField label="Company" name="company" value={values.company} onChange={set("company")} onBlur={blur("company")} optional />
        <div>
          <Label htmlFor="phone">
            Contact number <span className="font-normal text-muted-foreground">(WhatsApp or Telegram preferred, include country prefix)</span>
          </Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="e.g. +33 6 12 34 56 78"
            value={values.phone}
            onChange={set("phone")}
            className={inputCls}
          />
        </div>
        <div>
          <Label htmlFor="interest" required>I'm interested in</Label>
          <select
            id="interest"
            name="interest"
            required
            value={values.interest}
            onChange={set("interest")}
            onBlur={blur("interest")}
            className={inputCls}
          >
            <option value="">Select an option…</option>
            <option>Diagnostic</option>
            <option>System Building</option>
            <option>Fractional CRO</option>
            <option>Not sure yet, help me choose</option>
          </select>
          {touched.interest && errors.interest && <ErrorText>{errors.interest}</ErrorText>}
        </div>
        <div>
          <Label htmlFor="message" required>What are you trying to fix?</Label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={set("message")}
            onBlur={blur("message")}
            placeholder="A short note on your team, pipeline and where it's stuck."
            className={inputCls}
          />
          {touched.message && errors.message && <ErrorText>{errors.message}</ErrorText>}
        </div>

        {status === "error" && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
            Something went wrong. Email me directly at{" "}
            <a href="mailto:loic.caudan@vonerio.com" className="font-medium underline underline-offset-4">loic.caudan@vonerio.com</a>.
          </div>
        )}

        <button
          type="submit"
          disabled={!isValid || status === "submitting"}
          data-track="contact_form_submit"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-violet)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_28px_-12px_rgba(123,63,228,0.7)] transition hover:bg-[var(--color-royal)] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-violet)] focus-visible:ring-offset-2 dark:bg-[var(--color-magenta)] dark:hover:bg-[var(--color-violet)]"
        >
          <Send className="h-4 w-4" />
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition placeholder:text-muted-foreground focus:border-[var(--color-violet)] focus:outline-none focus:ring-2 focus:ring-[var(--color-violet)]/30";

function Label({ children, htmlFor, required }: { children: React.ReactNode; htmlFor: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-foreground">
      {children}
      {required && <span aria-hidden className="ml-0.5 text-[var(--color-violet)] dark:text-[var(--color-magenta)]"> *</span>}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs text-destructive">{children}</p>;
}

function TextField({
  label, name, type = "text", required, optional, value, onChange, onBlur, error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  error?: string;
}) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
        {optional && <span className="ml-1 font-normal text-muted-foreground">(optional)</span>}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!!error}
        className={inputCls}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function SchedulingWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("calendly-embed-script")) return;
    const s = document.createElement("script");
    s.id = "calendly-embed-script";
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
  return (
    <div
      className="rounded-2xl border border-border bg-card p-7 md:p-8"
      onClick={() => {
        import("@/lib/analytics").then((m) => m.track("scheduling_booking_click"));
      }}
    >
      <div className="mb-4 flex items-center gap-3">
        <Calendar className="h-5 w-5 text-[var(--color-violet)] dark:text-[var(--color-magenta)]" />
        <h3 className="text-lg font-medium text-foreground">Book a 20-min scoping call</h3>
      </div>
      <div
        className="calendly-inline-widget min-h-[700px] overflow-hidden rounded-xl"
        data-url="https://calendly.com/vonerio-caudan/20min?hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}
