import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading, CTABand, Pill, CTAButton } from "@/components/ui-bits";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vonerio" },
      { name: "description", content: "A decade of enterprise selling territory models, CFO business cases, multi-stakeholder orchestration packaged into a system teams can own." },
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
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <Pill>About Vonerio</Pill>
          <h1 className="text-hero mt-6 max-w-4xl">A methodology built on the deals.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Vonerio packages a decade of enterprise selling territory models, CFO business cases, multi-stakeholder orchestration and negotiation frameworks into a system teams can own.
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
            <div className="text-eyebrow">Founder Offering Fractional CRO expertise</div>
            <h2 className="mt-3 text-h2">Loïc Caudan</h2>
            <blockquote className="mt-8 border-l-2 border-[var(--color-violet)] pl-6 text-xl leading-relaxed text-foreground md:text-2xl" style={{ fontFamily: "var(--font-display)" }}>
              "In 2023, I closed the largest infrastructure-to-application managed services deal in my Accenture portfolio.{" "}
              <span className="font-semibold text-[var(--color-violet)] dark:text-[var(--color-magenta)]">$16.2M. 12 countries. 18 months.</span> I was 28."
            </blockquote>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              <p>That deal happened because I had a system a way of mapping buying committees before the first call, building financial models the CFO could defend internally, and running a negotiation across EMEA, LatAm, US and APAC simultaneously without losing the thread.</p>
              <p>That system is what I've spent ten years building. It's what I now teach through Vonerio.</p>
              <p>I sell complex enterprise technology data platforms, cloud infrastructure, SaaS into accounts where the average deal involves 10–15 stakeholders, 12–18 month cycles and boards that sign off across jurisdictions. <span className="font-medium text-foreground">$26M+ closed as an individual contributor</span> carrying quota, building pipeline, and closing.</p>
              <p>Most fractional consultants have only ever sold to small teams. I closed $26M+ carrying a quota, and the discipline that won those deals works just as well on a team of five. You get enterprise rigor, sized to a team that can't justify a full-time CRO.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Methodology — personal framing */}
      <section className="bg-[var(--color-mist)] dark:bg-[var(--color-indigo)]/30">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-eyebrow mb-3">Methodology</div>
              <h2 className="text-h2">The same system, sized to your team.</h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
                Everything I teach distils into four pillars: know your territory, master your offering, understand your customer's buying process, and equip your team with the right tools and data. I built this over ten years of live deals. Now I co-build it with your reps so it becomes yours.
              </p>
              <div className="mt-6">
                <CTAButton to="/" variant="ghost">See the full framework</CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Want to see your team scored against the four pillars?"
        sub="A Diagnostic from a one-week Pulse Check to a multi-geo deep dive gives you a prioritized plan within weeks."
        primary={{ label: "Score your team (free)", to: "/scorecard", variant: "energy" }}
        secondary={{ label: "See offerings", to: "/services" }}
      />
    </>
  );
}

