module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(56)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(59)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = injectStyles;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function injectStyles(Component) {
  function StyledComponent(props, _ref) {
    var styles = _ref.styles;

    return _react2.default.createElement(Component, _extends({}, props, { styles: styles }));
  }

  StyledComponent.contextTypes = {
    styles: _propTypes2.default.object
  };

  return StyledComponent;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: ', ';\n'], ['\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: ', ';\n  margin: 0 0 10px;\n'], ['\n  font-family: ', ';\n  font-size: ', ';\n  margin: 0 0 10px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: ', ';\n  margin: 0 0 6px;\n'], ['\n  font-family: ', ';\n  font-size: ', ';\n  margin: 0 0 6px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: 1em;\n  margin: 0;\n'], ['\n  font-family: ', ';\n  font-size: 1em;\n  margin: 0;\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = exports.H1 = (0, _injectStyles2.default)(_styledComponents2.default.h1(_templateObject, function (_ref) {
  var styles = _ref.styles;
  return styles.font.secondary;
}, function (props) {
  return props.small ? '20px' : '42px';
}, function (props) {
  return props.small ? '300' : '500';
}));

var H2 = exports.H2 = (0, _injectStyles2.default)(_styledComponents2.default.h2(_templateObject2, function (_ref2) {
  var styles = _ref2.styles;
  return styles.font.secondary;
}, function (props) {
  return props.small ? '24px' : '32px';
}));

var H3 = exports.H3 = (0, _injectStyles2.default)(_styledComponents2.default.h3(_templateObject2, function (_ref3) {
  var styles = _ref3.styles;
  return styles.font.primary;
}, function (props) {
  return props.small ? '16px' : '20px';
}));

var H4 = exports.H4 = (0, _injectStyles2.default)(_styledComponents2.default.h4(_templateObject3, function (_ref4) {
  var styles = _ref4.styles;
  return styles.font.primary;
}, function (props) {
  return props.small ? '16px' : '20px';
}));

var H5 = exports.H5 = (0, _injectStyles2.default)(_styledComponents2.default.h5(_templateObject4, function (_ref5) {
  var styles = _ref5.styles;
  return styles.font.primary;
}));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = exports.Textarea = exports.TextInput = exports.NumberInput = exports.Radio = exports.Checkbox = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n\n  + label {\n    display: flex;\n    align-items: flex-start;\n    cursor: pointer;\n    background: white;\n    box-shadow: 0 0 1px ', ';\n    padding: 10px;\n    border-radius: 5px;\n    transition: all 0.1s ease-in-out;\n\n    &:before {\n      content: \' \';\n      display: inline-block;\n      vertical-align: middle;\n      min-width: 0.6em;\n      width: 0.6em;\n      height: 0.6em;\n      background: white;\n      margin-right: 1em;\n      border: 0.3em solid white;\n      box-shadow: 0 0 0 1px ', ';\n      transition: all 0.1s ease-in-out;\n    }\n\n    div {\n      margin-right: 30px;\n    }\n    img {\n      max-width: 200px;\n    }\n    p {\n      margin-bottom: 0;\n    }\n  }\n\n  :disabled + label {\n    opacity: 0.4;\n  }\n\n  :not(:disabled) {\n    + label {\n      &:hover {\n        box-shadow: 0 0 6px ', ';\n      }\n      &:hover::before {\n        box-shadow: 0 0 0 1px ', ';\n      }\n    }\n\n    &:focus + label,\n    + label:hover {\n      box-shadow: 0 0 6px ', ';\n      &::before {\n        box-shadow: 0 0 0 1px ', ';\n      }\n    }\n    &:checked + label:before {\n      background: ', ';\n    }\n    &:checked + label {\n      box-shadow:\n        0 0 0 1px ', ',\n        0 0 4px 0 ', ';\n      &::before {\n        box-shadow: 0 0 0 1px ', ';\n      }\n    }\n    &:checked:focus + label {\n      box-shadow:\n        0 0 0 1px ', ',\n        0 0 6px 1px ', ';\n      &::before {\n        box-shadow: 0 0 0 1px ', ';\n      }\n    }\n  }\n'], ['\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n\n  + label {\n    display: flex;\n    align-items: flex-start;\n    cursor: pointer;\n    background: white;\n    box-shadow: 0 0 1px ', ';\n    padding: 10px;\n    border-radius: 5px;\n    transition: all 0.1s ease-in-out;\n\n    &:before {\n      content: \' \';\n      display: inline-block;\n      vertical-align: middle;\n      min-width: 0.6em;\n      width: 0.6em;\n      height: 0.6em;\n      background: white;\n      margin-right: 1em;\n      border: 0.3em solid white;\n      box-shadow: 0 0 0 1px ', ';\n      transition: all 0.1s ease-in-out;\n    }\n\n    div {\n      margin-right: 30px;\n    }\n    img {\n      max-width: 200px;\n    }\n    p {\n      margin-bottom: 0;\n    }\n  }\n\n  :disabled + label {\n    opacity: 0.4;\n  }\n\n  :not(:disabled) {\n    + label {\n      &:hover {\n        box-shadow: 0 0 6px ', ';\n      }\n      &:hover::before {\n        box-shadow: 0 0 0 1px ', ';\n      }\n    }\n\n    &:focus + label,\n    + label:hover {\n      box-shadow: 0 0 6px ', ';\n      &::before {\n        box-shadow: 0 0 0 1px ', ';\n      }\n    }\n    &:checked + label:before {\n      background: ', ';\n    }\n    &:checked + label {\n      box-shadow:\n        0 0 0 1px ', ',\n        0 0 4px 0 ', ';\n      &::before {\n        box-shadow: 0 0 0 1px ', ';\n      }\n    }\n    &:checked:focus + label {\n      box-shadow:\n        0 0 0 1px ', ',\n        0 0 6px 1px ', ';\n      &::before {\n        box-shadow: 0 0 0 1px ', ';\n      }\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n\n  + label {\n    display: flex;\n    align-items: flex-start;\n    cursor: pointer;\n    box-sizing: border-box;\n    background: white;\n    padding: 10px;\n    border-radius: 5px;\n    box-shadow: 0 0 1px ', ';\n    transition: all 0.1s ease-in-out;\n\n    &:before {\n      content: \' \';\n      display: block;\n      vertical-align: middle;\n      min-width: 0.6em;\n      width: 0.6em;\n      height: 0.6em;\n      background: white;\n      margin-right: 1em;\n      border-radius: 50%;\n      border: 0.3em solid white;\n      box-shadow: 0 0 0 1px ', ';\n      transition: all 0.1s ease-in-out;\n    }\n\n    div {\n      margin-right: 30px;\n    }\n    img {\n      max-width: 200px;\n    }\n    p {\n      margin-bottom: 0;\n    }\n  }\n\n  :disabled + label {\n    opacity: 0.4;\n  }\n\n  :not(:disabled) {\n    &:focus + label,\n    + label:hover {\n      box-shadow: 0 0 6px ', ';\n      &::before {\n        box-shadow: 0 0 0 1px ', ';\n      }\n    }\n    &:checked + label:before {\n      background: ', ';\n    }\n    &:checked + label {\n      box-shadow:\n        0 0 0 1px ', ',\n        0 0 4px 0 ', ';\n      &::before {\n        box-shadow: 0 0 0 1px ', ';\n      }\n    }\n    &:checked:focus + label {\n      box-shadow:\n        0 0 0 1px ', ',\n        0 0 6px 1px ', ';\n      &::before {\n        box-shadow: 0 0 0 1px ', ';\n      }\n    }\n  }\n  @media screen and (max-width: 900px) {\n    + label {\n      flex-wrap: wrap;\n      img {\n        width: 100%;\n        margin-top: 1em;\n        display: block;\n      }\n    }\n  }\n'], ['\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n\n  + label {\n    display: flex;\n    align-items: flex-start;\n    cursor: pointer;\n    box-sizing: border-box;\n    background: white;\n    padding: 10px;\n    border-radius: 5px;\n    box-shadow: 0 0 1px ', ';\n    transition: all 0.1s ease-in-out;\n\n    &:before {\n      content: \' \';\n      display: block;\n      vertical-align: middle;\n      min-width: 0.6em;\n      width: 0.6em;\n      height: 0.6em;\n      background: white;\n      margin-right: 1em;\n      border-radius: 50%;\n      border: 0.3em solid white;\n      box-shadow: 0 0 0 1px ', ';\n      transition: all 0.1s ease-in-out;\n    }\n\n    div {\n      margin-right: 30px;\n    }\n    img {\n      max-width: 200px;\n    }\n    p {\n      margin-bottom: 0;\n    }\n  }\n\n  :disabled + label {\n    opacity: 0.4;\n  }\n\n  :not(:disabled) {\n    &:focus + label,\n    + label:hover {\n      box-shadow: 0 0 6px ', ';\n      &::before {\n        box-shadow: 0 0 0 1px ', ';\n      }\n    }\n    &:checked + label:before {\n      background: ', ';\n    }\n    &:checked + label {\n      box-shadow:\n        0 0 0 1px ', ',\n        0 0 4px 0 ', ';\n      &::before {\n        box-shadow: 0 0 0 1px ', ';\n      }\n    }\n    &:checked:focus + label {\n      box-shadow:\n        0 0 0 1px ', ',\n        0 0 6px 1px ', ';\n      &::before {\n        box-shadow: 0 0 0 1px ', ';\n      }\n    }\n  }\n  @media screen and (max-width: 900px) {\n    + label {\n      flex-wrap: wrap;\n      img {\n        width: 100%;\n        margin-top: 1em;\n        display: block;\n      }\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-family: inherit;\n  font-size: 1em;\n  padding: 0.5em;\n  min-width: 30%;\n  border: 1px solid ', ';\n  &::placeholder {\n    font-color: inherit;\n    opacity: 0.6;\n  }\n'], ['\n  font-family: inherit;\n  font-size: 1em;\n  padding: 0.5em;\n  min-width: 30%;\n  border: 1px solid ', ';\n  &::placeholder {\n    font-color: inherit;\n    opacity: 0.6;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-family: inherit;\n  font-size: 1em;\n  padding: 0.5em;\n  min-width: 40%;\n  border: 1px solid ', ';\n  &::placeholder {\n    font-color: inherit;\n    opacity: 0.6;\n  }\n'], ['\n  font-family: inherit;\n  font-size: 1em;\n  padding: 0.5em;\n  min-width: 40%;\n  border: 1px solid ', ';\n  &::placeholder {\n    font-color: inherit;\n    opacity: 0.6;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-family: inherit;\n  font-size: 1em;\n  padding: 0.5em;\n  width: 100%;\n  min-height: 6em;\n  border: 1px solid ', ';\n  &::placeholder {\n    font-color: inherit;\n    opacity: 0.6;\n  }\n'], ['\n  font-family: inherit;\n  font-size: 1em;\n  padding: 0.5em;\n  width: 100%;\n  min-height: 6em;\n  border: 1px solid ', ';\n  &::placeholder {\n    font-color: inherit;\n    opacity: 0.6;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-family: inherit;\n  font-size: 1em;\n  padding: 0.5em;\n  min-width: 30%;\n  border: 1px solid ', ';\n'], ['\n  font-family: inherit;\n  font-size: 1em;\n  padding: 0.5em;\n  min-width: 30%;\n  border: 1px solid ', ';\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Checkbox = exports.Checkbox = (0, _injectStyles2.default)(_styledComponents2.default.input(_templateObject, function (_ref) {
  var styles = _ref.styles;
  return styles.color.dark;
}, function (_ref2) {
  var styles = _ref2.styles;
  return styles.color.darkgray;
}, function (_ref3) {
  var styles = _ref3.styles;
  return styles.color.dark;
}, function (_ref4) {
  var styles = _ref4.styles;
  return styles.color.dark;
}, function (_ref5) {
  var styles = _ref5.styles;
  return styles.color.dark;
}, function (_ref6) {
  var styles = _ref6.styles;
  return styles.color.dark;
}, function (_ref7) {
  var styles = _ref7.styles;
  return styles.color.light;
}, function (_ref8) {
  var styles = _ref8.styles;
  return styles.color.dark;
}, function (_ref9) {
  var styles = _ref9.styles;
  return styles.color.dark;
}, function (_ref10) {
  var styles = _ref10.styles;
  return styles.color.dark;
}, function (_ref11) {
  var styles = _ref11.styles;
  return styles.color.dark;
}, function (_ref12) {
  var styles = _ref12.styles;
  return styles.color.dark;
}, function (_ref13) {
  var styles = _ref13.styles;
  return styles.color.dark;
}));

var Radio = exports.Radio = (0, _injectStyles2.default)(_styledComponents2.default.input.attrs({
  type: 'radio'
})(_templateObject2, function (_ref14) {
  var styles = _ref14.styles;
  return styles.color.dark;
}, function (_ref15) {
  var styles = _ref15.styles;
  return styles.color.darkgray;
}, function (_ref16) {
  var styles = _ref16.styles;
  return styles.color.dark;
}, function (_ref17) {
  var styles = _ref17.styles;
  return styles.color.dark;
}, function (_ref18) {
  var styles = _ref18.styles;
  return styles.color.light;
}, function (_ref19) {
  var styles = _ref19.styles;
  return styles.color.dark;
}, function (_ref20) {
  var styles = _ref20.styles;
  return styles.color.dark;
}, function (_ref21) {
  var styles = _ref21.styles;
  return styles.color.dark;
}, function (_ref22) {
  var styles = _ref22.styles;
  return styles.color.dark;
}, function (_ref23) {
  var styles = _ref23.styles;
  return styles.color.dark;
}, function (_ref24) {
  var styles = _ref24.styles;
  return styles.color.dark;
}));

var NumberInput = exports.NumberInput = (0, _injectStyles2.default)(_styledComponents2.default.input(_templateObject3, function (_ref25) {
  var styles = _ref25.styles;
  return styles.color.darkgray;
}));

var TextInput = exports.TextInput = (0, _injectStyles2.default)(_styledComponents2.default.input(_templateObject4, function (_ref26) {
  var styles = _ref26.styles,
      _ref26$validation = _ref26.validation;
  _ref26$validation = _ref26$validation === undefined ? {} : _ref26$validation;
  var error = _ref26$validation.error;
  return error ? styles.color.red : styles.color.darkgray;
}));

var Textarea = exports.Textarea = (0, _injectStyles2.default)(_styledComponents2.default.textarea(_templateObject5, function (_ref27) {
  var styles = _ref27.styles;
  return styles.color.darkgray;
}));

var Select = exports.Select = (0, _injectStyles2.default)(_styledComponents2.default.select(_templateObject6, function (_ref28) {
  var styles = _ref28.styles;
  return styles.color.darkgray;
}));

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lead = exports.P = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-size: inherit;\n  margin: 0 0 20px;\n  max-width: 600px;\n'], ['\n  font-size: inherit;\n  margin: 0 0 20px;\n  max-width: 600px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-weight: 300;\n  font-size: 20px;\n  line-height: 1.5;\n  margin: 16px 0 40px;\n  max-width: ', ';\n'], ['\n  font-family: ', ';\n  font-weight: 300;\n  font-size: 20px;\n  line-height: 1.5;\n  margin: 16px 0 40px;\n  max-width: ', ';\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var P = exports.P = (0, _injectStyles2.default)(_styledComponents2.default.p(_templateObject));

