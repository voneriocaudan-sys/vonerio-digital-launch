import { createFileRoute } from "@tanstack/react-router";
import { SearchCheck, Blocks, Compass, ShieldCheck, Users, Handshake } from "lucide-react";
import { SectionHeading, CTAButton, CheckItem, CTABand } from "@/components/ui-bits";
import { OverviewCard, PillarCard } from "@/components/OfferingCard";
import { Reveal } from "@/components/Reveal";

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
            className="absolute left-1/2 top-1/2 h-[900px] w-[1400px] -translate-x-1/2 -translate-y-1/2 opacity-[0.14] dark:opacity-30"
            viewBox="0 0 1400 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="var(--color-iris)" strokeWidth="1.25" strokeLinecap="round">
              <path d="M250 250 L520 200 L780 320 L1080 240 L1180 470" />
              <path d="M200 540 L460 600 L720 520 L960 640 L1220 580" />
              <path d="M340 760 L580 700 L820 780 L1060 720" />
              <path d="M520 200 L460 600" />
              <path d="M780 320 L720 520" />
              <path d="M1080 240 L960 640" />
              <path d="M580 700 L720 520" />
              <path d="M820 780 L960 640" />
            </g>
            <g fill="var(--color-iris)">
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
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
              <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
                <h1 className="text-hero">
                  Build a sales system{" "}
                  <span className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]">your team runs without you.</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Vonerio diagnoses what's slowing your pipeline, builds one system with your reps, and runs it until it sticks. You're left with clean data and a defined process your AI can finally act on.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                  <CTAButton href="/scorecard" variant="primary">Score your team (free)</CTAButton>
                  <CTAButton href="/contact?interest=diagnostic" variant="ghost">Book a diagnostic</CTAButton>
                </div>
              </div>
              <HeroSystemGraphic />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-[var(--color-mist)]/60 dark:bg-[var(--color-indigo)]/20">
        <div className="container-page flex flex-col gap-5 py-8 md:py-9">
          <p className="text-center text-sm leading-relaxed text-foreground/80 md:text-base">
            Built on $26M+ in closed deals, across 50+ enterprise and mid-market deals, at 214% average quota (peak 323%). Sized for a team that can't justify a $200K VP of Sales.
          </p>
          <div className="flex flex-col items-center gap-3 border-t border-border/60 pt-5 md:flex-row md:justify-center md:gap-6">
            <span className="text-eyebrow">Methodology trained in</span>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-foreground/80">
              <li>MEDDPICC</li>
              <li className="text-border">·</li>
              <li>Challenger</li>
              <li className="text-border">·</li>
              <li>Harvard Negotiation</li>
              <li className="text-border">·</li>
              <li>Value-based selling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Risk-reversal strip */}
      <section className="border-b border-border">
        <div className="container-page py-4 md:py-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-sm text-foreground/75 md:gap-x-8">
            <li>No deposit</li>
            <li aria-hidden className="text-border">·</li>
            <li>Money-back on the diagnostic</li>
            <li aria-hidden className="text-border">·</li>
            <li>Payment tied to real adoption</li>
            <li aria-hidden className="text-border">·</li>
            <li>No lock-in</li>
          </ul>
        </div>
      </section>


      {/* What Vonerio does */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="What Vonerio does"
            title="Think. Build. Run."
            sub="Three steps that turn inconsistent selling into one clean system your team and your AI can run on."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal>
            <OverviewCard
              n="01"
              icon={SearchCheck}
              title="Think → Diagnostic"
              body={
                <>
                  <p>A data-driven read on what's slowing the pipeline.</p>
                  <ul className="mt-3 space-y-2">
                    <CheckItem>Scored against the four readiness pillars</CheckItem>
                    <CheckItem>A prioritized plan, plus a map of which data is clean, dirty or missing</CheckItem>
                    <CheckItem>From a one-week check to a multi-region deep dive</CheckItem>
                  </ul>
                </>
              }
              to="/services"
              hash="diagnostic"
            />
          </Reveal>
          <Reveal delay={80}>
            <OverviewCard
              n="02"
              icon={Blocks}
              title="Build → System Building"
              body={
                <>
                  <p>One system, built with your reps in 90 days.</p>
                  <ul className="mt-3 space-y-2">
                    <CheckItem>Playbook, qualification standard, battle cards, cadences</CheckItem>
                    <CheckItem>A CRM setup your admin implements</CheckItem>
                    <CheckItem>One process, clean data, every rep and marketer aligned</CheckItem>
                  </ul>
                </>
              }
              to="/services"
              hash="system-building"
            />
          </Reveal>
          <Reveal delay={160}>
            <OverviewCard
              n="03"
              icon={Compass}
              title="Run → Fractional CRO"
              body={
                <>
                  <p>A revenue leader who still closes.</p>
                  <ul className="mt-3 space-y-2">
                    <CheckItem>Owns the number, the plan, the forecast and the cadence</CheckItem>
                    <CheckItem>Gets on the calls and closes the deals that decide the quarter</CheckItem>
                    <CheckItem>Senior leadership without a $200K+ hire. Start with a 6-week sprint</CheckItem>
                  </ul>
                </>
              }
              to="/services"
              hash="fractional"
            />
          </Reveal>
        </div>
      </section>

      {/* AI foundation band */}
      <section className="bg-[var(--color-indigo)] text-white">
        <div className="container-page py-20 md:py-24">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-eyebrow mb-4 text-[var(--color-tangerine)]">Why it matters now</div>
              <h2 className="text-h2 text-white">AI amplifies whatever's already there, including the mess.</h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-[var(--color-amethyst)]">
                AI sales tools fail on dirty data and loose process. Think, Build and Run give you one process, one source of truth, and data your tools and your team can actually trust, so you ramp faster and scale. The same three steps that fix your sales also make it AI-ready.
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
            <Reveal><PillarCard n="01" title="Own Your Territory" items={["Define ICP", "Sector Analysis", "Account Tiering", "Account-Based Marketing", "Account Growth Plans"]} /></Reveal>
            <Reveal delay={60}><PillarCard n="02" title="Full Offering Expertise" items={["Define UVP", "Positioning", "Entry Offers", "Packaging & Pricing", "Sales Battle Cards"]} /></Reveal>
            <Reveal delay={120}><PillarCard n="03" title="Know Your Customers" items={["Map The Buying Committee", "Primary Pain Points", "Relationship History", "Internal Context", "Decision-Making Process"]} /></Reveal>
            <Reveal delay={180}><PillarCard n="04" title="Sales Enablement" items={["CRM As Single Source Of Truth", "Call Intelligence & Coaching", "Scripts & Templates", "Prospecting KPIs", "Dashboards & Reports"]} /></Reveal>
          </div>
        </div>
      </section>

      {/* Why Vonerio */}
      <section>
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Why Vonerio"
              title={<>An operator's system, <span className="text-[var(--color-violet)] dark:text-[var(--color-magenta)]">built in real deals, made to be yours.</span></>}
            />
          </Reveal>

          <ul className="mt-12 space-y-5">
            <Why icon={ShieldCheck} title="Built while carrying quota." body="Every framework was used on live, multi-million-dollar deals first." />
            <Why icon={Users} title="Co-built with your reps." body="Each piece is tested on a real deal before it's final." />
            <Why icon={Handshake} title="Outcome-linked payments." body="Final installments are tied to real adoption, not elapsed time." />
            <Why icon={Compass} title="Designed for handover." body="A trained internal owner inherits the system. No lock-in." />
          </ul>

          <Reveal>
            <div className="mt-12 max-w-xl rounded-2xl border border-border bg-card p-6 md:p-8">
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
                    Ex-Accenture, 10+ years closing complex enterprise and mid-market deals.
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
        </div>

        <div className="bg-[var(--color-indigo)] text-white">
          <div className="container-page py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-3">
              <ProofStat value="$16.2M" label="Largest single deal" />
              <ProofStat value="$55M" label="First engagement (APAC, full Diagnostic delivered)" />
              <ProofStat value="4" label="Languages closed in" />
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
            <TimelineStep n="01" title="Diagnose" body="Find what's slowing the pipeline." />
            <TimelineStep n="02" title="Co-build with your reps" body="Build the system together, tested on live deals." />
            <TimelineStep n="03" title="Run your top deals, hand over when ready" body="Vonerio owns the number and closes your top deals, then hands to a trained internal owner whenever you choose. No lock-in." />
          </ol>
        </div>
      </section>

      {/* CTA band */}
      <CTABand
        title="Join the Founding Cohort."
        sub="Vonerio is building its first case studies, so the first five clients get -20% on flagship engagements and more direct time, in exchange for a reference once the work pays off."
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

function HeroSystemGraphic() {
  // Scattered → ordered network. Left side: loose, faint points.
  // Right side: a tidy 4x4 grid of nodes connected into one system.
  // Middle: curved connectors resolving chaos into structure.
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-[520px]">
      <svg
        role="img"
        aria-label="Scattered data points resolving into one connected system"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="hero-connector" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-iris)" stopOpacity="0.15" />
            <stop offset="55%" stopColor="var(--color-violet)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--color-violet)" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="hero-halo" cx="0.72" cy="0.5" r="0.55">
            <stop offset="0%" stopColor="var(--color-violet)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--color-violet)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft halo behind the ordered grid */}
        <rect x="0" y="0" width="600" height="600" fill="url(#hero-halo)" />

        {/* Scattered / faint points (the mess) */}
        <g className="hero-scatter" fill="var(--color-iris)">
          <circle cx="52" cy="128" r="3" opacity="0.55" />
          <circle cx="96" cy="88" r="2.4" opacity="0.4" />
          <circle cx="118" cy="212" r="3.5" opacity="0.6" />
          <circle cx="46" cy="284" r="2.6" opacity="0.35" />
          <circle cx="152" cy="330" r="3" opacity="0.5" />
          <circle cx="70" cy="410" r="3.2" opacity="0.55" />
          <circle cx="132" cy="482" r="2.6" opacity="0.4" />
          <circle cx="34" cy="512" r="3" opacity="0.35" />
          <circle cx="184" cy="72" r="2.6" opacity="0.45" />
          <circle cx="204" cy="418" r="3" opacity="0.5" />
          <circle cx="88" cy="352" r="2.2" opacity="0.35" />
          <circle cx="160" cy="168" r="2.4" opacity="0.4" />
        </g>

        {/* Converging connectors (chaos resolving into order) */}
        <g
          stroke="url(#hero-connector)"
          strokeWidth="1.25"
          strokeLinecap="round"
          fill="none"
          className="hero-flow"
        >
          <path d="M52 128 C 200 150, 260 200, 340 220" />
          <path d="M118 212 C 220 220, 280 250, 340 300" />
          <path d="M46 284 C 200 290, 270 310, 340 300" />
          <path d="M152 330 C 240 340, 290 360, 340 380" />
          <path d="M70 410 C 210 400, 280 400, 340 380" />
          <path d="M132 482 C 240 460, 300 440, 340 460" />
          <path d="M204 418 C 260 420, 300 430, 340 460" />
          <path d="M184 72 C 260 120, 310 170, 340 220" />
        </g>

        {/* Ordered grid: one clean, connected system */}
        {(() => {
          const cols = 4;
          const rows = 4;
          const startX = 360;
          const startY = 190;
          const gap = 60;
          const nodes: { x: number; y: number }[] = [];
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              nodes.push({ x: startX + c * gap, y: startY + r * gap });
            }
          }
          const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              if (c < cols - 1) {
                lines.push({
                  x1: startX + c * gap,
                  y1: startY + r * gap,
                  x2: startX + (c + 1) * gap,
                  y2: startY + r * gap,
                });
              }
              if (r < rows - 1) {
                lines.push({
                  x1: startX + c * gap,
                  y1: startY + r * gap,
                  x2: startX + c * gap,
                  y2: startY + (r + 1) * gap,
                });
              }
            }
          }
          return (
            <g>
              <g
                stroke="var(--color-violet)"
                strokeOpacity="0.55"
                strokeWidth="1.2"
                strokeLinecap="round"
              >
                {lines.map((l, i) => (
                  <line key={`l${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
                ))}
              </g>
              <g fill="var(--color-violet)" className="hero-grid-nodes">
                {nodes.map((n, i) => (
                  <circle key={`n${i}`} cx={n.x} cy={n.y} r={4.5} />
                ))}
              </g>
              {/* Emphasis pulse on a central hub */}
              <circle
                cx={startX + gap * 1.5}
                cy={startY + gap * 1.5}
                r="7"
                fill="var(--color-violet)"
                className="hero-hub"
              />
            </g>
          );
        })()}
      </svg>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes heroFlow {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes heroDrift {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.7; }
        }
        .hero-flow path {
          stroke-dasharray: 4 6;
          animation: heroFlow 6s linear infinite;
        }
        .hero-hub {
          transform-origin: center;
          transform-box: fill-box;
          animation: heroPulse 3.2s ease-in-out infinite;
        }
        .hero-scatter circle {
          animation: heroDrift 5s ease-in-out infinite;
        }
        .hero-scatter circle:nth-child(2n) { animation-delay: 0.8s; }
        .hero-scatter circle:nth-child(3n) { animation-delay: 1.6s; }
        @media (prefers-reduced-motion: reduce) {
          .hero-flow path,
          .hero-hub,
          .hero-scatter circle { animation: none; }
        }
      `}</style>
    </div>
  );
}
