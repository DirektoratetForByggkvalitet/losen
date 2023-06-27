type ResultProperty =
  | string
  | {
      incompleteWithError: string;
      incomplete: string;
      completeWithError: string;
      complete: string;
    };

export default function getResultText(
  property: undefined | string | ResultProperty,
  incomplete: boolean,
  hasSoftErrors: boolean
) {
  if (typeof property !== "object") {
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
