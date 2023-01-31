"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = function(fn, res) {
  return function() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
};
var __commonJS = function(cb, mod) {
  return function() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
};
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = function(to, from, except, desc) {
  if (from && typeof from == "object" || typeof from == "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
      key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
        return from[k];
      }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = function(mod, isNodeMode, target) {
  return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
    mod
  );
};

// kolmafia-polyfill.js
var kolmafia, console, init_kolmafia_polyfill = __esm({
  "kolmafia-polyfill.js": function() {
    "use strict";
    kolmafia = require("kolmafia"), console = {
      log: kolmafia.print
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/global.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var check = function(it) {
      return it && it.Math == Math && it;
    };
    module2.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/libram/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/fails.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return !0;
      }
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/descriptors.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, {
        get: function() {
          return 7;
        }
      })[1] != 7;
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/function-bind-native.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/function-call.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var NATIVE_BIND = require_function_bind_native(), call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-property-is-enumerable.js": function(exports) {
    "use strict";
    init_kolmafia_polyfill();
    var $propertyIsEnumerable = {}.propertyIsEnumerable, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
      1: 2
    }, 1);
    exports.f = NASHORN_BUG ? function(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/libram/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/create-property-descriptor.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/function-uncurry-this.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var NATIVE_BIND = require_function_bind_native(), FunctionPrototype = Function.prototype, bind = FunctionPrototype.bind, call = FunctionPrototype.call, uncurryThis = NATIVE_BIND && bind.bind(call, call);
    module2.exports = NATIVE_BIND ? function(fn) {
      return fn && uncurryThis(fn);
    } : function(fn) {
      return fn && function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/classof-raw.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), toString = uncurryThis({}.toString), stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/indexed-object.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), fails = require_fails(), classof = require_classof_raw(), $Object = Object, split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) == "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/libram/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/require-object-coercible.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (it == null)
        throw $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-indexed-object.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var IndexedObject = require_indexed_object(), requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-callable.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-object.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/get-built-in.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), isCallable = require_is_callable(), aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-is-prototype-of.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/libram/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/engine-user-agent.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("navigator", "userAgent") || "";
  }
});

// node_modules/libram/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/engine-v8-version.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), userAgent = require_engine_user_agent(), process = global2.process, Deno = global2.Deno, versions = process && process.versions || Deno && Deno.version, v8 = versions && versions.v8, match, version;
    v8 && (match = v8.split("."), version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]));
    !version && userAgent && (match = userAgent.match(/Edge\/(\d+)/), (!match || match[1] >= 74) && (match = userAgent.match(/Chrome\/(\d+)/), match && (version = +match[1])));
    module2.exports = version;
  }
});

// node_modules/libram/node_modules/core-js/internals/native-symbol.js
var require_native_symbol = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/native-symbol.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var V8_VERSION = require_engine_v8_version(), fails = require_fails();
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol();
      return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/use-symbol-as-uid.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var NATIVE_SYMBOL = require_native_symbol();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/libram/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-symbol.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in(), isCallable = require_is_callable(), isPrototypeOf = require_object_is_prototype_of(), USE_SYMBOL_AS_UID = require_use_symbol_as_uid(), $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/try-to-string.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/a-callable.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isCallable = require_is_callable(), tryToString = require_try_to_string(), $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/get-method.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var aCallable = require_a_callable();
    module2.exports = function(V, P) {
      var func = V[P];
      return func == null ? void 0 : aCallable(func);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/ordinary-to-primitive.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var call = require_function_call(), isCallable = require_is_callable(), isObject = require_is_object(), $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)) || isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)) || pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      throw $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-pure.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = !1;
  }
});

// node_modules/libram/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/define-global-property.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(global2, key, {
          value: value,
          configurable: !0,
          writable: !0
        });
      } catch (error) {
        global2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/shared-store.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), defineGlobalProperty = require_define_global_property(), SHARED = "__core-js_shared__", store = global2[SHARED] || defineGlobalProperty(SHARED, {});
    module2.exports = store;
  }
});

// node_modules/libram/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/shared.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var IS_PURE = require_is_pure(), store = require_shared_store();
    (module2.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.23.3",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-object.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var requireObjectCoercible = require_require_object_coercible(), $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/has-own-property.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), toObject = require_to_object(), hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/uid.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), id = 0, postfix = Math.random(), toString = uncurryThis(1 .toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/well-known-symbol.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), shared = require_shared(), hasOwn = require_has_own_property(), uid = require_uid(), NATIVE_SYMBOL = require_native_symbol(), USE_SYMBOL_AS_UID = require_use_symbol_as_uid(), WellKnownSymbolsStore = shared("wks"), Symbol2 = global2.Symbol, symbolFor = Symbol2 && Symbol2.for, createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        NATIVE_SYMBOL && hasOwn(Symbol2, name) ? WellKnownSymbolsStore[name] = Symbol2[name] : USE_SYMBOL_AS_UID && symbolFor ? WellKnownSymbolsStore[name] = symbolFor(description) : WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-primitive.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var call = require_function_call(), isObject = require_is_object(), isSymbol = require_is_symbol(), getMethod = require_get_method(), ordinaryToPrimitive = require_ordinary_to_primitive(), wellKnownSymbol = require_well_known_symbol(), $TypeError = TypeError, TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE), result;
      if (exoticToPrim) {
        if (pref === void 0 && (pref = "default"), result = call(exoticToPrim, input, pref), !isObject(result) || isSymbol(result))
          return result;
        throw $TypeError("Can't convert object to primitive value");
      }
      return pref === void 0 && (pref = "number"), ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-property-key.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var toPrimitive = require_to_primitive(), isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/document-create-element.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), isObject = require_is_object(), document2 = global2.document, EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/ie8-dom-define.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), fails = require_fails(), createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a != 7;
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-get-own-property-descriptor.js": function(exports) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), call = require_function_call(), propertyIsEnumerableModule = require_object_property_is_enumerable(), createPropertyDescriptor = require_create_property_descriptor(), toIndexedObject = require_to_indexed_object(), toPropertyKey = require_to_property_key(), hasOwn = require_has_own_property(), IE8_DOM_DEFINE = require_ie8_dom_define(), $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function(O, P) {
      if (O = toIndexedObject(O), P = toPropertyKey(P), IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/v8-prototype-define-bug.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), fails = require_fails();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: !1
      }).prototype != 42;
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/an-object.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isObject = require_is_object(), $String = String, $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument))
        return argument;
      throw $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-define-property.js": function(exports) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), IE8_DOM_DEFINE = require_ie8_dom_define(), V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug(), anObject = require_an_object(), toPropertyKey = require_to_property_key(), $TypeError = TypeError, $defineProperty = Object.defineProperty, $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, ENUMERABLE = "enumerable", CONFIGURABLE = "configurable", WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function(O, P, Attributes) {
      if (anObject(O), P = toPropertyKey(P), anObject(Attributes), typeof O == "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        current && current[WRITABLE] && (O[P] = Attributes.value, Attributes = {
          configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: !1
        });
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function(O, P, Attributes) {
      if (anObject(O), P = toPropertyKey(P), anObject(Attributes), IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw $TypeError("Accessors not supported");
      return "value" in Attributes && (O[P] = Attributes.value), O;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/create-non-enumerable-property.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), definePropertyModule = require_object_define_property(), createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      return object[key] = value, object;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/function-name.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), hasOwn = require_has_own_property(), FunctionPrototype = Function.prototype, getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor, EXISTS = hasOwn(FunctionPrototype, "name"), PROPER = EXISTS && function() {
    }.name === "something", CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS: EXISTS,
      PROPER: PROPER,
      CONFIGURABLE: CONFIGURABLE
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/inspect-source.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), isCallable = require_is_callable(), store = require_shared_store(), functionToString = uncurryThis(Function.toString);
    isCallable(store.inspectSource) || (store.inspectSource = function(it) {
      return functionToString(it);
    });
    module2.exports = store.inspectSource;
  }
});

// node_modules/libram/node_modules/core-js/internals/native-weak-map.js
var require_native_weak_map = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/native-weak-map.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), isCallable = require_is_callable(), inspectSource = require_inspect_source(), WeakMap2 = global2.WeakMap;
    module2.exports = isCallable(WeakMap2) && /native code/.test(inspectSource(WeakMap2));
  }
});

// node_modules/libram/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/shared-key.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var shared = require_shared(), uid = require_uid(), keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/hidden-keys.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = {};
  }
});

// node_modules/libram/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/internal-state.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var NATIVE_WEAK_MAP = require_native_weak_map(), global2 = require_global(), uncurryThis = require_function_uncurry_this(), isObject = require_is_object(), createNonEnumerableProperty = require_create_non_enumerable_property(), hasOwn = require_has_own_property(), shared = require_shared_store(), sharedKey = require_shared_key(), hiddenKeys = require_hidden_keys(), OBJECT_ALREADY_INITIALIZED = "Object already initialized", TypeError2 = global2.TypeError, WeakMap2 = global2.WeakMap, set3, get4, has, enforce = function(it) {
      return has(it) ? get4(it) : set3(it, {});
    }, getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get4(it)).type !== TYPE)
          throw TypeError2("Incompatible receiver, " + TYPE + " required");
        return state;
      };
    };
    NATIVE_WEAK_MAP || shared.state ? (store = shared.state || (shared.state = new WeakMap2()), wmget = uncurryThis(store.get), wmhas = uncurryThis(store.has), wmset = uncurryThis(store.set), set3 = function(it, metadata) {
      if (wmhas(store, it))
        throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      return metadata.facade = it, wmset(store, it, metadata), metadata;
    }, get4 = function(it) {
      return wmget(store, it) || {};
    }, has = function(it) {
      return wmhas(store, it);
    }) : (STATE = sharedKey("state"), hiddenKeys[STATE] = !0, set3 = function(it, metadata) {
      if (hasOwn(it, STATE))
        throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      return metadata.facade = it, createNonEnumerableProperty(it, STATE, metadata), metadata;
    }, get4 = function(it) {
      return hasOwn(it, STATE) ? it[STATE] : {};
    }, has = function(it) {
      return hasOwn(it, STATE);
    });
    var store, wmget, wmhas, wmset, STATE;
    module2.exports = {
      set: set3,
      get: get4,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/make-built-in.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var fails = require_fails(), isCallable = require_is_callable(), hasOwn = require_has_own_property(), DESCRIPTORS = require_descriptors(), CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE, inspectSource = require_inspect_source(), InternalStateModule = require_internal_state(), enforceInternalState = InternalStateModule.enforce, getInternalState = InternalStateModule.get, defineProperty = Object.defineProperty, CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", {
        value: 8
      }).length !== 8;
    }), TEMPLATE = String(String).split("String"), makeBuiltIn = module2.exports = function(value, name, options) {
      String(name).slice(0, 7) === "Symbol(" && (name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), options && options.getter && (name = "get " + name), options && options.setter && (name = "set " + name), (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) && (DESCRIPTORS ? defineProperty(value, "name", {
        value: name,
        configurable: !0
      }) : value.name = name), CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity && defineProperty(value, "length", {
        value: options.arity
      });
      try {
        options && hasOwn(options, "constructor") && options.constructor ? DESCRIPTORS && defineProperty(value, "prototype", {
          writable: !1
        }) : value.prototype && (value.prototype = void 0);
      } catch (error) {
      }
      var state = enforceInternalState(value);
      return hasOwn(state, "source") || (state.source = TEMPLATE.join(typeof name == "string" ? name : "")), value;
    };
    Function.prototype.toString = makeBuiltIn(function() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/libram/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/define-built-in.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isCallable = require_is_callable(), definePropertyModule = require_object_define_property(), makeBuiltIn = require_make_built_in(), defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      options || (options = {});
      var simple = options.enumerable, name = options.name !== void 0 ? options.name : key;
      if (isCallable(value) && makeBuiltIn(value, name, options), options.global)
        simple ? O[key] = value : defineGlobalProperty(key, value);
      else {
        try {
          options.unsafe ? O[key] && (simple = !0) : delete O[key];
        } catch (error) {
        }
        simple ? O[key] = value : definePropertyModule.f(O, key, {
          value: value,
          enumerable: !1,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable
        });
      }
      return O;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/math-trunc.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var ceil = Math.ceil, floor = Math.floor;
    module2.exports = Math.trunc || function(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-integer-or-infinity.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-absolute-index.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var toIntegerOrInfinity = require_to_integer_or_infinity(), max = Math.max, min = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-length.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var toIntegerOrInfinity = require_to_integer_or_infinity(), min = Math.min;
    module2.exports = function(argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/length-of-array-like.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/array-includes.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var toIndexedObject = require_to_indexed_object(), toAbsoluteIndex = require_to_absolute_index(), lengthOfArrayLike = require_length_of_array_like(), createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this), length = lengthOfArrayLike(O), index = toAbsoluteIndex(fromIndex, length), value;
        if (IS_INCLUDES && el != el) {
          for (; length > index; )
            if (value = O[index++], value != value)
              return !0;
        } else
          for (; length > index; index++)
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
        return !IS_INCLUDES && -1;
      };
    };
    module2.exports = {
      includes: createMethod(!0),
      indexOf: createMethod(!1)
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-keys-internal.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), hasOwn = require_has_own_property(), toIndexedObject = require_to_indexed_object(), indexOf = require_array_includes().indexOf, hiddenKeys = require_hidden_keys(), push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O = toIndexedObject(object), i = 0, result = [], key;
      for (key in O)
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      for (; names.length > i; )
        hasOwn(O, key = names[i++]) && (~indexOf(result, key) || push(result, key));
      return result;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/enum-bug-keys.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }
});

// node_modules/libram/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-get-own-property-names.js": function(exports) {
    init_kolmafia_polyfill();
    var internalObjectKeys = require_object_keys_internal(), enumBugKeys = require_enum_bug_keys(), hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-get-own-property-symbols.js": function(exports) {
    init_kolmafia_polyfill();
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/libram/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/own-keys.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in(), uncurryThis = require_function_uncurry_this(), getOwnPropertyNamesModule = require_object_get_own_property_names(), getOwnPropertySymbolsModule = require_object_get_own_property_symbols(), anObject = require_an_object(), concat = uncurryThis([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it)), getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/copy-constructor-properties.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var hasOwn = require_has_own_property(), ownKeys11 = require_own_keys(), getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor(), definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      for (var keys = ownKeys11(source), defineProperty = definePropertyModule.f, getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f, i = 0; i < keys.length; i++) {
        var key = keys[i];
        !hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key)) && defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-forced.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var fails = require_fails(), isCallable = require_is_callable(), replacement = /#|\.prototype\./, isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? !0 : value == NATIVE ? !1 : isCallable(detection) ? fails(detection) : !!detection;
    }, normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    }, data = isForced.data = {}, NATIVE = isForced.NATIVE = "N", POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// node_modules/libram/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/export.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f, createNonEnumerableProperty = require_create_non_enumerable_property(), defineBuiltIn = require_define_built_in(), defineGlobalProperty = require_define_global_property(), copyConstructorProperties = require_copy_constructor_properties(), isForced = require_is_forced();
    module2.exports = function(options, source) {
      var TARGET = options.target, GLOBAL = options.global, STATIC = options.stat, FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL ? target = global2 : STATIC ? target = global2[TARGET] || defineGlobalProperty(TARGET, {}) : target = (global2[TARGET] || {}).prototype, target)
        for (key in source) {
          if (sourceProperty = source[key], options.dontCallGetSet ? (descriptor = getOwnPropertyDescriptor(target, key), targetProperty = descriptor && descriptor.value) : targetProperty = target[key], FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced), !FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          (options.sham || targetProperty && targetProperty.sham) && createNonEnumerableProperty(sourceProperty, "sham", !0), defineBuiltIn(target, key, sourceProperty, options);
        }
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-keys.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var internalObjectKeys = require_object_keys_internal(), enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-to-array.js
var require_object_to_array = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-to-array.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), uncurryThis = require_function_uncurry_this(), objectKeys = require_object_keys(), toIndexedObject = require_to_indexed_object(), $propertyIsEnumerable = require_object_property_is_enumerable().f, propertyIsEnumerable = uncurryThis($propertyIsEnumerable), push = uncurryThis([].push), createMethod = function(TO_ENTRIES) {
      return function(it) {
        for (var O = toIndexedObject(it), keys = objectKeys(O), length = keys.length, i = 0, result = [], key; length > i; )
          key = keys[i++], (!DESCRIPTORS || propertyIsEnumerable(O, key)) && push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
        return result;
      };
    };
    module2.exports = {
      entries: createMethod(!0),
      values: createMethod(!1)
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-array.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function(argument) {
      return classof(argument) == "Array";
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/does-not-exceed-safe-integer.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var $TypeError = TypeError, MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER)
        throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/function-bind-context.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), aCallable = require_a_callable(), NATIVE_BIND = require_function_bind_native(), bind = uncurryThis(uncurryThis.bind);
    module2.exports = function(fn, that) {
      return aCallable(fn), that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/flatten-into-array.js
var require_flatten_into_array = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/flatten-into-array.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isArray = require_is_array(), lengthOfArrayLike = require_length_of_array_like(), doesNotExceedSafeInteger = require_does_not_exceed_safe_integer(), bind = require_function_bind_context(), flattenIntoArray = function flattenIntoArray2(target, original, source, sourceLen, start, depth, mapper, thisArg) {
      for (var targetIndex = start, sourceIndex = 0, mapFn = mapper ? bind(mapper, thisArg) : !1, element, elementLen; sourceIndex < sourceLen; )
        sourceIndex in source && (element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex], depth > 0 && isArray(element) ? (elementLen = lengthOfArrayLike(element), targetIndex = flattenIntoArray2(target, original, element, elementLen, targetIndex, depth - 1) - 1) : (doesNotExceedSafeInteger(targetIndex + 1), target[targetIndex] = element), targetIndex++), sourceIndex++;
      return targetIndex;
    };
    module2.exports = flattenIntoArray;
  }
});

// node_modules/libram/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-string-tag-support.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/libram/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/classof.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support(), isCallable = require_is_callable(), classofRaw = require_classof_raw(), wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), $Object = Object, CORRECT_ARGUMENTS = classofRaw(function() {
      return arguments;
    }()) == "Arguments", tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-constructor.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), fails = require_fails(), isCallable = require_is_callable(), classof = require_classof(), getBuiltIn = require_get_built_in(), inspectSource = require_inspect_source(), noop = function() {
    }, empty = [], construct = getBuiltIn("Reflect", "construct"), constructorRegExp = /^\s*(?:class|function)\b/, exec = uncurryThis(constructorRegExp.exec), INCORRECT_TO_STRING = !constructorRegExp.exec(noop), isConstructorModern = function(argument) {
      if (!isCallable(argument))
        return !1;
      try {
        return construct(noop, empty, argument), !0;
      } catch (error) {
        return !1;
      }
    }, isConstructorLegacy = function(argument) {
      if (!isCallable(argument))
        return !1;
      switch (classof(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error) {
        return !0;
      }
    };
    isConstructorLegacy.sham = !0;
    module2.exports = !construct || fails(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = !0;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// node_modules/libram/node_modules/core-js/internals/array-species-constructor.js
var require_array_species_constructor = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/array-species-constructor.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isArray = require_is_array(), isConstructor = require_is_constructor(), isObject = require_is_object(), wellKnownSymbol = require_well_known_symbol(), SPECIES = wellKnownSymbol("species"), $Array = Array;
    module2.exports = function(originalArray) {
      var C;
      return isArray(originalArray) && (C = originalArray.constructor, isConstructor(C) && (C === $Array || isArray(C.prototype)) ? C = void 0 : isObject(C) && (C = C[SPECIES], C === null && (C = void 0))), C === void 0 ? $Array : C;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/array-species-create.js
var require_array_species_create = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/array-species-create.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var arraySpeciesConstructor = require_array_species_constructor();
    module2.exports = function(originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };
  }
});

// node_modules/libram/node_modules/core-js/modules/es.array.flat.js
var require_es_array_flat = __commonJS({
  "node_modules/libram/node_modules/core-js/modules/es.array.flat.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var $4 = require_export(), flattenIntoArray = require_flatten_into_array(), toObject = require_to_object(), lengthOfArrayLike = require_length_of_array_like(), toIntegerOrInfinity = require_to_integer_or_infinity(), arraySpeciesCreate = require_array_species_create();
    $4({
      target: "Array",
      proto: !0
    }, {
      flat: function() {
        var depthArg = arguments.length ? arguments[0] : void 0, O = toObject(this), sourceLen = lengthOfArrayLike(O), A = arraySpeciesCreate(O, 0);
        return A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === void 0 ? 1 : toIntegerOrInfinity(depthArg)), A;
      }
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-define-properties.js": function(exports) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug(), definePropertyModule = require_object_define_property(), anObject = require_an_object(), toIndexedObject = require_to_indexed_object(), objectKeys = require_object_keys();
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function(O, Properties) {
      anObject(O);
      for (var props = toIndexedObject(Properties), keys = objectKeys(Properties), length = keys.length, index = 0, key; length > index; )
        definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/html.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/libram/node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-create.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var anObject = require_an_object(), definePropertiesModule = require_object_define_properties(), enumBugKeys = require_enum_bug_keys(), hiddenKeys = require_hidden_keys(), html = require_html(), documentCreateElement = require_document_create_element(), sharedKey = require_shared_key(), GT = ">", LT = "<", PROTOTYPE = "prototype", SCRIPT = "script", IE_PROTO = sharedKey("IE_PROTO"), EmptyConstructor = function() {
    }, scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    }, NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag("")), activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      return activeXDocument2 = null, temp;
    }, NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe"), JS = "java" + SCRIPT + ":", iframeDocument;
      return iframe.style.display = "none", html.appendChild(iframe), iframe.src = String(JS), iframeDocument = iframe.contentWindow.document, iframeDocument.open(), iframeDocument.write(scriptTag("document.F=Object")), iframeDocument.close(), iframeDocument.F;
    }, activeXDocument, _NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      _NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      for (var length = enumBugKeys.length; length--; )
        delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return _NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = !0;
    module2.exports = Object.create || function(O, Properties) {
      var result;
      return O !== null ? (EmptyConstructor[PROTOTYPE] = anObject(O), result = new EmptyConstructor(), EmptyConstructor[PROTOTYPE] = null, result[IE_PROTO] = O) : result = _NullProtoObject(), Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/add-to-unscopables.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var wellKnownSymbol = require_well_known_symbol(), create9 = require_object_create(), defineProperty = require_object_define_property().f, UNSCOPABLES = wellKnownSymbol("unscopables"), ArrayPrototype = Array.prototype;
    ArrayPrototype[UNSCOPABLES] == null && defineProperty(ArrayPrototype, UNSCOPABLES, {
      configurable: !0,
      value: create9(null)
    });
    module2.exports = function(key) {
      ArrayPrototype[UNSCOPABLES][key] = !0;
    };
  }
});

// node_modules/libram/node_modules/core-js/modules/es.array.unscopables.flat.js
var require_es_array_unscopables_flat = __commonJS({
  "node_modules/libram/node_modules/core-js/modules/es.array.unscopables.flat.js": function() {
    init_kolmafia_polyfill();
    var addToUnscopables = require_add_to_unscopables();
    addToUnscopables("flat");
  }
});

// node_modules/libram/node_modules/core-js/internals/entry-unbind.js
var require_entry_unbind = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/entry-unbind.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), uncurryThis = require_function_uncurry_this();
    module2.exports = function(CONSTRUCTOR, METHOD) {
      return uncurryThis(global2[CONSTRUCTOR].prototype[METHOD]);
    };
  }
});

// node_modules/libram/node_modules/core-js/es/array/flat.js
var require_flat = __commonJS({
  "node_modules/libram/node_modules/core-js/es/array/flat.js": function(exports, module2) {
    init_kolmafia_polyfill();
    require_es_array_flat();
    require_es_array_unscopables_flat();
    var entryUnbind = require_entry_unbind();
    module2.exports = entryUnbind("Array", "flat");
  }
});

// node_modules/libram/node_modules/core-js/stable/array/flat.js
var require_flat2 = __commonJS({
  "node_modules/libram/node_modules/core-js/stable/array/flat.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var parent = require_flat();
    module2.exports = parent;
  }
});

// node_modules/libram/node_modules/core-js/actual/array/flat.js
var require_flat3 = __commonJS({
  "node_modules/libram/node_modules/core-js/actual/array/flat.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var parent = require_flat2();
    module2.exports = parent;
  }
});

// node_modules/libram/node_modules/core-js/full/array/flat.js
var require_flat4 = __commonJS({
  "node_modules/libram/node_modules/core-js/full/array/flat.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var parent = require_flat3();
    module2.exports = parent;
  }
});

// node_modules/libram/node_modules/core-js/features/array/flat.js
var require_flat5 = __commonJS({
  "node_modules/libram/node_modules/core-js/features/array/flat.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = require_flat4();
  }
});

// node_modules/libram/node_modules/core-js/internals/iterators.js
var require_iterators = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/iterators.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = {};
  }
});

// node_modules/libram/node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-array-iterator-method.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var wellKnownSymbol = require_well_known_symbol(), Iterators = require_iterators(), ITERATOR = wellKnownSymbol("iterator"), ArrayPrototype = Array.prototype;
    module2.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/get-iterator-method.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var classof = require_classof(), getMethod = require_get_method(), Iterators = require_iterators(), wellKnownSymbol = require_well_known_symbol(), ITERATOR = wellKnownSymbol("iterator");
    module2.exports = function(it) {
      if (it != null)
        return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/get-iterator.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var call = require_function_call(), aCallable = require_a_callable(), anObject = require_an_object(), tryToString = require_try_to_string(), getIteratorMethod = require_get_iterator_method(), $TypeError = TypeError;
    module2.exports = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable(iteratorMethod))
        return anObject(call(iteratorMethod, argument));
      throw $TypeError(tryToString(argument) + " is not iterable");
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/iterator-close.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var call = require_function_call(), anObject = require_an_object(), getMethod = require_get_method();
    module2.exports = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject(iterator);
      try {
        if (innerResult = getMethod(iterator, "return"), !innerResult) {
          if (kind === "throw")
            throw value;
          return value;
        }
        innerResult = call(innerResult, iterator);
      } catch (error) {
        innerError = !0, innerResult = error;
      }
      if (kind === "throw")
        throw value;
      if (innerError)
        throw innerResult;
      return anObject(innerResult), value;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/iterate.js
var require_iterate = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/iterate.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var bind = require_function_bind_context(), call = require_function_call(), anObject = require_an_object(), tryToString = require_try_to_string(), isArrayIteratorMethod = require_is_array_iterator_method(), lengthOfArrayLike = require_length_of_array_like(), isPrototypeOf = require_object_is_prototype_of(), getIterator = require_get_iterator(), getIteratorMethod = require_get_iterator_method(), iteratorClose = require_iterator_close(), $TypeError = TypeError, Result = function(stopped, result) {
      this.stopped = stopped, this.result = result;
    }, ResultPrototype = Result.prototype;
    module2.exports = function(iterable, unboundFunction, options) {
      var that = options && options.that, AS_ENTRIES = !!(options && options.AS_ENTRIES), IS_ITERATOR = !!(options && options.IS_ITERATOR), INTERRUPTED = !!(options && options.INTERRUPTED), fn = bind(unboundFunction, that), iterator, iterFn, index, length, result, next, step, stop = function(condition) {
        return iterator && iteratorClose(iterator, "normal", condition), new Result(!0, condition);
      }, callFn = function(value) {
        return AS_ENTRIES ? (anObject(value), INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1])) : INTERRUPTED ? fn(value, stop) : fn(value);
      };
      if (IS_ITERATOR)
        iterator = iterable;
      else {
        if (iterFn = getIteratorMethod(iterable), !iterFn)
          throw $TypeError(tryToString(iterable) + " is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++)
            if (result = callFn(iterable[index]), result && isPrototypeOf(ResultPrototype, result))
              return result;
          return new Result(!1);
        }
        iterator = getIterator(iterable, iterFn);
      }
      for (next = iterator.next; !(step = call(next, iterator)).done; ) {
        try {
          result = callFn(step.value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result))
          return result;
      }
      return new Result(!1);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/create-property.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toPropertyKey = require_to_property_key(), definePropertyModule = require_object_define_property(), createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = function(object, key, value) {
      var propertyKey = toPropertyKey(key);
      propertyKey in object ? definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value)) : object[propertyKey] = value;
    };
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function listCacheClear() {
      this.__data__ = [], this.size = 0;
    }
    module2.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module2.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var eq = require_eq();
    function assocIndexOf(array, key) {
      for (var length = array.length; length--; )
        if (eq(array[length][0], key))
          return length;
      return -1;
    }
    module2.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var assocIndexOf = require_assocIndexOf(), arrayProto = Array.prototype, splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0)
        return !1;
      var lastIndex = data.length - 1;
      return index == lastIndex ? data.pop() : splice.call(data, index, 1), --this.size, !0;
    }
    module2.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module2.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module2.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? (++this.size, data.push([key, value])) : data[index][1] = value, this;
    }
    module2.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var listCacheClear = require_listCacheClear(), listCacheDelete = require_listCacheDelete(), listCacheGet = require_listCacheGet(), listCacheHas = require_listCacheHas(), listCacheSet = require_listCacheSet();
    function ListCache(entries2) {
      var index = -1, length = entries2 == null ? 0 : entries2.length;
      for (this.clear(); ++index < length; ) {
        var entry = entries2[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype.delete = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module2.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache(), this.size = 0;
    }
    module2.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function stackDelete(key) {
      var data = this.__data__, result = data.delete(key);
      return this.size = data.size, result;
    }
    module2.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module2.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module2.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module2.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var freeGlobal = require_freeGlobal(), freeSelf = typeof self == "object" && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")();
    module2.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var root = require_root(), Symbol2 = root.Symbol;
    module2.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var Symbol2 = require_Symbol(), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, nativeObjectToString = objectProto.toString, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = !0;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      return unmasked && (isOwn ? value[symToStringTag] = tag : delete value[symToStringTag]), result;
    }
    module2.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var objectProto = Object.prototype, nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module2.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var Symbol2 = require_Symbol(), getRawTag = require_getRawTag(), objectToString = require_objectToString(), nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      return value == null ? value === void 0 ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module2.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module2.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseGetTag = require_baseGetTag(), isObject = require_isObject(), asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value))
        return !1;
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module2.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var root = require_root(), coreJsData = root["__core-js_shared__"];
    module2.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var coreJsData = require_coreJsData(), maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module2.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var funcProto = Function.prototype, funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module2.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isFunction = require_isFunction(), isMasked = require_isMasked(), isObject = require_isObject(), toSource = require_toSource(), reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, funcProto = Function.prototype, objectProto = Object.prototype, funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value))
        return !1;
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module2.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module2.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseIsNative = require_baseIsNative(), getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module2.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getNative = require_getNative(), root = require_root(), Map2 = getNative(root, "Map");
    module2.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getNative = require_getNative(), nativeCreate = getNative(Object, "create");
    module2.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {}, this.size = 0;
    }
    module2.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      return this.size -= result ? 1 : 0, result;
    }
    module2.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var nativeCreate = require_nativeCreate(), HASH_UNDEFINED = "__lodash_hash_undefined__", objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module2.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var nativeCreate = require_nativeCreate(), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module2.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var nativeCreate = require_nativeCreate(), HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      return this.size += this.has(key) ? 0 : 1, data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value, this;
    }
    module2.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var hashClear = require_hashClear(), hashDelete = require_hashDelete(), hashGet = require_hashGet(), hashHas = require_hashHas(), hashSet = require_hashSet();
    function Hash(entries2) {
      var index = -1, length = entries2 == null ? 0 : entries2.length;
      for (this.clear(); ++index < length; ) {
        var entry = entries2[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype.delete = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module2.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var Hash = require_Hash(), ListCache = require_ListCache(), Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0, this.__data__ = {
        hash: new Hash(),
        map: new (Map2 || ListCache)(),
        string: new Hash()
      };
    }
    module2.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module2.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module2.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key).delete(key);
      return this.size -= result ? 1 : 0, result;
    }
    module2.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module2.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module2.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      return data.set(key, value), this.size += data.size == size ? 0 : 1, this;
    }
    module2.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var mapCacheClear = require_mapCacheClear(), mapCacheDelete = require_mapCacheDelete(), mapCacheGet = require_mapCacheGet(), mapCacheHas = require_mapCacheHas(), mapCacheSet = require_mapCacheSet();
    function MapCache(entries2) {
      var index = -1, length = entries2 == null ? 0 : entries2.length;
      for (this.clear(); ++index < length; ) {
        var entry = entries2[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype.delete = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module2.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var ListCache = require_ListCache(), Map2 = require_Map(), MapCache = require_MapCache(), LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1)
          return pairs.push([key, value]), this.size = ++data.size, this;
        data = this.__data__ = new MapCache(pairs);
      }
      return data.set(key, value), this.size = data.size, this;
    }
    module2.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var ListCache = require_ListCache(), stackClear = require_stackClear(), stackDelete = require_stackDelete(), stackGet = require_stackGet(), stackHas = require_stackHas(), stackSet = require_stackSet();
    function Stack(entries2) {
      var data = this.__data__ = new ListCache(entries2);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype.delete = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module2.exports = Stack;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      return this.__data__.set(value, HASH_UNDEFINED), this;
    }
    module2.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module2.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var MapCache = require_MapCache(), setCacheAdd = require_setCacheAdd(), setCacheHas = require_setCacheHas();
    function SetCache(values2) {
      var index = -1, length = values2 == null ? 0 : values2.length;
      for (this.__data__ = new MapCache(); ++index < length; )
        this.add(values2[index]);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module2.exports = SetCache;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function arraySome(array, predicate) {
      for (var index = -1, length = array == null ? 0 : array.length; ++index < length; )
        if (predicate(array[index], index, array))
          return !0;
      return !1;
    }
    module2.exports = arraySome;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module2.exports = cacheHas;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var SetCache = require_SetCache(), arraySome = require_arraySome(), cacheHas = require_cacheHas(), COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength))
        return !1;
      var arrStacked = stack.get(array), othStacked = stack.get(other);
      if (arrStacked && othStacked)
        return arrStacked == other && othStacked == array;
      var index = -1, result = !0, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      for (stack.set(array, other), stack.set(other, array); ++index < arrLength; ) {
        var arrValue = array[index], othValue = other[index];
        if (customizer)
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== void 0) {
          if (compared)
            continue;
          result = !1;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack)))
              return seen.push(othIndex);
          })) {
            result = !1;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = !1;
          break;
        }
      }
      return stack.delete(array), stack.delete(other), result;
    }
    module2.exports = equalArrays;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var root = require_root(), Uint8Array2 = root.Uint8Array;
    module2.exports = Uint8Array2;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      return map.forEach(function(value, key) {
        result[++index] = [key, value];
      }), result;
    }
    module2.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function setToArray(set3) {
      var index = -1, result = Array(set3.size);
      return set3.forEach(function(value) {
        result[++index] = value;
      }), result;
    }
    module2.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var Symbol2 = require_Symbol(), Uint8Array2 = require_Uint8Array(), eq = require_eq(), equalArrays = require_equalArrays(), mapToArray = require_mapToArray(), setToArray = require_setToArray(), COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2, boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset)
            return !1;
          object = object.buffer, other = other.buffer;
        case arrayBufferTag:
          return !(object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other)));
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          if (convert || (convert = setToArray), object.size != other.size && !isPartial)
            return !1;
          var stacked = stack.get(object);
          if (stacked)
            return stacked == other;
          bitmask |= COMPARE_UNORDERED_FLAG, stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          return stack.delete(object), result;
        case symbolTag:
          if (symbolValueOf)
            return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
      return !1;
    }
    module2.exports = equalByTag;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function arrayPush(array, values2) {
      for (var index = -1, length = values2.length, offset = array.length; ++index < length; )
        array[offset + index] = values2[index];
      return array;
    }
    module2.exports = arrayPush;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isArray = Array.isArray;
    module2.exports = isArray;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var arrayPush = require_arrayPush(), isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module2.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function arrayFilter(array, predicate) {
      for (var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = []; ++index < length; ) {
        var value = array[index];
        predicate(value, index, array) && (result[resIndex++] = value);
      }
      return result;
    }
    module2.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function stubArray() {
      return [];
    }
    module2.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var arrayFilter = require_arrayFilter(), stubArray = require_stubArray(), objectProto = Object.prototype, propertyIsEnumerable = objectProto.propertyIsEnumerable, nativeGetSymbols = Object.getOwnPropertySymbols, getSymbols = nativeGetSymbols ? function(object) {
      return object == null ? [] : (object = Object(object), arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      }));
    } : stubArray;
    module2.exports = getSymbols;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function baseTimes(n, iteratee) {
      for (var index = -1, result = Array(n); ++index < n; )
        result[index] = iteratee(index);
      return result;
    }
    module2.exports = baseTimes;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module2.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseGetTag = require_baseGetTag(), isObjectLike = require_isObjectLike(), argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module2.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseIsArguments = require_baseIsArguments(), isObjectLike = require_isObjectLike(), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, propertyIsEnumerable = objectProto.propertyIsEnumerable, isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module2.exports = isArguments;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function stubFalse() {
      return !1;
    }
    module2.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var root = require_root(), stubFalse = require_stubFalse(), freeExports = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2, moduleExports = freeModule && freeModule.exports === freeExports, Buffer2 = moduleExports ? root.Buffer : void 0, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0, isBuffer = nativeIsBuffer || stubFalse;
    module2.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var MAX_SAFE_INTEGER = 9007199254740991, reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      return length = length == null ? MAX_SAFE_INTEGER : length, !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    module2.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module2.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseGetTag = require_baseGetTag(), isLength = require_isLength(), isObjectLike = require_isObjectLike(), argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module2.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module2.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var freeGlobal = require_freeGlobal(), freeExports = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2, moduleExports = freeModule && freeModule.exports === freeExports, freeProcess = moduleExports && freeGlobal.process, nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        return types || freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module2.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseIsTypedArray = require_baseIsTypedArray(), baseUnary = require_baseUnary(), nodeUtil = require_nodeUtil(), nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray, isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module2.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseTimes = require_baseTimes(), isArguments = require_isArguments(), isArray = require_isArray(), isBuffer = require_isBuffer(), isIndex = require_isIndex(), isTypedArray = require_isTypedArray(), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value)
        (inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length))) && result.push(key);
      return result;
    }
    module2.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module2.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module2.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var overArg = require_overArg(), nativeKeys = overArg(Object.keys, Object);
    module2.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isPrototype = require_isPrototype(), nativeKeys = require_nativeKeys(), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object))
        return nativeKeys(object);
      var result = [];
      for (var key in Object(object))
        hasOwnProperty.call(object, key) && key != "constructor" && result.push(key);
      return result;
    }
    module2.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isFunction = require_isFunction(), isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module2.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var arrayLikeKeys = require_arrayLikeKeys(), baseKeys = require_baseKeys(), isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module2.exports = keys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseGetAllKeys = require_baseGetAllKeys(), getSymbols = require_getSymbols(), keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module2.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getAllKeys = require_getAllKeys(), COMPARE_PARTIAL_FLAG = 1, objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial)
        return !1;
      for (var index = objLength; index--; ) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key)))
          return !1;
      }
      var objStacked = stack.get(object), othStacked = stack.get(other);
      if (objStacked && othStacked)
        return objStacked == other && othStacked == object;
      var result = !0;
      stack.set(object, other), stack.set(other, object);
      for (var skipCtor = isPartial; ++index < objLength; ) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer)
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = !1;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor) && (result = !1);
      }
      return stack.delete(object), stack.delete(other), result;
    }
    module2.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getNative = require_getNative(), root = require_root(), DataView = getNative(root, "DataView");
    module2.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getNative = require_getNative(), root = require_root(), Promise2 = getNative(root, "Promise");
    module2.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getNative = require_getNative(), root = require_root(), Set2 = getNative(root, "Set");
    module2.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getNative = require_getNative(), root = require_root(), WeakMap2 = getNative(root, "WeakMap");
    module2.exports = WeakMap2;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var DataView = require_DataView(), Map2 = require_Map(), Promise2 = require_Promise(), Set2 = require_Set(), WeakMap2 = require_WeakMap(), baseGetTag = require_baseGetTag(), toSource = require_toSource(), mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]", dataViewTag = "[object DataView]", dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2), getTag = baseGetTag;
    (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) && (getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString)
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
      return result;
    });
    module2.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var Stack = require_Stack(), equalArrays = require_equalArrays(), equalByTag = require_equalByTag(), equalObjects = require_equalObjects(), getTag = require_getTag(), isArray = require_isArray(), isBuffer = require_isBuffer(), isTypedArray = require_isTypedArray(), COMPARE_PARTIAL_FLAG = 1, argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]", objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag, othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other))
          return !1;
        objIsArr = !0, objIsObj = !1;
      }
      if (isSameTag && !objIsObj)
        return stack || (stack = new Stack()), objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          return stack || (stack = new Stack()), equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      return isSameTag ? (stack || (stack = new Stack()), equalObjects(object, other, bitmask, customizer, equalFunc, stack)) : !1;
    }
    module2.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseIsEqualDeep = require_baseIsEqualDeep(), isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      return value === other ? !0 : value == null || other == null || !isObjectLike(value) && !isObjectLike(other) ? value !== value && other !== other : baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module2.exports = baseIsEqual;
  }
});

// node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "node_modules/lodash/isEqual.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseIsEqual = require_baseIsEqual();
    function isEqual2(value, other) {
      return baseIsEqual(value, other);
    }
    module2.exports = isEqual2;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseGetTag = require_baseGetTag(), isObjectLike = require_isObjectLike(), symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module2.exports = isSymbol;
  }
});

// node_modules/lodash/_baseExtremum.js
var require_baseExtremum = __commonJS({
  "node_modules/lodash/_baseExtremum.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isSymbol = require_isSymbol();
    function baseExtremum(array, iteratee, comparator) {
      for (var index = -1, length = array.length; ++index < length; ) {
        var value = array[index], current = iteratee(value);
        if (current != null && (computed === void 0 ? current === current && !isSymbol(current) : comparator(current, computed)))
          var computed = current, result = value;
      }
      return result;
    }
    module2.exports = baseExtremum;
  }
});

// node_modules/lodash/_baseGt.js
var require_baseGt = __commonJS({
  "node_modules/lodash/_baseGt.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function baseGt(value, other) {
      return value > other;
    }
    module2.exports = baseGt;
  }
});

// node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/lodash/_baseIsMatch.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var Stack = require_Stack(), baseIsEqual = require_baseIsEqual(), COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null)
        return !length;
      for (object = Object(object); index--; ) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object))
          return !1;
      }
      for (; ++index < length; ) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object))
            return !1;
        } else {
          var stack = new Stack();
          if (customizer)
            var result = customizer(objValue, srcValue, key, object, source, stack);
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result))
            return !1;
        }
      }
      return !0;
    }
    module2.exports = baseIsMatch;
  }
});

// node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/lodash/_isStrictComparable.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isObject = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    module2.exports = isStrictComparable;
  }
});

// node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/lodash/_getMatchData.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isStrictComparable = require_isStrictComparable(), keys = require_keys();
    function getMatchData(object) {
      for (var result = keys(object), length = result.length; length--; ) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module2.exports = getMatchData;
  }
});

// node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/lodash/_matchesStrictComparable.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        return object == null ? !1 : object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module2.exports = matchesStrictComparable;
  }
});

// node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/lodash/_baseMatches.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseIsMatch = require_baseIsMatch(), getMatchData = require_getMatchData(), matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      return matchData.length == 1 && matchData[0][2] ? matchesStrictComparable(matchData[0][0], matchData[0][1]) : function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module2.exports = baseMatches;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isArray = require_isArray(), isSymbol = require_isSymbol(), reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value))
        return !1;
      var type = typeof value;
      return type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value) ? !0 : reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module2.exports = isKey;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var MapCache = require_MapCache(), FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function")
        throw new TypeError(FUNC_ERROR_TEXT);
      var memoized = function memoized2() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized2.cache;
        if (cache.has(key))
          return cache.get(key);
        var result = func.apply(this, args);
        return memoized2.cache = cache.set(key, result) || cache, result;
      };
      return memoized.cache = new (memoize.Cache || MapCache)(), memoized;
    }
    memoize.Cache = MapCache;
    module2.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var memoize = require_memoize(), MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        return cache.size === MAX_MEMOIZE_SIZE && cache.clear(), key;
      }), cache = result.cache;
      return result;
    }
    module2.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var memoizeCapped = require_memoizeCapped(), rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reEscapeChar = /\\(\\)?/g, stringToPath = memoizeCapped(function(string) {
      var result = [];
      return string.charCodeAt(0) === 46 && result.push(""), string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      }), result;
    });
    module2.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function arrayMap(array, iteratee) {
      for (var index = -1, length = array == null ? 0 : array.length, result = Array(length); ++index < length; )
        result[index] = iteratee(array[index], index, array);
      return result;
    }
    module2.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var Symbol2 = require_Symbol(), arrayMap = require_arrayMap(), isArray = require_isArray(), isSymbol = require_isSymbol(), INFINITY = 1 / 0, symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string")
        return value;
      if (isArray(value))
        return arrayMap(value, baseToString) + "";
      if (isSymbol(value))
        return symbolToString ? symbolToString.call(value) : "";
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module2.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module2.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isArray = require_isArray(), isKey = require_isKey(), stringToPath = require_stringToPath(), toString = require_toString();
    function castPath(value, object) {
      return isArray(value) ? value : isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module2.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isSymbol = require_isSymbol(), INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value))
        return value;
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module2.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var castPath = require_castPath(), toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      for (var index = 0, length = path.length; object != null && index < length; )
        object = object[toKey(path[index++])];
      return index && index == length ? object : void 0;
    }
    module2.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseGet = require_baseGet();
    function get4(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module2.exports = get4;
  }
});

// node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/lodash/_baseHasIn.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module2.exports = baseHasIn;
  }
});

// node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/lodash/_hasPath.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var castPath = require_castPath(), isArguments = require_isArguments(), isArray = require_isArray(), isIndex = require_isIndex(), isLength = require_isLength(), toKey = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      for (var index = -1, length = path.length, result = !1; ++index < length; ) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key)))
          break;
        object = object[key];
      }
      return result || ++index != length ? result : (length = object == null ? 0 : object.length, !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object)));
    }
    module2.exports = hasPath;
  }
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/lodash/hasIn.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseHasIn = require_baseHasIn(), hasPath = require_hasPath();
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    module2.exports = hasIn;
  }
});

// node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/lodash/_baseMatchesProperty.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseIsEqual = require_baseIsEqual(), get4 = require_get(), hasIn = require_hasIn(), isKey = require_isKey(), isStrictComparable = require_isStrictComparable(), matchesStrictComparable = require_matchesStrictComparable(), toKey = require_toKey(), COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      return isKey(path) && isStrictComparable(srcValue) ? matchesStrictComparable(toKey(path), srcValue) : function(object) {
        var objValue = get4(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module2.exports = baseMatchesProperty;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function identity(value) {
      return value;
    }
    module2.exports = identity;
  }
});

// node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/lodash/_baseProperty.js": function(exports, module2) {
    init_kolmafia_polyfill();
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module2.exports = baseProperty;
  }
});

// node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/lodash/_basePropertyDeep.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module2.exports = basePropertyDeep;
  }
});

// node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/lodash/property.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseProperty = require_baseProperty(), basePropertyDeep = require_basePropertyDeep(), isKey = require_isKey(), toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module2.exports = property;
  }
});

// node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/lodash/_baseIteratee.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseMatches = require_baseMatches(), baseMatchesProperty = require_baseMatchesProperty(), identity = require_identity(), isArray = require_isArray(), property = require_property();
    function baseIteratee(value) {
      return typeof value == "function" ? value : value == null ? identity : typeof value == "object" ? isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value) : property(value);
    }
    module2.exports = baseIteratee;
  }
});

// node_modules/lodash/maxBy.js
var require_maxBy = __commonJS({
  "node_modules/lodash/maxBy.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var baseExtremum = require_baseExtremum(), baseGt = require_baseGt(), baseIteratee = require_baseIteratee();
    function maxBy2(array, iteratee) {
      return array && array.length ? baseExtremum(array, baseIteratee(iteratee, 2), baseGt) : void 0;
    }
    module2.exports = maxBy2;
  }
});

// src/index.ts
init_kolmafia_polyfill();

// src/boozedrop.ts
init_kolmafia_polyfill();

// src/combat.ts
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/index.js
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/args.js
init_kolmafia_polyfill();
var import_kolmafia = require("kolmafia");
var specSymbol = Symbol("spec"), scriptSymbol = Symbol("script"), scriptHelpSymbol = Symbol("scriptHelp"), optionsSymbol = Symbol("options");

// node_modules/grimoire-kolmafia/dist/combat.js
init_kolmafia_polyfill();
var import_kolmafia25 = require("kolmafia");

// node_modules/libram/dist/index.js
init_kolmafia_polyfill();

// node_modules/libram/dist/combat.js
init_kolmafia_polyfill();
var import_kolmafia5 = require("kolmafia");

// node_modules/libram/dist/lib.js
init_kolmafia_polyfill();

// node_modules/libram/node_modules/core-js/modules/es.object.entries.js
init_kolmafia_polyfill();
var $ = require_export(), $entries = require_object_to_array().entries;
$({
  target: "Object",
  stat: !0
}, {
  entries: function(O) {
    return $entries(O);
  }
});

// node_modules/libram/dist/lib.js
var import_flat = __toESM(require_flat5()), import_kolmafia4 = require("kolmafia");

// node_modules/libram/dist/property.js
init_kolmafia_polyfill();

// node_modules/libram/node_modules/core-js/modules/es.object.from-entries.js
init_kolmafia_polyfill();
var $2 = require_export(), iterate = require_iterate(), createProperty = require_create_property();
$2({
  target: "Object",
  stat: !0
}, {
  fromEntries: function(iterable) {
    var obj = {};
    return iterate(iterable, function(k, v) {
      createProperty(obj, k, v);
    }, {
      AS_ENTRIES: !0
    }), obj;
  }
});

// node_modules/libram/dist/property.js
var import_kolmafia2 = require("kolmafia");

// node_modules/libram/dist/propertyTyping.js
init_kolmafia_polyfill();

// node_modules/libram/dist/propertyTypes.js
init_kolmafia_polyfill();
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevProxyServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "ROMOfOptimalityAvailable", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "restUsingChateau", "restUsingCampAwayTent", "requireBoxServants", "requireSewerTestItems", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blankoutUsed", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_entauntaunedToday", "_envyfishEggUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pingPongGame", "_pirateBellowUsed", "_pirateForkUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_seaJellyHarvested", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shrubDecorated", "_silverDreadFlaskUsed", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"], numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_g9Effect", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableQuarters", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chilledToTheBone", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilNEPChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarElbowNC", "lastFriarHeartNC", "lastFriarNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pingpongSkill", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "rockinRobinProgress", "ROMOfOptimalityCost", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rumpelstiltskinTurnsUsed", "rumpelstiltskinKidsRescued", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_astralDrops", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chipBags", "_chocolateCigarsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cookbookbatCrafting", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_leafblowerML", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_miniMartiniDrops", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_speakeasyFreeFights", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed"], monsterProperties = ["beGregariousMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "screencappedMonster", "spookyPuttyMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_voteMonster"], locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation"], stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventure", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "latteModifier", "latteUnlocks", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextAdventure", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "retroCapeSuperhero", "retroCapeWashingInstructions", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpEVE", "questESpJunglePun", "questESpGore", "questESpClipper", "questESpFakeMedium", "questESpSerum", "questESpSmokes", "questESpOutOfOrder", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11MacGuffin", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12War", "questL12HippyFrat", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "royalty", "scriptMRUList", "seahorseName", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trainsetConfiguration", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_LastPirateRealmIsland", "_locketMonstersFought", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_roboDrinks", "_roninStoragePulls", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"], numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489"], familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar"], statProperties = ["nsChallenge1", "snojoSetting"], phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum"];

// node_modules/libram/dist/propertyTyping.js
var booleanPropertiesSet = new Set(booleanProperties), numericPropertiesSet = new Set(numericProperties), numericOrStringPropertiesSet = new Set(numericOrStringProperties), stringPropertiesSet = new Set(stringProperties), locationPropertiesSet = new Set(locationProperties), monsterPropertiesSet = new Set(monsterProperties), familiarPropertiesSet = new Set(familiarProperties), statPropertiesSet = new Set(statProperties), phylumPropertiesSet = new Set(phylumProperties);
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}

// node_modules/libram/dist/property.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty(obj, key, value) {
  return key = _toPropertyKey(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
}
function _arrayLikeToArray(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var createPropertyGetter = function(transform) {
  return function(property, default_) {
    var value = (0, import_kolmafia2.getProperty)(property);
    return default_ !== void 0 && value === "" ? default_ : transform(value, property);
  };
}, createMafiaClassPropertyGetter = function(Type, toType) {
  return createPropertyGetter(function(value) {
    if (value === "")
      return null;
    var v = toType(value);
    return v === Type.none ? null : v;
  });
}, getString = createPropertyGetter(function(value) {
  return value;
}), getCommaSeparated = createPropertyGetter(function(value) {
  return value.split(/, ?/);
}), getBoolean = createPropertyGetter(function(value) {
  return value === "true";
}), getNumber = createPropertyGetter(function(value) {
  return Number(value);
}), getBounty = createMafiaClassPropertyGetter(import_kolmafia2.Bounty, import_kolmafia2.toBounty), getClass = createMafiaClassPropertyGetter(import_kolmafia2.Class, import_kolmafia2.toClass), getCoinmaster = createMafiaClassPropertyGetter(import_kolmafia2.Coinmaster, import_kolmafia2.toCoinmaster), getEffect = createMafiaClassPropertyGetter(import_kolmafia2.Effect, import_kolmafia2.toEffect), getElement = createMafiaClassPropertyGetter(import_kolmafia2.Element, import_kolmafia2.toElement), getFamiliar = createMafiaClassPropertyGetter(import_kolmafia2.Familiar, import_kolmafia2.toFamiliar), getItem = createMafiaClassPropertyGetter(import_kolmafia2.Item, import_kolmafia2.toItem), getLocation = createMafiaClassPropertyGetter(import_kolmafia2.Location, import_kolmafia2.toLocation), getMonster = createMafiaClassPropertyGetter(import_kolmafia2.Monster, import_kolmafia2.toMonster), getPhylum = createMafiaClassPropertyGetter(import_kolmafia2.Phylum, import_kolmafia2.toPhylum), getServant = createMafiaClassPropertyGetter(import_kolmafia2.Servant, import_kolmafia2.toServant), getSkill = createMafiaClassPropertyGetter(import_kolmafia2.Skill, import_kolmafia2.toSkill), getSlot = createMafiaClassPropertyGetter(import_kolmafia2.Slot, import_kolmafia2.toSlot), getStat = createMafiaClassPropertyGetter(import_kolmafia2.Stat, import_kolmafia2.toStat), getThrall = createMafiaClassPropertyGetter(import_kolmafia2.Thrall, import_kolmafia2.toThrall);
function get(property, _default) {
  var value = getString(property);
  if (isBooleanProperty(property)) {
    var _getBoolean;
    return (_getBoolean = getBoolean(property, _default)) !== null && _getBoolean !== void 0 ? _getBoolean : !1;
  } else if (isNumericProperty(property)) {
    var _getNumber;
    return (_getNumber = getNumber(property, _default)) !== null && _getNumber !== void 0 ? _getNumber : 0;
  } else {
    if (isNumericOrStringProperty(property))
      return value.match(/^\d+$/) ? parseInt(value) : value;
    if (isLocationProperty(property))
      return getLocation(property, _default);
    if (isMonsterProperty(property))
      return getMonster(property, _default);
    if (isFamiliarProperty(property))
      return getFamiliar(property, _default);
    if (isStatProperty(property))
      return getStat(property, _default);
    if (isPhylumProperty(property))
      return getPhylum(property, _default);
    if (isStringProperty(property))
      return value;
  }
  return _default instanceof import_kolmafia2.Location ? getLocation(property, _default) : _default instanceof import_kolmafia2.Monster ? getMonster(property, _default) : _default instanceof import_kolmafia2.Familiar ? getFamiliar(property, _default) : _default instanceof import_kolmafia2.Stat ? getStat(property, _default) : _default instanceof import_kolmafia2.Phylum ? getPhylum(property, _default) : typeof _default == "boolean" ? value === "true" ? !0 : value === "false" ? !1 : _default : typeof _default == "number" ? value === "" ? _default : parseInt(value) : value === "" ? _default === void 0 ? "" : _default : value;
}
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0, import_kolmafia2.setProperty)(property, stringValue);
}
function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), prop = _Object$entries$_i[0], value = _Object$entries$_i[1];
    _set(prop, value);
  }
}
function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 1), prop = _ref2[0];
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
var PropertiesManager = /* @__PURE__ */ function() {
  function PropertiesManager2() {
    _classCallCheck(this, PropertiesManager2), _defineProperty(this, "properties", {});
  }
  return _createClass(PropertiesManager2, [{
    key: "storedValues",
    get: function() {
      return this.properties;
    }
  }, {
    key: "set",
    value: function(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), propertyName = _Object$entries2$_i[0], propertyValue = _Object$entries2$_i[1];
        this.properties[propertyName] === void 0 && (this.properties[propertyName] = get(propertyName)), _set(propertyName, propertyValue);
      }
    }
  }, {
    key: "setChoices",
    value: function(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(function(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2), choiceNumber = _ref6[0], choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
  }, {
    key: "setChoice",
    value: function(choiceToSet, value) {
      this.setChoices(_defineProperty({}, choiceToSet, value));
    }
  }, {
    key: "reset",
    value: function() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++)
        properties[_key] = arguments[_key];
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3], value = this.properties[property];
        value && _set(property, value);
      }
    }
  }, {
    key: "resetAll",
    value: function() {
      setProperties(this.properties);
    }
  }, {
    key: "clear",
    value: function() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
        properties[_key2] = arguments[_key2];
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        this.properties[property] && delete this.properties[property];
      }
    }
  }, {
    key: "clearAll",
    value: function() {
      this.properties = {};
    }
  }, {
    key: "setMinimumValue",
    value: function(property, value) {
      return get(property, 0) < value ? (this.set(_defineProperty({}, property, value)), !0) : !1;
    }
  }, {
    key: "setMaximumValue",
    value: function(property, value) {
      return get(property, 0) > value ? (this.set(_defineProperty({}, property, value)), !0) : !1;
    }
  }, {
    key: "clone",
    value: function() {
      var newGuy = new PropertiesManager2();
      return newGuy.properties = this.storedValues, newGuy;
    }
  }, {
    key: "clamp",
    value: function(property, min, max) {
      if (max < min)
        return !1;
      var start = get(property);
      return this.setMinimumValue(property, min), this.setMaximumValue(property, max), start !== get(property);
    }
  }, {
    key: "equals",
    value: function(other) {
      var thisProps = Object.entries(this.storedValues), otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size)
        return !1;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2), propertyName = _thisProps$_i[0], propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue)
          return !1;
      }
      return !0;
    }
  }, {
    key: "merge",
    value: function(other) {
      var newGuy = new PropertiesManager2();
      return newGuy.properties = _objectSpread(_objectSpread({}, this.properties), other.properties), newGuy;
    }
  }], [{
    key: "merge",
    value: function() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
        mergees[_key3] = arguments[_key3];
      return mergees.length === 0 ? new PropertiesManager2() : mergees.reduce(function(a, b) {
        return a.merge(b);
      });
    }
  }]), PropertiesManager2;
}();

// node_modules/libram/dist/template-string.js
init_kolmafia_polyfill();
var import_kolmafia3 = require("kolmafia");

// node_modules/libram/dist/utils.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit2(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
}
function _iterableToArray(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray2(arr);
}
function _arrayLikeToArray2(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function notNull(value) {
  return value !== null;
}
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
function arrayToCountedMap(array) {
  if (!Array.isArray(array))
    return array;
  var map = /* @__PURE__ */ new Map();
  return array.forEach(function(item6) {
    map.set(item6, (map.get(item6) || 0) + 1);
  }), map;
}
function countedMapToArray(map) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(function(_ref2) {
    var _ref3 = _slicedToArray2(_ref2, 2), item6 = _ref3[0], quantity = _ref3[1];
    return Array(quantity).fill(item6);
  })));
}
function countedMapToString(map) {
  return _toConsumableArray(map).map(function(_ref4) {
    var _ref5 = _slicedToArray2(_ref4, 2), item6 = _ref5[0], quantity = _ref5[1];
    return "".concat(quantity, " x ").concat(item6);
  }).join(", ");
}
function sum(addends, mappingFunction) {
  return addends.reduce(function(subtotal, element) {
    return subtotal + mappingFunction(element);
  }, 0);
}
function sumNumbers(addends) {
  return sum(addends, function(x) {
    return x;
  });
}
function arrayContains(item6, array) {
  return array.includes(item6);
}
function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort(), sortedB = _toConsumableArray(b).sort();
  return a.length === b.length && sortedA.every(function(item6, index) {
    return item6 === sortedB[index];
  });
}
function splitByCommasWithEscapes(str) {
  var returnValue = [], ignoreNext = !1, currentString = "", _iterator2 = _createForOfIteratorHelper(str.split("")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var char = _step2.value;
      char === "\\" ? ignoreNext = !0 : (char == "," && !ignoreNext ? (returnValue.push(currentString.trim()), currentString = "") : currentString += char, ignoreNext = !1);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return returnValue.push(currentString.trim()), returnValue;
}

// node_modules/libram/dist/template-string.js
var concatTemplateString = function(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    placeholders[_key - 1] = arguments[_key];
  return literals.raw.reduce(function(acc, literal, i) {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
}, createSingleConstant = function(Type) {
  var tagFunction = function(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
      placeholders[_key2 - 1] = arguments[_key2];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    return Type.get(input);
  };
  return tagFunction.none = Type.none, tagFunction;
}, createPluralConstant = function(Type) {
  return function(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)
      placeholders[_key3 - 1] = arguments[_key3];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    return input === "" ? Type.all() : Type.get(splitByCommasWithEscapes(input));
  };
}, $bounty = createSingleConstant(import_kolmafia3.Bounty), $bounties = createPluralConstant(import_kolmafia3.Bounty), $class = createSingleConstant(import_kolmafia3.Class), $classes = createPluralConstant(import_kolmafia3.Class), $coinmaster = createSingleConstant(import_kolmafia3.Coinmaster), $coinmasters = createPluralConstant(import_kolmafia3.Coinmaster), $effect = createSingleConstant(import_kolmafia3.Effect), $effects = createPluralConstant(import_kolmafia3.Effect), $element = createSingleConstant(import_kolmafia3.Element), $elements = createPluralConstant(import_kolmafia3.Element), $familiar = createSingleConstant(import_kolmafia3.Familiar), $familiars = createPluralConstant(import_kolmafia3.Familiar), $item = createSingleConstant(import_kolmafia3.Item), $items = createPluralConstant(import_kolmafia3.Item), $location = createSingleConstant(import_kolmafia3.Location), $locations = createPluralConstant(import_kolmafia3.Location), $monster = createSingleConstant(import_kolmafia3.Monster), $monsters = createPluralConstant(import_kolmafia3.Monster), $phylum = createSingleConstant(import_kolmafia3.Phylum), $phyla = createPluralConstant(import_kolmafia3.Phylum), $servant = createSingleConstant(import_kolmafia3.Servant), $servants = createPluralConstant(import_kolmafia3.Servant), $skill = createSingleConstant(import_kolmafia3.Skill), $skills = createPluralConstant(import_kolmafia3.Skill), $slot = createSingleConstant(import_kolmafia3.Slot), $slots = createPluralConstant(import_kolmafia3.Slot), $stat = createSingleConstant(import_kolmafia3.Stat), $stats = createPluralConstant(import_kolmafia3.Stat), $thrall = createSingleConstant(import_kolmafia3.Thrall), $thralls = createPluralConstant(import_kolmafia3.Thrall), $path = createSingleConstant(import_kolmafia3.Path), $paths = createPluralConstant(import_kolmafia3.Path);

// node_modules/libram/dist/lib.js
var _templateObject;
var _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties2(Constructor.prototype, protoProps), staticProps && _defineProperties2(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey2(arg) {
  var key = _toPrimitive2(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive2(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _inherits(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _wrapNativeSuper(Class5) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function(Class6) {
    if (Class6 === null || !_isNativeFunction(Class6))
      return Class6;
    if (typeof Class6 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache != "undefined") {
      if (_cache.has(Class6))
        return _cache.get(Class6);
      _cache.set(Class6, Wrapper);
    }
    function Wrapper() {
      return _construct(Class6, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(Class6.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, Class6);
  }, _wrapNativeSuper(Class5);
}
function _construct(Parent, args, Class5) {
  return _isNativeReflectConstruct() ? _construct = Reflect.construct.bind() : _construct = function(Parent2, args2, Class6) {
    var a = [null];
    a.push.apply(a, args2);
    var Constructor = Function.bind.apply(Parent2, a), instance = new Constructor();
    return Class6 && _setPrototypeOf(instance, Class6.prototype), instance;
  }, _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf(o);
}
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray3(o, minLen);
  }
}
function _arrayLikeToArray3(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit3(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function isSong(skillOrEffect) {
  if (skillOrEffect instanceof import_kolmafia4.Effect && skillOrEffect.attributes.includes("song"))
    return !0;
  var skill2 = skillOrEffect instanceof import_kolmafia4.Effect ? (0, import_kolmafia4.toSkill)(skillOrEffect) : skillOrEffect;
  return skill2.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill2.buff;
}
function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if (thing instanceof import_kolmafia4.Effect)
    return (0, import_kolmafia4.haveEffect)(thing) >= quantity;
  if (thing instanceof import_kolmafia4.Familiar)
    return (0, import_kolmafia4.haveFamiliar)(thing);
  if (thing instanceof import_kolmafia4.Item)
    return (0, import_kolmafia4.availableAmount)(thing) >= quantity;
  if (thing instanceof import_kolmafia4.Servant)
    return (0, import_kolmafia4.haveServant)(thing);
  if (thing instanceof import_kolmafia4.Skill)
    return (0, import_kolmafia4.haveSkill)(thing);
  if (thing instanceof import_kolmafia4.Thrall) {
    var thrall = (0, import_kolmafia4.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return !1;
}
function haveInCampground(item6) {
  return Object.keys((0, import_kolmafia4.getCampground)()).map(function(i) {
    return import_kolmafia4.Item.get(i);
  }).includes(item6);
}
var Wanderer;
(function(Wanderer2) {
  Wanderer2.Digitize = "Digitize Monster", Wanderer2.Enamorang = "Enamorang Monster", Wanderer2.Familiar = "Familiar", Wanderer2.Holiday = "Holiday Monster", Wanderer2.Kramco = "Kramco", Wanderer2.Nemesis = "Nemesis Assassin", Wanderer2.Portscan = "portscan.edu", Wanderer2.Romantic = "Romantic Monster", Wanderer2.Vote = "Vote Monster";
})(Wanderer || (Wanderer = {}));
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, maxTurns = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 500;
  return (0, import_kolmafia4.getCounters)(counterName, minTurns, maxTurns) === counterName;
}
function haveWandererCounter(wanderer) {
  if (deterministicWanderers.includes(wanderer))
    return haveCounter(wanderer);
  var begin = wanderer + " window begin", end = wanderer + " window end";
  return haveCounter(begin) || haveCounter(end);
}
function getKramcoWandererChance() {
  var fights = get("_sausageFights"), lastFight = get("_lastSausageMonsterTurn"), totalTurns = (0, import_kolmafia4.totalTurnsPlayed)();
  if (fights < 1)
    return lastFight === totalTurns && (0, import_kolmafia4.myTurncount)() < 1 ? 0.5 : 1;
  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.max(0, fights - 5) ** 3));
}
function getFoldGroup(item6) {
  return Object.entries((0, import_kolmafia4.getRelated)(item6, "fold")).sort(function(_ref, _ref2) {
    var _ref3 = _slicedToArray3(_ref, 2), a = _ref3[1], _ref4 = _slicedToArray3(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map(function(_ref5) {
    var _ref6 = _slicedToArray3(_ref5, 1), i = _ref6[0];
    return import_kolmafia4.Item.get(i);
  });
}
function getAverage(range) {
  var _range$match;
  if (range.indexOf("-") < 0)
    return Number(range);
  var _ref7 = (_range$match = range.match(/(-?[0-9]+)-(-?[0-9]+)/)) !== null && _range$match !== void 0 ? _range$match : ["0", "0", "0"], _ref8 = _slicedToArray3(_ref7, 3), lower = _ref8[1], upper = _ref8[2];
  return (Number(lower) + Number(upper)) / 2;
}
function getAverageAdventures(item6) {
  return getAverage(item6.adventures);
}
function uneffect(effect) {
  return (0, import_kolmafia4.cliExecute)("uneffect ".concat(effect.name));
}
function questStep(questName) {
  var stringStep = get(questName);
  if (stringStep === "unstarted")
    return -1;
  if (stringStep === "started")
    return 0;
  if (stringStep === "finished" || stringStep === "")
    return 999;
  if (stringStep.substring(0, 4) !== "step")
    throw new Error("Quest state parsing error.");
  return parseInt(stringStep.substring(4), 10);
}
var EnsureError = /* @__PURE__ */ function(_Error) {
  _inherits(EnsureError2, _Error);
  var _super = _createSuper(EnsureError2);
  function EnsureError2(cause, reason) {
    var _this;
    return _classCallCheck2(this, EnsureError2), _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : "")), _this.name = "Ensure Error", _this;
  }
  return _createClass2(EnsureError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if ((0, import_kolmafia4.haveEffect)(ef) < turns) {
    if (ef.default === null)
      throw new EnsureError(ef, "No default action");
    if (!(0, import_kolmafia4.cliExecute)(ef.default) || (0, import_kolmafia4.haveEffect)(ef) === 0)
      throw new EnsureError(ef);
  }
}
var valueMap = /* @__PURE__ */ new Map(), MALL_VALUE_MODIFIER = 0.9;
function getSaleValue() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++)
    items[_key] = arguments[_key];
  return items.map(function(item6) {
    return valueMap.has(item6) || (item6.discardable ? valueMap.set(item6, (0, import_kolmafia4.mallPrice)(item6) > Math.max(2 * (0, import_kolmafia4.autosellPrice)(item6), 100) ? MALL_VALUE_MODIFIER * (0, import_kolmafia4.mallPrice)(item6) : (0, import_kolmafia4.autosellPrice)(item6)) : valueMap.set(item6, (0, import_kolmafia4.mallPrice)(item6) > 100 ? MALL_VALUE_MODIFIER * (0, import_kolmafia4.mallPrice)(item6) : 0)), valueMap.get(item6) || 0;
  }).reduce(function(s, price2) {
    return s + price2;
  }, 0) / items.length;
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
function getTodaysHolidayWanderers() {
  return (0, import_kolmafia4.holiday)().split("/").map(function(holiday2) {
    var _holidayWanderers$get;
    return (_holidayWanderers$get = holidayWanderers.get(holiday2)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  }).flat();
}
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Moxie"])))]]), telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["cold"])))]]);

// node_modules/libram/dist/combat.js
var _templateObject2, _templateObject210;
function _get() {
  return typeof Reflect != "undefined" && Reflect.get ? _get = Reflect.get.bind() : _get = function(target, property, receiver) {
    var base = _superPropBase(target, property);
    if (!!base) {
      var desc = Object.getOwnPropertyDescriptor(base, property);
      return desc.get ? desc.get.call(arguments.length < 3 ? target : receiver) : desc.value;
    }
  }, _get.apply(this, arguments);
}
function _superPropBase(object, property) {
  for (; !Object.prototype.hasOwnProperty.call(object, property) && (object = _getPrototypeOf2(object), object !== null); )
    ;
  return object;
}
function _createForOfIteratorHelper2(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray4(arr) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray4(o, minLen);
  }
}
function _iterableToArray2(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray4(arr);
}
function _arrayLikeToArray4(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _defineProperty2(obj, key, value) {
  return key = _toPropertyKey3(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey3(descriptor.key), descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties3(Constructor.prototype, protoProps), staticProps && _defineProperties3(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey3(arg) {
  var key = _toPrimitive3(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive3(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _inherits2(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf2(subClass, superClass);
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function() {
    var Super = _getPrototypeOf2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn2(this, result);
  };
}
function _possibleConstructorReturn2(self2, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized2(self2);
}
function _assertThisInitialized2(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _wrapNativeSuper2(Class5) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper2 = function(Class6) {
    if (Class6 === null || !_isNativeFunction2(Class6))
      return Class6;
    if (typeof Class6 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache != "undefined") {
      if (_cache.has(Class6))
        return _cache.get(Class6);
      _cache.set(Class6, Wrapper);
    }
    function Wrapper() {
      return _construct2(Class6, arguments, _getPrototypeOf2(this).constructor);
    }
    return Wrapper.prototype = Object.create(Class6.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf2(Wrapper, Class6);
  }, _wrapNativeSuper2(Class5);
}
function _construct2(Parent, args, Class5) {
  return _isNativeReflectConstruct2() ? _construct2 = Reflect.construct.bind() : _construct2 = function(Parent2, args2, Class6) {
    var a = [null];
    a.push.apply(a, args2);
    var Constructor = Function.bind.apply(Parent2, a), instance = new Constructor();
    return Class6 && _setPrototypeOf2(instance, Class6.prototype), instance;
  }, _construct2.apply(null, arguments);
}
function _isNativeReflectConstruct2() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _isNativeFunction2(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf2(o, p) {
  return _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf2(o, p);
}
function _getPrototypeOf2(o) {
  return _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf2(o);
}
function _taggedTemplateLiteral2(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var MACRO_NAME = "Script Autoattack Macro";
function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : MACRO_NAME, macroMatches = (0, import_kolmafia5.xpath)((0, import_kolmafia5.visitUrl)("account_combatmacros.php"), '//select[@name="macroid"]/option[text()="'.concat(name, '"]/@value'));
  if (macroMatches.length === 0) {
    (0, import_kolmafia5.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0, import_kolmafia5.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    return parseInt((0, import_kolmafia5.xpath)(newMacroText, "//input[@name=".concat(name, "]/@value"))[0], 10);
  } else
    return parseInt(macroMatches[0], 10);
}
function itemOrNameToItem(itemOrName) {
  return typeof itemOrName == "string" ? import_kolmafia5.Item.get(itemOrName) : itemOrName;
}
var substringCombatItems = $items(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral2(["spider web, really sticky spider web, dictionary, NG, Cloaca-Cola, yo-yo, top, ball, kite, yo, red potion, blue potion, adder, red button, pile of sand, mushroom, deluxe mushroom"]))), substringCombatSkills = $skills(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral2(["Shoot, Thrust-Smack, Headbutt, Toss, Sing, Disarm, LIGHT, BURN, Extract, Meteor Shower, Cleave, Boil, Slice, Rainbow"])));
function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems))
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  var item6 = itemOrNameToItem(itemOrItems);
  return substringCombatItems.includes(item6) ? (0, import_kolmafia5.toInt)(item6).toString() : item6.name;
}
function itemOrItemsBallsMacroPredicate(itemOrItems) {
  return Array.isArray(itemOrItems) ? itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ") : "hascombatitem ".concat(itemOrItems);
}
function skillOrNameToSkill(skillOrName) {
  return typeof skillOrName == "string" ? import_kolmafia5.Skill.get(skillOrName) : skillOrName;
}
function skillBallsMacroName(skillOrName) {
  var skill2 = skillOrNameToSkill(skillOrName);
  return skill2.name.match(/^[A-Za-z ]+$/) && !substringCombatSkills.includes(skill2) ? skill2.name : (0, import_kolmafia5.toInt)(skill2);
}
var InvalidMacroError = /* @__PURE__ */ function(_Error) {
  _inherits2(InvalidMacroError2, _Error);
  var _super = _createSuper2(InvalidMacroError2);
  function InvalidMacroError2() {
    return _classCallCheck3(this, InvalidMacroError2), _super.apply(this, arguments);
  }
  return _createClass3(InvalidMacroError2);
}(/* @__PURE__ */ _wrapNativeSuper2(Error)), Macro = /* @__PURE__ */ function() {
  function Macro3() {
    _classCallCheck3(this, Macro3), _defineProperty2(this, "components", []), _defineProperty2(this, "name", MACRO_NAME);
  }
  return _createClass3(Macro3, [{
    key: "toString",
    value: function() {
      return (this.components.join(";") + ";").replace(/;;+/g, ";");
    }
  }, {
    key: "rename",
    value: function(name) {
      var returnValue = this.name;
      return this.name = name, returnValue;
    }
  }, {
    key: "save",
    value: function() {
      _set(Macro3.SAVED_MACRO_PROPERTY, this.toString());
    }
  }, {
    key: "step",
    value: function() {
      for (var _ref, _this$components, _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++)
        nextSteps[_key] = arguments[_key];
      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray2(nextSteps.map(function(x) {
        return x instanceof Macro3 ? x.components : [x];
      })));
      return (_this$components = this.components).push.apply(_this$components, _toConsumableArray2(nextStepsStrings.filter(function(s) {
        return s.length > 0;
      }))), this;
    }
  }, {
    key: "submit",
    value: function() {
      var final = this.toString();
      return (0, import_kolmafia5.visitUrl)("fight.php?action=macro&macrotext=".concat((0, import_kolmafia5.urlEncode)(final)), !0, !0);
    }
  }, {
    key: "setAutoAttack",
    value: function() {
      var id = Macro3.cachedMacroIds.get(this.name);
      id === void 0 && (id = getMacroId(this.name), Macro3.cachedMacroIds.set(this.name, id)), !((0, import_kolmafia5.getAutoAttack)() === 99e6 + id && this.toString() === Macro3.cachedAutoAttacks.get(this.name)) && ((0, import_kolmafia5.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0, import_kolmafia5.urlEncode)(this.name), "&macrotext=").concat((0, import_kolmafia5.urlEncode)(this.toString()), "&action=save"), !0, !0), (0, import_kolmafia5.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99e6 + id, "&ajax=1")), Macro3.cachedAutoAttacks.set(this.name, this.toString()));
    }
  }, {
    key: "setAutoAttackAs",
    value: function(name) {
      this.name = name, this.setAutoAttack();
    }
  }, {
    key: "abort",
    value: function() {
      return this.step("abort");
    }
  }, {
    key: "runaway",
    value: function() {
      return this.step("runaway");
    }
  }, {
    key: "if_",
    value: function(condition, ifTrue) {
      return this.step("if ".concat(Macro3.makeBALLSPredicate(condition))).step(ifTrue).step("endif");
    }
  }, {
    key: "ifNot",
    value: function(condition, ifTrue) {
      return this.step("if !(".concat(Macro3.makeBALLSPredicate(condition), ")")).step(ifTrue).step("endif");
    }
  }, {
    key: "while_",
    value: function(condition, contents) {
      return this.step("while ".concat(condition)).step(contents).step("endwhile");
    }
  }, {
    key: "externalIf",
    value: function(condition, ifTrue, ifFalse) {
      return condition ? this.step(ifTrue) : ifFalse ? this.step(ifFalse) : this;
    }
  }, {
    key: "repeat",
    value: function() {
      return this.step("repeat");
    }
  }, {
    key: "skill",
    value: function() {
      for (var _len2 = arguments.length, skills2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
        skills2[_key2] = arguments[_key2];
      return this.step.apply(this, _toConsumableArray2(skills2.map(function(skill3) {
        return "skill ".concat(skillBallsMacroName(skill3));
      })));
    }
  }, {
    key: "trySkill",
    value: function() {
      for (var _len3 = arguments.length, skills2 = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
        skills2[_key3] = arguments[_key3];
      return this.step.apply(this, _toConsumableArray2(skills2.map(function(skill2) {
        return Macro3.if_("hasskill ".concat(skillBallsMacroName(skill2)), Macro3.skill(skill2));
      })));
    }
  }, {
    key: "trySkillRepeat",
    value: function() {
      for (var _len4 = arguments.length, skills2 = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)
        skills2[_key4] = arguments[_key4];
      return this.step.apply(this, _toConsumableArray2(skills2.map(function(skill2) {
        return Macro3.if_("hasskill ".concat(skillBallsMacroName(skill2)), Macro3.skill(skill2).repeat());
      })));
    }
  }, {
    key: "item",
    value: function() {
      for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++)
        items[_key5] = arguments[_key5];
      return this.step.apply(this, _toConsumableArray2(items.map(function(itemOrItems) {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
  }, {
    key: "tryItem",
    value: function() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)
        items[_key6] = arguments[_key6];
      return this.step.apply(this, _toConsumableArray2(items.map(function(item6) {
        return Macro3.if_(itemOrItemsBallsMacroPredicate(item6), "use ".concat(itemOrItemsBallsMacroName(item6)));
      })));
    }
  }, {
    key: "attack",
    value: function() {
      return this.step("attack");
    }
  }, {
    key: "ifHolidayWanderer",
    value: function(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      return todaysWanderers.length === 0 ? this : this.if_(todaysWanderers.map(function(monster) {
        return "monsterid ".concat(monster.id);
      }).join(" || "), macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      return todaysWanderers.length === 0 ? this.step(macro) : this.if_(todaysWanderers.map(function(monster) {
        return "!monsterid ".concat(monster.id);
      }).join(" && "), macro);
    }
  }], [{
    key: "load",
    value: function() {
      var _this;
      return (_this = new this()).step.apply(_this, _toConsumableArray2(get(Macro3.SAVED_MACRO_PROPERTY).split(";")));
    }
  }, {
    key: "clearSaved",
    value: function() {
      (0, import_kolmafia5.removeProperty)(Macro3.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function() {
      var _this2;
      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function() {
      var _iterator = _createForOfIteratorHelper2(Macro3.cachedAutoAttacks.keys()), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _Macro$cachedMacroIds, name = _step.value, id = (_Macro$cachedMacroIds = Macro3.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);
          (0, import_kolmafia5.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1")), Macro3.cachedAutoAttacks.delete(name), Macro3.cachedMacroIds.delete(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "abort",
    value: function() {
      return new this().abort();
    }
  }, {
    key: "runaway",
    value: function() {
      return new this().runaway();
    }
  }, {
    key: "makeBALLSPredicate",
    value: function(condition) {
      var ballsCondition = "";
      if (condition instanceof import_kolmafia5.Monster)
        ballsCondition = "monsterid ".concat(condition.id);
      else if (condition instanceof Array)
        ballsCondition = condition.map(function(mon) {
          return "monsterid ".concat(mon.id);
        }).join(" || "), ballsCondition = "(".concat(ballsCondition, ")");
      else if (condition instanceof import_kolmafia5.Effect)
        ballsCondition = "haseffect ".concat((0, import_kolmafia5.toInt)(condition));
      else if (condition instanceof import_kolmafia5.Skill)
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      else if (condition instanceof import_kolmafia5.Item) {
        if (!condition.combat)
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof import_kolmafia5.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1)
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof import_kolmafia5.Class) {
        if ((0, import_kolmafia5.toInt)(condition) > 6)
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else
        condition instanceof import_kolmafia5.Stat ? ballsCondition = "".concat(condition.toString().toLowerCase(), "class") : ballsCondition = condition;
      return ballsCondition;
    }
  }, {
    key: "if_",
    value: function(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "ifNot",
    value: function(condition, ifTrue) {
      return new this().ifNot(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function() {
      var _this3;
      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function() {
      var _this4;
      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function() {
      var _this5;
      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function() {
      var _this6;
      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function() {
      var _this7;
      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "attack",
    value: function() {
      return new this().attack();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }]), Macro3;
}();
_defineProperty2(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
_defineProperty2(Macro, "cachedMacroIds", /* @__PURE__ */ new Map());
_defineProperty2(Macro, "cachedAutoAttacks", /* @__PURE__ */ new Map());
var StrictMacro = /* @__PURE__ */ function(_Macro) {
  _inherits2(StrictMacro2, _Macro);
  var _super2 = _createSuper2(StrictMacro2);
  function StrictMacro2() {
    return _classCallCheck3(this, StrictMacro2), _super2.apply(this, arguments);
  }
  return _createClass3(StrictMacro2, [{
    key: "skill",
    value: function() {
      for (var _get22, _len7 = arguments.length, skills2 = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++)
        skills2[_key7] = arguments[_key7];
      return (_get22 = _get(_getPrototypeOf2(StrictMacro2.prototype), "skill", this)).call.apply(_get22, [this].concat(skills2));
    }
  }, {
    key: "item",
    value: function() {
      for (var _get32, _len8 = arguments.length, items = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++)
        items[_key8] = arguments[_key8];
      return (_get32 = _get(_getPrototypeOf2(StrictMacro2.prototype), "item", this)).call.apply(_get32, [this].concat(items));
    }
  }, {
    key: "trySkill",
    value: function() {
      for (var _get4, _len9 = arguments.length, skills2 = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++)
        skills2[_key9] = arguments[_key9];
      return (_get4 = _get(_getPrototypeOf2(StrictMacro2.prototype), "trySkill", this)).call.apply(_get4, [this].concat(skills2));
    }
  }, {
    key: "tryItem",
    value: function() {
      for (var _get5, _len10 = arguments.length, items = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++)
        items[_key10] = arguments[_key10];
      return (_get5 = _get(_getPrototypeOf2(StrictMacro2.prototype), "tryItem", this)).call.apply(_get5, [this].concat(items));
    }
  }, {
    key: "trySkillRepeat",
    value: function() {
      for (var _get6, _len11 = arguments.length, skills2 = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++)
        skills2[_key11] = arguments[_key11];
      return (_get6 = _get(_getPrototypeOf2(StrictMacro2.prototype), "trySkillRepeat", this)).call.apply(_get6, [this].concat(skills2));
    }
  }], [{
    key: "skill",
    value: function() {
      var _this8;
      return (_this8 = new this()).skill.apply(_this8, arguments);
    }
  }, {
    key: "item",
    value: function() {
      var _this9;
      return (_this9 = new this()).item.apply(_this9, arguments);
    }
  }, {
    key: "trySkill",
    value: function() {
      var _this10;
      return (_this10 = new this()).trySkill.apply(_this10, arguments);
    }
  }, {
    key: "tryItem",
    value: function() {
      var _this11;
      return (_this11 = new this()).tryItem.apply(_this11, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function() {
      var _this12;
      return (_this12 = new this()).trySkillRepeat.apply(_this12, arguments);
    }
  }]), StrictMacro2;
}(Macro);

// node_modules/libram/dist/maximize.js
init_kolmafia_polyfill();
var import_kolmafia7 = require("kolmafia");

// node_modules/libram/dist/logger.js
init_kolmafia_polyfill();
var import_kolmafia6 = require("kolmafia");
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey4(descriptor.key), descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties4(Constructor.prototype, protoProps), staticProps && _defineProperties4(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty3(obj, key, value) {
  return key = _toPropertyKey4(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey4(arg) {
  var key = _toPrimitive4(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive4(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var defaultHandlers = {
  info: function(message) {
    (0, import_kolmafia6.printHtml)("<b>[Libram]</b> ".concat(message)), (0, import_kolmafia6.logprint)("[Libram] ".concat(message));
  },
  warning: function(message) {
    (0, import_kolmafia6.printHtml)('<span style="background: orange; color: white;"><b>[Libram]</b> '.concat(message, "</span>")), (0, import_kolmafia6.logprint)("[Libram] ".concat(message));
  },
  error: function(_error) {
    (0, import_kolmafia6.printHtml)('<span style="background: red; color: white;"><b>[Libram]</b> '.concat(_error.toString(), "</span>")), (0, import_kolmafia6.logprint)("[Libram] ".concat(_error.toString()));
  }
}, Logger = /* @__PURE__ */ function() {
  function Logger2() {
    _classCallCheck4(this, Logger2), _defineProperty3(this, "handlers", defaultHandlers);
  }
  return _createClass4(Logger2, [{
    key: "setHandler",
    value: function(level, callback) {
      this.handlers[level] = callback;
    }
  }, {
    key: "log",
    value: function(level, message) {
      this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function(message) {
      this.log("info", message);
    }
  }, {
    key: "warning",
    value: function(message) {
      this.log("warning", message);
    }
  }, {
    key: "error",
    value: function(message) {
      this.log("error", message);
    }
  }]), Logger2;
}(), logger_default = new Logger();

// node_modules/libram/dist/maximize.js
var _templateObject3, _templateObject211, _templateObject35, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject92, _templateObject102, _templateObject112, _templateObject122, _templateObject132, _templateObject142, _templateObject152, _templateObject162, _templateObject172, _templateObject182, _templateObject192, _templateObject202, _templateObject212, _templateObject222, _templateObject232, _templateObject242, _templateObject252, _templateObject262, _templateObject272, _templateObject282, _templateObject292, _templateObject302, _templateObject312, _templateObject322, _templateObject332, _templateObject342, _templateObject352, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48;
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray5(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit4(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap), privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  return descriptor.get ? descriptor.get.call(receiver) : descriptor.value;
}
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  return _classApplyDescriptorSet(receiver, descriptor, value), value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver))
    throw new TypeError("attempted to " + action + " private field on non-instance");
  return privateMap.get(receiver);
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set)
    descriptor.set.call(receiver, value);
  else {
    if (!descriptor.writable)
      throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
  }
}
function _defineProperties5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey5(descriptor.key), descriptor);
  }
}
function _createClass5(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties5(Constructor.prototype, protoProps), staticProps && _defineProperties5(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _createForOfIteratorHelper3(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _taggedTemplateLiteral3(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), !0).forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty4(obj, key, value) {
  return key = _toPropertyKey5(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey5(arg) {
  var key = _toPrimitive5(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive5(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray3(arr) {
  return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray5(arr) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray5(o, minLen);
  }
}
function _iterableToArray3(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray5(arr);
}
function _arrayLikeToArray5(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;
  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(_toConsumableArray3(defaultOptions.forceEquip), _toConsumableArray3((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(_toConsumableArray3(defaultOptions.preventEquip), _toConsumableArray3((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(function(item6) {
      var _addendums$forceEquip2;
      return !defaultOptions.forceEquip.includes(item6) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item6));
    }),
    bonusEquip: new Map([].concat(_toConsumableArray3(defaultOptions.bonusEquip), _toConsumableArray3((_addendums$bonusEquip = addendums.bonusEquip) !== null && _addendums$bonusEquip !== void 0 ? _addendums$bonusEquip : []))),
    onlySlot: (_addendums$onlySlot = addendums.onlySlot) !== null && _addendums$onlySlot !== void 0 ? _addendums$onlySlot : defaultOptions.onlySlot,
    preventSlot: [].concat(_toConsumableArray3(defaultOptions.preventSlot), _toConsumableArray3((_addendums$preventSlo = addendums.preventSlot) !== null && _addendums$preventSlo !== void 0 ? _addendums$preventSlo : [])),
    forceUpdate: (_addendums$forceUpdat = addendums.forceUpdate) !== null && _addendums$forceUpdat !== void 0 ? _addendums$forceUpdat : defaultOptions.forceUpdate,
    modes: _objectSpread2(_objectSpread2({}, defaultOptions.modes), (_addendums$modes = addendums.modes) !== null && _addendums$modes !== void 0 ? _addendums$modes : {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: !0,
  updateOnCanEquipChanged: !0,
  useOutfitCaching: !0,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: /* @__PURE__ */ new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: !1,
  modes: {}
};
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"], modeableItems = {
  backupcamera: $item(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral3(["backup camera"]))),
  umbrella: $item(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral3(["unbreakable umbrella"]))),
  snowsuit: $item(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral3(["Snow Suit"]))),
  edpiece: $item(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral3(["The Crown of Ed the Undying"]))),
  retrocape: $item(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral3(["unwrapped knock-off retro superhero cape"]))),
  parka: $item(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral3(["Jurassic Parka"])))
}, modeableState = {
  backupcamera: function() {
    return (0, import_kolmafia7.getProperty)("backupCameraMode");
  },
  umbrella: function() {
    return (0, import_kolmafia7.getProperty)("umbrellaState");
  },
  snowsuit: function() {
    return (0, import_kolmafia7.getProperty)("snowsuit");
  },
  edpiece: function() {
    return (0, import_kolmafia7.getProperty)("edPiece");
  },
  retrocape: function() {
    return (0, import_kolmafia7.getProperty)("retroCapeSuperhero") + " " + (0, import_kolmafia7.getProperty)("retroCapeWashingInstructions");
  },
  parka: function() {
    return (0, import_kolmafia7.getProperty)("parkaMode");
  }
};
function getCurrentModes() {
  var modes = {}, _iterator = _createForOfIteratorHelper3(modeableCommands), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var key = _step.value;
      (0, import_kolmafia7.haveEquipped)(modeableItems[key]) && (modes[key] = modeableState[key]());
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return modes;
}
function applyModes(modes) {
  var _iterator2 = _createForOfIteratorHelper3(modeableCommands), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var command = _step2.value;
      (0, import_kolmafia7.haveEquipped)(modeableItems[command]) && modes[command] !== void 0 && modeableState[command]() !== modes[command] && (0, import_kolmafia7.cliExecute)(command + " " + modes[command]);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
var cachedSlots = $slots(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral3(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"]))), CacheEntry = /* @__PURE__ */ _createClass5(function CacheEntry2(equipment, rider, familiar, canEquipItemCount2, modes) {
  _classCallCheck5(this, CacheEntry2), _defineProperty4(this, "equipment", void 0), _defineProperty4(this, "rider", void 0), _defineProperty4(this, "familiar", void 0), _defineProperty4(this, "canEquipItemCount", void 0), _defineProperty4(this, "modes", void 0), this.equipment = equipment, this.rider = rider, this.familiar = familiar, this.canEquipItemCount = canEquipItemCount2, this.modes = modes;
}), _outfitSlots = /* @__PURE__ */ new WeakMap(), _useHistory = /* @__PURE__ */ new WeakMap(), _maxSize = /* @__PURE__ */ new WeakMap(), OutfitLRUCache = /* @__PURE__ */ function() {
  function OutfitLRUCache2(maxSize) {
    _classCallCheck5(this, OutfitLRUCache2), _classPrivateFieldInitSpec(this, _outfitSlots, {
      writable: !0,
      value: []
    }), _classPrivateFieldInitSpec(this, _useHistory, {
      writable: !0,
      value: []
    }), _classPrivateFieldInitSpec(this, _maxSize, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldSet(this, _maxSize, maxSize);
  }
  return _createClass5(OutfitLRUCache2, [{
    key: "checkConsistent",
    value: function() {
      if (_classPrivateFieldGet(this, _useHistory).length !== _classPrivateFieldGet(this, _outfitSlots).length || !_toConsumableArray3(_classPrivateFieldGet(this, _useHistory)).sort().every(function(value, index) {
        return value === index;
      }))
        throw new Error("Outfit cache consistency failed.");
    }
  }, {
    key: "promote",
    value: function(index) {
      _classPrivateFieldSet(this, _useHistory, [index].concat(_toConsumableArray3(_classPrivateFieldGet(this, _useHistory).filter(function(i) {
        return i !== index;
      })))), this.checkConsistent();
    }
  }, {
    key: "get",
    value: function(key) {
      var index = _classPrivateFieldGet(this, _outfitSlots).indexOf(key);
      if (!(index < 0))
        return this.promote(index), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function(key) {
      var lastUseIndex = void 0;
      if (_classPrivateFieldGet(this, _outfitSlots).length >= _classPrivateFieldGet(this, _maxSize)) {
        if (lastUseIndex = _classPrivateFieldGet(this, _useHistory).pop(), lastUseIndex === void 0)
          throw new Error("Outfit cache consistency failed.");
        return _classPrivateFieldGet(this, _useHistory).splice(0, 0, lastUseIndex), _classPrivateFieldGet(this, _outfitSlots)[lastUseIndex] = key, this.checkConsistent(), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(this, _outfitSlots).push(key) - 1;
        return _classPrivateFieldGet(this, _useHistory).splice(0, 0, index), this.checkConsistent(), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function() {
      _classPrivateFieldSet(this, _outfitSlots, []), _classPrivateFieldSet(this, _useHistory, []);
    }
  }]), OutfitLRUCache2;
}();
_defineProperty4(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");
function saveOutfit(name) {
  (0, import_kolmafia7.cliExecute)("outfit save ".concat(name));
}
var cachedObjectives = {}, outfitCache = new OutfitLRUCache(6), cachedStats = [0, 0, 0], cachedCanEquipItemCount = 0;
function canEquipItemCount() {
  var stats = $stats(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral3(["Muscle, Mysticality, Moxie"]))).map(function(stat) {
    return Math.min((0, import_kolmafia7.myBasestat)(stat), 300);
  });
  return stats.every(function(value, index) {
    return value === cachedStats[index];
  }) || (cachedStats = stats, cachedCanEquipItemCount = import_kolmafia7.Item.all().filter(function(item6) {
    return (0, import_kolmafia7.canEquip)(item6);
  }).length), cachedCanEquipItemCount;
}
function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];
  return entry ? options.updateOnFamiliarChange && (0, import_kolmafia7.myFamiliar)() !== entry.familiar ? (logger_default.warning("Equipment found in maximize cache but familiar is different."), null) : options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount() ? (logger_default.warning("Equipment found in maximize cache but equippable item list is out of date."), null) : entry : null;
}
function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : void 0;
  if (outfitName) {
    (0, import_kolmafia7.isWearingOutfit)(outfitName) || (0, import_kolmafia7.outfit)(outfitName);
    var familiarEquip = entry.equipment.get($slot(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral3(["familiar"]))));
    familiarEquip && (0, import_kolmafia7.equip)($slot(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral3(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = _createForOfIteratorHelper3(entry.equipment), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var _step3$value = _slicedToArray4(_step3.value, 2), slot = _step3$value[0], item6 = _step3$value[1];
        (0, import_kolmafia7.equippedItem)(slot) !== item6 && (0, import_kolmafia7.availableAmount)(item6) > 0 && (0, import_kolmafia7.equip)(slot, item6);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);
      logger_default.info("Saving equipment to outfit ".concat(_outfitName, ".")), saveOutfit(_outfitName);
    }
  }
  (0, import_kolmafia7.equippedAmount)($item(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral3(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral3(["Crown of Thrones"])))) && (0, import_kolmafia7.enthroneFamiliar)(entry.rider.get($item(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral3(["Crown of Thrones"])))) || $familiar.none), (0, import_kolmafia7.equippedAmount)($item(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral3(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral3(["Buddy Bjorn"])))) && (0, import_kolmafia7.bjornifyFamiliar)(entry.rider.get($item(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral3(["Buddy Bjorn"])))) || $familiar.none), applyModes(_objectSpread2(_objectSpread2({}, entry.modes), options.modes));
}
var slotStructure = [$slots(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral3(["hat"]))), $slots(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral3(["back"]))), $slots(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral3(["shirt"]))), $slots(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral3(["weapon, off-hand"]))), $slots(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral3(["pants"]))), $slots(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral3(["acc1, acc2, acc3"]))), $slots(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral3(["familiar"])))];
function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, success = !0, _iterator4 = _createForOfIteratorHelper3(slotStructure), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var slotGroup = _step4.value, desiredSlots = slotGroup.map(function(slot) {
        var _entry$equipment$get;
        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(function(_ref) {
        var _ref2 = _slicedToArray4(_ref, 2), item6 = _ref2[1];
        return item6 !== null;
      }), desiredSet = desiredSlots.map(function(_ref3) {
        var _ref4 = _slicedToArray4(_ref3, 2), item6 = _ref4[1];
        return item6;
      }), equippedSet = desiredSlots.map(function(_ref5) {
        var _ref6 = _slicedToArray4(_ref5, 1), slot = _ref6[0];
        return (0, import_kolmafia7.equippedItem)(slot);
      });
      setEqual(desiredSet, equippedSet) || (warn && logger_default.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), ".")), success = !1);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return (0, import_kolmafia7.equippedAmount)($item(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral3(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral3(["Crown of Thrones"])))) && entry.rider.get($item(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral3(["Crown of Thrones"])))) !== (0, import_kolmafia7.myEnthronedFamiliar)() && (warn && logger_default.warning("Failed to apply ".concat(entry.rider.get($item(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral3(["Crown of Thrones"])))), " in ").concat($item(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral3(["Crown of Thrones"]))), ".")), success = !1), (0, import_kolmafia7.equippedAmount)($item(_templateObject292 || (_templateObject292 = _taggedTemplateLiteral3(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject302 || (_templateObject302 = _taggedTemplateLiteral3(["Buddy Bjorn"])))) && entry.rider.get($item(_templateObject312 || (_templateObject312 = _taggedTemplateLiteral3(["Buddy Bjorn"])))) !== (0, import_kolmafia7.myBjornedFamiliar)() && (warn && logger_default.warning("Failed to apply".concat(entry.rider.get($item(_templateObject322 || (_templateObject322 = _taggedTemplateLiteral3(["Buddy Bjorn"])))), " in ").concat($item(_templateObject332 || (_templateObject332 = _taggedTemplateLiteral3(["Buddy Bjorn"]))), ".")), success = !1), success;
}
function saveCached(cacheKey, options) {
  var equipment = /* @__PURE__ */ new Map(), rider = /* @__PURE__ */ new Map(), _iterator5 = _createForOfIteratorHelper3(cachedSlots), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, (0, import_kolmafia7.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject342 || (_templateObject342 = _taggedTemplateLiteral3(["card sleeve"])))) > 0 && equipment.set($slot(_templateObject352 || (_templateObject352 = _taggedTemplateLiteral3(["card-sleeve"]))), (0, import_kolmafia7.equippedItem)($slot(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral3(["card-sleeve"]))))), (0, import_kolmafia7.equippedAmount)($item(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral3(["Crown of Thrones"])))) > 0 && rider.set($item(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral3(["Crown of Thrones"]))), (0, import_kolmafia7.myEnthronedFamiliar)()), (0, import_kolmafia7.equippedAmount)($item(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral3(["Buddy Bjorn"])))) > 0 && rider.set($item(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral3(["Buddy Bjorn"]))), (0, import_kolmafia7.myBjornedFamiliar)()), options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = _createForOfIteratorHelper3(options.preventSlot), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    options.preventSlot.includes($slot(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral3(["buddy-bjorn"])))) && rider.delete($item(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral3(["Buddy Bjorn"])))), options.preventSlot.includes($slot(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral3(["crown-of-thrones"])))) && rider.delete($item(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral3(["Crown of Thrones"]))));
  }
  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = _createForOfIteratorHelper3(import_kolmafia7.Slot.all()), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        var _slot = _step7.value;
        options.onlySlot.includes(_slot) || equipment.delete(_slot);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    options.onlySlot.includes($slot(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral3(["buddy-bjorn"])))) || rider.delete($item(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral3(["Buddy Bjorn"])))), options.onlySlot.includes($slot(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral3(["crown-of-thrones"])))) || rider.delete($item(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral3(["Crown of Thrones"]))));
  }
  var entry = new CacheEntry(equipment, rider, (0, import_kolmafia7.myFamiliar)(), canEquipItemCount(), _objectSpread2(_objectSpread2({}, getCurrentModes()), options.modes));
  if (cachedObjectives[cacheKey] = entry, options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    logger_default.info("Saving equipment to outfit ".concat(outfitName, ".")), saveOutfit(outfitName);
  }
}
function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options), forceEquip = fullOptions.forceEquip, preventEquip = fullOptions.preventEquip, bonusEquip = fullOptions.bonusEquip, onlySlot = fullOptions.onlySlot, preventSlot = fullOptions.preventSlot, forceUpdate = fullOptions.forceUpdate, objective = _toConsumableArray3(new Set([].concat(_toConsumableArray3(objectives.sort()), _toConsumableArray3(forceEquip.map(function(item6) {
    return "equip ".concat(item6);
  }).sort()), _toConsumableArray3(preventEquip.map(function(item6) {
    return "-equip ".concat(item6);
  }).sort()), _toConsumableArray3(onlySlot.map(function(slot) {
    return "".concat(slot);
  }).sort()), _toConsumableArray3(preventSlot.map(function(slot) {
    return "-".concat(slot);
  }).sort()), _toConsumableArray3(Array.from(bonusEquip.entries()).filter(function(_ref7) {
    var _ref8 = _slicedToArray4(_ref7, 2), bonus = _ref8[1];
    return bonus !== 0;
  }).map(function(_ref9) {
    var _ref10 = _slicedToArray4(_ref9, 2), item6 = _ref10[0], bonus = _ref10[1];
    return "".concat(Math.round(bonus * 100) / 100, " bonus ").concat(item6);
  }).sort())))).join(", "), untouchedSlots = cachedSlots.filter(function(slot) {
    return preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot);
  }), cacheKey = [objective].concat(_toConsumableArray3(untouchedSlots.map(function(slot) {
    return "".concat(slot, ":").concat((0, import_kolmafia7.equippedItem)(slot));
  }).sort())).join("; "), cacheEntry = checkCache(cacheKey, fullOptions);
  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, !1))
      return !0;
    if (logger_default.info("Equipment found in maximize cache, equipping..."), applyCached(cacheEntry, fullOptions), verifyCached(cacheEntry))
      return logger_default.info("Equipped cached ".concat(cacheKey)), !0;
    logger_default.warning("Maximize cache application failed, maximizing...");
  }
  var result = (0, import_kolmafia7.maximize)(objective, !1);
  return saveCached(cacheKey, fullOptions), result;
}
var _maximizeParameters = /* @__PURE__ */ new WeakMap(), _maximizeOptions = /* @__PURE__ */ new WeakMap(), Requirement = /* @__PURE__ */ function() {
  function Requirement2(maximizeParameters, maximizeOptions) {
    _classCallCheck5(this, Requirement2), _classPrivateFieldInitSpec(this, _maximizeParameters, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldInitSpec(this, _maximizeOptions, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters), _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }
  return _createClass5(Requirement2, [{
    key: "maximizeParameters",
    get: function() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
  }, {
    key: "merge",
    value: function(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption3, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot, optionsA = this.maximizeOptions, optionsB = other.maximizeOptions;
      return new Requirement2([].concat(_toConsumableArray3(this.maximizeParameters), _toConsumableArray3(other.maximizeParameters)), {
        updateOnFamiliarChange: optionsA.updateOnFamiliarChange || other.maximizeOptions.updateOnFamiliarChange,
        updateOnCanEquipChanged: optionsA.updateOnCanEquipChanged || other.maximizeOptions.updateOnCanEquipChanged,
        forceEquip: [].concat(_toConsumableArray3((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), _toConsumableArray3((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])).filter(function(x) {
          var _other$maximizeOption2;
          return !((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        preventEquip: [].concat(_toConsumableArray3((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), _toConsumableArray3((_other$maximizeOption3 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption3 !== void 0 ? _other$maximizeOption3 : [])).filter(function(x) {
          var _other$maximizeOption4;
          return !((_other$maximizeOption4 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption4 !== void 0 && _other$maximizeOption4.includes(x));
        }),
        bonusEquip: new Map([].concat(_toConsumableArray3((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), _toConsumableArray3((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(_toConsumableArray3((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), _toConsumableArray3((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(_toConsumableArray3((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), _toConsumableArray3((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : [])),
        forceUpdate: optionsA.forceUpdate || optionsB.forceUpdate
      });
    }
  }, {
    key: "maximize",
    value: function() {
      return maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
  }], [{
    key: "merge",
    value: function(allRequirements) {
      return allRequirements.reduce(function(x, y) {
        return x.merge(y);
      }, new Requirement2([], {}));
    }
  }, {
    key: "maximize",
    value: function() {
      for (var _len = arguments.length, requirements = new Array(_len), _key = 0; _key < _len; _key++)
        requirements[_key] = arguments[_key];
      Requirement2.merge(requirements).maximize();
    }
  }]), Requirement2;
}();

// node_modules/libram/dist/resources/2017/AsdonMartin.js
var AsdonMartin_exports = {};
__export(AsdonMartin_exports, {
  Driving: function() {
    return Driving;
  },
  drive: function() {
    return drive;
  },
  fillTo: function() {
    return fillTo;
  },
  fillWithInventoryTo: function() {
    return fillWithInventoryTo;
  },
  have: function() {
    return have2;
  },
  insertFuel: function() {
    return insertFuel;
  },
  installed: function() {
    return installed;
  }
});
init_kolmafia_polyfill();

// node_modules/libram/node_modules/core-js/modules/es.object.values.js
init_kolmafia_polyfill();
var $3 = require_export(), $values = require_object_to_array().values;
$3({
  target: "Object",
  stat: !0
}, {
  values: function(O) {
    return $values(O);
  }
});

// node_modules/libram/dist/resources/2017/AsdonMartin.js
var import_kolmafia8 = require("kolmafia");
var _templateObject49, _templateObject213, _templateObject310, _templateObject410, _templateObject52, _templateObject62, _templateObject72, _templateObject82, _templateObject93, _templateObject103, _templateObject113, _templateObject123, _templateObject133;
function _slicedToArray5(arr, i) {
  return _arrayWithHoles5(arr) || _iterableToArrayLimit5(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray6(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray6(o, minLen);
  }
}
function _arrayLikeToArray6(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit5(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles5(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral4(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var PriceAge;
(function(PriceAge2) {
  PriceAge2[PriceAge2.HISTORICAL = 0] = "HISTORICAL", PriceAge2[PriceAge2.RECENT = 1] = "RECENT", PriceAge2[PriceAge2.TODAY = 2] = "TODAY";
})(PriceAge || (PriceAge = {}));
function installed() {
  return (0, import_kolmafia8.getWorkshed)() === $item(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral4(["Asdon Martin keyfob"])));
}
function have2() {
  return installed() || have($item(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral4(["Asdon Martin keyfob"]))));
}
var fuelSkiplist = $items(_templateObject310 || (_templateObject310 = _taggedTemplateLiteral4(['cup of "tea", thermos of "whiskey", Lucky Lindy, Bee\'s Knees, Sockdollager, Ish Kabibble, Hot Socks, Phonus Balonus, Flivver, Sloppy Jalopy, glass of "milk"'])));
function priceTooOld(item6) {
  return (0, import_kolmafia8.historicalPrice)(item6) === 0 || (0, import_kolmafia8.historicalAge)(item6) >= 7;
}
function historicalPriceOrMax(item6) {
  var historical = (0, import_kolmafia8.historicalPrice)(item6);
  return historical < 0 ? 999999999 : historical;
}
function mallPriceOrMax(item6) {
  var mall = (0, import_kolmafia8.mallPrice)(item6);
  return mall < 0 ? 999999999 : mall;
}
function price(item6, priceAge) {
  switch (priceAge) {
    case PriceAge.HISTORICAL: {
      var historical = historicalPriceOrMax(item6);
      return historical === 0 ? mallPriceOrMax(item6) : historical;
    }
    case PriceAge.RECENT:
      return priceTooOld(item6) ? mallPriceOrMax(item6) : historicalPriceOrMax(item6);
    case PriceAge.TODAY:
      return mallPriceOrMax(item6);
  }
}
function inventoryItems() {
  return import_kolmafia8.Item.all().filter(isFuelItem).filter(function(item6) {
    return have(item6) && [100, (0, import_kolmafia8.autosellPrice)(item6)].includes(price(item6, PriceAge.RECENT));
  });
}
function calculateFuelUnitCost(it) {
  var priceAge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : PriceAge.RECENT, units = getAverageAdventures(it);
  return price(it, priceAge) / units;
}
function isFuelItem(it) {
  return !(0, import_kolmafia8.isNpcItem)(it) && it.fullness + it.inebriety > 0 && getAverageAdventures(it) > 0 && it.tradeable && it.discardable && !fuelSkiplist.includes(it);
}
function getBestFuels() {
  var allFuel = import_kolmafia8.Item.all().filter(isFuelItem);
  allFuel.filter(function(item6) {
    return (0, import_kolmafia8.historicalPrice)(item6) === 0;
  }).length > 100 && ((0, import_kolmafia8.mallPrices)("food"), (0, import_kolmafia8.mallPrices)("booze"));
  var keyHistorical = function(item6) {
    return calculateFuelUnitCost(item6, PriceAge.HISTORICAL);
  };
  allFuel.sort(function(x, y) {
    return keyHistorical(x) - keyHistorical(y);
  });
  var bestUnitCost = keyHistorical(allFuel[0]), firstBadIndex = allFuel.findIndex(function(item6) {
    return keyHistorical(item6) > 5 * bestUnitCost;
  }), potentialFuel = firstBadIndex > 0 ? allFuel.slice(0, firstBadIndex) : allFuel;
  potentialFuel.filter(function(item6) {
    return priceTooOld(item6);
  }).length > 100 && ((0, import_kolmafia8.mallPrices)("food"), (0, import_kolmafia8.mallPrices)("booze"));
  var key1 = function(item6) {
    return -getAverageAdventures(item6);
  }, key2 = function(item6) {
    return calculateFuelUnitCost(item6, PriceAge.RECENT);
  };
  potentialFuel.sort(function(x, y) {
    return key1(x) - key1(y);
  }), potentialFuel.sort(function(x, y) {
    return key2(x) - key2(y);
  });
  var candidates = potentialFuel.slice(0, 10), key3 = function(item6) {
    return calculateFuelUnitCost(item6, PriceAge.TODAY);
  };
  if (candidates.sort(function(x, y) {
    return key3(x) - key3(y);
  }), calculateFuelUnitCost(candidates[0], PriceAge.TODAY) > 100)
    throw new Error("Could not identify any fuel with efficiency better than 100 meat per fuel. This means something went wrong.");
  return candidates;
}
function insertFuel(it) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, result = (0, import_kolmafia8.visitUrl)("campground.php?action=fuelconvertor&pwd&qty=".concat(quantity, "&iid=").concat((0, import_kolmafia8.toInt)(it), "&go=Convert%21"));
  return result.includes("The display updates with a");
}
function fillTo(targetUnits) {
  if (!installed())
    return !1;
  for (; (0, import_kolmafia8.getFuel)() < targetUnits; ) {
    var _ref = (0, import_kolmafia8.canInteract)() ? getBestFuels() : [$item(_templateObject410 || (_templateObject410 = _taggedTemplateLiteral4(["loaf of soda bread"]))), void 0], _ref2 = _slicedToArray5(_ref, 2), bestFuel = _ref2[0], secondBest = _ref2[1], count = Math.ceil(targetUnits / getAverageAdventures(bestFuel)), ceiling = void 0;
    if (secondBest) {
      var efficiencyOfSecondBest = (0, import_kolmafia8.mallPrice)(secondBest) / getAverageAdventures(secondBest);
      ceiling = Math.ceil(efficiencyOfSecondBest * getAverageAdventures(bestFuel));
    }
    if ((0, import_kolmafia8.canInteract)() ? ceiling ? (0, import_kolmafia8.buy)(count, bestFuel, ceiling) : (0, import_kolmafia8.buy)(count, bestFuel) : (0, import_kolmafia8.retrieveItem)(count, bestFuel), !insertFuel(bestFuel, Math.min((0, import_kolmafia8.itemAmount)(bestFuel), count)))
      throw new Error("Failed to fuel Asdon Martin.");
  }
  return (0, import_kolmafia8.getFuel)() >= targetUnits;
}
function fillWithBestInventoryItem(targetUnits) {
  var options = inventoryItems().sort(function(a, b) {
    return getAverageAdventures(b) / (0, import_kolmafia8.autosellPrice)(b) - getAverageAdventures(a) / (0, import_kolmafia8.autosellPrice)(a);
  });
  if (options.length === 0)
    return !1;
  var best = options[0];
  if ((0, import_kolmafia8.autosellPrice)(best) / getAverageAdventures(best) > 100)
    return !1;
  var amountToUse = clamp(Math.ceil(targetUnits / getAverageAdventures(best)), 0, (0, import_kolmafia8.itemAmount)(best));
  return insertFuel(best, amountToUse);
}
function fillWithInventoryTo(targetUnits) {
  if (!installed())
    return !1;
  for (var continueFuelingFromInventory = !0; (0, import_kolmafia8.getFuel)() < targetUnits && continueFuelingFromInventory; )
    continueFuelingFromInventory && (continueFuelingFromInventory = fillWithBestInventoryItem(targetUnits));
  return fillTo(targetUnits);
}
var Driving = {
  Obnoxiously: $effect(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral4(["Driving Obnoxiously"]))),
  Stealthily: $effect(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral4(["Driving Stealthily"]))),
  Wastefully: $effect(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral4(["Driving Wastefully"]))),
  Safely: $effect(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral4(["Driving Safely"]))),
  Recklessly: $effect(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral4(["Driving Recklessly"]))),
  Intimidatingly: $effect(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral4(["Driving Intimidatingly"]))),
  Quickly: $effect(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral4(["Driving Quickly"]))),
  Observantly: $effect(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral4(["Driving Observantly"]))),
  Waterproofly: $effect(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral4(["Driving Waterproofly"])))
};
function drive(style) {
  var turns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, preferInventory = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (!Object.values(Driving).includes(style) || !installed())
    return !1;
  if ((0, import_kolmafia8.haveEffect)(style) >= turns)
    return !0;
  var fuelNeeded = 37 * Math.ceil((turns - (0, import_kolmafia8.haveEffect)(style)) / 30);
  for ((preferInventory ? fillWithInventoryTo : fillTo)(fuelNeeded); (0, import_kolmafia8.getFuel)() >= 37 && (0, import_kolmafia8.haveEffect)(style) < turns; )
    (0, import_kolmafia8.cliExecute)("asdonmartin drive ".concat(style.name.replace("Driving ", "")));
  return (0, import_kolmafia8.haveEffect)(style) >= turns;
}

// node_modules/libram/dist/resources/index.js
init_kolmafia_polyfill();

// node_modules/libram/dist/Copier.js
init_kolmafia_polyfill();
function _defineProperties6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey6(descriptor.key), descriptor);
  }
}
function _createClass6(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties6(Constructor.prototype, protoProps), staticProps && _defineProperties6(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperty5(obj, key, value) {
  return key = _toPropertyKey6(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey6(arg) {
  var key = _toPrimitive6(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive6(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Copier = /* @__PURE__ */ _createClass6(function Copier2(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  _classCallCheck6(this, Copier2), _defineProperty5(this, "couldCopy", void 0), _defineProperty5(this, "prepare", void 0), _defineProperty5(this, "canCopy", void 0), _defineProperty5(this, "copiedMonster", void 0), _defineProperty5(this, "fightCopy", null), this.couldCopy = couldCopy, this.prepare = prepare, this.canCopy = canCopy, this.copiedMonster = copiedMonster, fightCopy && (this.fightCopy = fightCopy);
});

// node_modules/libram/dist/modifier.js
init_kolmafia_polyfill();
var import_kolmafia9 = require("kolmafia");

// node_modules/libram/dist/modifierTypes.js
init_kolmafia_polyfill();
var booleanModifiers = ["Softcore Only", "Single Equip", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Attacks Can't Miss", "Pirate", "Breakable", "Drops Items", "Drops Meat"], classModifiers = ["Class"], numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Surgeonosity", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Clowniness", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water"], effectModifiers = ["Effect", "Rollover Effect"], monsterModifiers = ["Avatar"], skillModifiers = ["Skill"], statModifiers = ["Plumber Stat"], stringModifiers = ["Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie"];

// node_modules/libram/dist/modifier.js
function get2(name, subject) {
  if (arrayContains(name, booleanModifiers))
    return subject === void 0 ? (0, import_kolmafia9.booleanModifier)(name) : (0, import_kolmafia9.booleanModifier)(subject, name);
  if (arrayContains(name, classModifiers))
    return (0, import_kolmafia9.classModifier)(subject, name);
  if (arrayContains(name, effectModifiers))
    return (0, import_kolmafia9.effectModifier)(subject, name);
  if (arrayContains(name, monsterModifiers))
    return (0, import_kolmafia9.monsterModifier)(subject, name);
  if (arrayContains(name, numericModifiers))
    return subject === void 0 ? (0, import_kolmafia9.numericModifier)(name) : (0, import_kolmafia9.numericModifier)(subject, name);
  if (arrayContains(name, skillModifiers))
    return (0, import_kolmafia9.skillModifier)(subject, name);
  if (arrayContains(name, stringModifiers))
    return subject === void 0 ? (0, import_kolmafia9.stringModifier)(name) : (0, import_kolmafia9.stringModifier)(subject, name);
  if (arrayContains(name, statModifiers))
    return (0, import_kolmafia9.statModifier)(subject, name);
}

// node_modules/libram/dist/resources/2016/SourceTerminal.js
var SourceTerminal_exports = {};
__export(SourceTerminal_exports, {
  Buffs: function() {
    return Buffs;
  },
  Digitize: function() {
    return Digitize;
  },
  Items: function() {
    return Items;
  },
  RolloverBuffs: function() {
    return RolloverBuffs;
  },
  Skills: function() {
    return Skills;
  },
  canDigitize: function() {
    return canDigitize;
  },
  couldDigitize: function() {
    return couldDigitize;
  },
  duplicateUsesRemaining: function() {
    return duplicateUsesRemaining;
  },
  educate: function() {
    return educate;
  },
  enhance: function() {
    return enhance;
  },
  enhanceBuffDuration: function() {
    return enhanceBuffDuration;
  },
  enhanceUsesRemaining: function() {
    return enhanceUsesRemaining;
  },
  enquiry: function() {
    return enquiry;
  },
  enquiryBuffDuration: function() {
    return enquiryBuffDuration;
  },
  extrude: function() {
    return extrude;
  },
  getChips: function() {
    return getChips;
  },
  getDigitizeMonster: function() {
    return getDigitizeMonster;
  },
  getDigitizeMonsterCount: function() {
    return getDigitizeMonsterCount;
  },
  getDigitizeUses: function() {
    return getDigitizeUses;
  },
  getDigitizeUsesRemaining: function() {
    return getDigitizeUsesRemaining;
  },
  getDuplicateUses: function() {
    return getDuplicateUses;
  },
  getEnhanceUses: function() {
    return getEnhanceUses;
  },
  getMaximumDigitizeUses: function() {
    return getMaximumDigitizeUses;
  },
  getPortscanUses: function() {
    return getPortscanUses;
  },
  getSkills: function() {
    return getSkills;
  },
  have: function() {
    return have3;
  },
  isCurrentSkill: function() {
    return isCurrentSkill;
  },
  item: function() {
    return item;
  },
  maximumDuplicateUses: function() {
    return maximumDuplicateUses;
  },
  maximumEnhanceUses: function() {
    return maximumEnhanceUses;
  },
  prepareDigitize: function() {
    return prepareDigitize;
  }
});
init_kolmafia_polyfill();
var import_kolmafia10 = require("kolmafia"), import_isEqual = __toESM(require_isEqual());
var _templateObject50, _templateObject214, _templateObject311, _templateObject411, _templateObject53, _templateObject63, _templateObject73, _templateObject83, _templateObject94, _templateObject104, _templateObject114, _templateObject124, _templateObject134, _templateObject143, _templateObject153, _templateObject163, _templateObject173, _templateObject183, _templateObject193, _templateObject203, _templateObject215, _templateObject223, _templateObject233, _templateObject243, _templateObject253, _templateObject263, _templateObject273;
function _createForOfIteratorHelper4(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray7(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray7(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray7(o, minLen);
  }
}
function _arrayLikeToArray7(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral5(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item = $item(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral5(["Source terminal"])));
function have3() {
  return haveInCampground(item);
}
var Buffs = {
  Items: $effect(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral5(["items.enh"]))),
  Meat: $effect(_templateObject311 || (_templateObject311 = _taggedTemplateLiteral5(["meat.enh"]))),
  Init: $effect(_templateObject411 || (_templateObject411 = _taggedTemplateLiteral5(["init.enh"]))),
  Critical: $effect(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral5(["critical.enh"]))),
  Damage: $effect(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral5(["damage.enh"]))),
  Substats: $effect(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral5(["substats.enh"])))
};
function enhance(buff) {
  return Object.values(Buffs).includes(buff) ? (0, import_kolmafia10.cliExecute)("terminal enhance ".concat(buff.name)) : !1;
}
var RolloverBuffs = {
  Familiar: $effect(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral5(["familiar.enq"]))),
  Monsters: $effect(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral5(["monsters.enq"]))),
  Protect: $effect(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral5(["protect.enq"]))),
  Stats: $effect(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral5(["stats.enq"])))
};
function enquiry(rolloverBuff) {
  return Object.values(RolloverBuffs).includes(rolloverBuff) ? (0, import_kolmafia10.cliExecute)("terminal enquiry ".concat(rolloverBuff.name)) : !1;
}
var Skills = {
  Extract: $skill(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral5(["Extract"]))),
  Digitize: $skill(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral5(["Digitize"]))),
  Compress: $skill(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral5(["Compress"]))),
  Duplicate: $skill(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral5(["Duplicate"]))),
  Portscan: $skill(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral5(["Portscan"]))),
  Turbo: $skill(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral5(["Turbo"])))
};
function educate(skills2) {
  var skillsArray = Array.isArray(skills2) ? skills2.slice(0, 2) : [skills2];
  if ((0, import_isEqual.default)(skillsArray, getSkills()))
    return !0;
  var _iterator = _createForOfIteratorHelper4(skillsArray), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var skill2 = _step.value;
      if (!Object.values(Skills).includes(skill2))
        return !1;
      (0, import_kolmafia10.cliExecute)("terminal educate ".concat(skill2.name.toLowerCase(), ".edu"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return !0;
}
function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(function(p) {
    return get(p);
  }).filter(function(s) {
    return s !== "";
  }).map(function(s) {
    return import_kolmafia10.Skill.get(s.slice(0, -4));
  });
}
function isCurrentSkill(skills2) {
  var currentSkills = getSkills(), skillsArray = Array.isArray(skills2) ? skills2.slice(0, 2) : [skills2];
  return skillsArray.every(function(skill2) {
    return currentSkills.includes(skill2);
  });
}
var Items = /* @__PURE__ */ new Map([[$item(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral5(["browser cookie"]))), "food.ext"], [$item(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral5(["hacked gibson"]))), "booze.ext"], [$item(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral5(["Source shades"]))), "goggles.ext"], [$item(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral5(["Source terminal GRAM chip"]))), "gram.ext"], [$item(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral5(["Source terminal PRAM chip"]))), "pram.ext"], [$item(_templateObject233 || (_templateObject233 = _taggedTemplateLiteral5(["Source terminal SPAM chip"]))), "spam.ext"], [$item(_templateObject243 || (_templateObject243 = _taggedTemplateLiteral5(["Source terminal CRAM chip"]))), "cram.ext"], [$item(_templateObject253 || (_templateObject253 = _taggedTemplateLiteral5(["Source terminal DRAM chip"]))), "dram.ext"], [$item(_templateObject263 || (_templateObject263 = _taggedTemplateLiteral5(["Source terminal TRAM chip"]))), "tram.ext"], [$item(_templateObject273 || (_templateObject273 = _taggedTemplateLiteral5(["software bug"]))), "familiar.ext"]]);
function extrude(item6) {
  var fileName = Items.get(item6);
  return fileName ? (0, import_kolmafia10.cliExecute)("terminal extrude ".concat(fileName)) : !1;
}
function getChips() {
  return get("sourceTerminalChips").split(",");
}
function getDigitizeUses() {
  return get("_sourceTerminalDigitizeUses");
}
function getDigitizeMonster() {
  return get("_sourceTerminalDigitizeMonster");
}
function getDigitizeMonsterCount() {
  return get("_sourceTerminalDigitizeMonsterCount");
}
function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}
function getDigitizeUsesRemaining() {
  return getMaximumDigitizeUses() - getDigitizeUses();
}
function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}
function prepareDigitize() {
  return isCurrentSkill(Skills.Digitize) ? !0 : educate(Skills.Digitize);
}
function canDigitize() {
  return couldDigitize() && getSkills().includes(Skills.Digitize);
}
var Digitize = new Copier(function() {
  return couldDigitize();
}, function() {
  return prepareDigitize();
}, function() {
  return canDigitize();
}, function() {
  return getDigitizeMonster();
});
function getDuplicateUses() {
  return get("_sourceTerminalDuplicateUses");
}
function getEnhanceUses() {
  return get("_sourceTerminalEnhanceUses");
}
function getPortscanUses() {
  return get("_sourceTerminalPortscanUses");
}
function maximumDuplicateUses() {
  return (0, import_kolmafia10.myPath)() === import_kolmafia10.Path.get("The Source") ? 5 : 1;
}
function duplicateUsesRemaining() {
  return maximumDuplicateUses() - getDuplicateUses();
}
function maximumEnhanceUses() {
  return 1 + getChips().filter(function(chip) {
    return ["CRAM", "SCRAM"].includes(chip);
  }).length;
}
function enhanceUsesRemaining() {
  return maximumEnhanceUses() - getEnhanceUses();
}
function enhanceBuffDuration() {
  return 25 + get("sourceTerminalPram") * 5 + (getChips().includes("INGRAM") ? 25 : 0);
}
function enquiryBuffDuration() {
  return 50 + 10 * get("sourceTerminalGram") + (getChips().includes("DIAGRAM") ? 50 : 0);
}

// node_modules/libram/dist/resources/2016/Witchess.js
var Witchess_exports = {};
__export(Witchess_exports, {
  fightPiece: function() {
    return fightPiece;
  },
  fightsDone: function() {
    return fightsDone;
  },
  have: function() {
    return have4;
  },
  item: function() {
    return item2;
  },
  pieces: function() {
    return pieces;
  }
});
init_kolmafia_polyfill();
var import_kolmafia11 = require("kolmafia");
var _templateObject51;
function _taggedTemplateLiteral6(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item2 = $item(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral6(["Witchess Set"])));
function have4() {
  return haveInCampground(item2);
}
function fightsDone() {
  return get("_witchessFights");
}
var pieces = import_kolmafia11.Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
function fightPiece(piece) {
  if (!pieces.includes(piece))
    throw new Error("That is not a valid piece.");
  if (!(0, import_kolmafia11.visitUrl)("campground.php?action=witchess").includes("whichchoice value=1181"))
    throw new Error("Failed to open Witchess.");
  if (!(0, import_kolmafia11.runChoice)(1).includes("whichchoice=1182"))
    throw new Error("Failed to visit shrink ray.");
  if (!(0, import_kolmafia11.visitUrl)("choice.php?option=1&pwd=".concat((0, import_kolmafia11.myHash)(), "&whichchoice=1182&piece=").concat((0, import_kolmafia11.toInt)(piece)), !1).includes(piece.name))
    throw new Error("Failed to start fight.");
  return (0, import_kolmafia11.runCombat)();
}

// node_modules/libram/dist/resources/2017/MummingTrunk.js
var MummingTrunk_exports = {};
__export(MummingTrunk_exports, {
  currentCostumes: function() {
    return currentCostumes;
  }
});
init_kolmafia_polyfill();
var import_kolmafia12 = require("kolmafia");
function _createForOfIteratorHelper5(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray8(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray8(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray8(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray8(o, minLen);
  }
}
function _arrayLikeToArray8(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function toModifier(input) {
  var regExp = new RegExp(/Experience \((.*?)\)/), matcher = input.match(regExp);
  return matcher ? "".concat(matcher[2], " Experience") : input;
}
function currentCostumes() {
  var entries2 = get("_mummeryMods").split(","), returnValue = /* @__PURE__ */ new Map(), regExp = new RegExp(/([^:]+): \[(d+)\*fam\(([^)]+)\)\]/), _iterator = _createForOfIteratorHelper5(entries2), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var entry = _step.value, matcher = entry.match(regExp);
      matcher && returnValue.set((0, import_kolmafia12.toFamiliar)(matcher[3]), [toModifier(matcher[1]), parseInt(matcher[2])]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return returnValue;
}

// node_modules/libram/dist/resources/2017/TunnelOfLove.js
var TunnelOfLove_exports = {};
__export(TunnelOfLove_exports, {
  LovEnamorang: function() {
    return LovEnamorang;
  },
  couldUseLoveEnamorang: function() {
    return couldUseLoveEnamorang;
  },
  fightAll: function() {
    return fightAll;
  },
  getLovEnamorangMonster: function() {
    return getLovEnamorangMonster;
  },
  getLovEnamorangUses: function() {
    return getLovEnamorangUses;
  },
  have: function() {
    return have5;
  },
  haveLovEnamorang: function() {
    return haveLovEnamorang;
  },
  isUsed: function() {
    return isUsed;
  }
});
init_kolmafia_polyfill();
var import_kolmafia13 = require("kolmafia");
var _templateObject54, _templateObject216;
function _taggedTemplateLiteral7(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function have5() {
  return get("loveTunnelAvailable");
}
function isUsed() {
  return get("_loveTunnelUsed");
}
function haveLovEnamorang() {
  return have($item(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral7(["LOV Enamorang"]))));
}
function getLovEnamorangUses() {
  return get("_enamorangs");
}
function couldUseLoveEnamorang() {
  return !haveWandererCounter(Wanderer.Enamorang) && getLovEnamorangUses() < 3 && haveLovEnamorang();
}
function getLovEnamorangMonster() {
  return get("enamorangMonster");
}
var LovEnamorang = new Copier(function() {
  return couldUseLoveEnamorang();
}, null, function() {
  return couldUseLoveEnamorang();
}, function() {
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
function fightAll(equipment, effect, extra) {
  _set("choiceAdventure1222", 1), _set("choiceAdventure1223", 1), _set("choiceAdventure1224", equipmentChoice(equipment)), _set("choiceAdventure1225", 1), _set("choiceAdventure1226", effectChoice(effect)), _set("choiceAdventure1227", 1), _set("choiceAdventure1228", extraChoice(extra)), (0, import_kolmafia13.adv1)($location(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral7(["The Tunnel of L.O.V.E."]))), 0, "");
}

// node_modules/libram/dist/resources/2018/SongBoom.js
var SongBoom_exports = {};
__export(SongBoom_exports, {
  dropProgress: function() {
    return dropProgress;
  },
  have: function() {
    return have6;
  },
  item: function() {
    return item3;
  },
  setSong: function() {
    return setSong;
  },
  song: function() {
    return song;
  },
  songBoomSongs: function() {
    return songBoomSongs;
  },
  songChangesLeft: function() {
    return songChangesLeft;
  }
});
init_kolmafia_polyfill();
var import_kolmafia14 = require("kolmafia");
var _templateObject55;
function _taggedTemplateLiteral8(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item3 = $item(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral8(["SongBoom\u2122 BoomBox"])));
function have6() {
  return have(item3);
}
var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
}, songBoomSongs = new Set(Object.keys(keywords));
function song() {
  var stored = get("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
function songChangesLeft() {
  return get("_boomBoxSongsLeft");
}
function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0)
      throw new Error("Out of song changes!");
    return (0, import_kolmafia14.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none")), !0;
  } else
    return !1;
}
function dropProgress() {
  return get("_boomBoxFights");
}

// node_modules/libram/dist/resources/2019/BeachComb.js
var BeachComb_exports = {};
__export(BeachComb_exports, {
  canComb: function() {
    return canComb;
  },
  comb: function() {
    return comb;
  },
  freeCombs: function() {
    return freeCombs;
  },
  have: function() {
    return have7;
  },
  head: function() {
    return head;
  },
  headAvailable: function() {
    return headAvailable;
  },
  headBuffs: function() {
    return headBuffs;
  },
  tideLevel: function() {
    return tideLevel;
  },
  tryHead: function() {
    return tryHead;
  }
});
init_kolmafia_polyfill();
var import_kolmafia15 = require("kolmafia");
var _templateObject56, _templateObject217, _templateObject313, _templateObject412, _templateObject57, _templateObject64, _templateObject74, _templateObject84, _templateObject95, _templateObject105, _templateObject115, _templateObject125, _templateObject135, _templateObject144, _templateObject154, _templateObject164, _templateObject174, _templateObject184, _templateObject194, _templateObject204, _templateObject218;
function _taggedTemplateLiteral9(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function have7() {
  return have(import_kolmafia15.Item.get("Beach Comb"));
}
var headBuffs = [$effect(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral9(["Hot-Headed"]))), $effect(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral9(["Cold as Nice"]))), $effect(_templateObject313 || (_templateObject313 = _taggedTemplateLiteral9(["A Brush with Grossness"]))), $effect(_templateObject412 || (_templateObject412 = _taggedTemplateLiteral9(["Does It Have a Skull In There??"]))), $effect(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral9(["Oiled, Slick"]))), $effect(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral9(["Lack of Body-Building"]))), $effect(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral9(["We're All Made of Starfish"]))), $effect(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral9(["Pomp & Circumsands"]))), $effect(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral9(["Resting Beach Face"]))), $effect(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral9(["Do I Know You From Somewhere?"]))), $effect(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral9(["You Learned Something Maybe!"])))], head = {
  HOT: $effect(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral9(["Hot-Headed"]))),
  COLD: $effect(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral9(["Cold as Nice"]))),
  STENCH: $effect(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral9(["A Brush with Grossness"]))),
  SPOOKY: $effect(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral9(["Does It Have a Skull In There??"]))),
  SLEAZE: $effect(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral9(["Oiled, Slick"]))),
  MUSCLE: $effect(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral9(["Lack of Body-Building"]))),
  MYSTICALITY: $effect(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral9(["We're All Made of Starfish"]))),
  INITIATIVE: $effect(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral9(["Resting Beach Face"]))),
  FAMILIAR: $effect(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral9(["Do I Know You From Somewhere?"]))),
  EXPERIENCE: $effect(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral9(["You Learned Something Maybe!"])))
};
function tideLevel() {
  var day = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, import_kolmafia15.gamedayToInt)(), dayOfMonth = 1 + day % 8;
  return 4 - Math.abs(4 - dayOfMonth);
}
function canComb(_ref) {
  var row = _ref.row;
  return row > tideLevel();
}
function freeCombs() {
  return have7() ? clamp(11 - get("_freeBeachWalksUsed"), 0, 11) : 0;
}
function comb() {
  for (var _len = arguments.length, tiles = new Array(_len), _key = 0; _key < _len; _key++)
    tiles[_key] = arguments[_key];
  if (!(!have7() || !tiles.length)) {
    for (var _i = 0, _tiles = tiles; _i < _tiles.length; _i++) {
      var tile = _tiles[_i];
      if (canComb(tile)) {
        var minute = tile.minute, row = tile.row, column = tile.column;
        (0, import_kolmafia15.cliExecute)("beach wander ".concat(minute)), (0, import_kolmafia15.cliExecute)("beach comb ".concat(row, " ").concat(column));
      }
    }
    (0, import_kolmafia15.handlingChoice)() && (0, import_kolmafia15.runChoice)(5);
  }
}
function headAvailable(target) {
  var effect = target instanceof import_kolmafia15.Effect ? target : head[target], headNumber = 1 + headBuffs.indexOf(effect);
  return (0, import_kolmafia15.getProperty)("beachHeadsUnlocked").split(",").includes(headNumber.toString()) && !(0, import_kolmafia15.getProperty)("_beachHeadsUsed").split(",").includes(headNumber.toString());
}
function tryHead(target) {
  var effect = target instanceof import_kolmafia15.Effect ? target : head[target];
  return !headBuffs.includes(effect) || !headAvailable(target) ? !1 : ((0, import_kolmafia15.cliExecute)(effect.default), have(effect));
}

// node_modules/libram/dist/resources/2020/Cartography.js
var Cartography_exports = {};
__export(Cartography_exports, {
  have: function() {
    return have8;
  },
  mapMonster: function() {
    return mapMonster;
  },
  passive: function() {
    return passive;
  },
  skill: function() {
    return skill;
  }
});
init_kolmafia_polyfill();
var import_kolmafia16 = require("kolmafia");
var _templateObject58, _templateObject219, _templateObject314;
function _taggedTemplateLiteral10(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var passive = $skill(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral10(["Comprehensive Cartography"]))), skill = $skill(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral10(["Map the Monsters"])));
function have8() {
  return have(passive);
}
function mapMonster(location, monster) {
  if (!have8() || get("_monstersMapped") >= 3 || !(0, import_kolmafia16.canAdventure)(location) || ((0, import_kolmafia16.useSkill)($skill(_templateObject314 || (_templateObject314 = _taggedTemplateLiteral10(["Map the Monsters"])))), !get("mappingMonsters")))
    return !1;
  for (var turns = (0, import_kolmafia16.myTurncount)(); (0, import_kolmafia16.currentRound)() < 1; ) {
    if ((0, import_kolmafia16.myTurncount)() > turns)
      throw new Error("Map the Monsters unsuccessful?");
    if ((0, import_kolmafia16.visitUrl)((0, import_kolmafia16.toUrl)(location)), (0, import_kolmafia16.handlingChoice)() && (0, import_kolmafia16.lastChoice)() === 1435)
      return (0, import_kolmafia16.runChoice)(1, "heyscriptswhatsupwinkwink=".concat(monster.id)), !0;
    (0, import_kolmafia16.runChoice)(-1, !1);
  }
  return !1;
}

// node_modules/libram/dist/resources/2020/RetroCape.js
var RetroCape_exports = {};
__export(RetroCape_exports, {
  currentHero: function() {
    return currentHero;
  },
  currentMode: function() {
    return currentMode;
  },
  getModifier: function() {
    return getModifier;
  },
  have: function() {
    return have9;
  },
  item: function() {
    return item4;
  },
  set: function() {
    return set;
  },
  tuneToSkill: function() {
    return tuneToSkill;
  }
});
init_kolmafia_polyfill();
var import_kolmafia17 = require("kolmafia");
var _templateObject59, _templateObject220, _templateObject315, _templateObject413, _templateObject510, _templateObject65, _templateObject75, _templateObject85, _templateObject96, _templateObject106, _templateObject116, _templateObject126, _templateObject136;
function _toConsumableArray4(arr) {
  return _arrayWithoutHoles4(arr) || _iterableToArray4(arr) || _unsupportedIterableToArray9(arr) || _nonIterableSpread4();
}
function _nonIterableSpread4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray9(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray9(o, minLen);
  }
}
function _iterableToArray4(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles4(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray9(arr);
}
function _arrayLikeToArray9(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys3(Object(source), !0).forEach(function(key) {
      _defineProperty6(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty6(obj, key, value) {
  return key = _toPropertyKey7(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey7(arg) {
  var key = _toPrimitive7(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive7(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral11(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item4 = $item(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral11(["unwrapped knock-off retro superhero cape"])));
function have9() {
  return have(item4);
}
var Heroes = {
  vampire: {
    "Muscle Percent": 30,
    "Maximum HP": 50
  },
  heck: {
    "Mysticality Percent": 30,
    "Maximum MP": 50
  },
  robot: {
    "Moxie Percent": 30,
    "Maximum HP": 25,
    "Maximum MP": 25
  }
}, currentHero = function() {
  return get("retroCapeSuperhero");
}, currentMode = function() {
  return get("retroCapeWashingInstructions");
}, modeMap = /* @__PURE__ */ new Map([[["vampire", "hold"], {
  "Hot Resistance": 3,
  "Cold Resistance": 3,
  "Stench Resistance": 3,
  "Spooky Resistance": 3,
  "Sleaze Resistance": 3
}], [["vampire", "thrill"], {
  "Muscle Experience": 3
}], [["vampire", "kiss"], {
  Skill: $skill(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral11(["Smooch of the Daywalker"])))
}], [["vampire", "kill"], {
  Skill: $skill(_templateObject315 || (_templateObject315 = _taggedTemplateLiteral11(["Slay the Dead"])))
}], [["heck", "thrill"], {
  "Mysticality Experience": 3
}], [["heck", "kiss"], {
  Skill: $skill(_templateObject413 || (_templateObject413 = _taggedTemplateLiteral11(["Unleash the Devil's Kiss"])))
}], [["robot", "hold"], {
  Skill: $skill(_templateObject510 || (_templateObject510 = _taggedTemplateLiteral11(["Deploy Robo-Handcuffs"])))
}], [["robot", "thrill"], {
  "Moxie Experience": 3
}], [["robot", "kiss"], {
  Skill: $skill(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral11(["Blow a Robo-Kiss"])))
}], [["robot", "kill"], {
  Skill: $skill(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral11(["Precision Shot"])))
}]]);
function set(hero, mode) {
  return have9() ? currentHero() === hero && currentMode() === mode ? !0 : ((0, import_kolmafia17.cliExecute)("retrocape ".concat(hero, " ").concat(mode)), currentHero() === hero && currentMode() === mode) : !1;
}
function getModifier() {
  var _modeMap$get, hero = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : currentHero(), mode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : currentMode();
  return _objectSpread3(_objectSpread3({}, Heroes[hero]), (_modeMap$get = modeMap.get([hero, mode])) !== null && _modeMap$get !== void 0 ? _modeMap$get : {});
}
var skills = /* @__PURE__ */ new Map([[$skill(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral11(["Smooch of the Daywalker"]))), ["vampire", "kiss"]], [$skill(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral11(["Slay the Dead"]))), ["vampire", "kill"]], [$skill(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral11(["Unleash the Devil's Kiss"]))), ["heck", "kiss"]], [$skill(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral11(["Deploy Robo-Handcuffs"]))), ["robot", "hold"]], [$skill(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral11(["Blow a Robo-Kiss"]))), ["robot", "kiss"]], [$skill(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral11(["Precision Shot"]))), ["robot", "kill"]]]);
function tuneToSkill(skill2) {
  var setting = skills.get(skill2);
  return !setting || !have9() ? !1 : (set.apply(void 0, _toConsumableArray4(setting)), [currentHero(), currentMode()].every(function(element, index) {
    return element === setting[index];
  }));
}

// node_modules/libram/dist/resources/2021/DaylightShavings.js
var DaylightShavings_exports = {};
__export(DaylightShavings_exports, {
  buffAvailable: function() {
    return buffAvailable;
  },
  buffCycle: function() {
    return buffCycle;
  },
  buffs: function() {
    return buffs;
  },
  buffsUntil: function() {
    return buffsUntil;
  },
  hasBuff: function() {
    return hasBuff;
  },
  have: function() {
    return have10;
  },
  helmet: function() {
    return helmet;
  },
  nextBuff: function() {
    return nextBuff;
  }
});
init_kolmafia_polyfill();
var import_kolmafia18 = require("kolmafia");
var _templateObject60, _templateObject221;
function _taggedTemplateLiteral12(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var helmet = $item(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral12(["Daylight Shavings Helmet"])));
function have10() {
  return have(helmet);
}
var buffs = $effects(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral12(["Spectacle Moustache, Toiletbrush Moustache, Barbell Moustache, Grizzly Beard, Surrealist's Moustache, Musician's Musician's Moustache, Gull-Wing Moustache, Space Warlord's Beard, Pointy Wizard Beard, Cowboy Stache, Friendly Chops"])));
function hasBuff() {
  return buffs.some(function(buff) {
    return have(buff);
  });
}
function buffAvailable() {
  return !buffs.some(function(buff) {
    return have(buff, 2);
  });
}
function buffCycle() {
  var playerclass = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, import_kolmafia18.myClass)();
  if ((0, import_kolmafia18.toInt)(playerclass) <= 0)
    return [];
  for (var returnValue = [], id = (0, import_kolmafia18.toInt)(playerclass), seed = id > 6 ? id % 6 + 1 : id, i = 1; i < 12; i++) {
    var index = i * seed % 11;
    returnValue.push(buffs[index]);
  }
  return returnValue;
}
function nextBuff() {
  var currentBuff = (0, import_kolmafia18.toEffect)(get("lastBeardBuff").toFixed(0)), cycle = buffCycle(), index = cycle.indexOf(currentBuff), newIndex = (1 + index) % 11;
  return cycle[newIndex];
}
function buffsUntil(buff) {
  if (!buffs.includes(buff))
    return null;
  var currentIndex = buffs.indexOf(nextBuff()) - 1, newIndex = buffs.indexOf(buff), diff = (newIndex - currentIndex) % 11;
  return diff === 0 ? 11 : diff;
}

// node_modules/libram/dist/resources/2022/AutumnAton.js
var AutumnAton_exports = {};
__export(AutumnAton_exports, {
  available: function() {
    return available;
  },
  availableLocations: function() {
    return availableLocations;
  },
  currentUpgrades: function() {
    return currentUpgrades;
  },
  currentlyIn: function() {
    return currentlyIn;
  },
  getUniques: function() {
    return getUniques;
  },
  have: function() {
    return have11;
  },
  item: function() {
    return item5;
  },
  legs: function() {
    return legs;
  },
  possibleUpgrades: function() {
    return possibleUpgrades;
  },
  seasonalItems: function() {
    return seasonalItems;
  },
  sendTo: function() {
    return sendTo;
  },
  turnsForQuest: function() {
    return turnsForQuest;
  },
  turnsLeft: function() {
    return turnsLeft;
  },
  upgrade: function() {
    return upgrade;
  },
  visualAcuity: function() {
    return visualAcuity;
  },
  zoneItems: function() {
    return zoneItems;
  }
});
init_kolmafia_polyfill();
var import_kolmafia19 = require("kolmafia");
var _templateObject61, _templateObject224, _templateObject316, _templateObject414, _templateObject511, _templateObject66, _templateObject76, _templateObject86, _templateObject97;
function _taggedTemplateLiteral13(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item5 = import_kolmafia19.Item.get("autumn-aton");
function available() {
  return (0, import_kolmafia19.availableAmount)(item5) > 0;
}
function have11() {
  return get("hasAutumnaton") || available();
}
function checkLocations(html) {
  return (0, import_kolmafia19.xpath)(html, '//select[@name="heythereprogrammer"]//option[position()>1]/text()').map(function(name) {
    return (0, import_kolmafia19.toLocation)(name);
  });
}
var use = function() {
  return (0, import_kolmafia19.visitUrl)("inv_use.php?pwd&whichitem=10954");
};
function currentlyIn() {
  return get("autumnatonQuestLocation");
}
function sendTo(target) {
  var upgrade2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  if (!available())
    return null;
  var pageHtml = use();
  upgrade2 && (0, import_kolmafia19.availableChoiceOptions)()[1] && (0, import_kolmafia19.runChoice)(1);
  var locationsAvailable = checkLocations(pageHtml), location = target instanceof import_kolmafia19.Location ? target : Array.isArray(target) ? target.find(function(l) {
    return locationsAvailable.includes(l);
  }) : target(locationsAvailable);
  return !location || !locationsAvailable.includes(location) ? null : ((0, import_kolmafia19.handlingChoice)() || use(), (0, import_kolmafia19.runChoice)(2, "heythereprogrammer=".concat(location.id)), (0, import_kolmafia19.handlingChoice)() && (0, import_kolmafia19.visitUrl)("main.php"), location);
}
function upgrade() {
  use();
  var canUpgrade = (0, import_kolmafia19.availableChoiceOptions)()[1] !== void 0;
  return canUpgrade && (0, import_kolmafia19.runChoice)(1), (0, import_kolmafia19.visitUrl)("main.php"), canUpgrade;
}
function availableLocations() {
  if (!available())
    return [];
  var pageHtml = use();
  return (0, import_kolmafia19.visitUrl)("main.php"), checkLocations(pageHtml);
}
var possibleUpgrades = ["leftarm1", "leftleg1", "rightarm1", "rightleg1", "base_blackhat", "cowcatcher", "periscope", "radardish", "dualexhaust"];
function currentUpgrades() {
  return get("autumnatonUpgrades").split(",");
}
function turnsLeft() {
  return get("autumnatonQuestTurn") - (0, import_kolmafia19.totalTurnsPlayed)();
}
function legs() {
  return currentUpgrades().filter(function(u) {
    return u.includes("leg");
  }).length;
}
function turnsForQuest() {
  return 11 * Math.max(1, get("_autumnatonQuests") - legs());
}
function visualAcuity() {
  var visualUpgrades = ["periscope", "radardish"];
  return 1 + currentUpgrades().filter(function(u) {
    return visualUpgrades.includes(u);
  }).length;
}
function zoneItems() {
  return 3 + currentUpgrades().filter(function(u) {
    return u.includes("arm");
  }).length;
}
function seasonalItems() {
  return currentUpgrades().includes("cowcatcher") ? 2 : 1;
}
var difficulties = ["low", "mid", "high"], UNIQUES = {
  outdoor: {
    low: {
      index: 4,
      item: $item(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral13(["autumn leaf"])))
    },
    mid: {
      index: 2,
      item: $item(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral13(["autumn debris shield"])))
    },
    high: {
      index: 6,
      item: $item(_templateObject316 || (_templateObject316 = _taggedTemplateLiteral13(["autumn leaf pendant"])))
    }
  },
  indoor: {
    low: {
      index: 0,
      item: $item(_templateObject414 || (_templateObject414 = _taggedTemplateLiteral13(["AutumnFest ale"])))
    },
    mid: {
      index: 3,
      item: $item(_templateObject511 || (_templateObject511 = _taggedTemplateLiteral13(["autumn-spice donut"])))
    },
    high: {
      index: 7,
      item: $item(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral13(["autumn breeze"])))
    }
  },
  underground: {
    low: {
      index: 1,
      item: $item(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral13(["autumn sweater-weather sweater"])))
    },
    mid: {
      index: 5,
      item: $item(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral13(["autumn dollar"])))
    },
    high: {
      index: 8,
      item: $item(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral13(["autumn years wisdom"])))
    }
  }
};
function getUniques(location) {
  var env = location.environment, difficulty = location.difficultyLevel;
  if (arrayContains(env, ["outdoor", "indoor", "underground"]) && arrayContains(difficulty, difficulties)) {
    var _UNIQUES$env$difficul = UNIQUES[env][difficulty], index = _UNIQUES$env$difficul.index, _item = _UNIQUES$env$difficul.item;
    return {
      upgrade: possibleUpgrades[index],
      item: _item
    };
  }
  return null;
}

// node_modules/libram/dist/resources/2022/CombatLoversLocket.js
var CombatLoversLocket_exports = {};
__export(CombatLoversLocket_exports, {
  availableLocketMonsters: function() {
    return availableLocketMonsters;
  },
  findMonster: function() {
    return findMonster;
  },
  have: function() {
    return have12;
  },
  locket: function() {
    return locket;
  },
  monstersReminisced: function() {
    return monstersReminisced;
  },
  reminisce: function() {
    return reminisce;
  },
  reminiscesLeft: function() {
    return reminiscesLeft;
  },
  unlockedLocketMonsters: function() {
    return unlockedLocketMonsters;
  }
});
init_kolmafia_polyfill();
var import_kolmafia20 = require("kolmafia");
var _templateObject67;
function _slicedToArray6(arr, i) {
  return _arrayWithHoles6(arr) || _iterableToArrayLimit6(arr, i) || _unsupportedIterableToArray10(arr, i) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray10(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray10(o, minLen);
  }
}
function _arrayLikeToArray10(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit6(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles6(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral14(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var locket = $item(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral14(["Combat Lover's Locket"])));
function have12() {
  return have(locket);
}
function availableLocketMonsters() {
  return reminiscesLeft() === 0 ? [] : Object.entries((0, import_kolmafia20.getLocketMonsters)()).filter(function(_ref) {
    var _ref2 = _slicedToArray6(_ref, 2), unused = _ref2[1];
    return unused;
  }).map(function(_ref3) {
    var _ref4 = _slicedToArray6(_ref3, 1), name = _ref4[0];
    return (0, import_kolmafia20.toMonster)(name);
  });
}
function unlockedLocketMonsters() {
  return Object.entries((0, import_kolmafia20.getLocketMonsters)()).map(function(_ref5) {
    var _ref6 = _slicedToArray6(_ref5, 1), name = _ref6[0];
    return (0, import_kolmafia20.toMonster)(name);
  });
}
function parseLocketProperty() {
  return get("_locketMonstersFought").split(",").filter(function(id) {
    return id.trim().length > 0;
  });
}
function reminiscesLeft() {
  return have12() ? clamp(3 - parseLocketProperty().length, 0, 3) : 0;
}
function monstersReminisced() {
  return parseLocketProperty().map(function(id) {
    return (0, import_kolmafia20.toMonster)(id);
  });
}
function reminisce(monster) {
  return !have12() || reminiscesLeft() === 0 || !(0, import_kolmafia20.getLocketMonsters)()[monster.name] ? !1 : ((0, import_kolmafia20.cliExecute)("reminisce ".concat(monster)), (0, import_kolmafia20.runCombat)(), monstersReminisced().includes(monster));
}
function findMonster(criteria) {
  var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    return 1;
  };
  if (!have12() || reminiscesLeft() === 0)
    return null;
  var options = availableLocketMonsters().filter(criteria);
  return options.length ? options.reduce(function(a, b) {
    return value(a) > value(b) ? a : b;
  }) : null;
}

// node_modules/libram/dist/resources/LibramSummon.js
init_kolmafia_polyfill();
var import_maxBy = __toESM(require_maxBy());

// node_modules/libram/dist/resources/2007/CandyHearts.js
init_kolmafia_polyfill();
var _templateObject68, _templateObject225, _templateObject317, _templateObject415, _templateObject512, _templateObject69, _templateObject77;
function _taggedTemplateLiteral15(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var summonSkill = $skill(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral15(["Summon Candy Heart"]))), libramChance = 1 / 6, libramExpected = /* @__PURE__ */ new Map([[$item(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral15(["green candy heart"]))), libramChance], [$item(_templateObject317 || (_templateObject317 = _taggedTemplateLiteral15(["lavender candy heart"]))), libramChance], [$item(_templateObject415 || (_templateObject415 = _taggedTemplateLiteral15(["orange candy heart"]))), libramChance], [$item(_templateObject512 || (_templateObject512 = _taggedTemplateLiteral15(["pink candy heart"]))), libramChance], [$item(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral15(["white candy heart"]))), libramChance], [$item(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral15(["yellow candy heart"]))), libramChance]]);
function have13() {
  return have(summonSkill);
}
function expected() {
  return libramExpected;
}

// node_modules/libram/dist/resources/2008/DivineFavors.js
init_kolmafia_polyfill();
var _templateObject70, _templateObject226, _templateObject318, _templateObject416, _templateObject513, _templateObject610, _templateObject78;
function _taggedTemplateLiteral16(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var summonSkill2 = $skill(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral16(["Summon Party Favor"])));
function have14() {
  return have(summonSkill2);
}
function expected2() {
  var rareSummons = get("_favorRareSummons"), totalRareChance = 1 / 2 ** (rareSummons + 1), commonChance2 = (1 - totalRareChance) / 3, rareChance2 = totalRareChance / 3;
  return /* @__PURE__ */ new Map([[$item(_templateObject226 || (_templateObject226 = _taggedTemplateLiteral16(["divine blowout"]))), commonChance2], [$item(_templateObject318 || (_templateObject318 = _taggedTemplateLiteral16(["divine can of silly string"]))), commonChance2], [$item(_templateObject416 || (_templateObject416 = _taggedTemplateLiteral16(["divine noisemaker"]))), commonChance2], [$item(_templateObject513 || (_templateObject513 = _taggedTemplateLiteral16(["divine champagne flute"]))), rareChance2], [$item(_templateObject610 || (_templateObject610 = _taggedTemplateLiteral16(["divine champagne popper"]))), rareChance2], [$item(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral16(["divine cracker"]))), rareChance2]]);
}

// node_modules/libram/dist/resources/2009/LoveSongs.js
init_kolmafia_polyfill();
var _templateObject71, _templateObject227, _templateObject319, _templateObject417, _templateObject514, _templateObject611, _templateObject79;
function _taggedTemplateLiteral17(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var summonSkill3 = $skill(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral17(["Summon Love Song"]))), libramChance2 = 1 / 6, libramExpected2 = /* @__PURE__ */ new Map([[$item(_templateObject227 || (_templateObject227 = _taggedTemplateLiteral17(["love song of disturbing obsession"]))), libramChance2], [$item(_templateObject319 || (_templateObject319 = _taggedTemplateLiteral17(["love song of icy revenge"]))), libramChance2], [$item(_templateObject417 || (_templateObject417 = _taggedTemplateLiteral17(["love song of naughty innuendo"]))), libramChance2], [$item(_templateObject514 || (_templateObject514 = _taggedTemplateLiteral17(["love song of smoldering passion"]))), libramChance2], [$item(_templateObject611 || (_templateObject611 = _taggedTemplateLiteral17(["love song of sugary cuteness"]))), libramChance2], [$item(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral17(["love song of vague ambiguity"]))), libramChance2]]);
function have15() {
  return have(summonSkill3);
}
function expected3() {
  return libramExpected2;
}

// node_modules/libram/dist/resources/2010/Brickos.js
init_kolmafia_polyfill();
var _templateObject80, _templateObject228, _templateObject320;
function _taggedTemplateLiteral18(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var summonSkill4 = $skill(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral18(["Summon BRICKOs"])));
function have16() {
  return have(summonSkill4);
}
function expected4() {
  var eyeSummons = get("_brickoEyeSummons"), eyeChance = eyeSummons === 3 ? 0 : eyeSummons === 0 ? 0.5 : 1 / 3;
  return /* @__PURE__ */ new Map([[$item(_templateObject228 || (_templateObject228 = _taggedTemplateLiteral18(["BRICKO eye brick"]))), eyeChance], [$item(_templateObject320 || (_templateObject320 = _taggedTemplateLiteral18(["BRICKO brick"]))), 3 - eyeChance]]);
}

// node_modules/libram/dist/resources/2011/Gygaxian.js
init_kolmafia_polyfill();
var _templateObject81, _templateObject229, _templateObject321, _templateObject418, _templateObject515, _templateObject612, _templateObject710;
function _taggedTemplateLiteral19(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var summonSkill5 = $skill(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral19(["Summon Dice"]))), libramChance3 = 1 / 6, libramExpected3 = /* @__PURE__ */ new Map([[$item(_templateObject229 || (_templateObject229 = _taggedTemplateLiteral19(["d4"]))), libramChance3], [$item(_templateObject321 || (_templateObject321 = _taggedTemplateLiteral19(["d6"]))), libramChance3], [$item(_templateObject418 || (_templateObject418 = _taggedTemplateLiteral19(["d8"]))), libramChance3], [$item(_templateObject515 || (_templateObject515 = _taggedTemplateLiteral19(["d10"]))), libramChance3], [$item(_templateObject612 || (_templateObject612 = _taggedTemplateLiteral19(["d12"]))), libramChance3], [$item(_templateObject710 || (_templateObject710 = _taggedTemplateLiteral19(["d20"]))), libramChance3]]);
function have17() {
  return have(summonSkill5);
}
function expected5() {
  return libramExpected3;
}

// node_modules/libram/dist/resources/2012/Resolutions.js
init_kolmafia_polyfill();
var _templateObject87, _templateObject230, _templateObject323, _templateObject419, _templateObject516, _templateObject613, _templateObject711, _templateObject88, _templateObject98, _templateObject107;
function _taggedTemplateLiteral20(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var summonSkill6 = $skill(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral20(["Summon Resolutions"]))), commonChance = 0.98 / 6, rareChance = 0.02 / 3, libramExpected4 = /* @__PURE__ */ new Map([[$item(_templateObject230 || (_templateObject230 = _taggedTemplateLiteral20(["resolution: be feistier"]))), commonChance], [$item(_templateObject323 || (_templateObject323 = _taggedTemplateLiteral20(["resolution: be happier"]))), commonChance], [$item(_templateObject419 || (_templateObject419 = _taggedTemplateLiteral20(["resolution: be sexier"]))), commonChance], [$item(_templateObject516 || (_templateObject516 = _taggedTemplateLiteral20(["resolution: be smarter"]))), commonChance], [$item(_templateObject613 || (_templateObject613 = _taggedTemplateLiteral20(["resolution: be stronger"]))), commonChance], [$item(_templateObject711 || (_templateObject711 = _taggedTemplateLiteral20(["resolution: be wealthier"]))), commonChance], [$item(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral20(["resolution: be kinder"]))), rareChance], [$item(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral20(["resolution: be luckier"]))), rareChance], [$item(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral20(["resolution: be more adventurous"]))), rareChance]]);
function have18() {
  return have(summonSkill6);
}
function expected6() {
  return libramExpected4;
}

// node_modules/libram/dist/resources/2013/PulledTaffy.js
init_kolmafia_polyfill();
var _templateObject89, _templateObject231, _templateObject324, _templateObject420, _templateObject517, _templateObject614, _templateObject712, _templateObject810;
function _taggedTemplateLiteral21(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var summonSkill7 = $skill(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral21(["Summon Taffy"])));
function have19() {
  return have(summonSkill7);
}
function expected7() {
  var rareSummons = get("_taffyRareSummons"), yellowSummons = get("_taffyYellowSummons"), onlyYellow = yellowSummons === 0 && rareSummons === 3, totalRareChance = rareSummons < 4 ? 1 / 2 ** (rareSummons + 1) : 0, commonChance2 = (1 - totalRareChance) / 4, rareChance2 = onlyYellow ? 0 : totalRareChance / (3 - get("_taffyYellowSummons")), yellowChance = yellowSummons === 1 ? 0 : onlyYellow ? totalRareChance : rareChance2;
  return /* @__PURE__ */ new Map([[$item(_templateObject231 || (_templateObject231 = _taggedTemplateLiteral21(["pulled blue taffy"]))), commonChance2], [$item(_templateObject324 || (_templateObject324 = _taggedTemplateLiteral21(["pulled orange taffy"]))), commonChance2], [$item(_templateObject420 || (_templateObject420 = _taggedTemplateLiteral21(["pulled violet taffy"]))), commonChance2], [$item(_templateObject517 || (_templateObject517 = _taggedTemplateLiteral21(["pulled red taffy"]))), commonChance2], [$item(_templateObject614 || (_templateObject614 = _taggedTemplateLiteral21(["pulled indigo taffy"]))), rareChance2], [$item(_templateObject712 || (_templateObject712 = _taggedTemplateLiteral21(["pulled green taffy"]))), rareChance2], [$item(_templateObject810 || (_templateObject810 = _taggedTemplateLiteral21(["pulled yellow taffy"]))), yellowChance]]);
}

// node_modules/libram/dist/resources/LibramSummon.js
function _slicedToArray7(arr, i) {
  return _arrayWithHoles7(arr) || _iterableToArrayLimit7(arr, i) || _unsupportedIterableToArray11(arr, i) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray11(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray11(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray11(o, minLen);
  }
}
function _arrayLikeToArray11(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit7(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles7(arr) {
  if (Array.isArray(arr))
    return arr;
}
function possibleLibramSummons() {
  var results = /* @__PURE__ */ new Map();
  return have13() && results.set(summonSkill, expected()), have14() && results.set(summonSkill2, expected2()), have15() && results.set(summonSkill3, expected3()), have16() && results.set(summonSkill4, expected4()), have17() && results.set(summonSkill5, expected5()), have18() && results.set(summonSkill6, expected6()), have19() && results.set(summonSkill7, expected7()), results;
}
function bestLibramToCast() {
  var _maxBy;
  return ((_maxBy = (0, import_maxBy.default)(Array.from(possibleLibramSummons().entries()), function(_ref) {
    var _ref2 = _slicedToArray7(_ref, 2), itemMap = _ref2[1];
    return sumNumbers(Array.from(itemMap.entries()).map(function(_ref3) {
      var _ref4 = _slicedToArray7(_ref3, 2), item6 = _ref4[0], weight = _ref4[1];
      return weight * getSaleValue(item6);
    }));
  })) !== null && _maxBy !== void 0 ? _maxBy : [null])[0];
}

// node_modules/libram/dist/Clan.js
init_kolmafia_polyfill();
var import_kolmafia21 = require("kolmafia");
function _toConsumableArray5(arr) {
  return _arrayWithoutHoles5(arr) || _iterableToArray5(arr) || _unsupportedIterableToArray12(arr) || _nonIterableSpread5();
}
function _nonIterableSpread5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray5(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles5(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray12(arr);
}
function _createForOfIteratorHelper6(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray12(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray8(arr, i) {
  return _arrayWithHoles8(arr) || _iterableToArrayLimit8(arr, i) || _unsupportedIterableToArray12(arr, i) || _nonIterableRest8();
}
function _nonIterableRest8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray12(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray12(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray12(o, minLen);
  }
}
function _arrayLikeToArray12(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit8(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles8(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck7(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey8(descriptor.key), descriptor);
  }
}
function _createClass7(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties7(Constructor.prototype, protoProps), staticProps && _defineProperties7(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty7(obj, key, value) {
  return key = _toPropertyKey8(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey8(arg) {
  var key = _toPrimitive8(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive8(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _wrapRegExp() {
  _wrapRegExp = function(re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };
  var _super = RegExp.prototype, _groups = /* @__PURE__ */ new WeakMap();
  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);
    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf3(_this, BabelRegExp.prototype);
  }
  function buildGroups(result, re) {
    var g = _groups.get(re);
    return Object.keys(g).reduce(function(groups, name) {
      var i = g[name];
      if (typeof i == "number")
        groups[name] = result[i];
      else {
        for (var k = 0; result[i[k]] === void 0 && k + 1 < i.length; )
          k++;
        groups[name] = result[i[k]];
      }
      return groups;
    }, /* @__PURE__ */ Object.create(null));
  }
  return _inherits3(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function(str) {
    var result = _super.exec.call(this, str);
    if (result) {
      result.groups = buildGroups(result, this);
      var indices = result.indices;
      indices && (indices.groups = buildGroups(indices, this));
    }
    return result;
  }, BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
    if (typeof substitution == "string") {
      var groups = _groups.get(this);
      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
        var group = groups[name];
        return "$" + (Array.isArray(group) ? group.join("$") : group);
      }));
    }
    if (typeof substitution == "function") {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function() {
        var args = arguments;
        return typeof args[args.length - 1] != "object" && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }
    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}
function _inherits3(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf3(subClass, superClass);
}
function _setPrototypeOf3(o, p) {
  return _setPrototypeOf3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf3(o, p);
}
var clanIdCache = {}, toPlayerId = function(player) {
  return typeof player == "string" ? (0, import_kolmafia21.getPlayerId)(player) : player;
}, LOG_FAX_PATTERN = /* @__PURE__ */ _wrapRegExp(/(\d{2}\/\d{2}\/\d{2}, \d{2}:\d{2}(?:AM|PM): )<a [^>]+>([^<]+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
}), WHITELIST_DEGREE_PATTERN = /* @__PURE__ */ _wrapRegExp(/(.*?) \(\xB0(\d+)\)/, {
  name: 1,
  degree: 2
}), Clan = /* @__PURE__ */ function() {
  function Clan2(id, name) {
    _classCallCheck7(this, Clan2), _defineProperty7(this, "id", void 0), _defineProperty7(this, "name", void 0), this.id = id, this.name = name;
  }
  return _createClass7(Clan2, [{
    key: "_check",
    value: function() {
      if (this.id !== (0, import_kolmafia21.getClanId)())
        throw new Error("You are no longer a member of this clan");
    }
  }, {
    key: "join",
    value: function() {
      return Clan2.join(this.id);
    }
  }, {
    key: "check",
    value: function() {
      return (0, import_kolmafia21.visitUrl)("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
  }, {
    key: "getCurrentFax",
    value: function() {
      this._check();
      var logs = (0, import_kolmafia21.visitUrl)("clan_log.php"), lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax)
        return null;
      var _lastFax = _slicedToArray8(lastFax, 4), monsterName = _lastFax[3];
      return monsterName ? import_kolmafia21.Monster.get(monsterName) : null;
    }
  }, {
    key: "getRanks",
    value: function() {
      this._check();
      var page = (0, import_kolmafia21.visitUrl)("clan_whitelist.php");
      return (0, import_kolmafia21.xpath)(page, '//select[@name="level"]//option').map(function(option) {
        var validHtml = "<select>".concat(option, "</select>"), match = (0, import_kolmafia21.xpath)(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN), id = (0, import_kolmafia21.xpath)(validHtml, "//@value")[0];
        if (!match || !id)
          return null;
        var _match = _slicedToArray8(match, 3), name = _match[1], degree = _match[2];
        return {
          name: name,
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(notNull);
    }
  }, {
    key: "addPlayerToWhitelist",
    value: function(player, rankName) {
      var title = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      this._check();
      var playerId = toPlayerId(player), ranks = this.getRanks(), rank = rankName ? ranks.find(function(r) {
        return r.name === rankName;
      }) : ranks.sort(function(a, b) {
        return a.degree - b.degree;
      })[0];
      if (!rank)
        return !1;
      var result = (0, import_kolmafia21.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
  }, {
    key: "removePlayerFromWhitelist",
    value: function(player) {
      this._check();
      var playerId = toPlayerId(player), result = (0, import_kolmafia21.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
  }, {
    key: "getMeatInCoffer",
    value: function() {
      this._check();
      var page = (0, import_kolmafia21.visitUrl)("clan_stash.php"), _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"], _ref2 = _slicedToArray8(_ref, 2), meat = _ref2[1];
      return parseNumber(meat);
    }
  }, {
    key: "putMeatInCoffer",
    value: function(amount) {
      this._check();
      var result = (0, import_kolmafia21.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
  }, {
    key: "take",
    value: function(items) {
      this._check();
      var map = arrayToCountedMap(items);
      return map.forEach(function(quantity, item6) {
        var needed = Math.max(0, quantity - (0, import_kolmafia21.availableAmount)(item6));
        if (needed === 0)
          return map.set(item6, 0);
        var foldGroup = getFoldGroup(item6), _iterator = _createForOfIteratorHelper6(foldGroup), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            for (var foldable = _step.value, quantityToFold = Math.min(needed, (0, import_kolmafia21.availableAmount)(foldable)), _i3 = 0; _i3 < quantityToFold; _i3++)
              (0, import_kolmafia21.cliExecute)("fold ".concat(item6.name)), needed--;
            return map.set(item6, needed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        (0, import_kolmafia21.refreshStash)();
        for (var _i2 = 0, _arr2 = [item6].concat(_toConsumableArray5(foldGroup)); _i2 < _arr2.length; _i2++) {
          var matchingItem = _arr2[_i2], quantityToTake = Math.min(needed, (0, import_kolmafia21.stashAmount)(matchingItem));
          if (quantityToTake !== 0) {
            if (!(0, import_kolmafia21.takeStash)(quantityToTake, matchingItem))
              return;
            if (matchingItem === item6)
              needed -= quantityToTake;
            else
              for (var i = 0; i < quantityToTake; i++)
                (0, import_kolmafia21.cliExecute)("fold ".concat(matchingItem.name)), needed--;
          }
        }
      }), Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "put",
    value: function(items) {
      this._check();
      var map = arrayToCountedMap(items);
      if (!this.check())
        throw new Error("Wanted to return ".concat(countedMapToString(map), " to ").concat(this.name, " but KoLmafia's clan data is out of sync"));
      return map.forEach(function(quantity, item6) {
        (0, import_kolmafia21.retrieveItem)(quantity, item6);
        var returned = Math.min(quantity, (0, import_kolmafia21.availableAmount)(item6));
        (0, import_kolmafia21.putStash)(returned, item6), map.set(item6, quantity - returned);
      }), Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "withStash",
    value: function(items, callback) {
      var _this = this;
      this._check();
      var map = arrayToCountedMap(items);
      return Clan2._withStash(function() {
        return _this.take(map);
      }, function(borrowed) {
        return _this.put(borrowed);
      }, callback);
    }
  }], [{
    key: "_join",
    value: function(id) {
      var result = (0, import_kolmafia21.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));
      if (!result.includes("clanhalltop.gif"))
        throw new Error("Could not join clan");
      return Clan2.get();
    }
  }, {
    key: "_withStash",
    value: function(borrowFn, returnFn, callback) {
      var borrowed = borrowFn(), map = arrayToCountedMap(borrowed);
      try {
        return callback(borrowed);
      } finally {
        if (map.size > 0) {
          var returned = arrayToCountedMap(returnFn(borrowed));
          map.forEach(function(quantity, item6) {
            var remaining = quantity - (returned.get(item6) || 0);
            remaining > 0 ? map.set(item6, remaining) : map.delete(item6);
          }), map.size > 0 && logger_default.error("Failed to return <b>".concat(countedMapToString(map), "</b> to <b>").concat(this.name, "</b> stash"));
        }
      }
    }
  }, {
    key: "join",
    value: function(clanIdOrName) {
      var clanId;
      if (typeof clanIdOrName == "string") {
        var clanName = clanIdOrName.toLowerCase();
        if (clanName === (0, import_kolmafia21.getClanName)().toLowerCase())
          return Clan2.get();
        if (!(clanName in clanIdCache)) {
          var clan = Clan2.getWhitelisted().find(function(c) {
            return c.name.toLowerCase() === clanName;
          });
          if (!clan)
            throw new Error("Player is not whitelisted to clan");
          clanIdCache[clanName] = clan.id;
        }
        clanId = clanIdCache[clanName];
      } else if (clanId = clanIdOrName, clanId === (0, import_kolmafia21.getClanId)())
        return Clan2.get();
      return Clan2._join(clanId);
    }
  }, {
    key: "with",
    value: function(clanIdOrName, callback) {
      var startingClan = Clan2.get(), clan = Clan2.join(clanIdOrName);
      try {
        return callback(clan);
      } finally {
        startingClan.join();
      }
    }
  }, {
    key: "withStash",
    value: function(clanIdOrName, items, callback) {
      return Clan2._withStash(function() {
        return Clan2.with(clanIdOrName, function(clan) {
          return clan.take(items);
        });
      }, function(borrowed) {
        return Clan2.with(clanIdOrName, function(clan) {
          return clan.put(borrowed);
        });
      }, callback);
    }
  }, {
    key: "get",
    value: function() {
      return new Clan2((0, import_kolmafia21.getClanId)(), (0, import_kolmafia21.getClanName)());
    }
  }, {
    key: "getWhitelisted",
    value: function() {
      var page = (0, import_kolmafia21.visitUrl)("clan_signup.php");
      return (0, import_kolmafia21.xpath)(page, '//select[@name="whichclan"]//option').map(function(option) {
        var validHtml = "<select>".concat(option, "</select>"), id = Number.parseInt((0, import_kolmafia21.xpath)(validHtml, "//@value")[0]), name = (0, import_kolmafia21.xpath)(validHtml, "//text()")[0];
        return new Clan2(id, name);
      });
    }
  }]), Clan2;
}();

// node_modules/libram/dist/challengePaths/index.js
init_kolmafia_polyfill();

// node_modules/libram/dist/challengePaths/2015/CommunityService.js
init_kolmafia_polyfill();
var import_kolmafia22 = require("kolmafia");
var _templateObject90, _templateObject234, _templateObject325, _templateObject421, _templateObject518, _templateObject615, _templateObject713, _templateObject811, _templateObject99, _templateObject108, _templateObject117, _templateObject127, _templateObject137, _templateObject145, _templateObject155, _templateObject165, _templateObject175, _templateObject185, _templateObject195, _templateObject205, _templateObject2110, _templateObject2210, _templateObject235, _templateObject244, _templateObject254, _templateObject264, _templateObject274;
function _slicedToArray9(arr, i) {
  return _arrayWithHoles9(arr) || _iterableToArrayLimit9(arr, i) || _unsupportedIterableToArray13(arr, i) || _nonIterableRest9();
}
function _nonIterableRest9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray13(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray13(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray13(o, minLen);
  }
}
function _arrayLikeToArray13(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit9(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles9(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck8(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey9(descriptor.key), descriptor);
  }
}
function _createClass8(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties8(Constructor.prototype, protoProps), staticProps && _defineProperties8(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty8(obj, key, value) {
  return key = _toPropertyKey9(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey9(arg) {
  var key = _toPrimitive9(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive9(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral22(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var thralls = /* @__PURE__ */ new Map([[$stat(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral22(["muscle"]))), $thrall(_templateObject234 || (_templateObject234 = _taggedTemplateLiteral22(["Elbow Macaroni"])))], [$stat(_templateObject325 || (_templateObject325 = _taggedTemplateLiteral22(["moxie"]))), $thrall(_templateObject421 || (_templateObject421 = _taggedTemplateLiteral22(["Penne Dreadful"])))]]), statCommunityServicePredictor = function(stat) {
  return function() {
    return 60 - Math.floor(1 / 30 * ((0, import_kolmafia22.myBuffedstat)(stat) - (0, import_kolmafia22.myBasestat)(thralls.get(stat) === (0, import_kolmafia22.myThrall)() && !have($effect(_templateObject518 || (_templateObject518 = _taggedTemplateLiteral22(["Expert Oiliness"])))) ? $stat(_templateObject615 || (_templateObject615 = _taggedTemplateLiteral22(["mysticality"]))) : stat)));
  };
}, visitCouncil = function() {
  return (0, import_kolmafia22.visitUrl)("council.php");
}, CommunityService = /* @__PURE__ */ function() {
  function CommunityService2(id, stat, property, predictor, maximizeRequirements) {
    _classCallCheck8(this, CommunityService2), _defineProperty8(this, "choice", void 0), _defineProperty8(this, "stat", void 0), _defineProperty8(this, "property", void 0), _defineProperty8(this, "predictor", void 0), _defineProperty8(this, "maximizeRequirements", void 0), this.choice = id, this.stat = stat, this.property = property, this.predictor = predictor, this.maximizeRequirements = maximizeRequirements;
  }
  return _createClass8(CommunityService2, [{
    key: "id",
    get: function() {
      return this.choice;
    }
  }, {
    key: "statName",
    get: function() {
      return this.stat;
    }
  }, {
    key: "name",
    get: function() {
      return this.property;
    }
  }, {
    key: "prediction",
    get: function() {
      return this.predictor();
    }
  }, {
    key: "requirement",
    get: function() {
      return this.maximizeRequirements;
    }
  }, {
    key: "isDone",
    value: function() {
      return get("csServicesPerformed").includes(this.property);
    }
  }, {
    key: "maximize",
    value: function() {
      this.maximizeRequirements && this.maximizeRequirements.maximize();
    }
  }, {
    key: "do",
    value: function() {
      get("csServicesPerformed").trim().length === 0 && visitCouncil(), visitCouncil();
      var councilText = (0, import_kolmafia22.runChoice)(this.choice);
      return this._verifyIsDone(councilText);
    }
  }, {
    key: "run",
    value: function(prepare) {
      var maxTurns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0;
      if (this.isDone())
        return "already completed";
      var startTime = Date.now(), startTurns = (0, import_kolmafia22.myTurncount)(), additionalTurns;
      try {
        var _prepare;
        additionalTurns = (_prepare = prepare()) !== null && _prepare !== void 0 ? _prepare : 0;
      } catch (e) {
        return (0, import_kolmafia22.print)("".concat(e), "red"), "failed";
      }
      var prediction = this.predictor(), council = visitCouncil(), turns = this._actualCost(council);
      return turns ? turns > Math.min(maxTurns, (0, import_kolmafia22.myAdventures)()) || !this.do() ? "failed" : (CommunityService2.log[this.property] = {
        predictedTurns: prediction + additionalTurns,
        turnCost: (0, import_kolmafia22.myTurncount)() - startTurns,
        seconds: (Date.now() - startTime) / 1e3,
        type: "test"
      }, "completed") : "already completed";
    }
  }, {
    key: "_verifyIsDone",
    value: function(councilText) {
      return !councilText.includes("<input type=hidden name=option value=".concat(this.choice, ">"));
    }
  }, {
    key: "verifyIsDone",
    value: function() {
      return this._verifyIsDone(visitCouncil());
    }
  }, {
    key: "_actualCost",
    value: function(councilText) {
      var match = councilText.match("<input type=hidden name=option value=".concat(this.id, ">.*?Perform Service \\((\\d+) Adventures\\)"));
      return match ? parseInt(match[1]) : 0;
    }
  }, {
    key: "actualCost",
    value: function() {
      return this._actualCost(visitCouncil());
    }
  }], [{
    key: "logTask",
    value: function(name, action) {
      var _action, startTime = Date.now(), startTurns = (0, import_kolmafia22.myTurncount)(), estimatedTurns = (_action = action()) !== null && _action !== void 0 ? _action : 0;
      CommunityService2.log[name] = {
        type: "task",
        turnCost: (0, import_kolmafia22.myTurncount)() - startTurns,
        predictedTurns: estimatedTurns,
        seconds: (Date.now() - startTime) / 1e3
      };
    }
  }, {
    key: "printLog",
    value: function() {
      for (var colour = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "blue", logEntries = Object.entries(CommunityService2.log), _i = 0, _logEntries = logEntries; _i < _logEntries.length; _i++) {
        var _logEntries$_i = _slicedToArray9(_logEntries[_i], 2), testName = _logEntries$_i[0], testEntry = _logEntries$_i[1], type = testEntry.type, predictedTurns = testEntry.predictedTurns, turnCost = testEntry.turnCost, seconds = testEntry.seconds;
        type === "test" ? ((0, import_kolmafia22.print)("We predicted the ".concat(testName, " test would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour), (0, import_kolmafia22.print)("".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour)) : (predictedTurns === 0 && turnCost === 0 || (0, import_kolmafia22.print)("We predicted the task ".concat(testName, " would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour), (0, import_kolmafia22.print)("The task ".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour));
      }
      var totalTime = sum(logEntries, function(_ref) {
        var _ref2 = _slicedToArray9(_ref, 2), testEntry2 = _ref2[1];
        return testEntry2.seconds;
      });
      (0, import_kolmafia22.print)("All together, you have spent ".concat(totalTime.toFixed(1), " seconds during this Community Service run"), colour);
    }
  }]), CommunityService2;
}();
_defineProperty8(CommunityService, "log", {});
_defineProperty8(CommunityService, "HP", new CommunityService(1, "HP", "Donate Blood", function() {
  return 60 - Math.floor(((0, import_kolmafia22.myMaxhp)() - (0, import_kolmafia22.myBuffedstat)($stat(_templateObject713 || (_templateObject713 = _taggedTemplateLiteral22(["muscle"])))) - 3) / 30);
}, new Requirement(["HP"], {})));
_defineProperty8(CommunityService, "Muscle", new CommunityService(2, "Muscle", "Feed The Children", statCommunityServicePredictor($stat(_templateObject811 || (_templateObject811 = _taggedTemplateLiteral22(["Muscle"])))), new Requirement(["Muscle"], {})));
_defineProperty8(CommunityService, "Mysticality", new CommunityService(3, "Mysticality", "Build Playground Mazes", statCommunityServicePredictor($stat(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral22(["Mysticality"])))), new Requirement(["Mysticality"], {})));
_defineProperty8(CommunityService, "Moxie", new CommunityService(4, "Moxie", "Feed Conspirators", statCommunityServicePredictor($stat(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral22(["Moxie"])))), new Requirement(["Moxie"], {})));
_defineProperty8(CommunityService, "FamiliarWeight", new CommunityService(5, "Familiar Weight", "Breed More Collies", function() {
  return 60 - Math.floor(((0, import_kolmafia22.familiarWeight)((0, import_kolmafia22.myFamiliar)()) + (0, import_kolmafia22.weightAdjustment)()) / 5);
}, new Requirement(["Familiar Weight"], {})));
_defineProperty8(CommunityService, "WeaponDamage", new CommunityService(6, "Weapon Damage", "Reduce Gazelle Population", function() {
  var weaponPower = (0, import_kolmafia22.getPower)((0, import_kolmafia22.equippedItem)($slot(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral22(["weapon"]))))), offhandPower = (0, import_kolmafia22.toSlot)((0, import_kolmafia22.equippedItem)($slot(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral22(["off-hand"]))))) === $slot(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral22(["weapon"]))) ? (0, import_kolmafia22.getPower)((0, import_kolmafia22.equippedItem)($slot(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral22(["off-hand"]))))) : 0, familiarPower = (0, import_kolmafia22.toSlot)((0, import_kolmafia22.equippedItem)($slot(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral22(["familiar"]))))) === $slot(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral22(["weapon"]))) ? (0, import_kolmafia22.getPower)((0, import_kolmafia22.equippedItem)($slot(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral22(["familiar"]))))) : 0, multiplier = have($effect(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral22(["Bow-Legged Swagger"])))) ? 2 : 1;
  return 60 - Math.floor(multiplier * (get2("Weapon Damage") - 0.15 * (weaponPower + offhandPower + familiarPower)) / 50 + 1e-3) - Math.floor(multiplier * get2("Weapon Damage Percent") / 50 + 1e-3);
}, new Requirement(["Weapon Damage", "Weapon Damage Percent"], {})));
_defineProperty8(CommunityService, "SpellDamage", new CommunityService(7, "Spell Damage", "Make Sausage", function() {
  var dragonfishDamage = (0, import_kolmafia22.myFamiliar)() === $familiar(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral22(["Magic Dragonfish"]))) ? (0, import_kolmafia22.numericModifier)($familiar(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral22(["Magic Dragonfish"]))), "Spell Damage Percent", (0, import_kolmafia22.familiarWeight)($familiar(_templateObject2110 || (_templateObject2110 = _taggedTemplateLiteral22(["Magic Dragonfish"])))) + (0, import_kolmafia22.weightAdjustment)(), $item.none) : 0;
  return 60 - Math.floor(get2("Spell Damage") / 50 + 1e-3) - Math.floor((get2("Spell Damage Percent") - dragonfishDamage) / 50 + 1e-3);
}, new Requirement(["Spell Damage", "Spell Damage Percent"], {})));
_defineProperty8(CommunityService, "Noncombat", new CommunityService(8, "Non-Combat", "Be a Living Statue", function() {
  var noncombatRate = -1 * get2("Combat Rate"), unsoftcappedRate = noncombatRate > 25 ? 25 + (noncombatRate - 25) * 5 : noncombatRate;
  return 60 - 3 * Math.floor(unsoftcappedRate / 5);
}, new Requirement(["-combat"], {})));
_defineProperty8(CommunityService, "BoozeDrop", new CommunityService(9, "Item Drop", "Make Margaritas", function() {
  var mummingCostume = MummingTrunk_exports.currentCostumes().get((0, import_kolmafia22.myFamiliar)()), mummingBuff = mummingCostume && mummingCostume[0] === "Item Drop" ? mummingCostume[1] : 0, familiarItemDrop = (0, import_kolmafia22.numericModifier)((0, import_kolmafia22.myFamiliar)(), "Item Drop", (0, import_kolmafia22.familiarWeight)((0, import_kolmafia22.myFamiliar)()) + (0, import_kolmafia22.weightAdjustment)(), (0, import_kolmafia22.equippedItem)($slot(_templateObject2210 || (_templateObject2210 = _taggedTemplateLiteral22(["familiar"]))))) + mummingBuff - (0, import_kolmafia22.numericModifier)((0, import_kolmafia22.equippedItem)($slot(_templateObject235 || (_templateObject235 = _taggedTemplateLiteral22(["familiar"])))), "Item Drop"), familiarBoozeDrop = (0, import_kolmafia22.numericModifier)((0, import_kolmafia22.myFamiliar)(), "Booze Drop", (0, import_kolmafia22.familiarWeight)((0, import_kolmafia22.myFamiliar)()) + (0, import_kolmafia22.weightAdjustment)(), (0, import_kolmafia22.equippedItem)($slot(_templateObject244 || (_templateObject244 = _taggedTemplateLiteral22(["familiar"]))))) - (0, import_kolmafia22.numericModifier)((0, import_kolmafia22.equippedItem)($slot(_templateObject254 || (_templateObject254 = _taggedTemplateLiteral22(["familiar"])))), "Booze Drop"), multiplier = (0, import_kolmafia22.haveEquipped)($item(_templateObject264 || (_templateObject264 = _taggedTemplateLiteral22(["broken champagne bottle"])))) && get("garbageChampagneCharge") > 0 ? 0.5 : 1;
  return 60 - Math.floor(multiplier * (get2("Item Drop") - familiarItemDrop) / 30 + 1e-3) - Math.floor((get2("Booze Drop") - familiarBoozeDrop) / 15 + 1e-3);
}, new Requirement(["Item Drop", "2 Booze Drop"], {
  preventEquip: $items(_templateObject274 || (_templateObject274 = _taggedTemplateLiteral22(["broken champagne bottle"])))
})));
_defineProperty8(CommunityService, "HotRes", new CommunityService(10, "Hot Resistance", "Clean Steam Tunnels", function() {
  return 60 - get2("Hot Resistance");
}, new Requirement(["Hot Resistance"], {})));
_defineProperty8(CommunityService, "CoilWire", new CommunityService(11, "Coil Wire", "Coil Wire", function() {
  return 60;
}, new Requirement([], {})));
_defineProperty8(CommunityService, "donate", function() {
  visitCouncil(), (0, import_kolmafia22.visitUrl)("choice.php?whichchoice=1089&option=30");
});

// node_modules/libram/dist/counter.js
var counter_exports = {};
__export(counter_exports, {
  exists: function() {
    return exists;
  },
  get: function() {
    return get3;
  },
  set: function() {
    return set2;
  }
});
init_kolmafia_polyfill();
var import_kolmafia23 = require("kolmafia");
function get3(counter) {
  var value = (0, import_kolmafia23.getCounter)(counter);
  return value === -1 ? (0, import_kolmafia23.getCounters)(counter, -1, -1).trim() === "" ? 1 / 0 : -1 : value;
}
function exists(counter) {
  return (0, import_kolmafia23.getCounter)(counter) !== -1 || (0, import_kolmafia23.getCounters)(counter, -1, -1).trim() !== "";
}
function set2(counter, duration) {
  return (0, import_kolmafia23.cliExecute)("counters add ".concat(duration, " ").concat(counter)), get3(counter) !== null;
}

// node_modules/libram/dist/since.js
init_kolmafia_polyfill();
var import_kolmafia24 = require("kolmafia");
function _defineProperties9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey10(descriptor.key), descriptor);
  }
}
function _createClass9(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties9(Constructor.prototype, protoProps), staticProps && _defineProperties9(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey10(arg) {
  var key = _toPrimitive10(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive10(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck9(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _inherits4(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf4(subClass, superClass);
}
function _createSuper3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct3();
  return function() {
    var Super = _getPrototypeOf3(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf3(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn3(this, result);
  };
}
function _possibleConstructorReturn3(self2, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized3(self2);
}
function _assertThisInitialized3(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _wrapNativeSuper3(Class5) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper3 = function(Class6) {
    if (Class6 === null || !_isNativeFunction3(Class6))
      return Class6;
    if (typeof Class6 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache != "undefined") {
      if (_cache.has(Class6))
        return _cache.get(Class6);
      _cache.set(Class6, Wrapper);
    }
    function Wrapper() {
      return _construct3(Class6, arguments, _getPrototypeOf3(this).constructor);
    }
    return Wrapper.prototype = Object.create(Class6.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf4(Wrapper, Class6);
  }, _wrapNativeSuper3(Class5);
}
function _construct3(Parent, args, Class5) {
  return _isNativeReflectConstruct3() ? _construct3 = Reflect.construct.bind() : _construct3 = function(Parent2, args2, Class6) {
    var a = [null];
    a.push.apply(a, args2);
    var Constructor = Function.bind.apply(Parent2, a), instance = new Constructor();
    return Class6 && _setPrototypeOf4(instance, Class6.prototype), instance;
  }, _construct3.apply(null, arguments);
}
function _isNativeReflectConstruct3() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _isNativeFunction3(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf4(o, p) {
  return _setPrototypeOf4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf4(o, p);
}
function _getPrototypeOf3(o) {
  return _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf3(o);
}
var KolmafiaVersionError = /* @__PURE__ */ function(_Error) {
  _inherits4(KolmafiaVersionError2, _Error);
  var _super = _createSuper3(KolmafiaVersionError2);
  function KolmafiaVersionError2(message) {
    var _this;
    return _classCallCheck9(this, KolmafiaVersionError2), _this = _super.call(this, message), Object.setPrototypeOf(_assertThisInitialized3(_this), KolmafiaVersionError2.prototype), _this;
  }
  return _createClass9(KolmafiaVersionError2);
}(/* @__PURE__ */ _wrapNativeSuper3(Error));
KolmafiaVersionError.prototype.name = "KolmafiaVersionError";
function getScriptName() {
  var _require$main, scriptName = (_require$main = require.main) === null || _require$main === void 0 ? void 0 : _require$main.id;
  return scriptName ? "'".concat(scriptName, "'") : "This script";
}
function sinceKolmafiaRevision(revision) {
  if (!Number.isInteger(revision))
    throw new TypeError("Invalid revision number ".concat(revision, " (must be an integer)"));
  var currentRevision = (0, import_kolmafia24.getRevision)();
  if (currentRevision > 0 && currentRevision < revision)
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires revision r").concat(revision, " of kolmafia or higher (current: ").concat((0, import_kolmafia24.getRevision)(), "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
}

// node_modules/grimoire-kolmafia/dist/combat.js
function _inherits5(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf5(subClass, superClass);
}
function _setPrototypeOf5(o, p) {
  return _setPrototypeOf5 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf5(o, p);
}
function _createSuper4(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct4();
  return function() {
    var Super = _getPrototypeOf4(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf4(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn4(this, result);
  };
}
function _possibleConstructorReturn4(self2, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized4(self2);
}
function _assertThisInitialized4(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _isNativeReflectConstruct4() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf4(o) {
  return _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf4(o);
}
function _toConsumableArray6(arr) {
  return _arrayWithoutHoles6(arr) || _iterableToArray6(arr) || _unsupportedIterableToArray14(arr) || _nonIterableSpread6();
}
function _nonIterableSpread6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray6(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles6(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray14(arr);
}
function _createForOfIteratorHelper7(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray14(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray14(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray14(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray14(o, minLen);
  }
}
function _arrayLikeToArray14(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck10(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties10(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey11(descriptor.key), descriptor);
  }
}
function _createClass10(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties10(Constructor.prototype, protoProps), staticProps && _defineProperties10(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey11(arg) {
  var key = _toPrimitive11(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive11(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function undelay(macro) {
  return macro instanceof Macro ? macro : macro();
}
var CombatStrategy = /* @__PURE__ */ function() {
  function CombatStrategy2() {
    _classCallCheck10(this, CombatStrategy2), this.macros = /* @__PURE__ */ new Map(), this.autoattacks = /* @__PURE__ */ new Map(), this.actions = /* @__PURE__ */ new Map(), this.ccs_entries = /* @__PURE__ */ new Map();
  }
  return _createClass10(CombatStrategy2, [{
    key: "macro",
    value: function(_macro, monsters, prepend) {
      var _a, _b;
      if (monsters === void 0)
        this.default_macro === void 0 && (this.default_macro = []), prepend ? this.default_macro.unshift(_macro) : this.default_macro.push(_macro);
      else {
        monsters instanceof import_kolmafia25.Monster && (monsters = [monsters]);
        var _iterator = _createForOfIteratorHelper7(monsters), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var monster = _step.value;
            this.macros.has(monster) || this.macros.set(monster, []), prepend ? (_a = this.macros.get(monster)) === null || _a === void 0 || _a.unshift(_macro) : (_b = this.macros.get(monster)) === null || _b === void 0 || _b.push(_macro);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return this;
    }
  }, {
    key: "autoattack",
    value: function(macro, monsters, prepend) {
      var _a, _b;
      if (monsters === void 0)
        this.default_autoattack === void 0 && (this.default_autoattack = []), prepend ? this.default_autoattack.unshift(macro) : this.default_autoattack.push(macro);
      else {
        monsters instanceof import_kolmafia25.Monster && (monsters = [monsters]);
        var _iterator2 = _createForOfIteratorHelper7(monsters), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var monster = _step2.value;
            this.autoattacks.has(monster) || this.autoattacks.set(monster, []), prepend ? (_a = this.autoattacks.get(monster)) === null || _a === void 0 || _a.unshift(macro) : (_b = this.autoattacks.get(monster)) === null || _b === void 0 || _b.push(macro);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "startingMacro",
    value: function(macro, prepend) {
      return this.starting_macro === void 0 && (this.starting_macro = []), prepend ? this.starting_macro.unshift(macro) : this.starting_macro.push(macro), this;
    }
  }, {
    key: "action",
    value: function(_action, monsters) {
      if (monsters === void 0)
        this.default_action = _action;
      else if (monsters instanceof import_kolmafia25.Monster)
        this.actions.set(monsters, _action);
      else {
        var _iterator3 = _createForOfIteratorHelper7(monsters), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var monster = _step3.value;
            this.actions.set(monster, _action);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return this;
    }
  }, {
    key: "ccs",
    value: function(entry, monsters, prepend) {
      var _a, _b;
      monsters instanceof import_kolmafia25.Monster && (monsters = [monsters]);
      var _iterator4 = _createForOfIteratorHelper7(monsters), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var monster = _step4.value;
          this.ccs_entries.has(monster) || this.ccs_entries.set(monster, []), prepend ? (_a = this.ccs_entries.get(monster)) === null || _a === void 0 || _a.unshift(entry) : (_b = this.ccs_entries.get(monster)) === null || _b === void 0 || _b.push(entry);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return this;
    }
  }, {
    key: "can",
    value: function(action) {
      return action === this.default_action ? !0 : Array.from(this.actions.values()).includes(action);
    }
  }, {
    key: "getDefaultAction",
    value: function() {
      return this.default_action;
    }
  }, {
    key: "where",
    value: function(action) {
      var _this = this;
      return Array.from(this.actions.keys()).filter(function(key) {
        return _this.actions.get(key) === action;
      });
    }
  }, {
    key: "currentStrategy",
    value: function(monster) {
      var _a;
      return (_a = this.actions.get(monster)) !== null && _a !== void 0 ? _a : this.default_action;
    }
  }, {
    key: "clone",
    value: function() {
      var result = new CombatStrategy2();
      this.starting_macro && (result.starting_macro = _toConsumableArray6(this.starting_macro)), this.default_macro && (result.default_macro = _toConsumableArray6(this.default_macro));
      var _iterator5 = _createForOfIteratorHelper7(this.macros), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var pair = _step5.value;
          result.macros.set(pair[0], _toConsumableArray6(pair[1]));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      this.default_autoattack && (result.default_autoattack = _toConsumableArray6(this.default_autoattack));
      var _iterator6 = _createForOfIteratorHelper7(this.autoattacks), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var _pair = _step6.value;
          result.autoattacks.set(_pair[0], _toConsumableArray6(_pair[1]));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      result.default_action = this.default_action;
      var _iterator7 = _createForOfIteratorHelper7(this.actions), _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          var _pair2 = _step7.value;
          result.actions.set(_pair2[0], _pair2[1]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = _createForOfIteratorHelper7(this.ccs_entries), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          var _pair3 = _step8.value;
          result.ccs_entries.set(_pair3[0], _toConsumableArray6(_pair3[1]));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return result;
    }
  }, {
    key: "compile",
    value: function(resources, defaults, location) {
      var _a, _b, result = new Macro();
      this.starting_macro && result.step.apply(result, _toConsumableArray6(this.starting_macro.map(undelay)));
      var monster_macros = new CompressedMacro();
      this.macros.forEach(function(value, key) {
        var _Macro;
        monster_macros.add(key, (_Macro = new Macro()).step.apply(_Macro, _toConsumableArray6(value.map(undelay))));
      }), result.step(monster_macros.compile()), this.default_macro && result.step.apply(result, _toConsumableArray6(this.default_macro.map(undelay)));
      var monster_actions = new CompressedMacro();
      if (this.actions.forEach(function(action, key) {
        var _a2, _b2, macro2 = (_a2 = resources.getMacro(action)) !== null && _a2 !== void 0 ? _a2 : (_b2 = defaults == null ? void 0 : defaults[action]) === null || _b2 === void 0 ? void 0 : _b2.call(defaults, key);
        macro2 && monster_actions.add(key, new Macro().step(macro2));
      }), result.step(monster_actions.compile()), this.default_action) {
        var macro = (_a = resources.getMacro(this.default_action)) !== null && _a !== void 0 ? _a : (_b = defaults == null ? void 0 : defaults[this.default_action]) === null || _b === void 0 ? void 0 : _b.call(defaults, location);
        macro && result.step(macro);
      }
      return result;
    }
  }, {
    key: "compileAutoattack",
    value: function() {
      var result = new Macro(), monster_macros = new CompressedMacro();
      return this.autoattacks.forEach(function(value, key) {
        var _Macro2;
        monster_macros.add(key, (_Macro2 = new Macro()).step.apply(_Macro2, _toConsumableArray6(value.map(undelay))));
      }), result.step(monster_macros.compile()), this.default_autoattack && result.step.apply(result, _toConsumableArray6(this.default_autoattack.map(undelay))), result;
    }
  }, {
    key: "compileCcs",
    value: function() {
      var result = [], _iterator9 = _createForOfIteratorHelper7(this.ccs_entries), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          var ccs_entry = _step9.value;
          result.push.apply(result, ["[".concat(ccs_entry[0].name, "]")].concat(_toConsumableArray6(ccs_entry[1])));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return result;
    }
  }], [{
    key: "withActions",
    value: function(actions) {
      var CombatStrategyWithActions = /* @__PURE__ */ function(_this) {
        _inherits5(CombatStrategyWithActions2, _this);
        var _super = _createSuper4(CombatStrategyWithActions2);
        function CombatStrategyWithActions2() {
          return _classCallCheck10(this, CombatStrategyWithActions2), _super.apply(this, arguments);
        }
        return _createClass10(CombatStrategyWithActions2);
      }(this), proto = CombatStrategyWithActions.prototype, _iterator10 = _createForOfIteratorHelper7(actions), _step10;
      try {
        var _loop = function() {
          var action = _step10.value;
          proto[action] = function(monsters) {
            return this.action(action, monsters);
          };
        };
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; )
          _loop();
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return CombatStrategyWithActions;
    }
  }]), CombatStrategy2;
}(), CompressedMacro = /* @__PURE__ */ function() {
  function CompressedMacro2() {
    _classCallCheck10(this, CompressedMacro2), this.components = /* @__PURE__ */ new Map();
  }
  return _createClass10(CompressedMacro2, [{
    key: "add",
    value: function(monster, macro) {
      var _a, macro_text = macro.toString();
      macro_text.length !== 0 && (this.components.has(macro_text) ? (_a = this.components.get(macro_text)) === null || _a === void 0 || _a.push(monster) : this.components.set(macro_text, [monster]));
    }
  }, {
    key: "compile",
    value: function() {
      var result = new Macro();
      return this.components.forEach(function(monsters, macro) {
        var condition = monsters.map(function(mon) {
          return "monsterid ".concat(mon.id);
        }).join(" || ");
        result.if_(condition, macro);
      }), result;
    }
  }]), CompressedMacro2;
}(), CombatResources = /* @__PURE__ */ function() {
  function CombatResources2() {
    _classCallCheck10(this, CombatResources2), this.resources = /* @__PURE__ */ new Map();
  }
  return _createClass10(CombatResources2, [{
    key: "provide",
    value: function(action, resource) {
      resource !== void 0 && this.resources.set(action, resource);
    }
  }, {
    key: "has",
    value: function(action) {
      return this.resources.has(action);
    }
  }, {
    key: "all",
    value: function() {
      return Array.from(this.resources.values());
    }
  }, {
    key: "getMacro",
    value: function(action) {
      var resource = this.resources.get(action);
      if (resource !== void 0)
        return resource.do instanceof import_kolmafia25.Item ? new Macro().item(resource.do) : resource.do instanceof import_kolmafia25.Skill ? new Macro().skill(resource.do) : resource.do;
    }
  }]), CombatResources2;
}();

// node_modules/grimoire-kolmafia/dist/engine.js
init_kolmafia_polyfill();
var import_kolmafia27 = require("kolmafia");

// node_modules/grimoire-kolmafia/dist/outfit.js
init_kolmafia_polyfill();
var import_kolmafia26 = require("kolmafia");
var _templateObject91, _templateObject236, _templateObject326, _templateObject422, _templateObject519, _templateObject616, _templateObject714, _templateObject812, _templateObject910, _templateObject109, _templateObject118, _templateObject128, _templateObject138, _templateObject146, _templateObject156, _templateObject166, _templateObject176, _templateObject186, _templateObject196, _templateObject206, _templateObject2111, _templateObject2211, _templateObject237, _templateObject245, _templateObject255, _templateObject265, _templateObject275, _templateObject283, _templateObject293, _templateObject303, _templateObject3110, _templateObject327, _templateObject333, _templateObject343, _templateObject353, _templateObject362, _templateObject372, _templateObject382, _templateObject392, _templateObject402, _templateObject4110, _templateObject423, _templateObject432, _templateObject442, _templateObject452, _templateObject462, _templateObject472, _templateObject482, _templateObject492, _templateObject502;
function _slicedToArray10(arr, i) {
  return _arrayWithHoles10(arr) || _iterableToArrayLimit10(arr, i) || _unsupportedIterableToArray15(arr, i) || _nonIterableRest10();
}
function _nonIterableRest10() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit10(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles10(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys4(Object(source), !0).forEach(function(key) {
      _defineProperty9(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty9(obj, key, value) {
  return key = _toPropertyKey12(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _createForOfIteratorHelper8(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray15(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _taggedTemplateLiteral23(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray7(arr) {
  return _arrayWithoutHoles7(arr) || _iterableToArray7(arr) || _unsupportedIterableToArray15(arr) || _nonIterableSpread7();
}
function _nonIterableSpread7() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray15(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray15(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray15(o, minLen);
  }
}
function _iterableToArray7(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles7(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray15(arr);
}
function _arrayLikeToArray15(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck11(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties11(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey12(descriptor.key), descriptor);
  }
}
function _createClass11(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties11(Constructor.prototype, protoProps), staticProps && _defineProperties11(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey12(arg) {
  var key = _toPrimitive12(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive12(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
var weaponHands = function(i) {
  return i ? (0, import_kolmafia26.weaponHands)(i) : 0;
}, modeableCommands2 = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"], Outfit = /* @__PURE__ */ function() {
  function Outfit2() {
    _classCallCheck11(this, Outfit2), this.equips = /* @__PURE__ */ new Map(), this.riders = /* @__PURE__ */ new Map(), this.modes = {}, this.skipDefaults = !1, this.modifier = "", this.avoid = [];
  }
  return _createClass11(Outfit2, [{
    key: "equippedAmount",
    value: function(item6) {
      return _toConsumableArray7(this.equips.values()).filter(function(i) {
        return i === item6;
      }).length;
    }
  }, {
    key: "isAvailable",
    value: function(item6) {
      var _a;
      return !(!((_a = this.avoid) === null || _a === void 0) && _a.includes(item6) || !have(item6, this.equippedAmount(item6) + 1) || (0, import_kolmafia26.booleanModifier)(item6, "Single Equip") && this.equippedAmount(item6) > 0);
    }
  }, {
    key: "haveEquipped",
    value: function(item6, slot) {
      return slot === void 0 ? this.equippedAmount(item6) > 0 : this.equips.get(slot) === item6;
    }
  }, {
    key: "equipItemNone",
    value: function(item6, slot) {
      return item6 !== $item.none ? !1 : slot === void 0 ? !0 : this.equips.has(slot) ? !1 : (this.equips.set(slot, item6), !0);
    }
  }, {
    key: "equipNonAccessory",
    value: function(item6, slot) {
      if ($slots(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral23(["acc1, acc2, acc3"]))).includes((0, import_kolmafia26.toSlot)(item6)) || slot !== void 0 && slot !== (0, import_kolmafia26.toSlot)(item6) || this.equips.has((0, import_kolmafia26.toSlot)(item6)))
        return !1;
      switch ((0, import_kolmafia26.toSlot)(item6)) {
        case $slot(_templateObject236 || (_templateObject236 = _taggedTemplateLiteral23(["off-hand"]))):
          if (this.equips.has($slot(_templateObject326 || (_templateObject326 = _taggedTemplateLiteral23(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject422 || (_templateObject422 = _taggedTemplateLiteral23(["weapon"]))))) !== 1)
            return !1;
          break;
        case $slot(_templateObject519 || (_templateObject519 = _taggedTemplateLiteral23(["familiar"]))):
          if (this.familiar !== void 0 && !(0, import_kolmafia26.canEquip)(this.familiar, item6))
            return !1;
      }
      return (0, import_kolmafia26.toSlot)(item6) !== $slot(_templateObject616 || (_templateObject616 = _taggedTemplateLiteral23(["familiar"]))) && !(0, import_kolmafia26.canEquip)(item6) ? !1 : (this.equips.set((0, import_kolmafia26.toSlot)(item6), item6), !0);
    }
  }, {
    key: "equipAccessory",
    value: function(item6, slot) {
      var _this = this;
      if (![void 0].concat(_toConsumableArray7($slots(_templateObject714 || (_templateObject714 = _taggedTemplateLiteral23(["acc1, acc2, acc3"]))))).includes(slot) || (0, import_kolmafia26.toSlot)(item6) !== $slot(_templateObject812 || (_templateObject812 = _taggedTemplateLiteral23(["acc1"]))) || !(0, import_kolmafia26.canEquip)(item6))
        return !1;
      if (slot === void 0) {
        var empty = $slots(_templateObject910 || (_templateObject910 = _taggedTemplateLiteral23(["acc1, acc2, acc3"]))).find(function(s) {
          return !_this.equips.has(s);
        });
        if (empty === void 0)
          return !1;
        this.equips.set(empty, item6);
      } else {
        if (this.equips.has(slot))
          return !1;
        this.equips.set(slot, item6);
      }
      return !0;
    }
  }, {
    key: "equipUsingDualWield",
    value: function(item6, slot) {
      return ![void 0, $slot(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral23(["off-hand"])))].includes(slot) || (0, import_kolmafia26.toSlot)(item6) !== $slot(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral23(["weapon"]))) || this.equips.has($slot(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral23(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral23(["weapon"]))))) !== 1 || this.equips.has($slot(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral23(["off-hand"])))) || !have($skill(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral23(["Double-Fisted Skull Smashing"])))) || weaponHands(item6) !== 1 || !(0, import_kolmafia26.canEquip)(item6) ? !1 : (this.equips.set($slot(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral23(["off-hand"]))), item6), !0);
    }
  }, {
    key: "getHoldingFamiliar",
    value: function(item6) {
      switch ((0, import_kolmafia26.toSlot)(item6)) {
        case $slot(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral23(["weapon"]))):
          return $familiar(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral23(["Disembodied Hand"])));
        case $slot(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral23(["off-hand"]))):
          return $familiar(_templateObject206 || (_templateObject206 = _taggedTemplateLiteral23(["Left-Hand Man"])));
        default:
          return;
      }
    }
  }, {
    key: "equipUsingFamiliar",
    value: function(item6, slot) {
      if (![void 0, $slot(_templateObject2111 || (_templateObject2111 = _taggedTemplateLiteral23(["familiar"])))].includes(slot) || this.equips.has($slot(_templateObject2211 || (_templateObject2211 = _taggedTemplateLiteral23(["familiar"])))) || (0, import_kolmafia26.booleanModifier)(item6, "Single Equip"))
        return !1;
      var familiar = this.getHoldingFamiliar(item6);
      return familiar === void 0 || !this.equip(familiar) ? !1 : (this.equips.set($slot(_templateObject237 || (_templateObject237 = _taggedTemplateLiteral23(["familiar"]))), item6), !0);
    }
  }, {
    key: "equipItem",
    value: function(item6, slot) {
      return this.haveEquipped(item6, slot) || this.equipItemNone(item6, slot) || this.isAvailable(item6) && (this.equipNonAccessory(item6, slot) || this.equipAccessory(item6, slot) || this.equipUsingDualWield(item6, slot) || this.equipUsingFamiliar(item6, slot));
    }
  }, {
    key: "equipFamiliar",
    value: function(familiar) {
      if (familiar === this.familiar)
        return !0;
      if (this.familiar !== void 0 || familiar !== $familiar.none && (!have(familiar) || Array.from(this.riders.values()).includes(familiar)))
        return !1;
      var item6 = this.equips.get($slot(_templateObject245 || (_templateObject245 = _taggedTemplateLiteral23(["familiar"]))));
      return item6 !== void 0 && item6 !== $item.none && !(0, import_kolmafia26.canEquip)(familiar, item6) ? !1 : (this.familiar = familiar, !0);
    }
  }, {
    key: "equipSpec",
    value: function(spec) {
      for (var _this$avoid, _a, _b, _c, _d, succeeded = !0, _i = 0, _outfitSlots2 = outfitSlots; _i < _outfitSlots2.length; _i++) {
        var slotName = _outfitSlots2[_i], slot = (_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject255 || (_templateObject255 = _taggedTemplateLiteral23(["familiar"])))], ["offhand", $slot(_templateObject265 || (_templateObject265 = _taggedTemplateLiteral23(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia26.toSlot)(slotName), itemOrItems = spec[slotName];
        itemOrItems !== void 0 && !this.equip(itemOrItems, slot) && (succeeded = !1);
      }
      var _iterator = _createForOfIteratorHelper8((_b = spec == null ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var item6 = _step.value;
          this.equip(item6) || (succeeded = !1);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return (spec == null ? void 0 : spec.familiar) !== void 0 && (this.equip(spec.familiar) || (succeeded = !1)), (_this$avoid = this.avoid).push.apply(_this$avoid, _toConsumableArray7((_c = spec == null ? void 0 : spec.avoid) !== null && _c !== void 0 ? _c : [])), this.skipDefaults = this.skipDefaults || ((_d = spec.skipDefaults) !== null && _d !== void 0 ? _d : !1), spec.modifier && (this.modifier = this.modifier + (this.modifier ? ", " : "") + spec.modifier), spec.modes && (this.setModes(spec.modes) || (succeeded = !1)), succeeded;
    }
  }, {
    key: "equipFirst",
    value: function(things, slot) {
      var _this = this;
      return things.some(function(val) {
        return _this.equip(val, slot);
      });
    }
  }, {
    key: "equip",
    value: function(thing, slot) {
      var _this = this;
      return Array.isArray(thing) ? slot !== void 0 ? this.equipFirst(thing, slot) : thing.every(function(val) {
        return _this.equip(val);
      }) : thing instanceof import_kolmafia26.Item ? this.equipItem(thing, slot) : thing instanceof import_kolmafia26.Familiar ? this.equipFamiliar(thing) : thing instanceof Outfit2 ? this.equipSpec(thing.spec()) : this.equipSpec(thing);
    }
  }, {
    key: "bjornify",
    value: function(target) {
      var _this = this;
      var current = this.riders.get($slot(_templateObject275 || (_templateObject275 = _taggedTemplateLiteral23(["buddy-bjorn"]))));
      if (current)
        return !!(Array.isArray(target) ? target.includes(current) : current === target);
      if (Array.isArray(target)) {
        var fam = target.find(function(f) {
          return have(f) && _this.familiar !== f && _this.riders.get($slot(_templateObject283 || (_templateObject283 = _taggedTemplateLiteral23(["crown-of-thrones"])))) !== f;
        });
        return fam ? (this.riders.set($slot(_templateObject293 || (_templateObject293 = _taggedTemplateLiteral23(["buddy-bjorn"]))), fam), !0) : !1;
      } else
        return have(target) && this.familiar !== target && !Array.from(this.riders.values()).includes(target) ? (this.riders.set($slot(_templateObject303 || (_templateObject303 = _taggedTemplateLiteral23(["buddy-bjorn"]))), target), !0) : !1;
    }
  }, {
    key: "enthrone",
    value: function(target) {
      var _this = this;
      var current = this.riders.get($slot(_templateObject3110 || (_templateObject3110 = _taggedTemplateLiteral23(["crown-of-thrones"]))));
      if (current)
        return !!(Array.isArray(target) ? target.includes(current) : current === target);
      if (Array.isArray(target)) {
        var fam = target.find(function(f) {
          return have(f) && _this.familiar !== f && _this.riders.get($slot(_templateObject327 || (_templateObject327 = _taggedTemplateLiteral23(["buddy-bjorn"])))) !== f;
        });
        return fam ? (this.riders.set($slot(_templateObject333 || (_templateObject333 = _taggedTemplateLiteral23(["crown-of-thrones"]))), fam), !0) : !1;
      } else
        return have(target) && this.familiar !== target && !Array.from(this.riders.values()).includes(target) ? (this.riders.set($slot(_templateObject343 || (_templateObject343 = _taggedTemplateLiteral23(["crown-of-thrones"]))), target), !0) : !1;
    }
  }, {
    key: "setModes",
    value: function(modes) {
      for (var _a, _b, compatible = !0, _i2 = 0, _modeableCommands = modeableCommands2; _i2 < _modeableCommands.length; _i2++) {
        var mode = _modeableCommands[_i2];
        mode !== "retrocape" && this.modes[mode] && modes[mode] && this.modes[mode] !== modes[mode] && (compatible = !1);
      }
      return this.modes.retrocape && modes.retrocape && (this.modes.retrocape[0] && modes.retrocape[0] && this.modes.retrocape[0] !== modes.retrocape[0] && (compatible = !1), this.modes.retrocape[1] && modes.retrocape[1] && this.modes.retrocape[1] !== modes.retrocape[1] && (compatible = !1), this.modes.retrocape[0] = (_a = this.modes.retrocape[0]) !== null && _a !== void 0 ? _a : modes.retrocape[0], this.modes.retrocape[1] = (_b = this.modes.retrocape[1]) !== null && _b !== void 0 ? _b : modes.retrocape[1]), this.modes = _objectSpread4(_objectSpread4({}, modes), this.modes), compatible;
    }
  }, {
    key: "canEquip",
    value: function(thing, slot) {
      var outfit2 = this.clone();
      return outfit2.equip(thing, slot);
    }
  }, {
    key: "dress",
    value: function(extraOptions) {
      var _this = this;
      this.familiar && (0, import_kolmafia26.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values()), usedSlots = /* @__PURE__ */ new Set(), nonaccessorySlots = $slots(_templateObject353 || (_templateObject353 = _taggedTemplateLiteral23(["weapon, off-hand, hat, back, shirt, pants, familiar"]))), _iterator2 = _createForOfIteratorHelper8(nonaccessorySlots), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var slot = _step2.value;
          (targetEquipment.includes((0, import_kolmafia26.equippedItem)(slot)) && this.equips.get(slot) !== (0, import_kolmafia26.equippedItem)(slot) || this.avoid.includes((0, import_kolmafia26.equippedItem)(slot))) && (0, import_kolmafia26.equip)(slot, $item.none);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper8(nonaccessorySlots), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var _slot = _step3.value, equipment = this.equips.get(_slot);
          equipment && ((0, import_kolmafia26.equip)(_slot, equipment), usedSlots.add(_slot));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var accessorySlots = $slots(_templateObject362 || (_templateObject362 = _taggedTemplateLiteral23(["acc1, acc2, acc3"]))), accessoryEquips = accessorySlots.map(function(slot2) {
        return _this.equips.get(slot2);
      }).filter(function(item6) {
        return item6 !== void 0;
      }), missingAccessories = [], _iterator4 = _createForOfIteratorHelper8(accessoryEquips), _step4;
      try {
        var _loop = function() {
          var accessory2 = _step4.value, alreadyEquipped = accessorySlots.find(function(slot2) {
            return !usedSlots.has(slot2) && (0, import_kolmafia26.equippedItem)(slot2) === accessory2;
          });
          alreadyEquipped ? usedSlots.add(alreadyEquipped) : missingAccessories.push(accessory2);
        };
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; )
          _loop();
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      for (var _i3 = 0, _missingAccessories = missingAccessories; _i3 < _missingAccessories.length; _i3++) {
        var accessory = _missingAccessories[_i3], unusedSlot = accessorySlots.find(function(slot2) {
          return !usedSlots.has(slot2);
        });
        if (unusedSlot === void 0)
          throw "No accessory slots remaining";
        (0, import_kolmafia26.equip)(unusedSlot, accessory), usedSlots.add(unusedSlot);
      }
      var bjorn = this.riders.get($slot(_templateObject372 || (_templateObject372 = _taggedTemplateLiteral23(["buddy-bjorn"]))));
      bjorn && ((0, import_kolmafia26.myEnthronedFamiliar)() === bjorn && (0, import_kolmafia26.enthroneFamiliar)($familiar.none), (0, import_kolmafia26.myBjornedFamiliar)() !== bjorn && (0, import_kolmafia26.bjornifyFamiliar)(bjorn), usedSlots.add($slot(_templateObject382 || (_templateObject382 = _taggedTemplateLiteral23(["buddy-bjorn"])))));
      var crown = this.riders.get($slot(_templateObject392 || (_templateObject392 = _taggedTemplateLiteral23(["crown-of-thrones"]))));
      crown && ((0, import_kolmafia26.myBjornedFamiliar)() === crown && (0, import_kolmafia26.bjornifyFamiliar)($familiar.none), (0, import_kolmafia26.myEnthronedFamiliar)() !== crown && (0, import_kolmafia26.enthroneFamiliar)(crown), usedSlots.add($slot(_templateObject402 || (_templateObject402 = _taggedTemplateLiteral23(["crown-of-thrones"])))));
      var modes = convertToLibramModes(this.modes);
      if (this.modifier) {
        var allRequirements = [new Requirement([this.modifier], {
          preventSlot: _toConsumableArray7(usedSlots),
          preventEquip: this.avoid,
          modes: modes
        })];
        if (extraOptions && allRequirements.push(new Requirement([], extraOptions)), !Requirement.merge(allRequirements).maximize())
          throw "Unable to maximize ".concat(this.modifier);
        (0, import_kolmafia26.logprint)("Maximize: ".concat(this.modifier));
      }
      if (applyModes(modes), this.familiar !== void 0 && (0, import_kolmafia26.myFamiliar)() !== this.familiar)
        throw "Failed to fully dress (expected: familiar ".concat(this.familiar, ")");
      var _iterator5 = _createForOfIteratorHelper8(nonaccessorySlots), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var _slot2 = _step5.value;
          if (this.equips.has(_slot2) && (0, import_kolmafia26.equippedItem)(_slot2) !== this.equips.get(_slot2))
            throw "Failed to fully dress (expected: ".concat(_slot2, " ").concat(this.equips.get(_slot2), ")");
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      var _iterator6 = _createForOfIteratorHelper8(accessoryEquips), _step6;
      try {
        var _loop2 = function() {
          var accessory2 = _step6.value;
          if ((0, import_kolmafia26.equippedAmount)(accessory2) < accessoryEquips.filter(function(acc) {
            return acc === accessory2;
          }).length)
            throw "Failed to fully dress (expected: acc ".concat(accessory2, ")");
        };
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; )
          _loop2();
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      for (var _i4 = 0, _arr = [[$slot(_templateObject4110 || (_templateObject4110 = _taggedTemplateLiteral23(["buddy-bjorn"]))), import_kolmafia26.myBjornedFamiliar], [$slot(_templateObject423 || (_templateObject423 = _taggedTemplateLiteral23(["crown-of-thrones"]))), import_kolmafia26.myEnthronedFamiliar]]; _i4 < _arr.length; _i4++) {
        var _arr$_i = _slicedToArray10(_arr[_i4], 2), rider = _arr$_i[0], checkingFunction = _arr$_i[1], wanted = this.riders.get(rider);
        if (wanted && checkingFunction() !== wanted)
          throw "Failed to fully dress: (expected ".concat(rider, " ").concat(wanted, ")");
      }
    }
  }, {
    key: "clone",
    value: function() {
      var result = new Outfit2();
      return result.equips = new Map(this.equips), result.skipDefaults = this.skipDefaults, result.familiar = this.familiar, result.modifier = this.modifier, result.avoid = _toConsumableArray7(this.avoid), result.modes = _objectSpread4({}, this.modes), result;
    }
  }, {
    key: "spec",
    value: function() {
      for (var _a, result = {
        modifier: this.modifier,
        familiar: this.familiar,
        avoid: _toConsumableArray7(this.avoid),
        skipDefaults: this.skipDefaults,
        modes: _objectSpread4({}, this.modes)
      }, _i5 = 0, _outfitSlots2 = outfitSlots; _i5 < _outfitSlots2.length; _i5++) {
        var slotName = _outfitSlots2[_i5];
        result[slotName] = this.equips.get((_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject432 || (_templateObject432 = _taggedTemplateLiteral23(["familiar"])))], ["offhand", $slot(_templateObject442 || (_templateObject442 = _taggedTemplateLiteral23(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia26.toSlot)(slotName));
      }
      return result;
    }
  }], [{
    key: "current",
    value: function() {
      var _a, outfit2 = new Outfit2(), familiar = (0, import_kolmafia26.myFamiliar)();
      if (outfit2.equip(familiar))
        throw "Failed to create outfit from current state (expected: familiar ".concat(familiar, ")");
      for (var _i6 = 0, _outfitSlots3 = outfitSlots; _i6 < _outfitSlots3.length; _i6++) {
        var slotName = _outfitSlots3[_i6], slot = (_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject452 || (_templateObject452 = _taggedTemplateLiteral23(["familiar"])))], ["offhand", $slot(_templateObject462 || (_templateObject462 = _taggedTemplateLiteral23(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia26.toSlot)(slotName), item6 = (0, import_kolmafia26.equippedItem)(slot);
        if (!outfit2.equip(item6, slot))
          throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item6, ")");
      }
      return (0, import_kolmafia26.haveEquipped)($item(_templateObject472 || (_templateObject472 = _taggedTemplateLiteral23(["Crown of Thrones"])))) && outfit2.riders.set($slot(_templateObject482 || (_templateObject482 = _taggedTemplateLiteral23(["crown-of-thrones"]))), (0, import_kolmafia26.myEnthronedFamiliar)()), (0, import_kolmafia26.haveEquipped)($item(_templateObject492 || (_templateObject492 = _taggedTemplateLiteral23(["Buddy Bjorn"])))) && outfit2.riders.set($slot(_templateObject502 || (_templateObject502 = _taggedTemplateLiteral23(["buddy-bjorn"]))), (0, import_kolmafia26.myBjornedFamiliar)()), outfit2.setModes(getCurrentModes2()), outfit2;
    }
  }, {
    key: "from",
    value: function(spec) {
      var error = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, outfit2 = new Outfit2(), success = outfit2.equip(spec);
      if (!success && error)
        throw error;
      return success ? outfit2 : null;
    }
  }]), Outfit2;
}();
function convertToLibramModes(modes) {
  var _a;
  return {
    backupcamera: modes.backupcamera,
    umbrella: modes.umbrella,
    snowsuit: modes.snowsuit,
    edpiece: modes.edpiece,
    retrocape: (_a = modes.retrocape) === null || _a === void 0 ? void 0 : _a.filter(function(s) {
      return s !== void 0;
    }).join(" "),
    parka: modes.parka
  };
}
function getCurrentModes2() {
  return {
    backupcamera: getMode("backupCameraMode", ["ml", "meat", "init"]),
    umbrella: getMode("umbrellaState", ["broken", "forward-facing", "bucket style", "pitchfork style", "constantly twirling", "cocoon"]),
    snowsuit: getMode("snowsuit", ["eyebrows", "smirk", "nose", "goatee", "hat"]),
    edpiece: getMode("edPiece", ["bear", "owl", "puma", "hyena", "mouse", "weasel", "fish"]),
    retrocape: [getMode("retroCapeSuperhero", ["vampire", "heck", "robot"]), getMode("retroCapeWashingInstructions", ["hold", "thrill", "kiss", "kill"])],
    parka: getMode("parkaMode", ["kachungasaur", "dilophosaur", "ghostasaurus", "spikolodon", "pterodactyl"])
  };
}
function getMode(property, options) {
  var val = get(property, "");
  return options.find(function(s) {
    return s === val;
  });
}

// node_modules/grimoire-kolmafia/dist/engine.js
var _templateObject100;
function _taggedTemplateLiteral24(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray8(arr) {
  return _arrayWithoutHoles8(arr) || _iterableToArray8(arr) || _unsupportedIterableToArray16(arr) || _nonIterableSpread8();
}
function _nonIterableSpread8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray8(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles8(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray16(arr);
}
function _createForOfIteratorHelper9(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray16(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray16(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray16(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray16(o, minLen);
  }
}
function _arrayLikeToArray16(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _defineProperties12(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey13(descriptor.key), descriptor);
  }
}
function _createClass12(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties12(Constructor.prototype, protoProps), staticProps && _defineProperties12(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey13(arg) {
  var key = _toPrimitive13(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive13(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck12(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
var grimoireCCS = "grimoire_macro", Engine = /* @__PURE__ */ function() {
  function Engine2(tasks, options) {
    _classCallCheck12(this, Engine2), this.attempts = {}, this.propertyManager = new PropertiesManager(), this.tasks_by_name = /* @__PURE__ */ new Map(), this.cachedCcsContents = "", this.tasks = tasks, this.options = options != null ? options : {};
    var _iterator = _createForOfIteratorHelper9(tasks), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var task = _step.value;
        this.tasks_by_name.set(task.name, task);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this.initPropertiesManager(this.propertyManager);
  }
  return _createClass12(Engine2, [{
    key: "getNextTask",
    value: function() {
      var _this = this;
      return this.tasks.find(function(task) {
        return _this.available(task);
      });
    }
  }, {
    key: "run",
    value: function(actions) {
      for (var i = 0; i < (actions != null ? actions : 1 / 0); i++) {
        var task = this.getNextTask();
        if (!task)
          return;
        this.execute(task);
      }
    }
  }, {
    key: "destruct",
    value: function() {
      this.propertyManager.resetAll(), (0, import_kolmafia27.setAutoAttack)(0);
    }
  }, {
    key: "available",
    value: function(task) {
      var _a, _iterator2 = _createForOfIteratorHelper9((_a = task.after) !== null && _a !== void 0 ? _a : []), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var after = _step2.value, after_task = this.tasks_by_name.get(after);
          if (after_task === void 0)
            throw "Unknown task dependency ".concat(after, " on ").concat(task.name);
          if (!after_task.completed())
            return !1;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return !(task.ready && !task.ready() || task.completed());
    }
  }, {
    key: "execute",
    value: function(task) {
      var _a, _b, _c, _d, _e;
      (0, import_kolmafia27.print)(""), (0, import_kolmafia27.print)("Executing ".concat(task.name), "blue");
      var postcondition = (_b = (_a = task.limit) === null || _a === void 0 ? void 0 : _a.guard) === null || _b === void 0 ? void 0 : _b.call(_a);
      this.acquireItems(task), this.acquireEffects(task);
      var task_combat = (_d = (_c = task.combat) === null || _c === void 0 ? void 0 : _c.clone()) !== null && _d !== void 0 ? _d : new CombatStrategy(), outfit2 = this.createOutfit(task), task_resources = new CombatResources();
      this.customize(task, outfit2, task_combat, task_resources), this.dress(task, outfit2), this.setCombat(task, task_combat, task_resources), this.setChoices(task, this.propertyManager);
      var _iterator3 = _createForOfIteratorHelper9(task_resources.all()), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var resource = _step3.value;
          (_e = resource.prepare) === null || _e === void 0 || _e.call(resource);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      for (this.prepare(task), this.do(task); this.shouldRepeatAdv(task); )
        _set("lastEncounter", ""), this.do(task);
      this.post(task), this.markAttempt(task), this.checkLimits(task, postcondition);
    }
  }, {
    key: "acquireItems",
    value: function(task) {
      var _a, acquire = task.acquire instanceof Function ? task.acquire() : task.acquire, _iterator4 = _createForOfIteratorHelper9(acquire || []), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var to_get = _step4.value, num_needed = (_a = to_get.num) !== null && _a !== void 0 ? _a : 1, num_have = (0, import_kolmafia27.itemAmount)(to_get.item) + (0, import_kolmafia27.equippedAmount)(to_get.item);
          if (!(num_needed <= num_have) && !(to_get.useful !== void 0 && !to_get.useful()) && (to_get.get ? to_get.get() : to_get.price !== void 0 ? (0, import_kolmafia27.buy)(to_get.item, num_needed - num_have, to_get.price) : Object.keys((0, import_kolmafia27.getRelated)(to_get.item, "fold")).length > 0 ? (0, import_kolmafia27.cliExecute)("fold ".concat(to_get.item)) : (0, import_kolmafia27.retrieveItem)(to_get.item, num_needed), (0, import_kolmafia27.itemAmount)(to_get.item) + (0, import_kolmafia27.equippedAmount)(to_get.item) < num_needed && !to_get.optional))
            throw "Task ".concat(task.name, " was unable to acquire ").concat(num_needed, " ").concat(to_get.item);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "acquireEffects",
    value: function(task) {
      var _a, effects = typeof task.effects == "function" ? task.effects() : (_a = task.effects) !== null && _a !== void 0 ? _a : [], songs = effects.filter(function(effect2) {
        return isSong(effect2);
      });
      if (songs.length > maxSongs())
        throw "Too many AT songs";
      for (var extraSongs = Object.keys((0, import_kolmafia27.myEffects)()).map(function(effectName) {
        return (0, import_kolmafia27.toEffect)(effectName);
      }).filter(function(effect2) {
        return isSong(effect2) && !songs.includes(effect2);
      }); songs.length + extraSongs.length > maxSongs(); ) {
        var toRemove = extraSongs.pop();
        if (toRemove === void 0)
          break;
        uneffect(toRemove);
      }
      var _iterator5 = _createForOfIteratorHelper9(effects), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var effect = _step5.value;
          ensureEffect(effect);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "createOutfit",
    value: function(task) {
      var spec = typeof task.outfit == "function" ? task.outfit() : task.outfit;
      if (spec instanceof Outfit)
        return spec.clone();
      var outfit2 = new Outfit();
      if (spec !== void 0 && !outfit2.equip(spec))
        throw "Unable to equip all items for ".concat(task.name);
      return outfit2;
    }
  }, {
    key: "dress",
    value: function(task, outfit2) {
      task.do instanceof import_kolmafia27.Location && (0, import_kolmafia27.setLocation)(task.do), outfit2.dress();
    }
  }, {
    key: "customize",
    value: function(task, outfit2, combat, resources) {
    }
  }, {
    key: "setChoices",
    value: function(task, manager) {
      var choices = {};
      for (var choice_id_str in task.choices) {
        var choice_id = parseInt(choice_id_str), choice = task.choices[choice_id];
        typeof choice == "number" ? choices[choice_id] = choice : choices[choice_id] = choice();
      }
      manager.setChoices(choices);
    }
  }, {
    key: "setCombat",
    value: function(task, task_combat, task_resources) {
      var _a, macro = task_combat.compile(task_resources, (_a = this.options) === null || _a === void 0 ? void 0 : _a.combat_defaults, task.do instanceof import_kolmafia27.Location ? task.do : void 0);
      if (macro.save(), !this.options.ccs) {
        var otherCCSEntries = task_combat.compileCcs(), ccsContents = ["[default]", '"'.concat(macro.toString(), '"')].concat(_toConsumableArray8(otherCCSEntries)).join("\n");
        (0, import_kolmafia27.logprint)("CCS: ".concat(ccsContents.replace("\n", "\\n "))), ccsContents !== this.cachedCcsContents && ((0, import_kolmafia27.writeCcs)(ccsContents, grimoireCCS), (0, import_kolmafia27.cliExecute)("ccs ".concat(grimoireCCS)), this.cachedCcsContents = ccsContents);
      }
      var autoattack = task_combat.compileAutoattack();
      autoattack.toString().length > 1 ? ((0, import_kolmafia27.logprint)("Autoattack macro: ".concat(autoattack.toString())), autoattack.setAutoAttack()) : (0, import_kolmafia27.setAutoAttack)(0);
    }
  }, {
    key: "prepare",
    value: function(task) {
      var _a;
      (_a = task.prepare) === null || _a === void 0 || _a.call(task);
    }
  }, {
    key: "do",
    value: function(task) {
      for (typeof task.do == "function" ? task.do() : (0, import_kolmafia27.adv1)(task.do, 0, ""), (0, import_kolmafia27.runCombat)(); (0, import_kolmafia27.inMultiFight)(); )
        (0, import_kolmafia27.runCombat)();
      (0, import_kolmafia27.choiceFollowsFight)() && (0, import_kolmafia27.runChoice)(-1);
    }
  }, {
    key: "shouldRepeatAdv",
    value: function(task) {
      return task.do instanceof import_kolmafia27.Location && lastEncounterWasWanderingNC();
    }
  }, {
    key: "post",
    value: function(task) {
      var _a;
      (_a = task.post) === null || _a === void 0 || _a.call(task);
    }
  }, {
    key: "markAttempt",
    value: function(task) {
      task.name in this.attempts || (this.attempts[task.name] = 0), this.attempts[task.name]++;
    }
  }, {
    key: "checkLimits",
    value: function(task, postcondition) {
      var _a;
      if (!!task.limit) {
        var failureMessage = task.limit.message ? " ".concat(task.limit.message) : "";
        if (!task.completed()) {
          if (task.limit.tries && this.attempts[task.name] >= task.limit.tries)
            throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.tries, " attempts. Please check what went wrong.").concat(failureMessage);
          if (task.limit.soft && this.attempts[task.name] >= task.limit.soft)
            throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.soft, " attempts. Please check what went wrong (you may just be unlucky).").concat(failureMessage);
          if (task.limit.turns && task.do instanceof import_kolmafia27.Location && task.do.turnsSpent >= task.limit.turns)
            throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
          if (task.limit.unready && ((_a = task.ready) === null || _a === void 0 ? void 0 : _a.call(task)))
            throw "Task ".concat(task.name, " is still ready, but it should not be. Please check what went wrong.").concat(failureMessage);
        }
        if (postcondition && !postcondition())
          throw "Task ".concat(task.name, " failed its guard. Please check what went wrong.").concat(failureMessage);
      }
    }
  }, {
    key: "initPropertiesManager",
    value: function(manager) {
      var _a;
      manager.set({
        logPreferenceChange: !0,
        logPreferenceChangeFilter: _toConsumableArray8(new Set([].concat(_toConsumableArray8(get("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(function(a) {
          return a;
        }).join(","),
        battleAction: "custom combat script",
        autoSatisfyWithMall: !0,
        autoSatisfyWithNPCs: !0,
        autoSatisfyWithCoinmasters: !0,
        autoSatisfyWithStash: !1,
        dontStopForCounters: !0,
        maximizerFoldables: !0,
        hpAutoRecovery: "-0.05",
        hpAutoRecoveryTarget: "0.0",
        mpAutoRecovery: "-0.05",
        mpAutoRecoveryTarget: "0.0",
        afterAdventureScript: "",
        betweenBattleScript: "",
        choiceAdventureScript: "",
        familiarScript: "",
        currentMood: "apathetic",
        autoTuxedo: !0,
        autoPinkyRing: !0,
        autoGarish: !0,
        allowNonMoodBurning: !1,
        allowSummonBurning: !0,
        libramSkillsSoftcore: "none"
      }), this.options.ccs !== "" && (this.options.ccs === void 0 && (0, import_kolmafia27.readCcs)(grimoireCCS) === "" && (0, import_kolmafia27.writeCcs)("[ default ]\nabort", grimoireCCS), manager.set({
        customCombatScript: (_a = this.options.ccs) !== null && _a !== void 0 ? _a : grimoireCCS
      }));
    }
  }]), Engine2;
}();
function maxSongs() {
  return have($skill(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral24(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = /* @__PURE__ */ new Set(["Wooof! Wooooooof!", "Playing Fetch*", "A Pound of Cure", "Aunts not Ants", "Bath Time", "Beware of Aligator", "Delicious Sprouts", "Hypnotic Master", "Lost and Found", "Poetic Justice", "Summer Days", "Teacher's Pet"]);
function lastEncounterWasWanderingNC() {
  return wanderingNCs.has(get("lastEncounter"));
}

// node_modules/grimoire-kolmafia/dist/route.js
init_kolmafia_polyfill();
function ownKeys5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys5(Object(source), !0).forEach(function(key) {
      _defineProperty10(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys5(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty10(obj, key, value) {
  return key = _toPropertyKey14(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey14(arg) {
  var key = _toPrimitive14(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive14(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _createForOfIteratorHelper10(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray17(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray17(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray17(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray17(o, minLen);
  }
}
function _arrayLikeToArray17(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function getTasks(quests) {
  var implicitAfter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, _a, _b, result = [], _iterator = _createForOfIteratorHelper10(quests), _step;
  try {
    var _loop = function() {
      var quest = _step.value, questCompleted = quest.completed, _iterator3 = _createForOfIteratorHelper10(quest.tasks), _step3;
      try {
        var _loop22 = function() {
          var task2 = _step3.value, renamedTask = _objectSpread5({}, task2);
          if (renamedTask.name = "".concat(quest.name, "/").concat(task2.name), renamedTask.after = (_a = task2.after) === null || _a === void 0 ? void 0 : _a.map(function(after2) {
            return after2.includes("/") ? after2 : "".concat(quest.name, "/").concat(after2);
          }), implicitAfter && task2.after === void 0 && result.length > 0 && (renamedTask.after = [result[result.length - 1].name]), questCompleted !== void 0) {
            var taskCompleted = task2.completed;
            renamedTask.completed = function() {
              return questCompleted() || taskCompleted();
            };
          }
          result.push(renamedTask);
        };
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; )
          _loop22();
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done; )
      _loop();
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  for (var names = /* @__PURE__ */ new Set(), _i = 0, _result = result; _i < _result.length; _i++) {
    var task = _result[_i];
    names.add(task.name);
  }
  for (var _i2 = 0, _result2 = result; _i2 < _result2.length; _i2++) {
    var _task = _result2[_i2], _iterator2 = _createForOfIteratorHelper10((_b = _task.after) !== null && _b !== void 0 ? _b : []), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var after = _step2.value;
        if (!names.has(after))
          throw "Unknown task dependency ".concat(after, " of ").concat(_task.name);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  return result;
}

// node_modules/grimoire-kolmafia/dist/task.js
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/limit.js
init_kolmafia_polyfill();

// src/combat.ts
var import_kolmafia28 = require("kolmafia");
var _templateObject101, _templateObject238, _templateObject328, _templateObject424, _templateObject520, _templateObject617, _templateObject715, _templateObject813, _templateObject911, _templateObject1010, _templateObject119;
function _taggedTemplateLiteral25(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _get2() {
  return typeof Reflect != "undefined" && Reflect.get ? _get2 = Reflect.get.bind() : _get2 = function(target, property, receiver) {
    var base = _superPropBase2(target, property);
    if (!!base) {
      var desc = Object.getOwnPropertyDescriptor(base, property);
      return desc.get ? desc.get.call(arguments.length < 3 ? target : receiver) : desc.value;
    }
  }, _get2.apply(this, arguments);
}
function _superPropBase2(object, property) {
  for (; !Object.prototype.hasOwnProperty.call(object, property) && (object = _getPrototypeOf5(object), object !== null); )
    ;
  return object;
}
function _defineProperties13(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey15(descriptor.key), descriptor);
  }
}
function _createClass13(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties13(Constructor.prototype, protoProps), staticProps && _defineProperties13(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey15(arg) {
  var key = _toPrimitive15(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive15(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck13(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _inherits6(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf6(subClass, superClass);
}
function _setPrototypeOf6(o, p) {
  return _setPrototypeOf6 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf6(o, p);
}
function _createSuper5(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct5();
  return function() {
    var Super = _getPrototypeOf5(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf5(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn5(this, result);
  };
}
function _possibleConstructorReturn5(self2, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized5(self2);
}
function _assertThisInitialized5(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _isNativeReflectConstruct5() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf5(o) {
  return _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf5(o);
}
var CSStrategy = /* @__PURE__ */ function(_CombatStrategy) {
  _inherits6(CSStrategy2, _CombatStrategy);
  var _super = _createSuper5(CSStrategy2);
  function CSStrategy2() {
    var _this, macro = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      return Macro2.defaultKill();
    };
    return _classCallCheck13(this, CSStrategy2), _this = _super.call(this), _this.macro(macro).autoattack(macro), _this;
  }
  return _createClass13(CSStrategy2);
}(CombatStrategy), Macro2 = /* @__PURE__ */ function(_StrictMacro) {
  _inherits6(Macro3, _StrictMacro);
  var _super2 = _createSuper5(Macro3);
  function Macro3() {
    return _classCallCheck13(this, Macro3), _super2.apply(this, arguments);
  }
  return _createClass13(Macro3, [{
    key: "delevel",
    value: function() {
      return this.trySkill($skill(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral25(["Curse of Weaksauce"])))).trySkill($skill(_templateObject238 || (_templateObject238 = _taggedTemplateLiteral25(["Micrometeorite"])))).tryItem($item(_templateObject328 || (_templateObject328 = _taggedTemplateLiteral25(["Time-Spinner"])))).trySkill($skill(_templateObject424 || (_templateObject424 = _taggedTemplateLiteral25(["Summon Love Gnats"]))));
    }
  }, {
    key: "candyblast",
    value: function() {
      return this.externalIf(have($skill(_templateObject520 || (_templateObject520 = _taggedTemplateLiteral25(["Candyblast"])))), Macro3.while_('!match "Hey, some of it is even intact afterwards!"', Macro3.trySkill($skill(_templateObject617 || (_templateObject617 = _taggedTemplateLiteral25(["Candyblast"]))))));
    }
  }, {
    key: "easyFight",
    value: function() {
      return this.trySkill($skill(_templateObject715 || (_templateObject715 = _taggedTemplateLiteral25(["Extract"])))).trySkill($skill(_templateObject813 || (_templateObject813 = _taggedTemplateLiteral25(["Sing Along"]))));
    }
  }, {
    key: "defaultKill",
    value: function() {
      return this.delevel().easyFight().externalIf((0, import_kolmafia28.myClass)() === $class(_templateObject911 || (_templateObject911 = _taggedTemplateLiteral25(["Sauceror"]))), Macro3.skill($skill(_templateObject1010 || (_templateObject1010 = _taggedTemplateLiteral25(["Saucegeyser"])))).repeat(), Macro3.attack().repeat());
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(StrictMacro.ifHolidayWanderer(StrictMacro.skill($skill(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral25(["Feel Hatred"]))))).toString(), ";").concat(_get2(_getPrototypeOf5(Macro3.prototype), "toString", this).call(this));
    }
  }], [{
    key: "delevel",
    value: function() {
      return new Macro3().delevel();
    }
  }, {
    key: "candyblast",
    value: function() {
      return new Macro3().candyblast();
    }
  }, {
    key: "easyFight",
    value: function() {
      return new Macro3().easyFight();
    }
  }, {
    key: "defaultKill",
    value: function() {
      return new Macro3().defaultKill();
    }
  }]), Macro3;
}(StrictMacro);

// src/commons.ts
init_kolmafia_polyfill();

// src/lib.ts
init_kolmafia_polyfill();
var import_kolmafia29 = require("kolmafia");
var _templateObject814, _templateObject912, _templateObject1011, _templateObject1110, _templateObject129, _templateObject139, _templateObject147, _templateObject157, _templateObject167, _templateObject177, _templateObject187, _templateObject197, _templateObject207, _templateObject2112, _templateObject2212, _templateObject239, _templateObject246, _templateObject256, _templateObject266, _templateObject276, _templateObject284, _templateObject294, _templateObject304, _templateObject3111, _templateObject329, _templateObject334, _templateObject344, _templateObject354, _templateObject363, _templateObject373, _templateObject383, _templateObject393, _templateObject403, _templateObject4111, _templateObject425, _templateObject433, _templateObject443, _templateObject453, _templateObject463, _templateObject473, _templateObject483, _templateObject493, _templateObject503, _templateObject5110, _templateObject522, _templateObject532, _templateObject542, _templateObject552, _templateObject562, _templateObject572, _templateObject582, _templateObject592;
function _slicedToArray11(arr, i) {
  return _arrayWithHoles11(arr) || _iterableToArrayLimit11(arr, i) || _unsupportedIterableToArray18(arr, i) || _nonIterableRest11();
}
function _nonIterableRest11() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit11(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles11(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper11(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray18(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray18(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray18(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray18(o, minLen);
  }
}
function _arrayLikeToArray18(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral26(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var PropertyManager = new PropertiesManager();
var SYNTH_PAIRS = [[$item(_templateObject814 || (_templateObject814 = _taggedTemplateLiteral26(["Crimbo fudge"]))), $item(_templateObject912 || (_templateObject912 = _taggedTemplateLiteral26(["Crimbo fudge"])))], [$item(_templateObject1011 || (_templateObject1011 = _taggedTemplateLiteral26(["Crimbo fudge"]))), $item(_templateObject1110 || (_templateObject1110 = _taggedTemplateLiteral26(["bag of many confections"])))], [$item(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral26(["Crimbo peppermint bark"]))), $item(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral26(["Crimbo candied pecan"])))], [$item(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral26(["Crimbo peppermint bark"]))), $item(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral26(["peppermint sprout"])))], [$item(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral26(["Crimbo candied pecan"]))), $item(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral26(["peppermint crook"])))]];
function synthExp() {
  (0, import_kolmafia29.getCampground)()["Peppermint Pip Packet"] && (0, import_kolmafia29.visitUrl)("campground.php?action=garden"), get("_candySummons") || (0, import_kolmafia29.useSkill)(1, $skill(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral26(["Summon Crimbo Candy"]))));
  var _iterator = _createForOfIteratorHelper11(SYNTH_PAIRS), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _step$value = _slicedToArray11(_step.value, 2), candy1 = _step$value[0], candy2 = _step$value[1], enough = candy1 === candy2 ? have(candy1, 2) : have(candy1) && (0, import_kolmafia29.retrieveItem)(candy2);
      if (enough && (0, import_kolmafia29.sweetSynthesis)(candy1, candy2))
        return;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  throw new Error("Failed to synthesize!");
}
function setClan(target) {
  if ((0, import_kolmafia29.getClanName)() !== target) {
    var clanCache = JSON.parse((0, import_kolmafia29.getProperty)("hccs_clanCache") || "{}");
    if (clanCache.target === void 0)
      for (var recruiter = (0, import_kolmafia29.visitUrl)("clan_signup.php"), clanRe = /<option value=([0-9]+)>([^<]+)<\/option>/g, match; (match = clanRe.exec(recruiter)) !== null; )
        clanCache[match[2]] = match[1];
    if ((0, import_kolmafia29.setProperty)("hccs_clanCache", JSON.stringify(clanCache)), (0, import_kolmafia29.visitUrl)("showclan.php?whichclan=".concat(clanCache[target], "&action=joinclan&confirm=on&pwd")), (0, import_kolmafia29.getClanName)() !== target)
      throw "failed to switch clans to ".concat(target, ". Did you spell it correctly? Are you whitelisted?");
  }
  return !0;
}
function tryUse(quantity, it) {
  return (0, import_kolmafia29.availableAmount)(it) > 0 ? (0, import_kolmafia29.use)(quantity, it) : !1;
}
function horsery() {
  var _ref;
  return (_ref = get("_horsery").split(" ")[0]) !== null && _ref !== void 0 ? _ref : null;
}
function horse(horse2) {
  horsery() !== horse2 && (0, import_kolmafia29.cliExecute)("horsery ".concat(horse2, " horse"));
}
function ensureMp(mp) {
  if (!((0, import_kolmafia29.myMp)() > mp)) {
    if (mp > (0, import_kolmafia29.myMaxmp)())
      throw "Insufficient maximum mp!";
    for (; have($item(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral26(["magical sausage"])))) || have($item(_templateObject207 || (_templateObject207 = _taggedTemplateLiteral26(["magical sausage casing"])))) && (0, import_kolmafia29.myMp)() < mp && get("_sausagesEaten") < 23; )
      (0, import_kolmafia29.retrieveItem)($item(_templateObject2112 || (_templateObject2112 = _taggedTemplateLiteral26(["magical sausage"])))), (0, import_kolmafia29.eat)($item(_templateObject2212 || (_templateObject2212 = _taggedTemplateLiteral26(["magical sausage"]))));
    for (; have($item(_templateObject239 || (_templateObject239 = _taggedTemplateLiteral26(["psychokinetic energy blob"])))) && (0, import_kolmafia29.myMp)() < mp; )
      (0, import_kolmafia29.use)($item(_templateObject246 || (_templateObject246 = _taggedTemplateLiteral26(["psychokinetic energy blob"]))));
    (0, import_kolmafia29.myMp)() < mp && (0, import_kolmafia29.restoreMp)(mp);
  }
}
var maximizeFamiliar = have($familiar(_templateObject256 || (_templateObject256 = _taggedTemplateLiteral26(["Disembodied Hand"])))) ? $familiar(_templateObject266 || (_templateObject266 = _taggedTemplateLiteral26(["Disembodied Hand"]))) : $familiar(_templateObject276 || (_templateObject276 = _taggedTemplateLiteral26(["Left-Hand Man"])));
function canCastLibrams() {
  var summonNumber = 1 + get("libramSummons"), cost = 1 + summonNumber * (summonNumber - 1) / 2;
  return (0, import_kolmafia29.myMp)() >= cost;
}
function totalDuration(item6) {
  var effect = get2("Effect", item6);
  return (0, import_kolmafia29.haveEffect)(effect) + get2("Effect Duration", item6) * (0, import_kolmafia29.availableAmount)(item6);
}
var availableFights = function() {
  return clamp(5 - Witchess_exports.fightsDone(), 0, 5) + clamp((0, import_kolmafia29.availableAmount)($item(_templateObject284 || (_templateObject284 = _taggedTemplateLiteral26(["BRICKO eye brick"])))), 0, 10 - get("_brickoFights"));
}, potentialFights = function() {
  return clamp(5 - Witchess_exports.fightsDone(), 0, 5) + clamp((0, import_kolmafia29.availableAmount)($item(_templateObject294 || (_templateObject294 = _taggedTemplateLiteral26(["BRICKO eye brick"])))), 0, 10 - get("_brickoFights")) + clamp(3 - get("_brickoEyeSummons"), 0, 10 - get("_brickoFights"));
};
function castPriciestLibram() {
  var choice = bestLibramToCast();
  return choice ? (0, import_kolmafia29.useSkill)(1, choice) : !1;
}
function burnLibrams() {
  var testsDone = get("csServicesPerformed").split(",");
  if (!!$skills(_templateObject304 || (_templateObject304 = _taggedTemplateLiteral26(["Summon BRICKOs, Summon Taffy, Summon Love Song, Summon Candy Heart"]))).some(function(skill2) {
    return have(skill2);
  }))
    for (; canCastLibrams(); )
      if (testsDone.includes("Breed More Collies")) {
        if (!castPriciestLibram())
          return;
      } else {
        var libramPossibilities = possibleLibramSummons(), decisionMap = /* @__PURE__ */ new Map();
        if (have($skill(_templateObject3111 || (_templateObject3111 = _taggedTemplateLiteral26(["Summon Candy Heart"])))) && totalDuration($item(_templateObject329 || (_templateObject329 = _taggedTemplateLiteral26(["green candy heart"])))) <= 0) {
          var _libramPossibilities$, _libramPossibilities$2, probability = (_libramPossibilities$ = (_libramPossibilities$2 = libramPossibilities.get($skill(_templateObject334 || (_templateObject334 = _taggedTemplateLiteral26(["Summon Candy Heart"]))))) === null || _libramPossibilities$2 === void 0 ? void 0 : _libramPossibilities$2.get($item(_templateObject344 || (_templateObject344 = _taggedTemplateLiteral26(["green candy heart"]))))) !== null && _libramPossibilities$ !== void 0 ? _libramPossibilities$ : 0;
          decisionMap.set($skill(_templateObject354 || (_templateObject354 = _taggedTemplateLiteral26(["Summon Candy Heart"]))), 3 * probability);
        }
        if (have($skill(_templateObject363 || (_templateObject363 = _taggedTemplateLiteral26(["Summon Taffy"])))) && totalDuration($item(_templateObject373 || (_templateObject373 = _taggedTemplateLiteral26(["pulled blue taffy"])))) < 50) {
          var _libramPossibilities$3, _libramPossibilities$4, _probability = (_libramPossibilities$3 = (_libramPossibilities$4 = libramPossibilities.get($skill(_templateObject383 || (_templateObject383 = _taggedTemplateLiteral26(["Summon Taffy"]))))) === null || _libramPossibilities$4 === void 0 ? void 0 : _libramPossibilities$4.get($item(_templateObject393 || (_templateObject393 = _taggedTemplateLiteral26(["pulled blue taffy"]))))) !== null && _libramPossibilities$3 !== void 0 ? _libramPossibilities$3 : 0;
          decisionMap.set($skill(_templateObject403 || (_templateObject403 = _taggedTemplateLiteral26(["Summon Taffy"]))), 1 * _probability);
        }
        if (have($skill(_templateObject4111 || (_templateObject4111 = _taggedTemplateLiteral26(["Summon Love Song"])))) && totalDuration($item(_templateObject425 || (_templateObject425 = _taggedTemplateLiteral26(["love song of icy revenge"])))) < 20) {
          var _libramPossibilities$5, _libramPossibilities$6, _probability2 = (_libramPossibilities$5 = (_libramPossibilities$6 = libramPossibilities.get($skill(_templateObject433 || (_templateObject433 = _taggedTemplateLiteral26(["Summon Love Song"]))))) === null || _libramPossibilities$6 === void 0 ? void 0 : _libramPossibilities$6.get($item(_templateObject443 || (_templateObject443 = _taggedTemplateLiteral26(["love song of icy revenge"]))))) !== null && _libramPossibilities$5 !== void 0 ? _libramPossibilities$5 : 0, currentWeightValue = clamp(Math.ceil(totalDuration($item(_templateObject453 || (_templateObject453 = _taggedTemplateLiteral26(["love song of icy revenge"])))) / 2), 0, 10), newWeightValue = clamp(Math.ceil((totalDuration($item(_templateObject463 || (_templateObject463 = _taggedTemplateLiteral26(["love song of icy revenge"])))) + 5) / 2), 0, 10);
          decisionMap.set($skill(_templateObject473 || (_templateObject473 = _taggedTemplateLiteral26(["Summon Love Song"]))), _probability2 * (newWeightValue - currentWeightValue));
        }
        if (have($skill(_templateObject483 || (_templateObject483 = _taggedTemplateLiteral26(["Summon BRICKOs"])))) && get("_brickoEyeSummons") < 3 && testsDone.includes("Donate Blood")) {
          var _libramPossibilities$7, _libramPossibilities$8, _probability3 = (_libramPossibilities$7 = (_libramPossibilities$8 = libramPossibilities.get($skill(_templateObject493 || (_templateObject493 = _taggedTemplateLiteral26(["Summon BRICKOs"]))))) === null || _libramPossibilities$8 === void 0 ? void 0 : _libramPossibilities$8.get($item(_templateObject503 || (_templateObject503 = _taggedTemplateLiteral26(["BRICKO eye brick"]))))) !== null && _libramPossibilities$7 !== void 0 ? _libramPossibilities$7 : 0;
          if (have($familiar(_templateObject5110 || (_templateObject5110 = _taggedTemplateLiteral26(["Shorter-Order Cook"])))) && totalDuration($item(_templateObject522 || (_templateObject522 = _taggedTemplateLiteral26(["short stack of pancakes"])))) === 0 && availableFights() < 11 - get("_shortOrderCookCharge") && potentialFights() >= 11 - get("_shortOrderCookCharge") && decisionMap.set($skill(_templateObject532 || (_templateObject532 = _taggedTemplateLiteral26(["Summon BRICKOs"]))), _probability3 * 11 / (11 - get("_shortOrderCookCharge") - availableFights())), have($familiar(_templateObject542 || (_templateObject542 = _taggedTemplateLiteral26(["Garbage Fire"])))) && !have($item(_templateObject552 || (_templateObject552 = _taggedTemplateLiteral26(["burning paper crane"])))) && !have($item(_templateObject562 || (_templateObject562 = _taggedTemplateLiteral26(["burning newspaper"])))) && availableFights() < 30 - get("garbageFireProgress") && potentialFights() >= 30 - get("garbageFireProgress")) {
            var _decisionMap$get, value = 5 / (30 - get("garbageFireProgress") - availableFights()) * _probability3, otherBrickoValue = (_decisionMap$get = decisionMap.get($skill(_templateObject572 || (_templateObject572 = _taggedTemplateLiteral26(["Summon BRICKOs"]))))) !== null && _decisionMap$get !== void 0 ? _decisionMap$get : 0;
            value > otherBrickoValue && decisionMap.set($skill(_templateObject582 || (_templateObject582 = _taggedTemplateLiteral26(["Summon BRICKOs"]))), value);
          }
        }
        var bestLibrams = Array.from(decisionMap).sort(function(a, b) {
          return b[1] - a[1];
        });
        if (bestLibrams.length === 0) {
          if (!castPriciestLibram())
            return;
        } else {
          var decision = bestLibrams[0][0];
          (0, import_kolmafia29.useSkill)(1, decision);
        }
      }
}
function unequip(item6) {
  for (; (0, import_kolmafia29.equippedAmount)(item6) > 0; ) {
    var slot = import_kolmafia29.Slot.all().find(function(equipmentSlot) {
      return (0, import_kolmafia29.equippedItem)(equipmentSlot) === item6;
    });
    if (!slot)
      return;
    (0, import_kolmafia29.equip)(slot, $item(_templateObject592 || (_templateObject592 = _taggedTemplateLiteral26(["none"]))));
  }
}
function hasNcBird() {
  return get("yourFavoriteBirdMods").split(",").some(function(mod) {
    return mod.includes("Combat Rate: -");
  });
}

// src/outfit.ts
init_kolmafia_polyfill();
var import_kolmafia30 = require("kolmafia");
var _templateObject110, _templateObject240, _templateObject330, _templateObject426, _templateObject521, _templateObject618, _templateObject716, _templateObject815, _templateObject913, _templateObject1012, _templateObject1111, _templateObject1210, _templateObject1310, _templateObject148, _templateObject158, _templateObject168, _templateObject178, _templateObject188, _templateObject198, _templateObject208, _templateObject2113, _templateObject2213, _templateObject2310, _templateObject247;
function ownKeys6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys6(Object(source), !0).forEach(function(key) {
      _defineProperty11(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys6(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty11(obj, key, value) {
  return key = _toPropertyKey16(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey16(arg) {
  var key = _toPrimitive16(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive16(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral27(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var DEFAULT_UNIFORM = function() {
  return {
    hat: DaylightShavings_exports.buffAvailable() ? DaylightShavings_exports.helmet : $items(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral27(["astral chapeau, Iunion Crown"]))),
    shirt: $items(_templateObject240 || (_templateObject240 = _taggedTemplateLiteral27(["Jurassic Parka, fresh coat of paint"]))),
    pants: $items(_templateObject330 || (_templateObject330 = _taggedTemplateLiteral27(["designer sweatpants, old sweatpants"]))),
    weapon: get("_juneCleaverFightsLeft") > 0 && get("_juneCleaverEncounters") < 2 ? $item(_templateObject426 || (_templateObject426 = _taggedTemplateLiteral27(["June cleaver"]))) : $item(_templateObject521 || (_templateObject521 = _taggedTemplateLiteral27(["Fourth of May Cosplay Saber"]))),
    offhand: $item(_templateObject618 || (_templateObject618 = _taggedTemplateLiteral27(["unbreakable umbrella"]))),
    acc1: $items(_templateObject716 || (_templateObject716 = _taggedTemplateLiteral27(["meteorite necklace, your cowboy boots"]))),
    acc2: $item(_templateObject815 || (_templateObject815 = _taggedTemplateLiteral27(["codpiece"]))),
    acc3: $items(_templateObject913 || (_templateObject913 = _taggedTemplateLiteral27(["battle broom, Powerful Glove"]))),
    back: get("questPAGhost") === "unstarted" && get("nextParanormalActivity") <= (0, import_kolmafia30.totalTurnsPlayed)() ? $item(_templateObject1012 || (_templateObject1012 = _taggedTemplateLiteral27(["protonic accelerator pack"]))) : $items(_templateObject1111 || (_templateObject1111 = _taggedTemplateLiteral27(["LOV Epaulettes, unwrapped knock-off retro superhero cape"]))),
    modes: {
      retrocape: ["heck", "thrill"],
      umbrella: "broken"
    }
  };
}, FAMILIAR_PICKS = [{
  familiar: $familiar(_templateObject1210 || (_templateObject1210 = _taggedTemplateLiteral27(["Stocking Mimic"]))),
  famequip: $item.none,
  condition: function() {
    return !get("_bagOfCandy");
  }
}, {
  familiar: $familiar(_templateObject1310 || (_templateObject1310 = _taggedTemplateLiteral27(["Melodramedary"]))),
  famequip: $item(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral27(["dromedary drinking helmet"]))),
  condition: function() {
    return get("camelSpit") < 100 && !have($effect(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral27(["Spit Upon"]))));
  }
}, {
  familiar: $familiar(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral27(["Shorter-Order Cook"]))),
  condition: function() {
    return ![$effect(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral27(["Shortly Stacked"]))), $item(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral27(["short stack of pancakes"])))].some(function(x) {
      return have(x);
    }) && !CommunityService.FamiliarWeight.isDone();
  }
}, {
  familiar: $familiar(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral27(["Garbage Fire"]))),
  condition: function() {
    return $familiar(_templateObject208 || (_templateObject208 = _taggedTemplateLiteral27(["Garbage Fire"]))).dropsToday < 1;
  }
}];
function chooseFamiliar(canAttack) {
  var pick = FAMILIAR_PICKS.find(function(_ref) {
    var condition = _ref.condition, familiar = _ref.familiar;
    return condition() && have(familiar) && (canAttack || !(familiar.elementalDamage || familiar.physicalDamage));
  });
  if (pick) {
    var _pick$famequip;
    return {
      famequip: (_pick$famequip = pick.famequip) !== null && _pick$famequip !== void 0 ? _pick$famequip : $item(_templateObject2113 || (_templateObject2113 = _taggedTemplateLiteral27(["tiny stillsuit"]))),
      familiar: pick.familiar
    };
  }
  return {
    famequip: $item(_templateObject2213 || (_templateObject2213 = _taggedTemplateLiteral27(["tiny stillsuit"]))),
    familiar: $familiar(_templateObject2310 || (_templateObject2310 = _taggedTemplateLiteral27(["Puck Man"])))
  };
}
var DEFAULT_OPTIONS = {
  changes: {},
  canAttack: !0
};
function uniform() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _DEFAULT_OPTIONS$opti = _objectSpread6(_objectSpread6({}, DEFAULT_OPTIONS), options), changes = _DEFAULT_OPTIONS$opti.changes, canAttack = _DEFAULT_OPTIONS$opti.canAttack;
  return "familiar" in changes && !("famequip" in changes) && (changes.famequip = $item(_templateObject247 || (_templateObject247 = _taggedTemplateLiteral27(["tiny stillsuit"])))), _objectSpread6(_objectSpread6(_objectSpread6({}, DEFAULT_UNIFORM()), chooseFamiliar(canAttack)), changes);
}

// src/commons.ts
var import_kolmafia31 = require("kolmafia");
var _templateObject111, _templateObject241, _templateObject331, _templateObject427, _templateObject523, _templateObject619, _templateObject717, _templateObject816, _templateObject914, _templateObject1013, _templateObject1112, _templateObject1211, _templateObject1311, _templateObject149, _templateObject159, _templateObject169, _templateObject179, _templateObject189, _templateObject199, _templateObject209, _templateObject2114, _templateObject2214, _templateObject2311, _templateObject248, _templateObject257, _templateObject267, _templateObject277, _templateObject285;
function _toConsumableArray9(arr) {
  return _arrayWithoutHoles9(arr) || _iterableToArray9(arr) || _unsupportedIterableToArray19(arr) || _nonIterableSpread9();
}
function _nonIterableSpread9() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray19(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray19(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray19(o, minLen);
  }
}
function _iterableToArray9(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles9(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray19(arr);
}
function _arrayLikeToArray19(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _defineProperty12(obj, key, value) {
  return key = _toPropertyKey17(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey17(arg) {
  var key = _toPrimitive17(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive17(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral28(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function beachTask(effect) {
  var num = 1 + BeachComb_exports.headBuffs.indexOf(effect);
  return {
    name: "Beach Head: ".concat(effect),
    completed: function() {
      return (0, import_kolmafia31.getProperty)("_beachHeadsUsed").split(",").includes(num.toFixed(0));
    },
    ready: function() {
      return get("_freeBeachWalksUsed") < 11 && get("beachHeadsUnlocked").split(",").includes(num.toFixed(0));
    },
    do: function() {
      return BeachComb_exports.tryHead(effect);
    }
  };
}
function innerElf() {
  return {
    name: "Inner Elf",
    completed: function() {
      return have($effect(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral28(["Inner Elf"]))));
    },
    ready: function() {
      return (0, import_kolmafia31.myLevel)() >= 13;
    },
    do: function() {
      return Clan.with(get("phccs_elfClan", "Hobopolis Vacation Home"), function() {
        (0, import_kolmafia31.adv1)($location(_templateObject241 || (_templateObject241 = _taggedTemplateLiteral28(["The Slime Tube"]))), -1, "");
      });
    },
    outfit: function() {
      return uniform({
        changes: {
          acc3: $item(_templateObject331 || (_templateObject331 = _taggedTemplateLiteral28(["Kremlin's Greatest Briefcase"]))),
          familiar: $familiar(_templateObject427 || (_templateObject427 = _taggedTemplateLiteral28(["Machine Elf"])))
        }
      });
    },
    choices: _defineProperty12({}, 326, 1),
    combat: new CSStrategy(function() {
      return Macro2.trySkill($skill(_templateObject523 || (_templateObject523 = _taggedTemplateLiteral28(["KGB tranquilizer dart"])))).trySkill($skill(_templateObject619 || (_templateObject619 = _taggedTemplateLiteral28(["Snokebomb"]))));
    })
  };
}
function potionTask(item6) {
  var effect = (0, import_kolmafia31.effectModifier)(item6, "Effect");
  return {
    name: "".concat(effect),
    completed: function() {
      return have(effect);
    },
    ready: function() {
      return have(item6);
    },
    do: function() {
      return (0, import_kolmafia31.use)(item6);
    }
  };
}
function restore(effects) {
  return {
    name: "Restore",
    completed: function() {
      return effects.every(function(e) {
        return have(e);
      });
    },
    do: function() {
      !have($item(_templateObject717 || (_templateObject717 = _taggedTemplateLiteral28(["magical sausage"])))) && have($item(_templateObject816 || (_templateObject816 = _taggedTemplateLiteral28(["magical sausage casing"])))) && (0, import_kolmafia31.create)(1, $item(_templateObject914 || (_templateObject914 = _taggedTemplateLiteral28(["magical sausage"])))), have($item(_templateObject1013 || (_templateObject1013 = _taggedTemplateLiteral28(["magical sausage"])))) ? (0, import_kolmafia31.eat)(1, $item(_templateObject1112 || (_templateObject1112 = _taggedTemplateLiteral28(["magical sausage"])))) : (0, import_kolmafia31.use)(1, $item(_templateObject1211 || (_templateObject1211 = _taggedTemplateLiteral28(["psychokinetic energy blob"]))));
    }
  };
}
function skillTask(x) {
  {
    var skill2 = x instanceof import_kolmafia31.Skill ? x : (0, import_kolmafia31.toSkill)(x), effect = x instanceof import_kolmafia31.Effect ? x : (0, import_kolmafia31.toEffect)(x);
    return {
      name: skill2.name,
      completed: function() {
        return have(effect);
      },
      ready: function() {
        return (0, import_kolmafia31.myMp)() >= (0, import_kolmafia31.mpCost)(skill2);
      },
      do: function() {
        return (0, import_kolmafia31.useSkill)(skill2);
      }
    };
  }
}
function commonFamiliarWeightBuffs() {
  var buffs5 = $effects(_templateObject1311 || (_templateObject1311 = _taggedTemplateLiteral28(["Empathy, Leash of Linguini, Blood Bond"])));
  return [potionTask($item(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral28(["green candy heart"]))))].concat(_toConsumableArray9(buffs5.map(skillTask)), [restore(buffs5), {
    name: "Witchess",
    completed: function() {
      return get("_witchessBuff");
    },
    do: function() {
      return (0, import_kolmafia31.cliExecute)("witchess");
    }
  }, {
    name: "Fixodene",
    completed: function() {
      return get("_freePillKeeperUsed");
    },
    do: function() {
      return (0, import_kolmafia31.cliExecute)("pillkeeper familiar");
    }
  }, {
    name: "Suzie's Blessing",
    completed: function() {
      return get("_clanFortuneBuffUsed");
    },
    do: function() {
      return (0, import_kolmafia31.cliExecute)("fortune buff familiar");
    }
  }, beachTask($effect(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral28(["Do I Know You From Somewhere?"]))))]);
}
function songTask(song2, shrugSong) {
  var _ref = song2 instanceof import_kolmafia31.Effect ? {
    wantedSongSkill: (0, import_kolmafia31.toSkill)(song2),
    wantedSongEffect: song2
  } : {
    wantedSongSkill: song2,
    wantedSongEffect: (0, import_kolmafia31.toEffect)(song2)
  }, wantedSongSkill = _ref.wantedSongSkill, wantedSongEffect = _ref.wantedSongEffect, shrugSongEffect = shrugSong instanceof import_kolmafia31.Effect ? shrugSong : (0, import_kolmafia31.toEffect)(shrugSong);
  return {
    name: song2.name,
    completed: function() {
      return have(wantedSongEffect);
    },
    ready: function() {
      return (0, import_kolmafia31.myMp)() >= (0, import_kolmafia31.mpCost)(wantedSongSkill);
    },
    do: function() {
      have(shrugSongEffect) && (0, import_kolmafia31.cliExecute)("shrug ".concat(shrugSongEffect)), (0, import_kolmafia31.useSkill)(wantedSongSkill);
    }
  };
}
function asdonTask(style) {
  var effect = style instanceof import_kolmafia31.Effect ? style : AsdonMartin_exports.Driving[style];
  return {
    name: effect.name,
    completed: function() {
      return have(effect);
    },
    do: function() {
      (0, import_kolmafia31.getFuel)() < 37 && ((0, import_kolmafia31.buy)(1, $item(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral28(["all-purpose flower"])))), (0, import_kolmafia31.use)(1, $item(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral28(["all-purpose flower"])))), (0, import_kolmafia31.buy)((0, import_kolmafia31.availableAmount)($item(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral28(["wad of dough"])))), $item(_templateObject199 || (_templateObject199 = _taggedTemplateLiteral28(["soda water"])))), (0, import_kolmafia31.create)((0, import_kolmafia31.availableAmount)($item(_templateObject209 || (_templateObject209 = _taggedTemplateLiteral28(["wad of dough"])))), $item(_templateObject2114 || (_templateObject2114 = _taggedTemplateLiteral28(["loaf of soda bread"])))), (0, import_kolmafia31.cliExecute)("asdonmartin fuel ".concat((0, import_kolmafia31.availableAmount)($item(_templateObject2214 || (_templateObject2214 = _taggedTemplateLiteral28(["loaf of soda bread"])))), " soda bread"))), AsdonMartin_exports.drive(effect);
    }
  };
}
var showers = get("_meteorShowerUses");
function meteorShower() {
  return {
    name: "Meteor Showered",
    ready: function() {
      return get("_meteorShowerUses") < 5 && get("_saberForceUses") < 5;
    },
    completed: function() {
      return have($effect(_templateObject2311 || (_templateObject2311 = _taggedTemplateLiteral28(["Meteor Showered"]))));
    },
    prepare: function() {
      return horsery() === "pale" && horse("dark");
    },
    do: function() {
      (0, import_kolmafia31.adv1)($location(_templateObject248 || (_templateObject248 = _taggedTemplateLiteral28(["The Dire Warren"]))), -1, ""), (0, import_kolmafia31.handlingChoice)() && (0, import_kolmafia31.runChoice)(-1);
    },
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar.none,
          famequip: $item.none,
          weapon: $item(_templateObject257 || (_templateObject257 = _taggedTemplateLiteral28(["Fourth of May Cosplay Saber"])))
        }
      });
    },
    choices: _defineProperty12({}, 1387, 3),
    combat: new CSStrategy(function() {
      return Macro2.skill($skill(_templateObject267 || (_templateObject267 = _taggedTemplateLiteral28(["Meteor Shower"])))).skill($skill(_templateObject277 || (_templateObject277 = _taggedTemplateLiteral28(["Use the Force"]))));
    }),
    post: function() {
      have($effect(_templateObject285 || (_templateObject285 = _taggedTemplateLiteral28(["Meteor Showered"])))) && showers++, _set("_meteorShowerUses", showers);
    }
  };
}

// src/boozedrop.ts
var import_kolmafia32 = require("kolmafia");
var _templateObject120, _templateObject249, _templateObject335, _templateObject428, _templateObject524, _templateObject620, _templateObject718, _templateObject817, _templateObject915, _templateObject1014, _templateObject1113, _templateObject1212, _templateObject1312, _templateObject1410, _templateObject1510, _templateObject1610, _templateObject1710, _templateObject1810, _templateObject1910, _templateObject2010, _templateObject2115, _templateObject2215, _templateObject2312, _templateObject2410, _templateObject258, _templateObject268, _templateObject278, _templateObject286, _templateObject295, _templateObject305, _templateObject3112, _templateObject3210, _templateObject336, _templateObject345, _templateObject355, _templateObject364, _templateObject374, _templateObject384, _templateObject394;
function _toConsumableArray10(arr) {
  return _arrayWithoutHoles10(arr) || _iterableToArray10(arr) || _unsupportedIterableToArray20(arr) || _nonIterableSpread10();
}
function _nonIterableSpread10() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray20(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray20(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray20(o, minLen);
  }
}
function _iterableToArray10(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles10(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray20(arr);
}
function _arrayLikeToArray20(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral29(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var BoozeDrop = {
  name: "Booze Drop",
  type: "SERVICE",
  test: CommunityService.BoozeDrop,
  outfit: function() {
    return have($item(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral29(["wad of used tape"])))) || (0, import_kolmafia32.cliExecute)("fold wad of used tape"), {
      hat: $item(_templateObject249 || (_templateObject249 = _taggedTemplateLiteral29(["wad of used tape"]))),
      weapon: $items(_templateObject335 || (_templateObject335 = _taggedTemplateLiteral29(["extra-large utility candle, Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject428 || (_templateObject428 = _taggedTemplateLiteral29(["unbreakable umbrella"]))),
      back: $item(_templateObject524 || (_templateObject524 = _taggedTemplateLiteral29(["protonic accelerator pack"]))),
      acc1: $item(_templateObject620 || (_templateObject620 = _taggedTemplateLiteral29(["Guzzlr tablet"]))),
      acc2: $item(_templateObject718 || (_templateObject718 = _taggedTemplateLiteral29(["gold detective badge"]))),
      acc3: $items(_templateObject817 || (_templateObject817 = _taggedTemplateLiteral29(["government-issued night-vision goggles, combat lover's locket"]))),
      famequip: $item(_templateObject915 || (_templateObject915 = _taggedTemplateLiteral29(["li'l ninja costume"]))),
      familiar: $familiar(_templateObject1014 || (_templateObject1014 = _taggedTemplateLiteral29(["Trick-or-Treating Tot"]))),
      modes: {
        umbrella: "bucket style"
      }
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [{
    name: "Batform",
    completed: function() {
      return have($effect(_templateObject1113 || (_templateObject1113 = _taggedTemplateLiteral29(["Bat-Adjacent Form"]))));
    },
    do: $location(_templateObject1212 || (_templateObject1212 = _taggedTemplateLiteral29(["The Dire Warren"]))),
    outfit: function() {
      return uniform({
        changes: {
          back: $item(_templateObject1312 || (_templateObject1312 = _taggedTemplateLiteral29(["vampyric cloake"]))),
          offhand: $item(_templateObject1410 || (_templateObject1410 = _taggedTemplateLiteral29(["latte lovers member's mug"])))
        },
        canAttack: !1
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.skill($skill(_templateObject1510 || (_templateObject1510 = _taggedTemplateLiteral29(["Become a Bat"])))).skill($skill(_templateObject1610 || (_templateObject1610 = _taggedTemplateLiteral29(["Throw Latte on Opponent"]))));
    })
  }, songTask($effect(_templateObject1710 || (_templateObject1710 = _taggedTemplateLiteral29(["Fat Leon's Phat Loot Lyric"]))), $effect(_templateObject1810 || (_templateObject1810 = _taggedTemplateLiteral29(["Ode to Booze"])))), {
    name: "Items.enh",
    completed: function() {
      return have($effect(_templateObject1910 || (_templateObject1910 = _taggedTemplateLiteral29(["items.enh"]))));
    },
    do: function() {
      return SourceTerminal_exports.enhance($effect(_templateObject2010 || (_templateObject2010 = _taggedTemplateLiteral29(["items.enh"]))));
    }
  }, skillTask($skill(_templateObject2115 || (_templateObject2115 = _taggedTemplateLiteral29(["The Spirit of Taking"])))), skillTask($skill(_templateObject2215 || (_templateObject2215 = _taggedTemplateLiteral29(["Singer's Faithful Ocelot"])))), {
    name: "Play Pool",
    completed: function() {
      return have($effect(_templateObject2312 || (_templateObject2312 = _taggedTemplateLiteral29(["Hustlin'"]))));
    },
    do: function() {
      return (0, import_kolmafia32.cliExecute)("pool 3");
    }
  }, asdonTask("Observantly"), {
    name: "Unlock Beach",
    ready: function() {
      return have($item(_templateObject2410 || (_templateObject2410 = _taggedTemplateLiteral29(["government cheese"]))));
    },
    completed: function() {
      return (0, import_kolmafia32.canAdventure)($location(_templateObject258 || (_templateObject258 = _taggedTemplateLiteral29(["South of the Border"]))));
    },
    do: function() {
      var desertAccessItem = (0, import_kolmafia32.knollAvailable)() ? $item(_templateObject268 || (_templateObject268 = _taggedTemplateLiteral29(["bitchin' meatcar"]))) : $item(_templateObject278 || (_templateObject278 = _taggedTemplateLiteral29(["Desert Bus pass"])));
      have(desertAccessItem) || (0, import_kolmafia32.cliExecute)("acquire ".concat(desertAccessItem.name));
    }
  }, {
    name: "Get Anticheese",
    ready: function() {
      return (0, import_kolmafia32.canAdventure)($location(_templateObject286 || (_templateObject286 = _taggedTemplateLiteral29(["South of the Border"]))));
    },
    completed: function() {
      return get("lastAnticheeseDay") > 0;
    },
    do: function() {
      return (0, import_kolmafia32.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse");
    }
  }, {
    name: "Government",
    ready: function() {
      return have($item(_templateObject295 || (_templateObject295 = _taggedTemplateLiteral29(["anticheese"])))) && have($item(_templateObject305 || (_templateObject305 = _taggedTemplateLiteral29(["government cheese"]))));
    },
    completed: function() {
      return have($effect(_templateObject3112 || (_templateObject3112 = _taggedTemplateLiteral29(["I See Everything Thrice!"]))));
    },
    do: function() {
      return (0, import_kolmafia32.create)(1, $item(_templateObject3210 || (_templateObject3210 = _taggedTemplateLiteral29(["government"])))) && (0, import_kolmafia32.use)(1, $item(_templateObject336 || (_templateObject336 = _taggedTemplateLiteral29(["government"]))));
    }
  }, {
    name: "Pray",
    ready: function() {
      return (0, import_kolmafia32.myClass)() === $class(_templateObject345 || (_templateObject345 = _taggedTemplateLiteral29(["Pastamancer"])));
    },
    completed: function() {
      return get("_barrelPrayer");
    },
    do: function() {
      return (0, import_kolmafia32.cliExecute)("barrelprayer buff");
    }
  }].concat(_toConsumableArray10($items(_templateObject355 || (_templateObject355 = _taggedTemplateLiteral29(["Salsa Caliente\u2122 candle, lavender candy heart, bag of grain, emergency glowstick"]))).map(potionTask)), [{
    name: "Steely-Eyed Squint",
    completed: function() {
      return have($effect(_templateObject364 || (_templateObject364 = _taggedTemplateLiteral29(["Steely-Eyed Squint"]))));
    },
    do: function() {
      return (0, import_kolmafia32.useSkill)($skill(_templateObject374 || (_templateObject374 = _taggedTemplateLiteral29(["Steely-Eyed Squint"]))));
    }
  }, {
    name: "Feel Lost",
    completed: function() {
      return have($effect(_templateObject384 || (_templateObject384 = _taggedTemplateLiteral29(["Feeling Lost"]))));
    },
    do: function() {
      return (0, import_kolmafia32.useSkill)($skill(_templateObject394 || (_templateObject394 = _taggedTemplateLiteral29(["Feel Lost"]))));
    }
  }])
}, boozedrop_default = BoozeDrop;

// src/coil wire.ts
init_kolmafia_polyfill();
var import_kolmafia33 = require("kolmafia");
var _templateObject121, _templateObject250, _templateObject337, _templateObject429, _templateObject525, _templateObject621, _templateObject719, _templateObject818, _templateObject916, _templateObject1015, _templateObject1114, _templateObject1213, _templateObject1313, _templateObject1411;
function _taggedTemplateLiteral30(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var CoilWire = {
  type: "SERVICE",
  maxTurns: 60,
  test: CommunityService.CoilWire,
  name: "Coil Wire",
  tasks: [{
    name: "Sausage",
    ready: function() {
      return getKramcoWandererChance() >= 1;
    },
    completed: function() {
      return get("_sausageFights") > 0;
    },
    do: function() {
      (0, import_kolmafia33.adv1)($location(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral30(["Noob Cave"]))), -1, ""), have($item(_templateObject250 || (_templateObject250 = _taggedTemplateLiteral30(["magical sausage casing"])))) && (0, import_kolmafia33.create)(1, $item(_templateObject337 || (_templateObject337 = _taggedTemplateLiteral30(["magical sausage"])))), (0, import_kolmafia33.eat)(1, $item(_templateObject429 || (_templateObject429 = _taggedTemplateLiteral30(["magical sausage"]))));
    },
    outfit: function() {
      return uniform({
        changes: {
          offhand: $item(_templateObject525 || (_templateObject525 = _taggedTemplateLiteral30(["Kramco Sausage-o-Matic\u2122"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.skill($skill(_templateObject621 || (_templateObject621 = _taggedTemplateLiteral30(["Micrometeorite"])))).attack().repeat();
    })
  }],
  outfit: function() {
    return {
      hat: $item(_templateObject719 || (_templateObject719 = _taggedTemplateLiteral30(["Iunion Crown"]))),
      shirt: $item(_templateObject818 || (_templateObject818 = _taggedTemplateLiteral30(["fresh coat of paint"]))),
      pants: $item(_templateObject916 || (_templateObject916 = _taggedTemplateLiteral30(["Cargo Cultist Shorts"]))),
      weapon: $item(_templateObject1015 || (_templateObject1015 = _taggedTemplateLiteral30(["Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject1114 || (_templateObject1114 = _taggedTemplateLiteral30(["familiar scrapbook"]))),
      acc1: $item(_templateObject1213 || (_templateObject1213 = _taggedTemplateLiteral30(["Eight Days a Week Pill Keeper"]))),
      acc2: $item(_templateObject1313 || (_templateObject1313 = _taggedTemplateLiteral30(["Powerful Glove"]))),
      acc3: $item(_templateObject1411 || (_templateObject1411 = _taggedTemplateLiteral30(["Guzzlr tablet"])))
    };
  }
}, coil_wire_default = CoilWire;

// src/drinking.ts
init_kolmafia_polyfill();
var import_kolmafia34 = require("kolmafia");
var _templateObject130, _templateObject251, _templateObject338, _templateObject430, _templateObject526, _templateObject622;
function _taggedTemplateLiteral31(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var Drink = {
  name: "Drink Pilsners",
  type: "MISC",
  completed: function() {
    return (0, import_kolmafia34.myInebriety)() >= 5;
  },
  tasks: [{
    name: "Open Pilsners",
    completed: function() {
      return !have($item(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral31(["astral six-pack"]))));
    },
    do: function() {
      return (0, import_kolmafia34.use)($item(_templateObject251 || (_templateObject251 = _taggedTemplateLiteral31(["astral six-pack"]))));
    }
  }, songTask($effect(_templateObject338 || (_templateObject338 = _taggedTemplateLiteral31(["Ode to Booze"]))), $effect(_templateObject430 || (_templateObject430 = _taggedTemplateLiteral31(["The Magical Mojomuscular Melody"])))), {
    name: "Drink Pilsners",
    ready: function() {
      return have($item(_templateObject526 || (_templateObject526 = _taggedTemplateLiteral31(["astral pilsner"]))));
    },
    completed: function() {
      return (0, import_kolmafia34.myInebriety)() >= 5;
    },
    do: function() {
      return (0, import_kolmafia34.drink)($item(_templateObject622 || (_templateObject622 = _taggedTemplateLiteral31(["astral pilsner"]))));
    }
  }]
}, drinking_default = Drink;

// src/engine.ts
init_kolmafia_polyfill();

// src/globaltasks.ts
init_kolmafia_polyfill();
var import_kolmafia35 = require("kolmafia");
var _templateObject131, _templateObject259, _templateObject339, _templateObject431, _templateObject527, _templateObject623, _templateObject720, _templateObject819, _templateObject917, _templateObject1016, _templateObject1115;
function _taggedTemplateLiteral32(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var GLOBAL_TASKS = [{
  name: "Beaten Up!",
  completed: function() {
    return !have($effect(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral32(["Beaten Up"]))));
  },
  ready: function() {
    return get("lastEncounter") !== "Poetic Justice";
  },
  do: function() {
    return (0, import_kolmafia35.abort)("Beaten up!");
  }
}, {
  name: "Numberology",
  ready: function() {
    return Object.values((0, import_kolmafia35.reverseNumberology)()).includes(69);
  },
  completed: function() {
    return get("_universeCalculated") >= Math.min(get("skillLevel144"), 3);
  },
  do: function() {
    return (0, import_kolmafia35.cliExecute)("numberology 69");
  }
}, {
  name: "June Cleaver",
  completed: function() {
    return get("_juneCleaverFightsLeft") > 0;
  },
  ready: function() {
    return counter_exports.get("Portscan") === 1 / 0;
  },
  do: function() {
    return withProperty("recoveryScript", "", function() {
      (0, import_kolmafia35.adv1)($location(_templateObject259 || (_templateObject259 = _taggedTemplateLiteral32(["Noob Cave"]))), -1, ""), get("lastEncounter") === "Poetic Justice" && (0, import_kolmafia35.useSkill)($skill(_templateObject339 || (_templateObject339 = _taggedTemplateLiteral32(["Tongue of the Walrus"]))));
    });
  },
  outfit: {
    weapon: $item(_templateObject431 || (_templateObject431 = _taggedTemplateLiteral32(["June cleaver"])))
  }
}, {
  name: "Ghost",
  completed: function() {
    return get("questPAGhost") === "unstarted";
  },
  ready: function() {
    return have($item(_templateObject527 || (_templateObject527 = _taggedTemplateLiteral32(["protonic accelerator pack"])))) && get("questPAGhost") !== "unstarted" && !!get("ghostLocation") && !have($effect(_templateObject623 || (_templateObject623 = _taggedTemplateLiteral32(["Meteor Showered"]))));
  },
  do: function() {
    var location = get("ghostLocation");
    if (location)
      (0, import_kolmafia35.adv1)(location, 0, "");
    else
      throw "Could not determine Proton Ghost location!";
  },
  combat: new CSStrategy(function() {
    return Macro2.delevel().easyFight().trySkill($skill(_templateObject720 || (_templateObject720 = _taggedTemplateLiteral32(["Shoot Ghost"])))).trySkill($skill(_templateObject819 || (_templateObject819 = _taggedTemplateLiteral32(["Shoot Ghost"])))).trySkill($skill(_templateObject917 || (_templateObject917 = _taggedTemplateLiteral32(["Shoot Ghost"])))).trySkill($skill(_templateObject1016 || (_templateObject1016 = _taggedTemplateLiteral32(["Trap Ghost"]))));
  }),
  outfit: function() {
    return uniform({
      changes: {
        back: $item(_templateObject1115 || (_templateObject1115 = _taggedTemplateLiteral32(["protonic accelerator pack"])))
      }
    });
  }
}], GLOBAL_QUEST = {
  name: "Global",
  tasks: GLOBAL_TASKS
}, globaltasks_default = GLOBAL_QUEST;

// src/engine.ts
var import_kolmafia36 = require("kolmafia");
var _templateObject140, _templateObject260;
function _taggedTemplateLiteral33(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray11(arr) {
  return _arrayWithoutHoles11(arr) || _iterableToArray11(arr) || _unsupportedIterableToArray21(arr) || _nonIterableSpread11();
}
function _nonIterableSpread11() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray21(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray21(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray21(o, minLen);
  }
}
function _iterableToArray11(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles11(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray21(arr);
}
function _arrayLikeToArray21(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck14(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties14(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey18(descriptor.key), descriptor);
  }
}
function _createClass14(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties14(Constructor.prototype, protoProps), staticProps && _defineProperties14(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _get3() {
  return typeof Reflect != "undefined" && Reflect.get ? _get3 = Reflect.get.bind() : _get3 = function(target, property, receiver) {
    var base = _superPropBase3(target, property);
    if (!!base) {
      var desc = Object.getOwnPropertyDescriptor(base, property);
      return desc.get ? desc.get.call(arguments.length < 3 ? target : receiver) : desc.value;
    }
  }, _get3.apply(this, arguments);
}
function _superPropBase3(object, property) {
  for (; !Object.prototype.hasOwnProperty.call(object, property) && (object = _getPrototypeOf6(object), object !== null); )
    ;
  return object;
}
function _inherits7(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf7(subClass, superClass);
}
function _setPrototypeOf7(o, p) {
  return _setPrototypeOf7 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf7(o, p);
}
function _createSuper6(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct6();
  return function() {
    var Super = _getPrototypeOf6(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf6(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn6(this, result);
  };
}
function _possibleConstructorReturn6(self2, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized6(self2);
}
function _assertThisInitialized6(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _isNativeReflectConstruct6() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf6(o) {
  return _getPrototypeOf6 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf6(o);
}
function _defineProperty13(obj, key, value) {
  return key = _toPropertyKey18(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey18(arg) {
  var key = _toPrimitive18(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive18(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var HIGHLIGHT = (0, import_kolmafia36.isDarkMode)() ? "yellow" : "blue", CSEngine = /* @__PURE__ */ function(_Engine) {
  _inherits7(CSEngine2, _Engine);
  var _super = _createSuper6(CSEngine2);
  function CSEngine2(quest) {
    var _this;
    return _classCallCheck14(this, CSEngine2), _this = _super.call(this, getTasks([globaltasks_default, quest])), _defineProperty13(_assertThisInitialized6(_this), "propertyManager", CSEngine2.propertyManager), _defineProperty13(_assertThisInitialized6(_this), "name", void 0), _defineProperty13(_assertThisInitialized6(_this), "csOptions", void 0), _defineProperty13(_assertThisInitialized6(_this), "turnsSpent", void 0), _this.csOptions = quest, _this.turnsSpent = quest.turnsSpent, _this.name = _this.csOptions.type === "MISC" ? _this.csOptions.name : _this.csOptions.test.statName, _this;
  }
  return _createClass14(CSEngine2, [{
    key: "destruct",
    value: function() {
      (0, import_kolmafia36.setAutoAttack)(0);
    }
  }, {
    key: "available",
    value: function(task) {
      return _get3(_getPrototypeOf6(CSEngine2.prototype), "available", this).call(this, task) && (!task.core || task.core === CSEngine2.core);
    }
  }, {
    key: "initPropertiesManager",
    value: function() {
    }
  }, {
    key: "turns",
    get: function() {
      return this.turnsSpent ? typeof this.turnsSpent == "function" ? this.turnsSpent() : this.turnsSpent : 0;
    }
  }, {
    key: "runTest",
    value: function() {
      var _this = this;
      var loggingFunction = function(action) {
        return _this.csOptions.type === "MISC" ? CommunityService.logTask(_this.name, action) : _this.csOptions.test.run(action, _this.csOptions.maxTurns);
      };
      try {
        var result = loggingFunction(function() {
          return _this.run(), _this.csOptions.type === "SERVICE" && (Outfit.from(_this.csOptions.outfit(), new Error("Failed to equip outfit for ".concat(_this.name))).dress(), burnLibrams()), _this.turns;
        }), warning = this.csOptions.type === "MISC" ? "Failed to execute ".concat(this.name, "!") : "Failed to cap ".concat(this.name, "!");
        if (result === "failed")
          throw new Error(warning);
        if (result === "already completed")
          throw new Error("Libram thinks we already completed ".concat(this.name, " but we beg to differ"));
      } finally {
        this.destruct();
      }
    }
  }], [{
    key: "core",
    get: function() {
      return CSEngine2.core_;
    }
  }, {
    key: "initiate",
    value: function() {
      CSEngine2.propertyManager.set({
        customCombatScript: "grimoire_macro",
        battleAction: "custom combat script",
        dontStopForCounters: !0,
        hpAutoRecovery: -0.05,
        mpAutoRecovery: -0.05,
        logPreferenceChange: !0,
        logPreferenceChangeFilter: _toConsumableArray11(new Set([].concat(_toConsumableArray11(get("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(function(a) {
          return a;
        }).join(","),
        autoSatisfyWithNPCs: !0,
        autoSatisfyWithStorage: !1,
        libramSkillsSoftcore: "none"
      }), CSEngine2.propertyManager.setChoices({
        1467: 3,
        1468: 2,
        1469: 3,
        1470: 2,
        1471: 3,
        1472: 1,
        1473: 1,
        1474: 1,
        1475: 1
      }), (0, import_kolmafia36.readCcs)("grimoire_macro") || (0, import_kolmafia36.writeCcs)("[ default ]\nabort", "grimoire_macro");
    }
  }, {
    key: "runTests",
    value: function() {
      (0, import_kolmafia36.myPath)() !== $path(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral33(["Community Service"]))) && (0, import_kolmafia36.abort)(), (0, import_kolmafia36.visitUrl)("council.php"), CSEngine2.initiate();
      try {
        for (var _len = arguments.length, quests = new Array(_len), _key = 0; _key < _len; _key++)
          quests[_key] = arguments[_key];
        for (var _i = 0, _quests = quests; _i < _quests.length; _i++) {
          var quest = _quests[_i], type = quest.type;
          if (type === "MISC" || !quest.test.isDone()) {
            var engine = new CSEngine2(quest);
            engine.runTest();
          }
        }
      } finally {
        CSEngine2.core === "soft" && (CommunityService.donate(), uneffect($effect(_templateObject260 || (_templateObject260 = _taggedTemplateLiteral33(["Feeling Lost"]))))), CSEngine2.propertyManager.resetAll(), CommunityService.printLog(HIGHLIGHT), get("_cloudTalkSmoker") && (0, import_kolmafia36.print)("".concat(get("_cloudTalkSmoker").slice(10), " has a message for you: ").concat(get("_cloudTalkMessage"))), ["food", "booze"].includes(get("_questPartyFairQuest")) && (0, import_kolmafia36.print)("Talk to Gerald/ine!");
      }
    }
  }]), CSEngine2;
}(Engine);
_defineProperty13(CSEngine, "propertyManager", new PropertiesManager());
_defineProperty13(CSEngine, "core_", (0, import_kolmafia36.inHardcore)() ? "hard" : "soft");

// src/familiarweight.ts
init_kolmafia_polyfill();
var import_kolmafia37 = require("kolmafia");
var _templateObject141, _templateObject261, _templateObject340, _templateObject434, _templateObject528, _templateObject624, _templateObject721, _templateObject820, _templateObject918, _templateObject1017, _templateObject1116, _templateObject1214, _templateObject1314, _templateObject1412, _templateObject1511, _templateObject1611, _templateObject1711, _templateObject1811, _templateObject1911, _templateObject2011, _templateObject2116, _templateObject2216, _templateObject2313, _templateObject2411, _templateObject2510, _templateObject269, _templateObject279, _templateObject287, _templateObject296, _templateObject306, _templateObject3113, _templateObject3211, _templateObject3310, _templateObject346, _templateObject356, _templateObject365, _templateObject375, _templateObject385, _templateObject395, _templateObject404, _templateObject4112, _templateObject4210, _templateObject435, _templateObject444, _templateObject454, _templateObject464, _templateObject474, _templateObject484, _templateObject494;
function _toConsumableArray12(arr) {
  return _arrayWithoutHoles12(arr) || _iterableToArray12(arr) || _unsupportedIterableToArray22(arr) || _nonIterableSpread12();
}
function _nonIterableSpread12() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray22(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray22(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray22(o, minLen);
  }
}
function _iterableToArray12(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles12(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray22(arr);
}
function _arrayLikeToArray22(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral34(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var FamiliarWeight = {
  name: "Familiar Weight",
  type: "SERVICE",
  test: CommunityService.FamiliarWeight,
  outfit: function() {
    return {
      hat: $item(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral34(["Daylight Shavings Helmet"]))),
      weapon: $item(_templateObject261 || (_templateObject261 = _taggedTemplateLiteral34(["Fourth of May Cosplay Saber"]))),
      offhand: $items(_templateObject340 || (_templateObject340 = _taggedTemplateLiteral34(["burning paper crane, familiar scrapbook"]))),
      pants: $items(_templateObject434 || (_templateObject434 = _taggedTemplateLiteral34(["repaid diaper, Great Wolf's beastly trousers, designer sweatpants"]))),
      acc1: $item(_templateObject528 || (_templateObject528 = _taggedTemplateLiteral34(["Beach Comb"]))),
      acc2: $item(_templateObject624 || (_templateObject624 = _taggedTemplateLiteral34(["Brutal brogues"]))),
      acc3: $item(_templateObject721 || (_templateObject721 = _taggedTemplateLiteral34(["hewn moon-rune spoon"]))),
      familiar: $familiar(_templateObject820 || (_templateObject820 = _taggedTemplateLiteral34(["Mini-Trainbot"]))),
      famequip: $item(_templateObject918 || (_templateObject918 = _taggedTemplateLiteral34(["overloaded Yule battery"])))
    };
  },
  turnsSpent: 0,
  maxTurns: 30,
  tasks: [].concat(_toConsumableArray12(commonFamiliarWeightBuffs()), [potionTask($item(_templateObject1017 || (_templateObject1017 = _taggedTemplateLiteral34(["short stack of pancakes"])))), {
    name: "Moveable Feast",
    core: "soft",
    completed: function() {
      return get("_feastedFamiliars").split(";").includes("Mini-Trainbot");
    },
    ready: function() {
      return have($item(_templateObject1116 || (_templateObject1116 = _taggedTemplateLiteral34(["moveable feast"]))));
    },
    do: function() {
      return (0, import_kolmafia37.use)($item(_templateObject1214 || (_templateObject1214 = _taggedTemplateLiteral34(["moveable feast"]))));
    },
    outfit: {
      familiar: $familiar(_templateObject1314 || (_templateObject1314 = _taggedTemplateLiteral34(["Mini-Trainbot"])))
    }
  }, {
    name: "Get Yule Battery",
    completed: function() {
      return have($item(_templateObject1412 || (_templateObject1412 = _taggedTemplateLiteral34(["overloaded Yule battery"]))));
    },
    do: function() {
      have($item(_templateObject1511 || (_templateObject1511 = _taggedTemplateLiteral34(["box of Familiar Jacks"])))) || (0, import_kolmafia37.create)($item(_templateObject1611 || (_templateObject1611 = _taggedTemplateLiteral34(["box of Familiar Jacks"])))), (0, import_kolmafia37.use)($item(_templateObject1711 || (_templateObject1711 = _taggedTemplateLiteral34(["box of Familiar Jacks"]))));
    },
    outfit: {
      familiar: $familiar(_templateObject1811 || (_templateObject1811 = _taggedTemplateLiteral34(["Mini-Trainbot"])))
    }
  }, {
    name: "Paper Crane",
    completed: function() {
      return have($item(_templateObject1911 || (_templateObject1911 = _taggedTemplateLiteral34(["burning paper crane"]))));
    },
    do: function() {
      return (0, import_kolmafia37.create)($item(_templateObject2011 || (_templateObject2011 = _taggedTemplateLiteral34(["burning paper crane"]))));
    },
    ready: function() {
      return have($item(_templateObject2116 || (_templateObject2116 = _taggedTemplateLiteral34(["burning newspaper"]))));
    }
  }, {
    name: "Shorty Fights (Witchess)",
    completed: function() {
      return [$effect(_templateObject2216 || (_templateObject2216 = _taggedTemplateLiteral34(["Shortly Stacked"]))), $item(_templateObject2313 || (_templateObject2313 = _taggedTemplateLiteral34(["short stack of pancakes"])))].some(function(x) {
        return have(x);
      });
    },
    ready: function() {
      return availableFights() >= 11 - get("_shortOrderCookCharge") && 5 > Witchess_exports.fightsDone();
    },
    do: function() {
      return Witchess_exports.fightPiece($monster(_templateObject2411 || (_templateObject2411 = _taggedTemplateLiteral34(["Witchess Bishop"]))));
    },
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject2510 || (_templateObject2510 = _taggedTemplateLiteral34(["Shorter-Order Cook"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.defaultKill();
    })
  }, {
    name: "Shorty Fights (BRICKO)",
    completed: function() {
      return [$effect(_templateObject269 || (_templateObject269 = _taggedTemplateLiteral34(["Shortly Stacked"]))), $item(_templateObject279 || (_templateObject279 = _taggedTemplateLiteral34(["short stack of pancakes"])))].some(function(x) {
        return have(x);
      });
    },
    ready: function() {
      return availableFights() >= 11 - get("_shortOrderCookCharge") && have($item(_templateObject287 || (_templateObject287 = _taggedTemplateLiteral34(["BRICKO eye brick"]))));
    },
    do: function() {
      have($item(_templateObject296 || (_templateObject296 = _taggedTemplateLiteral34(["BRICKO ooze"])))) || (0, import_kolmafia37.create)($item(_templateObject306 || (_templateObject306 = _taggedTemplateLiteral34(["BRICKO ooze"])))), (0, import_kolmafia37.use)($item(_templateObject3113 || (_templateObject3113 = _taggedTemplateLiteral34(["BRICKO ooze"])))), (0, import_kolmafia37.runCombat)();
    },
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject3211 || (_templateObject3211 = _taggedTemplateLiteral34(["Shorter-Order Cook"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.defaultKill();
    })
  }, {
    name: "Garbage Fights (Witchess)",
    completed: function() {
      return $familiar(_templateObject3310 || (_templateObject3310 = _taggedTemplateLiteral34(["Garbage Fire"]))).dropsToday > 0;
    },
    ready: function() {
      return availableFights() >= 30 - get("garbageFireProgress") && 5 > Witchess_exports.fightsDone();
    },
    do: function() {
      return Witchess_exports.fightPiece($monster(_templateObject346 || (_templateObject346 = _taggedTemplateLiteral34(["Witchess Bishop"]))));
    },
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject356 || (_templateObject356 = _taggedTemplateLiteral34(["Garbage Fire"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.defaultKill();
    })
  }, {
    name: "Garbage Fights (BRICKO)",
    completed: function() {
      return $familiar(_templateObject365 || (_templateObject365 = _taggedTemplateLiteral34(["Garbage Fire"]))).dropsToday > 0;
    },
    ready: function() {
      return availableFights() >= 30 - get("garbageFireProgress") && have($item(_templateObject375 || (_templateObject375 = _taggedTemplateLiteral34(["BRICKO eye brick"]))));
    },
    do: function() {
      have($item(_templateObject385 || (_templateObject385 = _taggedTemplateLiteral34(["BRICKO ooze"])))) || (0, import_kolmafia37.create)($item(_templateObject395 || (_templateObject395 = _taggedTemplateLiteral34(["BRICKO ooze"])))), (0, import_kolmafia37.use)($item(_templateObject404 || (_templateObject404 = _taggedTemplateLiteral34(["BRICKO ooze"])))), (0, import_kolmafia37.runCombat)();
    },
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject4112 || (_templateObject4112 = _taggedTemplateLiteral34(["Garbage Fire"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.defaultKill();
    })
  }, {
    name: "Icy Revenge",
    ready: function() {
      return have($item(_templateObject4210 || (_templateObject4210 = _taggedTemplateLiteral34(["love song of icy revenge"]))));
    },
    completed: function() {
      return have($effect(_templateObject435 || (_templateObject435 = _taggedTemplateLiteral34(["Cold Hearted"]))), 20);
    },
    do: function() {
      return (0, import_kolmafia37.use)($item(_templateObject444 || (_templateObject444 = _taggedTemplateLiteral34(["love song of icy revenge"]))));
    }
  }, {
    name: "Blue Taffy",
    ready: function() {
      return have($item(_templateObject454 || (_templateObject454 = _taggedTemplateLiteral34(["pulled blue taffy"]))));
    },
    completed: function() {
      return have($effect(_templateObject464 || (_templateObject464 = _taggedTemplateLiteral34(["Blue Swayed"]))), 50);
    },
    do: function() {
      return (0, import_kolmafia37.use)($item(_templateObject474 || (_templateObject474 = _taggedTemplateLiteral34(["pulled blue taffy"]))));
    }
  }, {
    name: "Tune Moon",
    ready: function() {
      return (0, import_kolmafia37.mySign)() !== "Platypus";
    },
    completed: function() {
      return get("moonTuned");
    },
    do: function() {
      unequip($item(_templateObject484 || (_templateObject484 = _taggedTemplateLiteral34(["hewn moon-rune spoon"])))), (0, import_kolmafia37.visitUrl)("inv_use.php?whichitem=10254&pwd&doit=96&whichsign=4");
    },
    core: "soft"
  }, meteorShower(), potionTask($item(_templateObject494 || (_templateObject494 = _taggedTemplateLiteral34(["silver face paint"]))))])
}, familiarweight_default = FamiliarWeight;

// src/hotres.ts
init_kolmafia_polyfill();
var import_kolmafia38 = require("kolmafia");
var _templateObject150, _templateObject270, _templateObject341, _templateObject436, _templateObject529, _templateObject625, _templateObject722, _templateObject821, _templateObject919, _templateObject1018, _templateObject1117, _templateObject1215, _templateObject1315, _templateObject1413, _templateObject1512, _templateObject1612, _templateObject1712, _templateObject1812, _templateObject1912, _templateObject2012, _templateObject2117, _templateObject2217, _templateObject2314, _templateObject2412, _templateObject2511, _templateObject2610, _templateObject2710, _templateObject288, _templateObject297, _templateObject307, _templateObject3114, _templateObject3212, _templateObject3311, _templateObject347, _templateObject357, _templateObject366, _templateObject376, _templateObject386;
function _defineProperty14(obj, key, value) {
  return key = _toPropertyKey19(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey19(arg) {
  var key = _toPrimitive19(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive19(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray13(arr) {
  return _arrayWithoutHoles13(arr) || _iterableToArray13(arr) || _unsupportedIterableToArray23(arr) || _nonIterableSpread13();
}
function _nonIterableSpread13() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray23(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray23(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray23(o, minLen);
  }
}
function _iterableToArray13(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles13(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray23(arr);
}
function _arrayLikeToArray23(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral35(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var buffs2 = $effects(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral35(["Elemental Saucesphere, Astral Shell"]))), HotRes = {
  name: "Hot Res",
  type: "SERVICE",
  test: CommunityService.HotRes,
  outfit: function() {
    return {
      hat: $item(_templateObject270 || (_templateObject270 = _taggedTemplateLiteral35(["Daylight Shavings Helmet"]))),
      shirt: $items(_templateObject341 || (_templateObject341 = _taggedTemplateLiteral35(["Jurassic Parka, denim jacket"]))),
      back: $item(_templateObject436 || (_templateObject436 = _taggedTemplateLiteral35(["unwrapped knock-off retro superhero cape"]))),
      weapon: $item(_templateObject529 || (_templateObject529 = _taggedTemplateLiteral35(["industrial fire extinguisher"]))),
      offhand: $item(_templateObject625 || (_templateObject625 = _taggedTemplateLiteral35(["meteorite guard"]))),
      pants: $item(_templateObject722 || (_templateObject722 = _taggedTemplateLiteral35(["designer sweatpants"]))),
      acc1: $item(_templateObject821 || (_templateObject821 = _taggedTemplateLiteral35(["your cowboy boots"]))),
      acc2: $item(_templateObject919 || (_templateObject919 = _taggedTemplateLiteral35(["Beach Comb"]))),
      acc3: $item(_templateObject1018 || (_templateObject1018 = _taggedTemplateLiteral35(["Brutal brogues"]))),
      familiar: $familiar(_templateObject1117 || (_templateObject1117 = _taggedTemplateLiteral35(["Exotic Parrot"]))),
      famequip: $item(_templateObject1215 || (_templateObject1215 = _taggedTemplateLiteral35(["tiny stillsuit"]))),
      modes: {
        parka: "ghostasaurus",
        retrocape: ["vampire", "hold"]
      }
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [].concat(_toConsumableArray13(buffs2.map(skillTask)), [restore(buffs2)], _toConsumableArray13(commonFamiliarWeightBuffs()), [beachTask($effect(_templateObject1315 || (_templateObject1315 = _taggedTemplateLiteral35(["Hot-Headed"])))), beachTask($effect(_templateObject1413 || (_templateObject1413 = _taggedTemplateLiteral35(["Does It Have a Skull In There??"])))), asdonTask("Safely"), {
    name: "Extinguisher",
    completed: function() {
      return have($effect(_templateObject1512 || (_templateObject1512 = _taggedTemplateLiteral35(["Fireproof Foam Suit"]))));
    },
    ready: function() {
      return get("_saberForceUses") < 5;
    },
    do: function() {
      (0, import_kolmafia38.adv1)($location(_templateObject1612 || (_templateObject1612 = _taggedTemplateLiteral35(["The Dire Warren"]))), -1, ""), (0, import_kolmafia38.handlingChoice)() && (0, import_kolmafia38.runChoice)(-1);
    },
    choices: _defineProperty14({}, 1387, 3),
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar.none,
          famequip: $item.none,
          weapon: $item(_templateObject1712 || (_templateObject1712 = _taggedTemplateLiteral35(["Fourth of May Cosplay Saber"]))),
          offhand: $item(_templateObject1812 || (_templateObject1812 = _taggedTemplateLiteral35(["industrial fire extinguisher"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.skill($skill(_templateObject1912 || (_templateObject1912 = _taggedTemplateLiteral35(["Fire Extinguisher: Foam Yourself"])))).skill($skill(_templateObject2012 || (_templateObject2012 = _taggedTemplateLiteral35(["Use the Force"]))));
    }),
    post: function() {
      return (0, import_kolmafia38.visitUrl)("desc_item.php?whichitem=".concat($item(_templateObject2117 || (_templateObject2117 = _taggedTemplateLiteral35(["industrial fire extinguisher"]))).descid));
    }
  }, {
    name: "Pale Horse",
    completed: function() {
      return horsery() === "pale";
    },
    do: function() {
      return horse("pale");
    }
  }, {
    name: "Deep Dark Visions",
    completed: function() {
      return have($effect(_templateObject2217 || (_templateObject2217 = _taggedTemplateLiteral35(["Visions of the Deep Dark Deeps"]))), 40);
    },
    do: function() {
      for (; (0, import_kolmafia38.myHp)() < (0, import_kolmafia38.myMaxhp)(); )
        ensureMp(20), (0, import_kolmafia38.useSkill)(1, $skill(_templateObject2314 || (_templateObject2314 = _taggedTemplateLiteral35(["Cannelloni Cocoon"]))));
      ensureMp(100), (0, import_kolmafia38.useSkill)(1, $skill(_templateObject2412 || (_templateObject2412 = _taggedTemplateLiteral35(["Deep Dark Visions"]))));
    },
    outfit: {
      hat: $item(_templateObject2511 || (_templateObject2511 = _taggedTemplateLiteral35(["Daylight Shavings Helmet"]))),
      shirt: $items(_templateObject2610 || (_templateObject2610 = _taggedTemplateLiteral35(["Jurassic Parka, denim jacket"]))),
      back: $item(_templateObject2710 || (_templateObject2710 = _taggedTemplateLiteral35(["unwrapped knock-off retro superhero cape"]))),
      weapon: $item(_templateObject288 || (_templateObject288 = _taggedTemplateLiteral35(["industrial fire extinguisher"]))),
      offhand: $item(_templateObject297 || (_templateObject297 = _taggedTemplateLiteral35(["Fourth of May Cosplay Saber"]))),
      pants: $item(_templateObject307 || (_templateObject307 = _taggedTemplateLiteral35(["Cargo Cultist Shorts"]))),
      acc1: $item(_templateObject3114 || (_templateObject3114 = _taggedTemplateLiteral35(["your cowboy boots"]))),
      acc2: $item(_templateObject3212 || (_templateObject3212 = _taggedTemplateLiteral35(["Beach Comb"]))),
      acc3: $item(_templateObject3311 || (_templateObject3311 = _taggedTemplateLiteral35(["Brutal brogues"]))),
      familiar: $familiar(_templateObject347 || (_templateObject347 = _taggedTemplateLiteral35(["Exotic Parrot"]))),
      famequip: $item(_templateObject357 || (_templateObject357 = _taggedTemplateLiteral35(["tiny stillsuit"]))),
      modes: {
        parka: "ghostasaurus",
        retrocape: ["vampire", "hold"]
      }
    }
  }, {
    name: "Meteorite Guard",
    completed: function() {
      return have($item(_templateObject366 || (_templateObject366 = _taggedTemplateLiteral35(["meteorite guard"]))));
    },
    ready: function() {
      return have($item(_templateObject376 || (_templateObject376 = _taggedTemplateLiteral35(["metal meteoroid"]))));
    },
    do: function() {
      return (0, import_kolmafia38.create)($item(_templateObject386 || (_templateObject386 = _taggedTemplateLiteral35(["meteorite guard"]))));
    }
  }])
}, hotres_default = HotRes;

// src/level.ts
init_kolmafia_polyfill();
var import_kolmafia39 = require("kolmafia");
var _templateObject151, _templateObject271, _templateObject348, _templateObject437, _templateObject530, _templateObject626, _templateObject723, _templateObject822, _templateObject920, _templateObject1019, _templateObject1118, _templateObject1216, _templateObject1316, _templateObject1414, _templateObject1513, _templateObject1613, _templateObject1713, _templateObject1813, _templateObject1913, _templateObject2013, _templateObject2118, _templateObject2218, _templateObject2315, _templateObject2413, _templateObject2512, _templateObject2611, _templateObject2711, _templateObject289, _templateObject298, _templateObject308, _templateObject3115, _templateObject3213, _templateObject3312, _templateObject349, _templateObject358, _templateObject367, _templateObject377, _templateObject387, _templateObject396, _templateObject405, _templateObject4113, _templateObject4211, _templateObject438, _templateObject445, _templateObject455, _templateObject465, _templateObject475, _templateObject485, _templateObject495, _templateObject504, _templateObject5111, _templateObject5210, _templateObject533, _templateObject543, _templateObject553, _templateObject563, _templateObject573, _templateObject583, _templateObject593, _templateObject602, _templateObject6110, _templateObject627, _templateObject632, _templateObject642, _templateObject652, _templateObject662, _templateObject672, _templateObject682, _templateObject692, _templateObject702, _templateObject7110, _templateObject724, _templateObject732, _templateObject742, _templateObject752, _templateObject762, _templateObject772, _templateObject782, _templateObject792, _templateObject802, _templateObject8110, _templateObject823, _templateObject832, _templateObject842, _templateObject852, _templateObject862, _templateObject872, _templateObject882, _templateObject892, _templateObject902, _templateObject9110, _templateObject922, _templateObject932, _templateObject942, _templateObject952, _templateObject962, _templateObject972, _templateObject982, _templateObject992, _templateObject1002, _templateObject10110, _templateObject1022, _templateObject1032, _templateObject1042, _templateObject1052, _templateObject1062, _templateObject1072, _templateObject1082, _templateObject1092, _templateObject1102, _templateObject1119, _templateObject1122, _templateObject1132, _templateObject1142, _templateObject1152, _templateObject1162, _templateObject1172, _templateObject1182, _templateObject1192;
function _toConsumableArray14(arr) {
  return _arrayWithoutHoles14(arr) || _iterableToArray14(arr) || _unsupportedIterableToArray24(arr) || _nonIterableSpread14();
}
function _nonIterableSpread14() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray24(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray24(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray24(o, minLen);
  }
}
function _iterableToArray14(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles14(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray24(arr);
}
function _arrayLikeToArray24(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys7(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys7(Object(source), !0).forEach(function(key) {
      _defineProperty15(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys7(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty15(obj, key, value) {
  return key = _toPropertyKey20(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey20(arg) {
  var key = _toPrimitive20(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive20(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral36(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var levellingComplete = (0, import_kolmafia39.myLevel)() >= 13 && get("_neverendingPartyFreeTurns") >= 10, lovePotionConsidered = !1, foldshirt = function() {
  have($item(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral36(["makeshift garbage shirt"])))) || (0, import_kolmafia39.cliExecute)("fold makeshift garbage shirt");
}, CastSkills = $skills(_templateObject271 || (_templateObject271 = _taggedTemplateLiteral36(["Advanced Saucecrafting, Advanced Cocktailcrafting, Acquire Rhinestones, Prevent Scurvy and Sobriety, The Magical Mojomuscular Melody, Stevedave's Shanty of Superiority, Fat Leon's Phat Loot Lyric, The Polka of Plenty, Leash of Linguini, Empathy of the Newt, Blood Bond, Blood Bubble, Song of Bravado, Get Big"]))).map(function(s) {
  return {
    name: s.name,
    do: function() {
      (0, import_kolmafia39.useSkill)(s);
    },
    completed: function() {
      return s.buff ? have((0, import_kolmafia39.toEffect)(s)) : s.timescast > 0;
    },
    ready: function() {
      return (0, import_kolmafia39.myMp)() >= (0, import_kolmafia39.mpCost)(s);
    }
  };
}).map(function(task) {
  return _objectSpread7(_objectSpread7({}, task), {}, {
    outfit: function() {
      return uniform({
        changes: {
          offhand: $item(_templateObject348 || (_templateObject348 = _taggedTemplateLiteral36(["Abracandalabra"])))
        }
      });
    }
  });
}), Recovery = [{
  name: "Rest",
  completed: function() {
    return get("timesRested") >= (0, import_kolmafia39.totalFreeRests)();
  },
  mp: 150,
  do: function() {
    (0, import_kolmafia39.visitUrl)("place.php?whichplace=chateau&action=chateau_restlabelfree");
  }
}, {
  name: "Psychokinetic Energy Blob",
  completed: function() {
    return !have($item(_templateObject437 || (_templateObject437 = _taggedTemplateLiteral36(["psychokinetic energy blob"]))));
  },
  mp: 30,
  do: function() {
    (0, import_kolmafia39.use)($item(_templateObject530 || (_templateObject530 = _taggedTemplateLiteral36(["psychokinetic energy blob"]))));
  }
}].map(function(task) {
  return _objectSpread7(_objectSpread7({}, task), {}, {
    outfit: function() {
      return uniform({
        changes: {
          offhand: $item(_templateObject626 || (_templateObject626 = _taggedTemplateLiteral36(["Abracandalabra"])))
        }
      });
    },
    completed: function() {
      return task.completed() || CastSkills.every(function(_ref) {
        var completed = _ref.completed;
        return completed();
      });
    },
    ready: function() {
      return (0, import_kolmafia39.myMp)() + task.mp < (0, import_kolmafia39.myMaxmp)();
    }
  });
}), lovePotion = $item(_templateObject723 || (_templateObject723 = _taggedTemplateLiteral36(["Love Potion #0"]))), loveEffect = $effect(_templateObject822 || (_templateObject822 = _taggedTemplateLiteral36(["Tainted Love Potion"]))), Level = {
  type: "MISC",
  name: "Level",
  completed: function() {
    return levellingComplete;
  },
  tasks: [innerElf(), {
    name: "That's Just Cloud Talk, Man",
    completed: function() {
      return !!get("_campAwayCloudBuffs");
    },
    do: function() {
      return (0, import_kolmafia39.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
    }
  }, {
    name: "Synth: Learning",
    completed: function() {
      return have($effect(_templateObject920 || (_templateObject920 = _taggedTemplateLiteral36(["Synthesis: Learning"]))));
    },
    do: synthExp
  }, {
    name: "Ten-Percent Bonus",
    completed: function() {
      return !have($item(_templateObject1019 || (_templateObject1019 = _taggedTemplateLiteral36(["a ten-percent bonus"]))));
    },
    outfit: function() {
      return uniform({
        changes: {
          offhand: $item(_templateObject1118 || (_templateObject1118 = _taggedTemplateLiteral36(["familiar scrapbook"])))
        }
      });
    },
    effects: $effects(_templateObject1216 || (_templateObject1216 = _taggedTemplateLiteral36(["Inscrutable Gaze, Thaumodynamic"]))),
    do: function() {
      return (0, import_kolmafia39.use)(1, $item(_templateObject1316 || (_templateObject1316 = _taggedTemplateLiteral36(["a ten-percent bonus"]))));
    }
  }, {
    name: "Bastille",
    completed: function() {
      return get("_bastilleGames") > 0;
    },
    do: function() {
      return (0, import_kolmafia39.cliExecute)("bastille myst brutalist");
    }
  }, {
    name: "Get Love Potion",
    completed: function() {
      return $skill(_templateObject1414 || (_templateObject1414 = _taggedTemplateLiteral36(["Love Mixology"]))).timescast > 0;
    },
    do: function() {
      return (0, import_kolmafia39.useSkill)(1, $skill(_templateObject1513 || (_templateObject1513 = _taggedTemplateLiteral36(["Love Mixology"]))));
    }
  }, {
    name: "Consider Love Potion",
    completed: function() {
      return lovePotionConsidered;
    },
    do: function() {
      (0, import_kolmafia39.visitUrl)("desc_effect.php?whicheffect=".concat(loveEffect.descid)), lovePotionConsidered = !0, (0, import_kolmafia39.numericModifier)(loveEffect, "mysticality") > 10 && (0, import_kolmafia39.numericModifier)(loveEffect, "muscle") > -30 && (0, import_kolmafia39.numericModifier)(loveEffect, "moxie") > -30 && (0, import_kolmafia39.numericModifier)(loveEffect, "maximum hp percent") > -1e-3 && (0, import_kolmafia39.use)(1, lovePotion);
    }
  }, {
    name: "Favourite Bird",
    completed: function() {
      return get("_favoriteBirdVisited");
    },
    ready: function() {
      return get("yourFavoriteBirdMods").split(",").some(function(mod) {
        return mod.includes("Mysticality Percent: +");
      });
    },
    do: function() {
      return (0, import_kolmafia39.useSkill)($skill(_templateObject1613 || (_templateObject1613 = _taggedTemplateLiteral36(["Visit your Favorite Bird"]))));
    }
  }, {
    name: "Vaccine",
    completed: function() {
      return get("_spacegateVaccine");
    },
    ready: function() {
      return get("spacegateVaccine2") && get("spacegateAlways");
    },
    do: function() {
      return (0, import_kolmafia39.cliExecute)("spacegate vaccine 2");
    }
  }, {
    name: "Boxing Daybuff",
    completed: function() {
      return get("_daycareSpa");
    },
    do: function() {
      return (0, import_kolmafia39.cliExecute)("daycare mysticality");
    }
  }, beachTask($effect(_templateObject1713 || (_templateObject1713 = _taggedTemplateLiteral36(["You Learned Something Maybe!"])))), beachTask($effect(_templateObject1813 || (_templateObject1813 = _taggedTemplateLiteral36(["We're All Made of Starfish"])))), {
    name: "Smile of Lyle",
    completed: function() {
      return get("_lyleFavored");
    },
    do: function() {
      return (0, import_kolmafia39.cliExecute)("monorail buff");
    }
  }, {
    name: "Telescope",
    completed: function() {
      return get("telescopeLookedHigh");
    },
    do: function() {
      return (0, import_kolmafia39.cliExecute)("telescope look high");
    }
  }, {
    name: "Cross Streams",
    completed: function() {
      return get("_streamsCrossed");
    },
    do: function() {
      return (0, import_kolmafia39.cliExecute)("crossstreams");
    }
  }, {
    name: "Glittering Eyelashes",
    completed: function() {
      return have($effect(_templateObject1913 || (_templateObject1913 = _taggedTemplateLiteral36(["Glittering Eyelashes"]))));
    },
    do: function() {
      var mascara = $item(_templateObject2013 || (_templateObject2013 = _taggedTemplateLiteral36(["glittery mascara"])));
      have(mascara) || (0, import_kolmafia39.buy)(1, mascara), (0, import_kolmafia39.use)(1, mascara);
    }
  }, {
    name: "Triple-Sized",
    completed: function() {
      return have($effect(_templateObject2118 || (_templateObject2118 = _taggedTemplateLiteral36(["Triple-Sized"]))));
    },
    do: function() {
      return (0, import_kolmafia39.useSkill)($skill(_templateObject2218 || (_templateObject2218 = _taggedTemplateLiteral36(["CHEAT CODE: Triple Size"]))), 1);
    },
    outfit: {
      acc3: $item(_templateObject2315 || (_templateObject2315 = _taggedTemplateLiteral36(["Powerful Glove"])))
    }
  }, {
    name: "Feel Excited",
    completed: function() {
      return get("_feelExcitementUsed") > 0;
    },
    do: function() {
      return (0, import_kolmafia39.useSkill)($skill(_templateObject2413 || (_templateObject2413 = _taggedTemplateLiteral36(["Feel Excitement"]))));
    }
  }, {
    name: "Misc Items",
    completed: function() {
      return $items(_templateObject2512 || (_templateObject2512 = _taggedTemplateLiteral36(["votive of confidence, natural magick candle, MayDay\u2122 supply package"]))).every(function(i) {
        return !have(i);
      });
    },
    do: function() {
      return $items(_templateObject2611 || (_templateObject2611 = _taggedTemplateLiteral36(["votive of confidence, natural magick candle, MayDay\u2122 supply package"]))).forEach(function(i) {
        return have(i) && (0, import_kolmafia39.use)(i);
      });
    }
  }, {
    name: "Acquire Blue Rocket",
    completed: function() {
      return have($effect(_templateObject2711 || (_templateObject2711 = _taggedTemplateLiteral36(["Glowing Blue"])))) || have($item(_templateObject289 || (_templateObject289 = _taggedTemplateLiteral36(["blue rocket"]))));
    },
    do: function() {
      (0, import_kolmafia39.visitUrl)("clan_viplounge.php?action=fwshop&whichfloor=2"), (0, import_kolmafia39.buy)(1, $item(_templateObject298 || (_templateObject298 = _taggedTemplateLiteral36(["blue rocket"]))));
    }
  }, {
    name: "Acquire Casting Items",
    completed: function() {
      return $items(_templateObject308 || (_templateObject308 = _taggedTemplateLiteral36(["turtle totem, saucepan"]))).every(function(i) {
        return have(i);
      });
    },
    do: function() {
      return $items(_templateObject3115 || (_templateObject3115 = _taggedTemplateLiteral36(["turtle totem, saucepan"]))).forEach(function(i) {
        return !have(i) && (0, import_kolmafia39.cliExecute)("acquire ".concat(i));
      });
    }
  }].concat(_toConsumableArray14(CastSkills), _toConsumableArray14(Recovery), [
    {
      name: "Get Range",
      completed: function() {
        return get("hasRange");
      },
      do: function() {
        have($item(_templateObject3213 || (_templateObject3213 = _taggedTemplateLiteral36(["Dramatic\u2122 range"])))) || (0, import_kolmafia39.buy)(1, $item(_templateObject3312 || (_templateObject3312 = _taggedTemplateLiteral36(["Dramatic\u2122 range"])))), (0, import_kolmafia39.use)(1, $item(_templateObject349 || (_templateObject349 = _taggedTemplateLiteral36(["Dramatic\u2122 range"]))));
      }
    },
    {
      name: "Make & Use Ointment",
      completed: function() {
        return have($effect(_templateObject358 || (_templateObject358 = _taggedTemplateLiteral36(["Mystically Oiled"]))));
      },
      ready: function() {
        return have($item(_templateObject367 || (_templateObject367 = _taggedTemplateLiteral36(["grapefruit"]))));
      },
      do: function() {
        have($item(_templateObject377 || (_templateObject377 = _taggedTemplateLiteral36(["ointment of the occult"])))) || (0, import_kolmafia39.create)(1, $item(_templateObject387 || (_templateObject387 = _taggedTemplateLiteral36(["ointment of the occult"])))), have($item(_templateObject396 || (_templateObject396 = _taggedTemplateLiteral36(["ointment of the occult"])))) && (0, import_kolmafia39.use)(1, $item(_templateObject405 || (_templateObject405 = _taggedTemplateLiteral36(["ointment of the occult"]))));
      }
    },
    {
      name: "Set Snojo",
      completed: function() {
        return !!get("snojoSetting");
      },
      do: function() {
        (0, import_kolmafia39.visitUrl)("place.php?whichplace=snojo&action=snojo_controller"), (0, import_kolmafia39.runChoice)(3);
      }
    },
    {
      name: "Holiday Yoked",
      completed: function() {
        return have($effect(_templateObject4113 || (_templateObject4113 = _taggedTemplateLiteral36(["Holiday Yoked"]))));
      },
      do: $location(_templateObject4211 || (_templateObject4211 = _taggedTemplateLiteral36(["The X-32-F Combat Training Snowman"]))),
      outfit: function() {
        return uniform({
          changes: {
            familiar: $familiar(_templateObject438 || (_templateObject438 = _taggedTemplateLiteral36(["Ghost of Crimbo Carols"]))),
            famequip: $item.none
          }
        });
      },
      combat: new CSStrategy(function() {
        return Macro2.externalIf(!have($effect(_templateObject445 || (_templateObject445 = _taggedTemplateLiteral36(["Cosmic Ball in the Air"])))), Macro2.skill($skill(_templateObject455 || (_templateObject455 = _taggedTemplateLiteral36(["Bowl Straight Up"]))))).delevel().tryItem($item(_templateObject465 || (_templateObject465 = _taggedTemplateLiteral36(["blue rocket"])))).trySkill($skill(_templateObject475 || (_templateObject475 = _taggedTemplateLiteral36(["Giant Growth"])))).defaultKill();
      })
    },
    {
      name: "Map Ninja",
      completed: function() {
        return have($item(_templateObject485 || (_templateObject485 = _taggedTemplateLiteral36(["li'l ninja costume"]))));
      },
      do: function() {
        Cartography_exports.mapMonster($location(_templateObject495 || (_templateObject495 = _taggedTemplateLiteral36(["The Haiku Dungeon"]))), $monster(_templateObject504 || (_templateObject504 = _taggedTemplateLiteral36(["amateur ninja"]))));
      },
      combat: new CSStrategy(function() {
        return Macro2.if_($monster(_templateObject5111 || (_templateObject5111 = _taggedTemplateLiteral36(["amateur ninja"]))), Macro2.skill($skill(_templateObject5210 || (_templateObject5210 = _taggedTemplateLiteral36(["Chest X-Ray"]))))).abort();
      }),
      outfit: function() {
        return uniform({
          canAttack: !1,
          changes: {
            acc3: $item(_templateObject533 || (_templateObject533 = _taggedTemplateLiteral36(["Lil' Doctor\u2122 bag"])))
          }
        });
      }
    },
    {
      name: "Eleven Rests",
      completed: function() {
        return get("timesRested") >= 11;
      },
      do: function() {
        burnLibrams(), (0, import_kolmafia39.visitUrl)("place.php?whichplace=chateau&action=chateau_restlabelfree");
      },
      outfit: function() {
        return uniform({
          changes: {
            offhand: $item(_templateObject543 || (_templateObject543 = _taggedTemplateLiteral36(["familiar scrapbook"])))
          }
        });
      }
    },
    {
      name: "Witchess Witch",
      completed: function() {
        return have($item(_templateObject553 || (_templateObject553 = _taggedTemplateLiteral36(["battle broom"]))));
      },
      outfit: function() {
        return foldshirt(), uniform({
          changes: {
            weapon: $item(_templateObject563 || (_templateObject563 = _taggedTemplateLiteral36(["Fourth of May Cosplay Saber"]))),
            shirt: $item(_templateObject573 || (_templateObject573 = _taggedTemplateLiteral36(["makeshift garbage shirt"]))),
            offhand: $item(_templateObject583 || (_templateObject583 = _taggedTemplateLiteral36(["familiar scrapbook"])))
          }
        });
      },
      prepare: function() {
        (0, import_kolmafia39.useSkill)($skill(_templateObject593 || (_templateObject593 = _taggedTemplateLiteral36(["Cannelloni Cocoon"]))));
      },
      ready: function() {
        return Witchess_exports.fightsDone() < 5;
      },
      do: function() {
        return Witchess_exports.fightPiece($monster(_templateObject602 || (_templateObject602 = _taggedTemplateLiteral36(["Witchess Witch"]))));
      },
      combat: new CSStrategy(function() {
        return Macro2.delevel().attack().repeat();
      })
    },
    {
      name: "Oliver's Place: Prime Portscan",
      completed: function() {
        return get("_speakeasyFreeFights") > 0;
      },
      do: $location(_templateObject6110 || (_templateObject6110 = _taggedTemplateLiteral36(["An Unusually Quiet Barroom Brawl"]))),
      outfit: function() {
        return uniform();
      },
      combat: new CSStrategy(function() {
        return Macro2.skill($skill(_templateObject627 || (_templateObject627 = _taggedTemplateLiteral36(["Portscan"])))).defaultKill();
      })
    },
    {
      name: "Oliver's Place: Use Portscan",
      ready: function() {
        return counter_exports.get("Portscan") === 0;
      },
      completed: function() {
        return have($item(_templateObject632 || (_templateObject632 = _taggedTemplateLiteral36(["government cheese"]))));
      },
      do: $location(_templateObject642 || (_templateObject642 = _taggedTemplateLiteral36(["An Unusually Quiet Barroom Brawl"]))),
      outfit: function() {
        return uniform({
          changes: {
            back: $item(_templateObject652 || (_templateObject652 = _taggedTemplateLiteral36(["vampyric cloake"]))),
            acc3: $item(_templateObject662 || (_templateObject662 = _taggedTemplateLiteral36(["Lil' Doctor\u2122 bag"])))
          }
        });
      },
      combat: new CSStrategy(function() {
        return Macro2.skill($skill(_templateObject672 || (_templateObject672 = _taggedTemplateLiteral36(["Become a Bat"])))).skill($skill(_templateObject682 || (_templateObject682 = _taggedTemplateLiteral36(["Otoscope"])))).attack().repeat();
      })
    },
    {
      name: "LOV",
      completed: function() {
        return get("_loveTunnelUsed");
      },
      outfit: function() {
        return foldshirt(), uniform({
          changes: {
            weapon: $item(_templateObject692 || (_templateObject692 = _taggedTemplateLiteral36(["Fourth of May Cosplay Saber"]))),
            shirt: $item(_templateObject702 || (_templateObject702 = _taggedTemplateLiteral36(["makeshift garbage shirt"])))
          },
          canAttack: !1
        });
      },
      do: function() {
        return TunnelOfLove_exports.fightAll("LOV Epaulettes", "Open Heart Surgery", "LOV Extraterrestrial Chocolate");
      },
      combat: new CSStrategy(function() {
        return Macro2.if_($monster(_templateObject7110 || (_templateObject7110 = _taggedTemplateLiteral36(["LOV Enforcer"]))), Macro2.attack().repeat()).if_($monster(_templateObject724 || (_templateObject724 = _taggedTemplateLiteral36(["LOV Engineer"]))), Macro2.candyblast().trySkillRepeat($skill(_templateObject732 || (_templateObject732 = _taggedTemplateLiteral36(["Weapon of the Pastalord"]))))).if_($monster(_templateObject742 || (_templateObject742 = _taggedTemplateLiteral36(["LOV Equivocator"]))), Macro2.delevel().easyFight().candyblast().defaultKill());
      }),
      post: function() {
        (0, import_kolmafia39.use)(1, $item(_templateObject752 || (_templateObject752 = _taggedTemplateLiteral36(["LOV Extraterrestrial Chocolate"])))), burnLibrams();
      }
    },
    {
      name: "Snojo",
      completed: function() {
        return get("_snojoFreeFights") >= 10;
      },
      ready: function() {
        return !!get("snojoSetting");
      },
      outfit: uniform,
      do: $location(_templateObject762 || (_templateObject762 = _taggedTemplateLiteral36(["The X-32-F Combat Training Snowman"]))),
      combat: new CSStrategy(function() {
        return Macro2.delevel().easyFight().attack().repeat();
      })
    },
    {
      name: "Post-Snojo Hottub",
      completed: function() {
        return $effects(_templateObject772 || (_templateObject772 = _taggedTemplateLiteral36(["Snowballed, Half-Blooded, Half-Drained, Bruised, Relaxed Muscles, Hypnotized, Bad Haircut"]))).every(function(effect) {
          return !have(effect);
        });
      },
      do: function() {
        return (0, import_kolmafia39.cliExecute)("hottub");
      }
    },
    {
      name: "Tentacle",
      completed: function() {
        return get("_eldritchHorrorEvoked");
      },
      do: function() {
        return withProperties({
          autoAbortThreshold: -0.05,
          hpAutoRecoveryTarget: -0.05
        }, function() {
          try {
            (0, import_kolmafia39.useSkill)($skill(_templateObject782 || (_templateObject782 = _taggedTemplateLiteral36(["Evoke Eldritch Horror"])))), (0, import_kolmafia39.runCombat)();
          } catch (e) {
            (0, import_kolmafia39.print)("".concat(e));
          } finally {
            have($effect(_templateObject792 || (_templateObject792 = _taggedTemplateLiteral36(["Beaten Up"])))) && (0, import_kolmafia39.cliExecute)("hottub");
          }
        });
      },
      outfit: uniform,
      combat: new CSStrategy(function() {
        return Macro2.delevel().candyblast().defaultKill();
      })
    },
    {
      name: "God Lobster",
      completed: function() {
        return get("_godLobsterFights") >= (hasNcBird() ? 3 : 2);
      },
      do: function() {
        (0, import_kolmafia39.visitUrl)("main.php?fightgodlobster=1"), (0, import_kolmafia39.runCombat)(), (0, import_kolmafia39.visitUrl)("choice.php"), (0, import_kolmafia39.runChoice)(-1);
      },
      outfit: function() {
        var _find, gear = (_find = $items(_templateObject802 || (_templateObject802 = _taggedTemplateLiteral36(["God Lobster's Crown, God Lobster's Robe, God Lobster's Rod, God Lobster's Ring, God Lobster's Scepter"]))).find(function(it) {
          return have(it);
        })) !== null && _find !== void 0 ? _find : $item(_templateObject8110 || (_templateObject8110 = _taggedTemplateLiteral36(["tiny stillsuit"])));
        return uniform({
          changes: {
            familiar: $familiar(_templateObject823 || (_templateObject823 = _taggedTemplateLiteral36(["God Lobster"]))),
            famequip: gear
          }
        });
      },
      choices: _defineProperty15({}, 1310, function() {
        return hasNcBird() ? 3 : 1;
      }),
      combat: new CSStrategy()
    },
    {
      name: "Rest of the Rests",
      completed: function() {
        return get("timesRested") >= (0, import_kolmafia39.totalFreeRests)();
      },
      outfit: function() {
        return uniform({
          changes: {
            offhand: $item(_templateObject832 || (_templateObject832 = _taggedTemplateLiteral36(["familiar scrapbook"])))
          }
        });
      },
      do: function() {
        return (0, import_kolmafia39.visitUrl)("place.php?whichplace=chateau&action=chateau_restlabelfree");
      },
      prepare: burnLibrams
    },
    {
      name: "DMT",
      completed: function() {
        return get("_machineTunnelsAdv") >= 5;
      },
      do: $location(_templateObject842 || (_templateObject842 = _taggedTemplateLiteral36(["The Deep Machine Tunnels"]))),
      outfit: function() {
        return foldshirt(), uniform({
          changes: {
            shirt: $item(_templateObject852 || (_templateObject852 = _taggedTemplateLiteral36(["makeshift garbage shirt"]))),
            familiar: $familiar(_templateObject862 || (_templateObject862 = _taggedTemplateLiteral36(["Machine Elf"])))
          }
        });
      },
      combat: new CSStrategy()
    },
    {
      name: "Queen",
      completed: function() {
        return have($item(_templateObject872 || (_templateObject872 = _taggedTemplateLiteral36(["very pointy crown"]))));
      },
      do: function() {
        return Witchess_exports.fightPiece($monster(_templateObject882 || (_templateObject882 = _taggedTemplateLiteral36(["Witchess Queen"]))));
      },
      ready: function() {
        return Witchess_exports.fightsDone() < 5;
      },
      outfit: function() {
        return foldshirt(), uniform({
          changes: {
            weapon: $item(_templateObject892 || (_templateObject892 = _taggedTemplateLiteral36(["Fourth of May Cosplay Saber"]))),
            shirt: $item(_templateObject902 || (_templateObject902 = _taggedTemplateLiteral36(["makeshift garbage shirt"]))),
            offhand: $item(_templateObject9110 || (_templateObject9110 = _taggedTemplateLiteral36(["familiar scrapbook"])))
          }
        });
      },
      combat: new CSStrategy(function() {
        return Macro2.tryItem($item(_templateObject922 || (_templateObject922 = _taggedTemplateLiteral36(["jam band bootleg"])))).tryItem($item(_templateObject932 || (_templateObject932 = _taggedTemplateLiteral36(["gas can"])))).tryItem($item(_templateObject942 || (_templateObject942 = _taggedTemplateLiteral36(["Time-Spinner"])))).attack().repeat();
      }),
      prepare: function() {
        (0, import_kolmafia39.useSkill)($skill(_templateObject952 || (_templateObject952 = _taggedTemplateLiteral36(["Cannelloni Cocoon"]))));
      }
    },
    {
      name: "King",
      completed: function() {
        return have($item(_templateObject962 || (_templateObject962 = _taggedTemplateLiteral36(["dented scepter"]))));
      },
      do: function() {
        return Witchess_exports.fightPiece($monster(_templateObject972 || (_templateObject972 = _taggedTemplateLiteral36(["Witchess King"]))));
      },
      ready: function() {
        return Witchess_exports.fightsDone() < 5;
      },
      outfit: function() {
        return foldshirt(), uniform({
          changes: {
            weapon: $item(_templateObject982 || (_templateObject982 = _taggedTemplateLiteral36(["Fourth of May Cosplay Saber"]))),
            shirt: $item(_templateObject992 || (_templateObject992 = _taggedTemplateLiteral36(["makeshift garbage shirt"]))),
            offhand: $item(_templateObject1002 || (_templateObject1002 = _taggedTemplateLiteral36(["familiar scrapbook"])))
          }
        });
      },
      combat: new CSStrategy(function() {
        return Macro2.attack().repeat();
      }),
      prepare: function() {
        (0, import_kolmafia39.useSkill)($skill(_templateObject10110 || (_templateObject10110 = _taggedTemplateLiteral36(["Cannelloni Cocoon"]))));
      }
    },
    {
      name: "NEP Quest",
      completed: function() {
        return get("_questPartyFair") !== "unstarted";
      },
      do: function() {
        (0, import_kolmafia39.visitUrl)("adventure.php?snarfblat=528");
        var choice = ["food", "booze"].includes(get("_questPartyFairQuest")) ? 1 : 2;
        (0, import_kolmafia39.runChoice)(choice);
      }
    },
    {
      name: "Regular NEP",
      completed: function() {
        return get("_neverendingPartyFreeTurns") >= 10;
      },
      do: $location(_templateObject1022 || (_templateObject1022 = _taggedTemplateLiteral36(["The Neverending Party"]))),
      outfit: function() {
        foldshirt();
        var enoughSausages = get("_sausageFights") > 4, changes = _objectSpread7({
          shirt: $items(_templateObject1032 || (_templateObject1032 = _taggedTemplateLiteral36(["makeshift garbage shirt"])))
        }, enoughSausages ? {} : {
          offhand: $item(_templateObject1042 || (_templateObject1042 = _taggedTemplateLiteral36(["Kramco Sausage-o-Matic\u2122"])))
        });
        return uniform({
          changes: changes
        });
      },
      combat: new CSStrategy(function() {
        return Macro2.delevel().if_($effect(_templateObject1052 || (_templateObject1052 = _taggedTemplateLiteral36(["Inner Elf"]))), Macro2.trySkill($skill(_templateObject1062 || (_templateObject1062 = _taggedTemplateLiteral36(["Feel Pride"]))))).trySkill($skill(_templateObject1072 || (_templateObject1072 = _taggedTemplateLiteral36(["Bowl Sideways"])))).defaultKill();
      })
    },
    {
      name: "Freekill NEP",
      completed: function() {
        return get("_shatteringPunchUsed") >= 3 && get("_gingerbreadMobHitUsed") && have($effect(_templateObject1082 || (_templateObject1082 = _taggedTemplateLiteral36(["Everything Looks Yellow"])))) && get("_chestXRayUsed") >= 3;
      },
      do: $location(_templateObject1092 || (_templateObject1092 = _taggedTemplateLiteral36(["The Neverending Party"]))),
      outfit: function() {
        foldshirt();
        var killSource = have($effect(_templateObject1102 || (_templateObject1102 = _taggedTemplateLiteral36(["Everything Looks Yellow"])))) ? get("_chestXRayUsed") < 3 ? {
          acc3: $item(_templateObject1122 || (_templateObject1122 = _taggedTemplateLiteral36(["Lil' Doctor\u2122 bag"])))
        } : {} : {
          shirt: $item(_templateObject1119 || (_templateObject1119 = _taggedTemplateLiteral36(["Jurassic Parka"]))),
          modes: {
            parka: "dilophosaur"
          }
        }, enoughSausages = get("_sausageFights") > 4, changes = _objectSpread7(_objectSpread7({
          shirt: $items(_templateObject1132 || (_templateObject1132 = _taggedTemplateLiteral36(["makeshift garbage shirt"])))
        }, killSource), enoughSausages ? {} : {
          offhand: $item(_templateObject1142 || (_templateObject1142 = _taggedTemplateLiteral36(["Kramco Sausage-o-Matic\u2122"])))
        });
        return uniform({
          changes: changes
        });
      },
      combat: new CSStrategy(function() {
        return Macro2.if_($monster(_templateObject1152 || (_templateObject1152 = _taggedTemplateLiteral36(["sausage goblin"]))), Macro2.defaultKill()).trySkill($skill(_templateObject1162 || (_templateObject1162 = _taggedTemplateLiteral36(["Spit jurassic acid"])))).trySkill($skill(_templateObject1172 || (_templateObject1172 = _taggedTemplateLiteral36(["Chest X-Ray"])))).trySkill($skill(_templateObject1182 || (_templateObject1182 = _taggedTemplateLiteral36(["Shattering Punch"])))).trySkill($skill(_templateObject1192 || (_templateObject1192 = _taggedTemplateLiteral36(["Gingerbread Mob Hit"])))).abort();
      })
    }
  ])
}, level_default = Level;

// src/noncombat.ts
init_kolmafia_polyfill();
var import_kolmafia40 = require("kolmafia");
var _templateObject160, _templateObject280, _templateObject350, _templateObject439, _templateObject531, _templateObject628, _templateObject725, _templateObject824, _templateObject921, _templateObject1020, _templateObject1120, _templateObject1217, _templateObject1317, _templateObject1415, _templateObject1514, _templateObject1614, _templateObject1714, _templateObject1814, _templateObject1914, _templateObject2014, _templateObject2119;
function _defineProperty16(obj, key, value) {
  return key = _toPropertyKey21(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey21(arg) {
  var key = _toPrimitive21(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive21(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray15(arr) {
  return _arrayWithoutHoles15(arr) || _iterableToArray15(arr) || _unsupportedIterableToArray25(arr) || _nonIterableSpread15();
}
function _nonIterableSpread15() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray25(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray25(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray25(o, minLen);
  }
}
function _iterableToArray15(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles15(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray25(arr);
}
function _arrayLikeToArray25(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral37(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var Noncombat = {
  name: "Noncombat",
  type: "SERVICE",
  test: CommunityService.Noncombat,
  outfit: function() {
    return {
      hat: $item(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral37(["very pointy crown"]))),
      back: $item(_templateObject280 || (_templateObject280 = _taggedTemplateLiteral37(["protonic accelerator pack"]))),
      weapon: $item(_templateObject350 || (_templateObject350 = _taggedTemplateLiteral37(["Fourth of May Cosplay Saber"]))),
      shirt: $item(_templateObject439 || (_templateObject439 = _taggedTemplateLiteral37(["Jurassic Parka"]))),
      offhand: $item(_templateObject531 || (_templateObject531 = _taggedTemplateLiteral37(["unbreakable umbrella"]))),
      acc1: $item(_templateObject628 || (_templateObject628 = _taggedTemplateLiteral37(["hewn moon-rune spoon"]))),
      acc2: $item(_templateObject725 || (_templateObject725 = _taggedTemplateLiteral37(["codpiece"]))),
      acc3: $item(_templateObject824 || (_templateObject824 = _taggedTemplateLiteral37(["Brutal brogues"]))),
      familiar: $familiar(_templateObject921 || (_templateObject921 = _taggedTemplateLiteral37(["Disgeist"]))),
      modes: {
        umbrella: "cocoon",
        parka: "pterodactyl"
      }
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [{
    name: "Horse",
    completed: function() {
      return horsery() === "dark";
    },
    do: function() {
      return horse("dark");
    }
  }].concat(_toConsumableArray15(commonFamiliarWeightBuffs()), [skillTask($effect(_templateObject1020 || (_templateObject1020 = _taggedTemplateLiteral37(["Smooth Movements"])))), skillTask($effect(_templateObject1120 || (_templateObject1120 = _taggedTemplateLiteral37(["Feeling Lonely"])))), {
    name: "Invisible Avatar",
    completed: function() {
      return have($effect(_templateObject1217 || (_templateObject1217 = _taggedTemplateLiteral37(["Invisible Avatar"]))));
    },
    do: function() {
      return (0, import_kolmafia40.useSkill)($skill(_templateObject1317 || (_templateObject1317 = _taggedTemplateLiteral37(["CHEAT CODE: Invisible Avatar"]))));
    },
    outfit: {
      acc3: $item(_templateObject1415 || (_templateObject1415 = _taggedTemplateLiteral37(["Powerful Glove"])))
    }
  }, skillTask($effect(_templateObject1514 || (_templateObject1514 = _taggedTemplateLiteral37(["Blessing of the Bird"])))), {
    name: "Favourite Bird",
    completed: function() {
      return get("_favoriteBirdVisited");
    },
    ready: hasNcBird,
    do: function() {
      return (0, import_kolmafia40.useSkill)($skill(_templateObject1614 || (_templateObject1614 = _taggedTemplateLiteral37(["Visit your Favorite Bird"]))));
    }
  }, songTask($effect(_templateObject1714 || (_templateObject1714 = _taggedTemplateLiteral37(["The Sonata of Sneakiness"]))), $effect(_templateObject1814 || (_templateObject1814 = _taggedTemplateLiteral37(["Fat Leon's Phat Loot Lyric"])))), restore($effects(_templateObject1914 || (_templateObject1914 = _taggedTemplateLiteral37(["Smooth Movements, The Sonata of Sneakiness"])))), {
    name: "Swim Sprints",
    completed: function() {
      return get("_olympicSwimmingPool");
    },
    do: function() {
      return (0, import_kolmafia40.cliExecute)("swim sprints");
    }
  }, asdonTask("Stealthily"), {
    name: "God Lobster",
    completed: function() {
      return get("_godLobsterFights") >= 3;
    },
    do: function() {
      (0, import_kolmafia40.visitUrl)("main.php?fightgodlobster=1"), (0, import_kolmafia40.runCombat)(), (0, import_kolmafia40.visitUrl)("choice.php"), (0, import_kolmafia40.runChoice)(-1);
    },
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject2014 || (_templateObject2014 = _taggedTemplateLiteral37(["God Lobster"]))),
          famequip: $item(_templateObject2119 || (_templateObject2119 = _taggedTemplateLiteral37(["God Lobster's Ring"])))
        }
      });
    },
    choices: _defineProperty16({}, 1310, 2),
    combat: new CSStrategy()
  }])
}, noncombat_default = Noncombat;

// src/prologue.ts
init_kolmafia_polyfill();
var import_kolmafia41 = require("kolmafia");
var _templateObject161, _templateObject281, _templateObject351, _templateObject440, _templateObject534, _templateObject629, _templateObject726, _templateObject825, _templateObject923, _templateObject1021, _templateObject1121, _templateObject1218, _templateObject1318, _templateObject1416, _templateObject1515, _templateObject1615, _templateObject1715, _templateObject1815, _templateObject1915, _templateObject2015, _templateObject2120, _templateObject2219, _templateObject2316, _templateObject2414, _templateObject2513, _templateObject2612, _templateObject2712, _templateObject2810, _templateObject299, _templateObject309, _templateObject3116, _templateObject3214, _templateObject3313, _templateObject3410, _templateObject359, _templateObject368, _templateObject378, _templateObject388, _templateObject397, _templateObject406, _templateObject4114, _templateObject4212, _templateObject4310, _templateObject446, _templateObject456, _templateObject466, _templateObject476, _templateObject486;
function _toConsumableArray16(arr) {
  return _arrayWithoutHoles16(arr) || _iterableToArray16(arr) || _unsupportedIterableToArray26(arr) || _nonIterableSpread16();
}
function _nonIterableSpread16() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray26(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray26(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray26(o, minLen);
  }
}
function _iterableToArray16(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles16(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray26(arr);
}
function _arrayLikeToArray26(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral38(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var PULLS = [$items(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral38(["repaid diaper, Great Wolf's beastly trousers"]))), $items(_templateObject281 || (_templateObject281 = _taggedTemplateLiteral38(["meteorite necklace, meteorite ring, meteorite fragment, meteorite earring"]))), $items(_templateObject351 || (_templateObject351 = _taggedTemplateLiteral38(["Stick-Knife of Loathing"]))), $items(_templateObject440 || (_templateObject440 = _taggedTemplateLiteral38(["moveable feast"])))], codpieceAttempted = !1, MARKET_QUESTS = [{
  pref: "questM23Meatsmith",
  url: "shop.php?whichshop=meatsmith&action=talk"
}, {
  pref: "questM24Doc",
  url: "shop.php?whichshop=doc&action=talk"
}, {
  pref: "questM25Armorer",
  url: "shop.php?whichshop=armory&action=talk"
}], Prologue = {
  type: "MISC",
  name: "Prologue",
  completed: function() {
    return !!get("csServicesPerformed").split(",").filter(function(x) {
      return x.trim().length > 0;
    }).length;
  },
  tasks: [{
    name: "Set Workshed",
    completed: function() {
      return (0, import_kolmafia41.getWorkshed)() === $item(_templateObject534 || (_templateObject534 = _taggedTemplateLiteral38(["Asdon Martin keyfob"])));
    },
    do: function() {
      return (0, import_kolmafia41.use)($item(_templateObject629 || (_templateObject629 = _taggedTemplateLiteral38(["Asdon Martin keyfob"]))));
    }
  }].concat(_toConsumableArray16(MARKET_QUESTS.map(function(_ref) {
    var pref = _ref.pref, url = _ref.url;
    return {
      name: "Start Quest: ".concat(pref),
      completed: function() {
        return questStep(pref) > -1;
      },
      do: function() {
        (0, import_kolmafia41.visitUrl)(url), (0, import_kolmafia41.runChoice)(1);
      }
    };
  })), [{
    name: "Non-Staff Pulls",
    core: "soft",
    ready: function() {
      return PULLS.some(function(pullSet) {
        return pullSet.every(function(pull) {
          return !have(pull);
        });
      });
    },
    completed: function() {
      return get("_roninStoragePulls").split(",").length >= 4;
    },
    do: function() {
      for (var _i = 0, _PULLS = PULLS; _i < _PULLS.length; _i++) {
        var pullSet = _PULLS[_i];
        if (!pullSet.some(function(pull2) {
          return have(pull2);
        })) {
          var pull = pullSet.find(function(p) {
            return (0, import_kolmafia41.storageAmount)(p) > 0;
          });
          if (pull)
            (0, import_kolmafia41.takeStorage)(pull, 1);
          else
            throw new Error("Failed to pull one of ".concat(pullSet.join(", "), "; are you rich enough to run this in softcore?"));
        }
      }
    }
  }, {
    name: "Fallbot",
    completed: function() {
      return !AutumnAton_exports.available();
    },
    do: function() {
      return AutumnAton_exports.sendTo($location(_templateObject726 || (_templateObject726 = _taggedTemplateLiteral38(["The Sleazy Back Alley"]))));
    }
  }, {
    name: "Borrow Time",
    completed: function() {
      return get("_borrowedTimeUsed");
    },
    do: function() {
      have($item(_templateObject825 || (_templateObject825 = _taggedTemplateLiteral38(["borrowed time"])))) || (0, import_kolmafia41.create)(1, $item(_templateObject923 || (_templateObject923 = _taggedTemplateLiteral38(["borrowed time"])))), (0, import_kolmafia41.use)(1, $item(_templateObject1021 || (_templateObject1021 = _taggedTemplateLiteral38(["borrowed time"]))));
    }
  }, {
    name: "Cheat At Cards",
    completed: function() {
      return get("_deckCardsDrawn") >= 15;
    },
    do: function() {
      (0, import_kolmafia41.cliExecute)("cheat forest; cheat island; cheat 1952"), (0, import_kolmafia41.autosell)(1, $item(_templateObject1121 || (_templateObject1121 = _taggedTemplateLiteral38(["1952 Mickey Mantle card"])))), (0, import_kolmafia41.useSkill)(1, $skill(_templateObject1218 || (_templateObject1218 = _taggedTemplateLiteral38(["Ancestral Recall"]))));
    }
  }, {
    name: "Juice Bar",
    completed: function() {
      return get("_chateauDeskHarvested");
    },
    do: function() {
      (0, import_kolmafia41.visitUrl)("place.php?whichplace=chateau&action=chateau_desk2"), (0, import_kolmafia41.autosell)(1, $item(_templateObject1318 || (_templateObject1318 = _taggedTemplateLiteral38(["gremlin juice"]))));
    }
  }, {
    name: "Vote!",
    completed: function() {
      return have($item(_templateObject1416 || (_templateObject1416 = _taggedTemplateLiteral38(['"I Voted!" sticker']))));
    },
    do: function() {
      (0, import_kolmafia41.visitUrl)("place.php?whichplace=town_right&action=townright_vote"), (0, import_kolmafia41.visitUrl)("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=2&local%5B%5D=3"), (0, import_kolmafia41.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
    }
  }, {
    name: "Terminal Skills",
    completed: function() {
      return SourceTerminal_exports.getSkills().every(function(skill2) {
        return $skills(_templateObject1515 || (_templateObject1515 = _taggedTemplateLiteral38(["Extract, Portscan"]))).includes(skill2);
      }) && !!SourceTerminal_exports.getSkills().length;
    },
    do: function() {
      return SourceTerminal_exports.educate([$skill(_templateObject1615 || (_templateObject1615 = _taggedTemplateLiteral38(["Extract"]))), $skill(_templateObject1715 || (_templateObject1715 = _taggedTemplateLiteral38(["Portscan"])))]);
    }
  }, {
    name: "Change Clan",
    completed: function() {
      return (0, import_kolmafia41.getClanName)() === get("phccs_mainClan", "Bonus Adventures from Hell");
    },
    do: function() {
      return setClan(get("phccs_mainClan", "Bonus Adventures from Hell"));
    }
  }, {
    name: "Toot",
    completed: function() {
      return have($item(_templateObject1815 || (_templateObject1815 = _taggedTemplateLiteral38(["big rock"]))));
    },
    do: function() {
      (0, import_kolmafia41.visitUrl)("tutorial.php?action=toot"), tryUse(1, $item(_templateObject1915 || (_templateObject1915 = _taggedTemplateLiteral38(["letter from King Ralph XI"])))), tryUse(1, $item(_templateObject2015 || (_templateObject2015 = _taggedTemplateLiteral38(["pork elf goodies sack"])))), (0, import_kolmafia41.autosell)(5, $item(_templateObject2120 || (_templateObject2120 = _taggedTemplateLiteral38(["baconstone"])))), (0, import_kolmafia41.autosell)(5, $item(_templateObject2219 || (_templateObject2219 = _taggedTemplateLiteral38(["hamethyst"]))));
    }
  }, {
    name: "Accordion",
    completed: function() {
      return have($item(_templateObject2316 || (_templateObject2316 = _taggedTemplateLiteral38(["toy accordion"]))));
    },
    do: function() {
      return (0, import_kolmafia41.buy)(1, $item(_templateObject2414 || (_templateObject2414 = _taggedTemplateLiteral38(["toy accordion"]))));
    }
  }, {
    name: "Confiscated Items",
    completed: function() {
      return !!get("_grimoireConfiscatorSummons");
    },
    ready: function() {
      return have($skill(_templateObject2513 || (_templateObject2513 = _taggedTemplateLiteral38(["Summon Confiscated Things"]))));
    },
    do: function() {
      (0, import_kolmafia41.useSkill)(1, $skill(_templateObject2612 || (_templateObject2612 = _taggedTemplateLiteral38(["Summon Confiscated Things"])))), $items(_templateObject2712 || (_templateObject2712 = _taggedTemplateLiteral38(['glow-in-the-dark necklace, "KICK ME" sign, LCD game: Burger Belt, LCD game: Food Eater, LCD game: Garbage River']))).forEach(function(item6) {
        return (0, import_kolmafia41.autosell)((0, import_kolmafia41.itemAmount)(item6), item6);
      });
    }
  }, {
    name: "Tasteful Items",
    completed: function() {
      return !!get("grimoire2Summons");
    },
    ready: function() {
      return have($skill(_templateObject2810 || (_templateObject2810 = _taggedTemplateLiteral38(["Summon Tasteful Items"]))));
    },
    do: function() {
      (0, import_kolmafia41.useSkill)(1, $skill(_templateObject299 || (_templateObject299 = _taggedTemplateLiteral38(["Summon Tasteful Items"])))), $items(_templateObject309 || (_templateObject309 = _taggedTemplateLiteral38(["black-and-blue light, blue plasma ball, cheap studded belt, flavored foot massage oil, foam dart, Loudmouth Larry Lamprey, personal massager, personalized coffee mug, stick-on eyebrow piercing"]))).forEach(function(item6) {
        return (0, import_kolmafia41.autosell)((0, import_kolmafia41.itemAmount)(item6), item6);
      });
    }
  }, {
    name: "Alice's Army",
    completed: function() {
      return !!get("grimoire3Summons");
    },
    ready: function() {
      return have($skill(_templateObject3116 || (_templateObject3116 = _taggedTemplateLiteral38(["Summon Alice's Army Cards"]))));
    },
    do: function() {
      (0, import_kolmafia41.useSkill)(1, $skill(_templateObject3214 || (_templateObject3214 = _taggedTemplateLiteral38(["Summon Alice's Army Cards"])))), !have($item(_templateObject3313 || (_templateObject3313 = _taggedTemplateLiteral38(["tobiko marble soda"])))) && !CommunityService.SpellDamage.isDone() && (0, import_kolmafia41.buy)($coinmaster(_templateObject3410 || (_templateObject3410 = _taggedTemplateLiteral38(["Game Shoppe Snacks"]))), 1, $item(_templateObject359 || (_templateObject359 = _taggedTemplateLiteral38(["tobiko marble soda"]))));
    }
  }, {
    name: "Drinking Helmet",
    completed: function() {
      return have($item(_templateObject368 || (_templateObject368 = _taggedTemplateLiteral38(["dromedary drinking helmet"]))));
    },
    do: function() {
      (0, import_kolmafia41.useFamiliar)($familiar(_templateObject378 || (_templateObject378 = _taggedTemplateLiteral38(["Melodramedary"])))), have($item(_templateObject388 || (_templateObject388 = _taggedTemplateLiteral38(["box of Familiar Jacks"])))) || (0, import_kolmafia41.create)(1, $item(_templateObject397 || (_templateObject397 = _taggedTemplateLiteral38(["box of Familiar Jacks"])))), (0, import_kolmafia41.use)(1, $item(_templateObject406 || (_templateObject406 = _taggedTemplateLiteral38(["box of Familiar Jacks"]))));
    }
  }, {
    name: "Mummery",
    completed: function() {
      return get("_mummeryMods").includes("Mysticality");
    },
    do: function() {
      (0, import_kolmafia41.useFamiliar)($familiar(_templateObject4114 || (_templateObject4114 = _taggedTemplateLiteral38(["Melodramedary"])))), (0, import_kolmafia41.cliExecute)("mummery myst");
    }
  }, {
    name: "Shortsuit",
    completed: function() {
      return !(0, import_kolmafia41.itemAmount)($item(_templateObject4212 || (_templateObject4212 = _taggedTemplateLiteral38(["tiny stillsuit"]))));
    },
    do: function() {
      return (0, import_kolmafia41.equip)($familiar(_templateObject4310 || (_templateObject4310 = _taggedTemplateLiteral38(["Shorter-Order Cook"]))), $item(_templateObject446 || (_templateObject446 = _taggedTemplateLiteral38(["tiny stillsuit"]))));
    }
  }, {
    name: "Horsery",
    completed: function() {
      return horsery() === "dark";
    },
    do: function() {
      return horse("dark");
    }
  }, {
    name: "Cowboy Boots",
    completed: function() {
      return have($item(_templateObject456 || (_templateObject456 = _taggedTemplateLiteral38(["your cowboy boots"]))));
    },
    do: function() {
      (0, import_kolmafia41.visitUrl)("place.php?whichplace=town_right&action=townright_ltt"), (0, import_kolmafia41.runChoice)(5);
    }
  }, {
    name: "Cosplay Saber",
    completed: function() {
      return !!get("_saberMod");
    },
    do: function() {
      (0, import_kolmafia41.visitUrl)("main.php?action=may4"), (0, import_kolmafia41.runChoice)(4);
    }
  }, {
    name: "Detective Badge",
    completed: function() {
      return have($item(_templateObject466 || (_templateObject466 = _taggedTemplateLiteral38(["gold detective badge"]))));
    },
    do: function() {
      return (0, import_kolmafia41.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_precinct");
    }
  }, {
    name: "Codpiece",
    completed: function() {
      return have($item(_templateObject476 || (_templateObject476 = _taggedTemplateLiteral38(["codpiece"])))) || codpieceAttempted;
    },
    do: function() {
      Clan.with(get("phccs_mainClan", "Bonus Adventures From Hell"), function() {
        return (0, import_kolmafia41.cliExecute)("acquire codpiece");
      }), codpieceAttempted = !0;
    }
  }, {
    name: "Songboom",
    completed: function() {
      return SongBoom_exports.song() === "Total Eclipse of Your Meat";
    },
    do: function() {
      return SongBoom_exports.setSong("Total Eclipse of Your Meat");
    }
  }, {
    name: "Scavenge",
    completed: function() {
      return !!get("_daycareGymScavenges");
    },
    do: function() {
      (0, import_kolmafia41.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare"), (0, import_kolmafia41.runChoice)(3), (0, import_kolmafia41.runChoice)(2), (0, import_kolmafia41.runChoice)(5), (0, import_kolmafia41.runChoice)(4);
    }
  }, {
    name: "Unlock Bird",
    completed: function() {
      return !!get("_birdOfTheDay");
    },
    do: function() {
      return (0, import_kolmafia41.use)($item(_templateObject486 || (_templateObject486 = _taggedTemplateLiteral38(["Bird-a-Day calendar"]))));
    }
  }])
}, prologue_default = Prologue;

// src/spell.ts
init_kolmafia_polyfill();
var import_kolmafia42 = require("kolmafia");
var _templateObject170, _templateObject290, _templateObject360, _templateObject441, _templateObject535, _templateObject630, _templateObject727, _templateObject826, _templateObject924, _templateObject1023, _templateObject1123, _templateObject1219, _templateObject1319, _templateObject1417, _templateObject1516, _templateObject1616, _templateObject1716, _templateObject1816, _templateObject1916, _templateObject2016, _templateObject2121, _templateObject2220, _templateObject2317, _templateObject2415, _templateObject2514, _templateObject2613, _templateObject2713, _templateObject2811, _templateObject2910, _templateObject3010, _templateObject3117, _templateObject3215, _templateObject3314, _templateObject3411, _templateObject3510, _templateObject369, _templateObject379, _templateObject389, _templateObject398, _templateObject407, _templateObject4115, _templateObject4213, _templateObject4311, _templateObject447, _templateObject457, _templateObject467, _templateObject477, _templateObject487;
function _toConsumableArray17(arr) {
  return _arrayWithoutHoles17(arr) || _iterableToArray17(arr) || _unsupportedIterableToArray27(arr) || _nonIterableSpread17();
}
function _nonIterableSpread17() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray27(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray27(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray27(o, minLen);
  }
}
function _iterableToArray17(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles17(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray27(arr);
}
function _arrayLikeToArray27(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys8(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys8(Object(source), !0).forEach(function(key) {
      _defineProperty17(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys8(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty17(obj, key, value) {
  return key = _toPropertyKey22(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey22(arg) {
  var key = _toPrimitive22(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive22(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral39(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var buffs3 = $effects(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral39(["Carol of the Hells, Arched Eyebrow of the Archmage, Song of Sauce"]))), chefstaves = $items(_templateObject290 || (_templateObject290 = _taggedTemplateLiteral39(["Staff of the Roaring Hearth, Staff of Kitchen Royalty, Staff of the Deepest Freeze, Staff of Frozen Lard, Staff of the Peppermint Twist, Staff of the Roaring Hearth"]))), Spell = {
  name: "Spell Damage",
  type: "SERVICE",
  test: CommunityService.SpellDamage,
  outfit: function() {
    return _objectSpread8({
      hat: $items(_templateObject360 || (_templateObject360 = _taggedTemplateLiteral39(["astral chapeau, Hollandaise helmet, Iunion Crown"]))),
      weapon: CSEngine.core === "soft" ? chefstaves : $item(_templateObject441 || (_templateObject441 = _taggedTemplateLiteral39(["weeping willow wand"]))),
      offhand: $item(_templateObject535 || (_templateObject535 = _taggedTemplateLiteral39(["Abracandalabra"]))),
      pants: $item(_templateObject630 || (_templateObject630 = _taggedTemplateLiteral39(["designer sweatpants"]))),
      acc1: $items(_templateObject727 || (_templateObject727 = _taggedTemplateLiteral39(["meteorite necklace, Kremlin's Greatest Briefcase"]))),
      acc2: $item(_templateObject826 || (_templateObject826 = _taggedTemplateLiteral39(["codpiece"]))),
      acc3: $item(_templateObject924 || (_templateObject924 = _taggedTemplateLiteral39(["battle broom"])))
    }, CSEngine.core === "soft" ? {
      familiar: $familiar(_templateObject1023 || (_templateObject1023 = _taggedTemplateLiteral39(["Disembodied Hand"]))),
      famequip: $item(_templateObject1123 || (_templateObject1123 = _taggedTemplateLiteral39(["Stick-Knife of Loathing"])))
    } : {
      familiar: $familiar(_templateObject1219 || (_templateObject1219 = _taggedTemplateLiteral39(["Left-Hand Man"]))),
      equipment: $item(_templateObject1319 || (_templateObject1319 = _taggedTemplateLiteral39(["astral statuette"])))
    });
  },
  turnsSpent: 1,
  maxTurns: 30,
  tasks: [skillTask($skill(_templateObject1417 || (_templateObject1417 = _taggedTemplateLiteral39(["Simmer"])))), {
    name: "Do You Crush What I Crush?",
    completed: function() {
      return have($effect(_templateObject1516 || (_templateObject1516 = _taggedTemplateLiteral39(["Do You Crush What I Crush?"]))));
    },
    ready: function() {
      return !have($effect(_templateObject1616 || (_templateObject1616 = _taggedTemplateLiteral39(["Holiday Yoked"]))));
    },
    do: $location(_templateObject1716 || (_templateObject1716 = _taggedTemplateLiteral39(["The Dire Warren"]))),
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject1816 || (_templateObject1816 = _taggedTemplateLiteral39(["Ghost of Crimbo Carols"]))),
          famequip: $item.none
        }
      });
    },
    prepare: function() {
      return horsery() === "pale" && horse("dark");
    },
    combat: new CSStrategy(function() {
      return Macro2.trySkill($skill(_templateObject1916 || (_templateObject1916 = _taggedTemplateLiteral39(["Asdon Martin: Spring-Loaded Front Bumper"])))).trySkill($skill(_templateObject2016 || (_templateObject2016 = _taggedTemplateLiteral39(["Feel Hatred"]))));
    })
  }, potionTask($item(_templateObject2121 || (_templateObject2121 = _taggedTemplateLiteral39(["tobiko marble soda"])))), songTask($effect(_templateObject2220 || (_templateObject2220 = _taggedTemplateLiteral39(["Jackasses' Symphony of Destruction"]))), $effect(_templateObject2317 || (_templateObject2317 = _taggedTemplateLiteral39(["The Sonata of Sneakiness"]))))].concat(_toConsumableArray17(buffs3.map(skillTask)), [restore(buffs3), beachTask($effect(_templateObject2415 || (_templateObject2415 = _taggedTemplateLiteral39(["We're All Made of Starfish"])))), potionTask($item(_templateObject2514 || (_templateObject2514 = _taggedTemplateLiteral39(["LOV Elixir #6"])))), {
    name: "Cargopocket",
    completed: function() {
      return get("_cargoPocketEmptied");
    },
    ready: function() {
      return $items(_templateObject2613 || (_templateObject2613 = _taggedTemplateLiteral39(["sizzling desk bell, frost-rimed desk bell, uncanny desk bell, nasty desk bell, greasy desk bell"]))).every(function(item6) {
        return getSaleValue(item6) < 4 * get("valueOfAdventure");
      });
    },
    do: function() {
      return (0, import_kolmafia42.cliExecute)("cargo 177");
    }
  }, potionTask($item(_templateObject2713 || (_templateObject2713 = _taggedTemplateLiteral39(["Yeg's Motel hand soap"])))), {
    name: "Briefcase",
    core: "hard",
    completed: function() {
      return (0, import_kolmafia42.numericModifier)($item(_templateObject2811 || (_templateObject2811 = _taggedTemplateLiteral39(["Kremlin's Greatest Briefcase"]))), "Spell Damage Percent") > 0;
    },
    do: function() {
      return (0, import_kolmafia42.cliExecute)("Briefcase.ash enchantment spell");
    }
  }, {
    name: "Mariachi Hat",
    completed: function() {
      return have($item(_templateObject2910 || (_templateObject2910 = _taggedTemplateLiteral39(["mariachi hat"]))));
    },
    do: function() {
      return (0, import_kolmafia42.retrieveItem)($item(_templateObject3010 || (_templateObject3010 = _taggedTemplateLiteral39(["mariachi hat"]))));
    }
  }, {
    name: "Weeping Willow Wand",
    completed: function() {
      return have($item(_templateObject3117 || (_templateObject3117 = _taggedTemplateLiteral39(["weeping willow wand"]))));
    },
    core: "hard",
    do: function() {
      have($item(_templateObject3215 || (_templateObject3215 = _taggedTemplateLiteral39(["flimsy hardwood scraps"])))) || (0, import_kolmafia42.use)($item(_templateObject3314 || (_templateObject3314 = _taggedTemplateLiteral39(["SpinMaster\u2122 lathe"])))), (0, import_kolmafia42.retrieveItem)($item(_templateObject3411 || (_templateObject3411 = _taggedTemplateLiteral39(["weeping willow wand"]))));
    }
  }, {
    name: "Tea Party",
    completed: function() {
      return get("_madTeaParty");
    },
    do: function() {
      return (0, import_kolmafia42.cliExecute)("hatter mariachi hat");
    },
    prepare: function() {
      (0, import_kolmafia42.visitUrl)("clan_viplounge.php?action=lookingglass&whichfloor=2"), (0, import_kolmafia42.use)($item(_templateObject3510 || (_templateObject3510 = _taggedTemplateLiteral39(['"DRINK ME" potion']))));
    }
  }, skillTask($skill(_templateObject369 || (_templateObject369 = _taggedTemplateLiteral39(["Spirit of Cayenne"])))), potionTask($item(_templateObject379 || (_templateObject379 = _taggedTemplateLiteral39(["flask of baconstone juice"])))), {
    name: "Saucefingers",
    ready: function() {
      return (0, import_kolmafia42.myLevel)() >= 15 && have($familiar(_templateObject389 || (_templateObject389 = _taggedTemplateLiteral39(["Mini-Adventurer"]))));
    },
    completed: function() {
      return have($effect(_templateObject398 || (_templateObject398 = _taggedTemplateLiteral39(["Saucefingers"]))));
    },
    do: $location(_templateObject407 || (_templateObject407 = _taggedTemplateLiteral39(["The Dire Warren"]))),
    prepare: function() {
      return horsery() === "pale" && horse("dark");
    },
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject4115 || (_templateObject4115 = _taggedTemplateLiteral39(["Mini-Adventurer"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.trySkill($skill(_templateObject4213 || (_templateObject4213 = _taggedTemplateLiteral39(["Asdon Martin: Spring-Loaded Front Bumper"])))).skill($skill(_templateObject4311 || (_templateObject4311 = _taggedTemplateLiteral39(["Feel Hatred"]))));
    }),
    choices: _defineProperty17({}, 768, 4)
  }, innerElf(), meteorShower(), {
    name: "Meteorite Necklace",
    core: "soft",
    completed: function() {
      return have($item(_templateObject447 || (_templateObject447 = _taggedTemplateLiteral39(["meteorite necklace"]))));
    },
    ready: function() {
      return (0, import_kolmafia42.canadiaAvailable)();
    },
    do: function() {
      var meteor = $items(_templateObject457 || (_templateObject457 = _taggedTemplateLiteral39(["meteorite ring, meteorite fragment, meteorite earring"]))).find(function(item6) {
        return have(item6);
      });
      meteor && (unequip(meteor), (0, import_kolmafia42.retrieveItem)(1, $item(_templateObject467 || (_templateObject467 = _taggedTemplateLiteral39(["tenderizing hammer"])))), (0, import_kolmafia42.retrieveItem)(1, $item(_templateObject477 || (_templateObject477 = _taggedTemplateLiteral39(["jewelry-making pliers"])))), (0, import_kolmafia42.cliExecute)("smash ".concat(meteor)), (0, import_kolmafia42.cliExecute)("make ".concat($item(_templateObject487 || (_templateObject487 = _taggedTemplateLiteral39(["meteorite necklace"]))))));
    }
  }, {
    name: "Pull Staff",
    completed: function() {
      return chefstaves.some(function(staff) {
        return have(staff);
      });
    },
    core: "soft",
    do: function() {
      var staff = chefstaves.find(function(s) {
        return (0, import_kolmafia42.storageAmount)(s) > 0 && (0, import_kolmafia42.canEquip)(s);
      });
      staff && (0, import_kolmafia42.takeStorage)(staff, 1);
    }
  }])
}, spell_default = Spell;

// src/stattests.ts
init_kolmafia_polyfill();
var import_kolmafia43 = require("kolmafia");
var _templateObject171, _templateObject291, _templateObject361, _templateObject448, _templateObject536, _templateObject631, _templateObject728, _templateObject827, _templateObject925, _templateObject1024, _templateObject1124, _templateObject1220, _templateObject1320, _templateObject1418, _templateObject1517, _templateObject1617, _templateObject1717, _templateObject1817, _templateObject1917, _templateObject2017, _templateObject2122, _templateObject2221, _templateObject2318, _templateObject2416, _templateObject2515, _templateObject2614, _templateObject2714, _templateObject2812, _templateObject2911, _templateObject3011, _templateObject3118, _templateObject3216, _templateObject3315, _templateObject3412, _templateObject3511, _templateObject3610, _templateObject3710, _templateObject3810, _templateObject399, _templateObject408, _templateObject4116, _templateObject4214, _templateObject4312, _templateObject449, _templateObject458, _templateObject468, _templateObject478, _templateObject488, _templateObject496, _templateObject505, _templateObject5112, _templateObject5211, _templateObject537, _templateObject544, _templateObject554, _templateObject564, _templateObject574, _templateObject584, _templateObject594, _templateObject603, _templateObject6111;
function ownKeys9(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys9(Object(source), !0).forEach(function(key) {
      _defineProperty18(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys9(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty18(obj, key, value) {
  return key = _toPropertyKey23(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey23(arg) {
  var key = _toPrimitive23(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive23(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray18(arr) {
  return _arrayWithoutHoles18(arr) || _iterableToArray18(arr) || _unsupportedIterableToArray28(arr) || _nonIterableSpread18();
}
function _nonIterableSpread18() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray28(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray28(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray28(o, minLen);
  }
}
function _iterableToArray18(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles18(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray28(arr);
}
function _arrayLikeToArray28(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral40(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var SKILL_BUFFS = {
  MUSCLE: $effects(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral40(["Feeling Excited, Big, Song of Bravado, Rage of the Reindeer, Quiet Determination, Disdain of the War Snapper"]))),
  MYSTICALITY: $effects(_templateObject291 || (_templateObject291 = _taggedTemplateLiteral40(["Feeling Excited, Big, Song of Bravado"]))),
  MOXIE: $effects(_templateObject361 || (_templateObject361 = _taggedTemplateLiteral40(["Feeling Excited, Big, Song of Bravado, Blessing of the Bird, Quiet Desperation, Disco Fever, Blubbered Up, Mariachi Mood, Disco State of Mind"]))),
  HP: $effects(_templateObject448 || (_templateObject448 = _taggedTemplateLiteral40(["Feeling Excited, Big, Song of Starch, Rage of the Reindeer, Quiet Determination, Disdain of the War Snapper"])))
};
function skillBuffTasks(key) {
  return [].concat(_toConsumableArray18(SKILL_BUFFS[key].map(skillTask)), [restore(SKILL_BUFFS[key])]);
}
function thrallTask(thrall) {
  return {
    name: thrall.toString(),
    completed: function() {
      return (0, import_kolmafia43.myThrall)() === thrall;
    },
    do: function() {
      return (0, import_kolmafia43.useSkill)(thrall.skill);
    }
  };
}
var Muscle = {
  name: "Muscle",
  type: "SERVICE",
  test: CommunityService.Muscle,
  outfit: function() {
    return have($item(_templateObject536 || (_templateObject536 = _taggedTemplateLiteral40(["wad of used tape"])))) || (0, import_kolmafia43.cliExecute)("fold wad of used tape"), {
      hat: $item(_templateObject631 || (_templateObject631 = _taggedTemplateLiteral40(["wad of used tape"]))),
      weapon: $item(_templateObject728 || (_templateObject728 = _taggedTemplateLiteral40(["Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject827 || (_templateObject827 = _taggedTemplateLiteral40(["dented scepter"]))),
      shirt: $item(_templateObject925 || (_templateObject925 = _taggedTemplateLiteral40(["Jurassic Parka"]))),
      back: $item(_templateObject1024 || (_templateObject1024 = _taggedTemplateLiteral40(["unwrapped knock-off retro superhero cape"]))),
      pants: $item(_templateObject1124 || (_templateObject1124 = _taggedTemplateLiteral40(["designer sweatpants"]))),
      acc1: $item(_templateObject1220 || (_templateObject1220 = _taggedTemplateLiteral40(["Brutal brogues"]))),
      acc2: CSEngine.core === "soft" ? $item(_templateObject1320 || (_templateObject1320 = _taggedTemplateLiteral40(["meteorite necklace"]))) : $item(_templateObject1418 || (_templateObject1418 = _taggedTemplateLiteral40(["Retrospecs"]))),
      acc3: $item(_templateObject1517 || (_templateObject1517 = _taggedTemplateLiteral40(["Kremlin's Greatest Briefcase"]))),
      familiar: $familiar(_templateObject1617 || (_templateObject1617 = _taggedTemplateLiteral40(["Left-Hand Man"]))),
      modes: {
        retrocape: ["vampire", RetroCape_exports.currentMode()],
        parka: "dilophosaur",
        umbrella: "broken"
      },
      famequip: $item(_templateObject1717 || (_templateObject1717 = _taggedTemplateLiteral40(["unbreakable umbrella"])))
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [].concat(_toConsumableArray18(skillBuffTasks("MUSCLE")), [potionTask($item(_templateObject1817 || (_templateObject1817 = _taggedTemplateLiteral40(["LOV Elixir #3"])))), thrallTask($thrall(_templateObject1917 || (_templateObject1917 = _taggedTemplateLiteral40(["Elbow Macaroni"])))), beachTask($effect(_templateObject2017 || (_templateObject2017 = _taggedTemplateLiteral40(["Lack of Body-Building"])))), _objectSpread9(_objectSpread9({}, innerElf()), {}, {
    core: "hard"
  }), _objectSpread9(_objectSpread9({}, potionTask($item(_templateObject2122 || (_templateObject2122 = _taggedTemplateLiteral40(["Ben-Gal\u2122 Balm"]))))), {}, {
    core: "hard"
  })])
}, Mysticality = {
  name: "Mysticality",
  type: "SERVICE",
  test: CommunityService.Mysticality,
  outfit: function() {
    return have($item(_templateObject2221 || (_templateObject2221 = _taggedTemplateLiteral40(["wad of used tape"])))) || (0, import_kolmafia43.cliExecute)("fold wad of used tape"), {
      hat: $item(_templateObject2318 || (_templateObject2318 = _taggedTemplateLiteral40(["wad of used tape"]))),
      weapon: $item(_templateObject2416 || (_templateObject2416 = _taggedTemplateLiteral40(["Fourth of May Cosplay Saber"]))),
      offhand: $items(_templateObject2515 || (_templateObject2515 = _taggedTemplateLiteral40(["astral statuette, industrial fire extinguisher"]))),
      back: $item(_templateObject2614 || (_templateObject2614 = _taggedTemplateLiteral40(["unwrapped knock-off retro superhero cape"]))),
      shirt: $items(_templateObject2714 || (_templateObject2714 = _taggedTemplateLiteral40(["denim jacket, shoe ad T-shirt, fresh coat of paint"]))),
      pants: $item(_templateObject2812 || (_templateObject2812 = _taggedTemplateLiteral40(["designer sweatpants"]))),
      acc1: $item(_templateObject2911 || (_templateObject2911 = _taggedTemplateLiteral40(["your cowboy boots"]))),
      acc2: $item(_templateObject3011 || (_templateObject3011 = _taggedTemplateLiteral40(["codpiece"]))),
      acc3: $item(_templateObject3118 || (_templateObject3118 = _taggedTemplateLiteral40(["battle broom"]))),
      famequip: $items(_templateObject3216 || (_templateObject3216 = _taggedTemplateLiteral40(["Abracandalabra"]))),
      familiar: $familiar(_templateObject3315 || (_templateObject3315 = _taggedTemplateLiteral40(["Left-Hand Man"]))),
      modes: {
        retrocape: ["heck", RetroCape_exports.currentMode()]
      }
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: _toConsumableArray18(skillBuffTasks("MYSTICALITY"))
}, Moxie = {
  name: "Moxie",
  type: "SERVICE",
  test: CommunityService.Moxie,
  outfit: function() {
    return {
      hat: $item(_templateObject3412 || (_templateObject3412 = _taggedTemplateLiteral40(["very pointy crown"]))),
      shirt: $item(_templateObject3511 || (_templateObject3511 = _taggedTemplateLiteral40(["Jurassic Parka"]))),
      back: $item(_templateObject3610 || (_templateObject3610 = _taggedTemplateLiteral40(["unwrapped knock-off retro superhero cape"]))),
      weapon: $item(_templateObject3710 || (_templateObject3710 = _taggedTemplateLiteral40(["Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject3810 || (_templateObject3810 = _taggedTemplateLiteral40(["unbreakable umbrella"]))),
      pants: $item(_templateObject399 || (_templateObject399 = _taggedTemplateLiteral40(["Cargo Cultist Shorts"]))),
      acc1: $item(_templateObject408 || (_templateObject408 = _taggedTemplateLiteral40(["Beach Comb"]))),
      acc2: $item(_templateObject4116 || (_templateObject4116 = _taggedTemplateLiteral40(['"I Voted!" sticker']))),
      acc3: $item(_templateObject4214 || (_templateObject4214 = _taggedTemplateLiteral40(["Retrospecs"]))),
      famequip: $item(_templateObject4312 || (_templateObject4312 = _taggedTemplateLiteral40(["miniature crystal ball"]))),
      modes: {
        retrocape: ["robot", RetroCape_exports.currentMode()],
        umbrella: "broken"
      }
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [].concat(_toConsumableArray18(skillBuffTasks("MOXIE")), _toConsumableArray18($items(_templateObject449 || (_templateObject449 = _taggedTemplateLiteral40(["runproof mascara, confiscated love note, dollop of barbecue sauce"]))).map(potionTask)), [{
    name: "Rhinestones",
    completed: function() {
      return !have($item(_templateObject458 || (_templateObject458 = _taggedTemplateLiteral40(["rhinestone"]))));
    },
    do: function() {
      return (0, import_kolmafia43.use)((0, import_kolmafia43.itemAmount)($item(_templateObject468 || (_templateObject468 = _taggedTemplateLiteral40(["rhinestone"])))), $item(_templateObject478 || (_templateObject478 = _taggedTemplateLiteral40(["rhinestone"]))));
    }
  }, thrallTask($thrall(_templateObject488 || (_templateObject488 = _taggedTemplateLiteral40(["Penne Dreadful"]))))])
}, Hitpoints = {
  name: "Hitpoints",
  type: "SERVICE",
  test: CommunityService.HP,
  turnsSpent: 0,
  maxTurns: 1,
  outfit: function() {
    return have($item(_templateObject496 || (_templateObject496 = _taggedTemplateLiteral40(["wad of used tape"])))) || (0, import_kolmafia43.cliExecute)("fold wad of used tape"), {
      hat: $item(_templateObject505 || (_templateObject505 = _taggedTemplateLiteral40(["wad of used tape"]))),
      weapon: $item(_templateObject5112 || (_templateObject5112 = _taggedTemplateLiteral40(["dented scepter"]))),
      offhand: $item(_templateObject5211 || (_templateObject5211 = _taggedTemplateLiteral40(["Fourth of May Cosplay Saber"]))),
      shirt: $items(_templateObject537 || (_templateObject537 = _taggedTemplateLiteral40(["Jurassic Parka, shoe ad T-shirt, fresh coat of paint"]))),
      back: $item(_templateObject544 || (_templateObject544 = _taggedTemplateLiteral40(["unwrapped knock-off retro superhero cape"]))),
      pants: $item(_templateObject554 || (_templateObject554 = _taggedTemplateLiteral40(["Cargo Cultist Shorts"]))),
      acc1: $item(_templateObject564 || (_templateObject564 = _taggedTemplateLiteral40(["Brutal brogues"]))),
      acc2: $item(_templateObject574 || (_templateObject574 = _taggedTemplateLiteral40(["Retrospecs"]))),
      acc3: $item(_templateObject584 || (_templateObject584 = _taggedTemplateLiteral40(["Kremlin's Greatest Briefcase"]))),
      famequip: $item(_templateObject594 || (_templateObject594 = _taggedTemplateLiteral40(["miniature crystal ball"]))),
      modes: {
        retrocape: ["vampire", RetroCape_exports.currentMode()],
        parka: "kachungasaur"
      }
    };
  },
  tasks: [].concat(_toConsumableArray18(skillBuffTasks("HP")), [potionTask($item(_templateObject603 || (_templateObject603 = _taggedTemplateLiteral40(["LOV Elixir #3"])))), thrallTask($thrall(_templateObject6111 || (_templateObject6111 = _taggedTemplateLiteral40(["Elbow Macaroni"]))))])
};

// src/weapon.ts
init_kolmafia_polyfill();
var import_kolmafia44 = require("kolmafia");
var _templateObject180, _templateObject2100, _templateObject370, _templateObject450, _templateObject538, _templateObject633, _templateObject729, _templateObject828, _templateObject926, _templateObject1025, _templateObject1125, _templateObject1221, _templateObject1321, _templateObject1419, _templateObject1518, _templateObject1618, _templateObject1718, _templateObject1818, _templateObject1918, _templateObject2018, _templateObject2123, _templateObject2222, _templateObject2319, _templateObject2417, _templateObject2516, _templateObject2615, _templateObject2715, _templateObject2813, _templateObject2912, _templateObject3012, _templateObject3119, _templateObject3217, _templateObject3316, _templateObject3413, _templateObject3512, _templateObject3611, _templateObject3711, _templateObject3811, _templateObject3910, _templateObject409;
function _toConsumableArray19(arr) {
  return _arrayWithoutHoles19(arr) || _iterableToArray19(arr) || _unsupportedIterableToArray29(arr) || _nonIterableSpread19();
}
function _nonIterableSpread19() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray29(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray29(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray29(o, minLen);
  }
}
function _iterableToArray19(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles19(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray29(arr);
}
function _arrayLikeToArray29(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys10(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread10(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys10(Object(source), !0).forEach(function(key) {
      _defineProperty19(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys10(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty19(obj, key, value) {
  return key = _toPropertyKey24(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey24(arg) {
  var key = _toPrimitive24(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive24(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral41(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var buffs4 = $effects(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral41(["Carol of the Bulls, Song of the North, Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, Tenacity of the Snapper, Blessing of the Bird"]))), meteors, Weapon = {
  name: "Weapon Damage",
  type: "SERVICE",
  test: CommunityService.WeaponDamage,
  outfit: function() {
    return have($item(_templateObject2100 || (_templateObject2100 = _taggedTemplateLiteral41(["broken champagne bottle"])))) || (0, import_kolmafia44.cliExecute)("fold broken champagne bottle"), _objectSpread10({
      hat: $items(_templateObject370 || (_templateObject370 = _taggedTemplateLiteral41(["seal-skull helmet, Iunion Crown"]))),
      weapon: $item(_templateObject450 || (_templateObject450 = _taggedTemplateLiteral41(["broken champagne bottle"]))),
      offhand: $item(_templateObject538 || (_templateObject538 = _taggedTemplateLiteral41(["dented scepter"]))),
      acc1: $item(_templateObject633 || (_templateObject633 = _taggedTemplateLiteral41(["Brutal brogues"]))),
      acc2: $item(_templateObject729 || (_templateObject729 = _taggedTemplateLiteral41(["Powerful Glove"]))),
      acc3: $items(_templateObject828 || (_templateObject828 = _taggedTemplateLiteral41(["meteorite ring, Kremlin's Greatest Briefcase"])))
    }, CSEngine.core === "soft" ? {
      famequip: $item(_templateObject926 || (_templateObject926 = _taggedTemplateLiteral41(["Stick-Knife of Loathing"]))),
      familiar: $familiar(_templateObject1025 || (_templateObject1025 = _taggedTemplateLiteral41(["Disembodied Hand"])))
    } : {});
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [].concat(_toConsumableArray19(buffs4.map(skillTask)), [restore(buffs4), skillTask($effect(_templateObject1125 || (_templateObject1125 = _taggedTemplateLiteral41(["Frenzied, Bloody"])))), potionTask($item(_templateObject1221 || (_templateObject1221 = _taggedTemplateLiteral41(["LOV Elixir #3"])))), potionTask($item(_templateObject1321 || (_templateObject1321 = _taggedTemplateLiteral41(["vial of hamethyst juice"])))), beachTask($effect(_templateObject1419 || (_templateObject1419 = _taggedTemplateLiteral41(["Lack of Body-Building"])))), songTask($effect(_templateObject1518 || (_templateObject1518 = _taggedTemplateLiteral41(["Jackasses' Symphony of Destruction"]))), $effect(_templateObject1618 || (_templateObject1618 = _taggedTemplateLiteral41(["The Sonata of Sneakiness"])))), {
    name: "Play Pool",
    completed: function() {
      return have($effect(_templateObject1718 || (_templateObject1718 = _taggedTemplateLiteral41(["Billiards Belligerence"]))));
    },
    do: function() {
      return (0, import_kolmafia44.cliExecute)("pool 1");
    }
  }, {
    name: "Do You Crush What I Crush?",
    completed: function() {
      return have($effect(_templateObject1818 || (_templateObject1818 = _taggedTemplateLiteral41(["Do You Crush What I Crush?"]))));
    },
    ready: function() {
      return !have($effect(_templateObject1918 || (_templateObject1918 = _taggedTemplateLiteral41(["Holiday Yoked"]))));
    },
    do: $location(_templateObject2018 || (_templateObject2018 = _taggedTemplateLiteral41(["The Dire Warren"]))),
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject2123 || (_templateObject2123 = _taggedTemplateLiteral41(["Ghost of Crimbo Carols"]))),
          famequip: $item.none
        }
      });
    },
    prepare: function() {
      return horsery() === "pale" && horse("dark");
    },
    combat: new CSStrategy(function() {
      return Macro2.trySkill($skill(_templateObject2222 || (_templateObject2222 = _taggedTemplateLiteral41(["Asdon Martin: Spring-Loaded Front Bumper"])))).trySkill($skill(_templateObject2319 || (_templateObject2319 = _taggedTemplateLiteral41(["Feel Hatred"]))));
    })
  }, _objectSpread10(_objectSpread10({}, innerElf()), {}, {
    core: "hard"
  }), {
    name: "Spit Ungulith",
    completed: function() {
      return have($effect(_templateObject2417 || (_templateObject2417 = _taggedTemplateLiteral41(["Spit Upon"]))));
    },
    ready: function() {
      return get("camelSpit") >= 100;
    },
    do: function() {
      meteors = get("_meteorShowerUses"), CombatLoversLocket_exports.reminisce($monster(_templateObject2516 || (_templateObject2516 = _taggedTemplateLiteral41(["ungulith"])))), (0, import_kolmafia44.handlingChoice)() && (0, import_kolmafia44.runChoice)(-1);
    },
    choices: _defineProperty19({}, 1387, 3),
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject2615 || (_templateObject2615 = _taggedTemplateLiteral41(["Melodramedary"]))),
          weapon: $item(_templateObject2715 || (_templateObject2715 = _taggedTemplateLiteral41(["Fourth of May Cosplay Saber"])))
        }
      });
    },
    post: function() {
      have($effect(_templateObject2813 || (_templateObject2813 = _taggedTemplateLiteral41(["Spit Upon"])))) && _set("camelSpit", 0), meteors && have($effect(_templateObject2912 || (_templateObject2912 = _taggedTemplateLiteral41(["Meteor Showered"])))) && _set("_meteorShowerUses", meteors + 1);
      var ungId = $monster(_templateObject3012 || (_templateObject3012 = _taggedTemplateLiteral41(["ungulith"]))).id.toFixed(0), locketIdStrings = get("_locketMonstersFought").split(",").map(function(x) {
        return x.trim();
      }).filter(function(x) {
        return x.length > 0;
      });
      locketIdStrings.includes(ungId) || (locketIdStrings.push(ungId), _set("_locketMonstersFought", locketIdStrings.join(",")));
    },
    combat: new CSStrategy(function() {
      return Macro2.trySkill($skill(_templateObject3119 || (_templateObject3119 = _taggedTemplateLiteral41(["%fn, spit on me!"])))).trySkill($skill(_templateObject3217 || (_templateObject3217 = _taggedTemplateLiteral41(["Meteor Shower"])))).skill($skill(_templateObject3316 || (_templateObject3316 = _taggedTemplateLiteral41(["Use the Force"]))));
    })
  }, {
    name: "Meteorite Ring",
    core: "soft",
    completed: function() {
      return have($item(_templateObject3413 || (_templateObject3413 = _taggedTemplateLiteral41(["meteorite ring"]))));
    },
    ready: function() {
      return (0, import_kolmafia44.canadiaAvailable)();
    },
    do: function() {
      var meteor = $items(_templateObject3512 || (_templateObject3512 = _taggedTemplateLiteral41(["meteorite necklace, meteorite fragment, meteorite earring"]))).find(function(item6) {
        return have(item6);
      });
      meteor && (unequip(meteor), (0, import_kolmafia44.retrieveItem)(1, $item(_templateObject3611 || (_templateObject3611 = _taggedTemplateLiteral41(["tenderizing hammer"])))), (0, import_kolmafia44.retrieveItem)(1, $item(_templateObject3711 || (_templateObject3711 = _taggedTemplateLiteral41(["jewelry-making pliers"])))), (0, import_kolmafia44.cliExecute)("smash ".concat(meteor)), (0, import_kolmafia44.cliExecute)("make ".concat($item(_templateObject3811 || (_templateObject3811 = _taggedTemplateLiteral41(["meteorite ring"]))))));
    }
  }, potionTask($item(_templateObject3910 || (_templateObject3910 = _taggedTemplateLiteral41(["corrupted marrow"])))), {
    name: "Swagger",
    completed: function() {
      return get("_bowleggedSwaggerUsed");
    },
    do: function() {
      return (0, import_kolmafia44.useSkill)($skill(_templateObject409 || (_templateObject409 = _taggedTemplateLiteral41(["Bow-Legged Swagger"]))));
    }
  }])
}, weapon_default = Weapon;

// src/index.ts
sinceKolmafiaRevision(27102);
CSEngine.runTests(prologue_default, coil_wire_default, level_default, Moxie, Muscle, Hitpoints, Mysticality, drinking_default, hotres_default, noncombat_default, familiarweight_default, weapon_default, spell_default, boozedrop_default);
