/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/libram/dist/Clan.js":
/*!*******************************************!*\
  !*** ../node_modules/libram/dist/Clan.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); _groups.set(_this, groups || _groups.get(re)); return _setPrototypeOf(_this, BabelRegExp.prototype); } _inherits(BabelRegExp, RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; if (_typeof(args[args.length - 1]) !== "object") { args = [].slice.call(args); args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Clan = exports.ClanError = void 0;

__webpack_require__(/*! core-js/features/array/flat-map */ "../node_modules/libram/node_modules/core-js/features/array/flat-map.js");

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

function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(function (item) {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}

function countedMapToArray(map) {
  return __spread(map).flatMap(function (_a) {
    var _b = __read(_a, 2),
        item = _b[0],
        quantity = _b[1];

    return Array(quantity).fill(item);
  });
}

function countedMapToString(map) {
  return __spread(map).map(function (_a) {
    var _b = __read(_a, 2),
        item = _b[0],
        quantity = _b[1];

    return quantity + " x " + item;
  }).join(", ");
}

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
    var map = arrayToCountedMap(borrowed);

    try {
      return callback(borrowed);
    } finally {
      if (map.size > 0) {
        var returned_1 = arrayToCountedMap(returnFn(borrowed));
        map.forEach(function (quantity, item) {
          var remaining = quantity - (returned_1.get(item) || 0);

          if (remaining > 0) {
            map.set(item, remaining);
          } else {
            map["delete"](item);
          }
        });

        if (map.size > 0) {
          logger_1["default"].error("Failed to return <b>" + countedMapToString(map) + "</b> to <b>" + this.name + "</b> stash");
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
    var map = arrayToCountedMap(items);
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
    return Array.isArray(items) ? countedMapToArray(map) : map;
  };

  Clan.prototype.put = function (items) {
    var map = arrayToCountedMap(items);
    if (!this.check()) throw new Error("Wanted to return " + countedMapToString(map) + " to " + this.name + " but KoLmafia's clan data is out of sync");
    map.forEach(function (quantity, item) {
      kolmafia_1.retrieveItem(quantity, item);
      var returned = Math.min(quantity, kolmafia_1.availableAmount(item));
      kolmafia_1.putStash(returned, item);
      map.set(item, quantity - returned);
    });
    return Array.isArray(items) ? countedMapToArray(map) : map;
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  Clan.prototype.withStash = function (items, callback) {
    var _this = this;

    var map = arrayToCountedMap(items);
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

/***/ "../node_modules/libram/dist/combat.js":
/*!*********************************************!*\
  !*** ../node_modules/libram/dist/combat.js ***!
  \*********************************************/
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

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.adventureMacroAuto = exports.adventureMacro = exports.Macro = exports.getMacroId = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

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

function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return item.name;
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
  return skill.name.match(/^[A-Za-z ]+$/) ? skill.name : kolmafia_1.toInt(skill);
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
exports.set = exports.get = exports.property = exports.console = exports.logger = void 0;

__exportStar(__webpack_require__(/*! ./Clan */ "../node_modules/libram/dist/Clan.js"), exports);

__exportStar(__webpack_require__(/*! ./combat */ "../node_modules/libram/dist/combat.js"), exports);

__exportStar(__webpack_require__(/*! ./lib */ "../node_modules/libram/dist/lib.js"), exports);

__exportStar(__webpack_require__(/*! ./maximize */ "../node_modules/libram/dist/maximize.js"), exports);

__exportStar(__webpack_require__(/*! ./mood */ "../node_modules/libram/dist/mood.js"), exports);

__exportStar(__webpack_require__(/*! ./resources */ "../node_modules/libram/dist/resources/index.js"), exports);

__exportStar(__webpack_require__(/*! ./since */ "../node_modules/libram/dist/since.js"), exports);

__exportStar(__webpack_require__(/*! ./template-string */ "../node_modules/libram/dist/template-string.js"), exports);

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

__webpack_require__(/*! core-js/features/object/entries */ "../node_modules/libram/node_modules/core-js/features/object/entries.js");

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
exports.maximizeCached = exports.setDefaultMaximizeOptions = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var template_string_1 = __webpack_require__(/*! ./template-string */ "../node_modules/libram/dist/template-string.js");

var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnStatThreshold: 10,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: new Map()
};
/**
 *
 * @param options Default options for each maximizer run.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnStatThreshold Re-run the maximizer if a stat has newly passed an even multiple
 * of this number (for new equip requirements), or null otherwise. Default 10.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */

function setDefaultMaximizeOptions(options) {
  Object.assign(defaultMaximizeOptions, options);
}

exports.setDefaultMaximizeOptions = setDefaultMaximizeOptions;
var cachedObjective = null;
var cachedStats = [0, 0, 0];
var cachedFamiliar = null;
/**
 * Run the maximizer, but only if the objective and certain pieces of game state haven't changed since it was last run.
 * @param objectives Objectives to maximize for.
 * @param options Options for this run of the maximizer.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnStatThreshold Re-run the maximizer if a stat has newly passed an even multiple
 * of this number (for new equip requirements), or null otherwise. Default 10.
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
      updateOnStatThreshold = _a.updateOnStatThreshold,
      forceEquip = _a.forceEquip,
      preventEquip = _a.preventEquip,
      bonusEquip = _a.bonusEquip;

  var objective = __spread(objectives, forceEquip.map(function (item) {
    return "equip " + item;
  }), preventEquip.map(function (item) {
    return "-equip " + item;
  }), Array.from(bonusEquip.entries()).map(function (_a) {
    var _b = __read(_a, 2),
        item = _b[0],
        bonus = _b[1];

    return bonus + " bonus " + item;
  })).join(", ");

  var stats = template_string_1.$stats(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Muscle, Mysticality, Moxie"], ["Muscle, Mysticality, Moxie"]))).map(function (stat) {
    return kolmafia_1.myBasestat(stat);
  }); // The highest known equip requirement is 300, so don't check after that.

  var statsChanged = updateOnStatThreshold !== null && stats.some(function (newStat, i) {
    return newStat > cachedStats[i] && cachedStats[i] < 300 && newStat % updateOnStatThreshold === 0;
  });
  var familiarChanged = updateOnFamiliarChange && cachedFamiliar !== kolmafia_1.myFamiliar();

  if (statsChanged || familiarChanged || objective !== cachedObjective) {
    kolmafia_1.maximize(objective, false);
  }

  cachedFamiliar = kolmafia_1.myFamiliar();
  cachedStats = stats;
  cachedObjective = objective;
}

exports.maximizeCached = maximizeCached;
var templateObject_1;

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
exports.withChoice = exports.withChoices = exports.withProperty = exports.withProperties = exports.setProperties = exports.set = exports.get = exports.getThrall = exports.getStat = exports.getSlot = exports.getSkill = exports.getServant = exports.getPhylum = exports.getMonster = exports.getLocation = exports.getItem = exports.getFamiliar = exports.getElement = exports.getEffect = exports.getCoinmaster = exports.getClass = exports.getBounty = exports.getNumber = exports.getBoolean = exports.getCommaSeparated = exports.getString = void 0;

__webpack_require__(/*! core-js/features/object/entries */ "../node_modules/libram/node_modules/core-js/features/object/entries.js");

__webpack_require__(/*! core-js/features/object/from-entries */ "../node_modules/libram/node_modules/core-js/features/object/from-entries.js");

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
  return lib_1.have(template_string_1.$item(templateObject_3 || (templateObject_3 = __makeTemplateObject(["unfinished ice sculpture"], ["unfinished ice sculpture"])))) && !lib_1.have(template_string_1.$item(templateObject_4 || (templateObject_4 = __makeTemplateObject(["finished ice sculpture"], ["finished ice sculpture"]))));
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fightPainting = exports.paintingFought = exports.paintingMonster = exports.have = void 0;

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

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

__webpack_require__(/*! core-js/features/object/values */ "../node_modules/libram/node_modules/core-js/features/object/values.js");

var kolmafia_1 = __webpack_require__(/*! kolmafia */ "kolmafia");

var isEqual_1 = __importDefault(__webpack_require__(/*! lodash/isEqual */ "../node_modules/lodash/isEqual.js"));

var Copier_1 = __webpack_require__(/*! ../../Copier */ "../node_modules/libram/dist/Copier.js");

var lib_1 = __webpack_require__(/*! ../../lib */ "../node_modules/libram/dist/lib.js");

var property_1 = __webpack_require__(/*! ../../property */ "../node_modules/libram/dist/property.js");

var template_string_1 = __webpack_require__(/*! ../../template-string */ "../node_modules/libram/dist/template-string.js");

exports.item = template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Source Terminal"], ["Source Terminal"])));

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

exports.item = template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["guzzlr tablet"], ["guzzlr tablet"])));

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

exports.Cocktails = template_string_1.$items(templateObject_2 || (templateObject_2 = __makeTemplateObject(["buttery boy, steamboat, ghiaccio colada, nog-on-the-cob, sourfinger"], ["buttery boy, steamboat, ghiaccio colada, nog-on-the-cob, sourfinger"])));
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
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.chunk = exports.clamp = exports.parseNumber = exports.notNull = void 0;

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

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/es/array/flat-map.js":
/*!************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/es/array/flat-map.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es.array.flat-map */ "../node_modules/libram/node_modules/core-js/modules/es.array.flat-map.js");

__webpack_require__(/*! ../../modules/es.array.unscopables.flat-map */ "../node_modules/libram/node_modules/core-js/modules/es.array.unscopables.flat-map.js");

var entryUnbind = __webpack_require__(/*! ../../internals/entry-unbind */ "../node_modules/libram/node_modules/core-js/internals/entry-unbind.js");

module.exports = entryUnbind('Array', 'flatMap');

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/es/object/entries.js":
/*!************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/es/object/entries.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es.object.entries */ "../node_modules/libram/node_modules/core-js/modules/es.object.entries.js");

var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/libram/node_modules/core-js/internals/path.js");

module.exports = path.Object.entries;

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/es/object/from-entries.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/es/object/from-entries.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es.array.iterator */ "../node_modules/libram/node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! ../../modules/es.object.from-entries */ "../node_modules/libram/node_modules/core-js/modules/es.object.from-entries.js");

var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/libram/node_modules/core-js/internals/path.js");

module.exports = path.Object.fromEntries;

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/es/object/values.js":
/*!***********************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/es/object/values.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es.object.values */ "../node_modules/libram/node_modules/core-js/modules/es.object.values.js");

var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/libram/node_modules/core-js/internals/path.js");

module.exports = path.Object.values;

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/features/array/flat-map.js":
/*!******************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/features/array/flat-map.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(/*! ../../es/array/flat-map */ "../node_modules/libram/node_modules/core-js/es/array/flat-map.js");

module.exports = parent;

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/features/object/entries.js":
/*!******************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/features/object/entries.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(/*! ../../es/object/entries */ "../node_modules/libram/node_modules/core-js/es/object/entries.js");

module.exports = parent;

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/features/object/from-entries.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/features/object/from-entries.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(/*! ../../es/object/from-entries */ "../node_modules/libram/node_modules/core-js/es/object/from-entries.js");

module.exports = parent;

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/features/object/values.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/features/object/values.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(/*! ../../es/object/values */ "../node_modules/libram/node_modules/core-js/es/object/values.js");

module.exports = parent;

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/a-function.js":
/*!***************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/a-function.js ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/a-possible-prototype.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/a-possible-prototype.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/libram/node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  }

  return it;
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/add-to-unscopables.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/add-to-unscopables.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/libram/node_modules/core-js/internals/well-known-symbol.js");

var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/libram/node_modules/core-js/internals/object-create.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/libram/node_modules/core-js/internals/object-define-property.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/an-object.js":
/*!**************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/an-object.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/libram/node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/array-includes.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/array-includes.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/libram/node_modules/core-js/internals/to-indexed-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/libram/node_modules/core-js/internals/to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../node_modules/libram/node_modules/core-js/internals/to-absolute-index.js"); // `Array.prototype.{ indexOf, includes }` methods implementation


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

/***/ "../node_modules/libram/node_modules/core-js/internals/array-species-create.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/array-species-create.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/libram/node_modules/core-js/internals/is-object.js");