var Lead = exports.Lead = (0, _injectStyles2.default)(_styledComponents2.default.div(_templateObject2, function (_ref) {
  var styles = _ref.styles;
  return styles.font.secondary;
}, function (_ref2) {
  var styles = _ref2.styles;
  return styles.size.blockWidth;
}));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBlock = exports.SpecificBlock = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: ', ';\n  margin: 20px 0;\n  max-width: ', ';\n  background: ', ';\n  &:nth-child(even) {\n    background: ', ';\n  }\n  box-shadow: ', ';\n  p {\n    margin-top: 0;\n    font-weight: 300;\n  }\n  ', '\n  ', '\n  @media screen and (max-width: 700px) {\n    padding: ', ';\n  }\n'], ['\n  padding: ', ';\n  margin: 20px 0;\n  max-width: ', ';\n  background: ', ';\n  &:nth-child(even) {\n    background: ', ';\n  }\n  box-shadow: ', ';\n  p {\n    margin-top: 0;\n    font-weight: 300;\n  }\n  ', '\n  ', '\n  @media screen and (max-width: 700px) {\n    padding: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 30px 33px 36px;\n  margin: 20px 0;\n  max-width: ', ';\n  p {\n    margin: 1em 0;\n    line-height: 1.6;\n    max-width: 600px;\n  }\n  @media screen and (max-width: 700px) {\n    padding: 20px 0;\n  }\n'], ['\n  padding: 30px 33px 36px;\n  margin: 20px 0;\n  max-width: ', ';\n  p {\n    margin: 1em 0;\n    line-height: 1.6;\n    max-width: 600px;\n  }\n  @media screen and (max-width: 700px) {\n    padding: 20px 0;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SpecificBlock = exports.SpecificBlock = (0, _injectStyles2.default)(_styledComponents2.default.div(_templateObject, function (props) {
  return props.grouped ? '20px 24px 20px' : '30px 33px 36px';
}, function (_ref) {
  var styles = _ref.styles;
  return styles.size.blockWidth;
}, function (props) {
  return props.grouped ? 'rgba(137, 174, 196, 0.15)' : 'white';
}, function (props) {
  return props.grouped ? 'rgba(0, 117, 127, 0.06)' : '#fdfdfd';
}, function (props) {
  return props.grouped ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.21)';
}, function (props) {
  return props.grouped ? '\n      h3 {\n        font-size: 18px;\n      }\n    ' : '\n      h3 {\n        font-size: 22px;\n      }\n  ';
}, function (props) {
  return props.groupedSimple ? '\n      padding: 0;\n      background: none;\n      &:nth-child(even) {\n        background: none;\n      }\n    ' : ' ';
}, function (props) {
  return props.grouped ? '20px 0' : '20px';
}));

var TextBlock = exports.TextBlock = (0, _injectStyles2.default)(_styledComponents2.default.div(_templateObject2, function (_ref2) {
  var styles = _ref2.styles;
  return styles.size.blockWidth;
}));

/*
  background: #ECF2F6;
  &:nth-child(odd) {
    background: #DBE8F0;
  }
*/

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Html;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Html(_ref) {
  var text = _ref.text;

  if (!text) {
    return null;
  }

  // eslint-disable-next-line react/no-danger
  return _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: text } });
}

Html.defaultProps = {
  text: ''
};

