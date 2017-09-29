/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var EventEmitter = __webpack_require__(2).EventEmitter;
var spawn = __webpack_require__(3).spawn;
var path = __webpack_require__(4);
var dirname = path.dirname;
var basename = path.basename;
var fs = __webpack_require__(0);

/**
 * Expose the root command.
 */

exports = module.exports = new Command();

/**
 * Expose `Command`.
 */

exports.Command = Command;

/**
 * Expose `Option`.
 */

exports.Option = Option;

/**
 * Initialize a new `Option` with the given `flags` and `description`.
 *
 * @param {String} flags
 * @param {String} description
 * @api public
 */

function Option(flags, description) {
  this.flags = flags;
  this.required = ~flags.indexOf('<');
  this.optional = ~flags.indexOf('[');
  this.bool = !~flags.indexOf('-no-');
  flags = flags.split(/[ ,|]+/);
  if (flags.length > 1 && !/^[[<]/.test(flags[1])) this.short = flags.shift();
  this.long = flags.shift();
  this.description = description || '';
}

/**
 * Return option name.
 *
 * @return {String}
 * @api private
 */

Option.prototype.name = function() {
  return this.long
    .replace('--', '')
    .replace('no-', '');
};

/**
 * Check if `arg` matches the short or long flag.
 *
 * @param {String} arg
 * @return {Boolean}
 * @api private
 */

Option.prototype.is = function(arg) {
  return arg == this.short || arg == this.long;
};

/**
 * Initialize a new `Command`.
 *
 * @param {String} name
 * @api public
 */

function Command(name) {
  this.commands = [];
  this.options = [];
  this._execs = {};
  this._allowUnknownOption = false;
  this._args = [];
  this._name = name || '';
}

/**
 * Inherit from `EventEmitter.prototype`.
 */

Command.prototype.__proto__ = EventEmitter.prototype;

/**
 * Add command `name`.
 *
 * The `.action()` callback is invoked when the
 * command `name` is specified via __ARGV__,
 * and the remaining arguments are applied to the
 * function for access.
 *
 * When the `name` is "*" an un-matched command
 * will be passed as the first arg, followed by
 * the rest of __ARGV__ remaining.
 *
 * Examples:
 *
 *      program
 *        .version('0.0.1')
 *        .option('-C, --chdir <path>', 'change the working directory')
 *        .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
 *        .option('-T, --no-tests', 'ignore test hook')
 *
 *      program
 *        .command('setup')
 *        .description('run remote setup commands')
 *        .action(function() {
 *          console.log('setup');
 *        });
 *
 *      program
 *        .command('exec <cmd>')
 *        .description('run the given remote command')
 *        .action(function(cmd) {
 *          console.log('exec "%s"', cmd);
 *        });
 *
 *      program
 *        .command('teardown <dir> [otherDirs...]')
 *        .description('run teardown commands')
 *        .action(function(dir, otherDirs) {
 *          console.log('dir "%s"', dir);
 *          if (otherDirs) {
 *            otherDirs.forEach(function (oDir) {
 *              console.log('dir "%s"', oDir);
 *            });
 *          }
 *        });
 *
 *      program
 *        .command('*')
 *        .description('deploy the given env')
 *        .action(function(env) {
 *          console.log('deploying "%s"', env);
 *        });
 *
 *      program.parse(process.argv);
  *
 * @param {String} name
 * @param {String} [desc] for git-style sub-commands
 * @return {Command} the new command
 * @api public
 */

Command.prototype.command = function(name, desc, opts) {
  opts = opts || {};
  var args = name.split(/ +/);
  var cmd = new Command(args.shift());

  if (desc) {
    cmd.description(desc);
    this.executables = true;
    this._execs[cmd._name] = true;
    if (opts.isDefault) this.defaultExecutable = cmd._name;
  }

  cmd._noHelp = !!opts.noHelp;
  this.commands.push(cmd);
  cmd.parseExpectedArgs(args);
  cmd.parent = this;

  if (desc) return this;
  return cmd;
};

/**
 * Define argument syntax for the top-level command.
 *
 * @api public
 */

Command.prototype.arguments = function (desc) {
  return this.parseExpectedArgs(desc.split(/ +/));
};

/**
 * Add an implicit `help [cmd]` subcommand
 * which invokes `--help` for the given command.
 *
 * @api private
 */

Command.prototype.addImplicitHelpCommand = function() {
  this.command('help [cmd]', 'display help for [cmd]');
};

/**
 * Parse expected `args`.
 *
 * For example `["[type]"]` becomes `[{ required: false, name: 'type' }]`.
 *
 * @param {Array} args
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.parseExpectedArgs = function(args) {
  if (!args.length) return;
  var self = this;
  args.forEach(function(arg) {
    var argDetails = {
      required: false,
      name: '',
      variadic: false
    };

    switch (arg[0]) {
      case '<':
        argDetails.required = true;
        argDetails.name = arg.slice(1, -1);
        break;
      case '[':
        argDetails.name = arg.slice(1, -1);
        break;
    }

    if (argDetails.name.length > 3 && argDetails.name.slice(-3) === '...') {
      argDetails.variadic = true;
      argDetails.name = argDetails.name.slice(0, -3);
    }
    if (argDetails.name) {
      self._args.push(argDetails);
    }
  });
  return this;
};

/**
 * Register callback `fn` for the command.
 *
 * Examples:
 *
 *      program
 *        .command('help')
 *        .description('display verbose help')
 *        .action(function() {
 *           // output help here
 *        });
 *
 * @param {Function} fn
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.action = function(fn) {
  var self = this;
  var listener = function(args, unknown) {
    // Parse any so-far unknown options
    args = args || [];
    unknown = unknown || [];

    var parsed = self.parseOptions(unknown);

    // Output help if necessary
    outputHelpIfNecessary(self, parsed.unknown);

    // If there are still any unknown options, then we simply
    // die, unless someone asked for help, in which case we give it
    // to them, and then we die.
    if (parsed.unknown.length > 0) {
      self.unknownOption(parsed.unknown[0]);
    }

    // Leftover arguments need to be pushed back. Fixes issue #56
    if (parsed.args.length) args = parsed.args.concat(args);

    self._args.forEach(function(arg, i) {
      if (arg.required && null == args[i]) {
        self.missingArgument(arg.name);
      } else if (arg.variadic) {
        if (i !== self._args.length - 1) {
          self.variadicArgNotLast(arg.name);
        }

        args[i] = args.splice(i);
      }
    });

    // Always append ourselves to the end of the arguments,
    // to make sure we match the number of arguments the user
    // expects
    if (self._args.length) {
      args[self._args.length] = self;
    } else {
      args.push(self);
    }

    fn.apply(self, args);
  };
  var parent = this.parent || this;
  var name = parent === this ? '*' : this._name;
  parent.on('command:' + name, listener);
  if (this._alias) parent.on('command:' + this._alias, listener);
  return this;
};

/**
 * Define option with `flags`, `description` and optional
 * coercion `fn`.
 *
 * The `flags` string should contain both the short and long flags,
 * separated by comma, a pipe or space. The following are all valid
 * all will output this way when `--help` is used.
 *
 *    "-p, --pepper"
 *    "-p|--pepper"
 *    "-p --pepper"
 *
 * Examples:
 *
 *     // simple boolean defaulting to false
 *     program.option('-p, --pepper', 'add pepper');
 *
 *     --pepper
 *     program.pepper
 *     // => Boolean
 *
 *     // simple boolean defaulting to true
 *     program.option('-C, --no-cheese', 'remove cheese');
 *
 *     program.cheese
 *     // => true
 *
 *     --no-cheese
 *     program.cheese
 *     // => false
 *
 *     // required argument
 *     program.option('-C, --chdir <path>', 'change the working directory');
 *
 *     --chdir /tmp
 *     program.chdir
 *     // => "/tmp"
 *
 *     // optional argument
 *     program.option('-c, --cheese [type]', 'add cheese [marble]');
 *
 * @param {String} flags
 * @param {String} description
 * @param {Function|*} [fn] or default
 * @param {*} [defaultValue]
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.option = function(flags, description, fn, defaultValue) {
  var self = this
    , option = new Option(flags, description)
    , oname = option.name()
    , name = camelcase(oname);

  // default as 3rd arg
  if (typeof fn != 'function') {
    if (fn instanceof RegExp) {
      var regex = fn;
      fn = function(val, def) {
        var m = regex.exec(val);
        return m ? m[0] : def;
      }
    }
    else {
      defaultValue = fn;
      fn = null;
    }
  }

  // preassign default value only for --no-*, [optional], or <required>
  if (false == option.bool || option.optional || option.required) {
    // when --no-* we make sure default is true
    if (false == option.bool) defaultValue = true;
    // preassign only if we have a default
    if (undefined !== defaultValue) self[name] = defaultValue;
  }

  // register the option
  this.options.push(option);

  // when it's passed assign the value
  // and conditionally invoke the callback
  this.on('option:' + oname, function(val) {
    // coercion
    if (null !== val && fn) val = fn(val, undefined === self[name]
      ? defaultValue
      : self[name]);

    // unassigned or bool
    if ('boolean' == typeof self[name] || 'undefined' == typeof self[name]) {
      // if no value, bool true, and we have a default, then use it!
      if (null == val) {
        self[name] = option.bool
          ? defaultValue || true
          : false;
      } else {
        self[name] = val;
      }
    } else if (null !== val) {
      // reassign
      self[name] = val;
    }
  });

  return this;
};

/**
 * Allow unknown options on the command line.
 *
 * @param {Boolean} arg if `true` or omitted, no error will be thrown
 * for unknown options.
 * @api public
 */
Command.prototype.allowUnknownOption = function(arg) {
    this._allowUnknownOption = arguments.length === 0 || arg;
    return this;
};

/**
 * Parse `argv`, settings options and invoking commands when defined.
 *
 * @param {Array} argv
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.parse = function(argv) {
  // implicit help
  if (this.executables) this.addImplicitHelpCommand();

  // store raw args
  this.rawArgs = argv;

  // guess name
  this._name = this._name || basename(argv[1], '.js');

  // github-style sub-commands with no sub-command
  if (this.executables && argv.length < 3 && !this.defaultExecutable) {
    // this user needs help
    argv.push('--help');
  }

  // process argv
  var parsed = this.parseOptions(this.normalize(argv.slice(2)));
  var args = this.args = parsed.args;

  var result = this.parseArgs(this.args, parsed.unknown);

  // executable sub-commands
  var name = result.args[0];

  var aliasCommand = null;
  // check alias of sub commands
  if (name) {
    aliasCommand = this.commands.filter(function(command) {
      return command.alias() === name;
    })[0];
  }

  if (this._execs[name] && typeof this._execs[name] != "function") {
    return this.executeSubCommand(argv, args, parsed.unknown);
  } else if (aliasCommand) {
    // is alias of a subCommand
    args[0] = aliasCommand._name;
    return this.executeSubCommand(argv, args, parsed.unknown);
  } else if (this.defaultExecutable) {
    // use the default subcommand
    args.unshift(this.defaultExecutable);
    return this.executeSubCommand(argv, args, parsed.unknown);
  }

  return result;
};

/**
 * Execute a sub-command executable.
 *
 * @param {Array} argv
 * @param {Array} args
 * @param {Array} unknown
 * @api private
 */

Command.prototype.executeSubCommand = function(argv, args, unknown) {
  args = args.concat(unknown);

  if (!args.length) this.help();
  if ('help' == args[0] && 1 == args.length) this.help();

  // <cmd> --help
  if ('help' == args[0]) {
    args[0] = args[1];
    args[1] = '--help';
  }

  // executable
  var f = argv[1];
  // name of the subcommand, link `pm-install`
  var bin = basename(f, '.js') + '-' + args[0];


  // In case of globally installed, get the base dir where executable
  //  subcommand file should be located at
  var baseDir
    , link = fs.lstatSync(f).isSymbolicLink() ? fs.readlinkSync(f) : f;

  // when symbolink is relative path
  if (link !== f && link.charAt(0) !== '/') {
    link = path.join(dirname(f), link)
  }
  baseDir = dirname(link);

  // prefer local `./<bin>` to bin in the $PATH
  var localBin = path.join(baseDir, bin);

  // whether bin file is a js script with explicit `.js` extension
  var isExplicitJS = false;
  if (exists(localBin + '.js')) {
    bin = localBin + '.js';
    isExplicitJS = true;
  } else if (exists(localBin)) {
    bin = localBin;
  }

  args = args.slice(1);

  var proc;
  if (process.platform !== 'win32') {
    if (isExplicitJS) {
      args.unshift(bin);
      // add executable arguments to spawn
      args = (process.execArgv || []).concat(args);

      proc = spawn('node', args, { stdio: 'inherit', customFds: [0, 1, 2] });
    } else {
      proc = spawn(bin, args, { stdio: 'inherit', customFds: [0, 1, 2] });
    }
  } else {
    args.unshift(bin);
    proc = spawn(process.execPath, args, { stdio: 'inherit'});
  }

  var signals = ['SIGUSR1', 'SIGUSR2', 'SIGTERM', 'SIGINT', 'SIGHUP'];
  signals.forEach(function(signal) {
    process.on(signal, function(){
      if ((proc.killed === false) && (proc.exitCode === null)){
        proc.kill(signal);
      }
    });
  });
  proc.on('close', process.exit.bind(process));
  proc.on('error', function(err) {
    if (err.code == "ENOENT") {
      console.error('\n  %s(1) does not exist, try --help\n', bin);
    } else if (err.code == "EACCES") {
      console.error('\n  %s(1) not executable. try chmod or run with root\n', bin);
    }
    process.exit(1);
  });

  // Store the reference to the child process
  this.runningCommand = proc;
};

/**
 * Normalize `args`, splitting joined short flags. For example
 * the arg "-abc" is equivalent to "-a -b -c".
 * This also normalizes equal sign and splits "--abc=def" into "--abc def".
 *
 * @param {Array} args
 * @return {Array}
 * @api private
 */

Command.prototype.normalize = function(args) {
  var ret = []
    , arg
    , lastOpt
    , index;

  for (var i = 0, len = args.length; i < len; ++i) {
    arg = args[i];
    if (i > 0) {
      lastOpt = this.optionFor(args[i-1]);
    }

    if (arg === '--') {
      // Honor option terminator
      ret = ret.concat(args.slice(i));
      break;
    } else if (lastOpt && lastOpt.required) {
      ret.push(arg);
    } else if (arg.length > 1 && '-' == arg[0] && '-' != arg[1]) {
      arg.slice(1).split('').forEach(function(c) {
        ret.push('-' + c);
      });
    } else if (/^--/.test(arg) && ~(index = arg.indexOf('='))) {
      ret.push(arg.slice(0, index), arg.slice(index + 1));
    } else {
      ret.push(arg);
    }
  }

  return ret;
};

/**
 * Parse command `args`.
 *
 * When listener(s) are available those
 * callbacks are invoked, otherwise the "*"
 * event is emitted and those actions are invoked.
 *
 * @param {Array} args
 * @return {Command} for chaining
 * @api private
 */

Command.prototype.parseArgs = function(args, unknown) {
  var name;

  if (args.length) {
    name = args[0];
    if (this.listeners('command:' + name).length) {
      this.emit('command:' + args.shift(), args, unknown);
    } else {
      this.emit('command:*', args);
    }
  } else {
    outputHelpIfNecessary(this, unknown);

    // If there were no args and we have unknown options,
    // then they are extraneous and we need to error.
    if (unknown.length > 0) {
      this.unknownOption(unknown[0]);
    }
  }

  return this;
};

/**
 * Return an option matching `arg` if any.
 *
 * @param {String} arg
 * @return {Option}
 * @api private
 */

Command.prototype.optionFor = function(arg) {
  for (var i = 0, len = this.options.length; i < len; ++i) {
    if (this.options[i].is(arg)) {
      return this.options[i];
    }
  }
};

/**
 * Parse options from `argv` returning `argv`
 * void of these options.
 *
 * @param {Array} argv
 * @return {Array}
 * @api public
 */

Command.prototype.parseOptions = function(argv) {
  var args = []
    , len = argv.length
    , literal
    , option
    , arg;

  var unknownOptions = [];

  // parse options
  for (var i = 0; i < len; ++i) {
    arg = argv[i];

    // literal args after --
    if (literal) {
      args.push(arg);
      continue;
    }

    if ('--' == arg) {
      literal = true;
      continue;
    }

    // find matching Option
    option = this.optionFor(arg);

    // option is defined
    if (option) {
      // requires arg
      if (option.required) {
        arg = argv[++i];
        if (null == arg) return this.optionMissingArgument(option);
        this.emit('option:' + option.name(), arg);
      // optional arg
      } else if (option.optional) {
        arg = argv[i+1];
        if (null == arg || ('-' == arg[0] && '-' != arg)) {
          arg = null;
        } else {
          ++i;
        }
        this.emit('option:' + option.name(), arg);
      // bool
      } else {
        this.emit('option:' + option.name());
      }
      continue;
    }

    // looks like an option
    if (arg.length > 1 && '-' == arg[0]) {
      unknownOptions.push(arg);

      // If the next argument looks like it might be
      // an argument for this option, we pass it on.
      // If it isn't, then it'll simply be ignored
      if (argv[i+1] && '-' != argv[i+1][0]) {
        unknownOptions.push(argv[++i]);
      }
      continue;
    }

    // arg
    args.push(arg);
  }

  return { args: args, unknown: unknownOptions };
};

/**
 * Return an object containing options as key-value pairs
 *
 * @return {Object}
 * @api public
 */
Command.prototype.opts = function() {
  var result = {}
    , len = this.options.length;

  for (var i = 0 ; i < len; i++) {
    var key = camelcase(this.options[i].name());
    result[key] = key === 'version' ? this._version : this[key];
  }
  return result;
};

/**
 * Argument `name` is missing.
 *
 * @param {String} name
 * @api private
 */

Command.prototype.missingArgument = function(name) {
  console.error();
  console.error("  error: missing required argument `%s'", name);
  console.error();
  process.exit(1);
};

/**
 * `Option` is missing an argument, but received `flag` or nothing.
 *
 * @param {String} option
 * @param {String} flag
 * @api private
 */

Command.prototype.optionMissingArgument = function(option, flag) {
  console.error();
  if (flag) {
    console.error("  error: option `%s' argument missing, got `%s'", option.flags, flag);
  } else {
    console.error("  error: option `%s' argument missing", option.flags);
  }
  console.error();
  process.exit(1);
};

/**
 * Unknown option `flag`.
 *
 * @param {String} flag
 * @api private
 */

Command.prototype.unknownOption = function(flag) {
  if (this._allowUnknownOption) return;
  console.error();
  console.error("  error: unknown option `%s'", flag);
  console.error();
  process.exit(1);
};

/**
 * Variadic argument with `name` is not the last argument as required.
 *
 * @param {String} name
 * @api private
 */

Command.prototype.variadicArgNotLast = function(name) {
  console.error();
  console.error("  error: variadic arguments must be last `%s'", name);
  console.error();
  process.exit(1);
};

/**
 * Set the program version to `str`.
 *
 * This method auto-registers the "-V, --version" flag
 * which will print the version number when passed.
 *
 * @param {String} str
 * @param {String} [flags]
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.version = function(str, flags) {
  if (0 == arguments.length) return this._version;
  this._version = str;
  flags = flags || '-V, --version';
  this.option(flags, 'output the version number');
  this.on('option:version', function() {
    process.stdout.write(str + '\n');
    process.exit(0);
  });
  return this;
};

/**
 * Set the description to `str`.
 *
 * @param {String} str
 * @return {String|Command}
 * @api public
 */

Command.prototype.description = function(str) {
  if (0 === arguments.length) return this._description;
  this._description = str;
  return this;
};

/**
 * Set an alias for the command
 *
 * @param {String} alias
 * @return {String|Command}
 * @api public
 */

Command.prototype.alias = function(alias) {
  var command = this;
  if(this.commands.length !== 0) {
    command = this.commands[this.commands.length - 1]
  }

  if (arguments.length === 0) return command._alias;

  command._alias = alias;
  return this;
};

/**
 * Set / get the command usage `str`.
 *
 * @param {String} str
 * @return {String|Command}
 * @api public
 */

Command.prototype.usage = function(str) {
  var args = this._args.map(function(arg) {
    return humanReadableArgName(arg);
  });

  var usage = '[options]'
    + (this.commands.length ? ' [command]' : '')
    + (this._args.length ? ' ' + args.join(' ') : '');

  if (0 == arguments.length) return this._usage || usage;
  this._usage = str;

  return this;
};

/**
 * Get or set the name of the command
 *
 * @param {String} str
 * @return {String|Command}
 * @api public
 */

Command.prototype.name = function(str) {
  if (0 === arguments.length) return this._name;
  this._name = str;
  return this;
};

/**
 * Return the largest option length.
 *
 * @return {Number}
 * @api private
 */

Command.prototype.largestOptionLength = function() {
  return this.options.reduce(function(max, option) {
    return Math.max(max, option.flags.length);
  }, 0);
};

/**
 * Return help for options.
 *
 * @return {String}
 * @api private
 */

Command.prototype.optionHelp = function() {
  var width = this.largestOptionLength();

  // Append the help information
  return this.options.map(function(option) {
      return pad(option.flags, width) + '  ' + option.description;
    }).concat([pad('-h, --help', width) + '  ' + 'output usage information'])
    .join('\n');
};

/**
 * Return command help documentation.
 *
 * @return {String}
 * @api private
 */

Command.prototype.commandHelp = function() {
  if (!this.commands.length) return '';

  var commands = this.commands.filter(function(cmd) {
    return !cmd._noHelp;
  }).map(function(cmd) {
    var args = cmd._args.map(function(arg) {
      return humanReadableArgName(arg);
    }).join(' ');

    return [
      cmd._name
        + (cmd._alias ? '|' + cmd._alias : '')
        + (cmd.options.length ? ' [options]' : '')
        + ' ' + args
      , cmd._description
    ];
  });

  var width = commands.reduce(function(max, command) {
    return Math.max(max, command[0].length);
  }, 0);

  return [
    ''
    , '  Commands:'
    , ''
    , commands.map(function(cmd) {
      var desc = cmd[1] ? '  ' + cmd[1] : '';
      return pad(cmd[0], width) + desc;
    }).join('\n').replace(/^/gm, '    ')
    , ''
  ].join('\n');
};

/**
 * Return program help documentation.
 *
 * @return {String}
 * @api private
 */

Command.prototype.helpInformation = function() {
  var desc = [];
  if (this._description) {
    desc = [
      '  ' + this._description
      , ''
    ];
  }

  var cmdName = this._name;
  if (this._alias) {
    cmdName = cmdName + '|' + this._alias;
  }
  var usage = [
    ''
    ,'  Usage: ' + cmdName + ' ' + this.usage()
    , ''
  ];

  var cmds = [];
  var commandHelp = this.commandHelp();
  if (commandHelp) cmds = [commandHelp];

  var options = [
    ''
    , '  Options:'
    , ''
    , '' + this.optionHelp().replace(/^/gm, '    ')
    , ''
  ];

  return usage
    .concat(desc)
    .concat(options)
    .concat(cmds)
    .join('\n');
};

/**
 * Output help information for this command
 *
 * @api public
 */

Command.prototype.outputHelp = function(cb) {
  if (!cb) {
    cb = function(passthru) {
      return passthru;
    }
  }
  process.stdout.write(cb(this.helpInformation()));
  this.emit('--help');
};

/**
 * Output help information and exit.
 *
 * @api public
 */

Command.prototype.help = function(cb) {
  this.outputHelp(cb);
  process.exit();
};

/**
 * Camel-case the given `flag`
 *
 * @param {String} flag
 * @return {String}
 * @api private
 */

function camelcase(flag) {
  return flag.split('-').reduce(function(str, word) {
    return str + word[0].toUpperCase() + word.slice(1);
  });
}

/**
 * Pad `str` to `width`.
 *
 * @param {String} str
 * @param {Number} width
 * @return {String}
 * @api private
 */

function pad(str, width) {
  var len = Math.max(0, width - str.length);
  return str + Array(len + 1).join(' ');
}

/**
 * Output help information if necessary
 *
 * @param {Command} command to output help for
 * @param {Array} array of options to search for -h or --help
 * @api private
 */

function outputHelpIfNecessary(cmd, options) {
  options = options || [];
  for (var i = 0; i < options.length; i++) {
    if (options[i] == '--help' || options[i] == '-h') {
      cmd.outputHelp();
      process.exit(0);
    }
  }
}

/**
 * Takes an argument an returns its human readable equivalent for help usage.
 *
 * @param {Object} arg
 * @return {String}
 * @api private
 */

function humanReadableArgName(arg) {
  var nameOutput = arg.name + (arg.variadic === true ? '...' : '');

  return arg.required
    ? '<' + nameOutput + '>'
    : '[' + nameOutput + ']'
}

// for versions before node v0.8 when there weren't `fs.existsSync`
function exists(file) {
  try {
    if (fs.statSync(file).isFile()) {
      return true;
    }
  } catch (e) {
    return false;
  }
}



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(13);

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var v;

	if (max === 0) {
		s = 0;
	} else {
		s = (delta / max * 1000) / 10;
	}

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	v = ((max / 255) * 1000) / 10;

	return [h, s, v];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['{red.bold ', '}:\n', '\n'], ['{red.bold ', '}:\n', '\n']);

