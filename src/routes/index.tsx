import { createFileRoute } from "@tanstack/react-router";
import { SearchCheck, Blocks, Compass, TrendingUp, ShieldCheck, Users, Handshake } from "lucide-react";
import { Pill, SectionHeading, CTAButton, StatBlock, CheckItem, CTABand } from "@/components/ui-bits";
import { OverviewCard, PillarCard } from "@/components/OfferingCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vonerio Build a sales system your team runs without you" },
      { name: "description", content: "AI amplifies whatever's already there including the mess. Vonerio builds the sales system, clean data and process your AI actually needs. Enterprise rigor for $2M–$30M ARR teams. $26M+ closed by the operator behind it." },
      { property: "og:title", content: "Vonerio Build a sales system your team runs without you" },
      { property: "og:description", content: "Diagnose. Build. Run. The sales system and the clean foundation your AI can finally act on." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

import HERO_IMG from "@/assets/loic-caudan.jpg";
// NOTE: Why-section imagery uses Unsplash placeholder. Swap for real Vonerio brand photography in production.
const WHY_IMG = "https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=1400&q=80";

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-12 py-16 md:grid-cols-[1.05fr_1fr] md:gap-16 md:py-24 lg:py-28">
          <Reveal>
            <Pill tone="tangerine">Founding Cohort open, 5 spots, −20% for first clients</Pill>
            <h1 className="text-hero mt-6">
              Build a sales system{" "}
              <span className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]">your team runs without you.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Vonerio diagnoses what is slowing your pipeline, builds one system with your reps, and runs it until it sticks, leaving you with clean data and a defined process your AI can finally act on.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Enterprise rigor built on $26M+ in closed deals, sized for a team that cannot justify a $200K VP of Sales.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/scorecard" variant="primary">Score your team (free)</CTAButton>
              <CTAButton to="/contact" variant="ghost">Book a diagnostic</CTAButton>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <StatBlock value="$26" suffix="M+" label="Personally closed" />
              <StatBlock value="214" suffix="%" label="Avg. quota · peak 323%" />
              <StatBlock value="50" suffix="+" label="Enterprise & Mid-Market deals" />
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[28px] bg-[var(--color-mist)] dark:bg-[var(--color-violet)]/10" />
              <img
                src={HERO_IMG}
                alt="Loïc Caudan, Founder of Vonerio Fractional CRO"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_40px_80px_-40px_rgba(46,26,71,0.45)]"
                loading="eager"
              />
              <div className="absolute -bottom-6 -left-4 max-w-[260px] rounded-2xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur md:-left-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-mist)] text-[var(--color-violet)] dark:bg-[var(--color-violet)]/20 dark:text-[var(--color-magenta)]">
                    <TrendingUp className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Fractional CRO</div>
                  </div>
                </div>
              </div>
            </div>
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
          <Reveal delay={160}><OverviewCard n="03" icon={Compass} title="Run → Fractional CRO" body="CRO-level leadership on shared time, pipeline governance, forecasting, hands-on coaching on your top deals. The discipline that keeps the data clean and the forecast trustworthy. Try a 6-week sprint first." to="/services" hash="fractional" /></Reveal>
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
                AI sales tools fail on dirty data and undefined process. Think → Build → Run gives you one process, one source of truth, and data your AI and AI-augmented reps can actually trust, to ramp faster, scale, and add revenue. The same three steps that fix your sales org are what make it AI-ready.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-[var(--color-mist)] dark:bg-[var(--color-indigo)]/30">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Methodology"
              title="Four pillars of enterprise sales readiness."
              sub="Twenty sub-items, each tied to a named deliverable. No generic templates, every artifact closes a specific gap."
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
      <section className="container-page py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[24px] bg-[var(--color-mist)] dark:bg-[var(--color-violet)]/10" />
              <img src={WHY_IMG} alt="Operator-grade enterprise sales work" className="aspect-[4/5] w-full rounded-2xl object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Why Vonerio"
              title={<>An operator's system <span className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]">not a consultant's template.</span></>}
            />
            <ul className="mt-8 space-y-5">
              <Why icon={ShieldCheck} title="Built while carrying quota." body="Every framework was used on live, multi-million-dollar deals first." />
              <Why icon={Users} title="Co-built with your reps." body="Each artifact is tested on a real deal before it's finalized." />
              <Why icon={Handshake} title="Outcome-linked payments." body="Final installments are tied to a real adoption signal, not elapsed time." />
              <Why icon={Compass} title="Designed for handover." body="A trained internal owner inherits the system no ongoing dependency." />
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Proof stats band */}
      <section className="bg-[var(--color-indigo)] text-white">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <ProofStat value="$16.2M" label="Largest single deal across 12 countries in 18 months" />
            <ProofStat value="$279M" label="First Vonerio client · full Diagnostic delivered (4 pillars, segmentation, plan)" />
            <ProofStat value="4" label="Languages negotiated & closed in, live" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <SectionHeading eyebrow="How it works" title="Think. Build. Run." sub="A linear path with optional stops. Most clients start with a Diagnostic and decide what comes next from there." />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Step n="01 Think" title="Diagnose" body="Stakeholder interviews, CRM/data audit and a MEDDPICC-based pipeline review scored against the four readiness pillars." />
          <Step n="02 Build" title="Build" body="In 90 days I co-build the system with your reps, playbook, battle cards, cadences, dashboards tested on live deals." />
          <Step n="03 Run" title="Run" body="Fractional leadership on top deals plus handover to a trained internal owner. No ongoing dependency." />
        </div>
      </section>

      {/* CTA band */}
      <CTABand
        title="Join the Founding Cohort."
        sub="A launch-and-learn phase with −20% pricing for the first five clients. The goal: referenceable results and a validated plan within ~90 days."
        primary={{ label: "Score your team (free)", href: "/scorecard", variant: "energy" }}
        secondary={{ label: "View pricing", to: "/services" }}
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

// CheckItem imported but currently unused on home kept for future modular use
void CheckItem;