Html.propTypes = {
  text: _propTypes2.default.string
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavButton = exports.SmallButton = exports.MainButton = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-weight: 300;\n  text-transform: uppercase;\n  font-size: 18px;\n  letter-spacing: 1px;\n  color: white;\n  background: ', ';\n  min-width: 30%;\n  padding: 12px 18px 13px;\n  cursor: pointer;\n  user-select: none;\n  border: 0 none;\n  border-radius: 0;\n  appearance: none;\n  margin-bottom: 10px;\n  position: relative;\n  transition: background 0.1s ease-in-out;\n  &:hover {\n    background: ', ';\n  }\n  @media screen and (max-width: 900px) {\n    min-width: 48%;\n  }\n'], ['\n  font-family: ', ';\n  font-weight: 300;\n  text-transform: uppercase;\n  font-size: 18px;\n  letter-spacing: 1px;\n  color: white;\n  background: ', ';\n  min-width: 30%;\n  padding: 12px 18px 13px;\n  cursor: pointer;\n  user-select: none;\n  border: 0 none;\n  border-radius: 0;\n  appearance: none;\n  margin-bottom: 10px;\n  position: relative;\n  transition: background 0.1s ease-in-out;\n  &:hover {\n    background: ', ';\n  }\n  @media screen and (max-width: 900px) {\n    min-width: 48%;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: 16px;\n  color: white;\n  background: ', ';\n  padding: 6px 16px 7px;\n  cursor: pointer;\n  user-select: none;\n  border: 0 none;\n  border-radius: 0;\n  appearance: none;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  position: relative;\n  transition: background 0.1s ease-in-out;\n  &:hover {\n    background: ', ';\n  }\n'], ['\n  font-family: ', ';\n  font-size: 16px;\n  color: white;\n  background: ', ';\n  padding: 6px 16px 7px;\n  cursor: pointer;\n  user-select: none;\n  border: 0 none;\n  border-radius: 0;\n  appearance: none;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  position: relative;\n  transition: background 0.1s ease-in-out;\n  &:hover {\n    background: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-weight: 300;\n  text-transform: uppercase;\n  font-size: 18px;\n  letter-spacing: 1px;\n  color: white;\n  background: ', ';\n  min-width: 30%;\n  padding: 12px 18px 13px;\n  cursor: pointer;\n  user-select: none;\n  border: 0 none;\n  border-radius: 0;\n  appearance: none;\n  margin-right: ', ';\n  margin-left: ', ';\n  margin-bottom: 10px;\n  position: relative;\n  transition: background 0.1s ease-in-out;\n  &:before, &:after {\n    content: " ";\n    display: inline-block;\n    position: absolute;\n    left: ', ';\n    right: ', ';\n    top: calc(50% - 0.4rem);\n    width: 0.5rem;\n    height: 0.5rem;\n    vertical-align: middle;\n    transform: ', ';\n    border: 3px solid white;\n    border-width: 3px 3px 0 0;\n  }\n  &:before {\n    display: ', ';\n    margin-right: 1em;\n  }\n  &:after {\n    display: ', ';\n    margin-left: 1em;\n  }\n  &:hover {\n    background: ', ';\n  }\n  &:hover::before, &:hover::after {\n    animation: ', ' 0.8s linear infinite;\n  }\n  @media screen and (max-width: 900px) {\n    min-width: 48%;\n    text-align: ', ';\n  }\n  @keyframes pushnext {\n    0% {\n      transform: rotate(45deg) translate3d(0, 0, 0);\n    }\n    50% {\n      transform: rotate(45deg) translate3d(2px, -2px, 0);\n    }\n    100% {\n      transform: rotate(45deg) translate3d(0, 0, 0);\n    }\n  }\n  @keyframes pushprev {\n    0% {\n      transform: rotate(-135deg) translate3d(0, 0, 0);\n    }\n    50% {\n      transform: rotate(-135deg) translate3d(-2px, 2px, 0);\n    }\n    100% {\n      transform: rotate(-135deg) translate3d(0, 0, 0);\n    }\n  }\n'], ['\n  font-family: ', ';\n  font-weight: 300;\n  text-transform: uppercase;\n  font-size: 18px;\n  letter-spacing: 1px;\n  color: white;\n  background: ', ';\n  min-width: 30%;\n  padding: 12px 18px 13px;\n  cursor: pointer;\n  user-select: none;\n  border: 0 none;\n  border-radius: 0;\n  appearance: none;\n  margin-right: ', ';\n  margin-left: ', ';\n  margin-bottom: 10px;\n  position: relative;\n  transition: background 0.1s ease-in-out;\n  &:before, &:after {\n    content: " ";\n    display: inline-block;\n    position: absolute;\n    left: ', ';\n    right: ', ';\n    top: calc(50% - 0.4rem);\n    width: 0.5rem;\n    height: 0.5rem;\n    vertical-align: middle;\n    transform: ', ';\n    border: 3px solid white;\n    border-width: 3px 3px 0 0;\n  }\n  &:before {\n    display: ', ';\n    margin-right: 1em;\n  }\n  &:after {\n    display: ', ';\n    margin-left: 1em;\n  }\n  &:hover {\n    background: ', ';\n  }\n  &:hover::before, &:hover::after {\n    animation: ', ' 0.8s linear infinite;\n  }\n  @media screen and (max-width: 900px) {\n    min-width: 48%;\n    text-align: ', ';\n  }\n  @keyframes pushnext {\n    0% {\n      transform: rotate(45deg) translate3d(0, 0, 0);\n    }\n    50% {\n      transform: rotate(45deg) translate3d(2px, -2px, 0);\n    }\n    100% {\n      transform: rotate(45deg) translate3d(0, 0, 0);\n    }\n  }\n  @keyframes pushprev {\n    0% {\n      transform: rotate(-135deg) translate3d(0, 0, 0);\n    }\n    50% {\n      transform: rotate(-135deg) translate3d(-2px, 2px, 0);\n    }\n    100% {\n      transform: rotate(-135deg) translate3d(0, 0, 0);\n    }\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainButton = exports.MainButton = (0, _injectStyles2.default)(_styledComponents2.default.button(_templateObject, function (_ref) {
  var styles = _ref.styles;
  return styles.font.secondary;
}, function (_ref2) {
  var styles = _ref2.styles;
  return styles.color.light;
}, function (_ref3) {
  var styles = _ref3.styles;
  return styles.color.dark;
}));

var SmallButton = exports.SmallButton = (0, _injectStyles2.default)(_styledComponents2.default.button(_templateObject2, function (_ref4) {
  var styles = _ref4.styles;
  return styles.font.primary;
}, function (_ref5) {
  var styles = _ref5.styles;
  return styles.color.light;
}, function (_ref6) {
  var styles = _ref6.styles;
  return styles.color.dark;
}));

var NavButton = exports.NavButton = (0, _injectStyles2.default)(_styledComponents2.default.button(_templateObject3, function (_ref7) {
  var styles = _ref7.styles;
  return styles.font.secondary;
}, function (_ref8) {
  var styles = _ref8.styles;
  return styles.color.light;
}, function (props) {
  return props.next ? '0' : 'auto';
}, function (props) {
  return props.next ? 'auto' : '0';
}, function (props) {
  return props.next ? 'auto' : '1em';
}, function (props) {
  return props.next ? '1em' : 'auto';
}, function (props) {
  return props.next ? 'rotate(45deg)' : 'rotate(-135deg)';
}, function (props) {
  return props.next ? 'none' : 'inline-block';
}, function (props) {
  return props.next ? 'inline-block' : 'none';
}, function (_ref9) {
  var styles = _ref9.styles;
  return styles.color.dark;
}, function (props) {
  return props.next ? 'pushnext' : 'pushprev';
}, function (props) {
  return props.next ? 'left' : 'right';
}));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(60);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ErrorIcon;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(30);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ErrorIcon(_ref) {
  var triangleFill = _ref.triangleFill,
      textFill = _ref.textFill;

  return _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 221 221' },
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { style: { fill: triangleFill }, d: 'M119.4 20.2l93.64 171.17a10 10 0 0 1-8.78 14.8H17a10 10 0 0 1-8.77-14.8L101.86 20.2a10 10 0 0 1 17.54 0z' }),
      _react2.default.createElement('path', { style: { fill: textFill }, d: 'M110.88 182.3c7.78 0 13.25-4.9 13.25-12.52 0-7.64-5.47-12.68-13.25-12.68-7.92 0-13.4 5.04-13.4 12.68 0 7.63 5.48 12.52 13.4 12.52zm-10.22-38.1h20.16l2.88-68.84H97.78l2.88 68.83z' })
    )
  );
}

ErrorIcon.propTypes = {
  triangleFill: _propTypes2.default.string,
  textFill: _propTypes2.default.string
};

ErrorIcon.defaultProps = {
  triangleFill: _styles2.default.color.red,
  textFill: 'white'
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NAME = exports.reducer = exports.actions = undefined;

var _actions2 = __webpack_require__(17);

var _actions3 = _interopRequireDefault(_actions2);

var _reducer2 = __webpack_require__(51);

var _reducer3 = _interopRequireDefault(_reducer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.actions = _actions3.default;
exports.reducer = _reducer3.default;
var NAME = exports.NAME = '@WIZARD_STATE';

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setData = setData;
exports.resetData = resetData;
var SET_DATA = exports.SET_DATA = 'SET_DATA';
var RESET_DATA = exports.RESET_DATA = 'RESET_DATA';

function setData(key, value) {
  return {
    type: SET_DATA,
    payload: { key: key, value: value }
  };
}

function resetData() {
  return {
    type: RESET_DATA
  };
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessageAlt = exports.ErrorMessage = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  svg {\n    width: 1.2em;\n    height: 1.2em;\n    display: inline-block;\n    vertical-align: middle;\n  }\n'], ['\n  color: ', ';\n  svg {\n    width: 1.2em;\n    height: 1.2em;\n    display: inline-block;\n    vertical-align: middle;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-family: ', ';\n'], ['\n  font-family: ', ';\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ErrorMessage = exports.ErrorMessage = (0, _injectStyles2.default)(_styledComponents2.default.p(_templateObject, function (_ref) {
  var styles = _ref.styles;
  return styles.color.red;
}));

var ErrorMessageAlt = exports.ErrorMessageAlt = (0, _injectStyles2.default)(_styledComponents2.default.p(_templateObject2, function (_ref2) {
  var styles = _ref2.styles;
  return styles.font.secondary;
}));

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  grid-area: main;\n  padding: 50px 30px 0;\n  h2 {\n    margin-top: 0;\n  }\n  @media screen and (max-width: 700px) {\n    padding: 0;\n    width: ', ';\n    margin: 30px auto;\n  }\n'], ['\n  grid-area: main;\n  padding: 50px 30px 0;\n  h2 {\n    margin-top: 0;\n  }\n  @media screen and (max-width: 700px) {\n    padding: 0;\n    width: ', ';\n    margin: 30px auto;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Main = (0, _injectStyles2.default)(_styledComponents2.default.main(_templateObject, function (_ref) {
  var styles = _ref.styles;
  return styles.size.mobileContentWidth;
}));

exports.default = Main;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getData = getData;
exports.validateNode = validateNode;
exports.getValidatedSchema = getValidatedSchema;
exports.getPages = getPages;
exports.getErrorPages = getErrorPages;
exports.getNodeTitles = getNodeTitles;
exports.getNodeTitle = getNodeTitle;
exports.getNodeValue = getNodeValue;

var _lodash = __webpack_require__(14);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduceWizard = __webpack_require__(44);

var _reduceWizard2 = _interopRequireDefault(_reduceWizard);

var _state = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Get wizard data
 */
function getData(state) {
  return state[_state.NAME] || {};
}

/**
 * Validates a node and returns an array of errors (if any)
 *
 * @param string property
 * @param object state
 */
function validateNode(node, state) {
  if (!node.property) {
    return [];
  }

  var errors = [];

  // Image and text isn't stored, so no value is required
  if (['Image', 'Text', 'Group'].includes(node.type)) {
    return errors;
  }

  // Checks for fields that are required but not provided
  if (typeof (0, _lodash2.default)(getData(state), node.property) === 'undefined') {
    errors.push({ type: 'required' });
  }

  return errors;
}

function getValidatedSchema(schema, state) {
  var pages = (0, _reduceWizard2.default)(schema, state);

  return pages.map(function (page) {
    return _extends({}, page, {
      children: (page.children || []).map(function (node) {
        return _extends({}, node, {
          errors: validateNode(node, state)
        });
      })
    });
  });
}

function getPages(schema, state) {
  var pages = getValidatedSchema(schema, state);

  return pages.map(function (_ref) {
    var children = _ref.children,
        rest = _objectWithoutProperties(_ref, ['children']);

    var errorCount = children.reduce(function (res, node) {
      return res + node.errors.length;
    }, 0);

    return _extends({}, rest, {
      errors: errorCount,
      completed: !errorCount
    });
  });
}

function getErrorPages(schema, state) {
  var pages = getValidatedSchema(schema, state);

  return pages.reduce(function (res, _ref2) {
    var id = _ref2.id,
        title = _ref2.title,
        type = _ref2.type,
        children = _ref2.children;
    return [].concat(_toConsumableArray(res), [{
      id: id,
      type: type,
      title: title,
      errorNodes: children.filter(function (_ref3) {
        var errors = _ref3.errors;
        return errors.length;
      }).map(function (_ref4) {
        var property = _ref4.property,
            heading = _ref4.heading,
            errors = _ref4.errors;
        return { property: property, heading: heading, errors: errors };
      })
    }]);
  }, []).filter(function (_ref5) {
    var errorNodes = _ref5.errorNodes;
    return errorNodes.length;
  });
}

function getNodeTitles(schema) {
  return schema.reduce(function (res, node) {
    return _extends({}, res, node.property ? _defineProperty({}, node.property, node.heading || node.property) : {}, node.children ? getNodeTitles(node.children) : {}, node.branches ? node.branches.reduce(function (branchesRes, branch) {
      return _extends({}, branchesRes, getNodeTitles(branch.children));
    }, {}) : {});
  }, {});
}

function getNodeTitle(schema, property) {
  return getNodeTitle(schema)[property] || property;
}

function getNodeValue(property, state) {
  return (0, _lodash2.default)(getData(state), property);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsideReset = exports.AsideResult = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-family: inherit;\n  font-size: 1em;\n  font-weight: bold;\n  text-align: center;\n  color: white;\n  background: ', ';\n  width: 100%;\n  padding: 12px 18px 13px;\n  cursor: pointer;\n  user-select: none;\n  border: 0 none;\n  border-radius: 0;\n  appearance: none;\n  margin-top: 30px;\n  margin-right: ', ';\n  margin-left: ', ';\n  margin-bottom: 10px;\n  position: relative;\n  transition: background 0.1s ease-in-out;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  &:hover {\n    background: ', ';\n  }\n'], ['\n  font-family: inherit;\n  font-size: 1em;\n  font-weight: bold;\n  text-align: center;\n  color: white;\n  background: ', ';\n  width: 100%;\n  padding: 12px 18px 13px;\n  cursor: pointer;\n  user-select: none;\n  border: 0 none;\n  border-radius: 0;\n  appearance: none;\n  margin-top: 30px;\n  margin-right: ', ';\n  margin-left: ', ';\n  margin-bottom: 10px;\n  position: relative;\n  transition: background 0.1s ease-in-out;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  &:hover {\n    background: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-family: inherit;\n  font-size: 1em;\n  font-weight: bold;\n  text-align: center;\n  color: ', ';\n  background: white;\n  width: 100%;\n  padding: 12px 18px 13px;\n  cursor: pointer;\n  user-select: none;\n  border: 1px solid ', ';\n  border-radius: 0;\n  appearance: none;\n  margin-right: ', ';\n  margin-left: ', ';\n  margin-bottom: 10px;\n  position: relative;\n  transition: all 0.1s ease-in-out;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  &:hover {\n    border-color: ', ';\n    color: ', ';\n  }\n'], ['\n  font-family: inherit;\n  font-size: 1em;\n  font-weight: bold;\n  text-align: center;\n  color: ', ';\n  background: white;\n  width: 100%;\n  padding: 12px 18px 13px;\n  cursor: pointer;\n  user-select: none;\n  border: 1px solid ', ';\n  border-radius: 0;\n  appearance: none;\n  margin-right: ', ';\n  margin-left: ', ';\n  margin-bottom: 10px;\n  position: relative;\n  transition: all 0.1s ease-in-out;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  &:hover {\n    border-color: ', ';\n    color: ', ';\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AsideResult = exports.AsideResult = (0, _injectStyles2.default)(_styledComponents2.default.div(_templateObject, function (_ref) {
  var styles = _ref.styles;
  return styles.color.light;
}, function (props) {
  return props.next ? '0' : 'auto';
}, function (props) {
  return props.next ? 'auto' : '0';
}, function (_ref2) {
  var styles = _ref2.styles;
  return styles.color.dark;
}));

var AsideReset = exports.AsideReset = (0, _injectStyles2.default)(_styledComponents2.default.button(_templateObject2, function (_ref3) {
  var styles = _ref3.styles;
  return styles.color.light;
}, function (_ref4) {
  var styles = _ref4.styles;
  return styles.color.light;
}, function (props) {
  return props.next ? '0' : 'auto';
}, function (props) {
  return props.next ? 'auto' : '0';
}, function (_ref5) {
  var styles = _ref5.styles;
  return styles.color.dark;
}, function (_ref6) {
  var styles = _ref6.styles;
  return styles.color.dark;
}));

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.PureBlock = PureBlock;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(8);

var _redux = __webpack_require__(34);

var _lodash = __webpack_require__(14);

var _lodash2 = _interopRequireDefault(_lodash);

var _Checkbox = __webpack_require__(69);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Image = __webpack_require__(71);

var _Image2 = _interopRequireDefault(_Image);

var _Input = __webpack_require__(38);

var _Input2 = _interopRequireDefault(_Input);

var _Missing = __webpack_require__(72);

var _Missing2 = _interopRequireDefault(_Missing);

var _Number = __webpack_require__(39);

var _Number2 = _interopRequireDefault(_Number);

var _Radio = __webpack_require__(73);

var _Radio2 = _interopRequireDefault(_Radio);

var _Select = __webpack_require__(75);

var _Select2 = _interopRequireDefault(_Select);

var _Text = __webpack_require__(77);

var _Text2 = _interopRequireDefault(_Text);

var _Data = __webpack_require__(78);

var _Data2 = _interopRequireDefault(_Data);

var _FetchOrg = __webpack_require__(79);

var _FetchOrg2 = _interopRequireDefault(_FetchOrg);

var _FetchSG = __webpack_require__(80);

var _FetchSG2 = _interopRequireDefault(_FetchSG);

var _Textarea = __webpack_require__(85);

var _Textarea2 = _interopRequireDefault(_Textarea);

var _ErrorIcon = __webpack_require__(15);

var _ErrorIcon2 = _interopRequireDefault(_ErrorIcon);

var _Html = __webpack_require__(11);

var _Html2 = _interopRequireDefault(_Html);

var _Image3 = __webpack_require__(88);

var _Image4 = _interopRequireDefault(_Image3);

var _actions = __webpack_require__(17);

var _state = __webpack_require__(16);

var _Block = __webpack_require__(10);

var _Heading = __webpack_require__(4);

var _Errors = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBlock(type) {
  switch (type) {
    case 'Radio':
    case 'Bool':
      return _Radio2.default;

    case 'Checkbox':
      return _Checkbox2.default;

    case 'Number':
      return _Number2.default;

    case 'Select':
      return _Select2.default;

    case 'Image':
      return _Image2.default;

    case 'Text':
      return _Text2.default;

    case 'Input':
      return _Input2.default;

    case 'Textarea':
      return _Textarea2.default;

    case 'Data':
      return _Data2.default;

    case 'FetchOrg':
      return _FetchOrg2.default;

    case 'FetchSG':
      return _FetchSG2.default;

    default:
      return null;
  }
}

function PureBlock(props) {
  var SpecificBlock = getBlock(props.type);

  if (props.type === 'Group') {
    return _react2.default.createElement(
      _Block.SpecificBlock,
      null,
      _react2.default.createElement(
        _Heading.H3,
        null,
        props.heading
      ),
      _react2.default.createElement(_Html2.default, { text: props.text }),
      props.children.map(function (block) {
        return _react2.default.createElement(ConnectedBlock, _extends({ grouped: true, simple: props.simple, key: block.property }, block));
      })
    );
  }

  if (!SpecificBlock) {
    return _react2.default.createElement(_Missing2.default, { type: props.type });
  }

  if (props.type === 'Image' || props.type === 'Text' || props.type === 'Data' || props.type === 'FetchSG') {
    return _react2.default.createElement(SpecificBlock, _extends({ grouped: props.grouped }, props));
  }

  return _react2.default.createElement(
    _Block.SpecificBlock,
    {
      id: props.property,
      grouped: props.grouped,
      groupedSimple: props.simple,
      disabled: props.disabled
    },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Heading.H3,
        { small: true },
        props.heading
      ),
      _react2.default.createElement(_Html2.default, { text: props.text }),
      _react2.default.createElement(SpecificBlock, _extends({}, props, {
        validation: props.currentValue && props.validator ? {
          error: !new RegExp(props.validator.pattern).test(props.currentValue),
          message: props.validator.error
        } : {}
      })),
      props.disabled && _react2.default.createElement(
        _Errors.ErrorMessage,
        null,
        _react2.default.createElement(_ErrorIcon2.default, null),
        ' ',
        props.errorDescription
      ),
      _react2.default.createElement(_Image4.default, { image: props.image })
    )
  );
}

PureBlock.defaultProps = {
  heading: '',
  text: '',
  image: {},
  errors: [],
  errorDescription: null,
  children: [],
  disabled: false,
  grouped: false,
  simple: false,
  validator: false,
  currentValue: undefined
};

PureBlock.propTypes = {
  type: _propTypes2.default.string.isRequired,
  heading: _propTypes2.default.string,
  text: _propTypes2.default.string,
  property: _propTypes2.default.string.isRequired,
  image: _propTypes2.default.object,
  grouped: _propTypes2.default.bool,
  simple: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  errors: _propTypes2.default.arrayOf(_propTypes2.default.any),
  errorDescription: _propTypes2.default.string,
  children: _propTypes2.default.arrayOf(_propTypes2.default.object),
  currentValue: _propTypes2.default.any,
  validator: _propTypes2.default.oneOf([false, _propTypes2.default.shape({
    error: _propTypes2.default.string.isRequired,
    pattern: _propTypes2.default.string.isRequired
  })])
};

var ConnectedBlock = (0, _reactRedux.connect)(function (state, props) {
  return {
    data: state[_state.NAME],
    currentValue: (0, _lodash2.default)(state[_state.NAME], props.property),
    disabled: props.errors && (Array.isArray(props.errors) && props.errors.length > 0 || props.errors.errors && props.errors.errors.length > 0)
  };
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({ setData: _actions.setData }, dispatch);
})(PureBlock);

exports.default = ConnectedBlock;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  margin-bottom: 10px;\n'], ['\n  display: block;\n  margin-bottom: 10px;\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = (0, _injectStyles2.default)(_styledComponents2.default.label(_templateObject));

exports.default = Label;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Value = exports.NodeSummary = exports.PageSummary = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0 0 20px;\n  margin-bottom: 6px;\n  background: white;\n  line-height: 2;\n  border-bottom: 1px solid ', ';\n  h3 {\n    padding: 0.2em 0;\n    margin-bottom: 20px;\n    display: flex;\n    justify-content: space-between;\n  }\n  button {\n    margin: 0 0 0 auto;\n  }\n  > div {\n    line-height: 1.4;\n  }\n  ', '\n'], ['\n  padding: 0 0 20px;\n  margin-bottom: 6px;\n  background: white;\n  line-height: 2;\n  border-bottom: 1px solid ', ';\n  h3 {\n    padding: 0.2em 0;\n    margin-bottom: 20px;\n    display: flex;\n    justify-content: space-between;\n  }\n  button {\n    margin: 0 0 0 auto;\n  }\n  > div {\n    line-height: 1.4;\n  }\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral([' \n  margin-bottom: 20px;\n  h5 {\n    font-weight: 300;\n  }\n'], [' \n  margin-bottom: 20px;\n  h5 {\n    font-weight: 300;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral([' \n  color: ', ';\n  font-weight: ', ';\n  font-style: ', ';\n'], [' \n  color: ', ';\n  font-weight: ', ';\n  font-style: ', ';\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageSummary = exports.PageSummary = (0, _injectStyles2.default)(_styledComponents2.default.div(_templateObject, function (_ref) {
  var styles = _ref.styles;
  return styles.color.warmgray3;
}, function (props) {
  return props.error ? '\n      h3 {\n        color: ' + props.styles.color.red + ';\n      }\n      button {\n        background: ' + props.styles.color.red + ';\n      }\n    ' : '\n      h3 {\n        color: inherit;\n      }\n    ';
}));

var NodeSummary = exports.NodeSummary = (0, _injectStyles2.default)(_styledComponents2.default.div(_templateObject2));

var Value = exports.Value = (0, _injectStyles2.default)(_styledComponents2.default.div(_templateObject3, function (props) {
  return props.missing ? props.styles.color.red : 'black';
}, function (props) {
  return props.missing ? 'normal' : 'bold';
}, function (props) {
  return props.missing ? 'italic' : 'normal';
}));

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(21);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(61);

var _lodash2 = _interopRequireDefault(_lodash);

var _styles = __webpack_require__(30);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleProvider = function (_Component) {
  _inherits(StyleProvider, _Component);

  function StyleProvider() {
    _classCallCheck(this, StyleProvider);

    return _possibleConstructorReturn(this, (StyleProvider.__proto__ || Object.getPrototypeOf(StyleProvider)).apply(this, arguments));
  }

  _createClass(StyleProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        styles: (0, _lodash2.default)({}, _styles2.default, this.props.styles)
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return StyleProvider;
}(_react.Component);

exports.default = StyleProvider;
StyleProvider.propTypes = {
  styles: _propTypes2.default.object,
  children: _propTypes2.default.node.isRequired
};
StyleProvider.defaultProps = {
  styles: {}
};
StyleProvider.childContextTypes = {
  styles: _propTypes2.default.object
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logo: {
    default: 'url("https://dibk.no/Frontend/assets/images/dibk_logo_mob.svg")',
    mobile: 'url("https://dibk.no/Frontend/assets/images/DiBk_logo_rgb.svg")'
  },
  font: {
    primary: 'Open Sans',
    secondary: 'Altis'
  },
  color: {
    light: '#00757F',
    dark: '#072938',
    bluegreen: '#54acb8',
    lightorange: '#faefdf',
    lightgreen: '#f0f2cb',
    warmgray3: '#f2f1f0',
    warmgray2: '#e5e3e1',
    darkgray: '#afaba8',
    red: '#d12133',
    oldred: '#9d312f'
  },
  padding: {
    small: '2px',
    medium: '5px',
    large: '8px'
  },
  size: {
    blockWidth: '700px',
    asideWidth: '360px',
    headerHeight: '75px',
    mobileContentWidth: '88%'
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  grid-area: aside;\n  padding: 30px 20px 20px;\n  margin: 0 30px;\n  background: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.21);\n  ', ' @media screen and (max-width: 700px) {\n    max-width: ', ';\n    margin: 0 auto;\n    padding: 20px;\n  }\n'], ['\n  grid-area: aside;\n  padding: 30px 20px 20px;\n  margin: 0 30px;\n  background: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.21);\n  ', ' @media screen and (max-width: 700px) {\n    max-width: ', ';\n    margin: 0 auto;\n    padding: 20px;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Aside = (0, _injectStyles2.default)(_styledComponents2.default.aside(_templateObject, function (props) {
  return props.tocExpanded ? '@media screen and (max-width: 700px) {\n      display: none;\n    }' : '';
}, function (_ref) {
  var styles = _ref.styles;
  return styles.size.mobileContentWidth;
}));

exports.default = Aside;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: ', ';\n  margin: 2px auto;\n  background: white;\n  border: 1px solid ', ';\n  font-family: inherit;\n  font-size: inherit;\n  padding: 0.5em;\n  cursor: pointer;\n  display: none;\n  @media screen and (max-width: 700px) {\n    display: block;\n  }\n'], ['\n  width: ', ';\n  margin: 2px auto;\n  background: white;\n  border: 1px solid ', ';\n  font-family: inherit;\n  font-size: inherit;\n  padding: 0.5em;\n  cursor: pointer;\n  display: none;\n  @media screen and (max-width: 700px) {\n    display: block;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = (0, _injectStyles2.default)(_styledComponents2.default.button(_templateObject, function (_ref) {
  var styles = _ref.styles;
  return styles.size.mobileContentWidth;
}, function (_ref2) {
  var styles = _ref2.styles;
  return styles.color.dark;
}));

exports.default = Button;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.1s ease-in-out;\n  &:hover {\n    cursor: pointer;\n    background: ', ';\n  }\n  div {\n    color: ', ';\n    background: ', ';\n    display: flex;\n    align-self: stretch;\n    min-width: 2.4em;\n    align-items: center;\n    justify-content: center;\n    transition: background 0.1s ease-in-out;\n    overflow: hidden;\n  }\n  &:hover div {\n    background: ', ';\n  }\n  p {\n    flex-grow: 1;\n    font-weight: bold;\n    padding: 0 20px;\n  }\n  span {\n    text-decoration: underline;\n    color: ', ';\n    font-size: 1em;\n    font-weight: normal;\n    display: block;\n    padding: 0;\n  }\n  &::after {\n    content: " ";\n    width: 0.7em;\n    height: 0.4em;\n    margin: 0.7em;\n    flex-shrink: 0;\n    border-left: 3px solid ', ';\n    border-bottom: 3px solid ', ';\n  }\n  ', ' \n'], ['\n  background: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.1s ease-in-out;\n  &:hover {\n    cursor: pointer;\n    background: ', ';\n  }\n  div {\n    color: ', ';\n    background: ', ';\n    display: flex;\n    align-self: stretch;\n    min-width: 2.4em;\n    align-items: center;\n    justify-content: center;\n    transition: background 0.1s ease-in-out;\n    overflow: hidden;\n  }\n  &:hover div {\n    background: ', ';\n  }\n  p {\n    flex-grow: 1;\n    font-weight: bold;\n    padding: 0 20px;\n  }\n  span {\n    text-decoration: underline;\n    color: ', ';\n    font-size: 1em;\n    font-weight: normal;\n    display: block;\n    padding: 0;\n  }\n  &::after {\n    content: " ";\n    width: 0.7em;\n    height: 0.4em;\n    margin: 0.7em;\n    flex-shrink: 0;\n    border-left: 3px solid ', ';\n    border-bottom: 3px solid ', ';\n  }\n  ', ' \n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AsideItem = (0, _injectStyles2.default)(_styledComponents2.default.div(_templateObject, function (props) {
  return props.active ? function (_ref) {
    var styles = _ref.styles;
    return styles.color.warmgray3;
  } : 'white';
}, function (_ref2) {
  var styles = _ref2.styles;
  return styles.color.warmgray3;
}, function (props) {
  return props.active ? 'white' : 'inherit';
}, function (props) {
  return props.active ? function (_ref3) {
    var styles = _ref3.styles;
    return styles.color.dark;
  } : 'white';
}, function (props) {
  return props.active ? function (_ref4) {
    var styles = _ref4.styles;
    return styles.color.dark;
  } : function (_ref5) {
    var styles = _ref5.styles;
    return styles.color.warmgray3;
  };
}, function (_ref6) {
  var styles = _ref6.styles;
  return styles.color.light;
}, function (_ref7) {
  var styles = _ref7.styles;
  return styles.color.light;
}, function (_ref8) {
  var styles = _ref8.styles;
  return styles.color.light;
}, function (props) {
  return props.done ? '\n      &::after {\n        transform: rotate(-45deg);\n      }\n      span {\n        display: block;\n      }\n    ' : '\n      &::after {\n        border: none;\n      }\n      span {\n        display: none;\n      }\n    ';
}));

exports.default = AsideItem;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  grid-area: header;\n  display: flex;\n  padding: 10px 20px;\n  background-color: ', ';\n  color: white;\n  line-height: calc(', ' - 20px);\n  a, div {\n    flex-grow: 1;\n    position: relative;\n  }\n  a {\n    color: white;\n    text-decoration: none;\n    display: block;\n    width: ', ';\n    max-width: ', ';\n  }\n  div {\n    text-align: right;\n  }\n  @media screen and (max-width: 700px) {\n    display: flex;\n    a {\n      max-width: ', ';\n    }\n  }\n'], ['\n  grid-area: header;\n  display: flex;\n  padding: 10px 20px;\n  background-color: ', ';\n  color: white;\n  line-height: calc(', ' - 20px);\n  a, div {\n    flex-grow: 1;\n    position: relative;\n  }\n  a {\n    color: white;\n    text-decoration: none;\n    display: block;\n    width: ', ';\n    max-width: ', ';\n  }\n  div {\n    text-align: right;\n  }\n  @media screen and (max-width: 700px) {\n    display: flex;\n    a {\n      max-width: ', ';\n    }\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = (0, _injectStyles2.default)(_styledComponents2.default.nav(_templateObject, function (_ref) {
  var styles = _ref.styles;
  return styles.color.dark;
}, function (_ref2) {
  var styles = _ref2.styles;
  return styles.size.headerHeight;
}, function (_ref3) {
  var styles = _ref3.styles;
  return styles.size.asideWidth;
}, function (_ref4) {
  var styles = _ref4.styles;
  return styles.size.asideWidth;
}, function (_ref5) {
  var styles = _ref5.styles;
  return styles.size.headerHeight;
}));

exports.default = Nav;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ' no-repeat;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  @media screen and (max-width: 700px) {\n    background: ', ' no-repeat;\n  }\n'], ['\n  background: ', ' no-repeat;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  @media screen and (max-width: 700px) {\n    background: ', ' no-repeat;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Logo = (0, _injectStyles2.default)(_styledComponents2.default.div(_templateObject, function (_ref) {
  var styles = _ref.styles;
  return styles.logo.default;
}, function (_ref2) {
  var styles = _ref2.styles;
  return styles.logo.mobile;
}));

exports.default = Logo;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0;\n  margin: 0 33px 30px;\n  max-width: ', ';\n  figcaption {\n    font-style: italic;\n  }\n  @media screen and (max-width: 700px) {\n    margin: 0 auto 30px;\n  }\n'], ['\n  padding: 0;\n  margin: 0 33px 30px;\n  max-width: ', ';\n  figcaption {\n    font-style: italic;\n  }\n  @media screen and (max-width: 700px) {\n    margin: 0 auto 30px;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Figure = (0, _injectStyles2.default)(_styledComponents2.default.figure(_templateObject, function (_ref) {
  var styles = _ref.styles;
  return styles.size.blockWidth;
}));

exports.default = Figure;

/*
  background: #ECF2F6;
  &:nth-child(odd) {
    background: #DBE8F0;
  }
*/

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ErrorIcon = __webpack_require__(15);

var _ErrorIcon2 = _interopRequireDefault(_ErrorIcon);

var _Input = __webpack_require__(5);

var _Errors = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
      var _this$props = _this.props,
          type = _this$props.type,
          step = _this$props.step,
          property = _this$props.property,
          setData = _this$props.setData,
          update = _this$props.update;

      var value = e.target.value;

      if (type === 'number' && step >= 1) {
        value = parseInt(value, 10);
      } else if (type === 'number') {
        value = parseFloat(value);
      }

      update(value);
      setData(property, value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentValue = _props.currentValue,
          placeholder = _props.placeholder,
          min = _props.min,
          max = _props.max,
          type = _props.type,
          step = _props.step,
          validation = _props.validation,
          disabled = _props.disabled;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Input.TextInput, {
          type: type,
          min: min,
          max: max,
          step: step,
          placeholder: placeholder,
          onChange: this.handleChange,
          value: currentValue,
          validation: validation,
          disabled: disabled
        }),
        validation.error && _react2.default.createElement(
          _Errors.ErrorMessage,
          null,
          _react2.default.createElement(_ErrorIcon2.default, null),
          ' ',
          validation.message
        )
      );
    }
  }]);

  return Input;
}(_react.Component);

exports.default = Input;
Input.defaultProps = {
  type: 'text',
  placeholder: '',
  min: 0,
  max: Number.MAX_SAFE_INTEGER,
  step: 1,
  currentValue: '',
  validation: {},
  disabled: false,
  update: function update() {}
};
Input.propTypes = {
  type: _propTypes2.default.string,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  step: _propTypes2.default.number,
  placeholder: _propTypes2.default.string,
  setData: _propTypes2.default.func.isRequired,
  property: _propTypes2.default.string.isRequired,
  currentValue: _propTypes2.default.any,
  validation: _propTypes2.default.shape({
    error: _propTypes2.default.bool,
    message: _propTypes2.default.string
  }),
  disabled: _propTypes2.default.bool,
  update: _propTypes2.default.func
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Number;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = __webpack_require__(38);

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Number(_ref) {
  var minimum = _ref.minimum,
      maximum = _ref.maximum,
      props = _objectWithoutProperties(_ref, ['minimum', 'maximum']);

  return _react2.default.createElement(_Input2.default, _extends({}, props, {
    type: 'number',
    step: 1,
    min: minimum,
    max: maximum
  }));
}

Number.propTypes = {
  minimum: _propTypes2.default.number.isRequired,
  maximum: _propTypes2.default.number.isRequired
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0;\n  dt {\n    font-weight: 300;\n  }\n  dd {\n    margin: 0 0 20px;\n    font-weight: bold;\n  }\n'], ['\n  margin: 0;\n  dt {\n    font-weight: 300;\n  }\n  dd {\n    margin: 0 0 20px;\n    font-weight: bold;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DL = (0, _injectStyles2.default)(_styledComponents2.default.dl(_templateObject));

exports.default = DL;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  svg {\n    width: 1.2em;\n    height: 1.2em;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 0.25em;\n  }\n  div, p {\n    display: inline;\n  }\n'], ['\n  svg {\n    width: 1.2em;\n    height: 1.2em;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 0.25em;\n  }\n  div, p {\n    display: inline;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Information = (0, _injectStyles2.default)(_styledComponents2.default.div(_templateObject));

exports.default = Information;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used to match template delimiters. */
var reInterpolate = /<%=([\s\S]+?)%>/g;

module.exports = reInterpolate;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  max-width: ', ';\n  display: flex;\n  margin-bottom: 50px;\n'], ['\n  max-width: ', ';\n  display: flex;\n  margin-bottom: 50px;\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Navigation = (0, _injectStyles2.default)(_styledComponents2.default.main(_templateObject, function (_ref) {
  var styles = _ref.styles;
  return styles.size.blockWidth;
}));

exports.default = Navigation;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.liftChildrenBranchPages = exports.reduceSuggestedAnswers = exports.mapWizardChildren = exports.reduceBranches = exports.filterSchemaNodes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint no-use-before-define: 0 */

exports.default = reduceWizard;

var _dsl = __webpack_require__(45);

var _dsl2 = _interopRequireDefault(_dsl);

var _state = __webpack_require__(16);

var _vocalizeErrors = __webpack_require__(91);

var _vocalizeErrors2 = _interopRequireDefault(_vocalizeErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var filterSchemaNodes = exports.filterSchemaNodes = function filterSchemaNodes(state) {
  return function (node) {
    if (node.type === 'Branch') {
      return true;
    }

    // if no expression is specified that could hide this node, exit now
    if (!node.hidden) {
      return true;
    }

    // parse and test expression. if result is falsy, we're not hiding
    return !(0, _dsl2.default)(node.hidden)(state[_state.NAME]).valid;
  };
};

var reduceBranches = exports.reduceBranches = function reduceBranches(state) {
  return function (res, node) {
    if (node.type !== 'Branch') {
      return [].concat(_toConsumableArray(res), [node]);
    }

    var selectedBranch = node.branches.find(function (branch) {
      return (0, _dsl2.default)(branch.test)(state[_state.NAME]).valid;
    });

    if (selectedBranch) {
      return [].concat(_toConsumableArray(res), _toConsumableArray(selectedBranch.children));
    }

    return res;
  };
};

var mapWizardChildren = exports.mapWizardChildren = function mapWizardChildren(state, nodeTitles) {
  return function (node) {
    var errors = node.disabled ? (0, _dsl2.default)(node.disabled)(state[_state.NAME]).errors : [];

    if (node.type === 'Result') {
      return node;
    }

    if (!node.children) {
      return _extends({}, node, {
        errors: errors,
        errorDescription: (0, _vocalizeErrors2.default)(errors, nodeTitles)
      });
    }

    return _extends({}, node, {
      children: reduceWizard(node.children, state, nodeTitles)
    });
  };
};

var reduceSuggestedAnswers = exports.reduceSuggestedAnswers = function reduceSuggestedAnswers(state) {
  return function (node) {
    if (!node.suggestedAnswer) {
      return node;
    }

    return _extends({}, node, {
      suggestedAnswer: node.suggestedAnswer.filter(function (_ref) {
        var hidden = _ref.hidden;

        if (hidden === undefined) {
          return true;
        }

        return !(0, _dsl2.default)(hidden)(state[_state.NAME]).valid;
      }).map(function (option) {
        if (option.disabled === undefined) {
          return option;
        }

        return _extends({}, option, {
          disabled: !(0, _dsl2.default)(option.disabled)(state[_state.NAME]).valid
        });
      })
    });
  };
};

var liftChildrenBranchPages = exports.liftChildrenBranchPages = function liftChildrenBranchPages(res, node) {
  // We've got a result page already. Skip the rest
  if (res.length && res[res.length - 1].type === 'Result') {
    return res;
  }

  // If the node has no children, there'll be no pages to hoist
  if (!Array.isArray(node.children) || !node.children.length) {
    return [].concat(_toConsumableArray(res), [node]);
  }

  // Hoist result page if the last child of this page is a result
  // page (mening it's a dead end)
  if (node.children[node.children.length - 1].type === 'Result') {
    return [].concat(_toConsumableArray(res), [node, node.children.pop()]);
  }

  // Page with regular pages (not a dead end)
  return [].concat(_toConsumableArray(res), [node]);
};

function reduceWizard(schema, state, nodeTitles) {
  return schema.reduce(reduceBranches(state), []).filter(filterSchemaNodes(state)).map(mapWizardChildren(state, nodeTitles)).map(reduceSuggestedAnswers(state)).reduce(liftChildrenBranchPages, []);
}

/***/ }),
/* 45 */
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

var _lodash = __webpack_require__(14);

var _lodash2 = _interopRequireDefault(_lodash);

var _validator = __webpack_require__(90);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Summary;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Page = __webpack_require__(95);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Summary(_ref) {
  var errorPages = _ref.errorPages,
      setPage = _ref.setPage,
      pages = _ref.pages;

  return _react2.default.createElement(
    'div',
    null,
    pages.filter(function (_ref2) {
      var type = _ref2.type;
      return type === 'Page';
    }).map(function (page) {
      return _react2.default.createElement(_Page2.default, _extends({
        error: !!errorPages.find(function (_ref3) {
          var id = _ref3.id;
          return page.id === id;
        }),
        goToPage: function goToPage() {
          return setPage(page.id);
        }
      }, page));
    })
  );
}

Summary.propTypes = {
  errorPages: _propTypes2.default.array.isRequired,
  setPage: _propTypes2.default.func.isRequired,
  pages: _propTypes2.default.array
};

Summary.defaultProps = {
  pages: []
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
                     value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template-areas: "header header"\n                       "aside main"\n                       "footer footer";\n  grid-template-columns: ', ' 1fr;\n  grid-template-rows: ', ' 1fr 60px;\n  min-height: 100vh;\n  justify-content: center;\n  @media screen and (max-width: 700px) {\n          grid-template-areas: "header"\n                               "aside"\n                               "main"\n                               "footer";\n          grid-template-columns: 100%;\n          grid-template-rows: ', '\n                              auto\n                              1fr\n                              80px;\n          grid-gap: 0;\n      }\n  }\n'], ['\n  display: grid;\n  grid-template-areas: "header header"\n                       "aside main"\n                       "footer footer";\n  grid-template-columns: ', ' 1fr;\n  grid-template-rows: ', ' 1fr 60px;\n  min-height: 100vh;\n  justify-content: center;\n  @media screen and (max-width: 700px) {\n          grid-template-areas: "header"\n                               "aside"\n                               "main"\n                               "footer";\n          grid-template-columns: 100%;\n          grid-template-rows: ', '\n                              auto\n                              1fr\n                              80px;\n          grid-gap: 0;\n      }\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Grid = (0, _injectStyles2.default)(_styledComponents2.default.div(_templateObject, function (_ref) {
                     var styles = _ref.styles;
                     return styles.size.asideWidth;
}, function (_ref2) {
                     var styles = _ref2.styles;
                     return styles.size.headerHeight;
}, function (_ref3) {
                     var styles = _ref3.styles;
                     return styles.size.headerHeight;
}));

exports.default = Grid;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  grid-area: footer;\n  padding: 20px;\n  background-color: white;\n'], ['\n  grid-area: footer;\n  padding: 20px;\n  background-color: white;\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Footer = (0, _injectStyles2.default)(_styledComponents2.default.footer(_templateObject));

exports.default = Footer;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: white;\n  background-image: linear-gradient(164deg, rgba(137, 174, 196, 0.34), white, rgba(0, 117, 127, 0.19));\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  font-family: ', ';\n  * {\n    box-sizing: border-box;\n    &:focus {\n      outline-color: ', ';\n    }\n  }\n  img {\n    max-width: 100%;\n  }\n  a {\n    color: ', ';\n    &:hover {\n      color: ', ';\n    }\n  }\n'], ['\n  background-color: white;\n  background-image: linear-gradient(164deg, rgba(137, 174, 196, 0.34), white, rgba(0, 117, 127, 0.19));\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  font-family: ', ';\n  * {\n    box-sizing: border-box;\n    &:focus {\n      outline-color: ', ';\n    }\n  }\n  img {\n    max-width: 100%;\n  }\n  a {\n    color: ', ';\n    &:hover {\n      color: ', ';\n    }\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wizard = (0, _injectStyles2.default)(_styledComponents2.default.div(_templateObject, function (_ref) {
  var styles = _ref.styles;
  return styles.font.primary;
}, function (_ref2) {
  var styles = _ref2.styles;
  return styles.color.bluegreen;
}, function (_ref3) {
  var styles = _ref3.styles;
  return styles.color.light;
}, function (_ref4) {
  var styles = _ref4.styles;
  return styles.color.dark;
}));

exports.default = Wizard;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dsl = exports.Primitives = exports.StyleProvider = exports.Wizard = exports.state = undefined;

var _state2 = __webpack_require__(16);

var _state = _interopRequireWildcard(_state2);

var _Wizard2 = __webpack_require__(53);

var _Wizard3 = _interopRequireDefault(_Wizard2);

var _StyleProvider2 = __webpack_require__(29);

var _StyleProvider3 = _interopRequireDefault(_StyleProvider2);

var _primitives = __webpack_require__(100);

var _Primitives = _interopRequireWildcard(_primitives);

var _dsl2 = __webpack_require__(45);

var _dsl = _interopRequireWildcard(_dsl2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.state = _state;
exports.Wizard = _Wizard3.default;
exports.StyleProvider = _StyleProvider3.default;
exports.Primitives = _Primitives;
exports.dsl = _dsl;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = stateReducer;

var _lodash = __webpack_require__(52);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

function stateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _actions.SET_DATA:
      return (0, _lodash2.default)(_extends({}, state), payload.key, payload.value, function (nsValue) {
        return nsValue || {};
      });

    case _actions.RESET_DATA:
      return initialState;

    default:
      return state;
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
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
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

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

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

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
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

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
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = isKey(path, object) ? [path] : castPath(path);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
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
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
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
 * This method is like `_.set` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {};
 *
 * _.setWith(object, '[0][1]', 'a', Object);
 * // => { '0': { '1': 'a' } }
 */
function setWith(object, path, value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return object == null ? object : baseSet(object, path, value, customizer);
}

module.exports = setWith;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(8);

var _reactAutobind = __webpack_require__(13);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _StyleProvider = __webpack_require__(29);

var _StyleProvider2 = _interopRequireDefault(_StyleProvider);

var _Aside = __webpack_require__(63);

var _Aside2 = _interopRequireDefault(_Aside);

var _Header = __webpack_require__(67);

var _Header2 = _interopRequireDefault(_Header);

var _Page = __webpack_require__(68);

var _Page2 = _interopRequireDefault(_Page);

var _reduceWizard = __webpack_require__(44);

var _reduceWizard2 = _interopRequireDefault(_reduceWizard);

var _selectors = __webpack_require__(20);

var _tracking = __webpack_require__(92);

var _tracking2 = _interopRequireDefault(_tracking);

var _Result = __webpack_require__(93);

var _Result2 = _interopRequireDefault(_Result);

var _Grid = __webpack_require__(47);

var _Grid2 = _interopRequireDefault(_Grid);

var _Footer = __webpack_require__(48);

var _Footer2 = _interopRequireDefault(_Footer);

var _Wizard = __webpack_require__(49);

var _Wizard2 = _interopRequireDefault(_Wizard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wizard = function (_Component) {
  _inherits(Wizard, _Component);

  function Wizard(props) {
    _classCallCheck(this, Wizard);

    var _this = _possibleConstructorReturn(this, (Wizard.__proto__ || Object.getPrototypeOf(Wizard)).call(this, props));

    _this.nextPage = function () {
      return _this.changePage(1);
    };

    _this.previousPage = function () {
      return _this.changePage(-1);
    };

    _this.state = {
      page: 0,
      result: false
    };
    (0, _reactAutobind2.default)(_this);
    return _this;
  }

  _createClass(Wizard, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.state.page !== prevState.page) {
        (0, _tracking2.default)(this.props.schema.filter(function (item) {
          return item.id === _this2.state.page;
        })[0].title);
      }
    }

    // @todo Consider finding a more elegant way for scrolling..?

  }, {
    key: 'setPage',
    value: function setPage(page) {
      var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (property) {
        setImmediate(function () {
          var element = document.getElementById(property);

          if (!element) {
            return;
          }

          window.scroll(0, element.offsetTop);
        });
      } else {
        window.scrollTo(0, 0);
      }

      this.setState({ page: page });
    }
  }, {
    key: 'getCurrentIndex',
    value: function getCurrentIndex() {
      var _this3 = this;

      return Math.max(0, this.props.schema.findIndex(function (_ref) {
        var id = _ref.id;
        return id === _this3.state.page;
      }));
    }
  }, {
    key: 'changePage',
    value: function changePage(distance) {
      var schema = this.props.schema;
      var pageIndex = this.getCurrentIndex();

      var newIndex = pageIndex + distance;

      if (newIndex >= schema.length || newIndex < 0) {
        return;
      }

      this.setPage(schema[newIndex].id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          wizard = _props.wizard,
          styles = _props.styles,
          schema = _props.schema,
          tableOfContents = _props.tableOfContents,
          exports = _props.exports;

      var pageIndex = this.getCurrentIndex();
      var page = schema[pageIndex];

      return _react2.default.createElement(
        _StyleProvider2.default,
        { styles: styles },
        _react2.default.createElement(
          _Wizard2.default,
          null,
          _react2.default.createElement(
            _Grid2.default,
            null,
            _react2.default.createElement(_Header2.default, null),
            _react2.default.createElement(_Aside2.default, {
              page: page.id,
              setPage: this.setPage,
              title: wizard.meta.title,
              tableOfContents: tableOfContents
            }),
            page.type === 'Result' ? _react2.default.createElement(_Result2.default, _extends({}, page, {
              previousPage: this.previousPage,
              pageid: page.id,
              wizard: wizard,
              schema: schema,
              setPage: this.setPage,
              exports: exports
            })) : _react2.default.createElement(_Page2.default, _extends({
              nextPage: this.nextPage,
              previousPage: this.previousPage,
              pageid: page.id,
              firstPage: schema[0].id === page.id
            }, page)),
            _react2.default.createElement(
              _Footer2.default,
              null,
              _react2.default.createElement(
                'div',
                null,
                wizard.meta.footer
              )
            )
          )
        )
      );
    }
  }]);

  return Wizard;
}(_react.Component);

Wizard.propTypes = {
  wizard: _propTypes2.default.object.isRequired,
  schema: _propTypes2.default.array.isRequired,
  exports: _propTypes2.default.objectOf(_propTypes2.default.func),
  styles: _propTypes2.default.object,
  tableOfContents: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};
Wizard.defaultProps = {
  styles: {},
  exports: {}
};


var mapStateToProps = function mapStateToProps(state, _ref2) {
  var wizard = _ref2.wizard;

  var nodeTitles = (0, _selectors.getNodeTitles)(wizard.schema);

  return {
    tableOfContents: (0, _selectors.getPages)(wizard.schema, state),
    schema: (0, _reduceWizard2.default)(wizard.schema, state, nodeTitles)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Wizard);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54).setImmediate))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(55);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(7)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(21);
var invariant = __webpack_require__(22);
var warning = __webpack_require__(28);
var assign = __webpack_require__(57);

var ReactPropTypesSecret = __webpack_require__(23);
var checkPropTypes = __webpack_require__(58);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(22);
  var warning = __webpack_require__(28);
  var ReactPropTypesSecret = __webpack_require__(23);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(21);
var invariant = __webpack_require__(22);
var ReactPropTypesSecret = __webpack_require__(23);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = autoBind;
var wontBind = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

var toBind = [];

function autoBind(context) {
  if (context === undefined) {
    console.error('Autobind error: No context provided.');
    return;
  }

  var objPrototype = Object.getPrototypeOf(context);

  if (arguments.length > 1) {
    // If a list of methods to bind is provided, use it.
    toBind = Array.prototype.slice.call(arguments, 1);
  } else {
    // If no list of methods to bind is provided, bind all available methods in class.
    toBind = Object.getOwnPropertyNames(objPrototype);
  }

  toBind.forEach(function (method) {
    var descriptor = Object.getOwnPropertyDescriptor(objPrototype, method);

    if (descriptor === undefined) {
      console.warn('Autobind: "' + method + '" method not found in class.');
      return;
    }

    // Return if it's special case function or if not a function at all
    if (wontBind.indexOf(method) !== -1 || typeof descriptor.value !== 'function') {
      return;
    }

    Object.defineProperty(objPrototype, method, boundMethod(objPrototype, method, descriptor));
  });
}

/**
* From autobind-decorator (https://github.com/andreypopp/autobind-decorator/tree/master)
* Return a descriptor removing the value and returning a getter
* The getter will return a .bind version of the function
* and memoize the result against a symbol on the instance
*/
function boundMethod(objPrototype, method, descriptor) {
  var fn = descriptor.value;

  return {
    configurable: true,
    get: function get() {
      if (this === objPrototype || this.hasOwnProperty(method)) {
        return fn;
      }

      var boundFn = fn.bind(this);
      Object.defineProperty(this, method, {
        value: boundFn,
        configurable: true,
        writable: true
      });
      return boundFn;
    }
  };
}
module.exports = exports['default'];


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

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

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
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

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

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
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

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
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (typeof key == 'number' && value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

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
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
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
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  if (!(isArray(source) || isTypedArray(source))) {
    var props = baseKeysIn(source);
  }
  arrayEach(props || source, function(srcValue, key) {
    if (props) {
      key = srcValue;
      srcValue = source[key];
    }
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  });
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    newValue = srcValue;
    if (isArray(srcValue) || isTypedArray(srcValue)) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else {
        isCommon = false;
        newValue = baseClone(srcValue, true);
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        isCommon = false;
        newValue = baseClone(srcValue, true);
      }
      else {
        newValue = objValue;
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
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
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
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
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
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
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
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
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

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
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
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
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(62)(module)))

/***/ }),
/* 62 */
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Aside = __webpack_require__(31);

var _Aside2 = _interopRequireDefault(_Aside);

var _Heading = __webpack_require__(4);

var _ToggleButton = __webpack_require__(32);

var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

var _AsideItem = __webpack_require__(64);

var _AsideItem2 = _interopRequireDefault(_AsideItem);

var _AsideResult = __webpack_require__(65);

var _AsideResult2 = _interopRequireDefault(_AsideResult);

var _AsideReset = __webpack_require__(66);

var _AsideReset2 = _interopRequireDefault(_AsideReset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @todo Use a more robust id for the page
var Aside = function (_Component) {
  _inherits(Aside, _Component);

  function Aside() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Aside);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Aside.__proto__ || Object.getPrototypeOf(Aside)).call.apply(_ref, [this].concat(args))), _this), _this.state = { tocExpanded: true }, _this.toggleToc = function () {
      return _this.setState({ tocExpanded: !_this.state.tocExpanded });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Aside, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$page = _props.page,
          currentPage = _props$page === undefined ? {} : _props$page,
          setPage = _props.setPage,
          tableOfContents = _props.tableOfContents,
          title = _props.title;
      var tocExpanded = this.state.tocExpanded;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _ToggleButton2.default,
          { onClick: this.toggleToc },
          tocExpanded ? 'Vis' : 'Skjul',
          ' innholdsfortegnelse'
        ),
        _react2.default.createElement(
          _Aside2.default,
          { tocExpanded: tocExpanded },
          _react2.default.createElement(
            _Heading.H1,
            { small: true },
            title
          ),
          tableOfContents.map(function (page, index) {
            return page.type === 'Result' ? _react2.default.createElement(_AsideResult2.default, {
              key: page.id,
              id: page.id,
              title: page.title,
              setPage: setPage,
              done: !page.errors,
              active: page.id === currentPage
            }) : _react2.default.createElement(_AsideItem2.default, {
              key: page.id // eslint-disable-line react/no-array-index-key
              , id: page.id,
              index: index + 1,
              title: page.title,
              setPage: setPage,
              done: !page.errors,
              active: page.id === currentPage
            });
          }),
          _react2.default.createElement(_AsideReset2.default, null)
        )
      );
    }
  }]);

  return Aside;
}(_react.Component);

