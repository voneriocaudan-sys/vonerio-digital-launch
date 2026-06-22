import { Link } from "@tanstack/react-router";
import { Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-indigo)] text-[var(--color-amethyst)]">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4 md:py-20">
        <div className="md:col-span-1">
          <div className="text-white"><Logo /></div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-amethyst)]">
            The sales system and the clean foundation your AI actually needs. Built by an operator who still carries a quota.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <a href="https://www.linkedin.com/in/lcaudan/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-white/40 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:contact@vonerio.com" aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-white/40 hover:text-white">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
        <FooterCol title="Services">
          <FooterLink to="/services" hash="diagnostic">Diagnostic</FooterLink>
          <FooterLink to="/services" hash="system-building">System Building</FooterLink>
          <FooterLink to="/services" hash="fractional">Fractional CRO</FooterLink>
        </FooterCol>
        <FooterCol title="Company">
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/about" hash="methodology">Methodology</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterCol>
        <FooterCol title="Get in touch">
          <a className="block text-sm text-[var(--color-amethyst)] transition hover:text-white" href="mailto:contact@vonerio.com">contact@vonerio.com</a>
          <Link to="/contact" className="block text-sm text-[var(--color-amethyst)] transition hover:text-white">Book a call</Link>
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-xs text-[var(--color-amethyst)]/80 md:flex-row md:items-center">
          <span>© {year} Vonerio. All rights reserved.</span>
          <span>EMEA · APAC · LatAm</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/80">{title}</h4>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}
function FooterLink({ to, hash, children }: { to: string; hash?: string; children: React.ReactNode }) {
  return (
    <Link to={to} hash={hash} className="block text-sm text-[var(--color-amethyst)] transition hover:text-white">
      {children}
    </Link>
  );
}
