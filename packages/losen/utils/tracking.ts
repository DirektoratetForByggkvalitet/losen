declare global {
  interface Window {
    _paq?: any[];
  }
}

export function track(wizardName: string, id: string, title?: string) {
  const _paq = window._paq || [];

  // DIBK tracking setup for Matomo
  _paq.push([
    "setCustomUrl",
    `https://dibk.no/verktoy-og-veivisere/${wizardName}/${id}`,
  ]); // Virtual path
  _paq.push(["setDocumentTitle", title]); // Title for virtual page
  _paq.push(["trackPageView"]);
}

export function trackEvent(action: string, name: string = "") {
  const _paq = window._paq || [];

  // DIBK tracking setup for Matomo
  _paq.push(["trackEvent", "Wizard", action, name]);
}
