/* eslint no-undef: 0 */
export default function track(wizardName, id, title) {
  if (typeof dataLayer === 'undefined') {
    dataLayer = [];
  }
  // DIBK tracking oppsett
  dataLayer.push({
    'newpage.path': `/verktoy-og-veivisere/${wizardName}/${id}`, // virtuell path til siden
    'newpage.title': title, // Tittel for den virtuelle siden. Dette er i dag plasser som event navn.
    event: 'newpage', // eventnavn som gjennbrukes for alle nye sider
  });
}

export function trackEvent(name) {
  if (typeof dataLayer === 'undefined') {
    dataLayer = [];
  }
  // DIBK tracking oppsett
  dataLayer.push({
    event: name,
  });
}
