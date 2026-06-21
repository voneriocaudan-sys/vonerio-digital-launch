import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading, CTABand, Pill } from "@/components/ui-bits";
import { PricingCard } from "@/components/OfferingCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services Vonerio" },
      { name: "description", content: "Three offerings, nine tiers. Diagnostic, System Building and Fractional Leadership fixed prices, fixed timelines, outcome-linked payments." },
      { property: "og:title", content: "Services Vonerio" },
      { property: "og:description", content: "Diagnostic, System Building and Fractional Leadership sized to your team." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <Pill tone="tangerine">Founding Cohort · −20% on discountable tiers</Pill>
          <h1 className="text-hero mt-6 max-w-4xl">Offerings sized to your team not a one-size-fits-all retainer.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Three offerings, nine tiers. Fixed prices, fixed timelines, and outcome-linked payment structures. Founding Cohort clients receive −20% while we build referenceable cases.
          </p>
        </Reveal>
      </section>

      <ServiceSection
        id="diagnostic"
        eyebrow="01 · Diagnostic"
        title="A data-driven read on what's broken."
        intro="Stakeholder interviews, a CRM/data audit and MEDDPICC-based pipeline review scored against the four readiness pillars, with a prioritized action plan. No deposit; a money-back guarantee on the core deliverable."
        cards={[
          { name: "Pulse Check", tagline: "A fast, low-risk read on one function, in a week.", price: "$4,500", priceNote: "flat fee", badge: "Already low-commitment", features: ["Single-function lightweight diagnostic", "1 pillar across 2–3 sub-items", "1-page prioritized findings, 3+ actions", "Delivered in 1 week, paid on delivery"] },
          { name: "Standard", tagline: "A detailed action plan in 3–4 weeks.", price: "$9,600", priceNote: "Founding · list $12,000 (−20%)", badge: "List $12,000 · −20%", featured: true, ribbon: "Most popular", features: ["All 4 pillars scored at sub-item level (20)", "Component depth on 2 priority pillars", "Quick-wins vs. structural-fixes plan", "30% kickoff / 70% delivery"] },
          { name: "Complex", tagline: "Multi-function and/or multi-geography, 15+ stakeholders.", price: "$16,000", priceNote: "Founding · list $20,000 (−20%)", badge: "List $20,000 · −20%", features: ["All 4 pillars, all 20 sub-items, full depth", "Replicated across every function/geo", "Root-cause framework (Process/People/Tools/Market)", "30% kickoff / 70% delivery"] },
        ]}
      />

      <div className="bg-[var(--color-mist)] dark:bg-[var(--color-indigo)]/30">
        <ServiceSection
          id="system-building"
          eyebrow="02 · System Building"
          title="I build the system with your reps and it sticks."
          intro="Co-built live in build sprints, not delivered as a static document. Playbook, battle cards, cadences, CRM configuration and a KPI dashboard. Final payment is tied to a real adoption signal."
          cards={[
            { name: "Core Build", tagline: "Right-sized system build for small teams (≤5 reps).", price: "$17,600", priceNote: "Founding · list $22,000 (−20%)", badge: "List $22,000 · −20%", features: ["3 pillars, 1–2 priority sub-items each", "MEDDPICC standard + core playbook", "UVP definition, positioning & sales battle cards", "45 days · 50% kickoff / 50% handover"] },
            { name: "Standard", tagline: "Full system built with your reps in 90 days, ready to scale.", price: "$33,600", priceNote: "Founding · list $42,000 (−20%)", badge: "List $42,000 · −20%", featured: true, ribbon: "Flagship", features: ["All 4 pillars, 12–16 priority sub-items", "Playbook, ICP, account tiering and growth Plan", "UVP definition, positioning & sales battle cards", "90 days, thirds · final third outcome-linked"] },
            { name: "Complex", tagline: "8+ reps and/or multi-offering / multi-geography.", price: "$52,000", priceNote: "Founding · list $65,000 (−20%)", badge: "List $65,000 · −20%", features: ["All 4 pillars, all 20 sub-items", "Scaled across multiple BUs / geos", "Cross-functional build sessions", "90 days, thirds · final third outcome-linked"] },
          ]}
        />
      </div>

      <ServiceSection
        id="fractional"
        eyebrow="03 · Fractional Leadership"
        title="Senior sales leadership, on shared time."
        intro="Pipeline governance, forecasting and hands-on coaching on your top 3–5 strategic deals enterprise-caliber leadership without a $200K+ full-time hire. Try a 6-week sprint first."
        cards={[
          { name: "Trial Sprint", tagline: "Try it for 6 weeks before you commit to 3 months.", price: "$10,000", priceNote: "single invoice", badge: "$5,000 credits toward conversion", features: ["Negotiation & Closing on 1–2 named deals", "Written charter with 3 default KPIs", "Pipeline governance notes", "6 weeks, no commitment beyond"] },
          { name: "Core", tagline: "Direction, governance and metrics 2 days / month.", price: "$4,800/mo", priceNote: "Founding · list $6,000/mo (−20%)", badge: "List $6,000/mo · −20%", featured: true, ribbon: "Best value", features: ["Monthly business review + weekly pipeline", "Deal coaching on top 3–5 deals", "MEDDPICC forecast governance", "3-month min, renews monthly"] },
          { name: "Extended", tagline: "Deeper weekly involvement 5 days / month.", price: "$10,400/mo", priceNote: "Founding · list $13,000/mo (−20%)", badge: "List $13,000/mo · −20%", features: ["Weekly pipeline governance", "+ 3 Account Management sub-items", "Board / investor update support", "3-month min, renews monthly"] },
        ]}
      />

      <FAQ />

      <CTABand
        title="Not sure which tier fits?"
        sub="Tell me about your team and pipeline. I'll point you to the right starting point usually a Diagnostic or a Trial Sprint."
        primary={{ label: "Talk to Loïc", to: "/contact", variant: "energy" }}
      />
    </>
  );
}