var _fs = __webpack_require__(0);

var _chalk = __webpack_require__(8);

var _chalk2 = _interopRequireDefault(_chalk);

var _commander = __webpack_require__(1);

var _commander2 = _interopRequireDefault(_commander);

var _validator = __webpack_require__(19);

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

_commander2.default.version('1.0.0').description('Wizard schema validator').parse(process.argv);

var schema = _commander2.default.args[0];

if (!(0, _fs.existsSync)(schema)) {
  console.error(schema + ' not found. Did you misspell the file name?');
  process.exit(1);
}

var schemaDefinition = void 0;

try {
  schemaDefinition = JSON.parse((0, _fs.readFileSync)(schema, { encoding: 'UTF-8' }));
} catch (e) {
  console.log('Unable to parse the schema file. Make sure its valid JSON');
  process.exit(1);
}

var errors = (0, _validator2.default)(schemaDefinition);

if (!errors.length) {
  console.log('🌈  The schema is ok');
} else {
  console.log('🚒  There seems to be something wrong with your schema 👇\n');
  errors.forEach(function (_ref) {
    var _ref$path = _ref.path,
        path = _ref$path === undefined ? [] : _ref$path,
        error = _ref.error;

    console.log((0, _chalk2.default)(_templateObject, path.join('.'), error));
  });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const escapeStringRegexp = __webpack_require__(9);
const ansiStyles = __webpack_require__(10);
const supportsColor = __webpack_require__(15);

const template = __webpack_require__(18);

const isSimpleWindowsTerm = process.platform === 'win32' && !(process.env.TERM || '').toLowerCase().startsWith('xterm');

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m'];

// `color-convert` models to exclude from the Chalk API due to conflicts and such
const skipModels = new Set(['gray']);

const styles = Object.create(null);

function applyOptions(obj, options) {
	options = options || {};

	// Detect level if not set manually
	const scLevel = supportsColor ? supportsColor.level : 0;
	obj.level = options.level === undefined ? scLevel : options.level;
	obj.enabled = 'enabled' in options ? options.enabled : obj.level > 0;
}

function Chalk(options) {
	// We check for this.template here since calling `chalk.constructor()`
	// by itself will have a `this` of a previously constructed chalk object
	if (!this || !(this instanceof Chalk) || this.template) {
		const chalk = {};
		applyOptions(chalk, options);

		chalk.template = function () {
			const args = [].slice.call(arguments);
			return chalkTag.apply(null, [chalk.template].concat(args));
		};

		Object.setPrototypeOf(chalk, Chalk.prototype);
		Object.setPrototypeOf(chalk.template, chalk);

		chalk.template.constructor = Chalk;

		return chalk.template;
	}

	applyOptions(this, options);
}

// Use bright blue on Windows as the normal blue color is illegible
if (isSimpleWindowsTerm) {
	ansiStyles.blue.open = '\u001B[94m';
}

for (const key of Object.keys(ansiStyles)) {
	ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

	styles[key] = {
		get() {
			const codes = ansiStyles[key];
			return build.call(this, this._styles ? this._styles.concat(codes) : [codes], key);
		}
	};
}

ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), 'g');
for (const model of Object.keys(ansiStyles.color.ansi)) {
	if (skipModels.has(model)) {
		continue;
	}

	styles[model] = {
		get() {
			const level = this.level;
			return function () {
				const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
				const codes = {
					open,
					close: ansiStyles.color.close,
					closeRe: ansiStyles.color.closeRe
				};
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], model);
			};
		}
	};
}

ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), 'g');
for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
	if (skipModels.has(model)) {
		continue;
	}

	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const level = this.level;
			return function () {
				const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
				const codes = {
					open,
					close: ansiStyles.bgColor.close,
					closeRe: ansiStyles.bgColor.closeRe
				};
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], model);
			};
		}
	};
}

