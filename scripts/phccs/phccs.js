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

/***/ 9882:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(794);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  }

  return it;
};

/***/ }),

/***/ 6288:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3649);

var create = __webpack_require__(3590);

var definePropertyModule = __webpack_require__(4615);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
} // add a key to Array.prototype[@@unscopables]


module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ 6733:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var charAt = __webpack_require__(6389).charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex


module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
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

/***/ 3579:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toObject = __webpack_require__(1324);

var toAbsoluteIndex = __webpack_require__(6782);

var toLength = __webpack_require__(97); // `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill


module.exports = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) {
    O[index++] = value;
  }

  return O;
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

/***/ 4805:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(2938);

var IndexedObject = __webpack_require__(5044);

var toObject = __webpack_require__(1324);

var toLength = __webpack_require__(97);

var arraySpeciesCreate = __webpack_require__(4822);

var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation

var createMethod = function createMethod(TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);

        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3:
              return true;
            // some

            case 5:
              return value;
            // find

            case 6:
              return index;
            // findIndex

            case 2:
              push.call(target, value);
            // filter
          } else switch (TYPE) {
            case 4:
              return false;
            // every

            case 7:
              push.call(target, value);
            // filterOut
          }
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};

/***/ }),

/***/ 9269:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544);

var wellKnownSymbol = __webpack_require__(3649);

var V8_VERSION = __webpack_require__(4061);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

/***/ }),

/***/ 906:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(6544);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

/***/ }),

/***/ 5744:
/***/ ((module) => {

// TODO: use something more complex like timsort?
var floor = Math.floor;

var mergeSort = function mergeSort(array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(mergeSort(array.slice(0, middle), comparefn), mergeSort(array.slice(middle), comparefn), comparefn);
};

var insertionSort = function insertionSort(array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];

    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }

    if (j !== i++) array[j] = element;
  }

  return array;
};

var merge = function merge(left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;
  var result = [];

  while (lindex < llength || rindex < rlength) {
    if (lindex < llength && rindex < rlength) {
      result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
    } else {
      result.push(lindex < llength ? left[lindex++] : right[rindex++]);
    }
  }

  return result;
};

module.exports = mergeSort;

/***/ }),

/***/ 4822:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(794);

var isArray = __webpack_require__(4521);

var wellKnownSymbol = __webpack_require__(3649);

var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

module.exports = function (originalArray, length) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
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

/***/ 3989:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3649);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;

  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) {
      /* empty */
    }
  }

  return false;
};

/***/ }),

/***/ 926:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544);

module.exports = !fails(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

  return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),

/***/ 4683:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var IteratorPrototype = __webpack_require__(2365).IteratorPrototype;

var create = __webpack_require__(3590);

var createPropertyDescriptor = __webpack_require__(4677);

var setToStringTag = __webpack_require__(8821);

var Iterators = __webpack_require__(339);

var returnThis = function returnThis() {
  return this;
};

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, {
    next: createPropertyDescriptor(1, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
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

/***/ 9012:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var createIteratorConstructor = __webpack_require__(4683);

var getPrototypeOf = __webpack_require__(729);

var setPrototypeOf = __webpack_require__(7496);

var setToStringTag = __webpack_require__(8821);

var createNonEnumerableProperty = __webpack_require__(57);

var redefine = __webpack_require__(1270);

var wellKnownSymbol = __webpack_require__(3649);

var IS_PURE = __webpack_require__(6268);

var Iterators = __webpack_require__(339);

var IteratorsCore = __webpack_require__(2365);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function getIterationMethod(KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      } // Set @@toStringTag to native iterators


      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;

    defaultIterator = function values() {
      return nativeIterator.call(this);
    };
  } // define iterator


  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }

  Iterators[NAME] = defaultIterator; // export additional methods

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
    } else $({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  }

  return methods;
};

/***/ }),

/***/ 2219:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(1287);

var has = __webpack_require__(4402);

var wrappedWellKnownSymbolModule = __webpack_require__(491);

var defineProperty = __webpack_require__(4615).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
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

/***/ 5857:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(6918);

var firefox = userAgent.match(/firefox\/(\d+)/i);
module.exports = !!firefox && +firefox[1];

/***/ }),

/***/ 924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var UA = __webpack_require__(6918);

module.exports = /MSIE|Trident/.test(UA);

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

/***/ 3:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(6918);

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
module.exports = !!webkit && +webkit[1];

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

/***/ 783:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
 // TODO: Remove from `core-js@4` since it's moved to entry points

__webpack_require__(2322);

var redefine = __webpack_require__(1270);

var regexpExec = __webpack_require__(8445);

var fails = __webpack_require__(6544);

var wellKnownSymbol = __webpack_require__(3649);

var createNonEnumerableProperty = __webpack_require__(57);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;

      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

/***/ }),

/***/ 1266:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isArray = __webpack_require__(4521);

var toLength = __webpack_require__(97);

var bind = __webpack_require__(2938); // `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray


var flattenIntoArray = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }

    sourceIndex++;
  }

  return targetIndex;
};

module.exports = flattenIntoArray;

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

/***/ 1335:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var aFunction = __webpack_require__(6163);

var isObject = __webpack_require__(794);

var slice = [].slice;
var factories = {};

var construct = function construct(C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) {
      list[i] = 'a[' + i + ']';
    } // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only


    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  }

  return factories[argsLength](C, args);
}; // `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind


module.exports = Function.bind || function bind(that
/* , ...args */
) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);

  var boundFunction = function bound() {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };

  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
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

/***/ 4305:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toObject = __webpack_require__(1324);

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g; // `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution

module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }

  return replace.call(replacement, symbols, function (match, ch) {
    var capture;

    switch (ch.charAt(0)) {
      case '$':
        return '$';

      case '&':
        return matched;

      case '`':
        return str.slice(0, position);

      case "'":
        return str.slice(tailPos);

      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;

      default:
        // \d\d?
        var n = +ch;
        if (n === 0) return match;

        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }

        capture = captures[n - 1];
    }

    return capture === undefined ? '' : capture;
  });
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

/***/ 482:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(5897);

module.exports = getBuiltIn('document', 'documentElement');

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

/***/ 434:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(794);

var setPrototypeOf = __webpack_require__(7496); // makes subclassing work correct for wrapped built-ins


module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if ( // it can work only with native `setPrototypeOf`
  setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

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

/***/ 4521:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(9624); // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe


module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
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

/***/ 7574:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(794);

var classof = __webpack_require__(9624);

var wellKnownSymbol = __webpack_require__(3649);

var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

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

/***/ 2365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(6544);

var getPrototypeOf = __webpack_require__(729);

var createNonEnumerableProperty = __webpack_require__(57);

var has = __webpack_require__(4402);

var wellKnownSymbol = __webpack_require__(3649);

var IS_PURE = __webpack_require__(6268);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function returnThis() {
  return this;
}; // `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object


var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {}; // FF44- legacy iterators case

  return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {}; // `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
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

/***/ 9041:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isRegExp = __webpack_require__(7574);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  }

  return it;
};

/***/ }),

/***/ 5407:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var trim = __webpack_require__(8940).trim;

var whitespaces = __webpack_require__(771);

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22; // `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix

module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
} : $parseInt;

/***/ }),

/***/ 9304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(8494);

var fails = __webpack_require__(6544);

var objectKeys = __webpack_require__(5432);

var getOwnPropertySymbolsModule = __webpack_require__(4012);

var propertyIsEnumerableModule = __webpack_require__(112);

var toObject = __webpack_require__(1324);

var IndexedObject = __webpack_require__(5044); // eslint-disable-next-line es/no-object-assign -- safe


var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

var defineProperty = Object.defineProperty; // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign

module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({
    b: 1
  }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function get() {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

  var A = {};
  var B = {}; // eslint-disable-next-line es/no-symbol -- safe

  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;

  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

/***/ }),

/***/ 3590:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(2569);

var defineProperties = __webpack_require__(8728);

var enumBugKeys = __webpack_require__(5690);

var hiddenKeys = __webpack_require__(4639);

var html = __webpack_require__(482);

var documentCreateElement = __webpack_require__(6668);

var sharedKey = __webpack_require__(9137);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function EmptyConstructor() {
  /* empty */
};

var scriptTag = function scriptTag(content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var _NullProtoObject = function NullProtoObject() {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  _NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;

  while (length--) {
    delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  }

  return _NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _NullProtoObject();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

/***/ }),

/***/ 8728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var definePropertyModule = __webpack_require__(4615);

var anObject = __webpack_require__(2569);

var objectKeys = __webpack_require__(5432); // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe


module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) {
    definePropertyModule.f(O, key = keys[index++], Properties[key]);
  }

  return O;
};

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

/***/ 3130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __webpack_require__(2977);

var $getOwnPropertyNames = __webpack_require__(9275).f;

var toString = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
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

/***/ 729:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(4402);

var toObject = __webpack_require__(1324);

var sharedKey = __webpack_require__(9137);

var CORRECT_PROTOTYPE_GETTER = __webpack_require__(926);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe

module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectPrototype : null;
};

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

/***/ 7496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(2569);

var aPossiblePrototype = __webpack_require__(9882); // `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe


module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

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

/***/ 3060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var TO_STRING_TAG_SUPPORT = __webpack_require__(8191);

var classof = __webpack_require__(3058); // `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring


module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
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

/***/ 4214:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(9624);

var regexpExec = __webpack_require__(8445); // `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec


module.exports = function (R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

/***/ }),

/***/ 8445:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

/* eslint-disable regexp/no-useless-quantifier -- testing */

var regexpFlags = __webpack_require__(1118);

var stickyHelpers = __webpack_require__(5230);

var shared = __webpack_require__(7836);

var create = __webpack_require__(3590);

var getInternalState = __webpack_require__(2743).get;

var UNSUPPORTED_DOT_ALL = __webpack_require__(4121);

var UNSUPPORTED_NCG = __webpack_require__(1712);

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(str) {
    var re = this;
    var state = getInternalState(re);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');

      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);

      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;

/***/ }),

/***/ 1118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(2569); // `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),

/***/ 5230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var fails = __webpack_require__(6544); // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,


var RE = function RE(s, f) {
  return RegExp(s, f);
};

exports.UNSUPPORTED_Y = fails(function () {
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});
exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

/***/ }),

/***/ 4121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544);

module.exports = fails(function () {
  // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var re = RegExp('.', (typeof '').charAt(0));
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

/***/ }),

/***/ 1712:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544);

module.exports = fails(function () {
  // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
  var re = RegExp('(?<a>b)', (typeof '').charAt(5));
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
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

/***/ 7730:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getBuiltIn = __webpack_require__(5897);

var definePropertyModule = __webpack_require__(4615);

var wellKnownSymbol = __webpack_require__(3649);

var DESCRIPTORS = __webpack_require__(8494);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function get() {
        return this;
      }
    });
  }
};

/***/ }),

/***/ 8821:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(4615).f;

var has = __webpack_require__(4402);

var wellKnownSymbol = __webpack_require__(3649);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, {
      configurable: true,
      value: TAG
    });
  }
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

/***/ 564:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(2569);

var aFunction = __webpack_require__(6163);

var wellKnownSymbol = __webpack_require__(3649);

var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};

/***/ }),

/***/ 6389:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(5089);

var requireObjectCoercible = __webpack_require__(3955); // `String.prototype.{ codePointAt, at }` methods implementation


var createMethod = function createMethod(CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

/***/ }),

/***/ 8940:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(3955);

var whitespaces = __webpack_require__(771);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

var createMethod = function createMethod(TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

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

/***/ 491:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3649);

exports.f = wellKnownSymbol;

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

/***/ 771:
/***/ ((module) => {

// a string of all valid unicode whitespaces
module.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002" + "\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

/***/ }),

/***/ 1646:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var fails = __webpack_require__(6544);

var isArray = __webpack_require__(4521);

var isObject = __webpack_require__(794);

var toObject = __webpack_require__(1324);

var toLength = __webpack_require__(97);

var createProperty = __webpack_require__(5999);

var arraySpeciesCreate = __webpack_require__(4822);

var arrayMethodHasSpeciesSupport = __webpack_require__(9269);

var wellKnownSymbol = __webpack_require__(3649);

var V8_VERSION = __webpack_require__(4061);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function isConcatSpreadable(O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) {
          if (k in E) createProperty(A, n, E[k]);
        }
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

/***/ }),

/***/ 1271:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var fill = __webpack_require__(3579);

var addToUnscopables = __webpack_require__(6288); // `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill


$({
  target: 'Array',
  proto: true
}, {
  fill: fill
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('fill');

/***/ }),

/***/ 8833:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var $filter = __webpack_require__(4805).filter;

var arrayMethodHasSpeciesSupport = __webpack_require__(9269);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ 7715:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var $find = __webpack_require__(4805).find;

var addToUnscopables = __webpack_require__(6288);

var FIND = 'find';
var SKIPS_HOLES = true; // Shouldn't skip holes

if (FIND in []) Array(1)[FIND](function () {
  SKIPS_HOLES = false;
}); // `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find

$({
  target: 'Array',
  proto: true,
  forced: SKIPS_HOLES
}, {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables(FIND);

/***/ }),

/***/ 655:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var flattenIntoArray = __webpack_require__(1266);

var toObject = __webpack_require__(1324);

var toLength = __webpack_require__(97);

var aFunction = __webpack_require__(6163);

var arraySpeciesCreate = __webpack_require__(4822); // `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap


$({
  target: 'Array',
  proto: true
}, {
  flatMap: function flatMap(callbackfn
  /* , thisArg */
  ) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});

/***/ }),

/***/ 2076:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var $includes = __webpack_require__(5766).includes;

var addToUnscopables = __webpack_require__(6288); // `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes


$({
  target: 'Array',
  proto: true
}, {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('includes');

/***/ }),

/***/ 5677:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toIndexedObject = __webpack_require__(2977);

var addToUnscopables = __webpack_require__(6288);

var Iterators = __webpack_require__(339);

var InternalStateModule = __webpack_require__(2743);

var defineIterator = __webpack_require__(9012);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator

module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject

Iterators.Arguments = Iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ 2070:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var $map = __webpack_require__(4805).map;

var arrayMethodHasSpeciesSupport = __webpack_require__(9269);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ 288:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var isObject = __webpack_require__(794);

var isArray = __webpack_require__(4521);

var toAbsoluteIndex = __webpack_require__(6782);

var toLength = __webpack_require__(97);

var toIndexedObject = __webpack_require__(2977);

var createProperty = __webpack_require__(5999);

var wellKnownSymbol = __webpack_require__(3649);

var arrayMethodHasSpeciesSupport = __webpack_require__(9269);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max; // `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));

    for (n = 0; k < fin; k++, n++) {
      if (k in O) createProperty(result, n, O[k]);
    }

    result.length = n;
    return result;
  }
});

/***/ }),

/***/ 4486:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var aFunction = __webpack_require__(6163);

var toObject = __webpack_require__(1324);

var toLength = __webpack_require__(97);

var fails = __webpack_require__(6544);

var internalSort = __webpack_require__(5744);

var arrayMethodIsStrict = __webpack_require__(906);

var FF = __webpack_require__(5857);

var IE_OR_EDGE = __webpack_require__(924);

var V8 = __webpack_require__(4061);

var WEBKIT = __webpack_require__(3);

var test = [];
var nativeSort = test.sort; // IE8-

var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
}); // V8 bug

var FAILS_ON_NULL = fails(function () {
  test.sort(null);
}); // Old WebKit

var STRICT_METHOD = arrayMethodIsStrict('sort');
var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;
  var result = '';
  var code, chr, value, index; // generate an array with more 512 elements (Chakra and old V8 fails only in this case)

  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66:
      case 69:
      case 70:
      case 72:
        value = 3;
        break;

      case 68:
      case 71:
        value = 4;
        break;

      default:
        value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({
        k: chr + index,
        v: value
      });
    }
  }

  test.sort(function (a, b) {
    return b.v - a.v;
  });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});
var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function getSortCompare(comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return String(x) > String(y) ? 1 : -1;
  };
}; // `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort


$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aFunction(comparefn);
    var array = toObject(this);
    if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn);
    var items = [];
    var arrayLength = toLength(array.length);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) items.push(array[index]);
    }

    items = internalSort(items, getSortCompare(comparefn));
    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) {
      array[index] = items[index++];
    }

    while (index < arrayLength) {
      delete array[index++];
    }

    return array;
  }
});

/***/ }),

/***/ 6270:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(6288); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables


addToUnscopables('flatMap');

/***/ }),

/***/ 6016:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var parseInt = __webpack_require__(5407); // `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing


$({
  target: 'Number',
  stat: true,
  forced: Number.parseInt != parseInt
}, {
  parseInt: parseInt
});

/***/ }),

/***/ 4517:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var assign = __webpack_require__(9304); // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing


$({
  target: 'Object',
  stat: true,
  forced: Object.assign !== assign
}, {
  assign: assign
});

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

/***/ 9174:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var DESCRIPTORS = __webpack_require__(8494);

var ownKeys = __webpack_require__(929);

var toIndexedObject = __webpack_require__(2977);

var getOwnPropertyDescriptorModule = __webpack_require__(6683);

var createProperty = __webpack_require__(5999); // `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors


$({
  target: 'Object',
  stat: true,
  sham: !DESCRIPTORS
}, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;

    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }

    return result;
  }
});

/***/ }),

/***/ 6394:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(8191);

var redefine = __webpack_require__(1270);

var toString = __webpack_require__(3060); // `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring


if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, {
    unsafe: true
  });
}

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

/***/ 3080:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var getBuiltIn = __webpack_require__(5897);

var aFunction = __webpack_require__(6163);

var anObject = __webpack_require__(2569);

var isObject = __webpack_require__(794);

var create = __webpack_require__(3590);

var bind = __webpack_require__(1335);

var fails = __webpack_require__(6544);

var nativeConstruct = getBuiltIn('Reflect', 'construct'); // `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it

var NEW_TARGET_BUG = fails(function () {
  function F() {
    /* empty */
  }

  return !(nativeConstruct(function () {
    /* empty */
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () {
    /* empty */
  });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;
$({
  target: 'Reflect',
  stat: true,
  forced: FORCED,
  sham: FORCED
}, {
  construct: function construct(Target, args
  /* , newTarget */
  ) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);

    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();

        case 1:
          return new Target(args[0]);

        case 2:
          return new Target(args[0], args[1]);

        case 3:
          return new Target(args[0], args[1], args[2]);

        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      } // w/o altered newTarget, lot of arguments case


      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    } // with altered newTarget, not support built-in constructors


    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),

/***/ 7390:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var global = __webpack_require__(7583);

var isForced = __webpack_require__(4451);

var inheritIfRequired = __webpack_require__(434);

var createNonEnumerableProperty = __webpack_require__(57);

var defineProperty = __webpack_require__(4615).f;

var getOwnPropertyNames = __webpack_require__(9275).f;

var isRegExp = __webpack_require__(7574);

var getFlags = __webpack_require__(1118);

var stickyHelpers = __webpack_require__(5230);

var redefine = __webpack_require__(1270);

var fails = __webpack_require__(6544);

var has = __webpack_require__(4402);

var enforceInternalState = __webpack_require__(2743).enforce;

var setSpecies = __webpack_require__(7730);

var wellKnownSymbol = __webpack_require__(3649);

var UNSUPPORTED_DOT_ALL = __webpack_require__(4121);

var UNSUPPORTED_NCG = __webpack_require__(1712);

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype; // TODO: Use only propper RegExpIdentifierName

var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g; // "new" should create a new object, old webkit bug

var CORRECT_NEW = new NativeRegExp(re1) !== re1;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var BASE_FORCED = DESCRIPTORS && (!CORRECT_NEW || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
  re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
}));

var handleDotAll = function handleDotAll(string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;

  for (; index <= length; index++) {
    chr = string.charAt(index);

    if (chr === '\\') {
      result += chr + string.charAt(++index);
      continue;
    }

    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      }

      result += chr;
    }
  }

  return result;
};

var handleNCG = function handleNCG(string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;

  for (; index <= length; index++) {
    chr = string.charAt(index);

    if (chr === '\\') {
      chr = chr + string.charAt(++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;

      case chr === '(':
        if (IS_NCG.test(string.slice(index + 1))) {
          index += 2;
          ncg = true;
        }

        result += chr;
        groupid++;
        continue;

      case chr === '>' && ncg:
        if (groupname === '' || has(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }

        names[groupname] = true;
        named.push([groupname, groupid]);
        ncg = false;
        groupname = '';
        continue;
    }

    if (ncg) groupname += chr;else result += chr;
  }

  return [result, named];
}; // `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor


if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || pattern instanceof RegExpWrapper) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags.call(rawPattern);
    }

    pattern = pattern === undefined ? '' : String(pattern);
    flags = flags === undefined ? '' : String(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && flags.indexOf('s') > -1;
      if (dotAll) flags = flags.replace(/s/g, '');
    }

    rawFlags = flags;

    if (UNSUPPORTED_Y && 'sticky' in re1) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);

      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }

      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) {
      /* empty */
    }
    return result;
  };

  var proxy = function proxy(key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function get() {
        return NativeRegExp[key];
      },
      set: function set(it) {
        NativeRegExp[key] = it;
      }
    });
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxy(keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
} // https://tc39.es/ecma262/#sec-get-regexp-@@species


setSpecies('RegExp');

/***/ }),

/***/ 2322:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var exec = __webpack_require__(8445); // `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec


$({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec
}, {
  exec: exec
});

/***/ }),

/***/ 4669:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var redefine = __webpack_require__(1270);

var anObject = __webpack_require__(2569);

var fails = __webpack_require__(6544);

var flags = __webpack_require__(1118);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails(function () {
  return nativeToString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
}); // FF44- RegExp#toString has a wrong name

var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring

if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, {
    unsafe: true
  });
}

/***/ }),

/***/ 3223:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var getOwnPropertyDescriptor = __webpack_require__(6683).f;

var toLength = __webpack_require__(97);

var notARegExp = __webpack_require__(9041);

var requireObjectCoercible = __webpack_require__(3955);

var correctIsRegExpLogic = __webpack_require__(3989);

var IS_PURE = __webpack_require__(6268); // eslint-disable-next-line es/no-string-prototype-endswith -- safe


var $endsWith = ''.endsWith;
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith'); // https://github.com/zloirock/core-js/pull/702

var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}(); // `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith

$({
  target: 'String',
  proto: true,
  forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
  endsWith: function endsWith(searchString
  /* , endPosition = @length */
  ) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

/***/ }),

/***/ 7723:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var notARegExp = __webpack_require__(9041);

var requireObjectCoercible = __webpack_require__(3955);

var correctIsRegExpLogic = __webpack_require__(3989); // `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes


$({
  target: 'String',
  proto: true,
  forced: !correctIsRegExpLogic('includes')
}, {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~String(requireObjectCoercible(this)).indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ 5017:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fixRegExpWellKnownSymbolLogic = __webpack_require__(783);

var anObject = __webpack_require__(2569);

var toLength = __webpack_require__(97);

var requireObjectCoercible = __webpack_require__(3955);

var advanceStringIndex = __webpack_require__(6733);

var regExpExec = __webpack_require__(4214); // @@match logic


fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [// `String.prototype.match` method
  // https://tc39.es/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = requireObjectCoercible(this);
    var matcher = regexp == undefined ? undefined : regexp[MATCH];
    return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, // `RegExp.prototype[@@match]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
  function (string) {
    var res = maybeCallNative(nativeMatch, this, string);
    if (res.done) return res.value;
    var rx = anObject(this);
    var S = String(string);
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;

    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      n++;
    }

    return n === 0 ? null : A;
  }];
});

/***/ }),

/***/ 3296:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fixRegExpWellKnownSymbolLogic = __webpack_require__(783);

var fails = __webpack_require__(6544);

var anObject = __webpack_require__(2569);

var toLength = __webpack_require__(97);

var toInteger = __webpack_require__(5089);

var requireObjectCoercible = __webpack_require__(3955);

var advanceStringIndex = __webpack_require__(6733);

var getSubstitution = __webpack_require__(4305);

var regExpExec = __webpack_require__(4214);

var wellKnownSymbol = __webpack_require__(3649);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;

var maybeToString = function maybeToString(it) {
  return it === undefined ? it : String(it);
}; // IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0


var REPLACE_KEEPS_$0 = function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
}(); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string


var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }

  return false;
}();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };

  return ''.replace(re, '$<a>') !== '7';
}); // @@replace logic

fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
  return [// `String.prototype.replace` method
  // https://tc39.es/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
    return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
  function (string, replaceValue) {
    if (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 && replaceValue.indexOf('$<') === -1) {
      var res = maybeCallNative(nativeReplace, this, string, replaceValue);
      if (res.done) return res.value;
    }

    var rx = anObject(this);
    var S = String(string);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = regExpExec(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max(min(toInteger(result.index), S.length), 0);
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      for (var j = 1; j < result.length; j++) {
        captures.push(maybeToString(result[j]));
      }

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + S.slice(nextSourcePosition);
  }];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

/***/ }),

/***/ 9268:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fixRegExpWellKnownSymbolLogic = __webpack_require__(783);

var isRegExp = __webpack_require__(7574);

var anObject = __webpack_require__(2569);

var requireObjectCoercible = __webpack_require__(3955);

var speciesConstructor = __webpack_require__(564);

var advanceStringIndex = __webpack_require__(6733);

var toLength = __webpack_require__(97);

var callRegExpExec = __webpack_require__(4214);

var regexpExec = __webpack_require__(8445);

var stickyHelpers = __webpack_require__(5230);

var fails = __webpack_require__(6544);

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF; // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
}); // @@split logic

fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;

  if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function internalSplit(separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output.length > lim ? output.slice(0, lim) : output;
    }; // Chakra, V8

  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function internalSplit(separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [// `String.prototype.split` method
  // https://tc39.es/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (string, limit) {
    var res = maybeCallNative(internalSplit, this, string, limit, internalSplit !== nativeSplit);
    if (res.done) return res.value;
    var rx = anObject(this);
    var S = String(string);
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
      var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
      var e;

      if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    A.push(S.slice(p));
    return A;
  }];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

/***/ }),

/***/ 8407:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description


var $ = __webpack_require__(7263);

var DESCRIPTORS = __webpack_require__(8494);

var global = __webpack_require__(7583);

var has = __webpack_require__(4402);

var isObject = __webpack_require__(794);

var defineProperty = __webpack_require__(4615).f;

var copyConstructorProperties = __webpack_require__(3478);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
NativeSymbol().description !== undefined)) {
  var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
    : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;
  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });
  $({
    global: true,
    forced: true
  }, {
    Symbol: SymbolWrapper
  });
}

/***/ }),

/***/ 2004:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var global = __webpack_require__(7583);

var getBuiltIn = __webpack_require__(5897);

var IS_PURE = __webpack_require__(6268);

var DESCRIPTORS = __webpack_require__(8494);

var NATIVE_SYMBOL = __webpack_require__(8640);

var USE_SYMBOL_AS_UID = __webpack_require__(7786);

var fails = __webpack_require__(6544);

var has = __webpack_require__(4402);

var isArray = __webpack_require__(4521);

var isObject = __webpack_require__(794);

var anObject = __webpack_require__(2569);

var toObject = __webpack_require__(1324);

var toIndexedObject = __webpack_require__(2977);

var toPrimitive = __webpack_require__(2670);

var createPropertyDescriptor = __webpack_require__(4677);

var nativeObjectCreate = __webpack_require__(3590);

var objectKeys = __webpack_require__(5432);

var getOwnPropertyNamesModule = __webpack_require__(9275);

var getOwnPropertyNamesExternal = __webpack_require__(3130);

var getOwnPropertySymbolsModule = __webpack_require__(4012);

var getOwnPropertyDescriptorModule = __webpack_require__(6683);

var definePropertyModule = __webpack_require__(4615);

var propertyIsEnumerableModule = __webpack_require__(112);

var createNonEnumerableProperty = __webpack_require__(57);

var redefine = __webpack_require__(1270);

var shared = __webpack_require__(7836);

var sharedKey = __webpack_require__(9137);

var hiddenKeys = __webpack_require__(4639);

var uid = __webpack_require__(8284);

var wellKnownSymbol = __webpack_require__(3649);

var wrappedWellKnownSymbolModule = __webpack_require__(491);

var defineWellKnownSymbol = __webpack_require__(2219);

var setToStringTag = __webpack_require__(8821);

var InternalStateModule = __webpack_require__(2743);

var $forEach = __webpack_require__(4805).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function get() {
      return nativeDefineProperty(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);

  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function wrap(tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);

  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, {
        enumerable: createPropertyDescriptor(0, false)
      });
    }

    return setSymbolDescriptor(O, key, Attributes);
  }

  return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);

  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }

  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
}; // `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor


if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);

    var setter = function setter(value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };

    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
      configurable: true,
      set: setter
    });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });
  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });
  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });

    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
        unsafe: true
      });
    }
  }
}

$({
  global: true,
  wrap: true,
  forced: !NATIVE_SYMBOL,
  sham: !NATIVE_SYMBOL
}, {
  Symbol: $Symbol
});
$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});
$({
  target: SYMBOL,
  stat: true,
  forced: !NATIVE_SYMBOL
}, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function _for(key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function useSetter() {
    USE_SETTER = true;
  },
  useSimple: function useSimple() {
    USE_SETTER = false;
  }
});
$({
  target: 'Object',
  stat: true,
  forced: !NATIVE_SYMBOL,
  sham: !DESCRIPTORS
}, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
$({
  target: 'Object',
  stat: true,
  forced: !NATIVE_SYMBOL
}, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

$({
  target: 'Object',
  stat: true,
  forced: fails(function () {
    getOwnPropertySymbolsModule.f(1);
  })
}, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
}); // `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify

if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

    return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
    || $stringify({
      a: symbol
    }) != '{}' // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
  });
  $({
    target: 'JSON',
    stat: true,
    forced: FORCED_JSON_STRINGIFY
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;

      while (arguments.length > index) {
        args.push(arguments[index++]);
      }

      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

      if (!isArray(replacer)) replacer = function replacer(key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
} // `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
} // `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


setToStringTag($Symbol, SYMBOL);
hiddenKeys[HIDDEN] = true;

/***/ }),

/***/ 1662:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(6394);

__webpack_require__(4669);

__webpack_require__(3080);

__webpack_require__(5677);

__webpack_require__(7390);

__webpack_require__(3296);

__webpack_require__(2004);

__webpack_require__(8407);

__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Clan = exports.ClanError = void 0;

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(2322);

__webpack_require__(5017);

__webpack_require__(8833);

__webpack_require__(2070);

__webpack_require__(6016);

__webpack_require__(7715);

__webpack_require__(4486);

__webpack_require__(1646);

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _logger = _interopRequireDefault(__webpack_require__(8685));

var _utils = __webpack_require__(8588);

var _class;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

function _wrapRegExp() {
  _wrapRegExp = function _wrapRegExp(re, groups) {
    return new BabelRegExp(re, undefined, groups);
  };

  var _super = RegExp.prototype;

  var _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);

    _groups.set(_this, groups || _groups.get(re));

    return _setPrototypeOf(_this, BabelRegExp.prototype);
  }

  _inherits(BabelRegExp, RegExp);

  BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    if (result) result.groups = buildGroups(result, this);
    return result;
  };

  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if (typeof substitution === "string") {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    } else if (typeof substitution === "function") {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;

        if (typeof args[args.length - 1] !== "object") {
          args = [].slice.call(args);
          args.push(buildGroups(args, _this));
        }

        return substitution.apply(this, args);
      });
    } else {
      return _super[Symbol.replace].call(this, str, substitution);
    }
  };

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      groups[name] = result[g[name]];
      return groups;
    }, Object.create(null));
  }

  return _wrapRegExp.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var ClanError = /*#__PURE__*/function (_Error) {
  _inherits(ClanError, _Error);

  var _super = _createSuper(ClanError);

  function ClanError(message, reason) {
    var _this;

    _classCallCheck(this, ClanError);

    _this = _super.call(this, message);

    _defineProperty(_assertThisInitialized(_this), "reason", void 0);

    _this.reason = reason;
    Object.setPrototypeOf(_assertThisInitialized(_this), ClanError.prototype);
    return _this;
  }

  return ClanError;
}( /*#__PURE__*/_wrapNativeSuper(Error)); // It would be fantastic to have this function properly typed
// But until someone can work out how to do it, it gets the
// comment blocks of shame

/* eslint-disable */


exports.ClanError = ClanError;

function validate(target, propertyName, descriptor) {
  if (!(descriptor !== null && descriptor !== void 0 && descriptor.value)) return;
  var method = descriptor.value; // @ts-ignore

  descriptor.value = function () {
    // @ts-ignore
    if (this.id !== (0, _kolmafia.getClanId)()) {
      throw new Error("You are no longer a member of this clan");
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return method.apply(this, args);
  };
}
/* eslint-enable */


var clanIdCache = {};

var toPlayerId = player => typeof player === "string" ? (0, _kolmafia.getPlayerId)(player) : player;

var LOG_FAX_PATTERN = /*#__PURE__*/_wrapRegExp(/([0-9]{2}\/[0-9]{2}\/[0-9]{2}, [0-9]{2}:[0-9]{2}(?:AM|PM): )<a (?:(?!>)[\s\S])+>((?:(?!<)[\s\S])+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
});

var WHITELIST_DEGREE_PATTERN = /*#__PURE__*/_wrapRegExp(/(.*?) \(\xB0([0-9]+)\)/, {
  name: 1,
  degree: 2
});

var Clan = (_class = /*#__PURE__*/function () {
  function Clan(id, name) {
    _classCallCheck(this, Clan);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    this.id = id;
    this.name = name;
  }
  /**
   * Join clan
   */


  _createClass(Clan, [{
    key: "join",
    value: function join() {
      return Clan._join(this.id);
    }
  }, {
    key: "check",
    value: function check() {
      return (0, _kolmafia.visitUrl)("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
    /**
     * Return the monster that is currently in the current clan's fax machine if any
     */

  }, {
    key: "getCurrentFax",
    value: function getCurrentFax() {
      var logs = (0, _kolmafia.visitUrl)("clan_log.php");
      var lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax) return null;

      var _lastFax = _slicedToArray(lastFax, 4),
          monsterName = _lastFax[3];

      if (!monsterName) return null;
      return Monster.get(monsterName);
    }
    /**
     * List available ranks (name, degree and id) from the current clan
     */

  }, {
    key: "getRanks",
    value: function getRanks() {
      var page = (0, _kolmafia.visitUrl)("clan_whitelist.php");
      return (0, _kolmafia.xpath)(page, '//select[@name="level"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var match = (0, _kolmafia.xpath)(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN);
        var id = (0, _kolmafia.xpath)(validHtml, "//@value")[0];
        if (!match || !id) return null;

        var _match = _slicedToArray(match, 3),
            name = _match[1],
            degree = _match[2];

        return {
          name: name,
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(_utils.notNull);
    }
    /**
     * Add a player to the current clan's whitelist.
     * If the player is already in the whitelist this will change their rank or title.
     * @param player Player id or name
     * @param rankName Rank to give the player. If not provided they will be given the lowest rank
     * @param title Title to give the player. If not provided, will be blank
     */

  }, {
    key: "addPlayerToWhitelist",
    value: function addPlayerToWhitelist(player, rankName) {
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var playerId = toPlayerId(player);
      var ranks = this.getRanks();
      var rank = rankName ? ranks.find(r => r.name === rankName) : ranks.sort((a, b) => a.degree - b.degree)[0];
      if (!rank) return false;
      var result = (0, _kolmafia.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
    /**
     * Remove a player from the current clan's whitelist
     * @param player Player id or name
     */

  }, {
    key: "removePlayerFromWhitelist",
    value: function removePlayerFromWhitelist(player) {
      var playerId = toPlayerId(player);
      var result = (0, _kolmafia.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
    /**
     * Return the amount of meat in the current clan's coffer.
     */

  }, {
    key: "getMeatInCoffer",
    value: function getMeatInCoffer() {
      var page = (0, _kolmafia.visitUrl)("clan_stash.php");

      var _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"],
          _ref2 = _slicedToArray(_ref, 2),
          meat = _ref2[1];

      return (0, _utils.parseNumber)(meat);
    }
    /**
     * Add the given amount of meat to the current clan's coffer.
     * @param amount Amount of meat to put in coffer
     */

  }, {
    key: "putMeatInCoffer",
    value: function putMeatInCoffer(amount) {
      var result = (0, _kolmafia.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
    /**
     * Take items from the stash
     *
     * This function will also take equivalent foldables if the original item cannot be found
     *
     * @param items Items to take
     * @returns Items successfully taken
     */

  }, {
    key: "take",
    value: function take(items) {
      var map = (0, _utils.arrayToCountedMap)(items);
      map.forEach((quantity, item) => {
        var needed = Math.max(0, quantity - (0, _kolmafia.availableAmount)(item));

        if (needed === 0) {
          return map.set(item, 0);
        }

        var foldGroup = (0, _lib.getFoldGroup)(item);

        var _iterator = _createForOfIteratorHelper(foldGroup),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var foldable = _step.value;
            var quantityToFold = Math.min(needed, (0, _kolmafia.availableAmount)(foldable));

            for (var _i3 = 0; _i3 < quantityToFold; _i3++) {
              (0, _kolmafia.cliExecute)("fold ".concat(item.name));
              needed--;
            }

            return map.set(item, needed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        (0, _kolmafia.refreshStash)();

        for (var _i2 = 0, _arr2 = [item].concat(_toConsumableArray(foldGroup)); _i2 < _arr2.length; _i2++) {
          var matchingItem = _arr2[_i2];
          var quantityToTake = Math.min(needed, (0, _kolmafia.stashAmount)(matchingItem));
          if (quantityToTake === 0) continue; // If we can't take from the stash, there's no sense in iterating through the whole fold group

          if (!(0, _kolmafia.takeStash)(quantityToTake, matchingItem)) return;

          if (matchingItem === item) {
            needed -= quantityToTake;
          } else {
            for (var i = 0; i < quantityToTake; i++) {
              (0, _kolmafia.cliExecute)("fold ".concat(matchingItem.name));
              needed--;
            }
          }
        }
      });
      return Array.isArray(items) ? (0, _utils.countedMapToArray)(map) : map;
    }
    /**
     * Put items in the stash
     * @param items Items to put in the stash
     * @returns Items successfully put in the stash
     */

  }, {
    key: "put",
    value: function put(items) {
      var map = (0, _utils.arrayToCountedMap)(items);
      if (!this.check()) throw new Error("Wanted to return ".concat((0, _utils.countedMapToString)(map), " to ").concat(this.name, " but KoLmafia's clan data is out of sync"));
      map.forEach((quantity, item) => {
        (0, _kolmafia.retrieveItem)(quantity, item);
        var returned = Math.min(quantity, (0, _kolmafia.availableAmount)(item));
        (0, _kolmafia.putStash)(returned, item);
        map.set(item, quantity - returned);
      });
      return Array.isArray(items) ? (0, _utils.countedMapToArray)(map) : map;
    }
    /**
     * Return the monster that is currently in the current clan's fax machine if any
     */

  }, {
    key: "withStash",
    value: function withStash(items, callback) {
      var map = (0, _utils.arrayToCountedMap)(items);
      return Clan._withStash(() => this.take(map), borrowed => this.put(borrowed), callback);
    }
  }], [{
    key: "_join",
    value: function _join(id) {
      var result = (0, _kolmafia.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));

      if (!result.includes("clanhalltop.gif")) {
        throw new Error("Could not join clan");
      }

      return Clan.get();
    }
  }, {
    key: "_withStash",
    value: function _withStash(borrowFn, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    returnFn, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback) {
      var borrowed = borrowFn();
      var map = (0, _utils.arrayToCountedMap)(borrowed);

      try {
        return callback(borrowed);
      } finally {
        if (map.size > 0) {
          var returned = (0, _utils.arrayToCountedMap)(returnFn(borrowed));
          map.forEach((quantity, item) => {
            var remaining = quantity - (returned.get(item) || 0);

            if (remaining > 0) {
              map.set(item, remaining);
            } else {
              map.delete(item);
            }
          });

          if (map.size > 0) {
            _logger.default.error("Failed to return <b>".concat((0, _utils.countedMapToString)(map), "</b> to <b>").concat(this.name, "</b> stash"));
          }
        }
      }
    }
    /**
     * Join a clan and return its instance
     * @param clanIdOrName Clan id or name
     */

  }, {
    key: "join",
    value: function join(clanIdOrName) {
      var clanId;

      if (typeof clanIdOrName === "string") {
        var _clanName = clanIdOrName.toLowerCase();

        if (_clanName === (0, _kolmafia.getClanName)().toLowerCase()) {
          return Clan.get();
        }

        if (!(_clanName in clanIdCache)) {
          var clan = Clan.getWhitelisted().find(c => c.name.toLowerCase() === _clanName);

          if (!clan) {
            throw new Error("Player is not whitelisted to clan");
          }

          clanIdCache[_clanName] = clan.id;
        }

        clanId = clanIdCache[_clanName];
      } else {
        clanId = clanIdOrName;

        if (clanId === (0, _kolmafia.getClanId)()) {
          return Clan.get();
        }
      }

      return Clan._join(clanId);
    }
    /**
     * Execute callback as a member of a clan
     * and then restore prior membership
     * @param clanIdOrName Clan id or name
     */

  }, {
    key: "with",
    value: function _with(clanIdOrName, callback) {
      var startingClan = Clan.get();
      var clan = Clan.join(clanIdOrName);

      try {
        return callback(clan);
      } finally {
        startingClan.join();
      }
    }
    /**
     * Execute callback with items from a clan stash
     * and then restore those items to the stash
     *
     * During the execution of the callback, player will not be in the stash clan
     *
     * @param clanIdOrName Clan id or name
     */

  }, {
    key: "withStash",
    value: function withStash(clanIdOrName, items, // eslint-disable-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    callback) {
      return Clan._withStash(() => Clan.with(clanIdOrName, clan => clan.take(items)), borrowed => Clan.with(clanIdOrName, clan => clan.put(borrowed)), callback);
    }
    /**
     * Return player's current Clan
     */

  }, {
    key: "get",
    value: function get() {
      return new Clan((0, _kolmafia.getClanId)(), (0, _kolmafia.getClanName)());
    }
    /**
     * Get list of clans to which the player is whitelisted
     */

  }, {
    key: "getWhitelisted",
    value: function getWhitelisted() {
      var page = (0, _kolmafia.visitUrl)("clan_signup.php");
      return (0, _kolmafia.xpath)(page, '//select[@name="whichclan"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var id = Number.parseInt((0, _kolmafia.xpath)(validHtml, "//@value")[0]);
        var name = (0, _kolmafia.xpath)(validHtml, "//text()")[0];
        return new Clan(id, name);
      });
    }
  }]);

  return Clan;
}(), (_applyDecoratedDescriptor(_class.prototype, "getCurrentFax", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "getCurrentFax"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getRanks", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "getRanks"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addPlayerToWhitelist", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "addPlayerToWhitelist"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removePlayerFromWhitelist", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "removePlayerFromWhitelist"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getMeatInCoffer", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "getMeatInCoffer"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "putMeatInCoffer", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "putMeatInCoffer"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "take", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "take"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "put", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "put"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "withStash", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "withStash"), _class.prototype)), _class);
exports.Clan = Clan;

/***/ }),

/***/ 3425:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Copier = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Copier = function Copier(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  _classCallCheck(this, Copier);

  _defineProperty(this, "couldCopy", void 0);

  _defineProperty(this, "prepare", void 0);

  _defineProperty(this, "canCopy", void 0);

  _defineProperty(this, "copiedMonster", void 0);

  _defineProperty(this, "fightCopy", null);

  this.couldCopy = couldCopy;
  this.prepare = prepare;
  this.canCopy = canCopy;
  this.copiedMonster = copiedMonster;
  if (fightCopy) this.fightCopy = fightCopy;
} // static PrintScreenButton = new Copier(
//   $item`print screen button`,
//   null,
//   $item`screencapped monster`,
//   () => property.getMonster(`screencappedMonster`),
//   () => 1,
//   () => use($item`screencapped monster`)
// );
// static PulledGreenTaffy = new Copier(
//   $item`pulled green taffy`,
//   null,
//   $item`envyfish egg`,
//   () => property.getMonster(`screencappedMonster`),
//   () => (property.getBoolean("_envyfishEggUsed") ? 0 : 1),
//   () => use($item`envyfish egg`)
// );
;

exports.Copier = Copier;

/***/ }),

/***/ 7912:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Dreadsylvania = exports.SlimeTube = exports.Hobopolis = exports.default = void 0;

__webpack_require__(7715);

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(2322);

__webpack_require__(5017);

__webpack_require__(1646);

__webpack_require__(288);

var _kolmafia = __webpack_require__(1664);

var _Clan = __webpack_require__(1662);

var _lib = __webpack_require__(3311);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Dungeon = /*#__PURE__*/function () {
  /**
   * Creates dungeon object for managing clan dungeons
   * @param name Name of the dungeon in question
   * @param loot Distributable loot dropped by bosses in dungeon
   * @param openAction String action used in form submission to open dungeon
   * @param closeAction String action used in form submission to close dungeon
   * @param openCost Meat cost of opening dungeon
   * @param openImage Image text to search clan_basement.php for to check if dungeon is open
   * @param closedImage Image text to search clan_basement.php for to check if dungeon is closed
   */
  function Dungeon(name, loot, openAction, closeAction, openCost, openImage, closedImage) {
    _classCallCheck(this, Dungeon);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "loot", void 0);

    _defineProperty(this, "openAction", void 0);

    _defineProperty(this, "closeAction", void 0);

    _defineProperty(this, "openCost", void 0);

    _defineProperty(this, "openImage", void 0);

    _defineProperty(this, "closedImage", void 0);

    this.name = name;
    this.loot = loot;
    this.openAction = openAction;
    this.closeAction = closeAction;
    this.openCost = openCost;
    this.openImage = openImage;
    this.closedImage = closedImage;
  }
  /**
   * Distributes loot from given dungeon
   * @param idOrName The player you're trying to distribute to, either as a username or a player ID. Defaults to self.
   * @param loot The loot you're looking to distribute, specific to this dungeon
   * @param distributeAllOfAGivenItem For items that you can get multiple of in a dungeon. When true, this will give everything of that ilk to your chosen player.
   */


  _createClass(Dungeon, [{
    key: "distribute",
    value: function distribute() {
      var idOrName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _kolmafia.myId)();
      var loot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.loot;
      var distributeAllOfAGivenItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var player = (0, _lib.getPlayerFromIdOrName)(idOrName);
      var lootList = Array.isArray(loot) ? loot : [loot];
      var badLoot = lootList.find(lootItem => !this.loot.includes(lootItem));

      if (badLoot) {
        throw new Error("".concat(badLoot, " is not a valid piece of dungeon loot"));
      }

      var pageText = (0, _kolmafia.visitUrl)("clan_basement.php");

      if (!pageText.match(player.name)) {
        throw new Error("".concat(player.name, " cannot be distributed loot from ").concat((0, _kolmafia.getClanName)()));
      }

      var itemNames = (0, _kolmafia.xpath)(pageText, "//tr/td[2]/b/text()");
      var whichLoots = (0, _kolmafia.xpath)(pageText, '//form[@action="clan_basement.php"]//input[@type="hidden"][@name="whichloot"]/@value');
      itemNames.forEach((itemName, index) => {
        if (lootList.includes((0, _kolmafia.toItem)(itemName))) {
          (0, _kolmafia.visitUrl)("clan_basement.php?whichloot=".concat(whichLoots[index], "&recipient=").concat(player.id));
          if (!distributeAllOfAGivenItem) lootList.slice(lootList.indexOf((0, _kolmafia.toItem)(itemName)));
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      (0, _kolmafia.visitUrl)("clan_basement.php?action=".concat(this.closeAction, "&confirm=true"), true);
      var pageText = (0, _kolmafia.visitUrl)("clan_basement.php");
      return pageText.includes(this.closedImage);
    }
    /**
     * Opens clan dungeon and, if relevant, pays meat to do so
     * @param paymentPolicy "None", "All", or "Difference". Difference pays into the stash the exact amount needed to open the dungeon.
     */

  }, {
    key: "open",
    value: function open() {
      var paymentPolicy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Difference";
      var pageText = (0, _kolmafia.visitUrl)("clan_basement.php");
      if (pageText.includes(this.openImage)) return true;

      var clan = _Clan.Clan.get();

      if (paymentPolicy === "All") {
        clan.putMeatInCoffer(this.openCost);
      } else {
        var stashMeat = clan.getMeatInCoffer();
        var payDifference = this.openCost - stashMeat;

        if (payDifference > 0) {
          if (paymentPolicy === "None") return false;
          clan.putMeatInCoffer(payDifference);
        }
      }

      (0, _kolmafia.visitUrl)("clan_basement.php?action=".concat(this.openAction), true);
      return (0, _kolmafia.visitUrl)("clan_basement.php").includes(this.openImage);
    }
  }], [{
    key: "all",
    value: function all() {
      return [Hobopolis, SlimeTube, Dreadsylvania];
    }
  }]);

  return Dungeon;
}();

exports.default = Dungeon;
var Hobopolis = new Dungeon("Hobopolis", (0, _templateString.$items)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Ol' Scratch's ash can, Ol' Scratch's ol' britches, Ol' Scratch's stovepipe hat, Ol' Scratch's infernal pitchfork, Ol' Scratch's manacles, Ol' Scratch's stove door, Frosty's carrot, Frosty's nailbat, Frosty's old silk hat, Frosty's arm, Frosty's iceball, Frosty's snowball sack, Oscus's dumpster waders, Oscus's pelt, Wand of Oscus, Oscus's flypaper pants, Oscus's garbage can lid, Oscus's neverending soda, Zombo's grievous greaves, Zombo's shield, Zombo's skullcap, Zombo's empty eye, Zombo's shoulder blade, Zombo's skull ring, Chester's bag of candy, Chester's cutoffs, Chester's moustache, Chester's Aquarius medallion, Chester's muscle shirt, Chester's sunglasses, Hodgman's bow tie, Hodgman's porkpie hat, Hodgman's lobsterskin pants, Hodgman's almanac, Hodgman's lucky sock, Hodgman's metal detector, Hodgman's varcolac paw, Hodgman's harmonica, Hodgman's garbage sticker, Hodgman's cane, Hodgman's whackin' stick, Hodgman's disgusting technicolor overcoat, Hodgman's imaginary hamster"]))), "cleansewer", "floodsewer", 1000000, "opengrate.gif", "sewergrate.gif");
exports.Hobopolis = Hobopolis;
var SlimeTube = new Dungeon("The Slime Tube", (0, _templateString.$items)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["slime-soaked brain, slime-soaked hypophysis, slime-soaked sweat gland, squirming Slime larva, caustic slime nodule, caustic slime nodule, hardened slime belt, hardened slime hat, hardened slime pants"]))), "cleanspot", "sealtube", 250000, "slimehole.gif", "greasespot.gif");
exports.SlimeTube = SlimeTube;
var Dreadsylvania = new Dungeon("Dreadsylvania", (0, _templateString.$items)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Great Wolf's headband, Great Wolf's right paw, Great Wolf's left paw, Great Wolf's lice, Great Wolf's rocket launcher, Great Wolf's beastly trousers, Drapes-You-Regally, Warms-Your-Tush, Covers-Your-Head, Protects-Your-Junk, Quiets-Your-Steps, Helps-You-Sleep, Mayor Ghost's khakis, Mayor Ghost's cloak, Mayor Ghost's toupee, Mayor Ghost's scissors, Mayor Ghost's sash, Mayor Ghost's gavel, zombie mariachi hat, zombie accordion, zombie mariachi pants, HOA regulation book, HOA zombie eyes, HOA citation pad, Unkillable Skeleton's skullcap, Unkillable Skeleton's shinguards, Unkillable Skeleton's breastplate, Unkillable Skeleton's shield, Unkillable Skeleton's sawsword, Unkillable Skeleton's restless leg, skull capacitor, Thunkula's drinking cap, Drunkula's silky pants, Drunkula's cape, Drunkula's ring of haze, Drunkula's wineglass, Drunkula's bell, bottle of Bloodweiser, bottle of Bloodweiser, bottle of Bloodweiser, bottle of Bloodweiser, electric Kool-Aid, electric Kool-Aid, electric Kool-Aid, electric Kool-Aid, ghost pepper, ghost pepper, ghost pepper, ghost pepper, Gets-You-Drunk, Gets-You-Drunk, Gets-You-Drunk, Gets-You-Drunk, wriggling severed nose, wriggling severed nose, wriggling severed nose, wriggling severed nose, Hunger\u2122 Sauce, Hunger\u2122 Sauce, Hunger\u2122 Sauce, Hunger\u2122 Sauce"]))), "translatemap", "foldmap", 1000000, "dvmap.gif", "foldmap.gif");
exports.Dreadsylvania = Dreadsylvania;

/***/ }),

/***/ 9477:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2004);

__webpack_require__(8407);

__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

__webpack_require__(5677);

__webpack_require__(6394);

__webpack_require__(2070);

__webpack_require__(6737);

__webpack_require__(2322);

__webpack_require__(5017);

__webpack_require__(8833);

__webpack_require__(1646);

__webpack_require__(2076);

__webpack_require__(7723);

var _kolmafia = __webpack_require__(1664);

var _utils = __webpack_require__(8588);

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Kmail = /*#__PURE__*/function () {
  function Kmail(rawKmail) {
    _classCallCheck(this, Kmail);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "date", void 0);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "senderId", void 0);

    _defineProperty(this, "senderName", void 0);

    _defineProperty(this, "message", void 0);

    this.id = Number(rawKmail.id);
    this.date = new Date(rawKmail.localtime);
    this.type = rawKmail.type;
    this.senderId = Number(rawKmail.fromid);
    this.senderName = rawKmail.fromname;
    this.message = rawKmail.message;
  }
  /**
   * Delete the kmail
   *
   * @returns Whether the kmail was deleted
   */


  _createClass(Kmail, [{
    key: "delete",
    value: function _delete() {
      return Kmail.delete([this]) === 1;
    }
    /**
     * Get items attached to the kmail
     *
     * @returns Map of items attached to the kmail and their quantities
     */

  }, {
    key: "items",
    value: function items() {
      return new Map(Object.entries((0, _kolmafia.extractItems)(this.message)).map(_ref => {
        var _ref2 = _slicedToArray(_ref, 2),
            itemName = _ref2[0],
            quantity = _ref2[1];

        return [Item.get(itemName), quantity];
      }));
    }
    /**
     * Get meat attached to the kmail
     *
     * @returns Meat attached to the kmail
     */

  }, {
    key: "meat",
    value: function meat() {
      return (0, _kolmafia.extractMeat)(this.message);
    }
    /**
     * Reply to kmail
     *
     * @see Kmail.send
     *
     * @returns True if the kmail was successfully sent
     */

  }, {
    key: "reply",
    value: function reply() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var meat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return Kmail.send(this.senderId, message, items, meat);
    }
  }], [{
    key: "parse",
    value:
    /**
     * Parses a kmail from KoL's native format
     *
     * @param rawKmail Kmail in the format supplies by api.php
     * @returns Parsed kmail
     */
    function parse(rawKmail) {
      return new Kmail(rawKmail);
    }
    /**
     * Returns all of the player's kmails
     *
     * @returns Parsed kmails
     */

  }, {
    key: "inbox",
    value: function inbox() {
      return JSON.parse((0, _kolmafia.visitUrl)("api.php?what=kmail&for=ASSistant")).map(Kmail.parse);
    }
    /**
     * Bulk delete kmails
     *
     * @param kmails Kmails to delete
     * @returns Number of kmails deleted
     */

  }, {
    key: "delete",
    value: function _delete(kmails) {
      var _results$match$, _results$match;

      var results = (0, _kolmafia.visitUrl)("messages.php?the_action=delete&box=Inbox&pwd&".concat(kmails.map(k => "sel".concat(k.id, "=on")).join("&")));
      return Number((_results$match$ = (_results$match = results.match(/<td>(\d) messages? deleted.<\/td>/)) === null || _results$match === void 0 ? void 0 : _results$match[1]) !== null && _results$match$ !== void 0 ? _results$match$ : 0);
    }
  }, {
    key: "_genericSend",
    value: function _genericSend(to, message, items, meat, chunkSize, constructUrl, successString) {
      var m = meat;

      var sendableItems = _toConsumableArray((0, _utils.arrayToCountedMap)(items).entries()).filter(_ref3 => {
        var _ref4 = _slicedToArray(_ref3, 1),
            item = _ref4[0];

        return (0, _kolmafia.isGiftable)(item);
      });

      var result = true;
      var chunks = (0, _utils.chunk)(sendableItems, chunkSize); // Split the items to be sent into chunks of max 11 item types

      var _iterator = _createForOfIteratorHelper(chunks.length > 0 ? chunks : [null]),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;

          var _itemsQuery = c === null ? [] : c.map((_ref5, index) => {
            var _ref6 = _slicedToArray(_ref5, 2),
                item = _ref6[0],
                quantity = _ref6[1];

            return "whichitem".concat(index + 1, "=").concat((0, _kolmafia.toInt)(item), "&howmany").concat(index + 1, "=").concat(quantity);
          });

          var r = (0, _kolmafia.visitUrl)(constructUrl(m, _itemsQuery.join("&"), _itemsQuery.length));

          if (r.includes("That player cannot receive Meat or items")) {
            return Kmail.gift(to, message, items, meat);
          } // Make sure we don't send the same batch of meat with every chunk


          m = 0;
          result && (result = r.includes(successString));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    }
    /**
     * Sends a kmail to a player
     *
     * Sends multiple kmails if more than 11 unique item types are attached.
     * Ignores any ungiftable items.
     * Sends a gift package to players in run
     *
     * @param to The player name or id to receive the kmail
     * @param message The text contents of the message
     * @param items The items to be attached
     * @param meat The quantity of meat to be attached
     * @returns True if the kmail was successfully sent
     */

  }, {
    key: "send",
    value: function send(to) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var meat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      return Kmail._genericSend(to, message, items, meat, 11, (meat, itemsQuery) => "sendmessage.php?action=send&pwd&towho=".concat(to, "&message=").concat(message).concat(itemsQuery ? "&".concat(itemsQuery) : "", "&sendmeat=").concat(meat), ">Message sent.</");
    }
    /**
     * Sends a gift to a player
     *
     * Sends multiple kmails if more than 3 unique item types are attached.
     * Ignores any ungiftable items.
     *
     * @param to The player name or id to receive the gift
     * @param note The note on the outside of the gift
     * @param items The items to be attached
     * @param meat The quantity of meat to be attached
     * @param insideNode The note on the inside of the gift
     * @returns True if the gift was successfully sent
     */

  }, {
    key: "gift",
    value: function gift(to) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var meat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var insideNote = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
      var baseUrl = "town_sendgift.php?action=Yep.&pwd&fromwhere=0&note=".concat(message, "&insidenote=").concat(insideNote, "&towho=").concat(to);
      return Kmail._genericSend(to, message, items, meat, 3, (m, itemsQuery, chunkSize) => "".concat(baseUrl, "&whichpackage=").concat(chunkSize).concat(itemsQuery ? "&".concat(itemsQuery) : "", "&sendmeat=").concat(m), ">Package sent.</");
    }
  }]);

  return Kmail;
}();

exports.default = Kmail;

/***/ }),

/***/ 6906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Paths = exports.Path = void 0;

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Path = //here, we define avatar-ness around being its own class
//Defined as the lowest inebriety that makes you unable to drink more, just to make it fifteens across the board

/**
 *
 * @param name Name of path
 * @param id Path ID
 * @param hasAllPerms Does the player have immediate access to all permed skills>
 * @param hasCampground Does the player have access to the campground?
 * @param hasTerrarium Does the player have access to terrarium.php
 * @param stomachSize Maximum fullness achievable at turn 0
 * @param liverSize The lowest inebriety that makes you unable to drink more
 * @param spleenSize Maximum spleen achievable at turn 0
 * @param classes Classes available in this path
 */
function Path(name, id) {
  var hasAllPerms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var hasCampground = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var hasTerrarium = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var stomachSize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 15;
  var liverSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 15;
  var spleenSize = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 15;
  var classes = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : (0, _templateString.$classes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Seal Clubber, Turtle Tamer, Sauceror, Pastamancer, Disco Bandit, Accordion Thief"])));

  _classCallCheck(this, Path);

  _defineProperty(this, "name", void 0);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "hasAllPerms", void 0);

  _defineProperty(this, "hasCampground", void 0);

  _defineProperty(this, "hasTerrarium", void 0);

  _defineProperty(this, "stomachSize", void 0);

  _defineProperty(this, "liverSize", void 0);

  _defineProperty(this, "spleenSize", void 0);

  _defineProperty(this, "classes", void 0);

  this.name = name;
  this.id = id;
  this.hasAllPerms = hasAllPerms;
  this.hasCampground = hasCampground;
  this.hasTerrarium = hasTerrarium;
  this.stomachSize = stomachSize;
  this.liverSize = liverSize;
  this.spleenSize = spleenSize;
  this.classes = classes;
};

exports.Path = Path;
var Paths = {
  Unrestricted: new Path("Unrestricted", 0),
  Boozetafarian: new Path("Boozetafarian", 1, false, true, true, 0),
  Teetotaler: new Path("Teetotaler", 2, false, true, true, 15, 0),
  Oxygenarian: new Path("Oxygenarian", 3, false, true, true, 0, 0),
  BeesHateYou: new Path("Bees Hate You", 4),
  WayOfTheSurprisingFist: new Path("Way of the Surprising Fist", 6),
  Trendy: new Path("Trendy", 6),
  AvatarOfBoris: new Path("Avatar of Boris", 8, false, true, false, 20, 5, 15, (0, _templateString.$classes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Avatar of Boris"])))),
  BugbearInvasion: new Path("Bugbear Invasion", 9),
  ZombieSlayer: new Path("Zombie Slayer", 10, false, true, true, 15, 5, 15, (0, _templateString.$classes)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Zombie Master"])))),
  ClassAct: new Path("Class Act", 11, false),
  AvatarofJarlsberg: new Path("Avatar of Jarlsberg", 12, false, true, false, 10, 10, 15, (0, _templateString.$classes)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Avatar of Jarlsberg"])))),
  Big: new Path("BIG!", 14),
  KolHs: new Path("KOLHS", 15),
  ClassAct2: new Path("Class Act II: A Class For Pigs", 16, false),
  AvatarofSneakyPete: new Path("Avatar of Sneaky Pete", 17, false, true, false, 5, 20, 15, (0, _templateString.$classes)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Avatar of Sneaky Pete"])))),
  SlowAndSteady: new Path("Slow and Steady", 18),
  HeavyRains: new Path("Heavy Rains", 19),
  Picky: new Path("Picky", 21, false),
  Standard: new Path("Standard", 22),
  ActuallyEdTheUndying: new Path("Actually Ed the Undying", 23, false, false, false, 0, 0, 5, (0, _templateString.$classes)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Ed"])))),
  OneCrazyRandomSummer: new Path("One Crazy Random Summer", 24),
  CommunityService: new Path("Community Service", 25),
  AvatarOfWestOfLoathing: new Path("Avatar of West of Loathing", 26, false, true, true, 10, 10, 10, (0, _templateString.$classes)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Cow Puncher, Snake Oiler, Beanslinger"])))),
  TheSource: new Path("The Source", 27),
  NuclearAutumn: new Path("Nuclear Autumn", 28, false, false, true, 3, 3, 3),
  GelatinousNoob: new Path("Gelatinous Noob", 29, false, true, true, 0, 0, 0, (0, _templateString.$classes)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Gelatinous Noob"])))),
  LicenseToAdventure: new Path("License to Adventure", 30, true, true, false, 0, 2, 15),
  //Unsure how to log liver size here
  LiveAscendRepeat: new Path("Live. Ascend. Repeat.", 31),
  PocketFamiliars: new Path("Pocket Familiars", 32, false, true, false),
  //This is my opinion on the matter
  GLover: new Path("G-Lover", 33),
  DisguisesDelimit: new Path("Disguises Delimit", 34),
  DarkGyffte: new Path("Dark Gyffte", 35, false, true, false, 5, 5, 15, (0, _templateString.$classes)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Vampyre"])))),
  TwoCrazyRandomSummer: new Path("Two Crazy Random Summer", 36),
  KingdomOfExploathing: new Path("Kingdom of Exploathing", 37),
  PathOfThePlumber: new Path("Path of the Plumber", 38, false, true, true, 20, 0, 5, (0, _templateString.$classes)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Plumber"])))),
  LowKeySummer: new Path("Low Key Summer", 40),
  GreyGoo: new Path("Grey Goo", 40),
  YouRobot: new Path("You, Robot", 41, false, false, true, 0, 0, 0),
  QuantumTerrarium: new Path("Quantum Terrarium", 42, true, true, false),
  Wildfire: new Path("Wildfire", 43)
};
exports.Paths = Paths;

/***/ }),

/***/ 1689:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ascend = ascend;
exports.prepareAscension = prepareAscension;
exports.Lifestyle = void 0;

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(1646);

__webpack_require__(6394);

__webpack_require__(4669);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _property = __webpack_require__(1347);

var _resources = __webpack_require__(1895);

var _lib = __webpack_require__(3311);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var Lifestyle;
exports.Lifestyle = Lifestyle;

(function (Lifestyle) {
  Lifestyle[Lifestyle["casual"] = 1] = "casual";
  Lifestyle[Lifestyle["softcore"] = 2] = "softcore";
  Lifestyle[Lifestyle["normal"] = 2] = "normal";
  Lifestyle[Lifestyle["hardcore"] = 3] = "hardcore";
})(Lifestyle || (exports.Lifestyle = Lifestyle = {}));

function toMoonId(moon, playerClass) {
  if (typeof moon === "number") return moon;

  var offset = () => {
    switch (playerClass.primestat) {
      case (0, _templateString.$stat)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Muscle"]))):
        return 0;

      case (0, _templateString.$stat)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Mysticality"]))):
        return 1;

      case (0, _templateString.$stat)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Moxie"]))):
        return 2;

      default:
        throw "unknown prime stat for ".concat(playerClass);
    }
  };

  switch (moon.toLowerCase()) {
    case "mongoose":
      return 1;

    case "wallaby":
      return 2;

    case "vole":
      return 3;

    case "platypus":
      return 4;

    case "opossum":
      return 5;

    case "marmot":
      return 6;

    case "wombat":
      return 7;

    case "blender":
      return 8;

    case "packrat":
      return 9;

    case "degrassi":
    case "degrassi knoll":
    case "friendly degrassi knoll":
    case "knoll":
      return 1 + offset();

    case "canada":
    case "canadia":
    case "little canadia":
      return 4 + offset();

    case "gnomads":
    case "gnomish":
    case "gnomish gnomads camp":
      return 7 + offset();

    default:
      return -1;
  }
}
/**
 * Hops the gash, perming no skills
 * @param path path of choice, as a Path object--these exist as properties of Paths
 * @param playerClass Your class of choice for this ascension
 * @param lifestyle 1 for casual, 2 for softcore, 3 for hardcore. Alternately, use the Lifestyle enum
 * @param moon Your moon sign as a string, or the zone you're looking for as a string
 * @param consumable From the astral deli. Pick the container item, not the product.
 * @param pet From the astral pet store.
 */


function ascend(path, playerClass, lifestyle, moon) {
  var consumable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["astral six-pack"])));
  var pet = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

  if (!(0, _kolmafia.containsText)((0, _kolmafia.visitUrl)("charpane.php"), "Astral Spirit")) {
    (0, _kolmafia.visitUrl)("ascend.php?action=ascend&confirm=on&confirm2=on");
  }

  if (!(0, _kolmafia.containsText)((0, _kolmafia.visitUrl)("charpane.php"), "Astral Spirit")) throw "Failed to ascend.";
  if (!path.classes.includes(playerClass)) throw "Invalid class ".concat(playerClass, " for this path");
  if (path.id < 0) throw "Invalid path ID ".concat(path.id);
  var moonId = toMoonId(moon, playerClass);
  if (moonId < 1 || moonId > 9) throw "Invalid moon ".concat(moon);
  if (consumable && !(0, _templateString.$items)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["astral six-pack, astral hot dog dinner"]))).includes(consumable)) throw "Invalid consumable ".concat(consumable);
  if (pet && !(0, _templateString.$items)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["astral bludgeon, astral shield, astral chapeau, astral bracer, astral longbow, astral shorts, astral mace, astral ring, astral statuette, astral pistol, astral mask, astral pet sweater, astral shirt, astral belt"]))).includes(pet)) throw "Invalid astral item ".concat(pet);
  (0, _kolmafia.visitUrl)("afterlife.php?action=pearlygates");
  if (consumable) (0, _kolmafia.visitUrl)("afterlife.php?action=buydeli&whichitem=".concat((0, _kolmafia.toInt)(consumable)));
  if (pet) (0, _kolmafia.visitUrl)("afterlife.php?action=buyarmory&whichitem=".concat((0, _kolmafia.toInt)(pet)));
  (0, _kolmafia.visitUrl)("afterlife.php?action=ascend&confirmascend=1&whichsign=".concat(moonId, "&gender=2&whichclass=").concat((0, _kolmafia.toInt)(playerClass), "&whichpath=").concat(path.id, "&asctype=").concat(lifestyle, "&nopetok=1&noskillsok=1&lamepathok=1&pwd"), true);
}

var worksheds = (0, _templateString.$items)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["warbear LP-ROM burner, warbear jackhammer drill press, warbear induction oven, warbear high-efficiency still, warbear chemistry lab, warbear auto-anvil, spinning wheel, snow machine, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic, Asdon Martin keyfob, diabolic pizza cube"])));
var gardens = (0, _templateString.$items)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["packet of pumpkin seeds, Peppermint Pip Packet, packet of dragon's teeth, packet of beer seeds, packet of winter seeds, packet of thanksgarden seeds, packet of tall grass seeds, packet of mushroom spores"]))); // eslint-disable-next-line libram/verify-constants

var eudorae = (0, _templateString.$items)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["My Own Pen Pal kit, GameInformPowerDailyPro subscription card, Xi Receiver Unit, New-You Club Membership Form, Our Daily Candles\u2122 order form"])));
var desks = (0, _templateString.$items)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["fancy stationery set, Swiss piggy bank, continental juice bar"])));
var ceilings = (0, _templateString.$items)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["antler chandelier, ceiling fan, artificial skylight"])));
var nightstands = (0, _templateString.$items)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["foreign language tapes, bowl of potpourri, electric muscle stimulator"])));
/**
 * Sets up various iotms you may want to use in the coming ascension
 * @param ascensionItems An object potentially containing your workshed, garden, and eudora, all as items
 * @param chateauItems An object potentially containing your chateau desk, ceiling, and nightstand, all as items
 * @param throwOnFail If true, this will throw an error when it fails to switch something
 */

function prepareAscension(ascensionItems, chateauItems) {
  var throwOnFail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (ascensionItems) {
    if (ascensionItems.workshed && (0, _kolmafia.getWorkshed)() !== ascensionItems.workshed) {
      if (!worksheds.includes(ascensionItems.workshed) && throwOnFail) throw "Invalid workshed: ".concat(ascensionItems.workshed, "!");else if (!(0, _lib.have)(ascensionItems.workshed) && throwOnFail) throw "I'm sorry buddy, but you don't seem to own a ".concat(ascensionItems.workshed, ". Which makes it REALLY hard for us to plop one into your workshed.");else if ((0, _property.get)("_workshedItemUsed") && throwOnFail) throw "Seems like you've already swapped your workshed, buddy.";else (0, _kolmafia.use)(ascensionItems.workshed);
      if ((0, _kolmafia.getWorkshed)() !== ascensionItems.workshed && throwOnFail) throw "We really thought we changed your workshed to a ".concat(ascensionItems.workshed, ", but Mafia is saying otherwise.");
    }

    if (ascensionItems.garden && !Object.getOwnPropertyNames((0, _kolmafia.getCampground)()).includes(ascensionItems.garden.name)) {
      if (!gardens.includes(ascensionItems.garden) && throwOnFail) throw "Invalid garden: ".concat(ascensionItems.garden, "!");else if (!(0, _lib.have)(ascensionItems.garden) && throwOnFail) throw "I'm sorry buddy, but you don't seem to own a ".concat(ascensionItems.garden, ". Which makes it REALLY hard for us to plant one into your garden.");else (0, _kolmafia.use)(ascensionItems.garden);
      if (!Object.getOwnPropertyNames((0, _kolmafia.getCampground)()).includes(ascensionItems.garden.name) && throwOnFail) throw "We really thought we changed your garden to a ".concat(ascensionItems.garden, ", but Mafia is saying otherwise.");
    }

    if (ascensionItems.eudora && (0, _kolmafia.eudoraItem)() !== ascensionItems.eudora) {
      if (!eudorae.includes(ascensionItems.eudora) && throwOnFail) throw "Invalid eudora: ".concat(ascensionItems.eudora, "!");
      var eudoraNumber = 1 + eudorae.indexOf(ascensionItems.eudora);
      if (!(0, _kolmafia.xpath)((0, _kolmafia.visitUrl)("account.php?tab=correspondence"), "//select[@name=\"whichpenpal\"]/option/@value").includes(eudoraNumber.toString()) && throwOnFail) throw "I'm sorry buddy, but you don't seem to be subscribed to ".concat(ascensionItems.eudora, ". Which makes it REALLY hard to correspond with them.");else (0, _kolmafia.visitUrl)("account.php?actions[]=whichpenpal&whichpenpal=".concat(eudoraNumber, "&action=Update"), true);
      if ((0, _kolmafia.eudoraItem)() !== ascensionItems.eudora && throwOnFail) throw "We really thought we chaned your eudora to a ".concat(ascensionItems.eudora, ", but Mafia is saying otherwise.");
    }
  }

  if (chateauItems && _resources.ChateauMantegna.have()) {
    if (chateauItems.ceiling && _resources.ChateauMantegna.getCeiling() !== chateauItems.ceiling) {
      if (!ceilings.includes(chateauItems.ceiling) && throwOnFail) throw "Invalid chateau ceiling: ".concat(chateauItems.ceiling, "!");else if (!_resources.ChateauMantegna.changeCeiling(chateauItems.ceiling) && throwOnFail) throw "We tried, but were unable to change your chateau ceiling to ".concat(chateauItems.ceiling, ". Probably.");
    }

    if (chateauItems.desk && _resources.ChateauMantegna.getDesk() !== chateauItems.desk) {
      if (!desks.includes(chateauItems.desk) && throwOnFail) throw "Invalid chateau desk: ".concat(chateauItems.desk, "!");else if (!_resources.ChateauMantegna.changeDesk(chateauItems.desk) && throwOnFail) throw "We tried, but were unable to change your chateau desk to ".concat(chateauItems.desk, ". Probably.");
    }

    if (chateauItems.nightstand && _resources.ChateauMantegna.getNightstand() !== chateauItems.nightstand) {
      if (!nightstands.includes(chateauItems.nightstand) && throwOnFail) throw "Invalid chateau nightstand: ".concat(chateauItems.nightstand, "!");else if (!_resources.ChateauMantegna.changeNightstand(chateauItems.nightstand) && throwOnFail) throw "We tried, but were unable to change your chateau nightstand to ".concat(chateauItems.nightstand, ". Probably.");
    }
  }
}

/***/ }),

/***/ 1762:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

__webpack_require__(2004);

__webpack_require__(8407);

__webpack_require__(5677);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMacroId = getMacroId;
exports.adventureMacro = adventureMacro;
exports.adventureMacroAuto = adventureMacroAuto;
exports.Macro = void 0;

__webpack_require__(2070);

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(6394);

__webpack_require__(4669);

__webpack_require__(2322);

__webpack_require__(5017);

__webpack_require__(1646);

__webpack_require__(8833);

__webpack_require__(9268);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _property = __webpack_require__(1347);

var _templateObject, _templateObject2;

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name Script Autoattack Macro.
 *
 * @category Combat
 * @returns {number} The macro ID.
 */

function getMacroId() {
  var macroMatches = (0, _kolmafia.xpath)((0, _kolmafia.visitUrl)("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"".concat(MACRO_NAME, "\"]/@value"));

  if (macroMatches.length === 0) {
    (0, _kolmafia.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0, _kolmafia.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(MACRO_NAME, "&macrotext=abort&action=save"));
    return parseInt((0, _kolmafia.xpath)(newMacroText, "//input[@name=macroid]/@value")[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}

function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? Item.get(itemOrName) : itemOrName;
}

var substringCombatItems = (0, _templateString.$items)(_templateObject || (_templateObject = _taggedTemplateLiteral(["spider web, really sticky spider web, dictionary, NG, Cloaca-Cola, yo-yo, top, ball, kite, yo, red potion, blue potion, adder, red button, pile of sand, mushroom, deluxe mushroom"])));
var substringCombatSkills = (0, _templateString.$skills)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Shoot, Thrust-Smack, Headbutt, Toss, Sing, Disarm, LIGHT, BURN, Extract, Meteor Shower, Cleave, Boil, Slice, Rainbow"])));

function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !substringCombatItems.includes(item) ? item.name : (0, _kolmafia.toInt)(item).toString();
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
  return skill.name.match(/^[A-Za-z ]+$/) && !substringCombatSkills.includes(skill) ? skill.name : (0, _kolmafia.toInt)(skill);
}
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */


var Macro = /*#__PURE__*/function () {
  function Macro() {
    _classCallCheck(this, Macro);

    _defineProperty(this, "components", []);
  }

  _createClass(Macro, [{
    key: "toString",
    value:
    /**
     * Convert macro to string.
     */
    function toString() {
      return this.components.join(";");
    }
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */

  }, {
    key: "save",
    value: function save() {
      (0, _property.set)(Macro.SAVED_MACRO_PROPERTY, this.toString());
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

      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));

      this.components = [].concat(_toConsumableArray(this.components), _toConsumableArray(nextStepsStrings.filter(s => s.length > 0)));
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
      return (0, _kolmafia.visitUrl)("fight.php?action=macro&macrotext=".concat((0, _kolmafia.urlEncode)(final)), true, true);
    }
    /**
     * Set this macro as a KoL native autoattack.
     */

  }, {
    key: "setAutoAttack",
    value: function setAutoAttack() {
      if (Macro.cachedMacroId === null) Macro.cachedMacroId = getMacroId();

      if ((0, _kolmafia.getAutoAttack)() === 99000000 + Macro.cachedMacroId && this.toString() === Macro.cachedAutoAttack) {
        // This macro is already set. Don"t make the server request.
        return;
      }

      (0, _kolmafia.visitUrl)("account_combatmacros.php?macroid=".concat(Macro.cachedMacroId, "&name=").concat((0, _kolmafia.urlEncode)(MACRO_NAME), "&macrotext=").concat((0, _kolmafia.urlEncode)(this.toString()), "&action=save"), true, true);
      (0, _kolmafia.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99000000 + Macro.cachedMacroId, "&ajax=1"));
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
    key: "if_",
    value:
    /**
     * Add an "if" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function if_(condition, ifTrue) {
      return this.step("if ".concat(condition)).step(ifTrue).step("endif");
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
     * @returns {Macro} This object itself.
     */
    function externalIf(condition, ifTrue) {
      return condition ? this.step(ifTrue) : this;
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

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
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

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
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

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
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

      return this.step.apply(this, _toConsumableArray(items.map(itemOrItems => {
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

      return this.step.apply(this, _toConsumableArray(items.map(item => {
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

      return (_this = new this()).step.apply(_this, _toConsumableArray((0, _property.get)(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */

  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0, _kolmafia.removeProperty)(Macro.SAVED_MACRO_PROPERTY);
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
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */


exports.Macro = Macro;

_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");

_defineProperty(Macro, "cachedMacroId", null);

_defineProperty(Macro, "cachedAutoAttack", null);

function adventureMacro(loc, macro) {
  macro.save();
  (0, _kolmafia.setAutoAttack)(0);

  try {
    (0, _kolmafia.adv1)(loc, 0, "");

    while ((0, _kolmafia.inMultiFight)()) {
      (0, _kolmafia.runCombat)();
    }

    if ((0, _kolmafia.choiceFollowsFight)()) (0, _kolmafia.visitUrl)("choice.php");
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
    (0, _kolmafia.adv1)(loc, 0, "");

    while ((0, _kolmafia.inMultiFight)()) {
      (0, _kolmafia.runCombat)();
    }

    if ((0, _kolmafia.choiceFollowsFight)()) (0, _kolmafia.visitUrl)("choice.php");
  } finally {
    Macro.clearSaved();
  }
}

/***/ }),

/***/ 6448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.error = exports.warn = exports.info = exports.log = void 0;

__webpack_require__(2070);

__webpack_require__(6394);

__webpack_require__(4669);

var _kolmafia = __webpack_require__(1664); // eslint-disable-next-line @typescript-eslint/no-explicit-any


var logColor = color => function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var output = args.map(x => x.toString()).join(" ");

  if (color) {
    (0, _kolmafia.print)(output, color);
  } else {
    (0, _kolmafia.print)(output);
  }
};

var log = logColor();
exports.log = log;
var info = logColor("blue");
exports.info = info;
var warn = logColor("red");
exports.warn = warn;
var error = logColor("red");
exports.error = error;

/***/ }),

/***/ 9803:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(5677);

__webpack_require__(6394);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Kmail: true,
  logger: true,
  LogLevel: true,
  console: true,
  get: true,
  PropertiesManager: true,
  set: true,
  setProperties: true,
  withProperties: true,
  withProperty: true,
  withChoices: true,
  withChoice: true,
  property: true
};
Object.defineProperty(exports, "Kmail", ({
  enumerable: true,
  get: function get() {
    return _Kmail.default;
  }
}));
Object.defineProperty(exports, "logger", ({
  enumerable: true,
  get: function get() {
    return _logger.default;
  }
}));
Object.defineProperty(exports, "LogLevel", ({
  enumerable: true,
  get: function get() {
    return _logger.LogLevel;
  }
}));
Object.defineProperty(exports, "get", ({
  enumerable: true,
  get: function get() {
    return _property.get;
  }
}));
Object.defineProperty(exports, "PropertiesManager", ({
  enumerable: true,
  get: function get() {
    return _property.PropertiesManager;
  }
}));
Object.defineProperty(exports, "set", ({
  enumerable: true,
  get: function get() {
    return _property.set;
  }
}));
Object.defineProperty(exports, "setProperties", ({
  enumerable: true,
  get: function get() {
    return _property.setProperties;
  }
}));
Object.defineProperty(exports, "withProperties", ({
  enumerable: true,
  get: function get() {
    return _property.withProperties;
  }
}));
Object.defineProperty(exports, "withProperty", ({
  enumerable: true,
  get: function get() {
    return _property.withProperty;
  }
}));
Object.defineProperty(exports, "withChoices", ({
  enumerable: true,
  get: function get() {
    return _property.withChoices;
  }
}));
Object.defineProperty(exports, "withChoice", ({
  enumerable: true,
  get: function get() {
    return _property.withChoice;
  }
}));
exports.property = exports.console = void 0;

var _ascend = __webpack_require__(1689);

Object.keys(_ascend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ascend[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ascend[key];
    }
  });
});

var _Clan = __webpack_require__(1662);

Object.keys(_Clan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Clan[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Clan[key];
    }
  });
});

var _combat = __webpack_require__(1762);

Object.keys(_combat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _combat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _combat[key];
    }
  });
});

var _Dungeon = __webpack_require__(7912);

Object.keys(_Dungeon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Dungeon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Dungeon[key];
    }
  });
});

var _lib = __webpack_require__(3311);

Object.keys(_lib).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _lib[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lib[key];
    }
  });
});

var _maximize = __webpack_require__(9376);

Object.keys(_maximize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _maximize[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _maximize[key];
    }
  });
});

var _mood = __webpack_require__(6115);

Object.keys(_mood).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _mood[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mood[key];
    }
  });
});

var _resources = __webpack_require__(1895);

Object.keys(_resources).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _resources[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _resources[key];
    }
  });
});

var _since = __webpack_require__(1157);

Object.keys(_since).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _since[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _since[key];
    }
  });
});

var _templateString = __webpack_require__(678);

Object.keys(_templateString).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _templateString[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _templateString[key];
    }
  });
});

var _Kmail = _interopRequireDefault(__webpack_require__(9477));

var _Path = __webpack_require__(6906);

Object.keys(_Path).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Path[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Path[key];
    }
  });
});

var _logger = _interopRequireWildcard(__webpack_require__(8685));

var _console = _interopRequireWildcard(__webpack_require__(6448));

exports.console = _console;

var _property = _interopRequireWildcard(__webpack_require__(1347));

exports.property = _property;

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ 3311:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

__webpack_require__(2004);

__webpack_require__(8407);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getSongLimit = getSongLimit;
exports.isSong = isSong;
exports.getActiveEffects = getActiveEffects;
exports.getActiveSongs = getActiveSongs;
exports.getSongCount = getSongCount;
exports.canRememberSong = canRememberSong;
exports.getMonsterLocations = getMonsterLocations;
exports.getRemainingLiver = getRemainingLiver;
exports.getRemainingStomach = getRemainingStomach;
exports.getRemainingSpleen = getRemainingSpleen;
exports.have = have;
exports.haveInCampground = haveInCampground;
exports.haveCounter = haveCounter;
exports.haveWandererCounter = haveWandererCounter;
exports.isVoteWandererNow = isVoteWandererNow;
exports.isWandererNow = isWandererNow;
exports.getKramcoWandererChance = getKramcoWandererChance;
exports.getFamiliarWandererChance = getFamiliarWandererChance;
exports.getWandererChance = getWandererChance;
exports.isCurrentFamiliar = isCurrentFamiliar;
exports.getFoldGroup = getFoldGroup;
exports.getZapGroup = getZapGroup;
exports.getBanishedMonsters = getBanishedMonsters;
exports.canUse = canUse;
exports.noneToNull = noneToNull;
exports.getAverage = getAverage;
exports.getAverageAdventures = getAverageAdventures;
exports.uneffect = uneffect;
exports.getPlayerFromIdOrName = getPlayerFromIdOrName;
exports.Wanderer = void 0;

__webpack_require__(2070);

__webpack_require__(8833);

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(7390);

__webpack_require__(2322);

__webpack_require__(4669);

__webpack_require__(5017);

__webpack_require__(6016);

__webpack_require__(4486);

__webpack_require__(6737);

__webpack_require__(9268);

__webpack_require__(5677);

__webpack_require__(6394);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _property = __webpack_require__(1347);

var _utils = __webpack_require__(8588);

var _templateObject, _templateObject2;

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
/**
 * Returns the current maximum Accordion Thief songs the player can have in their head
 *
 * @category General
 */


function getSongLimit() {
  return 3 + ((0, _kolmafia.booleanModifier)("Four Songs") ? 1 : 0) + (0, _kolmafia.numericModifier)("Additional Song");
}
/**
 * Return whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 */


function isSong(skillOrEffect) {
  var skill = skillOrEffect instanceof Effect ? (0, _kolmafia.toSkill)(skillOrEffect) : skillOrEffect;
  return skill.class === (0, _templateString.$class)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
}
/**
 * List all active Effects
 *
 * @category General
 */


function getActiveEffects() {
  return Object.keys((0, _kolmafia.myEffects)()).map(e => Effect.get(e));
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
  return Location.all().filter(location => monster.name in (0, _kolmafia.appearanceRates)(location));
}
/**
 * Return the player's remaining liver space
 *
 * @category General
 */


function getRemainingLiver() {
  return (0, _kolmafia.inebrietyLimit)() - (0, _kolmafia.myInebriety)();
}
/**
 * Return the player's remaining stomach space
 *
 * @category General
 */


function getRemainingStomach() {
  return (0, _kolmafia.fullnessLimit)() - (0, _kolmafia.myFullness)();
}
/**
 * Return the player's remaining spleen space
 *
 * @category General
 */


function getRemainingSpleen() {
  return (0, _kolmafia.spleenLimit)() - (0, _kolmafia.mySpleenUse)();
}
/**
 * Return whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Number to check that the player has
 */


function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (thing instanceof Effect) {
    return (0, _kolmafia.haveEffect)(thing) >= quantity;
  }

  if (thing instanceof Familiar) {
    return (0, _kolmafia.haveFamiliar)(thing);
  }

  if (thing instanceof Item) {
    return (0, _kolmafia.availableAmount)(thing) >= quantity;
  }

  if (thing instanceof Servant) {
    return (0, _kolmafia.haveServant)(thing);
  }

  if (thing instanceof Skill) {
    return (0, _kolmafia.haveSkill)(thing);
  }

  if (thing instanceof Thrall) {
    var thrall = (0, _kolmafia.myThrall)();
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


function haveInCampground(item) {
  return Object.keys((0, _kolmafia.getCampground)()).map(i => Item.get(i)).includes(item);
}

var Wanderer;
exports.Wanderer = Wanderer;

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
})(Wanderer || (exports.Wanderer = Wanderer = {}));

var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Return whether the player has the queried counter
 *
 * @category General
 */

function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxTurns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return (0, _kolmafia.getCounters)(counterName, minTurns, maxTurns) === counterName;
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
  return (0, _kolmafia.totalTurnsPlayed)() % 11 == 1;
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
    return (0, _property.get)("_hipsterAdv") < 7;
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
  var fights = (0, _property.get)("_sausageFights");
  var lastFight = (0, _property.get)("_lastSausageMonsterTurn");
  var totalTurns = (0, _kolmafia.totalTurnsPlayed)();

  if (fights < 1) {
    return lastFight === totalTurns && (0, _kolmafia.myTurncount)() < 1 ? 0.5 : 1.0;
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
  var totalFights = (0, _property.get)("_hipsterAdv");
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

  var counters = (0, _property.get)("relayCounters");
  var re = new RegExp("(\\d+):" + end);
  var matches = counters.match(re);

  if (matches && matches.length === 2) {
    var window = Number.parseInt(matches[1]) - (0, _kolmafia.myTurncount)();
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
  return (0, _kolmafia.myFamiliar)() === familiar;
}
/**
 * Returns the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 */


function getFoldGroup(item) {
  return Object.entries((0, _kolmafia.getRelated)(item, "fold")).sort((_ref, _ref2) => {
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
  return Object.keys((0, _kolmafia.getRelated)(item, "zap")).map(i => Item.get(i));
}
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 */


function getBanishedMonsters() {
  var banishes = (0, _utils.chunk)((0, _property.get)("banishedMonsters").split(":"), 3);
  var result = new Map();

  var _iterator = _createForOfIteratorHelper(banishes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          foe = _step$value[0],
          banisher = _step$value[1];

      if (foe === undefined || banisher === undefined) break; // toItem doesn"t error if the item doesn"t exist, so we have to use that.

      var banisherItem = (0, _kolmafia.toItem)(banisher);
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
  var path = (0, _kolmafia.myPath)();

  if (path !== "Nuclear Autumn") {
    if ((0, _templateString.$items)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
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
  return (0, _kolmafia.cliExecute)("uneffect ".concat(effect.name));
}
/**
 * Get both the name and id of a player from either their name or id
 *
 * @param idOrName Id or name of player
 * @returns Object containing id and name of player
 */


function getPlayerFromIdOrName(idOrName) {
  return typeof idOrName === "string" ? {
    name: idOrName,
    id: parseInt((0, _kolmafia.getPlayerId)(idOrName))
  } : {
    name: (0, _kolmafia.getPlayerName)(idOrName),
    id: idOrName
  };
}

/***/ }),

/***/ 8685:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

__webpack_require__(6394);

__webpack_require__(4669);

var _kolmafia = __webpack_require__(1664);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defaultHandlers = {
  info: message => (0, _kolmafia.printHtml)("<b>[Libram]</b> ".concat(message)),
  warning: message => (0, _kolmafia.printHtml)("<span style=\"background: orange; color: white;\"><b>[Libram]</b> ".concat(message, "</span>")),
  error: _error => (0, _kolmafia.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram]</b> ".concat(_error.toString(), "</span>"))
};

var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);

    _defineProperty(this, "handlers", defaultHandlers);
  }

  _createClass(Logger, [{
    key: "setHandler",
    value: // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function setHandler(level, callback) {
      this.handlers[level] = callback;
    }
  }, {
    key: "log",
    value: // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function log(level, message) {
      this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function info(message) {
      this.log("info", message);
    }
  }, {
    key: "warning",
    value: function warning(message) {
      this.log("warning", message);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.log("error", message);
    }
  }]);

  return Logger;
}();

var _default = new Logger();

exports.default = _default;

/***/ }),

/***/ 9376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

__webpack_require__(2004);

__webpack_require__(8407);

__webpack_require__(9174);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setDefaultMaximizeOptions = setDefaultMaximizeOptions;
exports.maximizeCached = maximizeCached;
exports.maximizeRequirementsCached = maximizeRequirementsCached;
exports.Requirement = void 0;

__webpack_require__(5677);

__webpack_require__(6394);

__webpack_require__(4517);

__webpack_require__(2070);

__webpack_require__(8833);

__webpack_require__(1646);

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(4486);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _logger = _interopRequireDefault(__webpack_require__(8685));

var _merge2 = _interopRequireDefault(__webpack_require__(4299));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");

  return _classApplyDescriptorGet(receiver, descriptor);
}

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");

  _classApplyDescriptorSet(receiver, descriptor, value);

  return value;
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnCanEquipChanged: true,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: new Map(),
  onlySlot: [],
  preventSlot: []
};
/**
 *
 * @param options Default options for each maximizer run.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */

function setDefaultMaximizeOptions(options) {
  Object.assign(defaultMaximizeOptions, options);
} // Subset of slots that are valid for caching.


var cachedSlots = (0, _templateString.$slots)(_templateObject || (_templateObject = _taggedTemplateLiteral(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));

var CacheEntry = function CacheEntry(equipment, rider, familiar, canEquipItemCount) {
  _classCallCheck(this, CacheEntry);

  _defineProperty(this, "equipment", void 0);

  _defineProperty(this, "rider", void 0);

  _defineProperty(this, "familiar", void 0);

  _defineProperty(this, "canEquipItemCount", void 0);

  this.equipment = equipment;
  this.rider = rider;
  this.familiar = familiar;
  this.canEquipItemCount = canEquipItemCount;
}; // Objective cache entries.


var cachedObjectives = {}; // Cache to prevent rescanning all items unnecessarily

var cachedStats = [0, 0, 0];
var cachedCanEquipItemCount = 0;
/**
 * Count the number of unique items that can be equipped.
 * @returns The count of unique items.
 */

function canEquipItemCount() {
  var stats = (0, _templateString.$stats)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Muscle, Mysticality, Moxie"]))).map(stat => Math.min((0, _kolmafia.myBasestat)(stat), 300));

  if (stats.every((value, index) => value === cachedStats[index])) {
    return cachedCanEquipItemCount;
  }

  cachedStats = stats;
  cachedCanEquipItemCount = Item.all().filter(item => (0, _kolmafia.canEquip)(item)).length;
  return cachedCanEquipItemCount;
}
/**
 * Checks the objective cache for a valid entry.
 * @param cacheKey The cache key to check.
 * @param updateOnFamiliarChange Ignore cache if familiar has changed.
 * @param updateOnCanEquipChanged Ignore cache if stats have changed what can be equipped.
 * @returns A valid CacheEntry or null.
 */


function checkCache(cacheKey, updateOnFamiliarChange, updateOnCanEquipChanged) {
  var entry = cachedObjectives[cacheKey];

  if (!entry) {
    return null;
  }

  if (updateOnFamiliarChange && (0, _kolmafia.myFamiliar)() !== entry.familiar) {
    _logger.default.warning("Equipment found in maximize cache but familiar is different.");

    return null;
  }

  if (updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount()) {
    _logger.default.warning("Equipment found in maximize cache but equippable item list is out of date.");

    return null;
  }

  return entry;
}
/**
 * Applies equipment that was found in the cache.
 * @param entry The CacheEntry to apply
 */


function applyCached(entry) {
  var _iterator = _createForOfIteratorHelper(entry.equipment),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          slot = _step$value[0],
          item = _step$value[1];

      if ((0, _kolmafia.equippedItem)(slot) !== item && (0, _kolmafia.availableAmount)(item) > 0) {
        (0, _kolmafia.equip)(slot, item);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get((0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    (0, _kolmafia.enthroneFamiliar)(entry.rider.get((0, _templateString.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Crown of Thrones"])))) || (0, _templateString.$familiar)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["none"]))));
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get((0, _templateString.$item)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    (0, _kolmafia.bjornifyFamiliar)(entry.rider.get((0, _templateString.$item)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Buddy Bjorn"])))) || (0, _templateString.$familiar)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["none"]))));
  }
}
/**
 * Verifies that a CacheEntry was applied successfully.
 * @param entry The CacheEntry to verify
 * @returns If all desired equipment was appliedn in the correct slots.
 */


function verifyCached(entry) {
  var success = true;

  var _iterator2 = _createForOfIteratorHelper(entry.equipment),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          slot = _step2$value[0],
          item = _step2$value[1];

      if ((0, _kolmafia.equippedItem)(slot) !== item) {
        _logger.default.warning("Failed to apply cached ".concat(item, " in ").concat(slot, "."));

        success = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get((0, _templateString.$item)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    if (entry.rider.get((0, _templateString.$item)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Crown of Thrones"])))) !== (0, _kolmafia.myEnthronedFamiliar)()) {
      _logger.default.warning("Failed to apply ".concat(entry.rider.get((0, _templateString.$item)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Crown of Thrones"])))), " in ").concat((0, _templateString.$item)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Crown of Thrones"]))), "."));

      success = false;
    }
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get((0, _templateString.$item)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    if (entry.rider.get((0, _templateString.$item)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Buddy Bjorn"])))) !== (0, _kolmafia.myBjornedFamiliar)()) {
      _logger.default.warning("Failed to apply".concat(entry.rider.get((0, _templateString.$item)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["Buddy Bjorn"])))), " in ").concat((0, _templateString.$item)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Buddy Bjorn"]))), "."));

      success = false;
    }
  }

  return success;
}
/**
 * Save current equipment to the objective cache.
 * @param cacheKey The cache key to save.
 */


function saveCached(cacheKey, options) {
  var equipment = new Map();
  var rider = new Map();

  var _iterator3 = _createForOfIteratorHelper(cachedSlots),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _slot2 = _step3.value;
      equipment.set(_slot2, (0, _kolmafia.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["card sleeve"])))) > 0) {
    equipment.set((0, _templateString.$slot)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["card-sleeve"]))), (0, _kolmafia.equippedItem)((0, _templateString.$slot)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["card-sleeve"])))));
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0) {
    rider.set((0, _templateString.$item)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Crown of Thrones"]))), (0, _kolmafia.myEnthronedFamiliar)());
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0) {
    rider.set((0, _templateString.$item)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Buddy Bjorn"]))), (0, _kolmafia.myBjornedFamiliar)());
  }

  if (options.preventSlot && options.preventSlot.length > 0) {
    var _iterator4 = _createForOfIteratorHelper(options.preventSlot),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var slot = _step4.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    if (options.preventSlot.includes((0, _templateString.$slot)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete((0, _templateString.$item)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (options.preventSlot.includes((0, _templateString.$slot)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete((0, _templateString.$item)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator5 = _createForOfIteratorHelper(Slot.all()),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _slot = _step5.value;

        if (!options.onlySlot.includes(_slot)) {
          equipment.delete(_slot);
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    if (!options.onlySlot.includes((0, _templateString.$slot)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete((0, _templateString.$item)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (!options.onlySlot.includes((0, _templateString.$slot)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete((0, _templateString.$item)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  cachedObjectives[cacheKey] = new CacheEntry(equipment, rider, (0, _kolmafia.myFamiliar)(), canEquipItemCount());
}
/**
 * Run the maximizer, but only if the objective and certain pieces of game state haven't changed since it was last run.
 * @param objectives Objectives to maximize for.
 * @param options Options for this run of the maximizer.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */


function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _defaultMaximizeOptio = _objectSpread(_objectSpread({}, defaultMaximizeOptions), options),
      updateOnFamiliarChange = _defaultMaximizeOptio.updateOnFamiliarChange,
      updateOnCanEquipChanged = _defaultMaximizeOptio.updateOnCanEquipChanged,
      forceEquip = _defaultMaximizeOptio.forceEquip,
      preventEquip = _defaultMaximizeOptio.preventEquip,
      bonusEquip = _defaultMaximizeOptio.bonusEquip,
      onlySlot = _defaultMaximizeOptio.onlySlot,
      preventSlot = _defaultMaximizeOptio.preventSlot; // Sort each group in objective to ensure consistent ordering in string


  var objective = [].concat(_toConsumableArray(objectives.sort()), _toConsumableArray(forceEquip.map(item => "equip ".concat(item)).sort()), _toConsumableArray(preventEquip.map(item => "-equip ".concat(item)).sort()), _toConsumableArray(onlySlot.filter(slot => !(0, _templateString.$slots)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["buddy-bjorn, crown-of-thrones"]))).includes(slot)).map(slot => "".concat(slot)).sort()), _toConsumableArray(preventSlot.filter(slot => !(0, _templateString.$slots)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["buddy-bjorn, crown-of-thrones"]))).includes(slot)).map(slot => "-".concat(slot)).sort()), _toConsumableArray(Array.from(bonusEquip.entries()).filter(_ref => {
    var _ref2 = _slicedToArray(_ref, 2),
        bonus = _ref2[1];

    return bonus !== 0;
  }).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
        item = _ref4[0],
        bonus = _ref4[1];

    return "".concat(Math.round(bonus * 100) / 100, " bonus ").concat(item);
  }).sort())).join(", ");
  var cacheEntry = checkCache(objective, updateOnFamiliarChange, updateOnCanEquipChanged);

  if (cacheEntry) {
    _logger.default.info("Equipment found in maximize cache, equipping...");

    applyCached(cacheEntry);

    if (verifyCached(cacheEntry)) {
      _logger.default.info("Equipped cached ".concat(objective));

      return;
    }

    _logger.default.warning("Maximize cache application failed, maximizing...");
  }

  (0, _kolmafia.maximize)(objective, false);
  saveCached(objective, options);
}

var _maximizeParameters = /*#__PURE__*/new WeakMap();

var _maximizeOptions = /*#__PURE__*/new WeakMap();

var Requirement = /*#__PURE__*/function () {
  /**
   * A convenient way of combining maximization parameters and options
   * @param maximizeParameters Parameters you're attempting to maximize
   * @param maximizeOptions Object potentially containing forceEquips, bonusEquips, preventEquips, and preventSlots
   */
  function Requirement(maximizeParameters, maximizeOptions) {
    _classCallCheck(this, Requirement);

    _maximizeParameters.set(this, {
      writable: true,
      value: void 0
    });

    _maximizeOptions.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters);

    _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }

  _createClass(Requirement, [{
    key: "maximizeParameters",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
  }, {
    key: "merge",
    value: function merge(other) {
      return (0, _merge2.default)(this, other);
    }
  }], [{
    key: "merge",
    value: function merge(allRequirements) {
      return allRequirements.reduce((x, y) => x.merge(y), new Requirement([], {}));
    }
  }]);

  return Requirement;
}();

exports.Requirement = Requirement;

function maximizeRequirementsCached(requirements) {
  var compiledRequirements = Requirement.merge(requirements);
  maximizeCached(compiledRequirements.maximizeParameters, compiledRequirements.maximizeOptions);
}

/***/ }),

/***/ 6115:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(3080);

__webpack_require__(288);

__webpack_require__(6394);

__webpack_require__(2004);

__webpack_require__(8407);

__webpack_require__(5677);

__webpack_require__(8833);

__webpack_require__(9174);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Mood = exports.MagicalSausages = exports.OscusSoda = exports.MpSource = void 0;

__webpack_require__(7715);

__webpack_require__(2076);

__webpack_require__(7723);

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _utils = __webpack_require__(8588);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var MpSource = /*#__PURE__*/function () {
  function MpSource() {
    _classCallCheck(this, MpSource);
  }

  _createClass(MpSource, [{
    key: "usesRemaining",
    value: function usesRemaining() {
      return null;
    }
  }, {
    key: "availableMpMax",
    value: function availableMpMax() {
      return this.availableMpMin();
    }
  }]);

  return MpSource;
}();

exports.MpSource = MpSource;

var OscusSoda = /*#__PURE__*/function (_MpSource) {
  _inherits(OscusSoda, _MpSource);

  var _super = _createSuper(OscusSoda);

  function OscusSoda() {
    _classCallCheck(this, OscusSoda);

    return _super.apply(this, arguments);
  }

  _createClass(OscusSoda, [{
    key: "available",
    value: function available() {
      return (0, _lib.have)((0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Oscus's neverending soda"]))));
    }
  }, {
    key: "usesRemaining",
    value: function usesRemaining() {
      return (0, _property.get)("oscusSodaUsed") ? 0 : 1;
    }
  }, {
    key: "availableMpMin",
    value: function availableMpMin() {
      return this.available() ? 200 : 0;
    }
  }, {
    key: "availableMpMax",
    value: function availableMpMax() {
      return this.available() ? 300 : 0;
    }
  }, {
    key: "execute",
    value: function execute() {
      (0, _kolmafia.use)((0, _templateString.$item)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Oscus's neverending soda"]))));
    }
  }]);

  return OscusSoda;
}(MpSource);

exports.OscusSoda = OscusSoda;

_defineProperty(OscusSoda, "instance", new OscusSoda());

var MagicalSausages = /*#__PURE__*/function (_MpSource2) {
  _inherits(MagicalSausages, _MpSource2);

  var _super2 = _createSuper(MagicalSausages);

  function MagicalSausages() {
    _classCallCheck(this, MagicalSausages);

    return _super2.apply(this, arguments);
  }

  _createClass(MagicalSausages, [{
    key: "usesRemaining",
    value: function usesRemaining() {
      return 23 - (0, _property.get)("_sausagesEaten");
    }
  }, {
    key: "availableMpMin",
    value: function availableMpMin() {
      var maxSausages = Math.min(23 - (0, _property.get)("_sausagesEaten"), (0, _kolmafia.itemAmount)((0, _templateString.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["magical sausage"])))) + (0, _kolmafia.itemAmount)((0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["magical sausage casing"])))));
      return Math.min((0, _kolmafia.myMaxmp)(), 999) * maxSausages;
    }
  }, {
    key: "execute",
    value: function execute() {
      var mpSpaceAvailable = (0, _kolmafia.myMaxmp)() - (0, _kolmafia.myMp)();
      if (mpSpaceAvailable < 700) return;
      var maxSausages = Math.min(23 - (0, _property.get)("_sausagesEaten"), (0, _kolmafia.itemAmount)((0, _templateString.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["magical sausage"])))) + (0, _kolmafia.itemAmount)((0, _templateString.$item)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["magical sausage casing"])))), Math.floor(((0, _kolmafia.myMaxmp)() - (0, _kolmafia.myMp)()) / Math.min((0, _kolmafia.myMaxmp)() - (0, _kolmafia.myMp)(), 999)));
      (0, _kolmafia.retrieveItem)(maxSausages, (0, _templateString.$item)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["magical sausage"]))));
      (0, _kolmafia.eat)(maxSausages, (0, _templateString.$item)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["magical sausage"]))));
    }
  }]);

  return MagicalSausages;
}(MpSource);

exports.MagicalSausages = MagicalSausages;

_defineProperty(MagicalSausages, "instance", new MagicalSausages());

var MoodElement = /*#__PURE__*/function () {
  function MoodElement() {
    _classCallCheck(this, MoodElement);
  }

  _createClass(MoodElement, [{
    key: "mpCostPerTurn",
    value: function mpCostPerTurn() {
      return 0;
    }
  }, {
    key: "turnIncrement",
    value: function turnIncrement() {
      return 1;
    }
  }]);

  return MoodElement;
}();

var SkillMoodElement = /*#__PURE__*/function (_MoodElement) {
  _inherits(SkillMoodElement, _MoodElement);

  var _super3 = _createSuper(SkillMoodElement);

  function SkillMoodElement(skill) {
    var _this;

    _classCallCheck(this, SkillMoodElement);

    _this = _super3.call(this);

    _defineProperty(_assertThisInitialized(_this), "skill", void 0);

    _this.skill = skill;
    return _this;
  }

  _createClass(SkillMoodElement, [{
    key: "mpCostPerTurn",
    value: function mpCostPerTurn() {
      var turns = (0, _kolmafia.turnsPerCast)(this.skill);
      return turns > 0 ? (0, _kolmafia.mpCost)(this.skill) / turns : 0;
    }
  }, {
    key: "turnIncrement",
    value: function turnIncrement() {
      return (0, _kolmafia.turnsPerCast)(this.skill);
    }
  }, {
    key: "execute",
    value: function execute(mood, ensureTurns) {
      var effect = (0, _kolmafia.toEffect)(this.skill);
      var initialTurns = (0, _kolmafia.haveEffect)(effect);
      if (!(0, _kolmafia.haveSkill)(this.skill)) return false;
      if (initialTurns >= ensureTurns) return true; // Deal with song slots.

      if (mood.options.songSlots.length > 0 && (0, _lib.isSong)(this.skill) && !(0, _lib.have)(effect)) {
        var activeSongs = (0, _lib.getActiveSongs)();

        var _iterator = _createForOfIteratorHelper(activeSongs),
            _step;

        try {
          var _loop = function _loop() {
            var song = _step.value;
            var slot = mood.options.songSlots.find(slot => slot.includes(song));
            if (!slot || slot.includes(effect)) (0, _kolmafia.cliExecute)("shrug ".concat(song));
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      var oldRemainingCasts = -1;
      var remainingCasts = Math.ceil((ensureTurns - (0, _kolmafia.haveEffect)(effect)) / (0, _kolmafia.turnsPerCast)(this.skill));

      while (remainingCasts > 0 && oldRemainingCasts !== remainingCasts) {
        var maxCasts = void 0;

        if ((0, _kolmafia.hpCost)(this.skill) > 0) {
          // FIXME: restore HP
          maxCasts = Math.floor((0, _kolmafia.myHp)() / (0, _kolmafia.hpCost)(this.skill));
        } else {
          var cost = (0, _kolmafia.mpCost)(this.skill);
          maxCasts = Math.floor((0, _kolmafia.myMp)() / cost);

          if (maxCasts === 0) {
            mood.moreMp(cost);
            maxCasts = Math.floor((0, _kolmafia.myMp)() / cost);
          }
        }

        var casts = (0, _utils.clamp)(remainingCasts, 0, Math.min(100, maxCasts));
        (0, _kolmafia.useSkill)(casts, this.skill);
        oldRemainingCasts = remainingCasts;
        remainingCasts = Math.ceil((ensureTurns - (0, _kolmafia.haveEffect)(effect)) / (0, _kolmafia.turnsPerCast)(this.skill));
      }

      return (0, _kolmafia.haveEffect)(effect) > ensureTurns;
    }
  }]);

  return SkillMoodElement;
}(MoodElement);

var PotionMoodElement = /*#__PURE__*/function (_MoodElement2) {
  _inherits(PotionMoodElement, _MoodElement2);

  var _super4 = _createSuper(PotionMoodElement);

  function PotionMoodElement(potion, maxPricePerTurn) {
    var _this2;

    _classCallCheck(this, PotionMoodElement);

    _this2 = _super4.call(this);

    _defineProperty(_assertThisInitialized(_this2), "potion", void 0);

    _defineProperty(_assertThisInitialized(_this2), "maxPricePerTurn", void 0);

    _this2.potion = potion;
    _this2.maxPricePerTurn = maxPricePerTurn;
    return _this2;
  }

  _createClass(PotionMoodElement, [{
    key: "execute",
    value: function execute(mood, ensureTurns) {
      // FIXME: Smarter buying logic.
      // FIXME: Allow constructing stuff (e.g. snow cleats)
      var effect = (0, _kolmafia.effectModifier)(this.potion, "Effect");
      var effectTurns = (0, _kolmafia.haveEffect)(effect);
      var turnsPerUse = (0, _kolmafia.numericModifier)(this.potion, "Effect Duration");

      if ((0, _kolmafia.mallPrice)(this.potion) > this.maxPricePerTurn * turnsPerUse) {
        return false;
      }

      if (effectTurns < ensureTurns) {
        var uses = (ensureTurns - effectTurns) / turnsPerUse;
        var quantityToBuy = (0, _utils.clamp)(uses - (0, _kolmafia.availableAmount)(this.potion), 0, 100);
        (0, _kolmafia.buy)(quantityToBuy, this.potion, this.maxPricePerTurn * turnsPerUse);
        var quantityToUse = (0, _utils.clamp)(uses, 0, (0, _kolmafia.availableAmount)(this.potion));
        (0, _kolmafia.use)(quantityToUse, this.potion);
      }

      return (0, _kolmafia.haveEffect)(effect) >= ensureTurns;
    }
  }]);

  return PotionMoodElement;
}(MoodElement);

var GenieMoodElement = /*#__PURE__*/function (_MoodElement3) {
  _inherits(GenieMoodElement, _MoodElement3);

  var _super5 = _createSuper(GenieMoodElement);

  function GenieMoodElement(effect) {
    var _this3;

    _classCallCheck(this, GenieMoodElement);

    _this3 = _super5.call(this);

    _defineProperty(_assertThisInitialized(_this3), "effect", void 0);

    _this3.effect = effect;
    return _this3;
  }

  _createClass(GenieMoodElement, [{
    key: "execute",
    value: function execute(mood, ensureTurns) {
      if ((0, _kolmafia.haveEffect)(this.effect) >= ensureTurns) return true;
      var neededWishes = Math.ceil(((0, _kolmafia.haveEffect)(this.effect) - ensureTurns) / 20);
      var wishesToBuy = (0, _utils.clamp)(neededWishes - (0, _kolmafia.availableAmount)((0, _templateString.$item)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["pocket wish"])))), 0, 20);
      (0, _kolmafia.buy)(wishesToBuy, (0, _templateString.$item)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["pocket wish"]))), 50000);
      var wishesToUse = (0, _utils.clamp)(neededWishes, 0, (0, _kolmafia.availableAmount)((0, _templateString.$item)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["pocket wish"])))));

      for (; wishesToUse > 0; wishesToUse--) {
        (0, _kolmafia.cliExecute)("genie effect ".concat(this.effect.name));
      }

      return (0, _kolmafia.haveEffect)(this.effect) >= ensureTurns;
    }
  }]);

  return GenieMoodElement;
}(MoodElement);

var CustomMoodElement = /*#__PURE__*/function (_MoodElement4) {
  _inherits(CustomMoodElement, _MoodElement4);

  var _super6 = _createSuper(CustomMoodElement);

  function CustomMoodElement(effect, gainEffect) {
    var _this4;

    _classCallCheck(this, CustomMoodElement);

    _this4 = _super6.call(this);

    _defineProperty(_assertThisInitialized(_this4), "effect", void 0);

    _defineProperty(_assertThisInitialized(_this4), "gainEffect", void 0);

    _this4.effect = effect;
    _this4.gainEffect = gainEffect !== null && gainEffect !== void 0 ? gainEffect : () => (0, _kolmafia.cliExecute)(effect.default);
    return _this4;
  }

  _createClass(CustomMoodElement, [{
    key: "execute",
    value: function execute(mood, ensureTurns) {
      var currentTurns = (0, _kolmafia.haveEffect)(this.effect);
      var lastCurrentTurns = -1;

      while (currentTurns < ensureTurns && currentTurns !== lastCurrentTurns) {
        this.gainEffect();
        lastCurrentTurns = currentTurns;
        currentTurns = (0, _kolmafia.haveEffect)(this.effect);
      }

      return (0, _kolmafia.haveEffect)(this.effect) > ensureTurns;
    }
  }]);

  return CustomMoodElement;
}(MoodElement);
/**
 * Class representing a mood object. Add mood elements using the instance methods, which can be chained.
 */


var Mood = /*#__PURE__*/function () {
  /**
   * Construct a new Mood instance.
   * @param options Options for mood.
   */
  function Mood() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Mood);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "elements", []);

    this.options = _objectSpread(_objectSpread({}, Mood.defaultOptions), options);
  }
  /**
   * Get the MP available for casting skills.
   */


  _createClass(Mood, [{
    key: "availableMp",
    value: function availableMp() {
      return (0, _utils.sum)(this.options.mpSources, mpSource => mpSource.availableMpMin()) + Math.max((0, _kolmafia.myMp)() - this.options.reserveMp, 0);
    }
  }, {
    key: "moreMp",
    value: function moreMp(minimumTarget) {
      var _iterator2 = _createForOfIteratorHelper(this.options.mpSources),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var mpSource = _step2.value;
          var usesRemaining = mpSource.usesRemaining();

          if (usesRemaining !== null && usesRemaining > 0) {
            mpSource.execute();
            if ((0, _kolmafia.myMp)() >= minimumTarget) break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * Add a skill to the mood.
     * @param skill Skill to add.
     */

  }, {
    key: "skill",
    value: function skill(_skill) {
      this.elements.push(new SkillMoodElement(_skill));
      return this;
    }
    /**
     * Add an effect to the mood, with casting based on {effect.default}.
     * @param effect Effect to add.
     * @param gainEffect How to gain the effect. Only runs if we don't have the effect.
     */

  }, {
    key: "effect",
    value: function effect(_effect, gainEffect) {
      var skill = (0, _kolmafia.toSkill)(_effect);

      if (!gainEffect && skill !== (0, _templateString.$skill)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["none"])))) {
        this.skill(skill);
      } else {
        this.elements.push(new CustomMoodElement(_effect, gainEffect));
      }

      return this;
    }
    /**
     * Add a potion to the mood.
     * @param potion Potion to add.
     * @param maxPricePerTurn Maximum price to pay per turn of the effect.
     */

  }, {
    key: "potion",
    value: function potion(_potion, maxPricePerTurn) {
      this.elements.push(new PotionMoodElement(_potion, maxPricePerTurn));
      return this;
    }
    /**
     * Add an effect to acquire via pocket wishes to the mood.
     * @param effect Effect to wish for in the mood.
     */

  }, {
    key: "genie",
    value: function genie(effect) {
      this.elements.push(new GenieMoodElement(effect));
      return this;
    }
    /**
     * Execute the mood, trying to ensure {ensureTurns} of each effect.
     * @param ensureTurns Turns of each effect to try and achieve.
     * @returns Whether or not we successfully got this many turns of every effect in the mood.
     */

  }, {
    key: "execute",
    value: function execute() {
      var ensureTurns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var availableMp = this.availableMp();
      var totalMpPerTurn = (0, _utils.sum)(this.elements, element => element.mpCostPerTurn());
      var potentialTurns = Math.floor(availableMp / totalMpPerTurn);
      var completeSuccess = true;

      var _iterator3 = _createForOfIteratorHelper(this.elements),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;
          var elementTurns = ensureTurns;

          if (element.mpCostPerTurn() > 0) {
            var elementPotentialTurns = Math.floor(potentialTurns / element.turnIncrement()) * element.turnIncrement();
            elementTurns = Math.min(ensureTurns, elementPotentialTurns);
          }

          completeSuccess = element.execute(this, elementTurns) && completeSuccess;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return completeSuccess;
    }
  }], [{
    key: "setDefaultOptions",
    value:
    /**
     * Set default options for new Mood instances.
     * @param options Default options for new Mood instances.
     */
    function setDefaultOptions(options) {
      Mood.defaultOptions = _objectSpread(_objectSpread({}, Mood.defaultOptions), options);
    }
  }]);

  return Mood;
}();

exports.Mood = Mood;

_defineProperty(Mood, "defaultOptions", {
  songSlots: [],
  mpSources: [MagicalSausages.instance, OscusSoda.instance],
  reserveMp: 0
});

/***/ }),

/***/ 1347:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2004);

__webpack_require__(8407);

__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.get = get;
exports.set = _set;
exports.setProperties = setProperties;
exports.withProperties = withProperties;
exports.withProperty = withProperty;
exports.withChoices = withChoices;
exports.withChoice = withChoice;
exports.PropertiesManager = exports.getThrall = exports.getStat = exports.getSlot = exports.getSkill = exports.getServant = exports.getPhylum = exports.getMonster = exports.getLocation = exports.getItem = exports.getFamiliar = exports.getElement = exports.getEffect = exports.getCoinmaster = exports.getClass = exports.getBounty = exports.getNumber = exports.getBoolean = exports.getCommaSeparated = exports.getString = void 0;

__webpack_require__(2322);

__webpack_require__(9268);

__webpack_require__(6394);

__webpack_require__(4669);

__webpack_require__(6737);

__webpack_require__(5677);

__webpack_require__(5809);

__webpack_require__(2070);

var _kolmafia = __webpack_require__(1664);

var _propertyTyping = __webpack_require__(9412);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var createPropertyGetter = transform => (property, default_) => {
  var value = (0, _kolmafia.getProperty)(property);

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
exports.getString = getString;
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
exports.getCommaSeparated = getCommaSeparated;
var getBoolean = createPropertyGetter(value => value === "true");
exports.getBoolean = getBoolean;
var getNumber = createPropertyGetter(value => Number(value));
exports.getNumber = getNumber;
var getBounty = createMafiaClassPropertyGetter(Bounty);
exports.getBounty = getBounty;
var getClass = createMafiaClassPropertyGetter(Class);
exports.getClass = getClass;
var getCoinmaster = createMafiaClassPropertyGetter(Coinmaster);
exports.getCoinmaster = getCoinmaster;
var getEffect = createMafiaClassPropertyGetter(Effect);
exports.getEffect = getEffect;
var getElement = createMafiaClassPropertyGetter(Element);
exports.getElement = getElement;
var getFamiliar = createMafiaClassPropertyGetter(Familiar);
exports.getFamiliar = getFamiliar;
var getItem = createMafiaClassPropertyGetter(Item);
exports.getItem = getItem;
var getLocation = createMafiaClassPropertyGetter(Location);
exports.getLocation = getLocation;
var getMonster = createMafiaClassPropertyGetter(Monster);
exports.getMonster = getMonster;
var getPhylum = createMafiaClassPropertyGetter(Phylum);
exports.getPhylum = getPhylum;
var getServant = createMafiaClassPropertyGetter(Servant);
exports.getServant = getServant;
var getSkill = createMafiaClassPropertyGetter(Skill);
exports.getSkill = getSkill;
var getSlot = createMafiaClassPropertyGetter(Slot);
exports.getSlot = getSlot;
var getStat = createMafiaClassPropertyGetter(Stat);
exports.getStat = getStat;
var getThrall = createMafiaClassPropertyGetter(Thrall);
/**
 * Returns the value of a mafia property, either built in or custom
 * @param property Name of the property
 * @param _default Default value for the property to take if not set
 */

exports.getThrall = getThrall;

function get(property, _default) {
  var value = getString(property);

  if ((0, _propertyTyping.isMonsterProperty)(property)) {
    return getMonster(property, _default);
  }

  if ((0, _propertyTyping.isLocationProperty)(property)) {
    return getLocation(property, _default);
  }

  if (value === "") {
    return _default === undefined ? "" : _default;
  }

  if ((0, _propertyTyping.isBooleanProperty)(property, value)) {
    return getBoolean(property, _default);
  }

  if ((0, _propertyTyping.isNumericProperty)(property, value)) {
    return getNumber(property, _default);
  }

  return value;
}
/**
 * Sets the value of a mafia property, either built in or custom
 * @param property Name of the property
 * @param value Value to give the property
 */


function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0, _kolmafia.setProperty)(property, stringValue);
}

function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        prop = _Object$entries$_i[0],
        _value = _Object$entries$_i[1];

    _set(prop, _value);
  }
}

function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
        prop = _ref2[0];

    return [prop, get(prop)];
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
    var _ref4 = _slicedToArray(_ref3, 2),
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
    _classCallCheck(this, PropertiesManager);

    _defineProperty(this, "properties", void 0);

    this.properties = {};
  }

  _createClass(PropertiesManager, [{
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            propertyName = _Object$entries2$_i[0],
            propertyValue = _Object$entries2$_i[1];

        if (this.properties[propertyName] === undefined) {
          this.properties[propertyName] = get(propertyName);
        }

        _set(propertyName, propertyValue);
      }
    }
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 2),
            choiceNumber = _ref6[0],
            choiceValue = _ref6[1];

        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
  }, {
    key: "resetAll",
    value: function resetAll() {
      Object.entries(this.properties).forEach(_ref7 => {
        var _ref8 = _slicedToArray(_ref7, 2),
            propertyName = _ref8[0],
            propertyValue = _ref8[1];

        return _set(propertyName, propertyValue);
      });
    }
  }]);

  return PropertiesManager;
}();

exports.PropertiesManager = PropertiesManager;

/***/ }),

/***/ 9412:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isNumericProperty = isNumericProperty;
exports.isNumericOrStringProperty = isNumericOrStringProperty;
exports.isBooleanProperty = isBooleanProperty;
exports.isLocationProperty = isLocationProperty;
exports.isMonsterProperty = isMonsterProperty;
exports.isFamiliarProperty = isFamiliarProperty;
exports.isStatProperty = isStatProperty;

__webpack_require__(2076);

__webpack_require__(3223);

function isNumericProperty(property, value) {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
}

var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing"];
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

var statProps = ["nsChallenge1", "shrugTopper", "snojoSetting"];

function isStatProperty(property) {
  return statProps.includes(property);
}

/***/ }),

/***/ 5661:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

__webpack_require__(6394);

__webpack_require__(2004);

__webpack_require__(8407);

__webpack_require__(5677);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.getRunaways = getRunaways;
exports.getMaxRunaways = getMaxRunaways;
exports.getRemainingRunaways = getRemainingRunaways;
exports.couldRunaway = couldRunaway;
exports.canRunaway = canRunaway;
exports.prepareRunaway = prepareRunaway;
exports.familiar = void 0;

__webpack_require__(2076);

__webpack_require__(7723);

var _kolmafia = __webpack_require__(1664);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _lib = __webpack_require__(3311);

var _templateObject, _templateObject2, _templateObject3;

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var familiar = (0, _templateString.$familiar)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Frumious Bandersnatch"])));
/**
 * Returns true if the player has the Frumious Bandersnatch in their
 * terrariukm
 */

exports.familiar = familiar;

function have() {
  return (0, _lib.have)(familiar);
}
/**
 * Returns the number of free runaways that have already been used
 * @see StompingBoots with which the Bandersnatch shares a counter
 */


function getRunaways() {
  return (0, _property.get)("_banderRunaways");
}
/**
 * Returns the total number of free runaways that the player can
 * get from their Bandersnatch
 *
 * @param considerWeightAdjustment Include familiar weight modifiers
 */


function getMaxRunaways() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var weightBuffs = considerWeightAdjustment ? (0, _kolmafia.weightAdjustment)() : 0;
  return Math.floor(((0, _kolmafia.familiarWeight)(familiar) + weightBuffs) / 5);
}
/**
 * Returns the number of remaining free runaways the player can
 * get from their Bandersnatch
 *
 * @param considerWeightAdjustment
 */


function getRemainingRunaways() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return Math.max(0, getMaxRunaways(considerWeightAdjustment) - getRunaways());
}
/**
 * Returns true if the player could use their Bandersnatch to
 * get a free run in theory
 *
 * @param considerWeightAdjustment Include familiar weight modifiers
 */


function couldRunaway() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return have() && getRemainingRunaways(considerWeightAdjustment) > 0;
}

var odeSkill = (0, _templateString.$skill)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["The Ode to Booze"])));
var odeEffect = (0, _templateString.$effect)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Ode to Booze"])));
/**
 * Returns true if the player can use their Bandersnatch to get a
 * free run right now
 */

function canRunaway() {
  return (0, _lib.isCurrentFamiliar)(familiar) && couldRunaway() && (0, _lib.have)(odeEffect);
}
/**
 * Prepare a Bandersnatch runaway.
 *
 * This will cast Ode to Booze and equip take your Bandersnatch with you.
 * If any of those steps fail, it will return false.
 *
 * @param songsToRemove Ordered list of songs that could be shrugged to make room for Ode to Booze
 */


function prepareRunaway(songsToRemove) {
  if (!(0, _lib.have)(odeEffect)) {
    if (!(0, _lib.have)(odeSkill)) {
      return false;
    }

    if (!(0, _lib.canRememberSong)()) {
      var activeSongs = (0, _lib.getActiveSongs)();

      var _iterator = _createForOfIteratorHelper(songsToRemove),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var song = _step.value;

          if (activeSongs.includes(song) && (0, _lib.uneffect)(song)) {
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    if (!(0, _kolmafia.useSkill)(odeSkill)) {
      return false;
    }
  }

  return (0, _kolmafia.useFamiliar)(familiar);
}

/***/ }),

/***/ 7235:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.getSpookyPuttySheetCopiesMade = getSpookyPuttySheetCopiesMade;
exports.prepareSpookyPuttySheet = prepareSpookyPuttySheet;
exports.getSpookyPuttySheetMonster = getSpookyPuttySheetMonster;
exports.useSpookyPuttySheet = useSpookyPuttySheet;
exports.sheet = void 0;

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var sheet = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Spooky Putty sheet"])));
exports.sheet = sheet;

function have() {
  return (0, _lib.getFoldGroup)(sheet).some(item => (0, _lib.have)(item));
}

function getSpookyPuttySheetCopiesMade() {
  return Math.max(0, (0, _property.get)("spookyPuttyCopiesMade"));
}

function prepareSpookyPuttySheet() {
  if (!have()) return false;
  if ((0, _lib.have)(sheet)) return true;
  return (0, _kolmafia.cliExecute)("fold Spooky putty sheet");
}

function getSpookyPuttySheetMonster() {
  return (0, _property.get)("spookyPuttyMonster");
}

function useSpookyPuttySheet() {
  return (0, _kolmafia.use)(sheet);
}

/***/ }),

/***/ 3758:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.getBadlyRomanticArrowUses = getBadlyRomanticArrowUses;
exports.haveBadlyRomanticArrowUsesRemaining = haveBadlyRomanticArrowUsesRemaining;
exports.couldUseBadlyRomanticArrow = couldUseBadlyRomanticArrow;
exports.prepareBadlyRomanticArrow = prepareBadlyRomanticArrow;
exports.canUseBadlyRomanticArrow = canUseBadlyRomanticArrow;
exports.getBadlyRomanticArrowMonster = getBadlyRomanticArrowMonster;
exports.BadlyRomanticArrow = exports.familiar = void 0;

var _kolmafia = __webpack_require__(1664);

var _Copier = __webpack_require__(3425);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var familiar = (0, _templateString.$familiar)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Obtuse Angel"])));
/**
 * Returns true if the player has an Obtuse Angel
 */

exports.familiar = familiar;

function have() {
  return (0, _lib.have)(familiar);
}
/**
 * Returns number of badly romantic arrows used
 */


function getBadlyRomanticArrowUses() {
  return Math.max(0, (0, _property.get)("_badlyRomanticArrows"));
}
/**
 * Returns true if badly romantic arrow can still be used
 */


function haveBadlyRomanticArrowUsesRemaining() {
  return getBadlyRomanticArrowUses() === 0;
}
/**
 * Returns true if the player could use badly romantic arrow in theory
 */


function couldUseBadlyRomanticArrow() {
  return have() && haveBadlyRomanticArrowUsesRemaining();
}
/**
 * Prepares badly romantic arrow for use
 */


function prepareBadlyRomanticArrow() {
  return (0, _kolmafia.useFamiliar)(familiar);
}
/**
 * Returns true if the player can use badly romantic arrow right now
 */


function canUseBadlyRomanticArrow() {
  return (0, _lib.isCurrentFamiliar)(familiar) && haveBadlyRomanticArrowUsesRemaining();
}
/**
 * Returns the current badly romantic arrow monster target
 */


function getBadlyRomanticArrowMonster() {
  return (0, _property.get)("romanticTarget");
}

var BadlyRomanticArrow = new _Copier.Copier(() => couldUseBadlyRomanticArrow(), () => prepareBadlyRomanticArrow(), () => canUseBadlyRomanticArrow(), () => getBadlyRomanticArrowMonster());
exports.BadlyRomanticArrow = BadlyRomanticArrow;

/***/ }),

/***/ 4945:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.getRainDohBlackBoxCopiesMade = getRainDohBlackBoxCopiesMade;
exports.getRainDohBlackBoxMonster = getRainDohBlackBoxMonster;
exports.useRainDohBlackBox = useRainDohBlackBox;
exports.box = void 0;

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var box = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Rain-Doh black box"])));
exports.box = box;

function have() {
  return (0, _lib.getFoldGroup)(box).some(item => (0, _lib.have)(item));
}

function getRainDohBlackBoxCopiesMade() {
  return Math.max(0, (0, _property.get)("_raindohCopiesMade"));
}

function getRainDohBlackBoxMonster() {
  return (0, _property.get)("rainDohMonster");
}

function useRainDohBlackBox() {
  return (0, _kolmafia.use)(box);
}

/***/ }),

/***/ 5915:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.haveUnfinishedIceSculpture = haveUnfinishedIceSculpture;
exports.isUnfinishedIceSculptureUsed = isUnfinishedIceSculptureUsed;
exports.couldUseUnfinishedIceSculpture = couldUseUnfinishedIceSculpture;
exports.getUnfinishedIceSculptureMonster = getUnfinishedIceSculptureMonster;
exports.UnfinishedIceSculpture = void 0;

var _Copier = __webpack_require__(3425);

var _property = __webpack_require__(1347);

var _lib = __webpack_require__(3311);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function have() {
  return (0, _lib.haveInCampground)((0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["packet of winter seeds"]))));
}

function haveUnfinishedIceSculpture() {
  return (0, _lib.have)((0, _templateString.$item)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["unfinished ice sculpture"]))));
}

function isUnfinishedIceSculptureUsed() {
  return (0, _property.get)("_iceSculptureUsed");
}

function couldUseUnfinishedIceSculpture() {
  return (0, _lib.have)((0, _templateString.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["unfinished ice sculpture"])))) && !(0, _lib.have)((0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["ice sculpture"]))));
}

function getUnfinishedIceSculptureMonster() {
  return (0, _property.get)("iceSculptureMonster");
}

var UnfinishedIceSculpture = new _Copier.Copier(() => couldUseUnfinishedIceSculpture(), null, () => couldUseUnfinishedIceSculpture(), () => getUnfinishedIceSculptureMonster());
exports.UnfinishedIceSculpture = UnfinishedIceSculpture;

/***/ }),

/***/ 7975:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.paintingMonster = paintingMonster;
exports.paintingFought = paintingFought;
exports.fightPainting = fightPainting;
exports.getDesk = getDesk;
exports.getCeiling = getCeiling;
exports.getNightstand = getNightstand;
exports.changeDesk = changeDesk;
exports.changeCeiling = changeCeiling;
exports.changeNightstand = changeNightstand;

__webpack_require__(7715);

__webpack_require__(2076);

__webpack_require__(7723);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _property = __webpack_require__(1347);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function have() {
  return (0, _property.get)("chateauAvailable");
}

function paintingMonster() {
  return (0, _property.get)("chateauMonster");
}

function paintingFought() {
  return (0, _property.get)("_chateauMonsterFought");
}

function fightPainting() {
  (0, _kolmafia.visitUrl)("place.php?whichplace=chateau&action=chateau_painting", false);
  return (0, _kolmafia.runCombat)();
}

var desks = (0, _templateString.$items)(_templateObject || (_templateObject = _taggedTemplateLiteral(["fancy stationery set, Swiss piggy bank, continental juice bar"])));
var ceilings = (0, _templateString.$items)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["antler chandelier, ceiling fan, artificial skylight"])));
var nightstands = (0, _templateString.$items)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["foreign language tapes, bowl of potpourri, electric muscle stimulator"])));

function getDesk() {
  return desks.find(desk => Object.keys((0, _kolmafia.getChateau)()).includes(desk.name)) || (0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["none"])));
}

function getCeiling() {
  return ceilings.find(ceiling => Object.keys((0, _kolmafia.getChateau)()).includes(ceiling.name)) || (0, _templateString.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["none"])));
}

function getNightstand() {
  return nightstands.find(nightstand => Object.keys((0, _kolmafia.getChateau)()).includes(nightstand.name)) || (0, _templateString.$item)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["none"])));
}

function changeDesk(desk) {
  if (getDesk() === desk) return true;
  if (!desks.includes(desk)) return false;
  (0, _kolmafia.buy)(desk);
  return getDesk() === desk;
}

function changeCeiling(ceiling) {
  if (getCeiling() === ceiling) return true;
  if (!ceilings.includes(ceiling)) return false;
  (0, _kolmafia.buy)(ceiling);
  return getCeiling() === ceiling;
}

function changeNightstand(nightstand) {
  if (getNightstand() === nightstand) return true;
  if (!nightstands.includes(nightstand)) return false;
  (0, _kolmafia.buy)(nightstand);
  return getNightstand() === nightstand;
}

/***/ }),

/***/ 1577:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2004);

__webpack_require__(8407);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.enhance = enhance;
exports.enquiry = enquiry;
exports.educate = educate;
exports.getSkills = getSkills;
exports.isCurrentSkill = isCurrentSkill;
exports.extrude = extrude;
exports.getChips = getChips;
exports.getDigitizeUses = getDigitizeUses;
exports.getDigitizeMonster = getDigitizeMonster;
exports.getDigitizeMonsterCount = getDigitizeMonsterCount;
exports.getMaximumDigitizeUses = getMaximumDigitizeUses;
exports.getDigitizeUsesRemaining = getDigitizeUsesRemaining;
exports.couldDigitize = couldDigitize;
exports.prepareDigitize = prepareDigitize;
exports.canDigitize = canDigitize;
exports.getDuplicateUses = getDuplicateUses;
exports.getEnhanceUses = getEnhanceUses;
exports.getPortscanUses = getPortscanUses;
exports.Digitize = exports.Items = exports.Skills = exports.RolloverBuffs = exports.Buffs = exports.item = void 0;

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(9628);

__webpack_require__(288);

__webpack_require__(2070);

__webpack_require__(8833);

__webpack_require__(5677);

__webpack_require__(6394);

__webpack_require__(2322);

__webpack_require__(9268);

var _kolmafia = __webpack_require__(1664);

var _isEqual = _interopRequireDefault(__webpack_require__(7120));

var _Copier = __webpack_require__(3425);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var item = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Source terminal"])));
exports.item = item;

function have() {
  return (0, _lib.haveInCampground)(item);
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
  Items: (0, _templateString.$effect)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["items.enh"]))),
  Meat: (0, _templateString.$effect)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["meat.enh"]))),
  Init: (0, _templateString.$effect)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["init.enh"]))),
  Critical: (0, _templateString.$effect)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["critical.enh"]))),
  Damage: (0, _templateString.$effect)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["damage.enh"]))),
  Substats: (0, _templateString.$effect)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["substats.enh"])))
};
/**
 * Acquire a buff from the Source Terminal
 * @param buff The buff to acquire
 * @see Buffs
 */

exports.Buffs = Buffs;

function enhance(buff) {
  if (!Object.values(Buffs).includes(buff)) {
    return false;
  }

  return (0, _kolmafia.cliExecute)("terminal enhance ".concat(buff.name));
}
/**
 * Rollover buffs that can be acquired from Enquiry
 */


var RolloverBuffs = {
  /** +5 Familiar Weight */
  Familiar: (0, _templateString.$effect)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["familiar.enq"]))),

  /** +25 ML */
  Monsters: (0, _templateString.$effect)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["monsters.enq"]))),

  /** +5 Prismatic Resistance */
  Protect: (0, _templateString.$effect)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["protect.enq"]))),

  /** +100% Muscle, +100% Mysticality, +100% Moxie */
  Stats: (0, _templateString.$effect)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["stats.enq"])))
};
/**
 * Acquire a buff from the Source Terminal
 * @param buff The buff to acquire
 * @see RolloverBuffs
 */

exports.RolloverBuffs = RolloverBuffs;

function enquiry(rolloverBuff) {
  if (!Object.values(RolloverBuffs).includes(rolloverBuff)) {
    return false;
  }

  return (0, _kolmafia.cliExecute)("terminal enquiry ".concat(rolloverBuff.name));
}
/**
 * Skills that can be acquired from Enhance
 */


var Skills = {
  /** Collect Source essence from enemies once per combat */
  Extract: (0, _templateString.$skill)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Extract"]))),

  /** Stagger and create a wandering monster 1-3 times per day */
  Digitize: (0, _templateString.$skill)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Digitize"]))),

  /** Stagger and deal 25% of enemy HP in damage once per combat */
  Compress: (0, _templateString.$skill)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Compress"]))),

  /** Double monster's HP, attack, defence, attacks per round and item drops once per fight and once per day (five in The Source) */
  Duplicate: (0, _templateString.$skill)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Duplicate"]))),

  /** Causes government agent/Source Agent wanderer next turn once per combat and three times per day */
  Portscan: (0, _templateString.$skill)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Portscan"]))),

  /** Increase Max MP by 100% and recover 1000 MP once per combat with a 30 turn cooldown */
  Turbo: (0, _templateString.$skill)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Turbo"])))
};
/**
 * Make a skill available.
 * The Source Terminal can give the player access to two skills at any time
 * @param skill Skill to learn
 * @see Skills
 */

exports.Skills = Skills;

function educate(skills) {
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if ((0, _isEqual.default)(skillsArray, getSkills())) return true;

  var _iterator = _createForOfIteratorHelper(skillsArray),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var skill = _step.value;
      if (!Object.values(Skills).includes(skill)) return false;
      (0, _kolmafia.cliExecute)("terminal educate ".concat(skill.name.toLowerCase(), ".edu"));
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
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(p => (0, _property.get)(p)).filter(s => s !== "").map(s => Skill.get(s.slice(0, -4)));
}

function isCurrentSkill(skills) {
  var currentSkills = getSkills();
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every(skill => currentSkills.includes(skill));
}
/**
 * Items that can be generated by the Source Terminal
 */


var Items = new Map([[(0, _templateString.$item)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["browser cookie"]))), "food.ext"], [(0, _templateString.$item)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["hacked gibson"]))), "booze.ext"], [(0, _templateString.$item)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Source shades"]))), "goggles.ext"], [(0, _templateString.$item)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["Source terminal GRAM chip"]))), "gram.ext"], [(0, _templateString.$item)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["Source terminal PRAM chip"]))), "pram.ext"], [(0, _templateString.$item)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["Source terminal SPAM chip"]))), "spam.ext"], [(0, _templateString.$item)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Source terminal CRAM chip"]))), "cram.ext"], [(0, _templateString.$item)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Source terminal DRAM chip"]))), "dram.ext"], [(0, _templateString.$item)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["Source terminal TRAM chip"]))), "tram.ext"], [(0, _templateString.$item)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["software bug"]))), "familiar.ext"]]);
/**
 * Collect an item from the Source Terminal (up to three times a day)
 * @param item Item to collect
 * @see Items
 */

exports.Items = Items;

function extrude(item) {
  var fileName = Items.get(item);
  if (!fileName) return false;
  return (0, _kolmafia.cliExecute)("terminal extrude ".concat(fileName));
}
/**
 * Return chips currently installed to player's Source Terminal
 */


function getChips() {
  return (0, _property.get)("sourceTerminalChips").split(",");
}
/**
 * Return number of times digitize was cast today
 */


function getDigitizeUses() {
  return (0, _property.get)("_sourceTerminalDigitizeUses");
}
/**
 * Return Monster that is currently digitized, else null
 */


function getDigitizeMonster() {
  return (0, _property.get)("_sourceTerminalDigitizeMonster");
}
/**
 * Return number of digitized monsters encountered since it was last cast
 */


function getDigitizeMonsterCount() {
  return (0, _property.get)("_sourceTerminalDigitizeMonsterCount");
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

var Digitize = new _Copier.Copier(() => couldDigitize(), () => prepareDigitize(), () => canDigitize(), () => getDigitizeMonster());
/**
 * Return number of times duplicate was cast today
 */

exports.Digitize = Digitize;

function getDuplicateUses() {
  return (0, _property.get)("_sourceTerminalDuplicateUses");
}
/**
 * Return number of times enhance was cast today
 */


function getEnhanceUses() {
  return (0, _property.get)("_sourceTerminalEnhanceUses");
}
/**
 * Return number of times portscan was cast today
 */


function getPortscanUses() {
  return (0, _property.get)("_sourceTerminalPortscanUses");
}

/***/ }),

/***/ 7271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.fightsDone = fightsDone;
exports.fightPiece = fightPiece;
exports.pieces = exports.item = void 0;

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(1646);

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var item = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Witchess Set"])));
exports.item = item;

function have() {
  return (0, _lib.haveInCampground)(item);
}

function fightsDone() {
  return (0, _property.get)("_witchessFights");
}

var pieces = Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
exports.pieces = pieces;

function fightPiece(piece) {
  if (!pieces.includes(piece)) throw new Error("That is not a valid piece.");

  if (!(0, _kolmafia.visitUrl)("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }

  if (!(0, _kolmafia.runChoice)(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }

  if (!(0, _kolmafia.visitUrl)("choice.php?option=1&pwd=".concat((0, _kolmafia.myHash)(), "&whichchoice=1182&piece=").concat((0, _kolmafia.toInt)(piece)), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }

  return (0, _kolmafia.runCombat)();
}

/***/ }),

/***/ 6255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.isUsed = isUsed;
exports.haveLovEnamorang = haveLovEnamorang;
exports.getLovEnamorangUses = getLovEnamorangUses;
exports.couldUseLoveEnamorang = couldUseLoveEnamorang;
exports.getLovEnamorangMonster = getLovEnamorangMonster;
exports.fightAll = fightAll;
exports.LovEnamorang = void 0;

var _kolmafia = __webpack_require__(1664);

var _Copier = __webpack_require__(3425);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function have() {
  return (0, _property.get)("loveTunnelAvailable");
}

function isUsed() {
  return (0, _property.get)("_loveTunnelUsed");
}

function haveLovEnamorang() {
  return (0, _lib.have)((0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["LOV Enamorang"]))));
}

function getLovEnamorangUses() {
  return (0, _property.get)("_enamorangs");
}

function couldUseLoveEnamorang() {
  return !(0, _lib.haveWandererCounter)(_lib.Wanderer.Enamorang) && getLovEnamorangUses() < 3 && haveLovEnamorang();
}

function getLovEnamorangMonster() {
  return (0, _property.get)("enamorangMonster");
}

var LovEnamorang = new _Copier.Copier(() => couldUseLoveEnamorang(), null, () => couldUseLoveEnamorang(), () => getLovEnamorangMonster());
exports.LovEnamorang = LovEnamorang;

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
  (0, _property.set)("choiceAdventure1222", 1); // Entrance

  (0, _property.set)("choiceAdventure1223", 1); // Fight LOV Enforcer

  (0, _property.set)("choiceAdventure1224", equipmentChoice(equipment));
  (0, _property.set)("choiceAdventure1225", 1); // Fight LOV Engineer

  (0, _property.set)("choiceAdventure1226", effectChoice(effect));
  (0, _property.set)("choiceAdventure1227", 1); // Fight LOV Equivocator

  (0, _property.set)("choiceAdventure1228", extraChoice(extra));
  (0, _kolmafia.adv1)((0, _templateString.$location)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["The Tunnel of L.O.V.E."]))), 0, "");
}

/***/ }),

/***/ 2211:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.song = song;
exports.songChangesLeft = songChangesLeft;
exports.setSong = setSong;
exports.dropProgress = dropProgress;
exports.songBoomSongs = exports.item = void 0;

__webpack_require__(5677);

__webpack_require__(6394);

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var item = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["SongBoom\u2122 BoomBox"])));
exports.item = item;

function have() {
  return (0, _lib.have)(item);
}

var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
};
var songBoomSongs = new Set(Object.keys(keywords));
/**
 * Current song.
 */

exports.songBoomSongs = songBoomSongs;

function song() {
  var stored = (0, _property.get)("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
/**
 * Song changes left today.
 */


function songChangesLeft() {
  return (0, _property.get)("_boomBoxSongsLeft");
}
/**
 * Change the song.
 * @param newSong Song to change to.
 */


function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0) throw new Error("Out of song changes!");
    (0, _kolmafia.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none"));
    return true;
  } else {
    return false;
  }
}
/**
 * Progress to next song drop (e.g. gathered meat-clip).
 */


function dropProgress() {
  return (0, _property.get)("_boomBoxFights");
}

/***/ }),

/***/ 5352:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.isQuestActive = isQuestActive;
exports.getPlatinum = getPlatinum;
exports.getPlatinumToday = getPlatinumToday;
exports.canPlatinum = canPlatinum;
exports.haveFullPlatinumBonus = haveFullPlatinumBonus;
exports.acceptPlatinum = acceptPlatinum;
exports.getGold = getGold;
exports.getGoldToday = getGoldToday;
exports.canGold = canGold;
exports.haveFullGoldBonus = haveFullGoldBonus;
exports.acceptGold = acceptGold;
exports.getBronze = getBronze;
exports.acceptBronze = acceptBronze;
exports.haveFullBronzeBonus = haveFullBronzeBonus;
exports.canAbandon = canAbandon;
exports.abandon = abandon;
exports.getLocation = getLocation;
exports.getTier = getTier;
exports.getBooze = getBooze;
exports.havePlatinumBooze = havePlatinumBooze;
exports.haveBooze = haveBooze;
exports.Cocktails = exports.item = void 0;

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var item = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Guzzlr tablet"])));
exports.item = item;

function have() {
  return (0, _lib.have)(item);
}

function useTabletWithChoice(option) {
  (0, _property.withChoice)(1412, option, () => (0, _kolmafia.use)(1, item));
}

function isQuestActive() {
  return (0, _property.get)("questGuzzlr") !== "unstarted";
}
/**
 * Platinum deliveries completed overall
 */


function getPlatinum() {
  return (0, _property.get)("guzzlrPlatinumDeliveries");
}
/**
 * Platinum deliveries completed today
 */


function getPlatinumToday() {
  return (0, _property.get)("_guzzlrPlatinumDeliveries");
}
/**
 * Can do a platinum delivery (haven't done one today)
 */


function canPlatinum() {
  return !isQuestActive() && getGold() >= 5 && getPlatinumToday() < 1;
}
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */


function haveFullPlatinumBonus() {
  return getPlatinum() >= 30;
}
/**
 * Accept platinum delivery
 */


function acceptPlatinum() {
  if (!canPlatinum()) return false;
  useTabletWithChoice(4);
  return true;
}
/**
 * Gold deliveries completed overall
 */


function getGold() {
  return (0, _property.get)("guzzlrGoldDeliveries");
}
/**
 * Gold deliveries completed today
 */


function getGoldToday() {
  return (0, _property.get)("_guzzlrGoldDeliveries");
}
/**
 * Can do a gold delivery (have done fewer than 3 today)
 */


function canGold() {
  return !isQuestActive() && getBronze() >= 5 && getGoldToday() < 3;
}
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */


function haveFullGoldBonus() {
  return getGold() >= 150;
}
/**
 * Accept gold delivery
 */


function acceptGold() {
  if (!canGold()) return false;
  useTabletWithChoice(3);
  return true;
}
/**
 * Bronze deliveries completed overall
 */


function getBronze() {
  return (0, _property.get)("guzzlrBronzeDeliveries");
}
/**
 * Accept bronze delivery
 */


function acceptBronze() {
  if (isQuestActive()) return false;
  useTabletWithChoice(2);
  return true;
}
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */


function haveFullBronzeBonus() {
  return getBronze() >= 196;
}
/**
 * Can abandon the current Guzzlr quest
 */


function canAbandon() {
  return isQuestActive() && !(0, _property.get)("_guzzlrQuestAbandoned");
}
/**
 * Abandon Guzzlr quest
 */


function abandon() {
  if (!canAbandon()) return false;
  (0, _kolmafia.visitUrl)("inventory.php?tap=guzzlr", false);
  (0, _kolmafia.runChoice)(1);
  (0, _kolmafia.runChoice)(5);
  return true;
}
/**
 * Get current Guzzlr quest location
 */


function getLocation() {
  return (0, _property.get)("guzzlrQuestLocation");
}
/**
 * Get current Guzzlr quest tier
 */


function getTier() {
  var tier = (0, _property.get)("guzzlrQuestTier");
  return tier === "" ? null : tier;
}
/**
 * Get current Guzzlr quest booze
 */


function getBooze() {
  var booze = (0, _property.get)("guzzlrQuestBooze");
  if (booze === "") return null;
  return Item.get(booze);
}
/**
 * List of the platinum cocktails
 */


var Cocktails = (0, _templateString.$items)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Buttery Boy, Steamboat, Ghiaccio Colada, Nog-on-the-Cob, Sourfinger"])));
/**
 * Returns true if the user has a platinum cocktail in their inventory
 */

exports.Cocktails = Cocktails;

function havePlatinumBooze() {
  return Cocktails.some(cock => (0, _lib.have)(cock));
}
/**
 * Returns true if the user has the cocktail that they need for their current quest
 *
 * If they have no quest, returns false
 */


function haveBooze() {
  var booze = getBooze();

  switch (booze) {
    case null:
      return false;

    case (0, _templateString.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Guzzlr cocktail set"]))):
      return havePlatinumBooze();

    default:
      return (0, _lib.have)(booze);
  }
}

/***/ }),

/***/ 1895:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(5677);

__webpack_require__(6394);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Bandersnatch: true,
  ChateauMantegna: true,
  ObtuseAngel: true,
  RainDoh: true,
  SongBoom: true,
  SourceTerminal: true,
  SpookyPutty: true,
  TunnelOfLove: true,
  WinterGarden: true,
  Witchess: true,
  Guzzlr: true
};
exports.Guzzlr = exports.Witchess = exports.WinterGarden = exports.TunnelOfLove = exports.SpookyPutty = exports.SourceTerminal = exports.SongBoom = exports.RainDoh = exports.ObtuseAngel = exports.ChateauMantegna = exports.Bandersnatch = void 0;

var _Bandersnatch = _interopRequireWildcard(__webpack_require__(5661));

exports.Bandersnatch = _Bandersnatch;

var _ChateauMantegna = _interopRequireWildcard(__webpack_require__(7975));

exports.ChateauMantegna = _ChateauMantegna;

var _ObtuseAngel = _interopRequireWildcard(__webpack_require__(3758));

exports.ObtuseAngel = _ObtuseAngel;

var _RainDoh = _interopRequireWildcard(__webpack_require__(4945));

exports.RainDoh = _RainDoh;

var _SongBoom = _interopRequireWildcard(__webpack_require__(2211));

exports.SongBoom = _SongBoom;

var _SourceTerminal = _interopRequireWildcard(__webpack_require__(1577));

exports.SourceTerminal = _SourceTerminal;

var _SpookyPutty = _interopRequireWildcard(__webpack_require__(7235));

exports.SpookyPutty = _SpookyPutty;

var _TunnelOfLove = _interopRequireWildcard(__webpack_require__(6255));

exports.TunnelOfLove = _TunnelOfLove;

var _WinterGarden = _interopRequireWildcard(__webpack_require__(5915));

exports.WinterGarden = _WinterGarden;

var _Witchess = _interopRequireWildcard(__webpack_require__(7271));

exports.Witchess = _Witchess;

var _Guzzlr = _interopRequireWildcard(__webpack_require__(5352));

exports.Guzzlr = _Guzzlr;

var _puttyLikes = __webpack_require__(5231);

Object.keys(_puttyLikes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _puttyLikes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _puttyLikes[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

/***/ }),

/***/ 5231:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTotalPuttyLikeCopiesMade = getTotalPuttyLikeCopiesMade;
exports.couldUseRainDohBlackBox = couldUseRainDohBlackBox;
exports.couldUseSpookyPuttySheet = couldUseSpookyPuttySheet;
exports.SpookyPuttySheet = exports.RainDohBlackBox = void 0;

var _Copier = __webpack_require__(3425);

var _SpookyPutty = __webpack_require__(7235);

var _RainDoh = __webpack_require__(4945);

function getTotalPuttyLikeCopiesMade() {
  return (0, _SpookyPutty.getSpookyPuttySheetCopiesMade)() + (0, _RainDoh.getRainDohBlackBoxCopiesMade)();
}

function couldUseRainDohBlackBox() {
  return (0, _RainDoh.have)() && (0, _RainDoh.getRainDohBlackBoxCopiesMade)() < 5 && getTotalPuttyLikeCopiesMade() < 6;
}

var RainDohBlackBox = new _Copier.Copier(() => couldUseRainDohBlackBox(), null, () => couldUseRainDohBlackBox(), () => (0, _RainDoh.getRainDohBlackBoxMonster)(), () => (0, _RainDoh.useRainDohBlackBox)());
exports.RainDohBlackBox = RainDohBlackBox;

function couldUseSpookyPuttySheet() {
  return (0, _SpookyPutty.have)() && (0, _SpookyPutty.getSpookyPuttySheetCopiesMade)() < 5 && getTotalPuttyLikeCopiesMade() < 6;
}

var SpookyPuttySheet = new _Copier.Copier(() => couldUseSpookyPuttySheet(), () => (0, _SpookyPutty.prepareSpookyPuttySheet)(), () => couldUseSpookyPuttySheet(), () => (0, _SpookyPutty.getSpookyPuttySheetMonster)(), () => (0, _SpookyPutty.useSpookyPuttySheet)());
exports.SpookyPuttySheet = SpookyPuttySheet;

/***/ }),

/***/ 1157:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(6394);

__webpack_require__(4669);

__webpack_require__(3080);

__webpack_require__(5677);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sinceKolmafiaRevision = sinceKolmafiaRevision;
exports.sinceKolmafiaVersion = sinceKolmafiaVersion;
exports.KolmafiaVersionError = void 0;

__webpack_require__(1646);

__webpack_require__(2322);

var _kolmafia = __webpack_require__(1664);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/**
 * Represents an exception thrown when the current KoLmafia version does not
 * match an expected condition.
 */


var KolmafiaVersionError = /*#__PURE__*/function (_Error) {
  _inherits(KolmafiaVersionError, _Error);

  var _super = _createSuper(KolmafiaVersionError);

  function KolmafiaVersionError(message) {
    var _this;

    _classCallCheck(this, KolmafiaVersionError);

    _this = _super.call(this, message); // Explicitly set the prototype, so that 'instanceof' still works in Node.js
    // even when the class is transpiled down to ES5
    // See: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    // Note that this code isn't needed for Rhino.

    Object.setPrototypeOf(_assertThisInitialized(_this), KolmafiaVersionError.prototype);
    return _this;
  }

  return KolmafiaVersionError;
}( /*#__PURE__*/_wrapNativeSuper(Error)); // Manually set class name, so that the stack trace shows proper name in Rhino


exports.KolmafiaVersionError = KolmafiaVersionError;
KolmafiaVersionError.prototype.name = "KolmafiaVersionError";
/**
 * Returns the currently executing script name, suitable for embedding in an
 * error message.
 * @returns Path of the main script wrapped in single-quotes, or `"This script"`
 *    if the path cannot be determined
 */

function getScriptName() {
  var _require$main; // In Rhino, the current script name is available in require.main.id


  var scriptName = (_require$main = __webpack_require__.c[__webpack_require__.s]) === null || _require$main === void 0 ? void 0 : _require$main.id;
  return scriptName ? "'".concat(scriptName, "'") : "This script";
}
/**
 * If KoLmafia's revision number is less than `revision`, throws an exception.
 * Otherwise, does nothing.
 *
 * This behaves like the `since rXXX;` statement in ASH.
 * @param revision Revision number
 * @throws {KolmafiaVersionError}
 *    If KoLmafia's revision number is less than `revision`.
 * @throws {TypeError} If `revision` is not an integer
 *
 * @example
 * ```ts
 * // Throws if KoLmafia revision is less than r20500
 * sinceKolmafiaRevision(20500);
 * ```
 */


function sinceKolmafiaRevision(revision) {
  if (!Number.isInteger(revision)) {
    throw new TypeError("Invalid revision number ".concat(revision, " (must be an integer)"));
  } // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()


  if ((0, _kolmafia.getRevision)() < revision) {
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires revision r").concat(revision, " of kolmafia or higher (current: ").concat((0, _kolmafia.getRevision)(), "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
  }
}
/**
 * If KoLmafia's version is less than `majorVersion.minorVersion`, throws an
 * exception.
 * Otherwise, does nothing.
 *
 * This behaves like the `since X.Y;` statement in ASH.
 * @param majorVersion Major version number
 * @param minorVersion Minor version number
 * @throws {KolmafiaVersionError}
 *    If KoLmafia's major version is less than `majorVersion`, or if the major
 *    versions are equal but the minor version is less than `minorVersion`
 * @throws {TypeError}
 *    If either `majorVersion` or `minorVersion` are not integers
 *
 * @example
 * ```ts
 * // Throws if KoLmafia version is less than 20.7
 * sinceKolmafiaVersion(20, 7);
 * ```
 */


function sinceKolmafiaVersion(majorVersion, minorVersion) {
  if (!Number.isInteger(majorVersion)) {
    throw new TypeError("Invalid major version number ".concat(majorVersion, " (must be an integer)"));
  }

  if (!Number.isInteger(minorVersion)) {
    throw new TypeError("Invalid minor version number ".concat(minorVersion, " (must be an integer)"));
  }

  var versionStr = (0, _kolmafia.getVersion)();
  var versionStrMatch = /v(\d+)\.(\d+)/.exec(versionStr);

  if (!versionStrMatch) {
    // This is not something the user should handle
    throw new Error("Unexpected KoLmafia version string: \"".concat(versionStr, "\". You may need to update the script."));
  }

  var currentMajorVersion = Number(versionStrMatch[1]);
  var currentMinorVersion = Number(versionStrMatch[2]); // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()

  if (currentMajorVersion < majorVersion || currentMajorVersion === majorVersion && currentMinorVersion < minorVersion) {
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires version ").concat(majorVersion, ".").concat(minorVersion, " of kolmafia or higher (current: ").concat(currentMajorVersion, ".").concat(currentMinorVersion, "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
  }
}

/***/ }),

/***/ 678:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.$thralls = exports.$thrall = exports.$stats = exports.$stat = exports.$slots = exports.$slot = exports.$skills = exports.$skill = exports.$servants = exports.$servant = exports.$phyla = exports.$phylum = exports.$monsters = exports.$monster = exports.$locations = exports.$location = exports.$items = exports.$item = exports.$familiars = exports.$familiar = exports.$elements = exports.$element = exports.$effects = exports.$effect = exports.$coinmasters = exports.$coinmaster = exports.$classes = exports.$class = exports.$bounties = exports.$bounty = void 0;

__webpack_require__(1646);

__webpack_require__(2322);

__webpack_require__(9268);

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

exports.$bounty = $bounty;
var $bounties = createPluralConstant(Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */

exports.$bounties = $bounties;
var $class = createSingleConstant(Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$class = $class;
var $classes = createPluralConstant(Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */

exports.$classes = $classes;
var $coinmaster = createSingleConstant(Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$coinmaster = $coinmaster;
var $coinmasters = createPluralConstant(Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */

exports.$coinmasters = $coinmasters;
var $effect = createSingleConstant(Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$effect = $effect;
var $effects = createPluralConstant(Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */

exports.$effects = $effects;
var $element = createSingleConstant(Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$element = $element;
var $elements = createPluralConstant(Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */

exports.$elements = $elements;
var $familiar = createSingleConstant(Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$familiar = $familiar;
var $familiars = createPluralConstant(Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */

exports.$familiars = $familiars;
var $item = createSingleConstant(Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$item = $item;
var $items = createPluralConstant(Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */

exports.$items = $items;
var $location = createSingleConstant(Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$location = $location;
var $locations = createPluralConstant(Location);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */

exports.$locations = $locations;
var $monster = createSingleConstant(Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$monster = $monster;
var $monsters = createPluralConstant(Monster);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */

exports.$monsters = $monsters;
var $phylum = createSingleConstant(Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$phylum = $phylum;
var $phyla = createPluralConstant(Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */

exports.$phyla = $phyla;
var $servant = createSingleConstant(Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$servant = $servant;
var $servants = createPluralConstant(Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */

exports.$servants = $servants;
var $skill = createSingleConstant(Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$skill = $skill;
var $skills = createPluralConstant(Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */

exports.$skills = $skills;
var $slot = createSingleConstant(Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$slot = $slot;
var $slots = createPluralConstant(Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */

exports.$slots = $slots;
var $stat = createSingleConstant(Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$stat = $stat;
var $stats = createPluralConstant(Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */

exports.$stats = $stats;
var $thrall = createSingleConstant(Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$thrall = $thrall;
var $thralls = createPluralConstant(Thrall);
exports.$thralls = $thralls;

/***/ }),

/***/ 8588:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2004);

__webpack_require__(8407);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.notNull = notNull;
exports.parseNumber = parseNumber;
exports.clamp = clamp;
exports.chunk = chunk;
exports.arrayToCountedMap = arrayToCountedMap;
exports.countedMapToArray = countedMapToArray;
exports.countedMapToString = countedMapToString;
exports.sum = sum;
exports.sumNumbers = sumNumbers;

__webpack_require__(6016);

__webpack_require__(2322);

__webpack_require__(3296);

__webpack_require__(288);

__webpack_require__(5677);

__webpack_require__(6394);

__webpack_require__(655);

__webpack_require__(6270);

__webpack_require__(1271);

__webpack_require__(2070);

__webpack_require__(1646);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

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


function chunk(array, chunkSize) {
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
  return _toConsumableArray(map).flatMap(_ref => {
    var _ref2 = _slicedToArray(_ref, 2),
        item = _ref2[0],
        quantity = _ref2[1];

    return Array(quantity).fill(item);
  });
}

function countedMapToString(map) {
  return _toConsumableArray(map).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
        item = _ref4[0],
        quantity = _ref4[1];

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
    hashDelete = __webpack_require__(9047),
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

/***/ 8835:
/***/ ((module) => {

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
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

module.exports = apply;

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

/***/ 8505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(5515),
    eq = __webpack_require__(7950);
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
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;

/***/ }),

/***/ 879:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(5515),
    eq = __webpack_require__(7950);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
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

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

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

/***/ 5515:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(1742);
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

module.exports = baseAssignValue;

/***/ }),

/***/ 346:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(71);
/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ 7079:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(7924);
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
module.exports = baseFor;

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

/***/ 173:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(71),
    isPrototype = __webpack_require__(2803),
    nativeKeysIn = __webpack_require__(5842);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
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

module.exports = baseKeysIn;

/***/ }),

/***/ 6681:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(959),
    assignMergeValue = __webpack_require__(8505),
    baseFor = __webpack_require__(7079),
    baseMergeDeep = __webpack_require__(3874),
    isObject = __webpack_require__(71),
    keysIn = __webpack_require__(1291),
    safeGet = __webpack_require__(1952);
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

  baseFor(source, function (srcValue, key) {
    stack || (stack = new Stack());

    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }

      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;

/***/ }),

/***/ 3874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(8505),
    cloneBuffer = __webpack_require__(8288),
    cloneTypedArray = __webpack_require__(1234),
    copyArray = __webpack_require__(9430),
    initCloneObject = __webpack_require__(3632),
    isArguments = __webpack_require__(9246),
    isArray = __webpack_require__(3670),
    isArrayLikeObject = __webpack_require__(3566),
    isBuffer = __webpack_require__(2343),
    isFunction = __webpack_require__(3626),
    isObject = __webpack_require__(71),
    isPlainObject = __webpack_require__(3902),
    isTypedArray = __webpack_require__(1589),
    safeGet = __webpack_require__(1952),
    toPlainObject = __webpack_require__(5151);
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

  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;

    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;

      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
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

module.exports = baseMergeDeep;

/***/ }),

/***/ 9541:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(1559),
    overRest = __webpack_require__(3549),
    setToString = __webpack_require__(5121);
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

module.exports = baseRest;

/***/ }),

/***/ 4233:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(7622),
    defineProperty = __webpack_require__(1742),
    identity = __webpack_require__(1559);
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
module.exports = baseSetToString;

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

/***/ 4899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(2496);
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

module.exports = cloneArrayBuffer;

/***/ }),

/***/ 8288:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(4362);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
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

module.exports = cloneBuffer;

/***/ }),

/***/ 1234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(4899);
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

module.exports = cloneTypedArray;

/***/ }),

/***/ 9430:
/***/ ((module) => {

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

module.exports = copyArray;

/***/ }),

/***/ 7841:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(879),
    baseAssignValue = __webpack_require__(5515);
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
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

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

module.exports = copyObject;

/***/ }),

/***/ 1741:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(4362);
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ 661:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(9541),
    isIterateeCall = __webpack_require__(2985);
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */


function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

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

module.exports = createAssigner;

/***/ }),

/***/ 7924:
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
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

module.exports = createBaseFor;

/***/ }),

/***/ 1742:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203);

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

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

/***/ 2107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5290);
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

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

/***/ 9047:
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

/***/ 3632:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(346),
    getPrototype = __webpack_require__(2107),
    isPrototype = __webpack_require__(2803);
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

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

/***/ 2985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(7950),
    isArrayLike = __webpack_require__(6175),
    isIndex = __webpack_require__(4782),
    isObject = __webpack_require__(71);
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

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}

module.exports = isIterateeCall;

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

/***/ 5842:
/***/ ((module) => {

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

module.exports = nativeKeysIn;

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

/***/ 3549:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(8835);
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeMax = Math.max;
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
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
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

module.exports = overRest;

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

/***/ 1952:
/***/ ((module) => {

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

module.exports = safeGet;

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

/***/ 5121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(4233),
    shortOut = __webpack_require__(2369);
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var setToString = shortOut(baseSetToString);
module.exports = setToString;

/***/ }),

/***/ 2369:
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
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
  return function () {
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

module.exports = shortOut;

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

/***/ 7622:
/***/ ((module) => {

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
  return function () {
    return value;
  };
}

module.exports = constant;

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

/***/ 3566:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(6175),
    isObjectLike = __webpack_require__(4939);
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

module.exports = isArrayLikeObject;

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

/***/ 3902:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    getPrototype = __webpack_require__(2107),
    isObjectLike = __webpack_require__(4939);
/** `Object#toString` result references. */


var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
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
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

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

/***/ 1291:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(8083),
    baseKeysIn = __webpack_require__(173),
    isArrayLike = __webpack_require__(6175);
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

module.exports = keysIn;

/***/ }),

/***/ 4299:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(6681),
    createAssigner = __webpack_require__(661);
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


var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
module.exports = merge;

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

/***/ 5151:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(7841),
    keysIn = __webpack_require__(1291);
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

module.exports = toPlainObject;

/***/ }),

/***/ 2817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "kolmafia"
var external_kolmafia_ = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/libram/dist/index.js
var dist = __webpack_require__(9803);
;// CONCATENATED MODULE: ./src/outfits.ts
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199, _templateObject200, _templateObject201, _templateObject202, _templateObject203, _templateObject204, _templateObject205, _templateObject206, _templateObject207, _templateObject208, _templateObject209, _templateObject210, _templateObject211, _templateObject212, _templateObject213, _templateObject214, _templateObject215, _templateObject216, _templateObject217, _templateObject218, _templateObject219, _templateObject220, _templateObject221, _templateObject222, _templateObject223, _templateObject224, _templateObject225;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Outfit = /*#__PURE__*/function () {
  /**
   * Construct an outfit object, for rapid equipping
   * @param equips Map of what to equip and where
   * @param familiar Optional familiar to use with outfit
   */
  function Outfit(equips, familiar) {
    _classCallCheck(this, Outfit);

    _defineProperty(this, "equips", void 0);

    _defineProperty(this, "familiar", void 0);

    this.equips = equips;
    this.familiar = familiar;
  }

  _createClass(Outfit, [{
    key: "dress",
    value: function dress() {
      if (this.familiar) (0,external_kolmafia_.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values());

      var _iterator = _createForOfIteratorHelper(Slot.all()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var slot = _step.value;
          if (targetEquipment.includes((0,external_kolmafia_.equippedItem)(slot)) && this.equips.get(slot) !== (0,external_kolmafia_.equippedItem)(slot)) (0,external_kolmafia_.equip)(slot, (0,dist.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["none"]))));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper((0,dist.$slots)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["weapon, off-hand, hat, back, shirt, pants, acc1, acc2, acc3, familiar, buddy-bjorn, crown-of-thrones"])))),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _slot = _step2.value;
          var equipment = this.equips.get(_slot);
          if (equipment) (0,external_kolmafia_.equip)(_slot, equipment);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
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

      var _iterator3 = _createForOfIteratorHelper(equips.entries()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
              slot = _step3$value[0],
              itemOrItems = _step3$value[1];

          var item = Array.isArray(itemOrItems) ? itemOrItems.find(item => (0,dist.have)(item)) : itemOrItems;
          if (item) returnValue.set(slot, item);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
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
      var familiar = withFamiliar ? (0,external_kolmafia_.myFamiliar)() : undefined;
      var slots = (0,dist.$slots)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["hat, shirt, back, weapon, off-hand, pants, acc1, acc2, acc3"])));
      if (withFamiliar) slots.push((0,dist.$slot)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["familiar"]))));
      var outfitMap = new Map();

      var _iterator4 = _createForOfIteratorHelper(slots),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var slot = _step4.value;
          var item = (0,external_kolmafia_.equippedItem)(slot);
          if (item !== (0,dist.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["none"])))) outfitMap.set(slot, item);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
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
  Outfit.doYourBest(new Map([[(0,dist.$slot)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Iunion Crown"])))], [(0,dist.$slot)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["shirt"]))), (0,dist.$item)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["fresh coat of paint"])))], [(0,dist.$slot)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["pants"]))), (0,dist.$items)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["pantogram pants, old sweatpants"])))], [(0,dist.$slot)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["familiar scrapbook"])))], [(0,dist.$slot)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["your cowboy boots"])))], [(0,dist.$slot)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["codpiece"])))], [(0,dist.$slot)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["acc3"]))), (0,dist.$items)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["battle broom, Powerful Glove"])))], [(0,dist.$slot)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["back"]))), (0,dist.$items)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["LOV Epaulettes, vampyric cloake"])))]])).dress();
}
function wireOutfit() {
  new Outfit(new Map([[(0,dist.$slot)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Iunion Crown"])))], [(0,dist.$slot)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["shirt"]))), (0,dist.$item)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["fresh coat of paint"])))], [(0,dist.$slot)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [(0,dist.$slot)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["familiar scrapbook"])))], [(0,dist.$slot)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["Eight Days a Week Pill Keeper"])))], [(0,dist.$slot)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["Powerful Glove"])))], [(0,dist.$slot)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["Guzzlr tablet"])))]])).dress();
}
function moxieOutfit() {
  (0,external_kolmafia_.cliExecute)("retrocape robot");
  Outfit.doYourBest(new Map([[(0,dist.$slot)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["very pointy crown"])))], [(0,dist.$slot)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["shirt"]))), (0,dist.$items)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["shoe ad T-shirt, fresh coat of paint"])))], [(0,dist.$slot)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [(0,dist.$slot)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [(0,dist.$slot)(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["Beach Comb"])))], [(0,dist.$slot)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\"I Voted!\" sticker"])))], [(0,dist.$slot)(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["Retrospecs"])))], [(0,dist.$slot)(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["miniature crystal ball"])))]])).dress();
}
function hpOutfit() {
  (0,external_kolmafia_.cliExecute)("retrocape vampire");
  if (!(0,dist.have)((0,dist.$item)(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["wad of used tape"]))))) (0,external_kolmafia_.cliExecute)("fold wad of used tape");
  Outfit.doYourBest(new Map([[(0,dist.$slot)(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["wad of used tape"])))], [(0,dist.$slot)(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["dented scepter"])))], [(0,dist.$slot)(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["shirt"]))), (0,dist.$items)(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["shoe ad T-shirt, fresh coat of paint"])))], [(0,dist.$slot)(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [(0,dist.$slot)(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [(0,dist.$slot)(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["Retrospecs"])))], [(0,dist.$slot)(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [(0,dist.$slot)(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["miniature crystal ball"])))]])).dress();
}
function muscleOutfit() {
  (0,external_kolmafia_.cliExecute)("retrocape vampire");
  if (!(0,dist.have)((0,dist.$item)(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["wad of used tape"]))))) (0,external_kolmafia_.cliExecute)("fold wad of used tape");
  Outfit.doYourBest(new Map([[(0,dist.$slot)(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["wad of used tape"])))], [(0,dist.$slot)(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["dented scepter"])))], [(0,dist.$slot)(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["off-hand"]))), (0,dist.have)((0,dist.$familiar)(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["Disembodied Hand"])))) ? (0,dist.$items)(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["cosmetic football"]))) : (0,dist.$item)(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["shirt"]))), (0,dist.$items)(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["shoe ad T-shirt, fresh coat of paint"])))], [(0,dist.$slot)(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [(0,dist.$slot)(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [(0,dist.$slot)(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["Retrospecs"])))], [(0,dist.$slot)(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [(0,dist.$slot)(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["familiar"]))), (0,dist.have)((0,dist.$familiar)(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["Disembodied Hand"])))) ? (0,dist.$item)(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))) : (0,dist.$item)(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["miniature crystal ball"])))]]), (0,dist.have)((0,dist.$familiar)(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["Disembodied Hand"])))) ? (0,dist.$familiar)(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["Disembodied Hand"]))) : undefined).dress();
}
function mysticalityOutfit() {
  (0,external_kolmafia_.cliExecute)("retrocape heck");
  Outfit.doYourBest(new Map([[(0,dist.$slot)(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral(["wad of used tape"])))], [(0,dist.$slot)(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral(["astral statuette"])))], [(0,dist.$slot)(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [(0,dist.$slot)(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral(["shirt"]))), (0,dist.$items)(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral(["denim jacket, shoe ad T-shirt, fresh coat of paint"])))], [(0,dist.$slot)(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral(["pantogram pants"])))], [(0,dist.$slot)(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral(["your cowboy boots"])))], [(0,dist.$slot)(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral(["codpiece"])))], [(0,dist.$slot)(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral(["battle broom"])))], [(0,dist.$slot)(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral(["Abracandalabra"])))]]), (0,dist.$familiar)(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral(["Left-Hand Man"])))).dress();
}
function itemOutfit() {
  if (!(0,dist.have)((0,dist.$item)(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral(["wad of used tape"]))))) (0,external_kolmafia_.cliExecute)("fold wad of used tape");
  Outfit.doYourBest(new Map([[(0,dist.$slot)(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral(["wad of used tape"])))], [(0,dist.$slot)(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))], [(0,dist.$slot)(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral(["protonic accelerator pack"])))], [(0,dist.$slot)(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral(["Guzzlr tablet"])))], [(0,dist.$slot)(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral(["gold detective badge"])))], [(0,dist.$slot)(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral(["acc3"]))), (0,dist.$items)(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral(["government-issued night-vision goggles"])))], [(0,dist.$slot)(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral(["li'l ninja costume"])))]]), (0,dist.$familiar)(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral(["Trick-or-Treating Tot"])))).dress();
}
function hotresOutfit() {
  (0,external_kolmafia_.cliExecute)("retrocape vampire hold");
  Outfit.doYourBest(new Map([[(0,dist.$slot)(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [(0,dist.$slot)(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral(["meteorite guard"])))], [(0,dist.$slot)(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral(["pantogram pants"])))], [(0,dist.$slot)(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral(["your cowboy boots"])))], [(0,dist.$slot)(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral(["Beach Comb"])))], [(0,dist.$slot)(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral(["familiar"]))), (0,dist.$items)(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral(["cracker"])))]]), (0,dist.$familiar)(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral(["Exotic Parrot"])))).dress();
}
function noncombatOutfit() {
  Outfit.doYourBest(new Map([[(0,dist.$slot)(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral(["very pointy crown"])))], [(0,dist.$slot)(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral(["protonic accelerator pack"])))], [(0,dist.$slot)(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral(["off-hand"]))), (0,dist.$items)(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral(["burning paper crane, familiar scrapbook"])))], [(0,dist.$slot)(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [(0,dist.$slot)(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral(["codpiece"])))], [(0,dist.$slot)(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral(["Brutal brogues"])))]]), (0,dist.$familiar)(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral(["Disgeist"])))).dress();
}
function famweightOutfit() {
  var familiarAndEquip = (0,dist.have)((0,dist.$item)(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral(["cracker"])))) ? {
    fam: (0,dist.$familiar)(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral(["Exotic Parrot"]))),
    equip: (0,dist.$item)(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral(["cracker"])))
  } : (0,dist.have)((0,dist.$familiar)(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral(["Baby Bugged Bugbear"])))) ? {
    fam: (0,dist.$familiar)(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral(["Baby Bugged Bugbear"]))),
    equip: (0,dist.$item)(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral(["bugged beanie"])))
  } : {
    fam: (0,dist.$familiar)(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral(["Blood-Faced Volleyball"]))),
    equip: (0,dist.have)((0,dist.$item)(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral(["astral pet sweater"])))) ? (0,dist.$item)(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral(["astral pet sweater"]))) : (0,dist.$item)(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral(["none"])))
  };
  Outfit.doYourBest(new Map([[(0,dist.$slot)(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral(["off-hand"]))), (0,dist.$items)(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral(["burning paper crane, familiar scrapbook"])))], [(0,dist.$slot)(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject190 || (_templateObject190 = _taggedTemplateLiteral(["Beach Comb"])))], [(0,dist.$slot)(_templateObject191 || (_templateObject191 = _taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral(["hewn moon-rune spoon"])))], [(0,dist.$slot)(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral(["familiar"]))), familiarAndEquip.equip]]), familiarAndEquip.fam).dress();
}
function weaponOutfit() {
  if (!(0,dist.have)((0,dist.$item)(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral(["broken champagne bottle"]))))) (0,external_kolmafia_.cliExecute)("fold broken champagne bottle");
  Outfit.doYourBest(new Map([[(0,dist.$slot)(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral(["hat"]))), (0,dist.$items)(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral(["seal-skull helmet"])))], [(0,dist.$slot)(_templateObject199 || (_templateObject199 = _taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject200 || (_templateObject200 = _taggedTemplateLiteral(["broken champagne bottle"])))], [(0,dist.$slot)(_templateObject201 || (_templateObject201 = _taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral(["dented scepter"])))], [(0,dist.$slot)(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject206 || (_templateObject206 = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [(0,dist.$slot)(_templateObject207 || (_templateObject207 = _taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject208 || (_templateObject208 = _taggedTemplateLiteral(["Powerful Glove"])))]])).dress();
}
function spellOutfit() {
  Outfit.doYourBest(new Map([[(0,dist.$slot)(_templateObject209 || (_templateObject209 = _taggedTemplateLiteral(["hat"]))), (0,dist.$items)(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral(["sugar chapeau, Hollandaise helmet"])))], [(0,dist.$slot)(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral(["weeping willow wand"])))], [(0,dist.$slot)(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral(["Abracandalabra"])))], [(0,dist.$slot)(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral(["astral statuette"])))], [(0,dist.$slot)(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral(["pantogram pants"])))], [(0,dist.$slot)(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [(0,dist.$slot)(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral(["codpiece"])))], [(0,dist.$slot)(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral(["battle broom"])))]]), (0,dist.$familiar)(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral(["Left-Hand Man"])))).dress();
}
;// CONCATENATED MODULE: ./src/phccs-macros.ts

var delevel = dist.Macro.skill("curse of weaksauce").skill("micrometeor").tryItem("time-spinner").skill("summon love gnats");
var candyblast = dist.Macro.while_('!match "Hey, some of it is even intact afterwards!"', dist.Macro.skill("candyblast"));
var easyFight = dist.Macro.skill("extract").skill("sing along");
var defaultKill = dist.Macro.step(delevel).step(easyFight).attack().repeat();
;// CONCATENATED MODULE: ./src/phredhccs-lib.ts
var phredhccs_lib_templateObject, phredhccs_lib_templateObject2, phredhccs_lib_templateObject3, phredhccs_lib_templateObject4, phredhccs_lib_templateObject5, phredhccs_lib_templateObject6, phredhccs_lib_templateObject7, phredhccs_lib_templateObject8, phredhccs_lib_templateObject9, phredhccs_lib_templateObject10, phredhccs_lib_templateObject11, phredhccs_lib_templateObject12, phredhccs_lib_templateObject13, phredhccs_lib_templateObject14, phredhccs_lib_templateObject15, phredhccs_lib_templateObject16, phredhccs_lib_templateObject17, phredhccs_lib_templateObject18, phredhccs_lib_templateObject19, phredhccs_lib_templateObject20, phredhccs_lib_templateObject21, phredhccs_lib_templateObject22, phredhccs_lib_templateObject23, phredhccs_lib_templateObject24, phredhccs_lib_templateObject25, phredhccs_lib_templateObject26, phredhccs_lib_templateObject27, phredhccs_lib_templateObject28, phredhccs_lib_templateObject29, phredhccs_lib_templateObject30, phredhccs_lib_templateObject31, phredhccs_lib_templateObject32, phredhccs_lib_templateObject33, phredhccs_lib_templateObject34, phredhccs_lib_templateObject35, phredhccs_lib_templateObject36, phredhccs_lib_templateObject37, phredhccs_lib_templateObject38, phredhccs_lib_templateObject39, phredhccs_lib_templateObject40, phredhccs_lib_templateObject41, phredhccs_lib_templateObject42, phredhccs_lib_templateObject43, phredhccs_lib_templateObject44, phredhccs_lib_templateObject45, phredhccs_lib_templateObject46, phredhccs_lib_templateObject47, phredhccs_lib_templateObject48, phredhccs_lib_templateObject49, phredhccs_lib_templateObject50, phredhccs_lib_templateObject51, phredhccs_lib_templateObject52, phredhccs_lib_templateObject53, phredhccs_lib_templateObject54, phredhccs_lib_templateObject55, phredhccs_lib_templateObject56, phredhccs_lib_templateObject57, phredhccs_lib_templateObject58, phredhccs_lib_templateObject59, phredhccs_lib_templateObject60, phredhccs_lib_templateObject61, phredhccs_lib_templateObject62, phredhccs_lib_templateObject63, phredhccs_lib_templateObject64, phredhccs_lib_templateObject65, phredhccs_lib_templateObject66, phredhccs_lib_templateObject67, phredhccs_lib_templateObject68, phredhccs_lib_templateObject69, phredhccs_lib_templateObject70, phredhccs_lib_templateObject71, phredhccs_lib_templateObject72, phredhccs_lib_templateObject73, phredhccs_lib_templateObject74, phredhccs_lib_templateObject75, phredhccs_lib_templateObject76, phredhccs_lib_templateObject77, phredhccs_lib_templateObject78, phredhccs_lib_templateObject79, phredhccs_lib_templateObject80, phredhccs_lib_templateObject81, phredhccs_lib_templateObject82, phredhccs_lib_templateObject83, phredhccs_lib_templateObject84, phredhccs_lib_templateObject85, phredhccs_lib_templateObject86, phredhccs_lib_templateObject87, phredhccs_lib_templateObject88, phredhccs_lib_templateObject89, phredhccs_lib_templateObject90, phredhccs_lib_templateObject91, phredhccs_lib_templateObject92, phredhccs_lib_templateObject93, phredhccs_lib_templateObject94, phredhccs_lib_templateObject95, phredhccs_lib_templateObject96, phredhccs_lib_templateObject97;

function phredhccs_lib_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function phredhccs_lib_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var PropertyManager = new dist.PropertiesManager();
function fuelUp() {
  (0,external_kolmafia_.buy)(1, (0,dist.$item)(phredhccs_lib_templateObject || (phredhccs_lib_templateObject = phredhccs_lib_taggedTemplateLiteral(["all-purpose flower"]))));
  (0,external_kolmafia_.use)(1, (0,dist.$item)(phredhccs_lib_templateObject2 || (phredhccs_lib_templateObject2 = phredhccs_lib_taggedTemplateLiteral(["all-purpose flower"]))));
  (0,external_kolmafia_.buy)((0,external_kolmafia_.availableAmount)((0,dist.$item)(phredhccs_lib_templateObject3 || (phredhccs_lib_templateObject3 = phredhccs_lib_taggedTemplateLiteral(["wad of dough"])))), (0,dist.$item)(phredhccs_lib_templateObject4 || (phredhccs_lib_templateObject4 = phredhccs_lib_taggedTemplateLiteral(["soda water"]))));
  (0,external_kolmafia_.create)((0,external_kolmafia_.availableAmount)((0,dist.$item)(phredhccs_lib_templateObject5 || (phredhccs_lib_templateObject5 = phredhccs_lib_taggedTemplateLiteral(["wad of dough"])))), (0,dist.$item)(phredhccs_lib_templateObject6 || (phredhccs_lib_templateObject6 = phredhccs_lib_taggedTemplateLiteral(["loaf of soda bread"]))));
  (0,external_kolmafia_.cliExecute)("asdonmartin fuel ".concat((0,external_kolmafia_.availableAmount)((0,dist.$item)(phredhccs_lib_templateObject7 || (phredhccs_lib_templateObject7 = phredhccs_lib_taggedTemplateLiteral(["loaf of soda bread"])))), " soda bread"));
}
function synthExp() {
  if ((0,dist.get)("harvestGardenHardcore") === "none") {
    (0,external_kolmafia_.visitUrl)("campground.php?action=garden");
  }

  if (!(0,dist.get)("_candySummons")) {
    (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(phredhccs_lib_templateObject8 || (phredhccs_lib_templateObject8 = phredhccs_lib_taggedTemplateLiteral(["Summon Crimbo Candy"]))));
  }

  var fudge = (0,dist.$item)(phredhccs_lib_templateObject9 || (phredhccs_lib_templateObject9 = phredhccs_lib_taggedTemplateLiteral(["Crimbo fudge"])));
  var pecan = (0,dist.$item)(phredhccs_lib_templateObject10 || (phredhccs_lib_templateObject10 = phredhccs_lib_taggedTemplateLiteral(["Crimbo candied pecan"])));
  var bark = (0,dist.$item)(phredhccs_lib_templateObject11 || (phredhccs_lib_templateObject11 = phredhccs_lib_taggedTemplateLiteral(["Crimbo peppermint bark"])));
  var fudges = (0,external_kolmafia_.availableAmount)(fudge);
  var pecans = (0,external_kolmafia_.availableAmount)(pecan);
  var barks = (0,external_kolmafia_.availableAmount)(bark);

  if (fudges >= 2) {
    (0,external_kolmafia_.sweetSynthesis)(fudge, fudge);
  } else if (barks >= 1) {
    if (pecans >= 1) {
      (0,external_kolmafia_.sweetSynthesis)(pecan, bark);
    } else {
      (0,external_kolmafia_.sweetSynthesis)(bark, (0,dist.$item)(phredhccs_lib_templateObject12 || (phredhccs_lib_templateObject12 = phredhccs_lib_taggedTemplateLiteral(["peppermint sprout"]))));
    }
  } else {
    if (!(0,dist.have)((0,dist.$item)(phredhccs_lib_templateObject13 || (phredhccs_lib_templateObject13 = phredhccs_lib_taggedTemplateLiteral(["sugar shotgun"]))))) {
      if (!(0,dist.have)((0,dist.$item)(phredhccs_lib_templateObject14 || (phredhccs_lib_templateObject14 = phredhccs_lib_taggedTemplateLiteral(["sugar sheet"]))))) (0,external_kolmafia_.useSkill)((0,dist.$skill)(phredhccs_lib_templateObject15 || (phredhccs_lib_templateObject15 = phredhccs_lib_taggedTemplateLiteral(["Summon Sugar Sheets"]))));
      (0,external_kolmafia_.create)(1, (0,dist.$item)(phredhccs_lib_templateObject16 || (phredhccs_lib_templateObject16 = phredhccs_lib_taggedTemplateLiteral(["sugar shotgun"]))));
    }

    if (pecans >= 1) {
      (0,external_kolmafia_.sweetSynthesis)(pecan, (0,dist.$item)(phredhccs_lib_templateObject17 || (phredhccs_lib_templateObject17 = phredhccs_lib_taggedTemplateLiteral(["sugar shotgun"]))));
    } else {
      (0,external_kolmafia_.sweetSynthesis)((0,dist.$item)(phredhccs_lib_templateObject18 || (phredhccs_lib_templateObject18 = phredhccs_lib_taggedTemplateLiteral(["sugar shotgun"]))), (0,dist.$item)(phredhccs_lib_templateObject19 || (phredhccs_lib_templateObject19 = phredhccs_lib_taggedTemplateLiteral(["peppermint sprout"]))));
    }
  }

  if (!(0,dist.have)((0,dist.$effect)(phredhccs_lib_templateObject20 || (phredhccs_lib_templateObject20 = phredhccs_lib_taggedTemplateLiteral(["Synthesis: Learning"]))))) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize learning. Pwease fix me :c.";
  }
}
function synthItem() {
  if ((0,dist.get)("harvestGardenHardcore") === "none") {
    (0,external_kolmafia_.visitUrl)("campground.php?action=garden");
  }

  if (!(0,dist.get)("_candySummons")) {
    (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(phredhccs_lib_templateObject21 || (phredhccs_lib_templateObject21 = phredhccs_lib_taggedTemplateLiteral(["Summon Crimbo Candy"]))));
  } //const fudge = $item`Crimbo fudge`;


  var pecan = (0,dist.$item)(phredhccs_lib_templateObject22 || (phredhccs_lib_templateObject22 = phredhccs_lib_taggedTemplateLiteral(["Crimbo candied pecan"])));
  var bark = (0,dist.$item)(phredhccs_lib_templateObject23 || (phredhccs_lib_templateObject23 = phredhccs_lib_taggedTemplateLiteral(["Crimbo peppermint bark"]))); //const fudges = availableAmount(fudge);

  var pecans = (0,external_kolmafia_.availableAmount)(pecan);
  var barks = (0,external_kolmafia_.availableAmount)(bark);

  if (barks >= 2) {
    (0,external_kolmafia_.sweetSynthesis)(bark, bark);
  } else {
    if (!(0,dist.have)((0,dist.$item)(phredhccs_lib_templateObject24 || (phredhccs_lib_templateObject24 = phredhccs_lib_taggedTemplateLiteral(["peppermint twist"]))))) {
      (0,external_kolmafia_.create)(1, (0,dist.$item)(phredhccs_lib_templateObject25 || (phredhccs_lib_templateObject25 = phredhccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
    }

    if (pecans >= 1) {
      (0,external_kolmafia_.sweetSynthesis)(pecan, (0,dist.$item)(phredhccs_lib_templateObject26 || (phredhccs_lib_templateObject26 = phredhccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
    } else {
      (0,external_kolmafia_.sweetSynthesis)((0,dist.$item)(phredhccs_lib_templateObject27 || (phredhccs_lib_templateObject27 = phredhccs_lib_taggedTemplateLiteral(["peppermint sprout"]))), (0,dist.$item)(phredhccs_lib_templateObject28 || (phredhccs_lib_templateObject28 = phredhccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
    }
  }

  if (!(0,dist.have)((0,dist.$effect)(phredhccs_lib_templateObject29 || (phredhccs_lib_templateObject29 = phredhccs_lib_taggedTemplateLiteral(["Synthesis: Collection"]))))) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize collection. Pwease fix me :c.";
  }
}
function synthMyst() {
  if ((0,dist.get)("harvestGardenHardcore") === "none") {
    (0,external_kolmafia_.visitUrl)("campground.php?action=garden");
  }

  if (!(0,dist.get)("_candySummons")) {
    (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(phredhccs_lib_templateObject30 || (phredhccs_lib_templateObject30 = phredhccs_lib_taggedTemplateLiteral(["Summon Crimbo Candy"]))));
  } //const fudge = $item`Crimbo fudge`;
  //const pecan = $item`Crimbo candied pecan`;
  //const bark = $item`Crimbo peppermint bark`;
  //const fudges = availableAmount(fudge);
  //const pecans = availableAmount(pecan);
  //const barks = availableAmount(bark);


  if ((0,dist.have)((0,dist.$item)(phredhccs_lib_templateObject31 || (phredhccs_lib_templateObject31 = phredhccs_lib_taggedTemplateLiteral(["bag of many confections"]))))) {
    if (!(0,dist.get)("_chubbyAndPlumpUsed")) {
      (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(phredhccs_lib_templateObject32 || (phredhccs_lib_templateObject32 = phredhccs_lib_taggedTemplateLiteral(["Chubby and Plump"]))));
    }

    (0,external_kolmafia_.sweetSynthesis)((0,dist.$item)(phredhccs_lib_templateObject33 || (phredhccs_lib_templateObject33 = phredhccs_lib_taggedTemplateLiteral(["Chubby and Plump bar"]))), (0,dist.$item)(phredhccs_lib_templateObject34 || (phredhccs_lib_templateObject34 = phredhccs_lib_taggedTemplateLiteral(["bag of many confections"]))));
  } else {
    var mint = (0,dist.$item)(phredhccs_lib_templateObject35 || (phredhccs_lib_templateObject35 = phredhccs_lib_taggedTemplateLiteral(["Senior Mints"])));
    var mints = (0,external_kolmafia_.availableAmount)(mint);
    var orangeHeart = (0,dist.$item)(phredhccs_lib_templateObject36 || (phredhccs_lib_templateObject36 = phredhccs_lib_taggedTemplateLiteral(["orange candy heart"])));

    var orangeHearts = () => (0,external_kolmafia_.availableAmount)(orangeHeart);

    var pinkHeart = (0,dist.$item)(phredhccs_lib_templateObject37 || (phredhccs_lib_templateObject37 = phredhccs_lib_taggedTemplateLiteral(["pink candy heart"])));

    var pinkHearts = () => (0,external_kolmafia_.availableAmount)((0,dist.$item)(phredhccs_lib_templateObject38 || (phredhccs_lib_templateObject38 = phredhccs_lib_taggedTemplateLiteral(["pink candy heart"]))));

    var n = 0;

    while (mints + orangeHearts() + pinkHearts() === 0 && n < 11) {
      (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(phredhccs_lib_templateObject39 || (phredhccs_lib_templateObject39 = phredhccs_lib_taggedTemplateLiteral(["Summon Candy Heart"]))));
      n++;
    }

    if (mints + orangeHearts() + pinkHearts() === 0) {
      throw "Failed to summon hearts in a timely manner";
    }

    if (mints >= 1) {
      (0,external_kolmafia_.sweetSynthesis)(mint, (0,dist.$item)(phredhccs_lib_templateObject40 || (phredhccs_lib_templateObject40 = phredhccs_lib_taggedTemplateLiteral(["peppermint sprout"]))));
    } else if (orangeHearts() >= 1) {
      (0,external_kolmafia_.sweetSynthesis)(orangeHeart, (0,dist.$item)(phredhccs_lib_templateObject41 || (phredhccs_lib_templateObject41 = phredhccs_lib_taggedTemplateLiteral(["peppermint sprout"]))));
    } else if (pinkHearts() >= 1) {
      if (!(0,dist.have)((0,dist.$item)(phredhccs_lib_templateObject42 || (phredhccs_lib_templateObject42 = phredhccs_lib_taggedTemplateLiteral(["peppermint twist"]))))) {
        (0,external_kolmafia_.create)(1, (0,dist.$item)(phredhccs_lib_templateObject43 || (phredhccs_lib_templateObject43 = phredhccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
      }

      (0,external_kolmafia_.sweetSynthesis)(pinkHeart, (0,dist.$item)(phredhccs_lib_templateObject44 || (phredhccs_lib_templateObject44 = phredhccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
    }
  }

  if ((0,external_kolmafia_.haveEffect)((0,dist.$effect)(phredhccs_lib_templateObject45 || (phredhccs_lib_templateObject45 = phredhccs_lib_taggedTemplateLiteral(["Synthesis: Smart"])))) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize smart. Pwease fix me :c.";
  }
}
function kramcoCheck() {
  var kramcoNumber = 5 + 3 * (0,dist.get)("_sausageFights") + Math.pow(Math.max(0, (0,dist.get)("_sausageFights") - 5), 3);
  return (0,external_kolmafia_.totalTurnsPlayed)() - (0,dist.get)("_lastSausageMonsterTurn") + 1 >= kramcoNumber;
}
function useDefaultFamiliar() {
  var canAttack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (!(0,dist.get)("_bagOfCandy") && canAttack) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(phredhccs_lib_templateObject46 || (phredhccs_lib_templateObject46 = phredhccs_lib_taggedTemplateLiteral(["Stocking Mimic"]))));
  } else if ((0,dist.get)("camelSpit") !== 100) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(phredhccs_lib_templateObject47 || (phredhccs_lib_templateObject47 = phredhccs_lib_taggedTemplateLiteral(["Melodramedary"]))));
    (0,external_kolmafia_.equip)((0,dist.$slot)(phredhccs_lib_templateObject48 || (phredhccs_lib_templateObject48 = phredhccs_lib_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(phredhccs_lib_templateObject49 || (phredhccs_lib_templateObject49 = phredhccs_lib_taggedTemplateLiteral(["dromedary drinking helmet"]))));
  } else if (canAttack && !(0,dist.have)((0,dist.$item)(phredhccs_lib_templateObject50 || (phredhccs_lib_templateObject50 = phredhccs_lib_taggedTemplateLiteral(["short stack of pancakes"])))) && !(0,dist.have)((0,dist.$effect)(phredhccs_lib_templateObject51 || (phredhccs_lib_templateObject51 = phredhccs_lib_taggedTemplateLiteral(["Shortly Stacked"])))) && !(0,dist.get)("csServicesPerformed").split(",").includes("Breed More Collies")) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(phredhccs_lib_templateObject52 || (phredhccs_lib_templateObject52 = phredhccs_lib_taggedTemplateLiteral(["Shorter-Order Cook"]))));
  } else if (!(0,dist.have)((0,dist.$item)(phredhccs_lib_templateObject53 || (phredhccs_lib_templateObject53 = phredhccs_lib_taggedTemplateLiteral(["burning newspaper"])))) && !(0,dist.have)((0,dist.$item)(phredhccs_lib_templateObject54 || (phredhccs_lib_templateObject54 = phredhccs_lib_taggedTemplateLiteral(["burning paper crane"]))))) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(phredhccs_lib_templateObject55 || (phredhccs_lib_templateObject55 = phredhccs_lib_taggedTemplateLiteral(["Garbage Fire"]))));
  } else {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(phredhccs_lib_templateObject56 || (phredhccs_lib_templateObject56 = phredhccs_lib_taggedTemplateLiteral(["Puck Man"]))));
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
  (0,external_kolmafia_.print)("Checking test ".concat(testNum, "..."));
  var text = (0,external_kolmafia_.visitUrl)("council.php");
  return !(0,external_kolmafia_.containsText)(text, "<input type=hidden name=option value=".concat(testNum, ">"));
}
function doTest(testNum) {
  //stolen directly from bean
  if (!testDone(testNum)) {
    (0,external_kolmafia_.visitUrl)("choice.php?whichchoice=1089&option=".concat(testNum));

    if (!testDone(testNum)) {
      throw 'Failed to do test " + testNum + ". Maybe we are out of turns.';
    }
  } else {
    (0,external_kolmafia_.print)("Test ".concat(testNum, " already completed."));
  }
}
function ensureInnerElf() {
  //stolen merely mostly from bean
  if (!(0,dist.have)((0,dist.$effect)(phredhccs_lib_templateObject57 || (phredhccs_lib_templateObject57 = phredhccs_lib_taggedTemplateLiteral(["Inner Elf"]))))) {
    setClan((0,dist.get)("phccs_elfClan", "Hobopolis Vacation Home"));

    try {
      withOutfit(new Outfit(new Map([[(0,dist.$slot)(phredhccs_lib_templateObject58 || (phredhccs_lib_templateObject58 = phredhccs_lib_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(phredhccs_lib_templateObject59 || (phredhccs_lib_templateObject59 = phredhccs_lib_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))]]), (0,dist.$familiar)(phredhccs_lib_templateObject60 || (phredhccs_lib_templateObject60 = phredhccs_lib_taggedTemplateLiteral(["Machine Elf"])))), () => {
        ensureEffect((0,dist.$effect)(phredhccs_lib_templateObject61 || (phredhccs_lib_templateObject61 = phredhccs_lib_taggedTemplateLiteral(["Blood Bubble"]))));
        advMacro((0,dist.$location)(phredhccs_lib_templateObject62 || (phredhccs_lib_templateObject62 = phredhccs_lib_taggedTemplateLiteral(["The Slime Tube"]))), dist.Macro.trySkill((0,dist.$skill)(phredhccs_lib_templateObject63 || (phredhccs_lib_templateObject63 = phredhccs_lib_taggedTemplateLiteral(["KGB tranquilizer dart"])))).trySkill((0,dist.$skill)(phredhccs_lib_templateObject64 || (phredhccs_lib_templateObject64 = phredhccs_lib_taggedTemplateLiteral(["Snokebomb"])))));
      });
    } finally {
      setClan((0,dist.get)("phccs_mainClan", "Alliance From Heck"));
    }
  }
}
function fightSausageIfAble(location, macro) {
  if (kramcoCheck()) {
    (0,external_kolmafia_.equip)((0,dist.$slot)(phredhccs_lib_templateObject65 || (phredhccs_lib_templateObject65 = phredhccs_lib_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(phredhccs_lib_templateObject66 || (phredhccs_lib_templateObject66 = phredhccs_lib_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
    var sausages = (0,dist.get)("_sausageFights");
    advMacroAA(location, macro, () => {
      return sausages === (0,dist.get)("_sausageFights");
    });

    if ((0,dist.get)("lastEncounter") !== "sausage goblin") {
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
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  //stolen directly from bean
  if ((0,external_kolmafia_.haveEffect)(ef) < turns) {
    if (!(0,external_kolmafia_.cliExecute)(ef.default) || (0,external_kolmafia_.haveEffect)(ef) === 0) {
      throw "Failed to get effect ".concat(ef.name, ".");
    }
  } else {
    (0,external_kolmafia_.print)("Already have effect ".concat(ef.name, "."));
  }
}
function setClan(target) {
  //stolen directly from bean
  if ((0,external_kolmafia_.getClanName)() !== target) {
    var clanCache = JSON.parse((0,external_kolmafia_.getProperty)("hccs_clanCache") || "{}");

    if (clanCache.target === undefined) {
      var recruiter = (0,external_kolmafia_.visitUrl)("clan_signup.php");
      var clanRe = /<option value=([0-9]+)>([^<]+)<\/option>/g;
      var match;

      while ((match = clanRe.exec(recruiter)) !== null) {
        clanCache[match[2]] = match[1];
      }
    }

    (0,external_kolmafia_.setProperty)("hccs_clanCache", JSON.stringify(clanCache));
    (0,external_kolmafia_.visitUrl)("showclan.php?whichclan=".concat(clanCache[target], "&action=joinclan&confirm=on&pwd"));

    if ((0,external_kolmafia_.getClanName)() !== target) {
      throw "failed to switch clans to ".concat(target, ". Did you spell it correctly? Are you whitelisted?");
    }
  }

  return true;
}
function setChoice(adv, choice) {
  PropertyManager.setChoices(phredhccs_lib_defineProperty({}, adv, choice));
}
function tryUse(quantity, it) {
  //ripped straight from bean
  if ((0,external_kolmafia_.availableAmount)(it) > 0) {
    return (0,external_kolmafia_.use)(quantity, it);
  } else {
    return false;
  }
}
function multiFightAutoAttack() {
  while ((0,external_kolmafia_.choiceFollowsFight)() || (0,external_kolmafia_.inMultiFight)()) {
    (0,external_kolmafia_.visitUrl)("choice.php");
  }
}
function heal() {
  (0,external_kolmafia_.restoreHp)((0,external_kolmafia_.myMaxhp)());
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
    (0,external_kolmafia_.adv1)(location, -1, () => {
      return dist.Macro.if_("!pastround 2", macro).abort().toString();
    });
    if (afterCombatAction) afterCombatAction();
    n++;
  }
}
function advMacro(location, macro) {
  var parameter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var afterCombatAction = arguments.length > 3 ? arguments[3] : undefined;
  (0,external_kolmafia_.setAutoAttack)(0);
  var n = 0;

  var condition = () => {
    return typeof parameter === "number" ? n < parameter : parameter();
  };

  while (condition()) {
    (0,external_kolmafia_.adv1)(location, -1, () => {
      return dist.Macro.if_("!pastround 2", macro).abort().toString();
    });
    if (afterCombatAction) afterCombatAction();
    n++;
  }
}
function mapMacro(location, monster, macro) {
  macro.setAutoAttack();
  (0,external_kolmafia_.useSkill)((0,dist.$skill)(phredhccs_lib_templateObject67 || (phredhccs_lib_templateObject67 = phredhccs_lib_taggedTemplateLiteral(["Map the Monsters"]))));
  if (!(0,dist.get)("mappingMonsters")) throw "I am not actually mapping anything. Weird!";else {
    while ((0,dist.get)("mappingMonsters")) {
      (0,external_kolmafia_.visitUrl)((0,external_kolmafia_.toUrl)(location));
      (0,external_kolmafia_.runChoice)(1, "heyscriptswhatsupwinkwink=".concat(monster.id));
      (0,external_kolmafia_.runCombat)(macro.toString());
    }
  }
}
function horsery() {
  return (0,dist.get)("_horsery");
}
function horse(horse) {
  if (!horse.includes("horse")) horse = "".concat(horse, " horse");
  if (horsery() !== horse) (0,external_kolmafia_.cliExecute)("horsery ".concat(horse));
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
  (0,external_kolmafia_.cliExecute)("fax receive");
  if (dist.property.getString("photocopyMonster").toLowerCase() === monster.name.toLowerCase()) return true;
  (0,external_kolmafia_.cliExecute)("fax send");
  return false;
}

function fax(monster) {
  if (!(0,dist.get)("_photocopyUsed")) {
    if (checkFax(monster)) return;
    (0,external_kolmafia_.chatPrivate)("cheesefax", monster.name);

    for (var i = 0; i < 3; i++) {
      (0,external_kolmafia_.wait)(5 + i);
      if (checkFax(monster)) return;
    }

    (0,external_kolmafia_.abort)("Failed to acquire photocopied ".concat(monster.name, "."));
  }
}
var tests = [];
function testWrapper(name, test, prepare) {
  if (testDone(test)) return;
  var startTurns = (0,external_kolmafia_.myTurncount)();
  var predictedTurns = prepare();
  burnLibrams();
  doTest(test);
  tests.push({
    testName: name,
    turnPrediction: predictedTurns,
    turnCost: (0,external_kolmafia_.myTurncount)() - startTurns
  });
}
function questStep(questName) {
  var stringStep = dist.property.getString(questName);
  if (stringStep === "unstarted" || stringStep === "") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw "Quest state parsing error.";
    }

    return parseInt(stringStep.substring(4), 10);
  }
}
var heads = [(0,dist.$effect)(phredhccs_lib_templateObject68 || (phredhccs_lib_templateObject68 = phredhccs_lib_taggedTemplateLiteral(["Hot-Headed"]))), (0,dist.$effect)(phredhccs_lib_templateObject69 || (phredhccs_lib_templateObject69 = phredhccs_lib_taggedTemplateLiteral(["Cold as Nice"]))), (0,dist.$effect)(phredhccs_lib_templateObject70 || (phredhccs_lib_templateObject70 = phredhccs_lib_taggedTemplateLiteral(["A Brush with Grossness"]))), (0,dist.$effect)(phredhccs_lib_templateObject71 || (phredhccs_lib_templateObject71 = phredhccs_lib_taggedTemplateLiteral(["Does It Have a Skull In There??"]))), (0,dist.$effect)(phredhccs_lib_templateObject72 || (phredhccs_lib_templateObject72 = phredhccs_lib_taggedTemplateLiteral(["Oiled, Slick"]))), (0,dist.$effect)(phredhccs_lib_templateObject73 || (phredhccs_lib_templateObject73 = phredhccs_lib_taggedTemplateLiteral(["Lack of Body-Building"]))), (0,dist.$effect)(phredhccs_lib_templateObject74 || (phredhccs_lib_templateObject74 = phredhccs_lib_taggedTemplateLiteral(["We're All Made of Starfish"]))), (0,dist.$effect)(phredhccs_lib_templateObject75 || (phredhccs_lib_templateObject75 = phredhccs_lib_taggedTemplateLiteral(["Pomp & Circumsands"]))), (0,dist.$effect)(phredhccs_lib_templateObject76 || (phredhccs_lib_templateObject76 = phredhccs_lib_taggedTemplateLiteral(["Resting Beach Face"]))), (0,dist.$effect)(phredhccs_lib_templateObject77 || (phredhccs_lib_templateObject77 = phredhccs_lib_taggedTemplateLiteral(["Do I Know You From Somewhere?"]))), (0,dist.$effect)(phredhccs_lib_templateObject78 || (phredhccs_lib_templateObject78 = phredhccs_lib_taggedTemplateLiteral(["You Learned Something Maybe!"])))];
function tryHead(effect) {
  if (!heads.includes(effect)) return;
  var headNumber = 1 + heads.indexOf(effect);
  if (dist.property.getString("_beachHeadsUsed").split(",").includes(headNumber.toString())) return;
  ensureEffect(effect);
}
function ensureMp(mp) {
  if ((0,external_kolmafia_.myMp)() > mp) return;
  if (mp > (0,external_kolmafia_.myMaxmp)()) throw "Insufficient maximum mp!";

  while ((0,dist.have)((0,dist.$item)(phredhccs_lib_templateObject79 || (phredhccs_lib_templateObject79 = phredhccs_lib_taggedTemplateLiteral(["magical sausage"])))) || (0,dist.have)((0,dist.$item)(phredhccs_lib_templateObject80 || (phredhccs_lib_templateObject80 = phredhccs_lib_taggedTemplateLiteral(["magical sausage casing"])))) && (0,external_kolmafia_.myMp)() < mp && (0,dist.get)("_sausagesEaten") < 23) {
    (0,external_kolmafia_.retrieveItem)((0,dist.$item)(phredhccs_lib_templateObject81 || (phredhccs_lib_templateObject81 = phredhccs_lib_taggedTemplateLiteral(["magical sausage"]))));
    (0,external_kolmafia_.eat)((0,dist.$item)(phredhccs_lib_templateObject82 || (phredhccs_lib_templateObject82 = phredhccs_lib_taggedTemplateLiteral(["magical sausage"]))));
  }

  while ((0,dist.have)((0,dist.$item)(phredhccs_lib_templateObject83 || (phredhccs_lib_templateObject83 = phredhccs_lib_taggedTemplateLiteral(["psychokinetic energy blob"])))) && (0,external_kolmafia_.myMp)() < mp) {
    (0,external_kolmafia_.use)((0,dist.$item)(phredhccs_lib_templateObject84 || (phredhccs_lib_templateObject84 = phredhccs_lib_taggedTemplateLiteral(["psychokinetic energy blob"]))));
  }

  if ((0,external_kolmafia_.myMp)() < mp) (0,external_kolmafia_.restoreMp)(mp);
}
var maximizeFamiliar = (0,dist.have)((0,dist.$familiar)(phredhccs_lib_templateObject85 || (phredhccs_lib_templateObject85 = phredhccs_lib_taggedTemplateLiteral(["Disembodied Hand"])))) ? (0,dist.$familiar)(phredhccs_lib_templateObject86 || (phredhccs_lib_templateObject86 = phredhccs_lib_taggedTemplateLiteral(["Disembodied Hand"]))) : (0,dist.$familiar)(phredhccs_lib_templateObject87 || (phredhccs_lib_templateObject87 = phredhccs_lib_taggedTemplateLiteral(["Left-Hand Man"])));

function canCastLibrams() {
  var summonNumber = 1 + (0,dist.get)("libramSummons");
  var cost = 1 + summonNumber * (summonNumber - 10) / 2;
  return (0,external_kolmafia_.myMp)() >= cost;
}

function burnLibrams() {
  var summonSkill = (0,dist.$skills)(phredhccs_lib_templateObject88 || (phredhccs_lib_templateObject88 = phredhccs_lib_taggedTemplateLiteral(["Summon Candy Heart, Summon BRICKOs, Summon Love Song"]))).find(skill => (0,dist.have)(skill));
  if (!summonSkill) return;

  while (canCastLibrams()) {
    var testsDone = (0,dist.get)("csServicesPerformed").split(",");

    if (!testsDone.includes("Breed More Collies") && !(0,dist.have)((0,dist.$item)(phredhccs_lib_templateObject89 || (phredhccs_lib_templateObject89 = phredhccs_lib_taggedTemplateLiteral(["green candy heart"])))) && (0,dist.have)((0,dist.$skill)(phredhccs_lib_templateObject90 || (phredhccs_lib_templateObject90 = phredhccs_lib_taggedTemplateLiteral(["Summon Candy Heart"]))))) {
      (0,external_kolmafia_.useSkill)((0,dist.$skill)(phredhccs_lib_templateObject91 || (phredhccs_lib_templateObject91 = phredhccs_lib_taggedTemplateLiteral(["Summon Candy Heart"]))));
    } else if (!testsDone.includes("Breed More Collies") && !(0,dist.have)((0,dist.$item)(phredhccs_lib_templateObject92 || (phredhccs_lib_templateObject92 = phredhccs_lib_taggedTemplateLiteral(["love song of icy revenge"]))), 4) && (0,dist.have)((0,dist.$skill)(phredhccs_lib_templateObject93 || (phredhccs_lib_templateObject93 = phredhccs_lib_taggedTemplateLiteral(["Summon Love Song"]))))) {
      (0,external_kolmafia_.useSkill)((0,dist.$skill)(phredhccs_lib_templateObject94 || (phredhccs_lib_templateObject94 = phredhccs_lib_taggedTemplateLiteral(["Summon Love Song"]))));
    } else if ((0,dist.have)((0,dist.$skill)(phredhccs_lib_templateObject95 || (phredhccs_lib_templateObject95 = phredhccs_lib_taggedTemplateLiteral(["Summon BRICKOs"])))) && (0,dist.get)("_brickoEyeSummons") < 3 && (0,dist.have)((0,dist.$skill)(phredhccs_lib_templateObject96 || (phredhccs_lib_templateObject96 = phredhccs_lib_taggedTemplateLiteral(["Summon BRICKOs"]))))) {
      (0,external_kolmafia_.useSkill)((0,dist.$skill)(phredhccs_lib_templateObject97 || (phredhccs_lib_templateObject97 = phredhccs_lib_taggedTemplateLiteral(["Summon BRICKOs"]))));
    } else {
      (0,external_kolmafia_.useSkill)(summonSkill);
    }
  }
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
;// CONCATENATED MODULE: ./src/runstart.ts
var runstart_templateObject, runstart_templateObject2, runstart_templateObject3, runstart_templateObject4, runstart_templateObject5, runstart_templateObject6, runstart_templateObject7, runstart_templateObject8, runstart_templateObject9, runstart_templateObject10, runstart_templateObject11, runstart_templateObject12, runstart_templateObject13, runstart_templateObject14, runstart_templateObject15, runstart_templateObject16, runstart_templateObject17, runstart_templateObject18, runstart_templateObject19, runstart_templateObject20, runstart_templateObject21, runstart_templateObject22, runstart_templateObject23, runstart_templateObject24, runstart_templateObject25, runstart_templateObject26, runstart_templateObject27, runstart_templateObject28, runstart_templateObject29, runstart_templateObject30, runstart_templateObject31, runstart_templateObject32, runstart_templateObject33, runstart_templateObject34, runstart_templateObject35, runstart_templateObject36, runstart_templateObject37, runstart_templateObject38;

function runstart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function juiceBar() {
  (0,external_kolmafia_.visitUrl)("place.php?whichplace=chateau&action=chateau_desk2");
  (0,external_kolmafia_.autosell)(1, (0,dist.$item)(runstart_templateObject || (runstart_templateObject = runstart_taggedTemplateLiteral(["gremlin juice"]))));
}

function toot() {
  (0,external_kolmafia_.visitUrl)("tutorial.php?action=toot");
  tryUse(1, (0,dist.$item)(runstart_templateObject2 || (runstart_templateObject2 = runstart_taggedTemplateLiteral(["letter from King Ralph XI"]))));
  tryUse(1, (0,dist.$item)(runstart_templateObject3 || (runstart_templateObject3 = runstart_taggedTemplateLiteral(["pork elf goodies sack"]))));
  (0,external_kolmafia_.autosell)(5, (0,dist.$item)(runstart_templateObject4 || (runstart_templateObject4 = runstart_taggedTemplateLiteral(["baconstone"]))));
  (0,external_kolmafia_.autosell)(5, (0,dist.$item)(runstart_templateObject5 || (runstart_templateObject5 = runstart_taggedTemplateLiteral(["hamethyst"]))));

  if (!(0,dist.have)((0,dist.$item)(runstart_templateObject6 || (runstart_templateObject6 = runstart_taggedTemplateLiteral(["toy accordion"]))))) {
    (0,external_kolmafia_.buy)(1, (0,dist.$item)(runstart_templateObject7 || (runstart_templateObject7 = runstart_taggedTemplateLiteral(["toy accordion"]))));
  }
}

function grimoires() {
  if (!(0,dist.get)("_grimoireConfiscatorSummons") && (0,dist.have)((0,dist.$skill)(runstart_templateObject8 || (runstart_templateObject8 = runstart_taggedTemplateLiteral(["Summon Confiscated Things"]))))) {
    (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(runstart_templateObject9 || (runstart_templateObject9 = runstart_taggedTemplateLiteral(["Summon Confiscated Things"]))));
    (0,dist.$items)(runstart_templateObject10 || (runstart_templateObject10 = runstart_taggedTemplateLiteral(["glow-in-the-dark necklace, \"KICK ME\" sign, LCD game: Burger Belt, LCD game: Food Eater, LCD game: Garbage River"]))).forEach(item => (0,external_kolmafia_.autosell)(1, item));
  }

  if (!(0,dist.get)("grimoire2Summons") && (0,dist.have)((0,dist.$skill)(runstart_templateObject11 || (runstart_templateObject11 = runstart_taggedTemplateLiteral(["Summon Tasteful Items"]))))) {
    (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(runstart_templateObject12 || (runstart_templateObject12 = runstart_taggedTemplateLiteral(["Summon Tasteful Items"]))));
    (0,dist.$items)(runstart_templateObject13 || (runstart_templateObject13 = runstart_taggedTemplateLiteral(["black-and-blue light, blue plasma ball, cheap studded belt, flavored foot massage oil, foam dart, Loudmouth Larry Lamprey, personal massager, personalized coffee mug, stick-on eyebrow piercing"]))).forEach(item => (0,external_kolmafia_.autosell)(5, item));
  }

  if (!(0,dist.get)("grimoire3Summons") && (0,dist.have)((0,dist.$skill)(runstart_templateObject14 || (runstart_templateObject14 = runstart_taggedTemplateLiteral(["Summon Alice's Army Cards"]))))) {
    (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(runstart_templateObject15 || (runstart_templateObject15 = runstart_taggedTemplateLiteral(["Summon Alice's Army Cards"]))));
    (0,external_kolmafia_.buy)((0,dist.$coinmaster)(runstart_templateObject16 || (runstart_templateObject16 = runstart_taggedTemplateLiteral(["Game Shoppe Snacks"]))), 1, (0,dist.$item)(runstart_templateObject17 || (runstart_templateObject17 = runstart_taggedTemplateLiteral(["tobiko marble soda"]))));
  }
}

function setSettings() {
  dist.SourceTerminal.educate([(0,dist.$skill)(runstart_templateObject18 || (runstart_templateObject18 = runstart_taggedTemplateLiteral(["Extract"]))), (0,dist.$skill)(runstart_templateObject19 || (runstart_templateObject19 = runstart_taggedTemplateLiteral(["Portscan"])))]);
  setClan((0,dist.get)("phccs_mainClan", "Alliance From Heck"));
}

function getTurns() {
  if ((0,external_kolmafia_.myLevel)() === 1 && !(0,external_kolmafia_.mySpleenUse)()) {
    while ((0,dist.get)("_universeCalculated") < (0,dist.get)("skillLevel144")) {
      (0,external_kolmafia_.cliExecute)("numberology 69");
    }
  }

  if (!(0,dist.get)("_borrowedTimeUsed")) {
    if (!(0,dist.have)((0,dist.$item)(runstart_templateObject20 || (runstart_templateObject20 = runstart_taggedTemplateLiteral(["borrowed time"]))))) {
      (0,external_kolmafia_.create)(1, (0,dist.$item)(runstart_templateObject21 || (runstart_templateObject21 = runstart_taggedTemplateLiteral(["borrowed time"]))));
    }

    (0,external_kolmafia_.use)(1, (0,dist.$item)(runstart_templateObject22 || (runstart_templateObject22 = runstart_taggedTemplateLiteral(["borrowed time"]))));
  }
}

function prepGear() {
  if (!(0,dist.have)((0,dist.$item)(runstart_templateObject23 || (runstart_templateObject23 = runstart_taggedTemplateLiteral(["dromedary drinking helmet"]))))) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(runstart_templateObject24 || (runstart_templateObject24 = runstart_taggedTemplateLiteral(["Melodramedary"]))));

    if (!(0,dist.have)((0,dist.$item)(runstart_templateObject25 || (runstart_templateObject25 = runstart_taggedTemplateLiteral(["box of Familiar Jacks"]))))) {
      (0,external_kolmafia_.create)(1, (0,dist.$item)(runstart_templateObject26 || (runstart_templateObject26 = runstart_taggedTemplateLiteral(["box of Familiar Jacks"]))));
    }

    (0,external_kolmafia_.use)(1, (0,dist.$item)(runstart_templateObject27 || (runstart_templateObject27 = runstart_taggedTemplateLiteral(["box of Familiar Jacks"]))));
    (0,external_kolmafia_.cliExecute)("mummery myst");
  }

  if (!(0,dist.have)((0,dist.$item)(runstart_templateObject28 || (runstart_templateObject28 = runstart_taggedTemplateLiteral(["your cowboy boots"]))))) {
    (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_right&action=townright_ltt");
    (0,external_kolmafia_.runChoice)(5);
  }

  if ((0,dist.have)((0,dist.$item)(runstart_templateObject29 || (runstart_templateObject29 = runstart_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))) && !(0,dist.get)("_saberMod")) {
    (0,external_kolmafia_.visitUrl)("main.php?action=may4");
    (0,external_kolmafia_.runChoice)(4);
  }

  if (!(0,dist.have)((0,dist.$item)(runstart_templateObject30 || (runstart_templateObject30 = runstart_taggedTemplateLiteral(["gold detective badge"]))))) {
    (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_precinct");
  }

  if ((0,dist.have)((0,dist.$item)(runstart_templateObject31 || (runstart_templateObject31 = runstart_taggedTemplateLiteral(["GameInformPowerDailyPro magazine"]))))) {
    (0,external_kolmafia_.visitUrl)("inv_use.php?whichitem=6174&confirm=Yep.");
  }

  if ((0,external_kolmafia_.eudoraItem)() === (0,dist.$item)(runstart_templateObject32 || (runstart_templateObject32 = runstart_taggedTemplateLiteral(["GameInformPowerDailyPro subscription card"])))) {
    if (!(0,dist.have)((0,dist.$item)(runstart_templateObject33 || (runstart_templateObject33 = runstart_taggedTemplateLiteral(["scroll of Puddingskin"])))) && !(0,dist.have)((0,dist.$item)(runstart_templateObject34 || (runstart_templateObject34 = runstart_taggedTemplateLiteral(["dungeoneering kit"]))))) {
      (0,external_kolmafia_.visitUrl)("adventure.php?snarfblat=319");
      (0,external_kolmafia_.use)(1, (0,dist.$item)(runstart_templateObject35 || (runstart_templateObject35 = runstart_taggedTemplateLiteral(["dungeoneering kit"]))));
    }
  }

  if (!(0,dist.get)("_floundryItemCreated")) {
    (0,external_kolmafia_.cliExecute)("acquire codpiece");
  }

  if (!(0,dist.have)((0,dist.$item)(runstart_templateObject36 || (runstart_templateObject36 = runstart_taggedTemplateLiteral(["pantogram pants"]))))) {
    (0,external_kolmafia_.cliExecute)("pantogram mysticality|hot|drops of blood|some self-respect|your dreams|silent");
  }

  if ((0,dist.get)("boomBoxSong") !== "Total Eclipse of Your Meat") {
    (0,external_kolmafia_.cliExecute)("boombox meat");
  }

  (0,external_kolmafia_.cliExecute)("briefcase enchantment weapon -combat");
}

function vote() {
  if (!(0,dist.get)("_voteToday")) {
    (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
    (0,external_kolmafia_.visitUrl)("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=2&local%5B%5D=3");
  }
}

function deck() {
  if (!(0,dist.get)("_deckCardsDrawn")) {
    (0,external_kolmafia_.cliExecute)("cheat ancestral; cheat island; cheat 1952");
    (0,external_kolmafia_.autosell)(1, (0,dist.$item)(runstart_templateObject37 || (runstart_templateObject37 = runstart_taggedTemplateLiteral(["1952 Mickey Mantle card"]))));
    (0,external_kolmafia_.useSkill)(2, (0,dist.$skill)(runstart_templateObject38 || (runstart_templateObject38 = runstart_taggedTemplateLiteral(["Ancestral Recall"]))));
  }
}

function scavenge() {
  if (!(0,dist.get)("_daycareGymScavenges")) {
    (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
    (0,external_kolmafia_.runChoice)(3);
    (0,external_kolmafia_.runChoice)(2);
    (0,external_kolmafia_.runChoice)(5);
    (0,external_kolmafia_.runChoice)(4);
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
var coil_wire_templateObject, coil_wire_templateObject2, coil_wire_templateObject3, coil_wire_templateObject4, coil_wire_templateObject5, coil_wire_templateObject6, coil_wire_templateObject7, coil_wire_templateObject8, coil_wire_templateObject9, coil_wire_templateObject10;

function coil_wire_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function firstFights() {
  uniform();
  (0,external_kolmafia_.equip)((0,dist.$slot)(coil_wire_templateObject || (coil_wire_templateObject = coil_wire_taggedTemplateLiteral(["back"]))), (0,dist.$item)(coil_wire_templateObject2 || (coil_wire_templateObject2 = coil_wire_taggedTemplateLiteral(["protonic accelerator pack"]))));
  useDefaultFamiliar();
  fightSausageIfAble((0,dist.$location)(coil_wire_templateObject3 || (coil_wire_templateObject3 = coil_wire_taggedTemplateLiteral(["Noob Cave"]))), dist.Macro.skill((0,dist.$skill)(coil_wire_templateObject4 || (coil_wire_templateObject4 = coil_wire_taggedTemplateLiteral(["Micrometeorite"])))).attack().repeat());

  if ((0,dist.have)((0,dist.$item)(coil_wire_templateObject5 || (coil_wire_templateObject5 = coil_wire_taggedTemplateLiteral(["magical sausage casing"]))))) {
    (0,external_kolmafia_.create)(1, (0,dist.$item)(coil_wire_templateObject6 || (coil_wire_templateObject6 = coil_wire_taggedTemplateLiteral(["magical sausage"]))));
  }

  if ((0,dist.have)((0,dist.$item)(coil_wire_templateObject7 || (coil_wire_templateObject7 = coil_wire_taggedTemplateLiteral(["magical sausage"]))))) {
    (0,external_kolmafia_.eat)(1, (0,dist.$item)(coil_wire_templateObject8 || (coil_wire_templateObject8 = coil_wire_taggedTemplateLiteral(["magical sausage"]))));
  }

  var ghostLocation = (0,dist.get)("ghostLocation");

  if (ghostLocation) {
    (0,external_kolmafia_.equip)((0,dist.$slot)(coil_wire_templateObject9 || (coil_wire_templateObject9 = coil_wire_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(coil_wire_templateObject10 || (coil_wire_templateObject10 = coil_wire_taggedTemplateLiteral(["latte lovers member's mug"]))));
    useDefaultFamiliar();
    advMacro(ghostLocation, dist.Macro.step(delevel).step(easyFight).skill("shoot ghost").skill("shoot ghost").skill("shoot ghost").skill("trap ghost"));
  }
}

function coilWire() {
  runStart();
  firstFights();
  wireOutfit();
  return 60;
}
;// CONCATENATED MODULE: ./src/familiarweight.ts
var familiarweight_templateObject, familiarweight_templateObject2, familiarweight_templateObject3, familiarweight_templateObject4, familiarweight_templateObject5, familiarweight_templateObject6, familiarweight_templateObject7, familiarweight_templateObject8, familiarweight_templateObject9, familiarweight_templateObject10, familiarweight_templateObject11, familiarweight_templateObject12, familiarweight_templateObject13, familiarweight_templateObject14, familiarweight_templateObject15, familiarweight_templateObject16, familiarweight_templateObject17, familiarweight_templateObject18, familiarweight_templateObject19, familiarweight_templateObject20, familiarweight_templateObject21, familiarweight_templateObject22, familiarweight_templateObject23, familiarweight_templateObject24, familiarweight_templateObject25, familiarweight_templateObject26, familiarweight_templateObject27, familiarweight_templateObject28, familiarweight_templateObject29, familiarweight_templateObject30, familiarweight_templateObject31, familiarweight_templateObject32, familiarweight_templateObject33, familiarweight_templateObject34, familiarweight_templateObject35, familiarweight_templateObject36, familiarweight_templateObject37;

function familiarweight_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function universalWeightBuffs() {
  ensureEffect((0,dist.$effect)(familiarweight_templateObject || (familiarweight_templateObject = familiarweight_taggedTemplateLiteral(["Empathy"]))));
  ensureEffect((0,dist.$effect)(familiarweight_templateObject2 || (familiarweight_templateObject2 = familiarweight_taggedTemplateLiteral(["Leash of Linguini"]))));
  ensureEffect((0,dist.$effect)(familiarweight_templateObject3 || (familiarweight_templateObject3 = familiarweight_taggedTemplateLiteral(["Blood Bond"]))));
  ensureEffect((0,dist.$effect)(familiarweight_templateObject4 || (familiarweight_templateObject4 = familiarweight_taggedTemplateLiteral(["Billiards Belligerence"]))));
  if (!(0,dist.get)("_clanFortuneBuffUsed")) (0,external_kolmafia_.cliExecute)("fortune buff familiar");

  if (!(0,dist.get)("_freePillKeeperUsed")) {
    (0,external_kolmafia_.cliExecute)("pillkeeper familiar");
  }

  if (!(0,dist.have)((0,dist.$effect)(familiarweight_templateObject5 || (familiarweight_templateObject5 = familiarweight_taggedTemplateLiteral(["Puzzle Champ"]))))) {
    (0,external_kolmafia_.cliExecute)("witchess");
  }

  tryHead((0,dist.$effect)(familiarweight_templateObject6 || (familiarweight_templateObject6 = familiarweight_taggedTemplateLiteral(["Do I Know You From Somewhere?"]))));
  if ((0,dist.have)((0,dist.$item)(familiarweight_templateObject7 || (familiarweight_templateObject7 = familiarweight_taggedTemplateLiteral(["green candy heart"]))))) ensureEffect((0,dist.$effect)(familiarweight_templateObject8 || (familiarweight_templateObject8 = familiarweight_taggedTemplateLiteral(["Heart of Green"]))));
}

function gearAndUncommonBuffs() {
  if (!(0,dist.get)("_clanFortuneBuffUsed")) (0,external_kolmafia_.cliExecute)("fortune buff familiar");
  if ((0,dist.have)((0,dist.$item)(familiarweight_templateObject9 || (familiarweight_templateObject9 = familiarweight_taggedTemplateLiteral(["burning newspaper"]))))) (0,external_kolmafia_.create)(1, (0,dist.$item)(familiarweight_templateObject10 || (familiarweight_templateObject10 = familiarweight_taggedTemplateLiteral(["burning paper crane"]))));
  if ((0,dist.have)((0,dist.$item)(familiarweight_templateObject11 || (familiarweight_templateObject11 = familiarweight_taggedTemplateLiteral(["short stack of pancakes"]))))) ensureEffect((0,dist.$effect)(familiarweight_templateObject12 || (familiarweight_templateObject12 = familiarweight_taggedTemplateLiteral(["Shortly Stacked"]))));

  if (!(0,dist.have)((0,dist.$item)(familiarweight_templateObject13 || (familiarweight_templateObject13 = familiarweight_taggedTemplateLiteral(["cracker"]))))) {
    if ((0,dist.get)("tomeSummons") < 3) {
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(familiarweight_templateObject14 || (familiarweight_templateObject14 = familiarweight_taggedTemplateLiteral(["Exotic Parrot"]))));
      (0,external_kolmafia_.create)(1, (0,dist.$item)(familiarweight_templateObject15 || (familiarweight_templateObject15 = familiarweight_taggedTemplateLiteral(["box of Familiar Jacks"]))));
      (0,external_kolmafia_.use)(1, (0,dist.$item)(familiarweight_templateObject16 || (familiarweight_templateObject16 = familiarweight_taggedTemplateLiteral(["box of Familiar Jacks"]))));
    } else if ((0,dist.have)((0,dist.$familiar)(familiarweight_templateObject17 || (familiarweight_templateObject17 = familiarweight_taggedTemplateLiteral(["Baby Bugged Bugbear"]))))) {
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(familiarweight_templateObject18 || (familiarweight_templateObject18 = familiarweight_taggedTemplateLiteral(["Baby Bugged Bugbear"]))));
      (0,external_kolmafia_.visitUrl)("arena.php");
    }
  }
}

function countAvailableFights() {
  return 5 - dist.Witchess.fightsDone() + clamp((0,dist.get)("_brickoEyeSummons") - (0,dist.get)("_brickoFights"), 0, (0,external_kolmafia_.itemAmount)((0,dist.$item)(familiarweight_templateObject19 || (familiarweight_templateObject19 = familiarweight_taggedTemplateLiteral(["BRICKO brick"])))) / 2);
}

function familiarStuff() {
  while ((0,dist.get)("_shortOrderCookCharge") < 11 && countAvailableFights() >= 11 - (0,dist.get)("_shortOrderCookCharge")) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(familiarweight_templateObject20 || (familiarweight_templateObject20 = familiarweight_taggedTemplateLiteral(["Shorter-Order Cook"]))));
    uniform();
    defaultKill.setAutoAttack();

    if (5 - dist.Witchess.fightsDone() > 0) {
      dist.Witchess.fightPiece((0,dist.$monster)(familiarweight_templateObject21 || (familiarweight_templateObject21 = familiarweight_taggedTemplateLiteral(["Witchess Bishop"]))));
    } else {
      (0,external_kolmafia_.create)(1, (0,dist.$item)(familiarweight_templateObject22 || (familiarweight_templateObject22 = familiarweight_taggedTemplateLiteral(["BRICKO ooze"]))));
      (0,external_kolmafia_.use)(1, (0,dist.$item)(familiarweight_templateObject23 || (familiarweight_templateObject23 = familiarweight_taggedTemplateLiteral(["BRICKO ooze"]))));
    }
  }

  while ((0,dist.get)("garbageFireProgress") < 30 && countAvailableFights() >= 30 - (0,dist.get)("garbageFireProgress")) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(familiarweight_templateObject24 || (familiarweight_templateObject24 = familiarweight_taggedTemplateLiteral(["Garbage Fire"]))));
    uniform();
    defaultKill.setAutoAttack();

    if (5 - dist.Witchess.fightsDone() > 0) {
      dist.Witchess.fightPiece((0,dist.$monster)(familiarweight_templateObject25 || (familiarweight_templateObject25 = familiarweight_taggedTemplateLiteral(["Witchess Bishop"]))));
    } else {
      (0,external_kolmafia_.create)(1, (0,dist.$item)(familiarweight_templateObject26 || (familiarweight_templateObject26 = familiarweight_taggedTemplateLiteral(["BRICKO ooze"]))));
      (0,external_kolmafia_.use)(1, (0,dist.$item)(familiarweight_templateObject27 || (familiarweight_templateObject27 = familiarweight_taggedTemplateLiteral(["BRICKO ooze"]))));
    }
  }
}

function takeAShower() {
  (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(familiarweight_templateObject28 || (familiarweight_templateObject28 = familiarweight_taggedTemplateLiteral(["none"]))));
  horse("dark");
  uniform();
  setChoice(1387, 3);

  if ((0,dist.get)("_meteorShowerUses") < 5 && !(0,dist.have)((0,dist.$effect)(familiarweight_templateObject29 || (familiarweight_templateObject29 = familiarweight_taggedTemplateLiteral(["Meteor Showered"]))))) {
    advMacroAA((0,dist.$location)(familiarweight_templateObject30 || (familiarweight_templateObject30 = familiarweight_taggedTemplateLiteral(["The Dire Warren"]))), dist.Macro.skill((0,dist.$skill)(familiarweight_templateObject31 || (familiarweight_templateObject31 = familiarweight_taggedTemplateLiteral(["Meteor Shower"])))).skill((0,dist.$skill)(familiarweight_templateObject32 || (familiarweight_templateObject32 = familiarweight_taggedTemplateLiteral(["Use the Force"])))), 1, () => {
      (0,external_kolmafia_.visitUrl)("choice.php");
      (0,external_kolmafia_.runChoice)(3);
    });
    (0,dist.set)("_meteorShowerUses", 1 + (0,dist.get)("_meteorShowerUses"));
  }
}

function testPrep() {
  famweightOutfit();
  if ((0,dist.have)((0,dist.$item)(familiarweight_templateObject33 || (familiarweight_templateObject33 = familiarweight_taggedTemplateLiteral(["silver face paint"]))))) ensureEffect((0,dist.$effect)(familiarweight_templateObject34 || (familiarweight_templateObject34 = familiarweight_taggedTemplateLiteral(["Robot Friends"]))));

  while ((0,dist.have)((0,dist.$item)(familiarweight_templateObject35 || (familiarweight_templateObject35 = familiarweight_taggedTemplateLiteral(["love song of icy revenge"])))) && !(0,dist.have)((0,dist.$effect)(familiarweight_templateObject36 || (familiarweight_templateObject36 = familiarweight_taggedTemplateLiteral(["Cold Hearted"]))), 20)) {
    (0,external_kolmafia_.use)((0,dist.$item)(familiarweight_templateObject37 || (familiarweight_templateObject37 = familiarweight_taggedTemplateLiteral(["love song of icy revenge"]))));
  }
}

function familiarTest() {
  universalWeightBuffs();
  familiarStuff();
  gearAndUncommonBuffs();
  takeAShower();
  testPrep();
  return 60 - Math.floor(((0,external_kolmafia_.familiarWeight)((0,external_kolmafia_.myFamiliar)()) + (0,external_kolmafia_.weightAdjustment)()) / 5);
}
;// CONCATENATED MODULE: ./src/hotres.ts
var hotres_templateObject, hotres_templateObject2, hotres_templateObject3, hotres_templateObject4, hotres_templateObject5, hotres_templateObject6, hotres_templateObject7, hotres_templateObject8, hotres_templateObject9, hotres_templateObject10, hotres_templateObject11, hotres_templateObject12, hotres_templateObject13, hotres_templateObject14, hotres_templateObject15, hotres_templateObject16, hotres_templateObject17, hotres_templateObject18, hotres_templateObject19, hotres_templateObject20, hotres_templateObject21, hotres_templateObject22, hotres_templateObject23, hotres_templateObject24, hotres_templateObject25, hotres_templateObject26, hotres_templateObject27, hotres_templateObject28, hotres_templateObject29, hotres_templateObject30, hotres_templateObject31, hotres_templateObject32, hotres_templateObject33, hotres_templateObject34, hotres_templateObject35, hotres_templateObject36, hotres_templateObject37, hotres_templateObject38, hotres_templateObject39, hotres_templateObject40, hotres_templateObject41;

function hotres_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var predictor = () => 60 - (0,external_kolmafia_.numericModifier)("hot resistance");

function castBuffs() {
  universalWeightBuffs();
  tryHead((0,dist.$effect)(hotres_templateObject || (hotres_templateObject = hotres_taggedTemplateLiteral(["Hot-Headed"]))));

  if (!(0,dist.have)((0,dist.$item)(hotres_templateObject2 || (hotres_templateObject2 = hotres_taggedTemplateLiteral(["tenderizing hammer"]))))) {
    (0,external_kolmafia_.buy)(1, (0,dist.$item)(hotres_templateObject3 || (hotres_templateObject3 = hotres_taggedTemplateLiteral(["tenderizing hammer"]))));
  }

  (0,external_kolmafia_.cliExecute)("smash * ratty knitted cap");
  (0,external_kolmafia_.cliExecute)("smash * red-hot sausage fork");
  (0,external_kolmafia_.cliExecute)("smash * smoldering bagel punch");

  if (!(0,dist.have)((0,dist.$effect)(hotres_templateObject4 || (hotres_templateObject4 = hotres_taggedTemplateLiteral(["Sleazy Hands"]))))) {
    if (!(0,dist.have)((0,dist.$item)(hotres_templateObject5 || (hotres_templateObject5 = hotres_taggedTemplateLiteral(["lotion of sleaziness"]))))) (0,external_kolmafia_.create)(1, (0,dist.$item)(hotres_templateObject6 || (hotres_templateObject6 = hotres_taggedTemplateLiteral(["lotion of sleaziness"]))));
    if ((0,dist.have)((0,dist.$item)(hotres_templateObject7 || (hotres_templateObject7 = hotres_taggedTemplateLiteral(["lotion of sleaziness"]))))) (0,external_kolmafia_.use)(1, (0,dist.$item)(hotres_templateObject8 || (hotres_templateObject8 = hotres_taggedTemplateLiteral(["lotion of sleaziness"]))));
  }

  if (!(0,dist.have)((0,dist.$effect)(hotres_templateObject9 || (hotres_templateObject9 = hotres_taggedTemplateLiteral(["Flame-Retardant Trousers"])))) && (0,dist.have)((0,dist.$item)(hotres_templateObject10 || (hotres_templateObject10 = hotres_taggedTemplateLiteral(["hot powder"]))))) {
    (0,external_kolmafia_.use)(1, (0,dist.$item)(hotres_templateObject11 || (hotres_templateObject11 = hotres_taggedTemplateLiteral(["hot powder"]))));
  }

  ensureEffect((0,dist.$effect)(hotres_templateObject12 || (hotres_templateObject12 = hotres_taggedTemplateLiteral(["Elemental Saucesphere"]))));
  ensureEffect((0,dist.$effect)(hotres_templateObject13 || (hotres_templateObject13 = hotres_taggedTemplateLiteral(["Astral Shell"]))));
  ensureEffect((0,dist.$effect)(hotres_templateObject14 || (hotres_templateObject14 = hotres_taggedTemplateLiteral(["Feeling Peaceful"]))));

  if ((0,dist.have)((0,dist.$item)(hotres_templateObject15 || (hotres_templateObject15 = hotres_taggedTemplateLiteral(["scroll of Protection from Bad Stuff"]))))) {
    ensureEffect((0,dist.$effect)(hotres_templateObject16 || (hotres_templateObject16 = hotres_taggedTemplateLiteral(["Protection from Bad Stuff"]))));
  }

  if (!(0,dist.have)((0,dist.$item)(hotres_templateObject17 || (hotres_templateObject17 = hotres_taggedTemplateLiteral(["meteorite guard"])))) && (0,dist.have)((0,dist.$item)(hotres_templateObject18 || (hotres_templateObject18 = hotres_taggedTemplateLiteral(["metal meteoroid"]))))) {
    (0,external_kolmafia_.create)(1, (0,dist.$item)(hotres_templateObject19 || (hotres_templateObject19 = hotres_taggedTemplateLiteral(["meteorite guard"]))));
  }
}

function thisFireIsOutOfControl() {
  if ((0,dist.get)("_saberForceUses") < 5 && !(0,dist.have)((0,dist.$effect)(hotres_templateObject20 || (hotres_templateObject20 = hotres_taggedTemplateLiteral(["Fireproof Foam Suit"]))))) {
    uniform();
    (0,external_kolmafia_.equip)((0,dist.$slot)(hotres_templateObject21 || (hotres_templateObject21 = hotres_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(hotres_templateObject22 || (hotres_templateObject22 = hotres_taggedTemplateLiteral(["industrial fire extinguisher"]))));
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(hotres_templateObject23 || (hotres_templateObject23 = hotres_taggedTemplateLiteral(["none"]))));
    advMacroAA((0,dist.$location)(hotres_templateObject24 || (hotres_templateObject24 = hotres_taggedTemplateLiteral(["Noob Cave"]))), dist.Macro.skill((0,dist.$skill)(hotres_templateObject25 || (hotres_templateObject25 = hotres_taggedTemplateLiteral(["Fire Extinguisher: Foam Yourself"])))).skill((0,dist.$skill)(hotres_templateObject26 || (hotres_templateObject26 = hotres_taggedTemplateLiteral(["Use the Force"])))), () => !(0,dist.have)((0,dist.$effect)(hotres_templateObject27 || (hotres_templateObject27 = hotres_taggedTemplateLiteral(["Fireproof Foam Suit"])))), () => {
      (0,external_kolmafia_.visitUrl)("choice.php");
      (0,external_kolmafia_.runChoice)(3);
    });
  }
}

function deepDarkVisions() {
  horse("pale");
  (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(hotres_templateObject28 || (hotres_templateObject28 = hotres_taggedTemplateLiteral(["Exotic Parrot"]))));

  if (!(0,dist.have)((0,dist.$item)(hotres_templateObject29 || (hotres_templateObject29 = hotres_taggedTemplateLiteral(["astral pet sweater"])))) && (0,dist.get)("tomeSummons") < 3) {
    (0,external_kolmafia_.create)(1, (0,dist.$item)(hotres_templateObject30 || (hotres_templateObject30 = hotres_taggedTemplateLiteral(["box of Familiar Jacks"]))));
    (0,external_kolmafia_.use)(1, (0,dist.$item)(hotres_templateObject31 || (hotres_templateObject31 = hotres_taggedTemplateLiteral(["box of Familiar Jacks"]))));
  }

  (0,external_kolmafia_.maximize)("spooky res", false);

  while ((0,dist.have)((0,dist.$skill)(hotres_templateObject32 || (hotres_templateObject32 = hotres_taggedTemplateLiteral(["Deep Dark Visions"])))) && (0,external_kolmafia_.haveEffect)((0,dist.$effect)(hotres_templateObject33 || (hotres_templateObject33 = hotres_taggedTemplateLiteral(["Visions of the Deep Dark Deeps"])))) < 30) {
    if ((0,external_kolmafia_.myMp)() < 20) {
      (0,external_kolmafia_.create)(1, (0,dist.$item)(hotres_templateObject34 || (hotres_templateObject34 = hotres_taggedTemplateLiteral(["magical sausage"]))));
      (0,external_kolmafia_.eat)(1, (0,dist.$item)(hotres_templateObject35 || (hotres_templateObject35 = hotres_taggedTemplateLiteral(["magical sausage"]))));
    }

    while ((0,external_kolmafia_.myHp)() < (0,external_kolmafia_.myMaxhp)()) {
      (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(hotres_templateObject36 || (hotres_templateObject36 = hotres_taggedTemplateLiteral(["Cannelloni Cocoon"]))));
    }

    if ((0,external_kolmafia_.myMp)() < 100) {
      (0,external_kolmafia_.create)(1, (0,dist.$item)(hotres_templateObject37 || (hotres_templateObject37 = hotres_taggedTemplateLiteral(["magical sausage"]))));
      (0,external_kolmafia_.eat)(1, (0,dist.$item)(hotres_templateObject38 || (hotres_templateObject38 = hotres_taggedTemplateLiteral(["magical sausage"]))));
    }

    if (Math.round((0,external_kolmafia_.numericModifier)("spooky resistance")) < 10) {
      ensureEffect((0,dist.$effect)(hotres_templateObject39 || (hotres_templateObject39 = hotres_taggedTemplateLiteral(["Does It Have a Skull In There??"]))));

      if (Math.round((0,external_kolmafia_.numericModifier)("spooky resistance")) < 10) {
        throw "Not enough spooky res for Deep Dark Visions.";
      }
    }

    (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(hotres_templateObject40 || (hotres_templateObject40 = hotres_taggedTemplateLiteral(["Deep Dark Visions"]))));
  }
}

function hotres_testPrep() {
  hotresOutfit();
  var improvements = [() => {
    while ((0,external_kolmafia_.getFuel)() < 37) {
      fuelUp();
    }

    (0,external_kolmafia_.cliExecute)("asdonmartin drive safely");
  }, () => ensureEffect((0,dist.$effect)(hotres_templateObject41 || (hotres_templateObject41 = hotres_taggedTemplateLiteral(["Amazing"]))))];

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
var item_templateObject, item_templateObject2, item_templateObject3, item_templateObject4, item_templateObject5, item_templateObject6, item_templateObject7, item_templateObject8, item_templateObject9, item_templateObject10, item_templateObject11, item_templateObject12, item_templateObject13, item_templateObject14, item_templateObject15, item_templateObject16, item_templateObject17, item_templateObject18, item_templateObject19, item_templateObject20, item_templateObject21, item_templateObject22, item_templateObject23, item_templateObject24, item_templateObject25, item_templateObject26, item_templateObject27, item_templateObject28, item_templateObject29, item_templateObject30, item_templateObject31, item_templateObject32, item_templateObject33, item_templateObject34, item_templateObject35, item_templateObject36;

function item_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var item_predictor = () => 60 - Math.floor((0,external_kolmafia_.numericModifier)("item drop") / 30 + 0.001) - Math.floor((0,external_kolmafia_.numericModifier)("booze drop") / 15 + 0.001);

function prelude() {
  horse("dark");
  if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(item_templateObject || (item_templateObject = item_taggedTemplateLiteral(["astral six-pack"])))) !== 0) (0,external_kolmafia_.use)(1, (0,dist.$item)(item_templateObject2 || (item_templateObject2 = item_taggedTemplateLiteral(["astral six-pack"]))));
  if ((0,dist.have)((0,dist.$effect)(item_templateObject3 || (item_templateObject3 = item_taggedTemplateLiteral(["The Magical Mojomuscular Melody"]))))) (0,external_kolmafia_.cliExecute)("shrug The Magical Mojomuscular Melody");
  (0,external_kolmafia_.useSkill)((0,dist.$skill)(item_templateObject4 || (item_templateObject4 = item_taggedTemplateLiteral(["The Ode to Booze"]))));

  while ((0,external_kolmafia_.myInebriety)() < 5) {
    (0,external_kolmafia_.drink)(1, (0,dist.$item)(item_templateObject5 || (item_templateObject5 = item_taggedTemplateLiteral(["astral pilsner"]))));
  }
}

function item_castBuffs() {
  if (!(0,dist.have)((0,dist.$effect)(item_templateObject6 || (item_templateObject6 = item_taggedTemplateLiteral(["Synthesis: Collection"]))))) synthItem();
  (0,external_kolmafia_.cliExecute)("shrug ode");
  ensureEffect((0,dist.$effect)(item_templateObject7 || (item_templateObject7 = item_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))));
  ensureEffect((0,dist.$effect)(item_templateObject8 || (item_templateObject8 = item_taggedTemplateLiteral(["The Spirit of Taking"]))));
  ensureEffect((0,dist.$effect)(item_templateObject9 || (item_templateObject9 = item_taggedTemplateLiteral(["items.enh"]))));

  if ((0,external_kolmafia_.getWorkshed)() === (0,dist.$item)(item_templateObject10 || (item_templateObject10 = item_taggedTemplateLiteral(["Asdon Martin keyfob"]))) && !(0,dist.have)((0,dist.$effect)(item_templateObject11 || (item_templateObject11 = item_taggedTemplateLiteral(["Driving Observantly"]))))) {
    if ((0,external_kolmafia_.getFuel)() < 37) fuelUp();
    (0,external_kolmafia_.cliExecute)("asdonmartin drive observantly");
  }

  if (!(0,dist.have)((0,dist.$effect)(item_templateObject12 || (item_templateObject12 = item_taggedTemplateLiteral(["I See Everything Thrice!"]))))) {
    if (!(0,dist.have)((0,dist.$item)(item_templateObject13 || (item_templateObject13 = item_taggedTemplateLiteral(["government"]))))) {
      if (!(0,dist.have)((0,dist.$item)(item_templateObject14 || (item_templateObject14 = item_taggedTemplateLiteral(["anticheese"]))))) {
        (0,external_kolmafia_.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse");
      }

      if ((0,dist.have)((0,dist.$item)(item_templateObject15 || (item_templateObject15 = item_taggedTemplateLiteral(["government cheese"]))))) {
        (0,external_kolmafia_.create)(1, (0,dist.$item)(item_templateObject16 || (item_templateObject16 = item_taggedTemplateLiteral(["government"]))));
      }
    }

    if ((0,dist.have)((0,dist.$item)(item_templateObject17 || (item_templateObject17 = item_taggedTemplateLiteral(["government"]))))) {
      (0,external_kolmafia_.use)(1, (0,dist.$item)(item_templateObject18 || (item_templateObject18 = item_taggedTemplateLiteral(["government"]))));
    }
  }

  if ((0,external_kolmafia_.myClass)() === (0,dist.$class)(item_templateObject19 || (item_templateObject19 = item_taggedTemplateLiteral(["Pastamancer"]))) && !(0,dist.get)("_barrelPrayer")) {
    (0,external_kolmafia_.cliExecute)("barrelprayer buff");
  }

  if ((0,dist.have)((0,dist.$item)(item_templateObject20 || (item_templateObject20 = item_taggedTemplateLiteral(["lavender candy heart"]))))) ensureEffect((0,dist.$effect)(item_templateObject21 || (item_templateObject21 = item_taggedTemplateLiteral(["Heart of Lavender"]))));
}

function batForm() {
  if ((0,dist.get)("_latteRefillsUsed") < 3 && (0,external_kolmafia_.numericModifier)((0,dist.$item)(item_templateObject22 || (item_templateObject22 = item_taggedTemplateLiteral(["latte lovers member's mug"]))), "Item Drop") < 20) {
    var latte = "pumpkin ".concat((0,dist.get)("latteUnlocks").includes("carrot") ? "carrot " : "vanilla ").concat((0,dist.get)("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon");

    if (latte !== "") {
      (0,external_kolmafia_.cliExecute)("latte refill ".concat(latte));
    }
  }

  if (!(0,dist.have)((0,dist.$effect)(item_templateObject23 || (item_templateObject23 = item_taggedTemplateLiteral(["Bat-Adjacent Form"]))))) {
    var run = dist.Macro.skill((0,dist.$skill)(item_templateObject24 || (item_templateObject24 = item_taggedTemplateLiteral(["Become a Bat"]))));

    if (!(0,dist.get)("_latteBanishUsed")) {
      useDefaultFamiliar(false);
      (0,external_kolmafia_.equip)((0,dist.$slot)(item_templateObject25 || (item_templateObject25 = item_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(item_templateObject26 || (item_templateObject26 = item_taggedTemplateLiteral(["latte lovers member's mug"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(item_templateObject27 || (item_templateObject27 = item_taggedTemplateLiteral(["back"]))), (0,dist.$item)(item_templateObject28 || (item_templateObject28 = item_taggedTemplateLiteral(["vampyric cloake"]))));
      run.skill((0,dist.$skill)(item_templateObject29 || (item_templateObject29 = item_taggedTemplateLiteral(["Throw Latte on Opponent"]))));
    } else {
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(item_templateObject30 || (item_templateObject30 = item_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      ensureEffect((0,dist.$effect)(item_templateObject31 || (item_templateObject31 = item_taggedTemplateLiteral(["Ode to Booze"]))));
      run.step("runaway");
    }

    advMacroAA((0,dist.$location)(item_templateObject32 || (item_templateObject32 = item_taggedTemplateLiteral(["The Dire Warren"]))), run);
  }

  if ((0,dist.get)("_latteRefillsUsed") < 3 && (0,external_kolmafia_.numericModifier)((0,dist.$item)(item_templateObject33 || (item_templateObject33 = item_taggedTemplateLiteral(["latte lovers member's mug"]))), "Item Drop") < 20) {
    var _latte = "pumpkin ".concat((0,dist.get)("latteUnlocks").includes("carrot") ? "carrot" : "vanilla", " ").concat((0,dist.get)("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon");

    if (_latte !== "") {
      (0,external_kolmafia_.cliExecute)("latte refill ".concat(_latte));
    }
  }
}

function item_testPrep() {
  if (!(0,dist.get)("_steelyEyedSquintUsed")) {
    ensureEffect((0,dist.$effect)(item_templateObject34 || (item_templateObject34 = item_taggedTemplateLiteral(["Steely-Eyed Squint"]))));
  }

  (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(item_templateObject35 || (item_templateObject35 = item_taggedTemplateLiteral(["Trick-or-Treating Tot"]))));
  itemOutfit();
  if (item_predictor() > 1) ensureEffect((0,dist.$effect)(item_templateObject36 || (item_templateObject36 = item_taggedTemplateLiteral(["Nearly All-Natural"]))));
}

function itemTest() {
  prelude();
  item_castBuffs();
  batForm();
  item_testPrep();
  if (item_predictor() > 1) throw "Failed to cap item";
  return item_predictor();
}
;// CONCATENATED MODULE: ./src/level.ts
var level_templateObject, level_templateObject2, level_templateObject3, level_templateObject4, level_templateObject5, level_templateObject6, level_templateObject7, level_templateObject8, level_templateObject9, level_templateObject10, level_templateObject11, level_templateObject12, level_templateObject13, level_templateObject14, level_templateObject15, level_templateObject16, level_templateObject17, level_templateObject18, level_templateObject19, level_templateObject20, level_templateObject21, level_templateObject22, level_templateObject23, level_templateObject24, level_templateObject25, level_templateObject26, level_templateObject27, level_templateObject28, level_templateObject29, level_templateObject30, level_templateObject31, level_templateObject32, level_templateObject33, level_templateObject34, level_templateObject35, level_templateObject36, level_templateObject37, level_templateObject38, level_templateObject39, level_templateObject40, level_templateObject41, level_templateObject42, level_templateObject43, level_templateObject44, level_templateObject45, level_templateObject46, level_templateObject47, level_templateObject48, level_templateObject49, level_templateObject50, level_templateObject51, level_templateObject52, level_templateObject53, level_templateObject54, level_templateObject55, level_templateObject56, level_templateObject57, level_templateObject58, level_templateObject59, level_templateObject60, level_templateObject61, level_templateObject62, level_templateObject63, level_templateObject64, level_templateObject65, level_templateObject66, level_templateObject67, level_templateObject68, level_templateObject69, level_templateObject70, level_templateObject71, level_templateObject72, level_templateObject73, level_templateObject74, level_templateObject75, level_templateObject76, level_templateObject77, level_templateObject78, level_templateObject79, level_templateObject80, level_templateObject81, level_templateObject82, level_templateObject83, level_templateObject84, level_templateObject85, level_templateObject86, level_templateObject87, level_templateObject88, level_templateObject89, level_templateObject90, level_templateObject91, level_templateObject92, level_templateObject93, level_templateObject94, level_templateObject95, level_templateObject96, level_templateObject97, level_templateObject98, level_templateObject99, level_templateObject100, level_templateObject101, level_templateObject102, level_templateObject103, level_templateObject104, level_templateObject105, level_templateObject106, level_templateObject107, level_templateObject108, level_templateObject109, level_templateObject110, level_templateObject111, level_templateObject112, level_templateObject113, level_templateObject114, level_templateObject115, level_templateObject116, level_templateObject117, level_templateObject118, level_templateObject119, level_templateObject120, level_templateObject121, level_templateObject122, level_templateObject123, level_templateObject124, level_templateObject125, level_templateObject126, level_templateObject127, level_templateObject128, level_templateObject129, level_templateObject130, level_templateObject131, level_templateObject132, level_templateObject133, level_templateObject134, level_templateObject135, level_templateObject136;

function level_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







function initialExp() {
  if (!(0,dist.have)((0,dist.$effect)(level_templateObject || (level_templateObject = level_taggedTemplateLiteral(["That's Just Cloud-Talk, Man"]))))) {
    (0,external_kolmafia_.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
  }

  ensureEffect((0,dist.$effect)(level_templateObject2 || (level_templateObject2 = level_taggedTemplateLiteral(["Inscrutable Gaze"]))));
  ensureEffect((0,dist.$effect)(level_templateObject3 || (level_templateObject3 = level_taggedTemplateLiteral(["Thaumodynamic"]))));
  if (!(0,dist.have)((0,dist.$effect)(level_templateObject4 || (level_templateObject4 = level_taggedTemplateLiteral(["Synthesis: Learning"]))))) synthExp();
  (0,external_kolmafia_.equip)((0,dist.$item)(level_templateObject5 || (level_templateObject5 = level_taggedTemplateLiteral(["familiar scrapbook"]))), (0,dist.$slot)(level_templateObject6 || (level_templateObject6 = level_taggedTemplateLiteral(["off-hand"]))));

  if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(level_templateObject7 || (level_templateObject7 = level_taggedTemplateLiteral(["a ten-percent bonus"]))))) {
    (0,external_kolmafia_.use)(1, (0,dist.$item)(level_templateObject8 || (level_templateObject8 = level_taggedTemplateLiteral(["a ten-percent bonus"]))));
  }

  (0,external_kolmafia_.cliExecute)("bastille myst brutalist");
}

function buffMyst() {
  var lovePotion = (0,dist.$item)(level_templateObject9 || (level_templateObject9 = level_taggedTemplateLiteral(["Love Potion #0"])));
  var loveEffect = (0,dist.$effect)(level_templateObject10 || (level_templateObject10 = level_taggedTemplateLiteral(["Tainted Love Potion"])));

  if (!(0,dist.have)(loveEffect)) {
    if (!(0,dist.have)(lovePotion)) {
      (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(level_templateObject11 || (level_templateObject11 = level_taggedTemplateLiteral(["Love Mixology"]))));
    }

    (0,external_kolmafia_.visitUrl)("desc_effect.php?whicheffect=".concat(loveEffect.descid));

    if ((0,external_kolmafia_.numericModifier)(loveEffect, "mysticality") > 10 && (0,external_kolmafia_.numericModifier)(loveEffect, "muscle") > -30 && (0,external_kolmafia_.numericModifier)(loveEffect, "moxie") > -30 && (0,external_kolmafia_.numericModifier)(loveEffect, "maximum hp percent") > -0.001) {
      (0,external_kolmafia_.use)(1, lovePotion);
    }
  }

  ensureEffect((0,dist.$effect)(level_templateObject12 || (level_templateObject12 = level_taggedTemplateLiteral(["Uncucumbered"]))));
  if (!(0,dist.have)((0,dist.$effect)(level_templateObject13 || (level_templateObject13 = level_taggedTemplateLiteral(["Synthesis: Smart"]))))) synthMyst();
  tryHead((0,dist.$effect)(level_templateObject14 || (level_templateObject14 = level_taggedTemplateLiteral(["You Learned Something Maybe!"]))));
  tryHead((0,dist.$effect)(level_templateObject15 || (level_templateObject15 = level_taggedTemplateLiteral(["We're All Made of Starfish"]))));
  if (!(0,dist.get)("_lyleFavored")) ensureEffect((0,dist.$effect)(level_templateObject16 || (level_templateObject16 = level_taggedTemplateLiteral(["Favored by Lyle"]))));
  if (!(0,dist.get)("telescopeLookedHigh")) ensureEffect((0,dist.$effect)(level_templateObject17 || (level_templateObject17 = level_taggedTemplateLiteral(["Starry-Eyed"]))));
  ensureEffect((0,dist.$effect)(level_templateObject18 || (level_templateObject18 = level_taggedTemplateLiteral(["Glittering Eyelashes"]))));

  if (!(0,dist.get)("_streamsCrossed")) {
    (0,external_kolmafia_.cliExecute)("crossstreams");
  }

  (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject19 || (level_templateObject19 = level_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(level_templateObject20 || (level_templateObject20 = level_taggedTemplateLiteral(["Powerful Glove"]))));
  ensureEffect((0,dist.$effect)(level_templateObject21 || (level_templateObject21 = level_taggedTemplateLiteral(["Triple-Sized"]))));
  ensureEffect((0,dist.$effect)(level_templateObject22 || (level_templateObject22 = level_taggedTemplateLiteral(["Feeling Excited"]))));
  if ((0,dist.have)((0,dist.$item)(level_templateObject23 || (level_templateObject23 = level_taggedTemplateLiteral(["votive of confidence"]))))) (0,external_kolmafia_.use)((0,dist.$item)(level_templateObject24 || (level_templateObject24 = level_taggedTemplateLiteral(["votive of confidence"]))));
}

function level_castBuffs() {
  (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(level_templateObject25 || (level_templateObject25 = level_taggedTemplateLiteral(["Left-Hand Man"]))));
  (0,external_kolmafia_.maximize)("mp", false);

  if ((0,dist.get)("_sausagesEaten") === 0) {
    (0,external_kolmafia_.cliExecute)("eat 1 magic sausage");
    (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(level_templateObject26 || (level_templateObject26 = level_taggedTemplateLiteral(["Advanced Saucecrafting"]))));
    (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(level_templateObject27 || (level_templateObject27 = level_taggedTemplateLiteral(["Advanced Cocktailcrafting"]))));
    (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(level_templateObject28 || (level_templateObject28 = level_taggedTemplateLiteral(["Acquire Rhinestones"]))));
    (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(level_templateObject29 || (level_templateObject29 = level_taggedTemplateLiteral(["Prevent Scurvy and Sobriety"]))));
  }

  if (!(0,dist.have)((0,dist.$effect)(level_templateObject30 || (level_templateObject30 = level_taggedTemplateLiteral(["Glowing Blue"]))))) {
    (0,external_kolmafia_.visitUrl)("clan_viplounge.php?action=fwshop&whichfloor=2");
    (0,external_kolmafia_.buy)(1, (0,dist.$item)(level_templateObject31 || (level_templateObject31 = level_taggedTemplateLiteral(["blue rocket"]))));
    (0,external_kolmafia_.use)(1, (0,dist.$item)(level_templateObject32 || (level_templateObject32 = level_taggedTemplateLiteral(["blue rocket"]))));
  }

  if (!(0,dist.have)((0,dist.$item)(level_templateObject33 || (level_templateObject33 = level_taggedTemplateLiteral(["turtle totem"]))))) (0,external_kolmafia_.cliExecute)("acquire turtle totem");
  if (!(0,dist.have)((0,dist.$item)(level_templateObject34 || (level_templateObject34 = level_taggedTemplateLiteral(["saucepan"]))))) (0,external_kolmafia_.cliExecute)("acquire saucepan");
  (0,dist.$skills)(level_templateObject35 || (level_templateObject35 = level_taggedTemplateLiteral(["The Magical Mojomuscular Melody, Stevedave's Shanty of Superiority, Fat Leon's Phat Loot Lyric, The Polka of Plenty, Leash of Linguini, Empathy of the Newt, Blood Bond, Blood Bubble, Song of Bravado, Get Big"]))).forEach(buff => {
    if (!(0,dist.have)((0,external_kolmafia_.toEffect)(buff))) {
      if ((0,external_kolmafia_.myMp)() < (0,external_kolmafia_.mpCost)(buff)) {
        if ((0,external_kolmafia_.totalFreeRests)() > (0,dist.get)("timesRested")) {
          (0,external_kolmafia_.visitUrl)("place.php?whichplace=chateau&action=chateau_restbox");
        } else if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(level_templateObject36 || (level_templateObject36 = level_taggedTemplateLiteral(["psychokinetic energy blob"])))) >= 1) {
          (0,external_kolmafia_.use)(2, (0,dist.$item)(level_templateObject37 || (level_templateObject37 = level_taggedTemplateLiteral(["psychokinetic energy blob"]))));
        } else {
          (0,external_kolmafia_.eat)(1, (0,dist.$item)(level_templateObject38 || (level_templateObject38 = level_taggedTemplateLiteral(["magical sausage"]))));
        }
      }

      (0,external_kolmafia_.useSkill)(1, buff);
    }
  });
}

function getYoked() {
  uniform();
  (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(level_templateObject39 || (level_templateObject39 = level_taggedTemplateLiteral(["Ghost of Crimbo Carols"]))));

  if ((0,dist.get)("snojoSetting") === "NONE") {
    (0,external_kolmafia_.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
    (0,external_kolmafia_.runChoice)(2);
  }

  heal();
  advMacroAA((0,dist.$location)(level_templateObject40 || (level_templateObject40 = level_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))), dist.Macro.step(delevel).attack().repeat(), () => {
    return !(0,dist.have)((0,dist.$effect)(level_templateObject41 || (level_templateObject41 = level_taggedTemplateLiteral(["Holiday Yoked"]))));
  }, () => ensureMp(30));
}

function witchGhostAgent() {
  if (questStep("questM25Armorer") === -1) {
    (0,external_kolmafia_.visitUrl)("shop.php?whichshop=armory&action=talk");
    (0,external_kolmafia_.runChoice)(1);
  }

  uniform();
  (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject42 || (level_templateObject42 = level_taggedTemplateLiteral(["back"]))), (0,dist.$item)(level_templateObject43 || (level_templateObject43 = level_taggedTemplateLiteral(["protonic accelerator pack"]))));
  (0,external_kolmafia_.cliExecute)("fold makeshift garbage shirt");
  (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject44 || (level_templateObject44 = level_taggedTemplateLiteral(["shirt"]))), (0,dist.$item)(level_templateObject45 || (level_templateObject45 = level_taggedTemplateLiteral(["makeshift garbage shirt"]))));
  heal();
  useDefaultFamiliar();
  ensureMp(100);
  dist.Macro.skill("curse of weaksauce").skill("micrometeor").attack().repeat().setAutoAttack();

  if (!(0,dist.have)((0,dist.$item)(level_templateObject46 || (level_templateObject46 = level_taggedTemplateLiteral(["battle broom"]))))) {
    dist.Witchess.fightPiece((0,dist.$monster)(level_templateObject47 || (level_templateObject47 = level_taggedTemplateLiteral(["Witchess Witch"]))));
  }

  (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject48 || (level_templateObject48 = level_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(level_templateObject49 || (level_templateObject49 = level_taggedTemplateLiteral(["battle broom"]))));
  var ghostLocation = (0,dist.get)("ghostLocation");

  if (ghostLocation) {
    (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject50 || (level_templateObject50 = level_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(level_templateObject51 || (level_templateObject51 = level_taggedTemplateLiteral(["latte lovers member's mug"]))));
    useDefaultFamiliar();
    advMacro(ghostLocation, dist.Macro.step(delevel).step(easyFight).skill("portscan").skill("shoot ghost").skill("shoot ghost").skill("shoot ghost").skill("trap ghost"));
  }

  if (!(0,dist.have)((0,dist.$item)(level_templateObject52 || (level_templateObject52 = level_taggedTemplateLiteral(["government"])))) && !(0,dist.have)((0,dist.$item)(level_templateObject53 || (level_templateObject53 = level_taggedTemplateLiteral(["government cheese"]))))) {
    (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject54 || (level_templateObject54 = level_taggedTemplateLiteral(["back"]))), (0,dist.$item)(level_templateObject55 || (level_templateObject55 = level_taggedTemplateLiteral(["vampyric cloake"]))));
    useDefaultFamiliar();
    (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject56 || (level_templateObject56 = level_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(level_templateObject57 || (level_templateObject57 = level_taggedTemplateLiteral(["gold detective badge"]))));
    (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject58 || (level_templateObject58 = level_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(level_templateObject59 || (level_templateObject59 = level_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
    (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject60 || (level_templateObject60 = level_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(level_templateObject61 || (level_templateObject61 = level_taggedTemplateLiteral(["latte lovers member's mug"]))));
    advMacroAA((0,dist.$location)(level_templateObject62 || (level_templateObject62 = level_taggedTemplateLiteral(["Noob Cave"]))), dist.Macro.step(delevel).skill("otoscope").skill("become a bat").skill("chest x-ray"), //1
    () => {
      return (0,external_kolmafia_.getCounters)("Portscan", 0, 0) !== "";
    }, () => () => ensureMp(30));
    var desertAccessItem = (0,external_kolmafia_.knollAvailable)() ? (0,dist.$item)(level_templateObject63 || (level_templateObject63 = level_taggedTemplateLiteral(["bitchin' meatcar"]))) : (0,dist.$item)(level_templateObject64 || (level_templateObject64 = level_taggedTemplateLiteral(["Desert Bus pass"])));

    if (!(0,dist.have)(desertAccessItem)) {
      (0,external_kolmafia_.cliExecute)("acquire ".concat(desertAccessItem.name));
    }

    (0,external_kolmafia_.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse");
  }
}

function lov() {
  uniform();
  (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject65 || (level_templateObject65 = level_taggedTemplateLiteral(["back"]))), (0,dist.$item)(level_templateObject66 || (level_templateObject66 = level_taggedTemplateLiteral(["protonic accelerator pack"]))));
  (0,external_kolmafia_.cliExecute)("fold makeshift garbage shirt");
  (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject67 || (level_templateObject67 = level_taggedTemplateLiteral(["shirt"]))), (0,dist.$item)(level_templateObject68 || (level_templateObject68 = level_taggedTemplateLiteral(["makeshift garbage shirt"]))));
  heal();
  useDefaultFamiliar();
  dist.Macro.if_("monstername LOV enforcer", dist.Macro.attack().repeat()).if_("monstername LOV Engineer", dist.Macro.step(candyblast).skill("weapon of the pastalord").repeat()).if_("monstername LOV equivocator", dist.Macro.step(delevel).step(easyFight).step(candyblast).attack().repeat()).setAutoAttack();

  if (!(0,dist.get)("_loveTunnelUsed")) {
    dist.TunnelOfLove.fightAll("LOV Epaulettes", "Open Heart Surgery", "LOV Extraterrestrial Chocolate");
    (0,external_kolmafia_.use)(1, (0,dist.$item)(level_templateObject69 || (level_templateObject69 = level_taggedTemplateLiteral(["LOV Extraterrestrial Chocolate"]))));
  }

  burnLibrams();
}

function tomatoJuiceAndNinjaCostume() {
  (0,external_kolmafia_.cliExecute)("backupcamera ml");

  if ((0,dist.have)((0,dist.$item)(level_templateObject70 || (level_templateObject70 = level_taggedTemplateLiteral(["magical sausage casing"])))) || (0,dist.have)((0,dist.$item)(level_templateObject71 || (level_templateObject71 = level_taggedTemplateLiteral(["magical sausage"]))))) {
    (0,external_kolmafia_.cliExecute)("eat magic sausage");
  }

  uniform();

  if ((0,dist.get)("_monstersMapped") < 2 && (0,external_kolmafia_.availableAmount)((0,dist.$item)(level_templateObject72 || (level_templateObject72 = level_taggedTemplateLiteral(["tomato"])))) + (0,external_kolmafia_.availableAmount)((0,dist.$item)(level_templateObject73 || (level_templateObject73 = level_taggedTemplateLiteral(["tomato juice of powerful power"])))) + (0,external_kolmafia_.haveEffect)((0,dist.$effect)(level_templateObject74 || (level_templateObject74 = level_taggedTemplateLiteral(["Tomato Power"])))) === 0) {
    (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject75 || (level_templateObject75 = level_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(level_templateObject76 || (level_templateObject76 = level_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
    useDefaultFamiliar();
    mapMacro((0,dist.$location)(level_templateObject77 || (level_templateObject77 = level_taggedTemplateLiteral(["The Haunted Pantry"]))), (0,dist.$monster)(level_templateObject78 || (level_templateObject78 = level_taggedTemplateLiteral(["possessed can of tomatoes"]))), dist.Macro.if_("monsterid ".concat((0,dist.$monster)(level_templateObject79 || (level_templateObject79 = level_taggedTemplateLiteral(["possessed can of tomatoes"]))).id), dist.Macro.skill((0,dist.$skill)(level_templateObject80 || (level_templateObject80 = level_taggedTemplateLiteral(["Reflex Hammer"]))))));
    useDefaultFamiliar(false);
    uniform();
    ensureMp(30);
    mapMacro((0,dist.$location)(level_templateObject81 || (level_templateObject81 = level_taggedTemplateLiteral(["The Haiku Dungeon"]))), (0,dist.$monster)(level_templateObject82 || (level_templateObject82 = level_taggedTemplateLiteral(["amateur ninja"]))), dist.Macro.if_("monsterid ".concat((0,dist.$monster)(level_templateObject83 || (level_templateObject83 = level_taggedTemplateLiteral(["amateur ninja"]))).id), dist.Macro.skill((0,dist.$skill)(level_templateObject84 || (level_templateObject84 = level_taggedTemplateLiteral(["Feel Nostalgic"])))).skill((0,dist.$skill)(level_templateObject85 || (level_templateObject85 = level_taggedTemplateLiteral(["Gingerbread Mob Hit"]))))).step("abort"));
  }

  if (!(0,dist.get)("hasRange")) {
    if (!(0,dist.have)((0,dist.$item)(level_templateObject86 || (level_templateObject86 = level_taggedTemplateLiteral(["Dramatic\u2122 range"]))))) {
      (0,external_kolmafia_.buy)(1, (0,dist.$item)(level_templateObject87 || (level_templateObject87 = level_taggedTemplateLiteral(["Dramatic\u2122 range"]))));
    }

    (0,external_kolmafia_.use)(1, (0,dist.$item)(level_templateObject88 || (level_templateObject88 = level_taggedTemplateLiteral(["Dramatic\u2122 range"]))));
  }

  (0,external_kolmafia_.useSkill)((0,dist.$skill)(level_templateObject89 || (level_templateObject89 = level_taggedTemplateLiteral(["Advanced Saucecrafting"]))));
  (0,external_kolmafia_.useSkill)((0,dist.$skill)(level_templateObject90 || (level_templateObject90 = level_taggedTemplateLiteral(["Prevent Scurvy and Sobriety"]))));

  if (!(0,dist.have)((0,dist.$effect)(level_templateObject91 || (level_templateObject91 = level_taggedTemplateLiteral(["Tomato Power"]))))) {
    if (!(0,dist.have)((0,dist.$item)(level_templateObject92 || (level_templateObject92 = level_taggedTemplateLiteral(["tomato juice of powerful power"])))) && (0,dist.have)((0,dist.$item)(level_templateObject93 || (level_templateObject93 = level_taggedTemplateLiteral(["tomato"]))))) {
      (0,external_kolmafia_.create)(1, (0,dist.$item)(level_templateObject94 || (level_templateObject94 = level_taggedTemplateLiteral(["tomato juice of powerful power"]))));
    }

    if ((0,dist.have)((0,dist.$item)(level_templateObject95 || (level_templateObject95 = level_taggedTemplateLiteral(["tomato juice of powerful power"]))))) {
      (0,external_kolmafia_.use)(1, (0,dist.$item)(level_templateObject96 || (level_templateObject96 = level_taggedTemplateLiteral(["tomato juice of powerful power"]))));
    }
  }

  if (!(0,dist.have)((0,dist.$effect)(level_templateObject97 || (level_templateObject97 = level_taggedTemplateLiteral(["Mystically Oiled"]))))) {
    if (!(0,dist.have)((0,dist.$item)(level_templateObject98 || (level_templateObject98 = level_taggedTemplateLiteral(["ointment of the occult"]))))) {
      (0,external_kolmafia_.create)(1, (0,dist.$item)(level_templateObject99 || (level_templateObject99 = level_taggedTemplateLiteral(["ointment of the occult"]))));
    }

    if ((0,dist.have)((0,dist.$item)(level_templateObject100 || (level_templateObject100 = level_taggedTemplateLiteral(["ointment of the occult"]))))) {
      (0,external_kolmafia_.use)(1, (0,dist.$item)(level_templateObject101 || (level_templateObject101 = level_taggedTemplateLiteral(["ointment of the occult"]))));
    }
  }
}

function godLob() {
  if ((0,dist.get)("_godLobsterFights") === 0) {
    dist.Macro.step(delevel).step(easyFight).attack().repeat().setAutoAttack();
    uniform();
    heal();
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(level_templateObject102 || (level_templateObject102 = level_taggedTemplateLiteral(["God Lobster"]))));
    setChoice(1310, 1);
    (0,external_kolmafia_.visitUrl)("main.php?fightgodlobster=1");
    (0,external_kolmafia_.runCombat)(dist.Macro.step(delevel).step(easyFight).attack().repeat().toString());
    multiFightAutoAttack();
    (0,external_kolmafia_.runChoice)(-1);
    (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject103 || (level_templateObject103 = level_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(level_templateObject104 || (level_templateObject104 = level_taggedTemplateLiteral(["God Lobster's Scepter"]))));
    heal();
    (0,external_kolmafia_.visitUrl)("main.php?fightgodlobster=1");
    (0,external_kolmafia_.runCombat)();
    multiFightAutoAttack();
    (0,external_kolmafia_.runChoice)(-1);
    (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject105 || (level_templateObject105 = level_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(level_templateObject106 || (level_templateObject106 = level_taggedTemplateLiteral(["God Lobster's Ring"]))));
  }
}

function snojo() {
  uniform();
  useDefaultFamiliar();
  advMacroAA((0,dist.$location)(level_templateObject107 || (level_templateObject107 = level_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))), dist.Macro.step(delevel).step(easyFight).attack().repeat(), () => {
    return (0,dist.get)("_snojoFreeFights") < 10;
  }, () => {
    heal();
    useDefaultFamiliar();
    ensureMp(30);
  });
  (0,external_kolmafia_.cliExecute)("hottub");
}

function NEP() {
  if ((0,dist.get)("_questPartyFair") === "unstarted") {
    setChoice(1322, "");
    (0,external_kolmafia_.visitUrl)("adventure.php?snarfblat=528");

    if ((0,dist.get)("_questPartyFairQuest") === "food") {
      (0,external_kolmafia_.runChoice)(1);
      setChoice(1324, 2);
      setChoice(1326, 3);
    } else if ((0,dist.get)("_questPartyFairQuest") === "booze") {
      (0,external_kolmafia_.runChoice)(1);
      setChoice(1324, 3);
      setChoice(1327, 3);
    } else {
      (0,external_kolmafia_.runChoice)(2);
      setChoice(1324, 5);
    }
  }

  uniform();
  (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject108 || (level_templateObject108 = level_taggedTemplateLiteral(["shirt"]))), (0,dist.$item)(level_templateObject109 || (level_templateObject109 = level_taggedTemplateLiteral(["makeshift garbage shirt"]))));
  (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject110 || (level_templateObject110 = level_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(level_templateObject111 || (level_templateObject111 = level_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
  useDefaultFamiliar();
  advMacroAA((0,dist.$location)(level_templateObject112 || (level_templateObject112 = level_taggedTemplateLiteral(["The Neverending Party"]))), dist.Macro.step(delevel).trySkill("feel pride").step(easyFight).attack().repeat(), () => {
    return (0,dist.get)("_neverendingPartyFreeTurns") < 10;
  }, () => {
    useDefaultFamiliar();
    heal();

    if ((0,dist.get)("_sausageFights") > 3 && (0,external_kolmafia_.haveEquipped)((0,dist.$item)(level_templateObject113 || (level_templateObject113 = level_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))))) {
      (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject114 || (level_templateObject114 = level_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(level_templateObject115 || (level_templateObject115 = level_taggedTemplateLiteral(["familiar scrapbook"]))));
    }

    if ((0,dist.get)("choiceAdventure1324") !== 5 && questStep("_questPartyFair") > 0) {
      setChoice(1324, 5);
    }

    if ((0,external_kolmafia_.myLevel)() >= 13 && !(0,dist.have)((0,dist.$effect)(level_templateObject116 || (level_templateObject116 = level_taggedTemplateLiteral(["Inner Elf"]))))) {
      ensureInnerElf();
    }

    ensureMp(30);
  });
  advMacroAA((0,dist.$location)(level_templateObject117 || (level_templateObject117 = level_taggedTemplateLiteral(["The Neverending Party"]))), dist.Macro.if_("!monstername sausage goblin", dist.Macro.trySkill("shattering punch").trySkill("gingerbread mob hit").trySkill("chest x-ray")).if_("monstername sausage goblin", dist.Macro.step(delevel).step(candyblast).attack().repeat()), () => {
    return (0,dist.get)("_shatteringPunchUsed") < 3 && !(0,dist.get)("_gingerbreadMobHitUsed");
  }, () => {
    heal();
    useDefaultFamiliar();

    if ((0,dist.get)("_sausageFights") > 3 && (0,external_kolmafia_.haveEquipped)((0,dist.$item)(level_templateObject118 || (level_templateObject118 = level_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))))) {
      (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject119 || (level_templateObject119 = level_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(level_templateObject120 || (level_templateObject120 = level_taggedTemplateLiteral(["familiar scrapbook"]))));
    }

    if ((0,dist.get)("choiceAdventure1324") !== 5 && questStep("_questPartyFair") > 0) {
      setChoice(1324, 5);
    }

    if ((0,external_kolmafia_.myLevel)() >= 13 && !(0,dist.have)((0,dist.$effect)(level_templateObject121 || (level_templateObject121 = level_taggedTemplateLiteral(["Inner Elf"]))))) {
      ensureInnerElf();
    }

    ensureMp(30);
  });
  (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject122 || (level_templateObject122 = level_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(level_templateObject123 || (level_templateObject123 = level_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
  advMacroAA((0,dist.$location)(level_templateObject124 || (level_templateObject124 = level_taggedTemplateLiteral(["The Neverending Party"]))), dist.Macro.if_("!monstername sausage goblin", dist.Macro.trySkill("shattering punch").trySkill("gingerbread mob hit").trySkill("chest x-ray")).if_("monstername sausage goblin", dist.Macro.step(delevel).step(candyblast).attack().repeat()), () => {
    return (0,dist.get)("_chestXRayUsed") < 3;
  }, () => {
    heal();
    useDefaultFamiliar();

    if ((0,dist.get)("_sausageFights") > 3 && (0,external_kolmafia_.haveEquipped)((0,dist.$item)(level_templateObject125 || (level_templateObject125 = level_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))))) {
      (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject126 || (level_templateObject126 = level_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(level_templateObject127 || (level_templateObject127 = level_taggedTemplateLiteral(["familiar scrapbook"]))));
    }

    if ((0,dist.get)("choiceAdventure1324") !== 5 && questStep("_questPartyFair") > 0) {
      setChoice(1324, 5);
    }

    if ((0,external_kolmafia_.myLevel)() >= 13 && !(0,dist.have)((0,dist.$effect)(level_templateObject128 || (level_templateObject128 = level_taggedTemplateLiteral(["Inner Elf"]))))) {
      ensureInnerElf();
    }

    ensureMp(30);
  });
}

function mElfLeveling() {
  uniform();
  (0,external_kolmafia_.cliExecute)("fold garbage shirt");
  (0,external_kolmafia_.equip)((0,dist.$slot)(level_templateObject129 || (level_templateObject129 = level_taggedTemplateLiteral(["shirt"]))), (0,dist.$item)(level_templateObject130 || (level_templateObject130 = level_taggedTemplateLiteral(["makeshift garbage shirt"]))));
  (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(level_templateObject131 || (level_templateObject131 = level_taggedTemplateLiteral(["Machine Elf"]))));
  advMacroAA((0,dist.$location)(level_templateObject132 || (level_templateObject132 = level_taggedTemplateLiteral(["The Deep Machine Tunnels"]))), defaultKill, () => {
    return (0,dist.get)("_machineTunnelsAdv") < 5;
  }, () => {
    heal();
    ensureMp(30);
  });
}

function royalty() {
  if (!(0,dist.have)((0,dist.$item)(level_templateObject133 || (level_templateObject133 = level_taggedTemplateLiteral(["very pointy crown"]))))) {
    dist.Macro.tryItem("jam band flyer").tryItem("gas can").tryItem("time-spinner").attack().repeat().setAutoAttack();
    uniform();
    useDefaultFamiliar();
    heal();
    dist.Witchess.fightPiece((0,dist.$monster)(level_templateObject134 || (level_templateObject134 = level_taggedTemplateLiteral(["Witchess Queen"]))));
  }

  if (!(0,dist.have)((0,dist.$item)(level_templateObject135 || (level_templateObject135 = level_taggedTemplateLiteral(["dented scepter"]))))) {
    dist.Macro.step(delevel).attack().repeat().setAutoAttack();
    uniform();
    useDefaultFamiliar();
    heal();
    dist.Witchess.fightPiece((0,dist.$monster)(level_templateObject136 || (level_templateObject136 = level_taggedTemplateLiteral(["Witchess King"]))));
  }
}

function restAndBuff() {
  while ((0,dist.get)("timesRested") < (0,external_kolmafia_.totalFreeRests)()) {
    burnLibrams();
    (0,external_kolmafia_.visitUrl)("place.php?whichplace=chateau&action=chateau_restbox");
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
  mElfLeveling();
  NEP();
  royalty();
  restAndBuff();
}
;// CONCATENATED MODULE: ./src/noncombat.ts
var noncombat_templateObject, noncombat_templateObject2, noncombat_templateObject3, noncombat_templateObject4, noncombat_templateObject5, noncombat_templateObject6, noncombat_templateObject7, noncombat_templateObject8, noncombat_templateObject9, noncombat_templateObject10, noncombat_templateObject11, noncombat_templateObject12, noncombat_templateObject13, noncombat_templateObject14, noncombat_templateObject15, noncombat_templateObject16, noncombat_templateObject17, noncombat_templateObject18, noncombat_templateObject19, noncombat_templateObject20;

function noncombat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var noncombat_predictor = () => 60 + (20 + (0,external_kolmafia_.numericModifier)("combat rate")) * 3;

function noncombat_castBuffs() {
  universalWeightBuffs();
  ensureEffect((0,dist.$effect)(noncombat_templateObject || (noncombat_templateObject = noncombat_taggedTemplateLiteral(["Smooth Movements"]))));
  ensureEffect((0,dist.$effect)(noncombat_templateObject2 || (noncombat_templateObject2 = noncombat_taggedTemplateLiteral(["Feeling Lonely"]))));
  (0,external_kolmafia_.equip)((0,dist.$slot)(noncombat_templateObject3 || (noncombat_templateObject3 = noncombat_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(noncombat_templateObject4 || (noncombat_templateObject4 = noncombat_taggedTemplateLiteral(["Powerful Glove"]))));
  ensureEffect((0,dist.$effect)(noncombat_templateObject5 || (noncombat_templateObject5 = noncombat_taggedTemplateLiteral(["Invisible Avatar"]))));
  ensureEffect((0,dist.$effect)(noncombat_templateObject6 || (noncombat_templateObject6 = noncombat_taggedTemplateLiteral(["Blessing of the Bird"]))));
  if (!(0,dist.get)("_clanFortuneBuffUsed")) (0,external_kolmafia_.cliExecute)("fortune buff familiar");
  if ((0,external_kolmafia_.haveEffect)((0,dist.$effect)(noncombat_templateObject7 || (noncombat_templateObject7 = noncombat_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))))) (0,external_kolmafia_.cliExecute)("shrug fat leon's phat loot lyric");
  ensureEffect((0,dist.$effect)(noncombat_templateObject8 || (noncombat_templateObject8 = noncombat_taggedTemplateLiteral(["The Sonata of Sneakiness"]))));
  if (!(0,dist.get)("_olympicSwimmingPool")) (0,external_kolmafia_.cliExecute)("swim sprints");

  while ((0,external_kolmafia_.getFuel)() < 37) {
    fuelUp();
  }

  if (!(0,dist.have)((0,dist.$effect)(noncombat_templateObject9 || (noncombat_templateObject9 = noncombat_taggedTemplateLiteral(["Driving Stealthily"]))))) (0,external_kolmafia_.cliExecute)("asdonmartin drive stealthily");
  horse("dark");
}

function godLobster() {
  if (!(0,dist.have)((0,dist.$effect)(noncombat_templateObject10 || (noncombat_templateObject10 = noncombat_taggedTemplateLiteral(["Silence of the God Lobster"])))) && (0,dist.get)("_godLobsterFights") < 3 && (0,dist.have)((0,dist.$item)(noncombat_templateObject11 || (noncombat_templateObject11 = noncombat_taggedTemplateLiteral(["God Lobster's Ring"]))))) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(noncombat_templateObject12 || (noncombat_templateObject12 = noncombat_taggedTemplateLiteral(["God Lobster"]))));
    (0,external_kolmafia_.equip)((0,dist.$slot)(noncombat_templateObject13 || (noncombat_templateObject13 = noncombat_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(noncombat_templateObject14 || (noncombat_templateObject14 = noncombat_taggedTemplateLiteral(["God Lobster's Ring"]))));
    uniform();
    defaultKill.setAutoAttack();
    heal();
    (0,external_kolmafia_.use)(3, (0,dist.$item)(noncombat_templateObject15 || (noncombat_templateObject15 = noncombat_taggedTemplateLiteral(["psychokinetic energy blob"]))));
    setChoice(1310, 2);
    (0,external_kolmafia_.visitUrl)("main.php?fightgodlobster=1");
    (0,external_kolmafia_.runCombat)(defaultKill.toString());
    (0,external_kolmafia_.visitUrl)("choice.php");
    (0,external_kolmafia_.runChoice)(-1);
  }
}

function noncombat_testPrep() {
  noncombatOutfit();

  if (noncombat_predictor() > 1) {
    if (!(0,dist.have)((0,dist.$effect)(noncombat_templateObject16 || (noncombat_templateObject16 = noncombat_taggedTemplateLiteral(["Gummed Shoes"]))))) {
      if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(noncombat_templateObject17 || (noncombat_templateObject17 = noncombat_taggedTemplateLiteral(["cop dollar"])))) < 10) (0,external_kolmafia_.cliExecute)("detective solver.ash");
      (0,external_kolmafia_.buy)((0,dist.$coinmaster)(noncombat_templateObject18 || (noncombat_templateObject18 = noncombat_taggedTemplateLiteral(["Precinct Materiel Division"]))), 1, (0,dist.$item)(noncombat_templateObject19 || (noncombat_templateObject19 = noncombat_taggedTemplateLiteral(["shoe gum"]))));
      (0,external_kolmafia_.use)((0,dist.$item)(noncombat_templateObject20 || (noncombat_templateObject20 = noncombat_taggedTemplateLiteral(["shoe gum"]))));
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
var spell_templateObject, spell_templateObject2, spell_templateObject3, spell_templateObject4, spell_templateObject5, spell_templateObject6, spell_templateObject7, spell_templateObject8, spell_templateObject9, spell_templateObject10, spell_templateObject11, spell_templateObject12, spell_templateObject13, spell_templateObject14, spell_templateObject15, spell_templateObject16, spell_templateObject17, spell_templateObject18, spell_templateObject19, spell_templateObject20, spell_templateObject21, spell_templateObject22, spell_templateObject23, spell_templateObject24, spell_templateObject25, spell_templateObject26;

function spell_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var spell_predictor = () => 60 - Math.floor((0,external_kolmafia_.numericModifier)("spell damage") / 50 + 0.001) - Math.floor((0,external_kolmafia_.numericModifier)("spell damage percent") / 50 + 0.001);

function spell_castBuffs() {
  ensureEffect((0,dist.$effect)(spell_templateObject || (spell_templateObject = spell_taggedTemplateLiteral(["Simmering"]))));
  (0,dist.$effects)(spell_templateObject2 || (spell_templateObject2 = spell_taggedTemplateLiteral(["Pisces in the Skyces, Carol of the Hells, Arched Eyebrow of the Archmage, Song of Sauce, We're All Made of Starfish"]))).forEach(effect => ensureEffect(effect));

  if (!(0,dist.get)("_cargoPocketEmptied")) {
    (0,external_kolmafia_.cliExecute)("cargo 177");
    ensureEffect((0,dist.$effect)(spell_templateObject3 || (spell_templateObject3 = spell_taggedTemplateLiteral(["Sigils of Yeg"]))));
  }

  if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(spell_templateObject4 || (spell_templateObject4 = spell_taggedTemplateLiteral(["LOV Elixir #6"])))) > 0) ensureEffect((0,dist.$effect)(spell_templateObject5 || (spell_templateObject5 = spell_taggedTemplateLiteral(["The Magic of LOV"]))));
  if ((0,dist.get)("tomeSummons") < 3) (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(spell_templateObject6 || (spell_templateObject6 = spell_taggedTemplateLiteral(["Summon Sugar Sheets"]))));
  if ((0,dist.have)((0,dist.$item)(spell_templateObject7 || (spell_templateObject7 = spell_taggedTemplateLiteral(["sugar sheet"]))))) (0,external_kolmafia_.create)(1, (0,dist.$item)(spell_templateObject8 || (spell_templateObject8 = spell_taggedTemplateLiteral(["sugar chapeau"]))));
  (0,external_kolmafia_.visitUrl)("shop.php?whichshop=lathe");

  if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(spell_templateObject9 || (spell_templateObject9 = spell_taggedTemplateLiteral(["flimsy hardwood scraps"])))) > 0) {
    (0,external_kolmafia_.create)(1, (0,dist.$item)(spell_templateObject10 || (spell_templateObject10 = spell_taggedTemplateLiteral(["weeping willow wand"]))));
  }

  (0,external_kolmafia_.cliExecute)("briefcase enchantment spell");

  if (!(0,dist.get)("_madTeaParty")) {
    (0,external_kolmafia_.visitUrl)("clan_viplounge.php?action=lookingglass&whichfloor=2");
    (0,external_kolmafia_.cliExecute)("acquire mariachi hat");
    ensureEffect((0,dist.$effect)(spell_templateObject11 || (spell_templateObject11 = spell_taggedTemplateLiteral(["Full Bottle in front of Me"]))));
  }

  (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(spell_templateObject12 || (spell_templateObject12 = spell_taggedTemplateLiteral(["Spirit of Cayenne"]))));

  if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(spell_templateObject13 || (spell_templateObject13 = spell_taggedTemplateLiteral(["flask of baconstone juice"])))) > 0) {
    ensureEffect((0,dist.$effect)(spell_templateObject14 || (spell_templateObject14 = spell_taggedTemplateLiteral(["Baconstoned"]))));
  }
}

function fingies() {
  if (!(0,dist.have)((0,dist.$effect)(spell_templateObject15 || (spell_templateObject15 = spell_taggedTemplateLiteral(["Saucefingers"])))) && (0,external_kolmafia_.myClass)() === (0,dist.$class)(spell_templateObject16 || (spell_templateObject16 = spell_taggedTemplateLiteral(["Pastamancer"]))) && (0,external_kolmafia_.myLevel)() >= 15 && (0,dist.have)((0,dist.$familiar)(spell_templateObject17 || (spell_templateObject17 = spell_taggedTemplateLiteral(["Mini-Adventurer"]))))) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(spell_templateObject18 || (spell_templateObject18 = spell_taggedTemplateLiteral(["Mini-Adventurer"]))));
    horse("dark");
    uniform();
    setChoice(768, 4);
    advMacroAA((0,dist.$location)(spell_templateObject19 || (spell_templateObject19 = spell_taggedTemplateLiteral(["The Dire Warren"]))), dist.Macro.skill((0,dist.$skill)(spell_templateObject20 || (spell_templateObject20 = spell_taggedTemplateLiteral(["Feel Hatred"])))), () => !(0,dist.have)((0,dist.$effect)(spell_templateObject21 || (spell_templateObject21 = spell_taggedTemplateLiteral(["Saucefingers"])))));
  }
}

function shower() {
  (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(spell_templateObject22 || (spell_templateObject22 = spell_taggedTemplateLiteral(["none"]))));

  if (!(0,dist.have)((0,dist.$effect)(spell_templateObject23 || (spell_templateObject23 = spell_taggedTemplateLiteral(["Meteor Showered"])))) && (0,dist.get)("_meteorShowerUses") < 5) {
    uniform();
    setChoice(1387, 3);
    advMacroAA((0,dist.$location)(spell_templateObject24 || (spell_templateObject24 = spell_taggedTemplateLiteral(["The Dire Warren"]))), dist.Macro.skill((0,dist.$skill)(spell_templateObject25 || (spell_templateObject25 = spell_taggedTemplateLiteral(["Meteor Shower"])))).skill((0,dist.$skill)(spell_templateObject26 || (spell_templateObject26 = spell_taggedTemplateLiteral(["Use the Force"])))));
    if ((0,external_kolmafia_.handlingChoice)()) (0,external_kolmafia_.runChoice)(-1);
    (0,dist.set)("_meteorShowerUses", 1 + (0,dist.get)("_meteorShowerUses"));
  }
}

function spell_testPrep() {
  spellOutfit();
}

function spellTest() {
  spell_castBuffs();
  fingies();
  ensureInnerElf();
  shower();
  spell_testPrep();
  return 1 + spell_predictor();
}
;// CONCATENATED MODULE: ./src/stattests.ts
var stattests_templateObject, stattests_templateObject2, stattests_templateObject3, stattests_templateObject4, stattests_templateObject5, stattests_templateObject6, stattests_templateObject7, stattests_templateObject8, stattests_templateObject9, stattests_templateObject10, stattests_templateObject11, stattests_templateObject12, stattests_templateObject13, stattests_templateObject14, stattests_templateObject15, stattests_templateObject16, stattests_templateObject17, stattests_templateObject18, stattests_templateObject19, stattests_templateObject20, stattests_templateObject21, stattests_templateObject22, stattests_templateObject23, stattests_templateObject24, stattests_templateObject25, stattests_templateObject26, stattests_templateObject27, stattests_templateObject28, stattests_templateObject29, stattests_templateObject30, stattests_templateObject31, stattests_templateObject32, stattests_templateObject33, stattests_templateObject34, stattests_templateObject35, stattests_templateObject36, stattests_templateObject37, stattests_templateObject38, stattests_templateObject39, stattests_templateObject40, stattests_templateObject41, stattests_templateObject42, stattests_templateObject43, stattests_templateObject44, stattests_templateObject45, stattests_templateObject46, stattests_templateObject47, stattests_templateObject48, stattests_templateObject49, stattests_templateObject50, stattests_templateObject51, stattests_templateObject52, stattests_templateObject53, stattests_templateObject54, stattests_templateObject55, stattests_templateObject56, stattests_templateObject57;

function stattests_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var musclePredictor = () => 60 - Math.floor(1 / 30 * ((0,external_kolmafia_.myBuffedstat)((0,dist.$stat)(stattests_templateObject || (stattests_templateObject = stattests_taggedTemplateLiteral(["muscle"])))) - (0,external_kolmafia_.myBasestat)((0,dist.$stat)(stattests_templateObject2 || (stattests_templateObject2 = stattests_taggedTemplateLiteral(["mysticality"]))))));

function musclebuffs() {
  (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(stattests_templateObject3 || (stattests_templateObject3 = stattests_taggedTemplateLiteral(["Bind Undead Elbow Macaroni"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject4 || (stattests_templateObject4 = stattests_taggedTemplateLiteral(["Big"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject5 || (stattests_templateObject5 = stattests_taggedTemplateLiteral(["Song of Bravado"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject6 || (stattests_templateObject6 = stattests_taggedTemplateLiteral(["Rage of the Reindeer"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject7 || (stattests_templateObject7 = stattests_taggedTemplateLiteral(["Quiet Determination"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject8 || (stattests_templateObject8 = stattests_taggedTemplateLiteral(["Disdain of the War Snapper"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject9 || (stattests_templateObject9 = stattests_taggedTemplateLiteral(["Feeling Excited"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject10 || (stattests_templateObject10 = stattests_taggedTemplateLiteral(["The Power of LOV"]))));

  if (!(0,dist.have)((0,dist.$effect)(stattests_templateObject11 || (stattests_templateObject11 = stattests_taggedTemplateLiteral(["Go Get 'Em, Tiger!"]))))) {
    (0,external_kolmafia_.retrieveItem)((0,dist.$item)(stattests_templateObject12 || (stattests_templateObject12 = stattests_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))));
    (0,external_kolmafia_.use)(1, (0,dist.$item)(stattests_templateObject13 || (stattests_templateObject13 = stattests_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))));
  }
}

function muscleTestPrep() {
  muscleOutfit();

  for (var _i = 0, _arr = [() => {
    if (!(0,dist.get)("")) ensureEffect((0,dist.$effect)(stattests_templateObject14 || (stattests_templateObject14 = stattests_taggedTemplateLiteral(["Lack of Body-Building"]))));
  }, // will stay on all the way to weapon damage.
  () => ensureEffect((0,dist.$effect)(stattests_templateObject15 || (stattests_templateObject15 = stattests_taggedTemplateLiteral(["Ham-Fisted"])))), () => ensureInnerElf()]; _i < _arr.length; _i++) {
    var increaser = _arr[_i];
    if (musclePredictor() > 1) increaser();
  }
}

function muscleTest() {
  musclebuffs();
  muscleTestPrep();
  return musclePredictor();
}

var mystPredictor = () => 60 - Math.floor(1 / 30 * ((0,external_kolmafia_.myBuffedstat)((0,dist.$stat)(stattests_templateObject16 || (stattests_templateObject16 = stattests_taggedTemplateLiteral(["mysticality"])))) - (0,external_kolmafia_.myBasestat)((0,dist.$stat)(stattests_templateObject17 || (stattests_templateObject17 = stattests_taggedTemplateLiteral(["mysticality"]))))));

function mystbuffs() {
  ensureEffect((0,dist.$effect)(stattests_templateObject18 || (stattests_templateObject18 = stattests_taggedTemplateLiteral(["Feeling Excited"]))));
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

var moxPredictor = () => 60 - Math.floor(1 / 30 * ((0,external_kolmafia_.myBuffedstat)((0,dist.$stat)(stattests_templateObject19 || (stattests_templateObject19 = stattests_taggedTemplateLiteral(["moxie"])))) - (0,external_kolmafia_.myBasestat)((0,dist.$stat)(stattests_templateObject20 || (stattests_templateObject20 = stattests_taggedTemplateLiteral(["mysticality"]))))));

function moxBuffs() {
  if ((0,dist.have)((0,dist.$item)(stattests_templateObject21 || (stattests_templateObject21 = stattests_taggedTemplateLiteral(["magical sausage casing"]))))) {
    (0,external_kolmafia_.create)(1, (0,dist.$item)(stattests_templateObject22 || (stattests_templateObject22 = stattests_taggedTemplateLiteral(["magical sausage"]))));
  }

  if ((0,dist.have)((0,dist.$item)(stattests_templateObject23 || (stattests_templateObject23 = stattests_taggedTemplateLiteral(["magical sausage"]))))) {
    (0,external_kolmafia_.eat)(1, (0,dist.$item)(stattests_templateObject24 || (stattests_templateObject24 = stattests_taggedTemplateLiteral(["magical sausage"]))));
  }

  ensureEffect((0,dist.$effect)(stattests_templateObject25 || (stattests_templateObject25 = stattests_taggedTemplateLiteral(["Feeling Excited"]))));
  (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(stattests_templateObject26 || (stattests_templateObject26 = stattests_taggedTemplateLiteral(["Bind Penne Dreadful"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject27 || (stattests_templateObject27 = stattests_taggedTemplateLiteral(["Pomp & Circumsands"]))));
  (0,external_kolmafia_.use)(1, (0,dist.$item)(stattests_templateObject28 || (stattests_templateObject28 = stattests_taggedTemplateLiteral(["Bird-a-Day calendar"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject29 || (stattests_templateObject29 = stattests_taggedTemplateLiteral(["Blessing of the Bird"]))));
  if (!(0,dist.get)("_favoriteBirdVisited")) (0,external_kolmafia_.useSkill)((0,dist.$skill)(stattests_templateObject30 || (stattests_templateObject30 = stattests_taggedTemplateLiteral(["Visit your Favorite Bird"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject31 || (stattests_templateObject31 = stattests_taggedTemplateLiteral(["Quiet Desperation"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject32 || (stattests_templateObject32 = stattests_taggedTemplateLiteral(["Disco Fever"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject33 || (stattests_templateObject33 = stattests_taggedTemplateLiteral(["Blubbered Up"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject34 || (stattests_templateObject34 = stattests_taggedTemplateLiteral(["Mariachi Mood"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject35 || (stattests_templateObject35 = stattests_taggedTemplateLiteral(["Disco State of Mind"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject36 || (stattests_templateObject36 = stattests_taggedTemplateLiteral(["Disco Smirk"]))));
  (0,external_kolmafia_.use)((0,external_kolmafia_.availableAmount)((0,dist.$item)(stattests_templateObject37 || (stattests_templateObject37 = stattests_taggedTemplateLiteral(["rhinestone"])))), (0,dist.$item)(stattests_templateObject38 || (stattests_templateObject38 = stattests_taggedTemplateLiteral(["rhinestone"]))));

  if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(stattests_templateObject39 || (stattests_templateObject39 = stattests_taggedTemplateLiteral(["dollop of barbecue sauce"])))) > 0) {
    (0,external_kolmafia_.use)(1, (0,dist.$item)(stattests_templateObject40 || (stattests_templateObject40 = stattests_taggedTemplateLiteral(["dollop of barbecue sauce"]))));
  }

  if ((0,external_kolmafia_.itemAmount)((0,dist.$item)(stattests_templateObject41 || (stattests_templateObject41 = stattests_taggedTemplateLiteral(["confiscated love note"])))) > 0) {
    (0,external_kolmafia_.use)(1, (0,dist.$item)(stattests_templateObject42 || (stattests_templateObject42 = stattests_taggedTemplateLiteral(["confiscated love note"]))));
  }

  if (!(0,dist.have)((0,dist.$effect)(stattests_templateObject43 || (stattests_templateObject43 = stattests_taggedTemplateLiteral(["Unrunnable Face"]))))) {
    tryUse(1, (0,dist.$item)(stattests_templateObject44 || (stattests_templateObject44 = stattests_taggedTemplateLiteral(["runproof mascara"]))));
  }
}

function moxTestPrep() {
  (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(stattests_templateObject45 || (stattests_templateObject45 = stattests_taggedTemplateLiteral(["Left-Hand Man"]))));
  (0,external_kolmafia_.maximize)("moxie", false);

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
  (0,external_kolmafia_.useSkill)(1, (0,dist.$skill)(stattests_templateObject46 || (stattests_templateObject46 = stattests_taggedTemplateLiteral(["Bind Undead Elbow Macaroni"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject47 || (stattests_templateObject47 = stattests_taggedTemplateLiteral(["Big"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject48 || (stattests_templateObject48 = stattests_taggedTemplateLiteral(["Song of Starch"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject49 || (stattests_templateObject49 = stattests_taggedTemplateLiteral(["Rage of the Reindeer"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject50 || (stattests_templateObject50 = stattests_taggedTemplateLiteral(["Quiet Determination"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject51 || (stattests_templateObject51 = stattests_taggedTemplateLiteral(["Disdain of the War Snapper"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject52 || (stattests_templateObject52 = stattests_taggedTemplateLiteral(["Feeling Excited"]))));
  ensureEffect((0,dist.$effect)(stattests_templateObject53 || (stattests_templateObject53 = stattests_taggedTemplateLiteral(["The Power of LOV"]))));

  if (!(0,dist.have)((0,dist.$effect)(stattests_templateObject54 || (stattests_templateObject54 = stattests_taggedTemplateLiteral(["Go Get 'Em, Tiger!"]))))) {
    (0,external_kolmafia_.retrieveItem)((0,dist.$item)(stattests_templateObject55 || (stattests_templateObject55 = stattests_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))));
    (0,external_kolmafia_.use)(1, (0,dist.$item)(stattests_templateObject56 || (stattests_templateObject56 = stattests_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))));
  }
}

var hpPredictor = () => 60 - Math.floor(((0,external_kolmafia_.myMaxhp)() - (0,external_kolmafia_.myBuffedstat)((0,dist.$stat)(stattests_templateObject57 || (stattests_templateObject57 = stattests_taggedTemplateLiteral(["muscle"])))) - 3) / 30);

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






var weapon_predictor = () => 60 - Math.floor((0,external_kolmafia_.numericModifier)("weapon damage") / 25 + 0.001) - Math.floor((0,external_kolmafia_.numericModifier)("weapon damage percent") / 25 + 0.001);

function getCrushed() {
  if (!(0,dist.have)((0,dist.$effect)(weapon_templateObject || (weapon_templateObject = weapon_taggedTemplateLiteral(["Do You Crush What I Crush?"]))))) {
    if ((0,dist.have)((0,dist.$effect)(weapon_templateObject2 || (weapon_templateObject2 = weapon_taggedTemplateLiteral(["Holiday Yoked"])))) && (0,dist.have)((0,dist.$item)(weapon_templateObject3 || (weapon_templateObject3 = weapon_taggedTemplateLiteral(["soft green echo eyedrop antidote"]))))) {
      (0,dist.uneffect)((0,dist.$effect)(weapon_templateObject4 || (weapon_templateObject4 = weapon_taggedTemplateLiteral(["Holiday Yoked"]))));
    }

    if (!(0,dist.have)((0,dist.$effect)(weapon_templateObject5 || (weapon_templateObject5 = weapon_taggedTemplateLiteral(["Holiday Yoked"]))))) {
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(weapon_templateObject6 || (weapon_templateObject6 = weapon_taggedTemplateLiteral(["Ghost of Crimbo Carols"]))));
      uniform();

      if (horsery().includes("pale")) {
        horse("dark");
      }

      advMacroAA((0,dist.$location)(weapon_templateObject7 || (weapon_templateObject7 = weapon_taggedTemplateLiteral(["The Dire Warren"]))), dist.Macro.skill((0,dist.$skill)(weapon_templateObject8 || (weapon_templateObject8 = weapon_taggedTemplateLiteral(["Feel Hatred"])))));
    }
  }
}

function weapon_castBuffs() {
  (0,dist.$effects)(weapon_templateObject9 || (weapon_templateObject9 = weapon_taggedTemplateLiteral(["Carol of the Bulls, Song of the North, Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, Tenacity of the Snapper, Billiards Belligerence, Blessing of the Bird"]))).forEach(effect => ensureEffect(effect));
  ensureEffect((0,dist.$effect)(weapon_templateObject10 || (weapon_templateObject10 = weapon_taggedTemplateLiteral(["Frenzied, Bloody"]))));
  if ((0,dist.have)((0,dist.$item)(weapon_templateObject11 || (weapon_templateObject11 = weapon_taggedTemplateLiteral(["LOV Elixir #3"]))))) (0,external_kolmafia_.use)((0,dist.$item)(weapon_templateObject12 || (weapon_templateObject12 = weapon_taggedTemplateLiteral(["LOV Elixir #3"]))));
  tryHead((0,dist.$effect)(weapon_templateObject13 || (weapon_templateObject13 = weapon_taggedTemplateLiteral(["Lack of Body-Building"]))));
}

function forceSpit() {
  if (!(0,dist.get)("_photocopyUsed")) {
    uniform();
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(weapon_templateObject14 || (weapon_templateObject14 = weapon_taggedTemplateLiteral(["Melodramedary"]))));
    setChoice(1387, 3);
    dist.Macro.trySkill((0,dist.$skill)(weapon_templateObject15 || (weapon_templateObject15 = weapon_taggedTemplateLiteral(["%fn, spit on me!"])))).skill((0,dist.$skill)(weapon_templateObject16 || (weapon_templateObject16 = weapon_taggedTemplateLiteral(["Use the Force"])))).setAutoAttack();
    setClan("Beldungeon");
    fax((0,dist.$monster)(weapon_templateObject17 || (weapon_templateObject17 = weapon_taggedTemplateLiteral(["ungulith"]))));
    setClan((0,dist.get)("phccs_mainClan", "Alliance From Heck"));
    (0,external_kolmafia_.use)((0,dist.$item)(weapon_templateObject18 || (weapon_templateObject18 = weapon_taggedTemplateLiteral(["photocopied monster"]))));
    if ((0,external_kolmafia_.handlingChoice)()) (0,external_kolmafia_.runChoice)(-1);
  }
}

function kungFuMeteors() {
  if (!(0,dist.have)((0,dist.$effect)(weapon_templateObject19 || (weapon_templateObject19 = weapon_taggedTemplateLiteral(["Meteor Showered"])))) && (0,dist.get)("_meteorShowerUses") < 5) {
    uniform();

    if ((0,dist.have)((0,dist.$familiar)(weapon_templateObject20 || (weapon_templateObject20 = weapon_taggedTemplateLiteral(["Disembodied Hand"]))))) {
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(weapon_templateObject21 || (weapon_templateObject21 = weapon_taggedTemplateLiteral(["Disembodied Hand"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(weapon_templateObject22 || (weapon_templateObject22 = weapon_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(weapon_templateObject23 || (weapon_templateObject23 = weapon_taggedTemplateLiteral(["none"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(weapon_templateObject24 || (weapon_templateObject24 = weapon_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(weapon_templateObject25 || (weapon_templateObject25 = weapon_taggedTemplateLiteral(["none"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(weapon_templateObject26 || (weapon_templateObject26 = weapon_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(weapon_templateObject27 || (weapon_templateObject27 = weapon_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
    } else {
      useDefaultFamiliar(false);
    }

    setChoice(1387, 3);
    advMacroAA((0,dist.$location)(weapon_templateObject28 || (weapon_templateObject28 = weapon_taggedTemplateLiteral(["The Neverending Party"]))), dist.Macro.skill((0,dist.$skill)(weapon_templateObject29 || (weapon_templateObject29 = weapon_taggedTemplateLiteral(["Meteor Shower"])))).skill((0,dist.$skill)(weapon_templateObject30 || (weapon_templateObject30 = weapon_taggedTemplateLiteral(["Use the Force"])))));
    if ((0,external_kolmafia_.handlingChoice)()) (0,external_kolmafia_.runChoice)(-1);
    (0,dist.set)("_meteorShowerUses", 1 + (0,dist.get)("_meteorShowerUses"));
  }
}

function weapon_testPrep() {
  if ((0,dist.have)((0,dist.$item)(weapon_templateObject31 || (weapon_templateObject31 = weapon_taggedTemplateLiteral(["corrupted marrow"]))))) (0,external_kolmafia_.use)((0,dist.$item)(weapon_templateObject32 || (weapon_templateObject32 = weapon_taggedTemplateLiteral(["corrupted marrow"]))));
  if (!(0,dist.get)("_bowleggedSwaggerUsed")) (0,external_kolmafia_.useSkill)((0,dist.$skill)(weapon_templateObject33 || (weapon_templateObject33 = weapon_taggedTemplateLiteral(["Bow-Legged Swagger"]))));
  (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(weapon_templateObject34 || (weapon_templateObject34 = weapon_taggedTemplateLiteral(["Disembodied Hand"]))));
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










 //preamble

if ((0,external_kolmafia_.myPathId)() !== 25) (0,external_kolmafia_.abort)();
(0,external_kolmafia_.visitUrl)("council.php");
(0,external_kolmafia_.cliExecute)("ccs twiddle");
PropertyManager.set({
  customCombatScript: "twiddle",
  battleAction: "custom combat script",
  dontStopForCounters: true,
  hpAutoRecovery: undefined,
  hpAutoRecoveryTarget: -0.5,
  mpAutoRecovery: undefined,
  mpAutoRecoveryTarget: -0.5
});
var startTime = (0,external_kolmafia_.gametimeToInt)();

try {
  testWrapper("wire-coiling", Test.COIL_WIRE, coilWire);
  if ((0,external_kolmafia_.myLevel)() < 13) levelUp();
  testWrapper("moxie", Test.MOX, moxTest);
  testWrapper("HP", Test.HP, HPTest);
  testWrapper("muscle", Test.MUS, muscleTest);
  testWrapper("mysticality", Test.MYS, mystTest);
  testWrapper("item", Test.ITEM, itemTest);
  testWrapper("hot res", Test.HOT_RES, hotTest);
  testWrapper("noncombat", Test.NONCOMBAT, noncombatTest);
  testWrapper("familiar", Test.FAMILIAR, familiarTest);
  testWrapper("weapon damage", Test.WEAPON, weaponTest);
  testWrapper("spell damage", Test.SPELL, spellTest);
} finally {
  tests.forEach(testDuration => {
    (0,external_kolmafia_.print)("We expected the ".concat(testDuration.testName, " test to take ").concat(testDuration.turnPrediction, " turns, and it cost ").concat(testDuration.turnCost, " turns."), "blue");
  });
  (0,external_kolmafia_.print)("This loop took ".concat(convertMilliseconds((0,external_kolmafia_.gametimeToInt)() - startTime), ", assuming it ran contiguously. Otherwise, this run of the program lasted that much time. Hope whatever number you see is good!"), "red");
  (0,external_kolmafia_.setAutoAttack)(0);
  PropertyManager.resetAll();
}

/***/ }),

/***/ 1664:
/***/ ((module) => {

"use strict";
module.exports = require("kolmafia");

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
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = 2817);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;