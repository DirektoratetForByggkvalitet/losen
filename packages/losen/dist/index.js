"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "../../node_modules/react-is/cjs/react-is.production.min.js"(exports) {
    "use strict";
    var b = "function" === typeof Symbol && Symbol.for;
    var c = b ? Symbol.for("react.element") : 60103;
    var d = b ? Symbol.for("react.portal") : 60106;
    var e = b ? Symbol.for("react.fragment") : 60107;
    var f = b ? Symbol.for("react.strict_mode") : 60108;
    var g = b ? Symbol.for("react.profiler") : 60114;
    var h = b ? Symbol.for("react.provider") : 60109;
    var k = b ? Symbol.for("react.context") : 60110;
    var l = b ? Symbol.for("react.async_mode") : 60111;
    var m = b ? Symbol.for("react.concurrent_mode") : 60111;
    var n = b ? Symbol.for("react.forward_ref") : 60112;
    var p = b ? Symbol.for("react.suspense") : 60113;
    var q = b ? Symbol.for("react.suspense_list") : 60120;
    var r = b ? Symbol.for("react.memo") : 60115;
    var t = b ? Symbol.for("react.lazy") : 60116;
    var v = b ? Symbol.for("react.block") : 60121;
    var w = b ? Symbol.for("react.fundamental") : 60117;
    var x = b ? Symbol.for("react.responder") : 60118;
    var y = b ? Symbol.for("react.scope") : 60119;
    function z(a) {
      if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;
        switch (u) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m:
              case e:
              case g:
              case f:
              case p:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case t:
                  case r:
                  case h:
                    return a;
                  default:
                    return u;
                }
            }
          case d:
            return u;
        }
      }
    }
    function A(a) {
      return z(a) === m;
    }
    exports.AsyncMode = l;
    exports.ConcurrentMode = m;
    exports.ContextConsumer = k;
    exports.ContextProvider = h;
    exports.Element = c;
    exports.ForwardRef = n;
    exports.Fragment = e;
    exports.Lazy = t;
    exports.Memo = r;
    exports.Portal = d;
    exports.Profiler = g;
    exports.StrictMode = f;
    exports.Suspense = p;
    exports.isAsyncMode = function(a) {
      return A(a) || z(a) === l;
    };
    exports.isConcurrentMode = A;
    exports.isContextConsumer = function(a) {
      return z(a) === k;
    };
    exports.isContextProvider = function(a) {
      return z(a) === h;
    };
    exports.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };
    exports.isForwardRef = function(a) {
      return z(a) === n;
    };
    exports.isFragment = function(a) {
      return z(a) === e;
    };
    exports.isLazy = function(a) {
      return z(a) === t;
    };
    exports.isMemo = function(a) {
      return z(a) === r;
    };
    exports.isPortal = function(a) {
      return z(a) === d;
    };
    exports.isProfiler = function(a) {
      return z(a) === g;
    };
    exports.isStrictMode = function(a) {
      return z(a) === f;
    };
    exports.isSuspense = function(a) {
      return z(a) === p;
    };
    exports.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
    };
    exports.typeOf = z;
  }
});

// ../../node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "../../node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment5 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment5;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../../node_modules/react-is/index.js
var require_react_is = __commonJS({
  "../../node_modules/react-is/index.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_is_production_min();
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// ../../node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "../../node_modules/object-assign/index.js"(exports, module2) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
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
  }
});

// ../../node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module2) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module2.exports = ReactPropTypesSecret;
  }
});

// ../../node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "../../node_modules/prop-types/lib/has.js"(exports, module2) {
    module2.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// ../../node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "../../node_modules/prop-types/checkPropTypes.js"(exports, module2) {
    "use strict";
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values2, location, componentName, getStack) {
      if (process.env.NODE_ENV !== "production") {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (process.env.NODE_ENV !== "production") {
        loggedTypeFailures = {};
      }
    };
    module2.exports = checkPropTypes;
  }
});

// ../../node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "../../node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module2) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module2.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate2) {
        if (process.env.NODE_ENV !== "production") {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate2(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate2(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createElementTypeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createElementTypeTypeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (process.env.NODE_ENV !== "production") {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate2);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          process.env.NODE_ENV !== "production" ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate2(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate2);
      }
      function createNodeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
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
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// ../../node_modules/prop-types/factoryWithThrowingShims.js
var require_factoryWithThrowingShims = __commonJS({
  "../../node_modules/prop-types/factoryWithThrowingShims.js"(exports, module2) {
    "use strict";
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    module2.exports = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      ;
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      ;
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// ../../node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "../../node_modules/prop-types/index.js"(exports, module2) {
    if (process.env.NODE_ENV !== "production") {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module2.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module2.exports = require_factoryWithThrowingShims()();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// index.ts
var losen_exports = {};
__export(losen_exports, {
  Primitives: () => primitives_exports,
  StyleProvider: () => StyleProvider,
  Wizard: () => Wizard_default,
  dsl: () => dsl_exports,
  state: () => state_exports,
  track: () => track,
  trackEvent: () => trackEvent
});
module.exports = __toCommonJS(losen_exports);

// state/index.ts
var state_exports = {};
__export(state_exports, {
  NAME: () => NAME,
  actions: () => actions_exports,
  applyComputed: () => applyComputed,
  reducer: () => reducer_default
});

// state/actions.ts
var actions_exports = {};
__export(actions_exports, {
  RESET_DATA: () => RESET_DATA,
  SET_DATA: () => SET_DATA,
  SHOW_RESET_MODAL: () => SHOW_RESET_MODAL,
  resetData: () => resetData,
  resetModal: () => resetModal,
  setData: () => setData,
  setLanguage: () => setLanguage
});
var SET_DATA = "SET_DATA";
var RESET_DATA = "RESET_DATA";
var SHOW_RESET_MODAL = "SHOW_RESET_MODAL";
function setData(key, value) {
  return {
    type: SET_DATA,
    payload: { key, value }
  };
}
function resetData() {
  return {
    type: RESET_DATA
  };
}
function resetModal(show = true) {
  return {
    type: SHOW_RESET_MODAL,
    payload: { show }
  };
}
function setLanguage(language) {
  return setData("$language", language);
}

// state/reducer.ts
var import_setWith = __toESM(require("lodash/setWith"));
var import_isObject = __toESM(require("lodash/isObject"));
var import_find = __toESM(require("lodash/find"));

// state/constants.ts
var NAME = "@WIZARD_STATE";

// utils/vocalize-errors.ts
function vocalizeLeafError(error, nodeTitles = {}) {
  return error.map((part) => {
    if (typeof part === "object" && part.field) {
      return `"${nodeTitles[part.field] || part.field}"`;
    }
    return part;
  }).join(" ");
}
function vocalizeErrors(errors, nodeTitles) {
  if (errors.operator) {
    return errors.errors.map((error) => vocalizeErrors(error, nodeTitles)).join(errors.operator === "or" ? " eller " : " og ");
  }
  if (Array.isArray(errors) && errors.length === 1) {
    return vocalizeLeafError(errors[0], nodeTitles);
  }
  return vocalizeLeafError(errors, nodeTitles);
}

// utils/reduce-wizard.ts
var import_get6 = __toESM(require("lodash/get"));
var import_omit = __toESM(require("lodash/omit"));
var import_set = __toESM(require("lodash/set"));

// utils/is-of-type.ts
var import_get = __toESM(require("lodash/get"));
function isOfType(node, types) {
  return types.includes(node.type);
}
function hasProperty(obj, prop) {
  return typeof (0, import_get.default)(obj, prop) !== "undefined";
}

// utils/dsl/index.ts
var dsl_exports = {};
__export(dsl_exports, {
  buildBetween: () => buildBetween,
  buildEq: () => buildEq,
  buildGt: () => buildGt,
  buildGte: () => buildGte,
  buildIs: () => buildIs,
  buildLt: () => buildLt,
  buildLte: () => buildLte,
  buildNeq: () => buildNeq,
  buildNot: () => buildNot,
  buildRequired: () => buildRequired,
  buildValidatorForComplexExpression: () => buildValidatorForComplexExpression,
  buildValidatorForSimpleExpression: () => buildValidatorForSimpleExpression,
  buildValidatorFunction: () => buildValidatorFunction,
  default: () => dsl_default,
  getValue: () => getValue,
  parseExpression: () => parseExpression
});
var import_get2 = __toESM(require("lodash/get"));

// utils/dsl/validator.ts
function validateSimpleExpression(expression) {
  if (expression.type) {
    throw new Error(
      `Expected simple expression. Got ${expression.type} expression: ${JSON.stringify(expression)}`
    );
  }
  if (!expression.operator) {
    throw new Error(
      `Expression has no operator property: ${JSON.stringify(expression)}`
    );
  }
  if (!expression.field) {
    throw new Error(
      `Expression is missing field property: ${JSON.stringify(expression)}`
    );
  }
  switch (expression.operator) {
    case "gt":
    case "lt":
    case "gte":
    case "lte":
    case "eq":
    case "neq":
      if (typeof expression.value === "undefined") {
        throw new Error(
          `Operator ${expression.operator} expects a value property: ${JSON.stringify(expression)}`
        );
      }
      if (typeof expression.value === "object" && !expression.value.field && !expression.value.fields) {
        throw new Error(
          `Expression with value of type object is supposed to be a reference to a field to compare to. No field property found: : ${expression}`
        );
      }
      break;
    case "between":
      if (!expression.value) {
        throw new Error(
          `Expression with operator ${expression.operator} must have a value property: ${JSON.stringify(expression)}`
        );
      }
      if (!Array.isArray(expression.value)) {
        throw new Error(
          `Expression with operator ${expression.operator} must have an array as the value property: ${JSON.stringify(
            expression
          )}`
        );
      }
      if (expression.value.length !== 2) {
        throw new Error(
          `Expression with operator ${expression.operator} expects an array containing two values. Got ${expression.value.length}: ${JSON.stringify(expression)}`
        );
      }
      expression.value.forEach((number) => {
        if (isNaN(parseFloat(number))) {
          throw new Error(
            `Expression with operator ${expression.operator} expected a range of two numbers. ${number} is not a valid number: ${JSON.stringify(
              expression
            )}`
          );
        }
      });
      break;
    case "is":
    case "not":
    case "isnot":
    case "required":
      return true;
    default:
      throw new Error(
        `Unknown operator ${expression.operator}: ${JSON.stringify(expression)}`
      );
  }
  return true;
}
function validateComplexExpression(expression) {
  if (expression.type && ["and", "or"].indexOf(expression.type) === -1) {
    throw new Error(`Unknown expression type: ${expression.type}`);
  }
  if (expression.type && !expression.clauses) {
    throw new Error(`Missing clauses for ${expression.type} expression`);
  }
  return expression.clauses.reduce((valid, childExpression) => {
    switch (expression.type) {
      case "and":
        return valid && validateExpression(childExpression);
      case "or":
        return valid || validateExpression(childExpression);
      default:
        return false;
    }
  }, true);
}
function validateExpression(expression) {
  if (expression.type) {
    return validateComplexExpression(expression);
  }
  return validateSimpleExpression(expression);
}

// utils/dsl/index.ts
function getValue(value, state) {
  if (typeof value === "object" && typeof value.fields !== "undefined") {
    return value.fields.reduce(
      (acc, currentValue) => acc + (0, import_get2.default)(state, currentValue),
      0
    );
  }
  if (typeof value === "object" && value.field) {
    return (0, import_get2.default)(state, value.field);
  }
  return value;
}
function buildGt({
  field,
  value,
  errorMessage
}) {
  return (state) => {
    if ((0, import_get2.default)(state, field) > getValue(value, state)) {
      return { valid: true, errors: [] };
    }
    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }
    if (typeof value === "object" && value.field) {
      return {
        valid: false,
        errors: [[{ field }, "m\xE5 v\xE6re st\xF8rre enn", { field: value.field }]]
      };
    }
    return { valid: false, errors: [[{ field }, "m\xE5 v\xE6re st\xF8rre enn", value]] };
  };
}
function buildLt({
  field,
  value,
  errorMessage
}) {
  return (state) => {
    if ((0, import_get2.default)(state, field) < getValue(value, state)) {
      return { valid: true, errors: [] };
    }
    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }
    if (typeof value === "object" && value.field) {
      return {
        valid: false,
        errors: [[{ field }, "m\xE5 v\xE6re mindre enn", { field: value.field }]]
      };
    }
    return { valid: false, errors: [[{ field }, "m\xE5 v\xE6re mindre enn", value]] };
  };
}
function buildGte({
  field,
  value,
  errorMessage
}) {
  return (state) => {
    if ((0, import_get2.default)(state, field) >= getValue(value, state)) {
      return { valid: true, errors: [] };
    }
    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }
    if (typeof value === "object" && value.field) {
      return {
        valid: false,
        errors: [
          [{ field }, "m\xE5 v\xE6re st\xF8rre enn eller lik", { field: value.field }]
        ]
      };
    }
    return {
      valid: false,
      errors: [[{ field }, "m\xE5 v\xE6re st\xF8rre enn eller lik", value]]
    };
  };
}
function buildLte({
  field,
  value,
  errorMessage
}) {
  return (state) => {
    if ((0, import_get2.default)(state, field) <= getValue(value, state)) {
      return { valid: true, errors: [] };
    }
    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }
    if (typeof value === "object" && value.field) {
      return {
        valid: false,
        errors: [
          [{ field }, "m\xE5 v\xE6re mindre enn eller lik", { field: value.field }]
        ]
      };
    }
    return {
      valid: false,
      errors: [[{ field }, "m\xE5 v\xE6re mindre enn eller lik", value]]
    };
  };
}
function buildEq({
  field,
  value,
  errorMessage
}) {
  return (state) => {
    if ((0, import_get2.default)(state, field) === getValue(value, state)) {
      return { valid: true, errors: [] };
    }
    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }
    if (typeof value === "object" && value.field) {
      return {
        valid: false,
        errors: [[{ field }, "m\xE5 v\xE6re lik", { field: value.field }]]
      };
    }
    return { valid: false, errors: [[{ field }, "m\xE5 v\xE6re lik", value]] };
  };
}
function buildNeq({
  field,
  value,
  errorMessage
}) {
  return (state) => {
    if ((0, import_get2.default)(state, field) !== getValue(value, state)) {
      return { valid: true, errors: [] };
    }
    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }
    if (typeof value === "object" && value.field) {
      return {
        valid: false,
        errors: [[{ field }, "m\xE5 v\xE6re ulik", { field: value.field }]]
      };
    }
    return { valid: false, errors: [[{ field }, "m\xE5 v\xE6re ulik", value]] };
  };
}
function buildBetween({
  field,
  value,
  errorMessage
}) {
  return (state) => {
    const fieldValue = (0, import_get2.default)(state, field);
    const [lower, upper] = value;
    if (fieldValue >= lower && fieldValue <= upper) {
      return { valid: true, errors: [] };
    }
    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }
    return {
      valid: false,
      errors: [[{ field }, "m\xE5 v\xE6re mellom", value[0], "og", value[1]]]
    };
  };
}
function buildRequired({
  field,
  errorMessage
}) {
  return (state) => {
    if ((0, import_get2.default)(state, field) !== void 0) {
      return { valid: true, errors: [] };
    }
    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }
    return { valid: false, errors: [[{ field }, "er p\xE5krevd"]] };
  };
}
function buildNot({
  field,
  errorMessage
}) {
  return (state) => {
    if (!(0, import_get2.default)(state, field)) {
      return { valid: true, errors: [] };
    }
    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }
    return { valid: false, errors: [[{ field }, "skal v\xE6re usann"]] };
  };
}
function buildIs({
  field,
  errorMessage
}) {
  return (state) => {
    if ((0, import_get2.default)(state, field, false)) {
      return { valid: true, errors: [] };
    }
    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }
    return { valid: false, errors: [[{ field }, "skal v\xE6re sann"]] };
  };
}
function buildValidatorForSimpleExpression(expression) {
  return (state) => {
    switch (expression.operator) {
      case "gt":
        return buildGt(expression)(state);
      case "lt":
        return buildLt(expression)(state);
      case "gte":
        return buildGte(expression)(state);
      case "lte":
        return buildLte(expression)(state);
      case "eq":
        return buildEq(expression)(state);
      case "neq":
        return buildNeq(expression)(state);
      case "between":
        return buildBetween(expression)(state);
      case "required":
        return buildRequired(expression)(state);
      case "is":
        return buildIs(expression)(state);
      case "isnot":
      case "not":
        return buildNot(expression)(state);
      default:
        return { valid: false, errors: [] };
    }
  };
}
function buildValidatorForComplexExpression(expression) {
  return (state) => expression.clauses.reduce(
    (res, clause) => {
      const validationResult = buildValidatorFunction(clause)(state);
      let valid;
      let errors;
      if (expression.type === "or" && (validationResult.valid || res.valid)) {
        return {
          valid: true,
          errors: {
            operator: expression.type,
            errors: []
          }
        };
      }
      if (expression.type === "and") {
        valid = res.valid && validationResult.valid;
      } else if (expression.type === "or") {
        valid = res.valid || validationResult.valid;
      }
      if (expression.errorMessage) {
        errors = [expression.errorMessage];
      } else {
        errors = validationResult.valid ? res.errors : __spreadProps(__spreadValues({}, res.errors), {
          errors: [
            ...(0, import_get2.default)(res.errors, "errors", []),
            ...Array.isArray(validationResult.errors) ? validationResult.errors : [validationResult.errors]
          ]
        });
      }
      return { valid: Boolean(valid), errors };
    },
    {
      /**
       * Start with valid being true for and expressions to avoid the
       * result always being false, and with false for or expressions
       * to avoid the result always being true 🤓
       */
      valid: expression.type === "and",
      errors: {
        operator: expression.type,
        errors: []
      }
    }
  );
}
function buildValidatorFunction(expression) {
  return (state) => {
    if (expression.type) {
      return buildValidatorForComplexExpression(expression)(state);
    }
    return buildValidatorForSimpleExpression(expression)(state);
  };
}
function parseExpression(expression, topLevel = true) {
  if (topLevel) {
    validateExpression(expression);
  }
  return buildValidatorFunction(expression);
}
var dsl_default = parseExpression;

// utils/get-node-value.ts
var import_get3 = __toESM(require("lodash/get"));

// utils/get-data.ts
function getData(state) {
  return state[NAME] || {};
}

// utils/get-node-value.ts
function getNodeValue(property, state) {
  return (0, import_get3.default)(getData(state), property);
}

// utils/get-translation.ts
var import_get5 = __toESM(require("lodash/get"));

// utils/get-current-language.ts
var import_get4 = __toESM(require("lodash/get"));
function getCurrentLanguage(state, defaultValue = "no") {
  return (0, import_get4.default)(getData(state), "$language", defaultValue);
}

// utils/get-translation.ts
function getTranslation(state, translations) {
  const currentLanguage = getCurrentLanguage(state);
  return (0, import_get5.default)(translations, [currentLanguage, "tags"], {});
}