exports.default = Aside;
Aside.defaultProps = {
  title: 'Missing page title',
  page: 0
};
Aside.propTypes = {
  page: _propTypes2.default.string,
  setPage: _propTypes2.default.func.isRequired,
  tableOfContents: _propTypes2.default.array.isRequired,
  title: _propTypes2.default.string
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AsideItem;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AsideItem = __webpack_require__(33);

var _AsideItem2 = _interopRequireDefault(_AsideItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AsideItem(_ref) {
  var setPage = _ref.setPage,
      id = _ref.id,
      done = _ref.done,
      title = _ref.title,
      active = _ref.active,
      index = _ref.index;

  return _react2.default.createElement(
    _AsideItem2.default,
    { active: active, done: done, onClick: function onClick() {
        return setPage(id);
      }, tabIndex: '0' },
    _react2.default.createElement(
      'div',
      null,
      index
    ),
    _react2.default.createElement(
      'p',
      null,
      title,
      _react2.default.createElement(
        'span',
        null,
        'Endre svar'
      )
    )
  );
}

AsideItem.defaultProps = {
  title: 'TITLE MISSING',
  done: false,
  active: false
};

AsideItem.propTypes = {
  active: _propTypes2.default.bool,
  index: _propTypes2.default.number.isRequired,
  id: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string,
  done: _propTypes2.default.bool,
  setPage: _propTypes2.default.func.isRequired
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AsideResult;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AsideButton = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AsideResult(_ref) {
  var setPage = _ref.setPage,
      id = _ref.id,
      active = _ref.active;

  return _react2.default.createElement(
    _AsideButton.AsideResult,
    { 'data-id': id, active: active, onClick: function onClick() {
        return setPage(id);
      }, tabIndex: '0' },
    'Vis resultat'
  );
}

AsideResult.defaultProps = {
  active: false
};

AsideResult.propTypes = {
  active: _propTypes2.default.bool,
  id: _propTypes2.default.string.isRequired,
  setPage: _propTypes2.default.func.isRequired
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(8);

var _redux = __webpack_require__(34);

var _actions = __webpack_require__(17);

var _AsideButton = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AsideReset(props) {
  return _react2.default.createElement(
    _AsideButton.AsideReset,
    {
      onClick: function onClick() {
        /* eslint no-alert: 0 */
        if (confirm('Sikker på at du vil slette all data?')) {
          props.resetData();
        }
      }
    },
    'Start p\xE5 nytt'
  );
}

AsideReset.propTypes = {
  resetData: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRedux.connect)(null, function (dispatch) {
  return (0, _redux.bindActionCreators)({ resetData: _actions.resetData }, dispatch);
})(AsideReset);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Heading;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(35);

var _Header2 = _interopRequireDefault(_Header);

var _Logo = __webpack_require__(36);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Heading() {
  return _react2.default.createElement(
    _Header2.default,
    null,
    _react2.default.createElement(
      'a',
      { href: '/' },
      _react2.default.createElement(_Logo2.default, null)
    ),
    _react2.default.createElement(
      'div',
      null,
      '\xAF\\_(\u30C4)_/\xAF'
    )
  );
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Page;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Block = __webpack_require__(25);

var _Block2 = _interopRequireDefault(_Block);

var _Navigation = __webpack_require__(89);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Html = __webpack_require__(11);

var _Html2 = _interopRequireDefault(_Html);

var _Heading = __webpack_require__(4);

var _Paragraphs = __webpack_require__(9);

var _Main = __webpack_require__(19);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Page(_ref) {
  var nextPage = _ref.nextPage,
      previousPage = _ref.previousPage,
      title = _ref.title,
      _ref$children = _ref.children,
      children = _ref$children === undefined ? [] : _ref$children,
      pageid = _ref.pageid,
      firstPage = _ref.firstPage,
      lead = _ref.lead;

  var navigation = _react2.default.createElement(_Navigation2.default, {
    page: pageid,
    hasPrevious: true,
    previousPage: previousPage,
    hasNext: true,
    nextPage: nextPage
  });
  if (firstPage) {
    navigation = _react2.default.createElement(_Navigation2.default, { page: pageid, hasNext: true, nextPage: nextPage });
  }
  return _react2.default.createElement(
    _Main2.default,
    null,
    _react2.default.createElement(
      _Heading.H2,
      null,
      title
    ),
    _react2.default.createElement(
      _Paragraphs.Lead,
      null,
      _react2.default.createElement(_Html2.default, { text: lead })
    ),
    children.map(function (block) {
      return _react2.default.createElement(_Block2.default, _extends({ key: block.property }, block));
    }),
    navigation
  );
}

Page.defaultProps = {
  title: 'Missing page title',
  lead: ''
};

Page.propTypes = {
  title: _propTypes2.default.string,
  lead: _propTypes2.default.string,
  children: _propTypes2.default.array.isRequired,
  pageid: _propTypes2.default.string.isRequired,
  nextPage: _propTypes2.default.func.isRequired,
  previousPage: _propTypes2.default.func.isRequired,
  firstPage: _propTypes2.default.bool.isRequired
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAutobind = __webpack_require__(13);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _CheckboxInput = __webpack_require__(70);

var _CheckboxInput2 = _interopRequireDefault(_CheckboxInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.handleChange = function (property, value) {
      return function (e) {
        var setData = _this.props.setData;

        setData(property + '.' + value, e.target.checked);
      };
    };

    (0, _reactAutobind2.default)(_this);
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          suggestedAnswer = _props.suggestedAnswer,
          property = _props.property,
          disabled = _props.disabled,
          currentValue = _props.currentValue;


      return _react2.default.createElement(
        'div',
        null,
        suggestedAnswer && suggestedAnswer.map(function (option) {
          var isDisabled = disabled || option.disabled;

          return _react2.default.createElement(_CheckboxInput2.default, _extends({
            disabled: isDisabled,
            key: property + ':' + option.value,
            id: property + ':' + option.value,
            checked: currentValue[option.value],
            name: property
          }, option, {
            onChange: !isDisabled && _this2.handleChange(property, option.value)
          }));
        })
      );
    }
  }]);

  return Checkbox;
}(_react.Component);

exports.default = Checkbox;
Checkbox.defaultProps = {
  heading: '',
  text: '',
  disabled: false,
  currentValue: {}
};
Checkbox.propTypes = {
  suggestedAnswer: _propTypes2.default.array.isRequired,
  setData: _propTypes2.default.func.isRequired,
  property: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  currentValue: _propTypes2.default.any
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Label = __webpack_require__(26);

var _Label2 = _interopRequireDefault(_Label);

var _Input = __webpack_require__(5);

var _Heading = __webpack_require__(4);

var _Paragraphs = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxInput = function CheckboxInput(_ref) {
  var id = _ref.id,
      name = _ref.name,
      checked = _ref.checked,
      text = _ref.text,
      onChange = _ref.onChange,
      heading = _ref.heading,
      image = _ref.image,
      disabled = _ref.disabled;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Input.Checkbox, { type: 'checkbox', name: name, id: id, onChange: onChange, disabled: disabled, checked: checked }),
    _react2.default.createElement(
      _Label2.default,
      { htmlFor: id },
      _react2.default.createElement(
        'div',
        null,
        heading ? _react2.default.createElement(
          _Heading.H4,
          null,
          heading
        ) : null,
        _react2.default.createElement(
          _Paragraphs.P,
          null,
          text
        )
      ),
      image ? _react2.default.createElement('img', { src: image.url, alt: image.alt }) : null
    )
  );
};

exports.default = CheckboxInput;


CheckboxInput.defaultProps = {
  heading: '',
  image: {},
  checked: false,
  disabled: false,
  onChange: function onChange() {}
};

CheckboxInput.propTypes = {
  heading: _propTypes2.default.string,
  id: _propTypes2.default.string.isRequired,
  image: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  text: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Figure = __webpack_require__(37);

var _Figure2 = _interopRequireDefault(_Figure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function Image(props) {
  return _react2.default.createElement(
    _Figure2.default,
    null,
    _react2.default.createElement('img', { src: props.image.url, alt: props.image.alt }),
    _react2.default.createElement(
      'figcaption',
      null,
      props.text
    )
  );
};

exports.default = Image;


Image.propTypes = {
  image: _propTypes2.default.object.isRequired,
  text: _propTypes2.default.string.isRequired
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Missing = function Missing(_ref) {
  var type = _ref.type;
  return _react2.default.createElement(
    'div',
    null,
    'Block missing: ',
    type
  );
};

exports.default = Missing;


Missing.defaultProps = {
  type: 'No type'
};

Missing.propTypes = {
  type: _propTypes2.default.string
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAutobind = __webpack_require__(13);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _RadioInput = __webpack_require__(74);

var _RadioInput2 = _interopRequireDefault(_RadioInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_Component) {
  _inherits(Radio, _Component);

  function Radio(props) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

    _this.handleChange = function (property, value) {
      return function () {
        var setData = _this.props.setData;

        setData('' + property, value);
      };
    };

    (0, _reactAutobind2.default)(_this);
    return _this;
  }

  _createClass(Radio, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          currentValue = _props.currentValue,
          suggestedAnswer = _props.suggestedAnswer,
          property = _props.property,
          disabled = _props.disabled;


      return _react2.default.createElement(
        'div',
        null,
        suggestedAnswer.map(function (option) {
          var isDisabled = disabled || option.disabled;

          return _react2.default.createElement(_RadioInput2.default, _extends({
            key: property + ':' + option.value,
            id: property + ':' + option.value,
            name: property
          }, option, {
            disabled: isDisabled,
            checked: currentValue === option.value,
            onChange: !isDisabled && _this2.handleChange(property, option.value)
          }));
        })
      );
    }
  }]);

  return Radio;
}(_react.Component);

exports.default = Radio;
Radio.defaultProps = {
  heading: '',
  text: '',
  currentValue: undefined,
  disabled: false
};
Radio.propTypes = {
  suggestedAnswer: _propTypes2.default.array.isRequired,
  setData: _propTypes2.default.func.isRequired,
  property: _propTypes2.default.string.isRequired,
  currentValue: _propTypes2.default.any,
  disabled: _propTypes2.default.bool
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Label = __webpack_require__(26);

var _Label2 = _interopRequireDefault(_Label);

var _Input = __webpack_require__(5);

var _Heading = __webpack_require__(4);

var _Paragraphs = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioInput = function RadioInput(_ref) {
  var id = _ref.id,
      text = _ref.text,
      name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange,
      heading = _ref.heading,
      image = _ref.image,
      disabled = _ref.disabled;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Input.Radio, { type: 'radio', name: name, id: id, value: value, checked: checked, disabled: disabled }),
    _react2.default.createElement(
      _Label2.default,
      { htmlFor: id, onClick: onChange },
      _react2.default.createElement(
        'div',
        null,
        heading ? _react2.default.createElement(
          _Heading.H4,
          null,
          heading
        ) : null,
        _react2.default.createElement(
          _Paragraphs.P,
          null,
          text
        )
      ),
      image && image.url ? _react2.default.createElement('img', { src: image.url, alt: image.alt }) : null
    )
  );
};