var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/libram/node_modules/core-js/internals/is-array.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/libram/node_modules/core-js/internals/well-known-symbol.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/classof-raw.js":
/*!****************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/classof-raw.js ***!
  \****************************************************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/classof.js":
/*!************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/classof.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../node_modules/libram/node_modules/core-js/internals/to-string-tag-support.js");

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/libram/node_modules/core-js/internals/classof-raw.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/libram/node_modules/core-js/internals/well-known-symbol.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/copy-constructor-properties.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/libram/node_modules/core-js/internals/has.js");

var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../node_modules/libram/node_modules/core-js/internals/own-keys.js");

var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/libram/node_modules/core-js/internals/object-get-own-property-descriptor.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/libram/node_modules/core-js/internals/object-define-property.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/correct-prototype-getter.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/libram/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

  return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/create-iterator-constructor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "../node_modules/libram/node_modules/core-js/internals/iterators-core.js").IteratorPrototype;

var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/libram/node_modules/core-js/internals/object-create.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/libram/node_modules/core-js/internals/create-property-descriptor.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/libram/node_modules/core-js/internals/set-to-string-tag.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/libram/node_modules/core-js/internals/iterators.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/create-non-enumerable-property.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/libram/node_modules/core-js/internals/descriptors.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/libram/node_modules/core-js/internals/object-define-property.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/libram/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/create-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/create-property-descriptor.js ***!
  \*******************************************************************************************/
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

/***/ "../node_modules/libram/node_modules/core-js/internals/create-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/create-property.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/libram/node_modules/core-js/internals/to-primitive.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/libram/node_modules/core-js/internals/object-define-property.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/libram/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/define-iterator.js":
/*!********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/define-iterator.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/libram/node_modules/core-js/internals/export.js");

var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../node_modules/libram/node_modules/core-js/internals/create-iterator-constructor.js");

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../node_modules/libram/node_modules/core-js/internals/object-get-prototype-of.js");

var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../node_modules/libram/node_modules/core-js/internals/object-set-prototype-of.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/libram/node_modules/core-js/internals/set-to-string-tag.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/libram/node_modules/core-js/internals/create-non-enumerable-property.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/libram/node_modules/core-js/internals/redefine.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/libram/node_modules/core-js/internals/well-known-symbol.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/libram/node_modules/core-js/internals/is-pure.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/libram/node_modules/core-js/internals/iterators.js");

var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../node_modules/libram/node_modules/core-js/internals/iterators-core.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/descriptors.js":
/*!****************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/descriptors.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/libram/node_modules/core-js/internals/fails.js"); // Detect IE8's incomplete defineProperty implementation


module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function get() {
      return 7;
    }
  })[1] != 7;
});

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/document-create-element.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/document-create-element.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/libram/node_modules/core-js/internals/global.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/libram/node_modules/core-js/internals/is-object.js");

var document = global.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/engine-user-agent.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/engine-user-agent.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/libram/node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/engine-v8-version.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/engine-v8-version.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/libram/node_modules/core-js/internals/global.js");

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../node_modules/libram/node_modules/core-js/internals/engine-user-agent.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/entry-unbind.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/entry-unbind.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/libram/node_modules/core-js/internals/global.js");

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/libram/node_modules/core-js/internals/function-bind-context.js");

var call = Function.call;

module.exports = function (CONSTRUCTOR, METHOD, length) {
  return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/enum-bug-keys.js":
/*!******************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/enum-bug-keys.js ***!
  \******************************************************************************/
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/export.js":
/*!***********************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/export.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/libram/node_modules/core-js/internals/global.js");

var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/libram/node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/libram/node_modules/core-js/internals/create-non-enumerable-property.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/libram/node_modules/core-js/internals/redefine.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../node_modules/libram/node_modules/core-js/internals/set-global.js");

var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../node_modules/libram/node_modules/core-js/internals/copy-constructor-properties.js");

var isForced = __webpack_require__(/*! ../internals/is-forced */ "../node_modules/libram/node_modules/core-js/internals/is-forced.js");
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

/***/ "../node_modules/libram/node_modules/core-js/internals/fails.js":
/*!**********************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/fails.js ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/flatten-into-array.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/flatten-into-array.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/libram/node_modules/core-js/internals/is-array.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/libram/node_modules/core-js/internals/to-length.js");

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/libram/node_modules/core-js/internals/function-bind-context.js"); // `FlattenIntoArray` abstract operation
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

/***/ "../node_modules/libram/node_modules/core-js/internals/function-bind-context.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/function-bind-context.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/libram/node_modules/core-js/internals/a-function.js"); // optional / simple context binding


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

/***/ "../node_modules/libram/node_modules/core-js/internals/get-built-in.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/get-built-in.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(/*! ../internals/path */ "../node_modules/libram/node_modules/core-js/internals/path.js");

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/libram/node_modules/core-js/internals/global.js");

var aFunction = function aFunction(variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/get-iterator-method.js":
/*!************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/get-iterator-method.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/libram/node_modules/core-js/internals/classof.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/libram/node_modules/core-js/internals/iterators.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/libram/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/global.js":
/*!***********************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/global.js ***!
  \***********************************************************************/
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

/***/ "../node_modules/libram/node_modules/core-js/internals/has.js":
/*!********************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/has.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/libram/node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/hidden-keys.js":
/*!****************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/hidden-keys.js ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/html.js":
/*!*********************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/html.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/libram/node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/ie8-dom-define.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/ie8-dom-define.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/libram/node_modules/core-js/internals/descriptors.js");

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/libram/node_modules/core-js/internals/fails.js");

var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/libram/node_modules/core-js/internals/document-create-element.js"); // Thank's IE8 for his funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/indexed-object.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/indexed-object.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/libram/node_modules/core-js/internals/fails.js");

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/libram/node_modules/core-js/internals/classof-raw.js");

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/inspect-source.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/inspect-source.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/libram/node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/internal-state.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/internal-state.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../node_modules/libram/node_modules/core-js/internals/native-weak-map.js");

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/libram/node_modules/core-js/internals/global.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/libram/node_modules/core-js/internals/is-object.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/libram/node_modules/core-js/internals/create-non-enumerable-property.js");

var objectHas = __webpack_require__(/*! ../internals/has */ "../node_modules/libram/node_modules/core-js/internals/has.js");

var shared = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/libram/node_modules/core-js/internals/shared-store.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/libram/node_modules/core-js/internals/shared-key.js");

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/libram/node_modules/core-js/internals/hidden-keys.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/is-array-iterator-method.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/is-array-iterator-method.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/libram/node_modules/core-js/internals/well-known-symbol.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/libram/node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype; // check on default Array iterator

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/is-array.js":
/*!*************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/is-array.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/libram/node_modules/core-js/internals/classof-raw.js"); // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe


module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/is-forced.js":
/*!**************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/is-forced.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/libram/node_modules/core-js/internals/fails.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/is-object.js":
/*!**************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/is-object.js ***!
  \**************************************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/is-pure.js":
/*!************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/is-pure.js ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = false;

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/iterate.js":
/*!************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/iterate.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/libram/node_modules/core-js/internals/an-object.js");

var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../node_modules/libram/node_modules/core-js/internals/is-array-iterator-method.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/libram/node_modules/core-js/internals/to-length.js");

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/libram/node_modules/core-js/internals/function-bind-context.js");

var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../node_modules/libram/node_modules/core-js/internals/get-iterator-method.js");

var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "../node_modules/libram/node_modules/core-js/internals/iterator-close.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/iterator-close.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/iterator-close.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/libram/node_modules/core-js/internals/an-object.js");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];

  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/iterators-core.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/iterators-core.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/libram/node_modules/core-js/internals/fails.js");

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../node_modules/libram/node_modules/core-js/internals/object-get-prototype-of.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/libram/node_modules/core-js/internals/create-non-enumerable-property.js");

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/libram/node_modules/core-js/internals/has.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/libram/node_modules/core-js/internals/well-known-symbol.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/libram/node_modules/core-js/internals/is-pure.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/iterators.js":
/*!**************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/iterators.js ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/native-symbol.js":
/*!******************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/native-symbol.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../node_modules/libram/node_modules/core-js/internals/engine-v8-version.js");

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/libram/node_modules/core-js/internals/fails.js"); // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/native-weak-map.js":
/*!********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/native-weak-map.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/libram/node_modules/core-js/internals/global.js");

var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../node_modules/libram/node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/object-create.js":
/*!******************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/object-create.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/libram/node_modules/core-js/internals/an-object.js");

var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../node_modules/libram/node_modules/core-js/internals/object-define-properties.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/libram/node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/libram/node_modules/core-js/internals/hidden-keys.js");

var html = __webpack_require__(/*! ../internals/html */ "../node_modules/libram/node_modules/core-js/internals/html.js");

var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/libram/node_modules/core-js/internals/document-create-element.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/libram/node_modules/core-js/internals/shared-key.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/object-define-properties.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/object-define-properties.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/libram/node_modules/core-js/internals/descriptors.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/libram/node_modules/core-js/internals/object-define-property.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/libram/node_modules/core-js/internals/an-object.js");

var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/libram/node_modules/core-js/internals/object-keys.js"); // `Object.defineProperties` method
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

/***/ "../node_modules/libram/node_modules/core-js/internals/object-define-property.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/object-define-property.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/libram/node_modules/core-js/internals/descriptors.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/libram/node_modules/core-js/internals/ie8-dom-define.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/libram/node_modules/core-js/internals/an-object.js");

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/libram/node_modules/core-js/internals/to-primitive.js"); // eslint-disable-next-line es/no-object-defineproperty -- safe


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

/***/ "../node_modules/libram/node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/libram/node_modules/core-js/internals/descriptors.js");

var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/libram/node_modules/core-js/internals/object-property-is-enumerable.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/libram/node_modules/core-js/internals/create-property-descriptor.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/libram/node_modules/core-js/internals/to-indexed-object.js");

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/libram/node_modules/core-js/internals/to-primitive.js");

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/libram/node_modules/core-js/internals/has.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/libram/node_modules/core-js/internals/ie8-dom-define.js"); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


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

/***/ "../node_modules/libram/node_modules/core-js/internals/object-get-own-property-names.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/libram/node_modules/core-js/internals/object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/libram/node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!************************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/object-get-prototype-of.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/libram/node_modules/core-js/internals/has.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/libram/node_modules/core-js/internals/to-object.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/libram/node_modules/core-js/internals/shared-key.js");

var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../node_modules/libram/node_modules/core-js/internals/correct-prototype-getter.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/object-keys-internal.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/object-keys-internal.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/libram/node_modules/core-js/internals/has.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/libram/node_modules/core-js/internals/to-indexed-object.js");

var indexOf = __webpack_require__(/*! ../internals/array-includes */ "../node_modules/libram/node_modules/core-js/internals/array-includes.js").indexOf;

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/libram/node_modules/core-js/internals/hidden-keys.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/object-keys.js":
/*!****************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/object-keys.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/libram/node_modules/core-js/internals/object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/libram/node_modules/core-js/internals/enum-bug-keys.js"); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/object-property-is-enumerable.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \**********************************************************************************************/
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

/***/ "../node_modules/libram/node_modules/core-js/internals/object-set-prototype-of.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/libram/node_modules/core-js/internals/an-object.js");

var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../node_modules/libram/node_modules/core-js/internals/a-possible-prototype.js"); // `Object.setPrototypeOf` method
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

/***/ "../node_modules/libram/node_modules/core-js/internals/object-to-array.js":
/*!********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/object-to-array.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/libram/node_modules/core-js/internals/descriptors.js");

var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/libram/node_modules/core-js/internals/object-keys.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/libram/node_modules/core-js/internals/to-indexed-object.js");

var propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/libram/node_modules/core-js/internals/object-property-is-enumerable.js").f; // `Object.{ entries, values }` methods implementation


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

/***/ "../node_modules/libram/node_modules/core-js/internals/own-keys.js":
/*!*************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/own-keys.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/libram/node_modules/core-js/internals/get-built-in.js");

var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/libram/node_modules/core-js/internals/object-get-own-property-names.js");

var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../node_modules/libram/node_modules/core-js/internals/object-get-own-property-symbols.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/libram/node_modules/core-js/internals/an-object.js"); // all object keys, includes non-enumerable and symbols


module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/path.js":
/*!*********************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/path.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/libram/node_modules/core-js/internals/global.js");

module.exports = global;

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/redefine.js":
/*!*************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/redefine.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/libram/node_modules/core-js/internals/global.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/libram/node_modules/core-js/internals/create-non-enumerable-property.js");

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/libram/node_modules/core-js/internals/has.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../node_modules/libram/node_modules/core-js/internals/set-global.js");

var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../node_modules/libram/node_modules/core-js/internals/inspect-source.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/libram/node_modules/core-js/internals/internal-state.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/require-object-coercible.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/require-object-coercible.js ***!
  \*****************************************************************************************/
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/set-global.js":
/*!***************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/set-global.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/libram/node_modules/core-js/internals/global.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/libram/node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/set-to-string-tag.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/set-to-string-tag.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/libram/node_modules/core-js/internals/object-define-property.js").f;

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/libram/node_modules/core-js/internals/has.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/libram/node_modules/core-js/internals/well-known-symbol.js");

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

/***/ "../node_modules/libram/node_modules/core-js/internals/shared-key.js":
/*!***************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/shared-key.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/libram/node_modules/core-js/internals/shared.js");

var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/libram/node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/shared-store.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/shared-store.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/libram/node_modules/core-js/internals/global.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../node_modules/libram/node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
module.exports = store;

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/shared.js":
/*!***********************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/shared.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/libram/node_modules/core-js/internals/is-pure.js");

var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/libram/node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/to-absolute-index.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/to-absolute-index.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/libram/node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/to-indexed-object.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/to-indexed-object.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/libram/node_modules/core-js/internals/indexed-object.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/libram/node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/to-integer.js":
/*!***************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/to-integer.js ***!
  \***************************************************************************/
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger

