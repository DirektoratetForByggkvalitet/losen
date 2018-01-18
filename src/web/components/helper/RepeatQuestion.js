export default function repeatQuestion(img, text) {
  if (img && text && text.length > 200) {
    return true;
  }
  return false;
}