exports.default = RadioInput;


RadioInput.defaultProps = {
  onChange: function onChange() {}
};

RadioInput.defaultProps = {
  heading: '',
  image: {},
  checked: false,
  disabled: false
};

RadioInput.propTypes = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired,
  heading: _propTypes2.default.string,
  image: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.any.isRequired,
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SelectOption = __webpack_require__(76);

var _SelectOption2 = _interopRequireDefault(_SelectOption);

var _Input = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NULL_VALUE = '({[NULL]})';

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
      _this.props.setData(_this.props.property, e.target.value === NULL_VALUE ? undefined : e.target.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentValue = _props.currentValue,
          suggestedAnswer = _props.suggestedAnswer,
          defaultOption = _props.defaultOption;

      var text = defaultOption || 'Velg fra listen';
      return _react2.default.createElement(
        _Input.Select,
        { value: currentValue, onChange: this.handleChange },
        _react2.default.createElement(_SelectOption2.default, { text: text, value: NULL_VALUE }),
        suggestedAnswer.map(function (option) {
          return _react2.default.createElement(_SelectOption2.default, _extends({}, option, { key: option.value }));
        })
      );
    }
  }]);

  return Select;
}(_react.Component);

exports.default = Select;
Select.defaultProps = {
  text: '',
  heading: '',
  currentValue: '',
  defaultOption: ''
};
Select.propTypes = {
  suggestedAnswer: _propTypes2.default.array.isRequired,
  currentValue: _propTypes2.default.any,
  setData: _propTypes2.default.func.isRequired,
  property: _propTypes2.default.string.isRequired,
  defaultOption: _propTypes2.default.string
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectOption = function SelectOption(props) {
  return _react2.default.createElement(
    'option',
    { value: props.value },
    props.text
  );
};

exports.default = SelectOption;


SelectOption.propTypes = {
  text: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Block = __webpack_require__(10);

var _Heading = __webpack_require__(4);

var _Html = __webpack_require__(11);

var _Html2 = _interopRequireDefault(_Html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function Text(props) {
  return _react2.default.createElement(
    _Block.TextBlock,
    null,
    _react2.default.createElement(
      _Heading.H3,
      null,
      props.heading
    ),
    _react2.default.createElement(_Html2.default, { text: props.text })
  );
};

exports.default = Text;


Text.propTypes = {
  heading: _propTypes2.default.object.isRequired,
  text: _propTypes2.default.string.isRequired
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Heading = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Data = function Data(_ref) {
  var heading = _ref.heading,
      currentValue = _ref.currentValue;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Heading.H4,
      null,
      heading
    ),
    _react2.default.createElement(
      'p',
      null,
      currentValue
    )
  );
};

exports.default = Data;


Data.defaultProps = {
  currentValue: '',
  heading: ''
};

Data.propTypes = {
  currentValue: _propTypes2.default.string,
  heading: _propTypes2.default.string
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAutobind = __webpack_require__(13);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _lodash = __webpack_require__(14);

var _lodash2 = _interopRequireDefault(_lodash);

var _Number = __webpack_require__(39);

var _Number2 = _interopRequireDefault(_Number);

var _Heading = __webpack_require__(4);

var _Datalist = __webpack_require__(40);

var _Datalist2 = _interopRequireDefault(_Datalist);

var _ErrorIcon = __webpack_require__(15);

var _ErrorIcon2 = _interopRequireDefault(_ErrorIcon);

var _Information = __webpack_require__(41);

var _Information2 = _interopRequireDefault(_Information);

var _Html = __webpack_require__(11);

var _Html2 = _interopRequireDefault(_Html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FetchOrg = function (_Component) {
  _inherits(FetchOrg, _Component);

  function FetchOrg(props) {
    _classCallCheck(this, FetchOrg);

    var _this = _possibleConstructorReturn(this, (FetchOrg.__proto__ || Object.getPrototypeOf(FetchOrg)).call(this, props));

    (0, _reactAutobind2.default)(_this);
    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(FetchOrg, [{
    key: 'fetchData',
    value: function fetchData(orgid) {
      var _this2 = this;

      fetch(this.props.source + '%27' + orgid + '%27').then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.updateData(data, orgid);
      });
    }
  }, {
    key: 'updateData',
    value: function updateData(data, orgid) {
      var _props = this.props,
          property = _props.property,
          setData = _props.setData;

      var name = (0, _lodash2.default)(data, 'data[0].navn');
      var postcode = (0, _lodash2.default)(data, 'data[0].forretningsadresse.postnummer');
      var postplace = (0, _lodash2.default)(data, 'data[0].forretningsadresse.poststed');
      var address = (0, _lodash2.default)(data, 'data[0].forretningsadresse.adresse');
      this.setState({ loading: false });
      setData(property, {
        orgid: orgid,
        name: name,
        postcode: postcode,
        postplace: postplace,
        address: address,
        data: true
      });
    }
  }, {
    key: 'update',
    value: function update(value) {
      var _props2 = this.props,
          property = _props2.property,
          setData = _props2.setData;

      if (value.toString().length === 9) {
        this.setState({ loading: true });
        this.fetchData(value);
      } else {
        setData(property, { data: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var loading = this.state.loading;
      var _props3 = this.props,
          information = _props3.information,
          property = _props3.property,
          _setData = _props3.setData;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Number2.default, _extends({}, this.props, {
          currentValue: (0, _lodash2.default)(this.props, 'currentValue.orgid'),
          setData: function setData(unused, value) {
            _setData(property, { orgid: value });
          },
          update: this.update,
          minimum: 0,
          maximum: 999999999
        })),
        loading && _react2.default.createElement(
          _Heading.H3,
          null,
          'Laster inn data...'
        ),
        (0, _lodash2.default)(this.props, 'currentValue.data', false) && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _Datalist2.default,
            null,
            _react2.default.createElement(
              'dt',
              null,
              'Firmaets navn'
            ),
            _react2.default.createElement(
              'dd',
              null,
              (0, _lodash2.default)(this.props, 'currentValue.name')
            ),
            _react2.default.createElement(
              'dt',
              null,
              'Adresse'
            ),
            _react2.default.createElement(
              'dd',
              null,
              (0, _lodash2.default)(this.props, 'currentValue.address')
            ),
            _react2.default.createElement(
              'dt',
              null,
              'Postnummer- og sted'
            ),
            _react2.default.createElement(
              'dd',
              null,
              (0, _lodash2.default)(this.props, 'currentValue.postcode'),
              ' ',
              (0, _lodash2.default)(this.props, 'currentValue.postplace')
            )
          ),
          _react2.default.createElement(
            _Information2.default,
            null,
            _react2.default.createElement(_ErrorIcon2.default, { triangleFill: 'black' }),
            _react2.default.createElement(_Html2.default, { text: information })
          )
        )
      );
    }
  }]);

  return FetchOrg;
}(_react.Component);

exports.default = FetchOrg;
FetchOrg.propTypes = {
  source: _propTypes2.default.string.isRequired,
  information: _propTypes2.default.string,
  setData: _propTypes2.default.func.isRequired,
  property: _propTypes2.default.string.isRequired,
  currentValue: _propTypes2.default.object
};
FetchOrg.defaultProps = {
  information: '',
  currentValue: {}
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAutobind = __webpack_require__(13);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _lodash = __webpack_require__(14);

var _lodash2 = _interopRequireDefault(_lodash);

var _ApprovalAreas = __webpack_require__(81);

var _ApprovalAreas2 = _interopRequireDefault(_ApprovalAreas);

var _Heading = __webpack_require__(4);

var _Block = __webpack_require__(10);

var _VariableText = __webpack_require__(82);

var _VariableText2 = _interopRequireDefault(_VariableText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FetchSG = function (_Component) {
  _inherits(FetchSG, _Component);

  function FetchSG(props) {
    _classCallCheck(this, FetchSG);

    var _this = _possibleConstructorReturn(this, (FetchSG.__proto__ || Object.getPrototypeOf(FetchSG)).call(this, props));

    (0, _reactAutobind2.default)(_this);
    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(FetchSG, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          property = _props.property,
          setData = _props.setData;

      var orgid = (0, _lodash2.default)(this.props, 'data.orgnr.orgid', false);
      if (orgid) {
        this.setState({ loading: true });
        this.fetchData(orgid);
      } else {
        setData(property, { data: false });
      }
    }
  }, {
    key: 'fetchData',
    value: function fetchData(orgid) {
      var _this2 = this;

      var proxyurl = 'https://cors-anywhere.herokuapp.com/';
      fetch('' + proxyurl + this.props.source + orgid + '.json').then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.updateData(data, orgid);
      }).catch(function (error) {
        var _props2 = _this2.props,
            property = _props2.property,
            setData = _props2.setData;

        setData(property, {
          orgid: orgid,
          name: '',
          status: '',
          validApprovalAreas: '',
          data: false
        });
        _this2.setState({ loading: false });
        // eslint-disable-next-line no-console
        console.log('There is an error fetching from SG: ' + error.message);
      });
    }
  }, {
    key: 'updateData',
    value: function updateData(data, orgid) {
      var _props3 = this.props,
          property = _props3.property,
          setData = _props3.setData;

      var status = (0, _lodash2.default)(data, 'dibk-sgdata.status');
      var validApprovalAreas = (0, _lodash2.default)(data, 'dibk-sgdata.valid_approval_areas');
      var name = (0, _lodash2.default)(data, 'dibk-sgdata.enterprise.name');
      setData(property, {
        orgid: orgid,
        name: name,
        status: status,
        validApprovalAreas: validApprovalAreas,
        data: true
      });
      this.setState({ loading: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          disabled = _props4.disabled,
          property = _props4.property,
          heading = _props4.heading,
          text = _props4.text,
          invalidapproval = _props4.invalidapproval;
      var loading = this.state.loading;

      return _react2.default.createElement(
        'div',
        null,
        (0, _lodash2.default)(this.props, 'currentValue.fetch'),
        _react2.default.createElement(
          _Block.SpecificBlock,
          { id: property, disabled: disabled },
          loading && _react2.default.createElement(
            _Heading.H3,
            null,
            'Laster inn data...'
          ),
          !loading && (0, _lodash2.default)(this.props, 'currentValue.data', false) && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _Heading.H3,
              null,
              _react2.default.createElement(_VariableText2.default, { text: heading, data: this.props.currentValue })
            ),
            _react2.default.createElement(_VariableText2.default, { text: text, data: this.props.currentValue }),
            _react2.default.createElement(_ApprovalAreas2.default, {
              areas: (0, _lodash2.default)(this.props, 'currentValue.validApprovalAreas')
            })
          ),
          !loading && !(0, _lodash2.default)(this.props, 'currentValue.data', false) && _react2.default.createElement(
            _Heading.H3,
            null,
            invalidapproval
          )
        )
      );
    }
  }]);

  return FetchSG;
}(_react.Component);