module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/to-length.js":
/*!**************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/to-length.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/libram/node_modules/core-js/internals/to-integer.js");

var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/to-object.js":
/*!**************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/to-object.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/libram/node_modules/core-js/internals/require-object-coercible.js"); // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject


module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/to-primitive.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/to-primitive.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/libram/node_modules/core-js/internals/is-object.js"); // `ToPrimitive` abstract operation
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

/***/ "../node_modules/libram/node_modules/core-js/internals/to-string-tag-support.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/to-string-tag-support.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/libram/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/uid.js":
/*!********************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/uid.js ***!
  \********************************************************************/
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/use-symbol-as-uid.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../node_modules/libram/node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL && !Symbol.sham && _typeof(Symbol.iterator) == 'symbol';

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/internals/well-known-symbol.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/internals/well-known-symbol.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/libram/node_modules/core-js/internals/global.js");

var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/libram/node_modules/core-js/internals/shared.js");

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/libram/node_modules/core-js/internals/has.js");

var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/libram/node_modules/core-js/internals/uid.js");

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../node_modules/libram/node_modules/core-js/internals/native-symbol.js");

var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../node_modules/libram/node_modules/core-js/internals/use-symbol-as-uid.js");

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

/***/ "../node_modules/libram/node_modules/core-js/modules/es.array.flat-map.js":
/*!********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/modules/es.array.flat-map.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/libram/node_modules/core-js/internals/export.js");

var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ "../node_modules/libram/node_modules/core-js/internals/flatten-into-array.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/libram/node_modules/core-js/internals/to-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/libram/node_modules/core-js/internals/to-length.js");

var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/libram/node_modules/core-js/internals/a-function.js");

var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../node_modules/libram/node_modules/core-js/internals/array-species-create.js"); // `Array.prototype.flatMap` method
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

/***/ "../node_modules/libram/node_modules/core-js/modules/es.array.iterator.js":
/*!********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/modules/es.array.iterator.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/libram/node_modules/core-js/internals/to-indexed-object.js");

var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../node_modules/libram/node_modules/core-js/internals/add-to-unscopables.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/libram/node_modules/core-js/internals/iterators.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/libram/node_modules/core-js/internals/internal-state.js");

var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../node_modules/libram/node_modules/core-js/internals/define-iterator.js");

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

/***/ "../node_modules/libram/node_modules/core-js/modules/es.array.unscopables.flat-map.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/modules/es.array.unscopables.flat-map.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../node_modules/libram/node_modules/core-js/internals/add-to-unscopables.js"); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables


addToUnscopables('flatMap');

/***/ }),

/***/ "../node_modules/libram/node_modules/core-js/modules/es.object.entries.js":
/*!********************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/modules/es.object.entries.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/libram/node_modules/core-js/internals/export.js");

var $entries = __webpack_require__(/*! ../internals/object-to-array */ "../node_modules/libram/node_modules/core-js/internals/object-to-array.js").entries; // `Object.entries` method
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

/***/ "../node_modules/libram/node_modules/core-js/modules/es.object.from-entries.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/modules/es.object.from-entries.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/libram/node_modules/core-js/internals/export.js");

var iterate = __webpack_require__(/*! ../internals/iterate */ "../node_modules/libram/node_modules/core-js/internals/iterate.js");

var createProperty = __webpack_require__(/*! ../internals/create-property */ "../node_modules/libram/node_modules/core-js/internals/create-property.js"); // `Object.fromEntries` method
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

/***/ "../node_modules/libram/node_modules/core-js/modules/es.object.values.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/libram/node_modules/core-js/modules/es.object.values.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/libram/node_modules/core-js/internals/export.js");

var $values = __webpack_require__(/*! ../internals/object-to-array */ "../node_modules/libram/node_modules/core-js/internals/object-to-array.js").values; // `Object.values` method
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

/***/ "../node_modules/lodash/_DataView.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_DataView.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var DataView = getNative(root, 'DataView');
module.exports = DataView;

/***/ }),

/***/ "../node_modules/lodash/_Hash.js":
/*!***************************************!*\
  !*** ../node_modules/lodash/_Hash.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "../node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "../node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "../node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "../node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "../node_modules/lodash/_hashSet.js");
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

/***/ "../node_modules/lodash/_ListCache.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_ListCache.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "../node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "../node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "../node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "../node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "../node_modules/lodash/_listCacheSet.js");
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

/***/ "../node_modules/lodash/_Map.js":
/*!**************************************!*\
  !*** ../node_modules/lodash/_Map.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ "../node_modules/lodash/_MapCache.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_MapCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "../node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "../node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "../node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "../node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "../node_modules/lodash/_mapCacheSet.js");
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

/***/ "../node_modules/lodash/_Promise.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_Promise.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Promise = getNative(root, 'Promise');
module.exports = Promise;

/***/ }),

/***/ "../node_modules/lodash/_Set.js":
/*!**************************************!*\
  !*** ../node_modules/lodash/_Set.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Set = getNative(root, 'Set');
module.exports = Set;

/***/ }),

/***/ "../node_modules/lodash/_SetCache.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_SetCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "../node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "../node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "../node_modules/lodash/_setCacheHas.js");
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

/***/ "../node_modules/lodash/_Stack.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/_Stack.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "../node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "../node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "../node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "../node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "../node_modules/lodash/_stackSet.js");
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

/***/ "../node_modules/lodash/_Symbol.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/_Symbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");
/** Built-in value references. */


var _Symbol = root.Symbol;
module.exports = _Symbol;

/***/ }),

/***/ "../node_modules/lodash/_Uint8Array.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_Uint8Array.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ "../node_modules/lodash/_WeakMap.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_WeakMap.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;

/***/ }),

/***/ "../node_modules/lodash/_arrayFilter.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_arrayFilter.js ***!
  \**********************************************/
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

/***/ "../node_modules/lodash/_arrayLikeKeys.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_arrayLikeKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "../node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../node_modules/lodash/isTypedArray.js");
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

/***/ "../node_modules/lodash/_arrayPush.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_arrayPush.js ***!
  \********************************************/
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

/***/ "../node_modules/lodash/_arraySome.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_arraySome.js ***!
  \********************************************/
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

/***/ "../node_modules/lodash/_assocIndexOf.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_assocIndexOf.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "../node_modules/lodash/eq.js");
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

/***/ "../node_modules/lodash/_baseGetAllKeys.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_baseGetAllKeys.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "../node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/lodash/isArray.js");
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

/***/ "../node_modules/lodash/_baseGetTag.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseGetTag.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "../node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../node_modules/lodash/_objectToString.js");
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

/***/ "../node_modules/lodash/_baseIsArguments.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseIsArguments.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");
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

/***/ "../node_modules/lodash/_baseIsEqual.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_baseIsEqual.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "../node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");
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

/***/ "../node_modules/lodash/_baseIsEqualDeep.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseIsEqualDeep.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "../node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "../node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "../node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "../node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "../node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../node_modules/lodash/isTypedArray.js");
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

/***/ "../node_modules/lodash/_baseIsNative.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseIsNative.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "../node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "../node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../node_modules/lodash/_toSource.js");
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

/***/ "../node_modules/lodash/_baseIsTypedArray.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/_baseIsTypedArray.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");
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

/***/ "../node_modules/lodash/_baseKeys.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseKeys.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "../node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "../node_modules/lodash/_nativeKeys.js");
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

/***/ "../node_modules/lodash/_baseTimes.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseTimes.js ***!
  \********************************************/
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

/***/ "../node_modules/lodash/_baseUnary.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseUnary.js ***!
  \********************************************/
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

/***/ "../node_modules/lodash/_cacheHas.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_cacheHas.js ***!
  \*******************************************/
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

/***/ "../node_modules/lodash/_coreJsData.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_coreJsData.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ "../node_modules/lodash/_equalArrays.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_equalArrays.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "../node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "../node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "../node_modules/lodash/_cacheHas.js");
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

/***/ "../node_modules/lodash/_equalByTag.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_equalByTag.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "../node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "../node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "../node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "../node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "../node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "../node_modules/lodash/_setToArray.js");
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

/***/ "../node_modules/lodash/_equalObjects.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_equalObjects.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "../node_modules/lodash/_getAllKeys.js");
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

/***/ "../node_modules/lodash/_freeGlobal.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_freeGlobal.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
module.exports = freeGlobal;

/***/ }),

/***/ "../node_modules/lodash/_getAllKeys.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_getAllKeys.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "../node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "../node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "../node_modules/lodash/keys.js");
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

/***/ "../node_modules/lodash/_getMapData.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_getMapData.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "../node_modules/lodash/_isKeyable.js");
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

/***/ "../node_modules/lodash/_getNative.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_getNative.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "../node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "../node_modules/lodash/_getValue.js");
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

/***/ "../node_modules/lodash/_getRawTag.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_getRawTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "../node_modules/lodash/_Symbol.js");
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

/***/ "../node_modules/lodash/_getSymbols.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_getSymbols.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "../node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "../node_modules/lodash/stubArray.js");
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

/***/ "../node_modules/lodash/_getTag.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/_getTag.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "../node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "../node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "../node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "../node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "../node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../node_modules/lodash/_toSource.js");
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

/***/ "../node_modules/lodash/_getValue.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_getValue.js ***!
  \*******************************************/
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

/***/ "../node_modules/lodash/_hashClear.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_hashClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../node_modules/lodash/_nativeCreate.js");
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

/***/ "../node_modules/lodash/_hashDelete.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_hashDelete.js ***!
  \*********************************************/
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

/***/ "../node_modules/lodash/_hashGet.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashGet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../node_modules/lodash/_nativeCreate.js");
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

/***/ "../node_modules/lodash/_hashHas.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashHas.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../node_modules/lodash/_nativeCreate.js");
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

/***/ "../node_modules/lodash/_hashSet.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../node_modules/lodash/_nativeCreate.js");
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

/***/ "../node_modules/lodash/_isIndex.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_isIndex.js ***!
  \******************************************/
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

/***/ "../node_modules/lodash/_isKeyable.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_isKeyable.js ***!
  \********************************************/
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

/***/ "../node_modules/lodash/_isMasked.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_isMasked.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "../node_modules/lodash/_coreJsData.js");
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

/***/ "../node_modules/lodash/_isPrototype.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_isPrototype.js ***!
  \**********************************************/
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

/***/ "../node_modules/lodash/_listCacheClear.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_listCacheClear.js ***!
  \*************************************************/
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

/***/ "../node_modules/lodash/_listCacheDelete.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_listCacheDelete.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../node_modules/lodash/_assocIndexOf.js");
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

/***/ "../node_modules/lodash/_listCacheGet.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheGet.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../node_modules/lodash/_assocIndexOf.js");
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

/***/ "../node_modules/lodash/_listCacheHas.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheHas.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../node_modules/lodash/_assocIndexOf.js");
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

/***/ "../node_modules/lodash/_listCacheSet.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheSet.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../node_modules/lodash/_assocIndexOf.js");
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

/***/ "../node_modules/lodash/_mapCacheClear.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_mapCacheClear.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "../node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../node_modules/lodash/_Map.js");
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

/***/ "../node_modules/lodash/_mapCacheDelete.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_mapCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../node_modules/lodash/_getMapData.js");
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

/***/ "../node_modules/lodash/_mapCacheGet.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../node_modules/lodash/_getMapData.js");
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

/***/ "../node_modules/lodash/_mapCacheHas.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../node_modules/lodash/_getMapData.js");
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

/***/ "../node_modules/lodash/_mapCacheSet.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../node_modules/lodash/_getMapData.js");
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

/***/ "../node_modules/lodash/_mapToArray.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_mapToArray.js ***!
  \*********************************************/
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

