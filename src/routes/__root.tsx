import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  ScriptOnce,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScorecardBand } from "../components/ScorecardBand";
import { installAnalyticsDelegate } from "../lib/analytics";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-[var(--color-violet)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-royal)]">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-full bg-[var(--color-violet)] px-5 py-2.5 text-sm font-medium text-white">Try again</button>
          <a href="/" className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vonerio Build a sales system your team runs without you" },
      { name: "description", content: "AI amplifies whatever's already there including the mess. Vonerio builds the sales system, clean data and process your AI actually needs. Enterprise rigor for $2M–$30M ARR teams. $26M+ closed by the operator behind it." },
      { property: "og:site_name", content: "Vonerio" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Vonerio Build a sales system your team runs without you" },
      { name: "twitter:title", content: "Vonerio Build a sales system your team runs without you" },
      { property: "og:description", content: "Diagnose. Build. Run. The sales system and the clean foundation your AI can finally act on." },
      { name: "twitter:description", content: "Diagnose. Build. Run. The sales system and the clean foundation your AI can finally act on." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/xVgeoZfTC3Vz16YH5Kstbd1a0UN2/social-images/social-1782050116659-vonerio-social.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/xVgeoZfTC3Vz16YH5Kstbd1a0UN2/social-images/social-1782050116659-vonerio-social.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
      // Preload the LCP founder portrait (used on home + about hero).
      { rel: "preload", as: "image", href: "/src/assets/loic-caudan.jpg", fetchpriority: "high" },
    ],
    scripts: [
      // Plausible analytics. Swap data-domain for your own (or replace with
      // your GA4 snippet) — see src/lib/analytics.ts.
      {
        defer: true,
        "data-domain": "vonerio.com",
        src: "https://plausible.io/js/script.js",
      },
      // Stub so calls before the script loads are queued.
      {
        children:
          "window.plausible = window.plausible || function(){(window.plausible.q=window.plausible.q||[]).push(arguments)};",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const themeInit = `(function(){try{var s=localStorage.getItem('vonerio-theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ScriptOnce>{themeInit}</ScriptOnce>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useEffect(() => { installAnalyticsDelegate(); }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Outlet />
      </main>
      <ScorecardBand />
      <Footer />
    </QueryClientProvider>
  );
}
