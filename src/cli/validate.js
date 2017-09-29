import { existsSync } from 'fs';

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

if (validateSchema(schema)) {
  console.log('🌈');
} else {
  console.log('⛈');
}
