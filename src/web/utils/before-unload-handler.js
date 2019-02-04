export default function beforeUnloadHandler(event) {
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  // eslint-disable-next-line
  event.returnValue = '';
}
