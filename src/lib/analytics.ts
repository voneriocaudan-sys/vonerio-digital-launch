// Lightweight analytics wrapper.
//
// Currently wired to Plausible (privacy-friendly, no consent banner, no
// measurement ID required — just the domain). The Plausible script is loaded
// in src/routes/__root.tsx; swap the `data-domain` attribute there for your
// own domain. To switch to GA4 later, replace the implementation of `track()`
// below with `window.gtag('event', name, props)` and load the GA4 snippet in
// __root.tsx instead.

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, unknown> }) => void;
  }
}

export type TrackEvent =
  | "cta_score_click"
  | "cta_diagnostic_click"
  | "scorecard_start"
  | "scorecard_complete"
  | "scorecard_email_captured"
  | "contact_form_submit"
  | "scheduling_booking_click";

export function track(event: TrackEvent, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    window.plausible?.(event, props ? { props } : undefined);
  } catch {
    /* never block UX on analytics */
  }
}

// Global click delegate: any element with `data-track="event_name"` fires
// that event. Lets us instrument CTAs across the site without threading
// callbacks through every component.
export function installAnalyticsDelegate() {
  if (typeof window === "undefined") return;
  if ((window as unknown as { __vonerioAnalytics?: boolean }).__vonerioAnalytics) return;
  (window as unknown as { __vonerioAnalytics?: boolean }).__vonerioAnalytics = true;

  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const name = el.getAttribute("data-track") as TrackEvent | null;
      if (!name) return;
      const props: Record<string, string> = {};
      for (const attr of Array.from(el.attributes)) {
        if (attr.name.startsWith("data-track-")) {
          props[attr.name.slice("data-track-".length)] = attr.value;
        }
      }
      track(name, Object.keys(props).length ? props : undefined);
    },
    { capture: true },
  );
}
