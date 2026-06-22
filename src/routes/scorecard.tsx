import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { Pill, CTAButton } from "@/components/ui-bits";
import { Reveal } from "@/components/Reveal";
import { track } from "@/lib/analytics";

export const Route = createFileRoute("/scorecard")({
  head: () => ({
    meta: [
      { title: "Sales Readiness Scorecard, Vonerio" },
      { name: "description", content: "Twelve questions, three minutes. Score your team across the four readiness pillars and get a recommended starting point." },
      { property: "og:title", content: "How ready is your sales organization for scale, and for AI?" },
      { property: "og:description", content: "Twelve questions, three minutes. Get a score across the four readiness pillars and a recommended next step." },
      { property: "og:url", content: "/scorecard" },
    ],
    links: [{ rel: "canonical", href: "/scorecard" }],
  }),
  component: Scorecard,
});

type Pillar = { name: string; questions: string[] };

const PILLARS: Pillar[] = [
  {
    name: "Own Your Territory",
    questions: [
      "We have a written, agreed ICP that both sales and marketing use (Who · Revenue · Stage / funding · Headcount / team size · Primary verticals · Economic buyer · Why-now trigger · Geography · Walk away from).",
      "Our accounts are tiered (e.g. strategic / high-potential / broad) with a clear rule for what goes where.",
      "Each priority account has a documented growth or pursuit plan.",
    ],
  },
  {
    name: "Full Offering Expertise",
    questions: [
      "We have documented our Unique Value Proposition (UVP) and positioning, tailored by persona or vertical.",
      "We have battle cards: why we win, where we lose, and how to handle the top objections.",
      "We have defined entry offers (a paid pilot, PoC, or diagnostic) to start deals.",
    ],
  },
  {
    name: "Know Your Customers",
    questions: [
      "We map the buying committee, roles, authority, influence, before the first serious meeting.",
      "We document each account's primary pains, decision process, and timeline in one place.",
      "Our reps qualify against a shared standard (e.g. MEDDPICC) and it is reflected in the CRM.",
    ],
  },
  {
    name: "Sales Enablement",
    questions: [
      "Our CRM is a true single source of truth, clean, current, and trusted enough to forecast from.",
      "We have standardized scripts, sequences, and templates that reps actually use and are performant.",
      "We track prospecting and pipeline KPIs on a live dashboard the whole team can see.",
    ],
  },
];

const SCALE = [
  { label: "Not at all", value: 0 },
  { label: "Partly", value: 1 },
  { label: "Mostly", value: 2 },
  { label: "Fully", value: 3 },
];

const TOTAL_Q = 12;