// utils/reduce-wizard.ts
var nonInteractiveTypes = [
  "Image",
  "Text",
  "Group",
  "Table"
];
function translateNode(node, state, translations) {
  if (!hasProperty(node, "id")) {
    return node;
  }
  const currentTranslation = getTranslation(state, translations);
  if (!(0, import_get6.default)(currentTranslation, node.id)) {
    return node;
  }
  const nodeTranslation = (0, import_get6.default)(currentTranslation, node.id);
  const result = __spreadValues({}, node);
  if (nodeTranslation.heading) {
    (0, import_set.default)(result, "heading", nodeTranslation.heading);
  }
  if (nodeTranslation.description) {
    if (node.type === "Result" || node.type === "Page") {
      (0, import_set.default)(result, "lead", nodeTranslation.description);
    } else {
      (0, import_set.default)(result, "text", nodeTranslation.description);
    }
  }
  if (nodeTranslation.image) {
    (0, import_set.default)(result, "image", {
      url: nodeTranslation.image.large,
      alt: `Illustrasjon for ${(0, import_get6.default)(result, "heading")}`
    });
  }
  return result;
}
var mapTranslateNode = (state, translations) => (node) => translateNode(node, state, translations);
var parseTableCells = (state, translations) => (node) => {
  var _a, _b;
  if (!isOfType(node, ["Table"])) {
    return node;
  }
  return __spreadProps(__spreadValues({}, node), {
    cells: (_b = (_a = node.cells) == null ? void 0 : _a.map(
      (row) => row == null ? void 0 : row.map((cell) => {
        let inactive = false;
        if (cell.test) {
          inactive = !dsl_default(cell.test)(state[NAME]).valid;
        }
        const translatedProps = translateNode(cell, state, translations);
        return __spreadProps(__spreadValues(__spreadValues({}, cell), translatedProps), {
          inactive
        });
      })
    )) != null ? _b : []
  });
};
var reduceOptionMessages = (state) => (messages) => (messages || []).filter(({ show, hide, hidden }) => {
  if (show) {
    return dsl_default(show)(state[NAME]).valid;
  }
  if (hide || hidden) {
    return !dsl_default(hide || hidden)(state[NAME]).valid;
  }
  return true;
}).slice(0, 1);
var filterSchemaNodes = (state) => (node) => {
  if (isOfType(node, ["Branch"])) {
    return true;
  }
  if (hasProperty(node, "show") && node.show) {
    return dsl_default(node.show)(state[NAME]).valid;
  }
  if (hasProperty(node, "hide") || hasProperty(node, "hidden")) {
    const expression = node.hide || node.hidden;
    return !dsl_default(expression)(state[NAME]).valid;
  }
  return true;
};
var reduceBranches = (state, nodeTitles, translations = {}, nodeMap) => (res, node) => {
  if (node.type !== "Branch") {
    return [...res, node];
  }
  const selectedBranch = node.branches.find(
    (branch) => dsl_default(branch.test)(state[NAME]).valid
  );
  if (selectedBranch) {
    return [
      ...res,
      ...reduceWizard(
        selectedBranch.children,
        state,
        nodeTitles,
        translations,
        nodeMap
      )
    ];
  }
  return res;
};
var mapWizardChildren = (state, nodeTitles, translations = {}, nodeMap) => (node) => {
  const currentValue = hasProperty(node, "property") ? getNodeValue((0, import_get6.default)(node, "property"), state) : void 0;
  const errors = { disabled: [], validation: {} };
  if (isOfType(node, ["Answer"]) && node.disabled) {
    errors.disabled = dsl_default(node.disabled)(state[NAME]).errors;
  }
  if (isOfType(node, ["Input", "Number", "Textarea", "FetchOrg"]) && node.validator && currentValue) {
    if (node.validator.test) {
      errors.validation = {
        error: !dsl_default(node.validator.test)(state[NAME]).valid,
        message: node.validator.error
      };
    } else if (node.validator.object) {
      errors.validation = {
        error: !new RegExp(node.validator.pattern).test(
          currentValue[node.validator.object]
        ),
        message: node.validator.error
      };
    } else {
      errors.validation = {
        error: !new RegExp(node.validator.pattern).test(`${currentValue}`),
        message: node.validator.error
      };
    }
  }
  if ((!hasProperty(node, "optional") || !node.optional) && !isOfType(node, [...nonInteractiveTypes, "Checkbox"])) {
    errors.required = [null, void 0, ""].includes(currentValue);
  } else if (isOfType(node, ["Checkbox"]) && !node.optional && !node.allMandatory) {
    errors.required = !currentValue || !Object.values(currentValue).filter((v) => v).length;
  } else if (isOfType(node, ["Checkbox"]) && !node.optional && node.allMandatory) {
    errors.required = Object.values(currentValue || {}).filter((v) => v).length !== node.options.length;
  }
  const translatedNode = translateNode(node, state, translations);
  if (hasProperty(node, "children")) {
    return __spreadValues(__spreadValues({}, translatedNode), node.children && node.children.length ? {
      children: reduceWizard(
        node.children,
        state,
        nodeTitles,
        translations,
        nodeMap
      )
    } : {});
  }
  return __spreadValues(__spreadValues(__spreadValues({}, translatedNode), currentValue !== void 0 ? { currentValue } : {}), !isOfType(node, ["Result"]) ? {
    errors,
    errorDescription: vocalizeErrors(errors.disabled, nodeTitles)
  } : {});
};
var reduceOptions = (state, translations, nodeMap) => (node) => {
  if (!hasProperty(node, "options")) {
    return node;
  }
  return __spreadProps(__spreadValues({}, node), {
    options: node.options.map(replaceReferences(nodeMap)).filter((node2) => {
      if (hasProperty(node2, "show") && node2.show) {
        return dsl_default(node2.show)(state[NAME]).valid;
      }
      if (hasProperty(node2, "hidden") || hasProperty(node2, "hide")) {
        return dsl_default(node2.hide || node2.hidden)(state[NAME]).valid;
      }
      return true;
    }).map(mapTranslateNode(state, translations)).filter((node2) => isOfType(node2, ["Answer"])).map((option) => {
      return __spreadProps(__spreadValues(__spreadValues({}, option), hasProperty(option, "disabled") ? {
        disabled: !dsl_default(option.disabled)(state[NAME]).valid
      } : {}), {
        messages: hasProperty(option, "messages") ? reduceOptionMessages(state)(option.messages || []) : []
      });
    })
  });
};
var liftChildrenBranchPages = (res, node) => {
  var _a, _b;
  if (res.length && res[res.length - 1].type === "Result") {
    return res;
  }
  if (node.type === "Page" && (!node.children || !node.children.length)) {
    return res;
  }
  if (!(0, import_get6.default)(node, "children.length")) {
    return [...res, node];
  }
  if (hasProperty(node, "children") && ((_a = node.children) == null ? void 0 : _a.length) === 1 && isOfType(node.children[0], ["Result"])) {
    return [...res, node.children[0]];
  }
  if (hasProperty(node, "children") && ((_b = node == null ? void 0 : node.children) == null ? void 0 : _b[node.children.length - 1]) && isOfType(node.children[node.children.length - 1], ["Result"])) {
    return [...res, node, node.children.pop()];
  }
  return [...res, node];
};
var replaceReferences = (nodeMap) => (node) => {
  if (node.type !== "Reference") {
    return node;
  }
  if (!node.nodeId || !nodeMap[node.nodeId]) {
    return node;
  }
  const referencedNodeProps = nodeMap[node.nodeId];
  return __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, (0, import_omit.default)(referencedNodeProps, ["show", "hide", "hidden"])), hasProperty(node, "show") ? { show: node.show } : {}), hasProperty(node, "hide") ? { hide: node.hide } : {}), hasProperty(node, "hidden") ? { hidden: node.hidden } : {});
};
var buildNodeMap = (schema) => schema.reduce((res, node) => {
  var _a, _b;
  return __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, res), hasProperty(node, "id") ? { [node.id]: node } : {}), hasProperty(node, "children") ? buildNodeMap(node.children || []) : {}), hasProperty(node, "options") ? buildNodeMap(node.options || []) : {}), isOfType(node, ["Branch"]) ? buildNodeMap(
    (_b = (_a = node == null ? void 0 : node.branches) == null ? void 0 : _a.reduce(
      (children, branch) => [...children, ...branch.children],
      []
    )) != null ? _b : []
  ) : {});
}, {});
var discardVisibilityProps = (node) => (0, import_omit.default)(node, ["show", "hide", "hidden"]);
function reduceWizard(schema, state, nodeTitles = {}, translations = {}, nodeMap) {
  let schemaNodeMap = nodeMap;
  if (!schemaNodeMap) {
    schemaNodeMap = buildNodeMap(schema);
  }
  return schema.map(replaceReferences(schemaNodeMap)).map(mapTranslateNode(state, translations)).reduce(
    reduceBranches(state, nodeTitles, translations, schemaNodeMap),
    []
  ).filter(filterSchemaNodes(state)).map(parseTableCells(state, translations)).map(mapWizardChildren(state, nodeTitles, translations, schemaNodeMap)).map(reduceOptions(state, translations, schemaNodeMap)).map(discardVisibilityProps).reduce(
    liftChildrenBranchPages,
    []
  );
}

// utils/process-computed.ts
function processComputed(schema, state) {
  return Object.keys(schema.computed || {}).reduce((res, prop) => {
    var _a;
    if (typeof ((_a = schema == null ? void 0 : schema.computed) == null ? void 0 : _a[prop]) === "undefined") {
      return res;
    }
    return __spreadProps(__spreadValues({}, res), {
      [prop]: dsl_default(schema.computed[prop])(state).valid
    });
  }, {});
}

// state/reducer.ts
var initialState = {};
var removeInactiveQuestions = (state, nodes, path = []) => Object.keys(state).reduce((acc, property) => {
  if (["page", "$computed", "$external", "$language"].indexOf(property) > -1) {
    return __spreadProps(__spreadValues({}, acc), { [property]: state[property] });
  }
  const propertyPath = [...path, property];
  const fullPropertyPath = propertyPath.join(".");
  if ((0, import_find.default)(
    nodes,
    (node) => hasProperty(node, "property") && node.property === fullPropertyPath
  )) {
    return __spreadProps(__spreadValues({}, acc), { [property]: state[property] });
  }
  if ((0, import_isObject.default)(state[property])) {
    return __spreadProps(__spreadValues({}, acc), {
      // remove inactive properties on the property object
      [property]: removeInactiveQuestions(
        state[property],
        // pass the object we got to
        nodes,
        [...path, property]
        // add the property to the path and go on
      )
    });
  }
  return __spreadValues({}, acc);
}, {});
function applyComputed(wizard, state) {
  return __spreadProps(__spreadValues({}, state), {
    $computed: processComputed(wizard, state)
  });
}
function setDataUpdate(wizard, state, { payload }) {
  const newState = (0, import_setWith.default)(
    __spreadValues({}, state),
    payload.key,
    payload.value,
    (nsValue) => nsValue || {}
  );
  const newSchema = reduceWizard(wizard.schema, { [NAME]: newState });
  const visibleNodes = buildNodeMap(newSchema);
  const purgedState = removeInactiveQuestions(newState, visibleNodes);
  return applyComputed(wizard, purgedState);
}
var reducer_default = (wizard) => (state = applyComputed(wizard, initialState), action) => {
  const { type } = action;
  switch (type) {
    case SET_DATA:
      return setDataUpdate(wizard, state, action);
    case RESET_DATA:
      return applyComputed(wizard, initialState);
    case SHOW_RESET_MODAL:
      return __spreadProps(__spreadValues({}, state), { $showResetModal: action.payload.show });
    default:
      return state;
  }
};

// components/Wizard.tsx
var import_react13 = require("react");
var import_react_redux9 = require("react-redux");
var import_redux3 = require("redux");

// components/helper/Modal.tsx
var import_react3 = require("react");
var import_redux = require("redux");
var import_react_redux = require("react-redux");
var import_react_modal = __toESM(require("react-modal"));

// primitives/Heading.ts
var Heading_exports = {};
__export(Heading_exports, {
  H1: () => H1,
  H2: () => H2,
  H3: () => H3,
  H4: () => H4
});
var import_styled_components = __toESM(require("styled-components"));

// utils/inject-styles.tsx
var import_react2 = require("react");

// components/StyleProvider.tsx
var import_react = require("react");
var import_merge = __toESM(require("lodash/merge"));

// styles.ts
var styles = {
  font: {
    headline: '"PP Mori", "Open Sans", arial, helvetika, sans-serif',
    body: '"PP Mori", "Altis-Light", "Altis", "Open Sans", arial, sans-serif'
  },
  color2: {
    pageBackground: "#ebf4fa",
    // Havblå 50
    sectionBackground: "#ffffff",
    // Hvit
    textHeading: "#003045",
    textDark: "#003045",
    textWhite: "#ffffff",
    link: "#005275",
    visitedLink: "#551abb",
    outline: "#003045",
    // Havblå 900
    focus: "rgba(0, 92, 173, 0.4)",
    // Himmelblå 700 40%
    primary: "#003045",
    // Havblå 900
    primaryLight: "rgba(0, 48, 69, 0.85)",
    primaryXLight: "rgba(0, 48, 69, 0.75)",
    secondary: "#89bad6",
    // Havblå 300
    secondaryLight: "#c7e0f2",
    // havblå 100
    secondaryXLight: "#ebf4fa",
    // havblå 50
    error: "#db0000",
    // Rød 700
    errorLight: "#ffc5c2",
    // Rød 100
    errorXLight: "#fceceb",
    // Rød 50
    positive: "#177912",
    // Sindre
    positiveLight: "#cbebb0",
    // Grønn 100
    positiveXLight: "#f1fae3",
    // Grønn 50
    negative: "#ffbe00",
    // oransje 200
    negativeLight: "#fcefb6",
    // oransje 100
    negativeXLight: "#fff8db"
    // oransje 50
  },
  borderRadius: {
    small: "0px",
    large: "0px"
  },
  padding: {
    xxSmall: "4px",
    xSmall: "8px",
    small: "12px",
    // 16 
    medium: "20px",
    large: "24px",
    xLarge: "48px"
  },
  size: {
    imageWidth: "600px",
    pageWidth: "1280px",
    blockWidth: "800px",
    navWidth: "340px",
    headerHeight: "75px",
    mobileContentWidth: "100%"
  },
  iconSize: {
    small: "20px",
    medium: "24px"
  },
  easing: {
    easeOut: "cubic-bezier(0.22, 1, 0.36, 1)"
  },
  text: {
    body: {
      fontSize: "16px",
      fontWeight: "400",
      boldWeight: "600",
      lineHeight: "24px",
      letterSpacing: "0.01em"
    },
    lead: {
      fontSize: "18px",
      fontWeight: "400",
      boldWeight: "600",
      lineHeight: "26px",
      letterSpacing: "0.01em"
    },
    h1: {
      fontSize: "28px",
      fontWeight: "600",
      lineHeight: "36px",
      letterSpacing: "0"
    },
    h2: {
      fontSize: "22px",
      fontWeight: "600",
      lineHeight: "30px",
      letterSpacing: "0"
    },
    h3: {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "24px",
      letterSpacing: "0"
    },
    subHeading: {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "18px",
      letterSpacing: "0",
      textTransform: "uppercase"
    },
    caption: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "0",
      fontStyle: "italic"
    },
    label: {
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "26px",
      letterSpacing: "0.01em"
    }
  }
};
var styles_default = styles;

// components/StyleProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var StyleContext = (0, import_react.createContext)(styles_default);
function StyleProvider({ children, styles: styles2 = {} }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyleContext.Provider, { value: (0, import_merge.default)({}, styles_default, styles2), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children }) });
}

// utils/inject-styles.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var injectStyles = (WrappedComponent) => (0, import_react2.forwardRef)((props, ref) => {
  const styles2 = (0, import_react2.useContext)(StyleContext);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    WrappedComponent,
    __spreadProps(__spreadValues({}, props), {
      ref,
      styles: styles2
    })
  );
});
var inject_styles_default = injectStyles;

// primitives/Heading.ts
var H1 = inject_styles_default(
  import_styled_components.default.h1`
    ${({ styles: styles2, small, result }) => `
  font-family: ${styles2.font.headline};
  font-size: ${styles2.text.h1.fontSize};
  font-weight: ${styles2.text.h1.fontWeight};
  line-height: ${styles2.text.h1.lineHeight};
  letter-spacing: ${styles2.text.h1.letterSpacing};
  text-wrap: balance;
  margin: 0 0 ${styles2.padding.medium};
  color: ${styles2.color2.textHeading};
  ${small ? `
    font-size: ${styles2.text.h3.fontSize};
    font-weight: ${styles2.text.h3.fontWeight};
    line-height: ${styles2.text.h3.lineHeight};
    letter-spacing: ${styles2.text.h3.letterSpacing};
    color: ${styles2.color2.textHeading};
    margin-bottom: 10px;
    ` : " "};
  ${result ? `
      &::before {
        content: 'Resultat';
        display: block;
        color: ${styles2.color2.textHeading};
        opacity: 0.75;
        font-size: ${styles2.text.subHeading.fontSize};
        font-weight: ${styles2.text.subHeading.fontWeight};
        line-height: ${styles2.text.subHeading.lineHeight};
        letter-spacing: ${styles2.text.subHeading.letterSpacing};
        text-transform: ${styles2.text.subHeading.textTransform};
        margin-bottom: ${styles2.padding.xxSmall};
      }
    ` : " "};
  @media screen and (max-width: 700px) {
    font-size: ${small ? "0.9rem" : "30px"};
  }
  &:last-child {
    margin-bottom: 0;
  }
`}
  `
);
var H2 = inject_styles_default(
  import_styled_components.default.h2`
    ${({ styles: styles2, small }) => `
  font-family: ${styles2.font.headline};
  font-size: ${styles2.text.h2.fontSize};
  font-weight: ${styles2.text.h2.fontWeight};
  line-height: ${styles2.text.h2.lineHeight};
  letter-spacing: ${styles2.text.h2.letterSpacing};
  text-wrap: balance;
  margin: 0 0 ${styles2.padding.small};
  color: ${styles2.color2.textHeading};
  ${small && `
    font-size: ${styles2.text.subHeading.fontSize};
    font-weight: ${styles2.text.subHeading.fontWeight};
    line-height: ${styles2.text.subHeading.lineHeight};
    letter-spacing: ${styles2.text.subHeading.letterSpacing};
    text-transform: ${styles2.text.subHeading.textTransform};
    opacity: 0.75;
  `}
`}
  `
);
var H3 = inject_styles_default(
  import_styled_components.default.h3`
    ${({ styles: styles2 }) => `
  font-style: normal;
  font-family: ${styles2.font.headline};
  font-size: ${styles2.text.h3.fontSize};
  font-weight: ${styles2.text.h3.fontWeight};
  line-height: ${styles2.text.h3.lineHeight};
  letter-spacing: ${styles2.text.h3.letterSpacing};
  text-wrap: balance;
  margin: 0 0 ${styles2.padding.small};
  color: ${styles2.color2.textHeading};
`}
  `
);
var H4 = inject_styles_default(
  import_styled_components.default.h4`
    ${({ styles: styles2 }) => `
  font-family: ${styles2.font.body};
  font-size: ${styles2.text.subHeading.fontSize};
  font-weight: ${styles2.text.subHeading.fontWeight};
  line-height: ${styles2.text.subHeading.lineHeight};
  letter-spacing: ${styles2.text.subHeading.letterSpacing};
  text-transform: ${styles2.text.subHeading.textTransform};
  text-wrap: balance;
  margin: 0 0 6px;
`}
  `
);

// primitives/Paragraphs.ts
var Paragraphs_exports = {};
__export(Paragraphs_exports, {
  Lead: () => Lead,
  P: () => P
});
var import_styled_components2 = __toESM(require("styled-components"));
var P = inject_styles_default(import_styled_components2.default.p`${({ styles: styles2 }) => `
  font-family: ${styles2.font.body};
  font-size: ${styles2.text.body.fontSize};
  font-weight: ${styles2.text.body.fontWeight};
  line-height: ${styles2.text.body.lineHeight};
  letter-spacing: ${styles2.text.body.letterSpacing};
  margin: 0 0 ${styles2.padding.large};
  max-width: 600px;
`}`);
var Lead = inject_styles_default(import_styled_components2.default.div`${({ styles: styles2 }) => `
  font-family: ${styles2.font.body};
  font-size: ${styles2.text.lead.fontSize};
  font-weight: ${styles2.text.lead.fontWeight};
  line-height: ${styles2.text.lead.lineHeight};
  letter-spacing: ${styles2.text.lead.letterSpacing};
  margin: 0;
  margin-bottom: ${styles2.padding.large};
  color: ${styles2.color2.textDark};
  h3,
  h4 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
`}`);