function ServiceSection({ id, eyebrow, title, intro, cards }: { id: string; eyebrow: string; title: string; intro: string; cards: Parameters<typeof PricingCard>[0][] }) {
  return (
    <section id={id} className="container-page py-20 md:py-28">
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} sub={intro} />
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.name} delay={i * 80}><PricingCard {...c} /></Reveal>
        ))}
      </div>
    </section>
  );
}

const FAQS = [
  { q: "What is the Founding Cohort?", a: "A launch-and-learn phase. The goal is 3–5 referenceable cases and a validated price/channel/offer combination within ~90 days. Founding Cohort clients receive −20% on discountable tiers in exchange for a reference once results land." },
  { q: "Do I need a Diagnostic before System Building?", a: "System Building requires a completed Diagnostic (any tier) or a fast-track mini-assessment in week one, plus a named internal owner. The Diagnostic feeds directly into the build no rework if you continue." },
  { q: "What does \"outcome-linked payment\" mean?", a: "For System Building, the final installment is due when one or more reps have logged a qualified deal using the new standard or 30 days post-handover, whichever comes first. You own the artifacts on final payment." },
  { q: "Is there a guarantee?", a: "Yes. The Diagnostic report must surface 3+ specific, actionable priorities or the fee (or delivery installment) is waived." },
  { q: "Who is this for?", a: "Companies with $5M–$100M in revenue selling complex B2B SaaS/observability, ServiceNow, consulting & managed services, cloud transformation, and data & AI where deals involve multiple stakeholders and long cycles." },
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
              <button
                key={item.q}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full text-left"
                aria-expanded={isOpen}
              >
                <div className="flex items-center justify-between gap-6 px-6 py-5">
                  <span className="text-base font-semibold" style={{ fontFamily: "var(--font-display)" }}>{item.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-180 text-[var(--color-violet)] dark:text-[var(--color-magenta)]" : "text-muted-foreground"}`} />
                </div>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
