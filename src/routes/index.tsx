import { createFileRoute } from "@tanstack/react-router";
import { SearchCheck, Blocks, Compass, ShieldCheck, Users, Handshake } from "lucide-react";
import { Pill, SectionHeading, CTAButton, StatBlock, CheckItem, CTABand } from "@/components/ui-bits";
import { OverviewCard, PillarCard } from "@/components/OfferingCard";
import { Reveal } from "@/components/Reveal";
import { COHORT_SPOTS_LEFT } from "@/lib/cohort";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vonerio Build a sales system your team runs without you" },
      { name: "description", content: "Fractional sales leadership for $2M–$30M ARR B2B teams. AI amplifies the mess, Vonerio builds the clean-data sales system your AI needs. $26M+ closed." },
      { property: "og:title", content: "Vonerio Build a sales system your team runs without you" },
      { property: "og:description", content: "Fractional sales leadership for $2M–$30M ARR B2B teams. AI amplifies the mess, Vonerio builds the clean-data sales system your AI needs. $26M+ closed." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Vonerio",
          url: "https://vonerio.com",
          logo: "https://vonerio.com/favicon-512.png",
          image: "https://vonerio.com/vonerio-social.png",
          description:
            "Fractional sales leadership for B2B software and tech-services companies, diagnose, build and run the sales system and the clean-data foundation your AI needs.",
          founder: {
            "@type": "Person",
            name: "Loïc Caudan",
            jobTitle: "Fractional CRO",
            sameAs: "https://www.linkedin.com/in/lcaudan/",
          },
          areaServed: ["APAC", "EMEA"],
          email: "loic.caudan@vonerio.com",
        }),
      },
    ],
  }),
  component: Home,
});

import HERO_IMG from "@/assets/loic-caudan.jpg";