exports.default = FetchSG;
FetchSG.propTypes = {
  source: _propTypes2.default.string.isRequired,
  setData: _propTypes2.default.func.isRequired,
  property: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  heading: _propTypes2.default.string,
  text: _propTypes2.default.string,
  currentValue: _propTypes2.default.any,
  invalidapproval: _propTypes2.default.string
};
FetchSG.defaultProps = {
  information: '',
  disabled: false,
  heading: '',
  text: '',
  currentValue: undefined,
  invalidapproval: ''
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ApprovalAreas;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApprovalAreas(_ref) {
  var areas = _ref.areas;

  if (areas === undefined || areas.length === 0) {
    return null;
  }
  return _react2.default.createElement(
    'table',
    null,
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'FUNKSJON'
        ),
        _react2.default.createElement(
          'th',
          null,
          'FAGOMR\xC5DE'
        ),
        _react2.default.createElement(
          'th',
          null,
          'TILTAKSKLASSE'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      areas.map(function (area) {
        return _react2.default.createElement(
          'tr',
          { key: area.function },
          _react2.default.createElement(
            'td',
            null,
            area.function
          ),
          _react2.default.createElement(
            'td',
            null,
            area.subject_area
          ),
          _react2.default.createElement(
            'td',
            null,
            area.grade
          )
        );
      })
    )
  );
}

