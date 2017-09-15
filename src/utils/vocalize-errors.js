export function vocalizeLeafError(error, nodeTitles = {}) {
  return error.map((part) => {
    if (typeof part === 'object' && part.field) {
      return `"${nodeTitles[part.field] || part.field}"`;
    }

    return part;
  }).join(' ');
}

export default function vocalizeErrors(errors, nodeTitles) {
  if (errors.operator) {
    return errors.errors.map(
      error => vocalizeErrors(error, nodeTitles),
    ).join(errors.operator === 'or' ? ' eller ' : ' og ');
  }

  if (Array.isArray(errors) && errors.length === 1) {
    return vocalizeLeafError(errors[0], nodeTitles);
  }

  return vocalizeLeafError(errors, nodeTitles);
}
