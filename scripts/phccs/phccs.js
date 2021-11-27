/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6163:
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

/***/ }),

/***/ 2569:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(794);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

/***/ }),

/***/ 5766:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(2977);

var toLength = __webpack_require__(97);

var toAbsoluteIndex = __webpack_require__(6782); // `Array.prototype.{ indexOf, includes }` methods implementation


var createMethod = function createMethod(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

/***/ }),

/***/ 9624:
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ 3058:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(8191);

var classofRaw = __webpack_require__(9624);

var wellKnownSymbol = __webpack_require__(3649);

var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

/***/ }),

/***/ 3478:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(4402);

var ownKeys = __webpack_require__(929);

var getOwnPropertyDescriptorModule = __webpack_require__(6683);

var definePropertyModule = __webpack_require__(4615);

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

/***/ 57:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var definePropertyModule = __webpack_require__(4615);

var createPropertyDescriptor = __webpack_require__(4677);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ 4677:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ 5999:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPrimitive = __webpack_require__(2670);

var definePropertyModule = __webpack_require__(4615);

var createPropertyDescriptor = __webpack_require__(4677);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

/***/ }),

/***/ 8494:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544); // Detect IE8's incomplete defineProperty implementation


module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function get() {
      return 7;
    }
  })[1] != 7;
});

/***/ }),

/***/ 6668:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var isObject = __webpack_require__(794);

var document = global.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),

/***/ 6918:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(5897);

module.exports = getBuiltIn('navigator', 'userAgent') || '';

/***/ }),

/***/ 4061:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var userAgent = __webpack_require__(6918);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;

/***/ }),

/***/ 5690:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ 7263:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var getOwnPropertyDescriptor = __webpack_require__(6683).f;

var createNonEnumerableProperty = __webpack_require__(57);

var redefine = __webpack_require__(1270);

var setGlobal = __webpack_require__(460);

var copyConstructorProperties = __webpack_require__(3478);

var isForced = __webpack_require__(4451);
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

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

/***/ }),

/***/ 6544:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ 2938:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(6163); // optional / simple context binding


module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function () {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ 5897:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(1287);

var global = __webpack_require__(7583);

var aFunction = function aFunction(variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),

/***/ 8272:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(3058);

var Iterators = __webpack_require__(339);

var wellKnownSymbol = __webpack_require__(3649);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ 7583:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function check(it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

/***/ }),

/***/ 4402:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toObject = __webpack_require__(1324);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};

/***/ }),

/***/ 4639:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 275:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var fails = __webpack_require__(6544);

var createElement = __webpack_require__(6668); // Thank's IE8 for his funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ 5044:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544);

var classof = __webpack_require__(9624);

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),

/***/ 9734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(1314);

var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

/***/ }),

/***/ 2743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(9491);

var global = __webpack_require__(7583);

var isObject = __webpack_require__(794);

var createNonEnumerableProperty = __webpack_require__(57);

var objectHas = __webpack_require__(4402);

var shared = __webpack_require__(1314);

var sharedKey = __webpack_require__(9137);

var hiddenKeys = __webpack_require__(4639);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function enforce(it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function getterFor(TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set = function set(it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };

  get = function get(it) {
    return wmget.call(store, it) || {};
  };

  has = function has(it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function set(it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get = function get(it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };

  has = function has(it) {
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

/***/ 114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3649);

var Iterators = __webpack_require__(339);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype; // check on default Array iterator

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),

/***/ 4451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544);

var replacement = /#|\.prototype\./;

var isForced = function isForced(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),

/***/ 794:
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ 6268:
/***/ ((module) => {

module.exports = false;

/***/ }),

/***/ 4026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(2569);

var isArrayIteratorMethod = __webpack_require__(114);

var toLength = __webpack_require__(97);

var bind = __webpack_require__(2938);

var getIteratorMethod = __webpack_require__(8272);

var iteratorClose = __webpack_require__(7093);

var Result = function Result(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function stop(condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function callFn(value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }

    return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      }

      return new Result(false);
    }

    iterator = iterFn.call(iterable);
  }

  next = iterator.next;

  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }

    if (typeof result == 'object' && result && result instanceof Result) return result;
  }

  return new Result(false);
};

/***/ }),

/***/ 7093:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(2569);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];

  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};

/***/ }),

/***/ 339:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 8640:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(4061);

var fails = __webpack_require__(6544); // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),

/***/ 9491:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var inspectSource = __webpack_require__(9734);

var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

/***/ }),

/***/ 4615:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var IE8_DOM_DEFINE = __webpack_require__(275);

var anObject = __webpack_require__(2569);

var toPrimitive = __webpack_require__(2670); // eslint-disable-next-line es/no-object-defineproperty -- safe


var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ 6683:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var propertyIsEnumerableModule = __webpack_require__(112);

var createPropertyDescriptor = __webpack_require__(4677);

var toIndexedObject = __webpack_require__(2977);

var toPrimitive = __webpack_require__(2670);

var has = __webpack_require__(4402);

var IE8_DOM_DEFINE = __webpack_require__(275); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),

/***/ 9275:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(8356);

var enumBugKeys = __webpack_require__(5690);

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ 4012:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ 8356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(4402);

var toIndexedObject = __webpack_require__(2977);

var indexOf = __webpack_require__(5766).indexOf;

var hiddenKeys = __webpack_require__(4639);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    !has(hiddenKeys, key) && has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ 5432:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(8356);

var enumBugKeys = __webpack_require__(5690); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ 112:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

/***/ }),

/***/ 9953:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var objectKeys = __webpack_require__(5432);

var toIndexedObject = __webpack_require__(2977);

var propertyIsEnumerable = __webpack_require__(112).f; // `Object.{ entries, values }` methods implementation


var createMethod = function createMethod(TO_ENTRIES) {
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
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};

/***/ }),

/***/ 929:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(5897);

var getOwnPropertyNamesModule = __webpack_require__(9275);

var getOwnPropertySymbolsModule = __webpack_require__(4012);

var anObject = __webpack_require__(2569); // all object keys, includes non-enumerable and symbols


module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ 1287:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

module.exports = global;

/***/ }),

/***/ 1270:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var createNonEnumerableProperty = __webpack_require__(57);

var has = __webpack_require__(4402);

var setGlobal = __webpack_require__(460);

var inspectSource = __webpack_require__(9734);

var InternalStateModule = __webpack_require__(2743);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;

  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }

  if (O === global) {
    if (simple) O[key] = value;else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});

/***/ }),

/***/ 3955:
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ 460:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var createNonEnumerableProperty = __webpack_require__(57);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),

/***/ 9137:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(7836);

var uid = __webpack_require__(8284);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),

/***/ 1314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var setGlobal = __webpack_require__(460);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
module.exports = store;

/***/ }),

/***/ 7836:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(6268);

var store = __webpack_require__(1314);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ 6782:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(5089);

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ 2977:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(5044);

var requireObjectCoercible = __webpack_require__(3955);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ 5089:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger

module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),

/***/ 97:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(5089);

var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),

/***/ 1324:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(3955); // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject


module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ 2670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(794); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
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

/***/ 8191:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3649);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),

/***/ 8284:
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),

/***/ 7786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(8640);

module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

/***/ }),

/***/ 3649:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var shared = __webpack_require__(7836);

var has = __webpack_require__(4402);

var uid = __webpack_require__(8284);

var NATIVE_SYMBOL = __webpack_require__(8640);

var USE_SYMBOL_AS_UID = __webpack_require__(7786);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  }

  return WellKnownSymbolsStore[name];
};

/***/ }),

/***/ 6737:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var $entries = __webpack_require__(9953).entries; // `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries


$({
  target: 'Object',
  stat: true
}, {
  entries: function entries(O) {
    return $entries(O);
  }
});

/***/ }),

/***/ 5809:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var iterate = __webpack_require__(4026);

var createProperty = __webpack_require__(5999); // `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries


$({
  target: 'Object',
  stat: true
}, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, {
      AS_ENTRIES: true
    });
    return obj;
  }
});

/***/ }),

/***/ 9628:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var $values = __webpack_require__(9953).values; // `Object.values` method
// https://tc39.es/ecma262/#sec-object.values


$({
  target: 'Object',
  stat: true
}, {
  values: function values(O) {
    return $values(O);
  }
});

/***/ }),

/***/ 9940:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var DataView = getNative(root, 'DataView');
module.exports = DataView;

/***/ }),

/***/ 1979:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(9129),
    hashDelete = __webpack_require__(7644),
    hashGet = __webpack_require__(3486),
    hashHas = __webpack_require__(4786),
    hashSet = __webpack_require__(6444);
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
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ 2768:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(3708),
    listCacheDelete = __webpack_require__(6993),
    listCacheGet = __webpack_require__(286),
    listCacheHas = __webpack_require__(1678),
    listCacheSet = __webpack_require__(9743);
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
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ 4804:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ 8423:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(6977),
    mapCacheDelete = __webpack_require__(7474),
    mapCacheGet = __webpack_require__(727),
    mapCacheHas = __webpack_require__(3653),
    mapCacheSet = __webpack_require__(6140);
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
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ 7114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var Promise = getNative(root, 'Promise');
module.exports = Promise;

/***/ }),

/***/ 689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var Set = getNative(root, 'Set');
module.exports = Set;

/***/ }),

/***/ 9832:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(8423),
    setCacheAdd = __webpack_require__(9911),
    setCacheHas = __webpack_require__(7447);
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
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

/***/ }),

/***/ 959:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(2768),
    stackClear = __webpack_require__(7553),
    stackDelete = __webpack_require__(6038),
    stackGet = __webpack_require__(2397),
    stackHas = __webpack_require__(2421),
    stackSet = __webpack_require__(2936);
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
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ 2773:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(4362);
/** Built-in value references. */


var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),

/***/ 2496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(4362);
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ 5284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;

/***/ }),

/***/ 6523:
/***/ ((module) => {

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

module.exports = arrayFilter;

/***/ }),

/***/ 8083:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(5094),
    isArguments = __webpack_require__(9246),
    isArray = __webpack_require__(3670),
    isBuffer = __webpack_require__(2343),
    isIndex = __webpack_require__(4782),
    isTypedArray = __webpack_require__(1589);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
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
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ 9258:
/***/ ((module) => {

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

module.exports = arrayMap;

/***/ }),

/***/ 8421:
/***/ ((module) => {

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

module.exports = arrayPush;

/***/ }),

/***/ 4481:
/***/ ((module) => {

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

module.exports = arraySome;

/***/ }),

/***/ 6213:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(7950);
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

module.exports = assocIndexOf;

/***/ }),

/***/ 2478:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(4655);
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

    if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) {
      var computed = current,
          result = value;
    }
  }

  return result;
}

module.exports = baseExtremum;

/***/ }),

/***/ 5974:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(6883),
    toKey = __webpack_require__(7102);
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

  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ }),

/***/ 891:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(8421),
    isArray = __webpack_require__(3670);
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

module.exports = baseGetAllKeys;

/***/ }),

/***/ 1185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2773),
    getRawTag = __webpack_require__(3888),
    objectToString = __webpack_require__(2299);
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
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

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ 582:
/***/ ((module) => {

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

module.exports = baseGt;

/***/ }),

/***/ 5529:
/***/ ((module) => {

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

module.exports = baseHasIn;

/***/ }),

/***/ 1075:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    isObjectLike = __webpack_require__(4939);
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
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

module.exports = baseIsArguments;

/***/ }),

/***/ 9856:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(1829),
    isObjectLike = __webpack_require__(4939);
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

  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

/***/ }),

/***/ 1829:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(959),
    equalArrays = __webpack_require__(3426),
    equalByTag = __webpack_require__(1402),
    equalObjects = __webpack_require__(4572),
    getTag = __webpack_require__(2417),
    isArray = __webpack_require__(3670),
    isBuffer = __webpack_require__(2343),
    isTypedArray = __webpack_require__(1589);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
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
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

/***/ }),

/***/ 4656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(959),
    baseIsEqual = __webpack_require__(9856);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
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

    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
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
      var stack = new Stack();

      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }

      if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
        return false;
      }
    }
  }

  return true;
}

module.exports = baseIsMatch;

/***/ }),

/***/ 4106:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3626),
    isMasked = __webpack_require__(9249),
    isObject = __webpack_require__(71),
    toSource = __webpack_require__(1214);
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
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

module.exports = baseIsNative;

/***/ }),

/***/ 3638:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    isLength = __webpack_require__(7100),
    isObjectLike = __webpack_require__(4939);
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
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
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ 9047:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(8334),
    baseMatchesProperty = __webpack_require__(5941),
    identity = __webpack_require__(1559),
    isArray = __webpack_require__(3670),
    property = __webpack_require__(8886);
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
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }

  return property(value);
}

module.exports = baseIteratee;

/***/ }),

/***/ 7521:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(2803),
    nativeKeys = __webpack_require__(3865);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
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

module.exports = baseKeys;

/***/ }),

/***/ 8334:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(4656),
    getMatchData = __webpack_require__(2811),
    matchesStrictComparable = __webpack_require__(4248);
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

  return function (object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;

/***/ }),

/***/ 5941:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(9856),
    get = __webpack_require__(643),
    hasIn = __webpack_require__(9059),
    isKey = __webpack_require__(837),
    isStrictComparable = __webpack_require__(3631),
    matchesStrictComparable = __webpack_require__(4248),
    toKey = __webpack_require__(7102);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
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

  return function (object) {
    var objValue = get(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;

/***/ }),

/***/ 3184:
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

/***/ }),

/***/ 886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(5974);
/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */


function basePropertyDeep(path) {
  return function (object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;

/***/ }),

/***/ 5094:
/***/ ((module) => {

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

module.exports = baseTimes;

/***/ }),

/***/ 8257:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2773),
    arrayMap = __webpack_require__(9258),
    isArray = __webpack_require__(3670),
    isSymbol = __webpack_require__(4655);
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
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

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ }),

/***/ 9081:
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ 3159:
/***/ ((module) => {

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

module.exports = cacheHas;

/***/ }),

/***/ 6883:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(3670),
    isKey = __webpack_require__(837),
    stringToPath = __webpack_require__(376),
    toString = __webpack_require__(2049);
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

module.exports = castPath;

/***/ }),

/***/ 1741:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(4362);
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ 3426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(9832),
    arraySome = __webpack_require__(4481),
    cacheHas = __webpack_require__(3159);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
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
  } // Check that cyclic values are equal.


  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);

  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

/***/ }),

/***/ 1402:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2773),
    Uint8Array = __webpack_require__(2496),
    eq = __webpack_require__(7950),
    equalArrays = __webpack_require__(3426),
    mapToArray = __webpack_require__(8961),
    setToArray = __webpack_require__(6983);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */

var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
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
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
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
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

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

module.exports = equalByTag;

/***/ }),

/***/ 4572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(5788);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
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
  } // Check that cyclic values are equal.


  var objStacked = stack.get(object);
  var othStacked = stack.get(other);

  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
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
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

/***/ }),

/***/ 8556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
module.exports = freeGlobal;

/***/ }),

/***/ 5788:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(891),
    getSymbols = __webpack_require__(7976),
    keys = __webpack_require__(3225);
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

module.exports = getAllKeys;

/***/ }),

/***/ 404:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(4480);
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
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ 2811:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(3631),
    keys = __webpack_require__(3225);
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

module.exports = getMatchData;

/***/ }),

/***/ 3203:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(4106),
    getValue = __webpack_require__(7338);
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

module.exports = getNative;

/***/ }),

/***/ 3888:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2773);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
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

module.exports = getRawTag;

/***/ }),

/***/ 7976:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(6523),
    stubArray = __webpack_require__(4043);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
module.exports = getSymbols;

/***/ }),

/***/ 2417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(9940),
    Map = __webpack_require__(4804),
    Promise = __webpack_require__(7114),
    Set = __webpack_require__(689),
    WeakMap = __webpack_require__(5284),
    baseGetTag = __webpack_require__(1185),
    toSource = __webpack_require__(1214);
/** `Object#toString` result references. */


var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}

module.exports = getTag;

/***/ }),

/***/ 7338:
/***/ ((module) => {

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

module.exports = getValue;

/***/ }),

/***/ 4727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(6883),
    isArguments = __webpack_require__(9246),
    isArray = __webpack_require__(3670),
    isIndex = __webpack_require__(4782),
    isLength = __webpack_require__(7100),
    toKey = __webpack_require__(7102);
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
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

module.exports = hasPath;

/***/ }),

/***/ 9129:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
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

module.exports = hashClear;

/***/ }),

/***/ 7644:
/***/ ((module) => {

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

module.exports = hashDelete;

/***/ }),

/***/ 3486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
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

module.exports = hashGet;

/***/ }),

/***/ 4786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
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

module.exports = hashHas;

/***/ }),

/***/ 6444:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
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
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ 4782:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
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
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ 837:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(3670),
    isSymbol = __webpack_require__(4655);
/** Used to match property names within property paths. */


var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
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

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),

/***/ 4480:
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ 9249:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(1741);
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ 2803:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ 3631:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(71);
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

module.exports = isStrictComparable;

/***/ }),

/***/ 3708:
/***/ ((module) => {

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

module.exports = listCacheClear;

/***/ }),

/***/ 6993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
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

module.exports = listCacheDelete;

/***/ }),

/***/ 286:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
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

module.exports = listCacheGet;

/***/ }),

/***/ 1678:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
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

module.exports = listCacheHas;

/***/ }),

/***/ 9743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
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

module.exports = listCacheSet;

/***/ }),

/***/ 6977:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(1979),
    ListCache = __webpack_require__(2768),
    Map = __webpack_require__(4804);
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
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ 7474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
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

module.exports = mapCacheDelete;

/***/ }),

/***/ 727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
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

module.exports = mapCacheGet;

/***/ }),

/***/ 3653:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
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

module.exports = mapCacheHas;

/***/ }),

/***/ 6140:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
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

module.exports = mapCacheSet;

/***/ }),

/***/ 8961:
/***/ ((module) => {

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
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

/***/ }),

/***/ 4248:
/***/ ((module) => {

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
  return function (object) {
    if (object == null) {
      return false;
    }

    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

module.exports = matchesStrictComparable;

/***/ }),

/***/ 5933:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(104);
/** Used as the maximum memoize cache size. */


var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

/***/ }),

/***/ 6326:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203);
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ 3865:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5290);
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ 1985:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(8556);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;

/***/ }),

/***/ 2299:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
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

module.exports = objectToString;

/***/ }),

/***/ 5290:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ 4362:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(8556);
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ 9911:
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';
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

module.exports = setCacheAdd;

/***/ }),

/***/ 7447:
/***/ ((module) => {

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

module.exports = setCacheHas;

/***/ }),

/***/ 6983:
/***/ ((module) => {

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
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

/***/ }),

/***/ 7553:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(2768);
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ 6038:
/***/ ((module) => {

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

module.exports = stackDelete;

/***/ }),

/***/ 2397:
/***/ ((module) => {

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

module.exports = stackGet;

/***/ }),

/***/ 2421:
/***/ ((module) => {

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

module.exports = stackHas;

/***/ }),

/***/ 2936:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(2768),
    Map = __webpack_require__(4804),
    MapCache = __webpack_require__(8423);
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
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

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
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

module.exports = stackSet;

/***/ }),

/***/ 376:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(5933);
/** Used to match property names within property paths. */


var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
    result.push('');
  }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
module.exports = stringToPath;

/***/ }),

/***/ 7102:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(4655);
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
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

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),

/***/ 1214:
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
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
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),

/***/ 7950:
/***/ ((module) => {

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
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ 643:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(5974);
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

/***/ 9059:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(5529),
    hasPath = __webpack_require__(4727);
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

module.exports = hasIn;

/***/ }),

/***/ 1559:
/***/ ((module) => {

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

module.exports = identity;

/***/ }),

/***/ 9246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(1075),
    isObjectLike = __webpack_require__(4939);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
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

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ 3670:
/***/ ((module) => {

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
module.exports = isArray;

/***/ }),

/***/ 6175:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3626),
    isLength = __webpack_require__(7100);
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

module.exports = isArrayLike;

/***/ }),

/***/ 2343:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(4362),
    stubFalse = __webpack_require__(3444);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
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
module.exports = isBuffer;

/***/ }),

/***/ 7120:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(9856);
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

module.exports = isEqual;

/***/ }),

/***/ 3626:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    isObject = __webpack_require__(71);
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
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
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ 7100:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
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
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ 71:
/***/ ((module) => {

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

module.exports = isObject;

/***/ }),

/***/ 4939:
/***/ ((module) => {

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

module.exports = isObjectLike;

/***/ }),

/***/ 4655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    isObjectLike = __webpack_require__(4939);
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
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
  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ 1589:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(3638),
    baseUnary = __webpack_require__(9081),
    nodeUtil = __webpack_require__(1985);
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
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
module.exports = isTypedArray;

/***/ }),

/***/ 3225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(8083),
    baseKeys = __webpack_require__(7521),
    isArrayLike = __webpack_require__(6175);
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

module.exports = keys;

/***/ }),

/***/ 4378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseExtremum = __webpack_require__(2478),
    baseGt = __webpack_require__(582),
    baseIteratee = __webpack_require__(9047);
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
  return array && array.length ? baseExtremum(array, baseIteratee(iteratee, 2), baseGt) : undefined;
}

module.exports = maxBy;

/***/ }),

/***/ 104:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(8423);
/** Error message constants. */


var FUNC_ERROR_TEXT = 'Expected a function';
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
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
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

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = MapCache;
module.exports = memoize;

/***/ }),

/***/ 8886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(3184),
    basePropertyDeep = __webpack_require__(886),
    isKey = __webpack_require__(837),
    toKey = __webpack_require__(7102);
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

module.exports = property;

/***/ }),

/***/ 4043:
/***/ ((module) => {

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

module.exports = stubArray;

/***/ }),

/***/ 3444:
/***/ ((module) => {

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

module.exports = stubFalse;

/***/ }),

/***/ 2049:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(8257);
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

module.exports = toString;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "kolmafia"
const external_kolmafia_namespaceObject = require("kolmafia");
;// CONCATENATED MODULE: ./node_modules/libram/dist/template-string.js
var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }

  return literals.reduce((acc, literal, i) => acc + literal + (placeholders[i] || ""), "");
};

var createSingleConstant = Type => function (literals) {
  for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    placeholders[_key2 - 1] = arguments[_key2];
  }

  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
  return Type.get(input);
};

var createPluralConstant = Type => function (literals) {
  for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    placeholders[_key3 - 1] = arguments[_key3];
  }

  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));

  if (input === "") {
    return Type.all();
  }

  return Type.get(input.split(/\s*,\s*/));
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */


