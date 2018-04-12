/* eslint-disable no-console */

import { existsSync, readFileSync } from 'fs';

import chalk from 'chalk';
import program from 'commander';
import validateSchema from '../shared/utils/validator';

program
  .version('1.0.0')
  .description('Wizard schema validator')
  .parse(process.argv);

const schema = program.args[0];

if (!existsSync(schema)) {
  console.error(`${schema} not found. Did you misspell the file name?`);
  process.exit(1);
}

let schemaDefinition;

try {
  schemaDefinition = JSON.parse(readFileSync(schema, { encoding: 'UTF-8' }));
} catch (e) {
  console.log('Unable to parse the schema file. Make sure its valid JSON');
  process.exit(1);
}

const errors = validateSchema(schemaDefinition);

if (!errors.length) {
  console.log('🌈  The schema is ok');
} else {
  console.log('🚒  There seems to be something wrong with your schema 👇\n');
  errors.forEach(({ path = [], id, error }) => {
    console.log(chalk`{red.bold ${path.join('.')} ${id ? `(${id})` : ''}}:
${error}
`);
  });
}
