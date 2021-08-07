(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/core-js/es/array/flat-map.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/es/array/flat-map.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es.array.flat-map */ "../node_modules/core-js/modules/es.array.flat-map.js");

__webpack_require__(/*! ../../modules/es.array.unscopables.flat-map */ "../node_modules/core-js/modules/es.array.unscopables.flat-map.js");

var entryUnbind = __webpack_require__(/*! ../../internals/entry-unbind */ "../node_modules/core-js/internals/entry-unbind.js");

module.exports = entryUnbind('Array', 'flatMap');

/***/ }),

/***/ "../node_modules/core-js/es/object/entries.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/es/object/entries.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es.object.entries */ "../node_modules/core-js/modules/es.object.entries.js");

var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/core-js/internals/path.js");

module.exports = path.Object.entries;

/***/ }),

/***/ "../node_modules/core-js/es/object/from-entries.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/es/object/from-entries.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! ../../modules/es.object.from-entries */ "../node_modules/core-js/modules/es.object.from-entries.js");

var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/core-js/internals/path.js");

module.exports = path.Object.fromEntries;

/***/ }),

/***/ "../node_modules/core-js/es/object/values.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/es/object/values.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es.object.values */ "../node_modules/core-js/modules/es.object.values.js");

var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/core-js/internals/path.js");

module.exports = path.Object.values;

/***/ }),

/***/ "../node_modules/core-js/features/array/flat-map.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/features/array/flat-map.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(/*! ../../es/array/flat-map */ "../node_modules/core-js/es/array/flat-map.js");

module.exports = parent;

/***/ }),

/***/ "../node_modules/core-js/features/object/entries.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/features/object/entries.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(/*! ../../es/object/entries */ "../node_modules/core-js/es/object/entries.js");

module.exports = parent;

/***/ }),

/***/ "../node_modules/core-js/features/object/from-entries.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/features/object/from-entries.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(/*! ../../es/object/from-entries */ "../node_modules/core-js/es/object/from-entries.js");

module.exports = parent;

/***/ }),

/***/ "../node_modules/core-js/features/object/values.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/features/object/values.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(/*! ../../es/object/values */ "../node_modules/core-js/es/object/values.js");

module.exports = parent;

/***/ }),

/***/ "../node_modules/core-js/internals/a-function.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/a-function.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

/***/ }),

/***/ "../node_modules/core-js/internals/a-possible-prototype.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/a-possible-prototype.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  }

  return it;
};

/***/ }),

/***/ "../node_modules/core-js/internals/add-to-unscopables.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/internals/add-to-unscopables.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js/internals/object-create.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");

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

/***/ "../node_modules/core-js/internals/an-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/an-object.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

/***/ }),

/***/ "../node_modules/core-js/internals/array-includes.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/array-includes.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../node_modules/core-js/internals/to-absolute-index.js"); // `Array.prototype.{ indexOf, includes }` methods implementation


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

/***/ "../node_modules/core-js/internals/array-species-create.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/array-species-create.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js/internals/is-array.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

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

/***/ "../node_modules/core-js/internals/classof-raw.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/classof-raw.js ***!
  \********************************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "../node_modules/core-js/internals/classof.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/classof.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../node_modules/core-js/internals/to-string-tag-support.js");

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

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

/***/ "../node_modules/core-js/internals/copy-constructor-properties.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/internals/copy-constructor-properties.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");

var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../node_modules/core-js/internals/own-keys.js");

var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");

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

/***/ "../node_modules/core-js/internals/correct-prototype-getter.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/correct-prototype-getter.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

  return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),

/***/ "../node_modules/core-js/internals/create-iterator-constructor.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/internals/create-iterator-constructor.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "../node_modules/core-js/internals/iterators-core.js").IteratorPrototype;

var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js/internals/object-create.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js/internals/set-to-string-tag.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js/internals/iterators.js");

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

/***/ "../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "../node_modules/core-js/internals/create-property-descriptor.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/internals/create-property-descriptor.js ***!
  \***********************************************************************/
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

/***/ "../node_modules/core-js/internals/create-property.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/create-property.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

/***/ }),

/***/ "../node_modules/core-js/internals/define-iterator.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/define-iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");

var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../node_modules/core-js/internals/create-iterator-constructor.js");

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../node_modules/core-js/internals/object-get-prototype-of.js");

var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../node_modules/core-js/internals/object-set-prototype-of.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js/internals/set-to-string-tag.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js/internals/iterators.js");

var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../node_modules/core-js/internals/iterators-core.js");

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

/***/ "../node_modules/core-js/internals/descriptors.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/descriptors.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js"); // Detect IE8's incomplete defineProperty implementation


module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function get() {
      return 7;
    }
  })[1] != 7;
});

/***/ }),

/***/ "../node_modules/core-js/internals/document-create-element.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/document-create-element.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var document = global.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),

/***/ "../node_modules/core-js/internals/engine-user-agent.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-user-agent.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';

/***/ }),

/***/ "../node_modules/core-js/internals/engine-v8-version.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-v8-version.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../node_modules/core-js/internals/engine-user-agent.js");

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

/***/ "../node_modules/core-js/internals/entry-unbind.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/entry-unbind.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/core-js/internals/function-bind-context.js");

var call = Function.call;

module.exports = function (CONSTRUCTOR, METHOD, length) {
  return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);
};

/***/ }),

/***/ "../node_modules/core-js/internals/enum-bug-keys.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/enum-bug-keys.js ***!
  \**********************************************************/
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ "../node_modules/core-js/internals/export.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/export.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../node_modules/core-js/internals/set-global.js");

var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../node_modules/core-js/internals/copy-constructor-properties.js");

var isForced = __webpack_require__(/*! ../internals/is-forced */ "../node_modules/core-js/internals/is-forced.js");
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
      if (_typeof(sourceProperty) === _typeof(targetProperty)) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

/***/ }),

/***/ "../node_modules/core-js/internals/fails.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/internals/fails.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ "../node_modules/core-js/internals/flatten-into-array.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/internals/flatten-into-array.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js/internals/is-array.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/core-js/internals/function-bind-context.js"); // `FlattenIntoArray` abstract operation
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

/***/ "../node_modules/core-js/internals/function-bind-context.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/function-bind-context.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js/internals/a-function.js"); // optional / simple context binding


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

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "../node_modules/core-js/internals/get-built-in.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/get-built-in.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(/*! ../internals/path */ "../node_modules/core-js/internals/path.js");

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var aFunction = function aFunction(variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),

/***/ "../node_modules/core-js/internals/get-iterator-method.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/get-iterator-method.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/core-js/internals/classof.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js/internals/iterators.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "../node_modules/core-js/internals/global.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/global.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var check = function check(it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line es/no-global-this -- safe
check((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == 'object' && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check((typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self) || check((typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) == 'object' && __webpack_require__.g) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

/***/ }),

/***/ "../node_modules/core-js/internals/has.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/internals/has.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};

/***/ }),

/***/ "../node_modules/core-js/internals/hidden-keys.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/hidden-keys.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ "../node_modules/core-js/internals/html.js":
/*!*************************************************!*\
  !*** ../node_modules/core-js/internals/html.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');

/***/ }),

/***/ "../node_modules/core-js/internals/ie8-dom-define.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/ie8-dom-define.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js/internals/document-create-element.js"); // Thank's IE8 for his funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "../node_modules/core-js/internals/indexed-object.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/indexed-object.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),

/***/ "../node_modules/core-js/internals/inspect-source.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/inspect-source.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

/***/ }),

/***/ "../node_modules/core-js/internals/internal-state.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/internal-state.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../node_modules/core-js/internals/native-weak-map.js");

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

var objectHas = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");

var shared = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

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

/***/ "../node_modules/core-js/internals/is-array-iterator-method.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/is-array-iterator-method.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype; // check on default Array iterator

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),

/***/ "../node_modules/core-js/internals/is-array.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/is-array.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js"); // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe


module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

/***/ }),

/***/ "../node_modules/core-js/internals/is-forced.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-forced.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

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

/***/ "../node_modules/core-js/internals/is-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-object.js ***!
  \******************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "../node_modules/core-js/internals/is-pure.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/is-pure.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = false;

/***/ }),

/***/ "../node_modules/core-js/internals/iterate.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/iterate.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../node_modules/core-js/internals/is-array-iterator-method.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/core-js/internals/function-bind-context.js");

var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../node_modules/core-js/internals/get-iterator-method.js");

var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "../node_modules/core-js/internals/iterator-close.js");

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

    if (_typeof(result) == 'object' && result && result instanceof Result) return result;
  }

  return new Result(false);
};

/***/ }),

/***/ "../node_modules/core-js/internals/iterator-close.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/iterator-close.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];

  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};

/***/ }),

/***/ "../node_modules/core-js/internals/iterators-core.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/iterators-core.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../node_modules/core-js/internals/object-get-prototype-of.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");

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

/***/ "../node_modules/core-js/internals/iterators.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/iterators.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ "../node_modules/core-js/internals/native-symbol.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/native-symbol.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../node_modules/core-js/internals/engine-v8-version.js");

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js"); // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),

/***/ "../node_modules/core-js/internals/native-weak-map.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/native-weak-map.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

/***/ }),

/***/ "../node_modules/core-js/internals/object-create.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/object-create.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../node_modules/core-js/internals/object-define-properties.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

var html = __webpack_require__(/*! ../internals/html */ "../node_modules/core-js/internals/html.js");

var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js/internals/document-create-element.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");

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

/***/ "../node_modules/core-js/internals/object-define-properties.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-define-properties.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/core-js/internals/object-keys.js"); // `Object.defineProperties` method
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

/***/ "../node_modules/core-js/internals/object-define-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-define-property.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js/internals/ie8-dom-define.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js"); // eslint-disable-next-line es/no-object-defineproperty -- safe


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

/***/ "../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");

var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/core-js/internals/object-property-is-enumerable.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js");

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js/internals/ie8-dom-define.js"); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


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

/***/ "../node_modules/core-js/internals/object-get-own-property-names.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-names.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/core-js/internals/object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "../node_modules/core-js/internals/object-get-prototype-of.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-prototype-of.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");

var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../node_modules/core-js/internals/correct-prototype-getter.js");

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

/***/ "../node_modules/core-js/internals/object-keys-internal.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/object-keys-internal.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");

var indexOf = __webpack_require__(/*! ../internals/array-includes */ "../node_modules/core-js/internals/array-includes.js").indexOf;

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

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

/***/ "../node_modules/core-js/internals/object-keys.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/object-keys.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/core-js/internals/object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js"); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ "../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \**************************************************************************/
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

/***/ "../node_modules/core-js/internals/object-set-prototype-of.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-set-prototype-of.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../node_modules/core-js/internals/a-possible-prototype.js"); // `Object.setPrototypeOf` method
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

/***/ "../node_modules/core-js/internals/object-to-array.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/object-to-array.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");

var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/core-js/internals/object-keys.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");

var propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/core-js/internals/object-property-is-enumerable.js").f; // `Object.{ entries, values }` methods implementation


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

/***/ "../node_modules/core-js/internals/own-keys.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/own-keys.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");

var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/core-js/internals/object-get-own-property-names.js");

var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../node_modules/core-js/internals/object-get-own-property-symbols.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js"); // all object keys, includes non-enumerable and symbols


module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ "../node_modules/core-js/internals/path.js":
/*!*************************************************!*\
  !*** ../node_modules/core-js/internals/path.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

module.exports = global;

/***/ }),

/***/ "../node_modules/core-js/internals/redefine.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/redefine.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../node_modules/core-js/internals/set-global.js");

var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../node_modules/core-js/internals/inspect-source.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js");

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

/***/ "../node_modules/core-js/internals/require-object-coercible.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/require-object-coercible.js ***!
  \*********************************************************************/
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ "../node_modules/core-js/internals/set-global.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/set-global.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),

/***/ "../node_modules/core-js/internals/set-to-string-tag.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/set-to-string-tag.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js").f;

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

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

/***/ "../node_modules/core-js/internals/shared-key.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/shared-key.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");

var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),

/***/ "../node_modules/core-js/internals/shared-store.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/shared-store.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
module.exports = store;

/***/ }),

/***/ "../node_modules/core-js/internals/shared.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/shared.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");

var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "../node_modules/core-js/internals/to-absolute-index.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-absolute-index.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ "../node_modules/core-js/internals/to-indexed-object.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-indexed-object.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js/internals/indexed-object.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ "../node_modules/core-js/internals/to-integer.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/to-integer.js ***!
  \*******************************************************/
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger

module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),

/***/ "../node_modules/core-js/internals/to-length.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-length.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/core-js/internals/to-integer.js");

var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),

/***/ "../node_modules/core-js/internals/to-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-object.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js"); // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject


module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ "../node_modules/core-js/internals/to-primitive.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/to-primitive.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js"); // `ToPrimitive` abstract operation
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

/***/ "../node_modules/core-js/internals/to-string-tag-support.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/to-string-tag-support.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),

/***/ "../node_modules/core-js/internals/uid.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/internals/uid.js ***!
  \************************************************/
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),

/***/ "../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL && !Symbol.sham && _typeof(Symbol.iterator) == 'symbol';

/***/ }),

/***/ "../node_modules/core-js/internals/well-known-symbol.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/well-known-symbol.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");

var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../node_modules/core-js/internals/native-symbol.js");

var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var _Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? _Symbol : _Symbol && _Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(_Symbol, name)) {
      WellKnownSymbolsStore[name] = _Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  }

  return WellKnownSymbolsStore[name];
};

/***/ }),

/***/ "../node_modules/core-js/modules/es.array.flat-map.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.flat-map.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");

var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ "../node_modules/core-js/internals/flatten-into-array.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");

var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js/internals/a-function.js");

var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../node_modules/core-js/internals/array-species-create.js"); // `Array.prototype.flatMap` method
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

/***/ "../node_modules/core-js/modules/es.array.iterator.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");

var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../node_modules/core-js/internals/add-to-unscopables.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js/internals/iterators.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js");

var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../node_modules/core-js/internals/define-iterator.js");

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

/***/ "../node_modules/core-js/modules/es.array.unscopables.flat-map.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.unscopables.flat-map.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../node_modules/core-js/internals/add-to-unscopables.js"); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables


addToUnscopables('flatMap');

/***/ }),

/***/ "../node_modules/core-js/modules/es.object.entries.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.entries.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");

var $entries = __webpack_require__(/*! ../internals/object-to-array */ "../node_modules/core-js/internals/object-to-array.js").entries; // `Object.entries` method
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

/***/ "../node_modules/core-js/modules/es.object.from-entries.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.from-entries.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");

var iterate = __webpack_require__(/*! ../internals/iterate */ "../node_modules/core-js/internals/iterate.js");

var createProperty = __webpack_require__(/*! ../internals/create-property */ "../node_modules/core-js/internals/create-property.js"); // `Object.fromEntries` method
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

/***/ "../node_modules/core-js/modules/es.object.values.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.values.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");

var $values = __webpack_require__(/*! ../internals/object-to-array */ "../node_modules/core-js/internals/object-to-array.js").values; // `Object.values` method
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

/***/ "../node_modules/libram/dist/Clan.js":
/*!*******************************************!*\
  !*** ../node_modules/libram/dist/Clan.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (_typeof(args[args.length - 1]) !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Clan = exports.ClanError = void 0;

__webpack_require__(/*! core-js/features/array/flat-map */ "../node_modules/core-js/features/array/flat-map.js");

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var lib_1 = __webpack_require__(/*! ./lib */ "../node_modules/libram/dist/lib.js");

var logger_1 = __importDefault(__webpack_require__(/*! ./logger */ "../node_modules/libram/dist/logger.js"));

var utils_1 = __webpack_require__(/*! ./utils */ "../node_modules/libram/dist/utils.js");

var ClanError =
/** @class */
function (_super) {
  __extends(ClanError, _super);

  function ClanError(message, reason) {
    var _this = _super.call(this, message) || this;

    _this.reason = reason;
    Object.setPrototypeOf(_this, ClanError.prototype);
    return _this;
  }

  return ClanError;
}(Error);

exports.ClanError = ClanError; // It would be fantastic to have this function properly typed
// But until someone can work out how to do it, it gets the
// comment blocks of shame

/* eslint-disable */

function validate(target, propertyName, descriptor) {
  if (!(descriptor === null || descriptor === void 0 ? void 0 : descriptor.value)) return;
  var method = descriptor.value; // @ts-ignore

  descriptor.value = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    } // @ts-ignore


    if (this.id !== kolmafia_1.getClanId()) {
      throw new Error("You are no longer a member of this clan");
    }

    return method.apply(this, args);
  };
}
/* eslint-enable */


var clanIdCache = {};

var toPlayerId = function toPlayerId(player) {
  return typeof player === "string" ? kolmafia_1.getPlayerId(player) : player;
};

var LOG_FAX_PATTERN = /*#__PURE__*/_wrapRegExp(/([0-9]{2}\/[0-9]{2}\/[0-9]{2}, [0-9]{2}:[0-9]{2}(?:AM|PM): )<a (?:(?!>)[\s\S])+>((?:(?!<)[\s\S])+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
});

var WHITELIST_DEGREE_PATTERN = /*#__PURE__*/_wrapRegExp(/(.*?) \(\xB0([0-9]+)\)/, {
  name: 1,
  degree: 2
});

