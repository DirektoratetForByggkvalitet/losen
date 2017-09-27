import { existsSync } from 'fs';

import program from 'commander';
import { version } from '../../package.json';

program
  .version(version)
  .description('Wizard schema validator')
  .parse(process.argv);

const schema = program.args[0];

if (!existsSync(schema)) {
  console.error(`${schema} not found. Did you misspell the file name?`);
  process.exit(1);
}


console.log('🌈');
