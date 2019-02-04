export default function getResultText(property, incomplete, hasSoftErrors) {
  if (typeof property !== 'object') {
    return property;
  }

  if (incomplete && hasSoftErrors) {
    return property.incompleteWithError;
  }

  if (incomplete && !hasSoftErrors) {
    return property.incomplete;
  }

  if (hasSoftErrors) {
    return property.completeWithError;
  }

  return property.complete;
}