var Clan =
/** @class */
function () {
  function Clan(id, name) {
    this.id = id;
    this.name = name;
  }

  Clan._join = function (id) {
    var result = kolmafia_1.visitUrl("showclan.php?recruiter=1&whichclan=" + id + "&pwd&whichclan=" + id + "&action=joinclan&apply=Apply+to+this+Clan&confirm=on");

    if (!result.includes("clanhalltop.gif")) {
      throw new Error("Could not join clan");
    }

    return Clan.get();
  };

  Clan._withStash = function (borrowFn, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  returnFn, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback) {
    var borrowed = borrowFn();
    var map = utils_1.arrayToCountedMap(borrowed);

    try {
      return callback(borrowed);
    } finally {
      if (map.size > 0) {
        var returned_1 = utils_1.arrayToCountedMap(returnFn(borrowed));
        map.forEach(function (quantity, item) {
          var remaining = quantity - (returned_1.get(item) || 0);

          if (remaining > 0) {
            map.set(item, remaining);
          } else {
            map["delete"](item);
          }
        });

        if (map.size > 0) {
          logger_1["default"].error("Failed to return <b>" + utils_1.countedMapToString(map) + "</b> to <b>" + this.name + "</b> stash");
        }
      }
    }
  };
  /**
   * Join a clan and return its instance
   * @param clanIdOrName Clan id or name
   */


  Clan.join = function (clanIdOrName) {
    var clanId;

    if (typeof clanIdOrName === "string") {
      var clanName_1 = clanIdOrName.toLowerCase();

      if (clanName_1 === kolmafia_1.getClanName().toLowerCase()) {
        return Clan.get();
      }

      if (!(clanName_1 in clanIdCache)) {
        var clan = Clan.getWhitelisted().find(function (c) {
          return c.name.toLowerCase() === clanName_1;
        });

        if (!clan) {
          throw new Error("Player is not whitelisted to clan");
        }

        clanIdCache[clanName_1] = clan.id;
      }

      clanId = clanIdCache[clanName_1];
    } else {
      clanId = clanIdOrName;

      if (clanId === kolmafia_1.getClanId()) {
        return Clan.get();
      }
    }

    return Clan._join(clanId);
  };
  /**
   * Execute callback as a member of a clan
   * and then restore prior membership
   * @param clanIdOrName Clan id or name
   */


  Clan["with"] = function (clanIdOrName, callback) {
    var startingClan = Clan.get();
    var clan = Clan.join(clanIdOrName);

    try {
      return callback(clan);
    } finally {
      startingClan.join();
    }
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types


  Clan.withStash = function (clanIdOrName, items, callback) {
    return Clan._withStash(function () {
      return Clan["with"](clanIdOrName, function (clan) {
        return clan.take(items);
      });
    }, function (borrowed) {
      return Clan["with"](clanIdOrName, function (clan) {
        return clan.put(borrowed);
      });
    }, callback);
  };
  /**
   * Return player's current Clan
   */


  Clan.get = function () {
    return new Clan(kolmafia_1.getClanId(), kolmafia_1.getClanName());
  };
  /**
   * Get list of clans to which the player is whitelisted
   */


  Clan.getWhitelisted = function () {
    var page = kolmafia_1.visitUrl("clan_signup.php");
    return kolmafia_1.xpath(page, '//select[@name="whichclan"]//option').map(function (option) {
      var validHtml = "<select>" + option + "</select>";
      var id = Number.parseInt(kolmafia_1.xpath(validHtml, '//@value')[0]);
      var name = kolmafia_1.xpath(validHtml, '//text()')[0];
      return new Clan(id, name);
    });
  };
  /**
   * Join clan
   */


  Clan.prototype.join = function () {
    return Clan._join(this.id);
  };

  Clan.prototype.check = function () {
    return kolmafia_1.visitUrl("clan_hall.php").includes("<b>" + this.name + "</b>");
  };
  /**
   * Return the monster that is currently in the current clan's fax machine if any
   */


  Clan.prototype.getCurrentFax = function () {
    var logs = kolmafia_1.visitUrl("clan_log.php");
    var lastFax = logs.match(LOG_FAX_PATTERN);
    if (!lastFax) return null;

    var _a = __read(lastFax, 4),
        monsterName = _a[3];

    if (!monsterName) return null;
    return Monster.get(monsterName);
  };
  /**
   * List available ranks (name, degree and id) from the current clan
   */


  Clan.prototype.getRanks = function () {
    var page = kolmafia_1.visitUrl("clan_whitelist.php");
    return kolmafia_1.xpath(page, '//select[@name="level"]//option').map(function (option) {
      var validHtml = "<select>" + option + "</select>";
      var match = kolmafia_1.xpath(validHtml, '//text()')[0].match(WHITELIST_DEGREE_PATTERN);
      var id = kolmafia_1.xpath(validHtml, '//@value')[0];
      if (!match || !id) return null;

      var _a = __read(match, 3),
          name = _a[1],
          degree = _a[2];

      return {
        name: name,
        degree: Number.parseInt(degree),
        id: Number.parseInt(id)
      };
    }).filter(utils_1.notNull);
  };
  /**
   * Add a player to the current clan's whitelist.
   * If the player is already in the whitelist this will change their rank or title.
   * @param player Player id or name
   * @param rankName Rank to give the player. If not provided they will be given the lowest rank
   * @param title Title to give the player. If not provided, will be blank
   */


  Clan.prototype.addPlayerToWhitelist = function (player, rankName, title) {
    if (title === void 0) {
      title = "";
    }

    var playerId = toPlayerId(player);
    var ranks = this.getRanks();
    var rank = rankName ? ranks.find(function (r) {
      return r.name === rankName;
    }) : ranks.sort(function (a, b) {
      return a.degree - b.degree;
    })[0];
    if (!rank) return false;
    var result = kolmafia_1.visitUrl("clan_whitelist.php?action=add&pwd&addwho=" + playerId + "&level=" + rank.id + "&title=" + title);
    return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
  };
  /**
   * Remove a player from the current clan's whitelist
   * @param player Player id or name
   */


  Clan.prototype.removePlayerFromWhitelist = function (player) {
    var playerId = toPlayerId(player);
    var result = kolmafia_1.visitUrl("clan_whitelist.php?action=updatewl&pwd&who=" + playerId + "&remove=Remove");
    return result.includes("Whitelist updated.");
  };
  /**
   * Return the amount of meat in the current clan's coffer.
   */


  Clan.prototype.getMeatInCoffer = function () {
    var page = kolmafia_1.visitUrl("clan_stash.php");

    var _a = __read(page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"], 2),
        meat = _a[1];

    return utils_1.parseNumber(meat);
  };
  /**
   * Add the given amount of meat to the current clan's coffer.
   * @param amount Amount of meat to put in coffer
   */


  Clan.prototype.putMeatInCoffer = function (amount) {
    var result = kolmafia_1.visitUrl("clan_stash.php?pwd&action=contribute&howmuch=" + amount);
    return result.includes("You contributed");
  };

  Clan.prototype.take = function (items) {
    var map = utils_1.arrayToCountedMap(items);
    map.forEach(function (quantity, item) {
      var e_1, _a, e_2, _b;

      var needed = Math.max(0, quantity - kolmafia_1.availableAmount(item));

      if (needed === 0) {
        return map.set(item, 0);
      }

      var foldGroup = lib_1.getFoldGroup(item);

      try {
        for (var foldGroup_1 = __values(foldGroup), foldGroup_1_1 = foldGroup_1.next(); !foldGroup_1_1.done; foldGroup_1_1 = foldGroup_1.next()) {
          var foldable = foldGroup_1_1.value;
          var quantityToFold = Math.min(needed, kolmafia_1.availableAmount(foldable));

          for (var i = 0; i < quantityToFold; i++) {
            kolmafia_1.cliExecute("fold " + item.name);
            needed--;
          }

          return map.set(item, needed);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (foldGroup_1_1 && !foldGroup_1_1.done && (_a = foldGroup_1["return"])) _a.call(foldGroup_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      kolmafia_1.refreshStash();

      try {
        for (var _c = __values(__spread([item], foldGroup)), _d = _c.next(); !_d.done; _d = _c.next()) {
          var matchingItem = _d.value;
          var quantityToTake = Math.min(needed, kolmafia_1.stashAmount(matchingItem));
          if (quantityToTake === 0) continue; // If we can't take from the stash, there's no sense in iterating through the whole fold group

          if (!kolmafia_1.takeStash(quantityToTake, matchingItem)) return;

          if (matchingItem === item) {
            needed -= quantityToTake;
          } else {
            for (var i = 0; i < quantityToTake; i++) {
              kolmafia_1.cliExecute("fold " + matchingItem.name);
              needed--;
            }
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_b = _c["return"])) _b.call(_c);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    });
    return Array.isArray(items) ? utils_1.countedMapToArray(map) : map;
  };

  Clan.prototype.put = function (items) {
    var map = utils_1.arrayToCountedMap(items);
    if (!this.check()) throw new Error("Wanted to return " + utils_1.countedMapToString(map) + " to " + this.name + " but KoLmafia's clan data is out of sync");
    map.forEach(function (quantity, item) {
      kolmafia_1.retrieveItem(quantity, item);
      var returned = Math.min(quantity, kolmafia_1.availableAmount(item));
      kolmafia_1.putStash(returned, item);
      map.set(item, quantity - returned);
    });
    return Array.isArray(items) ? utils_1.countedMapToArray(map) : map;
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  Clan.prototype.withStash = function (items, callback) {
    var _this = this;

    var map = utils_1.arrayToCountedMap(items);
    return Clan._withStash(function () {
      return _this.take(map);
    }, function (borrowed) {
      return _this.put(borrowed);
    }, callback);
  };

  __decorate([validate], Clan.prototype, "getCurrentFax", null);

  __decorate([validate], Clan.prototype, "getRanks", null);

  __decorate([validate], Clan.prototype, "addPlayerToWhitelist", null);

  __decorate([validate], Clan.prototype, "removePlayerFromWhitelist", null);

  __decorate([validate], Clan.prototype, "getMeatInCoffer", null);

  __decorate([validate], Clan.prototype, "putMeatInCoffer", null);

  __decorate([validate], Clan.prototype, "take", null);

  __decorate([validate], Clan.prototype, "put", null);

  __decorate([validate], Clan.prototype, "withStash", null);

  return Clan;
}();

exports.Clan = Clan;

/***/ }),

/***/ "../node_modules/libram/dist/Copier.js":
/*!*********************************************!*\
  !*** ../node_modules/libram/dist/Copier.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Copier = void 0;

var Copier =
/** @class */
function () {
  function Copier(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
    this.fightCopy = null;
    this.couldCopy = couldCopy;
    this.prepare = prepare;
    this.canCopy = canCopy;
    this.copiedMonster = copiedMonster;
    if (fightCopy) this.fightCopy = fightCopy;
  }

  return Copier;
}();

exports.Copier = Copier;

/***/ }),

/***/ "../node_modules/libram/dist/Kmail.js":
/*!********************************************!*\
  !*** ../node_modules/libram/dist/Kmail.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__webpack_require__(/*! core-js/features/object/entries */ "../node_modules/core-js/features/object/entries.js");

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var utils_1 = __webpack_require__(/*! ./utils */ "../node_modules/libram/dist/utils.js");

var Kmail =
/** @class */
function () {
  function Kmail(rawKmail) {
    this.id = Number(rawKmail.id);
    this.date = new Date(rawKmail.localtime);
    this.type = rawKmail.type;
    this.senderId = Number(rawKmail.fromid);
    this.senderName = rawKmail.fromname;
    this.message = rawKmail.message;
  }
  /**
   * Parses a kmail from KoL's native format
   *
   * @param rawKmail Kmail in the format supplies by api.php
   * @returns Parsed kmail
   */


  Kmail.parse = function (rawKmail) {
    return new Kmail(rawKmail);
  };
  /**
   * Returns all of the player's kmails
   *
   * @returns Parsed kmails
   */


  Kmail.inbox = function () {
    return JSON.parse(kolmafia_1.visitUrl("api.php?what=kmail&for=ASSistant")).map(Kmail.parse);
  };
  /**
   * Bulk delete kmails
   *
   * @param kmails Kmails to delete
   * @returns Number of kmails deleted
   */


  Kmail["delete"] = function (kmails) {
    var _a, _b;

    var results = kolmafia_1.visitUrl("messages.php?the_action=delete&box=Inbox&pwd&" + kmails.map(function (k) {
      return "sel" + k.id + "=on";
    }).join("&"));
    return Number((_b = (_a = results.match(/<td>(\d) messages? deleted.<\/td>/)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : 0);
  };

  Kmail._genericSend = function (to, message, items, meat, chunkSize, constructUrl, successString) {
    var e_1, _a;

    var m = meat;

    var sendableItems = __spread(utils_1.arrayToCountedMap(items).entries()).filter(function (_a) {
      var _b = __read(_a, 1),
          item = _b[0];

      return kolmafia_1.isGiftable(item);
    });

    var result = true;
    var chunks = utils_1.chunk(sendableItems, chunkSize);

    try {
      // Split the items to be sent into chunks of max 11 item types
      for (var _b = __values(chunks.length > 0 ? chunks : [null]), _c = _b.next(); !_c.done; _c = _b.next()) {
        var c = _c.value;
        var itemsQuery = c === null ? [] : c.map(function (_a, index) {
          var _b = __read(_a, 2),
              item = _b[0],
              quantity = _b[1];

          return "whichitem" + (index + 1) + "=" + kolmafia_1.toInt(item) + "&howmany" + (index + 1) + "=" + quantity;
        });
        var r = kolmafia_1.visitUrl(constructUrl(m, itemsQuery.join("&"), itemsQuery.length));

        if (r.includes("That player cannot receive Meat or items")) {
          return Kmail.gift(to, message, items, meat);
        } // Make sure we don't send the same batch of meat with every chunk


        m = 0;
        result && (result = r.includes(successString));
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return result;
  };
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


  Kmail.send = function (to, message, items, meat) {
    if (message === void 0) {
      message = "";
    }

    if (items === void 0) {
      items = [];
    }

    if (meat === void 0) {
      meat = 0;
    }

    return Kmail._genericSend(to, message, items, meat, 11, function (meat, itemsQuery) {
      return "sendmessage.php?action=send&pwd&towho=" + to + "&message=" + message + (itemsQuery ? "&" + itemsQuery : "") + "&sendmeat=" + meat;
    }, ">Message sent.</");
  };
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


  Kmail.gift = function (to, message, items, meat, insideNote) {
    if (message === void 0) {
      message = "";
    }

    if (items === void 0) {
      items = [];
    }

    if (meat === void 0) {
      meat = 0;
    }

    if (insideNote === void 0) {
      insideNote = "";
    }

    var baseUrl = "town_sendgift.php?action=Yep.&pwd&fromwhere=0&note=" + message + "&insidenote=" + insideNote + "&towho=" + to;
    return Kmail._genericSend(to, message, items, meat, 3, function (m, itemsQuery, chunkSize) {
      return baseUrl + "&whichpackage=" + chunkSize + (itemsQuery ? "&" + itemsQuery : "") + "&sendmeat=" + m;
    }, ">Package sent.</");
  };
  /**
   * Delete the kmail
   *
   * @returns Whether the kmail was deleted
   */


  Kmail.prototype["delete"] = function () {
    return Kmail["delete"]([this]) === 1;
  };
  /**
   * Get items attached to the kmail
   *
   * @returns Map of items attached to the kmail and their quantities
   */


  Kmail.prototype.items = function () {
    return new Map(Object.entries(kolmafia_1.extractItems(this.message)).map(function (_a) {
      var _b = __read(_a, 2),
          itemName = _b[0],
          quantity = _b[1];

      return [Item.get(itemName), quantity];
    }));
  };
  /**
   * Get meat attached to the kmail
   *
   * @returns Meat attached to the kmail
   */


  Kmail.prototype.meat = function () {
    return kolmafia_1.extractMeat(this.message);
  };
  /**
   * Reply to kmail
   *
   * @see Kmail.send
   *
   * @returns True if the kmail was successfully sent
   */


  Kmail.prototype.reply = function (message, items, meat) {
    if (message === void 0) {
      message = "";
    }

    if (items === void 0) {
      items = [];
    }

    if (meat === void 0) {
      meat = 0;
    }

    return Kmail.send(this.senderId, message, items, meat);
  };

  return Kmail;
}();

exports.default = Kmail;

/***/ }),

/***/ "../node_modules/libram/dist/Path.js":
/*!*******************************************!*\
  !*** ../node_modules/libram/dist/Path.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Paths = exports.Path = void 0;

var template_string_1 = __webpack_require__(/*! ./template-string */ "../node_modules/libram/dist/template-string.js");

var Path =
/** @class */
function () {
  function Path(name, id, hasAllPerms, hasCampground, hasTerrarium, stomachSize, liverSize, spleenSize, classes) {
    if (hasAllPerms === void 0) {
      hasAllPerms = true;
    }

    if (hasCampground === void 0) {
      hasCampground = true;
    }

    if (hasTerrarium === void 0) {
      hasTerrarium = true;
    }

    if (stomachSize === void 0) {
      stomachSize = 15;
    }

    if (liverSize === void 0) {
      liverSize = 15;
    }

    if (spleenSize === void 0) {
      spleenSize = 15;
    }

    if (classes === void 0) {
      classes = template_string_1.$classes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Seal Clubber, Turtle Tamer, Sauceror, Pastamancer, Disco Bandit, Accordion Thief"], ["Seal Clubber, Turtle Tamer, Sauceror, Pastamancer, Disco Bandit, Accordion Thief"])));
    }

    this.name = name;
    this.id = id;
    this.hasAllPerms = hasAllPerms;
    this.hasCampground = hasCampground;
    this.hasTerrarium = hasTerrarium;
    this.stomachSize = stomachSize;
    this.liverSize = liverSize;
    this.spleenSize = spleenSize;
    this.classes = classes;
  }

  return Path;
}();

exports.Path = Path;
exports.Paths = {
  Unrestricted: new Path("Unrestricted", 0),
  Boozetafarian: new Path("Boozetafarian", 1, false, true, true, 0),
  Teetotaler: new Path("Teetotaler", 2, false, true, true, 15, 0),
  Oxygenarian: new Path("Oxygenarian", 3, false, true, true, 0, 0),
  BeesHateYou: new Path("Bees Hate You", 4),
  WayOfTheSurprisingFist: new Path("Way of the Surprising Fist", 6),
  Trendy: new Path("Trendy", 6),
  AvatarOfBoris: new Path("Avatar of Boris", 8, false, true, false, 20, 5, 15, template_string_1.$classes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Avatar of Boris"], ["Avatar of Boris"])))),
  BugbearInvasion: new Path("Bugbear Invasion", 9),
  ZombieSlayer: new Path("Zombie Slayer", 10, false, true, true, 15, 5, 15, template_string_1.$classes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Zombie Master"], ["Zombie Master"])))),
  ClassAct: new Path("Class Act", 11, false),
  AvatarofJarlsberg: new Path("Avatar of Jarlsberg", 12, false, true, false, 10, 10, 15, template_string_1.$classes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Avatar of Jarlsberg"], ["Avatar of Jarlsberg"])))),
  Big: new Path("BIG!", 14),
  KolHs: new Path("KOLHS", 15),
  ClassAct2: new Path("Class Act II: A Class For Pigs", 16, false),
  AvatarofSneakyPete: new Path("Avatar of Sneaky Pete", 17, false, true, false, 5, 20, 15, template_string_1.$classes(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Avatar of Sneaky Pete"], ["Avatar of Sneaky Pete"])))),
  SlowAndSteady: new Path("Slow and Steady", 18),
  HeavyRains: new Path("Heavy Rains", 19),
  Picky: new Path("Picky", 21, false),
  Standard: new Path("Standard", 22),
  ActuallyEdTheUndying: new Path("Actually Ed the Undying", 23, false, false, false, 0, 0, 5, template_string_1.$classes(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Ed"], ["Ed"])))),
  OneCrazyRandomSummer: new Path("One Crazy Random Summer", 24),
  CommunityService: new Path("Community Service", 25),
  AvatarOfWestOfLoathing: new Path("Avatar of West of Loathing", 26, false, true, true, 10, 10, 10, template_string_1.$classes(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Cow Puncher, Snake Oiler, Beanslinger"], ["Cow Puncher, Snake Oiler, Beanslinger"])))),
  TheSource: new Path("The Source", 27),
  NuclearAutumn: new Path("Nuclear Autumn", 28, false, false, true, 3, 3, 3),
  GelatinousNoob: new Path("Gelatinous Noob", 29, false, true, true, 0, 0, 0, template_string_1.$classes(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Gelatinous Noob"], ["Gelatinous Noob"])))),
  LicenseToAdventure: new Path("License to Adventure", 30, true, true, false, 0, 2, 15),
  LiveAscendRepeat: new Path("Live. Ascend. Repeat.", 31),
  PocketFamiliars: new Path("Pocket Familiars", 32, false, true, false),
  GLover: new Path("G-Lover", 33),
  DisguisesDelimit: new Path("Disguises Delimit", 34),
  DarkGyffte: new Path("Dark Gyffte", 35, false, true, false, 5, 5, 15, template_string_1.$classes(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Vampyre"], ["Vampyre"])))),
  TwoCrazyRandomSummer: new Path("Two Crazy Random Summer", 36),
  KingdomOfExploathing: new Path("Kingdom of Exploathing", 37),
  PathOfThePlumber: new Path("Path of the Plumber", 38, false, true, true, 20, 0, 5, template_string_1.$classes(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Plumber"], ["Plumber"])))),
  LowKeySummer: new Path("Low Key Summer", 40),
  GreyGoo: new Path("Grey Goo", 40),
  YouRobot: new Path("You, Robot", 41, false, false, true, 0, 0, 0),
  QuantumTerrarium: new Path("Quantum Terrarium", 42, true, true, false)
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;

/***/ }),

/***/ "../node_modules/libram/dist/ascend.js":
/*!*********************************************!*\
  !*** ../node_modules/libram/dist/ascend.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.prepareAscension = exports.ascend = exports.Lifestyle = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var template_string_1 = __webpack_require__(/*! ./template-string */ "../node_modules/libram/dist/template-string.js");

var property_1 = __webpack_require__(/*! ./property */ "../node_modules/libram/dist/property.js");

var resources_1 = __webpack_require__(/*! ./resources */ "../node_modules/libram/dist/resources/index.js");

var lib_1 = __webpack_require__(/*! ./lib */ "../node_modules/libram/dist/lib.js");

var Lifestyle;

(function (Lifestyle) {
  Lifestyle[Lifestyle["casual"] = 1] = "casual";
  Lifestyle[Lifestyle["softcore"] = 2] = "softcore";
  Lifestyle[Lifestyle["normal"] = 2] = "normal";
  Lifestyle[Lifestyle["hardcore"] = 3] = "hardcore";
})(Lifestyle = exports.Lifestyle || (exports.Lifestyle = {}));

function toMoonId(moon, playerClass) {
  if (typeof moon === "number") return moon;

  var offset = function offset() {
    switch (playerClass.primestat) {
      case template_string_1.$stat(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Muscle"], ["Muscle"]))):
        return 0;

      case template_string_1.$stat(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Mysticality"], ["Mysticality"]))):
        return 1;

      case template_string_1.$stat(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Moxie"], ["Moxie"]))):
        return 2;

      default:
        throw "unknown prime stat for " + playerClass;
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

function ascend(path, playerClass, lifestyle, moon, consumable, pet) {
  if (consumable === void 0) {
    consumable = template_string_1.$item(templateObject_4 || (templateObject_4 = __makeTemplateObject(["astral six-pack"], ["astral six-pack"])));
  }

  if (pet === void 0) {
    pet = undefined;
  }

  if (!kolmafia_1.containsText(kolmafia_1.visitUrl("charpane.php"), "Astral Spirit")) {
    kolmafia_1.print("It'd really be better if you were already through the gash. Oh well!", "blue");
    kolmafia_1.visitUrl("ascend.php?action=ascend&confirm=on&confirm2=on");
  }

  if (!kolmafia_1.containsText(kolmafia_1.visitUrl("charpane.php"), "Astral Spirit")) throw "Failed to ascend.";
  if (!path.classes.includes(playerClass)) throw "Invalid class " + playerClass + " for this path";
  if (path.id < 0) throw "Invalid path ID " + path.id;
  var moonId = toMoonId(moon, playerClass);
  if (moonId < 1 || moonId > 9) throw "Invalid moon " + moon;
  if (consumable && !template_string_1.$items(templateObject_5 || (templateObject_5 = __makeTemplateObject(["astral six-pack, astral hot dog dinner"], ["astral six-pack, astral hot dog dinner"]))).includes(consumable)) throw "Invalid consumable " + consumable;
  if (pet && !template_string_1.$items(templateObject_6 || (templateObject_6 = __makeTemplateObject(["astral bludgeon, astral shield, astral chapeau, astral bracer, astral longbow, astral shorts, astral mace, astral ring, astral statuette, astral pistol, astral mask, astral pet sweater, astral shirt, astral belt"], ["astral bludgeon, astral shield, astral chapeau, astral bracer, astral longbow, astral shorts, astral mace, astral ring, astral statuette, astral pistol, astral mask, astral pet sweater, astral shirt, astral belt"]))).includes(pet)) throw "Invalid astral item " + pet;
  kolmafia_1.visitUrl("afterlife.php?action=pearlygates");
  if (consumable) kolmafia_1.visitUrl("afterlife.php?action=buydeli&whichitem=" + kolmafia_1.toInt(consumable));
  if (pet) kolmafia_1.visitUrl("afterlife.php?action=buyarmory&whichitem=" + kolmafia_1.toInt(pet));
  kolmafia_1.visitUrl("afterlife.php?action=ascend&confirmascend=1&whichsign=" + moonId + "&gender=2&whichclass=" + kolmafia_1.toInt(playerClass) + "&whichpath=" + path.id + "&asctype=" + lifestyle + "&nopetok=1&noskillsok=1&lamepathok=1&pwd", true);
}

exports.ascend = ascend;
var worksheds = template_string_1.$items(templateObject_7 || (templateObject_7 = __makeTemplateObject(["warbear LP-ROM burner, warbear jackhammer drill press, warbear induction oven, warbear high-efficiency still, warbear chemistry lab, warbear auto-anvil, spinning wheel, snow machine, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic, Asdon Martin keyfob, diabolic pizza cube"], ["warbear LP-ROM burner, warbear jackhammer drill press, warbear induction oven, warbear high-efficiency still, warbear chemistry lab, warbear auto-anvil, spinning wheel, snow machine, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic, Asdon Martin keyfob, diabolic pizza cube"])));
var gardens = template_string_1.$items(templateObject_8 || (templateObject_8 = __makeTemplateObject(["packet of pumpkin seeds, Peppermint Pip Packet, packet of dragon's teeth, packet of beer seeds, packet of winter seeds, packet of thanksgarden seeds, packet of tall grass seeds, packet of mushroom spores"], ["packet of pumpkin seeds, Peppermint Pip Packet, packet of dragon's teeth, packet of beer seeds, packet of winter seeds, packet of thanksgarden seeds, packet of tall grass seeds, packet of mushroom spores"]))); // eslint-disable-next-line libram/verify-constants

var eudorae = template_string_1.$items(templateObject_9 || (templateObject_9 = __makeTemplateObject(["My Own Pen Pal kit, GameInformPowerDailyPro subscription card, Xi Receiver Unit, New-You Club Membership Form, Our Daily Candles\u2122 order form"], ["My Own Pen Pal kit, GameInformPowerDailyPro subscription card, Xi Receiver Unit, New-You Club Membership Form, Our Daily Candles\u2122 order form"])));
var desks = template_string_1.$items(templateObject_10 || (templateObject_10 = __makeTemplateObject(["fancy stationery set, Swiss piggy bank, continental juice bar"], ["fancy stationery set, Swiss piggy bank, continental juice bar"])));
var ceilings = template_string_1.$items(templateObject_11 || (templateObject_11 = __makeTemplateObject(["antler chandelier, ceiling fan, artificial skylight"], ["antler chandelier, ceiling fan, artificial skylight"])));
var nightstands = template_string_1.$items(templateObject_12 || (templateObject_12 = __makeTemplateObject(["foreign language tapes, bowl of potpourri, electric muscle stimulator"], ["foreign language tapes, bowl of potpourri, electric muscle stimulator"])));

function prepareAscension(ascensionItems, chateauItems, throwOnFail) {
  if (throwOnFail === void 0) {
    throwOnFail = true;
  }

  if (ascensionItems) {
    if (ascensionItems.workshed && kolmafia_1.getWorkshed() !== ascensionItems.workshed) {
      if (!worksheds.includes(ascensionItems.workshed) && throwOnFail) throw "Invalid workshed: " + ascensionItems.workshed + "!";else if (!lib_1.have(ascensionItems.workshed) && throwOnFail) throw "I'm sorry buddy, but you don't seem to own a " + ascensionItems.workshed + ". Which makes it REALLY hard for us to plop one into your workshed.";else if (property_1.get("_workshedItemUsed") && throwOnFail) throw "Seems like you've already swapped your workshed, buddy.";else kolmafia_1.use(ascensionItems.workshed);
      if (kolmafia_1.getWorkshed() !== ascensionItems.workshed && throwOnFail) throw "We really thought we changed your workshed to a " + ascensionItems.workshed + ", but Mafia is saying otherwise.";
    }

    if (ascensionItems.garden && !Object.getOwnPropertyNames(kolmafia_1.getCampground()).includes(ascensionItems.garden.name)) {
      if (!gardens.includes(ascensionItems.garden) && throwOnFail) throw "Invalid garden: " + ascensionItems.garden + "!";else if (!lib_1.have(ascensionItems.garden) && throwOnFail) throw "I'm sorry buddy, but you don't seem to own a " + ascensionItems.garden + ". Which makes it REALLY hard for us to plant one into your garden.";else kolmafia_1.use(ascensionItems.garden);
      if (!Object.getOwnPropertyNames(kolmafia_1.getCampground()).includes(ascensionItems.garden.name) && throwOnFail) throw "We really thought we changed your garden to a " + ascensionItems.garden + ", but Mafia is saying otherwise.";
    }

    if (ascensionItems.eudora && kolmafia_1.eudoraItem() !== ascensionItems.eudora) {
      if (!eudorae.includes(ascensionItems.eudora) && throwOnFail) throw "Invalid eudora: " + ascensionItems.eudora + "!";
      var eudoraNumber = 1 + eudorae.indexOf(ascensionItems.eudora);
      if (!kolmafia_1.xpath(kolmafia_1.visitUrl("account.php?tab=correspondence"), "//select[@name=\"whichpenpal\"]/option/@value").includes(eudoraNumber.toString()) && throwOnFail) throw "I'm sorry buddy, but you don't seem to be subscribed to " + ascensionItems.eudora + ". Which makes it REALLY hard to correspond with them.";else kolmafia_1.visitUrl("account.php?actions[]=whichpenpal&whichpenpal=" + eudoraNumber + "&action=Update", true);
      if (kolmafia_1.eudoraItem() !== ascensionItems.eudora && throwOnFail) throw "We really thought we chaned your eudora to a " + ascensionItems.eudora + ", but Mafia is saying otherwise.";
    }
  }

  if (chateauItems && resources_1.ChateauMantegna.have()) {
    if (chateauItems.ceiling && resources_1.ChateauMantegna.getCeiling() !== chateauItems.ceiling) {
      if (!ceilings.includes(chateauItems.ceiling) && throwOnFail) throw "Invalid chateau ceiling: " + chateauItems.ceiling + "!";else if (!resources_1.ChateauMantegna.changeCeiling(chateauItems.ceiling) && throwOnFail) throw "We tried, but were unable to change your chateau ceiling to " + chateauItems.ceiling + ". Probably.";
    }

    if (chateauItems.desk && resources_1.ChateauMantegna.getDesk() !== chateauItems.desk) {
      if (!desks.includes(chateauItems.desk) && throwOnFail) throw "Invalid chateau desk: " + chateauItems.desk + "!";else if (!resources_1.ChateauMantegna.changeDesk(chateauItems.desk) && throwOnFail) throw "We tried, but were unable to change your chateau desk to " + chateauItems.desk + ". Probably.";
    }

    if (chateauItems.nightstand && resources_1.ChateauMantegna.getNightstand() !== chateauItems.nightstand) {
      if (!nightstands.includes(chateauItems.nightstand) && throwOnFail) throw "Invalid chateau nightstand: " + chateauItems.nightstand + "!";else if (!resources_1.ChateauMantegna.changeNightstand(chateauItems.nightstand) && throwOnFail) throw "We tried, but were unable to change your chateau nightstand to " + chateauItems.nightstand + ". Probably.";
    }
  }
}

exports.prepareAscension = prepareAscension;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;

/***/ }),

/***/ "../node_modules/libram/dist/combat.js":
/*!*********************************************!*\
  !*** ../node_modules/libram/dist/combat.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.adventureMacroAuto = exports.adventureMacro = exports.Macro = exports.getMacroId = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var template_string_1 = __webpack_require__(/*! ./template-string */ "../node_modules/libram/dist/template-string.js");

var property_1 = __webpack_require__(/*! ./property */ "../node_modules/libram/dist/property.js");

var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name Script Autoattack Macro.
 *
 * @category Combat
 * @returns {number} The macro ID.
 */

function getMacroId() {
  var macroMatches = kolmafia_1.xpath(kolmafia_1.visitUrl("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"" + MACRO_NAME + "\"]/@value");

  if (macroMatches.length === 0) {
    kolmafia_1.visitUrl("account_combatmacros.php?action=new");
    var newMacroText = kolmafia_1.visitUrl("account_combatmacros.php?macroid=0&name=" + MACRO_NAME + "&macrotext=abort&action=save");
    return parseInt(kolmafia_1.xpath(newMacroText, "//input[@name=macroid]/@value")[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}

exports.getMacroId = getMacroId;

function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? Item.get(itemOrName) : itemOrName;
}

var substringCombatItems = template_string_1.$items(templateObject_1 || (templateObject_1 = __makeTemplateObject(["spider web, really sticky spider web, dictionary, NG, Cloaca-Cola, yo-yo, top, ball, kite, yo, red potion, blue potion, adder, red button, pile of sand, mushroom, deluxe mushroom"], ["spider web, really sticky spider web, dictionary, NG, Cloaca-Cola, yo-yo, top, ball, kite, yo, red potion, blue potion, adder, red button, pile of sand, mushroom, deluxe mushroom"])));
var substringCombatSkills = template_string_1.$skills(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Shoot, Thrust-Smack, Headbutt, Toss, Sing, Disarm, LIGHT, BURN, Extract, Meteor Shower, Cleave, Boil, Slice, Rainbow"], ["Shoot, Thrust-Smack, Headbutt, Toss, Sing, Disarm, LIGHT, BURN, Extract, Meteor Shower, Cleave, Boil, Slice, Rainbow"])));

function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !substringCombatItems.includes(item) ? item.name : kolmafia_1.toInt(item).toString();
  }
}

function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(" && ");
  } else {
    return "hascombatitem " + itemOrItems;
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
  return skill.name.match(/^[A-Za-z ]+$/) && !substringCombatSkills.includes(skill) ? skill.name : kolmafia_1.toInt(skill);
}
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */


var Macro =
/** @class */
function () {
  function Macro() {
    this.components = [];
  }
  /**
   * Convert macro to string.
   */


  Macro.prototype.toString = function () {
    return this.components.join(";");
  };
  /**
   * Save a macro to a Mafia property for use in a consult script.
   */


  Macro.prototype.save = function () {
    property_1.set(Macro.SAVED_MACRO_PROPERTY, this.toString());
  };
  /**
   * Load a saved macro from the Mafia property.
   */


  Macro.load = function () {
    var _a;

    return (_a = new this()).step.apply(_a, __spread(property_1.get(Macro.SAVED_MACRO_PROPERTY).split(";")));
  };
  /**
   * Clear the saved macro in the Mafia property.
   */


  Macro.clearSaved = function () {
    kolmafia_1.removeProperty(Macro.SAVED_MACRO_PROPERTY);
  };
  /**
   * Statefully add one or several steps to a macro.
   * @param nextSteps The steps to add to the macro.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.step = function () {
    var _a;

    var nextSteps = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      nextSteps[_i] = arguments[_i];
    }

    var nextStepsStrings = (_a = []).concat.apply(_a, __spread(nextSteps.map(function (x) {
      return x instanceof Macro ? x.components : [x];
    })));

    this.components = __spread(this.components, nextStepsStrings.filter(function (s) {
      return s.length > 0;
    }));
    return this;
  };
  /**
   * Statefully add one or several steps to a macro.
   * @param nextSteps The steps to add to the macro.
   * @returns {Macro} This object itself.
   */


  Macro.step = function () {
    var _a;

    var nextSteps = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      nextSteps[_i] = arguments[_i];
    }

    return (_a = new this()).step.apply(_a, __spread(nextSteps));
  };
  /**
   * Submit the built macro to KoL. Only works inside combat.
   */


  Macro.prototype.submit = function () {
    var _final = this.toString();

    return kolmafia_1.visitUrl("fight.php?action=macro&macrotext=" + kolmafia_1.urlEncode(_final), true, true);
  };
  /**
   * Set this macro as a KoL native autoattack.
   */


  Macro.prototype.setAutoAttack = function () {
    if (Macro.cachedMacroId === null) Macro.cachedMacroId = getMacroId();

    if (kolmafia_1.getAutoAttack() === 99000000 + Macro.cachedMacroId && this.toString() === Macro.cachedAutoAttack) {
      // This macro is already set. Don"t make the server request.
      return;
    }

    kolmafia_1.visitUrl("account_combatmacros.php?macroid=" + Macro.cachedMacroId + "&name=" + kolmafia_1.urlEncode(MACRO_NAME) + "&macrotext=" + kolmafia_1.urlEncode(this.toString()) + "&action=save", true, true);
    kolmafia_1.visitUrl("account.php?am=1&action=autoattack&value=" + (99000000 + Macro.cachedMacroId) + "&ajax=1");
    Macro.cachedAutoAttack = this.toString();
  };
  /**
   * Add an "abort" step to this macro.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.abort = function () {
    return this.step("abort");
  };
  /**
   * Create a new macro with an "abort" step.
   * @returns {Macro} This object itself.
   */


  Macro.abort = function () {
    return new this().abort();
  };
  /**
   * Add an "if" statement to this macro.
   * @param condition The BALLS condition for the if statement.
   * @param ifTrue Continuation if the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.if_ = function (condition, ifTrue) {
    return this.step("if " + condition).step(ifTrue).step("endif");
  };
  /**
   * Create a new macro with an "if" statement.
   * @param condition The BALLS condition for the if statement.
   * @param ifTrue Continuation if the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.if_ = function (condition, ifTrue) {
    return new this().if_(condition, ifTrue);
  };
  /**
   * Add a "while" statement to this macro.
   * @param condition The BALLS condition for the if statement.
   * @param contents Loop to repeat while the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.while_ = function (condition, contents) {
    return this.step("while " + condition).step(contents).step("endwhile");
  };
  /**
   * Create a new macro with a "while" statement.
   * @param condition The BALLS condition for the if statement.
   * @param contents Loop to repeat while the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.while_ = function (condition, contents) {
    return new this().while_(condition, contents);
  };
  /**
   * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
   * @param condition The JS condition.
   * @param ifTrue Continuation to add if the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.externalIf = function (condition, ifTrue) {
    return condition ? this.step(ifTrue) : this;
  };
  /**
   * Create a new macro with a condition evaluated at the time of building the macro.
   * @param condition The JS condition.
   * @param ifTrue Continuation to add if the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.externalIf = function (condition, ifTrue) {
    return new this().externalIf(condition, ifTrue);
  };
  /**
   * Add a repeat step to the macro.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.repeat = function () {
    return this.step("repeat");
  };
  /**
   * Add one or more skill cast steps to the macro.
   * @param skills Skills to cast.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.skill = function () {
    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return this.step.apply(this, __spread(skills.map(function (skill) {
      return "skill " + skillBallsMacroName(skill);
    })));
  };
  /**
   * Create a new macro with one or more skill cast steps.
   * @param skills Skills to cast.
   * @returns {Macro} This object itself.
   */


  Macro.skill = function () {
    var _a;

    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return (_a = new this()).skill.apply(_a, __spread(skills));
  };
  /**
   * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
   * @param skills Skills to try casting.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.trySkill = function () {
    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return this.step.apply(this, __spread(skills.map(function (skill) {
      return Macro.if_("hasskill " + skillBallsMacroName(skill), Macro.skill(skill));
    })));
  };
  /**
   * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
   * @param skills Skills to try casting.
   * @returns {Macro} This object itself.
   */


  Macro.trySkill = function () {
    var _a;

    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return (_a = new this()).trySkill.apply(_a, __spread(skills));
  };
  /**
   * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
   * @param skills Skills to try repeatedly casting.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.trySkillRepeat = function () {
    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return this.step.apply(this, __spread(skills.map(function (skill) {
      return Macro.if_("hasskill " + skillBallsMacroName(skill), Macro.skill(skill).repeat());
    })));
  };
  /**
   * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
   * @param skills Skills to try repeatedly casting.
   * @returns {Macro} This object itself.
   */


  Macro.trySkillRepeat = function () {
    var _a;

    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return (_a = new this()).trySkillRepeat.apply(_a, __spread(skills));
  };
  /**
   * Add one or more item steps to the macro.
   * @param items Items to use. Pass a tuple [item1, item2] to funksling.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.item = function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    return this.step.apply(this, __spread(items.map(function (itemOrItems) {
      return "use " + itemOrItemsBallsMacroName(itemOrItems);
    })));
  };
  /**
   * Create a new macro with one or more item steps.
   * @param items Items to use. Pass a tuple [item1, item2] to funksling.
   * @returns {Macro} This object itself.
   */


  Macro.item = function () {
    var _a;

    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    return (_a = new this()).item.apply(_a, __spread(items));
  };
  /**
   * Add one or more item steps to the macro, where each step checks to see if you have the item first.
   * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.tryItem = function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    return this.step.apply(this, __spread(items.map(function (item) {
      return Macro.if_(itemOrItemsBallsMacroPredicate(item), "use " + itemOrItemsBallsMacroName(item));
    })));
  };
  /**
   * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
   * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
   * @returns {Macro} This object itself.
   */


  Macro.tryItem = function () {
    var _a;

    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    return (_a = new this()).tryItem.apply(_a, __spread(items));
  };
  /**
   * Add an attack step to the macro.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.attack = function () {
    return this.step("attack");
  };
  /**
   * Create a new macro with an attack step.
   * @returns {Macro} This object itself.
   */


  Macro.attack = function () {
    return new this().attack();
  };

  Macro.SAVED_MACRO_PROPERTY = "libram_savedMacro";
  Macro.cachedMacroId = null;
  Macro.cachedAutoAttack = null;
  return Macro;
}();

exports.Macro = Macro;
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
  kolmafia_1.setAutoAttack(0);

  try {
    kolmafia_1.adv1(loc, 0, "");

    while (kolmafia_1.inMultiFight()) {
      kolmafia_1.runCombat();
    }

    if (kolmafia_1.choiceFollowsFight()) kolmafia_1.visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}

exports.adventureMacro = adventureMacro;
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

function adventureMacroAuto(loc, autoMacro, nextMacro) {
  if (nextMacro === void 0) {
    nextMacro = null;
  }

  nextMacro = nextMacro !== null && nextMacro !== void 0 ? nextMacro : Macro.abort();
  autoMacro.setAutoAttack();
  nextMacro.save();

  try {
    kolmafia_1.adv1(loc, 0, "");

    while (kolmafia_1.inMultiFight()) {
      kolmafia_1.runCombat();
    }

    if (kolmafia_1.choiceFollowsFight()) kolmafia_1.visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}

exports.adventureMacroAuto = adventureMacroAuto;
var templateObject_1, templateObject_2;

/***/ }),

/***/ "../node_modules/libram/dist/console.js":
/*!**********************************************!*\
  !*** ../node_modules/libram/dist/console.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.error = exports.warn = exports.info = exports.log = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia"); // eslint-disable-next-line @typescript-eslint/no-explicit-any


var logColor = function logColor(color) {
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var output = args.map(function (x) {
      return x.toString();
    }).join(" ");

    if (color) {
      kolmafia_1.print(output, color);
    } else {
      kolmafia_1.print(output);
    }
  };
};

exports.log = logColor();
exports.info = logColor("blue");
exports.warn = logColor("red");
exports.error = logColor("red");

/***/ }),

/***/ "../node_modules/libram/dist/index.js":
/*!********************************************!*\
  !*** ../node_modules/libram/dist/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withChoice = exports.withChoices = exports.withProperty = exports.withProperties = exports.setProperties = exports.set = exports.get = exports.property = exports.console = exports.logger = exports.Kmail = void 0;

__exportStar(__webpack_require__(/*! ./ascend */ "../node_modules/libram/dist/ascend.js"), exports);

__exportStar(__webpack_require__(/*! ./Clan */ "../node_modules/libram/dist/Clan.js"), exports);

__exportStar(__webpack_require__(/*! ./combat */ "../node_modules/libram/dist/combat.js"), exports);

__exportStar(__webpack_require__(/*! ./lib */ "../node_modules/libram/dist/lib.js"), exports);

__exportStar(__webpack_require__(/*! ./maximize */ "../node_modules/libram/dist/maximize.js"), exports);

__exportStar(__webpack_require__(/*! ./mood */ "../node_modules/libram/dist/mood.js"), exports);

__exportStar(__webpack_require__(/*! ./resources */ "../node_modules/libram/dist/resources/index.js"), exports);

__exportStar(__webpack_require__(/*! ./since */ "../node_modules/libram/dist/since.js"), exports);

__exportStar(__webpack_require__(/*! ./template-string */ "../node_modules/libram/dist/template-string.js"), exports);

var Kmail_1 = __webpack_require__(/*! ./Kmail */ "../node_modules/libram/dist/Kmail.js");

Object.defineProperty(exports, "Kmail", ({
  enumerable: true,
  get: function get() {
    return __importDefault(Kmail_1)["default"];
  }
}));

__exportStar(__webpack_require__(/*! ./Path */ "../node_modules/libram/dist/Path.js"), exports);

var logger_1 = __webpack_require__(/*! ./logger */ "../node_modules/libram/dist/logger.js");

Object.defineProperty(exports, "logger", ({
  enumerable: true,
  get: function get() {
    return __importDefault(logger_1)["default"];
  }
}));
exports.console = __importStar(__webpack_require__(/*! ./console */ "../node_modules/libram/dist/console.js"));
exports.property = __importStar(__webpack_require__(/*! ./property */ "../node_modules/libram/dist/property.js"));

var property_1 = __webpack_require__(/*! ./property */ "../node_modules/libram/dist/property.js");

Object.defineProperty(exports, "get", ({
  enumerable: true,
  get: function get() {
    return property_1.get;
  }
}));
Object.defineProperty(exports, "set", ({
  enumerable: true,
  get: function get() {
    return property_1.set;
  }
}));
Object.defineProperty(exports, "setProperties", ({
  enumerable: true,
  get: function get() {
    return property_1.setProperties;
  }
}));
Object.defineProperty(exports, "withProperties", ({
  enumerable: true,
  get: function get() {
    return property_1.withProperties;
  }
}));
Object.defineProperty(exports, "withProperty", ({
  enumerable: true,
  get: function get() {
    return property_1.withProperty;
  }
}));
Object.defineProperty(exports, "withChoices", ({
  enumerable: true,
  get: function get() {
    return property_1.withChoices;
  }
}));
Object.defineProperty(exports, "withChoice", ({
  enumerable: true,
  get: function get() {
    return property_1.withChoice;
  }
}));

/***/ }),

/***/ "../node_modules/libram/dist/lib.js":
/*!******************************************!*\
  !*** ../node_modules/libram/dist/lib.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.uneffect = exports.getAverageAdventures = exports.getAverage = exports.noneToNull = exports.canUse = exports.getBanishedMonsters = exports.getZapGroup = exports.getFoldGroup = exports.isCurrentFamiliar = exports.getWandererChance = exports.getFamiliarWandererChance = exports.getKramcoWandererChance = exports.isWandererNow = exports.isVoteWandererNow = exports.haveWandererCounter = exports.getTotalFamiliarWanderers = exports.haveCounter = exports.Wanderer = exports.haveInCampground = exports.have = exports.getRemainingSpleen = exports.getRemainingStomach = exports.getRemainingLiver = exports.getMonsterLocations = exports.canRememberSong = exports.getSongCount = exports.getActiveSongs = exports.getActiveEffects = exports.isSong = exports.getSongLimit = void 0;
/** @module GeneralLibrary */

__webpack_require__(/*! core-js/features/object/entries */ "../node_modules/core-js/features/object/entries.js");

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var template_string_1 = __webpack_require__(/*! ./template-string */ "../node_modules/libram/dist/template-string.js");

var property_1 = __webpack_require__(/*! ./property */ "../node_modules/libram/dist/property.js");

var utils_1 = __webpack_require__(/*! ./utils */ "../node_modules/libram/dist/utils.js");
/**
 * Returns the current maximum Accordion Thief songs the player can have in their head
 *
 * @category General
 */


function getSongLimit() {
  return 3 + (kolmafia_1.booleanModifier("Four Songs") ? 1 : 0) + kolmafia_1.numericModifier("Additional Song");
}

exports.getSongLimit = getSongLimit;
/**
 * Return whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 */

function isSong(skillOrEffect) {
  var skill = skillOrEffect instanceof Effect ? kolmafia_1.toSkill(skillOrEffect) : skillOrEffect;
  return skill["class"] === template_string_1.$class(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Accordion Thief"], ["Accordion Thief"]))) && skill.buff;
}

exports.isSong = isSong;
/**
 * List all active Effects
 *
 * @category General
 */

function getActiveEffects() {
  return Object.keys(kolmafia_1.myEffects()).map(function (e) {
    return Effect.get(e);
  });
}

exports.getActiveEffects = getActiveEffects;
/**
 * List currently active Accordion Thief songs
 *
 * @category General
 */

function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}

exports.getActiveSongs = getActiveSongs;
/**
 * List number of active Accordion Thief songs
 *
 * @category General
 */

function getSongCount() {
  return getActiveSongs().length;
}

exports.getSongCount = getSongCount;
/**
 * Returns true if the player can remember another Accordion Thief song
 *
 * @category General
 * @param quantity Number of songs to test the space for
 */

function canRememberSong(quantity) {
  if (quantity === void 0) {
    quantity = 1;
  }

  return getSongLimit() - getSongCount() >= quantity;
}

exports.canRememberSong = canRememberSong;
/**
 * Return the locations in which the given monster can be encountered naturally
 *
 * @category General
 * @param monster Monster to find
 */

function getMonsterLocations(monster) {
  return Location.all().filter(function (location) {
    return monster.name in kolmafia_1.appearanceRates(location);
  });
}

exports.getMonsterLocations = getMonsterLocations;
/**
 * Return the player's remaining liver space
 *
 * @category General
 */

function getRemainingLiver() {
  return kolmafia_1.inebrietyLimit() - kolmafia_1.myInebriety();
}

exports.getRemainingLiver = getRemainingLiver;
/**
 * Return the player's remaining stomach space
 *
 * @category General
 */

function getRemainingStomach() {
  return kolmafia_1.fullnessLimit() - kolmafia_1.myFullness();
}

exports.getRemainingStomach = getRemainingStomach;
/**
 * Return the player's remaining spleen space
 *
 * @category General
 */

function getRemainingSpleen() {
  return kolmafia_1.spleenLimit() - kolmafia_1.mySpleenUse();
}

exports.getRemainingSpleen = getRemainingSpleen;
/**
 * Return whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Number to check that the player has
 */

function have(thing, quantity) {
  if (quantity === void 0) {
    quantity = 1;
  }

  if (thing instanceof Effect) {
    return kolmafia_1.haveEffect(thing) >= quantity;
  }

  if (thing instanceof Familiar) {
    return kolmafia_1.haveFamiliar(thing);
  }

  if (thing instanceof Item) {
    return kolmafia_1.availableAmount(thing) >= quantity;
  }

  if (thing instanceof Servant) {
    return kolmafia_1.haveServant(thing);
  }

  if (thing instanceof Skill) {
    return kolmafia_1.haveSkill(thing);
  }

  if (thing instanceof Thrall) {
    var thrall = kolmafia_1.myThrall();
    return thrall.id === thing.id && thrall.level >= quantity;
  }

  return false;
}

exports.have = have;
/**
 * Return whether an item is in the player's campground
 *
 * @category General
 * @param item The item mafia uses to represent the campground item
 */

function haveInCampground(item) {
  return Object.keys(kolmafia_1.getCampground()).map(function (i) {
    return Item.get(i);
  }).includes(item);
}

exports.haveInCampground = haveInCampground;
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
})(Wanderer = exports.Wanderer || (exports.Wanderer = {}));

var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Return whether the player has the queried counter
 *
 * @category General
 */

function haveCounter(counterName, minTurns, maxTurns) {
  if (minTurns === void 0) {
    minTurns = 0;
  }

  if (maxTurns === void 0) {
    maxTurns = 500;
  }

  return kolmafia_1.getCounters(counterName, minTurns, maxTurns) === counterName;
}

exports.haveCounter = haveCounter;
/**
 * Returns the player's total number of Artistic Goth Kid and/or Mini-Hipster
 * wanderers encountered today
 *
 * @category Wanderers
 */

function getTotalFamiliarWanderers() {
  var hipsterFights = property_1.get("_hipsterAdv");
  var gothFights = property_1.get("_gothKidFights");
  return hipsterFights + gothFights;
}

exports.getTotalFamiliarWanderers = getTotalFamiliarWanderers;
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

exports.haveWandererCounter = haveWandererCounter;
/**
 * Returns whether the player will encounter a vote wanderer on the next turn,
 * providing an "I Voted!" sticker is equipped.
 *
 * @category Wanderers
 */

function isVoteWandererNow() {
  return kolmafia_1.totalTurnsPlayed() % 11 == 1;
}

exports.isVoteWandererNow = isVoteWandererNow;
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
    return getTotalFamiliarWanderers() < 7;
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return !haveCounter(begin, 1) && haveCounter(end);
}

exports.isWandererNow = isWandererNow;
/**
 * Returns the float chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 *
 * @category Wanderers
 */

function getKramcoWandererChance() {
  var fights = property_1.get("_sausageFights");
  var lastFight = property_1.get("_lastSausageMonsterTurn");
  var totalTurns = kolmafia_1.totalTurnsPlayed();

  if (fights < 1) {
    return lastFight === totalTurns && kolmafia_1.myTurncount() < 1 ? 0.5 : 1.0;
  }

  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1.0, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.pow(Math.max(0, fights - 5), 3)));
}

exports.getKramcoWandererChance = getKramcoWandererChance;
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
  var totalFights = getTotalFamiliarWanderers();
  var probability = [0.5, 0.4, 0.3, 0.2];

  if (totalFights < 4) {
    return probability[totalFights];
  }

  return totalFights > 7 ? 0.0 : 0.1;
}

exports.getFamiliarWandererChance = getFamiliarWandererChance;
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

  var counters = property_1.get("relayCounters");
  var re = new RegExp("(\\d+):" + end);
  var matches = counters.match(re);

  if (matches && matches.length === 2) {
    var window = Number.parseInt(matches[1]) - kolmafia_1.myTurncount();
    return 1.0 / window;
  }

  return 0.0;
}

exports.getWandererChance = getWandererChance;
/**
 * Returns true if the player's current familiar is equal to the one supplied
 *
 * @category General
 * @param familiar Familiar to check
 */

function isCurrentFamiliar(familiar) {
  return kolmafia_1.myFamiliar() === familiar;
}

exports.isCurrentFamiliar = isCurrentFamiliar;
/**
 * Returns the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 */

function getFoldGroup(item) {
  return Object.entries(kolmafia_1.getRelated(item, "fold")).sort(function (_a, _b) {
    var _c = __read(_a, 2),
        a = _c[1];

    var _d = __read(_b, 2),
        b = _d[1];

    return a - b;
  }).map(function (_a) {
    var _b = __read(_a, 1),
        i = _b[0];

    return Item.get(i);
  });
}

exports.getFoldGroup = getFoldGroup;
/**
 * Returns the zap group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required zap group
 */

function getZapGroup(item) {
  return Object.keys(kolmafia_1.getRelated(item, "zap")).map(function (i) {
    return Item.get(i);
  });
}

exports.getZapGroup = getZapGroup;
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 */

function getBanishedMonsters() {
  var e_1, _a;

  var banishes = utils_1.chunk(property_1.get("banishedMonsters").split(":"), 3);
  var result = new Map();

  try {
    for (var banishes_1 = __values(banishes), banishes_1_1 = banishes_1.next(); !banishes_1_1.done; banishes_1_1 = banishes_1.next()) {
      var _b = __read(banishes_1_1.value, 2),
          foe = _b[0],
          banisher = _b[1];

      if (foe === undefined || banisher === undefined) break; // toItem doesn"t error if the item doesn"t exist, so we have to use that.

      var banisherItem = kolmafia_1.toItem(banisher);
      var banisherObject = [Item.get("none"), null].includes(banisherItem) ? Skill.get(banisher) : banisherItem;
      result.set(banisherObject, Monster.get(foe));
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (banishes_1_1 && !banishes_1_1.done && (_a = banishes_1["return"])) _a.call(banishes_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return result;
}

exports.getBanishedMonsters = getBanishedMonsters;
/**
 * Returns true if the item is usable
 *
 * This function will be an ongoing work in progress
 *
 * @param item Item to check
 */

function canUse(item) {
  var path = kolmafia_1.myPath();

  if (path !== "Nuclear Autumn") {
    if (template_string_1.$items(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"], ["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
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

exports.canUse = canUse;
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

exports.noneToNull = noneToNull;
/**
 * Return the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 */

function getAverage(range) {
  var _a;

  if (range.indexOf("-") < 0) return Number(range);

  var _b = __read((_a = range.match(/(-?[0-9]+)-(-?[0-9]+)/)) !== null && _a !== void 0 ? _a : ["0", "0", "0"], 3),
      lower = _b[1],
      upper = _b[2];

  return (Number(lower) + Number(upper)) / 2;
}

exports.getAverage = getAverage;
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

exports.getAverageAdventures = getAverageAdventures;
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 */

function uneffect(effect) {
  return kolmafia_1.cliExecute("uneffect " + effect.name);
}

exports.uneffect = uneffect;
var templateObject_1, templateObject_2;

/***/ }),

/***/ "../node_modules/libram/dist/logger.js":
/*!*********************************************!*\
  !*** ../node_modules/libram/dist/logger.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var defaultHandlers = {
  info: function info(message) {
    return kolmafia_1.printHtml("<b>[Libram]</b> " + message);
  },
  warning: function warning(message) {
    return kolmafia_1.printHtml("<span style=\"background: orange; color: white;\"><b>[Libram]</b> " + message + "</span>");
  },
  error: function error(_error) {
    return kolmafia_1.printHtml("<span style=\"background: red; color: white;\"><b>[Libram]</b> " + _error.toString() + "</span>");
  }
};

var Logger =
/** @class */
function () {
  function Logger() {
    this.handlers = defaultHandlers;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  Logger.prototype.setHandler = function (level, callback) {
    this.handlers[level] = callback;
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  Logger.prototype.log = function (level, message) {
    this.handlers[level](message);
  };

  Logger.prototype.info = function (message) {
    this.log("info", message);
  };

  Logger.prototype.warning = function (message) {
    this.log("warning", message);
  };

  Logger.prototype.error = function (message) {
    this.log("error", message);
  };

  return Logger;
}();

exports.default = new Logger();

/***/ }),

/***/ "../node_modules/libram/dist/maximize.js":
/*!***********************************************!*\
  !*** ../node_modules/libram/dist/maximize.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.maximizeCached = exports.setDefaultMaximizeOptions = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var template_string_1 = __webpack_require__(/*! ./template-string */ "../node_modules/libram/dist/template-string.js");

var logger_1 = __importDefault(__webpack_require__(/*! ./logger */ "../node_modules/libram/dist/logger.js"));

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
}

exports.setDefaultMaximizeOptions = setDefaultMaximizeOptions; // Subset of slots that are valid for caching.

var cachedSlots = template_string_1.$slots(templateObject_1 || (templateObject_1 = __makeTemplateObject(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"], ["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));

var CacheEntry =
/** @class */
function () {
  function CacheEntry(equipment, rider, familiar, canEquipItemCount) {
    this.equipment = equipment;
    this.rider = rider;
    this.familiar = familiar;
    this.canEquipItemCount = canEquipItemCount;
  }

  return CacheEntry;
}(); // Objective cache entries.


var cachedObjectives = {}; // Cache to prevent rescanning all items unnecessarily

var cachedStats = [0, 0, 0];
var cachedCanEquipItemCount = 0;
/**
 * Count the number of unique items that can be equipped.
 * @returns The count of unique items.
 */

function canEquipItemCount() {
  var stats = template_string_1.$stats(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Muscle, Mysticality, Moxie"], ["Muscle, Mysticality, Moxie"]))).map(function (stat) {
    return Math.min(kolmafia_1.myBasestat(stat), 300);
  });

  if (stats.every(function (value, index) {
    return value === cachedStats[index];
  })) {
    return cachedCanEquipItemCount;
  }

  cachedStats = stats;
  cachedCanEquipItemCount = Item.all().filter(function (item) {
    return kolmafia_1.canEquip(item);
  }).length;
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

  if (updateOnFamiliarChange && kolmafia_1.myFamiliar() !== entry.familiar) {
    logger_1["default"].warning("Equipment found in maximize cache but familiar is different.");
    return null;
  }

  if (updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount()) {
    logger_1["default"].warning("Equipment found in maximize cache but equippable item list is out of date.");
    return null;
  }

  return entry;
}
/**
 * Applies equipment that was found in the cache.
 * @param entry The CacheEntry to apply
 */


function applyCached(entry) {
  var e_1, _a;

  try {
    for (var _b = __values(entry.equipment), _c = _b.next(); !_c.done; _c = _b.next()) {
      var _d = __read(_c.value, 2),
          slot = _d[0],
          item = _d[1];

      if (kolmafia_1.equippedItem(slot) !== item && kolmafia_1.availableAmount(item) > 0) {
        kolmafia_1.equip(slot, item);
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  if (kolmafia_1.equippedAmount(template_string_1.$item(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Crown of Thrones"], ["Crown of Thrones"])))) > 0 && entry.rider.get(template_string_1.$item(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Crown of Thrones"], ["Crown of Thrones"]))))) {
    kolmafia_1.enthroneFamiliar(entry.rider.get(template_string_1.$item(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Crown of Thrones"], ["Crown of Thrones"])))) || template_string_1.$familiar(templateObject_6 || (templateObject_6 = __makeTemplateObject(["none"], ["none"]))));
  }

  if (kolmafia_1.equippedAmount(template_string_1.$item(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Buddy Bjorn"], ["Buddy Bjorn"])))) > 0 && entry.rider.get(template_string_1.$item(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Buddy Bjorn"], ["Buddy Bjorn"]))))) {
    kolmafia_1.bjornifyFamiliar(entry.rider.get(template_string_1.$item(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Buddy Bjorn"], ["Buddy Bjorn"])))) || template_string_1.$familiar(templateObject_10 || (templateObject_10 = __makeTemplateObject(["none"], ["none"]))));
  }
}
/**
 * Verifies that a CacheEntry was applied successfully.
 * @param entry The CacheEntry to verify
 * @returns If all desired equipment was appliedn in the correct slots.
 */


function verifyCached(entry) {
  var e_2, _a;

  var success = true;

  try {
    for (var _b = __values(entry.equipment), _c = _b.next(); !_c.done; _c = _b.next()) {
      var _d = __read(_c.value, 2),
          slot = _d[0],
          item = _d[1];

      if (kolmafia_1.equippedItem(slot) !== item) {
        logger_1["default"].warning("Failed to apply cached " + item + " in " + slot + ".");
        success = false;
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  if (kolmafia_1.equippedAmount(template_string_1.$item(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Crown of Thrones"], ["Crown of Thrones"])))) > 0 && entry.rider.get(template_string_1.$item(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Crown of Thrones"], ["Crown of Thrones"]))))) {
    if (entry.rider.get(template_string_1.$item(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Crown of Thrones"], ["Crown of Thrones"])))) !== kolmafia_1.myEnthronedFamiliar()) {
      logger_1["default"].warning("Failed to apply " + entry.rider.get(template_string_1.$item(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Crown of Thrones"], ["Crown of Thrones"])))) + " in " + template_string_1.$item(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Crown of Thrones"], ["Crown of Thrones"]))) + ".");
      success = false;
    }
  }

  if (kolmafia_1.equippedAmount(template_string_1.$item(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Buddy Bjorn"], ["Buddy Bjorn"])))) > 0 && entry.rider.get(template_string_1.$item(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Buddy Bjorn"], ["Buddy Bjorn"]))))) {
    if (entry.rider.get(template_string_1.$item(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Buddy Bjorn"], ["Buddy Bjorn"])))) !== kolmafia_1.myBjornedFamiliar()) {
      logger_1["default"].warning("Failed to apply" + entry.rider.get(template_string_1.$item(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Buddy Bjorn"], ["Buddy Bjorn"])))) + " in " + template_string_1.$item(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Buddy Bjorn"], ["Buddy Bjorn"]))) + ".");
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
  var e_3, _a, e_4, _b, e_5, _c;

  var equipment = new Map();
  var rider = new Map();

  try {
    for (var cachedSlots_1 = __values(cachedSlots), cachedSlots_1_1 = cachedSlots_1.next(); !cachedSlots_1_1.done; cachedSlots_1_1 = cachedSlots_1.next()) {
      var slot = cachedSlots_1_1.value;
      equipment.set(slot, kolmafia_1.equippedItem(slot));
    }
  } catch (e_3_1) {
    e_3 = {
      error: e_3_1
    };
  } finally {
    try {
      if (cachedSlots_1_1 && !cachedSlots_1_1.done && (_a = cachedSlots_1["return"])) _a.call(cachedSlots_1);
    } finally {
      if (e_3) throw e_3.error;
    }
  }

  if (kolmafia_1.equippedAmount(template_string_1.$item(templateObject_21 || (templateObject_21 = __makeTemplateObject(["card sleeve"], ["card sleeve"])))) > 0) {
    equipment.set(template_string_1.$slot(templateObject_22 || (templateObject_22 = __makeTemplateObject(["card-sleeve"], ["card-sleeve"]))), kolmafia_1.equippedItem(template_string_1.$slot(templateObject_23 || (templateObject_23 = __makeTemplateObject(["card-sleeve"], ["card-sleeve"])))));
  }

  if (kolmafia_1.equippedAmount(template_string_1.$item(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Crown of Thrones"], ["Crown of Thrones"])))) > 0) {
    rider.set(template_string_1.$item(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Crown of Thrones"], ["Crown of Thrones"]))), kolmafia_1.myEnthronedFamiliar());
  }

  if (kolmafia_1.equippedAmount(template_string_1.$item(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Buddy Bjorn"], ["Buddy Bjorn"])))) > 0) {
    rider.set(template_string_1.$item(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Buddy Bjorn"], ["Buddy Bjorn"]))), kolmafia_1.myBjornedFamiliar());
  }

  if (options.preventSlot && options.preventSlot.length > 0) {
    try {
      for (var _d = __values(options.preventSlot), _e = _d.next(); !_e.done; _e = _d.next()) {
        var slot = _e.value;
        equipment["delete"](slot);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_e && !_e.done && (_b = _d["return"])) _b.call(_d);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    if (options.preventSlot.includes(template_string_1.$slot(templateObject_28 || (templateObject_28 = __makeTemplateObject(["buddy-bjorn"], ["buddy-bjorn"]))))) {
      rider["delete"](template_string_1.$item(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Buddy Bjorn"], ["Buddy Bjorn"]))));
    }

    if (options.preventSlot.includes(template_string_1.$slot(templateObject_30 || (templateObject_30 = __makeTemplateObject(["crown-of-thrones"], ["crown-of-thrones"]))))) {
      rider["delete"](template_string_1.$item(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Crown of Thrones"], ["Crown of Thrones"]))));
    }
  }

  if (options.onlySlot && options.onlySlot.length > 0) {
    try {
      for (var _f = __values(Slot.all()), _g = _f.next(); !_g.done; _g = _f.next()) {
        var slot = _g.value;

        if (!options.onlySlot.includes(slot)) {
          equipment["delete"](slot);
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (_g && !_g.done && (_c = _f["return"])) _c.call(_f);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    if (!options.onlySlot.includes(template_string_1.$slot(templateObject_32 || (templateObject_32 = __makeTemplateObject(["buddy-bjorn"], ["buddy-bjorn"]))))) {
      rider["delete"](template_string_1.$item(templateObject_33 || (templateObject_33 = __makeTemplateObject(["Buddy Bjorn"], ["Buddy Bjorn"]))));
    }

    if (!options.onlySlot.includes(template_string_1.$slot(templateObject_34 || (templateObject_34 = __makeTemplateObject(["crown-of-thrones"], ["crown-of-thrones"]))))) {
      rider["delete"](template_string_1.$item(templateObject_35 || (templateObject_35 = __makeTemplateObject(["Crown of Thrones"], ["Crown of Thrones"]))));
    }
  }

  cachedObjectives[cacheKey] = new CacheEntry(equipment, rider, kolmafia_1.myFamiliar(), canEquipItemCount());
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


function maximizeCached(objectives, options) {
  if (options === void 0) {
    options = {};
  }

  var _a = __assign(__assign({}, defaultMaximizeOptions), options),
      updateOnFamiliarChange = _a.updateOnFamiliarChange,
      updateOnCanEquipChanged = _a.updateOnCanEquipChanged,
      forceEquip = _a.forceEquip,
      preventEquip = _a.preventEquip,
      bonusEquip = _a.bonusEquip,
      onlySlot = _a.onlySlot,
      preventSlot = _a.preventSlot; // Sort each group in objective to ensure consistent ordering in string


  var objective = __spread(objectives.sort(), forceEquip.map(function (item) {
    return "equip " + item;
  }).sort(), preventEquip.map(function (item) {
    return "-equip " + item;
  }).sort(), onlySlot.filter(function (slot) {
    return !template_string_1.$slots(templateObject_36 || (templateObject_36 = __makeTemplateObject(["buddy-bjorn, crown-of-thrones"], ["buddy-bjorn, crown-of-thrones"]))).includes(slot);
  }).map(function (slot) {
    return "" + slot;
  }).sort(), preventSlot.filter(function (slot) {
    return !template_string_1.$slots(templateObject_37 || (templateObject_37 = __makeTemplateObject(["buddy-bjorn, crown-of-thrones"], ["buddy-bjorn, crown-of-thrones"]))).includes(slot);
  }).map(function (slot) {
    return "-" + slot;
  }).sort(), Array.from(bonusEquip.entries()).map(function (_a) {
    var _b = __read(_a, 2),
        item = _b[0],
        bonus = _b[1];

    return Math.round(bonus * 100) / 100 + " bonus " + item;
  }).sort()).join(", ");

  var cacheEntry = checkCache(objective, updateOnFamiliarChange, updateOnCanEquipChanged);

  if (cacheEntry) {
    logger_1["default"].info("Equipment found in maximize cache, equipping...");
    applyCached(cacheEntry);

    if (verifyCached(cacheEntry)) {
      logger_1["default"].info("Equipped cached " + objective);
      return;
    }

    logger_1["default"].warning("Maximize cache application failed, maximizing...");
  }

  kolmafia_1.maximize(objective, false);
  saveCached(objective, options);
}

exports.maximizeCached = maximizeCached;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37;

/***/ }),

/***/ "../node_modules/libram/dist/mood.js":
/*!*******************************************!*\
  !*** ../node_modules/libram/dist/mood.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Mood = exports.MagicalSausages = exports.OscusSoda = exports.MpSource = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var lib_1 = __webpack_require__(/*! ./lib */ "../node_modules/libram/dist/lib.js");

var property_1 = __webpack_require__(/*! ./property */ "../node_modules/libram/dist/property.js");

var template_string_1 = __webpack_require__(/*! ./template-string */ "../node_modules/libram/dist/template-string.js");

var utils_1 = __webpack_require__(/*! ./utils */ "../node_modules/libram/dist/utils.js");

var MpSource =
/** @class */
function () {
  function MpSource() {}

  MpSource.prototype.usesRemaining = function () {
    return null;
  };

  MpSource.prototype.availableMpMax = function () {
    return this.availableMpMin();
  };

  return MpSource;
}();

exports.MpSource = MpSource;

var OscusSoda =
/** @class */
function (_super) {
  __extends(OscusSoda, _super);

  function OscusSoda() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  OscusSoda.prototype.available = function () {
    return lib_1.have(template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Oscus's neverending soda"], ["Oscus's neverending soda"]))));
  };

  OscusSoda.prototype.usesRemaining = function () {
    return property_1.get("oscusSodaUsed") ? 0 : 1;
  };

  OscusSoda.prototype.availableMpMin = function () {
    return this.available() ? 200 : 0;
  };

  OscusSoda.prototype.availableMpMax = function () {
    return this.available() ? 300 : 0;
  };

  OscusSoda.prototype.execute = function () {
    kolmafia_1.use(template_string_1.$item(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Oscus's neverending soda"], ["Oscus's neverending soda"]))));
  };

  OscusSoda.instance = new OscusSoda();
  return OscusSoda;
}(MpSource);

exports.OscusSoda = OscusSoda;

var MagicalSausages =
/** @class */
function (_super) {
  __extends(MagicalSausages, _super);

  function MagicalSausages() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MagicalSausages.prototype.usesRemaining = function () {
    return 23 - property_1.get("_sausagesEaten");
  };

  MagicalSausages.prototype.availableMpMin = function () {
    var maxSausages = Math.min(23 - property_1.get("_sausagesEaten"), kolmafia_1.itemAmount(template_string_1.$item(templateObject_3 || (templateObject_3 = __makeTemplateObject(["magical sausage"], ["magical sausage"])))) + kolmafia_1.itemAmount(template_string_1.$item(templateObject_4 || (templateObject_4 = __makeTemplateObject(["magical sausage casing"], ["magical sausage casing"])))));
    return Math.min(kolmafia_1.myMaxmp(), 999) * maxSausages;
  };

  MagicalSausages.prototype.execute = function () {
    var mpSpaceAvailable = kolmafia_1.myMaxmp() - kolmafia_1.myMp();
    if (mpSpaceAvailable < 700) return;
    var maxSausages = Math.min(23 - property_1.get("_sausagesEaten"), kolmafia_1.itemAmount(template_string_1.$item(templateObject_5 || (templateObject_5 = __makeTemplateObject(["magical sausage"], ["magical sausage"])))) + kolmafia_1.itemAmount(template_string_1.$item(templateObject_6 || (templateObject_6 = __makeTemplateObject(["magical sausage casing"], ["magical sausage casing"])))), Math.floor((kolmafia_1.myMaxmp() - kolmafia_1.myMp()) / Math.min(kolmafia_1.myMaxmp() - kolmafia_1.myMp(), 999)));
    kolmafia_1.retrieveItem(maxSausages, template_string_1.$item(templateObject_7 || (templateObject_7 = __makeTemplateObject(["magical sausage"], ["magical sausage"]))));
    kolmafia_1.eat(maxSausages, template_string_1.$item(templateObject_8 || (templateObject_8 = __makeTemplateObject(["magical sausage"], ["magical sausage"]))));
  };

  MagicalSausages.instance = new MagicalSausages();
  return MagicalSausages;
}(MpSource);

exports.MagicalSausages = MagicalSausages;

var MoodElement =
/** @class */
function () {
  function MoodElement() {}

  MoodElement.prototype.mpCostPerTurn = function () {
    return 0;
  };

  MoodElement.prototype.turnIncrement = function () {
    return 1;
  };

  return MoodElement;
}();

var SkillMoodElement =
/** @class */
function (_super) {
  __extends(SkillMoodElement, _super);

  function SkillMoodElement(skill) {
    var _this = _super.call(this) || this;

    _this.skill = skill;
    return _this;
  }

  SkillMoodElement.prototype.mpCostPerTurn = function () {
    var turns = kolmafia_1.turnsPerCast(this.skill);
    return turns > 0 ? kolmafia_1.mpCost(this.skill) / turns : 0;
  };

  SkillMoodElement.prototype.turnIncrement = function () {
    return kolmafia_1.turnsPerCast(this.skill);
  };

  SkillMoodElement.prototype.execute = function (mood, ensureTurns) {
    var e_1, _a;

    var effect = kolmafia_1.toEffect(this.skill);
    var initialTurns = kolmafia_1.haveEffect(effect);
    if (!kolmafia_1.haveSkill(this.skill)) return false;
    if (initialTurns >= ensureTurns) return true; // Deal with song slots.

    if (mood.options.songSlots.length > 0 && lib_1.isSong(this.skill)) {
      var _loop_1 = function _loop_1(song) {
        var slot = mood.options.songSlots.find(function (slot) {
          return slot.includes(song);
        });
        if (!slot || slot.includes(effect)) kolmafia_1.cliExecute("shrug " + song);
      };

      try {
        for (var _b = __values(lib_1.getActiveSongs()), _c = _b.next(); !_c.done; _c = _b.next()) {
          var song = _c.value;

          _loop_1(song);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }

    var oldRemainingCasts = -1;
    var remainingCasts = Math.ceil((ensureTurns - kolmafia_1.haveEffect(effect)) / kolmafia_1.turnsPerCast(this.skill));

    while (remainingCasts > 0 && oldRemainingCasts !== remainingCasts) {
      var maxCasts = void 0;

      if (kolmafia_1.hpCost(this.skill) > 0) {
        // FIXME: restore HP
        maxCasts = Math.floor(kolmafia_1.myHp() / kolmafia_1.hpCost(this.skill));
      } else {
        var cost = kolmafia_1.mpCost(this.skill);
        maxCasts = Math.floor(kolmafia_1.myMp() / cost);

        if (maxCasts === 0) {
          mood.moreMp(cost);
          maxCasts = Math.floor(kolmafia_1.myMp() / cost);
        }
      }

      var casts = utils_1.clamp(remainingCasts, 0, Math.min(100, maxCasts));
      kolmafia_1.useSkill(casts, this.skill);
      oldRemainingCasts = remainingCasts;
      remainingCasts = Math.ceil((ensureTurns - kolmafia_1.haveEffect(effect)) / kolmafia_1.turnsPerCast(this.skill));
    }

    return kolmafia_1.haveEffect(effect) > ensureTurns;
  };

  return SkillMoodElement;
}(MoodElement);

var PotionMoodElement =
/** @class */
function (_super) {
  __extends(PotionMoodElement, _super);

  function PotionMoodElement(potion, maxPricePerTurn) {
    var _this = _super.call(this) || this;

    _this.potion = potion;
    _this.maxPricePerTurn = maxPricePerTurn;
    return _this;
  }

  PotionMoodElement.prototype.execute = function (mood, ensureTurns) {
    // FIXME: Smarter buying logic.
    // FIXME: Allow constructing stuff (e.g. snow cleats)
    var effect = kolmafia_1.effectModifier(this.potion, "Effect");
    var effectTurns = kolmafia_1.haveEffect(effect);
    var turnsPerUse = kolmafia_1.numericModifier(this.potion, "Effect Duration");

    if (kolmafia_1.mallPrice(this.potion) > this.maxPricePerTurn * turnsPerUse) {
      return false;
    }

    if (effectTurns < ensureTurns) {
      var uses = (ensureTurns - effectTurns) / turnsPerUse;
      var quantityToBuy = utils_1.clamp(uses - kolmafia_1.availableAmount(this.potion), 0, 100);
      kolmafia_1.buy(quantityToBuy, this.potion, this.maxPricePerTurn * turnsPerUse);
      var quantityToUse = utils_1.clamp(uses, 0, kolmafia_1.availableAmount(this.potion));
      kolmafia_1.use(quantityToUse, this.potion);
    }

    return kolmafia_1.haveEffect(effect) >= ensureTurns;
  };

  return PotionMoodElement;
}(MoodElement);

var GenieMoodElement =
/** @class */
function (_super) {
  __extends(GenieMoodElement, _super);

  function GenieMoodElement(effect) {
    var _this = _super.call(this) || this;

    _this.effect = effect;
    return _this;
  }

  GenieMoodElement.prototype.execute = function (mood, ensureTurns) {
    if (kolmafia_1.haveEffect(this.effect) >= ensureTurns) return true;
    var neededWishes = Math.ceil((kolmafia_1.haveEffect(this.effect) - ensureTurns) / 20);
    var wishesToBuy = utils_1.clamp(neededWishes - kolmafia_1.availableAmount(template_string_1.$item(templateObject_9 || (templateObject_9 = __makeTemplateObject(["pocket wish"], ["pocket wish"])))), 0, 20);
    kolmafia_1.buy(wishesToBuy, template_string_1.$item(templateObject_10 || (templateObject_10 = __makeTemplateObject(["pocket wish"], ["pocket wish"]))), 50000);
    var wishesToUse = utils_1.clamp(neededWishes, 0, kolmafia_1.availableAmount(template_string_1.$item(templateObject_11 || (templateObject_11 = __makeTemplateObject(["pocket wish"], ["pocket wish"])))));

    for (; wishesToUse > 0; wishesToUse--) {
      kolmafia_1.cliExecute("genie effect " + this.effect.name);
    }

    return kolmafia_1.haveEffect(this.effect) >= ensureTurns;
  };

  return GenieMoodElement;
}(MoodElement);

var CustomMoodElement =
/** @class */
function (_super) {
  __extends(CustomMoodElement, _super);

  function CustomMoodElement(effect, gainEffect) {
    var _this = _super.call(this) || this;

    _this.effect = effect;
    _this.gainEffect = gainEffect !== null && gainEffect !== void 0 ? gainEffect : function () {
      return kolmafia_1.cliExecute(effect["default"]);
    };
    return _this;
  }

  CustomMoodElement.prototype.execute = function (mood, ensureTurns) {
    var currentTurns = kolmafia_1.haveEffect(this.effect);
    var lastCurrentTurns = -1;

    while (currentTurns < ensureTurns && currentTurns !== lastCurrentTurns) {
      this.gainEffect();
      lastCurrentTurns = currentTurns;
      currentTurns = kolmafia_1.haveEffect(this.effect);
    }

    return kolmafia_1.haveEffect(this.effect) > ensureTurns;
  };

  return CustomMoodElement;
}(MoodElement);
/**
 * Class representing a mood object. Add mood elements using the instance methods, which can be chained.
 */


var Mood =
/** @class */
function () {
  /**
   * Construct a new Mood instance.
   * @param options Options for mood.
   */
  function Mood(options) {
    if (options === void 0) {
      options = {};
    }

    this.elements = [];
    this.options = __assign(__assign({}, Mood.defaultOptions), options);
  }
  /**
   * Set default options for new Mood instances.
   * @param options Default options for new Mood instances.
   */


  Mood.setDefaultOptions = function (options) {
    Mood.defaultOptions = __assign(__assign({}, Mood.defaultOptions), options);
  };
  /**
   * Get the MP available for casting skills.
   */


  Mood.prototype.availableMp = function () {
    return this.options.mpSources.map(function (mpSource) {
      return mpSource.availableMpMin();
    }).reduce(function (x, y) {
      return x + y;
    }, 0);
  };

  Mood.prototype.moreMp = function (minimumTarget) {
    var e_2, _a;

    try {
      for (var _b = __values(this.options.mpSources), _c = _b.next(); !_c.done; _c = _b.next()) {
        var mpSource = _c.value;
        var usesRemaining = mpSource.usesRemaining();

        if (usesRemaining !== null && usesRemaining > 0) {
          mpSource.execute();
          if (kolmafia_1.myMp() >= minimumTarget) break;
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
  };
  /**
   * Add a skill to the mood.
   * @param skill Skill to add.
   */


  Mood.prototype.skill = function (skill) {
    this.elements.push(new SkillMoodElement(skill));
    return this;
  };
  /**
   * Add an effect to the mood, with casting based on {effect.default}.
   * @param effect Effect to add.
   * @param gainEffect How to gain the effect. Only runs if we don't have the effect.
   */


  Mood.prototype.effect = function (effect, gainEffect) {
    var skill = kolmafia_1.toSkill(effect);

    if (!gainEffect && skill !== template_string_1.$skill(templateObject_12 || (templateObject_12 = __makeTemplateObject(["none"], ["none"])))) {
      this.skill(skill);
    } else {
      this.elements.push(new CustomMoodElement(effect, gainEffect));
    }

    return this;
  };
  /**
   * Add a potion to the mood.
   * @param potion Potion to add.
   * @param maxPricePerTurn Maximum price to pay per turn of the effect.
   */


  Mood.prototype.potion = function (potion, maxPricePerTurn) {
    this.elements.push(new PotionMoodElement(potion, maxPricePerTurn));
    return this;
  };
  /**
   * Add an effect to acquire via pocket wishes to the mood.
   * @param effect Effect to wish for in the mood.
   */


  Mood.prototype.genie = function (effect) {
    this.elements.push(new GenieMoodElement(effect));
    return this;
  };
  /**
   * Execute the mood, trying to ensure {ensureTurns} of each effect.
   * @param ensureTurns Turns of each effect to try and achieve.
   * @returns Whether or not we successfully got this many turns of every effect in the mood.
   */


  Mood.prototype.execute = function (ensureTurns) {
    var e_3, _a;

    if (ensureTurns === void 0) {
      ensureTurns = 1;
    }

    var availableMp = this.availableMp();
    var totalMpPerTurn = this.elements.map(function (element) {
      return element.mpCostPerTurn();
    }).reduce(function (x, y) {
      return x + y;
    }, 0);
    var potentialTurns = Math.floor(availableMp / totalMpPerTurn);
    var completeSuccess = true;

    try {
      for (var _b = __values(this.elements), _c = _b.next(); !_c.done; _c = _b.next()) {
        var element = _c.value;
        var elementTurns = ensureTurns;

        if (element.mpCostPerTurn() > 0) {
          var elementPotentialTurns = Math.floor(potentialTurns / element.turnIncrement()) * element.turnIncrement();
          elementTurns = Math.min(ensureTurns, elementPotentialTurns);
        }

        completeSuccess = element.execute(this, elementTurns) || completeSuccess;
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    return completeSuccess;
  };

  Mood.defaultOptions = {
    songSlots: [],
    mpSources: [MagicalSausages.instance, OscusSoda.instance]
  };
  return Mood;
}();

exports.Mood = Mood;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;

/***/ }),

/***/ "../node_modules/libram/dist/property.js":
/*!***********************************************!*\
  !*** ../node_modules/libram/dist/property.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PropertiesManager = exports.withChoice = exports.withChoices = exports.withProperty = exports.withProperties = exports.setProperties = exports.set = exports.get = exports.getThrall = exports.getStat = exports.getSlot = exports.getSkill = exports.getServant = exports.getPhylum = exports.getMonster = exports.getLocation = exports.getItem = exports.getFamiliar = exports.getElement = exports.getEffect = exports.getCoinmaster = exports.getClass = exports.getBounty = exports.getNumber = exports.getBoolean = exports.getCommaSeparated = exports.getString = void 0;

__webpack_require__(/*! core-js/features/object/entries */ "../node_modules/core-js/features/object/entries.js");

__webpack_require__(/*! core-js/features/object/from-entries */ "../node_modules/core-js/features/object/from-entries.js");

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var propertyTyping_1 = __webpack_require__(/*! ./propertyTyping */ "../node_modules/libram/dist/propertyTyping.js");

var createPropertyGetter = function createPropertyGetter(transform) {
  return function (property, default_) {
    var value = kolmafia_1.getProperty(property);

    if (default_ !== undefined && value === "") {
      return default_;
    }

    return transform(value, property);
  };
};

var createMafiaClassPropertyGetter = function createMafiaClassPropertyGetter(Type) {
  return createPropertyGetter(function (value) {
    if (value === "") return null;
    var v = Type.get(value);
    return v === Type.get("none") ? null : v;
  });
};

exports.getString = createPropertyGetter(function (value) {
  return value;
});
exports.getCommaSeparated = createPropertyGetter(function (value) {
  return value.split(/, ?/);
});
exports.getBoolean = createPropertyGetter(function (value) {
  return value === "true";
});
exports.getNumber = createPropertyGetter(function (value) {
  return Number(value);
});
exports.getBounty = createMafiaClassPropertyGetter(Bounty);
exports.getClass = createMafiaClassPropertyGetter(Class);
exports.getCoinmaster = createMafiaClassPropertyGetter(Coinmaster);
exports.getEffect = createMafiaClassPropertyGetter(Effect);
exports.getElement = createMafiaClassPropertyGetter(Element);
exports.getFamiliar = createMafiaClassPropertyGetter(Familiar);
exports.getItem = createMafiaClassPropertyGetter(Item);
exports.getLocation = createMafiaClassPropertyGetter(Location);
exports.getMonster = createMafiaClassPropertyGetter(Monster);
exports.getPhylum = createMafiaClassPropertyGetter(Phylum);
exports.getServant = createMafiaClassPropertyGetter(Servant);
exports.getSkill = createMafiaClassPropertyGetter(Skill);
exports.getSlot = createMafiaClassPropertyGetter(Slot);
exports.getStat = createMafiaClassPropertyGetter(Stat);
exports.getThrall = createMafiaClassPropertyGetter(Thrall);

function get(property, _default) {
  var value = exports.getString(property);

  if (propertyTyping_1.isMonsterProperty(property)) {
    return exports.getMonster(property, _default);
  }

  if (propertyTyping_1.isLocationProperty(property)) {
    return exports.getLocation(property, _default);
  }

  if (value === "") {
    return _default === undefined ? "" : _default;
  }

  if (propertyTyping_1.isBooleanProperty(property, value)) {
    return exports.getBoolean(property, _default);
  }

  if (propertyTyping_1.isNumericProperty(property, value)) {
    return exports.getNumber(property, _default);
  }

  return value;
}

exports.get = get;

function set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  kolmafia_1.setProperty(property, stringValue);
}

exports.set = set;

function setProperties(properties) {
  var e_1, _a;

  try {
    for (var _b = __values(Object.entries(properties)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var _d = __read(_c.value, 2),
          prop = _d[0],
          value = _d[1];

      set(prop, value);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
}

exports.setProperties = setProperties;

function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(function (_a) {
    var _b = __read(_a, 1),
        prop = _b[0];

    return [prop, get(prop)];
  }));
  setProperties(properties);

  try {
    callback();
  } finally {
    setProperties(propertiesBackup);
  }
}

exports.withProperties = withProperties;

function withProperty(property, value, callback) {
  var _a;

  withProperties((_a = {}, _a[property] = value, _a), callback);
}

exports.withProperty = withProperty;

function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(function (_a) {
    var _b = __read(_a, 2),
        choice = _b[0],
        option = _b[1];

    return ["choiceAdventure" + choice, option];
  }));
  withProperties(properties, callback);
}

exports.withChoices = withChoices;

function withChoice(choice, value, callback) {
  var _a;

  withChoices((_a = {}, _a[choice] = value, _a), callback);
}

exports.withChoice = withChoice;

var PropertiesManager =
/** @class */
function () {
  function PropertiesManager() {
    this.properties = {};
  }

  PropertiesManager.prototype.set = function (propertiesToSet) {
    this.properties = __assign(__assign({}, Object.keys(propertiesToSet).map(function (propertyName) {
      return [propertyName, get(propertyName)];
    })), this.properties);
    Object.entries(propertiesToSet).forEach(function (_a) {
      var _b = __read(_a, 2),
          propertyName = _b[0],
          propertyValue = _b[1];

      set(propertyName, propertyValue);
    });
  };

  PropertiesManager.prototype.setChoices = function (choicesToSet) {
    this.set(Object.fromEntries(Object.entries(choicesToSet).map(function (_a) {
      var _b = __read(_a, 2),
          choiceNumber = _b[0],
          choiceValue = _b[1];

      return ["choiceAdventure" + choiceNumber, choiceValue];
    })));
  };

  PropertiesManager.prototype.resetAll = function () {
    Object.entries(this.properties).forEach(function (_a) {
      var _b = __read(_a, 2),
          propertyName = _b[0],
          propertyValue = _b[1];

      return set(propertyName, propertyValue);
    });
  };

  return PropertiesManager;
}();

exports.PropertiesManager = PropertiesManager;

/***/ }),

/***/ "../node_modules/libram/dist/propertyTyping.js":
/*!*****************************************************!*\
  !*** ../node_modules/libram/dist/propertyTyping.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isStatProperty = exports.isFamiliarProperty = exports.isMonsterProperty = exports.isLocationProperty = exports.isBooleanProperty = exports.isNumericOrStringProperty = exports.isNumericProperty = void 0;

function isNumericProperty(property, value) {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
}

exports.isNumericProperty = isNumericProperty;
var choiceAdventurePattern = /^choiceAdventure\d+$/;

function isNumericOrStringProperty(property) {
  return choiceAdventurePattern.test(property);
}

exports.isNumericOrStringProperty = isNumericOrStringProperty;
var fakeBooleans = ["trackVoteMonster", "_jickJarAvailable"];

function isBooleanProperty(property, value) {
  if (fakeBooleans.includes(property)) return false;
  return ["true", "false"].includes(value);
}

exports.isBooleanProperty = isBooleanProperty;
var otherLocations = ["nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget"];

function isLocationProperty(property) {
  return otherLocations.includes(property) || property.endsWith("Location");
}

exports.isLocationProperty = isLocationProperty;
var otherMonsters = ["romanticTarget", "yearbookCameraTarget"];

function isMonsterProperty(property) {
  if (otherMonsters.includes(property)) return true;
  return property.endsWith("Monster");
}

exports.isMonsterProperty = isMonsterProperty;

function isFamiliarProperty(property) {
  return property.endsWith("Familiar");
}

exports.isFamiliarProperty = isFamiliarProperty;
var statProps = ["nsChallenge1", "shrugTopper", "snojoSetting"];

function isStatProperty(property) {
  return statProps.includes(property);
}

exports.isStatProperty = isStatProperty;

/***/ }),

/***/ "../node_modules/libram/dist/resources/2009/Bandersnatch.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/dist/resources/2009/Bandersnatch.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.prepareRunaway = exports.canRunaway = exports.couldRunaway = exports.getRemainingRunaways = exports.getMaxRunaways = exports.getRunaways = exports.have = exports.familiar = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var property_1 = __webpack_require__(/*! ../../property */ "../node_modules/libram/dist/property.js");

var template_string_1 = __webpack_require__(/*! ../../template-string */ "../node_modules/libram/dist/template-string.js");

var lib_1 = __webpack_require__(/*! ../../lib */ "../node_modules/libram/dist/lib.js");

exports.familiar = template_string_1.$familiar(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Frumious Bandersnatch"], ["Frumious Bandersnatch"])));
/**
 * Returns true if the player has the Frumious Bandersnatch in their
 * terrariukm
 */

function have() {
  return lib_1.have(exports.familiar);
}

exports.have = have;
/**
 * Returns the number of free runaways that have already been used
 * @see StompingBoots with which the Bandersnatch shares a counter
 */

function getRunaways() {
  return property_1.get("_banderRunaways");
}

exports.getRunaways = getRunaways;
/**
 * Returns the total number of free runaways that the player can
 * get from their Bandersnatch
 *
 * @param considerWeightAdjustment Include familiar weight modifiers
 */

function getMaxRunaways(considerWeightAdjustment) {
  if (considerWeightAdjustment === void 0) {
    considerWeightAdjustment = true;
  }

  var weightBuffs = considerWeightAdjustment ? kolmafia_1.weightAdjustment() : 0;
  return Math.floor((kolmafia_1.familiarWeight(exports.familiar) + weightBuffs) / 5);
}

exports.getMaxRunaways = getMaxRunaways;
/**
 * Returns the number of remaining free runaways the player can
 * get from their Bandersnatch
 *
 * @param considerWeightAdjustment
 */

function getRemainingRunaways(considerWeightAdjustment) {
  if (considerWeightAdjustment === void 0) {
    considerWeightAdjustment = true;
  }

  return Math.max(0, getMaxRunaways(considerWeightAdjustment) - getRunaways());
}

exports.getRemainingRunaways = getRemainingRunaways;
/**
 * Returns true if the player could use their Bandersnatch to
 * get a free run in theory
 *
 * @param considerWeightAdjustment Include familiar weight modifiers
 */

function couldRunaway(considerWeightAdjustment) {
  if (considerWeightAdjustment === void 0) {
    considerWeightAdjustment = true;
  }

  return have() && getRemainingRunaways(considerWeightAdjustment) > 0;
}

exports.couldRunaway = couldRunaway;
var odeSkill = template_string_1.$skill(templateObject_2 || (templateObject_2 = __makeTemplateObject(["The Ode to Booze"], ["The Ode to Booze"])));
var odeEffect = template_string_1.$effect(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Ode to Booze"], ["Ode to Booze"])));
/**
 * Returns true if the player can use their Bandersnatch to get a
 * free run right now
 */

function canRunaway() {
  return lib_1.isCurrentFamiliar(exports.familiar) && couldRunaway() && lib_1.have(odeEffect);
}

exports.canRunaway = canRunaway;
/**
 * Prepare a Bandersnatch runaway.
 *
 * This will cast Ode to Booze and equip take your Bandersnatch with you.
 * If any of those steps fail, it will return false.
 *
 * @param songsToRemove Ordered list of songs that could be shrugged to make room for Ode to Booze
 */

function prepareRunaway(songsToRemove) {
  var e_1, _a;

  if (!lib_1.have(odeEffect)) {
    if (!lib_1.have(odeSkill)) {
      return false;
    }

    if (!lib_1.canRememberSong()) {
      var activeSongs = lib_1.getActiveSongs();

      try {
        for (var songsToRemove_1 = __values(songsToRemove), songsToRemove_1_1 = songsToRemove_1.next(); !songsToRemove_1_1.done; songsToRemove_1_1 = songsToRemove_1.next()) {
          var song = songsToRemove_1_1.value;

          if (activeSongs.includes(song) && lib_1.uneffect(song)) {
            break;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (songsToRemove_1_1 && !songsToRemove_1_1.done && (_a = songsToRemove_1["return"])) _a.call(songsToRemove_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }

    if (!kolmafia_1.useSkill(odeSkill)) {
      return false;
    }
  }

  return kolmafia_1.useFamiliar(exports.familiar);
}

exports.prepareRunaway = prepareRunaway;
var templateObject_1, templateObject_2, templateObject_3;

/***/ }),

/***/ "../node_modules/libram/dist/resources/2009/SpookyPutty.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/dist/resources/2009/SpookyPutty.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useSpookyPuttySheet = exports.getSpookyPuttySheetMonster = exports.prepareSpookyPuttySheet = exports.getSpookyPuttySheetCopiesMade = exports.have = exports.sheet = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var lib_1 = __webpack_require__(/*! ../../lib */ "../node_modules/libram/dist/lib.js");

var property_1 = __webpack_require__(/*! ../../property */ "../node_modules/libram/dist/property.js");

var template_string_1 = __webpack_require__(/*! ../../template-string */ "../node_modules/libram/dist/template-string.js");

exports.sheet = template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Spooky Putty sheet"], ["Spooky Putty sheet"])));

function have() {
  return lib_1.getFoldGroup(exports.sheet).some(function (item) {
    return lib_1.have(item);
  });
}

exports.have = have;

function getSpookyPuttySheetCopiesMade() {
  return Math.max(0, property_1.get("spookyPuttyCopiesMade"));
}

exports.getSpookyPuttySheetCopiesMade = getSpookyPuttySheetCopiesMade;

function prepareSpookyPuttySheet() {
  if (!have()) return false;
  if (lib_1.have(exports.sheet)) return true;
  return kolmafia_1.cliExecute("fold Spooky putty sheet");
}

exports.prepareSpookyPuttySheet = prepareSpookyPuttySheet;

function getSpookyPuttySheetMonster() {
  return property_1.get("spookyPuttyMonster");
}

exports.getSpookyPuttySheetMonster = getSpookyPuttySheetMonster;

function useSpookyPuttySheet() {
  return kolmafia_1.use(exports.sheet);
}

exports.useSpookyPuttySheet = useSpookyPuttySheet;
var templateObject_1;

/***/ }),

/***/ "../node_modules/libram/dist/resources/2011/ObtuseAngel.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/dist/resources/2011/ObtuseAngel.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BadlyRomanticArrow = exports.getBadlyRomanticArrowMonster = exports.canUseBadlyRomanticArrow = exports.prepareBadlyRomanticArrow = exports.couldUseBadlyRomanticArrow = exports.haveBadlyRomanticArrowUsesRemaining = exports.getBadlyRomanticArrowUses = exports.have = exports.familiar = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var Copier_1 = __webpack_require__(/*! ../../Copier */ "../node_modules/libram/dist/Copier.js");

var lib_1 = __webpack_require__(/*! ../../lib */ "../node_modules/libram/dist/lib.js");

var property_1 = __webpack_require__(/*! ../../property */ "../node_modules/libram/dist/property.js");

var template_string_1 = __webpack_require__(/*! ../../template-string */ "../node_modules/libram/dist/template-string.js");

exports.familiar = template_string_1.$familiar(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Obtuse Angel"], ["Obtuse Angel"])));
/**
 * Returns true if the player has an Obtuse Angel
 */

function have() {
  return lib_1.have(exports.familiar);
}

exports.have = have;
/**
 * Returns number of badly romantic arrows used
 */

function getBadlyRomanticArrowUses() {
  return Math.max(0, property_1.get("_badlyRomanticArrows"));
}

exports.getBadlyRomanticArrowUses = getBadlyRomanticArrowUses;
/**
 * Returns true if badly romantic arrow can still be used
 */

function haveBadlyRomanticArrowUsesRemaining() {
  return getBadlyRomanticArrowUses() === 0;
}

exports.haveBadlyRomanticArrowUsesRemaining = haveBadlyRomanticArrowUsesRemaining;
/**
 * Returns true if the player could use badly romantic arrow in theory
 */

function couldUseBadlyRomanticArrow() {
  return have() && haveBadlyRomanticArrowUsesRemaining();
}

exports.couldUseBadlyRomanticArrow = couldUseBadlyRomanticArrow;
/**
 * Prepares badly romantic arrow for use
 */

function prepareBadlyRomanticArrow() {
  return kolmafia_1.useFamiliar(exports.familiar);
}

exports.prepareBadlyRomanticArrow = prepareBadlyRomanticArrow;
/**
 * Returns true if the player can use badly romantic arrow right now
 */

function canUseBadlyRomanticArrow() {
  return lib_1.isCurrentFamiliar(exports.familiar) && haveBadlyRomanticArrowUsesRemaining();
}

exports.canUseBadlyRomanticArrow = canUseBadlyRomanticArrow;
/**
 * Returns the current badly romantic arrow monster target
 */

function getBadlyRomanticArrowMonster() {
  return property_1.get("romanticTarget");
}

exports.getBadlyRomanticArrowMonster = getBadlyRomanticArrowMonster;
exports.BadlyRomanticArrow = new Copier_1.Copier(function () {
  return couldUseBadlyRomanticArrow();
}, function () {
  return prepareBadlyRomanticArrow();
}, function () {
  return canUseBadlyRomanticArrow();
}, function () {
  return getBadlyRomanticArrowMonster();
});
var templateObject_1;

/***/ }),

/***/ "../node_modules/libram/dist/resources/2012/RainDoh.js":
/*!*************************************************************!*\
  !*** ../node_modules/libram/dist/resources/2012/RainDoh.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useRainDohBlackBox = exports.getRainDohBlackBoxMonster = exports.getRainDohBlackBoxCopiesMade = exports.have = exports.box = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var lib_1 = __webpack_require__(/*! ../../lib */ "../node_modules/libram/dist/lib.js");

var property_1 = __webpack_require__(/*! ../../property */ "../node_modules/libram/dist/property.js");

var template_string_1 = __webpack_require__(/*! ../../template-string */ "../node_modules/libram/dist/template-string.js");

exports.box = template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Rain-Doh black box"], ["Rain-Doh black box"])));

function have() {
  return lib_1.getFoldGroup(exports.box).some(function (item) {
    return lib_1.have(item);
  });
}

exports.have = have;

function getRainDohBlackBoxCopiesMade() {
  return Math.max(0, property_1.get("_raindohCopiesMade"));
}

exports.getRainDohBlackBoxCopiesMade = getRainDohBlackBoxCopiesMade;

function getRainDohBlackBoxMonster() {
  return property_1.get("rainDohMonster");
}

exports.getRainDohBlackBoxMonster = getRainDohBlackBoxMonster;

function useRainDohBlackBox() {
  return kolmafia_1.use(exports.box);
}

exports.useRainDohBlackBox = useRainDohBlackBox;
var templateObject_1;

/***/ }),

/***/ "../node_modules/libram/dist/resources/2014/WinterGarden.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/dist/resources/2014/WinterGarden.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UnfinishedIceSculpture = exports.getUnfinishedIceSculptureMonster = exports.couldUseUnfinishedIceSculpture = exports.isUnfinishedIceSculptureUsed = exports.haveUnfinishedIceSculpture = exports.have = void 0;

var Copier_1 = __webpack_require__(/*! ../../Copier */ "../node_modules/libram/dist/Copier.js");

var property_1 = __webpack_require__(/*! ../../property */ "../node_modules/libram/dist/property.js");

var lib_1 = __webpack_require__(/*! ../../lib */ "../node_modules/libram/dist/lib.js");

var template_string_1 = __webpack_require__(/*! ../../template-string */ "../node_modules/libram/dist/template-string.js");

function have() {
  return lib_1.haveInCampground(template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["packet of winter seeds"], ["packet of winter seeds"]))));
}

exports.have = have;

function haveUnfinishedIceSculpture() {
  return lib_1.have(template_string_1.$item(templateObject_2 || (templateObject_2 = __makeTemplateObject(["unfinished ice sculpture"], ["unfinished ice sculpture"]))));
}

exports.haveUnfinishedIceSculpture = haveUnfinishedIceSculpture;

function isUnfinishedIceSculptureUsed() {
  return property_1.get("_iceSculptureUsed");
}

exports.isUnfinishedIceSculptureUsed = isUnfinishedIceSculptureUsed;

function couldUseUnfinishedIceSculpture() {
  return lib_1.have(template_string_1.$item(templateObject_3 || (templateObject_3 = __makeTemplateObject(["unfinished ice sculpture"], ["unfinished ice sculpture"])))) && !lib_1.have(template_string_1.$item(templateObject_4 || (templateObject_4 = __makeTemplateObject(["ice sculpture"], ["ice sculpture"]))));
}

exports.couldUseUnfinishedIceSculpture = couldUseUnfinishedIceSculpture;

function getUnfinishedIceSculptureMonster() {
  return property_1.get("iceSculptureMonster");
}

exports.getUnfinishedIceSculptureMonster = getUnfinishedIceSculptureMonster;
exports.UnfinishedIceSculpture = new Copier_1.Copier(function () {
  return couldUseUnfinishedIceSculpture();
}, null, function () {
  return couldUseUnfinishedIceSculpture();
}, function () {
  return getUnfinishedIceSculptureMonster();
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

/***/ }),

/***/ "../node_modules/libram/dist/resources/2015/ChateauMantegna.js":
/*!*********************************************************************!*\
  !*** ../node_modules/libram/dist/resources/2015/ChateauMantegna.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.changeNightstand = exports.changeCeiling = exports.changeDesk = exports.getNightstand = exports.getCeiling = exports.getDesk = exports.fightPainting = exports.paintingFought = exports.paintingMonster = exports.have = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var template_string_1 = __webpack_require__(/*! ../../template-string */ "../node_modules/libram/dist/template-string.js");

var property_1 = __webpack_require__(/*! ../../property */ "../node_modules/libram/dist/property.js");

function have() {
  return property_1.get("chateauAvailable");
}

exports.have = have;

function paintingMonster() {
  return property_1.get("chateauMonster");
}

exports.paintingMonster = paintingMonster;

function paintingFought() {
  return property_1.get("_chateauMonsterFought");
}

exports.paintingFought = paintingFought;

function fightPainting() {
  kolmafia_1.visitUrl("place.php?whichplace=chateau&action=chateau_painting", false);
  return kolmafia_1.runCombat();
}

exports.fightPainting = fightPainting;
var desks = template_string_1.$items(templateObject_1 || (templateObject_1 = __makeTemplateObject(["fancy stationery set, Swiss piggy bank, continental juice bar"], ["fancy stationery set, Swiss piggy bank, continental juice bar"])));
var ceilings = template_string_1.$items(templateObject_2 || (templateObject_2 = __makeTemplateObject(["antler chandelier, ceiling fan, artificial skylight"], ["antler chandelier, ceiling fan, artificial skylight"])));
var nightstands = template_string_1.$items(templateObject_3 || (templateObject_3 = __makeTemplateObject(["foreign language tapes, bowl of potpourri, electric muscle stimulator"], ["foreign language tapes, bowl of potpourri, electric muscle stimulator"])));

function getDesk() {
  return desks.find(function (desk) {
    return Object.keys(kolmafia_1.getChateau()).includes(desk.name);
  }) || template_string_1.$item(templateObject_4 || (templateObject_4 = __makeTemplateObject(["none"], ["none"])));
}

exports.getDesk = getDesk;

function getCeiling() {
  return ceilings.find(function (ceiling) {
    return Object.keys(kolmafia_1.getChateau()).includes(ceiling.name);
  }) || template_string_1.$item(templateObject_5 || (templateObject_5 = __makeTemplateObject(["none"], ["none"])));
}

exports.getCeiling = getCeiling;

function getNightstand() {
  return nightstands.find(function (nightstand) {
    return Object.keys(kolmafia_1.getChateau()).includes(nightstand.name);
  }) || template_string_1.$item(templateObject_6 || (templateObject_6 = __makeTemplateObject(["none"], ["none"])));
}

exports.getNightstand = getNightstand;

function changeDesk(desk) {
  if (getDesk() === desk) return true;
  if (!desks.includes(desk)) return false;
  kolmafia_1.buy(desk);
  return getDesk() === desk;
}

exports.changeDesk = changeDesk;

function changeCeiling(ceiling) {
  if (getCeiling() === ceiling) return true;
  if (!ceilings.includes(ceiling)) return false;
  kolmafia_1.buy(ceiling);
  return getCeiling() === ceiling;
}

exports.changeCeiling = changeCeiling;

function changeNightstand(nightstand) {
  if (getNightstand() === nightstand) return true;
  if (!nightstands.includes(nightstand)) return false;
  kolmafia_1.buy(nightstand);
  return getNightstand() === nightstand;
}

exports.changeNightstand = changeNightstand;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

/***/ }),

/***/ "../node_modules/libram/dist/resources/2016/SourceTerminal.js":
/*!********************************************************************!*\
  !*** ../node_modules/libram/dist/resources/2016/SourceTerminal.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPortscanUses = exports.getEnhanceUses = exports.getDuplicateUses = exports.Digitize = exports.canDigitize = exports.prepareDigitize = exports.couldDigitize = exports.getDigitizeUsesRemaining = exports.getMaximumDigitizeUses = exports.getDigitizeMonsterCount = exports.getDigitizeMonster = exports.getDigitizeUses = exports.getChips = exports.extrude = exports.Items = exports.isCurrentSkill = exports.getSkills = exports.educate = exports.Skills = exports.enquiry = exports.RolloverBuffs = exports.enhance = exports.Buffs = exports.have = exports.item = void 0;

__webpack_require__(/*! core-js/features/object/values */ "../node_modules/core-js/features/object/values.js");

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var isEqual_1 = __importDefault(__webpack_require__(/*! lodash/isEqual */ "../node_modules/libram/node_modules/lodash/isEqual.js"));

var Copier_1 = __webpack_require__(/*! ../../Copier */ "../node_modules/libram/dist/Copier.js");

var lib_1 = __webpack_require__(/*! ../../lib */ "../node_modules/libram/dist/lib.js");

var property_1 = __webpack_require__(/*! ../../property */ "../node_modules/libram/dist/property.js");

var template_string_1 = __webpack_require__(/*! ../../template-string */ "../node_modules/libram/dist/template-string.js");

exports.item = template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Source terminal"], ["Source terminal"])));

function have() {
  return lib_1.haveInCampground(exports.item);
}

exports.have = have;
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

exports.Buffs = {
  Items: template_string_1.$effect(templateObject_2 || (templateObject_2 = __makeTemplateObject(["items.enh"], ["items.enh"]))),
  Meat: template_string_1.$effect(templateObject_3 || (templateObject_3 = __makeTemplateObject(["meat.enh"], ["meat.enh"]))),
  Init: template_string_1.$effect(templateObject_4 || (templateObject_4 = __makeTemplateObject(["init.enh"], ["init.enh"]))),
  Critical: template_string_1.$effect(templateObject_5 || (templateObject_5 = __makeTemplateObject(["critical.enh"], ["critical.enh"]))),
  Damage: template_string_1.$effect(templateObject_6 || (templateObject_6 = __makeTemplateObject(["damage.enh"], ["damage.enh"]))),
  Substats: template_string_1.$effect(templateObject_7 || (templateObject_7 = __makeTemplateObject(["substats.enh"], ["substats.enh"])))
};
/**
 * Acquire a buff from the Source Terminal
 * @param buff The buff to acquire
 * @see Buffs
 */

function enhance(buff) {
  if (!Object.values(exports.Buffs).includes(buff)) {
    return false;
  }

  return kolmafia_1.cliExecute("terminal enhance " + buff.name);
}

exports.enhance = enhance;
/**
 * Rollover buffs that can be acquired from Enquiry
 */

exports.RolloverBuffs = {
  /** +5 Familiar Weight */
  Familiar: template_string_1.$effect(templateObject_8 || (templateObject_8 = __makeTemplateObject(["familiar.enq"], ["familiar.enq"]))),

  /** +25 ML */
  Monsters: template_string_1.$effect(templateObject_9 || (templateObject_9 = __makeTemplateObject(["monsters.enq"], ["monsters.enq"]))),

  /** +5 Prismatic Resistance */
  Protect: template_string_1.$effect(templateObject_10 || (templateObject_10 = __makeTemplateObject(["protect.enq"], ["protect.enq"]))),

  /** +100% Muscle, +100% Mysticality, +100% Moxie */
  Stats: template_string_1.$effect(templateObject_11 || (templateObject_11 = __makeTemplateObject(["stats.enq"], ["stats.enq"])))
};
/**
 * Acquire a buff from the Source Terminal
 * @param buff The buff to acquire
 * @see RolloverBuffs
 */

function enquiry(rolloverBuff) {
  if (!Object.values(exports.RolloverBuffs).includes(rolloverBuff)) {
    return false;
  }

  return kolmafia_1.cliExecute("terminal enquiry " + rolloverBuff.name);
}

exports.enquiry = enquiry;
/**
 * Skills that can be acquired from Enhance
 */

exports.Skills = {
  /** Collect Source essence from enemies once per combat */
  Extract: template_string_1.$skill(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Extract"], ["Extract"]))),

  /** Stagger and create a wandering monster 1-3 times per day */
  Digitize: template_string_1.$skill(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Digitize"], ["Digitize"]))),

  /** Stagger and deal 25% of enemy HP in damage once per combat */
  Compress: template_string_1.$skill(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Compress"], ["Compress"]))),

  /** Double monster's HP, attack, defence, attacks per round and item drops once per fight and once per day (five in The Source) */
  Duplicate: template_string_1.$skill(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Duplicate"], ["Duplicate"]))),

  /** Causes government agent/Source Agent wanderer next turn once per combat and three times per day */
  Portscan: template_string_1.$skill(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Portscan"], ["Portscan"]))),

  /** Increase Max MP by 100% and recover 1000 MP once per combat with a 30 turn cooldown */
  Turbo: template_string_1.$skill(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Turbo"], ["Turbo"])))
};
/**
 * Make a skill available.
 * The Source Terminal can give the player access to two skills at any time
 * @param skill Skill to learn
 * @see Skills
 */

function educate(skills) {
  var e_1, _a;

  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if (isEqual_1["default"](skillsArray, getSkills())) return true;

  try {
    for (var skillsArray_1 = __values(skillsArray), skillsArray_1_1 = skillsArray_1.next(); !skillsArray_1_1.done; skillsArray_1_1 = skillsArray_1.next()) {
      var skill = skillsArray_1_1.value;
      if (!Object.values(exports.Skills).includes(skill)) return false;
      kolmafia_1.cliExecute("terminal educate " + skill.name.toLowerCase() + ".edu");
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (skillsArray_1_1 && !skillsArray_1_1.done && (_a = skillsArray_1["return"])) _a.call(skillsArray_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return true;
}

exports.educate = educate;
/**
 * Return the Skills currently available from Source Terminal
 */

function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(function (p) {
    return property_1.get(p);
  }).filter(function (s) {
    return s !== "";
  }).map(function (s) {
    return Skill.get(s.slice(0, -4));
  });
}

exports.getSkills = getSkills;

function isCurrentSkill(skills) {
  var currentSkills = getSkills();
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every(function (skill) {
    return currentSkills.includes(skill);
  });
}

exports.isCurrentSkill = isCurrentSkill;
/**
 * Items that can be generated by the Source Terminal
 */

exports.Items = {
  /** 4 fullness EPIC food */
  BrowserCookie: template_string_1.$item(templateObject_18 || (templateObject_18 = __makeTemplateObject(["browser cookie"], ["browser cookie"]))),

  /** 4 potency EPIC booze */
  HackedGibson: template_string_1.$item(templateObject_19 || (templateObject_19 = __makeTemplateObject(["hacked gibson"], ["hacked gibson"]))),

  /** +10% item drop, improved yield from extraction skill */
  Shades: template_string_1.$item(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Source shades"], ["Source shades"]))),
  GRAM: template_string_1.$item(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Source terminal GRAM chip"], ["Source terminal GRAM chip"]))),
  PRAM: template_string_1.$item(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Source terminal PRAM chip"], ["Source terminal PRAM chip"]))),
  SPAM: template_string_1.$item(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Source terminal SPAM chip"], ["Source terminal SPAM chip"]))),
  CRAM: template_string_1.$item(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Source terminal CRAM chip"], ["Source terminal CRAM chip"]))),
  DRAM: template_string_1.$item(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Source terminal DRAM chip"], ["Source terminal DRAM chip"]))),

  /** Increase maximum daily casts of Digitze by one, usable once per player */
  TRAM: template_string_1.$item(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Source terminal TRAM chip"], ["Source terminal TRAM chip"]))),
  SoftwareBug: template_string_1.$item(templateObject_27 || (templateObject_27 = __makeTemplateObject(["software bug"], ["software bug"])))
};
/**
 * Collect an item from the Source Terminal (up to three times a day)
 * @param item Item to collect
 * @see Items
 */

function extrude(item) {
  if (!Object.values(exports.Items).includes(item)) {
    return false;
  }

  return kolmafia_1.cliExecute("terminal extrude " + item.name);
}

exports.extrude = extrude;
/**
 * Return chips currently installed to player's Source Terminal
 */

function getChips() {
  return property_1.get("sourceTerminalChips").split(",");
}

exports.getChips = getChips;
/**
 * Return number of times digitize was cast today
 */

function getDigitizeUses() {
  return property_1.get("_sourceTerminalDigitizeUses");
}

exports.getDigitizeUses = getDigitizeUses;
/**
 * Return Monster that is currently digitized, else null
 */

function getDigitizeMonster() {
  return property_1.get("_sourceTerminalDigitizeMonster");
}

exports.getDigitizeMonster = getDigitizeMonster;
/**
 * Return number of digitized monsters encountered since it was last cast
 */

function getDigitizeMonsterCount() {
  return property_1.get("_sourceTerminalDigitizeMonsterCount");
}

exports.getDigitizeMonsterCount = getDigitizeMonsterCount;
/**
 * Return maximum number of digitizes player can cast
 */

function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}

exports.getMaximumDigitizeUses = getMaximumDigitizeUses;
/**
 * Returns the current day's number of remaining digitize uses
 */

function getDigitizeUsesRemaining() {
  return getMaximumDigitizeUses() - getDigitizeUses();
}

exports.getDigitizeUsesRemaining = getDigitizeUsesRemaining;
/**
 * Returns whether the player could theoretically cast Digitize
 */

function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}

exports.couldDigitize = couldDigitize;

function prepareDigitize() {
  if (!isCurrentSkill(exports.Skills.Digitize)) {
    return educate(exports.Skills.Digitize);
  }

  return true;
}

exports.prepareDigitize = prepareDigitize;
/**
 * Returns whether the player can cast Digitize immediately
 * This only considers whether the player has learned the skill
 * and has sufficient daily casts remaining, not whether they have sufficient MP
 */

function canDigitize() {
  return couldDigitize() && getSkills().includes(exports.Skills.Digitize);
}

exports.canDigitize = canDigitize;
exports.Digitize = new Copier_1.Copier(function () {
  return couldDigitize();
}, function () {
  return prepareDigitize();
}, function () {
  return canDigitize();
}, function () {
  return getDigitizeMonster();
});
/**
 * Return number of times duplicate was cast today
 */

function getDuplicateUses() {
  return property_1.get("_sourceTerminalDuplicateUses");
}

exports.getDuplicateUses = getDuplicateUses;
/**
 * Return number of times enhance was cast today
 */

function getEnhanceUses() {
  return property_1.get("_sourceTerminalEnhanceUses");
}

exports.getEnhanceUses = getEnhanceUses;
/**
 * Return number of times portscan was cast today
 */

function getPortscanUses() {
  return property_1.get("_sourceTerminalPortscanUses");
}

exports.getPortscanUses = getPortscanUses;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27;

/***/ }),

/***/ "../node_modules/libram/dist/resources/2016/Witchess.js":
/*!**************************************************************!*\
  !*** ../node_modules/libram/dist/resources/2016/Witchess.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fightPiece = exports.pieces = exports.fightsDone = exports.have = exports.item = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var lib_1 = __webpack_require__(/*! ../../lib */ "../node_modules/libram/dist/lib.js");

var property_1 = __webpack_require__(/*! ../../property */ "../node_modules/libram/dist/property.js");

var template_string_1 = __webpack_require__(/*! ../../template-string */ "../node_modules/libram/dist/template-string.js");

exports.item = template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Witchess Set"], ["Witchess Set"])));

function have() {
  return lib_1.haveInCampground(exports.item);
}

exports.have = have;

function fightsDone() {
  return property_1.get("_witchessFights");
}

exports.fightsDone = fightsDone;
exports.pieces = Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);

function fightPiece(piece) {
  if (!exports.pieces.includes(piece)) throw new Error("That is not a valid piece.");

  if (!kolmafia_1.visitUrl("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }

  if (!kolmafia_1.runChoice(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }

  if (!kolmafia_1.visitUrl("choice.php?option=1&pwd=" + kolmafia_1.myHash() + "&whichchoice=1182&piece=" + kolmafia_1.toInt(piece), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }

  return kolmafia_1.runCombat();
}

exports.fightPiece = fightPiece;
var templateObject_1;

/***/ }),

/***/ "../node_modules/libram/dist/resources/2017/TunnelOfLove.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/dist/resources/2017/TunnelOfLove.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fightAll = exports.LovEnamorang = exports.getLovEnamorangMonster = exports.couldUseLoveEnamorang = exports.getLovEnamorangUses = exports.haveLovEnamorang = exports.isUsed = exports.have = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var Copier_1 = __webpack_require__(/*! ../../Copier */ "../node_modules/libram/dist/Copier.js");

var lib_1 = __webpack_require__(/*! ../../lib */ "../node_modules/libram/dist/lib.js");

var property_1 = __webpack_require__(/*! ../../property */ "../node_modules/libram/dist/property.js");

var template_string_1 = __webpack_require__(/*! ../../template-string */ "../node_modules/libram/dist/template-string.js");

function have() {
  return property_1.get("loveTunnelAvailable");
}

exports.have = have;

function isUsed() {
  return property_1.get("_loveTunnelUsed");
}

exports.isUsed = isUsed;

function haveLovEnamorang() {
  return lib_1.have(template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["LOV Enamorang"], ["LOV Enamorang"]))));
}

exports.haveLovEnamorang = haveLovEnamorang;

function getLovEnamorangUses() {
  return property_1.get("_enamorangs");
}

exports.getLovEnamorangUses = getLovEnamorangUses;

function couldUseLoveEnamorang() {
  return !lib_1.haveWandererCounter(lib_1.Wanderer.Enamorang) && getLovEnamorangUses() < 3 && haveLovEnamorang();
}

exports.couldUseLoveEnamorang = couldUseLoveEnamorang;

function getLovEnamorangMonster() {
  return property_1.get("enamorangMonster");
}

exports.getLovEnamorangMonster = getLovEnamorangMonster;
exports.LovEnamorang = new Copier_1.Copier(function () {
  return couldUseLoveEnamorang();
}, null, function () {
  return couldUseLoveEnamorang();
}, function () {
  return getLovEnamorangMonster();
});

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
  property_1.set("choiceAdventure1222", 1); // Entrance

  property_1.set("choiceAdventure1223", 1); // Fight LOV Enforcer

  property_1.set("choiceAdventure1224", equipmentChoice(equipment));
  property_1.set("choiceAdventure1225", 1); // Fight LOV Engineer

  property_1.set("choiceAdventure1226", effectChoice(effect));
  property_1.set("choiceAdventure1227", 1); // Fight LOV Equivocator

  property_1.set("choiceAdventure1228", extraChoice(extra));
  kolmafia_1.adv1(template_string_1.$location(templateObject_2 || (templateObject_2 = __makeTemplateObject(["The Tunnel of L.O.V.E."], ["The Tunnel of L.O.V.E."]))), 0, "");
}

exports.fightAll = fightAll;
var templateObject_1, templateObject_2;

/***/ }),

/***/ "../node_modules/libram/dist/resources/2018/SongBoom.js":
/*!**************************************************************!*\
  !*** ../node_modules/libram/dist/resources/2018/SongBoom.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.dropProgress = exports.setSong = exports.songChangesLeft = exports.song = exports.songBoomSongs = exports.have = exports.item = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var lib_1 = __webpack_require__(/*! ../../lib */ "../node_modules/libram/dist/lib.js");

var property_1 = __webpack_require__(/*! ../../property */ "../node_modules/libram/dist/property.js");

var template_string_1 = __webpack_require__(/*! ../../template-string */ "../node_modules/libram/dist/template-string.js");

exports.item = template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["SongBoom\u2122 BoomBox"], ["SongBoom\u2122 BoomBox"])));

function have() {
  return lib_1.have(exports.item);
}

exports.have = have;
var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
};
exports.songBoomSongs = new Set(Object.keys(keywords));
/**
 * Current song.
 */

function song() {
  var stored = property_1.get("boomBoxSong");
  return exports.songBoomSongs.has(stored) ? stored : null;
}

exports.song = song;
/**
 * Song changes left today.
 */

function songChangesLeft() {
  return property_1.get("_boomBoxSongsLeft");
}

exports.songChangesLeft = songChangesLeft;
/**
 * Change the song.
 * @param newSong Song to change to.
 */

function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0) throw new Error("Out of song changes!");
    kolmafia_1.cliExecute("boombox " + (newSong ? keywords[newSong] : "none"));
    return true;
  } else {
    return false;
  }
}

exports.setSong = setSong;
/**
 * Progress to next song drop (e.g. gathered meat-clip).
 */

function dropProgress() {
  return property_1.get("_boomBoxFights");
}

exports.dropProgress = dropProgress;
var templateObject_1;

/***/ }),

/***/ "../node_modules/libram/dist/resources/2020/Guzzlr.js":
/*!************************************************************!*\
  !*** ../node_modules/libram/dist/resources/2020/Guzzlr.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.haveBooze = exports.havePlatinumBooze = exports.Cocktails = exports.getBooze = exports.getTier = exports.getLocation = exports.abandon = exports.canAbandon = exports.haveFullBronzeBonus = exports.acceptBronze = exports.getBronze = exports.acceptGold = exports.haveFullGoldBonus = exports.canGold = exports.getGoldToday = exports.getGold = exports.acceptPlatinum = exports.haveFullPlatinumBonus = exports.canPlatinum = exports.getPlatinumToday = exports.getPlatinum = exports.isQuestActive = exports.have = exports.item = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var lib_1 = __webpack_require__(/*! ../../lib */ "../node_modules/libram/dist/lib.js");

var property_1 = __webpack_require__(/*! ../../property */ "../node_modules/libram/dist/property.js");

var template_string_1 = __webpack_require__(/*! ../../template-string */ "../node_modules/libram/dist/template-string.js");

exports.item = template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Guzzlr tablet"], ["Guzzlr tablet"])));

function have() {
  return lib_1.have(exports.item);
}

exports.have = have;

function useTabletWithChoice(option) {
  property_1.withChoice(1412, option, function () {
    return kolmafia_1.use(1, exports.item);
  });
}

function isQuestActive() {
  return property_1.get("questGuzzlr") !== "unstarted";
}

exports.isQuestActive = isQuestActive;
/**
 * Platinum deliveries completed overall
 */

function getPlatinum() {
  return property_1.get("guzzlrPlatinumDeliveries");
}

exports.getPlatinum = getPlatinum;
/**
 * Platinum deliveries completed today
 */

function getPlatinumToday() {
  return property_1.get("_guzzlrPlatinumDeliveries");
}

exports.getPlatinumToday = getPlatinumToday;
/**
 * Can do a platinum delivery (haven't done one today)
 */

function canPlatinum() {
  return !isQuestActive() && getGold() >= 5 && getPlatinumToday() < 1;
}

exports.canPlatinum = canPlatinum;
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */

function haveFullPlatinumBonus() {
  return getPlatinum() >= 30;
}

exports.haveFullPlatinumBonus = haveFullPlatinumBonus;
/**
 * Accept platinum delivery
 */

function acceptPlatinum() {
  if (!canPlatinum()) return false;
  useTabletWithChoice(4);
  return true;
}

exports.acceptPlatinum = acceptPlatinum;
/**
 * Gold deliveries completed overall
 */

function getGold() {
  return property_1.get("guzzlrGoldDeliveries");
}

exports.getGold = getGold;
/**
 * Gold deliveries completed today
 */

function getGoldToday() {
  return property_1.get("_guzzlrGoldDeliveries");
}

exports.getGoldToday = getGoldToday;
/**
 * Can do a gold delivery (have done fewer than 3 today)
 */

function canGold() {
  return !isQuestActive() && getBronze() >= 5 && getGoldToday() < 3;
}

exports.canGold = canGold;
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */

function haveFullGoldBonus() {
  return getGold() >= 150;
}

exports.haveFullGoldBonus = haveFullGoldBonus;
/**
 * Accept gold delivery
 */

function acceptGold() {
  if (!canGold()) return false;
  useTabletWithChoice(3);
  return true;
}

exports.acceptGold = acceptGold;
/**
 * Bronze deliveries completed overall
 */

function getBronze() {
  return property_1.get("guzzlrBronzeDeliveries");
}

exports.getBronze = getBronze;
/**
 * Accept bronze delivery
 */

function acceptBronze() {
  if (isQuestActive()) return false;
  useTabletWithChoice(2);
  return true;
}

exports.acceptBronze = acceptBronze;
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */

function haveFullBronzeBonus() {
  return getBronze() >= 196;
}

exports.haveFullBronzeBonus = haveFullBronzeBonus;
/**
 * Can abandon the current Guzzlr quest
 */

function canAbandon() {
  return isQuestActive() && !property_1.get("_guzzlrQuestAbandoned");
}

exports.canAbandon = canAbandon;
/**
 * Abandon Guzzlr quest
 */

function abandon() {
  if (!canAbandon()) return false;
  kolmafia_1.visitUrl("inventory.php?tap=guzzlr", false);
  kolmafia_1.runChoice(1);
  kolmafia_1.runChoice(5);
  return true;
}

exports.abandon = abandon;
/**
 * Get current Guzzlr quest location
 */

function getLocation() {
  return property_1.get("guzzlrQuestLocation");
}

exports.getLocation = getLocation;
/**
 * Get current Guzzlr quest tier
 */

function getTier() {
  var tier = property_1.get("guzzlrQuestTier");
  return tier === "" ? null : tier;
}

exports.getTier = getTier;
/**
 * Get current Guzzlr quest booze
 */

function getBooze() {
  var booze = property_1.get("guzzlrQuestBooze");
  if (booze === "") return null;
  return Item.get(booze);
}

exports.getBooze = getBooze;
/**
 * List of the platinum cocktails
 */

exports.Cocktails = template_string_1.$items(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Buttery Boy, Steamboat, Ghiaccio Colada, Nog-on-the-Cob, Sourfinger"], ["Buttery Boy, Steamboat, Ghiaccio Colada, Nog-on-the-Cob, Sourfinger"])));
/**
 * Returns true if the user has a platinum cocktail in their inventory
 */

function havePlatinumBooze() {
  return exports.Cocktails.some(function (cock) {
    return lib_1.have(cock);
  });
}

exports.havePlatinumBooze = havePlatinumBooze;
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

    case template_string_1.$item(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Guzzlr cocktail set"], ["Guzzlr cocktail set"]))):
      return havePlatinumBooze();

    default:
      return lib_1.have(booze);
  }
}

exports.haveBooze = haveBooze;
var templateObject_1, templateObject_2, templateObject_3;

/***/ }),

/***/ "../node_modules/libram/dist/resources/index.js":
/*!******************************************************!*\
  !*** ../node_modules/libram/dist/resources/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Guzzlr = exports.Witchess = exports.WinterGarden = exports.TunnelOfLove = exports.SpookyPutty = exports.SourceTerminal = exports.SongBoom = exports.RainDoh = exports.ObtuseAngel = exports.ChateauMantegna = exports.Bandersnatch = void 0;
exports.Bandersnatch = __importStar(__webpack_require__(/*! ./2009/Bandersnatch */ "../node_modules/libram/dist/resources/2009/Bandersnatch.js"));
exports.ChateauMantegna = __importStar(__webpack_require__(/*! ./2015/ChateauMantegna */ "../node_modules/libram/dist/resources/2015/ChateauMantegna.js"));
exports.ObtuseAngel = __importStar(__webpack_require__(/*! ./2011/ObtuseAngel */ "../node_modules/libram/dist/resources/2011/ObtuseAngel.js"));
exports.RainDoh = __importStar(__webpack_require__(/*! ./2012/RainDoh */ "../node_modules/libram/dist/resources/2012/RainDoh.js"));
exports.SongBoom = __importStar(__webpack_require__(/*! ./2018/SongBoom */ "../node_modules/libram/dist/resources/2018/SongBoom.js"));
exports.SourceTerminal = __importStar(__webpack_require__(/*! ./2016/SourceTerminal */ "../node_modules/libram/dist/resources/2016/SourceTerminal.js"));
exports.SpookyPutty = __importStar(__webpack_require__(/*! ./2009/SpookyPutty */ "../node_modules/libram/dist/resources/2009/SpookyPutty.js"));
exports.TunnelOfLove = __importStar(__webpack_require__(/*! ./2017/TunnelOfLove */ "../node_modules/libram/dist/resources/2017/TunnelOfLove.js"));
exports.WinterGarden = __importStar(__webpack_require__(/*! ./2014/WinterGarden */ "../node_modules/libram/dist/resources/2014/WinterGarden.js"));
exports.Witchess = __importStar(__webpack_require__(/*! ./2016/Witchess */ "../node_modules/libram/dist/resources/2016/Witchess.js"));
exports.Guzzlr = __importStar(__webpack_require__(/*! ./2020/Guzzlr */ "../node_modules/libram/dist/resources/2020/Guzzlr.js"));

__exportStar(__webpack_require__(/*! ./putty-likes */ "../node_modules/libram/dist/resources/putty-likes.js"), exports);

/***/ }),

/***/ "../node_modules/libram/dist/resources/putty-likes.js":
/*!************************************************************!*\
  !*** ../node_modules/libram/dist/resources/putty-likes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SpookyPuttySheet = exports.couldUseSpookyPuttySheet = exports.RainDohBlackBox = exports.couldUseRainDohBlackBox = exports.getTotalPuttyLikeCopiesMade = void 0;

var Copier_1 = __webpack_require__(/*! ../Copier */ "../node_modules/libram/dist/Copier.js");

var SpookyPutty_1 = __webpack_require__(/*! ./2009/SpookyPutty */ "../node_modules/libram/dist/resources/2009/SpookyPutty.js");

var RainDoh_1 = __webpack_require__(/*! ./2012/RainDoh */ "../node_modules/libram/dist/resources/2012/RainDoh.js");

function getTotalPuttyLikeCopiesMade() {
  return SpookyPutty_1.getSpookyPuttySheetCopiesMade() + RainDoh_1.getRainDohBlackBoxCopiesMade();
}

exports.getTotalPuttyLikeCopiesMade = getTotalPuttyLikeCopiesMade;

function couldUseRainDohBlackBox() {
  return RainDoh_1.have() && RainDoh_1.getRainDohBlackBoxCopiesMade() < 5 && getTotalPuttyLikeCopiesMade() < 6;
}

exports.couldUseRainDohBlackBox = couldUseRainDohBlackBox;
exports.RainDohBlackBox = new Copier_1.Copier(function () {
  return couldUseRainDohBlackBox();
}, null, function () {
  return couldUseRainDohBlackBox();
}, function () {
  return RainDoh_1.getRainDohBlackBoxMonster();
}, function () {
  return RainDoh_1.useRainDohBlackBox();
});

function couldUseSpookyPuttySheet() {
  return SpookyPutty_1.have() && SpookyPutty_1.getSpookyPuttySheetCopiesMade() < 5 && getTotalPuttyLikeCopiesMade() < 6;
}

exports.couldUseSpookyPuttySheet = couldUseSpookyPuttySheet;
exports.SpookyPuttySheet = new Copier_1.Copier(function () {
  return couldUseSpookyPuttySheet();
}, function () {
  return SpookyPutty_1.prepareSpookyPuttySheet();
}, function () {
  return couldUseSpookyPuttySheet();
}, function () {
  return SpookyPutty_1.getSpookyPuttySheetMonster();
}, function () {
  return SpookyPutty_1.useSpookyPuttySheet();
});

/***/ }),

/***/ "../node_modules/libram/dist/since.js":
/*!********************************************!*\
  !*** ../node_modules/libram/dist/since.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * Provides functions for checking KoLmafia's version and revision.
 * @packageDocumentation
 */

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sinceKolmafiaVersion = exports.sinceKolmafiaRevision = exports.KolmafiaVersionError = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");
/**
 * Represents an exception thrown when the current KoLmafia version does not
 * match an expected condition.
 */


var KolmafiaVersionError =
/** @class */
function (_super) {
  __extends(KolmafiaVersionError, _super);

  function KolmafiaVersionError(message) {
    var _this = _super.call(this, message) || this; // Explicitly set the prototype, so that 'instanceof' still works in Node.js
    // even when the class is transpiled down to ES5
    // See: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    // Note that this code isn't needed for Rhino.


    Object.setPrototypeOf(_this, KolmafiaVersionError.prototype);
    return _this;
  }

  return KolmafiaVersionError;
}(Error);

exports.KolmafiaVersionError = KolmafiaVersionError; // Manually set class name, so that the stack trace shows proper name in Rhino

KolmafiaVersionError.prototype.name = "KolmafiaVersionError";
/**
 * Returns the currently executing script name, suitable for embedding in an
 * error message.
 * @returns Path of the main script wrapped in single-quotes, or `"This script"`
 *    if the path cannot be determined
 */

function getScriptName() {
  var _a; // In Rhino, the current script name is available in require.main.id


  var scriptName = (_a = __webpack_require__.c[__webpack_require__.s]) === null || _a === void 0 ? void 0 : _a.id;
  return scriptName ? "'" + scriptName + "'" : "This script";
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
    throw new TypeError("Invalid revision number " + revision + " (must be an integer)");
  } // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()


  if (kolmafia_1.getRevision() < revision) {
    throw new KolmafiaVersionError(getScriptName() + " requires revision r" + revision + " of kolmafia or higher (current: " + kolmafia_1.getRevision() + "). Up-to-date builds can be found at https://ci.kolmafia.us/.");
  }
}