var $bounty = createSingleConstant(Bounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */

var $bounties = createPluralConstant(Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */

var template_string_$class = createSingleConstant(Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */

var $classes = createPluralConstant(Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */

var $coinmaster = createSingleConstant(Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */

var $coinmasters = createPluralConstant(Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */

var $effect = createSingleConstant(Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */

var $effects = createPluralConstant(Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */

var $element = createSingleConstant(Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */

var $elements = createPluralConstant(Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */

var template_string_$familiar = createSingleConstant(Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */

var $familiars = createPluralConstant(Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */

var template_string_$item = createSingleConstant(Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */

var template_string_$items = createPluralConstant(Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */

var $location = createSingleConstant(Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */

var $locations = createPluralConstant(Location);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */

var $monster = createSingleConstant(Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */

var $monsters = createPluralConstant(Monster);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */

var $phylum = createSingleConstant(Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */

var $phyla = createPluralConstant(Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */

var $servant = createSingleConstant(Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */

var $servants = createPluralConstant(Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */

var $skill = createSingleConstant(Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */

var $skills = createPluralConstant(Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */

var $slot = createSingleConstant(Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */

var $slots = createPluralConstant(Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */

var $stat = createSingleConstant(Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */

var $stats = createPluralConstant(Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */

var $thrall = createSingleConstant(Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */

var $thralls = createPluralConstant(Thrall);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(6737);
;// CONCATENATED MODULE: ./node_modules/libram/dist/lib.js
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/** @module GeneralLibrary */





/**
 * Returns the current maximum Accordion Thief songs the player can have in their head
 *
 * @category General
 */

function getSongLimit() {
  return 3 + (booleanModifier("Four Songs") ? 1 : 0) + numericModifier("Additional Song");
}
/**
 * Return whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 */

function isSong(skillOrEffect) {
  var skill = skillOrEffect instanceof Effect ? toSkill(skillOrEffect) : skillOrEffect;
  return skill.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
}
/**
 * List all active Effects
 *
 * @category General
 */

function getActiveEffects() {
  return Object.keys(myEffects()).map(e => Effect.get(e));
}
/**
 * List currently active Accordion Thief songs
 *
 * @category General
 */

function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
/**
 * List number of active Accordion Thief songs
 *
 * @category General
 */

function getSongCount() {
  return getActiveSongs().length;
}
/**
 * Returns true if the player can remember another Accordion Thief song
 *
 * @category General
 * @param quantity Number of songs to test the space for
 */

function canRememberSong() {
  var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return getSongLimit() - getSongCount() >= quantity;
}
/**
 * Return the locations in which the given monster can be encountered naturally
 *
 * @category General
 * @param monster Monster to find
 */

function getMonsterLocations(monster) {
  return Location.all().filter(location => monster.name in appearanceRates(location));
}
/**
 * Return the player's remaining liver space
 *
 * @category General
 */

function getRemainingLiver() {
  return inebrietyLimit() - myInebriety();
}
/**
 * Return the player's remaining stomach space
 *
 * @category General
 */

function getRemainingStomach() {
  return fullnessLimit() - myFullness();
}
/**
 * Return the player's remaining spleen space
 *
 * @category General
 */

function getRemainingSpleen() {
  return spleenLimit() - mySpleenUse();
}
/**
 * Return whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Number to check that the player has
 */

function lib_have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (thing instanceof Effect) {
    return (0,external_kolmafia_namespaceObject.haveEffect)(thing) >= quantity;
  }

  if (thing instanceof Familiar) {
    return (0,external_kolmafia_namespaceObject.haveFamiliar)(thing);
  }

  if (thing instanceof Item) {
    return (0,external_kolmafia_namespaceObject.availableAmount)(thing) >= quantity;
  }

  if (thing instanceof Servant) {
    return (0,external_kolmafia_namespaceObject.haveServant)(thing);
  }

  if (thing instanceof Skill) {
    return (0,external_kolmafia_namespaceObject.haveSkill)(thing);
  }

  if (thing instanceof Thrall) {
    var thrall = (0,external_kolmafia_namespaceObject.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }

  return false;
}
/**
 * Return whether an item is in the player's campground
 *
 * @category General
 * @param item The item mafia uses to represent the campground item
 */

function lib_haveInCampground(item) {
  return Object.keys(getCampground()).map(i => Item.get(i)).includes(item);
}
var Wanderer;

(function (Wanderer) {
  Wanderer["Digitize"] = "Digitize Monster";
  Wanderer["Enamorang"] = "Enamorang Monster";
  Wanderer["Familiar"] = "Familiar";
  Wanderer["Holiday"] = "Holiday Monster";
  Wanderer["Kramco"] = "Kramco";
  Wanderer["Nemesis"] = "Nemesis Assassin";
  Wanderer["Portscan"] = "portscan.edu";
  Wanderer["Romantic"] = "Romantic Monster";
  Wanderer["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));

var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Return whether the player has the queried counter
 *
 * @category General
 */

function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxTurns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return (0,external_kolmafia_namespaceObject.getCounters)(counterName, minTurns, maxTurns) === counterName;
}
/**
 * Return whether the player has the queried wandering counter
 *
 * @category Wanderers
 */

function haveWandererCounter(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer);
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return haveCounter(begin) || haveCounter(end);
}
/**
 * Returns whether the player will encounter a vote wanderer on the next turn,
 * providing an "I Voted!" sticker is equipped.
 *
 * @category Wanderers
 */

function isVoteWandererNow() {
  return totalTurnsPlayed() % 11 == 1;
}
/**
 * Tells us whether we can expect a given wanderer now. Behaves differently
 * for different types of wanderer.
 *
 * - For deterministic wanderers, return whether the player will encounter
 *   the queried wanderer on the next turn
 *
 * - For variable wanderers (window), return whether the player is within
 *   an encounter window for the queried wanderer
 *
 * - For variable wanderers (chance per turn), returns true unless the player
 *   has exhausted the number of wanderers possible
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 */

function isWandererNow(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0);
  }

  if (wanderer == Wanderer.Kramco) {
    return true;
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow();
  }

  if (wanderer === Wanderer.Familiar) {
    return get("_hipsterAdv") < 7;
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return !haveCounter(begin, 1) && haveCounter(end);
}
/**
 * Returns the float chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 *
 * @category Wanderers
 */

function getKramcoWandererChance() {
  var fights = get("_sausageFights");
  var lastFight = get("_lastSausageMonsterTurn");
  var totalTurns = totalTurnsPlayed();

  if (fights < 1) {
    return lastFight === totalTurns && myTurncount() < 1 ? 0.5 : 1.0;
  }

  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1.0, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.pow(Math.max(0, fights - 5), 3)));
}
/**
 * Returns the float chance the player will encounter an Artistic Goth Kid or
 * Mini-Hipster wanderer on the next turn, providing a familiar is equipped.
 *
 * NOTE: You must complete one combat with the Artistic Goth Kid before you
 * can encounter any wanderers. Consequently,ƒ the first combat with the
 * Artist Goth Kid is effectively 0% chance to encounter a wanderer.
 *
 * @category Wanderers
 */

function getFamiliarWandererChance() {
  var totalFights = get("_hipsterAdv");
  var probability = [0.5, 0.4, 0.3, 0.2];

  if (totalFights < 4) {
    return probability[totalFights];
  }

  return totalFights > 7 ? 0.0 : 0.1;
}
/**
 * Returns the float chance the player will encounter the queried wanderer
 * on the next turn.
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 */

function getWandererChance(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0) ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Kramco) {
    getKramcoWandererChance();
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow() ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Familiar) {
    getFamiliarWandererChance();
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";

  if (haveCounter(begin, 1, 100)) {
    return 0.0;
  }

  var counters = get("relayCounters");
  var re = new RegExp("(\\d+):" + end);
  var matches = counters.match(re);

  if (matches && matches.length === 2) {
    var window = Number.parseInt(matches[1]) - myTurncount();
    return 1.0 / window;
  }

  return 0.0;
}
/**
 * Returns true if the player's current familiar is equal to the one supplied
 *
 * @category General
 * @param familiar Familiar to check
 */

function isCurrentFamiliar(familiar) {
  return myFamiliar() === familiar;
}
/**
 * Returns the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 */

function getFoldGroup(item) {
  return Object.entries(getRelated(item, "fold")).sort((_ref, _ref2) => {
    var _ref3 = _slicedToArray(_ref, 2),
        a = _ref3[1];

    var _ref4 = _slicedToArray(_ref2, 2),
        b = _ref4[1];

    return a - b;
  }).map(_ref5 => {
    var _ref6 = _slicedToArray(_ref5, 1),
        i = _ref6[0];

    return Item.get(i);
  });
}
/**
 * Returns the zap group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required zap group
 */

function getZapGroup(item) {
  return Object.keys(getRelated(item, "zap")).map(i => Item.get(i));
}
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 */

function getBanishedMonsters() {
  var banishes = chunk(get("banishedMonsters").split(":"), 3);
  var result = new Map();

  var _iterator = _createForOfIteratorHelper(banishes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          foe = _step$value[0],
          banisher = _step$value[1];

      if (foe === undefined || banisher === undefined) break; // toItem doesn"t error if the item doesn"t exist, so we have to use that.

      var banisherItem = toItem(banisher);
      var banisherObject = [Item.get("none"), null].includes(banisherItem) ? Skill.get(banisher) : banisherItem;
      result.set(banisherObject, Monster.get(foe));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
/**
 * Returns true if the item is usable
 *
 * This function will be an ongoing work in progress
 *
 * @param item Item to check
 */

function canUse(item) {
  var path = myPath();

  if (path !== "Nuclear Autumn") {
    if ($items(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
      return false;
    }
  }

  if (path === "G-Lover") {
    if (!item.name.toLowerCase().includes("g")) return false;
  }

  if (path === "Bees Hate You") {
    if (item.name.toLowerCase().includes("b")) return false;
  }

  return true;
}
/**
 * Turn KoLmafia `none`s to JavaScript `null`s
 *
 * @param thing Thing that can have a mafia "none" value
 */

function noneToNull(thing) {
  if (thing instanceof Effect) {
    return thing === Effect.get("none") ? null : thing;
  }

  if (thing instanceof Familiar) {
    return thing === Familiar.get("none") ? null : thing;
  }

  if (thing instanceof Item) {
    return thing === Item.get("none") ? null : thing;
  }

  return thing;
}
/**
 * Return the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 */

function getAverage(range) {
  var _range$match;

  if (range.indexOf("-") < 0) return Number(range);

  var _ref7 = (_range$match = range.match(/(-?[0-9]+)-(-?[0-9]+)/)) !== null && _range$match !== void 0 ? _range$match : ["0", "0", "0"],
      _ref8 = _slicedToArray(_ref7, 3),
      lower = _ref8[1],
      upper = _ref8[2];

  return (Number(lower) + Number(upper)) / 2;
}
/**
 * Return average adventures expected from consuming an item
 *
 * If item is not a consumable, will just return "0".
 *
 * @param item Consumable item
 */

function getAverageAdventures(item) {
  return getAverage(item.adventures);
}
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 */

function uneffect(effect) {
  return (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(effect.name));
}
/**
 * Get both the name and id of a player from either their name or id
 *
 * @param idOrName Id or name of player
 * @returns Object containing id and name of player
 */

function getPlayerFromIdOrName(idOrName) {
  var id = typeof idOrName === "number" ? idOrName : parseInt(getPlayerId(idOrName));
  return {
    name: getPlayerName(id),
    id: id
  };
}
/**
 * Return the step as a number for a given quest property.
 *
 * @param questName Name of quest property to check.
 */

function questStep(questName) {
  var stringStep = get(questName);
  if (stringStep === "unstarted") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished" || stringStep === "") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw new Error("Quest state parsing error.");
    }

    return parseInt(stringStep.substring(4), 10);
  }
}
var EnsureError = /*#__PURE__*/function (_Error) {
  _inherits(EnsureError, _Error);

  var _super = _createSuper(EnsureError);

  function EnsureError(cause) {
    var _this;

    _classCallCheck(this, EnsureError);

    _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!"));
    _this.name = "Ensure Error";
    return _this;
  }

  return EnsureError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Tries to get an effect using the default method
 * @param ef effect to try to get
 * @param turns turns to aim for; default of 1
 */

function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (haveEffect(ef) < turns) {
    if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
      throw new EnsureError(ef);
    }
  }
}
var valueMap = new Map();
var MALL_VALUE_MODIFIER = 0.9;
/**
 * Returns the average value--based on mallprice and autosell--of a collection of items
 * @param items items whose value you care about
 */

function getSaleValue() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return items.map(item => {
    if (valueMap.has(item)) return valueMap.get(item) || 0;

    if (item.discardable) {
      valueMap.set(item, (0,external_kolmafia_namespaceObject.mallPrice)(item) > Math.max(2 * (0,external_kolmafia_namespaceObject.autosellPrice)(item), 100) ? MALL_VALUE_MODIFIER * (0,external_kolmafia_namespaceObject.mallPrice)(item) : (0,external_kolmafia_namespaceObject.autosellPrice)(item));
    } else {
      valueMap.set(item, (0,external_kolmafia_namespaceObject.mallPrice)(item) > 100 ? MALL_VALUE_MODIFIER * (0,external_kolmafia_namespaceObject.mallPrice)(item) : 0);
    }

    return valueMap.get(item) || 0;
  }).reduce((s, price) => s + price, 0) / items.length;
}
var Environment = {
  Outdoor: "outdoor",
  Indoor: "indoor",
  Underground: "underground",
  Underwater: "underwater"
};
/**
 * Returns the weight-coefficient of any leprechaunning that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Cactus Bud, returns the efficacy-multiplier instead
 * @param familiar The familiar whose leprechaun multiplier you're interested in
 */

function findLeprechaunMultiplier(familiar) {
  if (familiar === $familiar(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Mutant Cactus Bud"])))) return numericModifier(familiar, "Leprechaun Effectiveness", 1, $item(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["none"]))));
  var meatBonus = numericModifier(familiar, "Meat Drop", 1, $item(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["none"]))));
  if (meatBonus === 0) return 0;
  return Math.pow(Math.sqrt(meatBonus / 2 + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
/**
 * Returns the weight-coefficient of any baby gravy fairying that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Fire Ant, returns the efficacy-multiplier instead
 * @param familiar The familiar whose fairy multiplier you're interested in
 */

function findFairyMultiplier(familiar) {
  if (familiar === $familiar(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Mutant Fire Ant"])))) return numericModifier(familiar, "Fairy Effectiveness", 1, $item(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["none"]))));
  var itemBonus = numericModifier(familiar, "Item Drop", 1, $item(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["none"]))));
  if (itemBonus === 0) return 0;
  return Math.pow(Math.sqrt(itemBonus + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.from-entries.js
var es_object_from_entries = __webpack_require__(5809);
;// CONCATENATED MODULE: ./node_modules/libram/dist/propertyTyping.js
function isNumericProperty(property, value) {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
}
var numericOrStringProperties = (/* unused pure expression or super */ null && (["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing"]));
var choiceAdventurePattern = /^choiceAdventure\d+$/;
function isNumericOrStringProperty(property) {
  if (numericOrStringProperties.includes(property)) return true;
  return choiceAdventurePattern.test(property);
}
var fakeBooleans = ["trackVoteMonster", "_jickJarAvailable"];
function isBooleanProperty(property, value) {
  if (fakeBooleans.includes(property)) return false;
  return ["true", "false"].includes(value);
}
var otherLocations = ["nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget"];
function isLocationProperty(property) {
  return otherLocations.includes(property) || property.endsWith("Location");
}
var otherMonsters = ["romanticTarget", "yearbookCameraTarget"];
var fakeMonsters = ["trackVoteMonster"];
function isMonsterProperty(property) {
  if (otherMonsters.includes(property)) return true;
  return property.endsWith("Monster") && !fakeMonsters.includes(property);
}
function isFamiliarProperty(property) {
  return property.endsWith("Familiar");
}
var statProps = (/* unused pure expression or super */ null && (["nsChallenge1", "shrugTopper", "snojoSetting"]));
function isStatProperty(property) {
  return statProps.includes(property);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/property.js
function property_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function property_slicedToArray(arr, i) { return property_arrayWithHoles(arr) || property_iterableToArrayLimit(arr, i) || property_unsupportedIterableToArray(arr, i) || property_nonIterableRest(); }

function property_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function property_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return property_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return property_arrayLikeToArray(o, minLen); }

function property_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function property_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function property_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var createPropertyGetter = transform => (property, default_) => {
  var value = (0,external_kolmafia_namespaceObject.getProperty)(property);

  if (default_ !== undefined && value === "") {
    return default_;
  }

  return transform(value, property);
};

var createMafiaClassPropertyGetter = Type => createPropertyGetter(value => {
  if (value === "") return null;
  var v = Type.get(value);
  return v === Type.get("none") ? null : v;
});

var getString = createPropertyGetter(value => value);
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
var getBoolean = createPropertyGetter(value => value === "true");
var getNumber = createPropertyGetter(value => Number(value));
var getBounty = createMafiaClassPropertyGetter(Bounty);
var getClass = createMafiaClassPropertyGetter(Class);
var getCoinmaster = createMafiaClassPropertyGetter(Coinmaster);
var getEffect = createMafiaClassPropertyGetter(Effect);
var getElement = createMafiaClassPropertyGetter(Element);
var getFamiliar = createMafiaClassPropertyGetter(Familiar);
var getItem = createMafiaClassPropertyGetter(Item);
var getLocation = createMafiaClassPropertyGetter(Location);
var getMonster = createMafiaClassPropertyGetter(Monster);
var getPhylum = createMafiaClassPropertyGetter(Phylum);
var getServant = createMafiaClassPropertyGetter(Servant);
var getSkill = createMafiaClassPropertyGetter(Skill);
var getSlot = createMafiaClassPropertyGetter(Slot);
var getStat = createMafiaClassPropertyGetter(Stat);
var getThrall = createMafiaClassPropertyGetter(Thrall);
function property_get(property, _default) {
  var value = getString(property);

  if (isMonsterProperty(property)) {
    return getMonster(property, _default);
  }

  if (isLocationProperty(property)) {
    return getLocation(property, _default);
  }

  if (value === "") {
    return _default === undefined ? "" : _default;
  }

  if (isBooleanProperty(property, value)) {
    return getBoolean(property, _default);
  }

  if (isNumericProperty(property, value)) {
    return getNumber(property, _default);
  }

  return value;
}

function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0,external_kolmafia_namespaceObject.setProperty)(property, stringValue);
}


function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = property_slicedToArray(_Object$entries[_i], 2),
        prop = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    _set(prop, value);
  }
}
function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = property_slicedToArray(_ref, 1),
        prop = _ref2[0];

    return [prop, property_get(prop)];
  }));
  setProperties(properties);

  try {
    callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
function withProperty(property, value, callback) {
  withProperties(_defineProperty({}, property, value), callback);
}
function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(_ref3 => {
    var _ref4 = property_slicedToArray(_ref3, 2),
        choice = _ref4[0],
        option = _ref4[1];

    return ["choiceAdventure".concat(choice), option];
  }));
  withProperties(properties, callback);
}
function withChoice(choice, value, callback) {
  withChoices(_defineProperty({}, choice, value), callback);
}
var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    property_classCallCheck(this, PropertiesManager);

    this.properties = {};
  }

  _createClass(PropertiesManager, [{
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = property_slicedToArray(_Object$entries2[_i2], 2),
            propertyName = _Object$entries2$_i[0],
            propertyValue = _Object$entries2$_i[1];

        if (this.properties[propertyName] === undefined) {
          this.properties[propertyName] = property_get(propertyName);
        }

        _set(propertyName, propertyValue);
      }
    }
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = property_slicedToArray(_ref5, 2),
            choiceNumber = _ref6[0],
            choiceValue = _ref6[1];

        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
  }, {
    key: "resetAll",
    value: function resetAll() {
      Object.entries(this.properties).forEach(_ref7 => {
        var _ref8 = property_slicedToArray(_ref7, 2),
            propertyName = _ref8[0],
            propertyValue = _ref8[1];

        return _set(propertyName, propertyValue);
      });
    }
  }]);

  return PropertiesManager;
}();
;// CONCATENATED MODULE: ./src/outfits.ts
var outfits_templateObject, outfits_templateObject2, outfits_templateObject3, outfits_templateObject4, outfits_templateObject5, outfits_templateObject6, outfits_templateObject7, outfits_templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199, _templateObject200, _templateObject201, _templateObject202, _templateObject203, _templateObject204, _templateObject205, _templateObject206, _templateObject207, _templateObject208, _templateObject209, _templateObject210, _templateObject211, _templateObject212, _templateObject213, _templateObject214, _templateObject215, _templateObject216, _templateObject217, _templateObject218, _templateObject219, _templateObject220, _templateObject221, _templateObject222, _templateObject223, _templateObject224, _templateObject225, _templateObject226, _templateObject227, _templateObject228, _templateObject229, _templateObject230, _templateObject231, _templateObject232, _templateObject233, _templateObject234, _templateObject235;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || outfits_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return outfits_arrayLikeToArray(arr); }

function outfits_slicedToArray(arr, i) { return outfits_arrayWithHoles(arr) || outfits_iterableToArrayLimit(arr, i) || outfits_unsupportedIterableToArray(arr, i) || outfits_nonIterableRest(); }

function outfits_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function outfits_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function outfits_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function outfits_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = outfits_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function outfits_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return outfits_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return outfits_arrayLikeToArray(o, minLen); }

function outfits_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function outfits_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function outfits_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function outfits_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function outfits_createClass(Constructor, protoProps, staticProps) { if (protoProps) outfits_defineProperties(Constructor.prototype, protoProps); if (staticProps) outfits_defineProperties(Constructor, staticProps); return Constructor; }

function outfits_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Outfit = /*#__PURE__*/function () {
  /**
   * Construct an outfit object, for rapid equipping
   * @param equips Map of what to equip and where
   * @param familiar Optional familiar to use with outfit
   */
  function Outfit(equips, familiar) {
    outfits_classCallCheck(this, Outfit);

    outfits_defineProperty(this, "equips", void 0);

    outfits_defineProperty(this, "familiar", void 0);

    this.equips = equips;
    this.familiar = familiar;
  }

  outfits_createClass(Outfit, [{
    key: "dress",
    value: function dress() {
      if (this.familiar) (0,external_kolmafia_namespaceObject.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values());
      var accessorySlots = $slots(outfits_templateObject || (outfits_templateObject = outfits_taggedTemplateLiteral(["acc1, acc2, acc3"])));

      var _iterator = outfits_createForOfIteratorHelper($slots(outfits_templateObject2 || (outfits_templateObject2 = outfits_taggedTemplateLiteral(["weapon, off-hand, hat, shirt, pants, familiar, buddy-bjorn, crown-of-thrones, back"])))),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var slot = _step.value;
          if (targetEquipment.includes((0,external_kolmafia_namespaceObject.equippedItem)(slot)) && this.equips.get(slot) !== (0,external_kolmafia_namespaceObject.equippedItem)(slot)) (0,external_kolmafia_namespaceObject.equip)(slot, template_string_$item(outfits_templateObject3 || (outfits_templateObject3 = outfits_taggedTemplateLiteral(["none"]))));
        } //Order is anchored here to prevent DFSS shenanigans

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = outfits_createForOfIteratorHelper($slots(outfits_templateObject4 || (outfits_templateObject4 = outfits_taggedTemplateLiteral(["weapon, off-hand, hat, back, shirt, pants, familiar, buddy-bjorn, crown-of-thrones"])))),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _slot = _step2.value;
          var equipment = this.equips.get(_slot);
          if (equipment) (0,external_kolmafia_namespaceObject.equip)(_slot, equipment);
        } //We don't care what order accessories are equipped in, just that they're equipped

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var accessoryEquips = accessorySlots.map(slot => this.equips.get(slot)).filter(item => item !== undefined);

      var _iterator3 = outfits_createForOfIteratorHelper(accessorySlots),
          _step3;

      try {
        var _loop = function _loop() {
          var slot = _step3.value;
          var toEquip = accessoryEquips.find(equip => (0,external_kolmafia_namespaceObject.equippedAmount)(equip) < accessoryEquips.filter(accessory => accessory === equip).length);
          if (!toEquip) return "break";
          var currentEquip = (0,external_kolmafia_namespaceObject.equippedItem)(slot); //We never want an empty accessory slot

          if (currentEquip === template_string_$item(outfits_templateObject5 || (outfits_templateObject5 = outfits_taggedTemplateLiteral(["none"]))) || (0,external_kolmafia_namespaceObject.equippedAmount)(currentEquip) > accessoryEquips.filter(accessory => accessory === currentEquip).length) {
            (0,external_kolmafia_namespaceObject.equip)(slot, toEquip);
          }
        };

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _ret = _loop();

          if (_ret === "break") break;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    /**
     * Identical to withOutfit; executes callback function with equipped outfit, and returns to original outfit
     * @param callback Function to execute
     */

  }, {
    key: "with",
    value: function _with(callback) {
      return withOutfit(this, callback);
    }
    /**
     * Makes the best outfit it can with what you've got
     * @param equips Map of what to equip and where; will use first item in array that it can, and willl not add things to outfit otherwise
     * @param familiar Optional familiar to use with outfit
     */

  }], [{
    key: "doYourBest",
    value: function doYourBest(equips, familiar) {
      var returnValue = new Map();

      var _iterator4 = outfits_createForOfIteratorHelper(equips.entries()),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _step4$value = outfits_slicedToArray(_step4.value, 2),
              slot = _step4$value[0],
              itemOrItems = _step4$value[1];

          var item = Array.isArray(itemOrItems) ? itemOrItems.find(item => lib_have(item)) : itemOrItems;
          if (item) returnValue.set(slot, item);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return new Outfit(returnValue, familiar);
    }
    /**
     * Saves current outfit as an Outfit
     * @param withFamiliar Option to store current familiar as part of outfit
     */

  }, {
    key: "current",
    value: function current() {
      var withFamiliar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var familiar = withFamiliar ? (0,external_kolmafia_namespaceObject.myFamiliar)() : undefined;
      var slots = $slots(outfits_templateObject6 || (outfits_templateObject6 = outfits_taggedTemplateLiteral(["hat, shirt, back, weapon, off-hand, pants, acc1, acc2, acc3"])));
      if (withFamiliar) slots.push($slot(outfits_templateObject7 || (outfits_templateObject7 = outfits_taggedTemplateLiteral(["familiar"]))));
      var outfitMap = new Map();

      var _iterator5 = outfits_createForOfIteratorHelper(slots),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var slot = _step5.value;
          var item = (0,external_kolmafia_namespaceObject.equippedItem)(slot);
          if (item !== template_string_$item(outfits_templateObject8 || (outfits_templateObject8 = outfits_taggedTemplateLiteral(["none"])))) outfitMap.set(slot, item);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return new Outfit(outfitMap, familiar);
    }
  }]);

  return Outfit;
}();
/**
 * Execute callback while wearing given outfit
 * Then return to what you were previously wearing
 * @param outfit Outfit to use
 * @param callback Function to execute
 */

function withOutfit(outfit, callback) {
  var withFamiliar = outfit.familiar !== undefined;
  var cachedOutfit = Outfit.current(withFamiliar);
  outfit.dress();

  try {
    return callback();
  } finally {
    cachedOutfit.dress();
  }
}
function uniform() {
  var uniformMap = new Map([[$slot(_templateObject9 || (_templateObject9 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(_templateObject10 || (_templateObject10 = outfits_taggedTemplateLiteral(["Iunion Crown"])))], [$slot(_templateObject11 || (_templateObject11 = outfits_taggedTemplateLiteral(["shirt"]))), template_string_$item(_templateObject12 || (_templateObject12 = outfits_taggedTemplateLiteral(["fresh coat of paint"])))], [$slot(_templateObject13 || (_templateObject13 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$items(_templateObject14 || (_templateObject14 = outfits_taggedTemplateLiteral(["pantogram pants, old sweatpants"])))], [$slot(_templateObject15 || (_templateObject15 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(_templateObject16 || (_templateObject16 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject17 || (_templateObject17 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$item(_templateObject18 || (_templateObject18 = outfits_taggedTemplateLiteral(["familiar scrapbook"])))], [$slot(_templateObject19 || (_templateObject19 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject20 || (_templateObject20 = outfits_taggedTemplateLiteral(["your cowboy boots"])))], [$slot(_templateObject21 || (_templateObject21 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject22 || (_templateObject22 = outfits_taggedTemplateLiteral(["codpiece"])))], [$slot(_templateObject23 || (_templateObject23 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$items(_templateObject24 || (_templateObject24 = outfits_taggedTemplateLiteral(["battle broom, Powerful Glove"])))], [$slot(_templateObject25 || (_templateObject25 = outfits_taggedTemplateLiteral(["back"]))), template_string_$items(_templateObject26 || (_templateObject26 = outfits_taggedTemplateLiteral(["LOV Epaulettes, vampyric cloake"])))]]);

  for (var _len = arguments.length, changes = new Array(_len), _key = 0; _key < _len; _key++) {
    changes[_key] = arguments[_key];
  }

  changes.forEach(change => {
    var slot = Array.isArray(change) ? change[1] : (0,external_kolmafia_namespaceObject.toSlot)(change);
    var equipment = Array.isArray(change) ? change[0] : change;
    var currentSlotOccupant = uniformMap.get(slot);
    var newSlotOccupant = currentSlotOccupant ? Array.isArray(currentSlotOccupant) ? [equipment].concat(_toConsumableArray(currentSlotOccupant)) : [equipment, currentSlotOccupant] : equipment;
    uniformMap.set(slot, newSlotOccupant);
  });
  Outfit.doYourBest(uniformMap).dress();
}
function wireOutfit() {
  new Outfit(new Map([[$slot(_templateObject27 || (_templateObject27 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(_templateObject28 || (_templateObject28 = outfits_taggedTemplateLiteral(["Iunion Crown"])))], [$slot(_templateObject29 || (_templateObject29 = outfits_taggedTemplateLiteral(["shirt"]))), template_string_$item(_templateObject30 || (_templateObject30 = outfits_taggedTemplateLiteral(["fresh coat of paint"])))], [$slot(_templateObject31 || (_templateObject31 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$item(_templateObject32 || (_templateObject32 = outfits_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [$slot(_templateObject33 || (_templateObject33 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(_templateObject34 || (_templateObject34 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject35 || (_templateObject35 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$item(_templateObject36 || (_templateObject36 = outfits_taggedTemplateLiteral(["familiar scrapbook"])))], [$slot(_templateObject37 || (_templateObject37 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject38 || (_templateObject38 = outfits_taggedTemplateLiteral(["Eight Days a Week Pill Keeper"])))], [$slot(_templateObject39 || (_templateObject39 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject40 || (_templateObject40 = outfits_taggedTemplateLiteral(["Powerful Glove"])))], [$slot(_templateObject41 || (_templateObject41 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(_templateObject42 || (_templateObject42 = outfits_taggedTemplateLiteral(["Guzzlr tablet"])))]])).dress();
}
function moxieOutfit() {
  (0,external_kolmafia_namespaceObject.cliExecute)("retrocape robot");
  Outfit.doYourBest(new Map([[$slot(_templateObject43 || (_templateObject43 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(_templateObject44 || (_templateObject44 = outfits_taggedTemplateLiteral(["very pointy crown"])))], [$slot(_templateObject45 || (_templateObject45 = outfits_taggedTemplateLiteral(["shirt"]))), template_string_$items(_templateObject46 || (_templateObject46 = outfits_taggedTemplateLiteral(["shoe ad T-shirt, fresh coat of paint"])))], [$slot(_templateObject47 || (_templateObject47 = outfits_taggedTemplateLiteral(["back"]))), template_string_$item(_templateObject48 || (_templateObject48 = outfits_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [$slot(_templateObject49 || (_templateObject49 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(_templateObject50 || (_templateObject50 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject51 || (_templateObject51 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$item(_templateObject52 || (_templateObject52 = outfits_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [$slot(_templateObject53 || (_templateObject53 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject54 || (_templateObject54 = outfits_taggedTemplateLiteral(["Beach Comb"])))], [$slot(_templateObject55 || (_templateObject55 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject56 || (_templateObject56 = outfits_taggedTemplateLiteral(["\"I Voted!\" sticker"])))], [$slot(_templateObject57 || (_templateObject57 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(_templateObject58 || (_templateObject58 = outfits_taggedTemplateLiteral(["Retrospecs"])))], [$slot(_templateObject59 || (_templateObject59 = outfits_taggedTemplateLiteral(["familiar"]))), template_string_$item(_templateObject60 || (_templateObject60 = outfits_taggedTemplateLiteral(["miniature crystal ball"])))]])).dress();
}
function hpOutfit() {
  (0,external_kolmafia_namespaceObject.cliExecute)("retrocape vampire");
  if (!lib_have(template_string_$item(_templateObject61 || (_templateObject61 = outfits_taggedTemplateLiteral(["wad of used tape"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("fold wad of used tape");
  Outfit.doYourBest(new Map([[$slot(_templateObject62 || (_templateObject62 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(_templateObject63 || (_templateObject63 = outfits_taggedTemplateLiteral(["wad of used tape"])))], [$slot(_templateObject64 || (_templateObject64 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(_templateObject65 || (_templateObject65 = outfits_taggedTemplateLiteral(["dented scepter"])))], [$slot(_templateObject66 || (_templateObject66 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$item(_templateObject67 || (_templateObject67 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject68 || (_templateObject68 = outfits_taggedTemplateLiteral(["shirt"]))), template_string_$items(_templateObject69 || (_templateObject69 = outfits_taggedTemplateLiteral(["shoe ad T-shirt, fresh coat of paint"])))], [$slot(_templateObject70 || (_templateObject70 = outfits_taggedTemplateLiteral(["back"]))), template_string_$item(_templateObject71 || (_templateObject71 = outfits_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [$slot(_templateObject72 || (_templateObject72 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$item(_templateObject73 || (_templateObject73 = outfits_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [$slot(_templateObject74 || (_templateObject74 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject75 || (_templateObject75 = outfits_taggedTemplateLiteral(["Brutal brogues"])))], [$slot(_templateObject76 || (_templateObject76 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject77 || (_templateObject77 = outfits_taggedTemplateLiteral(["Retrospecs"])))], [$slot(_templateObject78 || (_templateObject78 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(_templateObject79 || (_templateObject79 = outfits_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [$slot(_templateObject80 || (_templateObject80 = outfits_taggedTemplateLiteral(["familiar"]))), template_string_$item(_templateObject81 || (_templateObject81 = outfits_taggedTemplateLiteral(["miniature crystal ball"])))]])).dress();
}
function muscleOutfit() {
  (0,external_kolmafia_namespaceObject.cliExecute)("retrocape vampire");
  if (!lib_have(template_string_$item(_templateObject82 || (_templateObject82 = outfits_taggedTemplateLiteral(["wad of used tape"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("fold wad of used tape");
  Outfit.doYourBest(new Map([[$slot(_templateObject83 || (_templateObject83 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(_templateObject84 || (_templateObject84 = outfits_taggedTemplateLiteral(["wad of used tape"])))], [$slot(_templateObject85 || (_templateObject85 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(_templateObject86 || (_templateObject86 = outfits_taggedTemplateLiteral(["dented scepter"])))], [$slot(_templateObject87 || (_templateObject87 = outfits_taggedTemplateLiteral(["off-hand"]))), lib_have(template_string_$familiar(_templateObject88 || (_templateObject88 = outfits_taggedTemplateLiteral(["Disembodied Hand"])))) ? template_string_$items(_templateObject89 || (_templateObject89 = outfits_taggedTemplateLiteral(["cosmetic football"]))) : template_string_$item(_templateObject90 || (_templateObject90 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject91 || (_templateObject91 = outfits_taggedTemplateLiteral(["shirt"]))), template_string_$items(_templateObject92 || (_templateObject92 = outfits_taggedTemplateLiteral(["shoe ad T-shirt, fresh coat of paint"])))], [$slot(_templateObject93 || (_templateObject93 = outfits_taggedTemplateLiteral(["back"]))), template_string_$item(_templateObject94 || (_templateObject94 = outfits_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [$slot(_templateObject95 || (_templateObject95 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$item(_templateObject96 || (_templateObject96 = outfits_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [$slot(_templateObject97 || (_templateObject97 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject98 || (_templateObject98 = outfits_taggedTemplateLiteral(["Brutal brogues"])))], [$slot(_templateObject99 || (_templateObject99 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject100 || (_templateObject100 = outfits_taggedTemplateLiteral(["Retrospecs"])))], [$slot(_templateObject101 || (_templateObject101 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(_templateObject102 || (_templateObject102 = outfits_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [$slot(_templateObject103 || (_templateObject103 = outfits_taggedTemplateLiteral(["familiar"]))), lib_have(template_string_$familiar(_templateObject104 || (_templateObject104 = outfits_taggedTemplateLiteral(["Disembodied Hand"])))) ? template_string_$item(_templateObject105 || (_templateObject105 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))) : template_string_$item(_templateObject106 || (_templateObject106 = outfits_taggedTemplateLiteral(["miniature crystal ball"])))]]), lib_have(template_string_$familiar(_templateObject107 || (_templateObject107 = outfits_taggedTemplateLiteral(["Disembodied Hand"])))) ? template_string_$familiar(_templateObject108 || (_templateObject108 = outfits_taggedTemplateLiteral(["Disembodied Hand"]))) : undefined).dress();
}
function mysticalityOutfit() {
  (0,external_kolmafia_namespaceObject.cliExecute)("retrocape heck");
  Outfit.doYourBest(new Map([[$slot(_templateObject109 || (_templateObject109 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(_templateObject110 || (_templateObject110 = outfits_taggedTemplateLiteral(["wad of used tape"])))], [$slot(_templateObject111 || (_templateObject111 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(_templateObject112 || (_templateObject112 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject113 || (_templateObject113 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$item(_templateObject114 || (_templateObject114 = outfits_taggedTemplateLiteral(["astral statuette"])))], [$slot(_templateObject115 || (_templateObject115 = outfits_taggedTemplateLiteral(["back"]))), template_string_$item(_templateObject116 || (_templateObject116 = outfits_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [$slot(_templateObject117 || (_templateObject117 = outfits_taggedTemplateLiteral(["shirt"]))), template_string_$items(_templateObject118 || (_templateObject118 = outfits_taggedTemplateLiteral(["denim jacket, shoe ad T-shirt, fresh coat of paint"])))], [$slot(_templateObject119 || (_templateObject119 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$item(_templateObject120 || (_templateObject120 = outfits_taggedTemplateLiteral(["pantogram pants"])))], [$slot(_templateObject121 || (_templateObject121 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject122 || (_templateObject122 = outfits_taggedTemplateLiteral(["your cowboy boots"])))], [$slot(_templateObject123 || (_templateObject123 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject124 || (_templateObject124 = outfits_taggedTemplateLiteral(["codpiece"])))], [$slot(_templateObject125 || (_templateObject125 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(_templateObject126 || (_templateObject126 = outfits_taggedTemplateLiteral(["battle broom"])))], [$slot(_templateObject127 || (_templateObject127 = outfits_taggedTemplateLiteral(["familiar"]))), template_string_$items(_templateObject128 || (_templateObject128 = outfits_taggedTemplateLiteral(["Abracandalabra"])))]]), template_string_$familiar(_templateObject129 || (_templateObject129 = outfits_taggedTemplateLiteral(["Left-Hand Man"])))).dress();
}
function itemOutfit() {
  if (!lib_have(template_string_$item(_templateObject130 || (_templateObject130 = outfits_taggedTemplateLiteral(["wad of used tape"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("fold wad of used tape");
  Outfit.doYourBest(new Map([[$slot(_templateObject131 || (_templateObject131 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(_templateObject132 || (_templateObject132 = outfits_taggedTemplateLiteral(["wad of used tape"])))], [$slot(_templateObject133 || (_templateObject133 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$items(_templateObject134 || (_templateObject134 = outfits_taggedTemplateLiteral(["extra-large utility candle"])))], [$slot(_templateObject135 || (_templateObject135 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$item(_templateObject136 || (_templateObject136 = outfits_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))], [$slot(_templateObject137 || (_templateObject137 = outfits_taggedTemplateLiteral(["back"]))), template_string_$item(_templateObject138 || (_templateObject138 = outfits_taggedTemplateLiteral(["protonic accelerator pack"])))], [$slot(_templateObject139 || (_templateObject139 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject140 || (_templateObject140 = outfits_taggedTemplateLiteral(["Guzzlr tablet"])))], [$slot(_templateObject141 || (_templateObject141 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject142 || (_templateObject142 = outfits_taggedTemplateLiteral(["gold detective badge"])))], [$slot(_templateObject143 || (_templateObject143 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$items(_templateObject144 || (_templateObject144 = outfits_taggedTemplateLiteral(["government-issued night-vision goggles"])))], [$slot(_templateObject145 || (_templateObject145 = outfits_taggedTemplateLiteral(["familiar"]))), template_string_$item(_templateObject146 || (_templateObject146 = outfits_taggedTemplateLiteral(["li'l ninja costume"])))]]), template_string_$familiar(_templateObject147 || (_templateObject147 = outfits_taggedTemplateLiteral(["Trick-or-Treating Tot"])))).dress();
}
function hotresOutfit() {
  (0,external_kolmafia_namespaceObject.cliExecute)("retrocape vampire hold");
  Outfit.doYourBest(new Map([[$slot(_templateObject148 || (_templateObject148 = outfits_taggedTemplateLiteral(["back"]))), template_string_$item(_templateObject149 || (_templateObject149 = outfits_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [$slot(_templateObject150 || (_templateObject150 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(_templateObject151 || (_templateObject151 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject152 || (_templateObject152 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$item(_templateObject153 || (_templateObject153 = outfits_taggedTemplateLiteral(["meteorite guard"])))], [$slot(_templateObject154 || (_templateObject154 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$item(_templateObject155 || (_templateObject155 = outfits_taggedTemplateLiteral(["pantogram pants"])))], [$slot(_templateObject156 || (_templateObject156 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject157 || (_templateObject157 = outfits_taggedTemplateLiteral(["your cowboy boots"])))], [$slot(_templateObject158 || (_templateObject158 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject159 || (_templateObject159 = outfits_taggedTemplateLiteral(["Brutal brogues"])))], [$slot(_templateObject160 || (_templateObject160 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(_templateObject161 || (_templateObject161 = outfits_taggedTemplateLiteral(["Beach Comb"])))], [$slot(_templateObject162 || (_templateObject162 = outfits_taggedTemplateLiteral(["familiar"]))), template_string_$items(_templateObject163 || (_templateObject163 = outfits_taggedTemplateLiteral(["cracker"])))]]), template_string_$familiar(_templateObject164 || (_templateObject164 = outfits_taggedTemplateLiteral(["Exotic Parrot"])))).dress();
}
function noncombatOutfit() {
  Outfit.doYourBest(new Map([[$slot(_templateObject165 || (_templateObject165 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(_templateObject166 || (_templateObject166 = outfits_taggedTemplateLiteral(["very pointy crown"])))], [$slot(_templateObject167 || (_templateObject167 = outfits_taggedTemplateLiteral(["back"]))), template_string_$item(_templateObject168 || (_templateObject168 = outfits_taggedTemplateLiteral(["protonic accelerator pack"])))], [$slot(_templateObject169 || (_templateObject169 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(_templateObject170 || (_templateObject170 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject171 || (_templateObject171 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$items(_templateObject172 || (_templateObject172 = outfits_taggedTemplateLiteral(["burning paper crane, familiar scrapbook"])))], [$slot(_templateObject173 || (_templateObject173 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject174 || (_templateObject174 = outfits_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [$slot(_templateObject175 || (_templateObject175 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject176 || (_templateObject176 = outfits_taggedTemplateLiteral(["codpiece"])))], [$slot(_templateObject177 || (_templateObject177 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(_templateObject178 || (_templateObject178 = outfits_taggedTemplateLiteral(["Brutal brogues"])))]]), template_string_$familiar(_templateObject179 || (_templateObject179 = outfits_taggedTemplateLiteral(["Disgeist"])))).dress();
}
function famweightOutfit() {
  var familiarAndEquip = lib_have(template_string_$item(_templateObject180 || (_templateObject180 = outfits_taggedTemplateLiteral(["cracker"])))) ? {
    fam: template_string_$familiar(_templateObject181 || (_templateObject181 = outfits_taggedTemplateLiteral(["Exotic Parrot"]))),
    equip: template_string_$item(_templateObject182 || (_templateObject182 = outfits_taggedTemplateLiteral(["cracker"])))
  } : lib_have(template_string_$familiar(_templateObject183 || (_templateObject183 = outfits_taggedTemplateLiteral(["Baby Bugged Bugbear"])))) ? {
    fam: template_string_$familiar(_templateObject184 || (_templateObject184 = outfits_taggedTemplateLiteral(["Baby Bugged Bugbear"]))),
    equip: template_string_$item(_templateObject185 || (_templateObject185 = outfits_taggedTemplateLiteral(["bugged beanie"])))
  } : {
    fam: template_string_$familiar(_templateObject186 || (_templateObject186 = outfits_taggedTemplateLiteral(["Blood-Faced Volleyball"]))),
    equip: lib_have(template_string_$item(_templateObject187 || (_templateObject187 = outfits_taggedTemplateLiteral(["astral pet sweater"])))) ? template_string_$item(_templateObject188 || (_templateObject188 = outfits_taggedTemplateLiteral(["astral pet sweater"]))) : template_string_$item(_templateObject189 || (_templateObject189 = outfits_taggedTemplateLiteral(["none"])))
  };
  Outfit.doYourBest(new Map([// eslint-disable-next-line libram/verify-constants
  [$slot(_templateObject190 || (_templateObject190 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(_templateObject191 || (_templateObject191 = outfits_taggedTemplateLiteral(["Daylight Shavings Helmet"])))], [$slot(_templateObject192 || (_templateObject192 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(_templateObject193 || (_templateObject193 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject194 || (_templateObject194 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$items(_templateObject195 || (_templateObject195 = outfits_taggedTemplateLiteral(["burning paper crane, familiar scrapbook"])))], [$slot(_templateObject196 || (_templateObject196 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject197 || (_templateObject197 = outfits_taggedTemplateLiteral(["Beach Comb"])))], [$slot(_templateObject198 || (_templateObject198 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject199 || (_templateObject199 = outfits_taggedTemplateLiteral(["Brutal brogues"])))], [$slot(_templateObject200 || (_templateObject200 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(_templateObject201 || (_templateObject201 = outfits_taggedTemplateLiteral(["hewn moon-rune spoon"])))], [$slot(_templateObject202 || (_templateObject202 = outfits_taggedTemplateLiteral(["familiar"]))), familiarAndEquip.equip]]), familiarAndEquip.fam).dress();
}
function weaponOutfit() {
  if (!lib_have(template_string_$item(_templateObject203 || (_templateObject203 = outfits_taggedTemplateLiteral(["broken champagne bottle"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("fold broken champagne bottle");
  Outfit.doYourBest(new Map([[$slot(_templateObject204 || (_templateObject204 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$items(_templateObject205 || (_templateObject205 = outfits_taggedTemplateLiteral(["seal-skull helmet"])))], [$slot(_templateObject206 || (_templateObject206 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(_templateObject207 || (_templateObject207 = outfits_taggedTemplateLiteral(["broken champagne bottle"])))], [$slot(_templateObject208 || (_templateObject208 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$item(_templateObject209 || (_templateObject209 = outfits_taggedTemplateLiteral(["dented scepter"])))], [$slot(_templateObject210 || (_templateObject210 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject211 || (_templateObject211 = outfits_taggedTemplateLiteral(["Brutal brogues"])))], [$slot(_templateObject212 || (_templateObject212 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject213 || (_templateObject213 = outfits_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [$slot(_templateObject214 || (_templateObject214 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(_templateObject215 || (_templateObject215 = outfits_taggedTemplateLiteral(["Powerful Glove"])))]])).dress();
}
function spellOutfit() {
  if (!lib_have(template_string_$item(_templateObject216 || (_templateObject216 = outfits_taggedTemplateLiteral(["Abracandalabra"])))) && !lib_have(template_string_$item(_templateObject217 || (_templateObject217 = outfits_taggedTemplateLiteral(["obsidian nutcracker"]))))) {
    (0,external_kolmafia_namespaceObject.buy)(template_string_$item(_templateObject218 || (_templateObject218 = outfits_taggedTemplateLiteral(["obsidian nutcracker"]))));
  }

  Outfit.doYourBest(new Map([[$slot(_templateObject219 || (_templateObject219 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$items(_templateObject220 || (_templateObject220 = outfits_taggedTemplateLiteral(["sugar chapeau, Hollandaise helmet"])))], [$slot(_templateObject221 || (_templateObject221 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(_templateObject222 || (_templateObject222 = outfits_taggedTemplateLiteral(["weeping willow wand"])))], [$slot(_templateObject223 || (_templateObject223 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$items(_templateObject224 || (_templateObject224 = outfits_taggedTemplateLiteral(["Abracandalabra, obsidian nutcracker"])))], [$slot(_templateObject225 || (_templateObject225 = outfits_taggedTemplateLiteral(["familiar"]))), template_string_$items(_templateObject226 || (_templateObject226 = outfits_taggedTemplateLiteral(["astral statuette"])))], [$slot(_templateObject227 || (_templateObject227 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$item(_templateObject228 || (_templateObject228 = outfits_taggedTemplateLiteral(["pantogram pants"])))], [$slot(_templateObject229 || (_templateObject229 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject230 || (_templateObject230 = outfits_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [$slot(_templateObject231 || (_templateObject231 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject232 || (_templateObject232 = outfits_taggedTemplateLiteral(["codpiece"])))], [$slot(_templateObject233 || (_templateObject233 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(_templateObject234 || (_templateObject234 = outfits_taggedTemplateLiteral(["battle broom"])))]]), template_string_$familiar(_templateObject235 || (_templateObject235 = outfits_taggedTemplateLiteral(["Left-Hand Man"])))).dress();
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/utils.js
function utils_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = utils_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function utils_slicedToArray(arr, i) { return utils_arrayWithHoles(arr) || utils_iterableToArrayLimit(arr, i) || utils_unsupportedIterableToArray(arr, i) || utils_nonIterableRest(); }

function utils_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function utils_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function utils_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function utils_toConsumableArray(arr) { return utils_arrayWithoutHoles(arr) || utils_iterableToArray(arr) || utils_unsupportedIterableToArray(arr) || utils_nonIterableSpread(); }

function utils_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function utils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return utils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return utils_arrayLikeToArray(o, minLen); }

function utils_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function utils_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return utils_arrayLikeToArray(arr); }

function utils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function notNull(value) {
  return value !== null;
}
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 */

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
/**
 * Split an {@param array} into {@param chunkSize} sized chunks
 *
 * @param array Array to split
 * @param chunkSize Size of chunk
 */

function utils_chunk(array, chunkSize) {
  var result = [];

  for (var i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}
function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}
function countedMapToArray(map) {
  var _ref;

  return (_ref = []).concat.apply(_ref, utils_toConsumableArray(utils_toConsumableArray(map).map(_ref2 => {
    var _ref3 = utils_slicedToArray(_ref2, 2),
        item = _ref3[0],
        quantity = _ref3[1];

    return Array(quantity).fill(item);
  })));
}
function countedMapToString(map) {
  return utils_toConsumableArray(map).map(_ref4 => {
    var _ref5 = utils_slicedToArray(_ref4, 2),
        item = _ref5[0],
        quantity = _ref5[1];

    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
/**
 * Sum an array of numbers.
 * @param addends Addends to sum.
 * @param mappingFunction function to turn elements into numbers
 */

function sum(addends, mappingFunction) {
  return addends.reduce((subtotal, element) => subtotal + mappingFunction(element), 0);
}
function sumNumbers(addends) {
  return sum(addends, x => x);
}
/**
 * Checks if a given item is in a readonly array, acting as a typeguard.
 * @param item Needle
 * @param array Readonly array haystack
 * @returns Whether the item is in the array, and narrows the type of the item.
 */

function arrayContains(item, array) {
  return array.includes(item);
}
/**
 * Checks if two arrays contain the same elements in the same quantity.
 * @param a First array for comparison
 * @param b Second array for comparison
 * @returns Whether the two arrays are equal, irrespective of order.
 */

function setEqual(a, b) {
  var sortedA = utils_toConsumableArray(a).sort();

  var sortedB = utils_toConsumableArray(b).sort();

  return a.length === b.length && sortedA.every((item, index) => item === sortedB[index]);
}
/**
 * Reverses keys and values for a given map
 * @param map Map to invert
 */

function invertMap(map) {
  var returnValue = new Map();

  var _iterator = utils_createForOfIteratorHelper(map),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = utils_slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      returnValue.set(value, key);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return returnValue;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/modifierTypes.js
// THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseModifiers.ts for more information
var booleanModifiers = ["Softcore Only", "Single Equip", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Attacks Can't Miss", "Pirate", "Breakable", "Drops Items", "Drops Meat"];
var classModifiers = ["Class"];
var numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Surgeonosity", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Clowniness", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water"];
var effectModifiers = ["Effect", "Rollover Effect"];
var monsterModifiers = ["Avatar"];
var skillModifiers = ["Skill"];
var statModifiers = ["Plumber Stat"];
var stringModifiers = ["Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie"];
;// CONCATENATED MODULE: ./node_modules/libram/dist/modifier.js



function modifier_get(name, subject) {
  if (arrayContains(name, booleanModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.booleanModifier)(name) : (0,external_kolmafia_namespaceObject.booleanModifier)(subject, name);
  }

  if (arrayContains(name, classModifiers)) {
    return (0,external_kolmafia_namespaceObject.classModifier)(subject, name);
  }

  if (arrayContains(name, effectModifiers)) {
    return (0,external_kolmafia_namespaceObject.effectModifier)(subject, name);
  }

  if (arrayContains(name, monsterModifiers)) {
    return (0,external_kolmafia_namespaceObject.monsterModifier)(subject, name);
  }

  if (arrayContains(name, numericModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.numericModifier)(name) : (0,external_kolmafia_namespaceObject.numericModifier)(subject, name);
  }

  if (arrayContains(name, skillModifiers)) {
    return (0,external_kolmafia_namespaceObject.skillModifier)(subject, name);
  }

  if (arrayContains(name, stringModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.stringModifier)(name) : (0,external_kolmafia_namespaceObject.stringModifier)(subject, name);
  }

  if (arrayContains(name, statModifiers)) {
    return (0,external_kolmafia_namespaceObject.statModifier)(subject, name);
  }
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2016/Witchess.js
var Witchess_templateObject;

function Witchess_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var item = template_string_$item(Witchess_templateObject || (Witchess_templateObject = Witchess_taggedTemplateLiteral(["Witchess Set"])));
function Witchess_have() {
  return haveInCampground(item);
}
function fightsDone() {
  return property_get("_witchessFights");
}
var pieces = Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
function fightPiece(piece) {
  if (!pieces.includes(piece)) throw new Error("That is not a valid piece.");

  if (!(0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }

  if (!(0,external_kolmafia_namespaceObject.runChoice)(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }

  if (!(0,external_kolmafia_namespaceObject.visitUrl)("choice.php?option=1&pwd=".concat((0,external_kolmafia_namespaceObject.myHash)(), "&whichchoice=1182&piece=").concat((0,external_kolmafia_namespaceObject.toInt)(piece)), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }

  return (0,external_kolmafia_namespaceObject.runCombat)();
}
// EXTERNAL MODULE: ./node_modules/lodash/maxBy.js
var maxBy = __webpack_require__(4378);
var maxBy_default = /*#__PURE__*/__webpack_require__.n(maxBy);
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2007/CandyHearts.js
var CandyHearts_templateObject, CandyHearts_templateObject2, CandyHearts_templateObject3, CandyHearts_templateObject4, CandyHearts_templateObject5, CandyHearts_templateObject6, CandyHearts_templateObject7;

function CandyHearts_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var summonSkill = $skill(CandyHearts_templateObject || (CandyHearts_templateObject = CandyHearts_taggedTemplateLiteral(["Summon Candy Heart"])));
var libramChance = 1.0 / 6;
var libramExpected = new Map([[template_string_$item(CandyHearts_templateObject2 || (CandyHearts_templateObject2 = CandyHearts_taggedTemplateLiteral(["green candy heart"]))), libramChance], [template_string_$item(CandyHearts_templateObject3 || (CandyHearts_templateObject3 = CandyHearts_taggedTemplateLiteral(["lavender candy heart"]))), libramChance], [template_string_$item(CandyHearts_templateObject4 || (CandyHearts_templateObject4 = CandyHearts_taggedTemplateLiteral(["orange candy heart"]))), libramChance], [template_string_$item(CandyHearts_templateObject5 || (CandyHearts_templateObject5 = CandyHearts_taggedTemplateLiteral(["pink candy heart"]))), libramChance], [template_string_$item(CandyHearts_templateObject6 || (CandyHearts_templateObject6 = CandyHearts_taggedTemplateLiteral(["white candy heart"]))), libramChance], [template_string_$item(CandyHearts_templateObject7 || (CandyHearts_templateObject7 = CandyHearts_taggedTemplateLiteral(["yellow candy heart"]))), libramChance]]);
/**
 * @returns true if the player can Summon Candy Heart
 */

function CandyHearts_have() {
  return lib_have(summonSkill);
}
/**
 * @returns map containing the chance of an item to be summoned
 */

function expected() {
  return libramExpected;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2008/DivineFavors.js
var DivineFavors_templateObject, DivineFavors_templateObject2, DivineFavors_templateObject3, DivineFavors_templateObject4, DivineFavors_templateObject5, DivineFavors_templateObject6, DivineFavors_templateObject7;

function DivineFavors_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var DivineFavors_summonSkill = $skill(DivineFavors_templateObject || (DivineFavors_templateObject = DivineFavors_taggedTemplateLiteral(["Summon Party Favor"])));
/**
 * @returns true if the player can Summon Party Favors
 */

function DivineFavors_have() {
  return lib_have(DivineFavors_summonSkill);
}
/**
 * @returns map containing the chance of an item to be summoned
 */

function DivineFavors_expected() {
  var rareSummons = property_get("_favorRareSummons");
  var totalRareChance = 1.0 / Math.pow(2, rareSummons + 1);
  var commonChance = (1.0 - totalRareChance) / 3;
  var rareChance = totalRareChance / 3;
  return new Map([[template_string_$item(DivineFavors_templateObject2 || (DivineFavors_templateObject2 = DivineFavors_taggedTemplateLiteral(["divine blowout"]))), commonChance], [template_string_$item(DivineFavors_templateObject3 || (DivineFavors_templateObject3 = DivineFavors_taggedTemplateLiteral(["divine can of silly string"]))), commonChance], [template_string_$item(DivineFavors_templateObject4 || (DivineFavors_templateObject4 = DivineFavors_taggedTemplateLiteral(["divine noisemaker"]))), commonChance], [template_string_$item(DivineFavors_templateObject5 || (DivineFavors_templateObject5 = DivineFavors_taggedTemplateLiteral(["divine champagne flute"]))), rareChance], [template_string_$item(DivineFavors_templateObject6 || (DivineFavors_templateObject6 = DivineFavors_taggedTemplateLiteral(["divine champagne popper"]))), rareChance], [template_string_$item(DivineFavors_templateObject7 || (DivineFavors_templateObject7 = DivineFavors_taggedTemplateLiteral(["divine cracker"]))), rareChance]]);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2009/LoveSongs.js
var LoveSongs_templateObject, LoveSongs_templateObject2, LoveSongs_templateObject3, LoveSongs_templateObject4, LoveSongs_templateObject5, LoveSongs_templateObject6, LoveSongs_templateObject7;

function LoveSongs_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var LoveSongs_summonSkill = $skill(LoveSongs_templateObject || (LoveSongs_templateObject = LoveSongs_taggedTemplateLiteral(["Summon Love Song"])));
var LoveSongs_libramChance = 1.0 / 6;
var LoveSongs_libramExpected = new Map([[template_string_$item(LoveSongs_templateObject2 || (LoveSongs_templateObject2 = LoveSongs_taggedTemplateLiteral(["love song of disturbing obsession"]))), LoveSongs_libramChance], [template_string_$item(LoveSongs_templateObject3 || (LoveSongs_templateObject3 = LoveSongs_taggedTemplateLiteral(["love song of icy revenge"]))), LoveSongs_libramChance], [template_string_$item(LoveSongs_templateObject4 || (LoveSongs_templateObject4 = LoveSongs_taggedTemplateLiteral(["love song of naughty innuendo"]))), LoveSongs_libramChance], [template_string_$item(LoveSongs_templateObject5 || (LoveSongs_templateObject5 = LoveSongs_taggedTemplateLiteral(["love song of smoldering passion"]))), LoveSongs_libramChance], [template_string_$item(LoveSongs_templateObject6 || (LoveSongs_templateObject6 = LoveSongs_taggedTemplateLiteral(["love song of sugary cuteness"]))), LoveSongs_libramChance], [template_string_$item(LoveSongs_templateObject7 || (LoveSongs_templateObject7 = LoveSongs_taggedTemplateLiteral(["love song of vague ambiguity"]))), LoveSongs_libramChance]]);
/**
 * @returns true if the player can Summon Love Song
 */

function LoveSongs_have() {
  return lib_have(LoveSongs_summonSkill);
}
/**
 * @returns map containing the chance of an item to be summoned
 */

function LoveSongs_expected() {
  return LoveSongs_libramExpected;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2010/Brickos.js
var Brickos_templateObject, Brickos_templateObject2, Brickos_templateObject3;

function Brickos_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Brickos_summonSkill = $skill(Brickos_templateObject || (Brickos_templateObject = Brickos_taggedTemplateLiteral(["Summon BRICKOs"])));
/**
 * @returns true if the player can Summon BRICKOs
 */

function Brickos_have() {
  return lib_have(Brickos_summonSkill);
}
/**
 * @returns map containing the chance of an item to be summoned
 */

function Brickos_expected() {
  var eyeSummons = property_get("_brickoEyeSummons");
  var eyeChance = eyeSummons === 3 ? 0.0 : eyeSummons === 0 ? 0.5 : 1.0 / 3.0;
  return new Map([[template_string_$item(Brickos_templateObject2 || (Brickos_templateObject2 = Brickos_taggedTemplateLiteral(["BRICKO eye brick"]))), eyeChance], [template_string_$item(Brickos_templateObject3 || (Brickos_templateObject3 = Brickos_taggedTemplateLiteral(["BRICKO brick"]))), 3.0 - eyeChance]]);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2011/Gygaxian.js
var Gygaxian_templateObject, Gygaxian_templateObject2, Gygaxian_templateObject3, Gygaxian_templateObject4, Gygaxian_templateObject5, Gygaxian_templateObject6, Gygaxian_templateObject7;

function Gygaxian_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Gygaxian_summonSkill = $skill(Gygaxian_templateObject || (Gygaxian_templateObject = Gygaxian_taggedTemplateLiteral(["Summon Dice"])));
var Gygaxian_libramChance = 1.0 / 6;
var Gygaxian_libramExpected = new Map([[template_string_$item(Gygaxian_templateObject2 || (Gygaxian_templateObject2 = Gygaxian_taggedTemplateLiteral(["d4"]))), Gygaxian_libramChance], [template_string_$item(Gygaxian_templateObject3 || (Gygaxian_templateObject3 = Gygaxian_taggedTemplateLiteral(["d6"]))), Gygaxian_libramChance], [template_string_$item(Gygaxian_templateObject4 || (Gygaxian_templateObject4 = Gygaxian_taggedTemplateLiteral(["d8"]))), Gygaxian_libramChance], [template_string_$item(Gygaxian_templateObject5 || (Gygaxian_templateObject5 = Gygaxian_taggedTemplateLiteral(["d10"]))), Gygaxian_libramChance], [template_string_$item(Gygaxian_templateObject6 || (Gygaxian_templateObject6 = Gygaxian_taggedTemplateLiteral(["d12"]))), Gygaxian_libramChance], [template_string_$item(Gygaxian_templateObject7 || (Gygaxian_templateObject7 = Gygaxian_taggedTemplateLiteral(["d20"]))), Gygaxian_libramChance]]);
/**
 * @returns true if the player can Summon Dice
 */

function Gygaxian_have() {
  return lib_have(Gygaxian_summonSkill);
}
/**
 * @returns map containing the chance of an item to be summoned
 */

function Gygaxian_expected() {
  return Gygaxian_libramExpected;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2012/Resolutions.js
var Resolutions_templateObject, Resolutions_templateObject2, Resolutions_templateObject3, Resolutions_templateObject4, Resolutions_templateObject5, Resolutions_templateObject6, Resolutions_templateObject7, Resolutions_templateObject8, Resolutions_templateObject9, Resolutions_templateObject10;

function Resolutions_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Resolutions_summonSkill = $skill(Resolutions_templateObject || (Resolutions_templateObject = Resolutions_taggedTemplateLiteral(["Summon Resolutions"])));
var commonChance = 0.98 / 6;
var rareChance = 0.02 / 3;
var Resolutions_libramExpected = new Map([[template_string_$item(Resolutions_templateObject2 || (Resolutions_templateObject2 = Resolutions_taggedTemplateLiteral(["resolution: be feistier"]))), commonChance], [template_string_$item(Resolutions_templateObject3 || (Resolutions_templateObject3 = Resolutions_taggedTemplateLiteral(["resolution: be happier"]))), commonChance], [template_string_$item(Resolutions_templateObject4 || (Resolutions_templateObject4 = Resolutions_taggedTemplateLiteral(["resolution: be sexier"]))), commonChance], [template_string_$item(Resolutions_templateObject5 || (Resolutions_templateObject5 = Resolutions_taggedTemplateLiteral(["resolution: be smarter"]))), commonChance], [template_string_$item(Resolutions_templateObject6 || (Resolutions_templateObject6 = Resolutions_taggedTemplateLiteral(["resolution: be stronger"]))), commonChance], [template_string_$item(Resolutions_templateObject7 || (Resolutions_templateObject7 = Resolutions_taggedTemplateLiteral(["resolution: be wealthier"]))), commonChance], [template_string_$item(Resolutions_templateObject8 || (Resolutions_templateObject8 = Resolutions_taggedTemplateLiteral(["resolution: be kinder"]))), rareChance], [template_string_$item(Resolutions_templateObject9 || (Resolutions_templateObject9 = Resolutions_taggedTemplateLiteral(["resolution: be luckier"]))), rareChance], [template_string_$item(Resolutions_templateObject10 || (Resolutions_templateObject10 = Resolutions_taggedTemplateLiteral(["resolution: be more adventurous"]))), rareChance]]);
/**
 * @returns true if the player can Summon Resolutions
 */

function Resolutions_have() {
  return lib_have(Resolutions_summonSkill);
}
/**
 * @returns map containing the chance of an item to be summoned
 */

function Resolutions_expected() {
  return Resolutions_libramExpected;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2013/PulledTaffy.js
var PulledTaffy_templateObject, PulledTaffy_templateObject2, PulledTaffy_templateObject3, PulledTaffy_templateObject4, PulledTaffy_templateObject5, PulledTaffy_templateObject6, PulledTaffy_templateObject7, PulledTaffy_templateObject8;

function PulledTaffy_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var PulledTaffy_summonSkill = $skill(PulledTaffy_templateObject || (PulledTaffy_templateObject = PulledTaffy_taggedTemplateLiteral(["Summon Taffy"])));
/**
 * @returns true if the player can Summon Taffy
 */

function PulledTaffy_have() {
  return lib_have(PulledTaffy_summonSkill);
}
/**
 * @returns map containing the chance of an item to be summoned
 */

function PulledTaffy_expected() {
  var rareSummons = property_get("_taffyRareSummons");
  var yellowSummons = property_get("_taffyYellowSummons");
  var onlyYellow = yellowSummons === 0 && rareSummons === 3;
  var totalRareChance = rareSummons < 4 ? 1.0 / Math.pow(2, rareSummons + 1) : 0.0;
  var commonChance = (1.0 - totalRareChance) / 4;
  var rareChance = onlyYellow ? 0.0 : totalRareChance / (3 - property_get("_taffyYellowSummons"));
  var yellowChance = yellowSummons === 1 ? 0.0 : onlyYellow ? totalRareChance : rareChance;
  return new Map([[template_string_$item(PulledTaffy_templateObject2 || (PulledTaffy_templateObject2 = PulledTaffy_taggedTemplateLiteral(["pulled blue taffy"]))), commonChance], [template_string_$item(PulledTaffy_templateObject3 || (PulledTaffy_templateObject3 = PulledTaffy_taggedTemplateLiteral(["pulled orange taffy"]))), commonChance], [template_string_$item(PulledTaffy_templateObject4 || (PulledTaffy_templateObject4 = PulledTaffy_taggedTemplateLiteral(["pulled violet taffy"]))), commonChance], [template_string_$item(PulledTaffy_templateObject5 || (PulledTaffy_templateObject5 = PulledTaffy_taggedTemplateLiteral(["pulled red taffy"]))), commonChance], [template_string_$item(PulledTaffy_templateObject6 || (PulledTaffy_templateObject6 = PulledTaffy_taggedTemplateLiteral(["pulled indigo taffy"]))), rareChance], [template_string_$item(PulledTaffy_templateObject7 || (PulledTaffy_templateObject7 = PulledTaffy_taggedTemplateLiteral(["pulled green taffy"]))), rareChance], [template_string_$item(PulledTaffy_templateObject8 || (PulledTaffy_templateObject8 = PulledTaffy_taggedTemplateLiteral(["pulled yellow taffy"]))), yellowChance]]);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/LibramSummon.js
function LibramSummon_slicedToArray(arr, i) { return LibramSummon_arrayWithHoles(arr) || LibramSummon_iterableToArrayLimit(arr, i) || LibramSummon_unsupportedIterableToArray(arr, i) || LibramSummon_nonIterableRest(); }

function LibramSummon_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function LibramSummon_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return LibramSummon_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return LibramSummon_arrayLikeToArray(o, minLen); }

function LibramSummon_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function LibramSummon_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function LibramSummon_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











/**
 *
 * @param summonSkill The libram summoning skill
 * @returns map containing the chance of an item to be summoned
 */

function expectedLibramSummon(summonSkill) {
  switch (summonSkill) {
    case candyHeartsSkill:
      return candyHeartsExpected();

    case divineFavorsSkill:
      return divineFavorsExpected();

    case loveSongsSkill:
      return loveSongsExpected();

    case brickosSkill:
      return brickosExpected();

    case diceSkill:
      return diceExpected();

    case resolutionsSkill:
      return resolutionsExpected();

    case taffySkill:
      return taffyExpected();
  }

  return new Map();
}
/**
 *
 * @returns map containing the chance of items to be summoned for each libram summoning skill available
 */

function possibleLibramSummons() {
  var results = new Map();

  if (CandyHearts_have()) {
    results.set(summonSkill, expected());
  }

  if (DivineFavors_have()) {
    results.set(DivineFavors_summonSkill, DivineFavors_expected());
  }

  if (LoveSongs_have()) {
    results.set(LoveSongs_summonSkill, LoveSongs_expected());
  }

  if (Brickos_have()) {
    results.set(Brickos_summonSkill, Brickos_expected());
  }

  if (Gygaxian_have()) {
    results.set(Gygaxian_summonSkill, Gygaxian_expected());
  }

  if (Resolutions_have()) {
    results.set(Resolutions_summonSkill, Resolutions_expected());
  }

  if (PulledTaffy_have()) {
    results.set(PulledTaffy_summonSkill, PulledTaffy_expected());
  }

  return results;
}
function bestLibramToCast() {
  var _maxBy;

  return ((_maxBy = maxBy_default()(Array.from(possibleLibramSummons().entries()), _ref => {
    var _ref2 = LibramSummon_slicedToArray(_ref, 2),
        itemMap = _ref2[1];

    return sumNumbers(Array.from(itemMap.entries()).map(_ref3 => {
      var _ref4 = LibramSummon_slicedToArray(_ref3, 2),
          item = _ref4[0],
          weight = _ref4[1];

      return weight * getSaleValue(item);
    }));
  })) !== null && _maxBy !== void 0 ? _maxBy : [null])[0];
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/combat.js
var combat_templateObject, combat_templateObject2;

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = combat_getPrototypeOf(object); if (object === null) break; } return object; }

function combat_toConsumableArray(arr) { return combat_arrayWithoutHoles(arr) || combat_iterableToArray(arr) || combat_unsupportedIterableToArray(arr) || combat_nonIterableSpread(); }

function combat_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function combat_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return combat_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return combat_arrayLikeToArray(o, minLen); }

function combat_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function combat_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return combat_arrayLikeToArray(arr); }

function combat_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function combat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function combat_createClass(Constructor, protoProps, staticProps) { if (protoProps) combat_defineProperties(Constructor.prototype, protoProps); if (staticProps) combat_defineProperties(Constructor, staticProps); return Constructor; }

function combat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function combat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) combat_setPrototypeOf(subClass, superClass); }

function combat_createSuper(Derived) { var hasNativeReflectConstruct = combat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = combat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = combat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return combat_possibleConstructorReturn(this, result); }; }

function combat_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return combat_assertThisInitialized(self); }

function combat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function combat_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; combat_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !combat_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return combat_construct(Class, arguments, combat_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return combat_setPrototypeOf(Wrapper, Class); }; return combat_wrapNativeSuper(Class); }

function combat_construct(Parent, args, Class) { if (combat_isNativeReflectConstruct()) { combat_construct = Reflect.construct; } else { combat_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) combat_setPrototypeOf(instance, Class.prototype); return instance; }; } return combat_construct.apply(null, arguments); }

function combat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function combat_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function combat_setPrototypeOf(o, p) { combat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return combat_setPrototypeOf(o, p); }

function combat_getPrototypeOf(o) { combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return combat_getPrototypeOf(o); }

function combat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name Script Autoattack Macro.
 *
 * @category Combat
 * @returns {number} The macro ID.
 */

function getMacroId() {
  var macroMatches = (0,external_kolmafia_namespaceObject.xpath)((0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"".concat(MACRO_NAME, "\"]/@value"));

  if (macroMatches.length === 0) {
    (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(MACRO_NAME, "&macrotext=abort&action=save"));
    return parseInt((0,external_kolmafia_namespaceObject.xpath)(newMacroText, "//input[@name=macroid]/@value")[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}

function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? Item.get(itemOrName) : itemOrName;
}

var substringCombatItems = template_string_$items(combat_templateObject || (combat_templateObject = combat_taggedTemplateLiteral(["spider web, really sticky spider web, dictionary, NG, Cloaca-Cola, yo-yo, top, ball, kite, yo, red potion, blue potion, adder, red button, pile of sand, mushroom, deluxe mushroom"])));
var substringCombatSkills = $skills(combat_templateObject2 || (combat_templateObject2 = combat_taggedTemplateLiteral(["Shoot, Thrust-Smack, Headbutt, Toss, Sing, Disarm, LIGHT, BURN, Extract, Meteor Shower, Cleave, Boil, Slice, Rainbow"])));

function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !substringCombatItems.includes(item) ? item.name : (0,external_kolmafia_namespaceObject.toInt)(item).toString();
  }
}

function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItems);
  }
}

function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}

function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !substringCombatSkills.includes(skill) ? skill.name : (0,external_kolmafia_namespaceObject.toInt)(skill);
}

var InvalidMacroError = /*#__PURE__*/function (_Error) {
  combat_inherits(InvalidMacroError, _Error);

  var _super = combat_createSuper(InvalidMacroError);

  function InvalidMacroError() {
    combat_classCallCheck(this, InvalidMacroError);

    return _super.apply(this, arguments);
  }

  return InvalidMacroError;
}( /*#__PURE__*/combat_wrapNativeSuper(Error));
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */

var Macro = /*#__PURE__*/function () {
  function Macro() {
    combat_classCallCheck(this, Macro);

    this.components = [];
  }
  /**
   * Convert macro to string.
   */


  combat_createClass(Macro, [{
    key: "toString",
    value: function toString() {
      return this.components.join(";");
    }
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */

  }, {
    key: "save",
    value: function save() {
      _set(Macro.SAVED_MACRO_PROPERTY, this.toString());
    }
    /**
     * Load a saved macro from the Mafia property.
     */

  }, {
    key: "step",
    value:
    /**
     * Statefully add one or several steps to a macro.
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
    function step() {
      var _ref;

      for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {
        nextSteps[_key] = arguments[_key];
      }

      var nextStepsStrings = (_ref = []).concat.apply(_ref, combat_toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));

      this.components = [].concat(combat_toConsumableArray(this.components), combat_toConsumableArray(nextStepsStrings.filter(s => s.length > 0)));
      return this;
    }
    /**
     * Statefully add one or several steps to a macro.
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "submit",
    value:
    /**
     * Submit the built macro to KoL. Only works inside combat.
     */
    function submit() {
      var final = this.toString();
      return (0,external_kolmafia_namespaceObject.visitUrl)("fight.php?action=macro&macrotext=".concat((0,external_kolmafia_namespaceObject.urlEncode)(final)), true, true);
    }
    /**
     * Set this macro as a KoL native autoattack.
     */

  }, {
    key: "setAutoAttack",
    value: function setAutoAttack() {
      if (Macro.cachedMacroId === null) Macro.cachedMacroId = getMacroId();

      if ((0,external_kolmafia_namespaceObject.getAutoAttack)() === 99000000 + Macro.cachedMacroId && this.toString() === Macro.cachedAutoAttack) {
        // This macro is already set. Don"t make the server request.
        return;
      }

      (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=".concat(Macro.cachedMacroId, "&name=").concat((0,external_kolmafia_namespaceObject.urlEncode)(MACRO_NAME), "&macrotext=").concat((0,external_kolmafia_namespaceObject.urlEncode)(this.toString()), "&action=save"), true, true);
      (0,external_kolmafia_namespaceObject.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99000000 + Macro.cachedMacroId, "&ajax=1"));
      Macro.cachedAutoAttack = this.toString();
    }
    /**
     * Add an "abort" step to this macro.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "abort",
    value: function abort() {
      return this.step("abort");
    }
    /**
     * Create a new macro with an "abort" step.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "runaway",
    value:
    /**
     * Add a "runaway" step to this macro.
     * @returns {Macro} This object itself.
     */
    function runaway() {
      return this.step("runaway");
    }
    /**
     * Create a new macro with an "runaway" step.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "if_",
    value:
    /**
     * Add an "if" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function if_(condition, ifTrue) {
      var ballsCondition = "";

      if (condition instanceof Monster) {
        ballsCondition = "monsterid ".concat(condition.id);
      } else if (condition instanceof Effect) {
        ballsCondition = "haseffect ".concat((0,external_kolmafia_namespaceObject.toInt)(condition));
      } else if (condition instanceof Skill) {
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      } else if (condition instanceof Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }

        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof Location) {
        var snarfblat = condition.id;

        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }

        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof Class) {
        if ((0,external_kolmafia_namespaceObject.toInt)(condition) > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }

        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof Stat) {
        ballsCondition = "".concat(condition.toString().toLowerCase(), "class");
      } else {
        ballsCondition = condition;
      }

      return this.step("if ".concat(ballsCondition)).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "while_",
    value:
    /**
     * Add a "while" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(condition)).step(contents).step("endwhile");
    }
    /**
     * Create a new macro with a "while" statement.
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "externalIf",
    value:
    /**
     * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
    function externalIf(condition, ifTrue, ifFalse) {
      if (condition) return this.step(ifTrue);else if (ifFalse) return this.step(ifFalse);else return this;
    }
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "repeat",
    value:
    /**
     * Add a repeat step to the macro.
     * @returns {Macro} This object itself.
     */
    function repeat() {
      return this.step("repeat");
    }
    /**
     * Add one or more skill cast steps to the macro.
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "skill",
    value: function skill() {
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        skills[_key2] = arguments[_key2];
      }

      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return "skill ".concat(skillBallsMacroName(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
    function trySkill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }

      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }

      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill).repeat());
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function item() {
      for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        items[_key5] = arguments[_key5];
      }

      return this.step.apply(this, combat_toConsumableArray(items.map(itemOrItems => {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
    /**
     * Create a new macro with one or more item steps.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function tryItem() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }

      return this.step.apply(this, combat_toConsumableArray(items.map(item => {
        return Macro.if_(itemOrItemsBallsMacroPredicate(item), "use ".concat(itemOrItemsBallsMacroName(item)));
      })));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "attack",
    value:
    /**
     * Add an attack step to the macro.
     * @returns {Macro} This object itself.
     */
    function attack() {
      return this.step("attack");
    }
    /**
     * Create a new macro with an attack step.
     * @returns {Macro} This object itself.
     */

  }], [{
    key: "load",
    value: function load() {
      var _this;

      return (_this = new this()).step.apply(_this, combat_toConsumableArray(property_get(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */

  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0,external_kolmafia_namespaceObject.removeProperty)(Macro.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function step() {
      var _this2;

      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "abort",
    value: function abort() {
      return new this().abort();
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return new this().runaway();
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function while_(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition, ifTrue) {
      return new this().externalIf(condition, ifTrue);
    }
  }, {
    key: "skill",
    value: function skill() {
      var _this3;

      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this4;

      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this5;

      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this6;

      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this7;

      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "attack",
    value: function attack() {
      return new this().attack();
    }
  }]);

  return Macro;
}();
Macro.SAVED_MACRO_PROPERTY = "libram_savedMacro";
Macro.cachedMacroId = null;
Macro.cachedAutoAttack = null;
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */

function adventureMacro(loc, macro) {
  macro.save();
  setAutoAttack(0);

  try {
    adv1(loc, 0, "");

    while (inMultiFight()) {
      runCombat();
    }

    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
/**
 * Adventure in a location and handle all combats with a given autoattack and manual macro.
 * To use the nextMacro parameter you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param autoMacro Macro to execute via KoL autoattack.
 * @param nextMacro Macro to execute manually after autoattack completes.
 */

function adventureMacroAuto(loc, autoMacro) {
  var _nextMacro;

  var nextMacro = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  nextMacro = (_nextMacro = nextMacro) !== null && _nextMacro !== void 0 ? _nextMacro : Macro.abort();
  autoMacro.setAutoAttack();
  nextMacro.save();

  try {
    adv1(loc, 0, "");

    while (inMultiFight()) {
      runCombat();
    }

    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
var StrictMacro = /*#__PURE__*/function (_Macro) {
  combat_inherits(StrictMacro, _Macro);

  var _super2 = combat_createSuper(StrictMacro);

  function StrictMacro() {
    combat_classCallCheck(this, StrictMacro);

    return _super2.apply(this, arguments);
  }

  combat_createClass(StrictMacro, [{
    key: "skill",
    value:
    /**
     * Add one or more skill cast steps to the macro.
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */
    function skill() {
      var _get2;

      for (var _len7 = arguments.length, skills = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        skills[_key7] = arguments[_key7];
      }

      return (_get2 = _get(combat_getPrototypeOf(StrictMacro.prototype), "skill", this)).call.apply(_get2, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function item() {
      var _get3;

      for (var _len8 = arguments.length, items = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        items[_key8] = arguments[_key8];
      }

      return (_get3 = _get(combat_getPrototypeOf(StrictMacro.prototype), "item", this)).call.apply(_get3, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkill() {
      var _get4;

      for (var _len9 = arguments.length, skills = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        skills[_key9] = arguments[_key9];
      }

      return (_get4 = _get(combat_getPrototypeOf(StrictMacro.prototype), "trySkill", this)).call.apply(_get4, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function tryItem() {
      var _get5;

      for (var _len10 = arguments.length, items = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        items[_key10] = arguments[_key10];
      }

      return (_get5 = _get(combat_getPrototypeOf(StrictMacro.prototype), "tryItem", this)).call.apply(_get5, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len11 = arguments.length, skills = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        skills[_key11] = arguments[_key11];
      }

      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return StrictMacro.if_("hasskill ".concat(skillBallsMacroName(skill)), StrictMacro.skill(skill).repeat());
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */

  }], [{
    key: "skill",
    value: function skill() {
      var _this8;

      return (_this8 = new this()).skill.apply(_this8, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this9;

      return (_this9 = new this()).item.apply(_this9, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this10;

      return (_this10 = new this()).trySkill.apply(_this10, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this11;

      return (_this11 = new this()).tryItem.apply(_this11, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this12;

      return (_this12 = new this()).trySkillRepeat.apply(_this12, arguments);
    }
  }]);

  return StrictMacro;
}(Macro);
;// CONCATENATED MODULE: ./src/combat.ts
var src_combat_templateObject, src_combat_templateObject2, combat_templateObject3, combat_templateObject4, combat_templateObject5, combat_templateObject6, combat_templateObject7, combat_templateObject8, combat_templateObject9, combat_templateObject10;

function src_combat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function src_combat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_combat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function src_combat_createClass(Constructor, protoProps, staticProps) { if (protoProps) src_combat_defineProperties(Constructor.prototype, protoProps); if (staticProps) src_combat_defineProperties(Constructor, staticProps); return Constructor; }

function src_combat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) src_combat_setPrototypeOf(subClass, superClass); }

function src_combat_setPrototypeOf(o, p) { src_combat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return src_combat_setPrototypeOf(o, p); }

function src_combat_createSuper(Derived) { var hasNativeReflectConstruct = src_combat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = src_combat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = src_combat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return src_combat_possibleConstructorReturn(this, result); }; }

function src_combat_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return src_combat_assertThisInitialized(self); }

function src_combat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function src_combat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function src_combat_getPrototypeOf(o) { src_combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return src_combat_getPrototypeOf(o); }




var combat_Macro = /*#__PURE__*/function (_StrictMacro) {
  src_combat_inherits(Macro, _StrictMacro);

  var _super = src_combat_createSuper(Macro);

  function Macro() {
    src_combat_classCallCheck(this, Macro);

    return _super.apply(this, arguments);
  }

  src_combat_createClass(Macro, [{
    key: "delevel",
    value: function delevel() {
      return this.trySkill($skill(src_combat_templateObject || (src_combat_templateObject = src_combat_taggedTemplateLiteral(["Curse of Weaksauce"])))).trySkill($skill(src_combat_templateObject2 || (src_combat_templateObject2 = src_combat_taggedTemplateLiteral(["Micrometeorite"])))).tryItem(template_string_$item(combat_templateObject3 || (combat_templateObject3 = src_combat_taggedTemplateLiteral(["Time-Spinner"])))).trySkill($skill(combat_templateObject4 || (combat_templateObject4 = src_combat_taggedTemplateLiteral(["Summon Love Gnats"]))));
    }
  }, {
    key: "candyblast",
    value: function candyblast() {
      return this.externalIf(lib_have($skill(combat_templateObject5 || (combat_templateObject5 = src_combat_taggedTemplateLiteral(["Candyblast"])))), Macro.while_('!match "Hey, some of it is even intact afterwards!"', Macro.trySkill($skill(combat_templateObject6 || (combat_templateObject6 = src_combat_taggedTemplateLiteral(["Candyblast"]))))));
    }
  }, {
    key: "easyFight",
    value: function easyFight() {
      return this.trySkill($skill(combat_templateObject7 || (combat_templateObject7 = src_combat_taggedTemplateLiteral(["Extract"])))).trySkill($skill(combat_templateObject8 || (combat_templateObject8 = src_combat_taggedTemplateLiteral(["Sing Along"]))));
    }
  }, {
    key: "defaultKill",
    value: function defaultKill() {
      return this.delevel().easyFight().externalIf((0,external_kolmafia_namespaceObject.myClass)() === template_string_$class(combat_templateObject9 || (combat_templateObject9 = src_combat_taggedTemplateLiteral(["Sauceror"]))), Macro.skill($skill(combat_templateObject10 || (combat_templateObject10 = src_combat_taggedTemplateLiteral(["Saucegeyser"])))).repeat(), Macro.attack().repeat());
    }
  }], [{
    key: "delevel",
    value: function delevel() {
      return new Macro().delevel();
    }
  }, {
    key: "candyblast",
    value: function candyblast() {
      return new Macro().candyblast();
    }
  }, {
    key: "easyFight",
    value: function easyFight() {
      return new Macro().easyFight();
    }
  }, {
    key: "defaultKill",
    value: function defaultKill() {
      return new Macro().defaultKill();
    }
  }]);

  return Macro;
}(StrictMacro);


;// CONCATENATED MODULE: ./src/lib.ts
var lib_templateObject, lib_templateObject2, lib_templateObject3, lib_templateObject4, lib_templateObject5, lib_templateObject6, lib_templateObject7, lib_templateObject8, lib_templateObject9, lib_templateObject10, lib_templateObject11, lib_templateObject12, lib_templateObject13, lib_templateObject14, lib_templateObject15, lib_templateObject16, lib_templateObject17, lib_templateObject18, lib_templateObject19, lib_templateObject20, lib_templateObject21, lib_templateObject22, lib_templateObject23, lib_templateObject24, lib_templateObject25, lib_templateObject26, lib_templateObject27, lib_templateObject28, lib_templateObject29, lib_templateObject30, lib_templateObject31, lib_templateObject32, lib_templateObject33, lib_templateObject34, lib_templateObject35, lib_templateObject36, lib_templateObject37, lib_templateObject38, lib_templateObject39, lib_templateObject40, lib_templateObject41, lib_templateObject42, lib_templateObject43, lib_templateObject44, lib_templateObject45, lib_templateObject46, lib_templateObject47, lib_templateObject48, lib_templateObject49, lib_templateObject50, lib_templateObject51, lib_templateObject52, lib_templateObject53, lib_templateObject54, lib_templateObject55, lib_templateObject56, lib_templateObject57, lib_templateObject58, lib_templateObject59, lib_templateObject60, lib_templateObject61, lib_templateObject62, lib_templateObject63, lib_templateObject64, lib_templateObject65, lib_templateObject66, lib_templateObject67, lib_templateObject68, lib_templateObject69, lib_templateObject70, lib_templateObject71, lib_templateObject72, lib_templateObject73, lib_templateObject74, lib_templateObject75, lib_templateObject76, lib_templateObject77, lib_templateObject78, lib_templateObject79, lib_templateObject80, lib_templateObject81, lib_templateObject82, lib_templateObject83, lib_templateObject84, lib_templateObject85, lib_templateObject86, lib_templateObject87, lib_templateObject88, lib_templateObject89, lib_templateObject90, lib_templateObject91, lib_templateObject92, lib_templateObject93, lib_templateObject94, lib_templateObject95, lib_templateObject96, lib_templateObject97, lib_templateObject98, lib_templateObject99, lib_templateObject100, lib_templateObject101, lib_templateObject102, lib_templateObject103, lib_templateObject104, lib_templateObject105, lib_templateObject106, lib_templateObject107, lib_templateObject108, lib_templateObject109, lib_templateObject110, lib_templateObject111, lib_templateObject112, lib_templateObject113, lib_templateObject114, lib_templateObject115, lib_templateObject116, lib_templateObject117, lib_templateObject118, lib_templateObject119, lib_templateObject120, lib_templateObject121, lib_templateObject122, lib_templateObject123, lib_templateObject124, lib_templateObject125, lib_templateObject126, lib_templateObject127, lib_templateObject128, lib_templateObject129, lib_templateObject130, lib_templateObject131, lib_templateObject132, lib_templateObject133, lib_templateObject134, lib_templateObject135, lib_templateObject136, lib_templateObject137;

function lib_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function lib_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var PropertyManager = new PropertiesManager();
function fuelUp() {
  (0,external_kolmafia_namespaceObject.buy)(1, template_string_$item(lib_templateObject || (lib_templateObject = lib_taggedTemplateLiteral(["all-purpose flower"]))));
  (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(lib_templateObject2 || (lib_templateObject2 = lib_taggedTemplateLiteral(["all-purpose flower"]))));
  (0,external_kolmafia_namespaceObject.buy)((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(lib_templateObject3 || (lib_templateObject3 = lib_taggedTemplateLiteral(["wad of dough"])))), template_string_$item(lib_templateObject4 || (lib_templateObject4 = lib_taggedTemplateLiteral(["soda water"]))));
  (0,external_kolmafia_namespaceObject.create)((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(lib_templateObject5 || (lib_templateObject5 = lib_taggedTemplateLiteral(["wad of dough"])))), template_string_$item(lib_templateObject6 || (lib_templateObject6 = lib_taggedTemplateLiteral(["loaf of soda bread"]))));
  (0,external_kolmafia_namespaceObject.cliExecute)("asdonmartin fuel ".concat((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(lib_templateObject7 || (lib_templateObject7 = lib_taggedTemplateLiteral(["loaf of soda bread"])))), " soda bread"));
}
function synthExp() {
  if (property_get("harvestGardenHardcore") === "none") {
    (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=garden");
  }

  if (!property_get("_candySummons")) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(lib_templateObject8 || (lib_templateObject8 = lib_taggedTemplateLiteral(["Summon Crimbo Candy"]))));
  }

  var fudge = template_string_$item(lib_templateObject9 || (lib_templateObject9 = lib_taggedTemplateLiteral(["Crimbo fudge"])));
  var pecan = template_string_$item(lib_templateObject10 || (lib_templateObject10 = lib_taggedTemplateLiteral(["Crimbo candied pecan"])));
  var bark = template_string_$item(lib_templateObject11 || (lib_templateObject11 = lib_taggedTemplateLiteral(["Crimbo peppermint bark"])));
  var fudges = (0,external_kolmafia_namespaceObject.availableAmount)(fudge);
  var pecans = (0,external_kolmafia_namespaceObject.availableAmount)(pecan);
  var barks = (0,external_kolmafia_namespaceObject.availableAmount)(bark);

  if (fudges >= 2) {
    (0,external_kolmafia_namespaceObject.sweetSynthesis)(fudge, fudge);
  } else if (barks >= 1) {
    if (pecans >= 1) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(pecan, bark);
    } else {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(bark, template_string_$item(lib_templateObject12 || (lib_templateObject12 = lib_taggedTemplateLiteral(["peppermint sprout"]))));
    }
  } else {
    if (!lib_have(template_string_$item(lib_templateObject13 || (lib_templateObject13 = lib_taggedTemplateLiteral(["sugar shotgun"]))))) {
      if (!lib_have(template_string_$item(lib_templateObject14 || (lib_templateObject14 = lib_taggedTemplateLiteral(["sugar sheet"]))))) (0,external_kolmafia_namespaceObject.useSkill)($skill(lib_templateObject15 || (lib_templateObject15 = lib_taggedTemplateLiteral(["Summon Sugar Sheets"]))));
      (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(lib_templateObject16 || (lib_templateObject16 = lib_taggedTemplateLiteral(["sugar shotgun"]))));
    }

    if (pecans >= 1) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(pecan, template_string_$item(lib_templateObject17 || (lib_templateObject17 = lib_taggedTemplateLiteral(["sugar shotgun"]))));
    } else {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(template_string_$item(lib_templateObject18 || (lib_templateObject18 = lib_taggedTemplateLiteral(["sugar shotgun"]))), template_string_$item(lib_templateObject19 || (lib_templateObject19 = lib_taggedTemplateLiteral(["peppermint sprout"]))));
    }
  }

  if (!lib_have($effect(lib_templateObject20 || (lib_templateObject20 = lib_taggedTemplateLiteral(["Synthesis: Learning"]))))) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize learning. Pwease fix me :c.";
  }
}
function synthItem() {
  if (property_get("harvestGardenHardcore") === "none") {
    (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=garden");
  }

  if (!property_get("_candySummons")) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(lib_templateObject21 || (lib_templateObject21 = lib_taggedTemplateLiteral(["Summon Crimbo Candy"]))));
  } //const fudge = $item`Crimbo fudge`;


  var pecan = template_string_$item(lib_templateObject22 || (lib_templateObject22 = lib_taggedTemplateLiteral(["Crimbo candied pecan"])));
  var bark = template_string_$item(lib_templateObject23 || (lib_templateObject23 = lib_taggedTemplateLiteral(["Crimbo peppermint bark"]))); //const fudges = availableAmount(fudge);

  var pecans = (0,external_kolmafia_namespaceObject.availableAmount)(pecan);
  var barks = (0,external_kolmafia_namespaceObject.availableAmount)(bark);

  if (barks >= 2) {
    (0,external_kolmafia_namespaceObject.sweetSynthesis)(bark, bark);
  } else {
    if (!lib_have(template_string_$item(lib_templateObject24 || (lib_templateObject24 = lib_taggedTemplateLiteral(["peppermint twist"]))))) {
      (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(lib_templateObject25 || (lib_templateObject25 = lib_taggedTemplateLiteral(["peppermint twist"]))));
    }

    if (pecans >= 1) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(pecan, template_string_$item(lib_templateObject26 || (lib_templateObject26 = lib_taggedTemplateLiteral(["peppermint twist"]))));
    } else {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(template_string_$item(lib_templateObject27 || (lib_templateObject27 = lib_taggedTemplateLiteral(["peppermint sprout"]))), template_string_$item(lib_templateObject28 || (lib_templateObject28 = lib_taggedTemplateLiteral(["peppermint twist"]))));
    }
  }

  if (!lib_have($effect(lib_templateObject29 || (lib_templateObject29 = lib_taggedTemplateLiteral(["Synthesis: Collection"]))))) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize collection. Pwease fix me :c.";
  }
}
function synthMyst() {
  if (property_get("harvestGardenHardcore") === "none") {
    (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=garden");
  }

  if (!property_get("_candySummons")) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(lib_templateObject30 || (lib_templateObject30 = lib_taggedTemplateLiteral(["Summon Crimbo Candy"]))));
  } //const fudge = $item`Crimbo fudge`;
  //const pecan = $item`Crimbo candied pecan`;
  //const bark = $item`Crimbo peppermint bark`;
  //const fudges = availableAmount(fudge);
  //const pecans = availableAmount(pecan);
  //const barks = availableAmount(bark);


  if (lib_have(template_string_$item(lib_templateObject31 || (lib_templateObject31 = lib_taggedTemplateLiteral(["bag of many confections"]))))) {
    if (!property_get("_chubbyAndPlumpUsed")) {
      (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(lib_templateObject32 || (lib_templateObject32 = lib_taggedTemplateLiteral(["Chubby and Plump"]))));
    }

    (0,external_kolmafia_namespaceObject.sweetSynthesis)(template_string_$item(lib_templateObject33 || (lib_templateObject33 = lib_taggedTemplateLiteral(["Chubby and Plump bar"]))), template_string_$item(lib_templateObject34 || (lib_templateObject34 = lib_taggedTemplateLiteral(["bag of many confections"]))));
  } else {
    var mint = template_string_$item(lib_templateObject35 || (lib_templateObject35 = lib_taggedTemplateLiteral(["Senior Mints"])));
    var mints = (0,external_kolmafia_namespaceObject.availableAmount)(mint);
    var orangeHeart = template_string_$item(lib_templateObject36 || (lib_templateObject36 = lib_taggedTemplateLiteral(["orange candy heart"])));

    var orangeHearts = () => (0,external_kolmafia_namespaceObject.availableAmount)(orangeHeart);

    var pinkHeart = template_string_$item(lib_templateObject37 || (lib_templateObject37 = lib_taggedTemplateLiteral(["pink candy heart"])));

    var pinkHearts = () => (0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(lib_templateObject38 || (lib_templateObject38 = lib_taggedTemplateLiteral(["pink candy heart"]))));

    var n = 0;

    while (mints + orangeHearts() + pinkHearts() === 0 && n < 11) {
      (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(lib_templateObject39 || (lib_templateObject39 = lib_taggedTemplateLiteral(["Summon Candy Heart"]))));
      n++;
    }

    if (mints + orangeHearts() + pinkHearts() === 0) {
      throw "Failed to summon hearts in a timely manner";
    }

    if (mints >= 1) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(mint, template_string_$item(lib_templateObject40 || (lib_templateObject40 = lib_taggedTemplateLiteral(["peppermint sprout"]))));
    } else if (orangeHearts() >= 1) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(orangeHeart, template_string_$item(lib_templateObject41 || (lib_templateObject41 = lib_taggedTemplateLiteral(["peppermint sprout"]))));
    } else if (pinkHearts() >= 1) {
      if (!lib_have(template_string_$item(lib_templateObject42 || (lib_templateObject42 = lib_taggedTemplateLiteral(["peppermint twist"]))))) {
        (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(lib_templateObject43 || (lib_templateObject43 = lib_taggedTemplateLiteral(["peppermint twist"]))));
      }

      (0,external_kolmafia_namespaceObject.sweetSynthesis)(pinkHeart, template_string_$item(lib_templateObject44 || (lib_templateObject44 = lib_taggedTemplateLiteral(["peppermint twist"]))));
    }
  }

  if ((0,external_kolmafia_namespaceObject.haveEffect)($effect(lib_templateObject45 || (lib_templateObject45 = lib_taggedTemplateLiteral(["Synthesis: Smart"])))) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize smart. Pwease fix me :c.";
  }
}
function kramcoCheck() {
  var kramcoNumber = 5 + 3 * property_get("_sausageFights") + Math.pow(Math.max(0, property_get("_sausageFights") - 5), 3);
  return (0,external_kolmafia_namespaceObject.totalTurnsPlayed)() - property_get("_lastSausageMonsterTurn") + 1 >= kramcoNumber;
}
function useDefaultFamiliar() {
  var canAttack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (!property_get("_bagOfCandy") && canAttack) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(lib_templateObject46 || (lib_templateObject46 = lib_taggedTemplateLiteral(["Stocking Mimic"]))));
  } else if (property_get("camelSpit") !== 100) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(lib_templateObject47 || (lib_templateObject47 = lib_taggedTemplateLiteral(["Melodramedary"]))));
    (0,external_kolmafia_namespaceObject.equip)($slot(lib_templateObject48 || (lib_templateObject48 = lib_taggedTemplateLiteral(["familiar"]))), template_string_$item(lib_templateObject49 || (lib_templateObject49 = lib_taggedTemplateLiteral(["dromedary drinking helmet"]))));
  } else if (canAttack && !lib_have(template_string_$item(lib_templateObject50 || (lib_templateObject50 = lib_taggedTemplateLiteral(["short stack of pancakes"])))) && !lib_have($effect(lib_templateObject51 || (lib_templateObject51 = lib_taggedTemplateLiteral(["Shortly Stacked"])))) && !property_get("csServicesPerformed").split(",").includes("Breed More Collies")) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(lib_templateObject52 || (lib_templateObject52 = lib_taggedTemplateLiteral(["Shorter-Order Cook"]))));
  } else if (!lib_have(template_string_$item(lib_templateObject53 || (lib_templateObject53 = lib_taggedTemplateLiteral(["burning newspaper"])))) && !lib_have(template_string_$item(lib_templateObject54 || (lib_templateObject54 = lib_taggedTemplateLiteral(["burning paper crane"]))))) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(lib_templateObject55 || (lib_templateObject55 = lib_taggedTemplateLiteral(["Garbage Fire"]))));
  } else {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(lib_templateObject56 || (lib_templateObject56 = lib_taggedTemplateLiteral(["Puck Man"]))));
  }
}
var Test;

(function (Test) {
  Test[Test["HP"] = 1] = "HP";
  Test[Test["MUS"] = 2] = "MUS";
  Test[Test["MYS"] = 3] = "MYS";
  Test[Test["MOX"] = 4] = "MOX";
  Test[Test["FAMILIAR"] = 5] = "FAMILIAR";
  Test[Test["WEAPON"] = 6] = "WEAPON";
  Test[Test["SPELL"] = 7] = "SPELL";
  Test[Test["NONCOMBAT"] = 8] = "NONCOMBAT";
  Test[Test["ITEM"] = 9] = "ITEM";
  Test[Test["HOT_RES"] = 10] = "HOT_RES";
  Test[Test["COIL_WIRE"] = 11] = "COIL_WIRE";
  Test[Test["DONATE"] = 30] = "DONATE";
})(Test || (Test = {}));

function testDone(testNum) {
  //stolen directly from bean
  (0,external_kolmafia_namespaceObject.print)("Checking test ".concat(testNum, "..."));
  var text = (0,external_kolmafia_namespaceObject.visitUrl)("council.php");
  return !(0,external_kolmafia_namespaceObject.containsText)(text, "<input type=hidden name=option value=".concat(testNum, ">"));
}
function doTest(testNum) {
  //stolen directly from bean
  if (!testDone(testNum)) {
    (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?whichchoice=1089&option=".concat(testNum));

    if (!testDone(testNum)) {
      throw 'Failed to do test " + testNum + ". Maybe we are out of turns.';
    }
  } else {
    (0,external_kolmafia_namespaceObject.print)("Test ".concat(testNum, " already completed."));
  }
}
function ensureInnerElf() {
  //stolen merely mostly from bean
  if (!lib_have($effect(lib_templateObject57 || (lib_templateObject57 = lib_taggedTemplateLiteral(["Inner Elf"]))))) {
    setClan(property_get("phccs_elfClan", "Hobopolis Vacation Home"));

    try {
      withOutfit(new Outfit(new Map([[$slot(lib_templateObject58 || (lib_templateObject58 = lib_taggedTemplateLiteral(["acc3"]))), template_string_$item(lib_templateObject59 || (lib_templateObject59 = lib_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))]]), template_string_$familiar(lib_templateObject60 || (lib_templateObject60 = lib_taggedTemplateLiteral(["Machine Elf"])))), () => {
        lib_ensureEffect($effect(lib_templateObject61 || (lib_templateObject61 = lib_taggedTemplateLiteral(["Blood Bubble"]))));
        setChoice(326, 1);
        if (property_get("_kgbTranquilizerDartUses") >= 3) ensureMp(50);
        advMacro($location(lib_templateObject62 || (lib_templateObject62 = lib_taggedTemplateLiteral(["The Slime Tube"]))), combat_Macro.trySkill($skill(lib_templateObject63 || (lib_templateObject63 = lib_taggedTemplateLiteral(["KGB tranquilizer dart"])))).trySkill($skill(lib_templateObject64 || (lib_templateObject64 = lib_taggedTemplateLiteral(["Snokebomb"])))));
      });
    } finally {
      setClan(property_get("phccs_mainClan", "Alliance From Heck"));
    }

    if (!lib_have($effect(lib_templateObject65 || (lib_templateObject65 = lib_taggedTemplateLiteral(["Inner Elf"]))))) {
      throw "Failed to get effect Inner Elf from Mother Slime.";
    }
  }
}
function fightSausageIfAble(location, macro) {
  if (kramcoCheck()) {
    (0,external_kolmafia_namespaceObject.equip)($slot(lib_templateObject66 || (lib_templateObject66 = lib_taggedTemplateLiteral(["off-hand"]))), template_string_$item(lib_templateObject67 || (lib_templateObject67 = lib_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
    var sausages = property_get("_sausageFights");
    advMacroAA(location, macro, () => {
      return sausages === property_get("_sausageFights");
    });

    if (property_get("lastEncounter") !== "sausage goblin") {
      throw "Did not fight a sausage, but I thought I would. Uh oh!";
    }
  }
}
function ensurePotionEffect(ef, potion) {
  //stolen directly from bean
  if (!have(ef)) {
    if (availableAmount(potion) === 0) {
      create(1, potion);
    }

    if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
      throw "Failed to get effect ".concat(ef.name, ".");
    }
  } else {
    print("Already have effect ".concat(ef.name, "."));
  }
}
function lib_ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  //stolen directly from bean
  if ((0,external_kolmafia_namespaceObject.haveEffect)(ef) < turns) {
    if (!(0,external_kolmafia_namespaceObject.cliExecute)(ef.default) || (0,external_kolmafia_namespaceObject.haveEffect)(ef) === 0) {
      throw "Failed to get effect ".concat(ef.name, ".");
    }
  } else {
    (0,external_kolmafia_namespaceObject.print)("Already have effect ".concat(ef.name, "."));
  }
}
function setClan(target) {
  //stolen directly from bean
  if ((0,external_kolmafia_namespaceObject.getClanName)() !== target) {
    var clanCache = JSON.parse((0,external_kolmafia_namespaceObject.getProperty)("hccs_clanCache") || "{}");

    if (clanCache.target === undefined) {
      var recruiter = (0,external_kolmafia_namespaceObject.visitUrl)("clan_signup.php");
      var clanRe = /<option value=([0-9]+)>([^<]+)<\/option>/g;
      var match;

      while ((match = clanRe.exec(recruiter)) !== null) {
        clanCache[match[2]] = match[1];
      }
    }

    (0,external_kolmafia_namespaceObject.setProperty)("hccs_clanCache", JSON.stringify(clanCache));
    (0,external_kolmafia_namespaceObject.visitUrl)("showclan.php?whichclan=".concat(clanCache[target], "&action=joinclan&confirm=on&pwd"));

    if ((0,external_kolmafia_namespaceObject.getClanName)() !== target) {
      throw "failed to switch clans to ".concat(target, ". Did you spell it correctly? Are you whitelisted?");
    }
  }

  return true;
}
function setChoice(adv, choice) {
  PropertyManager.setChoices(lib_defineProperty({}, adv, choice));
}
function tryUse(quantity, it) {
  //ripped straight from bean
  if ((0,external_kolmafia_namespaceObject.availableAmount)(it) > 0) {
    return (0,external_kolmafia_namespaceObject.use)(quantity, it);
  } else {
    return false;
  }
}
function multiFightAutoAttack() {
  while ((0,external_kolmafia_namespaceObject.choiceFollowsFight)() || (0,external_kolmafia_namespaceObject.inMultiFight)()) {
    (0,external_kolmafia_namespaceObject.visitUrl)("choice.php");
  }
}
function heal() {
  (0,external_kolmafia_namespaceObject.restoreHp)((0,external_kolmafia_namespaceObject.myMaxhp)());
}
function advMacroAA(location, macro) {
  var parameter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var afterCombatAction = arguments.length > 3 ? arguments[3] : undefined;
  var n = 0;

  var condition = () => {
    return typeof parameter === "number" ? n < parameter : parameter();
  };

  macro.setAutoAttack();

  while (condition()) {
    (0,external_kolmafia_namespaceObject.adv1)(location, -1, (_round, _foe, pageText) => {
      var _Macro$cachedAutoAtta;

      if (pageText.includes("Macro Aborted")) (0,external_kolmafia_namespaceObject.abort)();
      return (_Macro$cachedAutoAtta = combat_Macro.cachedAutoAttack) !== null && _Macro$cachedAutoAtta !== void 0 ? _Macro$cachedAutoAtta : combat_Macro.abort().toString();
    });
    if (afterCombatAction) afterCombatAction();
    n++;
  }
}
function advMacro(location, macro) {
  var parameter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var afterCombatAction = arguments.length > 3 ? arguments[3] : undefined;
  (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
  var n = 0;

  var condition = () => {
    return typeof parameter === "number" ? n < parameter : parameter();
  };

  while (condition()) {
    (0,external_kolmafia_namespaceObject.adv1)(location, -1, (_round, _foe, pageText) => {
      if (pageText.includes("Macro Aborted")) (0,external_kolmafia_namespaceObject.abort)();
      return combat_Macro.if_("!pastround 2", macro).abort().toString();
    });
    if (afterCombatAction) afterCombatAction();
    n++;
  }
}
function mapMacro(location, monster, macro) {
  macro.setAutoAttack();
  (0,external_kolmafia_namespaceObject.useSkill)($skill(lib_templateObject68 || (lib_templateObject68 = lib_taggedTemplateLiteral(["Map the Monsters"]))));
  if (!property_get("mappingMonsters")) throw "I am not actually mapping anything. Weird!";else {
    while (property_get("mappingMonsters")) {
      (0,external_kolmafia_namespaceObject.visitUrl)((0,external_kolmafia_namespaceObject.toUrl)(location));
      (0,external_kolmafia_namespaceObject.runChoice)(1, "heyscriptswhatsupwinkwink=".concat(monster.id));
      (0,external_kolmafia_namespaceObject.runCombat)(macro.toString());
    }
  }
}
function horsery() {
  return property_get("_horsery");
}
function horse(horse) {
  if (!horse.includes("horse")) horse = "".concat(horse, " horse");
  if (horsery() !== horse) (0,external_kolmafia_namespaceObject.cliExecute)("horsery ".concat(horse));
}
function convertMilliseconds(milliseconds) {
  var seconds = milliseconds / 1000;
  var minutes = Math.floor(seconds / 60);
  var secondsLeft = Math.round((seconds - minutes * 60) * 1000) / 1000;
  var hours = Math.floor(minutes / 60);
  var minutesLeft = Math.round(minutes - hours * 60);
  return (hours !== 0 ? "".concat(hours, " hours, ") : "") + (minutesLeft !== 0 ? "".concat(minutesLeft, " minutes, ") : "") + (secondsLeft !== 0 ? "".concat(secondsLeft, " seconds") : "");
}

function checkFax(monster) {
  (0,external_kolmafia_namespaceObject.cliExecute)("fax receive");
  if (getString("photocopyMonster").toLowerCase() === monster.name.toLowerCase()) return true;
  (0,external_kolmafia_namespaceObject.cliExecute)("fax send");
  return false;
}

function fax(monster) {
  if (!property_get("_photocopyUsed")) {
    if (checkFax(monster)) return;
    (0,external_kolmafia_namespaceObject.chatPrivate)("cheesefax", monster.name);

    for (var i = 0; i < 3; i++) {
      (0,external_kolmafia_namespaceObject.wait)(5 + i);
      if (checkFax(monster)) return;
    }

    (0,external_kolmafia_namespaceObject.abort)("Failed to acquire photocopied ".concat(monster.name, "."));
  }
}
var tests = [];
function testWrapper(name, test, prepare) {
  if (testDone(test)) return;
  var startTurns = (0,external_kolmafia_namespaceObject.myTurncount)();
  var predictedTurns = prepare();
  burnLibrams();
  doTest(test);
  tests.push({
    testName: name,
    turnPrediction: predictedTurns,
    turnCost: (0,external_kolmafia_namespaceObject.myTurncount)() - startTurns
  });
}
function lib_questStep(questName) {
  var stringStep = getString(questName);
  if (stringStep === "unstarted" || stringStep === "") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw "Quest state parsing error.";
    }

    return parseInt(stringStep.substring(4), 10);
  }
}
function ensureMp(mp) {
  if ((0,external_kolmafia_namespaceObject.myMp)() > mp) return;
  if (mp > (0,external_kolmafia_namespaceObject.myMaxmp)()) throw "Insufficient maximum mp!";

  while (lib_have(template_string_$item(lib_templateObject69 || (lib_templateObject69 = lib_taggedTemplateLiteral(["magical sausage"])))) || lib_have(template_string_$item(lib_templateObject70 || (lib_templateObject70 = lib_taggedTemplateLiteral(["magical sausage casing"])))) && (0,external_kolmafia_namespaceObject.myMp)() < mp && property_get("_sausagesEaten") < 23) {
    (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(lib_templateObject71 || (lib_templateObject71 = lib_taggedTemplateLiteral(["magical sausage"]))));
    (0,external_kolmafia_namespaceObject.eat)(template_string_$item(lib_templateObject72 || (lib_templateObject72 = lib_taggedTemplateLiteral(["magical sausage"]))));
  }

  while (lib_have(template_string_$item(lib_templateObject73 || (lib_templateObject73 = lib_taggedTemplateLiteral(["psychokinetic energy blob"])))) && (0,external_kolmafia_namespaceObject.myMp)() < mp) {
    (0,external_kolmafia_namespaceObject.use)(template_string_$item(lib_templateObject74 || (lib_templateObject74 = lib_taggedTemplateLiteral(["psychokinetic energy blob"]))));
  }

  if ((0,external_kolmafia_namespaceObject.myMp)() < mp) (0,external_kolmafia_namespaceObject.restoreMp)(mp);
}
var maximizeFamiliar = lib_have(template_string_$familiar(lib_templateObject75 || (lib_templateObject75 = lib_taggedTemplateLiteral(["Disembodied Hand"])))) ? template_string_$familiar(lib_templateObject76 || (lib_templateObject76 = lib_taggedTemplateLiteral(["Disembodied Hand"]))) : template_string_$familiar(lib_templateObject77 || (lib_templateObject77 = lib_taggedTemplateLiteral(["Left-Hand Man"])));

function canCastLibrams() {
  var summonNumber = 1 + property_get("libramSummons");
  var cost = 1 + summonNumber * (summonNumber - 1) / 2;
  return (0,external_kolmafia_namespaceObject.myMp)() >= cost;
}

function totalDuration(item) {
  var effect = modifier_get("Effect", item);
  return (0,external_kolmafia_namespaceObject.haveEffect)(effect) + modifier_get("Effect Duration", item) * (0,external_kolmafia_namespaceObject.availableAmount)(item);
}

var availableFights = () => clamp(5 - fightsDone(), 0, 5) + clamp((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(lib_templateObject78 || (lib_templateObject78 = lib_taggedTemplateLiteral(["BRICKO eye brick"])))), 0, 10 - property_get("_brickoFights"));

var potentialFights = () => clamp(5 - fightsDone(), 0, 5) + clamp((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(lib_templateObject79 || (lib_templateObject79 = lib_taggedTemplateLiteral(["BRICKO eye brick"])))), 0, 10 - property_get("_brickoFights")) + clamp(3 - property_get("_brickoEyeSummons"), 0, 10 - property_get("_brickoFights"));

function castPriciestLibram() {
  var choice = bestLibramToCast();
  if (!choice) return false;
  return (0,external_kolmafia_namespaceObject.useSkill)(1, choice);
}

function burnLibrams() {
  var testsDone = property_get("csServicesPerformed").split(",");
  if (!$skills(lib_templateObject80 || (lib_templateObject80 = lib_taggedTemplateLiteral(["Summon BRICKOs, Summon Taffy, Summon Love Song, Summon Candy Heart"]))).some(skill => lib_have(skill))) return;

  while (canCastLibrams()) {
    if (!testsDone.includes("Breed More Collies")) {
      var libramPossibilities = possibleLibramSummons();
      var decisionMap = new Map();

      if (lib_have($skill(lib_templateObject81 || (lib_templateObject81 = lib_taggedTemplateLiteral(["Summon Candy Heart"])))) && totalDuration(template_string_$item(lib_templateObject82 || (lib_templateObject82 = lib_taggedTemplateLiteral(["green candy heart"])))) <= 0) {
        var _libramPossibilities$, _libramPossibilities$2;

        var probability = (_libramPossibilities$ = (_libramPossibilities$2 = libramPossibilities.get($skill(lib_templateObject83 || (lib_templateObject83 = lib_taggedTemplateLiteral(["Summon Candy Heart"]))))) === null || _libramPossibilities$2 === void 0 ? void 0 : _libramPossibilities$2.get(template_string_$item(lib_templateObject84 || (lib_templateObject84 = lib_taggedTemplateLiteral(["green candy heart"]))))) !== null && _libramPossibilities$ !== void 0 ? _libramPossibilities$ : 0;
        decisionMap.set($skill(lib_templateObject85 || (lib_templateObject85 = lib_taggedTemplateLiteral(["Summon Candy Heart"]))), 3 * probability);
      }

      if (lib_have($skill(lib_templateObject86 || (lib_templateObject86 = lib_taggedTemplateLiteral(["Summon Taffy"])))) && totalDuration(template_string_$item(lib_templateObject87 || (lib_templateObject87 = lib_taggedTemplateLiteral(["pulled blue taffy"])))) < 50) {
        var _libramPossibilities$3, _libramPossibilities$4;

        var _probability = (_libramPossibilities$3 = (_libramPossibilities$4 = libramPossibilities.get($skill(lib_templateObject88 || (lib_templateObject88 = lib_taggedTemplateLiteral(["Summon Taffy"]))))) === null || _libramPossibilities$4 === void 0 ? void 0 : _libramPossibilities$4.get(template_string_$item(lib_templateObject89 || (lib_templateObject89 = lib_taggedTemplateLiteral(["pulled blue taffy"]))))) !== null && _libramPossibilities$3 !== void 0 ? _libramPossibilities$3 : 0;

        decisionMap.set($skill(lib_templateObject90 || (lib_templateObject90 = lib_taggedTemplateLiteral(["Summon Taffy"]))), 1 * _probability);
      }

      if (lib_have($skill(lib_templateObject91 || (lib_templateObject91 = lib_taggedTemplateLiteral(["Summon Love Song"])))) && totalDuration(template_string_$item(lib_templateObject92 || (lib_templateObject92 = lib_taggedTemplateLiteral(["love song of icy revenge"])))) < 20) {
        var _libramPossibilities$5, _libramPossibilities$6;

        var _probability2 = (_libramPossibilities$5 = (_libramPossibilities$6 = libramPossibilities.get($skill(lib_templateObject93 || (lib_templateObject93 = lib_taggedTemplateLiteral(["Summon Love Song"]))))) === null || _libramPossibilities$6 === void 0 ? void 0 : _libramPossibilities$6.get(template_string_$item(lib_templateObject94 || (lib_templateObject94 = lib_taggedTemplateLiteral(["love song of icy revenge"]))))) !== null && _libramPossibilities$5 !== void 0 ? _libramPossibilities$5 : 0;

        var currentWeightValue = clamp(Math.ceil(totalDuration(template_string_$item(lib_templateObject95 || (lib_templateObject95 = lib_taggedTemplateLiteral(["love song of icy revenge"])))) / 2), 0, 10);
        var newWeightValue = clamp(Math.ceil((totalDuration(template_string_$item(lib_templateObject96 || (lib_templateObject96 = lib_taggedTemplateLiteral(["love song of icy revenge"])))) + 5) / 2), 0, 10);
        decisionMap.set($skill(lib_templateObject97 || (lib_templateObject97 = lib_taggedTemplateLiteral(["Summon Love Song"]))), _probability2 * (newWeightValue - currentWeightValue));
      }

      if (lib_have($skill(lib_templateObject98 || (lib_templateObject98 = lib_taggedTemplateLiteral(["Summon BRICKOs"])))) && property_get("_brickoEyeSummons") < 3 && testsDone.includes("Donate Blood")) {
        var _libramPossibilities$7, _libramPossibilities$8;

        var _probability3 = (_libramPossibilities$7 = (_libramPossibilities$8 = libramPossibilities.get($skill(lib_templateObject99 || (lib_templateObject99 = lib_taggedTemplateLiteral(["Summon BRICKOs"]))))) === null || _libramPossibilities$8 === void 0 ? void 0 : _libramPossibilities$8.get(template_string_$item(lib_templateObject100 || (lib_templateObject100 = lib_taggedTemplateLiteral(["BRICKO eye brick"]))))) !== null && _libramPossibilities$7 !== void 0 ? _libramPossibilities$7 : 0;

        if (lib_have(template_string_$familiar(lib_templateObject101 || (lib_templateObject101 = lib_taggedTemplateLiteral(["Shorter-Order Cook"])))) && totalDuration(template_string_$item(lib_templateObject102 || (lib_templateObject102 = lib_taggedTemplateLiteral(["short stack of pancakes"])))) === 0 && availableFights() < 11 - property_get("_shortOrderCookCharge") && potentialFights() >= 11 - property_get("_shortOrderCookCharge")) {
          decisionMap.set($skill(lib_templateObject103 || (lib_templateObject103 = lib_taggedTemplateLiteral(["Summon BRICKOs"]))), _probability3 * 11 / (11 - property_get("_shortOrderCookCharge") - availableFights()));
        }

        if (lib_have(template_string_$familiar(lib_templateObject104 || (lib_templateObject104 = lib_taggedTemplateLiteral(["Garbage Fire"])))) && !lib_have(template_string_$item(lib_templateObject105 || (lib_templateObject105 = lib_taggedTemplateLiteral(["burning paper crane"])))) && !lib_have(template_string_$item(lib_templateObject106 || (lib_templateObject106 = lib_taggedTemplateLiteral(["burning newspaper"])))) && availableFights() < 30 - property_get("garbageFireProgress") && potentialFights() >= 30 - property_get("garbageFireProgress")) {
          var _decisionMap$get;

          var value = 5 / (30 - property_get("garbageFireProgress") - availableFights()) * _probability3;

          var otherBrickoValue = (_decisionMap$get = decisionMap.get($skill(lib_templateObject107 || (lib_templateObject107 = lib_taggedTemplateLiteral(["Summon BRICKOs"]))))) !== null && _decisionMap$get !== void 0 ? _decisionMap$get : 0;

          if (value > otherBrickoValue) {
            decisionMap.set($skill(lib_templateObject108 || (lib_templateObject108 = lib_taggedTemplateLiteral(["Summon BRICKOs"]))), value);
          }
        }
      }

      var bestLibrams = Array.from(decisionMap).sort((a, b) => b[1] - a[1]);

      if (bestLibrams.length === 0) {
        if (!castPriciestLibram()) return;
      } else {
        var decision = bestLibrams[0][0];
        (0,external_kolmafia_namespaceObject.useSkill)(1, decision);
      }
    } else if (!castPriciestLibram()) return;
  }
}
function equalizeMuscle() {
  if ((0,external_kolmafia_namespaceObject.myClass)() === template_string_$class(lib_templateObject109 || (lib_templateObject109 = lib_taggedTemplateLiteral(["Pastamancer"])))) return (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(lib_templateObject110 || (lib_templateObject110 = lib_taggedTemplateLiteral(["Bind Undead Elbow Macaroni"]))));else {
    if (lib_have($effect(lib_templateObject111 || (lib_templateObject111 = lib_taggedTemplateLiteral(["Expert Oiliness"]))))) return true;

    if (!lib_have(template_string_$item(lib_templateObject112 || (lib_templateObject112 = lib_taggedTemplateLiteral(["oil of expertise"]))))) {
      if (!lib_have(template_string_$item(lib_templateObject113 || (lib_templateObject113 = lib_taggedTemplateLiteral(["cherry"])))) && property_get("_monstersMapped") < 2) {
        uniform();
        useDefaultFamiliar();
        setChoice(1387, 3);

        if (property_get("questM23Meatsmith") === "unstarted") {
          (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=meatsmith&action=talk");
          (0,external_kolmafia_namespaceObject.runChoice)(1);
        }

        mapMacro($location(lib_templateObject114 || (lib_templateObject114 = lib_taggedTemplateLiteral(["The Skeleton Store"]))), $monster(lib_templateObject115 || (lib_templateObject115 = lib_taggedTemplateLiteral(["novelty tropical skeleton"]))), combat_Macro.skill($skill(lib_templateObject116 || (lib_templateObject116 = lib_taggedTemplateLiteral(["Use the Force"])))));
      }

      if (!property_get("hasRange")) {
        if (!lib_have(template_string_$item(lib_templateObject117 || (lib_templateObject117 = lib_taggedTemplateLiteral(["Dramatic\u2122 range"]))))) {
          (0,external_kolmafia_namespaceObject.buy)(1, template_string_$item(lib_templateObject118 || (lib_templateObject118 = lib_taggedTemplateLiteral(["Dramatic\u2122 range"]))));
        }

        (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(lib_templateObject119 || (lib_templateObject119 = lib_taggedTemplateLiteral(["Dramatic\u2122 range"]))));
      }

      (0,external_kolmafia_namespaceObject.useSkill)($skill(lib_templateObject120 || (lib_templateObject120 = lib_taggedTemplateLiteral(["Advanced Saucecrafting"]))));
      (0,external_kolmafia_namespaceObject.create)(template_string_$item(lib_templateObject121 || (lib_templateObject121 = lib_taggedTemplateLiteral(["oil of expertise"]))));
    }

    return (0,external_kolmafia_namespaceObject.use)(template_string_$item(lib_templateObject122 || (lib_templateObject122 = lib_taggedTemplateLiteral(["oil of expertise"]))));
  }
}
function equalizeMoxie() {
  if ((0,external_kolmafia_namespaceObject.myClass)() === template_string_$class(lib_templateObject123 || (lib_templateObject123 = lib_taggedTemplateLiteral(["Pastamancer"])))) return (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(lib_templateObject124 || (lib_templateObject124 = lib_taggedTemplateLiteral(["Bind Penne Dreadful"]))));else {
    if (lib_have($effect(lib_templateObject125 || (lib_templateObject125 = lib_taggedTemplateLiteral(["Expert Oiliness"]))))) return true;

    if (!lib_have(template_string_$item(lib_templateObject126 || (lib_templateObject126 = lib_taggedTemplateLiteral(["oil of expertise"]))))) {
      if (!lib_have(template_string_$item(lib_templateObject127 || (lib_templateObject127 = lib_taggedTemplateLiteral(["cherry"])))) && property_get("_monstersMapped") < 2) {
        uniform();
        useDefaultFamiliar();
        setChoice(1387, 3);

        if (property_get("questM23Meatsmith") === "unstarted") {
          (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=meatsmith&action=talk");
          (0,external_kolmafia_namespaceObject.runChoice)(1);
        }

        mapMacro($location(lib_templateObject128 || (lib_templateObject128 = lib_taggedTemplateLiteral(["The Skeleton Store"]))), $monster(lib_templateObject129 || (lib_templateObject129 = lib_taggedTemplateLiteral(["novelty tropical skeleton"]))), combat_Macro.skill($skill(lib_templateObject130 || (lib_templateObject130 = lib_taggedTemplateLiteral(["Use the Force"])))));
      }

      if (!property_get("hasRange")) {
        if (!lib_have(template_string_$item(lib_templateObject131 || (lib_templateObject131 = lib_taggedTemplateLiteral(["Dramatic\u2122 range"]))))) {
          (0,external_kolmafia_namespaceObject.buy)(1, template_string_$item(lib_templateObject132 || (lib_templateObject132 = lib_taggedTemplateLiteral(["Dramatic\u2122 range"]))));
        }

        (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(lib_templateObject133 || (lib_templateObject133 = lib_taggedTemplateLiteral(["Dramatic\u2122 range"]))));
      }

      (0,external_kolmafia_namespaceObject.useSkill)($skill(lib_templateObject134 || (lib_templateObject134 = lib_taggedTemplateLiteral(["Advanced Saucecrafting"]))));
      (0,external_kolmafia_namespaceObject.create)(template_string_$item(lib_templateObject135 || (lib_templateObject135 = lib_taggedTemplateLiteral(["oil of expertise"]))));
    }

    return (0,external_kolmafia_namespaceObject.use)(template_string_$item(lib_templateObject136 || (lib_templateObject136 = lib_taggedTemplateLiteral(["oil of expertise"]))));
  }
} // eslint-disable-next-line libram/verify-constants

var beardBuffs = $effects(lib_templateObject137 || (lib_templateObject137 = lib_taggedTemplateLiteral(["Barbell Moustache, Cowboy Stache, Friendly Chops, Grizzly Beard, Gull-Wing Moustache, Musician's Musician's Moustache, Pointy Wizard Beard, Space Warlord's Beard, Spectacle Moustache, Surrealist's Moustache, Toiletbrush Moustache"])));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__(9628);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(7120);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
;// CONCATENATED MODULE: ./node_modules/libram/dist/Copier.js
function Copier_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Copier = function Copier(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  Copier_classCallCheck(this, Copier);

  this.fightCopy = null;
  this.couldCopy = couldCopy;
  this.prepare = prepare;
  this.canCopy = canCopy;
  this.copiedMonster = copiedMonster;
  if (fightCopy) this.fightCopy = fightCopy;
};
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2016/SourceTerminal.js
var SourceTerminal_templateObject, SourceTerminal_templateObject2, SourceTerminal_templateObject3, SourceTerminal_templateObject4, SourceTerminal_templateObject5, SourceTerminal_templateObject6, SourceTerminal_templateObject7, SourceTerminal_templateObject8, SourceTerminal_templateObject9, SourceTerminal_templateObject10, SourceTerminal_templateObject11, SourceTerminal_templateObject12, SourceTerminal_templateObject13, SourceTerminal_templateObject14, SourceTerminal_templateObject15, SourceTerminal_templateObject16, SourceTerminal_templateObject17, SourceTerminal_templateObject18, SourceTerminal_templateObject19, SourceTerminal_templateObject20, SourceTerminal_templateObject21, SourceTerminal_templateObject22, SourceTerminal_templateObject23, SourceTerminal_templateObject24, SourceTerminal_templateObject25, SourceTerminal_templateObject26, SourceTerminal_templateObject27;

function SourceTerminal_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = SourceTerminal_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function SourceTerminal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SourceTerminal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SourceTerminal_arrayLikeToArray(o, minLen); }

function SourceTerminal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SourceTerminal_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var SourceTerminal_item = template_string_$item(SourceTerminal_templateObject || (SourceTerminal_templateObject = SourceTerminal_taggedTemplateLiteral(["Source terminal"])));
function SourceTerminal_have() {
  return haveInCampground(SourceTerminal_item);
}
/**
 * Buffs that can be acquired from Enhance
 *
 * - Items: +30% Item Drop
 * - Meat: +60% Meat Drop
 * - Init: +50% Initiative
 * - Critical: +10% chance of Critical Hit, +10% chance of Spell Critical Hit
 * - Damage: +5 Prismatic Damage
 * - Substats: +3 Stats Per Fight
 */

var Buffs = {
  Items: $effect(SourceTerminal_templateObject2 || (SourceTerminal_templateObject2 = SourceTerminal_taggedTemplateLiteral(["items.enh"]))),
  Meat: $effect(SourceTerminal_templateObject3 || (SourceTerminal_templateObject3 = SourceTerminal_taggedTemplateLiteral(["meat.enh"]))),
  Init: $effect(SourceTerminal_templateObject4 || (SourceTerminal_templateObject4 = SourceTerminal_taggedTemplateLiteral(["init.enh"]))),
  Critical: $effect(SourceTerminal_templateObject5 || (SourceTerminal_templateObject5 = SourceTerminal_taggedTemplateLiteral(["critical.enh"]))),
  Damage: $effect(SourceTerminal_templateObject6 || (SourceTerminal_templateObject6 = SourceTerminal_taggedTemplateLiteral(["damage.enh"]))),
  Substats: $effect(SourceTerminal_templateObject7 || (SourceTerminal_templateObject7 = SourceTerminal_taggedTemplateLiteral(["substats.enh"])))
};
/**
 * Acquire a buff from the Source Terminal
 * @param buff The buff to acquire
 * @see Buffs
 */

function enhance(buff) {
  if (!Object.values(Buffs).includes(buff)) {
    return false;
  }

  return cliExecute("terminal enhance ".concat(buff.name));
}
/**
 * Rollover buffs that can be acquired from Enquiry
 */

var RolloverBuffs = {
  /** +5 Familiar Weight */
  Familiar: $effect(SourceTerminal_templateObject8 || (SourceTerminal_templateObject8 = SourceTerminal_taggedTemplateLiteral(["familiar.enq"]))),

  /** +25 ML */
  Monsters: $effect(SourceTerminal_templateObject9 || (SourceTerminal_templateObject9 = SourceTerminal_taggedTemplateLiteral(["monsters.enq"]))),

  /** +5 Prismatic Resistance */
  Protect: $effect(SourceTerminal_templateObject10 || (SourceTerminal_templateObject10 = SourceTerminal_taggedTemplateLiteral(["protect.enq"]))),

  /** +100% Muscle, +100% Mysticality, +100% Moxie */
  Stats: $effect(SourceTerminal_templateObject11 || (SourceTerminal_templateObject11 = SourceTerminal_taggedTemplateLiteral(["stats.enq"])))
};
/**
 * Acquire a buff from the Source Terminal
 * @param buff The buff to acquire
 * @see RolloverBuffs
 */

function enquiry(rolloverBuff) {
  if (!Object.values(RolloverBuffs).includes(rolloverBuff)) {
    return false;
  }

  return cliExecute("terminal enquiry ".concat(rolloverBuff.name));
}
/**
 * Skills that can be acquired from Enhance
 */

var Skills = {
  /** Collect Source essence from enemies once per combat */
  Extract: $skill(SourceTerminal_templateObject12 || (SourceTerminal_templateObject12 = SourceTerminal_taggedTemplateLiteral(["Extract"]))),

  /** Stagger and create a wandering monster 1-3 times per day */
  Digitize: $skill(SourceTerminal_templateObject13 || (SourceTerminal_templateObject13 = SourceTerminal_taggedTemplateLiteral(["Digitize"]))),

  /** Stagger and deal 25% of enemy HP in damage once per combat */
  Compress: $skill(SourceTerminal_templateObject14 || (SourceTerminal_templateObject14 = SourceTerminal_taggedTemplateLiteral(["Compress"]))),

  /** Double monster's HP, attack, defence, attacks per round and item drops once per fight and once per day (five in The Source) */
  Duplicate: $skill(SourceTerminal_templateObject15 || (SourceTerminal_templateObject15 = SourceTerminal_taggedTemplateLiteral(["Duplicate"]))),

  /** Causes government agent/Source Agent wanderer next turn once per combat and three times per day */
  Portscan: $skill(SourceTerminal_templateObject16 || (SourceTerminal_templateObject16 = SourceTerminal_taggedTemplateLiteral(["Portscan"]))),

  /** Increase Max MP by 100% and recover 1000 MP once per combat with a 30 turn cooldown */
  Turbo: $skill(SourceTerminal_templateObject17 || (SourceTerminal_templateObject17 = SourceTerminal_taggedTemplateLiteral(["Turbo"])))
};
/**
 * Make a skill available.
 * The Source Terminal can give the player access to two skills at any time
 * @param skill Skill to learn
 * @see Skills
 */

function educate(skills) {
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if (isEqual_default()(skillsArray, getSkills())) return true;

  var _iterator = SourceTerminal_createForOfIteratorHelper(skillsArray),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var skill = _step.value;
      if (!Object.values(Skills).includes(skill)) return false;
      (0,external_kolmafia_namespaceObject.cliExecute)("terminal educate ".concat(skill.name.toLowerCase(), ".edu"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
}
/**
 * Return the Skills currently available from Source Terminal
 */

function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(p => property_get(p)).filter(s => s !== "").map(s => Skill.get(s.slice(0, -4)));
}
function isCurrentSkill(skills) {
  var currentSkills = getSkills();
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every(skill => currentSkills.includes(skill));
}
/**
 * Items that can be generated by the Source Terminal
 */

var Items = new Map([[template_string_$item(SourceTerminal_templateObject18 || (SourceTerminal_templateObject18 = SourceTerminal_taggedTemplateLiteral(["browser cookie"]))), "food.ext"], [template_string_$item(SourceTerminal_templateObject19 || (SourceTerminal_templateObject19 = SourceTerminal_taggedTemplateLiteral(["hacked gibson"]))), "booze.ext"], [template_string_$item(SourceTerminal_templateObject20 || (SourceTerminal_templateObject20 = SourceTerminal_taggedTemplateLiteral(["Source shades"]))), "goggles.ext"], [template_string_$item(SourceTerminal_templateObject21 || (SourceTerminal_templateObject21 = SourceTerminal_taggedTemplateLiteral(["Source terminal GRAM chip"]))), "gram.ext"], [template_string_$item(SourceTerminal_templateObject22 || (SourceTerminal_templateObject22 = SourceTerminal_taggedTemplateLiteral(["Source terminal PRAM chip"]))), "pram.ext"], [template_string_$item(SourceTerminal_templateObject23 || (SourceTerminal_templateObject23 = SourceTerminal_taggedTemplateLiteral(["Source terminal SPAM chip"]))), "spam.ext"], [template_string_$item(SourceTerminal_templateObject24 || (SourceTerminal_templateObject24 = SourceTerminal_taggedTemplateLiteral(["Source terminal CRAM chip"]))), "cram.ext"], [template_string_$item(SourceTerminal_templateObject25 || (SourceTerminal_templateObject25 = SourceTerminal_taggedTemplateLiteral(["Source terminal DRAM chip"]))), "dram.ext"], [template_string_$item(SourceTerminal_templateObject26 || (SourceTerminal_templateObject26 = SourceTerminal_taggedTemplateLiteral(["Source terminal TRAM chip"]))), "tram.ext"], [template_string_$item(SourceTerminal_templateObject27 || (SourceTerminal_templateObject27 = SourceTerminal_taggedTemplateLiteral(["software bug"]))), "familiar.ext"]]);
/**
 * Collect an item from the Source Terminal (up to three times a day)
 * @param item Item to collect
 * @see Items
 */

function extrude(item) {
  var fileName = Items.get(item);
  if (!fileName) return false;
  return cliExecute("terminal extrude ".concat(fileName));
}
/**
 * Return chips currently installed to player's Source Terminal
 */

function getChips() {
  return property_get("sourceTerminalChips").split(",");
}
/**
 * Return number of times digitize was cast today
 */

function getDigitizeUses() {
  return property_get("_sourceTerminalDigitizeUses");
}
/**
 * Return Monster that is currently digitized, else null
 */

function getDigitizeMonster() {
  return property_get("_sourceTerminalDigitizeMonster");
}
/**
 * Return number of digitized monsters encountered since it was last cast
 */

function getDigitizeMonsterCount() {
  return get("_sourceTerminalDigitizeMonsterCount");
}
/**
 * Return maximum number of digitizes player can cast
 */

function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}
/**
 * Returns the current day's number of remaining digitize uses
 */

function getDigitizeUsesRemaining() {
  return getMaximumDigitizeUses() - getDigitizeUses();
}
/**
 * Returns whether the player could theoretically cast Digitize
 */

function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}
function prepareDigitize() {
  if (!isCurrentSkill(Skills.Digitize)) {
    return educate(Skills.Digitize);
  }

  return true;
}
/**
 * Returns whether the player can cast Digitize immediately
 * This only considers whether the player has learned the skill
 * and has sufficient daily casts remaining, not whether they have sufficient MP
 */

function canDigitize() {
  return couldDigitize() && getSkills().includes(Skills.Digitize);
}
var Digitize = new Copier(() => couldDigitize(), () => prepareDigitize(), () => canDigitize(), () => getDigitizeMonster());
/**
 * Return number of times duplicate was cast today
 */

function getDuplicateUses() {
  return get("_sourceTerminalDuplicateUses");
}
/**
 * Return number of times enhance was cast today
 */

function getEnhanceUses() {
  return get("_sourceTerminalEnhanceUses");
}
/**
 * Return number of times portscan was cast today
 */

function getPortscanUses() {
  return get("_sourceTerminalPortscanUses");
}
;// CONCATENATED MODULE: ./src/runstart.ts
var runstart_templateObject, runstart_templateObject2, runstart_templateObject3, runstart_templateObject4, runstart_templateObject5, runstart_templateObject6, runstart_templateObject7, runstart_templateObject8, runstart_templateObject9, runstart_templateObject10, runstart_templateObject11, runstart_templateObject12, runstart_templateObject13, runstart_templateObject14, runstart_templateObject15, runstart_templateObject16, runstart_templateObject17, runstart_templateObject18, runstart_templateObject19, runstart_templateObject20, runstart_templateObject21, runstart_templateObject22, runstart_templateObject23, runstart_templateObject24, runstart_templateObject25, runstart_templateObject26, runstart_templateObject27, runstart_templateObject28, runstart_templateObject29, runstart_templateObject30, runstart_templateObject31, runstart_templateObject32, runstart_templateObject33, runstart_templateObject34, runstart_templateObject35, runstart_templateObject36, runstart_templateObject37, runstart_templateObject38;

function runstart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function juiceBar() {
  (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=chateau&action=chateau_desk2");
  (0,external_kolmafia_namespaceObject.autosell)(1, template_string_$item(runstart_templateObject || (runstart_templateObject = runstart_taggedTemplateLiteral(["gremlin juice"]))));
}

function toot() {
  (0,external_kolmafia_namespaceObject.visitUrl)("tutorial.php?action=toot");
  tryUse(1, template_string_$item(runstart_templateObject2 || (runstart_templateObject2 = runstart_taggedTemplateLiteral(["letter from King Ralph XI"]))));
  tryUse(1, template_string_$item(runstart_templateObject3 || (runstart_templateObject3 = runstart_taggedTemplateLiteral(["pork elf goodies sack"]))));
  (0,external_kolmafia_namespaceObject.autosell)(5, template_string_$item(runstart_templateObject4 || (runstart_templateObject4 = runstart_taggedTemplateLiteral(["baconstone"]))));
  (0,external_kolmafia_namespaceObject.autosell)(5, template_string_$item(runstart_templateObject5 || (runstart_templateObject5 = runstart_taggedTemplateLiteral(["hamethyst"]))));

  if (!lib_have(template_string_$item(runstart_templateObject6 || (runstart_templateObject6 = runstart_taggedTemplateLiteral(["toy accordion"]))))) {
    (0,external_kolmafia_namespaceObject.buy)(1, template_string_$item(runstart_templateObject7 || (runstart_templateObject7 = runstart_taggedTemplateLiteral(["toy accordion"]))));
  }
}

function grimoires() {
  if (!property_get("_grimoireConfiscatorSummons") && lib_have($skill(runstart_templateObject8 || (runstart_templateObject8 = runstart_taggedTemplateLiteral(["Summon Confiscated Things"]))))) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(runstart_templateObject9 || (runstart_templateObject9 = runstart_taggedTemplateLiteral(["Summon Confiscated Things"]))));
    template_string_$items(runstart_templateObject10 || (runstart_templateObject10 = runstart_taggedTemplateLiteral(["glow-in-the-dark necklace, \"KICK ME\" sign, LCD game: Burger Belt, LCD game: Food Eater, LCD game: Garbage River"]))).forEach(item => (0,external_kolmafia_namespaceObject.autosell)(1, item));
  }

  if (!property_get("grimoire2Summons") && lib_have($skill(runstart_templateObject11 || (runstart_templateObject11 = runstart_taggedTemplateLiteral(["Summon Tasteful Items"]))))) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(runstart_templateObject12 || (runstart_templateObject12 = runstart_taggedTemplateLiteral(["Summon Tasteful Items"]))));
    template_string_$items(runstart_templateObject13 || (runstart_templateObject13 = runstart_taggedTemplateLiteral(["black-and-blue light, blue plasma ball, cheap studded belt, flavored foot massage oil, foam dart, Loudmouth Larry Lamprey, personal massager, personalized coffee mug, stick-on eyebrow piercing"]))).forEach(item => (0,external_kolmafia_namespaceObject.autosell)(5, item));
  }

  if (!property_get("grimoire3Summons") && lib_have($skill(runstart_templateObject14 || (runstart_templateObject14 = runstart_taggedTemplateLiteral(["Summon Alice's Army Cards"]))))) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(runstart_templateObject15 || (runstart_templateObject15 = runstart_taggedTemplateLiteral(["Summon Alice's Army Cards"]))));
    (0,external_kolmafia_namespaceObject.buy)($coinmaster(runstart_templateObject16 || (runstart_templateObject16 = runstart_taggedTemplateLiteral(["Game Shoppe Snacks"]))), 1, template_string_$item(runstart_templateObject17 || (runstart_templateObject17 = runstart_taggedTemplateLiteral(["tobiko marble soda"]))));
  }
}

function setSettings() {
  educate([$skill(runstart_templateObject18 || (runstart_templateObject18 = runstart_taggedTemplateLiteral(["Extract"]))), $skill(runstart_templateObject19 || (runstart_templateObject19 = runstart_taggedTemplateLiteral(["Portscan"])))]);
  setClan(property_get("phccs_mainClan", "Alliance From Heck"));
}

function getTurns() {
  if ((0,external_kolmafia_namespaceObject.myLevel)() === 1 && !(0,external_kolmafia_namespaceObject.mySpleenUse)()) {
    while (property_get("_universeCalculated") < property_get("skillLevel144")) {
      (0,external_kolmafia_namespaceObject.cliExecute)("numberology 69");
    }
  }

  if (!property_get("_borrowedTimeUsed")) {
    if (!lib_have(template_string_$item(runstart_templateObject20 || (runstart_templateObject20 = runstart_taggedTemplateLiteral(["borrowed time"]))))) {
      (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(runstart_templateObject21 || (runstart_templateObject21 = runstart_taggedTemplateLiteral(["borrowed time"]))));
    }

    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(runstart_templateObject22 || (runstart_templateObject22 = runstart_taggedTemplateLiteral(["borrowed time"]))));
  }
}

function prepGear() {
  if (!lib_have(template_string_$item(runstart_templateObject23 || (runstart_templateObject23 = runstart_taggedTemplateLiteral(["dromedary drinking helmet"]))))) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(runstart_templateObject24 || (runstart_templateObject24 = runstart_taggedTemplateLiteral(["Melodramedary"]))));

    if (!lib_have(template_string_$item(runstart_templateObject25 || (runstart_templateObject25 = runstart_taggedTemplateLiteral(["box of Familiar Jacks"]))))) {
      (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(runstart_templateObject26 || (runstart_templateObject26 = runstart_taggedTemplateLiteral(["box of Familiar Jacks"]))));
    }

    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(runstart_templateObject27 || (runstart_templateObject27 = runstart_taggedTemplateLiteral(["box of Familiar Jacks"]))));
    (0,external_kolmafia_namespaceObject.cliExecute)("mummery myst");
  }

  if (!lib_have(template_string_$item(runstart_templateObject28 || (runstart_templateObject28 = runstart_taggedTemplateLiteral(["your cowboy boots"]))))) {
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_right&action=townright_ltt");
    (0,external_kolmafia_namespaceObject.runChoice)(5);
  }

  if (lib_have(template_string_$item(runstart_templateObject29 || (runstart_templateObject29 = runstart_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))) && !property_get("_saberMod")) {
    (0,external_kolmafia_namespaceObject.visitUrl)("main.php?action=may4");
    (0,external_kolmafia_namespaceObject.runChoice)(4);
  }

  if (!lib_have(template_string_$item(runstart_templateObject30 || (runstart_templateObject30 = runstart_taggedTemplateLiteral(["gold detective badge"]))))) {
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_precinct");
  }

  if (lib_have(template_string_$item(runstart_templateObject31 || (runstart_templateObject31 = runstart_taggedTemplateLiteral(["GameInformPowerDailyPro magazine"]))))) {
    (0,external_kolmafia_namespaceObject.visitUrl)("inv_use.php?whichitem=6174&confirm=Yep.");
  }

  if ((0,external_kolmafia_namespaceObject.eudoraItem)() === template_string_$item(runstart_templateObject32 || (runstart_templateObject32 = runstart_taggedTemplateLiteral(["GameInformPowerDailyPro subscription card"])))) {
    if (!lib_have(template_string_$item(runstart_templateObject33 || (runstart_templateObject33 = runstart_taggedTemplateLiteral(["scroll of Puddingskin"])))) && !lib_have(template_string_$item(runstart_templateObject34 || (runstart_templateObject34 = runstart_taggedTemplateLiteral(["dungeoneering kit"]))))) {
      (0,external_kolmafia_namespaceObject.visitUrl)("adventure.php?snarfblat=319");
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(runstart_templateObject35 || (runstart_templateObject35 = runstart_taggedTemplateLiteral(["dungeoneering kit"]))));
    }
  }

  if (!property_get("_floundryItemCreated")) {
    (0,external_kolmafia_namespaceObject.cliExecute)("acquire codpiece");
  }

  if (!lib_have(template_string_$item(runstart_templateObject36 || (runstart_templateObject36 = runstart_taggedTemplateLiteral(["pantogram pants"]))))) {
    (0,external_kolmafia_namespaceObject.cliExecute)("pantogram mysticality|hot|drops of blood|some self-respect|your dreams|silent");
  }

  if (property_get("boomBoxSong") !== "Total Eclipse of Your Meat") {
    (0,external_kolmafia_namespaceObject.cliExecute)("boombox meat");
  }

  (0,external_kolmafia_namespaceObject.cliExecute)("Briefcase.ash enchantment weapon -combat");
}

function vote() {
  if (!property_get("_voteToday")) {
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
    (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=2&local%5B%5D=3");
  }
}

function deck() {
  if (!property_get("_deckCardsDrawn")) {
    (0,external_kolmafia_namespaceObject.cliExecute)("cheat ancestral; cheat island; cheat 1952");
    (0,external_kolmafia_namespaceObject.autosell)(1, template_string_$item(runstart_templateObject37 || (runstart_templateObject37 = runstart_taggedTemplateLiteral(["1952 Mickey Mantle card"]))));
    (0,external_kolmafia_namespaceObject.useSkill)(2, $skill(runstart_templateObject38 || (runstart_templateObject38 = runstart_taggedTemplateLiteral(["Ancestral Recall"]))));
  }
}

function scavenge() {
  if (!property_get("_daycareGymScavenges")) {
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
    (0,external_kolmafia_namespaceObject.runChoice)(3);
    (0,external_kolmafia_namespaceObject.runChoice)(2);
    (0,external_kolmafia_namespaceObject.runChoice)(5);
    (0,external_kolmafia_namespaceObject.runChoice)(4);
  }
}

function runStart() {
  setSettings();
  toot();
  getTurns();
  deck();
  juiceBar();
  vote();
  grimoires();
  prepGear();
  scavenge();
}
;// CONCATENATED MODULE: ./src/coil wire.ts
var coil_wire_templateObject, coil_wire_templateObject2, coil_wire_templateObject3, coil_wire_templateObject4, coil_wire_templateObject5, coil_wire_templateObject6, coil_wire_templateObject7, coil_wire_templateObject8, coil_wire_templateObject9, coil_wire_templateObject10, coil_wire_templateObject11, coil_wire_templateObject12;

function coil_wire_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function coil_wire_toConsumableArray(arr) { return coil_wire_arrayWithoutHoles(arr) || coil_wire_iterableToArray(arr) || coil_wire_unsupportedIterableToArray(arr) || coil_wire_nonIterableSpread(); }

function coil_wire_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function coil_wire_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return coil_wire_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return coil_wire_arrayLikeToArray(o, minLen); }

function coil_wire_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function coil_wire_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return coil_wire_arrayLikeToArray(arr); }

function coil_wire_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








function firstFights() {
  // eslint-disable-next-line libram/verify-constants
  uniform.apply(void 0, coil_wire_toConsumableArray(template_string_$items(coil_wire_templateObject || (coil_wire_templateObject = coil_wire_taggedTemplateLiteral(["protonic accelerator pack, Daylight Shavings Helmet"])))));
  useDefaultFamiliar();
  fightSausageIfAble($location(coil_wire_templateObject2 || (coil_wire_templateObject2 = coil_wire_taggedTemplateLiteral(["Noob Cave"]))), combat_Macro.skill($skill(coil_wire_templateObject3 || (coil_wire_templateObject3 = coil_wire_taggedTemplateLiteral(["Micrometeorite"])))).attack().repeat());

  if (lib_have(template_string_$item(coil_wire_templateObject4 || (coil_wire_templateObject4 = coil_wire_taggedTemplateLiteral(["magical sausage casing"]))))) {
    (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(coil_wire_templateObject5 || (coil_wire_templateObject5 = coil_wire_taggedTemplateLiteral(["magical sausage"]))));
  }

  if (lib_have(template_string_$item(coil_wire_templateObject6 || (coil_wire_templateObject6 = coil_wire_taggedTemplateLiteral(["magical sausage"]))))) {
    (0,external_kolmafia_namespaceObject.eat)(1, template_string_$item(coil_wire_templateObject7 || (coil_wire_templateObject7 = coil_wire_taggedTemplateLiteral(["magical sausage"]))));
  }

  var ghostLocation = property_get("ghostLocation");

  if (ghostLocation) {
    uniform.apply(void 0, coil_wire_toConsumableArray(template_string_$items(coil_wire_templateObject8 || (coil_wire_templateObject8 = coil_wire_taggedTemplateLiteral(["latte lovers member's mug, protonic accelerator pack"])))));
    useDefaultFamiliar();
    advMacro(ghostLocation, combat_Macro.delevel().easyFight().trySkill($skill(coil_wire_templateObject9 || (coil_wire_templateObject9 = coil_wire_taggedTemplateLiteral(["Shoot Ghost"])))).trySkill($skill(coil_wire_templateObject10 || (coil_wire_templateObject10 = coil_wire_taggedTemplateLiteral(["Shoot Ghost"])))).trySkill($skill(coil_wire_templateObject11 || (coil_wire_templateObject11 = coil_wire_taggedTemplateLiteral(["Shoot Ghost"])))).trySkill($skill(coil_wire_templateObject12 || (coil_wire_templateObject12 = coil_wire_taggedTemplateLiteral(["Trap Ghost"])))));
  }
}

function coilWire() {
  runStart();
  firstFights();
  wireOutfit();
  return 60;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2019/BeachComb.js
var BeachComb_templateObject, BeachComb_templateObject2, BeachComb_templateObject3, BeachComb_templateObject4, BeachComb_templateObject5, BeachComb_templateObject6, BeachComb_templateObject7, BeachComb_templateObject8, BeachComb_templateObject9, BeachComb_templateObject10, BeachComb_templateObject11;

function BeachComb_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var headBuffs = [$effect(BeachComb_templateObject || (BeachComb_templateObject = BeachComb_taggedTemplateLiteral(["Hot-Headed"]))), $effect(BeachComb_templateObject2 || (BeachComb_templateObject2 = BeachComb_taggedTemplateLiteral(["Cold as Nice"]))), $effect(BeachComb_templateObject3 || (BeachComb_templateObject3 = BeachComb_taggedTemplateLiteral(["A Brush with Grossness"]))), $effect(BeachComb_templateObject4 || (BeachComb_templateObject4 = BeachComb_taggedTemplateLiteral(["Does It Have a Skull In There??"]))), $effect(BeachComb_templateObject5 || (BeachComb_templateObject5 = BeachComb_taggedTemplateLiteral(["Oiled, Slick"]))), $effect(BeachComb_templateObject6 || (BeachComb_templateObject6 = BeachComb_taggedTemplateLiteral(["Lack of Body-Building"]))), $effect(BeachComb_templateObject7 || (BeachComb_templateObject7 = BeachComb_taggedTemplateLiteral(["We're All Made of Starfish"]))), $effect(BeachComb_templateObject8 || (BeachComb_templateObject8 = BeachComb_taggedTemplateLiteral(["Pomp & Circumsands"]))), $effect(BeachComb_templateObject9 || (BeachComb_templateObject9 = BeachComb_taggedTemplateLiteral(["Resting Beach Face"]))), $effect(BeachComb_templateObject10 || (BeachComb_templateObject10 = BeachComb_taggedTemplateLiteral(["Do I Know You From Somewhere?"]))), $effect(BeachComb_templateObject11 || (BeachComb_templateObject11 = BeachComb_taggedTemplateLiteral(["You Learned Something Maybe!"])))];
function tryHead(effect) {
  if (!headBuffs.includes(effect)) return false;
  var headNumber = 1 + headBuffs.indexOf(effect);
  if (getString("_beachHeadsUsed").split(",").includes(headNumber.toString())) return false;
  (0,external_kolmafia_namespaceObject.cliExecute)(effect.default);
  return lib_have(effect);
}
;// CONCATENATED MODULE: ./src/familiarweight.ts
var familiarweight_templateObject, familiarweight_templateObject2, familiarweight_templateObject3, familiarweight_templateObject4, familiarweight_templateObject5, familiarweight_templateObject6, familiarweight_templateObject7, familiarweight_templateObject8, familiarweight_templateObject9, familiarweight_templateObject10, familiarweight_templateObject11, familiarweight_templateObject12, familiarweight_templateObject13, familiarweight_templateObject14, familiarweight_templateObject15, familiarweight_templateObject16, familiarweight_templateObject17, familiarweight_templateObject18, familiarweight_templateObject19, familiarweight_templateObject20, familiarweight_templateObject21, familiarweight_templateObject22, familiarweight_templateObject23, familiarweight_templateObject24, familiarweight_templateObject25, familiarweight_templateObject26, familiarweight_templateObject27, familiarweight_templateObject28, familiarweight_templateObject29, familiarweight_templateObject30, familiarweight_templateObject31, familiarweight_templateObject32, familiarweight_templateObject33, familiarweight_templateObject34, familiarweight_templateObject35, familiarweight_templateObject36, familiarweight_templateObject37, familiarweight_templateObject38, familiarweight_templateObject39;

function familiarweight_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function universalWeightBuffs() {
  lib_ensureEffect($effect(familiarweight_templateObject || (familiarweight_templateObject = familiarweight_taggedTemplateLiteral(["Empathy"]))));
  lib_ensureEffect($effect(familiarweight_templateObject2 || (familiarweight_templateObject2 = familiarweight_taggedTemplateLiteral(["Leash of Linguini"]))));
  lib_ensureEffect($effect(familiarweight_templateObject3 || (familiarweight_templateObject3 = familiarweight_taggedTemplateLiteral(["Blood Bond"]))));
  lib_ensureEffect($effect(familiarweight_templateObject4 || (familiarweight_templateObject4 = familiarweight_taggedTemplateLiteral(["Billiards Belligerence"]))));
  if (!property_get("_clanFortuneBuffUsed")) (0,external_kolmafia_namespaceObject.cliExecute)("fortune buff familiar");

  if (!property_get("_freePillKeeperUsed")) {
    (0,external_kolmafia_namespaceObject.cliExecute)("pillkeeper familiar");
  }

  if (!lib_have($effect(familiarweight_templateObject5 || (familiarweight_templateObject5 = familiarweight_taggedTemplateLiteral(["Puzzle Champ"]))))) {
    (0,external_kolmafia_namespaceObject.cliExecute)("witchess");
  }

  tryHead($effect(familiarweight_templateObject6 || (familiarweight_templateObject6 = familiarweight_taggedTemplateLiteral(["Do I Know You From Somewhere?"]))));
  if (lib_have(template_string_$item(familiarweight_templateObject7 || (familiarweight_templateObject7 = familiarweight_taggedTemplateLiteral(["green candy heart"]))))) lib_ensureEffect($effect(familiarweight_templateObject8 || (familiarweight_templateObject8 = familiarweight_taggedTemplateLiteral(["Heart of Green"]))));
}

function gearAndUncommonBuffs() {
  if (!property_get("_clanFortuneBuffUsed")) (0,external_kolmafia_namespaceObject.cliExecute)("fortune buff familiar");
  if (lib_have(template_string_$item(familiarweight_templateObject9 || (familiarweight_templateObject9 = familiarweight_taggedTemplateLiteral(["burning newspaper"]))))) (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(familiarweight_templateObject10 || (familiarweight_templateObject10 = familiarweight_taggedTemplateLiteral(["burning paper crane"]))));
  if (lib_have(template_string_$item(familiarweight_templateObject11 || (familiarweight_templateObject11 = familiarweight_taggedTemplateLiteral(["short stack of pancakes"]))))) lib_ensureEffect($effect(familiarweight_templateObject12 || (familiarweight_templateObject12 = familiarweight_taggedTemplateLiteral(["Shortly Stacked"]))));

  if (!lib_have(template_string_$item(familiarweight_templateObject13 || (familiarweight_templateObject13 = familiarweight_taggedTemplateLiteral(["cracker"]))))) {
    if (property_get("tomeSummons") < 3) {
      (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(familiarweight_templateObject14 || (familiarweight_templateObject14 = familiarweight_taggedTemplateLiteral(["Exotic Parrot"]))));
      (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(familiarweight_templateObject15 || (familiarweight_templateObject15 = familiarweight_taggedTemplateLiteral(["box of Familiar Jacks"]))));
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(familiarweight_templateObject16 || (familiarweight_templateObject16 = familiarweight_taggedTemplateLiteral(["box of Familiar Jacks"]))));
    } else if (lib_have(template_string_$familiar(familiarweight_templateObject17 || (familiarweight_templateObject17 = familiarweight_taggedTemplateLiteral(["Baby Bugged Bugbear"]))))) {
      (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(familiarweight_templateObject18 || (familiarweight_templateObject18 = familiarweight_taggedTemplateLiteral(["Baby Bugged Bugbear"]))));
      (0,external_kolmafia_namespaceObject.visitUrl)("arena.php");
    }
  }
}

function familiarStuff() {
  while (property_get("_shortOrderCookCharge") < 11 && availableFights() >= 11 - property_get("_shortOrderCookCharge")) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(familiarweight_templateObject19 || (familiarweight_templateObject19 = familiarweight_taggedTemplateLiteral(["Shorter-Order Cook"]))));
    uniform();
    combat_Macro.defaultKill().setAutoAttack();

    if (5 - fightsDone() > 0) {
      fightPiece($monster(familiarweight_templateObject20 || (familiarweight_templateObject20 = familiarweight_taggedTemplateLiteral(["Witchess Bishop"]))));
    } else {
      (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(familiarweight_templateObject21 || (familiarweight_templateObject21 = familiarweight_taggedTemplateLiteral(["BRICKO ooze"]))));
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(familiarweight_templateObject22 || (familiarweight_templateObject22 = familiarweight_taggedTemplateLiteral(["BRICKO ooze"]))));
    }
  }

  while (property_get("garbageFireProgress") < 30 && availableFights() >= 30 - property_get("garbageFireProgress")) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(familiarweight_templateObject23 || (familiarweight_templateObject23 = familiarweight_taggedTemplateLiteral(["Garbage Fire"]))));
    uniform();
    combat_Macro.defaultKill().setAutoAttack();

    if (5 - fightsDone() > 0) {
      fightPiece($monster(familiarweight_templateObject24 || (familiarweight_templateObject24 = familiarweight_taggedTemplateLiteral(["Witchess Bishop"]))));
    } else {
      (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(familiarweight_templateObject25 || (familiarweight_templateObject25 = familiarweight_taggedTemplateLiteral(["BRICKO ooze"]))));
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(familiarweight_templateObject26 || (familiarweight_templateObject26 = familiarweight_taggedTemplateLiteral(["BRICKO ooze"]))));
    }
  }
}

function takeAShower() {
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(familiarweight_templateObject27 || (familiarweight_templateObject27 = familiarweight_taggedTemplateLiteral(["none"]))));
  horse("dark");
  uniform();
  setChoice(1387, 3);

  if (property_get("_meteorShowerUses") < 5 && !lib_have($effect(familiarweight_templateObject28 || (familiarweight_templateObject28 = familiarweight_taggedTemplateLiteral(["Meteor Showered"]))))) {
    advMacroAA($location(familiarweight_templateObject29 || (familiarweight_templateObject29 = familiarweight_taggedTemplateLiteral(["The Dire Warren"]))), combat_Macro.skill($skill(familiarweight_templateObject30 || (familiarweight_templateObject30 = familiarweight_taggedTemplateLiteral(["Meteor Shower"])))).skill($skill(familiarweight_templateObject31 || (familiarweight_templateObject31 = familiarweight_taggedTemplateLiteral(["Use the Force"])))), 1, () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("choice.php");
      (0,external_kolmafia_namespaceObject.runChoice)(3);
    });
    _set("_meteorShowerUses", 1 + property_get("_meteorShowerUses"));
  }
}

function testPrep() {
  famweightOutfit();
  if (lib_have(template_string_$item(familiarweight_templateObject32 || (familiarweight_templateObject32 = familiarweight_taggedTemplateLiteral(["silver face paint"]))))) lib_ensureEffect($effect(familiarweight_templateObject33 || (familiarweight_templateObject33 = familiarweight_taggedTemplateLiteral(["Robot Friends"]))));

  while (lib_have(template_string_$item(familiarweight_templateObject34 || (familiarweight_templateObject34 = familiarweight_taggedTemplateLiteral(["love song of icy revenge"])))) && !lib_have($effect(familiarweight_templateObject35 || (familiarweight_templateObject35 = familiarweight_taggedTemplateLiteral(["Cold Hearted"]))), 20)) {
    (0,external_kolmafia_namespaceObject.use)(template_string_$item(familiarweight_templateObject36 || (familiarweight_templateObject36 = familiarweight_taggedTemplateLiteral(["love song of icy revenge"]))));
  }

  while (lib_have(template_string_$item(familiarweight_templateObject37 || (familiarweight_templateObject37 = familiarweight_taggedTemplateLiteral(["pulled blue taffy"])))) && !lib_have($effect(familiarweight_templateObject38 || (familiarweight_templateObject38 = familiarweight_taggedTemplateLiteral(["Blue Swayed"]))), 50)) {
    (0,external_kolmafia_namespaceObject.use)(template_string_$item(familiarweight_templateObject39 || (familiarweight_templateObject39 = familiarweight_taggedTemplateLiteral(["pulled blue taffy"]))));
  }
}

function familiarTest() {
  universalWeightBuffs();
  familiarStuff();
  gearAndUncommonBuffs();
  takeAShower();
  testPrep();
  return 60 - Math.floor(((0,external_kolmafia_namespaceObject.familiarWeight)((0,external_kolmafia_namespaceObject.myFamiliar)()) + (0,external_kolmafia_namespaceObject.weightAdjustment)()) / 5);
}
;// CONCATENATED MODULE: ./src/hotres.ts
var hotres_templateObject, hotres_templateObject2, hotres_templateObject3, hotres_templateObject4, hotres_templateObject5, hotres_templateObject6, hotres_templateObject7, hotres_templateObject8, hotres_templateObject9, hotres_templateObject10, hotres_templateObject11, hotres_templateObject12, hotres_templateObject13, hotres_templateObject14, hotres_templateObject15, hotres_templateObject16, hotres_templateObject17, hotres_templateObject18, hotres_templateObject19, hotres_templateObject20, hotres_templateObject21, hotres_templateObject22, hotres_templateObject23, hotres_templateObject24, hotres_templateObject25, hotres_templateObject26, hotres_templateObject27, hotres_templateObject28, hotres_templateObject29, hotres_templateObject30, hotres_templateObject31, hotres_templateObject32, hotres_templateObject33, hotres_templateObject34, hotres_templateObject35, hotres_templateObject36, hotres_templateObject37, hotres_templateObject38, hotres_templateObject39, hotres_templateObject40, hotres_templateObject41, hotres_templateObject42, hotres_templateObject43, hotres_templateObject44, hotres_templateObject45;

function hotres_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var predictor = () => 60 - (0,external_kolmafia_namespaceObject.numericModifier)("hot resistance");

function castBuffs() {
  universalWeightBuffs();
  tryHead($effect(hotres_templateObject || (hotres_templateObject = hotres_taggedTemplateLiteral(["Hot-Headed"]))));
  lib_ensureEffect($effect(hotres_templateObject2 || (hotres_templateObject2 = hotres_taggedTemplateLiteral(["Elemental Saucesphere"]))));
  lib_ensureEffect($effect(hotres_templateObject3 || (hotres_templateObject3 = hotres_taggedTemplateLiteral(["Astral Shell"]))));
  lib_ensureEffect($effect(hotres_templateObject4 || (hotres_templateObject4 = hotres_taggedTemplateLiteral(["Feeling Peaceful"]))));

  if (lib_have(template_string_$item(hotres_templateObject5 || (hotres_templateObject5 = hotres_taggedTemplateLiteral(["scroll of Protection from Bad Stuff"]))))) {
    lib_ensureEffect($effect(hotres_templateObject6 || (hotres_templateObject6 = hotres_taggedTemplateLiteral(["Protection from Bad Stuff"]))));
  }

  if (!lib_have(template_string_$item(hotres_templateObject7 || (hotres_templateObject7 = hotres_taggedTemplateLiteral(["meteorite guard"])))) && lib_have(template_string_$item(hotres_templateObject8 || (hotres_templateObject8 = hotres_taggedTemplateLiteral(["metal meteoroid"]))))) {
    (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(hotres_templateObject9 || (hotres_templateObject9 = hotres_taggedTemplateLiteral(["meteorite guard"]))));
  }
}

function thisFireIsOutOfControl() {
  if (property_get("_saberForceUses") < 5 && !lib_have($effect(hotres_templateObject10 || (hotres_templateObject10 = hotres_taggedTemplateLiteral(["Fireproof Foam Suit"]))))) {
    uniform([template_string_$item(hotres_templateObject11 || (hotres_templateObject11 = hotres_taggedTemplateLiteral(["industrial fire extinguisher"]))), $slot(hotres_templateObject12 || (hotres_templateObject12 = hotres_taggedTemplateLiteral(["off-hand"])))]);
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(hotres_templateObject13 || (hotres_templateObject13 = hotres_taggedTemplateLiteral(["none"]))));
    setChoice(1387, 3);
    advMacroAA($location(hotres_templateObject14 || (hotres_templateObject14 = hotres_taggedTemplateLiteral(["The Dire Warren"]))), combat_Macro.skill($skill(hotres_templateObject15 || (hotres_templateObject15 = hotres_taggedTemplateLiteral(["Fire Extinguisher: Foam Yourself"])))).skill($skill(hotres_templateObject16 || (hotres_templateObject16 = hotres_taggedTemplateLiteral(["Use the Force"])))), () => !lib_have($effect(hotres_templateObject17 || (hotres_templateObject17 = hotres_taggedTemplateLiteral(["Fireproof Foam Suit"])))), () => {
      if ((0,external_kolmafia_namespaceObject.handlingChoice)()) (0,external_kolmafia_namespaceObject.runChoice)(-1);
    });
  }
}

function deepDarkVisions() {
  horse("pale");
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(hotres_templateObject18 || (hotres_templateObject18 = hotres_taggedTemplateLiteral(["Exotic Parrot"]))));

  if (!lib_have(template_string_$item(hotres_templateObject19 || (hotres_templateObject19 = hotres_taggedTemplateLiteral(["astral pet sweater"])))) && property_get("tomeSummons") < 3) {
    (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(hotres_templateObject20 || (hotres_templateObject20 = hotres_taggedTemplateLiteral(["box of Familiar Jacks"]))));
    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(hotres_templateObject21 || (hotres_templateObject21 = hotres_taggedTemplateLiteral(["box of Familiar Jacks"]))));
  }

  (0,external_kolmafia_namespaceObject.cliExecute)("retrocape vampire hold");
  Outfit.doYourBest(new Map([[$slot(hotres_templateObject22 || (hotres_templateObject22 = hotres_taggedTemplateLiteral(["hat"]))), template_string_$item(hotres_templateObject23 || (hotres_templateObject23 = hotres_taggedTemplateLiteral(["Iunion Crown"])))], [$slot(hotres_templateObject24 || (hotres_templateObject24 = hotres_taggedTemplateLiteral(["shirt"]))), template_string_$items(hotres_templateObject25 || (hotres_templateObject25 = hotres_taggedTemplateLiteral(["denim jacket"])))], [$slot(hotres_templateObject26 || (hotres_templateObject26 = hotres_taggedTemplateLiteral(["back"]))), template_string_$item(hotres_templateObject27 || (hotres_templateObject27 = hotres_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [$slot(hotres_templateObject28 || (hotres_templateObject28 = hotres_taggedTemplateLiteral(["weapon"]))), template_string_$item(hotres_templateObject29 || (hotres_templateObject29 = hotres_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [$slot(hotres_templateObject30 || (hotres_templateObject30 = hotres_taggedTemplateLiteral(["off-hand"]))), template_string_$item(hotres_templateObject31 || (hotres_templateObject31 = hotres_taggedTemplateLiteral(["familiar scrapbook"])))], [$slot(hotres_templateObject32 || (hotres_templateObject32 = hotres_taggedTemplateLiteral(["pants"]))), template_string_$item(hotres_templateObject33 || (hotres_templateObject33 = hotres_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [$slot(hotres_templateObject34 || (hotres_templateObject34 = hotres_taggedTemplateLiteral(["familiar"]))), template_string_$items(hotres_templateObject35 || (hotres_templateObject35 = hotres_taggedTemplateLiteral(["cracker"])))], [$slot(hotres_templateObject36 || (hotres_templateObject36 = hotres_taggedTemplateLiteral(["acc1"]))), template_string_$item(hotres_templateObject37 || (hotres_templateObject37 = hotres_taggedTemplateLiteral(["your cowboy boots"])))]]), template_string_$familiar(hotres_templateObject38 || (hotres_templateObject38 = hotres_taggedTemplateLiteral(["Exotic Parrot"])))).dress();

  while (lib_have($skill(hotres_templateObject39 || (hotres_templateObject39 = hotres_taggedTemplateLiteral(["Deep Dark Visions"])))) && (0,external_kolmafia_namespaceObject.haveEffect)($effect(hotres_templateObject40 || (hotres_templateObject40 = hotres_taggedTemplateLiteral(["Visions of the Deep Dark Deeps"])))) < 30 && (lib_have(template_string_$item(hotres_templateObject41 || (hotres_templateObject41 = hotres_taggedTemplateLiteral(["magical sausage casing"])))) || (0,external_kolmafia_namespaceObject.myMp)() >= 100)) {
    while ((0,external_kolmafia_namespaceObject.myHp)() < (0,external_kolmafia_namespaceObject.myMaxhp)()) {
      ensureMp(20);
      (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(hotres_templateObject42 || (hotres_templateObject42 = hotres_taggedTemplateLiteral(["Cannelloni Cocoon"]))));
    }

    ensureMp(100);

    if (Math.round((0,external_kolmafia_namespaceObject.numericModifier)("spooky resistance")) < 10) {
      lib_ensureEffect($effect(hotres_templateObject43 || (hotres_templateObject43 = hotres_taggedTemplateLiteral(["Does It Have a Skull In There??"]))));

      if (Math.round((0,external_kolmafia_namespaceObject.numericModifier)("spooky resistance")) < 10) {
        throw "Not enough spooky res for Deep Dark Visions.";
      }
    }

    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(hotres_templateObject44 || (hotres_templateObject44 = hotres_taggedTemplateLiteral(["Deep Dark Visions"]))));
    ensureMp(100);
  }
}

function hotres_testPrep() {
  hotresOutfit();
  var improvements = [() => {
    while ((0,external_kolmafia_namespaceObject.getFuel)() < 37) {
      fuelUp();
    }

    (0,external_kolmafia_namespaceObject.cliExecute)("asdonmartin drive safely");
  }, () => lib_ensureEffect($effect(hotres_templateObject45 || (hotres_templateObject45 = hotres_taggedTemplateLiteral(["Amazing"]))))];

  for (var _i = 0, _improvements = improvements; _i < _improvements.length; _i++) {
    var improvement = _improvements[_i];
    if (predictor() > 1) improvement();
  }
}

function hotTest() {
  castBuffs();
  thisFireIsOutOfControl();
  deepDarkVisions();
  hotres_testPrep();
  return predictor();
}
;// CONCATENATED MODULE: ./src/item.ts
var item_templateObject, item_templateObject2, item_templateObject3, item_templateObject4, item_templateObject5, item_templateObject6, item_templateObject7, item_templateObject8, item_templateObject9, item_templateObject10, item_templateObject11, item_templateObject12, item_templateObject13, item_templateObject14, item_templateObject15, item_templateObject16, item_templateObject17, item_templateObject18, item_templateObject19, item_templateObject20, item_templateObject21, item_templateObject22, item_templateObject23, item_templateObject24, item_templateObject25, item_templateObject26, item_templateObject27, item_templateObject28, item_templateObject29, item_templateObject30, item_templateObject31, item_templateObject32, item_templateObject33;

function item_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var item_predictor = () => 60 - Math.floor((0,external_kolmafia_namespaceObject.numericModifier)("item drop") / 30 + 0.001) - Math.floor((0,external_kolmafia_namespaceObject.numericModifier)("booze drop") / 15 + 0.001);

function prelude() {
  horse("dark");
}

function item_castBuffs() {
  if (!lib_have($effect(item_templateObject || (item_templateObject = item_taggedTemplateLiteral(["Synthesis: Collection"]))))) synthItem();
  (0,external_kolmafia_namespaceObject.cliExecute)("shrug ode");
  lib_ensureEffect($effect(item_templateObject2 || (item_templateObject2 = item_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))));
  lib_ensureEffect($effect(item_templateObject3 || (item_templateObject3 = item_taggedTemplateLiteral(["The Spirit of Taking"]))));
  lib_ensureEffect($effect(item_templateObject4 || (item_templateObject4 = item_taggedTemplateLiteral(["items.enh"]))));

  if ((0,external_kolmafia_namespaceObject.getWorkshed)() === template_string_$item(item_templateObject5 || (item_templateObject5 = item_taggedTemplateLiteral(["Asdon Martin keyfob"]))) && !lib_have($effect(item_templateObject6 || (item_templateObject6 = item_taggedTemplateLiteral(["Driving Observantly"]))))) {
    if ((0,external_kolmafia_namespaceObject.getFuel)() < 37) fuelUp();
    (0,external_kolmafia_namespaceObject.cliExecute)("asdonmartin drive observantly");
  }

  if (!lib_have($effect(item_templateObject7 || (item_templateObject7 = item_taggedTemplateLiteral(["I See Everything Thrice!"]))))) {
    if (!lib_have(template_string_$item(item_templateObject8 || (item_templateObject8 = item_taggedTemplateLiteral(["government"]))))) {
      if (!lib_have(template_string_$item(item_templateObject9 || (item_templateObject9 = item_taggedTemplateLiteral(["anticheese"]))))) {
        (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse");
      }

      if (lib_have(template_string_$item(item_templateObject10 || (item_templateObject10 = item_taggedTemplateLiteral(["government cheese"]))))) {
        (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(item_templateObject11 || (item_templateObject11 = item_taggedTemplateLiteral(["government"]))));
      }
    }

    if (lib_have(template_string_$item(item_templateObject12 || (item_templateObject12 = item_taggedTemplateLiteral(["government"]))))) {
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(item_templateObject13 || (item_templateObject13 = item_taggedTemplateLiteral(["government"]))));
    }
  }

  if ((0,external_kolmafia_namespaceObject.myClass)() === template_string_$class(item_templateObject14 || (item_templateObject14 = item_taggedTemplateLiteral(["Pastamancer"]))) && !property_get("_barrelPrayer")) {
    (0,external_kolmafia_namespaceObject.cliExecute)("barrelprayer buff");
  }

  if (lib_have(template_string_$item(item_templateObject15 || (item_templateObject15 = item_taggedTemplateLiteral(["Salsa Caliente\u2122 candle"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(item_templateObject16 || (item_templateObject16 = item_taggedTemplateLiteral(["Salsa Caliente\u2122 candle"]))));
  if (lib_have(template_string_$item(item_templateObject17 || (item_templateObject17 = item_taggedTemplateLiteral(["lavender candy heart"]))))) lib_ensureEffect($effect(item_templateObject18 || (item_templateObject18 = item_taggedTemplateLiteral(["Heart of Lavender"]))));
}

function batForm() {
  if (property_get("_latteRefillsUsed") < 3 && (0,external_kolmafia_namespaceObject.numericModifier)(template_string_$item(item_templateObject19 || (item_templateObject19 = item_taggedTemplateLiteral(["latte lovers member's mug"]))), "Item Drop") < 20) {
    var latte = "pumpkin ".concat(property_get("latteUnlocks").includes("carrot") ? "carrot " : "vanilla ").concat(property_get("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon");

    if (latte !== "") {
      (0,external_kolmafia_namespaceObject.cliExecute)("latte refill ".concat(latte));
    }
  }

  if (!lib_have($effect(item_templateObject20 || (item_templateObject20 = item_taggedTemplateLiteral(["Bat-Adjacent Form"]))))) {
    var run = combat_Macro.skill($skill(item_templateObject21 || (item_templateObject21 = item_taggedTemplateLiteral(["Become a Bat"]))));

    if (!property_get("_latteBanishUsed")) {
      useDefaultFamiliar(false);
      (0,external_kolmafia_namespaceObject.equip)($slot(item_templateObject22 || (item_templateObject22 = item_taggedTemplateLiteral(["off-hand"]))), template_string_$item(item_templateObject23 || (item_templateObject23 = item_taggedTemplateLiteral(["latte lovers member's mug"]))));
      (0,external_kolmafia_namespaceObject.equip)($slot(item_templateObject24 || (item_templateObject24 = item_taggedTemplateLiteral(["back"]))), template_string_$item(item_templateObject25 || (item_templateObject25 = item_taggedTemplateLiteral(["vampyric cloake"]))));
      run.skill($skill(item_templateObject26 || (item_templateObject26 = item_taggedTemplateLiteral(["Throw Latte on Opponent"]))));
    } else {
      (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(item_templateObject27 || (item_templateObject27 = item_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      lib_ensureEffect($effect(item_templateObject28 || (item_templateObject28 = item_taggedTemplateLiteral(["Ode to Booze"]))));
      run.step("runaway");
    }

    advMacroAA($location(item_templateObject29 || (item_templateObject29 = item_taggedTemplateLiteral(["The Dire Warren"]))), run);
  }

  if (property_get("_latteRefillsUsed") < 3 && (0,external_kolmafia_namespaceObject.numericModifier)(template_string_$item(item_templateObject30 || (item_templateObject30 = item_taggedTemplateLiteral(["latte lovers member's mug"]))), "Item Drop") < 20) {
    var _latte = "pumpkin ".concat(property_get("latteUnlocks").includes("carrot") ? "carrot" : "vanilla", " ").concat(property_get("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon");

    if (_latte !== "") {
      (0,external_kolmafia_namespaceObject.cliExecute)("latte refill ".concat(_latte));
    }
  }
}

function item_testPrep() {
  if (!property_get("_steelyEyedSquintUsed")) {
    lib_ensureEffect($effect(item_templateObject31 || (item_templateObject31 = item_taggedTemplateLiteral(["Steely-Eyed Squint"]))));
  }

  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(item_templateObject32 || (item_templateObject32 = item_taggedTemplateLiteral(["Trick-or-Treating Tot"]))));
  itemOutfit();
  if (item_predictor() > 1) lib_ensureEffect($effect(item_templateObject33 || (item_templateObject33 = item_taggedTemplateLiteral(["Nearly All-Natural"]))));
}

function itemTest() {
  prelude();
  item_castBuffs();
  batForm();
  item_testPrep();
  if (item_predictor() > 1) throw "Failed to cap item";
  return item_predictor();
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2017/TunnelOfLove.js
var TunnelOfLove_templateObject, TunnelOfLove_templateObject2;

function TunnelOfLove_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function TunnelOfLove_have() {
  return get("loveTunnelAvailable");
}
function isUsed() {
  return get("_loveTunnelUsed");
}
function haveLovEnamorang() {
  return lib_have(template_string_$item(TunnelOfLove_templateObject || (TunnelOfLove_templateObject = TunnelOfLove_taggedTemplateLiteral(["LOV Enamorang"]))));
}
function getLovEnamorangUses() {
  return property_get("_enamorangs");
}
function couldUseLoveEnamorang() {
  return !haveWandererCounter(Wanderer.Enamorang) && getLovEnamorangUses() < 3 && haveLovEnamorang();
}
function getLovEnamorangMonster() {
  return property_get("enamorangMonster");
}
var LovEnamorang = new Copier(() => couldUseLoveEnamorang(), null, () => couldUseLoveEnamorang(), () => getLovEnamorangMonster());

function equipmentChoice(equipment) {
  switch (equipment) {
    case "LOV Eardigan":
      return 1;

    case "LOV Epaulettes":
      return 2;

    case "LOV Earring":
      return 3;
  }
}

function effectChoice(effect) {
  switch (effect) {
    case "Lovebotamy":
      return 1;

    case "Open Heart Surgery":
      return 2;

    case "Wandering Eye Surgery":
      return 3;
  }
}

function extraChoice(extra) {
  switch (extra) {
    case "LOV Enamorang":
      return 1;

    case "LOV Emotionizer":
      return 2;

    case "LOV Extraterrestrial Chocolate":
      return 3;

    case "LOV Echinacea Bouquet":
      return 4;

    case "LOV Elephant":
      return 5;

    case "toast":
      return 6;

    case null:
      return 7;
  }
}
/**
 * Fight all LOV monsters and get buffs/equipment.
 * @param equipment Equipment to take from LOV.
 * @param effect Effect to take from LOV.
 * @param extra Extra item to take from LOV.
 */


function fightAll(equipment, effect, extra) {
  _set("choiceAdventure1222", 1); // Entrance

  _set("choiceAdventure1223", 1); // Fight LOV Enforcer

  _set("choiceAdventure1224", equipmentChoice(equipment));
  _set("choiceAdventure1225", 1); // Fight LOV Engineer

  _set("choiceAdventure1226", effectChoice(effect));
  _set("choiceAdventure1227", 1); // Fight LOV Equivocator

  _set("choiceAdventure1228", extraChoice(extra));
  (0,external_kolmafia_namespaceObject.adv1)($location(TunnelOfLove_templateObject2 || (TunnelOfLove_templateObject2 = TunnelOfLove_taggedTemplateLiteral(["The Tunnel of L.O.V.E."]))), 0, "");
}
;// CONCATENATED MODULE: ./src/level.ts
var level_templateObject, level_templateObject2, level_templateObject3, level_templateObject4, level_templateObject5, level_templateObject6, level_templateObject7, level_templateObject8, level_templateObject9, level_templateObject10, level_templateObject11, level_templateObject12, level_templateObject13, level_templateObject14, level_templateObject15, level_templateObject16, level_templateObject17, level_templateObject18, level_templateObject19, level_templateObject20, level_templateObject21, level_templateObject22, level_templateObject23, level_templateObject24, level_templateObject25, level_templateObject26, level_templateObject27, level_templateObject28, level_templateObject29, level_templateObject30, level_templateObject31, level_templateObject32, level_templateObject33, level_templateObject34, level_templateObject35, level_templateObject36, level_templateObject37, level_templateObject38, level_templateObject39, level_templateObject40, level_templateObject41, level_templateObject42, level_templateObject43, level_templateObject44, level_templateObject45, level_templateObject46, level_templateObject47, level_templateObject48, level_templateObject49, level_templateObject50, level_templateObject51, level_templateObject52, level_templateObject53, level_templateObject54, level_templateObject55, level_templateObject56, level_templateObject57, level_templateObject58, level_templateObject59, level_templateObject60, level_templateObject61, level_templateObject62, level_templateObject63, level_templateObject64, level_templateObject65, level_templateObject66, level_templateObject67, level_templateObject68, level_templateObject69, level_templateObject70, level_templateObject71, level_templateObject72, level_templateObject73, level_templateObject74, level_templateObject75, level_templateObject76, level_templateObject77, level_templateObject78, level_templateObject79, level_templateObject80, level_templateObject81, level_templateObject82, level_templateObject83, level_templateObject84, level_templateObject85, level_templateObject86, level_templateObject87, level_templateObject88, level_templateObject89, level_templateObject90, level_templateObject91, level_templateObject92, level_templateObject93, level_templateObject94, level_templateObject95, level_templateObject96, level_templateObject97, level_templateObject98, level_templateObject99, level_templateObject100, level_templateObject101, level_templateObject102, level_templateObject103, level_templateObject104, level_templateObject105, level_templateObject106, level_templateObject107, level_templateObject108, level_templateObject109, level_templateObject110, level_templateObject111, level_templateObject112, level_templateObject113, level_templateObject114, level_templateObject115, level_templateObject116, level_templateObject117, level_templateObject118, level_templateObject119, level_templateObject120, level_templateObject121, level_templateObject122, level_templateObject123, level_templateObject124, level_templateObject125, level_templateObject126, level_templateObject127, level_templateObject128, level_templateObject129, level_templateObject130, level_templateObject131, level_templateObject132, level_templateObject133, level_templateObject134, level_templateObject135, level_templateObject136, level_templateObject137, level_templateObject138, level_templateObject139, level_templateObject140, level_templateObject141, level_templateObject142, level_templateObject143, level_templateObject144, level_templateObject145, level_templateObject146, level_templateObject147, level_templateObject148, level_templateObject149, level_templateObject150, level_templateObject151, level_templateObject152, level_templateObject153, level_templateObject154, level_templateObject155, level_templateObject156;

function level_toConsumableArray(arr) { return level_arrayWithoutHoles(arr) || level_iterableToArray(arr) || level_unsupportedIterableToArray(arr) || level_nonIterableSpread(); }

function level_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function level_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return level_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return level_arrayLikeToArray(o, minLen); }

function level_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function level_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return level_arrayLikeToArray(arr); }

function level_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function level_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







function initialExp() {
  if (!lib_have($effect(level_templateObject || (level_templateObject = level_taggedTemplateLiteral(["That's Just Cloud-Talk, Man"]))))) {
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
  }

  lib_ensureEffect($effect(level_templateObject2 || (level_templateObject2 = level_taggedTemplateLiteral(["Inscrutable Gaze"]))));
  lib_ensureEffect($effect(level_templateObject3 || (level_templateObject3 = level_taggedTemplateLiteral(["Thaumodynamic"]))));
  if (!lib_have($effect(level_templateObject4 || (level_templateObject4 = level_taggedTemplateLiteral(["Synthesis: Learning"]))))) synthExp();
  (0,external_kolmafia_namespaceObject.equip)(template_string_$item(level_templateObject5 || (level_templateObject5 = level_taggedTemplateLiteral(["familiar scrapbook"]))), $slot(level_templateObject6 || (level_templateObject6 = level_taggedTemplateLiteral(["off-hand"]))));

  if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(level_templateObject7 || (level_templateObject7 = level_taggedTemplateLiteral(["a ten-percent bonus"]))))) {
    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject8 || (level_templateObject8 = level_taggedTemplateLiteral(["a ten-percent bonus"]))));
  }

  (0,external_kolmafia_namespaceObject.cliExecute)("bastille myst brutalist");
}

function buffMyst() {
  var lovePotion = template_string_$item(level_templateObject9 || (level_templateObject9 = level_taggedTemplateLiteral(["Love Potion #0"])));
  var loveEffect = $effect(level_templateObject10 || (level_templateObject10 = level_taggedTemplateLiteral(["Tainted Love Potion"])));

  if (!lib_have(loveEffect)) {
    if (!lib_have(lovePotion)) {
      (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(level_templateObject11 || (level_templateObject11 = level_taggedTemplateLiteral(["Love Mixology"]))));
    }

    (0,external_kolmafia_namespaceObject.visitUrl)("desc_effect.php?whicheffect=".concat(loveEffect.descid));

    if ((0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "mysticality") > 10 && (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "muscle") > -30 && (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "moxie") > -30 && (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "maximum hp percent") > -0.001) {
      (0,external_kolmafia_namespaceObject.use)(1, lovePotion);
    }
  }

  if (property_get("yourFavoriteBirdMods").split(",").some(mod => mod.includes("Mysticality Percent: +"))) {
    (0,external_kolmafia_namespaceObject.useSkill)($skill(level_templateObject12 || (level_templateObject12 = level_taggedTemplateLiteral(["Visit your Favorite Bird"]))));
  }

  if (property_get("spacegateVaccine2") && property_get("spaceGateAlways") && !property_get("_spacegateVaccine")) {
    (0,external_kolmafia_namespaceObject.cliExecute)("spacegate vaccine 2");
  }

  lib_ensureEffect($effect(level_templateObject13 || (level_templateObject13 = level_taggedTemplateLiteral(["Uncucumbered"]))));
  if (!lib_have($effect(level_templateObject14 || (level_templateObject14 = level_taggedTemplateLiteral(["Synthesis: Smart"]))))) synthMyst();
  tryHead($effect(level_templateObject15 || (level_templateObject15 = level_taggedTemplateLiteral(["You Learned Something Maybe!"]))));
  tryHead($effect(level_templateObject16 || (level_templateObject16 = level_taggedTemplateLiteral(["We're All Made of Starfish"]))));
  if (!property_get("_lyleFavored")) lib_ensureEffect($effect(level_templateObject17 || (level_templateObject17 = level_taggedTemplateLiteral(["Favored by Lyle"]))));
  if (!property_get("telescopeLookedHigh")) lib_ensureEffect($effect(level_templateObject18 || (level_templateObject18 = level_taggedTemplateLiteral(["Starry-Eyed"]))));
  lib_ensureEffect($effect(level_templateObject19 || (level_templateObject19 = level_taggedTemplateLiteral(["Glittering Eyelashes"]))));

  if (!property_get("_streamsCrossed")) {
    (0,external_kolmafia_namespaceObject.cliExecute)("crossstreams");
  }

  (0,external_kolmafia_namespaceObject.equip)($slot(level_templateObject20 || (level_templateObject20 = level_taggedTemplateLiteral(["acc3"]))), template_string_$item(level_templateObject21 || (level_templateObject21 = level_taggedTemplateLiteral(["Powerful Glove"]))));
  lib_ensureEffect($effect(level_templateObject22 || (level_templateObject22 = level_taggedTemplateLiteral(["Triple-Sized"]))));
  lib_ensureEffect($effect(level_templateObject23 || (level_templateObject23 = level_taggedTemplateLiteral(["Feeling Excited"]))));
  if (lib_have(template_string_$item(level_templateObject24 || (level_templateObject24 = level_taggedTemplateLiteral(["votive of confidence"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(level_templateObject25 || (level_templateObject25 = level_taggedTemplateLiteral(["votive of confidence"]))));
  if (lib_have(template_string_$item(level_templateObject26 || (level_templateObject26 = level_taggedTemplateLiteral(["natural magick candle"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(level_templateObject27 || (level_templateObject27 = level_taggedTemplateLiteral(["natural magick candle"]))));
}

function level_castBuffs() {
  uniform(template_string_$item(level_templateObject28 || (level_templateObject28 = level_taggedTemplateLiteral(["Abracandalabra"]))));

  if (property_get("_sausagesEaten") === 0) {
    (0,external_kolmafia_namespaceObject.cliExecute)("eat 1 magic sausage");
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(level_templateObject29 || (level_templateObject29 = level_taggedTemplateLiteral(["Advanced Saucecrafting"]))));
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(level_templateObject30 || (level_templateObject30 = level_taggedTemplateLiteral(["Advanced Cocktailcrafting"]))));
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(level_templateObject31 || (level_templateObject31 = level_taggedTemplateLiteral(["Acquire Rhinestones"]))));
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(level_templateObject32 || (level_templateObject32 = level_taggedTemplateLiteral(["Prevent Scurvy and Sobriety"]))));
  }

  if (!lib_have(template_string_$item(level_templateObject33 || (level_templateObject33 = level_taggedTemplateLiteral(["blue rocket"])))) && !lib_have($effect(level_templateObject34 || (level_templateObject34 = level_taggedTemplateLiteral(["Glowing Blue"]))))) {
    (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?action=fwshop&whichfloor=2");
    (0,external_kolmafia_namespaceObject.buy)(1, template_string_$item(level_templateObject35 || (level_templateObject35 = level_taggedTemplateLiteral(["blue rocket"]))));
  }

  if (!lib_have(template_string_$item(level_templateObject36 || (level_templateObject36 = level_taggedTemplateLiteral(["turtle totem"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("acquire turtle totem");
  if (!lib_have(template_string_$item(level_templateObject37 || (level_templateObject37 = level_taggedTemplateLiteral(["saucepan"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("acquire saucepan");
  $skills(level_templateObject38 || (level_templateObject38 = level_taggedTemplateLiteral(["The Magical Mojomuscular Melody, Stevedave's Shanty of Superiority, Fat Leon's Phat Loot Lyric, The Polka of Plenty, Leash of Linguini, Empathy of the Newt, Blood Bond, Blood Bubble, Song of Bravado, Get Big"]))).forEach(buff => {
    if (!lib_have((0,external_kolmafia_namespaceObject.toEffect)(buff))) {
      if ((0,external_kolmafia_namespaceObject.myMp)() < (0,external_kolmafia_namespaceObject.mpCost)(buff)) {
        if ((0,external_kolmafia_namespaceObject.totalFreeRests)() > property_get("timesRested")) {
          (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=chateau&action=chateau_restbox");
        } else if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(level_templateObject39 || (level_templateObject39 = level_taggedTemplateLiteral(["psychokinetic energy blob"])))) >= 1) {
          (0,external_kolmafia_namespaceObject.use)(2, template_string_$item(level_templateObject40 || (level_templateObject40 = level_taggedTemplateLiteral(["psychokinetic energy blob"]))));
        } else {
          (0,external_kolmafia_namespaceObject.eat)(1, template_string_$item(level_templateObject41 || (level_templateObject41 = level_taggedTemplateLiteral(["magical sausage"]))));
        }
      }

      (0,external_kolmafia_namespaceObject.useSkill)(1, buff);
    }
  });
}

function getYoked() {
  uniform();
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(level_templateObject42 || (level_templateObject42 = level_taggedTemplateLiteral(["Ghost of Crimbo Carols"]))));

  if (property_get("snojoSetting") === "NONE") {
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
    (0,external_kolmafia_namespaceObject.runChoice)(2);
  }

  heal();
  advMacroAA($location(level_templateObject43 || (level_templateObject43 = level_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))), combat_Macro.delevel().tryItem(template_string_$item(level_templateObject44 || (level_templateObject44 = level_taggedTemplateLiteral(["blue rocket"])))).defaultKill().repeat(), () => {
    return !lib_have($effect(level_templateObject45 || (level_templateObject45 = level_taggedTemplateLiteral(["Holiday Yoked"]))));
  }, () => ensureMp(30));
}

function witchGhostAgent() {
  if (lib_questStep("questM25Armorer") === -1) {
    (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=armory&action=talk");
    (0,external_kolmafia_namespaceObject.runChoice)(1);
  }

  (0,external_kolmafia_namespaceObject.cliExecute)("fold makeshift garbage shirt");
  uniform.apply(void 0, level_toConsumableArray(template_string_$items(level_templateObject46 || (level_templateObject46 = level_taggedTemplateLiteral(["protonic accelerator pack, makeshift garbage shirt"])))));
  heal();
  useDefaultFamiliar();
  ensureMp(100);
  combat_Macro.trySkill($skill(level_templateObject47 || (level_templateObject47 = level_taggedTemplateLiteral(["Curse of Weaksauce"])))).trySkill($skill(level_templateObject48 || (level_templateObject48 = level_taggedTemplateLiteral(["Micrometeorite"])))).defaultKill().repeat().setAutoAttack();

  if (!lib_have(template_string_$item(level_templateObject49 || (level_templateObject49 = level_taggedTemplateLiteral(["battle broom"]))))) {
    fightPiece($monster(level_templateObject50 || (level_templateObject50 = level_taggedTemplateLiteral(["Witchess Witch"]))));
  }

  (0,external_kolmafia_namespaceObject.equip)($slot(level_templateObject51 || (level_templateObject51 = level_taggedTemplateLiteral(["acc3"]))), template_string_$item(level_templateObject52 || (level_templateObject52 = level_taggedTemplateLiteral(["battle broom"]))));
  var ghostLocation = property_get("ghostLocation");

  if (ghostLocation) {
    (0,external_kolmafia_namespaceObject.equip)($slot(level_templateObject53 || (level_templateObject53 = level_taggedTemplateLiteral(["off-hand"]))), template_string_$item(level_templateObject54 || (level_templateObject54 = level_taggedTemplateLiteral(["latte lovers member's mug"]))));
    useDefaultFamiliar();
    advMacro(ghostLocation, combat_Macro.delevel().easyFight().trySkill($skill(level_templateObject55 || (level_templateObject55 = level_taggedTemplateLiteral(["Portscan"])))).trySkill($skill(level_templateObject56 || (level_templateObject56 = level_taggedTemplateLiteral(["Shoot Ghost"])))).trySkill($skill(level_templateObject57 || (level_templateObject57 = level_taggedTemplateLiteral(["Shoot Ghost"])))).trySkill($skill(level_templateObject58 || (level_templateObject58 = level_taggedTemplateLiteral(["Shoot Ghost"])))).trySkill($skill(level_templateObject59 || (level_templateObject59 = level_taggedTemplateLiteral(["Trap Ghost"])))));
  }

  if (!lib_have(template_string_$item(level_templateObject60 || (level_templateObject60 = level_taggedTemplateLiteral(["government"])))) && !lib_have(template_string_$item(level_templateObject61 || (level_templateObject61 = level_taggedTemplateLiteral(["government cheese"]))))) {
    useDefaultFamiliar();
    uniform(template_string_$item(level_templateObject62 || (level_templateObject62 = level_taggedTemplateLiteral(["vampyric cloake"]))), template_string_$item(level_templateObject63 || (level_templateObject63 = level_taggedTemplateLiteral(["latte lovers member's mug"]))), [template_string_$item(level_templateObject64 || (level_templateObject64 = level_taggedTemplateLiteral(["gold detective badge"]))), $slot(level_templateObject65 || (level_templateObject65 = level_taggedTemplateLiteral(["acc2"])))], [template_string_$item(level_templateObject66 || (level_templateObject66 = level_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))), $slot(level_templateObject67 || (level_templateObject67 = level_taggedTemplateLiteral(["acc3"])))]);
    advMacroAA($location(level_templateObject68 || (level_templateObject68 = level_taggedTemplateLiteral(["Noob Cave"]))), combat_Macro.delevel().trySkill($skill(level_templateObject69 || (level_templateObject69 = level_taggedTemplateLiteral(["Otoscope"])))).trySkill($skill(level_templateObject70 || (level_templateObject70 = level_taggedTemplateLiteral(["Become a Bat"])))).trySkill($skill(level_templateObject71 || (level_templateObject71 = level_taggedTemplateLiteral(["Chest X-Ray"])))), //1
    () => {
      return (0,external_kolmafia_namespaceObject.getCounters)("Portscan", 0, 0) !== "";
    }, () => () => ensureMp(30));
    var desertAccessItem = (0,external_kolmafia_namespaceObject.knollAvailable)() ? template_string_$item(level_templateObject72 || (level_templateObject72 = level_taggedTemplateLiteral(["bitchin' meatcar"]))) : template_string_$item(level_templateObject73 || (level_templateObject73 = level_taggedTemplateLiteral(["Desert Bus pass"])));

    if (!lib_have(desertAccessItem)) {
      (0,external_kolmafia_namespaceObject.cliExecute)("acquire ".concat(desertAccessItem.name));
    }

    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse");
  }
}

function lov() {
  (0,external_kolmafia_namespaceObject.cliExecute)("fold makeshift garbage shirt");
  uniform.apply(void 0, level_toConsumableArray(template_string_$items(level_templateObject74 || (level_templateObject74 = level_taggedTemplateLiteral(["protonic accelerator pack, makeshift garbage shirt"])))));
  heal();
  useDefaultFamiliar();
  combat_Macro.if_("monstername LOV enforcer", combat_Macro.attack().repeat()).if_("monstername LOV Engineer", combat_Macro.candyblast().trySkill($skill(level_templateObject75 || (level_templateObject75 = level_taggedTemplateLiteral(["Weapon of the Pastalord"])))).repeat()).if_("monstername LOV equivocator", combat_Macro.delevel().easyFight().candyblast().defaultKill().repeat()).setAutoAttack();

  if (!property_get("_loveTunnelUsed")) {
    fightAll("LOV Epaulettes", "Open Heart Surgery", "LOV Extraterrestrial Chocolate");
    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject76 || (level_templateObject76 = level_taggedTemplateLiteral(["LOV Extraterrestrial Chocolate"]))));
  }

  burnLibrams();
}

function tomatoJuiceAndNinjaCostume() {
  (0,external_kolmafia_namespaceObject.cliExecute)("backupcamera ml");

  if (lib_have(template_string_$item(level_templateObject77 || (level_templateObject77 = level_taggedTemplateLiteral(["magical sausage casing"])))) || lib_have(template_string_$item(level_templateObject78 || (level_templateObject78 = level_taggedTemplateLiteral(["magical sausage"]))))) {
    (0,external_kolmafia_namespaceObject.cliExecute)("eat magic sausage");
  }

  uniform();

  if (property_get("_monstersMapped") < 2 && (0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(level_templateObject79 || (level_templateObject79 = level_taggedTemplateLiteral(["tomato"])))) + (0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(level_templateObject80 || (level_templateObject80 = level_taggedTemplateLiteral(["tomato juice of powerful power"])))) + (0,external_kolmafia_namespaceObject.haveEffect)($effect(level_templateObject81 || (level_templateObject81 = level_taggedTemplateLiteral(["Tomato Power"])))) === 0) {
    (0,external_kolmafia_namespaceObject.equip)($slot(level_templateObject82 || (level_templateObject82 = level_taggedTemplateLiteral(["acc3"]))), template_string_$item(level_templateObject83 || (level_templateObject83 = level_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
    useDefaultFamiliar();
    mapMacro($location(level_templateObject84 || (level_templateObject84 = level_taggedTemplateLiteral(["The Haunted Pantry"]))), $monster(level_templateObject85 || (level_templateObject85 = level_taggedTemplateLiteral(["possessed can of tomatoes"]))), combat_Macro.if_("monsterid ".concat($monster(level_templateObject86 || (level_templateObject86 = level_taggedTemplateLiteral(["possessed can of tomatoes"]))).id), combat_Macro.skill($skill(level_templateObject87 || (level_templateObject87 = level_taggedTemplateLiteral(["Reflex Hammer"]))))));
    useDefaultFamiliar(false);
    uniform.apply(void 0, level_toConsumableArray((0,external_kolmafia_namespaceObject.myClass)() === template_string_$class(level_templateObject88 || (level_templateObject88 = level_taggedTemplateLiteral(["Sauceror"]))) && !beardBuffs.some(effect => lib_have(effect)) ? // eslint-disable-next-line libram/verify-constants
    template_string_$items(level_templateObject89 || (level_templateObject89 = level_taggedTemplateLiteral(["Daylight Shavings Helmet"]))) : []));
    ensureMp(31);
    mapMacro($location(level_templateObject90 || (level_templateObject90 = level_taggedTemplateLiteral(["The Haiku Dungeon"]))), $monster(level_templateObject91 || (level_templateObject91 = level_taggedTemplateLiteral(["amateur ninja"]))), combat_Macro.if_("monsterid ".concat($monster(level_templateObject92 || (level_templateObject92 = level_taggedTemplateLiteral(["amateur ninja"]))).id), combat_Macro.skill($skill(level_templateObject93 || (level_templateObject93 = level_taggedTemplateLiteral(["Feel Nostalgic"])))).skill($skill(level_templateObject94 || (level_templateObject94 = level_taggedTemplateLiteral(["Gingerbread Mob Hit"]))))).step("abort"));
  }

  if (!property_get("hasRange")) {
    if (!lib_have(template_string_$item(level_templateObject95 || (level_templateObject95 = level_taggedTemplateLiteral(["Dramatic\u2122 range"]))))) {
      (0,external_kolmafia_namespaceObject.buy)(1, template_string_$item(level_templateObject96 || (level_templateObject96 = level_taggedTemplateLiteral(["Dramatic\u2122 range"]))));
    }

    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject97 || (level_templateObject97 = level_taggedTemplateLiteral(["Dramatic\u2122 range"]))));
  }

  (0,external_kolmafia_namespaceObject.useSkill)($skill(level_templateObject98 || (level_templateObject98 = level_taggedTemplateLiteral(["Advanced Saucecrafting"]))));
  (0,external_kolmafia_namespaceObject.useSkill)($skill(level_templateObject99 || (level_templateObject99 = level_taggedTemplateLiteral(["Prevent Scurvy and Sobriety"]))));

  if (!lib_have($effect(level_templateObject100 || (level_templateObject100 = level_taggedTemplateLiteral(["Tomato Power"]))))) {
    if (!lib_have(template_string_$item(level_templateObject101 || (level_templateObject101 = level_taggedTemplateLiteral(["tomato juice of powerful power"])))) && lib_have(template_string_$item(level_templateObject102 || (level_templateObject102 = level_taggedTemplateLiteral(["tomato"]))))) {
      (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(level_templateObject103 || (level_templateObject103 = level_taggedTemplateLiteral(["tomato juice of powerful power"]))));
    }

    if (lib_have(template_string_$item(level_templateObject104 || (level_templateObject104 = level_taggedTemplateLiteral(["tomato juice of powerful power"]))))) {
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject105 || (level_templateObject105 = level_taggedTemplateLiteral(["tomato juice of powerful power"]))));
    }
  }

  if (!lib_have($effect(level_templateObject106 || (level_templateObject106 = level_taggedTemplateLiteral(["Mystically Oiled"]))))) {
    if (!lib_have(template_string_$item(level_templateObject107 || (level_templateObject107 = level_taggedTemplateLiteral(["ointment of the occult"]))))) {
      (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(level_templateObject108 || (level_templateObject108 = level_taggedTemplateLiteral(["ointment of the occult"]))));
    }

    if (lib_have(template_string_$item(level_templateObject109 || (level_templateObject109 = level_taggedTemplateLiteral(["ointment of the occult"]))))) {
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject110 || (level_templateObject110 = level_taggedTemplateLiteral(["ointment of the occult"]))));
    }
  }
}

function godLob() {
  if (property_get("_godLobsterFights") === 0) {
    combat_Macro.delevel().easyFight().defaultKill().repeat().setAutoAttack();
    uniform();
    heal();
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(level_templateObject111 || (level_templateObject111 = level_taggedTemplateLiteral(["God Lobster"]))));
    setChoice(1310, 1);
    (0,external_kolmafia_namespaceObject.visitUrl)("main.php?fightgodlobster=1");
    (0,external_kolmafia_namespaceObject.runCombat)(combat_Macro.delevel().easyFight().defaultKill().repeat().toString());
    multiFightAutoAttack();
    (0,external_kolmafia_namespaceObject.runChoice)(-1);
    (0,external_kolmafia_namespaceObject.equip)($slot(level_templateObject112 || (level_templateObject112 = level_taggedTemplateLiteral(["familiar"]))), template_string_$item(level_templateObject113 || (level_templateObject113 = level_taggedTemplateLiteral(["God Lobster's Scepter"]))));
    heal();
    (0,external_kolmafia_namespaceObject.visitUrl)("main.php?fightgodlobster=1");
    (0,external_kolmafia_namespaceObject.runCombat)();
    multiFightAutoAttack();
    (0,external_kolmafia_namespaceObject.runChoice)(-1);
    (0,external_kolmafia_namespaceObject.equip)($slot(level_templateObject114 || (level_templateObject114 = level_taggedTemplateLiteral(["familiar"]))), template_string_$item(level_templateObject115 || (level_templateObject115 = level_taggedTemplateLiteral(["God Lobster's Ring"]))));
  }
}

function snojo() {
  uniform();
  useDefaultFamiliar();
  advMacroAA($location(level_templateObject116 || (level_templateObject116 = level_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))), combat_Macro.delevel().easyFight().attack().repeat(), () => {
    return property_get("_snojoFreeFights") < 10;
  }, () => {
    heal();
    useDefaultFamiliar();
    ensureMp(30);
  });
  (0,external_kolmafia_namespaceObject.cliExecute)("hottub");
}

function tentacle() {
  if (!lib_have($skill(level_templateObject117 || (level_templateObject117 = level_taggedTemplateLiteral(["Evoke Eldritch Horror"]))))) return;
  uniform();
  useDefaultFamiliar();
  var macro = combat_Macro.delevel().candyblast().defaultKill().repeat();
  macro.setAutoAttack();
  (0,external_kolmafia_namespaceObject.useSkill)($skill(level_templateObject118 || (level_templateObject118 = level_taggedTemplateLiteral(["Evoke Eldritch Horror"]))));
  (0,external_kolmafia_namespaceObject.runCombat)(macro.toString());
  if (lib_have($effect(level_templateObject119 || (level_templateObject119 = level_taggedTemplateLiteral(["Beaten Up"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("hottub");
}

function NEP() {
  if (property_get("_questPartyFair") === "unstarted") {
    setChoice(1322, "");
    (0,external_kolmafia_namespaceObject.visitUrl)("adventure.php?snarfblat=528");

    if (property_get("_questPartyFairQuest") === "food") {
      (0,external_kolmafia_namespaceObject.runChoice)(1);
      setChoice(1324, 2);
      setChoice(1326, 3);
    } else if (property_get("_questPartyFairQuest") === "booze") {
      (0,external_kolmafia_namespaceObject.runChoice)(1);
      setChoice(1324, 3);
      setChoice(1327, 3);
    } else {
      (0,external_kolmafia_namespaceObject.runChoice)(2);
      setChoice(1324, 5);
    }
  }

  uniform(template_string_$item(level_templateObject120 || (level_templateObject120 = level_taggedTemplateLiteral(["makeshift garbage shirt"]))), template_string_$item(level_templateObject121 || (level_templateObject121 = level_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
  useDefaultFamiliar();
  advMacroAA($location(level_templateObject122 || (level_templateObject122 = level_taggedTemplateLiteral(["The Neverending Party"]))), combat_Macro.delevel().trySkill($skill(level_templateObject123 || (level_templateObject123 = level_taggedTemplateLiteral(["Feel Pride"])))).defaultKill(), () => {
    return property_get("_neverendingPartyFreeTurns") < 10;
  }, () => {
    useDefaultFamiliar();
    heal();

    if (property_get("_sausageFights") > 4 && (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(level_templateObject124 || (level_templateObject124 = level_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))))) {
      (0,external_kolmafia_namespaceObject.equip)($slot(level_templateObject125 || (level_templateObject125 = level_taggedTemplateLiteral(["off-hand"]))), template_string_$item(level_templateObject126 || (level_templateObject126 = level_taggedTemplateLiteral(["familiar scrapbook"]))));
    }

    if (property_get("choiceAdventure1324") !== 5 && lib_questStep("_questPartyFair") > 0) {
      setChoice(1324, 5);
    }

    if ((0,external_kolmafia_namespaceObject.myLevel)() >= 13 && !lib_have($effect(level_templateObject127 || (level_templateObject127 = level_taggedTemplateLiteral(["Inner Elf"]))))) {
      ensureInnerElf();
    }

    ensureMp(30);
  });
  advMacroAA($location(level_templateObject128 || (level_templateObject128 = level_taggedTemplateLiteral(["The Neverending Party"]))), combat_Macro.if_("!monstername sausage goblin", combat_Macro.trySkill($skill(level_templateObject129 || (level_templateObject129 = level_taggedTemplateLiteral(["Shattering Punch"])))).trySkill($skill(level_templateObject130 || (level_templateObject130 = level_taggedTemplateLiteral(["Gingerbread Mob Hit"])))).trySkill($skill(level_templateObject131 || (level_templateObject131 = level_taggedTemplateLiteral(["Chest X-Ray"]))))).if_("monstername sausage goblin", combat_Macro.delevel().candyblast().defaultKill().repeat()), () => {
    return property_get("_shatteringPunchUsed") < 3 && !property_get("_gingerbreadMobHitUsed");
  }, () => {
    heal();
    useDefaultFamiliar();

    if (property_get("_sausageFights") > 4 && (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(level_templateObject132 || (level_templateObject132 = level_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))))) {
      (0,external_kolmafia_namespaceObject.equip)($slot(level_templateObject133 || (level_templateObject133 = level_taggedTemplateLiteral(["off-hand"]))), template_string_$item(level_templateObject134 || (level_templateObject134 = level_taggedTemplateLiteral(["familiar scrapbook"]))));
    }

    if (property_get("choiceAdventure1324") !== 5 && lib_questStep("_questPartyFair") > 0) {
      setChoice(1324, 5);
    }

    if ((0,external_kolmafia_namespaceObject.myLevel)() >= 13 && !lib_have($effect(level_templateObject135 || (level_templateObject135 = level_taggedTemplateLiteral(["Inner Elf"]))))) {
      ensureInnerElf();
    }

    ensureMp(30);
  });
  (0,external_kolmafia_namespaceObject.equip)($slot(level_templateObject136 || (level_templateObject136 = level_taggedTemplateLiteral(["acc3"]))), template_string_$item(level_templateObject137 || (level_templateObject137 = level_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
  advMacroAA($location(level_templateObject138 || (level_templateObject138 = level_taggedTemplateLiteral(["The Neverending Party"]))), combat_Macro.if_("!monstername sausage goblin", combat_Macro.trySkill($skill(level_templateObject139 || (level_templateObject139 = level_taggedTemplateLiteral(["Shattering Punch"])))).trySkill($skill(level_templateObject140 || (level_templateObject140 = level_taggedTemplateLiteral(["Gingerbread Mob Hit"])))).trySkill($skill(level_templateObject141 || (level_templateObject141 = level_taggedTemplateLiteral(["Chest X-Ray"]))))).if_("monstername sausage goblin", combat_Macro.delevel().candyblast().defaultKill().repeat()), () => {
    return property_get("_chestXRayUsed") < 3;
  }, () => {
    heal();
    useDefaultFamiliar();

    if (property_get("_sausageFights") > 4 && (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(level_templateObject142 || (level_templateObject142 = level_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))))) {
      (0,external_kolmafia_namespaceObject.equip)($slot(level_templateObject143 || (level_templateObject143 = level_taggedTemplateLiteral(["off-hand"]))), template_string_$item(level_templateObject144 || (level_templateObject144 = level_taggedTemplateLiteral(["familiar scrapbook"]))));
    }

    if (property_get("choiceAdventure1324") !== 5 && lib_questStep("_questPartyFair") > 0) {
      setChoice(1324, 5);
    }

    if ((0,external_kolmafia_namespaceObject.myLevel)() >= 13 && !lib_have($effect(level_templateObject145 || (level_templateObject145 = level_taggedTemplateLiteral(["Inner Elf"]))))) {
      ensureInnerElf();
    }

    ensureMp(30);
  });
}

function mElfLeveling() {
  uniform();
  (0,external_kolmafia_namespaceObject.cliExecute)("fold garbage shirt");
  (0,external_kolmafia_namespaceObject.equip)($slot(level_templateObject146 || (level_templateObject146 = level_taggedTemplateLiteral(["shirt"]))), template_string_$item(level_templateObject147 || (level_templateObject147 = level_taggedTemplateLiteral(["makeshift garbage shirt"]))));
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(level_templateObject148 || (level_templateObject148 = level_taggedTemplateLiteral(["Machine Elf"]))));
  advMacroAA($location(level_templateObject149 || (level_templateObject149 = level_taggedTemplateLiteral(["The Deep Machine Tunnels"]))), combat_Macro.defaultKill(), () => {
    return property_get("_machineTunnelsAdv") < 5;
  }, () => {
    heal();
    ensureMp(30);
  });
}

function royalty() {
  if (!lib_have(template_string_$item(level_templateObject150 || (level_templateObject150 = level_taggedTemplateLiteral(["very pointy crown"]))))) {
    combat_Macro.tryItem(template_string_$item(level_templateObject151 || (level_templateObject151 = level_taggedTemplateLiteral(["jam band bootleg"])))).tryItem(template_string_$item(level_templateObject152 || (level_templateObject152 = level_taggedTemplateLiteral(["gas can"])))).tryItem(template_string_$item(level_templateObject153 || (level_templateObject153 = level_taggedTemplateLiteral(["Time-Spinner"])))).attack().repeat().setAutoAttack();
    uniform();
    useDefaultFamiliar();
    heal();
    fightPiece($monster(level_templateObject154 || (level_templateObject154 = level_taggedTemplateLiteral(["Witchess Queen"]))));
  }

  if (!lib_have(template_string_$item(level_templateObject155 || (level_templateObject155 = level_taggedTemplateLiteral(["dented scepter"]))))) {
    combat_Macro.delevel().attack().repeat().setAutoAttack();
    uniform();
    useDefaultFamiliar();
    heal();
    fightPiece($monster(level_templateObject156 || (level_templateObject156 = level_taggedTemplateLiteral(["Witchess King"]))));
  }
}

function restAndBuff() {
  while (property_get("timesRested") < (0,external_kolmafia_namespaceObject.totalFreeRests)()) {
    burnLibrams();
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=chateau&action=chateau_restbox");
  }
}

function levelUp() {
  initialExp();
  buffMyst();
  level_castBuffs();
  tomatoJuiceAndNinjaCostume();
  getYoked();
  witchGhostAgent();
  lov();
  godLob();
  snojo();
  tentacle();
  mElfLeveling();
  NEP();
  royalty();
  restAndBuff();
}
;// CONCATENATED MODULE: ./src/noncombat.ts
var noncombat_templateObject, noncombat_templateObject2, noncombat_templateObject3, noncombat_templateObject4, noncombat_templateObject5, noncombat_templateObject6, noncombat_templateObject7, noncombat_templateObject8, noncombat_templateObject9, noncombat_templateObject10, noncombat_templateObject11, noncombat_templateObject12, noncombat_templateObject13, noncombat_templateObject14, noncombat_templateObject15, noncombat_templateObject16, noncombat_templateObject17, noncombat_templateObject18, noncombat_templateObject19, noncombat_templateObject20;

function noncombat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var noncombat_predictor = () => 60 + (20 + (0,external_kolmafia_namespaceObject.numericModifier)("combat rate")) * 3;

function noncombat_castBuffs() {
  universalWeightBuffs();
  lib_ensureEffect($effect(noncombat_templateObject || (noncombat_templateObject = noncombat_taggedTemplateLiteral(["Smooth Movements"]))));
  lib_ensureEffect($effect(noncombat_templateObject2 || (noncombat_templateObject2 = noncombat_taggedTemplateLiteral(["Feeling Lonely"]))));
  (0,external_kolmafia_namespaceObject.equip)($slot(noncombat_templateObject3 || (noncombat_templateObject3 = noncombat_taggedTemplateLiteral(["acc3"]))), template_string_$item(noncombat_templateObject4 || (noncombat_templateObject4 = noncombat_taggedTemplateLiteral(["Powerful Glove"]))));
  lib_ensureEffect($effect(noncombat_templateObject5 || (noncombat_templateObject5 = noncombat_taggedTemplateLiteral(["Invisible Avatar"]))));
  lib_ensureEffect($effect(noncombat_templateObject6 || (noncombat_templateObject6 = noncombat_taggedTemplateLiteral(["Blessing of the Bird"]))));
  if (!property_get("_clanFortuneBuffUsed")) (0,external_kolmafia_namespaceObject.cliExecute)("fortune buff familiar");
  if ((0,external_kolmafia_namespaceObject.haveEffect)($effect(noncombat_templateObject7 || (noncombat_templateObject7 = noncombat_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("shrug fat leon's phat loot lyric");
  lib_ensureEffect($effect(noncombat_templateObject8 || (noncombat_templateObject8 = noncombat_taggedTemplateLiteral(["The Sonata of Sneakiness"]))));
  if (!property_get("_olympicSwimmingPool")) (0,external_kolmafia_namespaceObject.cliExecute)("swim sprints");

  while ((0,external_kolmafia_namespaceObject.getFuel)() < 37) {
    fuelUp();
  }

  if (!lib_have($effect(noncombat_templateObject9 || (noncombat_templateObject9 = noncombat_taggedTemplateLiteral(["Driving Stealthily"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("asdonmartin drive stealthily");
  horse("dark");
}

function godLobster() {
  if (!lib_have($effect(noncombat_templateObject10 || (noncombat_templateObject10 = noncombat_taggedTemplateLiteral(["Silence of the God Lobster"])))) && property_get("_godLobsterFights") < 3 && lib_have(template_string_$item(noncombat_templateObject11 || (noncombat_templateObject11 = noncombat_taggedTemplateLiteral(["God Lobster's Ring"]))))) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(noncombat_templateObject12 || (noncombat_templateObject12 = noncombat_taggedTemplateLiteral(["God Lobster"]))));
    (0,external_kolmafia_namespaceObject.equip)($slot(noncombat_templateObject13 || (noncombat_templateObject13 = noncombat_taggedTemplateLiteral(["familiar"]))), template_string_$item(noncombat_templateObject14 || (noncombat_templateObject14 = noncombat_taggedTemplateLiteral(["God Lobster's Ring"]))));
    uniform();
    combat_Macro.defaultKill().setAutoAttack();
    heal();
    (0,external_kolmafia_namespaceObject.use)(3, template_string_$item(noncombat_templateObject15 || (noncombat_templateObject15 = noncombat_taggedTemplateLiteral(["psychokinetic energy blob"]))));
    setChoice(1310, 2);
    (0,external_kolmafia_namespaceObject.visitUrl)("main.php?fightgodlobster=1");
    (0,external_kolmafia_namespaceObject.runCombat)(combat_Macro.defaultKill().toString());
    (0,external_kolmafia_namespaceObject.visitUrl)("choice.php");
    (0,external_kolmafia_namespaceObject.runChoice)(-1);
  }
}

function noncombat_testPrep() {
  noncombatOutfit();

  if (noncombat_predictor() > 1) {
    if (!lib_have($effect(noncombat_templateObject16 || (noncombat_templateObject16 = noncombat_taggedTemplateLiteral(["Gummed Shoes"]))))) {
      if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(noncombat_templateObject17 || (noncombat_templateObject17 = noncombat_taggedTemplateLiteral(["cop dollar"])))) < 10) (0,external_kolmafia_namespaceObject.cliExecute)("Detective Solver.ash");
      (0,external_kolmafia_namespaceObject.buy)($coinmaster(noncombat_templateObject18 || (noncombat_templateObject18 = noncombat_taggedTemplateLiteral(["Precinct Materiel Division"]))), 1, template_string_$item(noncombat_templateObject19 || (noncombat_templateObject19 = noncombat_taggedTemplateLiteral(["shoe gum"]))));
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(noncombat_templateObject20 || (noncombat_templateObject20 = noncombat_taggedTemplateLiteral(["shoe gum"]))));
    }
  }
}

function noncombatTest() {
  noncombat_castBuffs();
  godLobster();
  noncombat_testPrep();
  if (noncombat_predictor() > 1) throw "Failed to cap noncombat";
  return noncombat_predictor();
}
;// CONCATENATED MODULE: ./src/spell.ts
var spell_templateObject, spell_templateObject2, spell_templateObject3, spell_templateObject4, spell_templateObject5, spell_templateObject6, spell_templateObject7, spell_templateObject8, spell_templateObject9, spell_templateObject10, spell_templateObject11, spell_templateObject12, spell_templateObject13, spell_templateObject14, spell_templateObject15, spell_templateObject16, spell_templateObject17, spell_templateObject18, spell_templateObject19, spell_templateObject20, spell_templateObject21, spell_templateObject22, spell_templateObject23, spell_templateObject24, spell_templateObject25, spell_templateObject26, spell_templateObject27, spell_templateObject28, spell_templateObject29;

function spell_toConsumableArray(arr) { return spell_arrayWithoutHoles(arr) || spell_iterableToArray(arr) || spell_unsupportedIterableToArray(arr) || spell_nonIterableSpread(); }

function spell_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function spell_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return spell_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return spell_arrayLikeToArray(o, minLen); }

function spell_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function spell_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return spell_arrayLikeToArray(arr); }

function spell_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function spell_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var spell_predictor = () => 60 - Math.floor((0,external_kolmafia_namespaceObject.numericModifier)("spell damage") / 50 + 0.001) - Math.floor((0,external_kolmafia_namespaceObject.numericModifier)("spell damage percent") / 50 + 0.001);

function spell_castBuffs() {
  lib_ensureEffect($effect(spell_templateObject || (spell_templateObject = spell_taggedTemplateLiteral(["Simmering"]))));
  $effects(spell_templateObject2 || (spell_templateObject2 = spell_taggedTemplateLiteral(["Pisces in the Skyces, Carol of the Hells, Arched Eyebrow of the Archmage, Song of Sauce, We're All Made of Starfish, Jackasses' Symphony of Destruction"]))).forEach(effect => lib_ensureEffect(effect));

  if (!property_get("_cargoPocketEmptied")) {
    (0,external_kolmafia_namespaceObject.cliExecute)("cargo 177");
    lib_ensureEffect($effect(spell_templateObject3 || (spell_templateObject3 = spell_taggedTemplateLiteral(["Sigils of Yeg"]))));
  }

  if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(spell_templateObject4 || (spell_templateObject4 = spell_taggedTemplateLiteral(["LOV Elixir #6"])))) > 0) lib_ensureEffect($effect(spell_templateObject5 || (spell_templateObject5 = spell_taggedTemplateLiteral(["The Magic of LOV"]))));
  if (property_get("tomeSummons") < 3) (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(spell_templateObject6 || (spell_templateObject6 = spell_taggedTemplateLiteral(["Summon Sugar Sheets"]))));
  if (lib_have(template_string_$item(spell_templateObject7 || (spell_templateObject7 = spell_taggedTemplateLiteral(["sugar sheet"]))))) (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(spell_templateObject8 || (spell_templateObject8 = spell_taggedTemplateLiteral(["sugar chapeau"]))));
  (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=lathe");

  if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(spell_templateObject9 || (spell_templateObject9 = spell_taggedTemplateLiteral(["flimsy hardwood scraps"])))) > 0) {
    (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(spell_templateObject10 || (spell_templateObject10 = spell_taggedTemplateLiteral(["weeping willow wand"]))));
  }

  (0,external_kolmafia_namespaceObject.cliExecute)("Briefcase.ash enchantment spell");

  if (!property_get("_madTeaParty")) {
    (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?action=lookingglass&whichfloor=2");
    (0,external_kolmafia_namespaceObject.cliExecute)("acquire mariachi hat");
    lib_ensureEffect($effect(spell_templateObject11 || (spell_templateObject11 = spell_taggedTemplateLiteral(["Full Bottle in front of Me"]))));
  }

  (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(spell_templateObject12 || (spell_templateObject12 = spell_taggedTemplateLiteral(["Spirit of Cayenne"]))));

  if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(spell_templateObject13 || (spell_templateObject13 = spell_taggedTemplateLiteral(["flask of baconstone juice"])))) > 0) {
    lib_ensureEffect($effect(spell_templateObject14 || (spell_templateObject14 = spell_taggedTemplateLiteral(["Baconstoned"]))));
  }

  if ((0,external_kolmafia_namespaceObject.myClass)() === template_string_$class(spell_templateObject15 || (spell_templateObject15 = spell_taggedTemplateLiteral(["Sauceror"]))) && property_get("_barrelPrayer")) (0,external_kolmafia_namespaceObject.cliExecute)("barrelprayer buff");
}

function fingies() {
  if (!lib_have($effect(spell_templateObject16 || (spell_templateObject16 = spell_taggedTemplateLiteral(["Saucefingers"])))) && (0,external_kolmafia_namespaceObject.myClass)() === template_string_$class(spell_templateObject17 || (spell_templateObject17 = spell_taggedTemplateLiteral(["Pastamancer"]))) && (0,external_kolmafia_namespaceObject.myLevel)() >= 15 && lib_have(template_string_$familiar(spell_templateObject18 || (spell_templateObject18 = spell_taggedTemplateLiteral(["Mini-Adventurer"]))))) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(spell_templateObject19 || (spell_templateObject19 = spell_taggedTemplateLiteral(["Mini-Adventurer"]))));
    horse("dark");
    uniform();
    setChoice(768, 4);
    advMacroAA($location(spell_templateObject20 || (spell_templateObject20 = spell_taggedTemplateLiteral(["The Dire Warren"]))), combat_Macro.skill($skill(spell_templateObject21 || (spell_templateObject21 = spell_taggedTemplateLiteral(["Feel Hatred"])))), () => !lib_have($effect(spell_templateObject22 || (spell_templateObject22 = spell_taggedTemplateLiteral(["Saucefingers"])))));
  }
}

function shower() {
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(spell_templateObject23 || (spell_templateObject23 = spell_taggedTemplateLiteral(["none"]))));

  if (!lib_have($effect(spell_templateObject24 || (spell_templateObject24 = spell_taggedTemplateLiteral(["Meteor Showered"])))) && property_get("_meteorShowerUses") < 5) {
    uniform();
    setChoice(1387, 3);
    advMacroAA($location(spell_templateObject25 || (spell_templateObject25 = spell_taggedTemplateLiteral(["The Dire Warren"]))), combat_Macro.skill($skill(spell_templateObject26 || (spell_templateObject26 = spell_taggedTemplateLiteral(["Meteor Shower"])))).skill($skill(spell_templateObject27 || (spell_templateObject27 = spell_taggedTemplateLiteral(["Use the Force"])))));
    if ((0,external_kolmafia_namespaceObject.handlingChoice)()) (0,external_kolmafia_namespaceObject.runChoice)(-1);
    _set("_meteorShowerUses", 1 + property_get("_meteorShowerUses"));
  }
}

function spell_testPrep() {
  spellOutfit();
}

function spellTest() {
  spell_castBuffs();
  fingies();
  uniform.apply(void 0, spell_toConsumableArray((0,external_kolmafia_namespaceObject.myClass)() === template_string_$class(spell_templateObject28 || (spell_templateObject28 = spell_taggedTemplateLiteral(["Sauceror"]))) && !beardBuffs.some(effect => lib_have(effect)) ? // eslint-disable-next-line libram/verify-constants
  template_string_$items(spell_templateObject29 || (spell_templateObject29 = spell_taggedTemplateLiteral(["Daylight Shavings Helmet"]))) : []));
  ensureInnerElf();
  shower();
  spell_testPrep();
  return 1 + spell_predictor();
}
;// CONCATENATED MODULE: ./src/stattests.ts
var stattests_templateObject, stattests_templateObject2, stattests_templateObject3, stattests_templateObject4, stattests_templateObject5, stattests_templateObject6, stattests_templateObject7, stattests_templateObject8, stattests_templateObject9, stattests_templateObject10, stattests_templateObject11, stattests_templateObject12, stattests_templateObject13, stattests_templateObject14, stattests_templateObject15, stattests_templateObject16, stattests_templateObject17, stattests_templateObject18, stattests_templateObject19, stattests_templateObject20, stattests_templateObject21, stattests_templateObject22, stattests_templateObject23, stattests_templateObject24, stattests_templateObject25, stattests_templateObject26, stattests_templateObject27, stattests_templateObject28, stattests_templateObject29, stattests_templateObject30, stattests_templateObject31, stattests_templateObject32, stattests_templateObject33, stattests_templateObject34, stattests_templateObject35, stattests_templateObject36, stattests_templateObject37, stattests_templateObject38, stattests_templateObject39, stattests_templateObject40, stattests_templateObject41, stattests_templateObject42, stattests_templateObject43, stattests_templateObject44, stattests_templateObject45, stattests_templateObject46, stattests_templateObject47, stattests_templateObject48, stattests_templateObject49, stattests_templateObject50, stattests_templateObject51, stattests_templateObject52, stattests_templateObject53;

function stattests_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var musclePredictor = () => 60 - Math.floor(1 / 30 * ((0,external_kolmafia_namespaceObject.myBuffedstat)($stat(stattests_templateObject || (stattests_templateObject = stattests_taggedTemplateLiteral(["muscle"])))) - (0,external_kolmafia_namespaceObject.myBasestat)($stat(stattests_templateObject2 || (stattests_templateObject2 = stattests_taggedTemplateLiteral(["mysticality"]))))));

function musclebuffs() {
  equalizeMuscle();
  lib_ensureEffect($effect(stattests_templateObject3 || (stattests_templateObject3 = stattests_taggedTemplateLiteral(["Big"]))));
  lib_ensureEffect($effect(stattests_templateObject4 || (stattests_templateObject4 = stattests_taggedTemplateLiteral(["Song of Bravado"]))));
  lib_ensureEffect($effect(stattests_templateObject5 || (stattests_templateObject5 = stattests_taggedTemplateLiteral(["Rage of the Reindeer"]))));
  lib_ensureEffect($effect(stattests_templateObject6 || (stattests_templateObject6 = stattests_taggedTemplateLiteral(["Quiet Determination"]))));
  lib_ensureEffect($effect(stattests_templateObject7 || (stattests_templateObject7 = stattests_taggedTemplateLiteral(["Disdain of the War Snapper"]))));
  lib_ensureEffect($effect(stattests_templateObject8 || (stattests_templateObject8 = stattests_taggedTemplateLiteral(["Feeling Excited"]))));
  lib_ensureEffect($effect(stattests_templateObject9 || (stattests_templateObject9 = stattests_taggedTemplateLiteral(["The Power of LOV"]))));

  if (!lib_have($effect(stattests_templateObject10 || (stattests_templateObject10 = stattests_taggedTemplateLiteral(["Go Get 'Em, Tiger!"]))))) {
    (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(stattests_templateObject11 || (stattests_templateObject11 = stattests_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))));
    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(stattests_templateObject12 || (stattests_templateObject12 = stattests_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))));
  }
}

function muscleTestPrep() {
  muscleOutfit();

  for (var _i = 0, _arr = [() => {
    if (!property_get("")) lib_ensureEffect($effect(stattests_templateObject13 || (stattests_templateObject13 = stattests_taggedTemplateLiteral(["Lack of Body-Building"]))));
  }, // will stay on all the way to weapon damage.
  () => lib_ensureEffect($effect(stattests_templateObject14 || (stattests_templateObject14 = stattests_taggedTemplateLiteral(["Ham-Fisted"])))), () => ensureInnerElf()]; _i < _arr.length; _i++) {
    var increaser = _arr[_i];
    if (musclePredictor() > 1) increaser();
  }
}

function muscleTest() {
  musclebuffs();
  muscleTestPrep();
  return musclePredictor();
}

var mystPredictor = () => 60 - Math.floor(1 / 30 * ((0,external_kolmafia_namespaceObject.myBuffedstat)($stat(stattests_templateObject15 || (stattests_templateObject15 = stattests_taggedTemplateLiteral(["mysticality"])))) - (0,external_kolmafia_namespaceObject.myBasestat)($stat(stattests_templateObject16 || (stattests_templateObject16 = stattests_taggedTemplateLiteral(["mysticality"]))))));

function mystbuffs() {
  lib_ensureEffect($effect(stattests_templateObject17 || (stattests_templateObject17 = stattests_taggedTemplateLiteral(["Feeling Excited"]))));
}

function mystTestPrep() {
  mysticalityOutfit();
}

function mystTest() {
  mystbuffs();
  mystTestPrep();
  if (mystPredictor() > 1) throw "Not enough mysticality to cap";
  return mystPredictor();
}

var moxPredictor = () => 60 - Math.floor(1 / 30 * ((0,external_kolmafia_namespaceObject.myBuffedstat)($stat(stattests_templateObject18 || (stattests_templateObject18 = stattests_taggedTemplateLiteral(["moxie"])))) - (0,external_kolmafia_namespaceObject.myBasestat)($stat(stattests_templateObject19 || (stattests_templateObject19 = stattests_taggedTemplateLiteral(["mysticality"]))))));

function moxBuffs() {
  if (lib_have(template_string_$item(stattests_templateObject20 || (stattests_templateObject20 = stattests_taggedTemplateLiteral(["magical sausage casing"]))))) {
    (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(stattests_templateObject21 || (stattests_templateObject21 = stattests_taggedTemplateLiteral(["magical sausage"]))));
  }

  if (lib_have(template_string_$item(stattests_templateObject22 || (stattests_templateObject22 = stattests_taggedTemplateLiteral(["magical sausage"]))))) {
    (0,external_kolmafia_namespaceObject.eat)(1, template_string_$item(stattests_templateObject23 || (stattests_templateObject23 = stattests_taggedTemplateLiteral(["magical sausage"]))));
  }

  lib_ensureEffect($effect(stattests_templateObject24 || (stattests_templateObject24 = stattests_taggedTemplateLiteral(["Feeling Excited"]))));
  equalizeMoxie();
  lib_ensureEffect($effect(stattests_templateObject25 || (stattests_templateObject25 = stattests_taggedTemplateLiteral(["Pomp & Circumsands"]))));
  (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(stattests_templateObject26 || (stattests_templateObject26 = stattests_taggedTemplateLiteral(["Bird-a-Day calendar"]))));
  lib_ensureEffect($effect(stattests_templateObject27 || (stattests_templateObject27 = stattests_taggedTemplateLiteral(["Blessing of the Bird"]))));
  if (!property_get("_favoriteBirdVisited")) (0,external_kolmafia_namespaceObject.useSkill)($skill(stattests_templateObject28 || (stattests_templateObject28 = stattests_taggedTemplateLiteral(["Visit your Favorite Bird"]))));
  lib_ensureEffect($effect(stattests_templateObject29 || (stattests_templateObject29 = stattests_taggedTemplateLiteral(["Quiet Desperation"]))));
  lib_ensureEffect($effect(stattests_templateObject30 || (stattests_templateObject30 = stattests_taggedTemplateLiteral(["Disco Fever"]))));
  lib_ensureEffect($effect(stattests_templateObject31 || (stattests_templateObject31 = stattests_taggedTemplateLiteral(["Blubbered Up"]))));
  lib_ensureEffect($effect(stattests_templateObject32 || (stattests_templateObject32 = stattests_taggedTemplateLiteral(["Mariachi Mood"]))));
  lib_ensureEffect($effect(stattests_templateObject33 || (stattests_templateObject33 = stattests_taggedTemplateLiteral(["Disco State of Mind"]))));
  (0,external_kolmafia_namespaceObject.use)((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(stattests_templateObject34 || (stattests_templateObject34 = stattests_taggedTemplateLiteral(["rhinestone"])))), template_string_$item(stattests_templateObject35 || (stattests_templateObject35 = stattests_taggedTemplateLiteral(["rhinestone"]))));

  if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(stattests_templateObject36 || (stattests_templateObject36 = stattests_taggedTemplateLiteral(["dollop of barbecue sauce"])))) > 0) {
    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(stattests_templateObject37 || (stattests_templateObject37 = stattests_taggedTemplateLiteral(["dollop of barbecue sauce"]))));
  }

  if ((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(stattests_templateObject38 || (stattests_templateObject38 = stattests_taggedTemplateLiteral(["confiscated love note"])))) > 0) {
    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(stattests_templateObject39 || (stattests_templateObject39 = stattests_taggedTemplateLiteral(["confiscated love note"]))));
  }

  if (!lib_have($effect(stattests_templateObject40 || (stattests_templateObject40 = stattests_taggedTemplateLiteral(["Unrunnable Face"]))))) {
    tryUse(1, template_string_$item(stattests_templateObject41 || (stattests_templateObject41 = stattests_taggedTemplateLiteral(["runproof mascara"]))));
  }
}

function moxTestPrep() {
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(stattests_templateObject42 || (stattests_templateObject42 = stattests_taggedTemplateLiteral(["Left-Hand Man"]))));

  if (moxPredictor() > 1) {
    ensureInnerElf();
  }

  moxieOutfit();
}

function moxTest() {
  moxBuffs();
  moxTestPrep();

  if (moxPredictor() > 1) {
    throw "Not enough moxie to cap.";
  }

  return moxPredictor();
}

function hpBuffs() {
  equalizeMuscle();
  lib_ensureEffect($effect(stattests_templateObject43 || (stattests_templateObject43 = stattests_taggedTemplateLiteral(["Big"]))));
  lib_ensureEffect($effect(stattests_templateObject44 || (stattests_templateObject44 = stattests_taggedTemplateLiteral(["Song of Starch"]))));
  lib_ensureEffect($effect(stattests_templateObject45 || (stattests_templateObject45 = stattests_taggedTemplateLiteral(["Rage of the Reindeer"]))));
  lib_ensureEffect($effect(stattests_templateObject46 || (stattests_templateObject46 = stattests_taggedTemplateLiteral(["Quiet Determination"]))));
  lib_ensureEffect($effect(stattests_templateObject47 || (stattests_templateObject47 = stattests_taggedTemplateLiteral(["Disdain of the War Snapper"]))));
  lib_ensureEffect($effect(stattests_templateObject48 || (stattests_templateObject48 = stattests_taggedTemplateLiteral(["Feeling Excited"]))));
  lib_ensureEffect($effect(stattests_templateObject49 || (stattests_templateObject49 = stattests_taggedTemplateLiteral(["The Power of LOV"]))));

  if (!lib_have($effect(stattests_templateObject50 || (stattests_templateObject50 = stattests_taggedTemplateLiteral(["Go Get 'Em, Tiger!"]))))) {
    (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(stattests_templateObject51 || (stattests_templateObject51 = stattests_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))));
    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(stattests_templateObject52 || (stattests_templateObject52 = stattests_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))));
  }
}

var hpPredictor = () => 60 - Math.floor(((0,external_kolmafia_namespaceObject.myMaxhp)() - (0,external_kolmafia_namespaceObject.myBuffedstat)($stat(stattests_templateObject53 || (stattests_templateObject53 = stattests_taggedTemplateLiteral(["muscle"])))) - 3) / 30);

function hpTestPrep() {
  hpOutfit();
}

function HPTest() {
  hpBuffs();
  hpTestPrep();

  if (hpPredictor() > 1) {
    throw "Failed to cap HP";
  }

  return hpPredictor();
}
;// CONCATENATED MODULE: ./src/weapon.ts
var weapon_templateObject, weapon_templateObject2, weapon_templateObject3, weapon_templateObject4, weapon_templateObject5, weapon_templateObject6, weapon_templateObject7, weapon_templateObject8, weapon_templateObject9, weapon_templateObject10, weapon_templateObject11, weapon_templateObject12, weapon_templateObject13, weapon_templateObject14, weapon_templateObject15, weapon_templateObject16, weapon_templateObject17, weapon_templateObject18, weapon_templateObject19, weapon_templateObject20, weapon_templateObject21, weapon_templateObject22, weapon_templateObject23, weapon_templateObject24, weapon_templateObject25, weapon_templateObject26, weapon_templateObject27, weapon_templateObject28, weapon_templateObject29, weapon_templateObject30, weapon_templateObject31, weapon_templateObject32, weapon_templateObject33, weapon_templateObject34;

function weapon_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var weapon_predictor = () => 60 - Math.floor((0,external_kolmafia_namespaceObject.numericModifier)("weapon damage") / 25 + 0.001) - Math.floor((0,external_kolmafia_namespaceObject.numericModifier)("weapon damage percent") / 25 + 0.001);

function getCrushed() {
  if (!lib_have($effect(weapon_templateObject || (weapon_templateObject = weapon_taggedTemplateLiteral(["Do You Crush What I Crush?"]))))) {
    if (lib_have($effect(weapon_templateObject2 || (weapon_templateObject2 = weapon_taggedTemplateLiteral(["Holiday Yoked"])))) && lib_have(template_string_$item(weapon_templateObject3 || (weapon_templateObject3 = weapon_taggedTemplateLiteral(["soft green echo eyedrop antidote"]))))) {
      uneffect($effect(weapon_templateObject4 || (weapon_templateObject4 = weapon_taggedTemplateLiteral(["Holiday Yoked"]))));
    }

    if (!lib_have($effect(weapon_templateObject5 || (weapon_templateObject5 = weapon_taggedTemplateLiteral(["Holiday Yoked"]))))) {
      (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(weapon_templateObject6 || (weapon_templateObject6 = weapon_taggedTemplateLiteral(["Ghost of Crimbo Carols"]))));
      uniform();

      if (horsery().includes("pale")) {
        horse("dark");
      }

      advMacroAA($location(weapon_templateObject7 || (weapon_templateObject7 = weapon_taggedTemplateLiteral(["The Dire Warren"]))), combat_Macro.skill($skill(weapon_templateObject8 || (weapon_templateObject8 = weapon_taggedTemplateLiteral(["Feel Hatred"])))));
    }
  }
}

function weapon_castBuffs() {
  $effects(weapon_templateObject9 || (weapon_templateObject9 = weapon_taggedTemplateLiteral(["Carol of the Bulls, Song of the North, Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, Tenacity of the Snapper, Billiards Belligerence, Blessing of the Bird, Jackasses' Symphony of Destruction"]))).forEach(effect => lib_ensureEffect(effect));
  lib_ensureEffect($effect(weapon_templateObject10 || (weapon_templateObject10 = weapon_taggedTemplateLiteral(["Frenzied, Bloody"]))));
  if (lib_have(template_string_$item(weapon_templateObject11 || (weapon_templateObject11 = weapon_taggedTemplateLiteral(["LOV Elixir #3"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(weapon_templateObject12 || (weapon_templateObject12 = weapon_taggedTemplateLiteral(["LOV Elixir #3"]))));
  tryHead($effect(weapon_templateObject13 || (weapon_templateObject13 = weapon_taggedTemplateLiteral(["Lack of Body-Building"]))));
}

function forceSpit() {
  if (!property_get("_photocopyUsed")) {
    uniform();
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(weapon_templateObject14 || (weapon_templateObject14 = weapon_taggedTemplateLiteral(["Melodramedary"]))));
    setChoice(1387, 3);
    combat_Macro.trySkill($skill(weapon_templateObject15 || (weapon_templateObject15 = weapon_taggedTemplateLiteral(["%fn, spit on me!"])))).skill($skill(weapon_templateObject16 || (weapon_templateObject16 = weapon_taggedTemplateLiteral(["Use the Force"])))).setAutoAttack();

    try {
      setClan(property_get("phccs_mainClan", "Beldungeon"));
      fax($monster(weapon_templateObject17 || (weapon_templateObject17 = weapon_taggedTemplateLiteral(["ungulith"]))));
    } finally {
      setClan(property_get("phccs_mainClan", "Alliance From Heck"));
    }

    (0,external_kolmafia_namespaceObject.use)(template_string_$item(weapon_templateObject18 || (weapon_templateObject18 = weapon_taggedTemplateLiteral(["photocopied monster"]))));
    if ((0,external_kolmafia_namespaceObject.handlingChoice)()) (0,external_kolmafia_namespaceObject.runChoice)(-1);
  }
}

function kungFuMeteors() {
  if (!lib_have($effect(weapon_templateObject19 || (weapon_templateObject19 = weapon_taggedTemplateLiteral(["Meteor Showered"])))) && property_get("_meteorShowerUses") < 5) {
    uniform();

    if (lib_have(template_string_$familiar(weapon_templateObject20 || (weapon_templateObject20 = weapon_taggedTemplateLiteral(["Disembodied Hand"]))))) {
      (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(weapon_templateObject21 || (weapon_templateObject21 = weapon_taggedTemplateLiteral(["Disembodied Hand"]))));
      (0,external_kolmafia_namespaceObject.equip)($slot(weapon_templateObject22 || (weapon_templateObject22 = weapon_taggedTemplateLiteral(["weapon"]))), template_string_$item(weapon_templateObject23 || (weapon_templateObject23 = weapon_taggedTemplateLiteral(["none"]))));
      (0,external_kolmafia_namespaceObject.equip)($slot(weapon_templateObject24 || (weapon_templateObject24 = weapon_taggedTemplateLiteral(["off-hand"]))), template_string_$item(weapon_templateObject25 || (weapon_templateObject25 = weapon_taggedTemplateLiteral(["none"]))));
      (0,external_kolmafia_namespaceObject.equip)($slot(weapon_templateObject26 || (weapon_templateObject26 = weapon_taggedTemplateLiteral(["familiar"]))), template_string_$item(weapon_templateObject27 || (weapon_templateObject27 = weapon_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
    } else {
      useDefaultFamiliar(false);
    }

    setChoice(1387, 3);
    advMacroAA($location(weapon_templateObject28 || (weapon_templateObject28 = weapon_taggedTemplateLiteral(["The Neverending Party"]))), combat_Macro.skill($skill(weapon_templateObject29 || (weapon_templateObject29 = weapon_taggedTemplateLiteral(["Meteor Shower"])))).skill($skill(weapon_templateObject30 || (weapon_templateObject30 = weapon_taggedTemplateLiteral(["Use the Force"])))));
    if ((0,external_kolmafia_namespaceObject.handlingChoice)()) (0,external_kolmafia_namespaceObject.runChoice)(-1);
    _set("_meteorShowerUses", 1 + property_get("_meteorShowerUses"));
  }
}

function weapon_testPrep() {
  if (lib_have(template_string_$item(weapon_templateObject31 || (weapon_templateObject31 = weapon_taggedTemplateLiteral(["corrupted marrow"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(weapon_templateObject32 || (weapon_templateObject32 = weapon_taggedTemplateLiteral(["corrupted marrow"]))));
  if (!property_get("_bowleggedSwaggerUsed")) (0,external_kolmafia_namespaceObject.useSkill)($skill(weapon_templateObject33 || (weapon_templateObject33 = weapon_taggedTemplateLiteral(["Bow-Legged Swagger"]))));
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(weapon_templateObject34 || (weapon_templateObject34 = weapon_taggedTemplateLiteral(["Disembodied Hand"]))));
  weaponOutfit();
}

function weaponTest() {
  weapon_castBuffs();
  getCrushed();
  forceSpit();
  ensureInnerElf();
  kungFuMeteors();
  weapon_testPrep();
  if (weapon_predictor() > 1) throw "Failed to cap weapon damage!";
  return weapon_predictor();
}
;// CONCATENATED MODULE: ./src/index.ts
var src_templateObject, src_templateObject2, src_templateObject3, src_templateObject4, src_templateObject5;

function src_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












 //preamble

if ((0,external_kolmafia_namespaceObject.myPathId)() !== 25) (0,external_kolmafia_namespaceObject.abort)();
(0,external_kolmafia_namespaceObject.visitUrl)("council.php");
(0,external_kolmafia_namespaceObject.cliExecute)("ccs twiddle");
PropertyManager.set({
  customCombatScript: "twiddle",
  battleAction: "custom combat script",
  dontStopForCounters: true,
  hpAutoRecovery: -0.05,
  mpAutoRecovery: -0.05,
  logPreferenceChange: true
});
var startTime = (0,external_kolmafia_namespaceObject.gametimeToInt)();

try {
  testWrapper("wire-coiling", Test.COIL_WIRE, coilWire);
  if ((0,external_kolmafia_namespaceObject.myLevel)() < 13) levelUp();
  testWrapper("moxie", Test.MOX, moxTest);
  testWrapper("HP", Test.HP, HPTest);
  testWrapper("muscle", Test.MUS, muscleTest);
  testWrapper("mysticality", Test.MYS, mystTest);
  if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(src_templateObject || (src_templateObject = src_taggedTemplateLiteral(["astral six-pack"])))) !== 0) (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(src_templateObject2 || (src_templateObject2 = src_taggedTemplateLiteral(["astral six-pack"]))));
  if (lib_have($effect(src_templateObject3 || (src_templateObject3 = src_taggedTemplateLiteral(["The Magical Mojomuscular Melody"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("shrug The Magical Mojomuscular Melody");
  (0,external_kolmafia_namespaceObject.useSkill)($skill(src_templateObject4 || (src_templateObject4 = src_taggedTemplateLiteral(["The Ode to Booze"]))));

  while ((0,external_kolmafia_namespaceObject.myInebriety)() < 5) {
    (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(src_templateObject5 || (src_templateObject5 = src_taggedTemplateLiteral(["astral pilsner"]))));
  }

  testWrapper("item", Test.ITEM, itemTest);
  testWrapper("hot res", Test.HOT_RES, hotTest);
  testWrapper("noncombat", Test.NONCOMBAT, noncombatTest);
  testWrapper("familiar", Test.FAMILIAR, familiarTest);
  testWrapper("weapon damage", Test.WEAPON, weaponTest);
  testWrapper("spell damage", Test.SPELL, spellTest);
} finally {
  tests.forEach(testDuration => {
    (0,external_kolmafia_namespaceObject.print)("We expected the ".concat(testDuration.testName, " test to take ").concat(testDuration.turnPrediction, " turns, and it cost ").concat(testDuration.turnCost, " turns."), "blue");
  });
  (0,external_kolmafia_namespaceObject.print)("This loop took ".concat(convertMilliseconds((0,external_kolmafia_namespaceObject.gametimeToInt)() - startTime), ", assuming it ran contiguously. Otherwise, this run of the program lasted that much time. Hope whatever number you see is good!"), "red");

  if (["food", "booze"].includes(property_get("_questPartyFairQuest"))) {
    var partyFairInfo = property_get("_questPartyFairProgress").split(" ");
    (0,external_kolmafia_namespaceObject.print)("Gerald/ine wants ".concat(partyFairInfo[0], " ").concat((0,external_kolmafia_namespaceObject.toItem)(partyFairInfo[1]).plural, ", please!"), "red");
  }

  (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
  PropertyManager.resetAll();
}
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;