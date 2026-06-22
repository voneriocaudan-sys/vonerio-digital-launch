import { createFileRoute, Link } from "@tanstack/react-router";
import { Pill, CTAButton } from "@/components/ui-bits";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vonerio" },
      { name: "description", content: "Founded by Loïc Caudan. $26M+ closed across 50+ enterprise deals — the story behind the Vonerio methodology." },
      { property: "og:title", content: "About Vonerio" },
      { property: "og:description", content: "Founded by Loïc Caudan. $26M+ closed across 50+ enterprise deals." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

import PORTRAIT from "@/assets/loic-caudan.jpg";

function About() {
  return (
    <>
      {/* Hero */}
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <Pill>About</Pill>
          <h1 className="text-hero mt-6 max-w-4xl">A methodology built on the deals.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Vonerio packages a decade of enterprise selling into a system your team can own: territory models, CFO business cases, multi-stakeholder orchestration, and negotiation frameworks.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/contact?interest=diagnostic" variant="energy">Book a diagnostic</CTAButton>
            <CTAButton to="/scorecard" variant="ghost">Score your team</CTAButton>
          </div>
        </Reveal>
      </section>

      {/* Story */}
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
            <div className="text-eyebrow">Founder · Fractional CRO</div>
            <h2 className="mt-3 text-h2">Loïc Caudan</h2>
            <blockquote className="mt-8 border-l-2 border-[var(--color-violet)] pl-6 text-xl leading-relaxed text-foreground md:text-2xl" style={{ fontFamily: "var(--font-display)" }}>
              "In 2023, I closed the largest infrastructure-to-application managed services deal in my Accenture portfolio.{" "}
              <span className="font-semibold text-[var(--color-violet)] dark:text-[var(--color-magenta)]">$16.2M. 12 countries. 18 months.</span>"
            </blockquote>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              <p>That deal happened because I had a system: mapping the buying committee before the first call, building financial models the CFO could defend internally, and running a single negotiation across EMEA, LatAm, the US and APAC at once without losing the thread.</p>
              <p>That wasn't luck or relationships. I've spent ten years refining that same system, selling complex enterprise technology, data platforms, cloud infrastructure, SaaS, into accounts with 10–15+ stakeholders, 12–18 month cycles and board-level sign-off. <span className="font-medium text-foreground">$26M+ closed as an individual contributor</span>: pipeline built, quota carried, deals closed. It's what I now build with teams through Vonerio.</p>
              <p>Most fractional consultants have only ever sold to small teams. The discipline behind those numbers works just as well on a team of five. You get enterprise rigor, sized to a team that can't justify a full-time CRO.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stat trio */}
      <section className="bg-[var(--color-mist)] dark:bg-[var(--color-indigo)]/30">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-3">
            <Reveal><AboutStat value="$26M+" label="Personally closed across 50+ enterprise & mid-market deals" /></Reveal>
            <Reveal delay={80}><AboutStat value="323%" label="Peak quota attainment, FY23, on a $5M target" /></Reveal>
            <Reveal delay={160}><AboutStat value="$2.7M" label="New-logo expansion across 5 LatAm countries" /></Reveal>
          </div>
        </div>
      </section>

      {/* Framework link */}
      <section className="bg-[var(--color-mist)] dark:bg-[var(--color-indigo)]/30">
        <div className="container-page py-10 md:py-14">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-[1.0625rem] leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">See the four-pillar framework.</span>{" "}
                Territory, offering, buying process, and enablement. The four prerequisites for a repeatable revenue system, sized to teams at any stage.{" "}
                <Link to="/" hash="methodology" className="inline-flex items-center gap-1 font-medium text-[var(--color-violet)] underline underline-offset-4 decoration-[var(--color-violet)]/30 hover:decoration-[var(--color-violet)]">
                  Explore the framework <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function AboutStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-[2.5rem] font-semibold leading-none text-foreground md:text-[3rem]" style={{ fontFamily: "var(--font-display)" }}>{value}</div>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{label}</div>
    </div>
  );
}