// primitives/Button.ts
var Button_exports = {};
__export(Button_exports, {
  MainButton: () => MainButton,
  NavButton: () => NavButton,
  SecondaryButton: () => SecondaryButton,
  SmallButton: () => SmallButton
});
var import_styled_components3 = __toESM(require("styled-components"));
var MainButton = inject_styles_default(import_styled_components3.default.button`${({ styles: styles2, disabled, copied }) => `
  padding: 16px ${styles2.padding.large};
  cursor: pointer;
  user-select: none;
  border: none;
  border-radius: 0;
  appearance: none;
  margin-bottom: 0;
  position: relative;
  background: ${styles2.color2.primary};
  border-radius: ${styles2.borderRadius.small};
  font-family: ${styles2.font.body};
  font-size: ${styles2.text.body.fontSize};
  font-weight: ${styles2.text.body.boldWeight};
  line-height: ${styles2.text.body.lineHeight};
  letter-spacing: ${styles2.text.body.letterSpacing};
  color: ${styles2.color2.textWhite};
  transition: background 200ms ${styles2.easing.easeOut};
  &:hover, &:focus {
    background: ${styles2.color2.primaryLight};
    color: ${styles2.color2.textWhite};
  }
  &:active {
    background: ${styles2.color2.primaryXLight};
    color: ${styles2.color2.textWhite};
  }
  &:focus {
    outline-offset: 2px;
  }
  ${copied ? `
      background: ${styles2.color2.positive};
      &:hover {
        background: ${styles2.color2.positive};
      }
      &:before {
        content: "\\2713  ";
      }
      ` : ""}
  
  ${disabled ? `
    cursor: default;
    background: ${styles2.color2.secondaryLight};
    color: white;
    
    &:hover {
      background: ${styles2.color2.secondaryLight};
      color: white;
    }` : ""}

  &:not(:last-child) {
    margin-bottom:  ${styles2.padding.xSmall}
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
  @media print {
      display none;
  }
`}`);
var SecondaryButton = inject_styles_default(import_styled_components3.default.button`${({ styles: styles2 }) => `
  padding: 16px ${styles2.padding.large};
  cursor: pointer;
  user-select: none;
  border: none;
  border-radius: 0;
  appearance: none;
  margin-bottom: 0;
  position: relative;
  background: transparent;
  border-radius: ${styles2.borderRadius.small};
  font-family: ${styles2.font.body};
  font-size: ${styles2.text.body.fontSize};
  font-weight: ${styles2.text.body.boldWeight};
  line-height: ${styles2.text.body.lineHeight};
  letter-spacing: ${styles2.text.body.letterSpacing};
  color: ${styles2.color2.link};
  border: 1px solid ${styles2.color2.secondaryLight};
  transition: background 200ms ${styles2.easing.easeOut};
  &:hover, &:focus {
    background: ${styles2.color2.secondaryXLight};
    color: ${styles2.color2.link};
  }
  &:active {
    background: ${styles2.color2.secondaryLight};
  }
  &:focus {
    outline-offset: 2px;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
  @media print {
      display none;
  }
  &:not(:last-child) {
    margin-bottom:  ${styles2.padding.xSmall}
  }
`}`);
var SmallButton = inject_styles_default(import_styled_components3.default.button`${({ styles: styles2, disabled }) => `
  position: relative;
  appearance: none;
  font-family: ${styles2.font.body};
  font-size: ${styles2.text.body.fontSize};
  font-weight: ${styles2.text.body.fontWeight};
  line-height: ${styles2.text.body.lineHeight};
  letter-spacing: ${styles2.text.body.letterSpacing};
  background: none;
  color: ${styles2.color2.link};
  text-decoration: underline;
  cursor: pointer;
  border: 0 none;
  padding: ${styles2.padding.xxSmall} ${styles2.padding.xSmall};
  margin: 0 auto;
  margin-bottom: 10px;
  
  &:hover, &:focus {
    text-decoration: none;
    background: transparent;
    color: ${styles2.color2.link};
  }

  ${disabled ? `
    cursor: default;
    opacity: 0.5;
    color: ${styles2.color2.textDark};
    text-decoration: none;
    ` : ""}

  @media print {
      display none;
  }
`}`);
var NavButton = inject_styles_default(import_styled_components3.default.button`${({ styles: styles2, next }) => `
  width: auto;
  padding: ${styles2.padding.small} ${styles2.padding.large};
  cursor: pointer;
  user-select: none;
  border: none;
  border-radius: 0;
  appearance: none;
  margin-bottom: 0;
  position: relative;
  background: ${styles2.color2.primary};
  border-radius: ${styles2.borderRadius.small};
  font-family: ${styles2.font.body};
  font-size: ${styles2.text.body.fontSize};
  font-weight: ${styles2.text.body.boldWeight};
  line-height: ${styles2.text.body.lineHeight};
  letter-spacing: ${styles2.text.body.letterSpacing};
  color: ${styles2.color2.textWhite};
  transition: background 200ms ${styles2.easing.easeOut};
  &:hover, &:focus {
    background: ${styles2.color2.primaryLight};
    color: ${styles2.color2.textWhite};
  }
  &:active {
    background: ${styles2.color2.primaryXLight};
  }
  &:focus {
    outline-offset: 2px;
  }
  &:before,
  &:after {
    content: " ";
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    vertical-align: middle;
    transform: ${next ? "rotate(45deg)" : "rotate(-135deg)"};
    border: 2px solid ${styles2.color2.textWhite};
    border-width: 2px 2px 0 0;
  }
  &:before {
    display: ${next ? "none" : "inline-block"};
    margin-right: 1em;
  }
  &:after {
    display: ${next ? "inline-block" : "none"};
    margin-left: 1em;
  }
  &:hover::before,
  &:focus::before,
  &:hover::after,
  &:focus::after {
    animation: ${next ? "pushnext" : "pushprev"} 0.8s linear
      infinite;
  }
  @keyframes pushnext {
    0% {
      transform: rotate(45deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(45deg) translate3d(2px, -2px, 0);
    }
    100% {
      transform: rotate(45deg) translate3d(0, 0, 0);
    }
  }
  @keyframes pushprev {
    0% {
      transform: rotate(-135deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-135deg) translate3d(-2px, 2px, 0);
    }
    100% {
      transform: rotate(-135deg) translate3d(0, 0, 0);
    }
  }
`}`);

// primitives/ModalBox.ts
var import_styled_components4 = __toESM(require("styled-components"));
var ModalBox = inject_styles_default(import_styled_components4.default.div`${({ styles: styles2 }) => `
  display: block;
  max-width: ${styles2.size.blockWidth};
  background: ${styles2.color2.sectionBackground};
  border-radius: ${styles2.borderRadius.large};
  padding: ${styles2.padding.xLarge};
  animation: modalIn 1000ms ${styles2.easing.easeOut};
  > button:not(:last-child) {
    margin-right: ${styles2.padding.small};
  }
  @media screen and (max-width: 400px) {
    padding: ${styles2.padding.xLarge} ${styles2.padding.large};
  }
  @keyframes modalIn {
    0% { opacity: 0; transform: translateY(2em); }
  }
  `}`);
var ModalBox_default = ModalBox;

// components/helper/Modal.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var customStyle = {
  overlay: {
    position: "fixed",
    zIndex: "1002",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 48, 69, 0.4)",
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll"
  },
  content: {
    position: "static",
    inset: "0",
    overflow: "visible",
    background: "transparent",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    outline: "none"
  }
};
function Modal(props) {
  const [showModal, setShowModal] = (0, import_react3.useState)(true);
  const handleCloseModal = () => setShowModal(false);
  const handleRestart = () => {
    setShowModal(false);
    setTimeout(() => {
      props.resetData();
      props.showIntro();
    }, 0);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react_modal.default,
    {
      aria: {
        labelledby: "heading",
        describedby: "full_description"
      },
      ariaHideApp: false,
      isOpen: showModal && Object.keys(props.data).length !== 0,
      role: "dialog",
      shouldCloseOnEsc: true,
      onRequestClose: handleCloseModal,
      style: customStyle,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(ModalBox_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(H1, { id: "heading", children: "Vil du fortsette der du slapp?" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Lead, { id: "full_description", children: "Veiviseren husker svarene fra ditt forrige bes\xF8k." }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MainButton, { type: "button", onClick: handleCloseModal, children: "Fortsett" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SecondaryButton, { type: "button", onClick: handleRestart, children: "Start p\xE5 nytt" })
      ] })
    }
  );
}
var Modal_default = (0, import_react_redux.connect)(
  (state) => ({ data: state[NAME] }),
  (dispatch) => (0, import_redux.bindActionCreators)({ resetData }, dispatch)
)(Modal);

// utils/selectors.ts
var import_get7 = __toESM(require("lodash/get"));
function getNodeErrors(node) {
  const errors = __spreadValues({ validation: {}, disabled: [] }, node.errors);
  return (Array.isArray(errors.disabled) ? errors.disabled.length : 0) + (errors.required ? 1 : 0) + (errors.validation.error ? 1 : 0) + (hasProperty(node, "children") ? (node.children || []).reduce(
    (sum, child) => sum + getNodeErrors(child),
    0
  ) : 0);
}
function getErrorPages(schema, state) {
  const pages = reduceWizard(schema, state);
  return pages.reduce((res, node) => {
    var _a, _b;
    const { type } = node;
    const id = hasProperty(node, "id") ? node.id : void 0;
    const children = hasProperty(node, "children") ? node.children : [];
    const heading = hasProperty(node, "heading") ? node.heading : void 0;
    return [
      ...res,
      {
        id,
        type,
        heading,
        errorNodes: (_b = (_a = children == null ? void 0 : children.filter((node2) => hasProperty(node2, "property"))) == null ? void 0 : _a.filter((node2) => getNodeErrors(node2) > 0)) == null ? void 0 : _b.map((node2) => ({
          property: (0, import_get7.default)(node2, "property"),
          heading: (0, import_get7.default)(node2, "heading"),
          errors: (0, import_get7.default)(node2, "errors")
        }))
      }
    ];
  }, []).filter(({ errorNodes }) => errorNodes == null ? void 0 : errorNodes.length);
}
function getTitle(state, { meta: { title } }, translations) {
  const currentLanguage = getCurrentLanguage(state, null);
  if (!currentLanguage) {
    return title;
  }
  return (0, import_get7.default)(translations, [currentLanguage, "meta", "title"], title);
}
function getNodeTitles(schema, translations, state) {
  const translation = getTranslation(state, translations);
  return schema.reduce(
    (res, node) => __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, res), hasProperty(node, "id") ? {
      [node.id]: node.id && (0, import_get7.default)(translation, `['${node.id}'].heading`) || (0, import_get7.default)(node, "heading", node.id)
    } : {}), hasProperty(node, "children") ? getNodeTitles(node.children || [], translations, state) : {}), hasProperty(node, "branches") ? node.branches.reduce(
      (branchesRes, branch) => __spreadValues(__spreadValues({}, branchesRes), getNodeTitles(branch.children, translations, state)),
      {}
    ) : {}),
    {}
  );
}

// utils/get-pages.ts
var import_get8 = __toESM(require("lodash/get"));
function getPages(reducedSchema, nodeTitles) {
  return reducedSchema.map((node) => {
    const errors = hasProperty(node, "children") ? node.children.reduce((res, node2) => res + getNodeErrors(node2), 0) : 0;
    return __spreadProps(__spreadValues({}, node), {
      errors,
      heading: (0, import_get8.default)(
        nodeTitles,
        node.id,
        hasProperty(node, "heading") ? node.heading : void 0
      ),
      completed: !errors
    });
  });
}

// components/Nav.tsx
var import_react4 = require("react");

// primitives/index.ts
var primitives_exports = {};
__export(primitives_exports, {
  Block: () => Block_exports,
  Button: () => Button_exports,
  Errors: () => Errors_exports,
  Export: () => Export,
  Figure: () => Figure_exports,
  Grid: () => grid_exports,
  Heading: () => Heading_exports,
  Input: () => Input_exports,
  Label: () => Label_exports,
  NavItem: () => NavItem,
  Paragraphs: () => Paragraphs_exports,
  Title: () => Title,
  ToggleButton: () => ToggleButton,
  Wizard: () => Wizard
});

// primitives/NavItem.ts
var import_styled_components5 = __toESM(require("styled-components"));
var NavItem = inject_styles_default(import_styled_components5.default.a`${({ styles: styles2, active, errors, done }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: ${styles2.borderRadius.small};
  padding: ${styles2.padding.small};
  margin-bottom: ${styles2.padding.xxSmall};
  transition: background 400ms ${styles2.easing.easeOut};
  ${done ? `background: ${styles2.color2.positiveXLight};` : ""}
  ${errors ? `background: ${styles2.color2.errorXLight};` : ""}
  ${active ? `background: ${styles2.color2.secondaryLight};` : ""}
  ${!(done || errors) || active ? `color: ${styles2.color2.link};` : ""}
  ${done ? `color: ${styles2.color2.positive};` : ""}
  ${errors ? `color: ${styles2.color2.error};` : ""}
  &:hover {
    cursor: pointer;
    ${!(active || done || errors) ? `background: ${styles2.color2.secondaryXLight};` : ""}
    ${done ? `background: ${styles2.color2.positiveLight};` : ""}
    ${errors ? `background: ${styles2.color2.errorLight};` : ""}
    ${active ? `background: ${styles2.color2.secondaryLight};` : ""}
    p {
      text-decoration: underline;
    }
  }
  span {
    display: flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    min-width: 12px;
    max-width: 100%;
  }
  p {
    flex-grow: 1;
    font-size: ${styles2.text.body.fontSize};
    font-weight: ${styles2.text.body.fontWeight};
    line-height: ${styles2.text.body.lineHeight};
    letter-spacing: ${styles2.text.body.letterSpacing};
    margin: 0;
    margin-left: ${styles2.padding.small};
  }
  svg {
    display: inline-block;
    flex-shrink: 0;
    width: ${styles2.iconSize.small};
    height: ${styles2.iconSize.small};
    opacity: 0;
    transition: opacity 400ms ${styles2.easing.easeOut};
  }
  &:hover svg {
    opacity: 1;
  }
  ${done || active ? `
      svg {
        opacity: 1;
      }
    ` : ""}

  ${errors ? `
    &::after {
      display: inline-block;
      transform: rotate(-46deg);
      border-color: ${styles2.color2.negative};
    }
  ` : ""}
`}`);

// primitives/Block.ts
var Block_exports = {};
__export(Block_exports, {
  SpecificBlock: () => SpecificBlock,
  TextBlock: () => TextBlock
});
var import_styled_components6 = __toESM(require("styled-components"));
var SpecificBlock = inject_styles_default(
  import_styled_components6.default.div`
    ${({ styles: styles2, debug, grouped, error, groupedSimple, type }) => `
  position: relative;
  padding: ${grouped ? styles2.padding.large : styles2.padding.large} 0;
  ${error ? `background: ${styles2.color2.negativeXLight};` : ""}
  > img:first-child {
    margin-bottom: ${styles2.padding.large};
    width: 100%;
    max-width: ${styles2.size.imageWidth};
  }
  ${debug ? `
  :before {
    content: attr(data-id);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: deeppink;
    color: white;
    font-size: 14px;
    padding: 2px 6px;
  }` : ""} ${groupedSimple ? `
  margin-bottom: 26px;
  padding: 0;
  background: none;
  box-shadow: none;
  &:nth-child(even) {
    background: none;
  }` : " "} ${type === "Table" ? `
  table {
    text-align: center;
    width: 100%;
    font-size: 14px;
    border: 1px solid ${styles2.color2.secondary};
    border-collapse: collapse;
    th {
      font-weight: inherit;
    }
    th, td {
      border: 1px solid ${styles2.color2.secondary};
      padding: 10px;
    }
    th > *,
    td > * {
      vertical-align: middle;
      margin: 0;
      line-height: 1.3;
    }
    td,th {
      ${debug ? `
      :hover {
        position: relative;

        :before {
          content: attr(data-id);
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          background: deeppink;
          color: white;
          font-size: 14px;
          padding: 2px 6px;
        }
      }` : ""}
    }
  }
  ` : " "} 

  @media print {
    page-break-inside: avoid;
  }

`}
  `
);
var TextBlock = inject_styles_default(
  import_styled_components6.default.div`
    ${({ styles: styles2, debug, groupedSimple, printonly, printhide, small }) => `
padding: ${styles2.padding.large} 0 ${styles2.padding.small};
  ${groupedSimple ? "" : `
    padding: 0;
    `};
  width: 100%;
  ${debug ? `
  position: relative;
  :before {
    content: attr(data-id);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: deeppink;
    color: white;
    font-size: 14px;
    padding: 2px 6px;
  }` : ""} 
  p {
    margin: 1em 0;
    line-height: 1.6;
    max-width: 600px;
  }

  ${printonly ? `
    display: none;
    margin-top: 10px;
    padding-top: 0;
    @media print {
      font-size: 12px;
      display: block;
    }` : ""};

  ${printhide ? `
        @media print {
          display: none;
        }` : ""};

  h1 {
    font-family: ${styles2.font.headline};
    font-size: ${small ? styles2.text.h3.fontSize : styles2.text.h1.fontSize};
    font-weight: ${styles2.text.h1.fontWeight};
    line-height: ${styles2.text.h1.lineHeight};
    letter-spacing: ${styles2.text.h1.letterSpacing};
    margin: 0 0 ${styles2.padding.large};
  }

  h2 {
    font-family: ${styles2.font.headline};
    font-size: ${styles2.text.h2.fontSize};
    font-weight: ${styles2.text.h2.fontWeight};
    line-height: ${styles2.text.h2.lineHeight};
    letter-spacing: ${styles2.text.h2.letterSpacing};
    margin: 0 0 ${styles2.padding.small};
  }

  h3 {
    font-family: ${styles2.font.headline};
    font-size: ${styles2.text.h3.fontSize};
    font-weight: ${styles2.text.h3.fontWeight};
    line-height: ${styles2.text.h3.lineHeight};
    letter-spacing: ${styles2.text.h3.letterSpacing};
    margin: 0 0 ${styles2.padding.xSmall};
  }

  h4 {
    font-family: ${styles2.font.body};
    font-size: ${styles2.text.subHeading.fontSize};
    font-weight: ${styles2.text.subHeading.fontWeight};
    line-height: ${styles2.text.subHeading.lineHeight};
    letter-spacing: ${styles2.text.subHeading.letterSpacing};
    text-transform: ${styles2.text.subHeading.textTransform};
    margin: 0 0 ${styles2.padding.xSmall};
  }

  p {
    font-family: ${styles2.font.body};
    font-size: ${styles2.text.body.fontSize};
    font-weight: ${styles2.text.body.fontWeight};
    line-height: ${styles2.text.body.lineHeight};
    letter-spacing: ${styles2.text.body.letterSpacing};
    margin: 0 0 ${styles2.padding.large};
    max-width: 600px;
  }
`}
  `
);

// primitives/Errors.ts
var Errors_exports = {};
__export(Errors_exports, {
  ErrorMessage: () => ErrorMessage
});
var import_styled_components7 = __toESM(require("styled-components"));
var ErrorMessage = inject_styles_default(import_styled_components7.default.div`${({ styles: styles2 }) => `
  display: flex;
  align-items: center;
  font-family: ${styles2.font.body};
  font-size: ${styles2.text.body.fontSize};
  font-weight: ${styles2.text.body.fontWeight};
  line-height: ${styles2.text.body.lineHeight};
  letter-spacing: ${styles2.text.body.letterSpacing};
  color: ${styles2.color2.error};
  margin: ${styles2.padding.small} 0 0;
  animation: messageIn 1000ms ${styles2.easing.easeOut};
  > div {
    display: block;
    margin: 0;
  }
  svg {
    width: ${styles2.iconSize.small};
    height: ${styles2.iconSize.small};
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.5em;
  }
  @keyframes messageIn {
    0% { opacity: 0; transform: translateX(2em); }
  }
`}`);

// primitives/Figure.ts
var Figure_exports = {};
__export(Figure_exports, {
  default: () => Figure_default
});
var import_styled_components8 = __toESM(require("styled-components"));
var Figure = inject_styles_default(import_styled_components8.default.figure`${({ styles: styles2, debug }) => `
  padding: 0;
  position: relative;
  margin: ${styles2.padding.small} 0;
  
  figcaption {
    font-style: ${styles2.text.caption.fontStyle};
    font-size: ${styles2.text.caption.fontSize};
    font-weight: ${styles2.text.caption.fontWeight};
    line-height: ${styles2.text.caption.lineHeight};
    letter-spacing: ${styles2.text.caption.letterSpacing};
  }
  ${debug ? `
  :before {
    content: attr(data-id);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: deeppink;
    color: white;
    font-size: 14px;
    padding: 2px 6px;
  }` : ""}
`}`);
var Figure_default = Figure;

// primitives/grid/index.ts
var grid_exports = {};
__export(grid_exports, {
  Blocks: () => Blocks,
  FocusWrapper: () => FocusWrapper,
  Grid: () => Grid,
  Main: () => Main,
  Nav: () => Nav,
  NavList: () => NavList,
  NavSection: () => NavSection,
  Navigation: () => Navigation,
  Simple: () => Simple
});

// primitives/grid/Nav.ts
var import_styled_components9 = __toESM(require("styled-components"));
var Nav = inject_styles_default(import_styled_components9.default.nav`${({ styles: styles2, tocExpanded }) => `
  width: ${styles2.size.navWidth};
  margin: 0;
  overflow: hidden;
  top: ${styles2.padding.medium};
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: ${styles2.padding.xxSmall};
  border-radius: ${styles2.borderRadius.large};
  button {
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  @media screen and (max-width: 900px) {
    width: ${styles2.size.mobileContentWidth};
    margin: 0 auto;
    position: static;
  }
  @media print {
    display: none;
  }
  ${tocExpanded ? `@media screen and (max-width: 900px) {
    max-height: 0;
    padding: 0;
  }` : ` @media screen and (max-width: 900px) {
    max-height: 1000px;
    margin-bottom: ${styles2.padding.small};
    transition: max-height 0.3s ease-in-out;
  }
  `}
`}`);

// primitives/grid/NavList.ts
var import_styled_components10 = __toESM(require("styled-components"));
var NavList = inject_styles_default(import_styled_components10.default.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`);

