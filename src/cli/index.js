const program = require('commander');
const config = require('../../package.json');

program
  .version(config.version)
  .description('CLI support tool for the DiBK wizard framework')
  .command('validate [schema file]', 'validate wizard schema file')
  .parse(process.argv);