ApprovalAreas.propTypes = {
  areas: _propTypes2.default.array.isRequired
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VariableText;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(83);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VariableText(_ref) {
  var text = _ref.text,
      data = _ref.data;

  if (!text) {
    return null;
  }
  var compiled = (0, _lodash2.default)(text);

  // eslint-disable-next-line react/no-danger
  return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: compiled(data) } });
}

VariableText.defaultProps = {
  text: '',
  data: {}
};

VariableText.propTypes = {
  text: _propTypes2.default.string,
  data: _propTypes2.default.any
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var reInterpolate = __webpack_require__(42),
    templateSettings = __webpack_require__(84);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match empty string literals in compiled template source. */
var reEmptyStringLeading = /\b__p \+= '';/g,
    reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
    reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

/**
 * Used to match
 * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
 */
var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to ensure capturing order of template delimiters. */
var reNoMatch = /($^)/;

/** Used to match unescaped characters in compiled string literals. */
var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

/** Used to escape characters for inclusion in compiled string literals. */
var stringEscapes = {
  '\\': '\\',
  "'": "'",
  '\n': 'n',
  '\r': 'r',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Used by `_.template` to escape characters for inclusion in compiled string literals.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
function escapeStringChar(chr) {
  return '\\' + stringEscapes[chr];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Used by `_.defaults` to customize its `_.assignIn` use.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function assignInDefaults(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
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
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

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
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
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
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */
function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }
  return (objectToString.call(value) == errorTag) ||
    (typeof value.message == 'string' && typeof value.name == 'string');
}

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
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
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
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * Creates a compiled template function that can interpolate data properties
 * in "interpolate" delimiters, HTML-escape interpolated data properties in
 * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
 * properties may be accessed as free variables in the template. If a setting
 * object is given, it takes precedence over `_.templateSettings` values.
 *
 * **Note:** In the development build `_.template` utilizes
 * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
 * for easier debugging.
 *
 * For more information on precompiling templates see
 * [lodash's custom builds documentation](https://lodash.com/custom-builds).
 *
 * For more information on Chrome extension sandboxes see
 * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The template string.
 * @param {Object} [options={}] The options object.
 * @param {RegExp} [options.escape=_.templateSettings.escape]
 *  The HTML "escape" delimiter.
 * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
 *  The "evaluate" delimiter.
 * @param {Object} [options.imports=_.templateSettings.imports]
 *  An object to import into the template as free variables.
 * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
 *  The "interpolate" delimiter.
 * @param {string} [options.sourceURL='templateSources[n]']
 *  The sourceURL of the compiled template.
 * @param {string} [options.variable='obj']
 *  The data object variable name.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the compiled template function.
 * @example
 *
 * // Use the "interpolate" delimiter to create a compiled template.
 * var compiled = _.template('hello <%= user %>!');
 * compiled({ 'user': 'fred' });
 * // => 'hello fred!'
 *
 * // Use the HTML "escape" delimiter to escape data property values.
 * var compiled = _.template('<b><%- value %></b>');
 * compiled({ 'value': '<script>' });
 * // => '<b>&lt;script&gt;</b>'
 *
 * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
 * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the internal `print` function in "evaluate" delimiters.
 * var compiled = _.template('<% print("hello " + user); %>!');
 * compiled({ 'user': 'barney' });
 * // => 'hello barney!'
 *
 * // Use the ES delimiter as an alternative to the default "interpolate" delimiter.
 * var compiled = _.template('hello ${ user }!');
 * compiled({ 'user': 'pebbles' });
 * // => 'hello pebbles!'
 *
 * // Use backslashes to treat delimiters as plain text.
 * var compiled = _.template('<%= "\\<%- value %\\>" %>');
 * compiled({ 'value': 'ignored' });
 * // => '<%- value %>'
 *
 * // Use the `imports` option to import `jQuery` as `jq`.
 * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
 * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the `sourceURL` option to specify a custom sourceURL for the template.
 * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
 * compiled(data);
 * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
 *
 * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
 * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
 * compiled.source;
 * // => function(data) {
 * //   var __t, __p = '';
 * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
 * //   return __p;
 * // }
 *
 * // Use custom template delimiters.
 * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
 * var compiled = _.template('hello {{ user }}!');
 * compiled({ 'user': 'mustache' });
 * // => 'hello mustache!'
 *
 * // Use the `source` property to inline compiled templates for meaningful
 * // line numbers in error messages and stack traces.
 * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
 *   var JST = {\
 *     "main": ' + _.template(mainText).source + '\
 *   };\
 * ');
 */
function template(string, options, guard) {
  // Based on John Resig's `tmpl` implementation
  // (http://ejohn.org/blog/javascript-micro-templating/)
  // and Laura Doktorova's doT.js (https://github.com/olado/doT).
  var settings = templateSettings.imports._.templateSettings || templateSettings;

  if (guard && isIterateeCall(string, options, guard)) {
    options = undefined;
  }
  string = toString(string);
  options = assignInWith({}, options, settings, assignInDefaults);

  var imports = assignInWith({}, options.imports, settings.imports, assignInDefaults),
      importsKeys = keys(imports),
      importsValues = baseValues(imports, importsKeys);

  var isEscaping,
      isEvaluating,
      index = 0,
      interpolate = options.interpolate || reNoMatch,
      source = "__p += '";

  // Compile the regexp to match each delimiter.
  var reDelimiters = RegExp(
    (options.escape || reNoMatch).source + '|' +
    interpolate.source + '|' +
    (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
    (options.evaluate || reNoMatch).source + '|$'
  , 'g');

  // Use a sourceURL for easier debugging.
  var sourceURL = 'sourceURL' in options ? '//# sourceURL=' + options.sourceURL + '\n' : '';

  string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
    interpolateValue || (interpolateValue = esTemplateValue);

    // Escape characters that can't be included in string literals.
    source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

    // Replace delimiters with snippets.
    if (escapeValue) {
      isEscaping = true;
      source += "' +\n__e(" + escapeValue + ") +\n'";
    }
    if (evaluateValue) {
      isEvaluating = true;
      source += "';\n" + evaluateValue + ";\n__p += '";
    }
    if (interpolateValue) {
      source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
    }
    index = offset + match.length;

    // The JS engine embedded in Adobe products needs `match` returned in
    // order to produce the correct `offset` value.
    return match;
  });

  source += "';\n";

  // If `variable` is not specified wrap a with-statement around the generated
  // code to add the data object to the top of the scope chain.
  var variable = options.variable;
  if (!variable) {
    source = 'with (obj) {\n' + source + '\n}\n';
  }
  // Cleanup code by stripping empty strings.
  source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
    .replace(reEmptyStringMiddle, '$1')
    .replace(reEmptyStringTrailing, '$1;');

  // Frame code as the function body.
  source = 'function(' + (variable || 'obj') + ') {\n' +
    (variable
      ? ''
      : 'obj || (obj = {});\n'
    ) +
    "var __t, __p = ''" +
    (isEscaping
       ? ', __e = _.escape'
       : ''
    ) +
    (isEvaluating
      ? ', __j = Array.prototype.join;\n' +
        "function print() { __p += __j.call(arguments, '') }\n"
      : ';\n'
    ) +
    source +
    'return __p\n}';

  var result = attempt(function() {
    return Function(importsKeys, sourceURL + 'return ' + source)
      .apply(undefined, importsValues);
  });

  // Provide the compiled function's source by its `toString` method or
  // the `source` property as a convenience for inlining compiled templates.
  result.source = source;
  if (isError(result)) {
    throw result;
  }
  return result;
}

/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {Function} func The function to attempt.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * var elements = _.attempt(function(selector) {
 *   return document.querySelectorAll(selector);
 * }, '>_>');
 *
 * if (_.isError(elements)) {
 *   elements = [];
 * }
 */
var attempt = baseRest(function(func, args) {
  try {
    return apply(func, undefined, args);
  } catch (e) {
    return isError(e) ? e : new Error(e);
  }
});

module.exports = template;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var reInterpolate = __webpack_require__(42);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"'`]/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/** Used to match template delimiters. */
var reEscape = /<%-([\s\S]+?)%>/g,
    reEvaluate = /<%([\s\S]+?)%>/g;

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = basePropertyOf(htmlEscapes);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * By default, the template delimiters used by lodash are like those in
 * embedded Ruby (ERB). Change the following template settings to use
 * alternative delimiters.
 *
 * @static
 * @memberOf _
 * @type {Object}
 */
var templateSettings = {

  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'escape': reEscape,

  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'evaluate': reEvaluate,

  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'interpolate': reInterpolate,

  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  'variable': '',

  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  'imports': {

    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    '_': { 'escape': escape }
  }
};

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
 * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
 * their corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * Backticks are escaped because in IE < 9, they can break out of
 * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
 * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
 * [#133](https://html5sec.org/#133) of the
 * [HTML5 Security Cheatsheet](https://html5sec.org/) for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

module.exports = templateSettings;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Html = __webpack_require__(11);

var _Html2 = _interopRequireDefault(_Html);

var _SummaryDetails = __webpack_require__(86);

var _SummaryDetails2 = _interopRequireDefault(_SummaryDetails);

var _Input = __webpack_require__(5);

var _ErrorIcon = __webpack_require__(15);

var _ErrorIcon2 = _interopRequireDefault(_ErrorIcon);

var _Information = __webpack_require__(41);

var _Information2 = _interopRequireDefault(_Information);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Textarea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
      var _this$props = _this.props,
          property = _this$props.property,
          setData = _this$props.setData;

      var value = e.target.value;

      setData(property, value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Textarea, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          placeholder = _props.placeholder,
          currentValue = _props.currentValue,
          information = _props.information,
          summary = _props.summary,
          details = _props.details;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Input.Textarea, {
          placeholder: placeholder,
          value: currentValue,
          onChange: this.handleChange
        }),
        information && _react2.default.createElement(
          _Information2.default,
          null,
          _react2.default.createElement(_ErrorIcon2.default, { triangleFill: 'black' }),
          _react2.default.createElement(_Html2.default, { text: information })
        ),
        summary && _react2.default.createElement(_SummaryDetails2.default, { summary: summary, details: details })
      );
    }
  }]);

  return Textarea;
}(_react.Component);

