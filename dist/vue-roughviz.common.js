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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0273":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("c1b2");
var definePropertyModule = __webpack_require__("4180");
var createPropertyDescriptor = __webpack_require__("2c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "0363":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3ac6");
var shared = __webpack_require__("d659");
var has = __webpack_require__("78e7");
var uid = __webpack_require__("3e80");
var NATIVE_SYMBOL = __webpack_require__("1e63");
var USE_SYMBOL_AS_UID = __webpack_require__("62d0");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "06fa":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "0b7b":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("8f95");
var Iterators = __webpack_require__("7463");
var wellKnownSymbol = __webpack_require__("0363");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1316":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9cd3");

/***/ }),

/***/ "1561":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "16f1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("5145");
__webpack_require__("3e47");

module.exports = __webpack_require__("d9f3");


/***/ }),

/***/ "1875":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "194a":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("cc94");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "1c0a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("d63b");
var classof = __webpack_require__("8f95");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1e63":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("06fa");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2874":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("d63b");
var defineProperty = __webpack_require__("4180").f;
var createNonEnumerableProperty = __webpack_require__("0273");
var has = __webpack_require__("78e7");
var toString = __webpack_require__("1c0a");
var wellKnownSymbol = __webpack_require__("0363");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),

/***/ "2c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "2dc0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("588c");

/***/ }),

/***/ "2ef0":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.15';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

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

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

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

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

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
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
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
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
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
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
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
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

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
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
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
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
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
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

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
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
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
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
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

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

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
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

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
      this.size = 0;
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
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
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
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
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
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

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
      this.size = 0;
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
      --this.size;
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
        ++this.size;
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

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

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
      this.size = 0;
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
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
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
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
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
      this.size = 0;
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
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
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
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
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
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
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
        baseAssignValue(object, key, value);
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
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
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
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

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
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
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
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
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
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
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
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
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
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
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
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
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
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
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
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
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
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
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
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

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
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
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
      path = castPath(path, object);

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
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array == null ? 0 : array.length,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
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
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

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
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

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
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
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
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
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
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
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
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
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
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
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
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
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
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

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
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
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
          result = new array.constructor(length);

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
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
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
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
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
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
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
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
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
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

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
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
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
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
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
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
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
     * @param {Function} func The function to convert.
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
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
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
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
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
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
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
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
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
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

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
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

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
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

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
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
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
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
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
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
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
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
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
      return value != null && (type == 'object' || type == 'function');
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
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
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
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
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
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
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
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

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
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
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

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

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
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
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

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

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
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
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
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
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

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
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

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
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
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
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
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
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
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
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
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // with lookup (in case of e.g. prototype pollution), and strip newlines if any.
      // A newline wouldn't be a valid sourceURL anyway, and it'd enable code injection.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/[\r\n]/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

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
      // Like with sourceURL, we take care to not check the option's prototype,
      // as this configuration is a code injection vector.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
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
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

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

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

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

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else {}
}.call(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba"), __webpack_require__("62e4")(module)))

/***/ }),