exports.sinceKolmafiaRevision = sinceKolmafiaRevision;
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
    throw new TypeError("Invalid major version number " + majorVersion + " (must be an integer)");
  }

  if (!Number.isInteger(minorVersion)) {
    throw new TypeError("Invalid minor version number " + minorVersion + " (must be an integer)");
  }

  var versionStr = kolmafia_1.getVersion();
  var versionStrMatch = /v(\d+)\.(\d+)/.exec(versionStr);

  if (!versionStrMatch) {
    // This is not something the user should handle
    throw new Error("Unexpected KoLmafia version string: \"" + versionStr + "\". You may need to update the script.");
  }

  var currentMajorVersion = Number(versionStrMatch[1]);
  var currentMinorVersion = Number(versionStrMatch[2]); // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()

  if (currentMajorVersion < majorVersion || currentMajorVersion === majorVersion && currentMinorVersion < minorVersion) {
    throw new KolmafiaVersionError(getScriptName() + " requires version " + majorVersion + "." + minorVersion + " of kolmafia or higher (current: " + currentMajorVersion + "." + currentMinorVersion + "). Up-to-date builds can be found at https://ci.kolmafia.us/.");
  }
}

exports.sinceKolmafiaVersion = sinceKolmafiaVersion;

/***/ }),

