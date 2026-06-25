import { Link } from "@tanstack/react-router";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { CheckItem } from "./ui-bits";

export function OverviewCard({ icon: Icon, title, body, to, hash, n }: { icon: LucideIcon; title: string; body: ReactNode; to: string; hash?: string; n: string }) {
  return (
    <Link to={to} hash={hash} className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-0.5 hover:border-[var(--color-violet)]/40 hover:shadow-[0_24px_48px_-32px_rgba(123,63,228,0.4)]">
      <div className="flex items-center justify-between">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-mist)] text-[var(--color-violet)] dark:bg-[var(--color-violet)]/15 dark:text-[var(--color-magenta)]">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-eyebrow">{n}</span>
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
      <div className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</div>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-violet)] dark:text-[var(--color-magenta)]">
        Learn more <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export function PillarCard({ n, title, items }: { n: string; title: string; items: string[] }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
      <div className="flex items-center gap-3">
        <span className="font-display text-3xl font-semibold text-[var(--color-violet)] dark:text-[var(--color-magenta)]" style={{ fontFamily: "var(--font-display)" }}>{n}</span>
        <h3 className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
      </div>
      <ul className="mt-5 space-y-2.5">
        {items.map((it) => <CheckItem key={it}>{it}</CheckItem>)}
      </ul>
    </div>
  );
}

export function PricingCard({ name, tagline, price, priceNote, badge, features, featured, ribbon, href }: {
  name: string; tagline: string; price: string; priceNote?: ReactNode; badge?: string;
  features: string[]; featured?: boolean; ribbon?: string; href?: string;
}) {
  return (
    <div className={`relative flex h-full flex-col rounded-2xl border bg-card p-7 transition ${featured ? "border-[var(--color-violet)] shadow-[0_24px_60px_-28px_rgba(123,63,228,0.55)] dark:border-[var(--color-magenta)]" : "border-border"}`}>
      {featured && ribbon && (
        <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-[var(--color-tangerine)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
          {ribbon}
        </span>
      )}
      <h3 className="text-xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tagline}</p>
      <div className="mt-6">
        <div className="font-display text-3xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>{price}</div>
        {priceNote && <div className="mt-1 text-xs text-muted-foreground">{priceNote}</div>}
        {badge && (
          <span className="mt-3 inline-flex rounded-full bg-[var(--color-tangerine)]/10 px-2.5 py-1 text-[11px] font-medium text-[var(--color-tangerine)]">
            {badge}
          </span>
        )}
      </div>
      <ul className="mt-6 flex-1 space-y-2.5 border-t border-border pt-6">
        {features.map((f) => <CheckItem key={f}>{f}</CheckItem>)}
      </ul>
      <a
        href={href || "/contact"}
        className={`mt-7 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-medium transition ${featured ? "bg-[var(--color-violet)] text-white hover:bg-[var(--color-royal)] dark:bg-[var(--color-magenta)] dark:hover:bg-[var(--color-violet)]" : "border border-border bg-background text-foreground hover:bg-accent"}`}
      >
        Start the conversation <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}