/***/ "2f5a":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("96e9");
var global = __webpack_require__("3ac6");
var isObject = __webpack_require__("dfdb");
var createNonEnumerableProperty = __webpack_require__("0273");
var objectHas = __webpack_require__("78e7");
var sharedKey = __webpack_require__("b2ed");
var hiddenKeys = __webpack_require__("6e9a");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "2f97":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("dfdb");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3a78":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function () {function I(a){return a&&a.__esModule?{d:a.default}:{d:a}}var yc={};var i={};const $d=A=>{A.append("defs").append("style").attr("type","text/css").text("@font-face {\n    font-family: 'gaeguregular';\n    src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2'),\n         url(data:application/font-woff;charset=utf-8;base64,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) format('woff');\n    font-weight: normal;\n    font-style: normal;\n}")},oi=A=>{A.append("defs").append("style").attr("type","text/css").text("@font-face {\n    font-family: 'indie_flowerregular';\n    src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2'),\n         url(data:application/font-woff;charset=utf-8;base64,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) format('woff');\n    font-weight: normal;\n    font-style: normal;\n\t}")};i={addFontGaegu:$d,addFontIndieFlower:oi};var Ad=function($,t){return $<t?-1:$>t?1:$>=t?0:NaN};var li=function(r){return 1===r.length&&(r=ii(r)),{left:function(n,t,e,$){for(null==e&&(e=0),null==$&&($=n.length);e<$;){var a=e+$>>>1;r(n[a],t)<0?e=a+1:$=a}return e},right:function(n,t,e,$){for(null==e&&(e=0),null==$&&($=n.length);e<$;){var a=e+$>>>1;r(n[a],t)>0?$=a:e=a+1}return e}}};function ii(r){return function(n,t){return Ad(r(n),t)}}var xd=li(Ad),vd=xd.right;var ti=xd.left;var r=function(e,o){let t,l;if(void 0===o)for(const $ of e)null!=$&&(void 0===t?$>=$&&(t=l=$):(t>$&&(t=$),l<$&&(l=$)));else{let $=-1;for(let f of e)null!=(f=o(f,++$,e))&&(void 0===t?f>=f&&(t=l=f):(t>f&&(t=f),l<f&&(l=f)))}return[t,l]};var od=function(t,e,r){t=+t,e=+e,r=(a=arguments.length)<2?(e=t,t=0,1):a<3?1:+r;for(var $=-1,a=0|Math.max(0,Math.ceil((e-t)/r)),c=new Array(a);++$<a;)c[$]=t+$*r;return c};var Ab=Math.sqrt(50),zb=Math.sqrt(10),xb=Math.sqrt(2),Fh=function($,t,r){var e,a,o,z,E=-1;if(r=+r,($=+$)===(t=+t)&&r>0)return[$];if((e=t<$)&&(a=$,$=t,t=a),0===(z=ua($,t,r))||!isFinite(z))return[];if(z>0)for($=Math.ceil($/z),t=Math.floor(t/z),o=new Array(a=Math.ceil(t-$+1));++E<a;)o[E]=($+E)*z;else for($=Math.floor($*z),t=Math.ceil(t*z),o=new Array(a=Math.ceil($-t+1));++E<a;)o[E]=($-E)/z;return e&&o.reverse(),o};function ua($,t,r){var e=(t-$)/Math.max(0,r),a=Math.floor(Math.log(e)/Math.LN10),o=e/Math.pow(10,a);return a>=0?(o>=Ab?10:o>=zb?5:o>=xb?2:1)*Math.pow(10,a):-Math.pow(10,-a)/(o>=Ab?10:o>=zb?5:o>=xb?2:1)}function De($,t,r){var e=Math.abs(t-$)/Math.max(0,r),a=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),o=e/a;return o>=Ab?a*=10:o>=zb?a*=5:o>=xb&&(a*=2),t<$?-a:a}function w(e,o){let t;if(void 0===o)for(const l of e)null!=l&&(t<l||void 0===t&&l>=l)&&(t=l);else{let l=-1;for(let u of e)null!=(u=o(u,++l,e))&&(t<u||void 0===t&&u>=u)&&(t=u)}return t}function rc(e,o){let t;if(void 0===o)for(const l of e)null!=l&&(t>l||void 0===t&&l>=l)&&(t=l);else{let l=-1;for(let $ of e)null!=($=o($,++l,e))&&(t>$||void 0===t&&$>=$)&&(t=$)}return t}var Ia=Array.prototype.slice;var qi=function(x){return x};var Za=1,Hb=2,Ka=3,T=4,tc=1e-6;function $h(t){return"translate("+(t+.5)+",0)"}function Pg(t){return"translate(0,"+(t+.5)+")"}function Je(t){return function(r){return+t(r)}}function ae(t){var r=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(r=Math.round(r)),function($){return+t($)+r}}function _h(){return!this.__axis}function kd(t,r){var $=[],n=null,e=null,a=6,i=6,c=3,o=t===Za||t===T?-1:1,l=t===T||t===Hb?"x":"y",s=t===Za||t===Ka?$h:Pg;function u(u){var f=null==n?r.ticks?r.ticks.apply(r,$):r.domain():n,p=null==e?r.tickFormat?r.tickFormat.apply(r,$):qi:e,v=Math.max(a,0)+c,x=r.range(),m=+x[0]+.5,h=+x[x.length-1]+.5,g=(r.bandwidth?ae:Je)(r.copy()),d=u.selection?u.selection():u,k=d.selectAll(".domain").data([null]),y=d.selectAll(".tick").data(f,r).order(),b=y.exit(),M=y.enter().append("g").attr("class","tick"),_=y.select("line"),F=y.select("text");k=k.merge(k.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),y=y.merge(M),_=_.merge(M.append("line").attr("stroke","currentColor").attr(l+"2",o*a)),F=F.merge(M.append("text").attr("fill","currentColor").attr(l,o*v).attr("dy",t===Za?"0em":t===Ka?"0.71em":"0.32em")),u!==d&&(k=k.transition(u),y=y.transition(u),_=_.transition(u),F=F.transition(u),b=b.transition(u).attr("opacity",tc).attr("transform",function(t){return isFinite(t=g(t))?s(t):this.getAttribute("transform")}),M.attr("opacity",tc).attr("transform",function(t){var r=this.parentNode.__axis;return s(r&&isFinite(r=r(t))?r:g(t))})),b.remove(),k.attr("d",t===T||t==Hb?i?"M"+o*i+","+m+"H0.5V"+h+"H"+o*i:"M0.5,"+m+"V"+h:i?"M"+m+","+o*i+"V0.5H"+h+"V"+o*i:"M"+m+",0.5H"+h),y.attr("opacity",1).attr("transform",function(t){return s(g(t))}),_.attr(l+"2",o*a),F.attr(l,o*v).text(p),d.filter(_h).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Hb?"start":t===T?"end":"middle"),d.each(function(){this.__axis=g})}return u.scale=function(t){return arguments.length?(r=t,u):r},u.ticks=function(){return $=Ia.call(arguments),u},u.tickArguments=function(t){return arguments.length?($=null==t?[]:Ia.call(t),u):$.slice()},u.tickValues=function(t){return arguments.length?(n=null==t?null:Ia.call(t),u):n&&n.slice()},u.tickFormat=function(t){return arguments.length?(e=t,u):e},u.tickSize=function(t){return arguments.length?(a=i=+t,u):a},u.tickSizeInner=function(t){return arguments.length?(a=+t,u):a},u.tickSizeOuter=function(t){return arguments.length?(i=+t,u):i},u.tickPadding=function(t){return arguments.length?(c=+t,u):c},u}function ia(t){return kd(Ka,t)}function ja(t){return kd(T,t)}function dc($){return function(t,r,e){return 2===arguments.length&&"function"==typeof r&&(e=r,r=void 0),zc(t,r).then(function(t){return $(t,e)})}}var ud={},Ta={},qb=34,S=10,rb=13;function Ib(r){return new Function("d","return {"+r.map(function(r,$){return JSON.stringify(r)+": d["+$+"]"}).join(",")+"}")}function le(r,$){var u=Ib(r);return function(a,n){return $(u(a),n,r)}}function zd(r){var $=Object.create(null),u=[];return r.forEach(function(r){for(var a in r)a in $||u.push($[a]=a)}),u}function e(r,$){var u=r+"",a=u.length;return a<$?new Array($-a+1).join(0)+u:u}function Lf(r){return r<0?"-"+e(-r,6):r>9999?"+"+e(r,6):e(r,4)}function Xf(r){var $=r.getUTCHours(),u=r.getUTCMinutes(),a=r.getUTCSeconds(),n=r.getUTCMilliseconds();return isNaN(r)?"Invalid Date":Lf(r.getUTCFullYear(),4)+"-"+e(r.getUTCMonth()+1,2)+"-"+e(r.getUTCDate(),2)+(n?"T"+e($,2)+":"+e(u,2)+":"+e(a,2)+"."+e(n,3)+"Z":a?"T"+e($,2)+":"+e(u,2)+":"+e(a,2)+"Z":u||$?"T"+e($,2)+":"+e(u,2)+"Z":"")}var Fc=function(r){var $=new RegExp("[\""+r+"\n\r]"),u=r.charCodeAt(0);function a(r,$){var a,n=[],t=r.length,e=0,o=0,v=t<=0,R=!1;function W(){if(v)return Ta;if(R)return R=!1,ud;var $,a,n=e;if(r.charCodeAt(n)===qb){for(;e++<t&&r.charCodeAt(e)!==qb||r.charCodeAt(++e)===qb;);return($=e)>=t?v=!0:(a=r.charCodeAt(e++))===S?R=!0:a===rb&&(R=!0,r.charCodeAt(e)===S&&++e),r.slice(n+1,$-1).replace(/""/g,"\"")}for(;e<t;){if((a=r.charCodeAt($=e++))===S)R=!0;else if(a===rb)R=!0,r.charCodeAt(e)===S&&++e;else if(a!==u)continue;return r.slice(n,$)}return v=!0,r.slice(n,t)}for(r.charCodeAt(t-1)===S&&--t,r.charCodeAt(t-1)===rb&&--t;(a=W())!==Ta;){for(var i=[];a!==ud&&a!==Ta;)i.push(a),a=W();$&&null==(i=$(i,o++))||n.push(i)}return n}function n($,u){return $.map(function($){return u.map(function(r){return e($[r])}).join(r)})}function t($){return $.map(e).join(r)}function e(r){return null==r?"":r instanceof Date?Xf(r):$.test(r+="")?"\""+r.replace(/"/g,"\"\"")+"\"":r}return{parse:function(r,$){var u,n,t=a(r,function(r,a){if(u)return u(r,a-1);n=r,u=$?le(r,$):Ib(r)});return t.columns=n||[],t},parseRows:a,format:function($,u){return null==u&&(u=zd($)),[u.map(e).join(r)].concat(n($,u)).join("\n")},formatBody:function(r,$){return null==$&&($=zd(r)),n(r,$).join("\n")},formatRows:function(r){return r.map(t).join("\n")}}};var da=Fc(","),qe=da.parse;var Fj=da.parseRows;var Ej=da.format;var Dj=da.formatBody;var Cj=da.formatRows;var fa=Fc("\t"),Hh=fa.parse;var Bj=fa.parseRows;var Aj=fa.format;var zj=fa.formatBody;var yj=fa.formatRows;function Zd(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}var zc=function(t,e){return fetch(t,e).then(Zd)};var H=dc(qe);var G=dc(Hh);function ff(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.json()}var Uc=function(t,r){return fetch(t,r).then(ff)};function Ja(e){return function($,r){return zc($,r).then(function($){return new DOMParser().parseFromString($,e)})}}var xj=Ja("application/xml");var wj=Ja("text/html");var vj=Ja("image/svg+xml");var nb,s,eg;function Qg($){return nb=Ae($),s=nb.format,eg=nb.formatPrefix,nb}var qa=function(e,t){if((l=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var l,n=e.slice(0,l);return[n.length>1?n[0]+n.slice(2):n,+e.slice(l+1)]};var M=function(t){return(t=qa(Math.abs(t)))?t[1]:NaN};var Nh=function(r,t){return function(e,n){for(var $=e.length,u=[],o=0,a=r[0],f=0;$>0&&a>0&&(f+a+1>n&&(a=Math.max(1,n-f)),u.push(e.substring($-=a,$+a)),!((f+=a+1)>n));)a=r[o=(o+1)%r.length];return u.reverse().join(t)}};var Ph=function(t){return function(e){return e.replace(/[0-9]/g,function(e){return t[+e]})}};var Hd=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function pa(i){if(!(t=Hd.exec(i)))throw new Error("invalid format: "+i);var t;return new Bb({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}function Bb(i){this.fill=void 0===i.fill?" ":i.fill+"",this.align=void 0===i.align?">":i.align+"",this.sign=void 0===i.sign?"-":i.sign+"",this.symbol=void 0===i.symbol?"":i.symbol+"",this.zero=!!i.zero,this.width=void 0===i.width?void 0:+i.width,this.comma=!!i.comma,this.precision=void 0===i.precision?void 0:+i.precision,this.trim=!!i.trim,this.type=void 0===i.type?"":i.type+""}pa.prototype=Bb.prototype,Bb.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var Qd=function(e){e:for(var r,t=e.length,a=1,$=-1;a<t;++a)switch(e[a]){case".":$=r=a;break;case"0":0===$&&($=a),r=a;break;default:if($>0){if(!+e[a])break e;$=0}}return $>0?e.slice(0,$)+e.slice(r+1):e};var Td;var Wd=function(e,p){var r,$=qa(e,p);if(!$)return e+"";var t=$[0],f=$[1],o=f-(r=Td=3*Math.max(-8,Math.min(8,Math.floor(f/3))),r)+1,x=t.length;return o===x?t:o>x?t+new Array(o-x+1).join("0"):o>0?t.slice(0,o)+"."+t.slice(o):"0."+new Array(1-o).join("0")+qa(e,Math.max(0,p+o-1))[0]};var jd=function(r,e){var t=qa(r,e);if(!t)return r+"";var $=t[0],a=t[1];return a<0?"0."+new Array(-a).join("0")+$:$.length>a+1?$.slice(0,a+1)+"."+$.slice(a+1):$+new Array(a-$.length+2).join("0")};var Gc={"%":function(t,r){return(100*t).toFixed(r)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,r){return t.toExponential(r)},f:function(t,r){return t.toFixed(r)},g:function(t,r){return t.toPrecision(r)},o:function(t){return Math.round(t).toString(8)},p:function(t,r){return jd(100*t,r)},r:jd,s:Wd,X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}};var qc=function(t){return t};var kc=Array.prototype.map,rd=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"],Ae=function(r){var e=void 0===r.grouping||void 0===r.thousands?qc:Nh(kc.call(r.grouping,Number),r.thousands+""),t=void 0===r.currency?"":r.currency[0]+"",a=void 0===r.currency?"":r.currency[1]+"",i=void 0===r.decimal?".":r.decimal+"",m=void 0===r.numerals?qc:Ph(kc.call(r.numerals,String)),$=void 0===r.percent?"%":r.percent+"",o=void 0===r.minus?"-":r.minus+"",n=void 0===r.nan?"NaN":r.nan+"";function p(r){var p=(r=pa(r)).fill,s=r.align,c=r.sign,f=r.symbol,u=r.zero,l=r.width,M=r.comma,I=r.precision,V=r.trim,v=r.type;"n"===v?(M=!0,v="g"):Gc[v]||(void 0===I&&(I=12),V=!0,v="g"),(u||"0"===p&&"="===s)&&(u=!0,p="0",s="=");var d="$"===f?t:"#"===f&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",h="$"===f?a:/[%p]/.test(v)?$:"",g=Gc[v],x=/[defgprs%]/.test(v);function y(r){var t,a,$,f=d,y=h;if("c"===v)y=g(r)+y,r="";else{var j=(r=+r)<0;if(r=isNaN(r)?n:g(Math.abs(r),I),V&&(r=Qd(r)),j&&0==+r&&(j=!1),f=(j?"("===c?c:o:"-"===c||"("===c?"":c)+f,y=("s"===v?rd[8+Td/3]:"")+y+(j&&"("===c?")":""),x)for(t=-1,a=r.length;++t<a;)if(48>($=r.charCodeAt(t))||$>57){y=(46===$?i+r.slice(t+1):r.slice(t))+y,r=r.slice(0,t);break}}M&&!u&&(r=e(r,1/0));var b=f.length+r.length+y.length,q=b<l?new Array(l-b+1).join(p):"";switch(M&&u&&(r=e(q+r,q.length?l-y.length:1/0),q=""),s){case"<":r=f+r+y+q;break;case"=":r=f+q+r+y;break;case"^":r=q.slice(0,b=q.length>>1)+f+r+y+q.slice(b);break;default:r=q+f+r+y;}return m(r)}return I=void 0===I?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,I)):Math.max(0,Math.min(20,I)),y.toString=function(){return r+""},y}return{format:p,formatPrefix:function(r,e){var t=p(((r=pa(r)).type="f",r)),a=3*Math.max(-8,Math.min(8,Math.floor(M(e)/3))),i=Math.pow(10,-a),m=rd[8+a/3];return function(r){return t(i*r)+m}}}};Qg({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"});var Ge=function(e){return Math.max(0,-M(Math.abs(e)))};var Ie=function(t,$){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(M($)/3)))-M(Math.abs(t)))};var Te=function($,e){return $=Math.abs($),e=Math.abs(e)-$,Math.max(0,M(e)-M($))+1};function ka(){var n,r,t=na().unknown(void 0),e=t.domain,i=t.range,u=0,a=1,o=!1,$=0,l=0,g=.5;function d(){var t=e().length,d=a<u,p=d?a:u,c=d?u:a;n=(c-p)/Math.max(1,t-$+2*l),o&&(n=Math.floor(n)),p+=(c-p-n*(t-$))*g,r=n*(1-$),o&&(p=Math.round(p),r=Math.round(r));var f=od(t).map(function(r){return p+n*r});return i(d?f.reverse():f)}return delete t.unknown,t.domain=function(n){return arguments.length?(e(n),d()):e()},t.range=function(n){return arguments.length?([u,a]=n,u=+u,a=+a,d()):[u,a]},t.rangeRound=function(n){return[u,a]=n,u=+u,a=+a,o=!0,d()},t.bandwidth=function(){return r},t.step=function(){return n},t.round=function(n){return arguments.length?(o=!!n,d()):o},t.padding=function(n){return arguments.length?($=Math.min(1,l=+n),d()):$},t.paddingInner=function(n){return arguments.length?($=Math.min(1,n),d()):$},t.paddingOuter=function(n){return arguments.length?(l=+n,d()):l},t.align=function(n){return arguments.length?(g=Math.max(0,Math.min(1,n)),d()):g},t.copy=function(){return ka(e(),[u,a]).round(o).paddingInner($).paddingOuter(l).align(g)},Xa.apply(d(),arguments)}function Vb(n){var r=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return Vb(r())},n}function Tb(){return Vb(ka.apply(null,arguments).paddingInner(1))}function Xa(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);}return this}const Qb=Symbol("implicit");function na(){var t=new Map,n=[],e=[],r=Qb;function i(i){var $=i+"",o=t.get($);if(!o){if(r!==Qb)return r;t.set($,o=n.push(i))}return e[(o-1)%e.length]}return i.domain=function(e){if(!arguments.length)return n.slice();n=[],t=new Map;for(const r of e){const e=r+"";t.has(e)||t.set(e,n.push(r))}return i},i.range=function(t){return arguments.length?(e=Array.from(t),i):e.slice()},i.unknown=function(t){return arguments.length?(r=t,i):r},i.copy=function(){return na(n,e).unknown(r)},Xa.apply(i,arguments),i}function Uf(r){var t=r.domain;return r.ticks=function(r){var $=t();return Fh($[0],$[$.length-1],null==r?10:r)},r.tickFormat=function(r,$){var e=t();return Eh(e[0],e[e.length-1],null==r?10:r,$)},r.nice=function($){null==$&&($=10);var e,i=t(),n=0,o=i.length-1,a=i[n],c=i[o];return c<a&&(e=a,a=c,c=e,e=n,n=o,o=e),(e=ua(a,c,$))>0?(a=Math.floor(a/e)*e,c=Math.ceil(c/e)*e,e=ua(a,c,$)):e<0&&(a=Math.ceil(a*e)/e,c=Math.floor(c*e)/e,e=ua(a,c,$)),e>0?(i[n]=Math.floor(a/e)*e,i[o]=Math.ceil(c/e)*e,t(i)):e<0&&(i[n]=Math.ceil(a*e)/e,i[o]=Math.floor(c*e)/e,t(i)),r},r}function v(){var r=Ah();return r.copy=function(){return sh(r,v())},Xa.apply(r,arguments),Uf(r)}function u(){}var P=function(t,e,r){t.prototype=e.prototype=r,r.constructor=t};function ga(t,e){var r=Object.create(t.prototype);for(var o in e)r[o]=e[o];return r}var D=.7;var O=1/D;var N="\\s*([+-]?\\d+)\\s*",$="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",n="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",ai=/^#([0-9a-f]{3})$/,bi=/^#([0-9a-f]{6})$/,di=new RegExp("^rgb\\("+[N,N,N]+"\\)$"),fi=new RegExp("^rgb\\("+[n,n,n]+"\\)$"),hi=new RegExp("^rgba\\("+[N,N,N,$]+"\\)$"),ni=new RegExp("^rgba\\("+[n,n,n,$]+"\\)$"),pi=new RegExp("^hsl\\("+[$,n,n]+"\\)$"),Dd=new RegExp("^hsla\\("+[$,n,n,$]+"\\)$"),Wb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Xb(){return this.rgb().formatHex()}function Ld(){return cd(this).formatHsl()}function ac(){return this.rgb().formatRgb()}function ca(r){var e;return r=(r+"").trim().toLowerCase(),(e=ai.exec(r))?new h((e=parseInt(e[1],16))>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):(e=bi.exec(r))?ic(parseInt(e[1],16)):(e=di.exec(r))?new h(e[1],e[2],e[3],1):(e=fi.exec(r))?new h(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=hi.exec(r))?jc(e[1],e[2],e[3],e[4]):(e=ni.exec(r))?jc(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=pi.exec(r))?$c(e[1],e[2]/100,e[3]/100,1):(e=Dd.exec(r))?$c(e[1],e[2]/100,e[3]/100,e[4]):Wb.hasOwnProperty(r)?ic(Wb[r]):"transparent"===r?new h(NaN,NaN,NaN,0):null}function ic(r){return new h(r>>16&255,r>>8&255,255&r,1)}function jc(r,e,$,t){return t<=0&&(r=e=$=NaN),new h(r,e,$,t)}function ub(r){return r instanceof u||(r=ca(r)),r?new h((r=r.rgb()).r,r.g,r.b,r.opacity):new h}function sa(r,e,$,t){return 1===arguments.length?ub(r):new h(r,e,$,null==t?1:t)}function h(r,e,$,t){this.r=+r,this.g=+e,this.b=+$,this.opacity=+t}function Bc(){return"#"+sb(this.r)+sb(this.g)+sb(this.b)}function Ec(){var r=this.opacity;return(1===(r=isNaN(r)?1:Math.max(0,Math.min(1,r)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===r?")":", "+r+")")}function sb(r){return((r=Math.max(0,Math.min(255,Math.round(r)||0)))<16?"0":"")+r.toString(16)}function $c(r,e,$,t){return t<=0?r=e=$=NaN:$<=0||$>=1?r=e=NaN:e<=0&&(r=NaN),new m(r,e,$,t)}function cd(r){if(r instanceof m)return new m(r.h,r.s,r.l,r.opacity);if(r instanceof u||(r=ca(r)),!r)return new m;if(r instanceof m)return r;var e=(r=r.rgb()).r/255,$=r.g/255,t=r.b/255,a=Math.min(e,$,t),o=Math.max(e,$,t),n=NaN,i=o-a,l=(o+a)/2;return i?(n=e===o?($-t)/i+6*($<t):$===o?(t-e)/i+2:(e-$)/i+4,i/=l<.5?o+a:2-o-a,n*=60):i=l>0&&l<1?0:n,new m(n,i,l,r.opacity)}function pb(r,e,$,t){return 1===arguments.length?cd(r):new m(r,e,$,null==t?1:t)}function m(r,e,$,t){this.h=+r,this.s=+e,this.l=+$,this.opacity=+t}function ob(r,e,$){return 255*(r<60?e+($-e)*r/60:r<180?$:r<240?e+($-e)*(240-r)/60:e)}P(u,ca,{copy:function(r){return Object.assign(new this.constructor,this,r)},displayable:function(){return this.rgb().displayable()},hex:Xb,formatHex:Xb,formatHsl:Ld,formatRgb:ac,toString:ac}),P(h,sa,ga(u,{brighter:function(r){return r=null==r?O:Math.pow(O,r),new h(this.r*r,this.g*r,this.b*r,this.opacity)},darker:function(r){return r=null==r?D:Math.pow(D,r),new h(this.r*r,this.g*r,this.b*r,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Bc,formatHex:Bc,formatRgb:Ec,toString:Ec})),P(m,pb,ga(u,{brighter:function(r){return r=null==r?O:Math.pow(O,r),new m(this.h,this.s,this.l*r,this.opacity)},darker:function(r){return r=null==r?D:Math.pow(D,r),new m(this.h,this.s,this.l*r,this.opacity)},rgb:function(){var r=this.h%360+360*(this.h<0),e=isNaN(r)||isNaN(this.s)?0:this.s,$=this.l,t=$+($<.5?$:1-$)*e,a=2*$-t;return new h(ob(r>=240?r-240:r+120,a,t),ob(r,a,t),ob(r<120?r+240:r-120,a,t),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var r=this.opacity;return(1===(r=isNaN(r)?1:Math.max(0,Math.min(1,r)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===r?")":", "+r+")")}}));var md=Math.PI/180;var pd=180/Math.PI;var wa=18,Lb=.96422,Mb=1,Ob=.82521,Pb=4/29,L=6/29,Rb=3*L*L,Zf=L*L*L;function Sb($){if($ instanceof o)return new o($.l,$.a,$.b,$.opacity);if($ instanceof p)return ec($);$ instanceof h||($=ub($));var r,t,a=fb($.r),f=fb($.g),e=fb($.b),n=mb((.2225045*a+.7168786*f+.0606169*e)/Mb);return a===f&&f===e?r=t=n:(r=mb((.4360747*a+.3850649*f+.1430804*e)/Lb),t=mb((.0139322*a+.0971045*f+.7141733*e)/Ob)),new o(116*n-16,500*(r-n),200*(n-t),$.opacity)}function Ig($,r,t,a){return 1===arguments.length?Sb($):new o($,r,t,null==a?1:a)}function o($,r,t,a){this.l=+$,this.a=+r,this.b=+t,this.opacity=+a}function mb($){return $>Zf?Math.pow($,1/3):$/Rb+Pb}function lb($){return $>L?$*$*$:Rb*($-Pb)}function jb($){return 255*($<=.0031308?12.92*$:1.055*Math.pow($,1/2.4)-.055)}function fb($){return($/=255)<=.04045?$/12.92:Math.pow(($+.055)/1.055,2.4)}function Oh($){if($ instanceof p)return new p($.h,$.c,$.l,$.opacity);if($ instanceof o||($=Sb($)),0===$.a&&0===$.b)return new p(NaN,0<$.l&&$.l<100?0:NaN,$.l,$.opacity);var r=Math.atan2($.b,$.a)*pd;return new p(r<0?r+360:r,Math.sqrt($.a*$.a+$.b*$.b),$.l,$.opacity)}function bb($,r,t,a){return 1===arguments.length?Oh($):new p($,r,t,null==a?1:a)}function p($,r,t,a){this.h=+$,this.c=+r,this.l=+t,this.opacity=+a}function ec($){if(isNaN($.h))return new o($.l,0,0,$.opacity);var r=$.h*md;return new o($.l,Math.cos(r)*$.c,Math.sin(r)*$.c,$.opacity)}P(o,Ig,ga(u,{brighter:function($){return new o(this.l+wa*(null==$?1:$),this.a,this.b,this.opacity)},darker:function($){return new o(this.l-wa*(null==$?1:$),this.a,this.b,this.opacity)},rgb:function(){var $=(this.l+16)/116,r=isNaN(this.a)?$:$+this.a/500,t=isNaN(this.b)?$:$-this.b/200;return r=Lb*lb(r),$=Mb*lb($),t=Ob*lb(t),new h(jb(3.1338561*r-1.6168667*$-.4906146*t),jb(-.9787684*r+1.9161415*$+.033454*t),jb(.0719453*r-.2289914*$+1.4052427*t),this.opacity)}})),P(p,bb,ga(u,{brighter:function($){return new p(this.h,this.c,this.l+wa*(null==$?1:$),this.opacity)},darker:function($){return new p(this.h,this.c,this.l-wa*(null==$?1:$),this.opacity)},rgb:function(){return ec(this).rgb()}}));var gc=-.14861,ab=1.78277,$a=-.29227,Fa=-.90649,aa=1.97294,nc=aa*Fa,oc=aa*ab,pc=ab*$a-Fa*gc;function Ed($){if($ instanceof y)return new y($.h,$.s,$.l,$.opacity);$ instanceof h||($=ub($));var r=$.r/255,t=$.g/255,e=$.b/255,C=(pc*e+nc*r-oc*t)/(pc+nc-oc),a=e-C,M=(aa*(t-C)-$a*a)/Fa,i=Math.sqrt(M*M+a*a)/(aa*C*(1-C)),X=i?Math.atan2(M,a)*pd-120:NaN;return new y(X<0?X+360:X,i,C,$.opacity)}function Oa($,r,t,e){return 1===arguments.length?Ed($):new y($,r,t,null==e?1:e)}function y($,r,t,e){this.h=+$,this.s=+r,this.l=+t,this.opacity=+e}P(y,Oa,ga(u,{brighter:function($){return $=null==$?O:Math.pow(O,$),new y(this.h,this.s,this.l*$,this.opacity)},darker:function($){return $=null==$?D:Math.pow(D,$),new y(this.h,this.s,this.l*$,this.opacity)},rgb:function(){var $=isNaN(this.h)?0:(this.h+120)*md,r=+this.l,t=isNaN(this.s)?0:this.s*r*(1-r),e=Math.cos($),C=Math.sin($);return new h(255*(r+t*(gc*e+ab*C)),255*(r+t*($a*e+Fa*C)),255*(r+t*(aa*e)),this.opacity)}}));function uc($,r,t,e,a){var l=$*$,o=l*$;return((1-3*$+3*l-o)*r+(4-6*l+3*o)*t+(1+3*$+3*l-3*o)*e+o*a)/6}var Md=function($){var r=$.length-1;return function(t){var e=t<=0?t=0:t>=1?(t=1,r-1):Math.floor(t*r),a=$[e],l=$[e+1],o=e>0?$[e-1]:2*a-l,s=e<r-1?$[e+2]:2*l-a;return uc((t-e/r)*r,o,a,l,s)}};var Nd=function(r){var $=r.length;return function(t){var e=Math.floor(((t%=1)<0?++t:t)*$),n=r[(e+$-1)%$],a=r[e%$],o=r[(e+1)%$],h=r[(e+2)%$];return uc((t-e/$)*$,n,a,o,h)}};function xc($,t){return function(r){return $+r*t}}function Pd($,t,r){return $=Math.pow($,r),t=Math.pow(t,r)-$,r=1/r,function(n){return Math.pow($+n*t,r)}}function hb($,t){var r=t-$;return r?xc($,r>180||r<-180?r-360*Math.round(r/360):r):Ha(isNaN($)?t:$)}function Sd($){return 1==($=+$)?k:function(t,r){return r-t?Pd(t,r,$):Ha(isNaN(t)?r:t)}}function k($,t){var r=t-$;return r?xc($,r):Ha(isNaN($)?t:$)}var Ha=function(t){return function(){return t}};var Hc=function r($){var o=Sd($);function e(r,$){var e=o((r=sa(r)).r,($=sa($)).r),a=o(r.g,$.g),t=o(r.b,$.b),i=k(r.opacity,$.opacity);return function($){return r.r=e($),r.g=a($),r.b=t($),r.opacity=i($),r+""}}return e.gamma=r,e}(1);function Tc(r){return function($){var o,e,a=$.length,t=new Array(a),i=new Array(a),v=new Array(a);for(o=0;o<a;++o)e=sa($[o]),t[o]=e.r||0,i[o]=e.g||0,v[o]=e.b||0;return t=r(t),i=r(i),v=r(v),e.opacity=1,function(r){return e.r=t(r),e.g=i(r),e.b=v(r),e+""}}}var uj=Tc(Md);var tj=Tc(Nd);var be=function(r,e){var t,$=e?e.length:0,a=r?Math.min($,r.length):0,n=new Array(a),o=new Array($);for(t=0;t<a;++t)n[t]=Na(r[t],e[t]);for(;t<$;++t)o[t]=e[t];return function(r){for(t=0;t<a;++t)o[t]=n[t](r);return o}};var ee=function(e,t){var r=new Date;return t-=e=+e,function($){return r.setTime(e+t*$),r}};var l=function(t,$){return $-=t=+t,function(e){return t+$*e}};var ke=function(e,r){var t,$={},i={};for(t in null!==e&&"object"==typeof e||(e={}),null!==r&&"object"==typeof r||(r={}),r)t in e?$[t]=Na(e[t],r[t]):i[t]=r[t];return function(e){for(t in $)i[t]=$[t](e);return i}};var La=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ma=new RegExp(La.source,"g");function se(r){return function(){return r}}function ue(r){return function($){return r($)+""}}var ze=function(r,$){var n,e,t,a=La.lastIndex=Ma.lastIndex=0,u=-1,E=[],o=[];for(r+="",$+="";(n=La.exec(r))&&(e=Ma.exec($));)(t=e.index)>a&&(t=$.slice(a,t),E[u]?E[u]+=t:E[++u]=t),(n=n[0])===(e=e[0])?E[u]?E[u]+=e:E[++u]=e:(E[++u]=null,o.push({i:u,x:l(n,e)})),a=Ma.lastIndex;return a<$.length&&(t=$.slice(a),E[u]?E[u]+=t:E[++u]=t),E.length<2?o[0]?ue(o[0].x):se($):($=o.length,function(r){for(var n,e=0;e<$;++e)E[(n=o[e]).i]=n.x(r);return E.join("")})};var Na=function(r,$){var e,c=typeof $;return null==$||"boolean"===c?Ha($):("number"===c?l:"string"===c?(e=ca($))?($=e,Hc):ze:$ instanceof ca?Hc:$ instanceof Date?ee:Array.isArray($)?be:"function"!=typeof $.valueOf&&"function"!=typeof $.toString||isNaN($)?ke:l)(r,$)};var Ce=function(t,n){return n-=t=+t,function(r){return Math.round(t+n*r)}};function ld(r,e,t,n){function a(r){return r.length?r.pop()+" ":""}return function($,s){var o=[],p=[];return $=r($),s=r(s),function(r,n,a,$,s,o){if(r!==a||n!==$){var p=s.push("translate(",null,e,null,t);o.push({i:p-4,x:l(r,a)},{i:p-2,x:l(n,$)})}else(a||$)&&s.push("translate("+a+e+$+t)}($.translateX,$.translateY,s.translateX,s.translateY,o,p),function(r,e,t,$){r!==e?(r-e>180?e+=360:e-r>180&&(r+=360),$.push({i:t.push(a(t)+"rotate(",null,n)-2,x:l(r,e)})):e&&t.push(a(t)+"rotate("+e+n)}($.rotate,s.rotate,o,p),function(r,e,t,$){r!==e?$.push({i:t.push(a(t)+"skewX(",null,n)-2,x:l(r,e)}):e&&t.push(a(t)+"skewX("+e+n)}($.skewX,s.skewX,o,p),function(r,e,t,n,$,s){if(r!==t||e!==n){var o=$.push(a($)+"scale(",null,",",null,")");s.push({i:o-4,x:l(r,t)},{i:o-2,x:l(e,n)})}else 1===t&&1===n||$.push(a($)+"scale("+t+","+n+")")}($.scaleX,$.scaleY,s.scaleX,s.scaleY,o,p),$=s=null,function(r){for(var e,t=-1,n=p.length;++t<n;)o[(e=p[t]).i]=e.x(r);return o.join("")}}}var Ga,nd,Ke,Pa;function Ve($){return"none"===$?Qa:(Ga||(Ga=document.createElement("DIV"),nd=document.documentElement,Ke=document.defaultView),Ga.style.transform=$,$=Ke.getComputedStyle(nd.appendChild(Ga),null).getPropertyValue("transform"),nd.removeChild(Ga),$=$.slice(7,-1).split(","),td(+$[0],+$[1],+$[2],+$[3],+$[4],+$[5]))}function bf($){return null==$?Qa:(Pa||(Pa=document.createElementNS("http://www.w3.org/2000/svg","g")),Pa.setAttribute("transform",$),($=Pa.transform.baseVal.consolidate())?($=$.matrix,td($.a,$.b,$.c,$.d,$.e,$.f)):Qa)}var qd=180/Math.PI,Qa={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};var td=function(t,e,a,$,r,s){var X,n,w;return(X=Math.sqrt(t*t+e*e))&&(t/=X,e/=X),(w=t*a+e*$)&&(a-=t*w,$-=e*w),(n=Math.sqrt(a*a+$*$))&&(a/=n,$/=n,w/=n),t*$<e*a&&(t=-t,e=-e,w=-w,X=-X),{translateX:r,translateY:s,rotate:Math.atan2(e,t)*qd,skewX:Math.atan(w)*qd,scaleX:X,scaleY:n}};var sj=ld(Ve,"px, ","px)","deg)");var rj=ld(bf,", ",")",")");var qj=Math.SQRT2;function yd($){return function(r,e){var o=$((r=pb(r)).h,(e=pb(e)).h),t=k(r.s,e.s),l=k(r.l,e.l),d=k(r.opacity,e.opacity);return function($){return r.h=o($),r.s=t($),r.l=l($),r.opacity=d($),r+""}}}var pj=yd(hb);var oj=yd(k);function Cd($){return function(r,o){var c=$((r=bb(r)).h,(o=bb(o)).h),t=k(r.c,o.c),x=k(r.l,o.l),l=k(r.opacity,o.opacity);return function($){return r.h=c($),r.c=t($),r.l=x($),r.opacity=l($),r+""}}}var nj=Cd(hb);var mj=Cd(k);function Kb($){return function r(o){function V(r,V){var e=$((r=Oa(r)).h,(V=Oa(V)).h),t=k(r.s,V.s),i=k(r.l,V.l),l=k(r.opacity,V.opacity);return function($){return r.h=e($),r.s=t($),r.l=i(Math.pow($,o)),r.opacity=l($),r+""}}return o=+o,V.gamma=r,V}(1)}var lj=Kb(hb);var kj=Kb(k);var gg=function(t){return function(){return t}};var ig=function($){return+$};var Nb=[0,1];function J(r){return r}function Ua(r,n){return(n-=r=+r)?function(t){return(t-r)/n}:gg(isNaN(n)?NaN:.5)}function Rg(r,n){var t;return r>n&&(t=r,r=n,n=t),function(t){return Math.max(r,Math.min(n,t))}}function Sg(r,n,t){var e=r[0],$=r[1],o=n[0],i=n[1];return $<e?(e=Ua($,e),o=t(i,o)):(e=Ua(e,$),o=t(o,i)),function(r){return o(e(r))}}function Tg(r,n,t){var e=Math.min(r.length,n.length)-1,$=new Array(e),o=new Array(e),i=-1;for(r[e]<r[0]&&(r=r.slice().reverse(),n=n.slice().reverse());++i<e;)$[i]=Ua(r[i],r[i+1]),o[i]=t(n[i],n[i+1]);return function(n){var t=vd(r,n,1,e)-1;return o[t]($[t](n))}}function sh(r,n){return n.domain(r.domain()).range(r.range()).interpolate(r.interpolate()).clamp(r.clamp()).unknown(r.unknown())}function vh(){var r,n,t,e,$,o,i=Nb,a=Nb,u=Na,p=J;function j(){var r=Math.min(i.length,a.length);return p!==J&&(p=Rg(i[0],i[r-1])),e=r>2?Tg:Sg,$=o=null,C}function C(n){return isNaN(n=+n)?t:($||($=e(i.map(r),a,u)))(r(p(n)))}return C.invert=function(t){return p(n((o||(o=e(a,i.map(r),l)))(t)))},C.domain=function(r){return arguments.length?(i=Array.from(r,ig),j()):i.slice()},C.range=function(r){return arguments.length?(a=Array.from(r),j()):a.slice()},C.rangeRound=function(r){return a=Array.from(r),u=Ce,j()},C.clamp=function(r){return arguments.length?(p=!!r||J,j()):p!==J},C.interpolate=function(r){return arguments.length?(u=r,j()):u},C.unknown=function(r){return arguments.length?(t=r,C):t},function(t,e){return r=t,n=e,j()}}function Ah(){return vh()(J,J)}var Eh=function(a,r,e,i){var $,t=De(a,r,e);switch((i=pa(null==i?",f":i)).type){case"s":var p=Math.max(Math.abs(a),Math.abs(r));return null!=i.precision||isNaN($=Ie(t,p))||(i.precision=$),eg(i,p);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN($=Te(t,Math.max(Math.abs(a),Math.abs(r))))||(i.precision=$-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN($=Ge(t))||(i.precision=$-2*("%"===i.type));}return s(i)};var Va=new Date,Wa=new Date;function f(t,r,e,n){function o(r){return t(r=new Date(+r)),r}return o.floor=o,o.ceil=function(e){return t(e=new Date(e-1)),r(e,1),t(e),e},o.round=function(t){var r=o(t),e=o.ceil(t);return t-r<e-t?r:e},o.offset=function(t,e){return r(t=new Date(+t),null==e?1:Math.floor(e)),t},o.range=function(e,n,$){var u,f=[];if(e=o.ceil(e),$=null==$?1:Math.floor($),!(e<n&&$>0))return f;do{f.push(u=new Date(+e)),r(e,$),t(e)}while(u<e&&e<n);return f},o.filter=function(e){return f(function(r){if(r>=r)for(;t(r),!e(r);)r.setTime(r-1)},function(t,n){if(t>=t)if(n<0)for(;++n<=0;)for(;r(t,-1),!e(t););else for(;--n>=0;)for(;r(t,1),!e(t););})},e&&(o.count=function(r,n){return Va.setTime(+r),Wa.setTime(+n),t(Va),t(Wa),Math.floor(e(Va,Wa))},o.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?o.filter(n?function(r){return n(r)%t==0}:function(r){return o.count(0,r)%t==0}):o:null}),o}var Ya=f(function(){},function(e,t){e.setTime(+e+t)},function(e,t){return t-e});Ya.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?f(function(t){t.setTime(Math.floor(t/e)*e)},function(t,$){t.setTime(+t+$*e)},function(t,$){return($-t)/e}):Ya:null};var jj=Ya.range;var la=1e3;var E=6e4;var Ea=36e5;var Yb=864e5;var Zb=6048e5;var ei=f(function(e){e.setTime(e-e.getMilliseconds())},function(e,$){e.setTime(+e+$*la)},function(e,$){return($-e)/la},function(e){return e.getUTCSeconds()});var ij=ei.range;var gi=f(function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*la)},function(e,t){e.setTime(+e+t*E)},function(e,t){return(t-e)/E},function(e){return e.getMinutes()});var hj=gi.range;var ki=f(function(r){r.setTime(r-r.getMilliseconds()-r.getSeconds()*la-r.getMinutes()*E)},function(r,$){r.setTime(+r+$*Ea)},function(r,$){return($-r)/Ea},function(r){return r.getHours()});var gj=ki.range;var _a=f(function(r){r.setHours(0,0,0,0)},function(r,e){r.setDate(r.getDate()+e)},function(r,e){return(e-r-(e.getTimezoneOffset()-r.getTimezoneOffset())*E)/Yb},function(r){return r.getDate()-1});var ej=_a.range;function C(e){return f(function($){$.setDate($.getDate()-($.getDay()+7-e)%7),$.setHours(0,0,0,0)},function(e,$){e.setDate(e.getDate()+7*$)},function(e,$){return($-e-($.getTimezoneOffset()-e.getTimezoneOffset())*E)/Zb})}var cc=C(0);var Da=C(1);var Fd=C(2);var Gd=C(3);var Ca=C(4);var Id=C(5);var Jd=C(6);var bj=cc.range;var aj=Da.range;var _i=Fd.range;var Zi=Gd.range;var Wi=Ca.range;var Vi=Id.range;var Ui=Jd.range;var Rd=f(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,e){t.setMonth(t.getMonth()+e)},function(t,e){return e.getMonth()-t.getMonth()+12*(e.getFullYear()-t.getFullYear())},function(t){return t.getMonth()});var Si=Rd.range;var B=f(function(e){e.setMonth(0,1),e.setHours(0,0,0,0)},function(e,t){e.setFullYear(e.getFullYear()+t)},function(e,t){return t.getFullYear()-e.getFullYear()},function(e){return e.getFullYear()});B.every=function(e){return isFinite(e=Math.floor(e))&&e>0?f(function(t){t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,r){t.setFullYear(t.getFullYear()+r*e)}):null};var Ri=B.range;var Vd=f(function(t){t.setUTCSeconds(0,0)},function(t,e){t.setTime(+t+e*E)},function(t,e){return(e-t)/E},function(t){return t.getUTCMinutes()});var Qi=Vd.range;var Xd=f(function(r){r.setUTCMinutes(0,0,0)},function(r,$){r.setTime(+r+$*Ea)},function(r,$){return($-r)/Ea},function(r){return r.getUTCHours()});var Pi=Xd.range;var kb=f(function(t){t.setUTCHours(0,0,0,0)},function(t,$){t.setUTCDate(t.getUTCDate()+$)},function(t,$){return($-t)/Yb},function(t){return t.getUTCDate()-1});var Oi=kb.range;function A($){return f(function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-$)%7),t.setUTCHours(0,0,0,0)},function($,t){$.setUTCDate($.getUTCDate()+7*t)},function($,t){return(t-$)/Zb})}var sc=A(0);var za=A(1);var ce=A(2);var de=A(3);var ya=A(4);var fe=A(5);var ge=A(6);var Ni=sc.range;var Hi=za.range;var Ei=ce.range;var Di=de.range;var Bi=ya.range;var Ai=fe.range;var zi=ge.range;var oe=f(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCMonth(t.getUTCMonth()+e)},function(t,e){return e.getUTCMonth()-t.getUTCMonth()+12*(e.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()});var yi=oe.range;var x=f(function(e){e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t)},function(e,t){return t.getUTCFullYear()-e.getUTCFullYear()},function(e){return e.getUTCFullYear()});x.every=function(e){return isFinite(e=Math.floor(e))&&e>0?f(function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,r){t.setUTCFullYear(t.getUTCFullYear()+r*e)}):null};var xi=x.range;var ha,wi,vi,ve,we;function xe($){return ha=Be($),wi=ha.format,vi=ha.parse,ve=ha.utcFormat,we=ha.utcParse,ha}function ye(r){if(0<=r.y&&r.y<100){var $=new Date(-1,r.m,r.d,r.H,r.M,r.S,r.L);return $.setFullYear(r.y),$}return new Date(r.y,r.m,r.d,r.H,r.M,r.S,r.L)}function va(r){if(0<=r.y&&r.y<100){var $=new Date(Date.UTC(-1,r.m,r.d,r.H,r.M,r.S,r.L));return $.setUTCFullYear(r.y),$}return new Date(Date.UTC(r.y,r.m,r.d,r.H,r.M,r.S,r.L))}function ea(r){return{y:r,m:0,d:1,H:0,M:0,S:0,L:0}}function Be(r){var $=r.dateTime,e=r.date,a=r.time,t=r.periods,U=r.days,n=r.shortDays,o=r.months,u=r.shortMonths,b=ba(t),i=_(t),H=ba(U),v=_(U),c=ba(n),f=_(n),m=ba(o),s=_(o),l=ba(u),d=_(u),p={a:function(r){return n[r.getDay()]},A:function(r){return U[r.getDay()]},b:function(r){return u[r.getMonth()]},B:function(r){return o[r.getMonth()]},c:null,d:Kc,e:Kc,f:gf,H:cf,I:df,j:ef,L:Lc,m:hf,M:jf,p:function(r){return t[+(r.getHours()>=12)]},Q:Pc,s:Qc,S:kf,u:lf,U:mf,V:nf,w:of,W:pf,x:null,X:null,y:qf,Y:rf,Z:sf,"%":Oc},y={a:function(r){return n[r.getUTCDay()]},A:function(r){return U[r.getUTCDay()]},b:function(r){return u[r.getUTCMonth()]},B:function(r){return o[r.getUTCMonth()]},c:null,d:Mc,e:Mc,f:yf,H:uf,I:vf,j:wf,L:Nc,m:zf,M:Af,p:function(r){return t[+(r.getUTCHours()>=12)]},Q:Pc,s:Qc,S:Bf,u:Cf,U:Df,V:Ef,w:Ff,W:Gf,x:null,X:null,y:Hf,Y:If,Z:Jf,"%":Oc},g={a:function(r,$,e){var a=c.exec($.slice(e));return a?(r.w=f[a[0].toLowerCase()],e+a[0].length):-1},A:function(r,$,e){var a=H.exec($.slice(e));return a?(r.w=v[a[0].toLowerCase()],e+a[0].length):-1},b:function(r,$,e){var a=l.exec($.slice(e));return a?(r.m=d[a[0].toLowerCase()],e+a[0].length):-1},B:function(r,$,e){var a=m.exec($.slice(e));return a?(r.m=s[a[0].toLowerCase()],e+a[0].length):-1},c:function(r,e,a){return h(r,$,e,a)},d:Ic,e:Ic,f:Ze,H:Jc,I:Jc,j:Ue,L:Ye,m:Se,M:We,p:function(r,$,e){var a=b.exec($.slice(e));return a?(r.p=i[a[0].toLowerCase()],e+a[0].length):-1},Q:_e,s:af,S:Xe,u:Le,U:Me,V:Ne,w:si,W:Oe,x:function(r,$,a){return h(r,e,$,a)},X:function(r,$,e){return h(r,a,$,e)},y:Qe,Y:Pe,Z:Re,"%":$e};function T(r,$){return function(e){var a,t,U,n=[],o=-1,u=0,b=r.length;for(e instanceof Date||(e=new Date(+e));++o<b;)37===r.charCodeAt(o)&&(n.push(r.slice(u,o)),null!=(t=Dc[a=r.charAt(++o)])?a=r.charAt(++o):t="e"===a?" ":"0",(U=$[a])&&(a=U(e,t)),n.push(a),u=o+1);return n.push(r.slice(u,o)),n.join("")}}function M(r,$){return function(e){var a,t,U=ea(1900);if(h(U,r,e+="",0)!=e.length)return null;if("Q"in U)return new Date(U.Q);if("p"in U&&(U.H=U.H%12+12*U.p),"V"in U){if(U.V<1||U.V>53)return null;"w"in U||(U.w=1),"Z"in U?(t=(a=va(ea(U.y))).getUTCDay(),a=t>4||0===t?za.ceil(a):za(a),a=kb.offset(a,7*(U.V-1)),U.y=a.getUTCFullYear(),U.m=a.getUTCMonth(),U.d=a.getUTCDate()+(U.w+6)%7):(t=(a=$(ea(U.y))).getDay(),a=t>4||0===t?Da.ceil(a):Da(a),a=_a.offset(a,7*(U.V-1)),U.y=a.getFullYear(),U.m=a.getMonth(),U.d=a.getDate()+(U.w+6)%7)}else("W"in U||"U"in U)&&("w"in U||(U.w="u"in U?U.u%7:"W"in U?1:0),t="Z"in U?va(ea(U.y)).getUTCDay():$(ea(U.y)).getDay(),U.m=0,U.d="W"in U?(U.w+6)%7+7*U.W-(t+5)%7:U.w+7*U.U-(t+6)%7);return"Z"in U?(U.H+=U.Z/100|0,U.M+=U.Z%100,va(U)):$(U)}}function h(r,$,e,a){for(var t,U,n=0,o=$.length,u=e.length;n<o;){if(a>=u)return-1;if(37===(t=$.charCodeAt(n++))){if(t=$.charAt(n++),!(U=g[t in Dc?$.charAt(n++):t])||(a=U(r,e,a))<0)return-1}else if(t!=e.charCodeAt(a++))return-1}return a}return p.x=T(e,p),p.X=T(a,p),p.c=T($,p),y.x=T(e,y),y.X=T(a,y),y.c=T($,y),{format:function(r){var $=T(r+="",p);return $.toString=function(){return r},$},parse:function(r){var $=M(r+="",ye);return $.toString=function(){return r},$},utcFormat:function(r){var $=T(r+="",y);return $.toString=function(){return r},$},utcParse:function(r){var $=M(r,va);return $.toString=function(){return r},$}}}var Dc={"-":"",_:" ",0:"0"},g=/^\s*\d+/,Ee=/^%/,Fe=/[\\^$*+?|[\]().{}]/g;function a(r,$,e){var a=r<0?"-":"",t=(a?-r:r)+"",U=t.length;return a+(U<e?new Array(e-U+1).join($)+t:t)}function He(r){return r.replace(Fe,"\\$&")}function ba(r){return new RegExp("^(?:"+r.map(He).join("|")+")","i")}function _(r){for(var $={},e=-1,a=r.length;++e<a;)$[r[e].toLowerCase()]=e;return $}function si(r,$,e){var a=g.exec($.slice(e,e+1));return a?(r.w=+a[0],e+a[0].length):-1}function Le(r,$,e){var a=g.exec($.slice(e,e+1));return a?(r.u=+a[0],e+a[0].length):-1}function Me(r,$,e){var a=g.exec($.slice(e,e+2));return a?(r.U=+a[0],e+a[0].length):-1}function Ne(r,$,e){var a=g.exec($.slice(e,e+2));return a?(r.V=+a[0],e+a[0].length):-1}function Oe(r,$,e){var a=g.exec($.slice(e,e+2));return a?(r.W=+a[0],e+a[0].length):-1}function Pe(r,$,e){var a=g.exec($.slice(e,e+4));return a?(r.y=+a[0],e+a[0].length):-1}function Qe(r,$,e){var a=g.exec($.slice(e,e+2));return a?(r.y=+a[0]+(+a[0]>68?1900:2e3),e+a[0].length):-1}function Re(r,$,e){var a=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec($.slice(e,e+6));return a?(r.Z=a[1]?0:-(a[2]+(a[3]||"00")),e+a[0].length):-1}function Se(r,$,e){var a=g.exec($.slice(e,e+2));return a?(r.m=a[0]-1,e+a[0].length):-1}function Ic(r,$,e){var a=g.exec($.slice(e,e+2));return a?(r.d=+a[0],e+a[0].length):-1}function Ue(r,$,e){var a=g.exec($.slice(e,e+3));return a?(r.m=0,r.d=+a[0],e+a[0].length):-1}function Jc(r,$,e){var a=g.exec($.slice(e,e+2));return a?(r.H=+a[0],e+a[0].length):-1}function We(r,$,e){var a=g.exec($.slice(e,e+2));return a?(r.M=+a[0],e+a[0].length):-1}function Xe(r,$,e){var a=g.exec($.slice(e,e+2));return a?(r.S=+a[0],e+a[0].length):-1}function Ye(r,$,e){var a=g.exec($.slice(e,e+3));return a?(r.L=+a[0],e+a[0].length):-1}function Ze(r,$,e){var a=g.exec($.slice(e,e+6));return a?(r.L=Math.floor(a[0]/1e3),e+a[0].length):-1}function $e(r,$,e){var a=Ee.exec($.slice(e,e+1));return a?e+a[0].length:-1}function _e(r,$,e){var a=g.exec($.slice(e));return a?(r.Q=+a[0],e+a[0].length):-1}function af(r,$,e){var a=g.exec($.slice(e));return a?(r.Q=1e3*+a[0],e+a[0].length):-1}function Kc(r,$){return a(r.getDate(),$,2)}function cf(r,$){return a(r.getHours(),$,2)}function df(r,$){return a(r.getHours()%12||12,$,2)}function ef(r,$){return a(1+_a.count(B(r),r),$,3)}function Lc(r,$){return a(r.getMilliseconds(),$,3)}function gf(r,$){return Lc(r,$)+"000"}function hf(r,$){return a(r.getMonth()+1,$,2)}function jf(r,$){return a(r.getMinutes(),$,2)}function kf(r,$){return a(r.getSeconds(),$,2)}function lf(r){var $=r.getDay();return 0===$?7:$}function mf(r,$){return a(cc.count(B(r),r),$,2)}function nf(r,$){var e=r.getDay();return r=e>=4||0===e?Ca(r):Ca.ceil(r),a(Ca.count(B(r),r)+(4===B(r).getDay()),$,2)}function of(r){return r.getDay()}function pf(r,$){return a(Da.count(B(r),r),$,2)}function qf(r,$){return a(r.getFullYear()%100,$,2)}function rf(r,$){return a(r.getFullYear()%1e4,$,4)}function sf(r){var $=r.getTimezoneOffset();return($>0?"-":($*=-1,"+"))+a($/60|0,"0",2)+a($%60,"0",2)}function Mc(r,$){return a(r.getUTCDate(),$,2)}function uf(r,$){return a(r.getUTCHours(),$,2)}function vf(r,$){return a(r.getUTCHours()%12||12,$,2)}function wf(r,$){return a(1+kb.count(x(r),r),$,3)}function Nc(r,$){return a(r.getUTCMilliseconds(),$,3)}function yf(r,$){return Nc(r,$)+"000"}function zf(r,$){return a(r.getUTCMonth()+1,$,2)}function Af(r,$){return a(r.getUTCMinutes(),$,2)}function Bf(r,$){return a(r.getUTCSeconds(),$,2)}function Cf(r){var $=r.getUTCDay();return 0===$?7:$}function Df(r,$){return a(sc.count(x(r),r),$,2)}function Ef(r,$){var e=r.getUTCDay();return r=e>=4||0===e?ya(r):ya.ceil(r),a(ya.count(x(r),r)+(4===x(r).getUTCDay()),$,2)}function Ff(r){return r.getUTCDay()}function Gf(r,$){return a(za.count(x(r),r),$,2)}function Hf(r,$){return a(r.getUTCFullYear()%100,$,2)}function If(r,$){return a(r.getUTCFullYear()%1e4,$,4)}function Jf(){return"+0000"}function Oc(){return"%"}function Pc(r){return+r}function Qc(r){return Math.floor(+r/1e3)}xe({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Rc="%Y-%m-%dT%H:%M:%S.%LZ";function Of($){return $.toISOString()}var ui=Date.prototype.toISOString?Of:ve(Rc);function Qf(e){var $=new Date(e);return isNaN($)?null:$}var $i=+new Date("2000-01-01T00:00:00.000Z")?Qf:we(Rc);function Sf(e){return function(){var r=this.ownerDocument,t=this.namespaceURI;return t===tb&&r.documentElement.namespaceURI===tb?r.createElement(e):r.createElementNS(t,e)}}function Tf(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}var tb="http://www.w3.org/1999/xhtml";var Vc={svg:"http://www.w3.org/2000/svg",xhtml:tb,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};var Wc=function(e){var $=e+="",a=$.indexOf(":");return a>=0&&"xmlns"!==($=e.slice(0,a))&&(e=e.slice(a+1)),Vc.hasOwnProperty($)?{space:Vc[$],local:e}:e};var Xc=function(e){var r=Wc(e);return(r.local?Tf:Sf)(r)};function Yf(){}var Yc=function($){return null==$?Yf:function(){return this.querySelector($)}};var $f=function(e){"function"!=typeof e&&(e=Yc(e));for(var r=this._groups,t=r.length,a=new Array(t),l=0;l<t;++l)for(var $,_,o=r[l],n=o.length,i=a[l]=new Array(n),p=0;p<n;++p)($=o[p])&&(_=e.call($,$.__data__,p,o))&&("__data__"in $&&(_.__data__=$.__data__),i[p]=_);return new j(a,this._parents)};function _f(){return[]}var ag=function(t){return null==t?_f:function(){return this.querySelectorAll(t)}};var bg=function(e){"function"!=typeof e&&(e=ag(e));for(var r=this._groups,t=r.length,$=[],l=[],o=0;o<t;++o)for(var a,p=r[o],u=p.length,n=0;n<u;++n)(a=p[n])&&($.push(e.call(a,a.__data__,n,p)),l.push(a));return new j($,l)};var cg=function(r){return function(){return this.matches(r)}};var dg=function(r){"function"!=typeof r&&(r=cg(r));for(var e=this._groups,a=e.length,t=new Array(a),$=0;$<a;++$)for(var S,o=e[$],n=o.length,p=t[$]=[],i=0;i<n;++i)(S=o[i])&&r.call(S,S.__data__,i,o)&&p.push(S);return new j(t,this._parents)};var Zc=function(e){return new Array(e.length)};var fg=function(){return new j(this._enter||this._groups.map(Zc),this._parents)};function ra(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}ra.prototype={constructor:ra,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};var hg=function(r){return function(){return r}};var _c="$";function jg(r,e,n,$,t,a){for(var i,o=0,l=e.length,f=a.length;o<f;++o)(i=e[o])?(i.__data__=a[o],$[o]=i):n[o]=new ra(r,a[o]);for(;o<l;++o)(i=e[o])&&(t[o]=i)}function kg(r,e,n,$,t,a,i){var o,l,f,q={},_=e.length,O=a.length,d=new Array(_);for(o=0;o<_;++o)(l=e[o])&&(d[o]=f=_c+i.call(l,l.__data__,o,e),f in q?t[o]=l:q[f]=l);for(o=0;o<O;++o)(l=q[f=_c+i.call(r,a[o],o,a)])?($[o]=l,l.__data__=a[o],q[f]=null):n[o]=new ra(r,a[o]);for(o=0;o<_;++o)(l=e[o])&&q[d[o]]===l&&(t[o]=l)}var lg=function(r,e){if(!r)return d=new Array(this.size()),f=-1,this.each(function(r){d[++f]=r}),d;var n=e?kg:jg,$=this._parents,t=this._groups;"function"!=typeof r&&(r=hg(r));for(var a=t.length,i=new Array(a),o=new Array(a),l=new Array(a),f=0;f<a;++f){var q=$[f],_=t[f],O=_.length,d=r.call(q,q&&q.__data__,f,$),u=d.length,v=o[f]=new Array(u),c=i[f]=new Array(u);n(q,_,v,c,l[f]=new Array(O),d,e);for(var p,y,h=0,x=0;h<u;++h)if(p=v[h]){for(h>=x&&(x=h+1);!(y=c[x])&&++x<u;);p._next=y||null}}return(i=new j(i,$))._enter=o,i._exit=l,i};var mg=function(){return new j(this._exit||this._groups.map(Zc),this._parents)};var ng=function(e,t,r){var $=this.enter(),n=this,o=this.exit();return $="function"==typeof e?e($):$.append(e+""),null!=t&&(n=t(n)),null==r?o.remove():r(o),$&&n?$.merge(n).order():n};var og=function(r){for(var e=this._groups,t=r._groups,$=e.length,n=t.length,a=Math.min($,n),o=new Array($),x=0;x<a;++x)for(var p,i=e[x],l=t[x],u=i.length,f=o[x]=new Array(u),s=0;s<u;++s)(p=i[s]||l[s])&&(f[s]=p);for(;x<$;++x)o[x]=e[x];return new j(o,this._parents)};var pg=function(){for(var e=this._groups,t=-1,r=e.length;++t<r;)for(var o,$=e[t],n=$.length-1,a=$[n];--n>=0;)(o=$[n])&&(a&&4^o.compareDocumentPosition(a)&&a.parentNode.insertBefore(o,a),a=o);return this};var qg=function(r){function e(e,t){return e&&t?r(e.__data__,t.__data__):!e-!t}r||(r=rg);for(var t=this._groups,n=t.length,$=new Array(n),a=0;a<n;++a){for(var w,o=t[a],i=o.length,u=$[a]=new Array(i),_=0;_<i;++_)(w=o[_])&&(u[_]=w);u.sort(e)}return new j($,this._parents).order()};function rg(r,e){return r<e?-1:r>e?1:r>=e?0:NaN}var sg=function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this};var tg=function(){var t=new Array(this.size()),a=-1;return this.each(function(){t[++a]=this}),t};var ug=function(){for(var r=this._groups,t=0,e=r.length;t<e;++t)for(var $=r[t],o=0,u=$.length;o<u;++o){var a=$[o];if(a)return a}return null};var vg=function(){var e=0;return this.each(function(){++e}),e};var wg=function(){return!this.node()};var xg=function(t){for(var r=this._groups,e=0,$=r.length;e<$;++e)for(var a,n=r[e],p=0,o=n.length;p<o;++p)(a=n[p])&&t.call(a,a.__data__,p,n);return this};function yg(t){return function(){this.removeAttribute(t)}}function zg(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Ag(t,r){return function(){this.setAttribute(t,r)}}function Bg(t,r){return function(){this.setAttributeNS(t.space,t.local,r)}}function Cg(t,r){return function(){var e=r.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function Dg(t,r){return function(){var e=r.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}var Eg=function(t,r){var e=Wc(t);if(arguments.length<2){var a=this.node();return e.local?a.getAttributeNS(e.space,e.local):a.getAttribute(e)}return this.each((null==r?e.local?zg:yg:"function"==typeof r?e.local?Dg:Cg:e.local?Bg:Ag)(e,r))};function Fg(e){return function(){this.style.removeProperty(e)}}function Gg(e,t,r){return function(){this.style.setProperty(e,t,r)}}function Hg(e,t,r){return function(){var $=t.apply(this,arguments);null==$?this.style.removeProperty(e):this.style.setProperty(e,$,r)}}var ad=function(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView};var Jg=function(e,t,r){return arguments.length>1?this.each((null==t?Fg:"function"==typeof t?Hg:Gg)(e,t,null==r?"":r)):Kg(this.node(),e)};function Kg(e,t){return e.style.getPropertyValue(t)||ad(e).getComputedStyle(e,null).getPropertyValue(t)}function Lg(r){return function(){delete this[r]}}function Mg(r,t){return function(){this[r]=t}}function Ng(r,t){return function(){var n=t.apply(this,arguments);null==n?delete this[r]:this[r]=n}}var Og=function(r,t){return arguments.length>1?this.each((null==t?Lg:"function"==typeof t?Ng:Mg)(r,t)):this.node()[r]};function bd(s){return s.trim().split(/^|\s+/)}function vb(s){return s.classList||new dd(s)}function dd(s){this._node=s,this._names=bd(s.getAttribute("class")||"")}function ed(s,t){for(var a=vb(s),$=-1,e=t.length;++$<e;)a.add(t[$])}function fd(s,t){for(var a=vb(s),$=-1,e=t.length;++$<e;)a.remove(t[$])}function Ug(s){return function(){ed(this,s)}}function Vg(s){return function(){fd(this,s)}}function Wg(s,t){return function(){(t.apply(this,arguments)?ed:fd)(this,s)}}dd.prototype={add:function(s){this._names.indexOf(s)<0&&(this._names.push(s),this._node.setAttribute("class",this._names.join(" ")))},remove:function(s){var t=this._names.indexOf(s);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(s){return this._names.indexOf(s)>=0}};var Xg=function(s,t){var a=bd(s+"");if(arguments.length<2){for(var $=vb(this.node()),e=-1,n=a.length;++e<n;)if(!$.contains(a[e]))return!1;return!0}return this.each(("function"==typeof t?Wg:t?Ug:Vg)(a,t))};function Yg(){this.textContent=""}function Zg(t){return function(){this.textContent=t}}function $g(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}var _g=function(t){return arguments.length?this.each(null==t?Yg:("function"==typeof t?$g:Zg)(t)):this.node().textContent};function ah(){this.innerHTML=""}function bh(n){return function(){this.innerHTML=n}}function ch(n){return function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}}var dh=function(n){return arguments.length?this.each(null==n?ah:("function"==typeof n?ch:bh)(n)):this.node().innerHTML};function eh(){this.nextSibling&&this.parentNode.appendChild(this)}var fh=function(){return this.each(eh)};function gh(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}var hh=function(){return this.each(gh)};var ih=function(t){var r="function"==typeof t?t:Xc(t);return this.select(function(){return this.appendChild(r.apply(this,arguments))})};function jh(){return null}var kh=function(t,r){var e="function"==typeof t?t:Xc(t),$=null==r?jh:"function"==typeof r?r:Yc(r);return this.select(function(){return this.insertBefore(e.apply(this,arguments),$.apply(this,arguments)||null)})};function lh(){var e=this.parentNode;e&&e.removeChild(this)}var mh=function(){return this.each(lh)};function nh(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function oh(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}var ph=function(e){return this.select(e?oh:nh)};var qh=function(t){return arguments.length?this.property("__data__",t):this.node().__data__};var rh={},gd=null;if("undefined"!=typeof document){var th=document.documentElement;"onmouseenter"in th||(rh={mouseenter:"mouseover",mouseleave:"mouseout"})}function uh(e,t,n){return e=hd(e,t,n),function(t){var n=t.relatedTarget;n&&(n===this||8&n.compareDocumentPosition(this))||e.call(this,t)}}function hd(e,t,n){return function(r){var $=gd;gd=r;try{e.call(this,this.__data__,t,n)}finally{gd=$}}}function wh(e){return e.trim().split(/^|\s+/).map(function(e){var t="",n=e.indexOf(".");return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}function xh(e){return function(){var t=this.__on;if(t){for(var n,r=0,$=-1,i=t.length;r<i;++r)n=t[r],e.type&&n.type!==e.type||n.name!==e.name?t[++$]=n:this.removeEventListener(n.type,n.listener,n.capture);++$?t.length=$:delete this.__on}}}function yh(e,t,n){var r=rh.hasOwnProperty(e.type)?uh:hd;return function($,i,p){var o,a=this.__on,v=r(t,i,p);if(a)for(var s=0,u=a.length;s<u;++s)if((o=a[s]).type===e.type&&o.name===e.name)return this.removeEventListener(o.type,o.listener,o.capture),this.addEventListener(o.type,o.listener=v,o.capture=n),void(o.value=t);this.addEventListener(e.type,v,n),o={type:e.type,name:e.name,value:t,listener:v,capture:n},a?a.push(o):this.__on=[o]}}var zh=function(e,t,n){var r,$,i=wh(e+""),p=i.length;if(!(arguments.length<2)){for(o=t?yh:xh,null==n&&(n=!1),r=0;r<p;++r)this.each(o(i[r],t,n));return this}var o=this.node().__on;if(o)for(var a,v=0,s=o.length;v<s;++v)for(r=0,a=o[v];r<p;++r)if(($=i[r]).type===a.type&&$.name===a.name)return a.value};function id(t,n,e){var $=ad(t),a=$.CustomEvent;"function"==typeof a?a=new a(n,e):(a=$.document.createEvent("Event"),e?(a.initEvent(n,e.bubbles,e.cancelable),a.detail=e.detail):a.initEvent(n,!1,!1)),t.dispatchEvent(a)}function Bh(t,n){return function(){return id(this,t,n)}}function Ch(t,n){return function(){return id(this,t,n.apply(this,arguments))}}var Dh=function(t,n){return this.each(("function"==typeof n?Ch:Bh)(t,n))};var wb=[null];function j(e,$){this._groups=e,this._parents=$}function Gh(){return new j([[document.documentElement]],wb)}j.prototype=Gh.prototype={constructor:j,select:$f,selectAll:bg,filter:dg,data:lg,enter:fg,exit:mg,join:ng,merge:og,order:pg,sort:qg,call:sg,nodes:tg,node:ug,size:vg,empty:wg,each:xg,attr:Eg,style:Jg,property:Og,classed:Xg,text:_g,html:dh,raise:fh,lower:hh,append:ih,insert:kh,remove:mh,clone:ph,datum:qh,on:zh,dispatch:Dh};var b=function(e){return"string"==typeof e?new j([[document.querySelector(e)]],[document.documentElement]):new j([[e]],wb)};var Ih=0;function Jh(){return new yb}function yb(){this._="@"+(++Ih).toString(36)}yb.prototype=Jh.prototype={constructor:yb,get:function(t){for(var r=this._;!(r in t);)if(!(t=t.parentNode))return;return t[r]},set:function(t,r){return t[this._]=r},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var Lh=function(){for(var e,r=gd;e=r.sourceEvent;)r=e;return r};var Mh=function(e,t){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,[(r=r.matrixTransform(e.getScreenCTM().inverse())).x,r.y]}var i=e.getBoundingClientRect();return[t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop]};var z=function(e){var $=Lh();return $.changedTouches&&($=$.changedTouches[0]),Mh(e,$)};var c=function(e){return"string"==typeof e?new j([document.querySelectorAll(e)],[document.documentElement]):new j([null==e?[]:e],wb)};var q={};!function(t,e){"object"==typeof q?q=e(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(q,function(){const t="undefined"!=typeof self;class e{constructor(t,e){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1},this.config=t||{},this.surface=e,this.config.options&&(this.defaultOptions=this._options(this.config.options))}_options(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_drawable(t,e,s){return{shape:t,sets:e||[],options:s||this.defaultOptions}}getCanvasSize(){const t=t=>t&&"object"==typeof t&&t.baseVal&&t.baseVal.value?t.baseVal.value:t||100;return this.surface?[t(this.surface.width),t(this.surface.height)]:[100,100]}computePolygonSize(t){if(t.length){let e=t[0][0],s=t[0][0],i=t[0][1],h=t[0][1];for(let n=1;n<t.length;n++)e=Math.min(e,t[n][0]),s=Math.max(s,t[n][0]),i=Math.min(i,t[n][1]),h=Math.max(h,t[n][1]);return[s-e,h-i]}return[0,0]}polygonPath(t){let e="";if(t.length){e=`M${t[0][0]},${t[0][1]}`;for(let s=1;s<t.length;s++)e=`${e} L${t[s][0]},${t[s][1]}`}return e}computePathSize(e){let s=[0,0];if(t&&self.document)try{const i="http://www.w3.org/2000/svg",h=self.document.createElementNS(i,"svg");h.setAttribute("width","0"),h.setAttribute("height","0");const n=self.document.createElementNS(i,"path");n.setAttribute("d",e),h.appendChild(n),self.document.body.appendChild(h);const a=n.getBBox();a&&(s[0]=a.width||0,s[1]=a.height||0),self.document.body.removeChild(h)}catch(t){}const i=this.getCanvasSize();return s[0]*s[1]||(s=i),s}toPaths(t){const e=t.sets||[],s=t.options||this.defaultOptions,i=[];for(const h of e){let t=null;switch(h.type){case"path":t={d:this.opsToPath(h),stroke:s.stroke,strokeWidth:s.strokeWidth,fill:"none"};break;case"fillPath":t={d:this.opsToPath(h),stroke:"none",strokeWidth:0,fill:s.fill||"none"};break;case"fillSketch":t=this.fillSketch(h,s);break;case"path2Dfill":t={d:h.path||"",stroke:"none",strokeWidth:0,fill:s.fill||"none"};break;case"path2Dpattern":{const e=h.size,i={x:0,y:0,width:1,height:1,viewBox:`0 0 ${Math.round(e[0])} ${Math.round(e[1])}`,patternUnits:"objectBoundingBox",path:this.fillSketch(h,s)};t={d:h.path,stroke:"none",strokeWidth:0,pattern:i};break}}t&&i.push(t)}return i}fillSketch(t,e){let s=e.fillWeight;return s<0&&(s=e.strokeWidth/2),{d:this.opsToPath(t),stroke:e.fill||"none",strokeWidth:s,fill:"none"}}opsToPath(t){let e="";for(const s of t.ops){const t=s.data;switch(s.op){case"move":e+=`M${t[0]} ${t[1]} `;break;case"bcurveTo":e+=`C${t[0]} ${t[1]}, ${t[2]} ${t[3]}, ${t[4]} ${t[5]} `;break;case"qcurveTo":e+=`Q${t[0]} ${t[1]}, ${t[2]} ${t[3]} `;break;case"lineTo":e+=`L${t[0]} ${t[1]} `;}}return e.trim()}}function s(t,e){return t.type===e}const i={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:4,t:2,V:1,v:1,Z:0,z:0};class h{constructor(t){this.COMMAND=0,this.NUMBER=1,this.EOD=2,this.segments=[],this.parseData(t),this.processPoints()}tokenize(t){const e=new Array;for(;""!==t;)if(t.match(/^([ \t\r\n,]+)/))t=t.substr(RegExp.$1.length);else if(t.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:this.COMMAND,text:RegExp.$1},t=t.substr(RegExp.$1.length);else{if(!t.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return console.error("Unrecognized segment command: "+t),[];e[e.length]={type:this.NUMBER,text:`${parseFloat(RegExp.$1)}`},t=t.substr(RegExp.$1.length)}return e[e.length]={type:this.EOD,text:""},e}parseData(t){const e=this.tokenize(t);let h=0,n=e[h],a="BOD";for(this.segments=new Array;!s(n,this.EOD);){let o;const r=new Array;if("BOD"===a){if("M"!==n.text&&"m"!==n.text)return void this.parseData("M0,0"+t);h++,o=i[n.text],a=n.text}else s(n,this.NUMBER)?o=i[a]:(h++,o=i[n.text],a=n.text);if(h+o<e.length){for(let t=h;t<h+o;t++){const i=e[t];if(!s(i,this.NUMBER))return void console.error("Parameter type is not a number: "+a+","+i.text);r[r.length]=+i.text}if("number"!=typeof i[a])return void console.error("Unsupported segment type: "+a);{const t={key:a,data:r};this.segments.push(t),n=e[h+=o],"M"===a&&(a="L"),"m"===a&&(a="l")}}else console.error("Path data ended before all parameters were found")}}get closed(){if(void 0===this._closed){this._closed=!1;for(const t of this.segments)"z"===t.key.toLowerCase()&&(this._closed=!0)}return this._closed}processPoints(){let t=null,e=[0,0];for(let s=0;s<this.segments.length;s++){const i=this.segments[s];switch(i.key){case"M":case"L":case"T":i.point=[i.data[0],i.data[1]];break;case"m":case"l":case"t":i.point=[i.data[0]+e[0],i.data[1]+e[1]];break;case"H":i.point=[i.data[0],e[1]];break;case"h":i.point=[i.data[0]+e[0],e[1]];break;case"V":i.point=[e[0],i.data[0]];break;case"v":i.point=[e[0],i.data[0]+e[1]];break;case"z":case"Z":t&&(i.point=[t[0],t[1]]);break;case"C":i.point=[i.data[4],i.data[5]];break;case"c":i.point=[i.data[4]+e[0],i.data[5]+e[1]];break;case"S":i.point=[i.data[2],i.data[3]];break;case"s":i.point=[i.data[2]+e[0],i.data[3]+e[1]];break;case"Q":i.point=[i.data[2],i.data[3]];break;case"q":i.point=[i.data[2]+e[0],i.data[3]+e[1]];break;case"A":i.point=[i.data[5],i.data[6]];break;case"a":i.point=[i.data[5]+e[0],i.data[6]+e[1]];}"m"!==i.key&&"M"!==i.key||(t=null),i.point&&(e=i.point,t||(t=i.point)),"z"!==i.key&&"Z"!==i.key||(t=null)}}}class n{constructor(t){this._position=[0,0],this._first=null,this.bezierReflectionPoint=null,this.quadReflectionPoint=null,this.parsed=new h(t)}get segments(){return this.parsed.segments}get closed(){return this.parsed.closed}get linearPoints(){if(!this._linearPoints){const t=[];let e=[];for(const s of this.parsed.segments){const i=s.key.toLowerCase();("m"!==i&&"z"!==i||(e.length&&(t.push(e),e=[]),"z"!==i))&&s.point&&e.push(s.point)}e.length&&(t.push(e),e=[]),this._linearPoints=t}return this._linearPoints}get first(){return this._first}set first(t){this._first=t}setPosition(t,e){this._position=[t,e],this._first||(this._first=[t,e])}get position(){return this._position}get x(){return this._position[0]}get y(){return this._position[1]}}class a{constructor(t,e,s,i,h,n){if(this._segIndex=0,this._numSegs=0,this._rx=0,this._ry=0,this._sinPhi=0,this._cosPhi=0,this._C=[0,0],this._theta=0,this._delta=0,this._T=0,this._from=t,t[0]===e[0]&&t[1]===e[1])return;const a=Math.PI/180;this._rx=Math.abs(s[0]),this._ry=Math.abs(s[1]),this._sinPhi=Math.sin(i*a),this._cosPhi=Math.cos(i*a);const o=this._cosPhi*(t[0]-e[0])/2+this._sinPhi*(t[1]-e[1])/2,r=-this._sinPhi*(t[0]-e[0])/2+this._cosPhi*(t[1]-e[1])/2;let l=0;const c=this._rx*this._rx*this._ry*this._ry-this._rx*this._rx*r*r-this._ry*this._ry*o*o;if(c<0){const t=Math.sqrt(1-c/(this._rx*this._rx*this._ry*this._ry));this._rx=this._rx*t,this._ry=this._ry*t,l=0}else l=(h===n?-1:1)*Math.sqrt(c/(this._rx*this._rx*r*r+this._ry*this._ry*o*o));const p=l*this._rx*r/this._ry,u=-l*this._ry*o/this._rx;this._C=[0,0],this._C[0]=this._cosPhi*p-this._sinPhi*u+(t[0]+e[0])/2,this._C[1]=this._sinPhi*p+this._cosPhi*u+(t[1]+e[1])/2,this._theta=this.calculateVectorAngle(1,0,(o-p)/this._rx,(r-u)/this._ry);let f=this.calculateVectorAngle((o-p)/this._rx,(r-u)/this._ry,(-o-p)/this._rx,(-r-u)/this._ry);!n&&f>0?f-=2*Math.PI:n&&f<0&&(f+=2*Math.PI),this._numSegs=Math.ceil(Math.abs(f/(Math.PI/2))),this._delta=f/this._numSegs,this._T=8/3*Math.sin(this._delta/4)*Math.sin(this._delta/4)/Math.sin(this._delta/2)}getNextSegment(){if(this._segIndex===this._numSegs)return null;const t=Math.cos(this._theta),e=Math.sin(this._theta),s=this._theta+this._delta,i=Math.cos(s),h=Math.sin(s),n=[this._cosPhi*this._rx*i-this._sinPhi*this._ry*h+this._C[0],this._sinPhi*this._rx*i+this._cosPhi*this._ry*h+this._C[1]],a=[this._from[0]+this._T*(-this._cosPhi*this._rx*e-this._sinPhi*this._ry*t),this._from[1]+this._T*(-this._sinPhi*this._rx*e+this._cosPhi*this._ry*t)],o=[n[0]+this._T*(this._cosPhi*this._rx*h+this._sinPhi*this._ry*i),n[1]+this._T*(this._sinPhi*this._rx*h-this._cosPhi*this._ry*i)];return this._theta=s,this._from=[n[0],n[1]],this._segIndex++,{cp1:a,cp2:o,to:n}}calculateVectorAngle(t,e,s,i){const h=Math.atan2(e,t),n=Math.atan2(i,s);return n>=h?n-h:2*Math.PI-(h-n)}}class o{constructor(t,e){this.sets=t,this.closed=e}fit(t){const e=[];for(const i of this.sets){const s=i.length;let h=Math.floor(t*s);if(h<5){if(s<=5)continue;h=5}e.push(this.reduce(i,h))}let s="";for(const i of e){for(let t=0;t<i.length;t++){const e=i[t];s+=0===t?"M"+e[0]+","+e[1]:"L"+e[0]+","+e[1]}this.closed&&(s+="z ")}return s}distance(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}reduce(t,e){if(t.length<=e)return t;const s=t.slice(0);for(;s.length>e;){let t=-1,e=-1;for(let i=1;i<s.length-1;i++){const h=this.distance(s[i-1],s[i]),n=this.distance(s[i],s[i+1]),a=this.distance(s[i-1],s[i+1]),o=(h+n+a)/2,r=Math.sqrt(o*(o-h)*(o-n)*(o-a));(t<0||r<t)&&(t=r,e=i)}if(!(e>0))break;s.splice(e,1)}return s}}class r{constructor(t,e){this.xi=Number.MAX_VALUE,this.yi=Number.MAX_VALUE,this.px1=t[0],this.py1=t[1],this.px2=e[0],this.py2=e[1],this.a=this.py2-this.py1,this.b=this.px1-this.px2,this.c=this.px2*this.py1-this.px1*this.py2,this._undefined=0===this.a&&0===this.b&&0===this.c}isUndefined(){return this._undefined}intersects(t){if(this.isUndefined()||t.isUndefined())return!1;let e=Number.MAX_VALUE,s=Number.MAX_VALUE,i=0,h=0;const n=this.a,a=this.b,o=this.c;return Math.abs(a)>1e-5&&(e=-n/a,i=-o/a),Math.abs(t.b)>1e-5&&(s=-t.a/t.b,h=-t.c/t.b),e===Number.MAX_VALUE?s===Number.MAX_VALUE?-o/n==-t.c/t.a&&(this.py1>=Math.min(t.py1,t.py2)&&this.py1<=Math.max(t.py1,t.py2)?(this.xi=this.px1,this.yi=this.py1,!0):this.py2>=Math.min(t.py1,t.py2)&&this.py2<=Math.max(t.py1,t.py2)&&(this.xi=this.px2,this.yi=this.py2,!0)):(this.xi=this.px1,this.yi=s*this.xi+h,!((this.py1-this.yi)*(this.yi-this.py2)<-1e-5||(t.py1-this.yi)*(this.yi-t.py2)<-1e-5||Math.abs(t.a)<1e-5&&(t.px1-this.xi)*(this.xi-t.px2)<-1e-5)):s===Number.MAX_VALUE?(this.xi=t.px1,this.yi=e*this.xi+i,!((t.py1-this.yi)*(this.yi-t.py2)<-1e-5||(this.py1-this.yi)*(this.yi-this.py2)<-1e-5||Math.abs(n)<1e-5&&(this.px1-this.xi)*(this.xi-this.px2)<-1e-5)):e===s?i===h&&(this.px1>=Math.min(t.px1,t.px2)&&this.px1<=Math.max(t.py1,t.py2)?(this.xi=this.px1,this.yi=this.py1,!0):this.px2>=Math.min(t.px1,t.px2)&&this.px2<=Math.max(t.px1,t.px2)&&(this.xi=this.px2,this.yi=this.py2,!0)):(this.xi=(h-i)/(e-s),this.yi=e*this.xi+i,!((this.px1-this.xi)*(this.xi-this.px2)<-1e-5||(t.px1-this.xi)*(this.xi-t.px2)<-1e-5))}}function l(t,e){const s=t[1][1]-t[0][1],i=t[0][0]-t[1][0],h=s*t[0][0]+i*t[0][1],n=e[1][1]-e[0][1],a=e[0][0]-e[1][0],o=n*e[0][0]+a*e[0][1],r=s*a-n*i;return r?[Math.round((a*h-i*o)/r),Math.round((s*o-n*h)/r)]:null}class c{constructor(t,e,s,i,h,n,a,o){this.deltaX=0,this.hGap=0,this.top=t,this.bottom=e,this.left=s,this.right=i,this.gap=h,this.sinAngle=n,this.tanAngle=o,Math.abs(n)<1e-4?this.pos=s+h:Math.abs(n)>.9999?this.pos=t+h:(this.deltaX=(e-t)*Math.abs(o),this.pos=s-Math.abs(this.deltaX),this.hGap=Math.abs(h/a),this.sLeft=new r([s,e],[s,t]),this.sRight=new r([i,e],[i,t]))}nextLine(){if(Math.abs(this.sinAngle)<1e-4){if(this.pos<this.right){const t=[this.pos,this.top,this.pos,this.bottom];return this.pos+=this.gap,t}}else if(Math.abs(this.sinAngle)>.9999){if(this.pos<this.bottom){const t=[this.left,this.pos,this.right,this.pos];return this.pos+=this.gap,t}}else{let t=this.pos-this.deltaX/2,e=this.pos+this.deltaX/2,s=this.bottom,i=this.top;if(this.pos<this.right+this.deltaX){for(;t<this.left&&e<this.left||t>this.right&&e>this.right;)if(this.pos+=this.hGap,t=this.pos-this.deltaX/2,e=this.pos+this.deltaX/2,this.pos>this.right+this.deltaX)return null;const h=new r([t,s],[e,i]);this.sLeft&&h.intersects(this.sLeft)&&(t=h.xi,s=h.yi),this.sRight&&h.intersects(this.sRight)&&(e=h.xi,i=h.yi),this.tanAngle>0&&(t=this.right-(t-this.left),e=this.right-(e-this.left));const n=[t,s,e,i];return this.pos+=this.hGap,n}}return null}}function p(t){const e=t[0],s=t[1];return Math.sqrt(Math.pow(e[0]-s[0],2)+Math.pow(e[1]-s[1],2))}function u(t,e){const s=[],i=new r([t[0],t[1]],[t[2],t[3]]);for(let h=0;h<e.length;h++){const t=new r(e[h],e[(h+1)%e.length]);i.intersects(t)&&s.push([i.xi,i.yi])}return s}function f(t,e,s,i,h,n,a){return[-s*n-i*h+s+n*t+h*e,a*(s*h-i*n)+i+-a*h*t+a*n*e]}function d(t,e){const s=[];if(t&&t.length){let i=t[0][0],h=t[0][0],n=t[0][1],a=t[0][1];for(let e=1;e<t.length;e++)i=Math.min(i,t[e][0]),h=Math.max(h,t[e][0]),n=Math.min(n,t[e][1]),a=Math.max(a,t[e][1]);const o=e.hachureAngle;let r=e.hachureGap;r<0&&(r=4*e.strokeWidth),r=Math.max(r,.1);const l=o%180*(Math.PI/180),p=Math.cos(l),f=Math.sin(l),d=Math.tan(l),g=new c(n-1,a+1,i-1,h+1,r,f,p,d);let y;for(;null!=(y=g.nextLine());){const e=u(y,t);for(let t=0;t<e.length;t++)if(t<e.length-1){const i=e[t],h=e[t+1];s.push([i,h])}}}return s}function g(t,e,s,i,h,n){const a=[];let o=Math.abs(i/2),r=Math.abs(h/2);o+=t.randOffset(.05*o,n),r+=t.randOffset(.05*r,n);const l=n.hachureAngle;let c=n.hachureGap;c<=0&&(c=4*n.strokeWidth);let p=n.fillWeight;p<0&&(p=n.strokeWidth/2);const u=l%180*(Math.PI/180),d=Math.tan(u),g=r/o,y=Math.sqrt(g*d*g*d+1),M=g*d/y,x=1/y,_=c/(o*r/Math.sqrt(r*x*(r*x)+o*M*(o*M))/o);let b=Math.sqrt(o*o-(e-o+_)*(e-o+_));for(let m=e-o+_;m<e+o;m+=_){const t=f(m,s-(b=Math.sqrt(o*o-(e-m)*(e-m))),e,s,M,x,g),i=f(m,s+b,e,s,M,x,g);a.push([t,i])}return a}class y{constructor(t){this.helper=t}fillPolygon(t,e){return this._fillPolygon(t,e)}fillEllipse(t,e,s,i,h){return this._fillEllipse(t,e,s,i,h)}fillArc(t,e,s,i,h,n,a){return null}_fillPolygon(t,e,s=!1){const i=d(t,e);return{type:"fillSketch",ops:this.renderLines(i,e,s)}}_fillEllipse(t,e,s,i,h,n=!1){const a=g(this.helper,t,e,s,i,h);return{type:"fillSketch",ops:this.renderLines(a,h,n)}}renderLines(t,e,s){let i=[],h=null;for(const n of t)i=i.concat(this.helper.doubleLineOps(n[0][0],n[0][1],n[1][0],n[1][1],e)),s&&h&&(i=i.concat(this.helper.doubleLineOps(h[0],h[1],n[0][0],n[0][1],e))),h=n[1];return i}}class M extends y{fillPolygon(t,e){return this._fillPolygon(t,e,!0)}fillEllipse(t,e,s,i,h){return this._fillEllipse(t,e,s,i,h,!0)}}class x extends y{fillPolygon(t,e){const s=this._fillPolygon(t,e),i=Object.assign({},e,{hachureAngle:e.hachureAngle+90}),h=this._fillPolygon(t,i);return s.ops=s.ops.concat(h.ops),s}fillEllipse(t,e,s,i,h){const n=this._fillEllipse(t,e,s,i,h),a=Object.assign({},h,{hachureAngle:h.hachureAngle+90}),o=this._fillEllipse(t,e,s,i,a);return n.ops=n.ops.concat(o.ops),n}}class _{constructor(t){this.helper=t}fillPolygon(t,e){const s=d(t,e=Object.assign({},e,{curveStepCount:4,hachureAngle:0}));return this.dotsOnLines(s,e)}fillEllipse(t,e,s,i,h){h=Object.assign({},h,{curveStepCount:4,hachureAngle:0});const n=g(this.helper,t,e,s,i,h);return this.dotsOnLines(n,h)}fillArc(t,e,s,i,h,n,a){return null}dotsOnLines(t,e){let s=[],i=e.hachureGap;i<0&&(i=4*e.strokeWidth),i=Math.max(i,.1);let h=e.fillWeight;h<0&&(h=e.strokeWidth/2);for(const n of t){const t=p(n)/i,a=Math.ceil(t)-1,o=Math.atan((n[1][1]-n[0][1])/(n[1][0]-n[0][0]));for(let r=0;r<a;r++){const t=i*(r+1),a=t*Math.sin(o),l=t*Math.cos(o),c=[n[0][0]-l,n[0][1]+a],p=this.helper.randOffsetWithRange(c[0]-i/4,c[0]+i/4,e),u=this.helper.randOffsetWithRange(c[1]-i/4,c[1]+i/4,e),f=this.helper.ellipse(p,u,h,h,e);s=s.concat(f.ops)}}return{type:"fillSketch",ops:s}}}class b{constructor(t){this.helper=t}fillPolygon(t,e){const s=[Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER],i=[Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];t.forEach(t=>{s[0]=Math.min(s[0],t[0]),s[1]=Math.max(s[1],t[0]),i[0]=Math.min(i[0],t[1]),i[1]=Math.max(i[1],t[1])});const h=function(t){let e=0,s=0,i=0;for(let h=0;h<t.length;h++){const s=t[h],i=h===t.length-1?t[0]:t[h+1];e+=s[0]*i[1]-i[0]*s[1]}e/=2;for(let h=0;h<t.length;h++){const e=t[h],n=h===t.length-1?t[0]:t[h+1];s+=(e[0]+n[0])*(e[0]*n[1]-n[0]*e[1]),i+=(e[1]+n[1])*(e[0]*n[1]-n[0]*e[1])}return[s/(6*e),i/(6*e)]}(t),n=Math.max(Math.sqrt(Math.pow(h[0]-s[0],2)+Math.pow(h[1]-i[0],2)),Math.sqrt(Math.pow(h[0]-s[1],2)+Math.pow(h[1]-i[1],2))),a=e.hachureGap>0?e.hachureGap:4*e.strokeWidth,o=[];if(t.length>2)for(let l=0;l<t.length;l++)l===t.length-1?o.push([t[l],t[0]]):o.push([t[l],t[l+1]]);let r=[];const c=Math.max(1,Math.PI*n/a);for(let u=0;u<c;u++){const t=u*Math.PI/c,e=[h,[h[0]+n*Math.cos(t),h[1]+n*Math.sin(t)]];o.forEach(t=>{const h=l(t,e);h&&h[0]>=s[0]&&h[0]<=s[1]&&h[1]>=i[0]&&h[1]<=i[1]&&r.push(h)})}r=this.removeDuplocatePoints(r);const p=this.createLinesFromCenter(h,r);return{type:"fillSketch",ops:this.drawLines(p,e)}}fillEllipse(t,e,s,i,h){return this.fillArcSegment(t,e,s,i,0,2*Math.PI,h)}fillArc(t,e,s,i,h,n,a){return this.fillArcSegment(t,e,s,i,h,n,a)}fillArcSegment(t,e,s,i,h,n,a){const o=[t,e],r=s/2,l=i/2,c=Math.max(s/2,i/2);let p=a.hachureGap;p<0&&(p=4*a.strokeWidth);const u=Math.max(1,Math.abs(n-h)*c/p);let f=[];for(let g=0;g<u;g++){const t=g*((n-h)/u)+h,e=c*Math.cos(t),s=c*Math.sin(t),i=Math.sqrt(r*r*s*s+l*l*e*e),a=r*l*e/i,p=r*l*s/i;f.push([o[0]+a,o[1]+p])}f=this.removeDuplocatePoints(f);const d=this.createLinesFromCenter(o,f);return{type:"fillSketch",ops:this.drawLines(d,a)}}drawLines(t,e){let s=[];return t.forEach(t=>{const i=t[0],h=t[1];s=s.concat(this.helper.doubleLineOps(i[0],i[1],h[0],h[1],e))}),s}createLinesFromCenter(t,e){return e.map(e=>[t,e])}removeDuplocatePoints(t){const e=new Set;return t.filter(t=>{const s=t.join(",");return!e.has(s)&&(e.add(s),!0)})}}class m{constructor(t){this.helper=t}fillPolygon(t,e){const s=d(t,e);return{type:"fillSketch",ops:this.dashedLine(s,e)}}fillEllipse(t,e,s,i,h){const n=g(this.helper,t,e,s,i,h);return{type:"fillSketch",ops:this.dashedLine(n,h)}}fillArc(t,e,s,i,h,n,a){return null}dashedLine(t,e){const s=e.dashOffset<0?e.hachureGap<0?4*e.strokeWidth:e.hachureGap:e.dashOffset,i=e.dashGap<0?e.hachureGap<0?4*e.strokeWidth:e.hachureGap:e.dashGap;let h=[];return t.forEach(t=>{const n=p(t),a=Math.floor(n/(s+i)),o=(n+i-a*(s+i))/2;let r=t[0],l=t[1];r[0]>l[0]&&(r=t[1],l=t[0]);const c=Math.atan((l[1]-r[1])/(l[0]-r[0]));for(let p=0;p<a;p++){const t=p*(s+i),n=t+s,a=[r[0]+t*Math.cos(c)+o*Math.cos(c),r[1]+t*Math.sin(c)+o*Math.sin(c)],l=[r[0]+n*Math.cos(c)+o*Math.cos(c),r[1]+n*Math.sin(c)+o*Math.sin(c)];h=h.concat(this.helper.doubleLineOps(a[0],a[1],l[0],l[1],e))}}),h}}class w{constructor(t){this.helper=t}fillPolygon(t,e){const s=e.hachureGap<0?4*e.strokeWidth:e.hachureGap,i=e.zigzagOffset<0?s:e.zigzagOffset,h=d(t,e=Object.assign({},e,{hachureGap:s+i}));return{type:"fillSketch",ops:this.zigzagLines(h,i,e)}}fillEllipse(t,e,s,i,h){const n=h.hachureGap<0?4*h.strokeWidth:h.hachureGap,a=h.zigzagOffset<0?n:h.zigzagOffset;h=Object.assign({},h,{hachureGap:n+a});const o=g(this.helper,t,e,s,i,h);return{type:"fillSketch",ops:this.zigzagLines(o,a,h)}}fillArc(t,e,s,i,h,n,a){return null}zigzagLines(t,e,s){let i=[];return t.forEach(t=>{const h=p(t),n=Math.round(h/(2*e));let a=t[0],o=t[1];a[0]>o[0]&&(a=t[1],o=t[0]);const r=Math.atan((o[1]-a[1])/(o[0]-a[0]));for(let l=0;l<n;l++){const t=2*l*e,h=2*(l+1)*e,n=Math.sqrt(2*Math.pow(e,2)),o=[a[0]+t*Math.cos(r),a[1]+t*Math.sin(r)],c=[a[0]+h*Math.cos(r),a[1]+h*Math.sin(r)],p=[o[0]+n*Math.cos(r+Math.PI/4),o[1]+n*Math.sin(r+Math.PI/4)];i=(i=i.concat(this.helper.doubleLineOps(o[0],o[1],p[0],p[1],s))).concat(this.helper.doubleLineOps(p[0],p[1],c[0],c[1],s))}}),i}}const k={};function P(t,e){let s=t.fillStyle||"hachure";if(!k[s])switch(s){case"zigzag":k[s]||(k[s]=new M(e));break;case"cross-hatch":k[s]||(k[s]=new x(e));break;case"dots":k[s]||(k[s]=new _(e));break;case"starburst":k[s]||(k[s]=new b(e));break;case"dashed":k[s]||(k[s]=new m(e));break;case"zigzag-line":k[s]||(k[s]=new w(e));break;case"hachure":default:k[s="hachure"]||(k[s]=new y(e));}return k[s]}const v={randOffset:function(t,e){return N(t,e)},randOffsetWithRange:function(t,e,s){return L(t,e,s)},ellipse:O,doubleLineOps:function(t,e,s,i,h){return W(t,e,s,i,h)}};function A(t,e,s,i,h){return{type:"path",ops:W(t,e,s,i,h)}}function S(t,e,s){const i=(t||[]).length;if(i>2){let h=[];for(let e=0;e<i-1;e++)h=h.concat(W(t[e][0],t[e][1],t[e+1][0],t[e+1][1],s));return e&&(h=h.concat(W(t[i-1][0],t[i-1][1],t[0][0],t[0][1],s))),{type:"path",ops:h}}return 2===i?A(t[0][0],t[0][1],t[1][0],t[1][1],s):{type:"path",ops:[]}}function E(t,e){const s=R(t,1*(1+.2*e.roughness),e),i=R(t,1.5*(1+.22*e.roughness),e);return{type:"path",ops:s.concat(i)}}function O(t,e,s,i,h){const n=2*Math.PI/h.curveStepCount;let a=Math.abs(s/2),o=Math.abs(i/2);const r=D(n,t,e,a+=N(.05*a,h),o+=N(.05*o,h),1,n*L(.1,L(.4,1,h),h),h),l=D(n,t,e,a,o,1.5,0,h);return{type:"path",ops:r.concat(l)}}function T(t,e,s,i,h,n,a,o,r){const l=t,c=e;let p=Math.abs(s/2),u=Math.abs(i/2);p+=N(.01*p,r),u+=N(.01*u,r);let f=h,d=n;for(;f<0;)f+=2*Math.PI,d+=2*Math.PI;d-f>2*Math.PI&&(f=0,d=2*Math.PI);const g=2*Math.PI/r.curveStepCount,y=Math.min(g/2,(d-f)/2),M=q(y,l,c,p,u,f,d,1,r),x=q(y,l,c,p,u,f,d,1.5,r);let _=M.concat(x);return a&&(o?_=(_=_.concat(W(l,c,l+p*Math.cos(f),c+u*Math.sin(f),r))).concat(W(l,c,l+p*Math.cos(d),c+u*Math.sin(d),r)):(_.push({op:"lineTo",data:[l,c]}),_.push({op:"lineTo",data:[l+p*Math.cos(f),c+u*Math.sin(f)]}))),{type:"path",ops:_}}function C(t,e){const s=[];if(t.length){const i=e.maxRandomnessOffset||0,h=t.length;if(h>2){s.push({op:"move",data:[t[0][0]+N(i,e),t[0][1]+N(i,e)]});for(let n=1;n<h;n++)s.push({op:"lineTo",data:[t[n][0]+N(i,e),t[n][1]+N(i,e)]})}}return{type:"fillPath",ops:s}}function z(t,e){return P(e,v).fillPolygon(t,e)}function L(t,e,s){return s.roughness*(Math.random()*(e-t)+t)}function N(t,e){return L(-t,t,e)}function W(t,e,s,i,h){const n=$(t,e,s,i,h,!0,!1),a=$(t,e,s,i,h,!0,!0);return n.concat(a)}function $(t,e,s,i,h,n,a){const o=Math.pow(t-s,2)+Math.pow(e-i,2);let r=h.maxRandomnessOffset||0;r*r*100>o&&(r=Math.sqrt(o)/10);const l=r/2,c=.2+.2*Math.random();let p=h.bowing*h.maxRandomnessOffset*(i-e)/200,u=h.bowing*h.maxRandomnessOffset*(t-s)/200;p=N(p,h),u=N(u,h);const f=[],d=()=>N(l,h),g=()=>N(r,h);return n&&(a?f.push({op:"move",data:[t+d(),e+d()]}):f.push({op:"move",data:[t+N(r,h),e+N(r,h)]})),a?f.push({op:"bcurveTo",data:[p+t+(s-t)*c+d(),u+e+(i-e)*c+d(),p+t+2*(s-t)*c+d(),u+e+2*(i-e)*c+d(),s+d(),i+d()]}):f.push({op:"bcurveTo",data:[p+t+(s-t)*c+g(),u+e+(i-e)*c+g(),p+t+2*(s-t)*c+g(),u+e+2*(i-e)*c+g(),s+g(),i+g()]}),f}function R(t,e,s){const i=[];i.push([t[0][0]+N(e,s),t[0][1]+N(e,s)]),i.push([t[0][0]+N(e,s),t[0][1]+N(e,s)]);for(let h=1;h<t.length;h++)i.push([t[h][0]+N(e,s),t[h][1]+N(e,s)]),h===t.length-1&&i.push([t[h][0]+N(e,s),t[h][1]+N(e,s)]);return I(i,null,s)}function I(t,e,s){const i=t.length;let h=[];if(i>3){const n=[],a=1-s.curveTightness;h.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<i;e++){const s=t[e];n[0]=[s[0],s[1]],n[1]=[s[0]+(a*t[e+1][0]-a*t[e-1][0])/6,s[1]+(a*t[e+1][1]-a*t[e-1][1])/6],n[2]=[t[e+1][0]+(a*t[e][0]-a*t[e+2][0])/6,t[e+1][1]+(a*t[e][1]-a*t[e+2][1])/6],n[3]=[t[e+1][0],t[e+1][1]],h.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[3][0],n[3][1]]})}if(e&&2===e.length){const t=s.maxRandomnessOffset;h.push({op:"lineTo",data:[e[0]+N(t,s),e[1]+N(t,s)]})}}else 3===i?(h.push({op:"move",data:[t[1][0],t[1][1]]}),h.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===i&&(h=h.concat(W(t[0][0],t[0][1],t[1][0],t[1][1],s)));return h}function D(t,e,s,i,h,n,a,o){const r=N(.5,o)-Math.PI/2,l=[];l.push([N(n,o)+e+.9*i*Math.cos(r-t),N(n,o)+s+.9*h*Math.sin(r-t)]);for(let c=r;c<2*Math.PI+r-.01;c+=t)l.push([N(n,o)+e+i*Math.cos(c),N(n,o)+s+h*Math.sin(c)]);return l.push([N(n,o)+e+i*Math.cos(r+2*Math.PI+.5*a),N(n,o)+s+h*Math.sin(r+2*Math.PI+.5*a)]),l.push([N(n,o)+e+.98*i*Math.cos(r+a),N(n,o)+s+.98*h*Math.sin(r+a)]),l.push([N(n,o)+e+.9*i*Math.cos(r+.5*a),N(n,o)+s+.9*h*Math.sin(r+.5*a)]),I(l,null,o)}function q(t,e,s,i,h,n,a,o,r){const l=n+N(.1,r),c=[];c.push([N(o,r)+e+.9*i*Math.cos(l-t),N(o,r)+s+.9*h*Math.sin(l-t)]);for(let p=l;p<=a;p+=t)c.push([N(o,r)+e+i*Math.cos(p),N(o,r)+s+h*Math.sin(p)]);return c.push([e+i*Math.cos(a),s+h*Math.sin(a)]),c.push([e+i*Math.cos(a),s+h*Math.sin(a)]),I(c,null,r)}function G(t,e,s,i,h,n,a,o){const r=[],l=[o.maxRandomnessOffset||1,(o.maxRandomnessOffset||1)+.5];let c=[0,0];for(let p=0;p<2;p++)0===p?r.push({op:"move",data:[a.x,a.y]}):r.push({op:"move",data:[a.x+N(l[0],o),a.y+N(l[0],o)]}),c=[h+N(l[p],o),n+N(l[p],o)],r.push({op:"bcurveTo",data:[t+N(l[p],o),e+N(l[p],o),s+N(l[p],o),i+N(l[p],o),c[0],c[1]]});return a.setPosition(c[0],c[1]),r}function B(t,e,s,i){let h=[];switch(e.key){case"M":case"m":{const s="m"===e.key;if(e.data.length>=2){let n=+e.data[0],a=+e.data[1];s&&(n+=t.x,a+=t.y);const o=1*(i.maxRandomnessOffset||0);n+=N(o,i),a+=N(o,i),t.setPosition(n,a),h.push({op:"move",data:[n,a]})}break}case"L":case"l":{const s="l"===e.key;if(e.data.length>=2){let n=+e.data[0],a=+e.data[1];s&&(n+=t.x,a+=t.y),h=h.concat(W(t.x,t.y,n,a,i)),t.setPosition(n,a)}break}case"H":case"h":{const s="h"===e.key;if(e.data.length){let n=+e.data[0];s&&(n+=t.x),h=h.concat(W(t.x,t.y,n,t.y,i)),t.setPosition(n,t.y)}break}case"V":case"v":{const s="v"===e.key;if(e.data.length){let n=+e.data[0];s&&(n+=t.y),h=h.concat(W(t.x,t.y,t.x,n,i)),t.setPosition(t.x,n)}break}case"Z":case"z":t.first&&(h=h.concat(W(t.x,t.y,t.first[0],t.first[1],i)),t.setPosition(t.first[0],t.first[1]),t.first=null);break;case"C":case"c":{const s="c"===e.key;if(e.data.length>=6){let n=+e.data[0],a=+e.data[1],o=+e.data[2],r=+e.data[3],l=+e.data[4],c=+e.data[5];s&&(n+=t.x,o+=t.x,l+=t.x,a+=t.y,r+=t.y,c+=t.y);const p=G(n,a,o,r,l,c,t,i);h=h.concat(p),t.bezierReflectionPoint=[l+(l-o),c+(c-r)]}break}case"S":case"s":{const n="s"===e.key;if(e.data.length>=4){let a=+e.data[0],o=+e.data[1],r=+e.data[2],l=+e.data[3];n&&(a+=t.x,r+=t.x,o+=t.y,l+=t.y);let c=a,p=o;const u=s?s.key:"";let f=null;"c"!==u&&"C"!==u&&"s"!==u&&"S"!==u||(f=t.bezierReflectionPoint),f&&(c=f[0],p=f[1]);const d=G(c,p,a,o,r,l,t,i);h=h.concat(d),t.bezierReflectionPoint=[r+(r-a),l+(l-o)]}break}case"Q":case"q":{const s="q"===e.key;if(e.data.length>=4){let n=+e.data[0],a=+e.data[1],o=+e.data[2],r=+e.data[3];s&&(n+=t.x,o+=t.x,a+=t.y,r+=t.y);const l=1*(1+.2*i.roughness),c=1.5*(1+.22*i.roughness);h.push({op:"move",data:[t.x+N(l,i),t.y+N(l,i)]});let p=[o+N(l,i),r+N(l,i)];h.push({op:"qcurveTo",data:[n+N(l,i),a+N(l,i),p[0],p[1]]}),h.push({op:"move",data:[t.x+N(c,i),t.y+N(c,i)]}),p=[o+N(c,i),r+N(c,i)],h.push({op:"qcurveTo",data:[n+N(c,i),a+N(c,i),p[0],p[1]]}),t.setPosition(p[0],p[1]),t.quadReflectionPoint=[o+(o-n),r+(r-a)]}break}case"T":case"t":{const n="t"===e.key;if(e.data.length>=2){let a=+e.data[0],o=+e.data[1];n&&(a+=t.x,o+=t.y);let r=a,l=o;const c=s?s.key:"";let p=null;"q"!==c&&"Q"!==c&&"t"!==c&&"T"!==c||(p=t.quadReflectionPoint),p&&(r=p[0],l=p[1]);const u=1*(1+.2*i.roughness),f=1.5*(1+.22*i.roughness);h.push({op:"move",data:[t.x+N(u,i),t.y+N(u,i)]});let d=[a+N(u,i),o+N(u,i)];h.push({op:"qcurveTo",data:[r+N(u,i),l+N(u,i),d[0],d[1]]}),h.push({op:"move",data:[t.x+N(f,i),t.y+N(f,i)]}),d=[a+N(f,i),o+N(f,i)],h.push({op:"qcurveTo",data:[r+N(f,i),l+N(f,i),d[0],d[1]]}),t.setPosition(d[0],d[1]),t.quadReflectionPoint=[a+(a-r),o+(o-l)]}break}case"A":case"a":{const s="a"===e.key;if(e.data.length>=7){const n=+e.data[0],o=+e.data[1],r=+e.data[2],l=+e.data[3],c=+e.data[4];let p=+e.data[5],u=+e.data[6];if(s&&(p+=t.x,u+=t.y),p===t.x&&u===t.y)break;if(0===n||0===o)h=h.concat(W(t.x,t.y,p,u,i)),t.setPosition(p,u);else for(let e=0;e<1;e++){const e=new a([t.x,t.y],[p,u],[n,o],r,!!l,!!c);let s=e.getNextSegment();for(;s;){const n=G(s.cp1[0],s.cp1[1],s.cp2[0],s.cp2[1],s.to[0],s.to[1],t,i);h=h.concat(n),s=e.getNextSegment()}}}break}}return h}class X extends e{line(t,e,s,i,h){const n=this._options(h);return this._drawable("line",[A(t,e,s,i,n)],n)}rectangle(t,e,s,i,h){const n=this._options(h),a=[];if(n.fill){const h=[[t,e],[t+s,e],[t+s,e+i],[t,e+i]];"solid"===n.fillStyle?a.push(C(h,n)):a.push(z(h,n))}return a.push(function(t,e,s,i,h){return function(t,e){return S(t,!0,h)}([[t,e],[t+s,e],[t+s,e+i],[t,e+i]])}(t,e,s,i,n)),this._drawable("rectangle",a,n)}ellipse(t,e,s,i,h){const n=this._options(h),a=[];if(n.fill)if("solid"===n.fillStyle){const h=O(t,e,s,i,n);h.type="fillPath",a.push(h)}else a.push(function(t,e,s,i,h){return P(h,v).fillEllipse(t,e,s,i,h)}(t,e,s,i,n));return a.push(O(t,e,s,i,n)),this._drawable("ellipse",a,n)}circle(t,e,s,i){const h=this.ellipse(t,e,s,s,i);return h.shape="circle",h}linearPath(t,e){const s=this._options(e);return this._drawable("linearPath",[S(t,!1,s)],s)}arc(t,e,s,i,h,n,a=!1,o){const r=this._options(o),l=[];if(a&&r.fill)if("solid"===r.fillStyle){const a=T(t,e,s,i,h,n,!0,!1,r);a.type="fillPath",l.push(a)}else l.push(function(t,e,s,i,h,n,a){const o=P(a,v).fillArc(t,e,s,i,h,n,a);if(o)return o;const r=t,l=e;let c=Math.abs(s/2),p=Math.abs(i/2);c+=N(.01*c,a),p+=N(.01*p,a);let u=h,f=n;for(;u<0;)u+=2*Math.PI,f+=2*Math.PI;f-u>2*Math.PI&&(u=0,f=2*Math.PI);const d=(f-u)/a.curveStepCount,g=[];for(let y=u;y<=f;y+=d)g.push([r+c*Math.cos(y),l+p*Math.sin(y)]);return g.push([r+c*Math.cos(f),l+p*Math.sin(f)]),g.push([r,l]),z(g,a)}(t,e,s,i,h,n,r));return l.push(T(t,e,s,i,h,n,a,!0,r)),this._drawable("arc",l,r)}curve(t,e){const s=this._options(e);return this._drawable("curve",[E(t,s)],s)}polygon(t,e){const s=this._options(e),i=[];if(s.fill)if("solid"===s.fillStyle)i.push(C(t,s));else{const e=this.computePolygonSize(t),h=z([[0,0],[e[0],0],[e[0],e[1]],[0,e[1]]],s);h.type="path2Dpattern",h.size=e,h.path=this.polygonPath(t),i.push(h)}return i.push(S(t,!0,s)),this._drawable("polygon",i,s)}path(t,e){const s=this._options(e),i=[];if(!t)return this._drawable("path",i,s);if(s.fill)if("solid"===s.fillStyle){const e={type:"path2Dfill",path:t,ops:[]};i.push(e)}else{const e=this.computePathSize(t),h=z([[0,0],[e[0],0],[e[0],e[1]],[0,e[1]]],s);h.type="path2Dpattern",h.size=e,h.path=t,i.push(h)}return i.push(function(t,e){t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");let s=new n(t);if(e.simplification){const t=new o(s.linearPoints,s.closed).fit(e.simplification);s=new n(t)}let i=[];const h=s.segments||[];for(let n=0;n<h.length;n++){const t=B(s,h[n],n>0?h[n-1]:null,e);t&&t.length&&(i=i.concat(t))}return{type:"path",ops:i}}(t,s)),this._drawable("path",i,s)}}const U="undefined"!=typeof document;class V{constructor(t){this.canvas=t,this.ctx=this.canvas.getContext("2d")}draw(t){const e=t.sets||[],s=t.options||this.getDefaultOptions(),i=this.ctx;for(const h of e)switch(h.type){case"path":i.save(),i.strokeStyle=s.stroke,i.lineWidth=s.strokeWidth,this._drawToContext(i,h),i.restore();break;case"fillPath":i.save(),i.fillStyle=s.fill||"",this._drawToContext(i,h),i.restore();break;case"fillSketch":this.fillSketch(i,h,s);break;case"path2Dfill":{this.ctx.save(),this.ctx.fillStyle=s.fill||"";const t=new Path2D(h.path);this.ctx.fill(t),this.ctx.restore();break}case"path2Dpattern":{const t=this.canvas.ownerDocument||U&&document;if(t){const e=h.size,i=t.createElement("canvas"),n=i.getContext("2d"),a=this.computeBBox(h.path);a&&(a.width||a.height)?(i.width=this.canvas.width,i.height=this.canvas.height,n.translate(a.x||0,a.y||0)):(i.width=e[0],i.height=e[1]),this.fillSketch(n,h,s),this.ctx.save(),this.ctx.fillStyle=this.ctx.createPattern(i,"repeat");const o=new Path2D(h.path);this.ctx.fill(o),this.ctx.restore()}else console.error("Cannot render path2Dpattern. No defs/document defined.");break}}}computeBBox(t){if(U)try{const e="http://www.w3.org/2000/svg",s=document.createElementNS(e,"svg");s.setAttribute("width","0"),s.setAttribute("height","0");const i=self.document.createElementNS(e,"path");i.setAttribute("d",t),s.appendChild(i),document.body.appendChild(s);const h=i.getBBox();return document.body.removeChild(s),h}catch(t){}return null}fillSketch(t,e,s){let i=s.fillWeight;i<0&&(i=s.strokeWidth/2),t.save(),t.strokeStyle=s.fill||"",t.lineWidth=i,this._drawToContext(t,e),t.restore()}_drawToContext(t,e){t.beginPath();for(const s of e.ops){const e=s.data;switch(s.op){case"move":t.moveTo(e[0],e[1]);break;case"bcurveTo":t.bezierCurveTo(e[0],e[1],e[2],e[3],e[4],e[5]);break;case"qcurveTo":t.quadraticCurveTo(e[0],e[1],e[2],e[3]);break;case"lineTo":t.lineTo(e[0],e[1]);}}"fillPath"===e.type?t.fill():t.stroke()}}class j extends V{constructor(t,e){super(t),this.gen=new X(e||null,this.canvas)}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,e,s,i,h){const n=this.gen.line(t,e,s,i,h);return this.draw(n),n}rectangle(t,e,s,i,h){const n=this.gen.rectangle(t,e,s,i,h);return this.draw(n),n}ellipse(t,e,s,i,h){const n=this.gen.ellipse(t,e,s,i,h);return this.draw(n),n}circle(t,e,s,i){const h=this.gen.circle(t,e,s,i);return this.draw(h),h}linearPath(t,e){const s=this.gen.linearPath(t,e);return this.draw(s),s}polygon(t,e){const s=this.gen.polygon(t,e);return this.draw(s),s}arc(t,e,s,i,h,n,a=!1,o){const r=this.gen.arc(t,e,s,i,h,n,a,o);return this.draw(r),r}curve(t,e){const s=this.gen.curve(t,e);return this.draw(s),s}path(t,e){const s=this.gen.path(t,e);return this.draw(s),s}}const F="undefined"!=typeof document;class Q{constructor(t){this.svg=t}get defs(){const t=this.svg.ownerDocument||F&&document;if(t&&!this._defs){const e=t.createElementNS("http://www.w3.org/2000/svg","defs");this.svg.firstChild?this.svg.insertBefore(e,this.svg.firstChild):this.svg.appendChild(e),this._defs=e}return this._defs||null}draw(t){const e=t.sets||[],s=t.options||this.getDefaultOptions(),i=this.svg.ownerDocument||window.document,h=i.createElementNS("http://www.w3.org/2000/svg","g");for(const n of e){let t=null;switch(n.type){case"path":(t=i.createElementNS("http://www.w3.org/2000/svg","path")).setAttribute("d",this.opsToPath(n)),t.style.stroke=s.stroke,t.style.strokeWidth=s.strokeWidth+"",t.style.fill="none";break;case"fillPath":(t=i.createElementNS("http://www.w3.org/2000/svg","path")).setAttribute("d",this.opsToPath(n)),t.style.stroke="none",t.style.strokeWidth="0",t.style.fill=s.fill||null;break;case"fillSketch":t=this.fillSketch(i,n,s);break;case"path2Dfill":(t=i.createElementNS("http://www.w3.org/2000/svg","path")).setAttribute("d",n.path||""),t.style.stroke="none",t.style.strokeWidth="0",t.style.fill=s.fill||null;break;case"path2Dpattern":if(this.defs){const e=n.size,h=i.createElementNS("http://www.w3.org/2000/svg","pattern"),a=`rough-${Math.floor(Math.random()*(Number.MAX_SAFE_INTEGER||999999))}`;h.setAttribute("id",a),h.setAttribute("x","0"),h.setAttribute("y","0"),h.setAttribute("width","1"),h.setAttribute("height","1"),h.setAttribute("height","1"),h.setAttribute("viewBox",`0 0 ${Math.round(e[0])} ${Math.round(e[1])}`),h.setAttribute("patternUnits","objectBoundingBox");const o=this.fillSketch(i,n,s);h.appendChild(o),this.defs.appendChild(h),(t=i.createElementNS("http://www.w3.org/2000/svg","path")).setAttribute("d",n.path||""),t.style.stroke="none",t.style.strokeWidth="0",t.style.fill=`url(#${a})`}else console.error("Cannot render path2Dpattern. No defs/document defined.");}t&&h.appendChild(t)}return h}fillSketch(t,e,s){let i=s.fillWeight;i<0&&(i=s.strokeWidth/2);const h=t.createElementNS("http://www.w3.org/2000/svg","path");return h.setAttribute("d",this.opsToPath(e)),h.style.stroke=s.fill||null,h.style.strokeWidth=i+"",h.style.fill="none",h}}class Z extends Q{constructor(t,e){super(t),this.gen=new X(e||null,this.svg)}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t){return this.gen.opsToPath(t)}line(t,e,s,i,h){const n=this.gen.line(t,e,s,i,h);return this.draw(n)}rectangle(t,e,s,i,h){const n=this.gen.rectangle(t,e,s,i,h);return this.draw(n)}ellipse(t,e,s,i,h){const n=this.gen.ellipse(t,e,s,i,h);return this.draw(n)}circle(t,e,s,i){const h=this.gen.circle(t,e,s,i);return this.draw(h)}linearPath(t,e){const s=this.gen.linearPath(t,e);return this.draw(s)}polygon(t,e){const s=this.gen.polygon(t,e);return this.draw(s)}arc(t,e,s,i,h,n,a=!1,o){const r=this.gen.arc(t,e,s,i,h,n,a,o);return this.draw(r)}curve(t,e){const s=this.gen.curve(t,e);return this.draw(s)}path(t,e){const s=this.gen.path(t,e);return this.draw(s)}}return{canvas:(t,e)=>new j(t,e),svg:(t,e)=>new Z(t,e),generator:(t,e)=>new X(t,e)}});const Qh=t=>{return t>20?20:t};class Rh{constructor(t){this.el=t.element,this.data=t.data,this.element=t.element,this.margin=t.margin||{top:50,right:20,bottom:70,left:100},this.title=t.title,this.color=t.color||"skyblue",this.highlight=t.highlight||"coral",this.roughness=Qh(t.roughness)||1,this.stroke=t.stroke||"black",this.strokeWidth=t.strokeWidth||1,this.axisStrokeWidth=t.axisStrokeWidth||.5,this.axisRoughness=t.axisRoughness||.5,this.innerStrokeWidth=t.innerStrokeWidth||1,this.fillStyle=t.fillStyle,this.bowing=t.bowing||0,this.fillWeight=t.fillWeight||.5,this.simplification=t.simplification||.2,this.interactive=!1!==t.interactive,this.titleFontSize=t.titleFontSize,this.axisFontSize=t.axisFontSize,this.tooltipFontSize=t.tooltipFontSize||"0.95rem",this.font=t.font||0,this.dataFormat="object"==typeof t.data?"object":"file",this.labels="object"===this.dataFormat?"labels":t.labels,this.values="object"===this.dataFormat?"values":t.values,this.xValueFormat=t.xValueFormat,this.yValueFormat=t.yValueFormat,this.padding=t.padding||.1,this.xLabel=t.xLabel||"",this.yLabel=t.yLabel||"",this.labelFontSize=t.labelFontSize||"1rem",this.initChartValues(t),this.resolveFont(),this.drawChart=this.resolveData(t.data),this.drawChart(),"undefined"!==t.title&&this.setTitle(t.title)}initChartValues(t){let i=t.width?t.width:350,s=t.height?t.height:450;this.width=i-this.margin.left-this.margin.right,this.height=s-this.margin.top-this.margin.bottom,this.roughId=this.el+"_svg",this.graphClass=this.el.substring(1,this.el.length),this.interactionG="g."+this.graphClass,this.setSvg()}setSvg(){this.svg=b(this.el).append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("id",this.roughId).attr("transform","translate("+this.margin.left+","+this.margin.top+")")}resolveFont(){0===this.font||void 0===this.font||"gaegu"===this.font.toString().toLowerCase()?(i.addFontGaegu(this.svg),this.fontFamily="gaeguregular"):1===this.font||"indie flower"===this.font.toString().toLowerCase()?(i.addFontIndieFlower(this.svg),this.fontFamily="indie_flowerregular"):this.fontFamily=this.font}resolveData(t){return"string"!=typeof t?()=>{this.data=t,this.drawFromObject()}:t.includes(".csv")?()=>{H(t).then(t=>{this.data=t,this.drawFromFile()})}:t.includes(".tsv")?()=>{G(t).then(t=>{this.data=t,this.drawFromFile()})}:void 0}addScales(){const t=this;this.xScale=ka().rangeRound([0,this.width]).padding(this.padding).domain("file"===this.dataFormat?this.data.map(i=>i[t.labels]):this.data[t.labels]),this.yScale=v().rangeRound([this.height,0]).domain("file"===this.dataFormat?[0,w(this.data,i=>+i[t.values])]:[0,w(this.data[t.values])])}addLabels(){""!==this.xLabel&&this.svg.append("text").attr("x",this.width/2).attr("y",this.height+this.margin.bottom/2).attr("dx","1em").attr("class","labelText").style("text-anchor","middle").style("font-family",this.fontFamily).style("font-size",this.labelFontSize).text(this.xLabel),""!==this.yLabel&&this.svg.append("text").attr("transform","rotate(-90)").attr("y",0-this.margin.left/1.4).attr("x",0-this.height/2).attr("dy","1em").attr("class","labelText").style("text-anchor","middle").style("font-family",this.fontFamily).style("font-size",this.labelFontSize).text(this.yLabel)}addAxes(){const t=ia(this.xScale).tickSize(0).tickFormat(t=>this.xValueFormat?s(this.xValueFormat)(t):t),i=ja(this.yScale).tickSize(0).tickFormat(t=>this.yValueFormat?s(this.yValueFormat)(t):t);this.svg.append("g").attr("transform","translate(0,"+this.height+")").call(t).attr("class",`xAxis${this.graphClass}`).selectAll("text").attr("transform","translate(-10,0)rotate(-45)").style("text-anchor","end").style("font-family",this.fontFamily).style("font-size",void 0===this.axisFontSize?`${Math.min(.8,Math.min(this.width,this.height)/140)}rem`:this.axisFontSize).style("opacity",.9),this.svg.append("g").call(i).attr("class",`yAxis${this.graphClass}`).selectAll("text").style("font-family",this.fontFamily).style("font-size",void 0===this.axisFontSize?`${Math.min(.95,Math.min(this.width,this.height)/140)}rem`:this.axisFontSize).style("opacity",.9),c("path.domain").attr("stroke","transparent")}makeAxesRough(t,i){let s=`xAxis${this.graphClass}`,e=`yAxis${this.graphClass}`,h=`rough-${s}`,a=`rough-${e}`;b(`.${s}`).selectAll("path.domain").each(function(s,e){let a=b(this).node().getAttribute("d"),l=i.path(a,{fillStyle:"hachure"});l.setAttribute("class",h),t.appendChild(l)}),c(`.${h}`).attr("transform",`translate(0, ${this.height})`),b(`.${e}`).selectAll("path.domain").each(function(s,e){let h=b(this).node().getAttribute("d"),l=i.path(h,{fillStyle:"hachure"});l.setAttribute("class",a),t.appendChild(l)})}setTitle(t){this.svg.append("text").attr("x",this.width/2).attr("y",0-this.margin.top/2).attr("class","title").attr("text-anchor","middle").style("font-size",void 0===this.titleFontSize?`${Math.min(40,Math.min(this.width,this.height)/5)}px`:this.titleFontSize).style("font-family",this.fontFamily).style("opacity",.8).text(t)}addInteraction(){c(this.interactionG).data("file"===this.dataFormat?this.data:this.data.values).append("rect").attr("x",(t,i)=>"file"===this.dataFormat?this.xScale(t[this.labels]):this.xScale(this.data[this.labels][i])).attr("y",(t,i)=>"file"===this.dataFormat?this.yScale(+t[this.values]):this.yScale(this.data[this.values][i])).attr("width",this.xScale.bandwidth()).attr("height",(t,i)=>"file"===this.dataFormat?this.height-this.yScale(+t[this.values]):this.height-this.yScale(this.data[this.values][i])).attr("fill","transparent");const t=b(this.el).append("div").style("opacity",0).attr("class","tooltip").style("position","absolute").style("background-color","white").style("border","solid").style("border-width","1px").style("border-radius","5px").style("padding","3px").style("font-family",this.fontFamily).style("font-size",this.tooltipFontSize).style("pointer-events","none");let i=this;c(this.interactionG).on("mouseover",function(){t.style("opacity",1),b(this).select("path").style("stroke",i.highlight),b(this).selectAll("path:nth-child(2)").style("stroke-width",i.strokeWidth+1.2)}),c(this.interactionG).on("mouseout",function(){t.style("opacity",0),b(this).select("path").style("stroke",i.color),b(this).selectAll("path:nth-child(2)").style("stroke-width",i.strokeWidth)}),c(this.interactionG).on("mousemove",function(s){let e=b(this).attr("attrX"),h=b(this).attr("attrY"),a=z(this);t.html(`<b>${e}</b>: ${h}`).style("opacity",.95).attr("class",function(t){}).style("transform",`translate(${a[0]+i.margin.left}px, \n          ${a[1]-(i.height+i.margin.top+i.margin.bottom)}px)`)})}initRoughObjects(){var $oYNA$$interop$default=I(q);this.roughSvg=document.getElementById(this.roughId),this.rcAxis=$oYNA$$interop$default.d.svg(this.roughSvg,{options:{strokeWidth:this.axisStrokeWidth,roughness:this.axisRoughness}}),this.rc=$oYNA$$interop$default.d.svg(this.roughSvg,{options:{fill:this.color,stroke:"none"===this.stroke?void 0:this.stroke,strokeWidth:this.innerStrokeWidth,roughness:this.roughness,bowing:this.bowing,fillStyle:this.fillStyle}})}drawFromObject(){this.initRoughObjects(),this.addScales(),this.addAxes(),this.makeAxesRough(this.roughSvg,this.rcAxis),this.addLabels(),this.data.values.forEach((t,i)=>{let s=this.rc.rectangle(this.xScale(this.data[this.labels][i]),this.yScale(+t),this.xScale.bandwidth(),this.height-this.yScale(+t),{simplification:this.simplification,fillWeight:this.fillWeight}),e=this.roughSvg.appendChild(s);e.setAttribute("class",this.graphClass),e.setAttribute("attrX",this.data[this.labels][i]),e.setAttribute("attrY",+t)}),c(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width",this.strokeWidth),!0===this.interactive&&this.addInteraction()}drawFromFile(){this.initRoughObjects(),this.addScales(),this.addAxes(),this.makeAxesRough(this.roughSvg,this.rcAxis),this.addLabels(),this.data.forEach(t=>{let i=this.rc.rectangle(this.xScale(t[this.labels]),this.yScale(+t[this.values]),this.xScale.bandwidth(),this.height-this.yScale(+t[this.values]),{simplification:this.simplification,fillWeight:this.fillWeight}),s=this.roughSvg.appendChild(i);s.setAttribute("class",this.graphClass),s.setAttribute("attrX",t[this.labels]),s.setAttribute("attrY",+t[this.values])}),c(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width",this.strokeWidth),!0===this.interactive&&this.addInteraction()}}const Sh=t=>{return t>20?20:t};class Th{constructor(t){this.el=t.element,this.element=t.element,this.margin=t.margin||{top:50,right:20,bottom:50,left:100},this.title=t.title,this.color=t.color||"skyblue",this.highlight=t.highlight||"coral",this.roughness=Sh(t.roughness)||1,this.stroke=t.stroke||"black",this.strokeWidth=t.strokeWidth||1,this.axisStrokeWidth=t.axisStrokeWidth||.5,this.axisRoughness=t.axisRoughness||1,this.innerStrokeWidth=t.innerStrokeWidth||1,this.fillStyle=t.fillStyle,this.bowing=t.bowing||0,this.fillWeight=t.fillWeight||.5,this.simplification=t.simplification||.2,this.interactive=!1!==t.interactive,this.titleFontSize=t.titleFontSize,this.axisFontSize=t.axisFontSize,this.tooltipFontSize=t.tooltipFontSize||".95rem",this.font=t.font||0,this.dataFormat="object"==typeof t.data?"object":"file",this.labels="object"===this.dataFormat?"labels":t.labels,this.values="object"===this.dataFormat?"values":t.values,this.xValueFormat=t.xValueFormat,this.yValueFormat=t.yValueFormat,this.padding=t.padding||.1,this.xLabel=t.xLabel||"",this.yLabel=t.yLabel||"",this.labelFontSize=t.labelFontSize||"1rem",this.initChartValues(t),this.resolveFont(),this.drawChart=this.resolveData(t.data),this.drawChart(),"undefined"!==t.title&&this.setTitle(t.title)}initChartValues(t){let i=t.width?t.width:350,s=t.height?t.height:450;this.width=i-this.margin.left-this.margin.right,this.height=s-this.margin.top-this.margin.bottom,this.roughId=this.el+"_svg",this.graphClass=this.el.substring(1,this.el.length),this.interactionG="g."+this.graphClass,this.setSvg()}setSvg(){this.svg=b(this.el).append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("id",this.roughId).attr("transform","translate("+this.margin.left+","+this.margin.top+")")}resolveFont(){0===this.font||void 0===this.font||"gaegu"===this.font.toString().toLowerCase()?(i.addFontGaegu(this.svg),this.fontFamily="gaeguregular"):1===this.font||"indie flower"===this.font.toString().toLowerCase()?(i.addFontIndieFlower(this.svg),this.fontFamily="indie_flowerregular"):this.fontFamily=this.font}resolveData(t){return"string"!=typeof t?()=>{this.data=t,this.drawFromObject()}:t.includes(".csv")?()=>{H(t).then(t=>{console.log(t),this.data=t,this.drawFromFile()})}:t.includes(".tsv")?()=>{G(t).then(t=>{this.data=t,this.drawFromFile()})}:void 0}addScales(){const t=this;this.yScale=ka().rangeRound([0,this.height]).padding(this.padding).domain("file"===this.dataFormat?this.data.map(i=>i[t.labels]):this.data[t.labels]),this.xScale=v().rangeRound([0,this.width]).domain("file"===this.dataFormat?[0,w(this.data,i=>+i[t.values])]:[0,w(this.data[t.values])])}addLabels(){""!==this.xLabel&&this.svg.append("text").attr("x",this.width/2).attr("y",this.height+this.margin.bottom/2.4).attr("dx","1em").attr("class","labelText").style("text-anchor","middle").style("font-family",this.fontFamily).style("font-size",this.labelFontSize).text(this.xLabel),""!==this.yLabel&&this.svg.append("text").attr("transform","rotate(-90)").attr("y",0-this.margin.left/1.5).attr("x",0-this.height/2).attr("dy","1em").attr("class","labelText").style("text-anchor","middle").style("font-family",this.fontFamily).style("font-size",this.labelFontSize).text(this.yLabel)}addAxes(){const t=ia(this.xScale).tickSize(0).tickFormat(t=>this.xValueFormat?s(this.xValueFormat)(t):t),i=ja(this.yScale).tickSize(0).tickFormat(t=>this.yValueFormat?s(this.yValueFormat)(t):t);this.svg.append("g").attr("transform",`translate(0, ${this.height})`).call(t).attr("class",`xAxis${this.graphClass}`).selectAll("text").attr("transform","translate(-10,0)rotate(-45)").style("text-anchor","end").style("font-family",this.fontFamily).style("font-size",void 0===this.axisFontSize?`${Math.min(.95,Math.min(this.width,this.height)/140)}rem`:this.axisFontSize).style("opacity",.85),this.svg.append("g").call(i).attr("class",`yAxis${this.graphClass}`).selectAll("text").style("font-family",this.fontFamily).style("font-size",void 0===this.axisFontSize?`${Math.min(.95,Math.min(this.width,this.height)/140)}rem`:this.axisFontSize).style("opacity",.85),c("path.domain").attr("stroke","transparent")}makeAxesRough(t,i){let s=`xAxis${this.graphClass}`,e=`yAxis${this.graphClass}`,a=`rough-${s}`,h=`rough-${e}`;b(`.${s}`).selectAll("path.domain").each(function(s,e){let h=b(this).node().getAttribute("d"),l=i.path(h,{stroke:"black",fillStyle:"hachure"});l.setAttribute("class",a),t.appendChild(l)}),c(`.${a}`).attr("transform",`translate(0, ${this.height})`),b(`.${e}`).selectAll("path.domain").each(function(s,e){let a=b(this).node().getAttribute("d"),l=i.path(a,{stroke:"black",fillStyle:"hachure"});l.setAttribute("class",h),t.appendChild(l)})}setTitle(t){this.svg.append("text").attr("x",this.width/2).attr("y",0-this.margin.top/2).attr("class","title").attr("text-anchor","middle").style("font-size",void 0===this.titleFontSize?`${Math.min(40,Math.min(this.width,this.height)/5)}px`:this.titleFontSize).style("font-family",this.fontFamily).style("opacity",.8).text(t)}addInteraction(){c(this.interactionG).data("file"===this.dataFormat?this.data:this.data.values).append("rect").attr("x",0).attr("y",(t,i)=>"file"===this.dataFormat?this.yScale(t[this.labels]):this.yScale(this.data[this.labels][i])).attr("width",(t,i)=>"file"===this.dataFormat?this.xScale(+t[this.values]):this.xScale(this.data[this.values][i])).attr("height",this.yScale.bandwidth()).attr("fill","transparent");const t=b(this.el).append("div").style("opacity",0).attr("class","tooltip").style("position","absolute").style("background-color","white").style("border","solid").style("border-width","1px").style("border-radius","5px").style("padding","3px").style("font-family",this.fontFamily).style("font-size",this.tooltipFontSize).style("pointer-events","none");let i=this;c(this.interactionG).on("mouseover",function(){t.style("opacity",1),b(this).select("path").style("stroke",i.highlight),b(this).selectAll("path:nth-child(2)").style("stroke-width",i.strokeWidth+1.2)}),c(this.interactionG).on("mouseout",function(){t.style("opacity",0),b(this).select("path").style("stroke",i.color),b(this).selectAll("path:nth-child(2)").style("stroke-width",i.strokeWidth)}),c(this.interactionG).on("mousemove",function(s){let e=b(this).attr("attrX"),a=b(this).attr("attrY"),h=z(this);t.html(`<b>${e}</b>: ${a}`).style("opacity",.95).attr("class",function(t){}).style("transform",`translate(${h[0]+i.margin.left}px, \n              ${h[1]-(i.height+i.margin.top+i.margin.bottom)}px)`)})}initRoughObjects(){var $oYNA$$interop$default=I(q);this.roughSvg=document.getElementById(this.roughId),this.rcAxis=$oYNA$$interop$default.d.svg(this.roughSvg,{options:{strokeWidth:this.axisStrokeWidth,roughness:this.axisRoughness}}),this.rc=$oYNA$$interop$default.d.svg(this.roughSvg,{options:{fill:this.color,stroke:"none"===this.stroke?void 0:this.stroke,strokeWidth:this.innerStrokeWidth,roughness:this.roughness,bowing:this.bowing,fillStyle:this.fillStyle}})}drawFromObject(){this.initRoughObjects(),this.addScales(),this.addAxes(),this.makeAxesRough(this.roughSvg,this.rcAxis),this.addLabels(),this.data.values.forEach((t,i)=>{let s=this.rc.rectangle(0,this.yScale(this.data[this.labels][i]),this.xScale(t),this.yScale.bandwidth(),{simplification:this.simplification,fillWeight:this.fillWeight}),e=this.roughSvg.appendChild(s);e.setAttribute("class",this.graphClass),e.setAttribute("attrX",this.data[this.labels][i]),e.setAttribute("attrY",+t)}),c(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width",this.strokeWidth),!0===this.interactive&&this.addInteraction()}drawFromFile(){this.initRoughObjects(),this.addScales(),this.addAxes(),this.makeAxesRough(this.roughSvg,this.rcAxis),this.addLabels(),this.data.forEach(t=>{let i=this.rc.rectangle(0,this.yScale(t[this.labels]),this.xScale(+t[this.values]),this.yScale.bandwidth(),{simplification:this.simplification,fillWeight:this.fillWeight}),s=this.roughSvg.appendChild(i);s.setAttribute("class",this.graphClass),s.setAttribute("attrX",t[this.labels]),s.setAttribute("attrY",+t[this.values])}),c(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width",this.strokeWidth),!0===this.interactive&&this.addInteraction()}}function Uh($){return $.innerRadius}function Vh($){return $.outerRadius}function Wh($){return $.startAngle}function Xh($){return $.endAngle}function Yh($){return $&&$.padAngle}function Zh($,t,r,n,i,o,a,p){var e=r-$,c=n-t,I=a-i,B=p-o,L=B*e-I*c;if(!(L*L<Q))return[$+(L=(I*(t-o)-B*($-i))/L)*e,t+L*c]}function oa($,t,r,n,i,o,a){var p=$-r,e=t-n,c=(a?o:-o)/Z(p*p+e*e),I=c*e,B=-c*p,L=$+I,m=t+B,s=r+I,l=n+B,u=(L+s)/2,y=(m+l)/2,f=s-L,x=l-m,v=f*f+x*x,g=i-o,h=L*l-s*m,d=(x<0?-1:1)*Z(ji(0,g*g*v-h*h)),T=(h*x-f*d)/v,A=(-h*f-x*d)/v,R=(h*x+f*d)/v,q=(-h*f+x*d)/v,P=T-u,b=A-y,E=R-u,O=q-y;return P*P+b*b>E*E+O*O&&(T=R,A=q),{cx:T,cy:A,x01:-I,y01:-B,x11:T*(i/g-1),y11:A*(i/g-1)}}var Cb=Math.PI,Db=2*Cb,F=1e-6,ci=Db-F;function Eb(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Fb(){return new Eb}Eb.prototype=Fb.prototype={constructor:Eb,moveTo:function(t,h){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+h)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,h){this._+="L"+(this._x1=+t)+","+(this._y1=+h)},quadraticCurveTo:function(t,h,i,s){this._+="Q"+ +t+","+ +h+","+(this._x1=+i)+","+(this._y1=+s)},bezierCurveTo:function(t,h,i,s,$,o){this._+="C"+ +t+","+ +h+","+ +i+","+ +s+","+(this._x1=+$)+","+(this._y1=+o)},arcTo:function(t,h,i,s,$){t=+t,h=+h,i=+i,s=+s,$=+$;var o=this._x1,a=this._y1,r=i-t,_=s-h,n=o-t,M=a-h,e=n*n+M*M;if($<0)throw new Error("negative radius: "+$);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=h);else if(e>F){if(Math.abs(M*r-_*n)>F&&$){var u=i-o,b=s-a,v=r*r+_*_,l=u*u+b*b,x=Math.sqrt(v),p=Math.sqrt(e),c=$*Math.tan((Cb-Math.acos((v+e-l)/(2*x*p)))/2),f=c/p,y=c/x;Math.abs(f-1)>F&&(this._+="L"+(t+f*n)+","+(h+f*M)),this._+="A"+$+","+$+",0,0,"+ +(M*u>n*b)+","+(this._x1=t+y*r)+","+(this._y1=h+y*_)}else this._+="L"+(this._x1=t)+","+(this._y1=h);}else;},arc:function(t,h,i,s,$,o){t=+t,h=+h,o=!!o;var a=(i=+i)*Math.cos(s),r=i*Math.sin(s),_=t+a,n=h+r,M=1^o,e=o?s-$:$-s;if(i<0)throw new Error("negative radius: "+i);null===this._x1?this._+="M"+_+","+n:(Math.abs(this._x1-_)>F||Math.abs(this._y1-n)>F)&&(this._+="L"+_+","+n),i&&(e<0&&(e=e%Db+Db),e>ci?this._+="A"+i+","+i+",0,1,"+M+","+(t-a)+","+(h-r)+"A"+i+","+i+",0,1,"+M+","+(this._x1=_)+","+(this._y1=n):e>F&&(this._+="A"+i+","+i+",0,"+ +(e>=Cb)+","+M+","+(this._x1=t+i*Math.cos($))+","+(this._y1=h+i*Math.sin($))))},rect:function(t,h,i,s){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+h)+"h"+ +i+"v"+ +s+"h"+-i+"Z"},toString:function(){return this._}};var d=function(e){return function(){return e}};var wd=Math.abs;var U=Math.atan2;var X=Math.cos;var ji=Math.max;var Gb=Math.min;var V=Math.sin;var Z=Math.sqrt;var Q=1e-12;var W=Math.PI;var ma=W/2;var Y=2*W;function ri($){return $>1?0:$<-1?W:Math.acos($)}function sd($){return $>=1?ma:$<=-1?-ma:Math.asin($)}var ta=function(){var $=Uh,t=Vh,r=d(0),n=null,i=Wh,o=Xh,a=Yh,p=null;function e(){var e,c,I=+$.apply(this,arguments),B=+t.apply(this,arguments),L=i.apply(this,arguments)-ma,m=o.apply(this,arguments)-ma,s=wd(m-L),l=m>L;if(p||(p=e=Fb()),B<I&&(c=B,B=I,I=c),B>Q){if(s>Y-Q)p.moveTo(B*X(L),B*V(L)),p.arc(0,0,B,L,m,!l),I>Q&&(p.moveTo(I*X(m),I*V(m)),p.arc(0,0,I,m,L,l));else{var u,y,f=L,x=m,v=L,g=m,h=s,d=s,T=a.apply(this,arguments)/2,A=T>Q&&(n?+n.apply(this,arguments):Z(I*I+B*B)),R=Gb(wd(B-I)/2,+r.apply(this,arguments)),q=R,P=R;if(A>Q){var b=sd(A/I*V(T)),E=sd(A/B*V(T));(h-=2*b)>Q?(v+=b*=l?1:-1,g-=b):(h=0,v=g=(L+m)/2),(d-=2*E)>Q?(f+=E*=l?1:-1,x-=E):(d=0,f=x=(L+m)/2)}var O=B*X(f),S=B*V(f),j=I*X(g),k=I*V(g);if(R>Q){var w,z=B*X(x),C=B*V(x),D=I*X(v),F=I*V(v);if(s<W&&(w=Zh(O,S,D,F,z,C,j,k))){var G=O-w[0],H=S-w[1],J=z-w[0],K=C-w[1],M=1/V(ri((G*J+H*K)/(Z(G*G+H*H)*Z(J*J+K*K)))/2),N=Z(w[0]*w[0]+w[1]*w[1]);q=Gb(R,(I-N)/(M-1)),P=Gb(R,(B-N)/(M+1))}}d>Q?P>Q?(u=oa(D,F,O,S,B,P,l),y=oa(z,C,j,k,B,P,l),p.moveTo(u.cx+u.x01,u.cy+u.y01),P<R?p.arc(u.cx,u.cy,P,U(u.y01,u.x01),U(y.y01,y.x01),!l):(p.arc(u.cx,u.cy,P,U(u.y01,u.x01),U(u.y11,u.x11),!l),p.arc(0,0,B,U(u.cy+u.y11,u.cx+u.x11),U(y.cy+y.y11,y.cx+y.x11),!l),p.arc(y.cx,y.cy,P,U(y.y11,y.x11),U(y.y01,y.x01),!l))):(p.moveTo(O,S),p.arc(0,0,B,f,x,!l)):p.moveTo(O,S),I>Q&&h>Q?q>Q?(u=oa(j,k,z,C,I,-q,l),y=oa(O,S,D,F,I,-q,l),p.lineTo(u.cx+u.x01,u.cy+u.y01),q<R?p.arc(u.cx,u.cy,q,U(u.y01,u.x01),U(y.y01,y.x01),!l):(p.arc(u.cx,u.cy,q,U(u.y01,u.x01),U(u.y11,u.x11),!l),p.arc(0,0,I,U(u.cy+u.y11,u.cx+u.x11),U(y.cy+y.y11,y.cx+y.x11),l),p.arc(y.cx,y.cy,q,U(y.y11,y.x11),U(y.y01,y.x01),!l))):p.arc(0,0,I,g,v,l):p.lineTo(j,k)}}else p.moveTo(0,0);if(p.closePath(),e)return p=null,e+""||null}return e.centroid=function(){var r=(+$.apply(this,arguments)+ +t.apply(this,arguments))/2,n=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-W/2;return[X(n)*r,V(n)*r]},e.innerRadius=function(t){return arguments.length?($="function"==typeof t?t:d(+t),e):$},e.outerRadius=function($){return arguments.length?(t="function"==typeof $?$:d(+$),e):t},e.cornerRadius=function($){return arguments.length?(r="function"==typeof $?$:d(+$),e):r},e.padRadius=function($){return arguments.length?(n=null==$?null:"function"==typeof $?$:d(+$),e):n},e.startAngle=function($){return arguments.length?(i="function"==typeof $?$:d(+$),e):i},e.endAngle=function($){return arguments.length?(o="function"==typeof $?$:d(+$),e):o},e.padAngle=function($){return arguments.length?(a="function"==typeof $?$:d(+$),e):a},e.context=function($){return arguments.length?(p=null==$?null:$,e):p},e};function Sc(t){this._context=t}Sc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;default:this._context.lineTo(t,i);}}};var Ac=function(t){return new Sc(t)};function te($){return $[0]}function re($){return $[1]}var pe=function(){var n=te,t=re,r=d(!0),e=null,$=Ac,o=null;function u(u){var i,l,p,h=u.length,c=!1;for(null==e&&(o=$(p=Fb())),i=0;i<=h;++i)!(i<h&&r(l=u[i],i,u))===c&&((c=!c)?o.lineStart():o.lineEnd()),c&&o.point(+n(l,i,u),+t(l,i,u));if(p)return o=null,p+""||null}return u.x=function(t){return arguments.length?(n="function"==typeof t?t:d(+t),u):n},u.y=function(n){return arguments.length?(t="function"==typeof n?n:d(+n),u):t},u.defined=function(n){return arguments.length?(r="function"==typeof n?n:d(!!n),u):r},u.curve=function(n){return arguments.length?($=n,null!=e&&(o=$(e)),u):$},u.context=function(n){return arguments.length?(null==n?e=o=null:o=$(e=n),u):e},u};var ne=function($,t){return t<$?-1:t>$?1:t>=$?0:NaN};var me=function($){return $};var xa=function(){var t=me,n=ne,r=null,e=d(0),$=d(Y),o=d(0);function a(a){var i,u,l,p,c,A=a.length,f=0,s=new Array(A),b=new Array(A),U=+e.apply(this,arguments),Z=Math.min(Y,Math.max(-Y,$.apply(this,arguments)-U)),m=Math.min(Math.abs(Z)/A,o.apply(this,arguments)),d=m*(Z<0?-1:1);for(i=0;i<A;++i)(c=b[s[i]=i]=+t(a[i],i,a))>0&&(f+=c);for(null!=n?s.sort(function(t,r){return n(b[t],b[r])}):null!=r&&s.sort(function(t,n){return r(a[t],a[n])}),i=0,l=f?(Z-A*d)/f:0;i<A;++i,U=p)u=s[i],p=U+((c=b[u])>0?c*l:0)+d,b[u]={data:a[u],index:i,value:c,startAngle:U,endAngle:p,padAngle:m};return b}return a.value=function(n){return arguments.length?(t="function"==typeof n?n:d(+n),a):t},a.sortValues=function(t){return arguments.length?(n=t,r=null,a):n},a.sort=function(t){return arguments.length?(r=t,n=null,a):r},a.startAngle=function(t){return arguments.length?(e="function"==typeof t?t:d(+t),a):e},a.endAngle=function(t){return arguments.length?($="function"==typeof t?t:d(+t),a):$},a.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:d(+t),a):o},a};var Ci=je(Ac);function wc(r){this._curve=r}function je(r){function e(e){return new wc(r(e))}return e._curve=r,e}wc.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(r,e){this._curve.point(e*Math.sin(r),e*-Math.cos(r))}};var Fi=Array.prototype.slice;var Gi=Math.sqrt(1/3);var vc=Math.sin(W/10)/Math.sin(7*W/10),Ii=Math.sin(Y/10)*vc,Ji=-Math.cos(Y/10)*vc;var Ki=Math.sqrt(3);var Li=Math.sqrt(3)/2,Mi=1/Math.sqrt(12);function he(t){this._context=t}var t=function(){};function Aa(t,i,s){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+i)/6,(t._y0+4*t._y1+s)/6)}function ib(t){this._context=t}ib.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Aa(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Aa(this,t,i);}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i}};he.prototype={areaStart:t,areaEnd:t,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);}},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._x2=t,this._y2=i;break;case 1:this._point=2,this._x3=t,this._y3=i;break;case 2:this._point=3,this._x4=t,this._y4=i,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+i)/6);break;default:Aa(this,t,i);}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i}};function Ud(t){this._context=t}Ud.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,s=(this._y0+4*this._y1+i)/6;this._line?this._context.lineTo(e,s):this._context.moveTo(e,s);break;case 3:this._point=4;default:Aa(this,t,i);}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i}};function mc(i,t){this._basis=new ib(i),this._beta=t}mc.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var i=this._x,t=this._y,s=i.length-1;if(s>0)for(var n,e=i[0],a=t[0],$=i[s]-e,r=t[s]-a,h=-1;++h<=s;)n=h/s,this._basis.point(this._beta*i[h]+(1-this._beta)*(e+n*$),this._beta*t[h]+(1-this._beta)*(a+n*r));this._x=this._y=null,this._basis.lineEnd()},point:function(i,t){this._x.push(+i),this._y.push(+t)}};var Ti=function i(t){function s(i){return 1===t?new ib(i):new mc(i,t)}return s.beta=function(t){return i(+t)},s}(.85);function gb(t,i){this._context=t,this._k=(1-i)/6}function Ba(t,i,n){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-i),t._y2+t._k*(t._y1-n),t._x2,t._y2)}function eb(t,i){this._context=t,this._k=(1-i)/6}eb.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Ba(this,this._x1,this._y1);}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2,this._x1=t,this._y1=i;break;case 2:this._point=3;default:Ba(this,t,i);}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};var Xi=function t(i){function n(t){return new eb(t,i)}return n.tension=function(i){return t(+i)},n}(0);gb.prototype={areaStart:t,areaEnd:t,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);}},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._x3=t,this._y3=i;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=i);break;case 2:this._point=3,this._x5=t,this._y5=i;break;default:Ba(this,t,i);}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};var Yi=function t(i){function s(t){return new gb(t,i)}return s.tension=function(i){return t(+i)},s}(0);function db(t,i){this._context=t,this._k=(1-i)/6}db.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Ba(this,t,i);}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};var Gj=function t(i){function n(t){return new db(t,i)}return n.tension=function(i){return t(+i)},n}(0);function hc(t,i){this._context=t,this._alpha=i}function cb(_,t,i){var a=_._x1,s=_._y1,h=_._x2,l=_._y2;if(_._l01_a>Q){var o=2*_._l01_2a+3*_._l01_a*_._l12_a+_._l12_2a,n=3*_._l01_a*(_._l01_a+_._l12_a);a=(a*o-_._x0*_._l12_2a+_._x2*_._l01_2a)/n,s=(s*o-_._y0*_._l12_2a+_._y2*_._l01_2a)/n}if(_._l23_a>Q){var e=2*_._l23_2a+3*_._l23_a*_._l12_a+_._l12_2a,r=3*_._l23_a*(_._l23_a+_._l12_a);h=(h*e+_._x1*_._l23_2a-t*_._l12_2a)/r,l=(l*e+_._y1*_._l23_2a-i*_._l12_2a)/r}_._context.bezierCurveTo(a,s,h,l,_._x2,_._y2)}function fc(_,t){this._context=_,this._alpha=t}fc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(_,t){if(_=+_,t=+t,this._point){var i=this._x2-_,a=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+a*a,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(_,t):this._context.moveTo(_,t);break;case 1:this._point=2;break;case 2:this._point=3;default:cb(this,_,t);}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=_,this._y0=this._y1,this._y1=this._y2,this._y2=t}};var cj=function _(t){function i(_){return t?new fc(_,t):new eb(_,0)}return i.alpha=function(t){return _(+t)},i}(.5);hc.prototype={areaStart:t,areaEnd:t,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);}},point:function(t,i){if(t=+t,i=+i,this._point){var s=this._x2-t,_=this._y2-i;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(s*s+_*_,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=i;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=i);break;case 2:this._point=3,this._x5=t,this._y5=i;break;default:cb(this,t,i);}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};var dj=function t(i){function s(t){return i?new hc(t,i):new gb(t,0)}return s.alpha=function(i){return t(+i)},s}(.5);function bc(t,i){this._context=t,this._alpha=i}bc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){if(t=+t,i=+i,this._point){var _=this._x2-t,s=this._y2-i;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(_*_+s*s,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:cb(this,t,i);}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};var fj=function t(i){function _(t){return i?new bc(t,i):new db(t,0)}return _.alpha=function(i){return t(+i)},_}(.5);function mi(t){this._context=t}mi.prototype={areaStart:t,areaEnd:t,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,o){t=+t,o=+o,this._point?this._context.lineTo(t,o):(this._point=1,this._context.moveTo(t,o))}};function _b(t){return t<0?-1:1}function $b(t,o,n){var i=t._x1-t._x0,e=o-t._x1,$=(t._y1-t._y0)/(i||e<0&&-0),s=(n-t._y1)/(e||i<0&&-0),x=($*e+s*i)/(i+e);return(_b($)+_b(s))*Math.min(Math.abs($),Math.abs(s),.5*Math.abs(x))||0}function Ub(t,o){var n=t._x1-t._x0;return n?(3*(t._y1-t._y0)/n-o)/2:o}function Sa(t,o,n){var i=t._x0,e=t._y0,$=t._x1,s=t._y1,x=($-i)/3;t._context.bezierCurveTo(i+x,e+x*o,$-x,s-x*n,$,s)}function Ra(t){this._context=t}function Wf(t){this._context=new Jb(t)}function Jb(t){this._context=t}Ra.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Sa(this,this._t0,Ub(this,this._t0));}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,o){var n=NaN;if(o=+o,(t=+t)!==this._x1||o!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,o):this._context.moveTo(t,o);break;case 1:this._point=2;break;case 2:this._point=3,Sa(this,Ub(this,n=$b(this,t,o)),n);break;default:Sa(this,this._t0,n=$b(this,t,o));}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=o,this._t0=n}}},(Wf.prototype=Object.create(Ra.prototype)).point=function(t,o){Ra.prototype.point.call(this,o,t)},Jb.prototype={moveTo:function(t,o){this._context.moveTo(o,t)},closePath:function(){this._context.closePath()},lineTo:function(t,o){this._context.lineTo(o,t)},bezierCurveTo:function(t,o,n,i,e,$){this._context.bezierCurveTo(o,t,i,n,$,e)}};function Rf(t){this._context=t}function Bd(t){var n,i,r=t.length-1,e=new Array(r),o=new Array(r),a=new Array(r);for(e[0]=0,o[0]=2,a[0]=t[0]+2*t[1],n=1;n<r-1;++n)e[n]=1,o[n]=4,a[n]=4*t[n]+2*t[n+1];for(e[r-1]=2,o[r-1]=7,a[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)i=e[n]/o[n-1],o[n]-=i,a[n]-=i*a[n-1];for(e[r-1]=a[r-1]/o[r-1],n=r-2;n>=0;--n)e[n]=(a[n]-e[n+1])/o[n];for(o[r-1]=(t[r]+e[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-e[n+1];return[e,o]}Rf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,i=t.length;if(i)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===i)this._context.lineTo(t[1],n[1]);else for(var r=Bd(t),e=Bd(n),o=0,a=1;a<i;++o,++a)this._context.bezierCurveTo(r[0][o],e[0][o],r[1][o],e[1][o],t[a],n[a]);(this._line||0!==this._line&&1===i)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}};function Mf(t,e){this._context=t,this._t=e}Mf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,e),this._context.lineTo(t,e);else{var i=this._x*(1-this._t)+t*this._t;this._context.lineTo(i,this._y),this._context.lineTo(i,e)}}this._x=t,this._y=e}};var R={};const Kf=["coral","skyblue","#66c2a5","tan","#8da0cb","#e78ac3","#a6d854","#ffd92f","coral","skyblue","tan","orange"];R={colors:Kf};var K={};const _d=(t,e,r,i,n)=>{t.svg.append("svg").attr("x","left"===t.legendPosition?5:t.width-(r+2)).attr("y",0);const a=void 0===n?5-t.margin.left:n;let l=t.rc.rectangle("left"===t.legendPosition?a:t.width+t.margin.right-2-r,-t.margin.top/3,r,i,{fill:"white",fillWeight:.1,strokeWidth:.75,roughness:2}),o=t.roughSvg.appendChild(l);const g="rough"+t.el.substring(1,t.el.length);o.setAttribute("class",g),e.forEach((e,i)=>{const n=b("."+g).append("g").attr("transform",`translate(\n        ${"left"===t.legendPosition?5:t.width-(r+2)},\n        0)`);n.append("rect").style("fill",t.colors[i]).attr("width",20).attr("height",8).attr("x","left"===t.legendPosition?a:t.margin.right+5).attr("y",6+11*i-t.margin.top/3),n.append("text").style("font-size",".8rem").style("font-family",t.fontFamily).attr("x","left"===t.legendPosition?a+25:t.margin.right+30).attr("y",6+11*i+8-t.margin.top/3).text(e.text)})};K={addLegend:_d};const Pf=t=>{return t>30?30:t};class Nf{constructor(t){this.el=t.element,this.element=t.element,this.margin=t.margin||{top:50,right:20,bottom:10,left:20},this.title=t.title,this.colors=t.colors||R.colors,this.highlight=t.highlight,this.roughness=Pf(t.roughness)||1,this.strokeWidth=t.strokeWidth||.75,this.innerStrokeWidth=t.innerStrokeWidth||.75,this.fillStyle=t.fillStyle,this.bowing=t.bowing||0,this.fillWeight=t.fillWeight||.85,this.simplification=t.simplification||.2,this.interactive=!1!==t.interactive,this.titleFontSize=t.titleFontSize,this.tooltipFontSize=t.tooltipFontSize||".95rem",this.font=t.font||0,this.dataFormat="object"==typeof t.data?"object":"file",this.labels="object"===this.dataFormat?"labels":t.labels,this.values="object"===this.dataFormat?"values":t.values,void 0!==this.labels&&void 0!==this.values?(this.legend=!1!==t.legend,this.legendPosition=t.legendPosition||"right",this.initChartValues(t),this.resolveFont(),this.drawChart=this.resolveData(t.data),this.drawChart(),"undefined"!==t.title&&this.setTitle(t.title)):console.log(`Error for ${this.el}: Must include labels and values when        instantiating Donut chart. Skipping chart.`)}initChartValues(t){let i=t.width?t.width:300,s=t.height?t.height:300;this.width=i-this.margin.left-this.margin.right,this.height=s-this.margin.top-this.margin.bottom,this.roughId=this.el+"_svg",this.graphClass=this.el.substring(1,this.el.length),this.interactionG="g."+this.graphClass,this.radius=Math.min(this.width,this.height)/2,this.setSvg()}setSvg(){this.svg=b(this.el).append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("id",this.roughId).attr("transform","translate("+this.margin.left+","+this.margin.top+")")}resolveFont(){0===this.font||void 0===this.font||"gaegu"===this.font.toString().toLowerCase()?(i.addFontGaegu(this.svg),this.fontFamily="gaeguregular"):1===this.font||"indie flower"===this.font.toString().toLowerCase()?(i.addFontIndieFlower(this.svg),this.fontFamily="indie_flowerregular"):this.fontFamily=this.font}resolveData(t){return"string"!=typeof t?()=>{this.data=t,this.drawFromObject()}:t.includes(".csv")?()=>{H(t).then(t=>{this.data=t,this.drawFromFile()})}:t.includes(".tsv")?()=>{G(t).then(t=>{this.data=t,this.drawFromFile()})}:t.includes(".json")?()=>{Uc(t).then(t=>{this.data=t,this.drawFromFile()})}:void 0}setTitle(t){this.svg.append("text").attr("x",this.width/2).attr("y",0-this.margin.top/3).attr("class","title").attr("text-anchor","middle").style("font-size",void 0===this.titleFontSize?`${Math.min(40,Math.min(this.width,this.height)/4)}px`:this.titleFontSize).style("font-family",this.fontFamily).style("opacity",.8).text(t)}addInteraction(){c(this.interactionG).append("g").attr("transform",`translate(${this.width/2}, ${this.height/2})`).data("object"===this.dataFormat?this.makePie(this.data[this.values]):this.makePie(this.data)).append("path").attr("d",this.makeArc).attr("stroke-width","0px").attr("fill","transparent");const t=b(this.el).append("div").style("opacity",0).attr("class","tooltip").style("position","absolute").style("background-color","white").style("border","solid").style("border-width","1px").style("border-radius","5px").style("padding","3px").style("font-family",this.fontFamily).style("font-size",this.tooltipFontSize).style("pointer-events","none");let i,s=this;c(this.interactionG).on("mouseover",function(){t.style("opacity",1),i=b(this).selectAll("path").style("stroke"),void 0===s.highlight?b(this).selectAll("path").style("opacity",.5):b(this).selectAll("path").style("stroke",s.highlight)}),c(this.interactionG).on("mouseout",function(){t.style("opacity",0),b(this).selectAll("path").style("stroke",i),b(this).selectAll("path").style("opacity",1)}),c(this.interactionG).on("mousemove",function(i){let e=b(this).attr("attrX"),h=b(this).attr("attrY"),l=z(this);t.html(`<b>${e}</b>: ${h}`).style("opacity",.95).attr("class",function(t){}).style("transform",`translate(${l[0]+s.margin.left}px, \n                            ${l[1]-s.height-s.margin.bottom}px)`)})}initRoughObjects(){var $oYNA$$interop$default=I(q);this.roughSvg=document.getElementById(this.roughId),this.rcAxis=$oYNA$$interop$default.d.svg(this.roughSvg,{options:{strokeWidth:this.strokeWidth>=3?3:this.strokeWidth}}),this.rc=$oYNA$$interop$default.d.svg(this.roughSvg,{options:{fill:this.color,strokeWidth:this.innerStrokeWidth,roughness:this.roughness,bowing:this.bowing,fillStyle:this.fillStyle,fillWeight:this.fillWeight}})}drawFromObject(){this.initRoughObjects(),this.makePie=xa(),this.makeArc=ta().innerRadius(0).outerRadius(this.radius),this.arcs=this.makePie(this.data[this.values]),this.arcs.forEach((t,i)=>{let s=this.rc.arc(this.width/2,this.height/2,2*this.radius,2*this.radius,t.startAngle-Math.PI/2,t.endAngle-Math.PI/2,!0,{fill:this.colors[i],stroke:this.colors[i]});s.setAttribute("class",this.graphClass);let e=this.roughSvg.appendChild(s);e.setAttribute("attrY",this.data[this.values][i]),e.setAttribute("attrX",this.data[this.labels][i])});let t=this.rc.circle(this.width/2,this.height/2,this.radius,{fill:"white",strokeWidth:.05,fillWeight:10,fillStyle:"solid"});this.roughSvg.appendChild(t),c(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width",this.strokeWidth);const i=this.data.labels.map((t,i)=>({color:this.colors[i],text:t})),s=6*i.reduce((t,i)=>t>i.text.length?t:i.text.length,0)+35,e=11*i.length+8;!0===this.legend&&K.addLegend(this,i,s,e),!0===this.interactive&&this.addInteraction()}drawFromFile(){this.initRoughObjects(),this.makePie=xa().value(t=>t[this.values]).sort(null);const t=[];this.makeArc=ta().innerRadius(0).outerRadius(this.radius),this.arcs=this.makePie(this.data),this.arcs.forEach((i,s)=>{let e=this.rc.arc(this.width/2,this.height/2,2*this.radius,2*this.radius,i.startAngle-Math.PI/2,i.endAngle-Math.PI/2,!0,{fill:this.colors[s],stroke:this.colors[s]});e.setAttribute("class",this.graphClass);let h=this.roughSvg.appendChild(e);h.setAttribute("attrY",i.data[this.values]),h.setAttribute("attrX",i.data[this.labels]),t.push(i.data[this.labels])});let i=this.rc.circle(this.width/2,this.height/2,this.radius,{fill:"white",strokeWidth:.05,fillWeight:10,fillStyle:"solid"});this.roughSvg.appendChild(i),c(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width",this.strokeWidth);const s=t.map((t,i)=>({color:this.colors[i],text:t})),e=6*s.reduce((t,i)=>t>i.text.length?t:i.text.length,0)+35,h=11*s.length+8;!0===this.legend&&K.addLegend(this,s,e,h),!0===this.interactive&&this.addInteraction()}}const lc=t=>{return t>20?20:t},Yd=t=>{const i=Object.keys(t).map(i=>r(t[i]));return[rc(i,t=>t[0]),w(i,t=>t[1])]};class Od{constructor(t){this.el=t.element,this.element=t.element,this.margin=t.margin||{top:50,right:20,bottom:50,left:100},this.title=t.title,this.roughness=lc(t.roughness)||2.2,this.fillStyle=t.fillStyle,this.bowing=t.bowing||0,this.axisStrokeWidth=t.axisStrokeWidth||.4,this.axisRoughness=t.axisRoughness||.9,this.interactive=!1!==t.interactive,this.stroke=t.stroke||"black",this.fillWeight=t.fillWeight||.85,this.simplification=t.simplification||.2,this.colors=t.colors,this.strokeWidth=t.strokeWidth||8,this.titleFontSize=t.titleFontSize,this.axisFontSize=t.axisFontSize,this.tooltipFontSize=t.tooltipFontSize||"0.95rem",this.font=t.font||0,this.dataFormat="object"==typeof t.data?"object":"file",this.x=t.x,this.y="object"===this.dataFormat?"y":t.y,this.xValueFormat=t.xValueFormat,this.yValueFormat=t.yValueFormat,this.legend=!1!==t.legend,this.legendPosition=t.legendPosition||"right",this.circle=!1!==t.circle,this.circleRadius=t.circleRadius||10,this.circleRoughness=lc(t.circleRoughness)||2,this.xLabel=t.xLabel||"",this.yLabel=t.yLabel||"",this.labelFontSize=t.labelFontSize||"1rem","file"===this.dataFormat&&(this.dataSources=[],this.yKeys=Object.keys(t).filter(t=>/y/.test(t)),this.yKeys.map((i,s)=>{"yLabel"!==i&&this.dataSources.push(t[i])})),this.initChartValues(t),this.resolveFont(),this.drawChart=this.resolveData(t.data),this.drawChart(),"undefined"!==t.title&&this.setTitle(t.title)}resolveFont(){0===this.font||void 0===this.font||"gaegu"===this.font.toString().toLowerCase()?(i.addFontGaegu(this.svg),this.fontFamily="gaeguregular"):1===this.font||"indie flower"===this.font.toString().toLowerCase()?(i.addFontIndieFlower(this.svg),this.fontFamily="indie_flowerregular"):this.fontFamily=this.font}initChartValues(t){let i=t.width?t.width:300,s=t.height?t.height:400;this.width=i-this.margin.left-this.margin.right,this.height=s-this.margin.top-this.margin.bottom,this.roughId=this.el+"_svg",this.graphClass=this.el.substring(1,this.el.length),this.interactionG="g."+this.graphClass,this.setSvg()}setSvg(){this.svg=b(this.el).append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("id",this.roughId).attr("transform","translate("+this.margin.left+","+this.margin.top+")")}resolveData(t){return"string"!=typeof t?()=>{this.data=t,this.drawFromObject()}:t.includes(".csv")?()=>{H(t).then(t=>{this.data=t,this.drawFromFile()})}:t.includes(".tsv")?()=>{G(t).then(t=>{this.data=t,this.drawFromFile()})}:void 0}addScales(){let t,i;if("file"!==this.dataFormat)t=Yd(this.data);else{const i=this.dataSources.map(t=>r(this.data,i=>+i[t]));t=[rc(i,t=>t[0]),w(i,t=>t[1])]}if(void 0===this.x){const t=Object.keys(this.data).map(t=>this.data[t].length),s=w(t);i="file"===this.dataFormat?[0,this.data.length]:[0,s]}else i=r(this.x);const s=t,e=s[1]-s[0];this.xScale=void 0===this.x?Tb().range([0,this.width]).domain([...Array(i[1]).keys()]):Tb().range([0,this.width]).domain(this.x),this.yScale=v().range([this.height,0]).domain([0,s[1]+.05*e])}addLabels(){""!==this.xLabel&&this.svg.append("text").attr("x",this.width/2).attr("y",this.height+this.margin.bottom/1.3).attr("dx","1em").attr("class","labelText").style("text-anchor","middle").style("font-family",this.fontFamily).style("font-size",this.labelFontSize).text(this.xLabel),""!==this.yLabel&&this.svg.append("text").attr("transform","rotate(-90)").attr("y",0-this.margin.left/2).attr("x",0-this.height/2).attr("dy","1em").attr("class","labelText").style("text-anchor","middle").style("font-family",this.fontFamily).style("font-size",this.labelFontSize).text(this.yLabel)}addAxes(){const t=ia(this.xScale).tickSize(0).tickFormat(t=>this.xValueFormat?s(this.xValueFormat)(t):t),i=ja(this.yScale).tickSize(0).tickFormat(t=>this.yValueFormat?s(this.yValueFormat)(t):t);this.svg.append("g").attr("transform","translate(0,"+this.height+")").call(t).attr("class",`xAxis${this.graphClass}`).selectAll("text").attr("transform","translate(-10, 0)rotate(-45)").style("text-anchor","end").style("font-family",this.fontFamily).style("font-size",void 0===this.axisFontSize?`${Math.min(.95,Math.min(this.width,this.height)/140)}rem`:this.axisFontSize),this.svg.append("g").call(i).attr("class",`yAxis${this.graphClass}`).selectAll("text").style("font-family",this.fontFamily).style("font-size",void 0===this.axisFontSize?`${Math.min(.95,Math.min(this.width,this.height)/140)}rem`:this.axisFontSize),c("path.domain").attr("stroke","transparent"),c("g.tick").style("opacity",1)}makeAxesRough(t,i){let s=`xAxis${this.graphClass}`,e=`yAxis${this.graphClass}`,a=`rough-${s}`,o=`rough-${e}`;b(`.${s}`).selectAll("path.domain").each(function(s,e){let o=b(this).node().getAttribute("d"),h=i.path(o,{stroke:"black",fillStyle:"hachure"});h.setAttribute("class",a),t.appendChild(h)}),c(`.${a}`).attr("transform",`translate(0, ${this.height})`),b(`.${e}`).selectAll("path.domain").each(function(s,e){let a=b(this).node().getAttribute("d"),h=i.path(a,{stroke:"black",fillStyle:"hachure"});h.setAttribute("class",o),t.appendChild(h)})}setTitle(t){this.svg.append("text").attr("x",this.width/2).attr("y",0-this.margin.top/2).attr("text-anchor","middle").style("font-size",void 0===this.titleFontSize?`${Math.min(20,Math.min(this.width,this.height)/4)}px`:this.titleFontSize).style("font-family",this.fontFamily).style("opacity",.8).text(t)}addInteraction(){const t=this;this.chartScreen=this.svg.append("g").attr("pointer-events","all"),this.dataSources.map((t,i)=>{const s=this.data.map((i,s)=>void 0===this.x?[this.xScale(s),this.yScale(i[t])]:[this.xScale(this.x[s]),this.yScale(+i[t])]).filter(t=>void 0!==t[0]),e=pe().x(t=>t[0]).y(t=>t[1]);this.svg.append("path").datum(s).attr("fill","none").attr("stroke","blue").attr("stroke-width",1.5).attr("d",e).attr("visibility","hidden");const a=t+"class";this.svg.append("g").attr("class",a+"text").append("text").style("font-size",this.tooltipFontSize).style("opacity",0).style("font-family",this.fontFamily).attr("text-anchor","middle").attr("alignment-baseline","middle")});this.chartScreen.append("rect").attr("width",this.width).attr("height",this.height).attr("fill","none").on("mousemove",function(i){const s=z(this)[0],e=t.xScale.domain(),a=t.xScale.range(),o=od(a[0],a[1]+1,t.xScale.step()),h=vd(o,s),r=e[h];t.dataSources.map((i,s)=>{const e="file"===t.dataFormat?void 0===t.x?t.data[r]:t.data[h]:t.data[i][h],a="."+i+"classtext";"file"===t.dataFormat?b(a).selectAll("text").style("opacity",1).html(void 0===t.x?`(${h},${e[i]})`:`(${t.x[h]}, ${e[i]})`).attr("x",void 0===t.x?t.xScale(h):t.xScale(t.x[h])).attr("y",t.yScale(e[i])-6):b(a).selectAll("text").style("opacity",1).html(void 0===t.x?`(${h}, ${e})`:`(${t.x[h]}, ${e})`).attr("x",void 0===t.x?t.xScale(h):t.xScale(t.x[h])).attr("y",t.yScale(e))})}).on("mouseout",()=>{t.dataSources.map(t=>{b("."+t+"class"+"text").selectAll("text").style("opacity",0)})})}initRoughObjects(){var $oYNA$$interop$default=I(q);this.roughSvg=document.getElementById(this.roughId),this.rcAxis=$oYNA$$interop$default.d.svg(this.roughSvg,{options:{strokeWidth:this.axisStrokeWidth,roughness:this.axisRoughness}}),this.rc=$oYNA$$interop$default.d.svg(this.roughSvg,{options:{stroke:"none"===this.stroke?void 0:this.stroke,strokeWidth:this.strokeWidth,roughness:this.roughness,bowing:this.bowing,fillStyle:this.fillStyle}})}drawFromObject(){void 0===this.colors&&(this.colors=R.colors),this.dataSources=Object.keys(this.data),this.initRoughObjects(),this.addScales(),this.dataSources.map((t,i)=>{const s=this.data[t].map((t,i)=>void 0===this.x?[this.xScale(i),this.yScale(+t)]:[this.xScale(this.x[i]),this.yScale(t)]),e=s.filter(t=>void 0!==t[0]);let a=this.rc.curve(e,{stroke:1===this.colors.length?this.colors[0]:this.colors[i],roughness:this.roughness,bowing:this.bowing});this.roughSvg.appendChild(a).setAttribute("class",this.graphClass),!0===this.circle&&s.forEach((t,s)=>{let e=this.rc.circle(t[0],t[1],this.circleRadius,{stroke:this.colors[i],fill:this.colors[i],fillStyle:"solid",strokeWidth:1,roughness:this.circleRoughness});this.roughSvg.appendChild(e)})});const t=this.dataSources.map((t,i)=>({color:this.colors[i],text:t})),i=6*t.reduce((t,i)=>t>i.text.length?t:i.text.length,0)+35,s=11*t.length+8;!0===this.legend&&K.addLegend(this,t,i,s,2),this.addAxes(),this.addLabels(),this.makeAxesRough(this.roughSvg,this.rcAxis),!0===this.interactive&&this.addInteraction()}drawFromFile(){void 0===this.colors&&(this.colors=R.colors),this.initRoughObjects(),this.addScales(),this.dataSources.map((t,i)=>{const s=this.data.map((i,s)=>void 0===this.x?[this.xScale(s),this.yScale(i[t])]:[this.xScale(this.x[s]),this.yScale(+i[t])]).filter(t=>void 0!==t[0]);let e=this.rc.curve(s,{stroke:this.colors[i],strokeWidth:this.strokeWidth,roughness:1,bowing:10});this.roughSvg.appendChild(e),!0===this.circle&&s.forEach((t,s)=>{let e=this.rc.circle(t[0],t[1],this.circleRadius,{stroke:this.colors[i],fill:this.colors[i],fillStyle:"solid",strokeWidth:1,roughness:this.circleRoughness});this.roughSvg.appendChild(e)})});const t=this.dataSources.map((t,i)=>({color:this.colors[i],text:t})),i=6*t.reduce((t,i)=>t>i.text.length?t:i.text.length,0)+35,s=11*t.length+8;!0===this.legend&&K.addLegend(this,t,i,s,2),this.addAxes(),this.addLabels(),this.makeAxesRough(this.roughSvg,this.rcAxis),!0===this.interactive&&this.addInteraction()}}const Kd=t=>{return t>30?30:t};class Kh{constructor(t){this.el=t.element,this.element=t.element,this.margin=t.margin||{top:50,right:20,bottom:10,left:20},this.title=t.title,this.colors=t.colors||R.colors,this.highlight=t.highlight,this.roughness=Kd(t.roughness)||0,this.strokeWidth=t.strokeWidth||.75,this.innerStrokeWidth=t.innerStrokeWidth||1,this.fillStyle=t.fillStyle,this.bowing=t.bowing||0,this.fillWeight=t.fillWeight||.5,this.simplification=t.simplification||.2,this.interactive=!1!==t.interactive,this.titleFontSize=t.titleFontSize,this.tooltipFontSize=t.tooltipFontSize||"0.95rem",this.font=t.font||0,this.dataFormat="object"==typeof t.data?"object":"file",this.labels="object"===this.dataFormat?"labels":t.labels,this.values="object"===this.dataFormat?"values":t.values,void 0!==this.labels&&void 0!==this.values?(this.legend=!1!==t.legend,this.legendPosition=t.legendPosition||"right",this.initChartValues(t),this.resolveFont(),this.drawChart=this.resolveData(t.data),this.drawChart(),"undefined"!==t.title&&this.setTitle(t.title)):console.log(`Error for ${this.el}: Must include labels and values when        instantiating Donut chart. Skipping chart.`)}initChartValues(t){let i=t.width?t.width:350,s=t.height?t.height:450;this.width=i-this.margin.left-this.margin.right,this.height=s-this.margin.top-this.margin.bottom,this.roughId=this.el+"_svg",this.graphClass=this.el.substring(1,this.el.length),this.interactionG="g."+this.graphClass,this.radius=Math.min(this.width,this.height)/2,this.setSvg()}setSvg(){this.svg=b(this.el).append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("id",this.roughId).attr("transform","translate("+this.margin.left+","+this.margin.top+")")}resolveFont(){0===this.font||void 0===this.font||"gaegu"===this.font.toString().toLowerCase()?(i.addFontGaegu(this.svg),this.fontFamily="gaeguregular"):1===this.font||"indie flower"===this.font.toString().toLowerCase()?(i.addFontIndieFlower(this.svg),this.fontFamily="indie_flowerregular"):this.fontFamily=this.font}resolveData(t){return"string"!=typeof t?()=>{this.data=t,this.drawFromObject()}:t.includes(".csv")?()=>{H(t).then(t=>{console.log(t),this.data=t,this.drawFromFile()})}:t.includes(".tsv")?()=>{G(t).then(t=>{console.log(t),this.data=t,this.drawFromFile()})}:t.includes(".json")?()=>{Uc(t).then(t=>{console.log(t),this.data=t,this.drawFromFile()})}:void 0}setTitle(t){this.svg.append("text").attr("x",this.width/2).attr("y",0-this.margin.top/3).attr("class","title").attr("text-anchor","middle").style("font-size",void 0===this.titleFontSize?`${Math.min(40,Math.min(this.width,this.height)/4)}px`:this.titleFontSize).style("font-family",this.fontFamily).style("opacity",.8).text(t)}addInteraction(){c(this.interactionG).append("g").attr("transform",`translate(${this.width/2}, ${this.height/2})`).data("object"===this.dataFormat?this.makePie(this.data[this.values]):this.makePie(this.data)).append("path").attr("d",this.makeArc).attr("stroke-width","0px").attr("fill","transparent");const t=b(this.el).append("div").style("opacity",0).attr("class","tooltip").style("position","absolute").style("background-color","white").style("border","solid").style("border-width","1px").style("border-radius","5px").style("padding","3px").style("font-family",this.fontFamily).style("font-size",this.tooltipFontSize).style("pointer-events","none");let i,s=this;c(this.interactionG).on("mouseover",function(){t.style("opacity",1),i=b(this).selectAll("path").style("stroke"),void 0===s.highlight?b(this).selectAll("path").style("opacity",.5):b(this).selectAll("path").style("stroke",s.highlight)}),c(this.interactionG).on("mouseout",function(){t.style("opacity",0),b(this).selectAll("path").style("stroke",i),b(this).selectAll("path").style("opacity",1)}),c(this.interactionG).on("mousemove",function(i){let e=b(this).attr("attrX"),h=b(this).attr("attrY"),r=z(this);t.html(`<b>${e}</b>: ${h}`).style("opacity",.95).attr("class",function(t){}).style("transform",`translate(${r[0]+s.margin.left}px, \n                            ${r[1]-s.height-s.margin.bottom}px)`)})}initRoughObjects(){var $oYNA$$interop$default=I(q);this.roughSvg=document.getElementById(this.roughId),this.rcAxis=$oYNA$$interop$default.d.svg(this.roughSvg,{options:{strokeWidth:this.strokeWidth>=3?3:this.strokeWidth}}),this.rc=$oYNA$$interop$default.d.svg(this.roughSvg,{options:{fill:this.color,strokeWidth:this.innerStrokeWidth,roughness:this.roughness,bowing:this.bowing,fillStyle:this.fillStyle}})}drawFromObject(){this.initRoughObjects(),this.makePie=xa(),this.makeArc=ta().innerRadius(0).outerRadius(this.radius),this.arcs=this.makePie(this.data[this.values]),this.arcs.forEach((t,i)=>{let s=this.rc.arc(this.width/2,this.height/2,2*this.radius,2*this.radius,t.startAngle-Math.PI/2,t.endAngle-Math.PI/2,!0,{fill:this.colors[i],stroke:this.colors[i]});s.setAttribute("class",this.graphClass);let e=this.roughSvg.appendChild(s);e.setAttribute("attrY",this.data[this.values][i]),e.setAttribute("attrX",this.data[this.labels][i])}),c(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width",this.strokeWidth);const t=this.data.labels.map((t,i)=>({color:this.colors[i],text:t})),i=6*t.reduce((t,i)=>t>i.text.length?t:i.text.length,0)+35,s=11*t.length+8;!0===this.legend&&K.addLegend(this,t,i,s),!0===this.interactive&&this.addInteraction()}drawFromFile(){this.initRoughObjects(),this.makePie=xa().value(t=>t[this.values]).sort(null);const t=[];this.makeArc=ta().innerRadius(0).outerRadius(this.radius),this.arcs=this.makePie(this.data),this.arcs.forEach((i,s)=>{let e=this.rc.arc(this.width/2,this.height/2,2*this.radius,2*this.radius,i.startAngle-Math.PI/2,i.endAngle-Math.PI/2,!0,{fill:this.colors[s],stroke:this.colors[s]});e.setAttribute("class",this.graphClass);let h=this.roughSvg.appendChild(e);h.setAttribute("attrY",i.data[this.values]),h.setAttribute("attrX",i.data[this.labels]),t.push(i.data[this.labels])}),c(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width",this.strokeWidth);const i=t.map((t,i)=>({color:this.colors[i],text:t})),s=6*i.reduce((t,i)=>t>i.text.length?t:i.text.length,0)+35,e=11*i.length+8;!0===this.legend&&K.addLegend(this,i,s,e),!0===this.interactive&&this.addInteraction()}}const Vf=t=>{return t>20?20:t},Cc=["pink","skyblue","coral","gold","teal","grey","darkgreen","pink","brown","slateblue","grey1","orange"];class xf{constructor(t){this.el=t.element,this.element=t.element,this.margin=t.margin||{top:50,right:20,bottom:50,left:100},this.title=t.title,this.colorVar=t.colorVar,this.roughness=Vf(t.roughness)||1,this.highlight=t.highlight,this.highlightLabel=t.highlightLabel||"xy",this.radius=t.radius||8,this.fillStyle=t.fillStyle,this.bowing=t.bowing||0,this.axisStrokeWidth=t.axisStrokeWidth||.4,this.axisRoughness=t.axisRoughness||.9,this.interactive=!1!==t.interactive,this.curbZero=!0===t.curbZero,this.innerStrokeWidth=t.innerStrokeWidth||1,this.stroke=t.stroke||"black",this.fillWeight=t.fillWeight||.85,this.simplification=t.simplification||.2,this.colors=t.colors,this.strokeWidth=t.strokeWidth||1,this.titleFontSize=t.titleFontSize,this.axisFontSize=t.axisFontSize,this.tooltipFontSize=t.tooltipFontSize||"0.95rem",this.font=t.font||0,this.dataFormat="object"==typeof t.data?"object":"file",this.x="object"===this.dataFormat?"x":t.x,this.y="object"===this.dataFormat?"y":t.y,this.xValueFormat=t.xValueFormat,this.yValueFormat=t.yValueFormat,this.xLabel=t.xLabel||"",this.yLabel=t.yLabel||"",this.labelFontSize=t.labelFontSize||"1rem",this.initChartValues(t),this.resolveFont(),this.drawChart=this.resolveData(t.data),this.drawChart(),"undefined"!==t.title&&this.setTitle(t.title)}resolveFont(){0===this.font||void 0===this.font||"gaegu"===this.font.toString().toLowerCase()?(i.addFontGaegu(this.svg),this.fontFamily="gaeguregular"):1===this.font||"indie flower"===this.font.toString().toLowerCase()?(i.addFontIndieFlower(this.svg),this.fontFamily="indie_flowerregular"):this.fontFamily=this.font}initChartValues(t){let i=t.width?t.width:300,s=t.height?t.height:400;this.width=i-this.margin.left-this.margin.right,this.height=s-this.margin.top-this.margin.bottom,this.roughId=this.el+"_svg",this.graphClass=this.el.substring(1,this.el.length),this.interactionG="g."+this.graphClass,this.setSvg()}setSvg(){this.svg=b(this.el).append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("id",this.roughId).attr("transform","translate("+this.margin.left+","+this.margin.top+")")}resolveData(t){return"string"!=typeof t?()=>{this.data=t,this.drawFromObject()}:t.includes(".csv")?()=>{H(t).then(t=>{console.log(t),this.data=t,this.drawFromFile()})}:t.includes(".tsv")?()=>{G(t).then(t=>{this.data=t,this.drawFromFile()})}:void 0}addScales(){const t="file"===this.dataFormat?r(this.data,t=>+t[this.x]):r(this.data[this.x]),i=t[1]-t[0],s="file"===this.dataFormat?r(this.data,t=>+t[this.y]):r(this.data[this.y]),e=s[1]-s[0],h="file"===this.dataFormat?r(this.data,t=>t[this.colorVar]):[1,1];if("file"===this.dataFormat){const t=r(this.data,t=>+t[this.radius]),i=Math.min(this.width,this.height)/2/2;this.radiusScale=v().range([8,i]).domain(t)}!0===this.curbZero&&(s[0]>0&&(s[0]=0),t[0]>0&&(t[0]=0)),this.xScale=v().range([0,this.width]).domain([t[0]-.05*i,t[1]+.05*i]),this.yScale=v().range([this.height,0]).domain([s[0]-.05*e,s[1]+.05*e]),this.colorScale=na().range(this.colors).domain(h)}addLabels(){""!==this.xLabel&&this.svg.append("text").attr("x",this.width/2).attr("y",this.height+this.margin.bottom/1.3).attr("dx","1em").attr("class","labelText").style("text-anchor","middle").style("font-family",this.fontFamily).style("font-size",this.labelFontSize).text(this.xLabel),""!==this.yLabel&&this.svg.append("text").attr("transform","rotate(-90)").attr("y",0-this.margin.left/2).attr("x",0-this.height/2).attr("dy","1em").attr("class","labelText").style("text-anchor","middle").style("font-family",this.fontFamily).style("font-size",this.labelFontSize).text(this.yLabel)}addAxes(){const t=ia(this.xScale).tickSize(0).tickFormat(t=>this.xValueFormat?s(this.xValueFormat)(t):t),i=ja(this.yScale).tickSize(0).tickFormat(t=>this.yValueFormat?s(this.yValueFormat)(t):t);this.svg.append("g").attr("transform","translate(0,"+this.height+")").call(t).attr("class",`xAxis${this.graphClass}`).selectAll("text").attr("transform","translate(-10, 0)rotate(-45)").style("text-anchor","end").style("font-family",this.fontFamily).style("font-size",void 0===this.axisFontSize?`${Math.min(.95,Math.min(this.width,this.height)/140)}rem`:this.axisFontSize),this.svg.append("g").call(i).attr("class",`yAxis${this.graphClass}`).selectAll("text").style("font-family",this.fontFamily).style("font-size",void 0===this.axisFontSize?`${Math.min(.95,Math.min(this.width,this.height)/140)}rem`:this.axisFontSize),c("path.domain").attr("stroke","transparent"),c("g.tick").style("opacity",1)}makeAxesRough(t,i){let s=`xAxis${this.graphClass}`,e=`yAxis${this.graphClass}`,h=`rough-${s}`,a=`rough-${e}`;b(`.${s}`).selectAll("path.domain").each(function(s,e){let a=b(this).node().getAttribute("d"),r=i.path(a,{stroke:"black",fillStyle:"hachure"});r.setAttribute("class",h),t.appendChild(r)}),c(`.${h}`).attr("transform",`translate(0, ${this.height})`),b(`.${e}`).selectAll("path.domain").each(function(s,e){let h=b(this).node().getAttribute("d"),r=i.path(h,{stroke:"black",fillStyle:"hachure"});r.setAttribute("class",a),t.appendChild(r)})}setTitle(t){this.svg.append("text").attr("x",this.width/2).attr("y",0-this.margin.top/2).attr("text-anchor","middle").style("font-size",void 0===this.titleFontSize?`${Math.min(20,Math.min(this.width,this.height)/4)}px`:this.titleFontSize).style("font-family",this.fontFamily).style("opacity",.8).text(t)}addInteraction(){const t=c(this.interactionG).data("file"===this.dataFormat?this.data:this.data.x).append("circle").attr("cx",(t,i)=>"file"===this.dataFormat?this.xScale(+t[this.x]):this.xScale(+this.data[this.x][i])).attr("cy",(t,i)=>"file"===this.dataFormat?this.yScale(+t[this.y]):this.yScale(+this.data[this.y][i]));"file"===this.dataFormat?t.attr("r",t=>"number"==typeof this.radius?.7*this.radius:.6*this.radiusScale(+t[this.radius])).attr("fill","transparent"):t.attr("r",(t,i)=>"number"==typeof this.radius?.7*this.radius:.6*this.radius[i]).attr("fill","transparent");var i=b(this.el).append("div").style("opacity",0).attr("class","tooltip").style("position","absolute").style("background-color","white").style("border","solid").style("border-width","1px").style("border-radius","5px").style("padding","3px").style("font-family",this.fontFamily).style("font-size",this.tooltipFontSize).style("pointer-events","none");let s,e=this;c(this.interactionG).on("mouseover",function(){i.style("opacity",1),s=b(this).selectAll("path").style("stroke"),void 0===e.highlight?b(this).selectAll("path:nth-child(1)").style("opacity",.4):b(this).selectAll("path:nth-child(1)").style("stroke",e.highlight),b(this).selectAll("path:nth-child(2)").style("stroke-width",e.strokeWidth+1.2)}),c(this.interactionG).on("mouseout",function(){i.style("opacity",0),b(this).selectAll("path").style("opacity",1),b(this).selectAll("path:nth-child(1)").style("stroke",s),b(this).selectAll("path:nth-child(2)").style("stroke",e.stroke),b(this).selectAll("path:nth-child(2)").style("stroke-width",e.strokeWidth)}),c(this.interactionG).on("mousemove",function(t){let s=b(this).attr("attrX"),h=b(this).attr("attrY"),a=b(this).attr("attrHighlightLabel"),r=z(this);i.html("xy"===e.highlightLabel?`<b>x</b>: ${s} <br><b>y</b>: ${h}`:`<b>${a}</b>`).attr("class",function(t){}).style("transform",`translate(${r[0]+e.margin.left}px, \n          ${r[1]-(e.height+e.margin.top+e.margin.bottom)}px)`)})}initRoughObjects(){var $oYNA$$interop$default=I(q);this.roughSvg=document.getElementById(this.roughId),this.rcAxis=$oYNA$$interop$default.d.svg(this.roughSvg,{options:{strokeWidth:this.axisStrokeWidth,roughness:this.axisRoughness}}),this.rc=$oYNA$$interop$default.d.svg(this.roughSvg,{options:{stroke:"none"===this.stroke?void 0:this.stroke,strokeWidth:this.innerStrokeWidth,roughness:this.roughness,bowing:this.bowing,fillStyle:this.fillStyle}})}drawFromObject(){void 0===this.colors&&(this.colors=Cc[0]),this.initRoughObjects(),this.addScales(),this.addAxes(),this.makeAxesRough(this.roughSvg,this.rcAxis),this.addLabels(),this.data.x.forEach((t,i)=>{let s=this.rc.circle(this.xScale(+t),this.yScale(+this.data[this.y][i]),"number"==typeof this.radius?this.radius:this.radius[i],{fill:"string"==typeof this.colors?this.colors:1===this.colors.length?this.colors[0]:this.colors[i],simplification:this.simplification,fillWeight:this.fillWeight}),e=this.roughSvg.appendChild(s);e.setAttribute("class",this.graphClass),e.setAttribute("attrX",t),e.setAttribute("attrY",this.data[this.y][i]),e.setAttribute("attrHighlightLabel",this.data[this.highlightLabel])}),c(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width",this.strokeWidth),!0===this.interactive&&this.addInteraction()}drawFromFile(){void 0===this.colors&&(this.colors=Cc),this.initRoughObjects(),this.addScales(),this.addAxes(),this.makeAxesRough(this.roughSvg,this.rcAxis),this.addLabels(),this.data.forEach((t,i)=>{let s=this.rc.circle(this.xScale(+t[this.x]),this.yScale(+t[this.y]),"number"==typeof this.radius?this.radius:this.radiusScale(+t[this.radius]),{fill:void 0===this.colorVar?this.colors[0]:this.colorScale(t[this.colorVar]),simplification:this.simplification,fillWeight:this.fillWeight}),e=this.roughSvg.appendChild(s);e.setAttribute("class",this.graphClass),e.setAttribute("attrX",t[this.x]),e.setAttribute("attrY",t[this.y]),e.setAttribute("attrHighlightLabel",t[this.highlightLabel])}),c(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width",this.strokeWidth),!0===this.interactive&&this.addInteraction()}}const tf=t=>{return t>20?20:t};class ie{constructor(t){this.el=t.element,this.data=t.data,this.element=t.element,this.margin=t.margin||{top:50,right:20,bottom:70,left:100},this.title=t.title,this.colors=t.colors||R.colors,this.highlight=t.highlight||"coral",this.roughness=tf(t.roughness)||1,this.stroke=t.stroke||"black",this.strokeWidth=t.strokeWidth||1,this.axisStrokeWidth=t.axisStrokeWidth||.5,this.axisRoughness=t.axisRoughness||.5,this.innerStrokeWidth=t.innerStrokeWidth||1,this.fillStyle=t.fillStyle,this.bowing=t.bowing||0,this.fillWeight=t.fillWeight||.5,this.simplification=t.simplification||.2,this.interactive=!1!==t.interactive,this.titleFontSize=t.titleFontSize,this.axisFontSize=t.axisFontSize,this.tooltipFontSize=t.tooltipFontSize||"0.95rem",this.font=t.font||0,this.dataFormat="object"==typeof t.data?"object":"file",this.labels=t.labels,this.values=t.values,this.padding=t.padding||.1,this.xLabel=t.xLabel||"",this.yLabel=t.yLabel||"",this.labelFontSize=t.labelFontSize||"1rem",this.initChartValues(t),this.resolveFont(),this.drawChart=this.resolveData(t.data),this.drawChart(),"undefined"!==t.title&&this.setTitle(t.title)}initChartValues(t){let i=t.width?t.width:350,e=t.height?t.height:450;this.width=i-this.margin.left-this.margin.right,this.height=e-this.margin.top-this.margin.bottom,this.roughId=this.el+"_svg",this.graphClass=this.el.substring(1,this.el.length),this.interactionG="g."+this.graphClass,this.setSvg()}setSvg(){this.svg=b(this.el).append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("id",this.roughId).attr("transform","translate("+this.margin.left+","+this.margin.top+")")}resolveFont(){0===this.font||void 0===this.font||"gaegu"===this.font.toString().toLowerCase()?(i.addFontGaegu(this.svg),this.fontFamily="gaeguregular"):1===this.font||"indie flower"===this.font.toString().toLowerCase()?(i.addFontIndieFlower(this.svg),this.fontFamily="indie_flowerregular"):this.fontFamily=this.font}getTotal(t){for(let i=0;i<t.length;i++){let e=0;for(let s=0;s<t.columns.length;++s)t.columns[s]!==this.labels&&(e+=t[i][t.columns[s]]=+t[i][t.columns[s]]);t[i].total=e}return t}resolveData(t){return"string"!=typeof t?()=>{this.data=t;for(let i=0;i<t.length;++i){let e=0;Object.keys(t[i]).forEach(s=>{s!==this.labels&&(e+=t[i][s],t[i].total=e)})}this.drawFromObject()}:t.includes(".csv")?()=>{H(t).then(t=>{this.getTotal(t),this.data=t,this.drawFromFile()})}:t.includes(".tsv")?()=>{G(t).then(t=>{this.getTotal(t),this.data=t,this.drawFromFile()})}:void 0}addScales(){this.xScale=ka().rangeRound([0,this.width]).padding(this.padding).domain(this.data.map(t=>t[this.labels])),this.data.sort(function(t,i){return i.total-t.total}),this.yScale=v().rangeRound([this.height,0]).domain([0,w(this.data,t=>t.total)]).nice();let t="object"===this.dataFormat?this.data.map(t=>t[this.labels]):this.data.columns;this.zScale=na().range(["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56","#d0743c","#ff8c00"]).domain(t)}addLabels(){""!==this.xLabel&&this.svg.append("text").attr("x",this.width/2).attr("y",this.height+this.margin.bottom/2).attr("dx","1em").attr("class","labelText").style("text-anchor","middle").style("font-family",this.fontFamily).style("font-size",this.labelFontSize).text(this.xLabel),""!==this.yLabel&&this.svg.append("text").attr("transform","rotate(-90)").attr("y",0-this.margin.left/1.4).attr("x",0-this.height/2).attr("dy","1em").attr("class","labelText").style("text-anchor","middle").style("font-family",this.fontFamily).style("font-size",this.labelFontSize).text(this.yLabel)}addAxes(){const t=ia(this.xScale).tickSize(0);this.svg.append("g").attr("transform","translate(0,"+this.height+")").call(t).attr("class",`xAxis${this.graphClass}`).selectAll("text").attr("transform","translate(-10,0)rotate(-45)").style("text-anchor","end").style("font-family",this.fontFamily).style("font-size",void 0===this.axisFontSize?`${Math.min(.8,Math.min(this.width,this.height)/140)}rem`:this.axisFontSize).style("opacity",.9);const i=ja(this.yScale).tickSize(0);this.svg.append("g").call(i).attr("class",`yAxis${this.graphClass}`).selectAll("text").style("font-family",this.fontFamily).style("font-size",void 0===this.axisFontSize?`${Math.min(.95,Math.min(this.width,this.height)/140)}rem`:this.axisFontSize).style("opacity",.9),c("path.domain").attr("stroke","transparent")}makeAxesRough(t,i){let e=`xAxis${this.graphClass}`,s=`yAxis${this.graphClass}`,h=`rough-${e}`,a=`rough-${s}`;b(`.${e}`).selectAll("path.domain").each(function(e,s){let a=b(this).node().getAttribute("d"),l=i.path(a,{fillStyle:"hachure"});l.setAttribute("class",h),t.appendChild(l)}),c(`.${h}`).attr("transform",`translate(0, ${this.height})`),b(`.${s}`).selectAll("path.domain").each(function(e,s){let h=b(this).node().getAttribute("d"),l=i.path(h,{fillStyle:"hachure"});l.setAttribute("class",a),t.appendChild(l)})}setTitle(t){this.svg.append("text").attr("x",this.width/2).attr("y",0-this.margin.top/2).attr("class","title").attr("text-anchor","middle").style("font-size",void 0===this.titleFontSize?`${Math.min(40,Math.min(this.width,this.height)/5)}px`:this.titleFontSize).style("font-family",this.fontFamily).style("opacity",.8).text(t)}addInteraction(){c(this.interactionG).each(function(t,i){let e=this.attributes;b(this).append("rect").attr("x",e.x.value).attr("y",e.y.value).attr("width",e.width.value).attr("height",e.height.value).attr("fill","transparent")});const t=b(this.el).append("div").style("opacity",0).attr("class","tooltip").style("position","absolute").style("background-color","white").style("border","solid").style("border-width","1px").style("border-radius","5px").style("padding","3px").style("font-family",this.fontFamily).style("font-size",this.tooltipFontSize).style("pointer-events","none");let i,e=this;c(this.interactionG).on("mouseover",function(){t.style("opacity",1),i=b(this).selectAll("path").style("stroke"),b(this).select("path").style("stroke",e.highlight),b(this).selectAll("path:nth-child(2)").style("stroke-width",e.strokeWidth+1.2)}),c(this.interactionG).on("mouseout",function(){t.style("opacity",0),b(this).select("path").style("stroke",i),b(this).selectAll("path:nth-child(2)").style("stroke-width",e.strokeWidth)}),c(this.interactionG).on("mousemove",function(i){let s=b(this).attr("attrX"),h=b(this).attr("attrY"),a=b(this).attr("keyY"),l=z(this);t.html(`<h4>${s}</h4> <b>${a}</b>: ${h}`).style("opacity",.95).attr("class",function(t){}).style("transform",`translate(${l[0]+e.margin.left}px, \n          ${l[1]-(e.height+e.margin.top+e.margin.bottom)}px)`)})}initRoughObjects(){var $oYNA$$interop$default=I(q);this.roughSvg=document.getElementById(this.roughId),this.rcAxis=$oYNA$$interop$default.d.svg(this.roughSvg,{options:{strokeWidth:this.axisStrokeWidth,roughness:this.axisRoughness}}),this.rc=$oYNA$$interop$default.d.svg(this.roughSvg,{options:{stroke:"none"===this.stroke?void 0:this.stroke,strokeWidth:this.innerStrokeWidth,roughness:this.roughness,bowing:this.bowing,fillStyle:this.fillStyle}})}stacking(){this.data.forEach(t=>{let i=Object.keys(t),e=0;i.forEach((i,s)=>{if(s>0&&"total"!==i){e+=parseInt(t[i]);let h=this.xScale(t[this.labels]),a=this.yScale(e),l=this.xScale.bandwidth(),o=this.height-this.yScale(+t[i]),r=this.rc.rectangle(h,a,l,o,{fill:this.colors[s],stroke:this.colors[s],simplification:this.simplification,fillWeight:this.fillWeight}),n=this.roughSvg.appendChild(r);n.setAttribute("class",this.graphClass),n.setAttribute("attrX",t[this.labels]),n.setAttribute("keyY",i),n.setAttribute("attrY",+t[i]),n.setAttribute("x",h),n.setAttribute("y",a),n.setAttribute("width",l),n.setAttribute("height",o)}})})}drawFromObject(){this.initRoughObjects(),this.addScales(),this.addAxes(),this.makeAxesRough(this.roughSvg,this.rcAxis),this.addLabels(),this.stacking(),c(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width",this.strokeWidth),!0===this.interactive&&this.addInteraction()}drawFromFile(){this.initRoughObjects(),this.addScales(),this.addAxes(),this.makeAxesRough(this.roughSvg,this.rcAxis),this.addLabels(),this.stacking(),c(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width",this.strokeWidth),!0===this.interactive&&this.addInteraction()}}yc={Bar:Rh,BarH:Th,Donut:Nf,Line:Od,Pie:Kh,Scatter:xf,StackedBar:ie};if(true){module.exports=yc}else {}})();

/***/ }),

/***/ "3ac6":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "3e47":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("cbd0").charAt;
var InternalStateModule = __webpack_require__("2f5a");
var defineIterator = __webpack_require__("4056");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3e80":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "4056":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a5eb");
var createIteratorConstructor = __webpack_require__("f575");
var getPrototypeOf = __webpack_require__("5779");
var setPrototypeOf = __webpack_require__("ec62");
var setToStringTag = __webpack_require__("2874");
var createNonEnumerableProperty = __webpack_require__("0273");
var redefine = __webpack_require__("d666");
var wellKnownSymbol = __webpack_require__("0363");
var IS_PURE = __webpack_require__("7042");
var Iterators = __webpack_require__("7463");
var IteratorsCore = __webpack_require__("bb83");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "4180":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("c1b2");
var IE8_DOM_DEFINE = __webpack_require__("77b2");
var anObject = __webpack_require__("6f8d");
var toPrimitive = __webpack_require__("7168");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("da84");


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44ba":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("c1b2");
var propertyIsEnumerableModule = __webpack_require__("7043");
var createPropertyDescriptor = __webpack_require__("2c6c");
var toIndexedObject = __webpack_require__("a421");
var toPrimitive = __webpack_require__("7168");
var has = __webpack_require__("78e7");
var IE8_DOM_DEFINE = __webpack_require__("77b2");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "4508":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("1561");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "4896":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("6f8d");
var defineProperties = __webpack_require__("c230");
var enumBugKeys = __webpack_require__("9e57");
var hiddenKeys = __webpack_require__("6e9a");
var html = __webpack_require__("edbd");
var documentCreateElement = __webpack_require__("7a37");
var sharedKey = __webpack_require__("b2ed");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4fad":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var $entries = __webpack_require__("6f53").entries;

