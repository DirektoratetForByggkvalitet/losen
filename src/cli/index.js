#!/usr/bin/env node
const program = require('commander');

program
  .version('1.0.0')
  .description('CLI support tool for the DiBK wizard framework')
  .command('validate [schema file]', 'validate wizard schema file')
  .parse(process.argv);