// primitives/grid/NavSection.ts
var import_styled_components11 = __toESM(require("styled-components"));
var NavSection = inject_styles_default(import_styled_components11.default.div`${({ styles: styles2, large, xLarge }) => `
  background: ${styles2.color2.sectionBackground};
  ${!(xLarge || large) ? `padding: ${styles2.padding.small};` : ""}
  ${large ? `padding: ${styles2.padding.large};` : ""}
  ${xLarge ? `
  padding: ${styles2.padding.xLarge};
  @media screen and (max-width: 900px) {
    padding: ${styles2.padding.large};
  }
  ` : ""}
`}`);

// primitives/grid/Blocks.ts
var import_styled_components12 = __toESM(require("styled-components"));
var Blocks = inject_styles_default(import_styled_components12.default.div`${({ styles: styles2 }) => `
  width: 100%;
  margin-bottom: ${styles2.padding.medium};
`}`);

// primitives/grid/Grid.ts
var import_styled_components13 = __toESM(require("styled-components"));
var Grid = inject_styles_default(import_styled_components13.default.div`${({ styles: styles2 }) => `
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: ${styles2.size.pageWidth};
  margin: 0 auto;
  @media screen and (max-width: 900px) {
    display: block;
  }
  @media print {
    display: block;
  }
`}`);

// primitives/grid/Main.ts
var import_styled_components14 = __toESM(require("styled-components"));
var Main = inject_styles_default(import_styled_components14.default.main`${({ styles: styles2, debug }) => `
  background: ${styles2.color2.sectionBackground};
  padding: ${styles2.padding.xLarge};
  margin-left: ${styles2.padding.large};
  border-radius: ${styles2.borderRadius.large};
  overflow: hidden;

  @media print {
    margin: 0 auto;
    background: none;
  }

  h2 {
    margin-top: 0;
  }

  ${debug ? `
  position: relative;

  :before {
    content: attr(data-id);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: deeppink;
    color: white;
    font-size: 14px;
    padding: 2px 6px;
  }` : ""} 
  
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: ${styles2.padding.xLarge} ${styles2.padding.medium};
    margin: 0 auto;
  }

`}`);

// primitives/grid/Navigation.ts
var import_styled_components15 = __toESM(require("styled-components"));
var Navigation = inject_styles_default(import_styled_components15.default.main`
  display: flex;
  margin-bottom: 50px;
  max-width: ${({ styles: styles2 }) => styles2.size.blockWidth};
`);

// primitives/grid/Simple.ts
var import_styled_components16 = __toESM(require("styled-components"));
var Simple = inject_styles_default(import_styled_components16.default.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  ${({ padItems }) => padItems ? `
    > * {
      margin-right: 1px !important;

      &:last-child { margin-right: 0 !important; }
    }
` : ""}

  @media screen and (max-width: 900px) {
    display: block;
  }

  @media print {
    display: block;
  }
`);

// primitives/grid/FocusWrapper.ts
var import_styled_components17 = __toESM(require("styled-components"));
var FocusWrapper = inject_styles_default(import_styled_components17.default.div`
  display: block;
  width: 100%;
  &:focus {
    outline: none;
  }
`);

// primitives/Input.ts
var Input_exports = {};
__export(Input_exports, {
  Checkbox: () => Checkbox,
  CheckboxResultDisplay: () => CheckboxResultDisplay,
  NumberInput: () => NumberInput,
  Radio: () => Radio,
  SelectWrapper: () => SelectWrapper,
  TextInput: () => TextInput,
  Textarea: () => Textarea
});
var import_styled_components18 = __toESM(require("styled-components"));
var Checkbox = inject_styles_default(import_styled_components18.default.input.attrs({
  type: "checkbox"
})`${({ styles: styles2 }) => `
  position: absolute;
  opacity: 0;
  z-index: -1;
  line-height: 1.4;

  + label {
    position: relative;
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    padding: ${styles2.padding.medium};
    border: 1px solid ${styles2.color2.secondaryLight};
    border-radius: ${styles2.borderRadius.small};
    transition: all 200ms ${styles2.easing.easeOut};
    font-size: ${styles2.text.body.fontSize};
    font-weight: ${styles2.text.body.fontWeight};
    line-height: ${styles2.text.body.lineHeight};
    letter-spacing: ${styles2.text.body.letterSpacing};
    color: ${styles2.color2.textDark};
    
    &:before {
      content: " ";
      display: inline-block;
      vertical-align: middle;
      min-width: 18px;
      width: 18px;
      height: 18px;
      margin-top: 4px;
      background: transparent;
      margin-right: ${styles2.padding.small};
      border: 1px solid ${styles2.color2.primary};
      border-radius: ${styles2.borderRadius.small};
      transition: all 200ms ${styles2.easing.easeOut};
    }

    > div {
      flex: 1;
      font-size: ${styles2.text.label.fontSize};
      font-weight: ${styles2.text.label.fontWeight};
      line-height: ${styles2.text.label.lineHeight};
      letter-spacing: ${styles2.text.label.letterSpacing};
      color: ${styles2.color2.textDark};
    }

    div:not(:last-child) {
      margin-right: ${styles2.padding.large};
    }
    img {
      width: 25%;
      max-width: 200px;
    }
    p {
      margin-bottom: 0;
    }
    h3 {
      font-size: ${styles2.text.lead.fontSize};
      font-weight: ${styles2.text.lead.boldWeight};
      line-height: ${styles2.text.lead.lineHeight};
      letter-spacing: ${styles2.text.lead.letterSpacing};
      margin-bottom: 0;
    }
  }

  :disabled + label {
    cursor: default;
    opacity: 0.4;
  }

  :not(:disabled) {
    + label {
      &:hover {
        background: ${styles2.color2.secondaryXLight};
      }
    }
    &:focus + label {
      background: ${styles2.color2.secondaryXLight};
    }
    &:focus-visible + label {
      outline: 1px solid ${styles2.color2.outline};
    }
    &:checked + label:after {
      content: " ";
      position: absolute;
      left: calc(${styles2.padding.medium} + 5px);
      top: calc(${styles2.padding.medium} + 9px);
      width: 8px;
      height: 4px;
      transform: rotate(-46deg);
      border-left: 3px solid ${styles2.color2.primary};
      border-bottom: 3px solid ${styles2.color2.primary};
    }
    &:checked + label {
      background: ${styles2.color2.secondaryLight};
    }
    &:checked:focus + label {
      background: ${styles2.color2.secondaryXLight};
    }
  }
`}`);
var CheckboxResultDisplay = inject_styles_default(import_styled_components18.default.input.attrs({
  type: "checkbox"
})`${({ styles: styles2 }) => `
  position: absolute;
  opacity: 0;
  z-index: -1;
  line-height: 1.4;

  + label {
    position: relative;
    display: flex;
    align-items: flex-start;
    margin-top: 0;
    padding: ${styles2.padding.xxSmall} 0;
    font-size: ${styles2.text.body.fontSize};
    font-weight: ${styles2.text.body.boldWeight};
    line-height: ${styles2.text.body.lineHeight};
    letter-spacing: ${styles2.text.body.letterSpacing};

    &:before {
      content: " ";
      display: inline-block;
      vertical-align: middle;
      min-width: 18px;
      width: 218x;
      height: 18px;
      margin-right: ${styles2.padding.xxSmall};
    }

    > div {
      flex: 1;
      font-size: ${styles2.text.label.fontSize};
      font-weight: ${styles2.text.label.fontWeight};
      line-height: ${styles2.text.label.lineHeight};
      letter-spacing: ${styles2.text.label.letterSpacing};
      color: ${styles2.color2.textDark};
    }

    div:not(:last-child) {
      margin-right: ${styles2.padding.large};
    }
    img {
      width: 25%;
      max-width: 200px;
    }
    p {
      margin-bottom: 0;
    }
    h3 {
      font-size: ${styles2.text.lead.fontSize};
      font-weight: ${styles2.text.lead.boldWeight};
      line-height: ${styles2.text.lead.lineHeight};
      letter-spacing: ${styles2.text.lead.letterSpacing};
      font-style: normal;
    }
  }

  &:checked + label:after {
    content: " ";
    position: absolute;
    left: 4px;
    top: calc(${styles2.padding.xxSmall} + 5px);
    width: 8px;
    height: 4px;
    transform: rotate(-46deg);
    border-left: 3px solid ${styles2.color2.primary};
    border-bottom: 3px solid ${styles2.color2.primary};
  }

  @media screen and (max-width: 900px) {
    + label {
      flex-wrap: wrap;
      &::before {
      }
      div {
        flex: 1;
        div {
          margin-right: 0;
        }
      }
      img {
        width: 100%;
        margin: 20px auto 0;
        display: block;
        flex: 0 0 100%;
      }
    }
  }
  @media print {
    + label { 
      border: none;
      padding: 0;
    }
  }
`}`);
var Radio = inject_styles_default(import_styled_components18.default.input.attrs({
  type: "radio"
})`${({ styles: styles2 }) => `
  position: absolute;
  opacity: 0;
  z-index: -1;
  line-height: 1.4;

  + label {
    position: relative;
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    padding: ${styles2.padding.medium};
    border: 1px solid ${styles2.color2.secondaryLight};
    border-radius: ${styles2.borderRadius.small};
    transition: all 200ms ${styles2.easing.easeOut};

    &:before {
      content: " ";
      display: inline-block;
      vertical-align: middle;
      min-width: 18px;
      width: 18px;
      height: 18px;
      margin-top: 3px;
      background: transparent;
      margin-right: ${styles2.padding.small};
      border: 1px solid ${styles2.color2.primary};
      border-radius: 50%;
      transition: all 200ms ${styles2.easing.easeOut};
    }

    > div {
      flex: 1;
      font-size: ${styles2.text.label.fontSize};
      font-weight: ${styles2.text.label.fontWeight};
      line-height: ${styles2.text.label.lineHeight};
      letter-spacing: ${styles2.text.label.letterSpacing};
      color: ${styles2.color2.textDark};
    }
    
    div:not(:last-child) {
      margin-right: ${styles2.padding.large};
    }
    img {
      width: 25%;
      max-width: 200px;
      background: ${styles2.color2.secondaryXLight};
    }
    p {
      margin-bottom: 0;
    }
    h3 {
      font-size: ${styles2.text.lead.fontSize};
      font-weight: ${styles2.text.lead.boldWeight};
      line-height: ${styles2.text.lead.lineHeight};
      letter-spacing: ${styles2.text.lead.letterSpacing};
      font-style: normal;
    }
  }

  :disabled + label {
    opacity: 0.4;
  }

  :not(:disabled) {
    + label {
      &:hover {
        background: ${styles2.color2.secondaryXLight};
      }
    }
    &:focus + label {
      background: ${styles2.color2.secondaryXLight};
    }
    &:focus-visible + label {
      outline: 1px solid ${styles2.color2.outline};
    }
    &:checked + label:after {
      content: " ";
      position: absolute;
      left: calc(${styles2.padding.medium} + 5px);
      top: calc(${styles2.padding.medium} + 8px);
      width: 10px;
      height: 10px;
      transform: rotate(-46deg);
      border-radius: 50%;
      background: ${styles2.color2.primary};
    }
    &:checked + label {
      background: ${styles2.color2.secondaryLight};
    }
  }

  @media print {
    + label { 
      border: none;
      padding: 0;
    }
  }
`}`);
var NumberInput = inject_styles_default(import_styled_components18.default.input`${({ styles: styles2, validation }) => `
  font-family: inherit;
  font-size: ${styles2.text.label.fontSize} !important;
  font-weight: ${styles2.text.label.fontWeight};
  line-height: ${styles2.text.label.lineHeight};
  letter-spacing: ${styles2.text.label.letterSpacing};
  text-align: right;
  padding: ${styles2.padding.small} !important;
  width: auto !important;
  min-width: 20%;
  margin-right: 0.5em;
  border: 1px solid ${(validation == null ? void 0 : validation.error) ? styles2.color2.error : styles2.color2.outline} !important;
  border-radius: ${styles2.borderRadius.small};
  &::placeholder {
    font-color: inherit;
    opacity: 0.75;
  }
  &:focus {
    outline: 3px solid ${styles2.color2.focus};
  }
`}`);
var TextInput = inject_styles_default(import_styled_components18.default.input`${({ styles: styles2, validation }) => `
  font-family: inherit;
  font-size: ${styles2.text.lead.fontSize} !important;
  font-weight: ${styles2.text.lead.fontWeight};
  line-height: ${styles2.text.lead.lineHeight};
  letter-spacing: ${styles2.text.lead.letterSpacing};
  padding: ${styles2.padding.small} !important;
  width: auto;
  min-width: 20%;
  margin-right: 0.5em;
  border: 1px solid ${(validation == null ? void 0 : validation.error) ? styles2.color2.error : styles2.color2.outline} !important;
  
  border-radius: ${styles2.borderRadius.small};
  &::placeholder {
    font-color: inherit;
    opacity: 0.75;
  }
  &:focus {
    outline: 3px solid ${styles2.color2.focus};
  }
  @media screen and (max-width: 360px) {
    width: 100%;
  }
`}`);
var Textarea = inject_styles_default(import_styled_components18.default.textarea`${({ styles: styles2 }) => `
  font-family: inherit;
  font-size: ${styles2.text.body.fontSize};
  font-weight: ${styles2.text.body.fontWeight};
  line-height: ${styles2.text.body.lineHeight};
  letter-spacing: ${styles2.text.body.letterSpacing};
  padding: ${styles2.padding.small} ${styles2.padding.small};
  min-height: 6em;
  width: 100% !important;
  min-width: 20%;
  margin-right: 0.5em;
  border: 1px solid ${styles2.color2.outline};
  border-radius: ${styles2.borderRadius.small};
  &::placeholder {
    font-color: inherit;
    opacity: 0.75;
  }
  &:focus {
    outline: 3px solid ${styles2.color2.focus};
  }
`}`);
var SelectWrapper = inject_styles_default(import_styled_components18.default.div`${({ styles: styles2 }) => `
  position: relative;
  width: fit-content;
  max-width: 100%;
  &::before {
    content: " ";
    pointer-events: none;
    position: absolute;
    right: 16px;
    top: 50%;
    width: 8px;
    height: 8px;
    transform: translateY(-4px) rotate(-45deg);
    border-left: 2px solid ${styles2.color2.primary};
    border-bottom: 2px solid ${styles2.color2.primary};
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    width: auto;
    max-width: 100%;
    font-family: inherit;
    font-size: ${styles2.text.lead.fontSize};
    font-weight: ${styles2.text.lead.fontWeight};
    line-height: ${styles2.text.lead.lineHeight};
    letter-spacing: ${styles2.text.lead.letterSpacing};
    padding: ${styles2.padding.small} ${styles2.padding.small};
    padding-right: 40px;
    margin-bottom: 0;
    border: 1px solid ${styles2.color2.primary};
    border-radius: ${styles2.borderRadius.small};
    background: transparent;
    transition: background 200ms ${styles2.easing.easeOut};
    &:hover, &:focus {
      background: ${styles2.color2.secondaryXLight};
    }
    &:focus {
      outline-color: ${styles2.color2.outline};
    }
  }
`}`);

// primitives/Label.ts
var Label_exports = {};
__export(Label_exports, {
  Label: () => Label,
  SRLabel: () => SRLabel
});
var import_styled_components19 = __toESM(require("styled-components"));
var Label = inject_styles_default(import_styled_components19.default.label`${({ styles: styles2, debug, warning }) => `
  display: block;
  position: relative;
  background: ${warning ? "rgba(255, 0, 0, 0.05)" : "transparent"};
  margin-bottom: ${styles2.padding.xSmall} !important; 
  ${debug ? `
  > div {
    :before {
      content: attr(data-id);
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      background: deeppink;
      color: white;
      font-size: 14px;
      padding: 2px 6px;
    }
  }` : ""};
`}`);
var SRLabel = inject_styles_default(import_styled_components19.default.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`);

// primitives/Title.ts
var import_styled_components20 = __toESM(require("styled-components"));
var Title = inject_styles_default(import_styled_components20.default.div`${({ styles: styles2 }) => `
  cursor: pointer;
  font-family: ${styles2.font.headline};
  font-size: ${styles2.text.h3.fontSize};
  font-weight: ${styles2.text.h3.fontWeight};
  line-height: ${styles2.text.h3.lineHeight};
  letter-spacing: ${styles2.text.h3.letterSpacing};
  color: ${styles2.color2.textHeading};
  margin: 0;
  &::before {
    content: "Veiviser";
    display: block;
    font-family: ${styles2.font.body};
    font-size: ${styles2.text.subHeading.fontSize};
    font-weight: ${styles2.text.subHeading.fontWeight};
    line-height: ${styles2.text.subHeading.lineHeight};
    letter-spacing: ${styles2.text.subHeading.letterSpacing};
    text-transform: ${styles2.text.subHeading.textTransform};
    color: ${styles2.color2.textHeading};
    opacity: 0.75;
    margin-bottom: 0.3em;
  }
`}`);

// primitives/ToggleButton.ts
var import_styled_components21 = __toESM(require("styled-components"));
var ToggleButton = inject_styles_default(import_styled_components21.default.button`${({ styles: styles2, visible }) => `
  width: ${styles2.size.mobileContentWidth};
  margin: 0 auto;
  margin-bottom: ${styles2.padding.small};
  background: transparent;
  color: ${styles2.color2.primary};
  border: 1px solid ${styles2.color2.primary};
  border-radius: ${styles2.borderRadius.small};
  font-size: ${styles2.text.body.fontSize};
  font-weight: ${styles2.text.body.boldWeight};
  line-height: ${styles2.text.body.lineHeight};
  letter-spacing: ${styles2.text.body.letterSpacing};
  padding: ${styles2.padding.small} ${styles2.padding.large};
  cursor: pointer;
  display: ${visible ? "block" : "none"};
  span {
    margin-left: ${styles2.padding.small};
  }
  &:hover,
  &:focus {
    color: ${styles2.color2.link};
    background: ${styles2.color2.secondaryXLight};
  }
  @media screen and (max-width: 900px) {
    display: block;
  }
`}`);

// primitives/Export.ts
var import_styled_components22 = __toESM(require("styled-components"));
var Export = inject_styles_default(import_styled_components22.default.div`
  @media print {
    display: none;
  }
`);

// primitives/Wizard.ts
var import_styled_components23 = __toESM(require("styled-components"));
var Wizard = inject_styles_default(import_styled_components23.default.div`${({ styles: styles2, noBackground }) => `
  background-color:${noBackground ? "inherit" : styles2.color2.pageBackground};
  font-family: ${styles2.font.body};
  padding: ${noBackground ? "0" : styles2.padding.medium};
  font-size: ${styles2.text.body.fontSize};
  font-weight: ${styles2.text.body.fontWeight};
  line-height: ${styles2.text.body.lineHeight};
  letter-spacing: ${styles2.text.body.letterSpacing};
  strong {
    font-weight: ${styles2.text.body.boldWeight};
  }
  * {
    box-sizing: border-box;
    &:focus {
      outline-color: ${styles2.color2.outline};
    }
  }
  img {
    max-width: 100%;
  }
  hr {
    border: none;
    border-bottom: ${styles2.padding.xxSmall} solid ${styles2.color2.secondaryXLight};
    margin: ${styles2.padding.xLarge} 0;
  }
  a:not(class) {
    font-size: ${styles2.text.body.fontSize};
    font-weight: ${styles2.text.body.fontWeight};
    line-height: ${styles2.text.body.lineHeight};
    letter-spacing: ${styles2.text.body.letterSpacing};
    color: ${styles2.color2.link};
    &:hover {
      color: ${styles2.color2.link};
      text-decoration: none;
    }
  }
  @media screen and (max-width: 900px) {
    padding: ${styles2.padding.xSmall};
  }
  @media print {
    background-color: white;
  }
`}`);

// components/graphics/CheckIcon.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function CheckIcon({
  fill = styles_default.color2.positive
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-label": "Ferdig", style: { fill }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("mask", { id: "mask0_1089_7430", style: { maskType: "alpha" }, maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "20", height: "20", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { width: "20", height: "20" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("g", { mask: "url(#mask0_1089_7430)", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M5.71427 8.57149L3.80951 10.4762L8.57141 15.2382L17.1428 6.66672L15.2381 4.76196L8.57141 11.4286L5.71427 8.57149Z" }) })
  ] });
}

