import BoozeDrop from "./boozedrop.js";
import CoilWire from "./coilwire.js";
import Drink from "./drinking.js";
import { CSEngine } from "./engine.js";
import FamiliarWeight from "./familiarweight.js";
import HotRes from "./hotres.js";
import Level from "./level.js";
import Noncombat from "./noncombat.js";
import Prologue from "./prologue.js";
import Spell from "./spell.js";
import StatTests from "./stattests.js";
import Weapon from "./weapon.js";
import { sinceKolmafiaRevision } from "libram";

sinceKolmafiaRevision(27102);
CSEngine.runTests(
  Prologue,
  CoilWire,
  Level,
  ...StatTests,
  Drink,
  HotRes,
  Noncombat,
  FamiliarWeight,
  Weapon,
  Spell,
  BoozeDrop,
);