/***/ "../node_modules/lodash/_nativeCreate.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_nativeCreate.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js");
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ "../node_modules/lodash/_nativeKeys.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_nativeKeys.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "../node_modules/lodash/_overArg.js");
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ "../node_modules/lodash/_nodeUtil.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_nodeUtil.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../node_modules/lodash/_freeGlobal.js");
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

/***/ "../node_modules/lodash/_objectToString.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_objectToString.js ***!
  \*************************************************/
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

/***/ "../node_modules/lodash/_overArg.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_overArg.js ***!
  \******************************************/
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

/***/ "../node_modules/lodash/_root.js":
/*!***************************************!*\
  !*** ../node_modules/lodash/_root.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "../node_modules/lodash/_setCacheAdd.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_setCacheAdd.js ***!
  \**********************************************/
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

/***/ "../node_modules/lodash/_setCacheHas.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_setCacheHas.js ***!
  \**********************************************/
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

/***/ "../node_modules/lodash/_setToArray.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_setToArray.js ***!
  \*********************************************/
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

/***/ "../node_modules/lodash/_stackClear.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_stackClear.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/lodash/_ListCache.js");
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

/***/ "../node_modules/lodash/_stackDelete.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_stackDelete.js ***!
  \**********************************************/
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

/***/ "../node_modules/lodash/_stackGet.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackGet.js ***!
  \*******************************************/
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

/***/ "../node_modules/lodash/_stackHas.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackHas.js ***!
  \*******************************************/
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

/***/ "../node_modules/lodash/_stackSet.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackSet.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "../node_modules/lodash/_MapCache.js");
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

/***/ "../node_modules/lodash/_toSource.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_toSource.js ***!
  \*******************************************/
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

/***/ "../node_modules/lodash/eq.js":
/*!************************************!*\
  !*** ../node_modules/lodash/eq.js ***!
  \************************************/
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

/***/ "../node_modules/lodash/isArguments.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArguments.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "../node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");
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

/***/ "../node_modules/lodash/isArray.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/isArray.js ***!
  \*****************************************/
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

/***/ "../node_modules/lodash/isArrayLike.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArrayLike.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "../node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../node_modules/lodash/isLength.js");
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

/***/ "../node_modules/lodash/isBuffer.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isBuffer.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "../node_modules/lodash/stubFalse.js");
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

/***/ "../node_modules/lodash/isEqual.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/isEqual.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "../node_modules/lodash/_baseIsEqual.js");
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

/***/ "../node_modules/lodash/isFunction.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/isFunction.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js");
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

/***/ "../node_modules/lodash/isLength.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isLength.js ***!
  \******************************************/
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

/***/ "../node_modules/lodash/isObject.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isObject.js ***!
  \******************************************/
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

/***/ "../node_modules/lodash/isObjectLike.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/isObjectLike.js ***!
  \**********************************************/
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

/***/ "../node_modules/lodash/isTypedArray.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/isTypedArray.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "../node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../node_modules/lodash/_nodeUtil.js");
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

/***/ "../node_modules/lodash/keys.js":
/*!**************************************!*\
  !*** ../node_modules/lodash/keys.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "../node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../node_modules/lodash/isArrayLike.js");
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

/***/ "../node_modules/lodash/stubArray.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/stubArray.js ***!
  \*******************************************/
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

/***/ "../node_modules/lodash/stubFalse.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/stubFalse.js ***!
  \*******************************************/
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
/* harmony export */   "fuelUp": () => (/* binding */ fuelUp),
/* harmony export */   "synthExp": () => (/* binding */ synthExp),
/* harmony export */   "synthItem": () => (/* binding */ synthItem),
/* harmony export */   "synthMyst": () => (/* binding */ synthMyst),
/* harmony export */   "synthHot": () => (/* binding */ synthHot),
/* harmony export */   "kramcoCheck": () => (/* binding */ kramcoCheck),
/* harmony export */   "useDefaultFamiliar": () => (/* binding */ useDefaultFamiliar),
/* harmony export */   "Test": () => (/* binding */ Test),
/* harmony export */   "testDone": () => (/* binding */ testDone),
/* harmony export */   "doTest": () => (/* binding */ doTest),
/* harmony export */   "ensureInnerElf": () => (/* binding */ ensureInnerElf),
/* harmony export */   "fightSausageIfAble": () => (/* binding */ fightSausageIfAble),
/* harmony export */   "ensurePotionEffect": () => (/* binding */ ensurePotionEffect),
/* harmony export */   "ensureEffect": () => (/* binding */ ensureEffect),
/* harmony export */   "setClan": () => (/* binding */ setClan),
/* harmony export */   "setChoice": () => (/* binding */ setChoice),
/* harmony export */   "uniform": () => (/* binding */ uniform),
/* harmony export */   "tryUse": () => (/* binding */ tryUse),
/* harmony export */   "delevel": () => (/* binding */ delevel),
/* harmony export */   "candyblast": () => (/* binding */ candyblast),
/* harmony export */   "easyFight": () => (/* binding */ easyFight),
/* harmony export */   "multiFightAutoAttack": () => (/* binding */ multiFightAutoAttack),
/* harmony export */   "heal": () => (/* binding */ heal),
/* harmony export */   "advMacroAA": () => (/* binding */ advMacroAA),
/* harmony export */   "advMacro": () => (/* binding */ advMacro),
/* harmony export */   "mapMacro": () => (/* binding */ mapMacro),
/* harmony export */   "horsery": () => (/* binding */ horsery),
/* harmony export */   "horse": () => (/* binding */ horse),
/* harmony export */   "convertMilliseconds": () => (/* binding */ convertMilliseconds),
/* harmony export */   "fax": () => (/* binding */ fax)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libram */ "../node_modules/libram/dist/index.js");
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(libram__WEBPACK_IMPORTED_MODULE_1__);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



function fuelUp() {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["all-purpose flower"]))));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["all-purpose flower"]))));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["wad of dough"])))), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["soda water"]))));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["wad of dough"])))), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["soda bread"]))));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("asdonmartin fuel ".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["soda bread"])))), " soda bread"));
}
function synthExp() {
  if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("harvestGardenHardcore") === "none") {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("campground.php?action=garden");
  }

  if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_candySummons") === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["summon crimbo candy"]))));
  }

  var fudge = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["crimbo fudge"])));
  var pecan = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["crimbo candied pecan"])));
  var bark = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["crimbo peppermint bark"])));
  var fudges = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(fudge);
  var pecans = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(pecan);
  var barks = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(bark);

  if (fudges >= 2) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(fudge, fudge);
  } else if (barks >= 1) {
    if (pecans >= 1) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(pecan, bark);
    } else {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(bark, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["peppermint sprout"]))));
    }
  } else {
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["sugar shotgun"])))) === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["sugar shotgun"]))));
    }

    if (pecans >= 1) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(pecan, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["sugar shotgun"]))));
    } else {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["sugar shotgun"]))), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["peppermint sprout"]))));
    }
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["synthesis: learning"])))) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize learning. Pwease fix me :c.";
  }
}
function synthItem() {
  if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("harvestGardenHardcore") === "none") {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("campground.php?action=garden");
  }

  if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_candySummons") === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["summon crimbo candy"]))));
  }

  var fudge = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["crimbo fudge"])));
  var pecan = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["crimbo candied pecan"])));
  var bark = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["crimbo peppermint bark"])));
  var fudges = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(fudge);
  var pecans = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(pecan);
  var barks = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(bark);

  if (barks >= 2) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(bark, bark);
  } else {
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["peppermint twist"])))) === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["peppermint twist"]))));
    }

    if (pecans >= 1) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(pecan, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["peppermint twist"]))));
    } else {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["peppermint sprout"]))), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["peppermint twist"]))));
    }
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["synthesis: collection"])))) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize collection. Pwease fix me :c.";
  }
}
function synthMyst() {
  if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("harvestGardenHardcore") === "none") {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("campground.php?action=garden");
  }

  if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_candySummons") === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["summon crimbo candy"]))));
  }

  var fudge = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["crimbo fudge"])));
  var pecan = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["crimbo candied pecan"])));
  var bark = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["crimbo peppermint bark"])));
  var fudges = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(fudge);
  var pecans = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(pecan);
  var barks = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(bark);

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["bag of many confections"])))) >= 1) {
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("_chubbyAndPlumpUsed")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["chubby and plump"]))));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["chubby and plump"]))), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["bag of many confections"]))));
  } else {
    var mint = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["senior mints"])));
    var mints = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(mint);
    var orangeHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["orange candy heart"])));

    var orangeHearts = function orangeHearts() {
      return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(orangeHeart);
    };

    var pinkHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["pink candy heart"])));

    var pinkHearts = function pinkHearts() {
      return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["pink candy heart"]))));
    };

    var n = 0;

    while (mints + orangeHearts() + pinkHearts() === 0 && n < 11) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["summon candy heart"]))));
      n++;
    }

    if (mints + orangeHearts() + pinkHearts() === 0) {
      throw "Failed to summon hearts in a timely manner";
    }

    if (mints >= 1) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(mint, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["peppermint sprout"]))));
    } else if (orangeHearts() >= 1) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(orangeHeart, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["peppermint sprout"]))));
    } else if (pinkHearts() >= 1) {
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["peppermint twist"])))) === 0) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["peppermint twist"]))));
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(pinkHeart, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["peppermint twist"]))));
    }
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["synthesis: smart"])))) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize smart. Pwease fix me :c.";
  }
}
function synthHot() {
  //none of us are free of sin. i know how to write this better now, but i won't <3
  var wintoMint = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["wint-o-fresh mint"])));
  var wintoMints = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(wintoMint);
  var whiteHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["white candy heart"])));

  var whiteHearts = function whiteHearts() {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(whiteHeart);
  };

  var greenHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["green candy heart"])));

  var greenHearts = function greenHearts() {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(greenHeart);
  };

  var orangeHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["orange candy heart"])));

  var orangeHearts = function orangeHearts() {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(orangeHeart);
  };

  var coldHot = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["cold hots candy"])));
  var coldHots = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(coldHot);
  var daffyTaffy = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["daffy taffy"])));
  var daffyTaffys = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(daffyTaffy);
  var yellowHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["yellow candy heart"])));

  var yellowHearts = function yellowHearts() {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(yellowHeart);
  };

  var mrMediocre = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["mr. mediocrebar"])));
  var mrMediocres = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(mrMediocre);
  var lavenderHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["lavender candy heart"])));

  var lavenderHearts = function lavenderHearts() {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(lavenderHeart);
  };

  var pinkHeart = (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["pink candy heart"])));

  var pinkHearts = function pinkHearts() {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(pinkHeart);
  };

  var n = 0;

  while ((wintoMints + whiteHearts() + greenHearts()) * orangeHearts() === 0 && (coldHots + daffyTaffys + yellowHearts()) * (mrMediocres + lavenderHearts()) === 0 && pinkHearts() !== 2 && n <= 11) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["summon candy heart"]))));
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

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["synthesis: hot"])))) === 0) {
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
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["stocking mimic"]))));
  } else if ((0,libram__WEBPACK_IMPORTED_MODULE_1__.get)("camelSpit") !== 100) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["melodramedary"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["familiar"]))), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["dromedary drinking helmet"]))));
  } else if (canAttack && !(0,libram__WEBPACK_IMPORTED_MODULE_1__.have)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["short stack of pancakes"])))) && !(0,libram__WEBPACK_IMPORTED_MODULE_1__.have)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["shortly stacked"])))) && !testDone(Test.FAMILIAR)) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["shorter-order cook"]))));
  } else if (!(0,libram__WEBPACK_IMPORTED_MODULE_1__.have)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["burning newspaper"])))) && !(0,libram__WEBPACK_IMPORTED_MODULE_1__.have)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["burning paper crane"]))))) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["garbage fire"]))));
  } else {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["puck man"]))));
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
  if (!(0,libram__WEBPACK_IMPORTED_MODULE_1__.have)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["Inner Elf"]))))) {
    setClan("Hobopolis Vacation Home");

    try {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["Machine Elf"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["acc3"]))), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))));
      setChoice(326, 1);
      ensureEffect((0,libram__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["Blood Bubble"]))));
      advMacro((0,libram__WEBPACK_IMPORTED_MODULE_1__.$location)(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["The Slime Tube"]))), libram__WEBPACK_IMPORTED_MODULE_1__.Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["Tranquilizer Dart"])))).trySkill((0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["snokebomb"])))));
    } finally {
      setClan("Alliance From Heck");
    }
  }
}
function fightSausageIfAble(location, macro) {
  if (kramcoCheck()) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["off-hand"]))), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
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
  var pants = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["pantogram pants"])))) !== 0 ? (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["pantogram pants"]))) : (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["old sweatpants"])));
  var acc3 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["battle broom"])))) !== 0 ? (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["battle broom"]))) : (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["powerful glove"])));
  var back = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["lov epaulettes"])))) !== 0 ? (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["lov epaulettes"]))) : (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["vampyric cloake"])));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["hat"]))), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["iunion crown"]))));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["shirt"]))), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["fresh coat of paint"]))));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["pants"]))), pants);
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["weapon"]))), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["fourth of may cosplay saber"]))));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["off-hand"]))), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["familiar scrapbook"]))));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["acc1"]))), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["your cowboy boots"]))));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["acc2"]))), (0,libram__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral(["codpiece"]))));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["acc3"]))), acc3);
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$slot)(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["back"]))), back);
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
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)((0,libram__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["Map the Monsters"]))));
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
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199, _templateObject200, _templateObject201, _templateObject202, _templateObject203, _templateObject204, _templateObject205, _templateObject206, _templateObject207, _templateObject208, _templateObject209, _templateObject210, _templateObject211, _templateObject212, _templateObject213, _templateObject214, _templateObject215, _templateObject216, _templateObject217, _templateObject218, _templateObject219, _templateObject220, _templateObject221, _templateObject222, _templateObject223, _templateObject224, _templateObject225, _templateObject226, _templateObject227, _templateObject228, _templateObject229, _templateObject230, _templateObject231, _templateObject232, _templateObject233, _templateObject234, _templateObject235, _templateObject236, _templateObject237, _templateObject238, _templateObject239, _templateObject240, _templateObject241, _templateObject242, _templateObject243, _templateObject244, _templateObject245, _templateObject246, _templateObject247, _templateObject248, _templateObject249, _templateObject250, _templateObject251, _templateObject252, _templateObject253, _templateObject254, _templateObject255, _templateObject256, _templateObject257, _templateObject258, _templateObject259, _templateObject260, _templateObject261, _templateObject262, _templateObject263, _templateObject264, _templateObject265, _templateObject266, _templateObject267, _templateObject268, _templateObject269, _templateObject270, _templateObject271, _templateObject272, _templateObject273, _templateObject274, _templateObject275, _templateObject276, _templateObject277, _templateObject278, _templateObject279, _templateObject280, _templateObject281, _templateObject282, _templateObject283, _templateObject284, _templateObject285, _templateObject286, _templateObject287, _templateObject288, _templateObject289, _templateObject290, _templateObject291, _templateObject292, _templateObject293, _templateObject294, _templateObject295, _templateObject296, _templateObject297, _templateObject298, _templateObject299, _templateObject300, _templateObject301, _templateObject302, _templateObject303, _templateObject304, _templateObject305, _templateObject306, _templateObject307, _templateObject308, _templateObject309, _templateObject310, _templateObject311, _templateObject312, _templateObject313, _templateObject314, _templateObject315, _templateObject316, _templateObject317, _templateObject318, _templateObject319, _templateObject320, _templateObject321, _templateObject322, _templateObject323, _templateObject324, _templateObject325, _templateObject326, _templateObject327, _templateObject328, _templateObject329, _templateObject330, _templateObject331, _templateObject332, _templateObject333, _templateObject334, _templateObject335, _templateObject336, _templateObject337, _templateObject338, _templateObject339, _templateObject340, _templateObject341, _templateObject342, _templateObject343, _templateObject344, _templateObject345, _templateObject346, _templateObject347, _templateObject348, _templateObject349, _templateObject350, _templateObject351, _templateObject352, _templateObject353, _templateObject354, _templateObject355, _templateObject356, _templateObject357, _templateObject358, _templateObject359, _templateObject360, _templateObject361, _templateObject362, _templateObject363, _templateObject364, _templateObject365, _templateObject366, _templateObject367, _templateObject368, _templateObject369, _templateObject370, _templateObject371, _templateObject372, _templateObject373, _templateObject374, _templateObject375, _templateObject376, _templateObject377, _templateObject378, _templateObject379, _templateObject380, _templateObject381, _templateObject382, _templateObject383, _templateObject384, _templateObject385, _templateObject386, _templateObject387, _templateObject388, _templateObject389, _templateObject390, _templateObject391, _templateObject392, _templateObject393, _templateObject394, _templateObject395, _templateObject396, _templateObject397, _templateObject398, _templateObject399, _templateObject400, _templateObject401, _templateObject402, _templateObject403, _templateObject404, _templateObject405, _templateObject406, _templateObject407, _templateObject408, _templateObject409, _templateObject410, _templateObject411, _templateObject412, _templateObject413, _templateObject414, _templateObject415, _templateObject416, _templateObject417, _templateObject418, _templateObject419, _templateObject420, _templateObject421, _templateObject422, _templateObject423, _templateObject424, _templateObject425, _templateObject426, _templateObject427, _templateObject428, _templateObject429, _templateObject430, _templateObject431, _templateObject432, _templateObject433, _templateObject434, _templateObject435, _templateObject436, _templateObject437, _templateObject438, _templateObject439, _templateObject440, _templateObject441, _templateObject442, _templateObject443, _templateObject444, _templateObject445, _templateObject446, _templateObject447, _templateObject448, _templateObject449, _templateObject450, _templateObject451, _templateObject452, _templateObject453, _templateObject454, _templateObject455;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("council.php");
(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("ccs twiddle");
var defaultKill = libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).attack().repeat();
var tests = [];
var startTime = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.gametimeToInt)();

