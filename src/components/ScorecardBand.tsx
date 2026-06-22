import { ArrowUpRight } from "lucide-react";

// Slim conversion band shown on every page above the footer.
export function ScorecardBand() {
  return (
    <section
      aria-label="Score your team"
      className="border-y border-border bg-[var(--color-mist)] dark:bg-[var(--color-indigo)]/40"
    >
      <div className="container-page flex flex-col items-start justify-between gap-4 py-6 md:flex-row md:items-center md:py-5">
        <p className="text-sm leading-relaxed text-foreground md:text-[0.95rem]">
          See how your team scores against the four pillars — free, 3 minutes.
        </p>
        <a
          href="/scorecard"
          data-track="cta_score_click"
          data-track-location="footer_band"
          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-violet)] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_28px_-12px_rgba(123,63,228,0.7)] transition hover:bg-[var(--color-royal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-violet)] focus-visible:ring-offset-2 dark:bg-[var(--color-magenta)] dark:hover:bg-[var(--color-violet)]"
        >
          Score your team <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
