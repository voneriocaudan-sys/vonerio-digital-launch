import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-border/70 bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center" aria-label="Vonerio home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <a
            href="/contact?interest=diagnostic"
            data-track="cta_diagnostic_click"
            data-track-location="navbar"
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:underline"
          >
            Book a diagnostic
          </a>
          <a
            href="/scorecard"
            data-track="cta_score_click"
            data-track-location="navbar"
            className={`inline-flex items-center gap-1.5 rounded-full bg-[var(--color-violet)] text-white shadow-[0_8px_24px_-12px_rgba(123,63,228,0.7)] transition hover:bg-[var(--color-royal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-violet)] focus-visible:ring-offset-2 dark:bg-[var(--color-magenta)] dark:hover:bg-[var(--color-violet)] ${scrolled ? "px-4 py-2 text-[13px]" : "px-5 py-2.5 text-sm"} font-medium`}
          >
            Score your team <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              data-track="cta_diagnostic_click"
              data-track-location="navbar_mobile"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground"
            >
              Book a diagnostic
            </Link>
            <a
              href="/scorecard"
              data-track="cta_score_click"
              data-track-location="navbar_mobile"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--color-violet)] px-5 py-3 text-sm font-medium text-white dark:bg-[var(--color-magenta)]"
            >
              Score your team <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
