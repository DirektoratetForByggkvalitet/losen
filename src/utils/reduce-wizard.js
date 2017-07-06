export default function reduceWizard(schema) {
  return schema.filter(node => !!node);
}