// `Object.entries` method
// https://tc39.github.io/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "4fff":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1875");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5145":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("9103");
var DOMIterables = __webpack_require__("78a2");
var global = __webpack_require__("3ac6");
var createNonEnumerableProperty = __webpack_require__("0273");
var Iterators = __webpack_require__("7463");
var wellKnownSymbol = __webpack_require__("0363");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && !CollectionPrototype[TO_STRING_TAG]) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.4.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5779":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("78e7");
var toObject = __webpack_require__("4fff");
var sharedKey = __webpack_require__("b2ed");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("f5fb");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "588c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("5145");
__webpack_require__("3e47");

module.exports = __webpack_require__("59d7");


/***/ }),

/***/ "59d7":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("8f95");
var wellKnownSymbol = __webpack_require__("0363");
var Iterators = __webpack_require__("7463");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "5ab9":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("e519");
var path = __webpack_require__("764b");

module.exports = path.Array.isArray;


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "6220":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("fc48");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "62d0":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("1e63");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol() == 'symbol';


/***/ }),

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
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

/***/ "6386":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("a421");
var toLength = __webpack_require__("6725");
var toAbsoluteIndex = __webpack_require__("4508");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "638c":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("06fa");
var classof = __webpack_require__("fc48");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "6725":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("1561");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6e9a":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var nativeFunctionToString = __webpack_require__("9e81");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "6f53":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var objectKeys = __webpack_require__("df75");
var toIndexedObject = __webpack_require__("fc6a");
var propertyIsEnumerable = __webpack_require__("d1e7").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "6f8d":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("dfdb");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "7042":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "7043":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "7168":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("dfdb");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7463":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "764b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "7685":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3ac6");
var setGlobal = __webpack_require__("8fad");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "77b2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("c1b2");
var fails = __webpack_require__("06fa");
var createElement = __webpack_require__("7a37");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "78a2":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "78e7":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "7a37":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3ac6");
var isObject = __webpack_require__("dfdb");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var nativeFunctionToString = __webpack_require__("9e81");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "898c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("16f1");

