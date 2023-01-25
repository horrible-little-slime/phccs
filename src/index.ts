import BoozeDrop from "./boozedrop";
import CoilWire from "./coil wire";
import Drink from "./drinking";
import { CSEngine } from "./engine";
import FamiliarWeight from "./familiarweight";
import HotRes from "./hotres";
import Level from "./level";
import Noncombat from "./noncombat";
import Prologue from "./prologue";
import Spell from "./spell";
import { Hitpoints, Moxie, Muscle, Mysticality } from "./stattests";
import Weapon from "./weapon";
import { sinceKolmafiaRevision } from "libram";

sinceKolmafiaRevision(27102);
CSEngine.runTests(
    Prologue,
    CoilWire,
    Level,
    Moxie,
    Muscle,
    Hitpoints,
    Mysticality,
    Drink,
    HotRes,
    Noncombat,
    FamiliarWeight,
    Weapon,
    Spell,
    BoozeDrop
);
