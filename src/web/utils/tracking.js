/* eslint no-underscore-dangle: 0 */
export default function track(wizardName, id, title) {
  const _paq = window._paq || [];

  // DIBK tracking setup for Matomo
  _paq.push(['setCustomUrl', `https://dibk.no/verktoy-og-veivisere/${wizardName}/${id}`]); // Virtual path
  _paq.push(['setDocumentTitle', title]); // Title for virtual page
  _paq.push(['trackPageView']);
}

export function trackEvent(action, name = '') {
  const _paq = window._paq || [];

  // DIBK tracking setup for Matomo
  _paq.push(['trackEvent', 'Wizard', action, name]);
}