/***/ }),

/***/ "8f95":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("d63b");
var classofRaw = __webpack_require__("fc48");
var wellKnownSymbol = __webpack_require__("0363");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "8fad":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3ac6");
var createNonEnumerableProperty = __webpack_require__("0273");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9103":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("a421");
var addToUnscopables = __webpack_require__("c44e");
var Iterators = __webpack_require__("7463");
var InternalStateModule = __webpack_require__("2f5a");
var defineIterator = __webpack_require__("4056");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "96e9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3ac6");
var nativeFunctionToString = __webpack_require__("ab85");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "9883":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("764b");
var global = __webpack_require__("3ac6");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9cd3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5ab9");


/***/ }),

/***/ "9e57":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "9e81":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "a016":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("b323");
var enumBugKeys = __webpack_require__("9e57");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "a0e5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("06fa");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "a421":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("638c");
var requireObjectCoercible = __webpack_require__("1875");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "a5eb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("3ac6");
var getOwnPropertyDescriptor = __webpack_require__("44ba").f;
var isForced = __webpack_require__("a0e5");
var path = __webpack_require__("764b");
var bind = __webpack_require__("194a");
var createNonEnumerableProperty = __webpack_require__("0273");
var has = __webpack_require__("78e7");

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "ab85":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("d659");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "b2ed":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("d659");
var uid = __webpack_require__("3e80");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "b323":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("78e7");
var toIndexedObject = __webpack_require__("a421");
var indexOf = __webpack_require__("6386").indexOf;
var hiddenKeys = __webpack_require__("6e9a");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "bb83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("5779");
var createNonEnumerableProperty = __webpack_require__("0273");
var has = __webpack_require__("78e7");
var wellKnownSymbol = __webpack_require__("0363");
var IS_PURE = __webpack_require__("7042");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c1b2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("06fa");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c230":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("c1b2");
var definePropertyModule = __webpack_require__("4180");
var anObject = __webpack_require__("6f8d");
var objectKeys = __webpack_require__("a016");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c44e":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cbd0":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("1561");
var requireObjectCoercible = __webpack_require__("1875");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cc94":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d63b":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("0363");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "d659":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("7042");
var store = __webpack_require__("7685");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.4.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "d666":
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__("0273");

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),