const proto = Object.defineProperties(() => {}, styles);

function build(_styles, key) {
	const builder = function () {
		return applyStyle.apply(builder, arguments);
	};

	builder._styles = _styles;

	const self = this;

	Object.defineProperty(builder, 'level', {
		enumerable: true,
		get() {
			return self.level;
		},
		set(level) {
			self.level = level;
		}
	});

	Object.defineProperty(builder, 'enabled', {
		enumerable: true,
		get() {
			return self.enabled;
		},
		set(enabled) {
			self.enabled = enabled;
		}
	});

	// See below for fix regarding invisible grey/dim combination on Windows
	builder.hasGrey = this.hasGrey || key === 'gray' || key === 'grey';

	// `__proto__` is used because we must return a function, but there is
	// no way to create a function with a different prototype
	builder.__proto__ = proto; // eslint-disable-line no-proto

	return builder;
}

function applyStyle() {
	// Support varags, but simply cast to string in case there's only one arg
	const args = arguments;
	const argsLen = args.length;
	let str = String(arguments[0]);

	if (argsLen === 0) {
		return '';
	}

	if (argsLen > 1) {
		// Don't slice `arguments`, it prevents V8 optimizations
		for (let a = 1; a < argsLen; a++) {
			str += ' ' + args[a];
		}
	}

	if (!this.enabled || this.level <= 0 || !str) {
		return str;
	}

	// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
	// see https://github.com/chalk/chalk/issues/58
	// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
	const originalDim = ansiStyles.dim.open;
	if (isSimpleWindowsTerm && this.hasGrey) {
		ansiStyles.dim.open = '';
	}

	for (const code of this._styles.slice().reverse()) {
		// Replace any instances already present with a re-opening code
		// otherwise only the part of the string until said closing code
		// will be colored, and the rest will simply be 'plain'.
		str = code.open + str.replace(code.closeRe, code.open) + code.close;

		// Close the styling before a linebreak and reopen
		// after next line to fix a bleed issue on macOS
		// https://github.com/chalk/chalk/pull/92
		str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
	}

	// Reset the original `dim` if we changed it to work around the Windows dimmed gray issue
	ansiStyles.dim.open = originalDim;

	return str;
}

