export default function track(name) {
  dataLayer.push({ event: name }); /* eslint no-undef: 0 */
}
