// Umami tracking helpers
export function trackEvent(name: string, data?: Record<string, string | number>) {
  if (typeof window !== "undefined" && (window as any).umami) {
    (window as any).umami.track(name, data);
  }
}

export function getUTMParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  return utm;
}

export function trackUTM() {
  const utm = getUTMParams();
  if (Object.keys(utm).length > 0) {
    trackEvent("utm-visit", utm);
    // Store for later form submissions
    sessionStorage.setItem("utm_params", JSON.stringify(utm));
  }
}

export function trackCTA(name: string) {
  const utm = JSON.parse(sessionStorage.getItem("utm_params") || "{}");
  trackEvent(`cta-${name}`, utm);
}