/***/ "../node_modules/libram/dist/template-string.js":
/*!******************************************************!*\
  !*** ../node_modules/libram/dist/template-string.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.$thralls = exports.$thrall = exports.$stats = exports.$stat = exports.$slots = exports.$slot = exports.$skills = exports.$skill = exports.$servants = exports.$servant = exports.$phyla = exports.$phylum = exports.$monsters = exports.$monster = exports.$locations = exports.$location = exports.$items = exports.$item = exports.$familiars = exports.$familiar = exports.$elements = exports.$element = exports.$effects = exports.$effect = exports.$coinmasters = exports.$coinmaster = exports.$classes = exports.$class = exports.$bounties = exports.$bounty = void 0;

var concatTemplateString = function concatTemplateString(literals) {
  var placeholders = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    placeholders[_i - 1] = arguments[_i];
  }

  return literals.reduce(function (acc, literal, i) {
    return acc + literal + (placeholders[i] || "");
  }, "");
};

var createSingleConstant = function createSingleConstant(Type) {
  return function (literals) {
    var placeholders = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      placeholders[_i - 1] = arguments[_i];
    }

    var input = concatTemplateString.apply(void 0, __spread([literals], placeholders));
    return Type.get(input);
  };
};

var createPluralConstant = function createPluralConstant(Type) {
  return function (literals) {
    var placeholders = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      placeholders[_i - 1] = arguments[_i];
    }

    var input = concatTemplateString.apply(void 0, __spread([literals], placeholders));

    if (input === "") {
      return Type.all();
    }

    return Type.get(input.split(/\s*,\s*/));
  };
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */


