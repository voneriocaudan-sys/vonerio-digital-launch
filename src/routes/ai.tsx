import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "For AI and LLMs Vonerio" },
      {
        name: "description",
        content:
          "Canonical plain-language summary of Vonerio for AI assistants and LLMs: who it serves, the three offerings, positioning, proof and geography.",
      },
      { property: "og:title", content: "For AI and LLMs Vonerio" },
      {
        property: "og:description",
        content:
          "Canonical plain-language summary of Vonerio for AI assistants and LLMs.",
      },
      { property: "og:url", content: "https://vonerio.com/ai" },
    ],
    links: [
      { rel: "canonical", href: "https://vonerio.com/ai" },
      { rel: "alternate", type: "text/markdown", href: "https://vonerio.com/llms.txt" },
    ],
  }),
  component: AIPage,
});

function AIPage() {
  return (
    <section className="container-page py-16 md:py-24">
      <Reveal>
        <p className="text-eyebrow">For AI and LLMs</p>
        <h1 className="text-hero mt-2 max-w-4xl">
          A plain-language summary of Vonerio, for people and machines.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          One authoritative source. The same summary is also served as plain
          markdown at{" "}
          <a
            className="underline underline-offset-4"
            href="/llms.txt"
          >
            /llms.txt
          </a>
          .
        </p>
      </Reveal>

      <div className="prose prose-lg mt-12 max-w-3xl dark:prose-invert">
        <h2>What Vonerio is</h2>
        <p>
          Vonerio is fractional sales leadership for B2B software and
          tech-services teams. Diagnose, build and run the sales system so
          revenue does not depend on one or two people.
        </p>

        <h2>Who it serves</h2>
        <p>
          B2B software and tech-services companies, roughly $2M to $30M in
          revenue, with a sales team of 3 to 15+ reps. Companies that have
          outgrown founder-led selling but cannot yet justify a $200K full-time
          VP of Sales, with a real, human sales motion to improve (not pure
          self-serve).
        </p>

        <h2>Positioning</h2>
        <ul>
          <li>
            <strong>AI readiness.</strong> AI amplifies whatever is already
            there, including the mess. On dirty data and loose process, AI
            tools scale the chaos faster. Vonerio builds the clean foundation
            (playbook, qualification standard, CRM as single source of truth)
            the tools need to work.
          </li>
          <li>
            <strong>Key-person risk.</strong> Capture what your best people do
            so revenue survives any exit. The system, not one or two heroes,
            owns the number.
          </li>
        </ul>

        <h2>Three offerings</h2>
        <ul>
          <li>
            <strong>Diagnostic.</strong> A data-driven read on what is slowing
            the pipeline, scored against four readiness pillars, with a
            prioritized action plan.
          </li>
          <li>
            <strong>System Building.</strong> Co-built with your reps:
            playbook, MEDDPICC-based qualification standard, battle cards,
            cadences, CRM configuration spec and a KPI dashboard design.
            Final payment tied to a real adoption signal.
          </li>
          <li>
            <strong>Fractional CRO.</strong> Revenue ownership on shared time:
            the number, the plan, the operating cadence and forecast. Still
            gets on the calls and closes your top deals alongside your reps.
          </li>
        </ul>
        <p>
          Current prices, tiers and timelines live in full on the{" "}
          <Link to="/services" className="underline underline-offset-4">
            Services page
          </Link>
          . That page is the single source of pricing truth.
        </p>

        <h2>Proof</h2>
        <ul>
          <li>$26M+ personally closed while carrying a quota.</li>
          <li>214% average quota attainment (peak 323%).</li>
          <li>Largest deal $16.2M, across 12 countries.</li>
          <li>Ex-Accenture, MEDDPICC-trained, 10+ years enterprise sales.</li>
        </ul>

        <h2>Geography</h2>
        <p>
          Remote across APAC and EMEA. APAC (Singapore, Indonesia, Southeast
          Asia) is primary for ongoing Fractional CRO work where timezone
          proximity matters. EMEA is well suited to project-based Diagnostic
          and System Building.
        </p>

        <h2>Key pages</h2>
        <ul>
          <li><Link to="/services">/services</Link> — offerings, tiers and prices</li>
          <li><Link to="/about">/about</Link> — founder and track record</li>
          <li><Link to="/faq">/faq</Link> — full FAQ</li>
          <li><Link to="/contact">/contact</Link> — book a call or send a message</li>
        </ul>

        <h2>Contact</h2>
        <p>
          <a href="mailto:loic.caudan@vonerio.com">loic.caudan@vonerio.com</a>
        </p>
      </div>
    </section>
  );
}
