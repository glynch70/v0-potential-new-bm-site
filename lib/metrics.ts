import type { NextWebVitalsMetric } from "next/app";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.info(
      `[WebVitals] ${metric.name}: ${metric.value.toFixed(2)} (${metric.id})`
    );
  }

  if (typeof window === "undefined" || !GA_ID || typeof window.gtag !== "function") {
    return;
  }

  const value = metric.name === "CLS" ? metric.value : metric.value * 1000;

  window.gtag("event", metric.name, {
    event_category: metric.label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    event_action: metric.name,
    event_label: metric.id,
    value: Math.round(value),
    non_interaction: true,
  });
}