exports.$bounty = createSingleConstant(Bounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$bounties = createPluralConstant(Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */

exports.$class = createSingleConstant(Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$classes = createPluralConstant(Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */

exports.$coinmaster = createSingleConstant(Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$coinmasters = createPluralConstant(Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */

exports.$effect = createSingleConstant(Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$effects = createPluralConstant(Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */

exports.$element = createSingleConstant(Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$elements = createPluralConstant(Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */

exports.$familiar = createSingleConstant(Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$familiars = createPluralConstant(Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */

exports.$item = createSingleConstant(Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$items = createPluralConstant(Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */

exports.$location = createSingleConstant(Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$locations = createPluralConstant(Location);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */

exports.$monster = createSingleConstant(Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$monsters = createPluralConstant(Monster);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */

exports.$phylum = createSingleConstant(Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$phyla = createPluralConstant(Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */

exports.$servant = createSingleConstant(Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$servants = createPluralConstant(Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */

exports.$skill = createSingleConstant(Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$skills = createPluralConstant(Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */

exports.$slot = createSingleConstant(Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$slots = createPluralConstant(Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */

exports.$stat = createSingleConstant(Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$stats = createPluralConstant(Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */

exports.$thrall = createSingleConstant(Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$thralls = createPluralConstant(Thrall);

/***/ }),

/***/ "../node_modules/libram/dist/utils.js":
/*!********************************************!*\
  !*** ../node_modules/libram/dist/utils.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.countedMapToString = exports.countedMapToArray = exports.arrayToCountedMap = exports.chunk = exports.clamp = exports.parseNumber = exports.notNull = void 0;

function notNull(value) {
  return value !== null;
}

exports.notNull = notNull;

function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}

exports.parseNumber = parseNumber;
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

exports.clamp = clamp;
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

exports.chunk = chunk;

function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(function (item) {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}

exports.arrayToCountedMap = arrayToCountedMap;

function countedMapToArray(map) {
  return __spread(map).flatMap(function (_a) {
    var _b = __read(_a, 2),
        item = _b[0],
        quantity = _b[1];

    return Array(quantity).fill(item);
  });
}

exports.countedMapToArray = countedMapToArray;

function countedMapToString(map) {
  return __spread(map).map(function (_a) {
    var _b = __read(_a, 2),
        item = _b[0],
        quantity = _b[1];

    return quantity + " x " + item;
  }).join(", ");
}

exports.countedMapToString = countedMapToString;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_DataView.js":
/*!***************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_DataView.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/libram/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/libram/node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var DataView = getNative(root, 'DataView');
module.exports = DataView;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_Hash.js":
/*!***********************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_Hash.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "../node_modules/libram/node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "../node_modules/libram/node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "../node_modules/libram/node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "../node_modules/libram/node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "../node_modules/libram/node_modules/lodash/_hashSet.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_ListCache.js":
/*!****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_ListCache.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "../node_modules/libram/node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "../node_modules/libram/node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "../node_modules/libram/node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "../node_modules/libram/node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "../node_modules/libram/node_modules/lodash/_listCacheSet.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_Map.js":
/*!**********************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_Map.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/libram/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/libram/node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_MapCache.js":
/*!***************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_MapCache.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "../node_modules/libram/node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "../node_modules/libram/node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "../node_modules/libram/node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "../node_modules/libram/node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "../node_modules/libram/node_modules/lodash/_mapCacheSet.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_Promise.js":
/*!**************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_Promise.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/libram/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/libram/node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Promise = getNative(root, 'Promise');
module.exports = Promise;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_Set.js":
/*!**********************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_Set.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/libram/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/libram/node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Set = getNative(root, 'Set');
module.exports = Set;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_SetCache.js":
/*!***************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_SetCache.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "../node_modules/libram/node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "../node_modules/libram/node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "../node_modules/libram/node_modules/lodash/_setCacheHas.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_Stack.js":
/*!************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_Stack.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/libram/node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "../node_modules/libram/node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "../node_modules/libram/node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "../node_modules/libram/node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "../node_modules/libram/node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "../node_modules/libram/node_modules/lodash/_stackSet.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_Symbol.js":
/*!*************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_Symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../node_modules/libram/node_modules/lodash/_root.js");
/** Built-in value references. */


var _Symbol = root.Symbol;
module.exports = _Symbol;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_Uint8Array.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_Uint8Array.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../node_modules/libram/node_modules/lodash/_root.js");
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_WeakMap.js":
/*!**************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_WeakMap.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/libram/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/libram/node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_arrayFilter.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_arrayFilter.js ***!
  \******************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_arrayLikeKeys.js":
/*!********************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_arrayLikeKeys.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "../node_modules/libram/node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../node_modules/libram/node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/libram/node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../node_modules/libram/node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../node_modules/libram/node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../node_modules/libram/node_modules/lodash/isTypedArray.js");
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
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_arrayPush.js":
/*!****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_arrayPush.js ***!
  \****************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_arraySome.js":
/*!****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_arraySome.js ***!
  \****************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_assocIndexOf.js":
/*!*******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_assocIndexOf.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "../node_modules/libram/node_modules/lodash/eq.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_baseGetAllKeys.js":
/*!*********************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_baseGetAllKeys.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "../node_modules/libram/node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/libram/node_modules/lodash/isArray.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_baseGetTag.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_baseGetTag.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "../node_modules/libram/node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../node_modules/libram/node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../node_modules/libram/node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
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

/***/ "../node_modules/libram/node_modules/lodash/_baseIsArguments.js":
/*!**********************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_baseIsArguments.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/libram/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/libram/node_modules/lodash/isObjectLike.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_baseIsEqual.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_baseIsEqual.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "../node_modules/libram/node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/libram/node_modules/lodash/isObjectLike.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_baseIsEqualDeep.js":
/*!**********************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_baseIsEqualDeep.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "../node_modules/libram/node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "../node_modules/libram/node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "../node_modules/libram/node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "../node_modules/libram/node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "../node_modules/libram/node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/libram/node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../node_modules/libram/node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../node_modules/libram/node_modules/lodash/isTypedArray.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_baseIsNative.js":
/*!*******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_baseIsNative.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "../node_modules/libram/node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "../node_modules/libram/node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/libram/node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../node_modules/libram/node_modules/lodash/_toSource.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_baseIsTypedArray.js":
/*!***********************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_baseIsTypedArray.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/libram/node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../node_modules/libram/node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/libram/node_modules/lodash/isObjectLike.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_baseKeys.js":
/*!***************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_baseKeys.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "../node_modules/libram/node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "../node_modules/libram/node_modules/lodash/_nativeKeys.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_baseTimes.js":
/*!****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_baseTimes.js ***!
  \****************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_baseUnary.js":
/*!****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_baseUnary.js ***!
  \****************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_cacheHas.js":
/*!***************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_cacheHas.js ***!
  \***************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_coreJsData.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_coreJsData.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../node_modules/libram/node_modules/lodash/_root.js");
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_equalArrays.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_equalArrays.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "../node_modules/libram/node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "../node_modules/libram/node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "../node_modules/libram/node_modules/lodash/_cacheHas.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_equalByTag.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_equalByTag.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "../node_modules/libram/node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "../node_modules/libram/node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "../node_modules/libram/node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "../node_modules/libram/node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "../node_modules/libram/node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "../node_modules/libram/node_modules/lodash/_setToArray.js");
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

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
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

/***/ "../node_modules/libram/node_modules/lodash/_equalObjects.js":
/*!*******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_equalObjects.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "../node_modules/libram/node_modules/lodash/_getAllKeys.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_freeGlobal.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_freeGlobal.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
module.exports = freeGlobal;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_getAllKeys.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_getAllKeys.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "../node_modules/libram/node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "../node_modules/libram/node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "../node_modules/libram/node_modules/lodash/keys.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_getMapData.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_getMapData.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "../node_modules/libram/node_modules/lodash/_isKeyable.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_getNative.js":
/*!****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_getNative.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "../node_modules/libram/node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "../node_modules/libram/node_modules/lodash/_getValue.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_getRawTag.js":
/*!****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_getRawTag.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "../node_modules/libram/node_modules/lodash/_Symbol.js");
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

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
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

/***/ "../node_modules/libram/node_modules/lodash/_getSymbols.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_getSymbols.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "../node_modules/libram/node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "../node_modules/libram/node_modules/lodash/stubArray.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_getTag.js":
/*!*************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_getTag.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "../node_modules/libram/node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "../node_modules/libram/node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "../node_modules/libram/node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "../node_modules/libram/node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "../node_modules/libram/node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/libram/node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../node_modules/libram/node_modules/lodash/_toSource.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_getValue.js":
/*!***************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_getValue.js ***!
  \***************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_hashClear.js":
/*!****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_hashClear.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../node_modules/libram/node_modules/lodash/_nativeCreate.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_hashDelete.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_hashDelete.js ***!
  \*****************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_hashGet.js":
/*!**************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_hashGet.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../node_modules/libram/node_modules/lodash/_nativeCreate.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_hashHas.js":
/*!**************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_hashHas.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../node_modules/libram/node_modules/lodash/_nativeCreate.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_hashSet.js":
/*!**************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_hashSet.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../node_modules/libram/node_modules/lodash/_nativeCreate.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_isIndex.js":
/*!**************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_isIndex.js ***!
  \**************************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_isKeyable.js":
/*!****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_isKeyable.js ***!
  \****************************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_isMasked.js":
/*!***************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_isMasked.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "../node_modules/libram/node_modules/lodash/_coreJsData.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_isPrototype.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_isPrototype.js ***!
  \******************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_listCacheClear.js":
/*!*********************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_listCacheClear.js ***!
  \*********************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_listCacheDelete.js":
/*!**********************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_listCacheDelete.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../node_modules/libram/node_modules/lodash/_assocIndexOf.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_listCacheGet.js":
/*!*******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_listCacheGet.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../node_modules/libram/node_modules/lodash/_assocIndexOf.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_listCacheHas.js":
/*!*******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_listCacheHas.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../node_modules/libram/node_modules/lodash/_assocIndexOf.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_listCacheSet.js":
/*!*******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_listCacheSet.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../node_modules/libram/node_modules/lodash/_assocIndexOf.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_mapCacheClear.js":
/*!********************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_mapCacheClear.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "../node_modules/libram/node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/libram/node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../node_modules/libram/node_modules/lodash/_Map.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_mapCacheDelete.js":
/*!*********************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_mapCacheDelete.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../node_modules/libram/node_modules/lodash/_getMapData.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_mapCacheGet.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_mapCacheGet.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../node_modules/libram/node_modules/lodash/_getMapData.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_mapCacheHas.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_mapCacheHas.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../node_modules/libram/node_modules/lodash/_getMapData.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_mapCacheSet.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_mapCacheSet.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../node_modules/libram/node_modules/lodash/_getMapData.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_mapToArray.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_mapToArray.js ***!
  \*****************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_nativeCreate.js":
/*!*******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_nativeCreate.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/libram/node_modules/lodash/_getNative.js");
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_nativeKeys.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_nativeKeys.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "../node_modules/libram/node_modules/lodash/_overArg.js");
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_nodeUtil.js":
/*!***************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_nodeUtil.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../node_modules/libram/node_modules/lodash/_freeGlobal.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? 0 : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? 0 : _typeof(module)) == 'object' && module && !module.nodeType && module;
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

/***/ "../node_modules/libram/node_modules/lodash/_objectToString.js":
/*!*********************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_objectToString.js ***!
  \*********************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_overArg.js":
/*!**************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_overArg.js ***!
  \**************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_root.js":
/*!***********************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_root.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../node_modules/libram/node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/_setCacheAdd.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_setCacheAdd.js ***!
  \******************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_setCacheHas.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_setCacheHas.js ***!
  \******************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_setToArray.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_setToArray.js ***!
  \*****************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_stackClear.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_stackClear.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/libram/node_modules/lodash/_ListCache.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_stackDelete.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_stackDelete.js ***!
  \******************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_stackGet.js":
/*!***************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_stackGet.js ***!
  \***************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_stackHas.js":
/*!***************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_stackHas.js ***!
  \***************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/_stackSet.js":
/*!***************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_stackSet.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/libram/node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../node_modules/libram/node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "../node_modules/libram/node_modules/lodash/_MapCache.js");
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

/***/ "../node_modules/libram/node_modules/lodash/_toSource.js":
/*!***************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/_toSource.js ***!
  \***************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/eq.js":
/*!********************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/eq.js ***!
  \********************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/isArguments.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/isArguments.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "../node_modules/libram/node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/libram/node_modules/lodash/isObjectLike.js");
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

/***/ "../node_modules/libram/node_modules/lodash/isArray.js":
/*!*************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/isArray.js ***!
  \*************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/isArrayLike.js":
/*!*****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/isArrayLike.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "../node_modules/libram/node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../node_modules/libram/node_modules/lodash/isLength.js");
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

/***/ "../node_modules/libram/node_modules/lodash/isBuffer.js":
/*!**************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/isBuffer.js ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = __webpack_require__(/*! ./_root */ "../node_modules/libram/node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "../node_modules/libram/node_modules/lodash/stubFalse.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? 0 : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? 0 : _typeof(module)) == 'object' && module && !module.nodeType && module;
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

/***/ "../node_modules/libram/node_modules/lodash/isEqual.js":
/*!*************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/isEqual.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "../node_modules/libram/node_modules/lodash/_baseIsEqual.js");
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

/***/ "../node_modules/libram/node_modules/lodash/isFunction.js":
/*!****************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/isFunction.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/libram/node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/libram/node_modules/lodash/isObject.js");
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

/***/ "../node_modules/libram/node_modules/lodash/isLength.js":
/*!**************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/isLength.js ***!
  \**************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/isObject.js":
/*!**************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/isObject.js ***!
  \**************************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/isObjectLike.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/isObjectLike.js ***!
  \******************************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  return value != null && _typeof(value) == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "../node_modules/libram/node_modules/lodash/isTypedArray.js":
/*!******************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/isTypedArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "../node_modules/libram/node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../node_modules/libram/node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../node_modules/libram/node_modules/lodash/_nodeUtil.js");
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

/***/ "../node_modules/libram/node_modules/lodash/keys.js":
/*!**********************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/keys.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../node_modules/libram/node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "../node_modules/libram/node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../node_modules/libram/node_modules/lodash/isArrayLike.js");
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

/***/ "../node_modules/libram/node_modules/lodash/stubArray.js":
/*!***************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/stubArray.js ***!
  \***************************************************************/
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

/***/ "../node_modules/libram/node_modules/lodash/stubFalse.js":
/*!***************************************************************!*\
  !*** ../node_modules/libram/node_modules/lodash/stubFalse.js ***!
  \***************************************************************/
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

/***/ "./src/phredhccs-lib.ts":
/*!******************************!*\
  !*** ./src/phredhccs-lib.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fuelUp": () => /* binding */ fuelUp,
/* harmony export */   "synthExp": () => /* binding */ synthExp,
/* harmony export */   "synthItem": () => /* binding */ synthItem,
/* harmony export */   "synthMyst": () => /* binding */ synthMyst,
/* harmony export */   "synthHot": () => /* binding */ synthHot,
/* harmony export */   "kramcoCheck": () => /* binding */ kramcoCheck,
/* harmony export */   "useDefaultFamiliar": () => /* binding */ useDefaultFamiliar,
/* harmony export */   "Test": () => /* binding */ Test,
/* harmony export */   "testDone": () => /* binding */ testDone,
/* harmony export */   "doTest": () => /* binding */ doTest,
/* harmony export */   "ensureInnerElf": () => /* binding */ ensureInnerElf,
/* harmony export */   "fightSausageIfAble": () => /* binding */ fightSausageIfAble,
/* harmony export */   "ensurePotionEffect": () => /* binding */ ensurePotionEffect,
/* harmony export */   "ensureEffect": () => /* binding */ ensureEffect,
/* harmony export */   "setClan": () => /* binding */ setClan,
/* harmony export */   "setChoice": () => /* binding */ setChoice,
/* harmony export */   "uniform": () => /* binding */ uniform,
/* harmony export */   "tryUse": () => /* binding */ tryUse,
/* harmony export */   "delevel": () => /* binding */ delevel,
/* harmony export */   "candyblast": () => /* binding */ candyblast,
/* harmony export */   "easyFight": () => /* binding */ easyFight,
/* harmony export */   "multiFightAutoAttack": () => /* binding */ multiFightAutoAttack,
/* harmony export */   "heal": () => /* binding */ heal,
/* harmony export */   "advMacroAA": () => /* binding */ advMacroAA,
/* harmony export */   "advMacro": () => /* binding */ advMacro,
/* harmony export */   "mapMacro": () => /* binding */ mapMacro,
/* harmony export */   "horsery": () => /* binding */ horsery,
/* harmony export */   "horse": () => /* binding */ horse,
/* harmony export */   "convertMilliseconds": () => /* binding */ convertMilliseconds,
/* harmony export */   "fax": () => /* binding */ fax
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libram */ "../node_modules/libram/dist/index.js");
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(libram__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject105() {
  var data = _taggedTemplateLiteral(["Map the Monsters"]);

  _templateObject105 = function _templateObject105() {
    return data;
  };

  return data;
}

function _templateObject104() {
  var data = _taggedTemplateLiteral(["back"]);

  _templateObject104 = function _templateObject104() {
    return data;
  };

  return data;
}

function _templateObject103() {
  var data = _taggedTemplateLiteral(["acc3"]);

  _templateObject103 = function _templateObject103() {
    return data;
  };

  return data;
}

function _templateObject102() {
  var data = _taggedTemplateLiteral(["codpiece"]);

  _templateObject102 = function _templateObject102() {
    return data;
  };

  return data;
}

function _templateObject101() {
  var data = _taggedTemplateLiteral(["acc2"]);

  _templateObject101 = function _templateObject101() {
    return data;
  };

  return data;
}

function _templateObject100() {
  var data = _taggedTemplateLiteral(["your cowboy boots"]);

  _templateObject100 = function _templateObject100() {
    return data;
  };

  return data;
}

function _templateObject99() {
  var data = _taggedTemplateLiteral(["acc1"]);

  _templateObject99 = function _templateObject99() {
    return data;
  };

  return data;
}

function _templateObject98() {
  var data = _taggedTemplateLiteral(["familiar scrapbook"]);

  _templateObject98 = function _templateObject98() {
    return data;
  };

  return data;
}

function _templateObject97() {
  var data = _taggedTemplateLiteral(["off-hand"]);

  _templateObject97 = function _templateObject97() {
    return data;
  };

  return data;
}

function _templateObject96() {
  var data = _taggedTemplateLiteral(["fourth of may cosplay saber"]);

  _templateObject96 = function _templateObject96() {
    return data;
  };

  return data;
}

function _templateObject95() {
  var data = _taggedTemplateLiteral(["weapon"]);

  _templateObject95 = function _templateObject95() {
    return data;
  };

  return data;
}

function _templateObject94() {
  var data = _taggedTemplateLiteral(["pants"]);

  _templateObject94 = function _templateObject94() {
    return data;
  };

  return data;
}

function _templateObject93() {
  var data = _taggedTemplateLiteral(["fresh coat of paint"]);

  _templateObject93 = function _templateObject93() {
    return data;
  };

  return data;
}

function _templateObject92() {
  var data = _taggedTemplateLiteral(["shirt"]);

  _templateObject92 = function _templateObject92() {
    return data;
  };

  return data;
}

function _templateObject91() {
  var data = _taggedTemplateLiteral(["iunion crown"]);

  _templateObject91 = function _templateObject91() {
    return data;
  };

  return data;
}

function _templateObject90() {
  var data = _taggedTemplateLiteral(["hat"]);

  _templateObject90 = function _templateObject90() {
    return data;
  };

  return data;
}

function _templateObject89() {
  var data = _taggedTemplateLiteral(["vampyric cloake"]);

  _templateObject89 = function _templateObject89() {
    return data;
  };

  return data;
}

function _templateObject88() {
  var data = _taggedTemplateLiteral(["lov epaulettes"]);

  _templateObject88 = function _templateObject88() {
    return data;
  };

  return data;
}

function _templateObject87() {
  var data = _taggedTemplateLiteral(["lov epaulettes"]);

  _templateObject87 = function _templateObject87() {
    return data;
  };

  return data;
}

function _templateObject86() {
  var data = _taggedTemplateLiteral(["powerful glove"]);

  _templateObject86 = function _templateObject86() {
    return data;
  };

  return data;
}

function _templateObject85() {
  var data = _taggedTemplateLiteral(["battle broom"]);

  _templateObject85 = function _templateObject85() {
    return data;
  };

  return data;
}

function _templateObject84() {
  var data = _taggedTemplateLiteral(["battle broom"]);

  _templateObject84 = function _templateObject84() {
    return data;
  };

  return data;
}

function _templateObject83() {
  var data = _taggedTemplateLiteral(["old sweatpants"]);

  _templateObject83 = function _templateObject83() {
    return data;
  };

  return data;
}

function _templateObject82() {
  var data = _taggedTemplateLiteral(["pantogram pants"]);

  _templateObject82 = function _templateObject82() {
    return data;
  };

  return data;
}

function _templateObject81() {
  var data = _taggedTemplateLiteral(["pantogram pants"]);

  _templateObject81 = function _templateObject81() {
    return data;
  };

  return data;
}

function _templateObject80() {
  var data = _taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]);

  _templateObject80 = function _templateObject80() {
    return data;
  };

  return data;
}

function _templateObject79() {
  var data = _taggedTemplateLiteral(["off-hand"]);

  _templateObject79 = function _templateObject79() {
    return data;
  };

  return data;
}

function _templateObject78() {
  var data = _taggedTemplateLiteral(["snokebomb"]);

  _templateObject78 = function _templateObject78() {
    return data;
  };

  return data;
}

function _templateObject77() {
  var data = _taggedTemplateLiteral(["Tranquilizer Dart"]);

  _templateObject77 = function _templateObject77() {
    return data;
  };

  return data;
}

function _templateObject76() {
  var data = _taggedTemplateLiteral(["The Slime Tube"]);

  _templateObject76 = function _templateObject76() {
    return data;
  };

  return data;
}

function _templateObject75() {
  var data = _taggedTemplateLiteral(["Blood Bubble"]);

  _templateObject75 = function _templateObject75() {
    return data;
  };

  return data;
}

function _templateObject74() {
  var data = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]);

  _templateObject74 = function _templateObject74() {
    return data;
  };

  return data;
}

function _templateObject73() {
  var data = _taggedTemplateLiteral(["acc3"]);

  _templateObject73 = function _templateObject73() {
    return data;
  };

  return data;
}

function _templateObject72() {
  var data = _taggedTemplateLiteral(["Machine Elf"]);

  _templateObject72 = function _templateObject72() {
    return data;
  };

  return data;
}

function _templateObject71() {
  var data = _taggedTemplateLiteral(["Inner Elf"]);

  _templateObject71 = function _templateObject71() {
    return data;
  };

  return data;
}

function _templateObject70() {
  var data = _taggedTemplateLiteral(["puck man"]);

  _templateObject70 = function _templateObject70() {
    return data;
  };

  return data;
}

function _templateObject69() {
  var data = _taggedTemplateLiteral(["garbage fire"]);

  _templateObject69 = function _templateObject69() {
    return data;
  };

  return data;
}

function _templateObject68() {
  var data = _taggedTemplateLiteral(["burning paper crane"]);

  _templateObject68 = function _templateObject68() {
    return data;
  };

  return data;
}

function _templateObject67() {
  var data = _taggedTemplateLiteral(["burning newspaper"]);

  _templateObject67 = function _templateObject67() {
    return data;
  };

  return data;
}

function _templateObject66() {
  var data = _taggedTemplateLiteral(["shorter-order cook"]);

  _templateObject66 = function _templateObject66() {
    return data;
  };

  return data;
}

function _templateObject65() {
  var data = _taggedTemplateLiteral(["shortly stacked"]);

  _templateObject65 = function _templateObject65() {
    return data;
  };

  return data;
}

function _templateObject64() {
  var data = _taggedTemplateLiteral(["short stack of pancakes"]);

  _templateObject64 = function _templateObject64() {
    return data;
  };

  return data;
}

function _templateObject63() {
  var data = _taggedTemplateLiteral(["dromedary drinking helmet"]);

  _templateObject63 = function _templateObject63() {
    return data;
  };

  return data;
}

function _templateObject62() {
  var data = _taggedTemplateLiteral(["familiar"]);

  _templateObject62 = function _templateObject62() {
    return data;
  };

  return data;
}

function _templateObject61() {
  var data = _taggedTemplateLiteral(["melodramedary"]);

  _templateObject61 = function _templateObject61() {
    return data;
  };

  return data;
}

function _templateObject60() {
  var data = _taggedTemplateLiteral(["stocking mimic"]);

  _templateObject60 = function _templateObject60() {
    return data;
  };

  return data;
}

function _templateObject59() {
  var data = _taggedTemplateLiteral(["synthesis: hot"]);

  _templateObject59 = function _templateObject59() {
    return data;
  };

  return data;
}

function _templateObject58() {
  var data = _taggedTemplateLiteral(["summon candy heart"]);

  _templateObject58 = function _templateObject58() {
    return data;
  };

  return data;
}

function _templateObject57() {
  var data = _taggedTemplateLiteral(["pink candy heart"]);

  _templateObject57 = function _templateObject57() {
    return data;
  };

  return data;
}

function _templateObject56() {
  var data = _taggedTemplateLiteral(["lavender candy heart"]);

  _templateObject56 = function _templateObject56() {
    return data;
  };

  return data;
}

function _templateObject55() {
  var data = _taggedTemplateLiteral(["mr. mediocrebar"]);

  _templateObject55 = function _templateObject55() {
    return data;
  };

  return data;
}

function _templateObject54() {
  var data = _taggedTemplateLiteral(["yellow candy heart"]);

  _templateObject54 = function _templateObject54() {
    return data;
  };

  return data;
}

function _templateObject53() {
  var data = _taggedTemplateLiteral(["daffy taffy"]);

  _templateObject53 = function _templateObject53() {
    return data;
  };

  return data;
}

function _templateObject52() {
  var data = _taggedTemplateLiteral(["cold hots candy"]);

  _templateObject52 = function _templateObject52() {
    return data;
  };

  return data;
}

function _templateObject51() {
  var data = _taggedTemplateLiteral(["orange candy heart"]);

  _templateObject51 = function _templateObject51() {
    return data;
  };

  return data;
}

function _templateObject50() {
  var data = _taggedTemplateLiteral(["green candy heart"]);

  _templateObject50 = function _templateObject50() {
    return data;
  };

  return data;
}

function _templateObject49() {
  var data = _taggedTemplateLiteral(["white candy heart"]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = _taggedTemplateLiteral(["wint-o-fresh mint"]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = _taggedTemplateLiteral(["synthesis: smart"]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = _taggedTemplateLiteral(["peppermint twist"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral(["peppermint twist"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral(["peppermint twist"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["peppermint sprout"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["peppermint sprout"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["summon candy heart"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["pink candy heart"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["pink candy heart"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["orange candy heart"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["senior mints"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["bag of many confections"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["chubby and plump"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["chubby and plump"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["bag of many confections"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["crimbo peppermint bark"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["crimbo candied pecan"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["crimbo fudge"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["summon crimbo candy"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["synthesis: collection"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["peppermint twist"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["peppermint sprout"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["peppermint twist"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["peppermint twist"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["peppermint twist"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["crimbo peppermint bark"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["crimbo candied pecan"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["crimbo fudge"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["summon crimbo candy"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["synthesis: learning"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["peppermint sprout"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["sugar shotgun"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["sugar shotgun"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["sugar shotgun"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["sugar shotgun"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["peppermint sprout"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["crimbo peppermint bark"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["crimbo candied pecan"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["crimbo fudge"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["summon crimbo candy"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["soda bread"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["soda bread"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["wad of dough"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["soda water"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["wad of dough"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["all-purpose flower"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["all-purpose flower"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



function fuelUp() {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject()));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject2()));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject3())), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject4()));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject5())), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject6()));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("asdonmartin fuel ".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject7())), " soda bread"));
}
function synthExp() {
  if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("harvestGardenHardcore") === "none") {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("campground.php?action=garden");
  }

  if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_candySummons") === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject8()));
  }

  var fudge = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject9());
  var pecan = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject10());
  var bark = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject11());
  var fudges = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(fudge);
  var pecans = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(pecan);
  var barks = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(bark);

  if (fudges >= 2) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(fudge, fudge);
  } else if (barks >= 1) {
    if (pecans >= 1) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(pecan, bark);
    } else {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(bark, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject12()));
    }
  } else {
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject13())) === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject14()));
    }

    if (pecans >= 1) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(pecan, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject15()));
    } else {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject16()), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject17()));
    }
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject18())) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize learning. Pwease fix me :c.";
  }
}
function synthItem() {
  if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("harvestGardenHardcore") === "none") {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("campground.php?action=garden");
  }

  if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_candySummons") === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject19()));
  }

  var fudge = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject20());
  var pecan = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject21());
  var bark = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject22());
  var fudges = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(fudge);
  var pecans = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(pecan);
  var barks = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(bark);

  if (barks >= 2) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(bark, bark);
  } else {
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject23())) === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject24()));
    }

    if (pecans >= 1) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(pecan, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject25()));
    } else {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject26()), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject27()));
    }
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject28())) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize collection. Pwease fix me :c.";
  }
}
function synthMyst() {
  if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("harvestGardenHardcore") === "none") {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("campground.php?action=garden");
  }

  if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_candySummons") === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject29()));
  }

  var fudge = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject30());
  var pecan = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject31());
  var bark = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject32());
  var fudges = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(fudge);
  var pecans = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(pecan);
  var barks = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(bark);

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject33())) >= 1) {
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_chubbyAndPlumpUsed")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject34()));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject35()), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject36()));
  } else {
    var mint = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject37());
    var mints = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(mint);
    var orangeHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject38());

    var orangeHearts = function orangeHearts() {
      return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(orangeHeart);
    };

    var pinkHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject39());

    var pinkHearts = function pinkHearts() {
      return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject40()));
    };

    var n = 0;

    while (mints + orangeHearts() + pinkHearts() === 0 && n < 11) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject41()));
      n++;
    }

    if (mints + orangeHearts() + pinkHearts() === 0) {
      throw "Failed to summon hearts in a timely manner";
    }

    if (mints >= 1) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(mint, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject42()));
    } else if (orangeHearts() >= 1) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(orangeHeart, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject43()));
    } else if (pinkHearts() >= 1) {
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject44())) === 0) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject45()));
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(pinkHeart, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject46()));
    }
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject47())) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize smart. Pwease fix me :c.";
  }
}
function synthHot() {
  //none of us are free of sin. i know how to write this better now, but i won't <3
  var wintoMint = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject48());
  var wintoMints = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(wintoMint);
  var whiteHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject49());

  var whiteHearts = function whiteHearts() {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(whiteHeart);
  };

  var greenHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject50());

  var greenHearts = function greenHearts() {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(greenHeart);
  };

  var orangeHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject51());

  var orangeHearts = function orangeHearts() {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(orangeHeart);
  };

  var coldHot = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject52());
  var coldHots = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(coldHot);
  var daffyTaffy = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject53());
  var daffyTaffys = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(daffyTaffy);
  var yellowHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject54());

  var yellowHearts = function yellowHearts() {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(yellowHeart);
  };

  var mrMediocre = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject55());
  var mrMediocres = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(mrMediocre);
  var lavenderHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject56());

  var lavenderHearts = function lavenderHearts() {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(lavenderHeart);
  };

  var pinkHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject57());

  var pinkHearts = function pinkHearts() {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(pinkHeart);
  };

  var n = 0;

  while ((wintoMints + whiteHearts() + greenHearts()) * orangeHearts() === 0 && (coldHots + daffyTaffys + yellowHearts()) * (mrMediocres + lavenderHearts()) === 0 && pinkHearts() !== 2 && n <= 11) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject58()));
    n++;
  }

  if (n > 11) {
    throw "Unable to retrieve candies in a timely manner";
  }

  if ((wintoMints + whiteHearts() + greenHearts()) * orangeHearts() !== 0) {
    if (wintoMints > 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(wintoMint, orangeHeart);
    } else if (whiteHearts() > 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(whiteHeart, orangeHeart);
    } else {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(greenHeart, orangeHeart);
    }
  } else if ((coldHots + daffyTaffys + yellowHearts()) * (mrMediocres + lavenderHearts()) !== 0) {
    if (mrMediocres >= 1) {
      if (coldHots >= 1) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(mrMediocre, daffyTaffy);
      } else if (daffyTaffys >= 1) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(mrMediocre, daffyTaffy);
      } else if (yellowHearts() >= 1) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(mrMediocre, yellowHeart);
      }
    } else {
      if (coldHots >= 1) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(lavenderHeart, daffyTaffy);
      } else if (daffyTaffys >= 1) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(lavenderHeart, daffyTaffy);
      } else if (yellowHearts() >= 1) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(lavenderHeart, yellowHeart);
      }
    }
  } else {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(pinkHeart, pinkHeart);
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject59())) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize hot. Pwease fix me :c.";
  }
}
function kramcoCheck() {
  var kramcoNumber = 5 + 3 * (0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_sausageFights") + Math.pow(Math.max(0, (0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_sausageFights") - 5), 3);
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.totalTurnsPlayed)() - (0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_lastSausageMonsterTurn") + 1 >= kramcoNumber;
}
function useDefaultFamiliar() {
  var canAttack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (!(0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_bagOfCandy") && canAttack) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject60()));
  } else if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("camelSpit") !== 100) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject61()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject62()), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject63()));
  } else if (canAttack && !(0,libram__WEBPACK_IMPORTED_MODULE_1__.have)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject64())) && !(0,libram__WEBPACK_IMPORTED_MODULE_1__.have)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject65())) && !testDone(Test.FAMILIAR)) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject66()));
  } else if (!(0,libram__WEBPACK_IMPORTED_MODULE_1__.have)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject67())) && !(0,libram__WEBPACK_IMPORTED_MODULE_1__.have)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject68()))) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject69()));
  } else {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject70()));
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
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Checking test ".concat(testNum, "..."));
  var text = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("council.php");
  return !(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.containsText)(text, "<input type=hidden name=option value=".concat(testNum, ">"));
}
function doTest(testNum) {
  //stolen directly from bean
  if (!testDone(testNum)) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("choice.php?whichchoice=1089&option=".concat(testNum));

    if (!testDone(testNum)) {
      throw 'Failed to do test " + testNum + ". Maybe we are out of turns.';
    }
  } else {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Test ".concat(testNum, " already completed."));
  }
}
function ensureInnerElf() {
  //stolen merely mostly from bean
  if (!(0,libram__WEBPACK_IMPORTED_MODULE_1__.have)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject71()))) {
    setClan("Hobopolis Vacation Home");

    try {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject72()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject73()), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject74()));
      setChoice(326, 1);
      ensureEffect((0,libram__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject75()));
      advMacro((0,libram__WEBPACK_IMPORTED_MODULE_1__.$location)(_templateObject76()), libram__WEBPACK_IMPORTED_MODULE_1__.Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject77())).trySkill((0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject78())));
    } finally {
      setClan("Alliance From Heck");
    }
  }
}
function fightSausageIfAble(location, macro) {
  if (kramcoCheck()) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject79()), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject80()));
    var sausages = (0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_sausageFights");
    advMacroAA(location, macro, function () {
      return sausages === (0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_sausageFights");
    });

    if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("lastEncounter") !== "sausage goblin") {
      throw "Did not fight a sausage, but I thought I would. Uh oh!";
    }
  }
}
function ensurePotionEffect(ef, potion) {
  //stolen directly from bean
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) === 0) {
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(potion) === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, potion);
    }

    if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)(ef["default"]) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) === 0) {
      throw "Failed to get effect ".concat(ef.name, ".");
    }
  } else {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Already have effect ".concat(ef.name, "."));
  }
}
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  //stolen directly from bean
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) < turns) {
    if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)(ef["default"]) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) === 0) {
      throw "Failed to get effect ".concat(ef.name, ".");
    }
  } else {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Already have effect ".concat(ef.name, "."));
  }
}
function setClan(target) {
  //stolen directly from bean
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanName)() !== target) {
    var clanCache = JSON.parse((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)("hccs_clanCache") || "{}");

    if (clanCache.target === undefined) {
      var recruiter = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_signup.php");
      var clanRe = /<option value=([0-9]+)>([^<]+)<\/option>/g;
      var match;

      while ((match = clanRe.exec(recruiter)) !== null) {
        clanCache[match[2]] = match[1];
      }
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)("hccs_clanCache", JSON.stringify(clanCache));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("showclan.php?whichclan=".concat(clanCache[target], "&action=joinclan&confirm=on&pwd"));

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanName)() !== target) {
      throw "failed to switch clans to ".concat(target, ". Did you spell it correctly? Are you whitelisted?");
    }
  }

  return true;
}
function setChoice(adv, choice) {
  //stolen directly from bean
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)("choiceAdventure".concat(adv), "".concat(choice));
}
function uniform() {
  var pants = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject81())) !== 0 ? (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject82()) : (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject83());
  var acc3 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject84())) !== 0 ? (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject85()) : (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject86());
  var back = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject87())) !== 0 ? (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject88()) : (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject89());
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject90()), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject91()));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject92()), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject93()));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject94()), pants);
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject95()), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject96()));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject97()), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject98()));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject99()), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject100()));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject101()), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject102()));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject103()), acc3);
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject104()), back);
}
function tryUse(quantity, it) {
  //ripped straight from bean
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(it) > 0) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(quantity, it);
  } else {
    return false;
  }
}
var delevel = libram__WEBPACK_IMPORTED_MODULE_1__.Macro.skill("curse of weaksauce").skill("micrometeor").item("time-spinner").skill("summon love gnats");
var candyblast = libram__WEBPACK_IMPORTED_MODULE_1__.Macro.while_('!match "Hey, some of it is even intact afterwards!"', libram__WEBPACK_IMPORTED_MODULE_1__.Macro.skill("candyblast"));
var easyFight = libram__WEBPACK_IMPORTED_MODULE_1__.Macro.skill("extract").skill("sing along");
function multiFightAutoAttack() {
  while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.choiceFollowsFight)() || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inMultiFight)()) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("choice.php");
  }
}
function heal() {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.restoreHp)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMaxhp)());
}
function advMacroAA(location, macro) {
  var parameter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var afterCombatAction = arguments.length > 3 ? arguments[3] : undefined;
  var n = 0;

  var condition = function condition() {
    return typeof parameter === "number" ? n < parameter : parameter();
  };

  var macroText = macro.toString();
  macro.setAutoAttack();

  while (condition()) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)(location, -1, function (round, foe, text) {
      return libram__WEBPACK_IMPORTED_MODULE_1__.Macro.if_("!pastround 2", macro).abort().toString();
    });
    if (afterCombatAction) afterCombatAction();
    n++;
  }
}
function advMacro(location, macro) {
  var parameter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var afterCombatAction = arguments.length > 3 ? arguments[3] : undefined;
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setAutoAttack)(0);
  var n = 0;

  var condition = function condition() {
    return typeof parameter === "number" ? n < parameter : parameter();
  };

  var macroText = macro.toString();

  while (condition()) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)(location, -1, function () {
      return libram__WEBPACK_IMPORTED_MODULE_1__.Macro.if_("!pastround 2", macro).abort().toString();
    });
    if (afterCombatAction) afterCombatAction();
    n++;
  }
}
function mapMacro(location, monster, macro) {
  macro.setAutoAttack();
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject105()));
  if (!(0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("mappingMonsters")) throw "I am not actually mapping anything. Weird!";else {
    while ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("mappingMonsters")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toUrl)(location));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(1, "heyscriptswhatsupwinkwink=".concat(monster.id));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)(macro.toString());
    }
  }
}
function horsery() {
  return (0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_horsery");
}
function horse(horse) {
  if (!horse.includes("horse")) horse = horse + " horse";
  if (horsery() !== horse) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("horsery ".concat(horse));
}
function convertMilliseconds(milliseconds) {
  var seconds = milliseconds / 1000;
  var minutes = Math.floor(seconds / 60);
  var secondsLeft = seconds - minutes * 60;
  var hours = Math.floor(minutes / 60);
  var minutesLeft = minutes - hours * 60;
  return (hours !== 0 ? "".concat(hours, " hours, ") : "") + (minutesLeft !== 0 ? "".concat(minutesLeft, " minutes, ") : "") + (secondsLeft !== 0 ? "".concat(secondsLeft, " seconds") : "");
}

function checkFax(monster) {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("fax receive");
  if (libram__WEBPACK_IMPORTED_MODULE_1__.property.getString("photocopyMonster").toLowerCase() === monster.name.toLowerCase()) return true;
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("fax send");
  return false;
}

function fax(monster) {
  if (!(0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_photocopyUsed")) {
    if (checkFax(monster)) return;
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.chatPrivate)("cheesefax", monster.name);

    for (var i = 0; i < 3; i++) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.wait)(10);
      if (checkFax(monster)) return;
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)("Failed to acquire photocopied Knob Goblin Embezzler.");
  }
}

