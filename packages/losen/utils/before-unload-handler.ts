export default function beforeUnloadHandler(event: BeforeUnloadEvent) {
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  // eslint-disable-next-line
  event.returnValue = "";
}