// components/NavItem.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function NavItem2({ active = false, done = false, errors = false, heading = "TITLE MISSING", id, index, setPage }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    NavItem,
    {
      active,
      done,
      errors,
      href: "#",
      onClick: (e) => {
        e.preventDefault();
        setPage(id);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: index }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: heading }),
        done && !active && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CheckIcon, {})
      ]
    }
  );
}

// components/NavReset.tsx
var import_react_redux2 = require("react-redux");
var import_jsx_runtime6 = require("react/jsx-runtime");
function NavReset(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    SecondaryButton,
    {
      type: "button",
      onClick: () => {
        if (confirm("Sikker p\xE5 at du vil slette alle svarene dine?")) {
          props.resetData();
          props.showIntro();
        }
      },
      children: "Start p\xE5 nytt"
    }
  );
}
var NavReset_default = (0, import_react_redux2.connect)(null, { resetData })(NavReset);

// components/NavResult.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function NavResult({ setPage, id, active = false }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    MainButton,
    {
      type: "button",
      "data-id": id,
      active,
      onClick: () => setPage(id),
      children: "Vis resultat"
    }
  );
}

// components/LanguageSelector.tsx
var import_react_redux3 = require("react-redux");
var import_values = __toESM(require("lodash/values"));
var import_jsx_runtime8 = require("react/jsx-runtime");
function LanguageSelector({ translations: translationsObject, currentLanguage, setLanguage: setLanguage2 }) {
  const handleLanguageSelect = (languageKey) => () => setLanguage2(languageKey);
  const translations = (0, import_values.default)(translationsObject);
  if (!translations || !translations.length) {
    return null;
  }
  if (translations.length === 1 && translationsObject.no) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Simple, { padItems: true, children: [
    /**
     * If we have translations, but no norwegian one we need
     * to add it in order to have a way to select the norwegian
     * original
     */
    ...translationsObject.no ? [] : [{ key: "no", name: "Norsk" }],
    ...translations
  ].map(({ key, name }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    SmallButton,
    {
      disabled: key === currentLanguage,
      onClick: handleLanguageSelect(key),
      children: name
    },
    key
  )) });
}
var mapStateToProps = (state) => ({
  currentLanguage: getCurrentLanguage(state)
});
var LanguageSelector_default = (0, import_react_redux3.connect)(mapStateToProps, { setLanguage })(LanguageSelector);

// components/Nav.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Nav2({ heading = "Missing page heading", page: currentPage, setPage, tableOfContents, showIntro, translations }) {
  const [tocExpanded, setTocExpanded] = (0, import_react4.useState)(true);
  const toggleToc = () => setTocExpanded(!tocExpanded);
  const currentIndex = tableOfContents.findIndex((page) => page.id === currentPage);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ToggleButton, { type: "button", onClick: toggleToc, children: tocExpanded ? `${currentIndex + 1} av ${tableOfContents.length} steg` : "Skjul all steg" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(grid_exports.Nav, { tocExpanded, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(grid_exports.NavSection, { large: true, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Title, { onClick: showIntro, children: heading }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(grid_exports.NavSection, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(grid_exports.NavList, { children: tableOfContents.filter((page) => page.type !== "Result").map(
        (page, index) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          NavItem2,
          {
            id: page.id,
            index: index + 1,
            heading: page.heading,
            setPage,
            done: page.completed,
            active: page.id === currentPage
          },
          page.id
        ) })
      ) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(grid_exports.NavSection, { large: true, children: [
        tableOfContents.filter((page) => page.type === "Result").map(
          (page) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            NavResult,
            {
              id: page.id,
              setPage,
              active: page.id === currentPage
            },
            page.id
          )
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(NavReset_default, { showIntro })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(LanguageSelector_default, { translations })
    ] })
  ] });
}

// components/blocks/Block.tsx
var import_redux2 = require("redux");
var import_react_redux4 = require("react-redux");

// primitives/Fieldset.ts
var import_styled_components24 = __toESM(require("styled-components"));
var Fieldset = inject_styles_default(import_styled_components24.default.fieldset`
  border: 0;
  padding: 0;
  margin: 0;
`);
var Fieldset_default = Fieldset;

// primitives/Legend.ts
var import_styled_components25 = __toESM(require("styled-components"));
var SRLegend = inject_styles_default(import_styled_components25.default.legend`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`);
var Legend_default = SRLegend;

// primitives/OptionWrapper.ts
var import_styled_components26 = __toESM(require("styled-components"));
var OptionWrapper = inject_styles_default(import_styled_components26.default.div`
  ${(props) => props.grid ? `
    display: flex;
    flex-wrap: wrap;

    > div {
      display: flex;
      width: 32%;
      margin: 0 1.3333333333% 1.3333333333% 0;

      label {
        max-width: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 0;
        align-content: flex-start;
      }

      label img {
        width: 100%;
        order: 1;
        margin-bottom: 10px;
      }

      label div {
        order: 3;
        line-height: 1.4;
        margin: 0;
        width: 100%;
        padding: 2px;
        font-weight: 400;
        font-size: 15px;
      }

      label:before {
        display: none;
      }
      
      @media screen and (max-width: 900px) {
        label img {
          margin-top: 0;
        }
      }
      @media screen and (max-width: 700px) {
        width: 46%;
        margin: 2%;
        label img {
          margin-top: 0;
        }
      }
      @media screen and (max-width: 400px) {
        label div {
          font-size: 14px;
          overflow-wrap: break-word;
          word-wrap: break-word;
          hyphens: auto;
        }
      }
    }
    ` : " "};
`);
var OptionWrapper_default = OptionWrapper;

// primitives/Html.ts
var import_styled_components27 = __toESM(require("styled-components"));
var StyledHtml = inject_styles_default(import_styled_components27.default.div`${({ styles: styles2, inline, margins }) => `
  display: ${inline ? "inline" : "block"};
  margin-bottom: ${margins ? styles2.padding.large : "0"};
  color: ${styles2.color2.textDark};
  font-style: normal;
  font-family: ${styles2.font.body};
  font-size: ${styles2.text.body.fontSize};
  font-weight: ${styles2.text.body.fontWeight};
  line-height: ${styles2.text.body.lineHeight};
  letter-spacing: ${styles2.text.body.letterSpacing};

  img {
    width: 100%;
    max-width: ${styles2.size.imageWidth};
    margin-bottom: ${styles2.padding.medium};
  }

  ul, ol {
    margin: 0;
    margin-bottom: ${styles2.padding.medium};
    padding-left: ${styles2.padding.large};
  }

  li {
    margin-bottom: ${styles2.padding.xSmall};
  }

  p {
    display: block;
    font-style: normal;
    font-family: ${styles2.font.body};
    font-size: ${styles2.text.body.fontSize};
    font-weight: ${styles2.text.body.fontWeight};
    line-height: ${styles2.text.body.lineHeight};
    letter-spacing: ${styles2.text.body.letterSpacing};
    margin: 0;
    margin-bottom: ${styles2.padding.medium};
    font-weight: 400;
  }
  h3 {
    font-style: normal;
    font-family: ${styles2.font.headline};
    font-size: ${styles2.text.h3.fontSize};
    font-weight: ${styles2.text.h3.fontWeight};
    line-height: ${styles2.text.h3.lineHeight};
    letter-spacing: ${styles2.text.h3.letterSpacing};
    margin: 0 0 ${styles2.padding.small};
    color: ${styles2.color2.textHeading};
  }
  h4 {
    font-family: ${styles2.font.body};
    font-size: ${styles2.text.subHeading.fontSize};
    font-weight: ${styles2.text.subHeading.fontWeight};
    line-height: ${styles2.text.subHeading.lineHeight};
    letter-spacing: ${styles2.text.subHeading.letterSpacing};
    text-transform: ${styles2.text.subHeading.textTransform};
  }
  table {
    width: 100%;
    font-size: 14px;
    border: 1px solid ${styles2.color2.secondary};
    background: ${styles2.color2.positiveXLight};
    border-collapse: collapse;
    text-align: left;
    th,
    td {
      border: 1px solid ${styles2.color2.secondary};
      padding: 10px;
    }
    th > *,
    td > * {
      vertical-align: middle;
      margin: 0;
      line-height: 1.3;
    }
    @media print {
      font-size: 12px;
      width: auto;
      th,
      td {
        padding: 5px 10px;
      }
      th > *,
      td > * {
        line-height: 1.2;
      }
    }
  }
`}`);
var Html_default = StyledHtml;

// components/helper/Html.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function Html({ id, text, inline, margins, h2, h3 }) {
  if (!text) {
    return null;
  }
  if (h2) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(H2, { id, inline, dangerouslySetInnerHTML: { __html: text } });
  }
  if (h3) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(H3, { id, inline, dangerouslySetInnerHTML: { __html: text } });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    Html_default,
    {
      id,
      inline,
      margins,
      dangerouslySetInnerHTML: { __html: text }
    }
  );
}

// components/blocks/checkbox/CheckboxInput.tsx
function CheckboxInput({
  checked,
  debug,
  disabled,
  heading,
  id,
  image,
  messages,
  name,
  onChange,
  text
}) {
  const message = messages == null ? void 0 : messages[0];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    Checkbox,
    {
      "aria-label": heading,
      type: "checkbox",
      name,
      id,
      onChange,
      disabled,
      checked
    }
  ), /* @__PURE__ */ React.createElement(Label, { htmlFor: id, warning: message == null ? void 0 : message.warning, debug }, /* @__PURE__ */ React.createElement("div", { "data-id": id }, /* @__PURE__ */ React.createElement("div", null, heading && !text ? heading : null, heading && text ? /* @__PURE__ */ React.createElement(H3, null, heading) : null), text ? /* @__PURE__ */ React.createElement(Html, { text }) : null), image && image.url ? /* @__PURE__ */ React.createElement("img", { src: image.url, alt: image.alt }) : null));
}

// components/blocks/checkbox/Checkbox.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var import_react5 = require("react");
function Checkbox2({
  setData: setData2,
  heading,
  options,
  grid,
  disabled,
  property,
  debug,
  currentValue,
  data,
  update
}) {
  const handleChange = (property2, value) => (e) => {
    setData2(`${property2}.${value}`, e.target.checked);
    update == null ? void 0 : update.forEach((updateProp) => {
      setData2(updateProp, void 0, true);
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Fieldset_default, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Legend_default, { children: heading }),
    options && options.length ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(OptionWrapper_default, { grid, children: options.map((option) => {
      const isDisabled = disabled || option.disabled;
      return /* @__PURE__ */ (0, import_react5.createElement)(
        CheckboxInput,
        __spreadProps(__spreadValues({}, option), {
          data,
          disabled: isDisabled,
          key: `${property}:${option.value}`,
          debug,
          checked: currentValue == null ? void 0 : currentValue[option.value],
          name: property,
          onChange: !isDisabled ? handleChange(property, option.value) : void 0
        })
      );
    }) }) : null
  ] });
}

// components/graphics/ErrorIcon.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function ErrorIcon({
  textFill = "white",
  triangleFill = styles_default.color2.error
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", role: "presentation", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("g", { "clip-path": "url(#clip0_1089_7422)", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("mask", { id: "mask0_1089_7422", style: { maskType: "alpha" }, maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "20", height: "20", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("rect", { width: "20", height: "20", style: { fill: textFill } }) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("g", { mask: "url(#mask0_1089_7422)", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0 10C0 4.4775 4.4775 0 10 0C15.5225 0 20 4.4775 20 10C20 15.5225 15.5225 20 10 20C4.4775 20 0 15.5225 0 10ZM11 14.0766C11 14.8122 10.5188 15.3333 9.83335 15.3333C9.13335 15.3333 8.66669 14.8122 8.66669 14.0766C8.66669 13.341 9.13335 12.8046 9.83335 12.8046C10.5188 12.8046 11 13.341 11 14.0766ZM10.65 11.9463H8.98752L8.75419 4.66663H10.8834L10.65 11.9463Z", style: { fill: triangleFill } }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("clipPath", { id: "clip0_1089_7422", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("rect", { width: "20", height: "20", fill: "white" }) }) })
  ] });
}

// components/blocks/Evaluation.tsx
var import_get9 = __toESM(require("lodash/get"));

// primitives/Sum.ts
var import_styled_components28 = __toESM(require("styled-components"));
var StyledSum = inject_styles_default(import_styled_components28.default.div`${({ styles: styles2, groupedSimple }) => `
  padding: 0 0 2rem;
  width: 100%;
  vertical-align: top;
  font-family: ${styles2.font.body};
  font-size: ${styles2.text.subHeading.fontSize};
  font-weight: ${styles2.text.subHeading.fontWeight};
  line-height: ${styles2.text.subHeading.lineHeight};
  letter-spacing: ${styles2.text.subHeading.letterSpacing};
  text-transform: ${styles2.text.subHeading.textTransform};
  &:nth-child(odd) {
    padding-right: 2rem;
  }

  span {
    padding: 0;
    font-family: ${styles2.font.body};
    text-transform: none;
    display: block;
    font-size: 28px;
    font-weight: bold;
    line-height: 1.1;

    &:first-of-type {
      padding-top: 0.5rem;
    }

    &:last-of-type {
      font-weight: bold;
    }

    &.sad {
      color: ${styles2.color2.error};
    }
    &.happy {
      color: ${styles2.color2.positive};
    }
  }

  ${groupedSimple ? `
      display: inline-block;
      width: 50%;
      ` : ""}
  @media screen and (max-width: 900px) {
    width: 100%;
    span {
      font-size: 20px;
    }
  }
`}`);
var Sum_default = StyledSum;

// primitives/SumResult.ts
var import_styled_components29 = __toESM(require("styled-components"));
var StyledSumResult = inject_styles_default(import_styled_components29.default.div`${({ styles: styles2 }) => `
    padding: 0;
    width: 100%;
    vertical-align: top;
    display: block;
    font-size: ${styles2.text.h1.fontSize};
    font-weight: ${styles2.text.h1.fontWeight};
    line-height: ${styles2.text.h1.lineHeight};
    letter-spacing: ${styles2.text.h1.letterSpacing};
    .sad {
        color: ${styles2.color2.error};
    }
    .happy {
        color: ${styles2.color2.positive};
    }
  }
`}`);
var SumResult_default = StyledSumResult;

// components/blocks/Evaluation.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function Evaluation({
  data,
  testing,
  final,
  groupedSimple,
  happy,
  sad,
  showValue,
  unit
}) {
  let testedValue = 0;
  if (Array.isArray(testing)) {
    testedValue = (0, import_get9.default)(data, testing[0]) - (0, import_get9.default)(data, testing[1]);
  } else if (testing) {
    testedValue = (0, import_get9.default)(data, testing);
  }
  const absTestedValue = Math.abs(testedValue);
  if (showValue) {
    if (testedValue < 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Sum_default, { groupedSimple, final, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
        sad,
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { className: "sad", children: [
          absTestedValue,
          " ",
          unit ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Html, { inline: true, text: unit }) : null
        ] })
      ] }) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Sum_default, { groupedSimple, final, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
      happy,
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { className: "happy", children: [
        testedValue,
        " ",
        unit ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Html, { inline: true, text: unit }) : null
      ] })
    ] }) });
  }
  if (testedValue < 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SumResult_default, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "sad", children: sad }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SumResult_default, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "happy", children: happy }) });
}

// components/blocks/FetchOrg.tsx
var import_react6 = require("react");
var import_merge2 = __toESM(require("lodash/merge"));

// primitives/Table.ts
var import_styled_components30 = __toESM(require("styled-components"));
var Table = inject_styles_default(import_styled_components30.default.table`
  width: 100%;
  font-size: 14px;
  border: 1px solid ${({ styles: styles2 }) => styles2.color2.secondary};
  border-collapse: collapse;
  text-align: left;
  th,
  td {
    border: 1px solid ${({ styles: styles2 }) => styles2.color2.secondary};
    padding: 10px;
  }
  th > *,
  td > * {
    vertical-align: middle;
    margin: 0;
    line-height: 1.3;
  }
  @media print {
    font-size: 12px;
    width: auto;
    th,
    td {
      padding: 5px 10px;
    }
    th > *,
    td > * {
      line-height: 1.2;
    }
  }
`);
var TD = inject_styles_default(import_styled_components30.default.td`
  ${(props) => props["data-inactive"] ? `
    background: ${props.styles.color2.errorXLight};
    font-weight: normal;
    position: relative;
    text-decoration: line-through;
` : `
    font-weight: ${props.simple ? "normal" : "bold"};
    background: ${props.styles.color2.positiveXLight};
`}

  ${(props) => props.simple ? `
    text-align: left;
    vertical-align: top;
    font-weight: normal;
    line-height: 1.5;
    p {
      font-weight: normal !important;
      margin-top: 3px !important;
    }
    strong {
      font-weight: bold;
    }
    em {
      font-weight: normal;
    }
    @media (max-width: 700px) {
      word-wrap: break-word;
    }
  ` : " "}
`);

// primitives/TableContainer.ts
var import_styled_components31 = __toESM(require("styled-components"));
var TableContainer = inject_styles_default(import_styled_components31.default.div`
  overflow: auto;
  max-width: 100%;
  table {
    text-align: center;
    width: 100%;
    font-size: 14px;
    border: 1px solid ${(props) => props.styles.color2.secondary};
    border-collapse: collapse;
    th {
      font-weight: inherit;
      ${(props) => props.simple ? `
        text-align: left;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        background: #ffffff;
      ` : " "}
    }
    th,
    td {
      border: 1px solid ${(props) => props.styles.color2.secondary};
      padding: 10px;
    }
    th > *,
    td > * {
      vertical-align: middle;
      margin: 0;
      line-height: 1.3;
    }
    td,
    th {
      ${(props) => props.debug ? `
        :hover {
          position: relative;
          :before {
            content: attr(data-id);
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            background: deeppink;
            color: white;
            font-size: 14px;
            padding: 2px 6px;
          }
        }
      ` : ""}
    }
  }
`);
var TableContainer_default = TableContainer;

// components/ApprovalAreas.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function ApprovalAreas({ areas, title }) {
  if (areas === void 0 || areas.length === 0) {
    return null;
  }
  let heading;
  if (title) {
    heading = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(H3, { children: "Sentrale godkjenninger" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
    heading,
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TableContainer_default, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Table, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("th", { children: "Funksjon" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("th", { children: "Fagomr\xE5de" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("th", { children: "Tiltaksklasse" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tbody", { children: areas.map((area, rowKey) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { children: area.function }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { children: area.subject_area }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { children: area.grade })
      ] }, rowKey)) })
    ] }) })
  ] });
}

// components/blocks/Input.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function Input({
  heading,
  property,
  errors,
  disabled,
  currentValue,
  placeholder,
  autocomplete,
  inputType,
  setData: setData2,
  update
}) {
  var _a, _b, _c;
  const handleChange = (e) => {
    setData2(property, e.target.value);
    update == null ? void 0 : update(e.target.value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      TextInput,
      {
        "aria-label": heading,
        "aria-invalid": (_a = errors == null ? void 0 : errors.validation) == null ? void 0 : _a.error,
        "aria-describedby": ((_b = errors == null ? void 0 : errors.validation) == null ? void 0 : _b.error) ? `${property}.error` : void 0,
        disabled,
        id: property,
        onChange: handleChange,
        placeholder,
        autoComplete: autocomplete,
        type: inputType,
        validation: errors == null ? void 0 : errors.validation,
        value: currentValue
      }
    ),
    ((_c = errors == null ? void 0 : errors.validation) == null ? void 0 : _c.error) && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(ErrorMessage, { role: "alert", id: `${property}.error`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ErrorIcon, {}),
      " ",
      errors.validation.message
    ] })
  ] });
}

// components/helper/VariableText.tsx
var import_template = __toESM(require("lodash/template"));
var import_jsx_runtime16 = require("react/jsx-runtime");
function VariableText({ data = {}, text = "" }) {
  if (!text) {
    return null;
  }
  const compiled = (0, import_template.default)(text);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { dangerouslySetInnerHTML: { __html: compiled(data) } });
}

// primitives/Datalist.ts
var import_styled_components32 = __toESM(require("styled-components"));
var DL = inject_styles_default(import_styled_components32.default.dl`${({ styles: styles2 }) => `
  margin: 0;
  dt {
    font-size: ${styles2.text.body.fontSize};
    font-weight: ${styles2.text.body.fontWeight};
    line-height: ${styles2.text.body.lineHeight};
    letter-spacing: ${styles2.text.body.letterSpacing};
    margin: 0 0 ${styles2.padding.xxSmall};
  }
  dd {
    font-size: ${styles2.text.body.fontSize};
    font-weight: ${styles2.text.body.boldWeight};
    line-height: ${styles2.text.body.lineHeight};
    letter-spacing: ${styles2.text.body.letterSpacing};
    margin: 0 0 ${styles2.padding.medium};
  }
`}`);
var Datalist_default = DL;