function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Decorative system graphic */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-1/2 top-1/2 h-[900px] w-[1400px] -translate-x-1/2 -translate-y-1/2 opacity-[0.18] dark:opacity-25"
            viewBox="0 0 1400 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="var(--color-violet)" strokeWidth="1.25" strokeLinecap="round">
              <path d="M250 250 L520 200 L780 320 L1080 240 L1180 470" />
              <path d="M200 540 L460 600 L720 520 L960 640 L1220 580" />
              <path d="M340 760 L580 700 L820 780 L1060 720" />
              <path d="M520 200 L460 600" />
              <path d="M780 320 L720 520" />
              <path d="M1080 240 L960 640" />
              <path d="M580 700 L720 520" />
              <path d="M820 780 L960 640" />
            </g>
            <g fill="var(--color-violet)">
              <circle cx="250" cy="250" r="4" />
              <circle cx="520" cy="200" r="5" />
              <circle cx="780" cy="320" r="4" />
              <circle cx="1080" cy="240" r="5" />
              <circle cx="1180" cy="470" r="4" />
              <circle cx="200" cy="540" r="4" />
              <circle cx="460" cy="600" r="5" />
              <circle cx="720" cy="520" r="6" />
              <circle cx="960" cy="640" r="5" />
              <circle cx="1220" cy="580" r="4" />
              <circle cx="340" cy="760" r="4" />
              <circle cx="580" cy="700" r="5" />
              <circle cx="820" cy="780" r="4" />
              <circle cx="1060" cy="720" r="4" />
            </g>
          </svg>
        </div>
        <div className="container-page py-16 md:py-24 lg:py-28">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Pill tone="tangerine">Founding Cohort · {COHORT_SPOTS_LEFT} spot{COHORT_SPOTS_LEFT === 1 ? "" : "s"} · -20% on flagship tiers</Pill>
              <h1 className="text-hero mt-6">
                Build a sales system{" "}
                <span className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]">your team runs without you.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Vonerio diagnoses what's slowing your pipeline, builds one system with your reps, and runs it until it sticks. You're left with clean data and a defined process your AI can finally act on.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Enterprise rigor, built on $26M+ in closed deals. Sized for a team that can't justify a $200K VP of Sales.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <CTAButton href="/scorecard" variant="primary">Score your team (free)</CTAButton>
                <CTAButton href="/contact?interest=diagnostic" variant="ghost">Book a diagnostic</CTAButton>
              </div>
            </div>
            <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-border pt-8">
              <StatBlock value="$26" suffix="M+" label="Personally closed" />
              <StatBlock value="214" suffix="%" label="Avg quota (peak 323%)" />
              <StatBlock value="50" suffix="+" label="Deals closed" />
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-[var(--color-mist)]/60 dark:bg-[var(--color-indigo)]/20">
        <div className="container-page flex flex-col items-center gap-6 py-8 md:flex-row md:justify-between md:gap-8 md:py-7">
          <span className="text-eyebrow">Methodology trained in</span>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-foreground/80">
            <li>MEDDPICC</li>
            <li className="text-border">·</li>
            <li>Challenger</li>
            <li className="text-border">·</li>
            <li>Harvard Negotiation</li>
            <li className="text-border">·</li>
            <li>Value-Based Selling</li>
          </ul>
        </div>
      </section>

      {/* What I do */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="What I do"
            title="Think. Build. Run."
            sub="Three steps that fix your sales organization and turn it into one clean foundation AI can run on."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal><OverviewCard n="01" icon={SearchCheck} title="Think → Diagnostic" body="A data-driven read on what is slowing the pipeline, scored against the 4-pillar readiness framework. You get a prioritized plan and a clear map of which data is clean, dirty or missing. From a 1-week Pulse Check to a multi-geo deep dive." to="/services" hash="diagnostic" /></Reveal>
          <Reveal delay={80}><OverviewCard n="02" icon={Blocks} title="Build → System Building" body="In 90 days I build one system with your reps, playbook, qualification standard, battle cards, cadences, and a CRM configuration spec your admin implements. This is where your single source of truth gets built: one process, clean data, and every rep, sales lead and marketer aligned." to="/services" hash="system-building" /></Reveal>
          <Reveal delay={160}><OverviewCard n="03" icon={Compass} title="Run → Fractional CRO" body="On shared time, I own the number and the system to hit it: the plan, the operating cadence, a forecast your board can trust, and the team. Unlike most fractional CROs, I also get on the calls and close the deals that decide the quarter. CRO-level leadership without a $200K+ hire. Try a 6-week sprint first." to="/services" hash="fractional" /></Reveal>
        </div>
      </section>

      {/* AI foundation band */}
      <section className="bg-[var(--color-indigo)] text-white">
        <div className="container-page py-20 md:py-24">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-eyebrow mb-4 text-[var(--color-tangerine)]">Why it matters now</div>
              <h2 className="text-h2 text-white">AI amplifies whatever is already there, including the mess.</h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-[var(--color-amethyst)]">
                AI sales tools fail on dirty data and undefined process. Think → Build → Run gives you one process, one source of truth, and data your AI and AI-augmented reps can actually trust, so you ramp faster, scale, and add revenue. The same three steps that fix your sales org are what make it AI-ready.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="scroll-mt-24 bg-[var(--color-mist)] dark:bg-[var(--color-indigo)]/30">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Methodology"
              title="Four pillars of sales readiness."
              sub="Twenty sub-items, each tied to a named deliverable. No generic templates. Every artifact closes a specific gap."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Reveal><PillarCard n="01" title="Own Your Territory" items={["Define ICP", "Sector analysis", "Account tiering", "Account growth plans"]} /></Reveal>
            <Reveal delay={60}><PillarCard n="02" title="Full Offering Expertise" items={["Define UVP & positioning", "Entry offers", "Packaging & pricing", "Sales battle cards"]} /></Reveal>
            <Reveal delay={120}><PillarCard n="03" title="Know Your Customers" items={["Map the buying committee", "Primary pain points", "Relationship history", "Decision-making process"]} /></Reveal>
            <Reveal delay={180}><PillarCard n="04" title="Sales Enablement" items={["CRM as single source of truth", "Scripts & templates", "Prospecting KPIs", "Dashboards & reports"]} /></Reveal>
          </div>
        </div>
      </section>

      {/* Why Vonerio */}
      <section>
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Why Vonerio"
              title={<>An operator's system <span className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]">built in real deals, made to be yours.</span></>}
            />
          </Reveal>

          <Reveal>
            <div className="mt-10 max-w-xl rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="flex items-center gap-5">
                <img
                  src={HERO_IMG}
                  alt="Loïc Caudan"
                  className="h-24 w-24 shrink-0 rounded-full object-cover md:h-28 md:w-28"
                  loading="lazy"
                />
                <div>
                  <div className="text-base font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                    Loïc Caudan, Founder & Fractional CRO.
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Ex-Accenture, 10+ years closing complex Enterprise & Mid-Market deals.
                  </p>
                  <a
                    href="/about"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-violet)] hover:underline dark:text-[var(--color-magenta)]"
                  >
                    Read the full story →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <ul className="mt-12 space-y-5">
            <Why icon={ShieldCheck} title="Built while carrying quota." body="Every framework was used on live, multi-million-dollar deals first." />
            <Why icon={Users} title="Co-built with your reps." body="Each artifact is tested on a real deal before it's finalized." />
            <Why icon={Handshake} title="Outcome-linked payments." body="Final installments are tied to a real adoption signal, not elapsed time." />
            <Why icon={Compass} title="Designed for handover." body="A trained internal owner inherits the system. No ongoing dependency." />
          </ul>
        </div>

        <div className="bg-[var(--color-indigo)] text-white">
          <div className="container-page py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-3">
              <ProofStat value="$16.2M" label="Largest single deal across 12 countries in 18 months" />
              <ProofStat value="$55M" label="First client engagement (APAC): a full Diagnostic delivered (4 pillars, segmentation, plan)" />
              <ProofStat value="4" label="Languages negotiated & closed in, live" />
            </div>
          </div>
        </div>
      </section>

      {/* Where to start */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <SectionHeading eyebrow="Where to start" title="Start small. The path is linear, the stops optional." sub="Most clients begin with a Diagnostic and decide what's next from the findings. You're never locked into the whole journey." />
        </Reveal>
        <div className="relative mt-16">
          {/* connector line */}
          <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            <TimelineStep n="01" title="Diagnose" body="Stakeholder interviews, a CRM/data audit and a MEDDPICC-based pipeline review, scored against the four readiness pillars." />
            <TimelineStep n="02" title="Co-build with your reps" body="In 90 days we build the system together: playbook, battle cards, cadences and dashboards, tested on live deals." />
            <TimelineStep n="03" title="Run your top deals, then hand over" body="I own the number and close your top deals, then hand to a trained internal owner whenever you choose. No lock-in." />
          </ol>
        </div>
      </section>

      {/* CTA band */}
      <CTABand
        title="Join the Founding Cohort."
        sub="I'm building Vonerio's first case studies, so the first five clients get -20% on flagship engagements and more of my direct time, in exchange for a reference once the work pays off."
        primary={{ label: "View pricing", to: "/services", variant: "primary" }}
        secondary={{ label: "Book a diagnostic", href: "/contact?interest=diagnostic" }}
      />
    </>
  );
}

function Why({ icon: Icon, title, body }: { icon: typeof ShieldCheck; title: string; body: string }) {
  return (
    <li className="flex gap-4">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-mist)] text-[var(--color-violet)] dark:bg-[var(--color-violet)]/20 dark:text-[var(--color-magenta)]">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-base font-semibold" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </li>
  );
}

function ProofStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl font-semibold text-white md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>{value}</div>
      <div className="mt-3 text-sm leading-relaxed text-[var(--color-amethyst)]">{label}</div>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <Reveal>
      <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
        <span className="text-eyebrow">{n}</span>
        <h3 className="mt-3 text-xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </Reveal>
  );
}

function TimelineStep({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <Reveal>
      <li className="relative flex flex-col items-start">
        <span
          className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card font-semibold text-[var(--color-violet)] shadow-sm dark:text-[var(--color-magenta)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {n}
        </span>
        <h3 className="mt-5 text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </li>
    </Reveal>
  );
}

// Step and CheckItem retained for potential reuse
void Step;
void CheckItem;
