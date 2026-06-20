import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading, CTABand, Pill } from "@/components/ui-bits";
import { PillarCard } from "@/components/OfferingCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vonerio" },
      { name: "description", content: "A decade of enterprise selling — territory models, CFO business cases, multi-stakeholder orchestration — packaged into a system teams can own." },
      { property: "og:title", content: "About — Vonerio" },
      { property: "og:description", content: "Founded by Loïc Caudan. $26M+ closed across 50+ enterprise deals." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

// NOTE: Founder portrait uses an Unsplash placeholder. Swap for Loïc's brand portrait in production.
const PORTRAIT = "<img width="1024" height="1024" alt="ProPicture2 copy" src="https://github.com/user-attachments/assets/5541a7e2-2295-4ba5-bbcf-67c4357e298e" />";

function About() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <Pill>About Vonerio</Pill>
          <h1 className="text-hero mt-6 max-w-4xl">A methodology built on the deals.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Vonerio packages a decade of enterprise selling from territory models, CFO business cases, multi-stakeholder orchestration and negotiation frameworks into a system teams can own.
          </p>
        </Reveal>
      </section>

      {/* Founder */}
      <section className="container-page pb-20 md:pb-28">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[24px] bg-[var(--color-mist)] dark:bg-[var(--color-violet)]/10" />
              <img src={PORTRAIT} alt="Loïc Caudan, founder of Vonerio" className="aspect-[4/5] w-full rounded-2xl object-cover" />
              <div className="mt-5 flex flex-wrap gap-2">
                {["English", "French", "Spanish", "Portuguese", "Indonesian (business)"].map((l) => (
                  <span key={l} className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">{l}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="text-eyebrow">Founder</div>
            <h2 className="mt-3 text-h2">Loïc Caudan</h2>
            <blockquote className="mt-8 border-l-2 border-[var(--color-violet)] pl-6 text-xl leading-relaxed text-foreground md:text-2xl" style={{ fontFamily: "var(--font-display)" }}>
              "In 2023, I closed the largest infrastructure-to-application managed services deal in my Accenture portfolio.{" "}
              <span className="font-semibold text-[var(--color-violet)] dark:text-[var(--color-magenta)]">$16.2M. 12 countries. 18 months.</span> I was 28."
            </blockquote>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              <p>That deal happened because I had a system, a way of mapping buying committees before the first call, building financial models the CFO could defend internally, and running a negotiation across EMEA, LatAm, US and APAC simultaneously without losing the thread.</p>
              <p>That system is what I've spent ten years building. It's what I now teach and implement through Vonerio.</p>
              <p>I sell complex enterprise technology from data platforms, cloud infrastructure, SaaS, Data & AI into accounts where the average deal involves 10–15 stakeholders, 9-12 month cycles and boards that sign off across jurisdictions. <span className="font-medium text-foreground">$26M+ closed as an individual contributor</span> carrying quota, building pipeline, and closing.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Track record */}
      <section className="bg-[var(--color-indigo)] text-white">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <Track value="$26M+" label="Personally closed across 50+ enterprise deals" />
            <Track value="323%" label="Peak quota attainment — FY23 on a $5M target" />
            <Track value="$2.7M" label="New-logo expansion across 5 LatAm countries" />
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="container-page py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Methodology"
            title="Four pillars · twenty deliverables."
            sub="Sourced from the AI-Powered Enterprise Sales Cycle playbook. All 20 sub-items map to a named Vonerio deliverable and none of the output is generic; every artifact closes a specific gap."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal><PillarCard n="01" title="Own Your Territory" items={["Define ICP", "Sector analysis", "Account tiering", "Account-based marketing", "Account growth plan"]} /></Reveal>
          <Reveal delay={80}><PillarCard n="02" title="Full Offering Expertise" items={["Define UVP", "Positioning", "Entry offers", "Packaging & pricing", "Sales battle cards"]} /></Reveal>
          <Reveal delay={120}><PillarCard n="03" title="Know Your Customers" items={["Map buying committee", "Primary pain points", "Relationship history", "Internal context", "Decision-making process"]} /></Reveal>
          <Reveal delay={180}><PillarCard n="04" title="Sales Enablement" items={["CRM", "Call intelligence & coaching", "Scripts & templates", "Prospecting KPIs", "Dashboards & reports"]} /></Reveal>
        </div>
      </section>

      <CTABand
        title="Want to see your team scored against the four pillars?"
        sub="A Diagnostic from a one-week Pulse Check to a multi-geo deep dive gives you a prioritized plan within weeks."
        primary={{ label: "Book a diagnostic", to: "/contact", variant: "energy" }}
        secondary={{ label: "See offerings", to: "/services" }}
      />
    </>
  );
}

function Track({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-5xl font-semibold text-white md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>{value}</div>
      <div className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--color-amethyst)]">{label}</div>
    </div>
  );
}