// components/graphics/InfoIcon.tsx
function InfoIcon({
  fill = styles_default.color2.primary
}) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      role: "presentation"
    },
    /* @__PURE__ */ React.createElement("path", { d: "M10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0ZM8.30583 13.3417C8.77583 11.8508 9.66583 10.065 9.82333 9.61333C10.0508 8.9575 9.6475 8.66667 8.37333 9.7875L8.09 9.25417C9.54333 7.67333 12.5358 7.31583 11.5175 9.765C10.8817 11.2942 10.4267 12.3267 10.1667 13.1233C9.7875 14.2842 10.745 13.8133 11.6825 12.9475C11.81 13.1558 11.8517 13.2233 11.9792 13.4633C9.8975 15.445 7.58667 15.62 8.30583 13.3417ZM12.2575 6.53417C11.8142 6.91167 11.1575 6.90333 10.79 6.51583C10.4225 6.12833 10.4842 5.50917 10.9267 5.13167C11.37 4.75417 12.0267 4.76333 12.3942 5.15C12.76 5.53833 12.7 6.1575 12.2575 6.53417Z", style: { fill } })
  );
}

// primitives/Information.ts
var import_styled_components33 = __toESM(require("styled-components"));
var Information = inject_styles_default(import_styled_components33.default.div`${({ styles: styles2 }) => `
  position: relative;  
  background: ${styles2.color2.sectionBackground};
  border: 1px solid ${styles2.color2.secondaryLight};
  border-radius: ${styles2.borderRadius.small};
  padding: ${styles2.padding.large};
  padding-left: calc(${styles2.padding.large} + 1.2em +  ${styles2.padding.large});
  color: ${styles2.color2.textDark};
  animation: messageIn 1000ms ${styles2.easing.easeOut};
  svg {
    position: absolute;
    top: ${styles2.padding.large};
    left: ${styles2.padding.large};
    width: ${styles2.iconSize.medium};
    height: ${styles2.iconSize.medium};
    display: inline-block;
    vertical-align: middle;
  }
  @keyframes messageIn {
    0% { opacity: 0; transform: translateY(2em); }
  }
`}`);
var Information_default = Information;

// primitives/Loading.ts
var import_styled_components34 = __toESM(require("styled-components"));
var Loading = inject_styles_default(import_styled_components34.default.div`${({ styles: styles2 }) => `
  background: ${styles2.color2.secondaryXLight};
  border-left: 4px solid ${styles2.color2.secondary};
  padding: ${styles2.padding.medium};
  margin-top: ${styles2.padding.medium};
  font-size: ${styles2.text.body.fontSize};
  font-weight: ${styles2.text.body.fontWeight};
  &::after {
    content: "...";
    animation: dotdotdot 1s linear infinite;
  }
  @keyframes dotdotdot {
    0% {
      content: " ";
    }
    25% {
      content: " .";
    }
    50% {
      content: " ..";
    }
    75% {
      content: " ...";
    }
    100% {
      content: " ...";
    }
  }
`}`);
var Loading_default = Loading;

// primitives/Notice.ts
var import_styled_components35 = __toESM(require("styled-components"));
var Notice = inject_styles_default(import_styled_components35.default.div`
  background: ${({ styles: styles2 }) => styles2.color2.positiveXLight};
  font-weight: 300;
  font-size: 14px;
  margin: 20px 0 0;
  padding: 20px 24px 20px;
  h3 {
    font-size: 1em;
  }
  table {
    text-align: left;
  }
  @media print {
    font-size: 12px;
  }
`);
var Notice_default = Notice;

// components/blocks/FetchOrg.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function FetchOrd(props) {
  var _a, _b, _c, _d, _e;
  const [loading, setLoading] = (0, import_react6.useState)(false);
  const {
    information,
    invalidapproval,
    invalidOrg,
    property,
    setData: setData2,
    currentValue,
    SGheading,
    source = "https://data.brreg.no/enhetsregisteret/api/enheter/",
    SGtext,
    SGsource = "https://sgregister.dibk.no/api/enterprises/"
  } = props;
  const fetchOrgData = (orgid) => __async(this, null, function* () {
    var _a2, _b2, _c2, _d2, _e2, _f, _g, _h, _i, _j, _k, _l, _m;
    const id = orgid.toString().replace(/\s/g, "");
    let updateData = {};
    setLoading(true);
    try {
      const result = yield (yield fetch(`${source}${id}`)).json();
      (0, import_merge2.default)(updateData, {
        orgid,
        name: (result == null ? void 0 : result.navn) || "",
        dataOrg: true,
        invalidOrg: false
      });
      if ((_a2 = result == null ? void 0 : result.postadresse) == null ? void 0 : _a2.adresse) {
        (0, import_merge2.default)(updateData, {
          postcode: ((_b2 = result == null ? void 0 : result.postadresse) == null ? void 0 : _b2.postnummer) || "",
          postplace: ((_c2 = result == null ? void 0 : result.postadresse) == null ? void 0 : _c2.poststed) || "",
          address: ((_d2 = result == null ? void 0 : result.postadresse) == null ? void 0 : _d2.adresse) || ""
        });
      } else {
        (0, import_merge2.default)(updateData, {
          postcode: ((_e2 = result == null ? void 0 : result.forretningsadresse) == null ? void 0 : _e2.postnummer) || "",
          postplace: ((_f = result == null ? void 0 : result.forretningsadresse) == null ? void 0 : _f.poststed) || "",
          address: ((_g = result == null ? void 0 : result.forretningsadresse) == null ? void 0 : _g.adresse) || ""
        });
      }
    } catch (error) {
      console.error(error);
      updateData.invalidOrg = true;
    }
    try {
      const result = yield (yield fetch(`${SGsource}${id}.json`)).json();
      const status = (_i = (_h = result["dibk-sgdata"]) == null ? void 0 : _h.status) != null ? _i : false;
      const validApprovalAreas = (_k = (_j = result == null ? void 0 : result["dibk-sgdata"]) == null ? void 0 : _j.valid_approval_areas) != null ? _k : [];
      (0, import_merge2.default)(updateData, {
        status,
        validApprovalAreas,
        dataSG: true
      });
    } catch (error) {
      console.error(error);
      updateData.status = void 0;
      updateData.validApprovalAreas = [];
      updateData.dataSG = false;
    }
    setData2(property, __spreadValues(__spreadValues({}, currentValue), updateData));
    setData2("sgdata", (_m = (_l = updateData == null ? void 0 : updateData.status) == null ? void 0 : _l.approved) != null ? _m : false, true);
    setLoading(false);
  });
  const update = (value) => {
    const { property: property2, setData: setData3 } = props;
    if (value && value.toString().replace(/\s/g, "").length === 9) {
      setLoading(true);
      fetchOrgData(value);
    } else {
      setData3(property2, { dataOrg: false, dataSG: false });
      setData3("sgdata", false, true);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      Input,
      __spreadProps(__spreadValues({}, props), {
        type: "Input",
        currentValue: currentValue == null ? void 0 : currentValue.orgid,
        setData: (property2, value) => setData2(property2, { orgid: value }),
        update
      })
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { "aria-live": "polite", children: [
      loading && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Loading_default, { role: "status", children: "Laster inn data" }),
      (currentValue == null ? void 0 : currentValue.dataOrg) ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Datalist_default, { role: "status", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Firmaets navn" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: (_a = currentValue == null ? void 0 : currentValue.name) != null ? _a : "" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Adresse" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: (_b = currentValue == null ? void 0 : currentValue.address) != null ? _b : "" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Postnummer- og sted" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dd", { children: [
            (_c = currentValue == null ? void 0 : currentValue.postcode) != null ? _c : "",
            " ",
            (_d = currentValue == null ? void 0 : currentValue.postplace) != null ? _d : ""
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Information_default, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(InfoIcon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Html, { text: information })
        ] })
      ] }) : null,
      !loading && (currentValue == null ? void 0 : currentValue.dataSG) ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Notice_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(H3, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(VariableText, { text: SGheading, data: currentValue }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ApprovalAreas, { areas: (_e = currentValue == null ? void 0 : currentValue.validApprovalAreas) != null ? _e : [] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(VariableText, { text: SGtext, data: currentValue })
      ] }) : null,
      !loading && !(currentValue == null ? void 0 : currentValue.dataSG) && (currentValue == null ? void 0 : currentValue.orgid) ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(ErrorMessage, { role: "alert", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ErrorIcon, {}),
        " ",
        invalidapproval
      ] }) : null,
      (currentValue == null ? void 0 : currentValue.invalidOrg) ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(ErrorMessage, { role: "alert", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ErrorIcon, {}),
        " ",
        invalidOrg
      ] }) : null
    ] })
  ] });
}

// components/blocks/Image.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function Image({ id, debug, image: { url, alt }, text }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(Figure_default, { "data-id": id, debug, children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("img", { src: url, alt }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("figcaption", { children: text })
  ] });
}

// components/helper/Image.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function Image2({ image = {} }) {
  if (Object.prototype.hasOwnProperty.call(image, "url") && image.url) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", { src: image.url, alt: image.alt });
  }
  return null;
}

// components/blocks/Information.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function Information2({
  debug,
  heading,
  id,
  text,
  warning,
  printonly,
  printhide
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    TextBlock,
    {
      warning,
      debug,
      "data-id": id,
      printonly,
      printhide,
      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Information_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(InfoIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Html, { text: heading, h2: true }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Html, { text })
      ] })
    }
  );
}

// components/blocks/Missing.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function Missing({
  type = "No type"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { children: [
    "Block missing: ",
    type
  ] });
}

// components/blocks/Number.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function Number2({
  heading,
  property,
  errors,
  disabled,
  currentValue,
  placeholder,
  autocomplete,
  setData: setData2,
  maximum,
  minimum,
  step = 1,
  unit
}) {
  var _a, _b, _c;
  const handleChange = (e) => {
    let value = e.target.value;
    if (step >= 1) {
      value = parseInt(value, 10);
    } else {
      value = parseFloat(value);
    }
    if (minimum === 0) {
      value = Math.abs(value);
    }
    if (maximum && maximum < value) {
      value = maximum;
    }
    if (minimum && minimum > value) {
      value = minimum;
    }
    if (isNaN(value)) {
      value = void 0;
    }
    setData2(property, value);
  };
  const describedBy = [];
  if (unit)
    describedBy.push(`${property}.unit`);
  if ((_a = errors == null ? void 0 : errors.validation) == null ? void 0 : _a.error)
    describedBy.push(`${property}.error`);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      NumberInput,
      {
        "aria-label": heading,
        "aria-invalid": (_b = errors == null ? void 0 : errors.validation) == null ? void 0 : _b.error,
        "aria-describedby": describedBy.length > 0 ? describedBy.join(" ") : void 0,
        disabled,
        id: property,
        max: maximum,
        min: minimum,
        onChange: handleChange,
        autoComplete: autocomplete,
        placeholder,
        step,
        type: "number",
        unit,
        validation: errors == null ? void 0 : errors.validation,
        value: currentValue
      }
    ),
    unit ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Html, { inline: true, id: `${property}.unit`, text: unit }) : null,
    ((_c = errors == null ? void 0 : errors.validation) == null ? void 0 : _c.error) && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(ErrorMessage, { role: "alert", id: `${property}.error`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ErrorIcon, {}),
      " ",
      errors.validation.message
    ] })
  ] });
}

// primitives/SoftWarning.ts
var import_styled_components36 = __toESM(require("styled-components"));
var SoftWarning = inject_styles_default(import_styled_components36.default.p`${({ styles: styles2, warning }) => `
  display: inline-block;
  margin-top: 0;
  padding: ${styles2.padding.xSmall} 0;
  color: ${warning ? styles2.color2.error : styles2.color2.positive};
  font-weight: normal !important;
  font-family: ${styles2.font.body};
  font-size: ${styles2.text.subHeading.fontSize};
  font-weight: ${styles2.text.subHeading.fontWeight};
  line-height: ${styles2.text.subHeading.lineHeight};
  text-transform: ${styles2.text.subHeading.textTransform};
  letter-spacing: ${styles2.text.subHeading.letterSpacing};
  &:before {
    content: "${warning ? "\u2716" : "\u2714"}";
    margin-right: 0.5rem;
  }
`}`);
var SoftWarning_default = SoftWarning;

// components/blocks/radio/RadioInput.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function RadioInput({
  id,
  value,
  checked,
  debug,
  disabled,
  heading,
  image,
  messages,
  onChange,
  text = "",
  name
}) {
  const message = messages == null ? void 0 : messages[0];
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      Radio,
      {
        "aria-label": heading,
        type: "radio",
        name,
        id,
        value,
        checked,
        disabled,
        onChange
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(Label, { htmlFor: id, warning: message == null ? void 0 : message.warning, debug, children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { "data-id": id, children: [
        heading && !text ? `${heading} ` : null,
        heading && text ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(H3, { children: heading }) : null,
        message ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(SoftWarning_default, { warning: message.warning, children: message.message }) : null,
        text ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Html, { text }) : null
      ] }),
      image && image.url ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: image.url, alt: image.alt }) : null
    ] })
  ] });
}

// components/blocks/radio/Radio.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var import_react7 = require("react");
function Radio2({
  property,
  heading,
  grid,
  options,
  disabled,
  clear,
  debug,
  setData: setData2,
  currentValue,
  data
}) {
  const handleChange = (property2, value) => () => {
    if (clear == null ? void 0 : clear.length) {
      clear.forEach((clearProp) => {
        setData2(`${clearProp}`, void 0);
      });
    }
    setData2(`${property2}`, value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Fieldset_default, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Legend_default, { children: heading }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(OptionWrapper_default, { grid, children: options.map((option) => {
      const isDisabled = disabled || option.disabled;
      return /* @__PURE__ */ (0, import_react7.createElement)(
        RadioInput,
        __spreadProps(__spreadValues({}, option), {
          data,
          debug,
          key: `${property}:${option.value}`,
          name: property,
          "data-id": option.id,
          disabled: isDisabled,
          checked: currentValue === option.value,
          onChange: !isDisabled ? handleChange(property, option.value) : void 0
        })
      );
    }) })
  ] });
}

// components/blocks/select/SelectOption.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
function SelectOption({ id, value, heading, debug }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("option", { value, children: [
    heading,
    debug ? ` (${id})` : null
  ] });
}

// components/blocks/select/Select.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var import_react8 = require("react");
var NULL_VALUE = "({[NULL]})";
function Select({
  setData: setData2,
  property,
  options,
  defaultOption,
  heading,
  currentValue,
  autocomplete,
  debug,
  data
}) {
  const handleChange = (e) => {
    let value = e.target.value === NULL_VALUE ? void 0 : e.target.value;
    const intValue = value && parseInt(value, 10);
    if (intValue && !isNaN(intValue)) {
      const optionExists = options.find(
        ({ value: optionValue }) => optionValue === intValue
      );
      if (optionExists) {
        setData2(property, intValue);
        return;
      }
    }
    setData2(property, value);
  };
  const placeholder = defaultOption || "Velg fra listen";
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(SelectWrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    "select",
    {
      "aria-label": heading,
      value: currentValue,
      onChange: handleChange,
      autoComplete: autocomplete,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("option", { value: NULL_VALUE, children: placeholder }),
        options.map((option) => /* @__PURE__ */ (0, import_react8.createElement)(SelectOption, __spreadProps(__spreadValues({ data, debug }, option), { key: option.value })))
      ]
    }
  ) });
}

// primitives/Signature.ts
var import_styled_components37 = __toESM(require("styled-components"));
var Signature = inject_styles_default(import_styled_components37.default.div`
  width: 100%;
  max-width: 300px;
  margin: 80px auto 30px 0;
  border-top: 0.5px solid black;
  @media print {
    page-break-inside: avoid;
  }
`);
var Signature_default = Signature;

// primitives/PrintForm.ts
var import_styled_components38 = __toESM(require("styled-components"));
var PrintForm = inject_styles_default(import_styled_components38.default.div`
  display: none;
  @media print {
    font-size: 12px;
    display: block;
  }
`);
var PrintForm_default = PrintForm;

// components/blocks/Signature.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
function Signature2() {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(PrintForm_default, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Signature_default, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: "Dato og signatur" }) }) });
}

// components/blocks/Sum.tsx
var import_get10 = __toESM(require("lodash/get"));

// primitives/details.ts
var import_styled_components39 = __toESM(require("styled-components"));
var Details = inject_styles_default(import_styled_components39.default.details`${({ styles: styles2 }) => `
  display: block;
  text-align: right;
  margin: 0;
  margin-top: ${styles2.padding.large};
  & > div {
    text-align: left;
    background: ${styles2.color2.secondaryXLight};
    margin: 0;
    padding: ${styles2.padding.large};
    h3,
    h4 {
      font-size: 1em;
      margin-bottom: 0;
    }
    p {
      margin-top: 0;
    }
    & > *:last-child {
      margin-bottom: 0;
    }
  }
  &[open] summary {
    border-bottom-color: transparent;
    & ~ * {
      animation: detailsIn 400ms ${styles2.easing.easeOut} both;
    }
    &:after {
      transform: translateY(-1px) rotate(135deg);
    }
  }
  @keyframes detailsIn {
    0% { opacity: 0; transform: translateY(-1em); }
  }
`}`);
var Summary = inject_styles_default(import_styled_components39.default.summary`${({ styles: styles2 }) => `
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: ${styles2.padding.xxSmall} 0 ${styles2.padding.xxSmall} ${styles2.padding.small}; 
  list-style: none;
  font-family: ${styles2.font.body};
  font-size: ${styles2.text.body.fontSize};
  font-weight: ${styles2.text.body.boldWeight};
  line-height: ${styles2.text.body.lineHeight};
  letter-spacing: ${styles2.text.body.letterSpacing};
  border-bottom: 1px solid ${styles2.color2.link};
  color: ${styles2.color2.link};
  &::-webkit-details-marker {
    display:none;
  }
  &:after {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    pointer-events: none;
    margin-left: ${styles2.padding.xSmall};
    width: 5px;
    height: 5px;
    transform: translateY(-1px) rotate(-45deg);
    transform-origin: 2px 4px;
    border-left: 2px solid ${styles2.color2.link};
    border-bottom: 2px solid ${styles2.color2.link};
    transition: transform 400ms ${styles2.easing.easeOut};
  }
`}`);

// components/blocks/SummaryDetails.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
function SummaryDetails({ summary, details }) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(Details, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Summary, { children: summary }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Html, { text: details })
  ] });
}

// components/blocks/Sum.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var calculateSum = (data, values2, operations = [], minimum) => {
  var _a;
  let sum = values2.reduce((accumulator, cur, currentIndex) => {
    const getValue2 = (defaultValue) => typeof cur === "string" ? (0, import_get10.default)(data, cur, defaultValue) : cur;
    if (operations && operations[currentIndex] === "-") {
      return Number(accumulator) - getValue2(0);
    } else if (operations && operations[currentIndex] === "%") {
      return (Number(accumulator) * getValue2(0)).toFixed(2);
    } else if (operations && operations[currentIndex] === "*") {
      return Number(accumulator) * getValue2(1);
    } else if (operations && operations[currentIndex] === "-/") {
      return getValue2(0) / Number(accumulator);
    } else if (operations && operations[currentIndex] === "/") {
      return Number(accumulator) / getValue2(1);
    }
    return accumulator + (0, import_get10.default)(data, cur, 0);
  }, ["+", "-"].indexOf((_a = operations == null ? void 0 : operations[0]) != null ? _a : "+") > -1 ? 0 : 1);
  if (typeof minimum === "number") {
    sum = Math.max(Number(sum), minimum);
  }
  return sum;
};
function Sum({
  data,
  values: values2,
  operations,
  minimum,
  groupedSimple,
  final,
  heading,
  unit,
  summary,
  details
}) {
  const sum = calculateSum(data, values2, operations, minimum);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(Sum_default, { groupedSimple, final, children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
      heading,
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { children: [
        sum,
        " ",
        unit ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Html, { inline: true, text: unit }) : null
      ] })
    ] }),
    summary && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(SummaryDetails, { summary, details })
  ] });
}

