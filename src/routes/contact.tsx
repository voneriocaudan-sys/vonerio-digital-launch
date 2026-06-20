import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, Linkedin, Globe, Clock, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading, Pill } from "@/components/ui-bits";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vonerio" },
      { name: "description", content: "Tell me about your team and pipeline. I'll reply personally usually within 1 business day." },
      { property: "og:title", content: "Contact Vonerio" },
      { property: "og:description", content: "Reach Loïc Caudan directly. Founding Cohort enquiries are prioritized." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      setShowToast(true);
      const t = setTimeout(() => setShowToast(false), 6000);
      return () => clearTimeout(t);
    }
  }, []);

  // FormSubmit.co no backend required. First submission triggers a one-time
  // confirmation email to contact@vonerio.com to activate the form.
  const nextUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/contact?sent=1`
      : "/contact?sent=1";

  return (
    <>
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <Pill>Contact</Pill>
          <h1 className="text-hero mt-6 max-w-4xl">Tell me about your team and pipeline.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I'll reply personally and point you to the right starting point — usually a Diagnostic or a 6-week Trial Sprint. Founding Cohort spots are limited.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-24 md:pb-32">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          {/* Left: contact info */}
          <Reveal>
            <ul className="space-y-7">
              <Info icon={Mail} title="Email" lines={[<a key="m" href="mailto:contact@vonerio.com" className="text-[var(--color-violet)] hover:underline dark:text-[var(--color-magenta)]">contact@vonerio.com</a>]} />
              <Info icon={Linkedin} title="LinkedIn" lines={[<a key="l" href="https://www.linkedin.com/in/lcaudan/" target="_blank" rel="noreferrer" className="text-[var(--color-violet)] hover:underline dark:text-[var(--color-magenta)]">Connect with Loïc Caudan</a>]} />
              <Info icon={Globe} title="Regions" lines={["EMEA · APAC · LatAm", "Fluent in English, French, Spanish & Portuguese (Bahasa Indonesia ongoing)."]} />
              <Info icon={Clock} title="Response time" lines={["Within 1 business day.", "Founding Cohort enquiries are prioritized."]} />
            </ul>

            <div className="mt-10 rounded-2xl bg-[var(--color-indigo)] p-6 text-white">
              <div className="text-eyebrow text-[var(--color-amethyst)]">Founding Cohort · −20%</div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-amethyst)]">
                A launch-and-learn phase. First clients get reduced pricing in exchange for a reference once results land.
              </p>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={100}>
            <form
              action="https://formsubmit.co/contact@vonerio.com"
              method="POST"
              className="rounded-2xl border border-border bg-card p-7 md:p-8"
            >
              <input type="hidden" name="_subject" value="New Vonerio enquiry from the website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={nextUrl} />
              <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <div className="grid gap-5">
                <Field label="Full name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
                <Field label="Company" name="company" required />
                <div>
                  <label htmlFor="interest" className="mb-2 block text-sm font-medium text-foreground">I'm interested in</label>
                  <select id="interest" name="interest" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-[var(--color-violet)] focus:outline-none focus:ring-2 focus:ring-[var(--color-violet)]/30">
                    <option value="">Select an option…</option>
                    <option>Diagnostic</option>
                    <option>System Building</option>
                    <option>Fractional Leadership</option>
                    <option>Not sure yet, help me choose</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">What are you trying to fix?</label>
                  <textarea id="message" name="message" rows={5} required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-[var(--color-violet)] focus:outline-none focus:ring-2 focus:ring-[var(--color-violet)]/30" placeholder="A short note on your team, pipeline and where it's stuck." />
                </div>
                <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-violet)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_28px_-12px_rgba(123,63,228,0.7)] transition hover:bg-[var(--color-royal)] dark:bg-[var(--color-magenta)] dark:hover:bg-[var(--color-violet)]">
                  <Send className="h-4 w-4" /> Send message
                </button>
                <p className="text-xs text-muted-foreground">Goes straight to contact@vonerio.com · No spam, ever.</p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {showToast && (
        <div role="status" className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 px-4">
          <div className="flex items-center gap-3 rounded-full bg-[var(--color-indigo)] px-5 py-3 text-sm text-white shadow-2xl">
            <CheckCircle2 className="h-4 w-4 text-[var(--color-tangerine)]" />
            Message sent I'll reply within 1 business day.
          </div>
        </div>
      )}
    </>
  );
}

function Info({ icon: Icon, title, lines }: { icon: typeof Mail; title: string; lines: React.ReactNode[] }) {
  return (
    <li className="flex gap-4">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-mist)] text-[var(--color-violet)] dark:bg-[var(--color-violet)]/20 dark:text-[var(--color-magenta)]">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-eyebrow">{title}</div>
        <div className="mt-1.5 space-y-1 text-sm leading-relaxed text-muted-foreground">
          {lines.map((l, i) => <div key={i}>{l}</div>)}
        </div>
      </div>
    </li>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition placeholder:text-muted-foreground focus:border-[var(--color-violet)] focus:outline-none focus:ring-2 focus:ring-[var(--color-violet)]/30"
      />
    </div>
  );
}
// Pull SectionHeading import out to avoid lint warnings on unused.
void SectionHeading;