/***/ "d9f3":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("6f8d");
var getIteratorMethod = __webpack_require__("0b7b");

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "dfdb":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "e519":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("a5eb");
var isArray = __webpack_require__("6220");

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "ec62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("6f8d");
var aPossiblePrototype = __webpack_require__("2f97");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "edbd":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("9883");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "f575":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("bb83").IteratorPrototype;
var create = __webpack_require__("4896");
var createPropertyDescriptor = __webpack_require__("2c6c");
var setToStringTag = __webpack_require__("2874");
var Iterators = __webpack_require__("7463");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "f5fb":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("06fa");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("4fad");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js
var is_array = __webpack_require__("1316");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js
var get_iterator = __webpack_require__("898c");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js
var is_iterable = __webpack_require__("2dc0");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArrayLimit.js


function _iterableToArrayLimit(arr, i) {
  if (!(is_iterable_default()(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");

// CONCATENATED MODULE: ./src/mixins/putAttrsToObj.js


 // using lodash as a helper for camelcasing the attrs

var putAttrsToObj_putAttrsToObj = {
  computed: {
    putAttrsToObj: function putAttrsToObj() {
      var attrs = this.$attrs;
      var obj = {};

      for (var _i = 0, _Object$entries = Object.entries(attrs); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        obj[Object(lodash["camelCase"])(key)] = isNaN(value) ? value : Object(lodash["toNumber"])(value);
      }

      return obj;
    }
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4a8c7256-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoughBar.vue?vue&type=template&id=3d0a9772&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"bar"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RoughBar.vue?vue&type=template&id=3d0a9772&

// EXTERNAL MODULE: ./node_modules/rough-viz/dist/index.js
var dist = __webpack_require__("3a78");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoughBar.vue?vue&type=script&lang=js&
//
//
//
//


/* harmony default export */ var RoughBarvue_type_script_lang_js_ = ({
  name: "RoughBar",
  mixins: [putAttrsToObj_putAttrsToObj],
  mounted: function mounted() {
    var barAttr = this.putAttrsToObj;
    barAttr.element = "#bar";
    var bar = new dist["Bar"](barAttr);
    return bar;
  }
});
// CONCATENATED MODULE: ./src/components/RoughBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RoughBarvue_type_script_lang_js_ = (RoughBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/RoughBar.vue





/* normalize component */

var component = normalizeComponent(
  components_RoughBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RoughBar = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4a8c7256-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoughDonut.vue?vue&type=template&id=4d4d7018&
var RoughDonutvue_type_template_id_4d4d7018_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"donut"}})}
var RoughDonutvue_type_template_id_4d4d7018_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RoughDonut.vue?vue&type=template&id=4d4d7018&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoughDonut.vue?vue&type=script&lang=js&
//
//
//
//


/* harmony default export */ var RoughDonutvue_type_script_lang_js_ = ({
  name: "RoughDonut",
  mixins: [putAttrsToObj_putAttrsToObj],
  mounted: function mounted() {
    var donutAttr = this.putAttrsToObj;
    donutAttr.element = "#donut";
    var donut = new dist["Donut"](donutAttr);
    return donut;
  }
});
// CONCATENATED MODULE: ./src/components/RoughDonut.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RoughDonutvue_type_script_lang_js_ = (RoughDonutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/RoughDonut.vue





/* normalize component */

var RoughDonut_component = normalizeComponent(
  components_RoughDonutvue_type_script_lang_js_,
  RoughDonutvue_type_template_id_4d4d7018_render,
  RoughDonutvue_type_template_id_4d4d7018_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RoughDonut = (RoughDonut_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4a8c7256-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoughPie.vue?vue&type=template&id=4ea823b2&
var RoughPievue_type_template_id_4ea823b2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"pie"}})}
var RoughPievue_type_template_id_4ea823b2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RoughPie.vue?vue&type=template&id=4ea823b2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoughPie.vue?vue&type=script&lang=js&
//
//
//
//


/* harmony default export */ var RoughPievue_type_script_lang_js_ = ({
  name: "RoughPie",
  mixins: [putAttrsToObj_putAttrsToObj],
  mounted: function mounted() {
    var pieAttr = this.putAttrsToObj;
    pieAttr.element = "#pie";
    var pie = new dist["Pie"](pieAttr);
    return pie;
  }
});
// CONCATENATED MODULE: ./src/components/RoughPie.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RoughPievue_type_script_lang_js_ = (RoughPievue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/RoughPie.vue





/* normalize component */

var RoughPie_component = normalizeComponent(
  components_RoughPievue_type_script_lang_js_,
  RoughPievue_type_template_id_4ea823b2_render,
  RoughPievue_type_template_id_4ea823b2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RoughPie = (RoughPie_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4a8c7256-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoughLine.vue?vue&type=template&id=e08e2b48&scoped=true&
var RoughLinevue_type_template_id_e08e2b48_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"line"}})}
var RoughLinevue_type_template_id_e08e2b48_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RoughLine.vue?vue&type=template&id=e08e2b48&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoughLine.vue?vue&type=script&lang=js&
//
//
//
//