function chalkTag(chalk, strings) {
	if (!Array.isArray(strings)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return [].slice.call(arguments, 1).join(' ');
	}

	const args = [].slice.call(arguments, 2);
	const parts = [strings.raw[0]];

	for (let i = 1; i < strings.length; i++) {
		parts.push(String(args[i - 1]).replace(/[{}\\]/g, '\\$&'));
		parts.push(String(strings.raw[i]));
	}

	return template(chalk, parts.join(''));
}

Object.defineProperties(Chalk.prototype, styles);

module.exports = Chalk(); // eslint-disable-line new-cap
module.exports.supportsColor = supportsColor;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
const colorConvert = __webpack_require__(12);

const wrapAnsi16 = (fn, offset) => function () {
	const code = fn.apply(colorConvert, arguments);
	return `\u001B[${code + offset}m`;
};

const wrapAnsi256 = (fn, offset) => function () {
	const code = fn.apply(colorConvert, arguments);
	return `\u001B[${38 + offset};5;${code}m`;
};

const wrapAnsi16m = (fn, offset) => function () {
	const rgb = fn.apply(colorConvert, arguments);
	return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};

function assembleStyles() {
	const codes = new Map();
	const styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],
			gray: [90, 39],

			// Bright color
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Fix humans
	styles.color.grey = styles.color.gray;

	for (const groupName of Object.keys(styles)) {
		const group = styles[groupName];

		for (const styleName of Object.keys(group)) {
			const style = group[styleName];

			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});

		Object.defineProperty(styles, 'codes', {
			value: codes,
			enumerable: false
		});
	}

	const rgb2rgb = (r, g, b) => [r, g, b];

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	styles.color.ansi = {};
	styles.color.ansi256 = {};
	styles.color.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 0)
	};

	styles.bgColor.ansi = {};
	styles.bgColor.ansi256 = {};
	styles.bgColor.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 10)
	};

	for (const key of Object.keys(colorConvert)) {
		if (typeof colorConvert[key] !== 'object') {
			continue;
		}

		const suite = colorConvert[key];

		if ('ansi16' in suite) {
			styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
			styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
		}

		if ('ansi256' in suite) {
			styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
			styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
		}

		if ('rgb' in suite) {
			styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
			styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
		}
	}

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(5);
var route = __webpack_require__(14);

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(5);

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

