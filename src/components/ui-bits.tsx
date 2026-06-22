import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export function Pill({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "tangerine" }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur">
      <span className={`h-1.5 w-1.5 rounded-full ${tone === "tangerine" ? "bg-[var(--color-tangerine)]" : "bg-[var(--color-violet)]"}`} />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, sub, align = "left" }: { eyebrow?: string; title: ReactNode; sub?: ReactNode; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <div className="text-eyebrow mb-4">{eyebrow}</div>}
      <h2 className="text-h2">{title}</h2>
      {sub && <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

type BtnProps = {
  to?: string;
  href?: string;
  hash?: string;
  variant?: "primary" | "ghost" | "energy" | "darkGhost";
  children: ReactNode;
  className?: string;
  type?: "submit" | "button";
};
export function CTAButton({ to, href, hash, variant = "primary", children, className = "", type }: BtnProps) {
  const base = "inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-violet)]";
  const styles: Record<string, string> = {
    primary: "bg-[var(--color-violet)] text-white shadow-[0_10px_28px_-12px_rgba(123,63,228,0.7)] hover:bg-[var(--color-royal)] dark:bg-[var(--color-magenta)] dark:hover:bg-[var(--color-violet)]",
    ghost: "border border-border bg-transparent text-foreground hover:bg-accent",
    energy: "bg-[var(--color-tangerine)] text-white shadow-[0_10px_28px_-12px_rgba(255,107,53,0.7)] hover:brightness-95",
    darkGhost: "border border-white/25 text-white hover:bg-white/10",
  };
  const cls = `${base} ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </>
  );
  if (to) return <Link to={to} hash={hash} className={cls}>{content}</Link>;
  if (href) return <a href={href} className={cls}>{content}</a>;
  return <button type={type ?? "button"} className={cls}>{content}</button>;
}

export function StatBlock({ value, suffix, label, dark = false }: { value: string; suffix?: string; label: string; dark?: boolean }) {
  return (
    <div>
      <div className={`font-display text-4xl font-semibold tracking-tight md:text-5xl ${dark ? "text-white" : "text-foreground"}`} style={{ fontFamily: "var(--font-display)" }}>
        {value}
        {suffix && <span className="text-[var(--color-tangerine)]">{suffix}</span>}
      </div>
      <div className={`mt-2 text-sm ${dark ? "text-[var(--color-amethyst)]" : "text-muted-foreground"}`}>{label}</div>
    </div>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-foreground">
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-mist)] text-[var(--color-violet)] dark:bg-[var(--color-violet)]/20 dark:text-[var(--color-magenta)]">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export function CTABand({ title, sub, dark = true, primary, secondary }: { title: ReactNode; sub: ReactNode; dark?: boolean; primary: { label: string; to?: string; href?: string; variant?: "energy" | "primary" }; secondary?: { label: string; to?: string; href?: string; hash?: string } }) {
  return (
    <section className={dark ? "bg-[var(--color-indigo)] text-white" : "bg-[var(--color-mist)]"}>
      <div className="container-page py-20 md:py-28">
        <div className="grid items-end gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className={`text-h2 ${dark ? "text-white" : ""}`}>{title}</h2>
            <p className={`mt-5 max-w-xl text-[1.0625rem] leading-relaxed ${dark ? "text-[var(--color-amethyst)]" : "text-muted-foreground"}`}>{sub}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <CTAButton variant={primary.variant ?? "energy"} to={primary.to} href={primary.href}>{primary.label}</CTAButton>
            {secondary && (
              <CTAButton variant={dark ? "darkGhost" : "ghost"} to={secondary.to} href={secondary.href} hash={secondary.hash}>{secondary.label}</CTAButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
