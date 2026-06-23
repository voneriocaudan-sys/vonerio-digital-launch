import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading, CTABand, Pill } from "@/components/ui-bits";
import { PricingCard } from "@/components/OfferingCard";
import { Reveal } from "@/components/Reveal";
import { COHORT_SPOTS_LEFT } from "@/lib/cohort";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services Vonerio" },
      { name: "description", content: "Three offerings: Diagnostic, System Building and Fractional CRO. Fixed prices, fixed timelines, outcome-linked payments." },
      { property: "og:title", content: "Services Vonerio" },
      { property: "og:description", content: "Diagnostic, System Building and Fractional CRO sized to your team." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

type Card = Parameters<typeof PricingCard>[0];

const DIAGNOSTIC_CARDS: Card[] = [
  { name: "Pulse Check", tagline: "A fast, low-risk read on one function, in a week.", price: "$4,500", priceNote: "flat fee", badge: "Already low-commitment", features: ["Single-function lightweight diagnostic", "1 pillar across 2–3 sub-items", "1-page prioritized findings, 3+ actions", "Delivered in 1 week, paid on delivery"] },
  { name: "Standard", tagline: "A detailed action plan in 3–4 weeks.", price: "$9,600", priceNote: "Founding · list $12,000 (−20%)", badge: "List $12,000 · −20%", featured: true, ribbon: "Most popular", features: ["All 4 pillars scored at sub-item level (20)", "Component depth on 2 priority pillars", "Quick-wins vs. structural-fixes plan", "30% kickoff / 70% delivery"] },
  { name: "Complex", tagline: "Multi-function and/or multi-geography, 15+ stakeholders.", price: "$16,000", priceNote: "Founding · list $20,000 (−20%)", badge: "List $20,000 · −20%", features: ["All 4 pillars, all 20 sub-items, full depth", "Replicated across every function/geo", "Root-cause framework (Process/People/Tools/Market)", "30% kickoff / 70% delivery"] },
];

const SYSTEM_CARDS: Card[] = [
  { name: "Core Build", tagline: "Right-sized system build for small teams (≤5 reps).", price: "$17,600", priceNote: "Founding · list $22,000 (−20%)", badge: "List $22,000 · −20%", features: ["3 pillars, 1–2 priority sub-items each", "MEDDPICC standard + core playbook", "UVP definition, positioning & sales battle cards", "45 days · 50% kickoff / 50% handover"] },
  { name: "Standard", tagline: "Full system built with your reps in 90 days, ready to scale.", price: "$33,600", priceNote: "Founding · list $42,000 (−20%)", badge: "List $42,000 · −20%", featured: true, ribbon: "Flagship", features: ["All 4 pillars, 12–16 priority sub-items", "Playbook, ICP, account tiering and growth Plan", "UVP definition, positioning & sales battle cards", "90 days, thirds · final third outcome-linked"] },
  { name: "Complex", tagline: "8+ reps and/or multi-offering / multi-geography.", price: "$52,000", priceNote: "Founding · list $65,000 (−20%)", badge: "List $65,000 · −20%", features: ["All 4 pillars, all 20 sub-items", "Scaled across multiple BUs / geos", "Cross-functional build sessions", "90 days, thirds · final third outcome-linked"] },
];

const FRACTIONAL_CARDS: Card[] = [
  { name: "Trial Sprint", tagline: "Try it for 6 weeks before you commit to 3 months.", price: "$10,000", priceNote: "single invoice", badge: "$5,000 credits toward conversion", features: ["Negotiation & Closing on 2 named deals, over 6 weeks", "Written charter with 3 default KPIs", "Pipeline governance notes", "6 weeks, no commitment beyond"] },
  { name: "Core", tagline: "CRO-level direction that still closes your top 3 deals. 2 days/month.", price: "$4,800/mo", priceNote: "Founding, list $6,000/mo (-20%)", badge: "List $6,000/mo · -20%", featured: true, ribbon: "Best value", features: ["Own the forecast and operating cadence", "Direct work on your top 3 deals (calls, negotiation, closing)", "Deal coaching + monthly review and pipeline governance", "3-month min, renews monthly"] },
  { name: "Extended", tagline: "Revenue ownership, weekly closing, board-level governance. 5 days/month.", price: "$10,400/mo", priceNote: "Founding, list $13,000/mo (-20%)", badge: "List $13,000/mo · -20%", features: ["Own the number, plan and forecast", "Weekly direct work on your top 3-5 deals (calls, negotiation, closing)", "Deal coaching + board-level governance and updates", "3-month min, renews monthly"] },
];

function Services() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <Pill tone="tangerine">Founding Cohort · {COHORT_SPOTS_LEFT} spot{COHORT_SPOTS_LEFT === 1 ? "" : "s"} · -20% on flagship tiers</Pill>
          <h1 className="text-hero mt-6 max-w-4xl">Offerings sized to your team, not a one-size-fits-all retainer.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Three offerings: Diagnostic, System Building, Fractional CRO. Fixed prices, fixed timelines, outcome-linked payments. Start with the one that fits; the path is linear and the stops are optional. Founding Cohort clients get -20% on flagship tiers.
          </p>
        </Reveal>
      </section>

      <OfferingBlock
        id="diagnostic"
        eyebrow="01 · Diagnostic"
        title="A data-driven read on what's broken."
        intro="Stakeholder interviews, a CRM/data audit, and a MEDDPICC-based pipeline review scored against the four readiness pillars, with a prioritized action plan. No deposit; money-back guarantee on the core deliverable."
        fromLine="From $4,500 · Pulse Check → multi-geo deep dive"
        primaryPrice="From $4,500"
        ctaLabel="Start with a Pulse Check"
        ctaHref="/contact?interest=diagnostic"
        cards={DIAGNOSTIC_CARDS}
      />

      <div className="bg-[var(--color-mist)] dark:bg-[var(--color-indigo)]/30">
        <OfferingBlock
          id="system-building"
          eyebrow="02 · System Building"
          title="I build the system with your reps and it sticks."
          intro="Co-built live. Playbook, battle cards, cadences, a CRM configuration spec your admin implements, and a KPI dashboard design aligned into one single source of truth for reps, sales and marketing. The final payment is tied to a real adoption signal."
          fromLine="From $22,000 · Core Build → multi-BU build"
          primaryPrice="From $22,000"
          ctaLabel="Scope a System Build"
          ctaHref="/contact?interest=system-building"
          cards={SYSTEM_CARDS}
        />
      </div>

      <OfferingBlock
        id="fractional"
        eyebrow="03 · Fractional CRO"
        title="A revenue leader who still closes, on shared time."
        intro="On shared time, I take ownership of your revenue: the number and the plan to hit it, the operating cadence, a forecast your board can trust, and the team's coaching and discipline. That's the CRO half. The operator half is what most fractional CROs don't do: I get on the calls with the buyer's decision-makers, run the negotiation, and close the deals that decide your quarter, alongside your reps. It's the same motion I used to close $26M+ myself, carrying a quota. CRO-level leadership without a $200K+ hire, sized for a team that needs revenue driven. Try a 6-week sprint first."
        fromLine="From $4,800/mo · Trial Sprint, then Core or Extended"
        primaryPrice="From $4,800/mo"
        ctaLabel="Start a Trial Sprint"
        ctaHref="/contact?interest=fractional"
        cards={FRACTIONAL_CARDS}
      />

      <FAQ />

      <CTABand
        title="Not sure where to start?"
        sub="Tell me about your pipeline and I'll point you to the right first step, usually a Diagnostic or a 6-week Trial Sprint."
        primary={{ label: "Talk to Loïc", to: "/contact", variant: "primary" }}
      />
    </>
  );
}