function Scorecard() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(TOTAL_Q).fill(null));
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const answeredCount = answers.filter((a) => a !== null).length;
  const allAnswered = answeredCount === TOTAL_Q;
  const progressPct = Math.round((answeredCount / TOTAL_Q) * 100);

  const setAnswer = (qIdx: number, value: number) => {
    setAnswers((prev) => {
      const wasEmpty = prev.every((a) => a === null);
      const next = [...prev];
      next[qIdx] = value;
      if (wasEmpty) track("scorecard_start");
      if (next.every((a) => a !== null) && prev.some((a) => a === null)) {
        track("scorecard_complete");
      }
      return next;
    });
  };

  const pillarScores = useMemo(() => {
    return PILLARS.map((p, pIdx) => {
      const start = pIdx * 3;
      const sum = [0, 1, 2].reduce((acc, k) => acc + (answers[start + k] ?? 0), 0);
      return { name: p.name, sum, pct: Math.round((sum / 9) * 100) };
    });
  }, [answers]);

  const totalSum = pillarScores.reduce((acc, p) => acc + p.sum, 0);
  const overallPct = Math.round((totalSum / 36) * 100);
  const weakest = useMemo(
    () => pillarScores.slice().sort((a, b) => a.pct - b.pct)[0],
    [pillarScores],
  );

  const band = useMemo(() => {
    if (overallPct <= 40) {
      return {
        title: "Founder-led",
        message: "The motion lives in people's heads. Best next step: a Pulse Check.",
      };
    }
    if (overallPct <= 70) {
      return {
        title: "Built, not yet repeatable",
        message: "A Standard Diagnostic will show you exactly what to fix first.",
      };
    }
    return {
      title: "Repeatable, now make it AI-ready",
      message: "You're a candidate for System Building or a Fractional CRO sprint to tighten the data layer and increase your revenue.",
    };
  }, [overallPct]);

  const weakestRead = useMemo(() => {
    if (!weakest) return "";
    const reads: Record<string, string> = {
      "Own Your Territory":
        "your ICP, account tiering, and pursuit plans aren't crisp enough, reps default to whoever picks up the phone.",
      "Full Offering Expertise":
        "positioning, battle cards, and entry offers aren't sharp enough, deals stall on \"why now, why you\".",
      "Know Your Customers":
        "buying committees and qualification aren't documented consistently, forecasts wobble because the customer picture is thin.",
      "Sales Enablement":
        "your CRM and reporting can't yet be trusted as a single source of truth, which is exactly what blocks AI.",
    };
    return reads[weakest.name] ?? "";
  }, [weakest]);

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setSubmitting(true);

    const payload = {
      _subject: `Scorecard lead, ${overallPct}% (${band.title})`,
      email,
      overall_pct: `${overallPct}%`,
      band: band.title,
      weakest_pillar: weakest?.name ?? "",
      ...Object.fromEntries(
        pillarScores.map((p) => [p.name.replace(/\s+/g, "_"), `${p.pct}% (${p.sum}/9)`]),
      ),
      ...Object.fromEntries(
        answers.map((a, i) => [
          `q${i + 1}`,
          a === null ? "" : `${a}, ${SCALE.find((s) => s.value === a)?.label ?? ""}`,
        ]),
      ),
    };

    try {
      await fetch("https://formsubmit.co/ajax/loic.caudan@vonerio.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Non-blocking, still show the user their result.
    }
    setSubmitting(false);
    setRevealed(true);
    track("scorecard_email_captured", { overall_pct: overallPct, band: band.title });
    if (typeof window !== "undefined") {
      setTimeout(() => {
        document.getElementById("result")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <>
      {/* Sticky progress bar */}
      <div className="sticky top-[64px] z-30 border-b border-border bg-background/85 backdrop-blur">
        <div className="container-page py-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{answeredCount} / {TOTAL_Q} answered</span>
            <span>{progressPct}%</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-mist)] dark:bg-white/10">
            <div
              className="h-full bg-[var(--color-violet)] transition-all duration-300 dark:bg-[var(--color-magenta)]"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="container-page pt-12 pb-10 md:pt-16">
        <Reveal>
          <Pill>Free · ~3 minutes</Pill>
          <h1 className="text-hero mt-6 max-w-4xl">How ready is your sales organization for scale, and for AI?</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Twelve questions, about three minutes. You'll get a score across the four readiness pillars and a recommended starting point. It's the same framework I use on day one of a Diagnostic.
          </p>
        </Reveal>
      </section>

      {/* Quiz */}
      <section className="container-page pb-16">
        <div className="space-y-12">
          {PILLARS.map((pillar, pIdx) => (
            <div key={pillar.name}>
              <div className="mb-6 flex items-baseline gap-3">
                <span className="font-display text-2xl font-semibold text-[var(--color-violet)] dark:text-[var(--color-magenta)]">
                  {String(pIdx + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-semibold tracking-tight">{pillar.name}</h2>
              </div>
              <div className="space-y-4">
                {pillar.questions.map((q, qIdx) => {
                  const globalIdx = pIdx * 3 + qIdx;
                  const current = answers[globalIdx];
                  return (
                    <div
                      key={globalIdx}
                      className="rounded-2xl border border-border bg-card p-5 md:p-6"
                    >
                      <div className="flex gap-3">
                        <span className="shrink-0 text-sm font-medium text-muted-foreground">
                          {String(globalIdx + 1).padStart(2, "0")}.
                        </span>
                        <p className="text-[0.95rem] leading-relaxed text-foreground md:text-base">
                          {q}
                        </p>
                      </div>
                      <fieldset className="mt-5">
                        <legend className="sr-only">Rate this statement</legend>
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                          {SCALE.map((opt) => {
                            const selected = current === opt.value;
                            return (
                              <label
                                key={opt.value}
                                className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition focus-within:ring-2 focus-within:ring-[var(--color-violet)] ${
                                  selected
                                    ? "border-[var(--color-violet)] bg-[var(--color-violet)] text-white shadow-[0_8px_24px_-14px_rgba(123,63,228,0.7)] dark:border-[var(--color-magenta)] dark:bg-[var(--color-magenta)]"
                                    : "border-border bg-background hover:border-[var(--color-violet)]/60 hover:bg-accent"
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={`q-${globalIdx}`}
                                  value={opt.value}
                                  checked={selected}
                                  onChange={() => setAnswer(globalIdx, opt.value)}
                                  className="sr-only"
                                />
                                <span>{opt.label}</span>
                              </label>
                            );
                          })}
                        </div>
                      </fieldset>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Email gate / Result */}
      <section id="result" className="bg-[var(--color-mist)] dark:bg-white/[0.03]">
        <div className="container-page py-16 md:py-20">
          {!revealed ? (
            <div className="mx-auto max-w-2xl">
              <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                <Pill>Last step</Pill>
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  See your full scorecard.
                </h2>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">
                  Enter your email to see your full scorecard, your weakest pillar, and your recommended next step.
                </p>

                {!allAnswered && (
                  <div className="mt-5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-900 dark:text-amber-200">
                    You still have {TOTAL_Q - answeredCount} question{TOTAL_Q - answeredCount === 1 ? "" : "s"} to answer above.
                  </div>
                )}

                <form onSubmit={submit} className="mt-6 space-y-3">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    disabled={!allAnswered || submitting}
                    className="w-full rounded-full border border-border bg-background px-5 py-3.5 text-base outline-none transition focus:border-[var(--color-violet)] focus:ring-2 focus:ring-[var(--color-violet)]/30 disabled:opacity-60"
                  />
                  {emailError && <p className="text-sm text-red-600 dark:text-red-400">{emailError}</p>}
                  <button
                    type="submit"
                    disabled={!allAnswered || submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-tangerine)] px-6 py-3.5 text-sm font-medium text-[#1A1A1A] shadow-[0_10px_28px_-12px_rgba(255,107,53,0.7)] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                    {submitting ? "Scoring…" : "See my result"}
                  </button>
                  <p className="text-xs text-muted-foreground">
                    No spam, ever. Your result, plus the occasional note on building a sales system worth scaling.
                  </p>
                </form>
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <div className="flex items-center gap-2 text-sm text-[var(--color-violet)] dark:text-[var(--color-magenta)]">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Result sent to {email}</span>
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-card p-8 md:p-10">
                  <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                      <div className="text-eyebrow">Overall readiness</div>
                      <div
                        className="mt-2 font-display text-6xl font-semibold tracking-tight md:text-7xl"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {overallPct}
                        <span className="text-[var(--color-tangerine-ink)] dark:text-[var(--color-tangerine)]">%</span>
                      </div>
                      <div className="mt-3 text-lg font-medium">{band.title}</div>
                    </div>
                    <p className="max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
                      {band.message}
                    </p>
                  </div>

                  <p className="mt-6 text-sm text-muted-foreground">
                    Want to keep this? Take a screenshot, your results live on this page, not in your inbox.
                  </p>

                  <div className="mt-10 space-y-4">
                    {pillarScores.map((p) => (
                      <div key={p.name}>
                        <div className="flex items-baseline justify-between text-sm">
                          <span className={p.name === weakest?.name ? "font-semibold text-foreground" : "text-foreground"}>
                            {p.name}
                            {p.name === weakest?.name && (
                              <span className="ml-2 rounded-full bg-[var(--color-tangerine)]/15 px-2 py-0.5 text-xs font-medium text-[var(--color-tangerine-ink)] dark:text-[var(--color-tangerine)]">
                                weakest
                              </span>
                            )}
                          </span>
                          <span className="tabular-nums text-muted-foreground">{p.pct}%</span>
                        </div>
                        <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[var(--color-mist)] dark:bg-white/10">
                          <div
                            className={`h-full rounded-full transition-all ${
                              p.name === weakest?.name
                                ? "bg-[var(--color-tangerine)]"
                                : "bg-[var(--color-violet)] dark:bg-[var(--color-magenta)]"
                            }`}
                            style={{ width: `${p.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {weakest && (
                    <div className="mt-10 rounded-xl border-l-2 border-[var(--color-tangerine)] bg-[var(--color-mist)]/60 px-5 py-4 dark:bg-white/5">
                      <p className="text-[0.95rem] leading-relaxed">
                        Your weakest pillar is <span className="font-semibold">{weakest.name}</span>, {weakestRead}
                      </p>
                    </div>
                  )}

                  <div className="mt-10 flex flex-wrap gap-3">
                    <CTAButton variant="energy" to="/contact">Book a diagnostic</CTAButton>
                    <CTAButton variant="ghost" to="/services">See how System Building closes these gaps</CTAButton>
                  </div>
                </div>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Want to talk this through?{" "}
                  <Link to="/contact" className="underline underline-offset-4 hover:text-foreground">
                    Book a 20-min scoping call <ArrowUpRight className="inline h-3 w-3" />
                  </Link>
                </p>
              </Reveal>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
