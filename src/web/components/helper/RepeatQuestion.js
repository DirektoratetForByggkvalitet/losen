export default function repeatQuestion(img, text) {
  if (img && Object.prototype.hasOwnProperty.call(img, 'url') && text && text.length > 200) {
    return true;
  }
  return false;
}
