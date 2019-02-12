/* eslint no-undef: 0 */
export default function track(wizardName, id, title) {
  if (typeof window.dataLayer === 'undefined') {
    window.dataLayer = [];
  }
  // DIBK tracking oppsett
  window.dataLayer.push({
    'newpage.path': `/verktoy-og-veivisere/${wizardName}/${id}`, // virtuell path til siden
    'newpage.title': title, // Tittel for den virtuelle siden. Dette er i dag plasser som event navn.
    event: 'newpage', // eventnavn som gjennbrukes for alle nye sider
  });
}

export function trackEvent(name) {
  if (typeof window.dataLayer === 'undefined') {
    window.dataLayer = [];
  }
  // DIBK tracking oppsett
  window.dataLayer.push({
    event: name,
  });
}