// https://jsperf.com/object-keys-vs-for-in-with-closure/3
var models = Object.keys(conversions);

function buildGraph() {
	var graph = {};

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const os = __webpack_require__(16);
const hasFlag = __webpack_require__(17);

const env = process.env;

const support = level => {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
};

let supportLevel = (() => {
	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false')) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		return 1;
	}

	if (process.stdout && !process.stdout.isTTY) {
		return 0;
	}

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors.
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return 0;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Hyper':
				return 3;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return 0;
	}

	return 0;
})();

if ('FORCE_COLOR' in env) {
	supportLevel = parseInt(env.FORCE_COLOR, 10) === 0 ? 0 : (supportLevel || 1);
}

module.exports = process && support(supportLevel);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (flag, argv) {
	argv = argv || process.argv;

	var terminatorPos = argv.indexOf('--');
	var prefix = /^-{1,2}/.test(flag) ? '' : '--';
	var pos = argv.indexOf(prefix + flag);

	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const TEMPLATE_REGEX = /(?:\\(u[a-f0-9]{4}|x[a-f0-9]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u[0-9a-f]{4}|x[0-9a-f]{2}|.)|([^\\])/gi;

const ESCAPES = {
	n: '\n',
	r: '\r',
	t: '\t',
	b: '\b',
	f: '\f',
	v: '\v',
	0: '\0',
	'\\': '\\',
	e: '\u001b',
	a: '\u0007'
};

function unescape(c) {
	if ((c[0] === 'u' && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}

	return ESCAPES[c] || c;
}

function parseArguments(name, args) {
	const results = [];
	const chunks = args.trim().split(/\s*,\s*/g);
	let matches;

	for (const chunk of chunks) {
		if (!isNaN(chunk)) {
			results.push(Number(chunk));
		} else if ((matches = chunk.match(STRING_REGEX))) {
			results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}

	return results;
}

function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;

	const results = [];
	let matches;

	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		const name = matches[1];

		if (matches[2]) {
			const args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}

	return results;
}

function buildStyle(chalk, styles) {
	const enabled = {};

	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}

	let current = chalk;
	for (const styleName of Object.keys(enabled)) {
		if (Array.isArray(enabled[styleName])) {
			if (!(styleName in current)) {
				throw new Error(`Unknown Chalk style: ${styleName}`);
			}

			if (enabled[styleName].length > 0) {
				current = current[styleName].apply(current, enabled[styleName]);
			} else {
				current = current[styleName];
			}
		}
	}

	return current;
}

module.exports = (chalk, tmp) => {
	const styles = [];
	const chunks = [];
	let chunk = [];

	// eslint-disable-next-line max-params
	tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
		if (escapeChar) {
			chunk.push(unescape(escapeChar));
		} else if (style) {
			const str = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
			styles.push({inverse, styles: parseStyle(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}

			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(chr);
		}
	});

	chunks.push(chunk.join(''));

	if (styles.length > 0) {
		const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMsg);
	}

	return chunks.join('');
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = validate;

var _dsl = __webpack_require__(20);

var _dsl2 = _interopRequireDefault(_dsl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var inputRequiredProperties = ['property', 'heading'];

var requiredProperties = {
  Page: ['title', 'lead', 'children'],
  Result: ['title'],
  Group: ['heading', 'text', 'children'],
  Answer: ['text', 'value'],
  Image: ['image'],
  Text: ['text'],
  Branch: ['branches'],
  Checkbox: [].concat(inputRequiredProperties, ['suggestedAnswer']),
  Radio: [].concat(inputRequiredProperties, ['suggestedAnswer']),
  Select: [].concat(inputRequiredProperties, ['suggestedAnswer']),
  Input: inputRequiredProperties,
  Number: inputRequiredProperties,
  TextArea: inputRequiredProperties
};

/**
 * Validate that the metadata is ok
 */
function validateMeta(_ref) {
  var title = _ref.title;

  if (!title) {
    return [{ path: 'meta', error: 'Missing title in meta' }];
  }

  return [];
}

/**
 * Assert properties exist. Returns array of errors
 */
function assertProperties(object, path, properties) {
  var errors = [];

  (properties || []).forEach(function (property) {
    if (!object[property]) {
      errors = [].concat(_toConsumableArray(errors), [{ path: path, error: object.type + ' is missing the ' + property + ' property' }]);
    }
  });

  return errors;
}

/**
 * Validate that a node is valid. Returns an array of errors
 */
function validateNode(node, path, ancestors) {
  var errors = [];

  if (!node.type) {
    return [{ path: path, error: 'Node is missing the type property' }];
  }

  if (ancestors.length && node.type === 'Page') {
    errors = [].concat(_toConsumableArray(errors), [{ path: path, error: 'Encountered a nested page. Page is only allowed at the top level' }]);
  }

  errors = [].concat(_toConsumableArray(errors), _toConsumableArray(assertProperties(node, path, requiredProperties[node.type])));

  // Parse logical expressions
  ['hidden', 'disabled', 'test'].forEach(function (field) {
    if (!node[field]) {
      return;
    }

    try {
      (0, _dsl2.default)(node[field]);
    } catch (e) {
      errors = [].concat(_toConsumableArray(errors), [{ path: [].concat(_toConsumableArray(path), [field]), error: e.message }]);
    }
  });

  // Recurse through children
  if (node.children) {
    node.children.forEach(function (child, index) {
      errors = [].concat(_toConsumableArray(errors), _toConsumableArray(validateNode(child, [].concat(_toConsumableArray(path), ['children', index]), [].concat(_toConsumableArray(ancestors), [node]))));
    });
  }

  // Check and recurse through branches
  if (node.branches) {
    node.branches.forEach(function (branch, branchIndex) {
      errors = [].concat(_toConsumableArray(errors), _toConsumableArray(assertProperties(branch, [].concat(_toConsumableArray(path), ['branches', branchIndex]), ['test', 'children'])));

      // Validate the text expression
      if (branch.test) {
        try {
          (0, _dsl2.default)(branch.test);
        } catch (e) {
          errors = [].concat(_toConsumableArray(errors), [{ path: [].concat(_toConsumableArray(path), ['branches', branchIndex, 'test']), error: e.message }]);
        }
      }

      // Recurse through the branch children
      if (branch.children) {
        branch.children.forEach(function (child, index) {
          errors = [].concat(_toConsumableArray(errors), _toConsumableArray(validateNode(child, [].concat(_toConsumableArray(path), ['branches', branchIndex, 'children', index]), [].concat(_toConsumableArray(ancestors), [node]))));
        });
      }
    });
  }

  // Recurse over the options
  if (node.suggestedAnswer) {
    node.suggestedAnswer.forEach(function (option, index) {
      errors = [].concat(_toConsumableArray(errors), _toConsumableArray(validateNode(option, [].concat(_toConsumableArray(path), ['suggestedAnswer', index]), [].concat(_toConsumableArray(ancestors), [node]))));
    });
  }

  // Check image
  if (node.image) {
    if (_typeof(node.image) !== 'object') {
      errors = [].concat(_toConsumableArray(errors), [{ path: path, error: 'an object was expected for the image property. Got ' + _typeof(node.image) }]);
    }

    errors = [].concat(_toConsumableArray(errors), _toConsumableArray(assertProperties(_extends({}, node.image, { type: 'Image' }), [].concat(_toConsumableArray(path), ['image']), ['url', 'alt'])));
  }

  return errors;
}

/**
 * Validate a page, checking that the required properties are in place
 */
function validatePage(page, path) {
  var errors = [];

  // Check for required properties
  errors = [].concat(_toConsumableArray(errors), _toConsumableArray(assertProperties(page, path, requiredProperties[page.type])));

  if (page.children) {
    // Check that children is an array
    if (!Array.isArray(page.children)) {
      errors = [].concat(_toConsumableArray(errors), [{ path: path, error: 'Children must be an array' }]);

      return errors;
    }

    page.children.forEach(function (node, index) {
      errors = [].concat(_toConsumableArray(errors), _toConsumableArray(validateNode(node, [].concat(_toConsumableArray(path), ['children', index]), [page])));
    });
  }

  return errors;
}

/**
 * Validates that the schema is ok. Checking that the top level is pages
 * and recursing down from there, ending up with an array of everything that
 * isn't up to standards 👮
 */
function validateSchema(schema) {
  var errors = [];

  schema.forEach(function (page, index) {
    if (!['Page', 'Result'].includes(page.type)) {
      errors = [].concat(_toConsumableArray(errors), [{
        path: ['schema', index],
        error: 'Top-level element is of invalid type. Must be Page or Result'
      }]);
    }

    errors = [].concat(_toConsumableArray(errors), _toConsumableArray(validatePage(page, ['schema', index])));
  });

  return errors;
}

function validate(_ref2) {
  var meta = _ref2.meta,
      schema = _ref2.schema;

  var metaErrors = validateMeta(meta);
  var schemaErrors = validateSchema(schema);

  return [].concat(_toConsumableArray(metaErrors), _toConsumableArray(schemaErrors));
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-use-before-define */

exports.getValue = getValue;
exports.buildGt = buildGt;
exports.buildLt = buildLt;
exports.buildGte = buildGte;
exports.buildLte = buildLte;
exports.buildEq = buildEq;
exports.buildNeq = buildNeq;
exports.buildBetween = buildBetween;
exports.buildRequired = buildRequired;
exports.buildNot = buildNot;
exports.buildValidatorForSimpleExpression = buildValidatorForSimpleExpression;
exports.buildValidatorForComplexExpression = buildValidatorForComplexExpression;
exports.buildValidatorFunction = buildValidatorFunction;
exports.default = parse;

var _lodash = __webpack_require__(21);

var _lodash2 = _interopRequireDefault(_lodash);

var _validator = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getValue(value, state) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.field) {
    return (0, _lodash2.default)(state, value.field);
  }

  return value;
}

function buildGt(_ref) {
  var field = _ref.field,
      value = _ref.value;

  return function (state) {
    if ((0, _lodash2.default)(state, field) > getValue(value, state)) {
      return { valid: true, errors: [] };
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.field) {
      return { valid: false, errors: [[{ field: field }, 'må være større enn', { field: value.field }]] };
    }

    return { valid: false, errors: [[{ field: field }, 'må være større enn', value]] };
  };
}

function buildLt(_ref2) {
  var field = _ref2.field,
      value = _ref2.value;

  return function (state) {
    if ((0, _lodash2.default)(state, field) < getValue(value, state)) {
      return { valid: true, errors: [] };
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.field) {
      return { valid: false, errors: [[{ field: field }, 'må være mindre enn', { field: value.field }]] };
    }

    return { valid: false, errors: [[{ field: field }, 'må være mindre enn', value]] };
  };
}

function buildGte(_ref3) {
  var field = _ref3.field,
      value = _ref3.value;

  return function (state) {
    if ((0, _lodash2.default)(state, field) >= getValue(value, state)) {
      return { valid: true, errors: [] };
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.field) {
      return {
        valid: false,
        errors: [[{ field: field }, 'må være større enn eller lik', { field: value.field }]]
      };
    }

    return { valid: false, errors: [[{ field: field }, 'må være større enn eller lik', value]] };
  };
}

function buildLte(_ref4) {
  var field = _ref4.field,
      value = _ref4.value;

  return function (state) {
    if ((0, _lodash2.default)(state, field) <= getValue(value, state)) {
      return { valid: true, errors: [] };
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.field) {
      return {
        valid: false,
        errors: [[{ field: field }, 'må være mindre enn eller lik', { field: value.field }]]
      };
    }

    return { valid: false, errors: [[{ field: field }, 'må være mindre enn eller lik', value]] };
  };
}

function buildEq(_ref5) {
  var field = _ref5.field,
      value = _ref5.value;

  return function (state) {
    if ((0, _lodash2.default)(state, field) === getValue(value, state)) {
      return { valid: true, errors: [] };
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.field) {
      return { valid: false, errors: [[{ field: field }, 'må være lik', { field: value.field }]] };
    }

    return { valid: false, errors: [[{ field: field }, 'må være lik', value]] };
  };
}

function buildNeq(_ref6) {
  var field = _ref6.field,
      value = _ref6.value;

  return function (state) {
    if ((0, _lodash2.default)(state, field) !== getValue(value, state)) {
      return { valid: true, errors: [] };
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.field) {
      return { valid: false, errors: [[{ field: field }, 'må være ulik', { field: value.field }]] };
    }

    return { valid: false, errors: [[{ field: field }, 'må være ulik', value]] };
  };
}

function buildBetween(_ref7) {
  var field = _ref7.field,
      value = _ref7.value;

  return function (state) {
    var fieldValue = (0, _lodash2.default)(state, field);

    var _value = _slicedToArray(value, 2),
        lower = _value[0],
        upper = _value[1];

    if (fieldValue >= lower && fieldValue <= upper) {
      return { valid: true, errors: [] };
    }

    return { valid: false, errors: [[{ field: field }, 'må være mellom', value[0], 'og', value[1]]] };
  };
}

function buildRequired(_ref8) {
  var field = _ref8.field;

  return function (state) {
    if ((0, _lodash2.default)(state, field) !== undefined) {
      return { valid: true, errors: [] };
    }

    return { valid: false, errors: [[{ field: field }, 'er påkrevd']] };
  };
}

function buildNot(_ref9) {
  var field = _ref9.field;

  return function (state) {
    if (!(0, _lodash2.default)(state, field)) {
      return { valid: true, errors: [] };
    }

    return { valid: false, errors: [[{ field: field }, 'skal være usann']] };
  };
}

function buildValidatorForSimpleExpression(expression) {
  return function (state) {
    switch (expression.operator) {
      case 'gt':
        return buildGt(expression)(state);
      case 'lt':
        return buildLt(expression)(state);
      case 'gte':
        return buildGte(expression)(state);
      case 'lte':
        return buildLte(expression)(state);
      case 'eq':
        return buildEq(expression)(state);
      case 'neq':
        return buildNeq(expression)(state);
      case 'between':
        return buildBetween(expression)(state);
      case 'required':
        return buildRequired(expression)(state);
      case 'not':
        return buildNot(expression)(state);
      default:
        return { valid: false, errors: [] };
    }
  };
}

function buildValidatorForComplexExpression(expression) {
  return function (state) {
    return expression.clauses.reduce(function (res, clause) {
      var validationResult = buildValidatorFunction(clause)(state);
      var valid = void 0;

      // If we're dealing with an or expression and the result is true
      if (expression.type === 'or' && (validationResult.valid || res.valid)) {
        return {
          valid: true,
          errors: {
            operator: expression.type,
            errors: []
          }
        };
      }

      if (expression.type === 'and') {
        valid = res.valid && validationResult.valid;
      } else if (expression.type === 'or') {
        valid = res.valid || validationResult.valid;
      }

      return {
        valid: valid,
        errors: validationResult.valid ? res.errors : _extends({}, res.errors, {
          errors: [].concat(_toConsumableArray(res.errors.errors), _toConsumableArray(Array.isArray(validationResult.errors) ? validationResult.errors : [validationResult.errors]))
        })
      };
    }, {
      /**
      * Start with valid being true for and expressions to avoid the
      * result always being false, and with false for or expressions
      * to avoid the result always being true 🤓
      */
      valid: expression.type === 'and',
      errors: {
        operator: expression.type,
        errors: []
      }
    });
  };
}

function buildValidatorFunction(expression) {
  return function (state) {
    if (expression.type) {
      return buildValidatorForComplexExpression(expression)(state);
    }

    return buildValidatorForSimpleExpression(expression)(state);
  };
}

/**
 * Parse a structured expression and return a function that expects
 * to be called with the current state data for validation
 *
 * @param {*} expression
 */
function parse(expression) {
  var topLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (topLevel) {
    // Validate expression first. Otherwise we would need loads of
    // redundant tests in the validation function builder..
    (0, _validator.validateExpression)(expression);
  }

  // A-OK, let's build the function! 🎸
  return buildValidatorFunction(expression);
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.validateSimpleExpression = validateSimpleExpression;
exports.validateComplexExpression = validateComplexExpression;
exports.validateExpression = validateExpression;
/* eslint-disable no-use-before-define */

/**
 * Validate a simple, leaf node expression. No nested expressions
 *
 * @param object expression
 * @return boolean
 */
function validateSimpleExpression(expression) {
  if (expression.type) {
    throw new Error('Expected simple expression. Got ' + expression.type + ' expression: ' + JSON.stringify(expression));
  }

  if (!expression.operator) {
    throw new Error('Expression has no operator property: ' + JSON.stringify(expression));
  }

  if (!expression.field) {
    throw new Error('Expression is missing field property: ' + JSON.stringify(expression));
  }

  switch (expression.operator) {
    case 'gt':
    case 'lt':
    case 'gte':
    case 'lte':
    case 'eq':
    case 'neq':
      if (!expression.value) {
        throw new Error('Operator ' + expression.operator + ' expects a value property: ' + JSON.stringify(expression));
      }

      if (_typeof(expression.value) === 'object' && !expression.value.field) {
        throw new Error('Expression with value of type object is supposed to be a reference to a field to compare to. No field property found: : ' + expression);
      }

      break;

    // Validate range expression
    case 'between':
      if (!expression.value) {
        throw new Error('Expression with operator ' + expression.operator + ' must have a value property: ' + JSON.stringify(expression));
      }

      if (!Array.isArray(expression.value)) {
        throw new Error('Expression with operator ' + expression.operator + ' must have an array as the value property: ' + JSON.stringify(expression));
      }

      if (expression.value.length !== 2) {
        throw new Error('Expression with operator ' + expression.operator + ' expects an array containing two values. Got ' + expression.value.length + ': ' + JSON.stringify(expression));
      }

      expression.value.forEach(function (number) {
        if (isNaN(parseFloat(number))) {
          throw new Error('Expression with operator ' + expression.operator + ' expected a range of two numbers. ' + number + ' is not a valid number: ' + JSON.stringify(expression));
        }
      });

      break;

    case 'not':
    case 'required':
      return true;

    default:
      throw new Error('Unknown operator ' + expression.operator + ': ' + JSON.stringify(expression));
  }

  return true;
}

/**
 * Validate an expression with nested expressions, typically an or/and
 * expression with a list of clauses
 *
 * @param {*} expression
 * @return boolean
 */
function validateComplexExpression(expression) {
  if (expression.type && ['and', 'or'].indexOf(expression.type) === -1) {
    throw new Error('Unknown expression type: ' + expression.type);
  }

  if (expression.type && !expression.clauses) {
    throw new Error('Missing clauses for ' + expression.type + ' expression');
  }

  // Validate children
  return expression.clauses.reduce(function (valid, childExpression) {
    switch (expression.type) {
      case 'and':
        return valid && validateExpression(childExpression);

      case 'or':
        return valid || validateExpression(childExpression);

      default:
        return false;
    }
  }, true);
}

function validateExpression(expression) {
  // Complex expression
  if (expression.type) {
    return validateComplexExpression(expression);
  }

  // Ok, so this is a simple expression
  return validateSimpleExpression(expression);
}

/***/ })
/******/ ]);