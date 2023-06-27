export function vocalizeLeafError(error: any, nodeTitles: any = {}): string {
  return error
    .map((part: any) => {
      if (typeof part === "object" && part.field) {
        return `"${nodeTitles[part.field] || part.field}"`;
      }

      return part;
    })
    .join(" ");
}

export default function vocalizeErrors(errors: any, nodeTitles: any): string {
  if (errors.operator) {
    return errors.errors
      .map((error: any) => vocalizeErrors(error, nodeTitles))
      .join(errors.operator === "or" ? " eller " : " og ");
  }

  if (Array.isArray(errors) && errors.length === 1) {
    return vocalizeLeafError(errors[0], nodeTitles);
  }

  return vocalizeLeafError(errors, nodeTitles);
}