try {
  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.COIL_WIRE)) {
    libram__WEBPACK_IMPORTED_MODULE_2__.SourceTerminal.educate([(0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject || (_templateObject = _taggedTemplateLiteral(["extract"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["portscan"])))]);
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setClan)("Alliance From Heck");

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLevel)() === 1 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mySpleenUse)() === 0) {
      while ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_universeCalculated") < (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("skillLevel144")) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("numberology 69");
      }
    } // Chateau juice bar


    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=chateau&action=chateau_desk2");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["gremlin juice"])))); // Sell pork gems + tent

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("tutorial.php?action=toot");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.tryUse)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["letter from King Ralph XI"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.tryUse)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["pork elf goodies sack"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["baconstone"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["porquoise"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["hamethyst"]))));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["toy accordion"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["toy accordion"]))));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_grimoireConfiscatorSummons") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Summon Confiscated Things"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["glow-in-the-dark necklace"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\"KICK ME\" sign"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["LCD Game: Burger Belt"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["LCD Game: Food Eater"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["LCD Game: Garbage River"]))));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("grimoire2Summons") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Summon Tasteful Items"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["black-and-blue light"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["blue plasma ball"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["cheap studded belt"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["flavored foot massage oil"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["foam dart"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["Loudmouth Larry Lamprey"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["personal massager"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["personalized coffee mug"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(5, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["stick-on eyebrow piercing"]))));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("grimoire3Summons") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Summon Alice's Army Cards"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$coinmaster)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Game Shoppe Snacks"]))), 1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["tobiko marble soda"]))));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["your cowboy boots"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=town_right&action=townright_ltt");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(5);
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["gold detective badge"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_precinct");
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["GameInformPowerDailyPro magazine"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("inv_use.php?whichitem=6174&confirm=Yep.");
    }

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eudora)() === "Gameinform") {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["scroll of Puddingskin"])))) && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["dungeoneering kit"]))))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("adventure.php?snarfblat=319");
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["dungeoneering kit"]))));
      }
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_floundryItemCreated")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("acquire codpiece");
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_borrowedTimeUsed")) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["borrowed time"]))))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["borrowed time"]))));
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["borrowed time"]))));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_saberMod") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("main.php?action=may4");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(4);
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["dromedary drinking helmet"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["melodramedary"]))));

      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["familiar jacks"]))))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["familiar jacks"]))));
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["familiar jacks"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("mummery myst");
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("tomeSummons") < 3) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["summon sugar sheets"]))));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_voteToday")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=2&local%5B%5D=3");
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_deckCardsDrawn") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("cheat ancestral; cheat island; cheat 1952");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosell)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["1952 Mickey Mantle card"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(2, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["Ancestral Recall"]))));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_daycareGymScavenges") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(3);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(2);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(5);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(4);
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["pantogram pants"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("pantogram mysticality|hot|drops of blood|some self-respect|your dreams|silent");
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["back"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["protonic accelerator pack"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("boomBoxSong") !== "Total Eclipse of Your Meat") {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("boombox meat");
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.fightSausageIfAble)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["noob cave"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.attack().repeat());

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["magical sausage casing"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["magical sausage"]))));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["magical sausage"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["magical sausage"]))));
    }

    var ghostLocation = (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("ghostLocation");

    if (ghostLocation) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["off-hand"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["latte lover member's mug"]))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacro)(ghostLocation, libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).skill("shoot ghost").skill("shoot ghost").skill("shoot ghost").skill("trap ghost"));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["pants"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["cargo cultist shorts"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["acc1"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["eight days a week pill keeper"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["acc2"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["powerful glove"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["acc3"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["Lil' Doctor\u2122 Bag"]))));
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

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["That's Just Cloud-Talk, Man"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
    }

    var lovePotion = (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["Love Potion #0"])));
    var loveEffect = (0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["Tainted Love Potion"])));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)(loveEffect)) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)(lovePotion)) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["Love Mixology"]))));
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("desc_effect.php?whicheffect=".concat(loveEffect.descid));

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(loveEffect, "mysticality") > 10 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(loveEffect, "muscle") > -30 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(loveEffect, "moxie") > -30 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(loveEffect, "maximum hp percent") > -0.001) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, lovePotion);
      }
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["Uncucumbered"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["Inscrutable Gaze"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["Thaumodynamic"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["You Learned Something Maybe!"]))));
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["synthesis: learning"]))))) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.synthExp)();
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["synthesis: smart"]))))) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.synthMyst)();

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["a ten-percent bonus"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["a ten-percent bonus"]))));
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

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["We're All Made of Starfish"])))); // Beach Comb - should bridge all the way to spell dmg.

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["glittery mascara"])))) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["glittering eyelashes"])))) === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["glittery mascara"]))));
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["Glittering Eyelashes"])))); // Plan is for these buffs to fall all the way through to item -> hot res -> fam weight.

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["Fidoxene"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["Do I Know You From Somewhere?"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["Puzzle Champ"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["Billiards Belligerence"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["meat.enh"]))));
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_clanFortuneBuffUsed")) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("fortune buff familiar");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["acc3"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["powerful glove"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["Triple-Sized"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["Feeling Excited"]))));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_streamsCrossed")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("crossstreams");
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["left-hand man"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("mp", false);

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_sausagesEaten") === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("eat 1 magic sausage");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["Advanced Saucecrafting"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["Advanced Cocktailcrafting"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["Acquire Rhinestones"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["Prevent Scurvy and Sobriety"]))));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["turtle totem"]))))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("acquire turtle totem");
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["saucepan"]))))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("acquire saucepan");
    var castableBuffs = (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skills)(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["The Magical Mojomuscular Melody, Stevedave's Shanty of Superiority, Fat Leon's Phat Loot Lyric, The Polka of Plenty, leash of linguini, empathy of the newt, blood bond, blood bubble, Song of Bravado, Get Big"])));
    castableBuffs.forEach(function (buff) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toEffect)(buff))) {
        if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() < (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mpCost)(buff)) {
          if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.totalFreeRests)() > (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("timesRested")) {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=chateau&action=chateau_restbox");
          } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["psychokinetic energy"])))) >= 1) {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(2, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["psychokinetic energy"]))));
          } else {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["magical sausage"]))));
          }
        }

        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, buff);
      }
    });
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral(["ghost of crimbo carols"]))));

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("snojoSetting") === "NONE") {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(2);
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).attack().repeat(), function () {
      return !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["holiday yoked"]))));
    });
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["back"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral(["protonic accelerator pack"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("fold makeshift garbage shirt");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral(["shirt"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral(["makeshift garbage shirt"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
    libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill("curse of weaksauce").skill("micrometeor").attack().repeat().setAutoAttack();

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral(["battle broom"]))))) {
      libram__WEBPACK_IMPORTED_MODULE_2__.Witchess.fightPiece((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral(["Witchess Witch"]))));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral(["acc3"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral(["battle broom"]))));

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("questM25Armorer") === "unstarted") {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("shop.php?whichshop=armory&action=talk");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(1);
    }

    var _ghostLocation = (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("ghostLocation");

    if (_ghostLocation) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral(["off-hand"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral(["latte lover member's mug"]))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacro)(_ghostLocation, libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).skill("portscan").skill("shoot ghost").skill("shoot ghost").skill("shoot ghost").skill("trap ghost"));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral(["government"])))) && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["government cheese"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral(["back"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral(["vampyric cloake"]))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral(["acc2"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral(["gold detective badge"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral(["acc3"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral(["off-hand"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral(["latte lover member's mug"]))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral(["noob cave"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).skill("otoscope").skill("become a bat").skill("chest x-ray"), //1
      function () {
        return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getCounters)("Portscan", 0, 0) !== "";
      });
      var desertAccessItem = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.knollAvailable)() ? (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral(["bitchin' meatcar"]))) : (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral(["desert bus pass"])));

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(desertAccessItem) == 0) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("acquire ".concat(desertAccessItem.name));
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse");
    }

    libram__WEBPACK_IMPORTED_MODULE_2__.Macro.if_("monstername LOV enforcer", libram__WEBPACK_IMPORTED_MODULE_2__.Macro.attack().repeat()).if_("monstername LOV Engineer", libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.candyblast).skill("weapon of the pastalord").repeat()).if_("monstername LOV equivocator", libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.candyblast).attack().repeat()).setAutoAttack();

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_loveTunnelUsed")) {
      libram__WEBPACK_IMPORTED_MODULE_2__.TunnelOfLove.fightAll("LOV Epaulettes", "Open Heart Surgery", "LOV Extraterrestrial Chocolate");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral(["lov extraterrestrial chocolate"]))));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("/cast * candy heart");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("backupcamera ml");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_monstersMapped") < 3 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral(["tomato"])))) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral(["tomato juice of powerful power"])))) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral(["tomato power"])))) === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral(["acc3"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.mapMacro)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral(["the haunted pantry"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral(["possessed can of tomatoes"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.if_("monsterid ".concat((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral(["possessed can of tomatoes"]))).id), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral(["reflex hammer"]))))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral([" X-32-F Combat Training Snowman"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral(["feel nostalgic"])))).step(defaultKill));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_monstersMapped") < 3 && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral(["li'l ninja costume"]))))) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.mapMacro)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral(["haiku dungeon"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral(["amateur ninja"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.if_("monsterid ".concat((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral(["amateur ninja"]))).id), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral(["gingerbread mob hit"]))))).step("abort"));
    }

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getCampground)()["Dramatic™ range"] !== 1) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral(["Dramatic\u2122 range"]))))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral(["Dramatic\u2122 range"]))));
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral(["Dramatic\u2122 range"]))));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral(["Advanced Saucecrafting"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral(["prevent scurvy and sobriety"]))));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral(["tomato power"]))))) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral(["tomato juice of powerful power"])))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral(["tomato"]))))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral(["tomato juice of powerful power"]))));
      }

      if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral(["tomato juice of powerful power"]))))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral(["tomato juice of powerful power"]))));
      }
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral(["mystically oiled"]))))) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral(["ointment of the occult"]))))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral(["ointment of the occult"]))));
      }

      if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral(["ointment of the occult"]))))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral(["ointment of the occult"]))));
      }
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_godLobsterFights") === 0) {
      libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).attack().repeat().setAutoAttack();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral(["god lobster"]))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(1310, 1);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("main.php?fightgodlobster=1");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)(libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).attack().repeat().toString());
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.multiFightAutoAttack)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(-1);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral(["familiar"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral(["god lobster's scepter"]))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("main.php?fightgodlobster=1");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.multiFightAutoAttack)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(-1);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral(["familiar"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral(["god lobster's ring"]))));
    } //do snojo here


    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral(["the x-32-f combat training snowman"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).attack().repeat(), function () {
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
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral(["pocket professor"]))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral(["off-hand"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral(["latte lovers member's mug"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral(["acc1"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral(["hewn moon-rune spoon"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral(["acc2"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral(["beach comb"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral(["acc3"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral(["brutal brogues"]))));
      var profchain = libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).trySkill("Lecture on Relativity").step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.candyblast).attack().repeat();
      profchain.setAutoAttack();

      if ((0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.kramcoCheck)()) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral(["off-hand"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));

        do {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral(["madness bakery"]))), -1, profchain.toString());
        } while ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("lastEncounter") === "Our Bakery in the Middle of Our Street");

        while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inMultiFight)()) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)(profchain.toString());
        }
      } else if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_witchessFights") < 3) {
        libram__WEBPACK_IMPORTED_MODULE_2__.Witchess.fightPiece((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral(["witchess bishop"]))));
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)();

        while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inMultiFight)()) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)();
        }
      }
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(1322, 2);
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(1324, 5);
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral(["shirt"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral(["makeshift garbage shirt"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral(["off-hand"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral(["the neverending party"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).trySkill("feel pride").step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.easyFight).attack().repeat(), function () {
      return (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_neverendingPartyFreeTurns") < 10;
    }, function () {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();

      if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_sausageFights") > 2) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral(["off-hand"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral(["familiar scrapbook"]))));
      }
    });
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral(["the neverending party"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.if_("!monstername sausage goblin", libram__WEBPACK_IMPORTED_MODULE_2__.Macro.trySkill("shattering punch").trySkill("gingerbread mob hit").trySkill("chest x-ray")).if_("monstername sausage goblin", libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.candyblast).attack().repeat()), function () {
      return (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_shatteringPunchUsed") < 3 && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_gingerbreadMobHitUsed");
    }, function () {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
    });
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral(["acc3"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject190 || (_templateObject190 = _taggedTemplateLiteral(["the neverending party"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.if_("!monstername sausage goblin", libram__WEBPACK_IMPORTED_MODULE_2__.Macro.trySkill("shattering punch").trySkill("gingerbread mob hit").trySkill("chest x-ray")).if_("monstername sausage goblin", libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.candyblast).attack().repeat()), function () {
      return (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_chestXRayUsed") < 3;
    }, function () {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
    });
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject191 || (_templateObject191 = _taggedTemplateLiteral(["machine elf"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral(["the deep machine tunnels"]))), defaultKill, function () {
      return (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_machineTunnelsAdv") < 5;
    }, _phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal);

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral(["very pointy crown"]))))) {
      libram__WEBPACK_IMPORTED_MODULE_2__.Macro.tryItem("jam band flyer").tryItem("gas can").item("time-spinner").attack().repeat().setAutoAttack();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      libram__WEBPACK_IMPORTED_MODULE_2__.Witchess.fightPiece((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral(["witchess queen"]))));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral(["dented scepter"]))))) {
      libram__WEBPACK_IMPORTED_MODULE_2__.Macro.step(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.delevel).attack().repeat().setAutoAttack();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      libram__WEBPACK_IMPORTED_MODULE_2__.Witchess.fightPiece((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral(["witchess king"]))));
    }

    while ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("timesRested") < (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.totalFreeRests)()) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("/cast * candy heart");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=chateau&action=chateau_restbox");
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral(["disembodied hand"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral(["Bind Undead Elbow Macaroni"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject199 || (_templateObject199 = _taggedTemplateLiteral(["song of starch"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("hp", false);

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMaxhp)() - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject200 || (_templateObject200 = _taggedTemplateLiteral(["muscle"])))) - 3 < 1770) {
      throw "Failed to cap HP";
    }

    var prediction = 60 - Math.floor(((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMaxhp)() - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject201 || (_templateObject201 = _taggedTemplateLiteral(["muscle"])))) - 3) / 30);
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.doTest)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.HP);
    tests.push({
      testName: "HP",
      turnPrediction: prediction,
      turnCost: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() - startTurns
    });
  }

  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.MUS)) {
    var _startTurns = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)();

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral(["Bind Undead Elbow Macaroni"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral(["Big"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral(["Song of Bravado"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral(["Rage of the Reindeer"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject206 || (_templateObject206 = _taggedTemplateLiteral(["Quiet Determination"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject207 || (_templateObject207 = _taggedTemplateLiteral(["Disdain of the War Snapper"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject208 || (_templateObject208 = _taggedTemplateLiteral(["Feeling Excited"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject209 || (_templateObject209 = _taggedTemplateLiteral(["The Power of LOV"]))));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral(["Go Get 'Em, Tiger!"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.retrieveItem)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral(["ben-gal balm"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral(["ben-gal balm"]))));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral(["disembodied hand"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("muscle", false);

    for (var _i = 0, _arr = [function () {
      return (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral(["Lack of Body-Building"]))));
    }, // will stay on all the way to weapon damage.
    function () {
      return (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral(["Ham-Fisted"]))));
    }, function () {
      return (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureInnerElf)();
    }]; _i < _arr.length; _i++) {
      var increaser = _arr[_i];
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral(["muscle"])))) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral(["mysticality"])))) < 1770) increaser();
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral(["disembodied hand"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("muscle", false);

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral(["muscle"])))) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral(["mysticality"])))) < 1770) {
      throw "Not enough muscle to cap.";
    }

    var _prediction = 60 - Math.floor(1 / 30 * ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral(["muscle"])))) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral(["mysticality"]))))));

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.doTest)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.MUS);
    tests.push({
      testName: "muscle",
      turnPrediction: _prediction,
      turnCost: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() - _startTurns
    });
  }

  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.MYS)) {
    var _startTurns2 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)();

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral(["Feeling Excited"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("mysticality", false);

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral(["mysticality"])))) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral(["mysticality"])))) < 1770) {
      throw "Not enough mysticality to cap.";
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.doTest)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.MYS);
    tests.push({
      testName: "mysticality",
      turnPrediction: 60 - Math.floor(1 / 30 * ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject226 || (_templateObject226 = _taggedTemplateLiteral(["mysticality"])))) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject227 || (_templateObject227 = _taggedTemplateLiteral(["mysticality"])))))),
      turnCost: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() - _startTurns2
    });
  }

  if (!(0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.testDone)(_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.Test.MOX)) {
    var _startTurns3 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)();

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject228 || (_templateObject228 = _taggedTemplateLiteral(["magical sausage casing"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject229 || (_templateObject229 = _taggedTemplateLiteral(["magical sausage"]))));
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject230 || (_templateObject230 = _taggedTemplateLiteral(["magical sausage"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject231 || (_templateObject231 = _taggedTemplateLiteral(["magical sausage"]))));
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral(["Feeling Excited"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject233 || (_templateObject233 = _taggedTemplateLiteral(["Bind Penne Dreadful"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject234 || (_templateObject234 = _taggedTemplateLiteral(["Pomp & Circumsands"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject235 || (_templateObject235 = _taggedTemplateLiteral(["Bird-a-Day Calendar"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject236 || (_templateObject236 = _taggedTemplateLiteral(["Blessing of the Bird"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject237 || (_templateObject237 = _taggedTemplateLiteral(["Quiet Desperation"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject238 || (_templateObject238 = _taggedTemplateLiteral(["Disco Fever"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject239 || (_templateObject239 = _taggedTemplateLiteral(["Blubbered Up"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject240 || (_templateObject240 = _taggedTemplateLiteral(["Mariachi Mood"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject241 || (_templateObject241 = _taggedTemplateLiteral(["disco state of mind"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral(["rhinestone"])))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject243 || (_templateObject243 = _taggedTemplateLiteral(["rhinestone"]))));

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject244 || (_templateObject244 = _taggedTemplateLiteral(["dollop of barbecue sauce"])))) > 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject245 || (_templateObject245 = _taggedTemplateLiteral(["dollop of barbecue sauce"]))));
    }

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject246 || (_templateObject246 = _taggedTemplateLiteral(["confiscated love note"])))) > 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject247 || (_templateObject247 = _taggedTemplateLiteral(["confiscated love note"]))));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject248 || (_templateObject248 = _taggedTemplateLiteral(["Unrunnable Face"]))))) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.tryUse)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject249 || (_templateObject249 = _taggedTemplateLiteral(["runproof mascara"]))));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject250 || (_templateObject250 = _taggedTemplateLiteral(["Left-Hand Man"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("moxie", false);

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject251 || (_templateObject251 = _taggedTemplateLiteral(["moxie"])))) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral(["mysticality"])))) < 1770) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureInnerElf)();
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject253 || (_templateObject253 = _taggedTemplateLiteral(["Left-Hand Man"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("moxie", false);

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject254 || (_templateObject254 = _taggedTemplateLiteral(["moxie"])))) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject255 || (_templateObject255 = _taggedTemplateLiteral(["mysticality"])))) < 1770) {
      throw "Not enough moxie to cap.";
    }

    var _prediction2 = 60 - Math.floor(1 / 30 * ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBuffedstat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject256 || (_templateObject256 = _taggedTemplateLiteral(["moxie"])))) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$stat)(_templateObject257 || (_templateObject257 = _taggedTemplateLiteral(["mysticality"]))))));

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
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject258 || (_templateObject258 = _taggedTemplateLiteral(["astral six-pack"])))) !== 0) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject259 || (_templateObject259 = _taggedTemplateLiteral(["astral six-pack"]))));
    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject260 || (_templateObject260 = _taggedTemplateLiteral(["The Magical Mojomuscular Melody"]))))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("shrug The Magical Mojomuscular Melody");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject261 || (_templateObject261 = _taggedTemplateLiteral(["the ode to booze"]))));

    while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myInebriety)() < 5) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.drink)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral(["astral pilsner"]))));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject263 || (_templateObject263 = _taggedTemplateLiteral(["synthesis: collection"]))))) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.synthItem)();

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject264 || (_templateObject264 = _taggedTemplateLiteral(["Bat-Adjacent Form"]))))) {
      var run = libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject265 || (_templateObject265 = _taggedTemplateLiteral(["become a bat"]))));

      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_latteBanishUsed")) {
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)(false);
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject266 || (_templateObject266 = _taggedTemplateLiteral(["off-hand"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject267 || (_templateObject267 = _taggedTemplateLiteral(["latte lovers member's mug"]))));
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject268 || (_templateObject268 = _taggedTemplateLiteral(["back"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject269 || (_templateObject269 = _taggedTemplateLiteral(["vampyric cloake"]))));
        run.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject270 || (_templateObject270 = _taggedTemplateLiteral(["throw latte"]))));
      } else {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject271 || (_templateObject271 = _taggedTemplateLiteral(["frumious bandersnatch"]))));
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral(["ode to booze"]))));
        run.step("runaway");
      }

      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject273 || (_templateObject273 = _taggedTemplateLiteral(["dire warren"]))), run);
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("shrug ode");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject274 || (_templateObject274 = _taggedTemplateLiteral(["fat leon's phat loot lyric"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject275 || (_templateObject275 = _taggedTemplateLiteral(["The Spirit of Taking"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject276 || (_templateObject276 = _taggedTemplateLiteral(["items.enh"]))));

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getWorkshed)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject277 || (_templateObject277 = _taggedTemplateLiteral(["Asdon Martin keyfob"]))) && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject278 || (_templateObject278 = _taggedTemplateLiteral(["driving observantly"]))))) {
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getFuel)() < 37) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.fuelUp)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("asdonmartin drive observantly");
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_steelyEyedSquintUsed")) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject279 || (_templateObject279 = _taggedTemplateLiteral(["steely-eyed squint"]))));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject280 || (_templateObject280 = _taggedTemplateLiteral(["I See Everything Thrice"]))))) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject281 || (_templateObject281 = _taggedTemplateLiteral(["government"]))))) {
        if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral(["anticheese"]))))) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse");
        }

        if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject283 || (_templateObject283 = _taggedTemplateLiteral(["government cheese"]))))) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject284 || (_templateObject284 = _taggedTemplateLiteral(["government"]))));
        }
      }

      if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject285 || (_templateObject285 = _taggedTemplateLiteral(["government"]))))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject286 || (_templateObject286 = _taggedTemplateLiteral(["government"]))));
      }
    }

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$class)(_templateObject287 || (_templateObject287 = _taggedTemplateLiteral(["pastamancer"]))) && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_barrelPrayer")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("barrelprayer buff");
    }

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject288 || (_templateObject288 = _taggedTemplateLiteral(["lavender candy heart"]))))) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject289 || (_templateObject289 = _taggedTemplateLiteral(["heart of lavender"]))));

    var itemCheck = function itemCheck() {
      return 60 - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("item drop") / 30 + 0.001) - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("booze drop") / 15 + 0.001) <= 1;
    };

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_latteRefillsUsed") === 0) {
      var latte = "pumpkin " + ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("latteUnlocks").includes("carrot") ? "carrot " : "vanilla ") + ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon");

      if (latte !== "") {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("latte refill ".concat(latte));
      }
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject290 || (_templateObject290 = _taggedTemplateLiteral(["trick-or-treating tot"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("item, 2 booze drop, -equip broken champagne bottle, -equip surprisingly capacious handbag", false);

    if (!itemCheck()) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject291 || (_templateObject291 = _taggedTemplateLiteral(["nearly all-natural"]))));
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

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject292 || (_templateObject292 = _taggedTemplateLiteral(["puzzle champ"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("witchess");
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject293 || (_templateObject293 = _taggedTemplateLiteral(["do i know you from somewhere"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject294 || (_templateObject294 = _taggedTemplateLiteral(["Empathy"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject295 || (_templateObject295 = _taggedTemplateLiteral(["Leash of Linguini"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject296 || (_templateObject296 = _taggedTemplateLiteral(["Blood Bond"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject297 || (_templateObject297 = _taggedTemplateLiteral(["Billiards Belligerence"]))));
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_clanFortuneBuffUsed")) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("fortune buff familiar");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)(false);

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_monstersMapped") < 3 && !(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject298 || (_templateObject298 = _taggedTemplateLiteral(["lava-proof pants"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject299 || (_templateObject299 = _taggedTemplateLiteral(["back"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject300 || (_templateObject300 = _taggedTemplateLiteral(["vampyric cloake"]))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)(false);

      while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getFuel)() < 137) {
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.fuelUp)();
      }

      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.mapMacro)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject301 || (_templateObject301 = _taggedTemplateLiteral(["LavaCo\u2122 Lamp Factory"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject302 || (_templateObject302 = _taggedTemplateLiteral(["factory worker (female)"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject303 || (_templateObject303 = _taggedTemplateLiteral(["become a cloud of mist"])))).skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject304 || (_templateObject304 = _taggedTemplateLiteral(["Asdon Martin: Missile Launcher"])))));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject305 || (_templateObject305 = _taggedTemplateLiteral(["synthesis: hot"]))))) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.synthHot)();

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject306 || (_templateObject306 = _taggedTemplateLiteral(["tenderizing hammer"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject307 || (_templateObject307 = _taggedTemplateLiteral(["tenderizing hammer"]))));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("smash * ratty knitted cap");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("smash * red-hot sausage fork");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("smash * smoldering bagel punch");

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject308 || (_templateObject308 = _taggedTemplateLiteral(["Sleazy Hands"]))))) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject309 || (_templateObject309 = _taggedTemplateLiteral(["lotion of sleaziness"]))))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject310 || (_templateObject310 = _taggedTemplateLiteral(["lotion of sleaziness"]))));
      if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject311 || (_templateObject311 = _taggedTemplateLiteral(["lotion of sleaziness"]))))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject312 || (_templateObject312 = _taggedTemplateLiteral(["lotion of sleaziness"]))));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject313 || (_templateObject313 = _taggedTemplateLiteral([" Flame-Retardant Trousers"])))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject314 || (_templateObject314 = _taggedTemplateLiteral(["hot powder"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject315 || (_templateObject315 = _taggedTemplateLiteral(["hot powder"]))));
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject316 || (_templateObject316 = _taggedTemplateLiteral(["elemental saucesphere"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject317 || (_templateObject317 = _taggedTemplateLiteral(["astral shell"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject318 || (_templateObject318 = _taggedTemplateLiteral(["Hot-Headed"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject319 || (_templateObject319 = _taggedTemplateLiteral(["Feeling Peaceful"]))));

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject320 || (_templateObject320 = _taggedTemplateLiteral(["scroll of protection from bad stuff"]))))) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject321 || (_templateObject321 = _taggedTemplateLiteral(["protection from bad stuff"]))));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject322 || (_templateObject322 = _taggedTemplateLiteral(["meteorite guard"])))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject323 || (_templateObject323 = _taggedTemplateLiteral(["metal meteoroid"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject324 || (_templateObject324 = _taggedTemplateLiteral(["meteorite guard"]))));
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.horse)("pale");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject325 || (_templateObject325 = _taggedTemplateLiteral(["exotic parrot"]))));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject326 || (_templateObject326 = _taggedTemplateLiteral(["astral pet sweater"])))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("tomeSummons") < 3) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject327 || (_templateObject327 = _taggedTemplateLiteral(["familiar jacks"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject328 || (_templateObject328 = _taggedTemplateLiteral(["familiar jacks"]))));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("spooky res", false);

    while ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject329 || (_templateObject329 = _taggedTemplateLiteral(["Deep Dark Visions"])))) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject330 || (_templateObject330 = _taggedTemplateLiteral(["Visions of the Deep Dark Deeps"])))) < 30) {
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() < 20) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject331 || (_templateObject331 = _taggedTemplateLiteral(["magical sausage"]))));
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject332 || (_templateObject332 = _taggedTemplateLiteral(["magical sausage"]))));
      }

      while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myHp)() < (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMaxhp)()) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject333 || (_templateObject333 = _taggedTemplateLiteral(["Cannelloni Cocoon"]))));
      }

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() < 100) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject334 || (_templateObject334 = _taggedTemplateLiteral(["magical sausage"]))));
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject335 || (_templateObject335 = _taggedTemplateLiteral(["magical sausage"]))));
      }

      if (Math.round((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("spooky resistance")) < 10) {
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject336 || (_templateObject336 = _taggedTemplateLiteral(["Does It Have a Skull In There??"]))));

        if (Math.round((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("spooky resistance")) < 10) {
          throw "Not enough spooky res for Deep Dark Visions.";
        }
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject337 || (_templateObject337 = _taggedTemplateLiteral(["Deep Dark Visions"]))));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("hot res", false);

    if (Math.round((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("hot resistance")) < 59) {
      while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getFuel)() < 37) {
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.fuelUp)();
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("asdonmartin drive safely");
    }

    if (Math.round((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("hot resistance")) < 59) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject338 || (_templateObject338 = _taggedTemplateLiteral(["amazing"]))));
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

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject339 || (_templateObject339 = _taggedTemplateLiteral(["puzzle champ"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("witchess");
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject340 || (_templateObject340 = _taggedTemplateLiteral(["Empathy"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject341 || (_templateObject341 = _taggedTemplateLiteral(["Leash of Linguini"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject342 || (_templateObject342 = _taggedTemplateLiteral(["Blood Bond"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject343 || (_templateObject343 = _taggedTemplateLiteral(["do i know you from somewhere"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject344 || (_templateObject344 = _taggedTemplateLiteral(["smooth movements"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject345 || (_templateObject345 = _taggedTemplateLiteral(["Billiards Belligerence"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject346 || (_templateObject346 = _taggedTemplateLiteral(["Feeling Lonely"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject347 || (_templateObject347 = _taggedTemplateLiteral(["acc3"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject348 || (_templateObject348 = _taggedTemplateLiteral(["powerful glove"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject349 || (_templateObject349 = _taggedTemplateLiteral(["invisible avatar"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject350 || (_templateObject350 = _taggedTemplateLiteral(["Blessing of the bird"]))));
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_clanFortuneBuffUsed")) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("fortune buff familiar");
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject351 || (_templateObject351 = _taggedTemplateLiteral(["fat leon's phat loot lyric"]))))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("shrug fat leon's phat loot lyric");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject352 || (_templateObject352 = _taggedTemplateLiteral(["sonata of sneakiness"]))));
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_olympicSwimmingPool")) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("swim sprints");

    while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getFuel)() < 37) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.fuelUp)();
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject353 || (_templateObject353 = _taggedTemplateLiteral(["driving stealthily"]))))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("asdonmartin drive stealthily");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.horse)("dark");

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject354 || (_templateObject354 = _taggedTemplateLiteral(["silence of the god lobster"])))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_godLobsterFights") < 3 && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject355 || (_templateObject355 = _taggedTemplateLiteral(["god lobster's ring"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject356 || (_templateObject356 = _taggedTemplateLiteral(["god lobster"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject357 || (_templateObject357 = _taggedTemplateLiteral(["familiar"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject358 || (_templateObject358 = _taggedTemplateLiteral(["god lobster's ring"]))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      defaultKill.setAutoAttack();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.heal)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(1310, 2);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("main.php?fightgodlobster=1");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)(defaultKill.toString());
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("choice.php");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(-1);
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject359 || (_templateObject359 = _taggedTemplateLiteral(["disgeist"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("-combat, +equip kremlin", false);

    if (Math.round((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("combat rate")) > -40) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject360 || (_templateObject360 = _taggedTemplateLiteral(["gummed shoes"]))))) {
        if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject361 || (_templateObject361 = _taggedTemplateLiteral(["cop dollar"])))) < 10) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("detective solver.ash");
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$coinmaster)(_templateObject362 || (_templateObject362 = _taggedTemplateLiteral(["Precinct Materiel Division"]))), 1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject363 || (_templateObject363 = _taggedTemplateLiteral(["shoe gum"]))));
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject364 || (_templateObject364 = _taggedTemplateLiteral(["shoe gum"]))));
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

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject365 || (_templateObject365 = _taggedTemplateLiteral(["Empathy"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject366 || (_templateObject366 = _taggedTemplateLiteral(["Leash of Linguini"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject367 || (_templateObject367 = _taggedTemplateLiteral(["Blood Bond"]))));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_freePillKeeperUsed")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("pillkeeper familiar");
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject368 || (_templateObject368 = _taggedTemplateLiteral(["puzzle champ"]))))) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("witchess");
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject369 || (_templateObject369 = _taggedTemplateLiteral(["do i know you from somewhere"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject370 || (_templateObject370 = _taggedTemplateLiteral(["Billiards Belligerence"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject371 || (_templateObject371 = _taggedTemplateLiteral(["Heart of Green"]))));
    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject372 || (_templateObject372 = _taggedTemplateLiteral(["silver face paint"]))))) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject373 || (_templateObject373 = _taggedTemplateLiteral(["robot friends"]))));
    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_clanFortuneBuffUsed")) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("fortune buff familiar");
    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject374 || (_templateObject374 = _taggedTemplateLiteral(["burning newspaper"]))))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject375 || (_templateObject375 = _taggedTemplateLiteral(["burning paper crane"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.useDefaultFamiliar)(false);
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.horse)("dark");
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(1387, 3);

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_meteorShowerUses") < 5) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject376 || (_templateObject376 = _taggedTemplateLiteral(["the dire warren"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject377 || (_templateObject377 = _taggedTemplateLiteral(["meteor shower"])))).skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject378 || (_templateObject378 = _taggedTemplateLiteral(["use the force"])))), 1, function () {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("choice.php");
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(3);
      });
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject379 || (_templateObject379 = _taggedTemplateLiteral(["astral pet sweater"]))))) {
      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject380 || (_templateObject380 = _taggedTemplateLiteral(["cracker"]))))) {
        if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("tomeSummons") < 3) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject381 || (_templateObject381 = _taggedTemplateLiteral(["exotic parrot"]))));
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject382 || (_templateObject382 = _taggedTemplateLiteral(["familiar jacks"]))));
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject383 || (_templateObject383 = _taggedTemplateLiteral(["familiar jacks"]))));
        } else {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject384 || (_templateObject384 = _taggedTemplateLiteral(["baby bugged bugbear"]))));
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("arena.php");
        }
      } else (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject385 || (_templateObject385 = _taggedTemplateLiteral(["exotic parrot"]))));
    } else (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject386 || (_templateObject386 = _taggedTemplateLiteral(["shorter-order cook"]))));

    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject387 || (_templateObject387 = _taggedTemplateLiteral(["short stack of pancakes"]))))) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject388 || (_templateObject388 = _taggedTemplateLiteral(["shortly stacked"]))));
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

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject389 || (_templateObject389 = _taggedTemplateLiteral(["do you crush what i crush"]))))) {
      if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject390 || (_templateObject390 = _taggedTemplateLiteral(["holiday yoked"])))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject391 || (_templateObject391 = _taggedTemplateLiteral(["soft green echo eyedrop antidote"]))))) {
        (0,libram__WEBPACK_IMPORTED_MODULE_2__.uneffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject392 || (_templateObject392 = _taggedTemplateLiteral(["holiday yoked"]))));
      }

      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject393 || (_templateObject393 = _taggedTemplateLiteral(["holiday yoked"]))))) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject394 || (_templateObject394 = _taggedTemplateLiteral(["ghost of crimbo carols"]))));
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();

        if ((0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.horsery)().includes("pale")) {
          (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.horse)("dark");
        }

        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject395 || (_templateObject395 = _taggedTemplateLiteral(["the dire warren"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject396 || (_templateObject396 = _taggedTemplateLiteral(["feel hatred"])))));
      }
    }

    (0,libram__WEBPACK_IMPORTED_MODULE_2__.$effects)(_templateObject397 || (_templateObject397 = _taggedTemplateLiteral(["Carol of the Bulls, Song of the North, Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, Tenacity of the Snapper, Billiards Belligerence"]))).forEach(function (effect) {
      return (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)(effect);
    });
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject398 || (_templateObject398 = _taggedTemplateLiteral(["frenzied, bloody"]))));
    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject399 || (_templateObject399 = _taggedTemplateLiteral(["lov elixir #3"]))))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject400 || (_templateObject400 = _taggedTemplateLiteral(["lov elixir #3"]))));

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_photocopyUsed")) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject401 || (_templateObject401 = _taggedTemplateLiteral(["melodramedary"]))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(1387, 3);
      libram__WEBPACK_IMPORTED_MODULE_2__.Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject402 || (_templateObject402 = _taggedTemplateLiteral(["spit on me"])))).skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject403 || (_templateObject403 = _taggedTemplateLiteral(["use the force"])))).setAutoAttack();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.fax)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject404 || (_templateObject404 = _taggedTemplateLiteral(["ungulith"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject405 || (_templateObject405 = _taggedTemplateLiteral(["photocopied monster"]))));
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.handlingChoice)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(-1);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject406 || (_templateObject406 = _taggedTemplateLiteral(["corrupted marrow"]))));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject407 || (_templateObject407 = _taggedTemplateLiteral(["meteor showered"])))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_meteorShowerUses") < 5) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject408 || (_templateObject408 = _taggedTemplateLiteral(["disembodied hand"]))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject409 || (_templateObject409 = _taggedTemplateLiteral(["weapon"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject410 || (_templateObject410 = _taggedTemplateLiteral(["none"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject411 || (_templateObject411 = _taggedTemplateLiteral(["off-hand"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject412 || (_templateObject412 = _taggedTemplateLiteral(["none"]))));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$slot)(_templateObject413 || (_templateObject413 = _taggedTemplateLiteral(["familiar"]))), (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject414 || (_templateObject414 = _taggedTemplateLiteral(["fourth of may cosplay saber"]))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(1387, 3);
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject415 || (_templateObject415 = _taggedTemplateLiteral(["the neverending party"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject416 || (_templateObject416 = _taggedTemplateLiteral(["meteor shower"])))).skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject417 || (_templateObject417 = _taggedTemplateLiteral(["use the force"])))));
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.handlingChoice)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(-1);
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject418 || (_templateObject418 = _taggedTemplateLiteral(["bow-legged swagger"]))));
    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject419 || (_templateObject419 = _taggedTemplateLiteral(["blessing of the bird"]))));
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

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject420 || (_templateObject420 = _taggedTemplateLiteral(["Simmering"]))));
    (0,libram__WEBPACK_IMPORTED_MODULE_2__.$effects)(_templateObject421 || (_templateObject421 = _taggedTemplateLiteral(["Pisces in the Skyces, Carol of the Hells, Arched Eyebrow of the Archmage, Song of Sauce, We're All Made of Starfish"]))).forEach(function (effect) {
      return (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)(effect);
    });

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_cargoPocketEmptied")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("cargo 177");
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject422 || (_templateObject422 = _taggedTemplateLiteral(["Sigils of Yeg"]))));
    }

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject423 || (_templateObject423 = _taggedTemplateLiteral(["LOV Elixir #6"])))) > 0) (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject424 || (_templateObject424 = _taggedTemplateLiteral(["The Magic of LOV"]))));
    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("tomeSummons") < 3) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject425 || (_templateObject425 = _taggedTemplateLiteral(["summon sugar sheets"]))));
    if ((0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject426 || (_templateObject426 = _taggedTemplateLiteral(["sugar sheet"]))))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject427 || (_templateObject427 = _taggedTemplateLiteral(["sugar chapeau"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("shop.php?whichshop=lathe");

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject428 || (_templateObject428 = _taggedTemplateLiteral(["flimsy hardwood scraps"])))) > 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.create)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject429 || (_templateObject429 = _taggedTemplateLiteral(["weeping willow wand"]))));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("briefcase enchantment spell");

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_madTeaParty")) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_viplounge.php?action=lookingglass&whichfloor=2");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("acquire mariachi hat");
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject430 || (_templateObject430 = _taggedTemplateLiteral(["Full Bottle in front of Me"]))));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject431 || (_templateObject431 = _taggedTemplateLiteral(["Spirit of Cayenne"]))));

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject432 || (_templateObject432 = _taggedTemplateLiteral(["flask of baconstone juice"])))) > 0) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject433 || (_templateObject433 = _taggedTemplateLiteral(["Baconstoned"]))));
    }

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject434 || (_templateObject434 = _taggedTemplateLiteral(["saucefingers"])))) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__.$class)(_templateObject435 || (_templateObject435 = _taggedTemplateLiteral(["sauceror"]))) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLevel)() >= 15) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject436 || (_templateObject436 = _taggedTemplateLiteral(["mini-adventurer"]))));
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.horse)("dark");
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.setChoice)(768, 4);
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject437 || (_templateObject437 = _taggedTemplateLiteral(["the dire warren"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject438 || (_templateObject438 = _taggedTemplateLiteral(["feel hatred"])))), function () {
        return (0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("miniAdvClass") === 0;
      });
    }

    (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.ensureInnerElf)();

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.have)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$effect)(_templateObject439 || (_templateObject439 = _taggedTemplateLiteral(["meteor showered"]))))) {
      (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.uniform)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject440 || (_templateObject440 = _taggedTemplateLiteral(["melodramedary"]))));

      if (!(0,libram__WEBPACK_IMPORTED_MODULE_2__.get)("_photocopyUsed")) {
        libram__WEBPACK_IMPORTED_MODULE_2__.Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject441 || (_templateObject441 = _taggedTemplateLiteral(["spit on me"])))).trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject442 || (_templateObject442 = _taggedTemplateLiteral(["meteor shower"])))).skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject443 || (_templateObject443 = _taggedTemplateLiteral(["use the force"])))).setAutoAttack();
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.fax)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$monster)(_templateObject444 || (_templateObject444 = _taggedTemplateLiteral(["ungulith"]))));
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject445 || (_templateObject445 = _taggedTemplateLiteral(["photocopied monster"]))));
        if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.handlingChoice)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(-1);
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject446 || (_templateObject446 = _taggedTemplateLiteral(["corrupted marrow"]))));
      } else {
        (0,_phredhccs_lib__WEBPACK_IMPORTED_MODULE_1__.advMacroAA)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$location)(_templateObject447 || (_templateObject447 = _taggedTemplateLiteral(["the dire warren"]))), libram__WEBPACK_IMPORTED_MODULE_2__.Macro.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject448 || (_templateObject448 = _taggedTemplateLiteral(["spit on me"])))).trySkill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject449 || (_templateObject449 = _taggedTemplateLiteral(["meteor shower"])))).skill((0,libram__WEBPACK_IMPORTED_MODULE_2__.$skill)(_templateObject450 || (_templateObject450 = _taggedTemplateLiteral(["use the force"])))));
        if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.handlingChoice)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(-1);
      }
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(3, (0,libram__WEBPACK_IMPORTED_MODULE_2__.$item)(_templateObject451 || (_templateObject451 = _taggedTemplateLiteral(["obsidian nutcracker"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject452 || (_templateObject452 = _taggedTemplateLiteral(["disembodied hand"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("spell damage", false);
    var handTurns = 60 - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("spell damage") / 50 + 0.001) - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("spell damage percent") / 50 + 0.001);
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject453 || (_templateObject453 = _taggedTemplateLiteral(["left-hand man"]))));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)("spell damage", false);
    var manTurns = 60 - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("spell damage") / 50 + 0.001) - Math.floor((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("spell damage percent") / 50 + 0.001);
    var spellFamiliar = handTurns > manTurns ? (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject454 || (_templateObject454 = _taggedTemplateLiteral(["left-hand man"]))) : (0,libram__WEBPACK_IMPORTED_MODULE_2__.$familiar)(_templateObject455 || (_templateObject455 = _taggedTemplateLiteral(["disembodied hand"])));
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
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = "./src/phredhccs.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;