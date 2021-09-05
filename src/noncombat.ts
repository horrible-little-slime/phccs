import {
    availableAmount,
    buy,
    cliExecute,
    equip,
    getFuel,
    haveEffect,
    numericModifier,
    runChoice,
    runCombat,
    use,
    useFamiliar,
    visitUrl,
} from "kolmafia";
import { $coinmaster, $effect, $familiar, $item, $slot, get, have } from "libram";
import { universalWeightBuffs } from "./familiarweight";
import { defaultKill } from "./phccs-macros";
import { ensureEffect, fuelUp, heal, horse, setChoice } from "./phredhccs-lib";
import uniform, { noncombatOutfit } from "./outfits";

const predictor = () => 60 + (20 + numericModifier("combat rate")) * 3;

function castBuffs() {
    universalWeightBuffs();
    ensureEffect($effect`Smooth Movements`);
    ensureEffect($effect`Feeling Lonely`);
    equip($slot`acc3`, $item`Powerful Glove`);
    ensureEffect($effect`Invisible Avatar`);
    ensureEffect($effect`Blessing of the Bird`);
    if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");

    if (haveEffect($effect`Fat Leon's Phat Loot Lyric`))
        cliExecute("shrug fat leon's phat loot lyric");
    ensureEffect($effect`The Sonata of Sneakiness`);

    if (!get("_olympicSwimmingPool")) cliExecute("swim sprints");

    while (getFuel() < 37) fuelUp();
    if (!have($effect`Driving Stealthily`)) cliExecute("asdonmartin drive stealthily");

    horse("dark");
}

function godLobster() {
    if (
        !have($effect`Silence of the God Lobster`) &&
        get("_godLobsterFights") < 3 &&
        have($item`God Lobster's Ring`)
    ) {
        useFamiliar($familiar`God Lobster`);
        equip($slot`familiar`, $item`God Lobster's Ring`);
        uniform();
        defaultKill.setAutoAttack();
        heal();
        use(3, $item`psychokinetic energy blob`);
        setChoice(1310, 2);
        visitUrl("main.php?fightgodlobster=1");
        runCombat(defaultKill.toString());
        visitUrl("choice.php");
        runChoice(-1);
    }
}

function testPrep() {
    noncombatOutfit();
    if (predictor() > 1) {
        if (!have($effect`Gummed Shoes`)) {
            if (availableAmount($item`cop dollar`) < 10) cliExecute("detective solver.ash");
            buy($coinmaster`Precinct Materiel Division`, 1, $item`shoe gum`);
            use($item`shoe gum`);
        }
    }
}

export default function noncombatTest(): number {
    castBuffs();
    godLobster();
    testPrep();
    if (predictor() > 1) throw "Failed to cap noncombat";
    return predictor();
}