exports.default = Textarea;
Textarea.defaultProps = {
  placeholder: '',
  setData: function setData() {},
  currentValue: '',
  information: '',
  details: '',
  summary: ''
};
Textarea.propTypes = {
  property: _propTypes2.default.string.isRequired,
  setData: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  currentValue: _propTypes2.default.string,
  information: _propTypes2.default.string,
  details: _propTypes2.default.string,
  summary: _propTypes2.default.string
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SumamryDetails;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Html = __webpack_require__(11);

var _Html2 = _interopRequireDefault(_Html);

var _details = __webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SumamryDetails(_ref) {
  var summary = _ref.summary,
      details = _ref.details;

  return _react2.default.createElement(
    _details.Details,
    null,
    _react2.default.createElement(
      _details.Summary,
      null,
      summary
    ),
    _react2.default.createElement(_Html2.default, { text: details })
  );
}

SumamryDetails.propTypes = {
  summary: _propTypes2.default.string.isRequired,
  details: _propTypes2.default.string.isRequired
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Summary = exports.Details = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 40px;\n  h4 {\n    margin-bottom: 0;\n  }\n'], ['\n  margin-top: 40px;\n  h4 {\n    margin-bottom: 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  color: ', ';\n  text-decoration: underline;\n'], ['\n  cursor: pointer;\n  color: ', ';\n  text-decoration: underline;\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _injectStyles = __webpack_require__(3);

var _injectStyles2 = _interopRequireDefault(_injectStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Details = exports.Details = (0, _injectStyles2.default)(_styledComponents2.default.details(_templateObject));

var Summary = exports.Summary = (0, _injectStyles2.default)(_styledComponents2.default.summary(_templateObject2, function (_ref) {
  var styles = _ref.styles;
  return styles.color.light;
}));

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Image;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Image(_ref) {
  var image = _ref.image;

  if (Object.prototype.hasOwnProperty.call(image, 'url') && image.url) {
    return _react2.default.createElement('img', { src: image.url, alt: image.alt });
  }
  return null;
}

Image.defaultProps = {
  image: {}
};

Image.propTypes = {
  image: _propTypes2.default.object
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navigation;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(12);

var _Navigation = __webpack_require__(43);

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navigation(_ref) {
  var hasPrevious = _ref.hasPrevious,
      previousPage = _ref.previousPage,
      hasNext = _ref.hasNext,
      nextPage = _ref.nextPage;

  var previous = _react2.default.createElement(
    _Button.NavButton,
    { onClick: previousPage },
    'Forrige'
  );
  var next = _react2.default.createElement(
    _Button.NavButton,
    { next: true, onClick: nextPage },
    'Neste'
  );
  return _react2.default.createElement(
    _Navigation2.default,
    null,
    hasPrevious && previous,
    hasNext && next
  );
}

Navigation.defaultProps = {
  hasNext: false,
  hasPrevious: false,
  nextPage: function nextPage() {},
  previousPage: function previousPage() {}
};

Navigation.propTypes = {
  hasNext: _propTypes2.default.bool,
  hasPrevious: _propTypes2.default.bool,
  nextPage: _propTypes2.default.func,
  previousPage: _propTypes2.default.func
};

/***/ }),
/* 90 */
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

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.vocalizeLeafError = vocalizeLeafError;
exports.default = vocalizeErrors;
function vocalizeLeafError(error) {
  var nodeTitles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return error.map(function (part) {
    if ((typeof part === 'undefined' ? 'undefined' : _typeof(part)) === 'object' && part.field) {
      return '"' + (nodeTitles[part.field] || part.field) + '"';
    }

    return part;
  }).join(' ');
}

function vocalizeErrors(errors, nodeTitles) {
  if (errors.operator) {
    return errors.errors.map(function (error) {
      return vocalizeErrors(error, nodeTitles);
    }).join(errors.operator === 'or' ? ' eller ' : ' og ');
  }

  if (Array.isArray(errors) && errors.length === 1) {
    return vocalizeLeafError(errors[0], nodeTitles);
  }

  return vocalizeLeafError(errors, nodeTitles);
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = track;
function track(name) {
  if (typeof dataLayer === 'undefined') {
    dataLayer = [];
  }
  dataLayer.push({ event: name }); /* eslint no-undef: 0 */
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(8);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _selectors = __webpack_require__(20);

var _Heading = __webpack_require__(4);

var _Paragraphs = __webpack_require__(9);

var _Block = __webpack_require__(10);

var _Input = __webpack_require__(5);

var _Button = __webpack_require__(12);

var _Main = __webpack_require__(19);

var _Main2 = _interopRequireDefault(_Main);

var _Block2 = __webpack_require__(25);

var _Block3 = _interopRequireDefault(_Block2);

var _ErrorResult = __webpack_require__(94);

var _ErrorResult2 = _interopRequireDefault(_ErrorResult);

var _Summary = __webpack_require__(46);

var _Summary2 = _interopRequireDefault(_Summary);

var _ExportData = __webpack_require__(99);

var _ExportData2 = _interopRequireDefault(_ExportData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Result(_ref) {
  var errorPages = _ref.errorPages,
      previousPage = _ref.previousPage,
      title = _ref.title,
      _ref$children = _ref.children,
      children = _ref$children === undefined ? [] : _ref$children,
      pageid = _ref.pageid,
      lead = _ref.lead,
      setPage = _ref.setPage,
      schema = _ref.schema,
      summary = _ref.summary,
      exports = _ref.exports,
      exporter = _ref.exporter;

  if (errorPages.length) {
    return _react2.default.createElement(_ErrorResult2.default, {
      schema: schema,
      setPage: setPage,
      page: pageid,
      previousPage: previousPage,
      errorPages: errorPages,
      children: children
    });
  }

  return _react2.default.createElement(
    _Main2.default,
    null,
    _react2.default.createElement(
      _Heading.H2,
      null,
      title
    ),
    _react2.default.createElement(
      _Paragraphs.Lead,
      null,
      lead
    ),
    _react2.default.createElement(
      _Block.SpecificBlock,
      null,
      summary ? _react2.default.createElement(_Summary2.default, { errorPages: errorPages, setPage: setPage, pages: schema }) : null,
      exporter ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: { background: '#f0f2cb', marginBottom: '20px', padding: '20px', fontStyle: 'italic' } },
          _react2.default.createElement(_Input.TextInput, { type: 'checkbox', placeholder: 'E-post' }),
          'Ansvarlig kontrollerende erkl\xE6rer uavhengighet, jf. SAK10 \xA7 14-1, og vil redegj\xF8re for endringer som kan p\xE5virke uavhengigheten jf. SAK10 \xA712-5'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            'Ved \xE5 sende inn denne erkl\xE6ringen bekrefter du at:'
          ),
          _react2.default.createElement(
            _Paragraphs.P,
            null,
            _react2.default.createElement(
              'strong',
              null,
              '1)'
            ),
            ' Foretaket er kjent med reglene om straff og sanksjoner i plan- og bygningsloven kap. 32 og at det kan medf\xF8re reaksjoner dersom det gis uriktige opplysninger.'
          ),
          _react2.default.createElement(
            _Paragraphs.P,
            null,
            _react2.default.createElement(
              'strong',
              null,
              '2)'
            ),
            ' Foretaket forplikter seg til \xE5 stille med n\xF8dvendig kompetanse i tiltaket, jf. SAK10 kap. 10 og 11.'
          )
        )
      ) : null
    ),
    exporter ? _react2.default.createElement(
      'div',
      { style: { maxWidth: '700px', padding: '20px' } },
      _react2.default.createElement(
        _Heading.H2,
        null,
        'Send inn erkl\xE6ringen'
      ),
      _react2.default.createElement(
        _Paragraphs.P,
        null,
        'Skjemaet sendes inn via altinn.no. Klikk p\xE5 knappen under for \xE5 kopiere data fra skjemaet. Dette kan s\xE5 limes direkte inn i skjemaet p\xE5 altinn. Du skal ogs\xE5 ideelt sett kunne f\xE5 dette tilsendt p\xE5 e-post, men det har vi ikke st\xF8tte for enn\xE5.'
      ),
      exporter && exports[exporter] && _react2.default.createElement(_ExportData2.default, { exporter: exports[exporter] })
    ) : _react2.default.createElement(
      'div',
      { style: { maxWidth: '700px', padding: '20px' } },
      _react2.default.createElement(
        _Heading.H2,
        null,
        'Hva kan du gj\xF8re? Veien videre'
      ),
      _react2.default.createElement(
        _Paragraphs.P,
        null,
        'Du har ikke det som skal til for \xE5 skaffe deg katt. Greit nok. Men hva kan du gj\xF8re med det? DiBK vet sikkert svaret! G\xE5 til DiBK sine nettsider! Sjekk ut en annen veiviser! Lenker her?'
      ),
      exporter && exports[exporter] && _react2.default.createElement(_ExportData2.default, { exporter: exports[exporter] })
    ),
    children.map(function (block) {
      return _react2.default.createElement(_Block3.default, _extends({ key: block.property }, block));
    })
  );
}

Result.propTypes = {
  exports: _propTypes2.default.objectOf(_propTypes2.default.func),
  exporter: _propTypes2.default.string,
  title: _propTypes2.default.string,
  summary: _propTypes2.default.bool,
  lead: _propTypes2.default.string,
  children: _propTypes2.default.array,
  pageid: _propTypes2.default.number.isRequired,
  previousPage: _propTypes2.default.func.isRequired,
  errorPages: _propTypes2.default.array.isRequired,
  schema: _propTypes2.default.arrayOf(_propTypes2.default.object),
  setPage: _propTypes2.default.func.isRequired
};

Result.defaultProps = {
  title: 'Missing page title',
  lead: '',
  children: [],
  schema: [],
  summary: true,
  exports: {},
  exporter: null
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
  var wizard = _ref2.wizard;
  return {
    errorPages: (0, _selectors.getErrorPages)(wizard.schema, state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Result);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ErrorResult;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Heading = __webpack_require__(4);

var _Input = __webpack_require__(5);

var _Paragraphs = __webpack_require__(9);

var _Button = __webpack_require__(12);

var _Main = __webpack_require__(19);

var _Main2 = _interopRequireDefault(_Main);

var _Block = __webpack_require__(10);

var _Summary = __webpack_require__(46);

var _Summary2 = _interopRequireDefault(_Summary);

var _Block2 = __webpack_require__(25);

var _Block3 = _interopRequireDefault(_Block2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ErrorResult(_ref) {
  var errorPages = _ref.errorPages,
      schema = _ref.schema,
      setPage = _ref.setPage,
      children = _ref.children;

  return _react2.default.createElement(
    _Main2.default,
    null,
    _react2.default.createElement(
      _Heading.H2,
      null,
      'Du har ikke svart p\xE5 alle sp\xF8rsm\xE5lene'
    ),
    _react2.default.createElement(
      _Paragraphs.Lead,
      null,
      'Du m\xE5 fullf\xF8re alle stegene i veiviseren for \xE5 f\xE5 et resultat. Under ser du hvilke sp\xF8rsm\xE5l som mangler svar. Hvis du \xF8nsker \xE5 endre noe, kan du klikke deg inn p\xE5 hvert steg i oppsummeringen nedenfor.'
    ),
    _react2.default.createElement(
      _Block.SpecificBlock,
      null,
      _react2.default.createElement(_Summary2.default, { errorPages: errorPages, setPage: setPage, pages: schema }),
      children.map(function (block) {
        return _react2.default.createElement(_Block3.default, _extends({ key: block.property }, block));
      })
    )
  );
}

ErrorResult.defaultProps = {
  children: [],
  schema: []
};

ErrorResult.propTypes = {
  children: _propTypes2.default.array,
  errorPages: _propTypes2.default.array.isRequired,
  setPage: _propTypes2.default.func.isRequired,
  schema: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageSummary;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Heading = __webpack_require__(4);

var _Button = __webpack_require__(12);

var _Summary = __webpack_require__(27);

var _Node = __webpack_require__(96);

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PageSummary(_ref) {
  var goToPage = _ref.goToPage,
      error = _ref.error,
      title = _ref.title,
      children = _ref.children;

  return _react2.default.createElement(
    _Summary.PageSummary,
    { error: error },
    _react2.default.createElement(
      _Heading.H3,
      null,
      title,
      ' ',
      _react2.default.createElement(
        _Button.SmallButton,
        { onClick: goToPage },
        'Endre svar'
      )
    ),
    children.map(function (node) {
      return _react2.default.createElement(_Node2.default, node);
    })
  );
}

PageSummary.propTypes = {
  goToPage: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.array,
  error: _propTypes2.default.bool
};

PageSummary.defaultProps = {
  children: [],
  error: false
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(8);

var _selectors = __webpack_require__(20);

var _value = __webpack_require__(97);

var _value2 = _interopRequireDefault(_value);

var _FetchOrg = __webpack_require__(98);

var _FetchOrg2 = _interopRequireDefault(_FetchOrg);

var _Heading = __webpack_require__(4);

var _Errors = __webpack_require__(18);

var _Summary = __webpack_require__(27);

var _ErrorIcon = __webpack_require__(15);

var _ErrorIcon2 = _interopRequireDefault(_ErrorIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ignoreNodes = ['Text', 'Image'];
var overrideValueSummary = { FetchOrg: _FetchOrg2.default };

function NodeSummary(_ref) {
  var type = _ref.type,
      heading = _ref.heading,
      property = _ref.property,
      children = _ref.children,
      value = _ref.value,
      errors = _ref.errors,
      errorDescription = _ref.errorDescription;

  if (ignoreNodes.includes(type) || property === undefined) {
    return null;
  }

  if (type === 'Group') {
    return _react2.default.createElement(
      'div',
      null,
      children.map(function (node) {
        return _react2.default.createElement(ConnectedNodeSummary, node);
      })
    );
  }

  var ValueSummary = overrideValueSummary[type] || _value2.default;

  return _react2.default.createElement(
    _Summary.NodeSummary,
    null,
    _react2.default.createElement(
      _Heading.H5,
      null,
      heading
    ),
    _react2.default.createElement(ValueSummary, { value: value }),
    errors.length ? _react2.default.createElement(
      _Errors.ErrorMessage,
      null,
      _react2.default.createElement(_ErrorIcon2.default, null),
      ' ',
      errorDescription
    ) : null
  );
}

NodeSummary.propTypes = {
  type: _propTypes2.default.string.isRequired,
  heading: _propTypes2.default.string,
  property: _propTypes2.default.string,
  children: _propTypes2.default.arrayOf(_propTypes2.default.object),
  value: _propTypes2.default.any,
  errors: _propTypes2.default.array,
  errorDescription: _propTypes2.default.string
};

NodeSummary.defaultProps = {
  heading: '',
  property: '',
  children: [],
  value: undefined,
  errors: [],
  errorDescription: ''
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    value: (0, _selectors.getNodeValue)(props.property, state)
  };
};

var ConnectedNodeSummary = (0, _reactRedux.connect)(mapStateToProps)(NodeSummary);

exports.default = ConnectedNodeSummary;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = Value;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Summary = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Value(_ref) {
  var value = _ref.value;

  if (value === undefined) {
    return _react2.default.createElement(
      _Summary.Value,
      { missing: true },
      '* M\xE5 fylles ut'
    );
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var values = Object.keys(value).filter(function (key) {
      return value[key];
    });

    if (!values.length) {
      return _react2.default.createElement(
        _Summary.Value,
        { missing: true },
        '* M\xE5 fylles ut'
      );
    }

    var commaSeparated = values.slice(0, -1);
    var lastOne = values.slice(-1)[0];

    if (!commaSeparated.length) {
      return _react2.default.createElement(
        _Summary.Value,
        null,
        lastOne
      );
    }

    return _react2.default.createElement(
      _Summary.Value,
      null,
      commaSeparated.join(', '),
      ' og ',
      lastOne,
      '.'
    );
  }

  return _react2.default.createElement(
    _Summary.Value,
    null,
    value
  );
}

Value.propTypes = {
  value: _propTypes2.default.any
};

Value.defaultProps = {
  value: undefined
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FetchOrgSummary;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Datalist = __webpack_require__(40);

var _Datalist2 = _interopRequireDefault(_Datalist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FetchOrgSummary(_ref) {
  var _ref$value = _ref.value;
  _ref$value = _ref$value === undefined ? {} : _ref$value;
  var orgid = _ref$value.orgid,
      name = _ref$value.name,
      address = _ref$value.address,
      postcode = _ref$value.postcode,
      postplace = _ref$value.postplace;

  return _react2.default.createElement(
    _Datalist2.default,
    null,
    _react2.default.createElement(
      'dd',
      null,
      orgid
    ),
    _react2.default.createElement(
      'dt',
      null,
      'Firmaets navn'
    ),
    _react2.default.createElement(
      'dd',
      null,
      name
    ),
    _react2.default.createElement(
      'dt',
      null,
      'Adresse'
    ),
    _react2.default.createElement(
      'dd',
      null,
      address
    ),
    _react2.default.createElement(
      'dt',
      null,
      'Postnummer- og sted'
    ),
    _react2.default.createElement(
      'dd',
      null,
      postcode,
      ' ',
      postplace
    )
  );
}

FetchOrgSummary.propTypes = {
  value: _propTypes2.default.shape({
    orgid: _propTypes2.default.number,
    name: _propTypes2.default.string,
    address: _propTypes2.default.string,
    postcode: _propTypes2.default.string,
    postplace: _propTypes2.default.string
  })
};

FetchOrgSummary.defaultProps = {
  value: {
    orgid: 0,
    name: '',
    address: '',
    postcode: '',
    postplace: ''
  }
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(8);

var _Input = __webpack_require__(5);

var _Button = __webpack_require__(12);

var _selectors = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExportData = function (_Component) {
  _inherits(ExportData, _Component);

  function ExportData() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ExportData);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ExportData.__proto__ || Object.getPrototypeOf(ExportData)).call.apply(_ref, [this].concat(args))), _this), _this.state = { open: false }, _this.selectText = function () {
      return _this.textarea.select();
    }, _this.showExportData = function () {
      return _this.setState({ open: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ExportData, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = this.props.data;
      var open = this.state.open;


      if (!open) {
        return _react2.default.createElement(
          _Button.MainButton,
          { onClick: this.showExportData },
          'Vis data'
        );
      }

      var json = JSON.stringify(data, null, 2);
      var lines = json.split(/\n/).length;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Input.Textarea, {
          rows: lines,
          innerRef: function innerRef(textarea) {
            return _this2.textarea = textarea;
          },
          onClick: this.selectText,
          value: json,
          'read-only': true
        }),
        _react2.default.createElement(
          _Button.MainButton,
          null,
          'Ta med dataen til altinn'
        )
      );
    }
  }]);

  return ExportData;
}(_react.Component);

ExportData.propTypes = {
  data: _propTypes2.default.any
};
ExportData.defaultProps = {
  data: null
};


var mapStateToProps = function mapStateToProps(state, _ref2) {
  var exporter = _ref2.exporter;
  return {
    data: exporter((0, _selectors.getData)(state))
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ExportData);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wizard = exports.ToggleButton = exports.Logo = exports.Label = exports.Input = exports.Paragraphs = exports.Heading = exports.Grid = exports.Figure = exports.Errors = exports.Button = exports.Block = exports.AsideItem = exports.AsideButton = undefined;

var _AsideButton2 = __webpack_require__(24);

var _AsideButton3 = _interopRequireDefault(_AsideButton2);

var _AsideItem2 = __webpack_require__(33);

var _AsideItem3 = _interopRequireDefault(_AsideItem2);

var _Block2 = __webpack_require__(10);

var _Block3 = _interopRequireDefault(_Block2);

var _Button2 = __webpack_require__(12);

var _Button = _interopRequireWildcard(_Button2);

var _Errors2 = __webpack_require__(18);

var _Errors3 = _interopRequireDefault(_Errors2);

var _Figure2 = __webpack_require__(37);

var _Figure3 = _interopRequireDefault(_Figure2);

var _grid = __webpack_require__(101);

var _Grid = _interopRequireWildcard(_grid);

var _Heading2 = __webpack_require__(4);

var _Heading = _interopRequireWildcard(_Heading2);

var _Paragraphs2 = __webpack_require__(9);

var _Paragraphs = _interopRequireWildcard(_Paragraphs2);

var _Input2 = __webpack_require__(5);

var _Input3 = _interopRequireDefault(_Input2);

var _Label2 = __webpack_require__(26);

var _Label3 = _interopRequireDefault(_Label2);

var _Logo2 = __webpack_require__(36);

var _Logo3 = _interopRequireDefault(_Logo2);

var _ToggleButton2 = __webpack_require__(32);

var _ToggleButton3 = _interopRequireDefault(_ToggleButton2);

var _Wizard2 = __webpack_require__(49);

var _Wizard3 = _interopRequireDefault(_Wizard2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AsideButton = _AsideButton3.default;
exports.AsideItem = _AsideItem3.default;
exports.Block = _Block3.default;
exports.Button = _Button;
exports.Errors = _Errors3.default;
exports.Figure = _Figure3.default;
exports.Grid = _Grid;
exports.Heading = _Heading;
exports.Paragraphs = _Paragraphs;
exports.Input = _Input3.default;
exports.Label = _Label3.default;
exports.Logo = _Logo3.default;
exports.ToggleButton = _ToggleButton3.default;
exports.Wizard = _Wizard3.default;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = exports.Main = exports.Header = exports.Grid = exports.Footer = exports.Aside = undefined;

var _Aside2 = __webpack_require__(31);

var _Aside3 = _interopRequireDefault(_Aside2);

var _Footer2 = __webpack_require__(48);

var _Footer3 = _interopRequireDefault(_Footer2);

var _Grid2 = __webpack_require__(47);

var _Grid3 = _interopRequireDefault(_Grid2);

var _Header2 = __webpack_require__(35);

var _Header3 = _interopRequireDefault(_Header2);

var _Main2 = __webpack_require__(19);

var _Main3 = _interopRequireDefault(_Main2);

var _Navigation2 = __webpack_require__(43);

var _Navigation3 = _interopRequireDefault(_Navigation2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Aside = _Aside3.default;
exports.Footer = _Footer3.default;
exports.Grid = _Grid3.default;
exports.Header = _Header3.default;
exports.Main = _Main3.default;
exports.Navigation = _Navigation3.default;

/***/ })
/******/ ]);