/***/ }),

/***/ "./src/phredhccs.ts":
/*!**************************!*\
  !*** ./src/phredhccs.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libram */ "../node_modules/libram/dist/index.js");
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(libram__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phredhccs-lib */ "./src/phredhccs-lib.ts");
function _templateObject455() {
  var data = _taggedTemplateLiteral(["disembodied hand"]);

  _templateObject455 = function _templateObject455() {
    return data;
  };

  return data;
}

function _templateObject454() {
  var data = _taggedTemplateLiteral(["left-hand man"]);

  _templateObject454 = function _templateObject454() {
    return data;
  };

  return data;
}

function _templateObject453() {
  var data = _taggedTemplateLiteral(["left-hand man"]);

  _templateObject453 = function _templateObject453() {
    return data;
  };

  return data;
}

function _templateObject452() {
  var data = _taggedTemplateLiteral(["disembodied hand"]);

  _templateObject452 = function _templateObject452() {
    return data;
  };

  return data;
}

function _templateObject451() {
  var data = _taggedTemplateLiteral(["obsidian nutcracker"]);

  _templateObject451 = function _templateObject451() {
    return data;
  };

  return data;
}

function _templateObject450() {
  var data = _taggedTemplateLiteral(["use the force"]);

  _templateObject450 = function _templateObject450() {
    return data;
  };

  return data;
}

function _templateObject449() {
  var data = _taggedTemplateLiteral(["meteor shower"]);

  _templateObject449 = function _templateObject449() {
    return data;
  };

  return data;
}

function _templateObject448() {
  var data = _taggedTemplateLiteral(["spit on me"]);

  _templateObject448 = function _templateObject448() {
    return data;
  };

  return data;
}

function _templateObject447() {
  var data = _taggedTemplateLiteral(["the dire warren"]);

  _templateObject447 = function _templateObject447() {
    return data;
  };

  return data;
}

function _templateObject446() {
  var data = _taggedTemplateLiteral(["corrupted marrow"]);

  _templateObject446 = function _templateObject446() {
    return data;
  };

  return data;
}

function _templateObject445() {
  var data = _taggedTemplateLiteral(["photocopied monster"]);

  _templateObject445 = function _templateObject445() {
    return data;
  };

  return data;
}

function _templateObject444() {
  var data = _taggedTemplateLiteral(["ungulith"]);

  _templateObject444 = function _templateObject444() {
    return data;
  };

  return data;
}

function _templateObject443() {
  var data = _taggedTemplateLiteral(["use the force"]);

  _templateObject443 = function _templateObject443() {
    return data;
  };

  return data;
}

function _templateObject442() {
  var data = _taggedTemplateLiteral(["meteor shower"]);

  _templateObject442 = function _templateObject442() {
    return data;
  };

  return data;
}

function _templateObject441() {
  var data = _taggedTemplateLiteral(["spit on me"]);

  _templateObject441 = function _templateObject441() {
    return data;
  };

  return data;
}

function _templateObject440() {
  var data = _taggedTemplateLiteral(["melodramedary"]);

  _templateObject440 = function _templateObject440() {
    return data;
  };

  return data;
}

function _templateObject439() {
  var data = _taggedTemplateLiteral(["meteor showered"]);

  _templateObject439 = function _templateObject439() {
    return data;
  };

  return data;
}

function _templateObject438() {
  var data = _taggedTemplateLiteral(["feel hatred"]);

  _templateObject438 = function _templateObject438() {
    return data;
  };

  return data;
}

function _templateObject437() {
  var data = _taggedTemplateLiteral(["the dire warren"]);

  _templateObject437 = function _templateObject437() {
    return data;
  };

  return data;
}

function _templateObject436() {
  var data = _taggedTemplateLiteral(["mini-adventurer"]);

  _templateObject436 = function _templateObject436() {
    return data;
  };

  return data;
}

function _templateObject435() {
  var data = _taggedTemplateLiteral(["sauceror"]);

  _templateObject435 = function _templateObject435() {
    return data;
  };

  return data;
}

function _templateObject434() {
  var data = _taggedTemplateLiteral(["saucefingers"]);

  _templateObject434 = function _templateObject434() {
    return data;
  };

  return data;
}

function _templateObject433() {
  var data = _taggedTemplateLiteral(["Baconstoned"]);

  _templateObject433 = function _templateObject433() {
    return data;
  };

  return data;
}

function _templateObject432() {
  var data = _taggedTemplateLiteral(["flask of baconstone juice"]);

  _templateObject432 = function _templateObject432() {
    return data;
  };

  return data;
}

function _templateObject431() {
  var data = _taggedTemplateLiteral(["Spirit of Cayenne"]);

  _templateObject431 = function _templateObject431() {
    return data;
  };

  return data;
}

function _templateObject430() {
  var data = _taggedTemplateLiteral(["Full Bottle in front of Me"]);

  _templateObject430 = function _templateObject430() {
    return data;
  };

  return data;
}

function _templateObject429() {
  var data = _taggedTemplateLiteral(["weeping willow wand"]);

  _templateObject429 = function _templateObject429() {
    return data;
  };

  return data;
}

function _templateObject428() {
  var data = _taggedTemplateLiteral(["flimsy hardwood scraps"]);

  _templateObject428 = function _templateObject428() {
    return data;
  };

  return data;
}

function _templateObject427() {
  var data = _taggedTemplateLiteral(["sugar chapeau"]);

  _templateObject427 = function _templateObject427() {
    return data;
  };

  return data;
}

function _templateObject426() {
  var data = _taggedTemplateLiteral(["sugar sheet"]);

  _templateObject426 = function _templateObject426() {
    return data;
  };

  return data;
}

function _templateObject425() {
  var data = _taggedTemplateLiteral(["summon sugar sheets"]);

  _templateObject425 = function _templateObject425() {
    return data;
  };

  return data;
}

function _templateObject424() {
  var data = _taggedTemplateLiteral(["The Magic of LOV"]);

  _templateObject424 = function _templateObject424() {
    return data;
  };

  return data;
}

function _templateObject423() {
  var data = _taggedTemplateLiteral(["LOV Elixir #6"]);

  _templateObject423 = function _templateObject423() {
    return data;
  };

  return data;
}

function _templateObject422() {
  var data = _taggedTemplateLiteral(["Sigils of Yeg"]);

  _templateObject422 = function _templateObject422() {
    return data;
  };

  return data;
}

function _templateObject421() {
  var data = _taggedTemplateLiteral(["Pisces in the Skyces, Carol of the Hells, Arched Eyebrow of the Archmage, Song of Sauce, We're All Made of Starfish"]);

  _templateObject421 = function _templateObject421() {
    return data;
  };

  return data;
}

function _templateObject420() {
  var data = _taggedTemplateLiteral(["Simmering"]);

  _templateObject420 = function _templateObject420() {
    return data;
  };

  return data;
}

function _templateObject419() {
  var data = _taggedTemplateLiteral(["blessing of the bird"]);

  _templateObject419 = function _templateObject419() {
    return data;
  };

  return data;
}

function _templateObject418() {
  var data = _taggedTemplateLiteral(["bow-legged swagger"]);

  _templateObject418 = function _templateObject418() {
    return data;
  };

  return data;
}

function _templateObject417() {
  var data = _taggedTemplateLiteral(["use the force"]);

  _templateObject417 = function _templateObject417() {
    return data;
  };

  return data;
}

function _templateObject416() {
  var data = _taggedTemplateLiteral(["meteor shower"]);

  _templateObject416 = function _templateObject416() {
    return data;
  };

  return data;
}

function _templateObject415() {
  var data = _taggedTemplateLiteral(["the neverending party"]);

  _templateObject415 = function _templateObject415() {
    return data;
  };

  return data;
}

function _templateObject414() {
  var data = _taggedTemplateLiteral(["fourth of may cosplay saber"]);

  _templateObject414 = function _templateObject414() {
    return data;
  };

  return data;
}

function _templateObject413() {
  var data = _taggedTemplateLiteral(["familiar"]);

  _templateObject413 = function _templateObject413() {
    return data;
  };

  return data;
}

function _templateObject412() {
  var data = _taggedTemplateLiteral(["none"]);

  _templateObject412 = function _templateObject412() {
    return data;
  };

  return data;
}

function _templateObject411() {
  var data = _taggedTemplateLiteral(["off-hand"]);

  _templateObject411 = function _templateObject411() {
    return data;
  };

  return data;
}

function _templateObject410() {
  var data = _taggedTemplateLiteral(["none"]);

  _templateObject410 = function _templateObject410() {
    return data;
  };

  return data;
}

function _templateObject409() {
  var data = _taggedTemplateLiteral(["weapon"]);

  _templateObject409 = function _templateObject409() {
    return data;
  };

  return data;
}

function _templateObject408() {
  var data = _taggedTemplateLiteral(["disembodied hand"]);

  _templateObject408 = function _templateObject408() {
    return data;
  };

  return data;
}

function _templateObject407() {
  var data = _taggedTemplateLiteral(["meteor showered"]);

  _templateObject407 = function _templateObject407() {
    return data;
  };

  return data;
}

function _templateObject406() {
  var data = _taggedTemplateLiteral(["corrupted marrow"]);

  _templateObject406 = function _templateObject406() {
    return data;
  };

  return data;
}

function _templateObject405() {
  var data = _taggedTemplateLiteral(["photocopied monster"]);

  _templateObject405 = function _templateObject405() {
    return data;
  };

  return data;
}

function _templateObject404() {
  var data = _taggedTemplateLiteral(["ungulith"]);

  _templateObject404 = function _templateObject404() {
    return data;
  };

  return data;
}

function _templateObject403() {
  var data = _taggedTemplateLiteral(["use the force"]);

  _templateObject403 = function _templateObject403() {
    return data;
  };

  return data;
}

function _templateObject402() {
  var data = _taggedTemplateLiteral(["spit on me"]);

  _templateObject402 = function _templateObject402() {
    return data;
  };

  return data;
}

function _templateObject401() {
  var data = _taggedTemplateLiteral(["melodramedary"]);

  _templateObject401 = function _templateObject401() {
    return data;
  };

  return data;
}

function _templateObject400() {
  var data = _taggedTemplateLiteral(["lov elixir #3"]);

  _templateObject400 = function _templateObject400() {
    return data;
  };

  return data;
}

function _templateObject399() {
  var data = _taggedTemplateLiteral(["lov elixir #3"]);

  _templateObject399 = function _templateObject399() {
    return data;
  };

  return data;
}

function _templateObject398() {
  var data = _taggedTemplateLiteral(["frenzied, bloody"]);

  _templateObject398 = function _templateObject398() {
    return data;
  };

  return data;
}

function _templateObject397() {
  var data = _taggedTemplateLiteral(["Carol of the Bulls, Song of the North, Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, Tenacity of the Snapper, Billiards Belligerence"]);

  _templateObject397 = function _templateObject397() {
    return data;
  };

  return data;
}

function _templateObject396() {
  var data = _taggedTemplateLiteral(["feel hatred"]);

  _templateObject396 = function _templateObject396() {
    return data;
  };

  return data;
}

function _templateObject395() {
  var data = _taggedTemplateLiteral(["the dire warren"]);

  _templateObject395 = function _templateObject395() {
    return data;
  };

  return data;
}

function _templateObject394() {
  var data = _taggedTemplateLiteral(["ghost of crimbo carols"]);

  _templateObject394 = function _templateObject394() {
    return data;
  };

  return data;
}

function _templateObject393() {
  var data = _taggedTemplateLiteral(["holiday yoked"]);

  _templateObject393 = function _templateObject393() {
    return data;
  };

  return data;
}

function _templateObject392() {
  var data = _taggedTemplateLiteral(["holiday yoked"]);

  _templateObject392 = function _templateObject392() {
    return data;
  };

  return data;
}

function _templateObject391() {
  var data = _taggedTemplateLiteral(["soft green echo eyedrop antidote"]);

  _templateObject391 = function _templateObject391() {
    return data;
  };

  return data;
}

function _templateObject390() {
  var data = _taggedTemplateLiteral(["holiday yoked"]);

  _templateObject390 = function _templateObject390() {
    return data;
  };

  return data;
}

function _templateObject389() {
  var data = _taggedTemplateLiteral(["do you crush what i crush"]);

  _templateObject389 = function _templateObject389() {
    return data;
  };

  return data;
}

function _templateObject388() {
  var data = _taggedTemplateLiteral(["shortly stacked"]);

  _templateObject388 = function _templateObject388() {
    return data;
  };

  return data;
}

function _templateObject387() {
  var data = _taggedTemplateLiteral(["short stack of pancakes"]);

  _templateObject387 = function _templateObject387() {
    return data;
  };

  return data;
}

function _templateObject386() {
  var data = _taggedTemplateLiteral(["shorter-order cook"]);

  _templateObject386 = function _templateObject386() {
    return data;
  };

  return data;
}

function _templateObject385() {
  var data = _taggedTemplateLiteral(["exotic parrot"]);

  _templateObject385 = function _templateObject385() {
    return data;
  };

  return data;
}

function _templateObject384() {
  var data = _taggedTemplateLiteral(["baby bugged bugbear"]);

  _templateObject384 = function _templateObject384() {
    return data;
  };

  return data;
}

function _templateObject383() {
  var data = _taggedTemplateLiteral(["familiar jacks"]);

  _templateObject383 = function _templateObject383() {
    return data;
  };

  return data;
}

function _templateObject382() {
  var data = _taggedTemplateLiteral(["familiar jacks"]);

  _templateObject382 = function _templateObject382() {
    return data;
  };

  return data;
}

function _templateObject381() {
  var data = _taggedTemplateLiteral(["exotic parrot"]);

  _templateObject381 = function _templateObject381() {
    return data;
  };

  return data;
}

function _templateObject380() {
  var data = _taggedTemplateLiteral(["cracker"]);

  _templateObject380 = function _templateObject380() {
    return data;
  };

  return data;
}

function _templateObject379() {
  var data = _taggedTemplateLiteral(["astral pet sweater"]);

  _templateObject379 = function _templateObject379() {
    return data;
  };

  return data;
}

function _templateObject378() {
  var data = _taggedTemplateLiteral(["use the force"]);

  _templateObject378 = function _templateObject378() {
    return data;
  };

  return data;
}

function _templateObject377() {
  var data = _taggedTemplateLiteral(["meteor shower"]);

  _templateObject377 = function _templateObject377() {
    return data;
  };

  return data;
}

function _templateObject376() {
  var data = _taggedTemplateLiteral(["the dire warren"]);

  _templateObject376 = function _templateObject376() {
    return data;
  };

  return data;
}

function _templateObject375() {
  var data = _taggedTemplateLiteral(["burning paper crane"]);

  _templateObject375 = function _templateObject375() {
    return data;
  };

  return data;
}

function _templateObject374() {
  var data = _taggedTemplateLiteral(["burning newspaper"]);

  _templateObject374 = function _templateObject374() {
    return data;
  };

  return data;
}

function _templateObject373() {
  var data = _taggedTemplateLiteral(["robot friends"]);

  _templateObject373 = function _templateObject373() {
    return data;
  };

  return data;
}

function _templateObject372() {
  var data = _taggedTemplateLiteral(["silver face paint"]);

  _templateObject372 = function _templateObject372() {
    return data;
  };

  return data;
}

function _templateObject371() {
  var data = _taggedTemplateLiteral(["Heart of Green"]);

  _templateObject371 = function _templateObject371() {
    return data;
  };

  return data;
}

function _templateObject370() {
  var data = _taggedTemplateLiteral(["Billiards Belligerence"]);

  _templateObject370 = function _templateObject370() {
    return data;
  };

  return data;
}

function _templateObject369() {
  var data = _taggedTemplateLiteral(["do i know you from somewhere"]);

  _templateObject369 = function _templateObject369() {
    return data;
  };

  return data;
}

function _templateObject368() {
  var data = _taggedTemplateLiteral(["puzzle champ"]);

  _templateObject368 = function _templateObject368() {
    return data;
  };

  return data;
}

function _templateObject367() {
  var data = _taggedTemplateLiteral(["Blood Bond"]);

  _templateObject367 = function _templateObject367() {
    return data;
  };

  return data;
}

function _templateObject366() {
  var data = _taggedTemplateLiteral(["Leash of Linguini"]);

  _templateObject366 = function _templateObject366() {
    return data;
  };

  return data;
}

function _templateObject365() {
  var data = _taggedTemplateLiteral(["Empathy"]);

  _templateObject365 = function _templateObject365() {
    return data;
  };

  return data;
}

function _templateObject364() {
  var data = _taggedTemplateLiteral(["shoe gum"]);

  _templateObject364 = function _templateObject364() {
    return data;
  };

  return data;
}

function _templateObject363() {
  var data = _taggedTemplateLiteral(["shoe gum"]);

  _templateObject363 = function _templateObject363() {
    return data;
  };

  return data;
}

function _templateObject362() {
  var data = _taggedTemplateLiteral(["Precinct Materiel Division"]);

  _templateObject362 = function _templateObject362() {
    return data;
  };

  return data;
}

function _templateObject361() {
  var data = _taggedTemplateLiteral(["cop dollar"]);

  _templateObject361 = function _templateObject361() {
    return data;
  };

  return data;
}

function _templateObject360() {
  var data = _taggedTemplateLiteral(["gummed shoes"]);

  _templateObject360 = function _templateObject360() {
    return data;
  };

  return data;
}

function _templateObject359() {
  var data = _taggedTemplateLiteral(["disgeist"]);

  _templateObject359 = function _templateObject359() {
    return data;
  };

  return data;
}

function _templateObject358() {
  var data = _taggedTemplateLiteral(["god lobster's ring"]);

  _templateObject358 = function _templateObject358() {
    return data;
  };

  return data;
}

function _templateObject357() {
  var data = _taggedTemplateLiteral(["familiar"]);

  _templateObject357 = function _templateObject357() {
    return data;
  };

  return data;
}

function _templateObject356() {
  var data = _taggedTemplateLiteral(["god lobster"]);

  _templateObject356 = function _templateObject356() {
    return data;
  };

  return data;
}

function _templateObject355() {
  var data = _taggedTemplateLiteral(["god lobster's ring"]);

  _templateObject355 = function _templateObject355() {
    return data;
  };

  return data;
}

function _templateObject354() {
  var data = _taggedTemplateLiteral(["silence of the god lobster"]);

  _templateObject354 = function _templateObject354() {
    return data;
  };

  return data;
}

function _templateObject353() {
  var data = _taggedTemplateLiteral(["driving stealthily"]);

  _templateObject353 = function _templateObject353() {
    return data;
  };

  return data;
}

function _templateObject352() {
  var data = _taggedTemplateLiteral(["sonata of sneakiness"]);

  _templateObject352 = function _templateObject352() {
    return data;
  };

  return data;
}

function _templateObject351() {
  var data = _taggedTemplateLiteral(["fat leon's phat loot lyric"]);

  _templateObject351 = function _templateObject351() {
    return data;
  };

  return data;
}

function _templateObject350() {
  var data = _taggedTemplateLiteral(["Blessing of the bird"]);

  _templateObject350 = function _templateObject350() {
    return data;
  };

  return data;
}

function _templateObject349() {
  var data = _taggedTemplateLiteral(["invisible avatar"]);

  _templateObject349 = function _templateObject349() {
    return data;
  };

  return data;
}

function _templateObject348() {
  var data = _taggedTemplateLiteral(["powerful glove"]);

  _templateObject348 = function _templateObject348() {
    return data;
  };

  return data;
}

function _templateObject347() {
  var data = _taggedTemplateLiteral(["acc3"]);

  _templateObject347 = function _templateObject347() {
    return data;
  };

  return data;
}

function _templateObject346() {
  var data = _taggedTemplateLiteral(["Feeling Lonely"]);

  _templateObject346 = function _templateObject346() {
    return data;
  };

  return data;
}

function _templateObject345() {
  var data = _taggedTemplateLiteral(["Billiards Belligerence"]);

  _templateObject345 = function _templateObject345() {
    return data;
  };

  return data;
}

function _templateObject344() {
  var data = _taggedTemplateLiteral(["smooth movements"]);

  _templateObject344 = function _templateObject344() {
    return data;
  };

  return data;
}

function _templateObject343() {
  var data = _taggedTemplateLiteral(["do i know you from somewhere"]);

  _templateObject343 = function _templateObject343() {
    return data;
  };

  return data;
}

function _templateObject342() {
  var data = _taggedTemplateLiteral(["Blood Bond"]);

  _templateObject342 = function _templateObject342() {
    return data;
  };

  return data;
}

function _templateObject341() {
  var data = _taggedTemplateLiteral(["Leash of Linguini"]);

  _templateObject341 = function _templateObject341() {
    return data;
  };

  return data;
}

function _templateObject340() {
  var data = _taggedTemplateLiteral(["Empathy"]);

  _templateObject340 = function _templateObject340() {
    return data;
  };

  return data;
}

function _templateObject339() {
  var data = _taggedTemplateLiteral(["puzzle champ"]);

  _templateObject339 = function _templateObject339() {
    return data;
  };

  return data;
}

function _templateObject338() {
  var data = _taggedTemplateLiteral(["amazing"]);

  _templateObject338 = function _templateObject338() {
    return data;
  };

  return data;
}

function _templateObject337() {
  var data = _taggedTemplateLiteral(["Deep Dark Visions"]);

  _templateObject337 = function _templateObject337() {
    return data;
  };

  return data;
}

function _templateObject336() {
  var data = _taggedTemplateLiteral(["Does It Have a Skull In There??"]);

  _templateObject336 = function _templateObject336() {
    return data;
  };

  return data;
}

function _templateObject335() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject335 = function _templateObject335() {
    return data;
  };

  return data;
}

function _templateObject334() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject334 = function _templateObject334() {
    return data;
  };

  return data;
}

function _templateObject333() {
  var data = _taggedTemplateLiteral(["Cannelloni Cocoon"]);

  _templateObject333 = function _templateObject333() {
    return data;
  };

  return data;
}

function _templateObject332() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject332 = function _templateObject332() {
    return data;
  };

  return data;
}

function _templateObject331() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject331 = function _templateObject331() {
    return data;
  };

  return data;
}

function _templateObject330() {
  var data = _taggedTemplateLiteral(["Visions of the Deep Dark Deeps"]);

  _templateObject330 = function _templateObject330() {
    return data;
  };

  return data;
}

function _templateObject329() {
  var data = _taggedTemplateLiteral(["Deep Dark Visions"]);

  _templateObject329 = function _templateObject329() {
    return data;
  };

  return data;
}

function _templateObject328() {
  var data = _taggedTemplateLiteral(["familiar jacks"]);

  _templateObject328 = function _templateObject328() {
    return data;
  };

  return data;
}

function _templateObject327() {
  var data = _taggedTemplateLiteral(["familiar jacks"]);

  _templateObject327 = function _templateObject327() {
    return data;
  };

  return data;
}

function _templateObject326() {
  var data = _taggedTemplateLiteral(["astral pet sweater"]);

  _templateObject326 = function _templateObject326() {
    return data;
  };

  return data;
}

function _templateObject325() {
  var data = _taggedTemplateLiteral(["exotic parrot"]);

  _templateObject325 = function _templateObject325() {
    return data;
  };

  return data;
}

function _templateObject324() {
  var data = _taggedTemplateLiteral(["meteorite guard"]);

  _templateObject324 = function _templateObject324() {
    return data;
  };

  return data;
}

function _templateObject323() {
  var data = _taggedTemplateLiteral(["metal meteoroid"]);

  _templateObject323 = function _templateObject323() {
    return data;
  };

  return data;
}

