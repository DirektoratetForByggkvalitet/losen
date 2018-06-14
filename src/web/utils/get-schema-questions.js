import { buildNodeMap } from './reduce-wizard';

export default function getSchemaQuestions(schema) {
  const flatSchema = buildNodeMap(schema);

  // Return nodes that has "node.property" as they are questions
  return Object.keys(flatSchema).reduce((acc, id) => {
    if (flatSchema[id].property) {
      return { ...acc, [flatSchema[id].property]: { ...flatSchema[id] } };
    }
    return { ...acc };
  }, {});
}