// components/blocks/Table.tsx
var import_pick = __toESM(require("lodash/pick"));
var import_jsx_runtime30 = require("react/jsx-runtime");
var import_react9 = require("react");
function TableCell(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(TD, __spreadValues({}, props));
}
function TableHeader(_a) {
  var _b = _a, { simple } = _b, props = __objRest(_b, ["simple"]);
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("th", __spreadValues({}, props));
}
function Table2({ cells, debug, simple }) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(TableContainer_default, { simple, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("table", { "data-debug": debug, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("tbody", { children: cells.map((row, rowKey) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("tr", { children: row.map((cell, cellKey) => {
    const cellProps = __spreadProps(__spreadValues({}, (0, import_pick.default)(cell, ["colSpan", "rowSpan"])), {
      "data-inactive": Boolean(cell.inactive)
    });
    const Cell = cell.type === "Heading" ? TableHeader : TableCell;
    return /* @__PURE__ */ (0, import_react9.createElement)(Cell, __spreadProps(__spreadValues({ "data-id": cell.id }, cellProps), { key: cellKey, simple, "aria-label": cellProps["data-inactive"] ? `Inaktiv: ${cell.text}` : void 0 }), /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Html, { text: cell.text }));
  }) }, rowKey)) }) }) });
}

// components/blocks/Text.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
function Text({
  debug,
  heading,
  id,
  text,
  warning = false,
  printonly = false,
  printhide = false
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    TextBlock,
    {
      warning,
      debug,
      "data-id": id,
      printonly,
      printhide,
      children: [
        warning && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(InfoIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Html, { text: heading, h2: true }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Html, { text })
      ]
    }
  );
}

// components/blocks/Textarea.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
function Textarea2(props) {
  const handleChange = (e) => {
    const { property: property2, setData: setData2 } = props;
    const value = e.target.value;
    setData2(property2, value);
  };
  const { currentValue, information, heading, placeholder, property, autocomplete } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      Textarea,
      {
        "aria-label": heading,
        "aria-describedby": information ? `${property}.information` : void 0,
        placeholder,
        value: currentValue,
        onChange: handleChange,
        autoComplete: autocomplete
      }
    ),
    information && /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(Information_default, { id: `${property}.information`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ErrorIcon, { triangleFill: "black" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Html, { text: information })
    ] })
  ] });
}

// primitives/ErrorBlock.ts
var import_styled_components40 = __toESM(require("styled-components"));
var StyledErrorBlock = inject_styles_default(import_styled_components40.default.div`${({ styles: styles2, grouped }) => `
  padding: ${styles2.padding.large} 0;
  width: 100%;
  ${grouped ? `&:not(last-child) { margin-bottom: ${styles2.padding.xLarge} ; }` : ""};

  svg {
    position: absolute;
    top: ${styles2.padding.large};
    left: ${styles2.padding.large};
    width: ${styles2.iconSize.medium};
    height: ${styles2.iconSize.medium};
    display: inline-block;
    vertical-align: middle;
  }

  > div {
    padding: 0;
  }

  > div:first-of-type {
    position: relative;
    border-left: 4px solid ${styles2.color2.negative};
    background: ${styles2.color2.negativeXLight};
    padding: ${styles2.padding.large};
    padding-left: calc(${styles2.padding.large} + 1.2em +  ${styles2.padding.large});
    animation: messageIn 1000ms ${styles2.easing.easeOut};
  }

  > div:nth-of-type(2) {
    padding: 0 33px 36px;
  }

  p {
    margin: 1em 0;
    line-height: 1.6;
    max-width: 600px;
  }
  @media screen and (max-width: 700px) {
    padding: 0;
    margin: 0;
  }
  @keyframes messageIn {
    0% { opacity: 0; transform: translateY(2em); }
  }
`}`);
var ErrorBlock_default = StyledErrorBlock;

// components/blocks/Block.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
function getBlock(type) {
  switch (type) {
    case "Radio":
      return Radio2;
    case "Checkbox":
      return Checkbox2;
    case "Number":
      return Number2;
    case "Select":
      return Select;
    case "Image":
      return Image;
    case "Text":
      return Text;
    case "Input":
      return Input;
    case "Textarea":
      return Textarea2;
    case "Evaluation":
      return Evaluation;
    case "FetchOrg":
      return FetchOrd;
    case "Table":
      return Table2;
    case "Signature":
      return Signature2;
    case "Sum":
      return Sum;
    case "Information":
      return Information2;
    default:
      return null;
  }
}
function PureBlock(props) {
  const SpecificBlock2 = getBlock(props.type);
  if (props.type === "ErrorOk") {
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { children: props.children.map((block) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      ConnectedBlock,
      __spreadValues({
        "data-id": props.id,
        simple: props.simple,
        setPage: props.setPage,
        errorPages: props.errorPages,
        pages: props.pages
      }, block),
      block.id
    )) });
  }
  if (props.type === "Group") {
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(SpecificBlock, { "data-id": props.id, debug: props.debug, children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Html, { text: props.heading, h2: true }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Html, { text: props.text, margins: true }),
      props.children.map((block) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        ConnectedBlock,
        __spreadValues({
          grouped: true,
          "data-id": props.id,
          simple: props.simple,
          setPage: props.setPage,
          errorPages: props.errorPages,
          pages: props.pages
        }, block),
        block.id
      )),
      props.summary && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(SummaryDetails, { summary: props.summary, details: props.details })
    ] });
  }
  if (props.type === "Error") {
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(ErrorBlock_default, { role: "alert", "data-id": props.id, debug: props.debug, children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Html, { text: props.heading, h2: true }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Html, { text: props.text, margins: true }),
      props.children.map((block) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        ConnectedBlock,
        __spreadValues({
          grouped: true,
          "data-id": props.id,
          simple: props.simple,
          setPage: props.setPage,
          errorPages: props.errorPages,
          warning: true,
          pages: props.pages
        }, block),
        block.id
      ))
    ] });
  }
  if (!SpecificBlock2) {
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Missing, { type: props.type });
  }
  if (props.type === "Image" || props.type === "Text" || props.type === "Signature" || props.type === "Sum" || props.type === "Summary" || props.type === "Information" || props.type === "Evaluation") {
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      SpecificBlock2,
      __spreadValues({
        grouped: props.grouped,
        groupedSimple: props.simple,
        debug: props.debug,
        "data-id": props.id
      }, props)
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    SpecificBlock,
    {
      "data-id": props.id,
      id: props.property,
      debug: props.debug,
      grouped: props.grouped,
      groupedSimple: props.simple,
      disabled: props.disabled,
      type: props.type,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Image2, { image: props.image }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Html, { text: props.heading, h2: !props.grouped, h3: props.grouped }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Html, { text: props.text, margins: true }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          SpecificBlock2,
          __spreadValues({
            debug: props.debug
          }, __spreadProps(__spreadValues({}, props), {
            validation: props.currentValue && props.validator ? {
              error: !new RegExp(props.validator.pattern).test(
                props.currentValue
              ),
              message: props.validator.error
            } : {}
          }))
        ),
        props.disabled && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(ErrorMessage, { role: "alert", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(ErrorIcon, {}),
          " ",
          props.errorDescription
        ] }),
        props.summary && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(SummaryDetails, { summary: props.summary, details: props.details })
      ]
    }
  );
}
PureBlock.defaultProps = {
  children: [],
  currentValue: void 0,
  details: "",
  disabled: false,
  errorDescription: null,
  errorPages: [],
  errors: {},
  grouped: false,
  heading: "",
  id: null,
  image: {},
  pages: [],
  property: null,
  setPage: () => {
  },
  simple: false,
  summary: "",
  text: "",
  validator: false
};
var ConnectedBlock = (0, import_react_redux4.connect)(
  (state, props) => ({
    data: state[NAME],
    debug: !!window.location.search.match("debug"),
    disabled: props.errors && props.errors.disabled && (Array.isArray(props.errors.disabled) && props.errors.disabled.length > 0 || props.errors.disabled.errors && props.errors.disabled.errors.length > 0)
  }),
  (dispatch) => (0, import_redux2.bindActionCreators)({ setData }, dispatch)
)(PureBlock);
var Block_default = ConnectedBlock;

// components/Navigation.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
function Navigation2({
  nextPageIsResult,
  hasNext = false,
  nextPage = () => {
  }
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_jsx_runtime34.Fragment, { children: hasNext ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Button_exports.NavButton, { type: "button", next: true, onClick: nextPage, children: nextPageIsResult ? "Vis resultat" : "Neste" }) : null });
}

// components/Page.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
function Page({
  children = [],
  debug = false,
  details = "",
  firstPage,
  lastPage,
  heading = "Missing page heading",
  lead = "",
  nextPage,
  nextPageIsResult,
  pageid,
  previousPage,
  summary = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(grid_exports.Main, { debug, "data-id": pageid, id: "main", children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Heading_exports.H1, { children: heading }),
    lead && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Paragraphs_exports.Lead, { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Html, { text: lead }) }),
    summary && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(SummaryDetails, { summary, details }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(grid_exports.Blocks, { children: children.map((block, index) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Block_default, __spreadValues({}, block), hasProperty(block, "id") && block.id || index)) }),
    (!firstPage || !lastPage) && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      Navigation2,
      {
        nextPageIsResult,
        hasPrevious: !firstPage,
        previousPage,
        hasNext: !lastPage,
        nextPage
      }
    )
  ] });
}

// components/Result.tsx
var import_react_redux8 = require("react-redux");

// utils/has-soft-error.ts
function hasSoftError(page) {
  if (!hasProperty(page, "children")) {
    return false;
  }
  return page.children.reduce(
    (result, node) => result || isOfType(node, ["Error"]) || hasProperty(node, "children") && hasSoftError(node),
    false
  );
}

// utils/get-result-text.ts
function getResultText(property, incomplete, hasSoftErrors) {
  if (typeof property !== "object") {
    return property;
  }
  if (incomplete && hasSoftErrors) {
    return property.incompleteWithError;
  }
  if (incomplete && !hasSoftErrors) {
    return property.incomplete;
  }
  if (hasSoftErrors) {
    return property.completeWithError;
  }
  return property.complete;
}

// utils/tracking.ts
function track(wizardName, id, title) {
  const _paq = window._paq || [];
  _paq.push([
    "setCustomUrl",
    `https://dibk.no/verktoy-og-veivisere/${wizardName}/${id}`
  ]);
  _paq.push(["setDocumentTitle", title]);
  _paq.push(["trackPageView"]);
}
function trackEvent(action, name = "") {
  const _paq = window._paq || [];
  _paq.push(["trackEvent", "Wizard", action, name]);
}

// components/ExportData.tsx
var import_react10 = require("react");
var import_react_redux5 = require("react-redux");
var import_jsx_runtime36 = require("react/jsx-runtime");
function ExportData({ data }) {
  const [copied, setCopied] = (0, import_react10.useState)(false);
  (0, import_react10.useEffect)(() => {
    if (!Element.prototype.remove) {
      Element.prototype.remove = function remove() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }
  }, []);
  const copyToClipboard = () => {
    const temp = document.createElement("textarea");
    const text = document.createTextNode(
      JSON.stringify(data, null, 2)
    );
    temp.appendChild(text);
    document.body.appendChild(temp);
    temp.focus();
    temp.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.warn("Could not copy to clipboard", err);
    }
    temp.remove();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5e3);
  };
  const buttonText = copied ? "Svarene er lagret p\xE5 utklippstavlen!" : "Kopier svarene til et fagsystem";
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    MainButton,
    {
      "aria-live": copied ? "assertive" : void 0,
      copied,
      onClick: copyToClipboard,
      children: buttonText
    }
  ) });
}
var mapStateToProps2 = (state, { exporter }) => ({
  data: exporter(getData(state))
});
var ExportData_default = (0, import_react_redux5.connect)(mapStateToProps2)(ExportData);

// primitives/Summary.ts
var import_styled_components41 = __toESM(require("styled-components"));
var PageSummary = inject_styles_default(import_styled_components41.default.div`${({ styles: styles2, error }) => `
  width: 100%;
  padding: ${styles2.padding.xLarge} 0;
  h2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${styles2.padding.large};
  }
  button {
    align-self: flex-start;
    margin: 0 0 0 ${styles2.padding.medium};
  }
  ${error ? `
      h2 {
        color: ${styles2.color2.error};
      }
    ` : ""}
  @media screen and (max-width: 900px) {
    h2 {
      display: block;
    }
    button {
      margin: 6px 0 0;
      display: block;
    }
  }
  @media print {
    page-break-inside: avoid;
    padding: 0;
    padding-bottom: ${styles2.padding.xLarge};
    h2 {
      width: 100%;
      border-bottom: 1px solid ${styles2.color2.primary};
    }
  }
`}`);
var NodeSummary = inject_styles_default(import_styled_components41.default.div`${({ styles: styles2, error }) => `
  background: ${error ? styles2.color2.errorXLight : styles2.color2.secondaryXLight};
  padding: ${styles2.padding.medium} ${styles2.padding.large};
  margin-bottom: ${styles2.padding.xSmall};
  border-radius: ${styles2.borderRadius.small};
  h3 {
    font-size: ${styles2.text.body.fontSize};
    font-weight: ${styles2.text.body.fontWeight};
    line-height: ${styles2.text.body.lineHeight};
    letter-spacing: ${styles2.text.body.letterSpacing};
    margin-bottom: ${styles2.padding.xxSmall}};
  }
  @media print {
    padding: ${styles2.padding.small} 0;
    font-size: 12px;
    h3 {
      font-size: 12px;
    }
  }
`}`);
var Value = inject_styles_default(import_styled_components41.default.div`${({ styles: styles2, missing }) => `
  font-style: ${missing ? "italic" : "normal"};
  color: ${missing ? styles2.color2.error : styles2.color2.textDark};
  font-size: ${styles2.text.body.fontSize};
  font-weight: ${styles2.text.body.boldWeight};
`}`);

// components/Summary/value/index.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
function Value2({ value, node }) {
  if (Number(value) === value && value % 1 !== 0) {
    value = Math.round(value);
  }
  if (!node.optional && [null, void 0, ""].includes(value)) {
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Value, { missing: true, children: "* M\xE5 fylles ut" });
  }
  if (node.options) {
    let values2;
    if (typeof value === "object") {
      values2 = Object.keys(value).filter((key) => value[key]);
    } else {
      values2 = [value];
    }
    values2 = values2.map((val) => {
      const option = (node.options || []).find(
        ({ value: optionValue }) => optionValue === val
      ) || {};
      return option.heading || option.text || val;
    });
    if (!node.optional && !values2.length) {
      return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Value, { missing: true, children: "* M\xE5 fylles ut" });
    } else if (!values2.length) {
      return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Value, { children: "Ingen valgt" });
    }
    const commaSeparated = values2.slice(0, -1);
    const lastOne = values2.slice(-1)[0];
    if (!commaSeparated.length) {
      return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Value, { children: lastOne });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(Value, { children: [
      commaSeparated.join(", "),
      " og ",
      lastOne,
      "."
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(Value, { children: [
    value,
    " ",
    node.unit ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Html, { inline: true, text: node.unit }) : null
  ] });
}

// components/Summary/value/Checkbox.tsx
var import_prop_types = __toESM(require_prop_types());
var import_react_redux6 = require("react-redux");
var import_jsx_runtime38 = require("react/jsx-runtime");
function numOfMatchingItemsInObject(object, value) {
  const items = Object.keys(object || {}).filter(
    (key) => object[key] === value
  );
  return items.length;
}
function Sum2({ node, node: { allMandatory, currentValue = {}, errors } }) {
  const matchingItems = numOfMatchingItemsInObject(currentValue, true);
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
    SpecificBlock,
    {
      grouped: true,
      error: allMandatory && errors.required,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("small", { children: [
          matchingItems === 0 && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("em", { children: "Du har ikke valgt noen alternativer, men for " }),
          matchingItems > 0 && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("em", { children: [
            "Du har ",
            allMandatory && errors.required ? "kun" : "",
            " valgt",
            " ",
            numOfMatchingItemsInObject(currentValue, true),
            " av ",
            " ",
            node.options.length,
            " alternativer."
          ] })
        ] }),
        node.options.map((item) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            CheckboxResultDisplay,
            {
              type: "checkbox",
              id: `${node.id}-${item.value}`,
              checked: currentValue[item.value] || false,
              readOnly: true
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Label, { htmlFor: `${node.id}-${item.value}`, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { children: item.heading }) })
        ] }, `${node.id}-${item.value}`))
      ]
    }
  ) });
}
var ConnectedSum = (0, import_react_redux6.connect)((state) => ({
  data: state[NAME]
}))(Sum2);
var Checkbox_default = ConnectedSum;
Sum2.propTypes = {
  node: import_prop_types.default.object.isRequired
};

// components/Summary/value/FetchOrg.tsx
var import_jsx_runtime39 = require("react/jsx-runtime");
function FetchOrgSummary({
  value: {
    address = "",
    name = "",
    orgid = "",
    postcode = "",
    postplace = "",
    validApprovalAreas
  } = {}
}) {
  if (!orgid) {
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Value, { missing: true, children: "* M\xE5 fylles ut" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(Datalist_default, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("dd", { children: orgid }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("dt", { children: "Firmaets navn" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("dd", { children: name }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("dt", { children: "Adresse" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("dd", { children: address }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("dt", { children: "Postnummer- og sted" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("dd", { children: [
      postcode,
      " ",
      postplace
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ApprovalAreas, { areas: validApprovalAreas, title: true })
  ] });
}

// components/Summary/value/Sum.tsx
var import_get11 = __toESM(require("lodash/get"));
var import_react_redux7 = require("react-redux");
var import_jsx_runtime40 = require("react/jsx-runtime");
function hasAllValues(values2, data) {
  return values2.reduce(
    (acc, currentValue) => (0, import_get11.default)(data, currentValue) !== void 0 && acc,
    true
  );
}
function Sum3({ node, data }) {
  if (!isOfType(node, ["Sum"])) {
    return null;
  }
  const { minimum, operations, values: values2 } = node;
  if (!hasAllValues(values2, data)) {
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Value, { missing: true, children: "* Mangler verdi for utregning" });
  }
  const sum = values2.reduce((accumulator, currentValue, currentIndex) => {
    if (operations && operations[currentIndex] === "-") {
      return Math.max(accumulator - (0, import_get11.default)(data, currentValue), minimum);
    } else if (operations && operations[currentIndex] === "*") {
      return Math.max(accumulator * (0, import_get11.default)(data, currentValue), minimum);
    } else if (operations && operations[currentIndex] === "/") {
      return Math.max(accumulator / (0, import_get11.default)(data, currentValue), minimum);
    }
    return Math.max(accumulator + (0, import_get11.default)(data, currentValue), minimum);
  }, 0);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Value, { children: sum });
}
var ConnectedSum2 = (0, import_react_redux7.connect)((state) => ({
  data: state[NAME]
}))(Sum3);
var Sum_default2 = ConnectedSum2;

// components/Summary/SoftError.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
function SoftError({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_jsx_runtime41.Fragment, { children: children.map((child) => {
    const heading = !isOfType(child, ["Result"]) && (hasProperty(child, "heading") && child.heading || hasProperty(child, "text") && child.text);
    if (heading) {
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(ErrorMessage, { role: "alert", children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(InfoIcon, {}),
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Html, { text: heading, inline: true })
      ] });
    }
    return null;
  }) });
}

// components/Summary/Information.tsx
var import_jsx_runtime42 = require("react/jsx-runtime");
function Information3({ text }) {
  if (text) {
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Information_default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(InfoIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Html, { text })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { children: "TEXT MISSING" });
}

// components/Summary/Node.tsx
var import_get12 = __toESM(require("lodash/get"));
var import_jsx_runtime43 = require("react/jsx-runtime");
var ignoreNodes = ["Text", "Image"];
var overrideValueSummary = { FetchOrg: FetchOrgSummary, Sum: Sum_default2, Checkbox: Checkbox_default };
function NodeSummary2({ node }) {
  if (isOfType(node, ["Error"])) {
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(SoftError, { children: node.children });
  }
  if (isOfType(node, ["Information"])) {
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Information3, { text: node.text });
  }
  if (isOfType(node, ["Group", "ErrorOk"])) {
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_jsx_runtime43.Fragment, { children: node.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(NodeSummary2, { value: child.currentValue, node: child }, child.id)) });
  }
  if (ignoreNodes.includes(node.type) || !hasProperty(node, "property")) {
    return null;
  }
  const ValueSummary = (0, import_get12.default)(overrideValueSummary, node.type, Value2);
  const errors = (0, import_get12.default)(node, "errors");
  const errorDescription = (0, import_get12.default)(node, "errorDescription");
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(NodeSummary, { error: errors.validation.error, children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Html, { text: node.heading, h3: true }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(ValueSummary, { value: (0, import_get12.default)(node, "currentValue"), node }),
    errors.validation.error ? /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(ErrorMessage, { role: "alert", children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(ErrorIcon, {}),
      errors.validation.message
    ] }) : null,
    errors.disabled.length ? /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(ErrorMessage, { role: "alert", children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(ErrorIcon, {}),
      " ",
      errorDescription
    ] }) : null
  ] });
}

// components/Summary/Page.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");
function PageSummary2({ children = [], error, goToPage, heading }) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(PageSummary, { error, children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(H2, { children: [
      heading,
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SmallButton, { type: "button", onClick: goToPage, children: "Endre svar" })
    ] }),
    children.map((node, index) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(NodeSummary2, { node }, hasProperty(node, "id") ? node.id : index))
  ] });
}

