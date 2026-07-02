import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui-bits";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GROUPS: { header: string; items: { q: string; a: string }[] }[] = [
  {
    header: "Getting started and fit",
    items: [
      {
        q: "Who is Vonerio for?",
        a: "B2B software and tech-services teams, roughly $2M to $30M in revenue, with a sales team of 3 to 15+ reps that has outgrown founder-led selling but cannot yet justify a $200K full-time VP of Sales. It fits companies with a real, human sales motion to improve, not pure self-serve.",
      },
      {
        q: "How does it work?",
        a: "Three steps. Think diagnoses what is slowing the pipeline. Build builds one system with your reps: playbook, qualification standard and a clean CRM. Run drives and closes your top deals while the team ramps. Most clients start with a Diagnostic and decide what is next from the findings. The path is linear and the stops are optional.",
      },
      {
        q: "How do we start?",
        a: "Two easy entry points: score your team against the four readiness pillars (free, three minutes), or book a Diagnostic. From there the path is linear and the stops are optional.",
      },
      {
        q: "Where does Vonerio work?",
        a: "Remotely across APAC and EMEA. APAC (Singapore, Indonesia, Southeast Asia) is primary for ongoing Fractional CRO work, where timezone proximity matters. EMEA is well suited to project-based Diagnostic and System Building.",
      },
    ],
  },
  {
    header: "The offer",
    items: [
      {
        q: "Do I need a Diagnostic before System Building?",
        a: "Usually yes. Building on a clear diagnosis is what makes the system stick. If a recent, reliable picture already exists, a short fast-track assessment can replace the full Diagnostic.",
      },
      {
        q: "How is this different from hiring a full-time VP of Sales?",
        a: "A full-time VP is $200K+ all-in, and a bad hire costs twelve or more months plus severance. Vonerio gives you revenue leadership on shared time, with no severance or equity risk, a six-week trial and 30-day notice. It also buys time to make the right full-time hire later, on a clean foundation.",
      },
      {
        q: "How is this different from a sales coach or consultant?",
        a: "A coach advises from the sideline. Vonerio gets on the calls and closes your top deals, and builds a system you own: playbook, qualification standard and CRM configuration, with payment tied to real adoption. It is operator-grade, not slideware.",
      },
      {
        q: "We are buying an AI sales tool. Do we still need this?",
        a: "AI amplifies whatever is already there, including the mess. On dirty data and loose process, AI tools scale the chaos faster. Vonerio builds the clean foundation the tools need to work. The two are complementary: fix the foundation, then the AI you run on it performs.",
      },
    ],
  },
  {
    header: "Pricing, payment and commitment",
    items: [
      {
        q: "How is pricing structured?",
        a: "Fixed prices and fixed timelines, not open-ended retainers. Every engagement has a clear price and scope, shown in full on the Services page. Diagnostics are the entry point, then System Building, then Fractional CRO on a monthly basis. Founding Cohort clients receive -20% on the flagship tiers in exchange for a reference once results land. See the Services page for current prices.",
      },
      {
        q: "What does \"outcome-linked payment\" mean?",
        a: "For System Building, the final installment is released on a real adoption signal, meaning your team is actually using the system, for example open deals scored against the qualification standard in the CRM, measured within about 30 days of handover. It is tied to adoption, not to elapsed time.",
      },
      {
        q: "Is there a guarantee?",
        a: "The Diagnostic core deliverable is money-back. System Building ties the final payment to adoption. Fractional CRO starts with a six-week trial before any longer commitment. The risk sits with Vonerio, not only with you.",
      },
      {
        q: "Do I have to commit long-term?",
        a: "No lock-in. Diagnostics and System Building are single, fixed-scope engagements. Fractional CRO has a three-month minimum, then renews monthly with 30-day notice. The system is designed for handover to a trained internal owner whenever you choose.",
      },
      {
        q: "What is the Founding Cohort?",
        a: "A launch-and-learn phase. The first five clients receive -20% on flagship engagements and more direct time, in exchange for a reference once the work pays off. It is how Vonerio is building its first case studies.",
      },
    ],
  },
  {
    header: "Track record and data",
    items: [
      {
        q: "Vonerio has only sold enterprise. Why does that apply to us?",
        a: "The fundamentals that break are identical at any size: no clear Ideal Customer Profile (ICP), a messy CRM, inconsistent qualification, just at smaller scale. The enterprise record, $26M+ closed while carrying a quota, is proof the system works under the hardest conditions. Applying that rigor to a smaller team is the easier direction, and it is what separates Vonerio from consultants who have only ever sold to small teams.",
      },
      {
        q: "How is our data handled?",
        a: "Vonerio accesses your CRM and data only to deliver the engagement and to recommend a configuration your admin implements. Data is handled confidentially, is not exported or retained beyond the engagement without your consent, and a mutual non-disclosure agreement can be signed on request.",
      },
    ],
  },
];

const ALL_QAS = GROUPS.flatMap((g) => g.items);

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ Vonerio" },
      {
        name: "description",
        content:
          "Answers on fit, offerings, pricing, guarantees and data handling for Vonerio's fractional sales leadership for B2B software and tech-services teams.",
      },
      { property: "og:title", content: "FAQ Vonerio" },
      {
        property: "og:description",
        content:
          "Answers on fit, offerings, pricing, guarantees and data handling for Vonerio's fractional sales leadership.",
      },
      { property: "og:url", content: "https://vonerio.com/faq" },
    ],
    links: [{ rel: "canonical", href: "https://vonerio.com/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: ALL_QAS.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <section className="container-page py-16 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions before we start."
          sub="Fit, offerings, pricing and data, in one place. Prices are shown in full on the Services page."
        />
      </Reveal>

      <div className="mt-12 space-y-10">
        {GROUPS.map((group, gi) => (
          <Reveal key={group.header} delay={gi * 60}>
            <div>
              <h2
                className="text-eyebrow mb-4"
              >
                {group.header}
              </h2>
              <div className="rounded-2xl border border-border bg-card">
                <Accordion type="single" collapsible>
                  {group.items.map((item, i) => (
                    <AccordionItem key={item.q} value={`g${gi}-i${i}`}>
                      <AccordionTrigger
                        className="px-6 text-base font-semibold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
