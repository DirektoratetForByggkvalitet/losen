export default function repeatQuestion(
  img?: { url: string; alt: string },
  text?: string
) {
  if (
    img &&
    Object.prototype.hasOwnProperty.call(img, "url") &&
    text &&
    text.length > 200
  ) {
    return true;
  }
  return false;
}
