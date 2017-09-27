export default function track(name) {
  if (typeof dataLayer === 'undefined') {
    dataLayer = [];
  }
  dataLayer.push({ event: name }); /* eslint no-undef: 0 */
}