/* harmony default export */ var RoughLinevue_type_script_lang_js_ = ({
  name: "RoughLine",
  mixins: [putAttrsToObj_putAttrsToObj],
  mounted: function mounted() {
    var lineAttr = this.putAttrsToObj;
    lineAttr.element = "#line";
    var line = new dist["Line"](lineAttr);
    return line;
  }
});
// CONCATENATED MODULE: ./src/components/RoughLine.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RoughLinevue_type_script_lang_js_ = (RoughLinevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/RoughLine.vue





/* normalize component */

var RoughLine_component = normalizeComponent(
  components_RoughLinevue_type_script_lang_js_,
  RoughLinevue_type_template_id_e08e2b48_scoped_true_render,
  RoughLinevue_type_template_id_e08e2b48_scoped_true_staticRenderFns,
  false,
  null,
  "e08e2b48",
  null
  
)

/* harmony default export */ var RoughLine = (RoughLine_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4a8c7256-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoughScatter.vue?vue&type=template&id=bf6ccb70&
var RoughScattervue_type_template_id_bf6ccb70_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"scatter"}})}
var RoughScattervue_type_template_id_bf6ccb70_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RoughScatter.vue?vue&type=template&id=bf6ccb70&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoughScatter.vue?vue&type=script&lang=js&
//
//
//
//