function _templateObject322() {
  var data = _taggedTemplateLiteral(["meteorite guard"]);

  _templateObject322 = function _templateObject322() {
    return data;
  };

  return data;
}

function _templateObject321() {
  var data = _taggedTemplateLiteral(["protection from bad stuff"]);

  _templateObject321 = function _templateObject321() {
    return data;
  };

  return data;
}

function _templateObject320() {
  var data = _taggedTemplateLiteral(["scroll of protection from bad stuff"]);

  _templateObject320 = function _templateObject320() {
    return data;
  };

  return data;
}

function _templateObject319() {
  var data = _taggedTemplateLiteral(["Feeling Peaceful"]);

  _templateObject319 = function _templateObject319() {
    return data;
  };

  return data;
}

function _templateObject318() {
  var data = _taggedTemplateLiteral(["Hot-Headed"]);

  _templateObject318 = function _templateObject318() {
    return data;
  };

  return data;
}

function _templateObject317() {
  var data = _taggedTemplateLiteral(["astral shell"]);

  _templateObject317 = function _templateObject317() {
    return data;
  };

  return data;
}

function _templateObject316() {
  var data = _taggedTemplateLiteral(["elemental saucesphere"]);

  _templateObject316 = function _templateObject316() {
    return data;
  };

  return data;
}

function _templateObject315() {
  var data = _taggedTemplateLiteral(["hot powder"]);

  _templateObject315 = function _templateObject315() {
    return data;
  };

  return data;
}

function _templateObject314() {
  var data = _taggedTemplateLiteral(["hot powder"]);

  _templateObject314 = function _templateObject314() {
    return data;
  };

  return data;
}

function _templateObject313() {
  var data = _taggedTemplateLiteral([" Flame-Retardant Trousers"]);

  _templateObject313 = function _templateObject313() {
    return data;
  };

  return data;
}

function _templateObject312() {
  var data = _taggedTemplateLiteral(["lotion of sleaziness"]);

  _templateObject312 = function _templateObject312() {
    return data;
  };

  return data;
}

function _templateObject311() {
  var data = _taggedTemplateLiteral(["lotion of sleaziness"]);

  _templateObject311 = function _templateObject311() {
    return data;
  };

  return data;
}

function _templateObject310() {
  var data = _taggedTemplateLiteral(["lotion of sleaziness"]);

  _templateObject310 = function _templateObject310() {
    return data;
  };

  return data;
}

function _templateObject309() {
  var data = _taggedTemplateLiteral(["lotion of sleaziness"]);

  _templateObject309 = function _templateObject309() {
    return data;
  };

  return data;
}

function _templateObject308() {
  var data = _taggedTemplateLiteral(["Sleazy Hands"]);

  _templateObject308 = function _templateObject308() {
    return data;
  };

  return data;
}

function _templateObject307() {
  var data = _taggedTemplateLiteral(["tenderizing hammer"]);

  _templateObject307 = function _templateObject307() {
    return data;
  };

  return data;
}

function _templateObject306() {
  var data = _taggedTemplateLiteral(["tenderizing hammer"]);

  _templateObject306 = function _templateObject306() {
    return data;
  };

  return data;
}

function _templateObject305() {
  var data = _taggedTemplateLiteral(["synthesis: hot"]);

  _templateObject305 = function _templateObject305() {
    return data;
  };

  return data;
}

function _templateObject304() {
  var data = _taggedTemplateLiteral(["Asdon Martin: Missile Launcher"]);

  _templateObject304 = function _templateObject304() {
    return data;
  };

  return data;
}

function _templateObject303() {
  var data = _taggedTemplateLiteral(["become a cloud of mist"]);

  _templateObject303 = function _templateObject303() {
    return data;
  };

  return data;
}

function _templateObject302() {
  var data = _taggedTemplateLiteral(["factory worker (female)"]);

  _templateObject302 = function _templateObject302() {
    return data;
  };

  return data;
}

function _templateObject301() {
  var data = _taggedTemplateLiteral(["LavaCo\u2122 Lamp Factory"]);

  _templateObject301 = function _templateObject301() {
    return data;
  };

  return data;
}

function _templateObject300() {
  var data = _taggedTemplateLiteral(["vampyric cloake"]);

  _templateObject300 = function _templateObject300() {
    return data;
  };

  return data;
}

function _templateObject299() {
  var data = _taggedTemplateLiteral(["back"]);

  _templateObject299 = function _templateObject299() {
    return data;
  };

  return data;
}

function _templateObject298() {
  var data = _taggedTemplateLiteral(["lava-proof pants"]);

  _templateObject298 = function _templateObject298() {
    return data;
  };

  return data;
}

function _templateObject297() {
  var data = _taggedTemplateLiteral(["Billiards Belligerence"]);

  _templateObject297 = function _templateObject297() {
    return data;
  };

  return data;
}

function _templateObject296() {
  var data = _taggedTemplateLiteral(["Blood Bond"]);

  _templateObject296 = function _templateObject296() {
    return data;
  };

  return data;
}

function _templateObject295() {
  var data = _taggedTemplateLiteral(["Leash of Linguini"]);

  _templateObject295 = function _templateObject295() {
    return data;
  };

  return data;
}

function _templateObject294() {
  var data = _taggedTemplateLiteral(["Empathy"]);

  _templateObject294 = function _templateObject294() {
    return data;
  };

  return data;
}

function _templateObject293() {
  var data = _taggedTemplateLiteral(["do i know you from somewhere"]);

  _templateObject293 = function _templateObject293() {
    return data;
  };

  return data;
}

function _templateObject292() {
  var data = _taggedTemplateLiteral(["puzzle champ"]);

  _templateObject292 = function _templateObject292() {
    return data;
  };

  return data;
}

function _templateObject291() {
  var data = _taggedTemplateLiteral(["nearly all-natural"]);

  _templateObject291 = function _templateObject291() {
    return data;
  };

  return data;
}

function _templateObject290() {
  var data = _taggedTemplateLiteral(["trick-or-treating tot"]);

  _templateObject290 = function _templateObject290() {
    return data;
  };

  return data;
}

function _templateObject289() {
  var data = _taggedTemplateLiteral(["heart of lavender"]);

  _templateObject289 = function _templateObject289() {
    return data;
  };

  return data;
}

function _templateObject288() {
  var data = _taggedTemplateLiteral(["lavender candy heart"]);

  _templateObject288 = function _templateObject288() {
    return data;
  };

  return data;
}

function _templateObject287() {
  var data = _taggedTemplateLiteral(["pastamancer"]);

  _templateObject287 = function _templateObject287() {
    return data;
  };

  return data;
}

function _templateObject286() {
  var data = _taggedTemplateLiteral(["government"]);

  _templateObject286 = function _templateObject286() {
    return data;
  };

  return data;
}

function _templateObject285() {
  var data = _taggedTemplateLiteral(["government"]);

  _templateObject285 = function _templateObject285() {
    return data;
  };

  return data;
}

function _templateObject284() {
  var data = _taggedTemplateLiteral(["government"]);

  _templateObject284 = function _templateObject284() {
    return data;
  };

  return data;
}

function _templateObject283() {
  var data = _taggedTemplateLiteral(["government cheese"]);

  _templateObject283 = function _templateObject283() {
    return data;
  };

  return data;
}

function _templateObject282() {
  var data = _taggedTemplateLiteral(["anticheese"]);

  _templateObject282 = function _templateObject282() {
    return data;
  };

  return data;
}

function _templateObject281() {
  var data = _taggedTemplateLiteral(["government"]);

  _templateObject281 = function _templateObject281() {
    return data;
  };

  return data;
}

function _templateObject280() {
  var data = _taggedTemplateLiteral(["I See Everything Thrice"]);

  _templateObject280 = function _templateObject280() {
    return data;
  };

  return data;
}

function _templateObject279() {
  var data = _taggedTemplateLiteral(["steely-eyed squint"]);

  _templateObject279 = function _templateObject279() {
    return data;
  };

  return data;
}

function _templateObject278() {
  var data = _taggedTemplateLiteral(["driving observantly"]);

  _templateObject278 = function _templateObject278() {
    return data;
  };

  return data;
}

function _templateObject277() {
  var data = _taggedTemplateLiteral(["Asdon Martin keyfob"]);

  _templateObject277 = function _templateObject277() {
    return data;
  };

  return data;
}

function _templateObject276() {
  var data = _taggedTemplateLiteral(["items.enh"]);

  _templateObject276 = function _templateObject276() {
    return data;
  };

  return data;
}

function _templateObject275() {
  var data = _taggedTemplateLiteral(["The Spirit of Taking"]);

  _templateObject275 = function _templateObject275() {
    return data;
  };

  return data;
}

function _templateObject274() {
  var data = _taggedTemplateLiteral(["fat leon's phat loot lyric"]);

  _templateObject274 = function _templateObject274() {
    return data;
  };

  return data;
}

function _templateObject273() {
  var data = _taggedTemplateLiteral(["dire warren"]);

  _templateObject273 = function _templateObject273() {
    return data;
  };

  return data;
}

function _templateObject272() {
  var data = _taggedTemplateLiteral(["ode to booze"]);

  _templateObject272 = function _templateObject272() {
    return data;
  };

  return data;
}

function _templateObject271() {
  var data = _taggedTemplateLiteral(["frumious bandersnatch"]);

  _templateObject271 = function _templateObject271() {
    return data;
  };

  return data;
}

function _templateObject270() {
  var data = _taggedTemplateLiteral(["throw latte"]);

  _templateObject270 = function _templateObject270() {
    return data;
  };

  return data;
}

function _templateObject269() {
  var data = _taggedTemplateLiteral(["vampyric cloake"]);

  _templateObject269 = function _templateObject269() {
    return data;
  };

  return data;
}

function _templateObject268() {
  var data = _taggedTemplateLiteral(["back"]);

  _templateObject268 = function _templateObject268() {
    return data;
  };

  return data;
}

function _templateObject267() {
  var data = _taggedTemplateLiteral(["latte lovers member's mug"]);

  _templateObject267 = function _templateObject267() {
    return data;
  };

  return data;
}

function _templateObject266() {
  var data = _taggedTemplateLiteral(["off-hand"]);

  _templateObject266 = function _templateObject266() {
    return data;
  };

  return data;
}

function _templateObject265() {
  var data = _taggedTemplateLiteral(["become a bat"]);

  _templateObject265 = function _templateObject265() {
    return data;
  };

  return data;
}

function _templateObject264() {
  var data = _taggedTemplateLiteral(["Bat-Adjacent Form"]);

  _templateObject264 = function _templateObject264() {
    return data;
  };

  return data;
}

function _templateObject263() {
  var data = _taggedTemplateLiteral(["synthesis: collection"]);

  _templateObject263 = function _templateObject263() {
    return data;
  };

  return data;
}

function _templateObject262() {
  var data = _taggedTemplateLiteral(["astral pilsner"]);

  _templateObject262 = function _templateObject262() {
    return data;
  };

  return data;
}

function _templateObject261() {
  var data = _taggedTemplateLiteral(["the ode to booze"]);

  _templateObject261 = function _templateObject261() {
    return data;
  };

  return data;
}

function _templateObject260() {
  var data = _taggedTemplateLiteral(["The Magical Mojomuscular Melody"]);

  _templateObject260 = function _templateObject260() {
    return data;
  };

  return data;
}

function _templateObject259() {
  var data = _taggedTemplateLiteral(["astral six-pack"]);

  _templateObject259 = function _templateObject259() {
    return data;
  };

  return data;
}

function _templateObject258() {
  var data = _taggedTemplateLiteral(["astral six-pack"]);

  _templateObject258 = function _templateObject258() {
    return data;
  };

  return data;
}

function _templateObject257() {
  var data = _taggedTemplateLiteral(["mysticality"]);

  _templateObject257 = function _templateObject257() {
    return data;
  };

  return data;
}

function _templateObject256() {
  var data = _taggedTemplateLiteral(["moxie"]);

  _templateObject256 = function _templateObject256() {
    return data;
  };

  return data;
}

function _templateObject255() {
  var data = _taggedTemplateLiteral(["mysticality"]);

  _templateObject255 = function _templateObject255() {
    return data;
  };

  return data;
}

function _templateObject254() {
  var data = _taggedTemplateLiteral(["moxie"]);

  _templateObject254 = function _templateObject254() {
    return data;
  };

  return data;
}

function _templateObject253() {
  var data = _taggedTemplateLiteral(["Left-Hand Man"]);

  _templateObject253 = function _templateObject253() {
    return data;
  };

  return data;
}

function _templateObject252() {
  var data = _taggedTemplateLiteral(["mysticality"]);

  _templateObject252 = function _templateObject252() {
    return data;
  };

  return data;
}

function _templateObject251() {
  var data = _taggedTemplateLiteral(["moxie"]);

  _templateObject251 = function _templateObject251() {
    return data;
  };

  return data;
}

function _templateObject250() {
  var data = _taggedTemplateLiteral(["Left-Hand Man"]);

  _templateObject250 = function _templateObject250() {
    return data;
  };

  return data;
}

function _templateObject249() {
  var data = _taggedTemplateLiteral(["runproof mascara"]);

  _templateObject249 = function _templateObject249() {
    return data;
  };

  return data;
}

function _templateObject248() {
  var data = _taggedTemplateLiteral(["Unrunnable Face"]);

  _templateObject248 = function _templateObject248() {
    return data;
  };

  return data;
}

function _templateObject247() {
  var data = _taggedTemplateLiteral(["confiscated love note"]);

  _templateObject247 = function _templateObject247() {
    return data;
  };

  return data;
}

function _templateObject246() {
  var data = _taggedTemplateLiteral(["confiscated love note"]);

  _templateObject246 = function _templateObject246() {
    return data;
  };

  return data;
}

function _templateObject245() {
  var data = _taggedTemplateLiteral(["dollop of barbecue sauce"]);

  _templateObject245 = function _templateObject245() {
    return data;
  };

  return data;
}

function _templateObject244() {
  var data = _taggedTemplateLiteral(["dollop of barbecue sauce"]);

  _templateObject244 = function _templateObject244() {
    return data;
  };

  return data;
}

function _templateObject243() {
  var data = _taggedTemplateLiteral(["rhinestone"]);

  _templateObject243 = function _templateObject243() {
    return data;
  };

  return data;
}

function _templateObject242() {
  var data = _taggedTemplateLiteral(["rhinestone"]);

  _templateObject242 = function _templateObject242() {
    return data;
  };

  return data;
}

function _templateObject241() {
  var data = _taggedTemplateLiteral(["disco state of mind"]);

  _templateObject241 = function _templateObject241() {
    return data;
  };

  return data;
}

function _templateObject240() {
  var data = _taggedTemplateLiteral(["Mariachi Mood"]);

  _templateObject240 = function _templateObject240() {
    return data;
  };

  return data;
}

function _templateObject239() {
  var data = _taggedTemplateLiteral(["Blubbered Up"]);

  _templateObject239 = function _templateObject239() {
    return data;
  };

  return data;
}

function _templateObject238() {
  var data = _taggedTemplateLiteral(["Disco Fever"]);

  _templateObject238 = function _templateObject238() {
    return data;
  };

  return data;
}

function _templateObject237() {
  var data = _taggedTemplateLiteral(["Quiet Desperation"]);

  _templateObject237 = function _templateObject237() {
    return data;
  };

  return data;
}

function _templateObject236() {
  var data = _taggedTemplateLiteral(["Blessing of the Bird"]);

  _templateObject236 = function _templateObject236() {
    return data;
  };

  return data;
}

function _templateObject235() {
  var data = _taggedTemplateLiteral(["Bird-a-Day Calendar"]);

  _templateObject235 = function _templateObject235() {
    return data;
  };

  return data;
}

function _templateObject234() {
  var data = _taggedTemplateLiteral(["Pomp & Circumsands"]);

  _templateObject234 = function _templateObject234() {
    return data;
  };

  return data;
}

function _templateObject233() {
  var data = _taggedTemplateLiteral(["Bind Penne Dreadful"]);

  _templateObject233 = function _templateObject233() {
    return data;
  };

  return data;
}

function _templateObject232() {
  var data = _taggedTemplateLiteral(["Feeling Excited"]);

  _templateObject232 = function _templateObject232() {
    return data;
  };

  return data;
}

function _templateObject231() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject231 = function _templateObject231() {
    return data;
  };

  return data;
}

function _templateObject230() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject230 = function _templateObject230() {
    return data;
  };

  return data;
}

function _templateObject229() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject229 = function _templateObject229() {
    return data;
  };

  return data;
}

function _templateObject228() {
  var data = _taggedTemplateLiteral(["magical sausage casing"]);

  _templateObject228 = function _templateObject228() {
    return data;
  };

  return data;
}

function _templateObject227() {
  var data = _taggedTemplateLiteral(["mysticality"]);

  _templateObject227 = function _templateObject227() {
    return data;
  };

  return data;
}

function _templateObject226() {
  var data = _taggedTemplateLiteral(["mysticality"]);

  _templateObject226 = function _templateObject226() {
    return data;
  };

  return data;
}

function _templateObject225() {
  var data = _taggedTemplateLiteral(["mysticality"]);

  _templateObject225 = function _templateObject225() {
    return data;
  };

  return data;
}

function _templateObject224() {
  var data = _taggedTemplateLiteral(["mysticality"]);

  _templateObject224 = function _templateObject224() {
    return data;
  };

  return data;
}

function _templateObject223() {
  var data = _taggedTemplateLiteral(["Feeling Excited"]);

  _templateObject223 = function _templateObject223() {
    return data;
  };

  return data;
}

function _templateObject222() {
  var data = _taggedTemplateLiteral(["mysticality"]);

  _templateObject222 = function _templateObject222() {
    return data;
  };

  return data;
}

function _templateObject221() {
  var data = _taggedTemplateLiteral(["muscle"]);

  _templateObject221 = function _templateObject221() {
    return data;
  };

  return data;
}

function _templateObject220() {
  var data = _taggedTemplateLiteral(["mysticality"]);

  _templateObject220 = function _templateObject220() {
    return data;
  };

  return data;
}

function _templateObject219() {
  var data = _taggedTemplateLiteral(["muscle"]);

  _templateObject219 = function _templateObject219() {
    return data;
  };

  return data;
}

function _templateObject218() {
  var data = _taggedTemplateLiteral(["disembodied hand"]);

  _templateObject218 = function _templateObject218() {
    return data;
  };

  return data;
}

function _templateObject217() {
  var data = _taggedTemplateLiteral(["mysticality"]);

  _templateObject217 = function _templateObject217() {
    return data;
  };

  return data;
}

function _templateObject216() {
  var data = _taggedTemplateLiteral(["muscle"]);

  _templateObject216 = function _templateObject216() {
    return data;
  };

  return data;
}

function _templateObject215() {
  var data = _taggedTemplateLiteral(["Ham-Fisted"]);

  _templateObject215 = function _templateObject215() {
    return data;
  };

  return data;
}

function _templateObject214() {
  var data = _taggedTemplateLiteral(["Lack of Body-Building"]);

  _templateObject214 = function _templateObject214() {
    return data;
  };

  return data;
}

function _templateObject213() {
  var data = _taggedTemplateLiteral(["disembodied hand"]);

  _templateObject213 = function _templateObject213() {
    return data;
  };

  return data;
}

function _templateObject212() {
  var data = _taggedTemplateLiteral(["ben-gal balm"]);

  _templateObject212 = function _templateObject212() {
    return data;
  };

  return data;
}

function _templateObject211() {
  var data = _taggedTemplateLiteral(["ben-gal balm"]);

  _templateObject211 = function _templateObject211() {
    return data;
  };

  return data;
}

function _templateObject210() {
  var data = _taggedTemplateLiteral(["Go Get 'Em, Tiger!"]);

  _templateObject210 = function _templateObject210() {
    return data;
  };

  return data;
}

function _templateObject209() {
  var data = _taggedTemplateLiteral(["The Power of LOV"]);

  _templateObject209 = function _templateObject209() {
    return data;
  };

  return data;
}

function _templateObject208() {
  var data = _taggedTemplateLiteral(["Feeling Excited"]);

  _templateObject208 = function _templateObject208() {
    return data;
  };

  return data;
}

function _templateObject207() {
  var data = _taggedTemplateLiteral(["Disdain of the War Snapper"]);

  _templateObject207 = function _templateObject207() {
    return data;
  };

  return data;
}

function _templateObject206() {
  var data = _taggedTemplateLiteral(["Quiet Determination"]);

  _templateObject206 = function _templateObject206() {
    return data;
  };

  return data;
}

function _templateObject205() {
  var data = _taggedTemplateLiteral(["Rage of the Reindeer"]);

  _templateObject205 = function _templateObject205() {
    return data;
  };

  return data;
}

function _templateObject204() {
  var data = _taggedTemplateLiteral(["Song of Bravado"]);

  _templateObject204 = function _templateObject204() {
    return data;
  };

  return data;
}

function _templateObject203() {
  var data = _taggedTemplateLiteral(["Big"]);

  _templateObject203 = function _templateObject203() {
    return data;
  };

  return data;
}

function _templateObject202() {
  var data = _taggedTemplateLiteral(["Bind Undead Elbow Macaroni"]);

  _templateObject202 = function _templateObject202() {
    return data;
  };

  return data;
}

function _templateObject201() {
  var data = _taggedTemplateLiteral(["muscle"]);

  _templateObject201 = function _templateObject201() {
    return data;
  };

  return data;
}

function _templateObject200() {
  var data = _taggedTemplateLiteral(["muscle"]);

  _templateObject200 = function _templateObject200() {
    return data;
  };

  return data;
}

function _templateObject199() {
  var data = _taggedTemplateLiteral(["song of starch"]);

  _templateObject199 = function _templateObject199() {
    return data;
  };

  return data;
}

function _templateObject198() {
  var data = _taggedTemplateLiteral(["Bind Undead Elbow Macaroni"]);

  _templateObject198 = function _templateObject198() {
    return data;
  };

  return data;
}

function _templateObject197() {
  var data = _taggedTemplateLiteral(["disembodied hand"]);

  _templateObject197 = function _templateObject197() {
    return data;
  };

  return data;
}

function _templateObject196() {
  var data = _taggedTemplateLiteral(["witchess king"]);

  _templateObject196 = function _templateObject196() {
    return data;
  };

  return data;
}

function _templateObject195() {
  var data = _taggedTemplateLiteral(["dented scepter"]);

  _templateObject195 = function _templateObject195() {
    return data;
  };

  return data;
}

function _templateObject194() {
  var data = _taggedTemplateLiteral(["witchess queen"]);

  _templateObject194 = function _templateObject194() {
    return data;
  };

  return data;
}

function _templateObject193() {
  var data = _taggedTemplateLiteral(["very pointy crown"]);

  _templateObject193 = function _templateObject193() {
    return data;
  };

  return data;
}

function _templateObject192() {
  var data = _taggedTemplateLiteral(["the deep machine tunnels"]);

  _templateObject192 = function _templateObject192() {
    return data;
  };

  return data;
}

function _templateObject191() {
  var data = _taggedTemplateLiteral(["machine elf"]);

  _templateObject191 = function _templateObject191() {
    return data;
  };

  return data;
}

function _templateObject190() {
  var data = _taggedTemplateLiteral(["the neverending party"]);

  _templateObject190 = function _templateObject190() {
    return data;
  };

  return data;
}

function _templateObject189() {
  var data = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]);

  _templateObject189 = function _templateObject189() {
    return data;
  };

  return data;
}

function _templateObject188() {
  var data = _taggedTemplateLiteral(["acc3"]);

  _templateObject188 = function _templateObject188() {
    return data;
  };

  return data;
}

function _templateObject187() {
  var data = _taggedTemplateLiteral(["the neverending party"]);

  _templateObject187 = function _templateObject187() {
    return data;
  };

  return data;
}

function _templateObject186() {
  var data = _taggedTemplateLiteral(["familiar scrapbook"]);

  _templateObject186 = function _templateObject186() {
    return data;
  };

  return data;
}

function _templateObject185() {
  var data = _taggedTemplateLiteral(["off-hand"]);

  _templateObject185 = function _templateObject185() {
    return data;
  };

  return data;
}

function _templateObject184() {
  var data = _taggedTemplateLiteral(["the neverending party"]);

  _templateObject184 = function _templateObject184() {
    return data;
  };

  return data;
}

function _templateObject183() {
  var data = _taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]);

  _templateObject183 = function _templateObject183() {
    return data;
  };

  return data;
}

function _templateObject182() {
  var data = _taggedTemplateLiteral(["off-hand"]);

  _templateObject182 = function _templateObject182() {
    return data;
  };

  return data;
}

function _templateObject181() {
  var data = _taggedTemplateLiteral(["makeshift garbage shirt"]);

  _templateObject181 = function _templateObject181() {
    return data;
  };

  return data;
}

function _templateObject180() {
  var data = _taggedTemplateLiteral(["shirt"]);

  _templateObject180 = function _templateObject180() {
    return data;
  };

  return data;
}

function _templateObject179() {
  var data = _taggedTemplateLiteral(["witchess bishop"]);

  _templateObject179 = function _templateObject179() {
    return data;
  };

  return data;
}

function _templateObject178() {
  var data = _taggedTemplateLiteral(["madness bakery"]);

  _templateObject178 = function _templateObject178() {
    return data;
  };

  return data;
}

function _templateObject177() {
  var data = _taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]);

  _templateObject177 = function _templateObject177() {
    return data;
  };

  return data;
}

function _templateObject176() {
  var data = _taggedTemplateLiteral(["off-hand"]);

  _templateObject176 = function _templateObject176() {
    return data;
  };

  return data;
}

function _templateObject175() {
  var data = _taggedTemplateLiteral(["brutal brogues"]);

  _templateObject175 = function _templateObject175() {
    return data;
  };

  return data;
}

function _templateObject174() {
  var data = _taggedTemplateLiteral(["acc3"]);

  _templateObject174 = function _templateObject174() {
    return data;
  };

  return data;
}

function _templateObject173() {
  var data = _taggedTemplateLiteral(["beach comb"]);

  _templateObject173 = function _templateObject173() {
    return data;
  };

  return data;
}

function _templateObject172() {
  var data = _taggedTemplateLiteral(["acc2"]);

  _templateObject172 = function _templateObject172() {
    return data;
  };

  return data;
}

function _templateObject171() {
  var data = _taggedTemplateLiteral(["hewn moon-rune spoon"]);

  _templateObject171 = function _templateObject171() {
    return data;
  };

  return data;
}

function _templateObject170() {
  var data = _taggedTemplateLiteral(["acc1"]);

  _templateObject170 = function _templateObject170() {
    return data;
  };

  return data;
}

function _templateObject169() {
  var data = _taggedTemplateLiteral(["latte lovers member's mug"]);

  _templateObject169 = function _templateObject169() {
    return data;
  };

  return data;
}

function _templateObject168() {
  var data = _taggedTemplateLiteral(["off-hand"]);

  _templateObject168 = function _templateObject168() {
    return data;
  };

  return data;
}

function _templateObject167() {
  var data = _taggedTemplateLiteral(["pocket professor"]);

  _templateObject167 = function _templateObject167() {
    return data;
  };

  return data;
}

function _templateObject166() {
  var data = _taggedTemplateLiteral(["the x-32-f combat training snowman"]);

  _templateObject166 = function _templateObject166() {
    return data;
  };

  return data;
}

function _templateObject165() {
  var data = _taggedTemplateLiteral(["god lobster's ring"]);

  _templateObject165 = function _templateObject165() {
    return data;
  };

  return data;
}

function _templateObject164() {
  var data = _taggedTemplateLiteral(["familiar"]);

  _templateObject164 = function _templateObject164() {
    return data;
  };

  return data;
}

function _templateObject163() {
  var data = _taggedTemplateLiteral(["god lobster's scepter"]);

  _templateObject163 = function _templateObject163() {
    return data;
  };

  return data;
}

function _templateObject162() {
  var data = _taggedTemplateLiteral(["familiar"]);

  _templateObject162 = function _templateObject162() {
    return data;
  };

  return data;
}

function _templateObject161() {
  var data = _taggedTemplateLiteral(["god lobster"]);

  _templateObject161 = function _templateObject161() {
    return data;
  };

  return data;
}

function _templateObject160() {
  var data = _taggedTemplateLiteral(["ointment of the occult"]);

  _templateObject160 = function _templateObject160() {
    return data;
  };

  return data;
}

function _templateObject159() {
  var data = _taggedTemplateLiteral(["ointment of the occult"]);

  _templateObject159 = function _templateObject159() {
    return data;
  };

  return data;
}

function _templateObject158() {
  var data = _taggedTemplateLiteral(["ointment of the occult"]);

  _templateObject158 = function _templateObject158() {
    return data;
  };

  return data;
}

function _templateObject157() {
  var data = _taggedTemplateLiteral(["ointment of the occult"]);

  _templateObject157 = function _templateObject157() {
    return data;
  };

  return data;
}

function _templateObject156() {
  var data = _taggedTemplateLiteral(["mystically oiled"]);

  _templateObject156 = function _templateObject156() {
    return data;
  };

  return data;
}

function _templateObject155() {
  var data = _taggedTemplateLiteral(["tomato juice of powerful power"]);

  _templateObject155 = function _templateObject155() {
    return data;
  };

  return data;
}

function _templateObject154() {
  var data = _taggedTemplateLiteral(["tomato juice of powerful power"]);

  _templateObject154 = function _templateObject154() {
    return data;
  };

  return data;
}

function _templateObject153() {
  var data = _taggedTemplateLiteral(["tomato juice of powerful power"]);

  _templateObject153 = function _templateObject153() {
    return data;
  };

  return data;
}

function _templateObject152() {
  var data = _taggedTemplateLiteral(["tomato"]);

  _templateObject152 = function _templateObject152() {
    return data;
  };

  return data;
}

function _templateObject151() {
  var data = _taggedTemplateLiteral(["tomato juice of powerful power"]);

  _templateObject151 = function _templateObject151() {
    return data;
  };

  return data;
}

function _templateObject150() {
  var data = _taggedTemplateLiteral(["tomato power"]);

  _templateObject150 = function _templateObject150() {
    return data;
  };

  return data;
}

function _templateObject149() {
  var data = _taggedTemplateLiteral(["prevent scurvy and sobriety"]);

  _templateObject149 = function _templateObject149() {
    return data;
  };

  return data;
}

function _templateObject148() {
  var data = _taggedTemplateLiteral(["Advanced Saucecrafting"]);

  _templateObject148 = function _templateObject148() {
    return data;
  };

  return data;
}

function _templateObject147() {
  var data = _taggedTemplateLiteral(["Dramatic\u2122 range"]);

  _templateObject147 = function _templateObject147() {
    return data;
  };

  return data;
}

function _templateObject146() {
  var data = _taggedTemplateLiteral(["Dramatic\u2122 range"]);

  _templateObject146 = function _templateObject146() {
    return data;
  };

  return data;
}

function _templateObject145() {
  var data = _taggedTemplateLiteral(["Dramatic\u2122 range"]);

  _templateObject145 = function _templateObject145() {
    return data;
  };

  return data;
}

function _templateObject144() {
  var data = _taggedTemplateLiteral(["gingerbread mob hit"]);

  _templateObject144 = function _templateObject144() {
    return data;
  };

  return data;
}

function _templateObject143() {
  var data = _taggedTemplateLiteral(["amateur ninja"]);

  _templateObject143 = function _templateObject143() {
    return data;
  };

  return data;
}

function _templateObject142() {
  var data = _taggedTemplateLiteral(["amateur ninja"]);

  _templateObject142 = function _templateObject142() {
    return data;
  };

  return data;
}

function _templateObject141() {
  var data = _taggedTemplateLiteral(["haiku dungeon"]);

  _templateObject141 = function _templateObject141() {
    return data;
  };

  return data;
}

function _templateObject140() {
  var data = _taggedTemplateLiteral(["li'l ninja costume"]);

  _templateObject140 = function _templateObject140() {
    return data;
  };

  return data;
}

function _templateObject139() {
  var data = _taggedTemplateLiteral(["feel nostalgic"]);

  _templateObject139 = function _templateObject139() {
    return data;
  };

  return data;
}

function _templateObject138() {
  var data = _taggedTemplateLiteral([" X-32-F Combat Training Snowman"]);

  _templateObject138 = function _templateObject138() {
    return data;
  };

  return data;
}

function _templateObject137() {
  var data = _taggedTemplateLiteral(["reflex hammer"]);

  _templateObject137 = function _templateObject137() {
    return data;
  };

  return data;
}

function _templateObject136() {
  var data = _taggedTemplateLiteral(["possessed can of tomatoes"]);

  _templateObject136 = function _templateObject136() {
    return data;
  };

  return data;
}

function _templateObject135() {
  var data = _taggedTemplateLiteral(["possessed can of tomatoes"]);

  _templateObject135 = function _templateObject135() {
    return data;
  };

  return data;
}

function _templateObject134() {
  var data = _taggedTemplateLiteral(["the haunted pantry"]);

  _templateObject134 = function _templateObject134() {
    return data;
  };

  return data;
}

function _templateObject133() {
  var data = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]);

  _templateObject133 = function _templateObject133() {
    return data;
  };

  return data;
}

function _templateObject132() {
  var data = _taggedTemplateLiteral(["acc3"]);

  _templateObject132 = function _templateObject132() {
    return data;
  };

  return data;
}

function _templateObject131() {
  var data = _taggedTemplateLiteral(["tomato power"]);

  _templateObject131 = function _templateObject131() {
    return data;
  };

  return data;
}

function _templateObject130() {
  var data = _taggedTemplateLiteral(["tomato juice of powerful power"]);

  _templateObject130 = function _templateObject130() {
    return data;
  };

  return data;
}

function _templateObject129() {
  var data = _taggedTemplateLiteral(["tomato"]);

  _templateObject129 = function _templateObject129() {
    return data;
  };

  return data;
}

function _templateObject128() {
  var data = _taggedTemplateLiteral(["lov extraterrestrial chocolate"]);

  _templateObject128 = function _templateObject128() {
    return data;
  };

  return data;
}

function _templateObject127() {
  var data = _taggedTemplateLiteral(["desert bus pass"]);

  _templateObject127 = function _templateObject127() {
    return data;
  };

  return data;
}

function _templateObject126() {
  var data = _taggedTemplateLiteral(["bitchin' meatcar"]);

  _templateObject126 = function _templateObject126() {
    return data;
  };

  return data;
}

function _templateObject125() {
  var data = _taggedTemplateLiteral(["noob cave"]);

  _templateObject125 = function _templateObject125() {
    return data;
  };

  return data;
}

function _templateObject124() {
  var data = _taggedTemplateLiteral(["latte lover member's mug"]);

  _templateObject124 = function _templateObject124() {
    return data;
  };

  return data;
}

function _templateObject123() {
  var data = _taggedTemplateLiteral(["off-hand"]);

  _templateObject123 = function _templateObject123() {
    return data;
  };

  return data;
}

function _templateObject122() {
  var data = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]);

  _templateObject122 = function _templateObject122() {
    return data;
  };

  return data;
}

function _templateObject121() {
  var data = _taggedTemplateLiteral(["acc3"]);

  _templateObject121 = function _templateObject121() {
    return data;
  };

  return data;
}

function _templateObject120() {
  var data = _taggedTemplateLiteral(["gold detective badge"]);

  _templateObject120 = function _templateObject120() {
    return data;
  };

  return data;
}

function _templateObject119() {
  var data = _taggedTemplateLiteral(["acc2"]);

  _templateObject119 = function _templateObject119() {
    return data;
  };

  return data;
}

function _templateObject118() {
  var data = _taggedTemplateLiteral(["vampyric cloake"]);

  _templateObject118 = function _templateObject118() {
    return data;
  };

  return data;
}

function _templateObject117() {
  var data = _taggedTemplateLiteral(["back"]);

  _templateObject117 = function _templateObject117() {
    return data;
  };

  return data;
}

function _templateObject116() {
  var data = _taggedTemplateLiteral(["government cheese"]);

  _templateObject116 = function _templateObject116() {
    return data;
  };

  return data;
}

function _templateObject115() {
  var data = _taggedTemplateLiteral(["government"]);

  _templateObject115 = function _templateObject115() {
    return data;
  };

  return data;
}

function _templateObject114() {
  var data = _taggedTemplateLiteral(["latte lover member's mug"]);

  _templateObject114 = function _templateObject114() {
    return data;
  };

  return data;
}

function _templateObject113() {
  var data = _taggedTemplateLiteral(["off-hand"]);

  _templateObject113 = function _templateObject113() {
    return data;
  };

  return data;
}

function _templateObject112() {
  var data = _taggedTemplateLiteral(["battle broom"]);

  _templateObject112 = function _templateObject112() {
    return data;
  };

  return data;
}

function _templateObject111() {
  var data = _taggedTemplateLiteral(["acc3"]);

  _templateObject111 = function _templateObject111() {
    return data;
  };

  return data;
}

function _templateObject110() {
  var data = _taggedTemplateLiteral(["Witchess Witch"]);

  _templateObject110 = function _templateObject110() {
    return data;
  };

  return data;
}

function _templateObject109() {
  var data = _taggedTemplateLiteral(["battle broom"]);

  _templateObject109 = function _templateObject109() {
    return data;
  };

  return data;
}

function _templateObject108() {
  var data = _taggedTemplateLiteral(["makeshift garbage shirt"]);

  _templateObject108 = function _templateObject108() {
    return data;
  };

  return data;
}

function _templateObject107() {
  var data = _taggedTemplateLiteral(["shirt"]);

  _templateObject107 = function _templateObject107() {
    return data;
  };

  return data;
}