function OfferingBlock({
  id, eyebrow, title, intro, fromLine, primaryPrice, ctaLabel, ctaHref, cards,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  fromLine: string;
  primaryPrice: string;
  ctaLabel: string;
  ctaHref: string;
  cards: Card[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <section id={id} className="container-page py-20 md:py-28">
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} sub={intro} />
      </Reveal>
      <Reveal>
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>{primaryPrice}</div>
              <div className="mt-1 text-sm text-muted-foreground">{fromLine}</div>
            </div>
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-violet)] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-[var(--color-magenta)]"
            >
              {ctaLabel}
            </a>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-violet)] hover:underline dark:text-[var(--color-magenta)]"
          >
            See all tiers
            <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
      </Reveal>
      {open && (
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}><PricingCard {...c} href={ctaHref} /></Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

const FAQS = [
  { q: "What is the Founding Cohort?", a: "A launch-and-learn phase. The goal is 3-5 referenceable cases and a validated price, channel and offer within about 90 days. Founding Cohort clients get -20% on flagship tiers in exchange for a reference once results land." },
  { q: "Do I need a Diagnostic before System Building?", a: "Usually yes, but a week-1 fast-track mini-assessment exists if you want to move straight into a build." },
  { q: "What does \"outcome-linked payment\" mean?", a: "The final installment is due on a real adoption signal, for example reps logging qualified deals on the new standard, not on elapsed time." },
  { q: "Is there a guarantee?", a: "Yes. On the Standard Diagnostic, the fee is waived if it does not surface at least three priorities worth acting on." },
  { q: "Who is this for?", a: "B2B software and tech-services teams, $2M-$30M ARR, 3-15+ reps, deals from $20K." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[var(--color-mist)] dark:bg-[var(--color-indigo)]/30">
      <div className="container-page py-20 md:py-28">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Questions before we start." />
        </Reveal>
        <div className="mt-10 mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="block w-full text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between gap-6 px-6 py-5">
                    <span className="text-base font-semibold" style={{ fontFamily: "var(--font-display)" }}>{item.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-180 text-[var(--color-violet)] dark:text-[var(--color-magenta)]" : "text-muted-foreground"}`} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