/* harmony default export */ var RoughScattervue_type_script_lang_js_ = ({
  name: "RoughScatter",
  mixins: [putAttrsToObj_putAttrsToObj],
  mounted: function mounted() {
    var scatterAttr = this.putAttrsToObj;
    scatterAttr.element = "#scatter";
    var scatter = new dist["Scatter"](scatterAttr);
    return scatter;
  }
});
// CONCATENATED MODULE: ./src/components/RoughScatter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RoughScattervue_type_script_lang_js_ = (RoughScattervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/RoughScatter.vue





/* normalize component */

var RoughScatter_component = normalizeComponent(
  components_RoughScattervue_type_script_lang_js_,
  RoughScattervue_type_template_id_bf6ccb70_render,
  RoughScattervue_type_template_id_bf6ccb70_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RoughScatter = (RoughScatter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4a8c7256-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoughStackedBar.vue?vue&type=template&id=64e7f2ea&
var RoughStackedBarvue_type_template_id_64e7f2ea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"stacked-bar"}})}
var RoughStackedBarvue_type_template_id_64e7f2ea_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RoughStackedBar.vue?vue&type=template&id=64e7f2ea&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoughStackedBar.vue?vue&type=script&lang=js&
//
//
//
//


/* harmony default export */ var RoughStackedBarvue_type_script_lang_js_ = ({
  name: "RoughStackedBar",
  mixins: [putAttrsToObj_putAttrsToObj],
  mounted: function mounted() {
    var stackedBarAttr = this.putAttrsToObj;
    stackedBarAttr.element = "#stacked-bar";
    var stackedBar = new dist["StackedBar"](stackedBarAttr);
    return stackedBar;
  }
});
// CONCATENATED MODULE: ./src/components/RoughStackedBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RoughStackedBarvue_type_script_lang_js_ = (RoughStackedBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/RoughStackedBar.vue