function _templateObject106() {
  var data = _taggedTemplateLiteral(["protonic accelerator pack"]);

  _templateObject106 = function _templateObject106() {
    return data;
  };

  return data;
}

function _templateObject105() {
  var data = _taggedTemplateLiteral(["back"]);

  _templateObject105 = function _templateObject105() {
    return data;
  };

  return data;
}

function _templateObject104() {
  var data = _taggedTemplateLiteral(["holiday yoked"]);

  _templateObject104 = function _templateObject104() {
    return data;
  };

  return data;
}

function _templateObject103() {
  var data = _taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]);

  _templateObject103 = function _templateObject103() {
    return data;
  };

  return data;
}

function _templateObject102() {
  var data = _taggedTemplateLiteral(["ghost of crimbo carols"]);

  _templateObject102 = function _templateObject102() {
    return data;
  };

  return data;
}

function _templateObject101() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject101 = function _templateObject101() {
    return data;
  };

  return data;
}

function _templateObject100() {
  var data = _taggedTemplateLiteral(["psychokinetic energy"]);

  _templateObject100 = function _templateObject100() {
    return data;
  };

  return data;
}

function _templateObject99() {
  var data = _taggedTemplateLiteral(["psychokinetic energy"]);

  _templateObject99 = function _templateObject99() {
    return data;
  };

  return data;
}

function _templateObject98() {
  var data = _taggedTemplateLiteral(["The Magical Mojomuscular Melody, Stevedave's Shanty of Superiority, Fat Leon's Phat Loot Lyric, The Polka of Plenty, leash of linguini, empathy of the newt, blood bond, blood bubble, Song of Bravado, Get Big"]);

  _templateObject98 = function _templateObject98() {
    return data;
  };

  return data;
}

function _templateObject97() {
  var data = _taggedTemplateLiteral(["saucepan"]);

  _templateObject97 = function _templateObject97() {
    return data;
  };

  return data;
}

function _templateObject96() {
  var data = _taggedTemplateLiteral(["turtle totem"]);

  _templateObject96 = function _templateObject96() {
    return data;
  };

  return data;
}

function _templateObject95() {
  var data = _taggedTemplateLiteral(["Prevent Scurvy and Sobriety"]);

  _templateObject95 = function _templateObject95() {
    return data;
  };

  return data;
}

function _templateObject94() {
  var data = _taggedTemplateLiteral(["Acquire Rhinestones"]);

  _templateObject94 = function _templateObject94() {
    return data;
  };

  return data;
}

function _templateObject93() {
  var data = _taggedTemplateLiteral(["Advanced Cocktailcrafting"]);

  _templateObject93 = function _templateObject93() {
    return data;
  };

  return data;
}

function _templateObject92() {
  var data = _taggedTemplateLiteral(["Advanced Saucecrafting"]);

  _templateObject92 = function _templateObject92() {
    return data;
  };

  return data;
}

function _templateObject91() {
  var data = _taggedTemplateLiteral(["left-hand man"]);

  _templateObject91 = function _templateObject91() {
    return data;
  };

  return data;
}

function _templateObject90() {
  var data = _taggedTemplateLiteral(["Feeling Excited"]);

  _templateObject90 = function _templateObject90() {
    return data;
  };

  return data;
}

function _templateObject89() {
  var data = _taggedTemplateLiteral(["Triple-Sized"]);

  _templateObject89 = function _templateObject89() {
    return data;
  };

  return data;
}

function _templateObject88() {
  var data = _taggedTemplateLiteral(["powerful glove"]);

  _templateObject88 = function _templateObject88() {
    return data;
  };

  return data;
}

function _templateObject87() {
  var data = _taggedTemplateLiteral(["acc3"]);

  _templateObject87 = function _templateObject87() {
    return data;
  };

  return data;
}

function _templateObject86() {
  var data = _taggedTemplateLiteral(["meat.enh"]);

  _templateObject86 = function _templateObject86() {
    return data;
  };

  return data;
}

function _templateObject85() {
  var data = _taggedTemplateLiteral(["Billiards Belligerence"]);

  _templateObject85 = function _templateObject85() {
    return data;
  };

  return data;
}

function _templateObject84() {
  var data = _taggedTemplateLiteral(["Puzzle Champ"]);

  _templateObject84 = function _templateObject84() {
    return data;
  };

  return data;
}

function _templateObject83() {
  var data = _taggedTemplateLiteral(["Do I Know You From Somewhere?"]);

  _templateObject83 = function _templateObject83() {
    return data;
  };

  return data;
}

function _templateObject82() {
  var data = _taggedTemplateLiteral(["Fidoxene"]);

  _templateObject82 = function _templateObject82() {
    return data;
  };

  return data;
}

function _templateObject81() {
  var data = _taggedTemplateLiteral(["Glittering Eyelashes"]);

  _templateObject81 = function _templateObject81() {
    return data;
  };

  return data;
}

function _templateObject80() {
  var data = _taggedTemplateLiteral(["glittery mascara"]);

  _templateObject80 = function _templateObject80() {
    return data;
  };

  return data;
}

function _templateObject79() {
  var data = _taggedTemplateLiteral(["glittering eyelashes"]);

  _templateObject79 = function _templateObject79() {
    return data;
  };

  return data;
}

function _templateObject78() {
  var data = _taggedTemplateLiteral(["glittery mascara"]);

  _templateObject78 = function _templateObject78() {
    return data;
  };

  return data;
}

function _templateObject77() {
  var data = _taggedTemplateLiteral(["We're All Made of Starfish"]);

  _templateObject77 = function _templateObject77() {
    return data;
  };

  return data;
}

function _templateObject76() {
  var data = _taggedTemplateLiteral(["a ten-percent bonus"]);

  _templateObject76 = function _templateObject76() {
    return data;
  };

  return data;
}

function _templateObject75() {
  var data = _taggedTemplateLiteral(["a ten-percent bonus"]);

  _templateObject75 = function _templateObject75() {
    return data;
  };

  return data;
}

function _templateObject74() {
  var data = _taggedTemplateLiteral(["synthesis: smart"]);

  _templateObject74 = function _templateObject74() {
    return data;
  };

  return data;
}

function _templateObject73() {
  var data = _taggedTemplateLiteral(["synthesis: learning"]);

  _templateObject73 = function _templateObject73() {
    return data;
  };

  return data;
}

function _templateObject72() {
  var data = _taggedTemplateLiteral(["You Learned Something Maybe!"]);

  _templateObject72 = function _templateObject72() {
    return data;
  };

  return data;
}

function _templateObject71() {
  var data = _taggedTemplateLiteral(["Thaumodynamic"]);

  _templateObject71 = function _templateObject71() {
    return data;
  };

  return data;
}

function _templateObject70() {
  var data = _taggedTemplateLiteral(["Inscrutable Gaze"]);

  _templateObject70 = function _templateObject70() {
    return data;
  };

  return data;
}

function _templateObject69() {
  var data = _taggedTemplateLiteral(["Uncucumbered"]);

  _templateObject69 = function _templateObject69() {
    return data;
  };

  return data;
}

function _templateObject68() {
  var data = _taggedTemplateLiteral(["Love Mixology"]);

  _templateObject68 = function _templateObject68() {
    return data;
  };

  return data;
}

function _templateObject67() {
  var data = _taggedTemplateLiteral(["Tainted Love Potion"]);

  _templateObject67 = function _templateObject67() {
    return data;
  };

  return data;
}

function _templateObject66() {
  var data = _taggedTemplateLiteral(["Love Potion #0"]);

  _templateObject66 = function _templateObject66() {
    return data;
  };

  return data;
}

function _templateObject65() {
  var data = _taggedTemplateLiteral(["That's Just Cloud-Talk, Man"]);

  _templateObject65 = function _templateObject65() {
    return data;
  };

  return data;
}

function _templateObject64() {
  var data = _taggedTemplateLiteral(["Lil' Doctor\u2122 Bag"]);

  _templateObject64 = function _templateObject64() {
    return data;
  };

  return data;
}

function _templateObject63() {
  var data = _taggedTemplateLiteral(["acc3"]);

  _templateObject63 = function _templateObject63() {
    return data;
  };

  return data;
}

function _templateObject62() {
  var data = _taggedTemplateLiteral(["powerful glove"]);

  _templateObject62 = function _templateObject62() {
    return data;
  };

  return data;
}

function _templateObject61() {
  var data = _taggedTemplateLiteral(["acc2"]);

  _templateObject61 = function _templateObject61() {
    return data;
  };

  return data;
}

function _templateObject60() {
  var data = _taggedTemplateLiteral(["eight days a week pill keeper"]);

  _templateObject60 = function _templateObject60() {
    return data;
  };

  return data;
}

function _templateObject59() {
  var data = _taggedTemplateLiteral(["acc1"]);

  _templateObject59 = function _templateObject59() {
    return data;
  };

  return data;
}

function _templateObject58() {
  var data = _taggedTemplateLiteral(["cargo cultist shorts"]);

  _templateObject58 = function _templateObject58() {
    return data;
  };

  return data;
}

function _templateObject57() {
  var data = _taggedTemplateLiteral(["pants"]);

  _templateObject57 = function _templateObject57() {
    return data;
  };

  return data;
}

function _templateObject56() {
  var data = _taggedTemplateLiteral(["latte lover member's mug"]);

  _templateObject56 = function _templateObject56() {
    return data;
  };

  return data;
}

function _templateObject55() {
  var data = _taggedTemplateLiteral(["off-hand"]);

  _templateObject55 = function _templateObject55() {
    return data;
  };

  return data;
}

function _templateObject54() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject54 = function _templateObject54() {
    return data;
  };

  return data;
}

function _templateObject53() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject53 = function _templateObject53() {
    return data;
  };

  return data;
}

function _templateObject52() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject52 = function _templateObject52() {
    return data;
  };

  return data;
}

function _templateObject51() {
  var data = _taggedTemplateLiteral(["magical sausage casing"]);

  _templateObject51 = function _templateObject51() {
    return data;
  };

  return data;
}

function _templateObject50() {
  var data = _taggedTemplateLiteral(["noob cave"]);

  _templateObject50 = function _templateObject50() {
    return data;
  };

  return data;
}

function _templateObject49() {
  var data = _taggedTemplateLiteral(["protonic accelerator pack"]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = _taggedTemplateLiteral(["back"]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = _taggedTemplateLiteral(["pantogram pants"]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = _taggedTemplateLiteral(["Ancestral Recall"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral(["1952 Mickey Mantle card"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral(["summon sugar sheets"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["familiar jacks"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["familiar jacks"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["familiar jacks"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["melodramedary"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["dromedary drinking helmet"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["borrowed time"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["borrowed time"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["borrowed time"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["dungeoneering kit"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["dungeoneering kit"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["scroll of Puddingskin"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["GameInformPowerDailyPro magazine"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["gold detective badge"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["your cowboy boots"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["tobiko marble soda"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["Game Shoppe Snacks"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["Summon Alice's Army Cards"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["stick-on eyebrow piercing"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["personalized coffee mug"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["personal massager"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["Loudmouth Larry Lamprey"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["foam dart"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["flavored foot massage oil"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["cheap studded belt"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["blue plasma ball"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["black-and-blue light"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["Summon Tasteful Items"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["LCD Game: Garbage River"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["LCD Game: Food Eater"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["LCD Game: Burger Belt"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\"KICK ME\" sign"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["glow-in-the-dark necklace"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["Summon Confiscated Things"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["toy accordion"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["toy accordion"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["hamethyst"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["porquoise"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["baconstone"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["pork elf goodies sack"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["letter from King Ralph XI"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["gremlin juice"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["portscan"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["extract"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("council.php");
(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("ccs twiddle");
var defaultKill = libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).attack().repeat();
var tests = [];
var startTime = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.gametimeToInt)();

try {
  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.COIL_WIRE)) {
    libram__WEBPACK_IMPORTED_MODULE_2__.SourceTerminal.educate([(0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject2())]);
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setClan)("Alliance From Heck");

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLevel)() === 1 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mySpleenUse)() === 0) {
      while ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_universeCalculated") < (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("skillLevel144")) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("numberology 69");
      }
    } // Chateau juice bar


    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=chateau&action=chateau_desk2");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject3())); // Sell pork gems + tent

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("tutorial.php?action=toot");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.tryUse)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject4()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.tryUse)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject5()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject6()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject7()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject8()));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject9()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject10()));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_grimoireConfiscatorSummons") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject11()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject12()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject13()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject14()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject15()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject16()));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("grimoire2Summons") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject17()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject18()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject19()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject20()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject21()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject22()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject23()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject24()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject25()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject26()));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("grimoire3Summons") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject27()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$coinmaster)(_templateObject28()), 1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject29()));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject30()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=town_right&action=townright_ltt");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(5);
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject31()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_precinct");
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject32()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("inv_use.php?whichitem=6174&confirm=Yep.");
    }

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eudora)() === "Gameinform") {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject33())) && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject34()))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("adventure.php?snarfblat=319");
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject35()));
      }
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_floundryItemCreated")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("acquire codpiece");
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_borrowedTimeUsed")) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject36()))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject37()));
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject38()));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_saberMod") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("main.php?action=may4");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(4);
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject39()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject40()));

      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject41()))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject42()));
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject43()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("mummery myst");
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("tomeSummons") < 3) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject44()));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_voteToday")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=2&local%5B%5D=3");
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_deckCardsDrawn") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("cheat ancestral; cheat island; cheat 1952");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject45()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(2, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject46()));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_daycareGymScavenges") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(3);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(2);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(5);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(4);
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject47()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("pantogram mysticality|hot|drops of blood|some self-respect|your dreams|silent");
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject48()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject49()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("boomBoxSong") !== "Total Eclipse of Your Meat") {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("boombox meat");
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.fightSausageIfAble)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject50()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.attack().repeat());

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject51()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject52()));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject53()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject54()));
    }

    var ghostLocation = (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("ghostLocation");

    if (ghostLocation) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject55()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject56()));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacro)(ghostLocation, libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).skill("shoot ghost").skill("shoot ghost").skill("shoot ghost").skill("trap ghost"));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject57()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject58()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject59()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject60()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject61()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject62()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject63()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject64()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("/cast * candy heart");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.doTest)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.COIL_WIRE);
    tests.push({
      testName: "wire-coiling",
      turnPrediction: 60,
      turnCost: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)()
    });
  }

  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.HP)) {
    var startTurns = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)();

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject65()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
    }

    var lovePotion = (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject66());
    var loveEffect = (0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject67());

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)(loveEffect)) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)(lovePotion)) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject68()));
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("desc_effect.php?whicheffect=".concat(loveEffect.descid));

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(loveEffect, "mysticality") > 10 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(loveEffect, "muscle") > -30 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(loveEffect, "moxie") > -30 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(loveEffect, "maximum hp percent") > -0.001) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, lovePotion);
      }
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject69()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject70()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject71()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject72()));
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject73()))) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.synthExp)();
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject74()))) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.synthMyst)();

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject75()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject76()));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_daycareGymScavenges") == 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(3);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(2);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(5);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(4);
    } // Configure briefcase


    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("briefcase enchantment weapon hot -combat");
    /* while (getPropertyInt('_kgbClicksUsed') < 20) {
    cliExecute('briefcase buff random');
    } */
    // Depends on Ez's Bastille script.

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("bastille myst brutalist");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.horse)("crazy"); //ensureEffect($effect`Favored by Lyle`);
    //ensureEffect($effect`Starry-Eyed`);

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject77())); // Beach Comb - should bridge all the way to spell dmg.

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject78())) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject79())) === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject80()));
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject81())); // Plan is for these buffs to fall all the way through to item -> hot res -> fam weight.

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject82()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject83()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject84()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject85()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject86()));
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_clanFortuneBuffUsed")) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("fortune buff familiar");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject87()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject88()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject89()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject90()));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_streamsCrossed")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("crossstreams");
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject91()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("mp", false);

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_sausagesEaten") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("eat 1 magic sausage");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject92()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject93()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject94()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject95()));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject96()))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("acquire turtle totem");
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject97()))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("acquire saucepan");
    var castableBuffs = (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skills)(_templateObject98());
    castableBuffs.forEach(function (buff) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toEffect)(buff))) {
        if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() < (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mpCost)(buff)) {
          if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.totalFreeRests)() > (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("timesRested")) {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=chateau&action=chateau_restbox");
          } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject99())) >= 1) {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(2, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject100()));
          } else {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject101()));
          }
        }

        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, buff);
      }
    });
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject102()));

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("snojoSetting") === "NONE") {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(2);
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject103()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).attack().repeat(), function () {
      return !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject104()));
    });
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject105()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject106()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("fold makeshift garbage shirt");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject107()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject108()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
    libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill("curse of weaksauce").skill("micrometeor").attack().repeat().setAutoAttack();

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject109()))) {
      libram__WEBPACK_IMPORTED_MODULE_2__.Witchess.fightPiece((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject110()));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject111()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject112()));

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("questM25Armorer") === "unstarted") {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("shop.php?whichshop=armory&action=talk");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(1);
    }

    var _ghostLocation = (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("ghostLocation");

    if (_ghostLocation) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject113()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject114()));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacro)(_ghostLocation, libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).skill("portscan").skill("shoot ghost").skill("shoot ghost").skill("shoot ghost").skill("trap ghost"));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject115())) && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject116()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject117()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject118()));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject119()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject120()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject121()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject122()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject123()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject124()));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject125()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).skill("otoscope").skill("become a bat").skill("chest x-ray"), //1
      function () {
        return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getCounters)("Portscan", 0, 0) !== "";
      });
      var desertAccessItem = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.knollAvailable)() ? (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject126()) : (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject127());

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(desertAccessItem) == 0) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("acquire ".concat(desertAccessItem.name));
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse");
    }

    libram__WEBPACK_IMPORTED_MODULE_2__.Macro.if_("monstername LOV enforcer", libram__WEBPACK_IMPORTED_MODULE_2__.Macro.attack().repeat()).if_("monstername LOV Engineer", libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.candyblast).skill("weapon of the pastalord").repeat()).if_("monstername LOV equivocator", libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.candyblast).attack().repeat()).setAutoAttack();

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_loveTunnelUsed")) {
      libram__WEBPACK_IMPORTED_MODULE_2__.TunnelOfLove.fightAll("LOV Epaulettes", "Open Heart Surgery", "LOV Extraterrestrial Chocolate");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject128()));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("/cast * candy heart");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("backupcamera ml");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_monstersMapped") < 3 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject129())) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject130())) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject131())) === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject132()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject133()));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.mapMacro)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject134()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject135()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.if_("monsterid ".concat((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject136()).id), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject137()))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject138()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject139())).step(defaultKill));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_monstersMapped") < 3 && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject140()))) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.mapMacro)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject141()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject142()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.if_("monsterid ".concat((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject143()).id), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject144()))).step("abort"));
    }

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getCampground)()["Dramatic™ range"] !== 1) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject145()))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject146()));
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject147()));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject148()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject149()));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject150()))) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject151())) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject152()))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject153()));
      }

      if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject154()))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject155()));
      }
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject156()))) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject157()))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject158()));
      }

      if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject159()))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject160()));
      }
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_godLobsterFights") === 0) {
      libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).attack().repeat().setAutoAttack();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject161()));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(1310, 1);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("main.php?fightgodlobster=1");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)(libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).attack().repeat().toString());
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.multiFightAutoAttack)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(-1);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject162()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject163()));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("main.php?fightgodlobster=1");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.multiFightAutoAttack)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(-1);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject164()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject165()));
    } //do snojo here


    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject166()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).attack().repeat(), function () {
      return (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_snojoFreeFights") < 10;
    }, function () {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
    });
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("hottub");
    /*
    if (get("_backUpUses") < 11) {
        equip($slot`acc3`, $item`backup camera`);
        equip($slot`off-hand`, $item`latte lovers member's mug`);
        heal();
        if (
            !get("lastCopyableMonster")?.attributes.includes("FREE") &&
            get("_witchessFights") < 3
        ) {
            defaultKill.setAutoAttack();
            Witchess.fightPiece($monster`witchess bishop`);
        }
        if (get("lastCopyableMonster")?.attributes.includes("FREE")) {
            advMacroAA(
                $location`the dire warren`,
                Macro.skill("back-up to your last enemy")
                    .step(delevel)
                    .step(easyFight)
                    .attack()
                    .repeat(),
                () => {
                    return get("_backUpUses") < 11;
                },
                () => {
                    heal();
                    useDefaultFamiliar();
                    if (
                        get("latteUnlocks").includes("carrot") &&
                        haveEquipped($item`latte lovers member's mug`)
                    ) {
                        equip($slot`off-hand`, $item`familiar scrapbook`);
                    }
                }
            );
        }
    }*/

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_pocketProfessorLectures") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject167()));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject168()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject169()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject170()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject171()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject172()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject173()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject174()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject175()));
      var profchain = libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).trySkill("Lecture on Relativity").step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.candyblast).attack().repeat();
      profchain.setAutoAttack();

      if ((0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.kramcoCheck)()) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject176()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject177()));

        do {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject178()), -1, profchain.toString());
        } while ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("lastEncounter") === "Our Bakery in the Middle of Our Street");

        while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inMultiFight)()) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)(profchain.toString());
        }
      } else if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_witchessFights") < 3) {
        libram__WEBPACK_IMPORTED_MODULE_2__.Witchess.fightPiece((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject179()));
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)();

        while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inMultiFight)()) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)();
        }
      }
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(1322, 2);
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(1324, 5);
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject180()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject181()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject182()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject183()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject184()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).trySkill("feel pride").step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).attack().repeat(), function () {
      return (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_neverendingPartyFreeTurns") < 10;
    }, function () {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();

      if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_sausageFights") > 2) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject185()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject186()));
      }
    });
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject187()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.if_("!monstername sausage goblin", libram__WEBPACK_IMPORTED_MODULE_2__.Macro.trySkill("shattering punch").trySkill("gingerbread mob hit").trySkill("chest x-ray")).if_("monstername sausage goblin", libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.candyblast).attack().repeat()), function () {
      return (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_shatteringPunchUsed") < 3 && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_gingerbreadMobHitUsed");
    }, function () {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
    });
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject188()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject189()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject190()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.if_("!monstername sausage goblin", libram__WEBPACK_IMPORTED_MODULE_2__.Macro.trySkill("shattering punch").trySkill("gingerbread mob hit").trySkill("chest x-ray")).if_("monstername sausage goblin", libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.candyblast).attack().repeat()), function () {
      return (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_chestXRayUsed") < 3;
    }, function () {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
    });
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject191()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject192()), defaultKill, function () {
      return (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_machineTunnelsAdv") < 5;
    }, _phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal);

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject193()))) {
      libram__WEBPACK_IMPORTED_MODULE_2__.Macro.tryItem("jam band flyer").tryItem("gas can").item("time-spinner").attack().repeat().setAutoAttack();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      libram__WEBPACK_IMPORTED_MODULE_2__.Witchess.fightPiece((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject194()));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject195()))) {
      libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).attack().repeat().setAutoAttack();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      libram__WEBPACK_IMPORTED_MODULE_2__.Witchess.fightPiece((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject196()));
    }

    while ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("timesRested") < (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.totalFreeRests)()) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("/cast * candy heart");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=chateau&action=chateau_restbox");
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject197()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject198()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject199()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("hp", false);

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMaxhp)() - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject200())) - 3 < 1770) {
      throw "Failed to cap HP";
    }

    var prediction = 60 - Math.floor(((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMaxhp)() - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject201())) - 3) / 30);
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.doTest)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.HP);
    tests.push({
      testName: "HP",
      turnPrediction: prediction,
      turnCost: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() - startTurns
    });
  }

  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.MUS)) {
    var _startTurns = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)();

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject202()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject203()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject204()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject205()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject206()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject207()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject208()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject209()));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject210()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.retrieveItem)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject211()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject212()));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject213()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("muscle", false);

    for (var _i = 0, _arr = [function () {
      return (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject214()));
    }, // will stay on all the way to weapon damage.
    function () {
      return (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject215()));
    }, function () {
      return (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureInnerElf)();
    }]; _i < _arr.length; _i++) {
      var increaser = _arr[_i];
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject216())) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject217())) < 1770) increaser();
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject218()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("muscle", false);

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject219())) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject220())) < 1770) {
      throw "Not enough muscle to cap.";
    }

    var _prediction = 60 - Math.floor(1 / 30 * ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject221())) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject222()))));

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.doTest)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.MUS);
    tests.push({
      testName: "muscle",
      turnPrediction: _prediction,
      turnCost: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() - _startTurns
    });
  }

  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.MYS)) {
    var _startTurns2 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)();

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject223()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("mysticality", false);

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject224())) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject225())) < 1770) {
      throw "Not enough mysticality to cap.";
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.doTest)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.MYS);
    tests.push({
      testName: "mysticality",
      turnPrediction: 60 - Math.floor(1 / 30 * ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject226())) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject227())))),
      turnCost: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() - _startTurns2
    });
  }

  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.MOX)) {
    var _startTurns3 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)();

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject228()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject229()));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject230()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject231()));
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject232()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject233()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject234()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject235()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject236()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject237()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject238()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject239()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject240()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject241()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject242())), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject243()));

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject244())) > 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject245()));
    }

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject246())) > 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject247()));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject248()))) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.tryUse)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject249()));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject250()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("moxie", false);

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject251())) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject252())) < 1770) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureInnerElf)();
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject253()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("moxie", false);

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject254())) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject255())) < 1770) {
      throw "Not enough moxie to cap.";
    }

    var _prediction2 = 60 - Math.floor(1 / 30 * ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject256())) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject257()))));

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.doTest)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.MOX);
    tests.push({
      testName: "moxie",
      turnPrediction: _prediction2,
      turnCost: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() - _startTurns3
    });
  }

  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.ITEM)) {
    var _startTurns4 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)();

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.horse)("dark");
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject258())) !== 0) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject259()));
    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject260()))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("shrug The Magical Mojomuscular Melody");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject261()));

    while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myInebriety)() < 5) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.drink)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject262()));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject263()))) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.synthItem)();

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject264()))) {
      var run = libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject265()));

      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_latteBanishUsed")) {
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)(false);
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject266()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject267()));
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject268()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject269()));
        run.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject270()));
      } else {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject271()));
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject272()));
        run.step("runaway");
      }

      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject273()), run);
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("shrug ode");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject274()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject275()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject276()));

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getWorkshed)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject277()) && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject278()))) {
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getFuel)() < 37) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.fuelUp)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("asdonmartin drive observantly");
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_steelyEyedSquintUsed")) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject279()));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject280()))) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject281()))) {
        if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject282()))) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse");
        }

        if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject283()))) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject284()));
        }
      }

      if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject285()))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject286()));
      }
    }

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$class)(_templateObject287()) && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_barrelPrayer")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("barrelprayer buff");
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject288()))) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject289()));

    var itemCheck = function itemCheck() {
      return 60 - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("item drop") / 30 + 0.001) - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("booze drop") / 15 + 0.001) <= 1;
    };

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_latteRefillsUsed") === 0) {
      var latte = "pumpkin " + ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("latteUnlocks").includes("carrot") ? "carrot " : "vanilla ") + ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon");

      if (latte !== "") {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("latte refill ".concat(latte));
      }
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject290()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("item, 2 booze drop, -equip broken champagne bottle, -equip surprisingly capacious handbag", false);

    if (!itemCheck()) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject291()));
    }

    if (!itemCheck()) throw "Failed to cap item!";

    var _prediction3 = 60 - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("item drop") / 30 + 0.001) - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("booze drop") / 15 + 0.001);

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.doTest)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.ITEM);
    tests.push({
      testName: "item drop",
      turnPrediction: _prediction3,
      turnCost: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() - _startTurns4
    });
  }

  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.HOT_RES)) {
    var _startTurns5 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)();

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_freePillKeeperUsed")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("pillkeeper familiar");
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject292()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("witchess");
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject293()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject294()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject295()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject296()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject297()));
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_clanFortuneBuffUsed")) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("fortune buff familiar");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)(false);

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_monstersMapped") < 3 && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject298()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject299()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject300()));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)(false);

      while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getFuel)() < 137) {
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.fuelUp)();
      }

      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.mapMacro)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject301()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject302()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject303())).skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject304())));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject305()))) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.synthHot)();

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject306()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject307()));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("smash * ratty knitted cap");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("smash * red-hot sausage fork");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("smash * smoldering bagel punch");

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject308()))) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject309()))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject310()));
      if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject311()))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject312()));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject313())) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject314()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject315()));
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject316()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject317()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject318()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject319()));

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject320()))) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject321()));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject322())) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject323()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject324()));
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.horse)("pale");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject325()));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject326())) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("tomeSummons") < 3) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject327()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject328()));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("spooky res", false);

    while ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject329())) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject330())) < 30) {
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() < 20) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject331()));
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject332()));
      }

      while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myHp)() < (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMaxhp)()) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject333()));
      }

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() < 100) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject334()));
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject335()));
      }

      if (Math.round((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("spooky resistance")) < 10) {
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject336()));

        if (Math.round((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("spooky resistance")) < 10) {
          throw "Not enough spooky res for Deep Dark Visions.";
        }
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject337()));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("hot res", false);

    if (Math.round((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("hot resistance")) < 59) {
      while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getFuel)() < 37) {
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.fuelUp)();
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("asdonmartin drive safely");
    }

    if (Math.round((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("hot resistance")) < 59) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject338()));
    }

    if (Math.round((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("hot resistance")) < 59) {
      throw "Failed to cap hot res";
    }

    var _prediction4 = 60 - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("hot resistance");

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.doTest)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.HOT_RES);
    tests.push({
      testName: "hot resistance",
      turnPrediction: _prediction4,
      turnCost: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() - _startTurns5
    });
  }

  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.NONCOMBAT)) {
    var _startTurns6 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)();

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_freePillKeeperUsed")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("pillkeeper familiar");
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject339()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("witchess");
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject340()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject341()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject342()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject343()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject344()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject345()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject346()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject347()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject348()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject349()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject350()));
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_clanFortuneBuffUsed")) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("fortune buff familiar");
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject351()))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("shrug fat leon's phat loot lyric");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject352()));
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_olympicSwimmingPool")) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("swim sprints");

    while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getFuel)() < 37) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.fuelUp)();
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject353()))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("asdonmartin drive stealthily");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.horse)("dark");

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject354())) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_godLobsterFights") < 3 && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject355()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject356()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject357()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject358()));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      defaultKill.setAutoAttack();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(1310, 2);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("main.php?fightgodlobster=1");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)(defaultKill.toString());
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("choice.php");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(-1);
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject359()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("-combat, +equip kremlin", false);

    if (Math.round((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("combat rate")) > -40) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject360()))) {
        if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject361())) < 10) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("detective solver.ash");
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$coinmaster)(_templateObject362()), 1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject363()));
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject364()));
      }
    }

    if (Math.round((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("combat rate")) > -40) throw "Failed to cap noncombat";

    var _prediction5 = 60 + (20 + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("combat rate")) * 3;

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.doTest)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.NONCOMBAT);
    tests.push({
      testName: "noncombat",
      turnPrediction: _prediction5,
      turnCost: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() - _startTurns6
    });
  }

  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.FAMILIAR)) {
    var _startTurns7 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)();

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject365()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject366()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject367()));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_freePillKeeperUsed")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("pillkeeper familiar");
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject368()))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("witchess");
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject369()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject370()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject371()));
    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject372()))) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject373()));
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_clanFortuneBuffUsed")) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("fortune buff familiar");
    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject374()))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject375()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)(false);
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.horse)("dark");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(1387, 3);

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_meteorShowerUses") < 5) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject376()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject377())).skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject378())), 1, function () {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("choice.php");
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(3);
      });
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject379()))) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject380()))) {
        if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("tomeSummons") < 3) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject381()));
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject382()));
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject383()));
        } else {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject384()));
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("arena.php");
        }
      } else (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject385()));
    } else (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject386()));

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject387()))) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject388()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("familiar weight", false);

    var _prediction6 = 60 - Math.floor(((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.familiarWeight)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)()) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.weightAdjustment)()) / 5);

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.doTest)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.FAMILIAR);
    tests.push({
      testName: "familiar weight",
      turnPrediction: _prediction6,
      turnCost: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() - _startTurns7
    });
  }

  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.WEAPON)) {
    var _startTurns8 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)();

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureInnerElf)();

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject389()))) {
      if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject390())) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject391()))) {
        (0,libram__WEBPACK_IMPORTED_MODULE_2__.uneffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject392()));
      }

      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject393()))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject394()));
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();

        if ((0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.horsery)().includes("pale")) {
          (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.horse)("dark");
        }

        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject395()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject396())));
      }
    }

    (0,libram__WEBPACK_IMPORTED_MODULE_2__.$effects)(_templateObject397()).forEach(function (effect) {
      return (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)(effect);
    });
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject398()));
    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject399()))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject400()));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_photocopyUsed")) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject401()));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(1387, 3);
      libram__WEBPACK_IMPORTED_MODULE_2__.Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject402())).skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject403())).setAutoAttack();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.fax)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject404()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject405()));
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.handlingChoice)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(-1);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject406()));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject407())) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_meteorShowerUses") < 5) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject408()));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject409()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject410()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject411()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject412()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject413()), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject414()));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(1387, 3);
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject415()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject416())).skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject417())));
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.handlingChoice)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(-1);
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject418()));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject419()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("weapon damage", false);

    if (60 - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("weapon damage") / 25 + 0.001) - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("weapon damage percent") / 25 + 0.001) > 1) {
      throw "Failed to cap weapon damage";
    }

    var _prediction7 = 60 - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("weapon damage") / 25 + 0.001) - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("weapon damage percent") / 25 + 0.001);

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.doTest)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.WEAPON);
    tests.push({
      testName: "weapon damage",
      turnPrediction: _prediction7,
      turnCost: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() - _startTurns8
    });
  }

  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.SPELL)) {
    var _startTurns9 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)();

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject420()));
    (0,libram__WEBPACK_IMPORTED_MODULE_2__.$effects)(_templateObject421()).forEach(function (effect) {
      return (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)(effect);
    });

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_cargoPocketEmptied")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("cargo 177");
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject422()));
    }

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject423())) > 0) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject424()));
    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("tomeSummons") < 3) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject425()));
    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject426()))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject427()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("shop.php?whichshop=lathe");

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject428())) > 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject429()));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("briefcase enchantment spell");

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_madTeaParty")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_viplounge.php?action=lookingglass&whichfloor=2");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("acquire mariachi hat");
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject430()));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject431()));

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject432())) > 0) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject433()));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject434())) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$class)(_templateObject435()) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLevel)() >= 15) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject436()));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.horse)("dark");
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(768, 4);
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject437()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject438())), function () {
        return (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("miniAdvClass") === 0;
      });
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureInnerElf)();

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject439()))) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject440()));

      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_photocopyUsed")) {
        libram__WEBPACK_IMPORTED_MODULE_2__.Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject441())).trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject442())).skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject443())).setAutoAttack();
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.fax)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject444()));
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject445()));
        if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.handlingChoice)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(-1);
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject446()));
      } else {
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject447()), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject448())).trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject449())).skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject450())));
        if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.handlingChoice)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(-1);
      }
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(3, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject451()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject452()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("spell damage", false);
    var handTurns = 60 - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("spell damage") / 50 + 0.001) - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("spell damage percent") / 50 + 0.001);
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject453()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("spell damage", false);
    var manTurns = 60 - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("spell damage") / 50 + 0.001) - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("spell damage percent") / 50 + 0.001);
    var spellFamiliar = handTurns > manTurns ? (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject454()) : (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject455());
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)(spellFamiliar);
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("spell damage", false);

    var _prediction8 = 61 - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("spell damage") / 50 + 0.001) - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("spell damage percent") / 50 + 0.001);

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.doTest)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.SPELL);
    tests.push({
      testName: "spell damage",
      turnPrediction: _prediction8,
      turnCost: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() - _startTurns9
    });
  }
} finally {
  tests.forEach(function (testDuration) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("We expected the ".concat(testDuration.testName, " test to take ").concat(testDuration.turnPrediction, " turns, and it cost ").concat(testDuration.turnCost, " turns."), "blue");
  });
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("This loop took ".concat((0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.convertMilliseconds)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.gametimeToInt)() - startTime), ", assuming it ran contiguously. Otherwise, this run of the program lasted that much time. Hope whatever number you see is good!"), "red");
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setAutoAttack)(0);
}

/***/ }),

/***/ "kolmafia":
/*!***************************!*\
  !*** external "kolmafia" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("kolmafia");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/phredhccs.ts");
/******/ })()

));