// components/Summary/index.tsx
var import_jsx_runtime45 = require("react/jsx-runtime");
function Summary2({ errorPages, setPage, pages = [] }) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_jsx_runtime45.Fragment, { children: pages.filter(({ type }) => type === "Page").map((page) => hasProperty(page, "id") ? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    PageSummary2,
    __spreadValues({
      error: !!errorPages.find(({ id }) => page.id === id) || hasSoftError(page),
      goToPage: () => setPage(page.id)
    }, page),
    page.id
  ) : null) });
}

// components/PDFButton.tsx
var import_react11 = require("react");

// primitives/Spinner.ts
var import_styled_components42 = __toESM(require("styled-components"));
var Spinner_default = inject_styles_default(import_styled_components42.default.div`
  display: inline-flex;
  width: 1em;
  height: 1em;
  ${(props) => !props.noMargin ? "margin-left: 0.5em;" : ""}
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  transition: opacity 0.5s;

  opacity: ${(props) => props.hidden ? "0" : "1"};

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`);

// utils/create-pdf.ts
var import_axios = __toESM(require("axios"));
function createPDF(pdfServiceUrl, localStorageKey) {
  const localStorageData = localStorage.getItem(localStorageKey);
  if (localStorageData === null) {
    return Promise.reject();
  }
  return import_axios.default.post(
    pdfServiceUrl,
    {
      url: window.location.href,
      localStorageData: JSON.parse(localStorageData),
      localStorageKey
    },
    {
      responseType: "blob",
      headers: {
        Accept: "application/pdf"
      }
    }
  ).then((response) => {
    const file = new Blob([response.data], {
      type: "application/pdf"
    });
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(file);
      return;
    }
    const data = window.URL.createObjectURL(file);
    const link = document.createElement("a");
    link.setAttribute("type", "hidden");
    link.href = data;
    link.download = "veiviser.pdf";
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(data);
    }, 100);
  });
}

// components/PDFButton.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
function PDFButton({
  localStorageKey,
  pageHeading,
  pdfServiceUrl
}) {
  const [isDownloading, setIsDownloading] = (0, import_react11.useState)(false);
  const [errorMessage, setErrorMessage] = (0, import_react11.useState)(false);
  const handleClick = () => {
    if (isDownloading) {
      return;
    }
    setIsDownloading(true);
    setErrorMessage(false);
    trackEvent("Last ned PDF", pageHeading);
    createPDF(pdfServiceUrl, localStorageKey).then(() => {
      setErrorMessage(false);
    }).catch(() => {
      setErrorMessage(true);
    }).finally(() => {
      setIsDownloading(false);
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
      MainButton,
      {
        type: "button",
        onClick: handleClick,
        disabled: isDownloading,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { children: isDownloading ? "Lager PDF..." : "Lagre som PDF" }, "text"),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Spinner_default, { hidden: !isDownloading }, "spinner")
        ]
      }
    ),
    errorMessage && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { children: "Noe gikk galt. Pr\xF8v igjen." })
  ] });
}

// components/Result.tsx
var import_jsx_runtime47 = require("react/jsx-runtime");
var import_react12 = require("react");
function Result(props) {
  const {
    children = [],
    debug,
    errorPages,
    exporter,
    heading,
    lead,
    exports,
    pageid,
    schema,
    setPage,
    wizard: {
      meta: { pdfServiceUrl, localStorageKey }
    }
  } = props;
  const incomplete = errorPages.length > 0;
  const hasSoftErrors = schema.filter((page) => hasSoftError(page)).length > 0;
  const resultHeading = getResultText(heading, incomplete, hasSoftErrors);
  const resultLead = getResultText(lead, incomplete, hasSoftErrors);
  const printPage = () => {
    trackEvent("Skriv ut", resultHeading);
    window.print();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(grid_exports.Main, { result: true, debug, "data-id": pageid, id: "main", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(H1, { result: true, children: resultHeading }),
    resultLead && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(grid_exports.Blocks, { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Html, { text: resultLead }) }),
    children.map((_a) => {
      var _b = _a, { heading: heading2 } = _b, block = __objRest(_b, ["heading"]);
      return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(grid_exports.Blocks, { children: /* @__PURE__ */ (0, import_react12.createElement)(
        Block_default,
        __spreadProps(__spreadValues({}, block), {
          key: block.id,
          errorPages,
          setPage,
          pages: schema
        })
      ) });
    }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(grid_exports.Blocks, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("hr", {}),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(H2, { small: true, children: "Oppsummering" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Summary2, { errorPages, setPage, pages: schema })
    ] }),
    !incomplete && exporter ? /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(TextBlock, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(H2, { children: "Takk for at du gjennomf\xF8rte veiviseren!" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Lead, { children: "Du kan kopiere svarene dine, eller skrive ut resultatsiden." })
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(Export, { exporter, children: [
      !incomplete && exporter && (exports == null ? void 0 : exports[exporter]) ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(ExportData_default, { exporter: exports[exporter] }) : null,
      pdfServiceUrl && localStorageKey ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        PDFButton,
        {
          pdfServiceUrl,
          localStorageKey,
          pageHeading: resultHeading
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(MainButton, { type: "button", onClick: printPage, children: "Skriv ut" })
    ] })
  ] });
}
var mapStateToProps3 = (state, { wizard }) => ({
  errorPages: getErrorPages(wizard.schema, state)
});
var Result_default = (0, import_react_redux8.connect)(mapStateToProps3)(Result);

// primitives/SkipLink.ts
var import_styled_components43 = __toESM(require("styled-components"));
var SkipLink = inject_styles_default(import_styled_components43.default.a`${({ styles: styles2 }) => `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;

  &:active,
  &:focus {
    overflow: visible;
    position: absolute;
    z-index: 2;
    height: auto;
    margin: 0;
    width: auto;
    clip: auto;
    top: ${styles2.padding.small};
    left: ${styles2.padding.small};
    padding: ${styles2.padding.small} ${styles2.padding.large};
    background-color:  ${styles2.color2.sectionBackground};
  }
`}`);
var SkipLink_default = SkipLink;

// components/helper/SkipLink.tsx
var import_jsx_runtime48 = require("react/jsx-runtime");
var SkipLink2 = () => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(SkipLink_default, { href: "#main", children: "G\xE5 til hovedinnhold" });
var SkipLink_default2 = SkipLink2;

// utils/before-unload-handler.ts
function beforeUnloadHandler(event) {
  event.preventDefault();
  event.returnValue = "";
}

// utils/validator/index.ts
var import_get13 = __toESM(require("lodash/get"));
var inputRequiredProperties = ["id", "property", "heading"];
var requiredProperties = {
  Cell: ["id", "text"],
  Table: ["id", "text", "cells"],
  Result: ["id", "heading"],
  Page: ["id", "heading", "children"],
  Error: ["id", "heading", "children"],
  ErrorOk: ["id", "heading"],
  Group: ["id", "children"],
  Answer: ["id", "heading", "value"],
  Image: ["id", "image"],
  Text: ["id", "text"],
  Information: ["id", "text"],
  Branch: ["branches"],
  Reference: ["nodeId"],
  Checkbox: [...inputRequiredProperties, "options"],
  Radio: [...inputRequiredProperties, "options"],
  Select: [...inputRequiredProperties, "options"],
  Input: inputRequiredProperties,
  Number: inputRequiredProperties,
  Textarea: inputRequiredProperties,
  FetchOrg: [...inputRequiredProperties, "source"],
  Evaluation: ["id", "sad", "happy", "final"],
  Heading: ["id", "text"],
  Signature: ["id"],
  Sum: ["id", "heading", "values", "operations"]
};
var deprecatedProperties = {
  Table: [],
  Cell: [],
  FetchOrg: [],
  Page: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  Result: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  Error: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  Reference: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  Group: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  Answer: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  Image: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  Text: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  Branch: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  Checkbox: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  Radio: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  Select: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  Input: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  Number: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  Textarea: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" }
  ],
  ErrorOk: [],
  Evaluation: [],
  Heading: [],
  Signature: [],
  Sum: [],
  Information: []
};
function validateMeta({ title }) {
  if (!title) {
    return [{ id: "meta", path: ["meta"], error: "Missing title in meta" }];
  }
  return [];
}
function assertProperties(object, path, properties) {
  let errors = [];
  (properties || []).forEach((property) => {
    if ((0, import_get13.default)(object, property, void 0) === void 0) {
      errors = [
        ...errors,
        {
          path,
          id: (0, import_get13.default)(object, "id"),
          error: `${(0, import_get13.default)(object, "type")} is missing the '${property}' property`
        }
      ];
    }
  });
  return errors;
}
function assertDeprecations(object, path, properties) {
  let errors = [];
  (properties || []).forEach(({ property, use }) => {
    if ((0, import_get13.default)(object, property, void 0) !== void 0) {
      errors = [
        ...errors,
        {
          path,
          id: (0, import_get13.default)(object, "id"),
          error: `${(0, import_get13.default)(
            object,
            "type"
          )} is using the '${property}' property. It's deprecated and will be removed.${use ? ` Use '${use}' instead` : ""}.`
        }
      ];
    }
  });
  return errors;
}
function validateNode(node, path, ancestors) {
  let errors = [];
  if (!(0, import_get13.default)(node, "type")) {
    return [{ path, error: "Node is missing the type property" }];
  }
  if (ancestors.length && (0, import_get13.default)(node, "type") === "Page") {
    errors = [
      ...errors,
      {
        path,
        error: "Encountered a nested page. Page is only allowed at the top level"
      }
    ];
  }
  errors = [
    ...errors,
    ...assertProperties(node, path, requiredProperties[node.type]),
    ...assertDeprecations(node, path, deprecatedProperties[node.type])
  ];
  const logicalExpressionFields = ["hidden", "disabled", "test"];
  logicalExpressionFields.forEach((field) => {
    if (!(0, import_get13.default)(node, field)) {
      return;
    }
    try {
      dsl_default((0, import_get13.default)(node, field));
    } catch (e) {
      errors = [
        ...errors,
        { path: [...path, field], error: e.message }
      ];
    }
  });
  if ((node.type === "Page" || node.type === "Group") && node.children) {
    node.children.forEach((child, index) => {
      errors = [
        ...errors,
        ...validateNode(
          child,
          [...path, "children", String(index)],
          [...ancestors, node]
        )
      ];
    });
  }
  if (node.type === "Branch" && node.branches) {
    node.branches.forEach((branch, branchIndex) => {
      errors = [
        ...errors,
        ...assertProperties(
          branch,
          [...path, "branches", String(branchIndex)],
          ["test", "children"]
        )
      ];
      if (branch.test) {
        try {
          dsl_default(branch.test);
        } catch (e) {
          errors = [
            ...errors,
            {
              path: [...path, "branches", String(branchIndex), "test"],
              error: e.message
            }
          ];
        }
      }
      if (branch.children) {
        branch.children.forEach((child, index) => {
          errors = [
            ...errors,
            ...validateNode(
              child,
              [
                ...path,
                "branches",
                String(branchIndex),
                "children",
                String(index)
              ],
              [...ancestors, node]
            )
          ];
        });
      }
    });
  }
  if ((node.type === "Radio" || node.type === "Checkbox") && node.options) {
    node.options.forEach((option, index) => {
      errors = [
        ...errors,
        ...validateNode(
          option,
          [...path, "options", String(index)],
          [...ancestors, node]
        )
      ];
    });
  }
  if (node.type === "Image" && node.image) {
    if (typeof node.image !== "object") {
      errors = [
        ...errors,
        {
          path,
          error: `an object was expected for the image property. Got ${typeof node.image}`
        }
      ];
    }
    errors = [
      ...errors,
      ...assertProperties(
        __spreadProps(__spreadValues({}, node.image), { type: "Image" }),
        [...path, "image"],
        ["url", "alt"]
      )
    ];
  }
  return errors;
}
function validatePage(page, path) {
  let errors = [];
  errors = [
    ...errors,
    ...assertProperties(page, path, requiredProperties[page.type])
  ];
  if (hasProperty(page, "children")) {
    if (!Array.isArray(page.children)) {
      errors = [...errors, { path, error: "Children must be an array" }];
      return errors;
    }
    page.children.forEach((node, index) => {
      errors = [
        ...errors,
        ...validateNode(node, [...path, "children", String(index)], [page])
      ];
    });
  }
  return errors;
}
function validateRootBranch(branchNode, path) {
  var _a, _b, _c, _d;
  return [
    // Check for bad children node types
    ...(_b = (_a = branchNode == null ? void 0 : branchNode.branches) == null ? void 0 : _a.reduce(
      (errors, branch, index) => {
        if (branch.children.find(
          ({ type }) => !["Branch", "Page", "Result", "Error"].includes(type)
        )) {
          return [
            ...errors,
            {
              path: [...path, "branches", String(index)],
              error: "Root level Branch node contains a child that is not a Page, Result or Error"
            }
          ];
        }
        return errors;
      },
      []
    )) != null ? _b : [],
    // Visit Branch nodes below this Branch node
    ...(_d = (_c = branchNode == null ? void 0 : branchNode.branches) == null ? void 0 : _c.reduce(
      (errors, node, branchIndex) => [
        ...errors,
        ...node == null ? void 0 : node.children.reduce(
          (childBranchErrors, childBranch, childIndex) => [
            ...childBranchErrors,
            ...validateNode(
              childBranch,
              [
                ...path,
                "branches",
                String(branchIndex),
                "children",
                String(childIndex)
              ],
              [branchNode]
            )
          ],
          []
        )
      ],
      []
    )) != null ? _d : []
  ];
}
function validateSchema(schema) {
  let errors = [];
  schema.forEach((page, index) => {
    if (!isOfType(page, ["Page", "Result", "Branch", "Error"])) {
      errors = [
        ...errors,
        {
          path: ["schema", String(index)],
          error: "Top-level element is of invalid type. Must be Page, Result, Error or Branch (with Page/Result/Error as child)"
        }
      ];
    }
    errors = [
      ...errors,
      ...isOfType(page, ["Branch"]) ? validateRootBranch(page, ["schema", String(index)]) : validatePage(page, ["schema", String(index)])
    ];
  });
  return errors;
}
function validate({
  meta,
  schema
}) {
  const metaErrors = validateMeta(meta);
  const schemaErrors = validateSchema(schema);
  return [...metaErrors, ...schemaErrors];
}

// components/Wizard.tsx
var import_jsx_runtime49 = require("react/jsx-runtime");
function Wizard2({
  data = {
    [NAME]: {}
  },
  debug = false,
  warningBeforeUnload = true,
  exports = {},
  showIntro = () => {
  },
  styles: styles2 = {},
  translations = {},
  showResetModal: showResetModalDefault = true,
  schema,
  setData: setData2,
  tableOfContents,
  title,
  wizard
}) {
  const [pageId, setPageId] = (0, import_react13.useState)(data[NAME].page || wizard.schema[0].id);
  const [showResetModal, setShowResetModal] = (0, import_react13.useState)(showResetModalDefault);
  const pageWrapper = (0, import_react13.useRef)(null);
  const setPage = (page2, property) => {
    var _a;
    if (property) {
      setImmediate(() => {
        const element = document.getElementById(property);
        if (!element) {
          return;
        }
        window.scroll(0, element.offsetTop);
      });
    } else {
      window.scrollTo(0, 0);
    }
    (_a = pageWrapper == null ? void 0 : pageWrapper.current) == null ? void 0 : _a.focus();
    setData2("page", page2);
    setPageId(page2);
  };
  const trackPage = (isInitialRender) => {
    const firstPage2 = wizard.schema[0];
    if (!firstPage2) {
      return;
    }
    const heading = isOfType(firstPage2, ["Page", "Error"]) ? firstPage2.heading : void 0;
    if (isInitialRender) {
      track(wizard.meta.name, firstPage2.id, heading);
    } else {
      const page2 = (schema || []).find(
        (item) => hasProperty(item, "id") && item.id === pageId
      );
      if (page2 && hasProperty(page2, "id")) {
        track(wizard.meta.name, page2.id, heading);
      }
    }
  };
  (0, import_react13.useEffect)(() => {
    const _a = data[NAME] || {}, { $computed } = _a, wizardData = __objRest(_a, ["$computed"]);
    if (wizardData.page) {
      setPageId(wizardData.page);
    }
    if (showResetModal && !!Object.keys(wizardData).length) {
      setShowResetModal(true);
    }
    trackPage(true);
    helper();
    if (warningBeforeUnload) {
      window.addEventListener("beforeunload", beforeUnloadHandler);
      return () => {
        window.removeEventListener("beforeunload", beforeUnloadHandler);
      };
    }
  }, [data]);
  function helper() {
    if (!console || window.location.hostname !== "localhost") {
      return;
    }
    const errors = validate(wizard);
    if (!errors.length) {
      console.log("\u{1F308}  The schema is ok");
    } else {
      console.warn(
        "\u{1F692}  There seems to be something wrong with your schema \u{1F447}\n"
      );
      errors.forEach(({ path = [], error, id }) => {
        console.warn(`${path.join(".")}${id ? ` (${id})` : ""}:
${error}
    `);
      });
    }
  }
  ;
  function getCurrentIndex() {
    return Math.max(
      0,
      schema.findIndex(
        ({ id }) => id === getData(data).page
      )
    );
  }
  function changePage(distance) {
    const pageIndex2 = getCurrentIndex();
    const newIndex = pageIndex2 + distance;
    if (newIndex >= schema.length || newIndex < 0) {
      return;
    }
    const changeToPage = schema[newIndex];
    hasProperty(changeToPage, "id") && setPage(changeToPage.id);
  }
  ;
  const nextPage = () => changePage(1);
  const previousPage = () => changePage(-1);
  const pageIndex = Math.max(schema.findIndex((page2) => hasProperty(page2, "id") && page2.id === pageId), 0);
  const page = schema[pageIndex];
  const lastPage = pageIndex + 1 === schema.length;
  const firstPage = pageIndex === 0;
  const nextPageIsResult = schema[pageIndex + 1] ? schema[pageIndex + 1].type === "Result" : false;
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(StyleProvider, { styles: styles2, children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(Wizard, { children: [
    showResetModal && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Modal_default, { showIntro }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(grid_exports.Grid, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(SkipLink_default2, {}),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        Nav2,
        {
          page: page == null ? void 0 : page.id,
          setPage,
          heading: title,
          tableOfContents,
          showIntro,
          translations
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        grid_exports.FocusWrapper,
        {
          tabIndex: "-1",
          ref: pageWrapper,
          children: page && isOfType(page, ["Result"]) ? /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            Result_default,
            __spreadProps(__spreadValues({}, page), {
              debug,
              pageid: page.id,
              wizard,
              title,
              schema,
              setPage,
              exports
            })
          ) : page && isOfType(page, ["Page", "Error", "ErrorOk"]) && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            Page,
            __spreadValues({
              firstPage,
              lastPage,
              nextPage,
              previousPage,
              debug,
              nextPageIsResult,
              pageid: page.id
            }, page)
          )
        }
      )
    ] })
  ] }) });
}
var mapStateToProps4 = (state, { wizard, translations }) => {
  const nodeTitles = getNodeTitles(wizard.schema, translations || {}, state);
  const schema = reduceWizard(wizard.schema, state, nodeTitles, translations);
  return {
    schema,
    debug: !!window.location.search.match("debug"),
    tableOfContents: getPages(schema, nodeTitles),
    title: getTitle(state, wizard, translations || {}),
    data: state
  };
};
var Wizard_default = (0, import_react_redux9.connect)(
  mapStateToProps4,
  (dispatch) => (0, import_redux3.bindActionCreators)({ setData }, dispatch)
)(Wizard2);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Primitives,
  StyleProvider,
  Wizard,
  dsl,
  state,
  track,
  trackEvent
});
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