/* normalize component */

var RoughStackedBar_component = normalizeComponent(
  components_RoughStackedBarvue_type_script_lang_js_,
  RoughStackedBarvue_type_template_id_64e7f2ea_render,
  RoughStackedBarvue_type_template_id_64e7f2ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RoughStackedBar = (RoughStackedBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4a8c7256-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoughBarH.vue?vue&type=template&id=cf79bb02&
var RoughBarHvue_type_template_id_cf79bb02_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"barH"}})}
var RoughBarHvue_type_template_id_cf79bb02_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RoughBarH.vue?vue&type=template&id=cf79bb02&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoughBarH.vue?vue&type=script&lang=js&
//
//
//
//


/* harmony default export */ var RoughBarHvue_type_script_lang_js_ = ({
  name: "RoughBarH",
  mixins: [putAttrsToObj_putAttrsToObj],
  mounted: function mounted() {
    var barHAttr = this.putAttrsToObj;
    barHAttr.element = "#barH";
    var barH = new dist["BarH"](barHAttr);
    return barH;
  }
});
// CONCATENATED MODULE: ./src/components/RoughBarH.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RoughBarHvue_type_script_lang_js_ = (RoughBarHvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/RoughBarH.vue





/* normalize component */

var RoughBarH_component = normalizeComponent(
  components_RoughBarHvue_type_script_lang_js_,
  RoughBarHvue_type_template_id_cf79bb02_render,
  RoughBarHvue_type_template_id_cf79bb02_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RoughBarH = (RoughBarH_component.exports);
// CONCATENATED MODULE: ./src/index.js








/* harmony default export */ var src = (/* Cannot get final name for export "default" in "./src/mixins/putAttrsToObj.js" (known exports: putAttrsToObj, known reexports: ) */ undefined);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport RoughBar */__webpack_require__.d(__webpack_exports__, "RoughBar", function() { return RoughBar; });
/* concated harmony reexport RoughDonut */__webpack_require__.d(__webpack_exports__, "RoughDonut", function() { return RoughDonut; });
/* concated harmony reexport RoughPie */__webpack_require__.d(__webpack_exports__, "RoughPie", function() { return RoughPie; });
/* concated harmony reexport RoughLine */__webpack_require__.d(__webpack_exports__, "RoughLine", function() { return RoughLine; });
/* concated harmony reexport RoughScatter */__webpack_require__.d(__webpack_exports__, "RoughScatter", function() { return RoughScatter; });
/* concated harmony reexport RoughStackedBar */__webpack_require__.d(__webpack_exports__, "RoughStackedBar", function() { return RoughStackedBar; });
/* concated harmony reexport RoughBarH */__webpack_require__.d(__webpack_exports__, "RoughBarH", function() { return RoughBarH; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "fc48":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ })

/******/ });
//# sourceMappingURL=vue-roughviz.common.js.map