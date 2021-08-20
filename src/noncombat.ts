import {
    numericModifier,
    cliExecute,
    equip,
    haveEffect,
    getFuel,
    useFamiliar,
    visitUrl,
    runCombat,
    runChoice,
    maximize,
    availableAmount,
    buy,
    use,
} from "kolmafia";
import { get, have, $effect, $slot, $item, $familiar, $coinmaster } from "libram";
import { universalWeightBuffs } from "./familiarweight";
import { defaultKill } from "./phccs-macros";
import { ensureEffect, fuelUp, horse, uniform, heal, setChoice } from "./phredhccs-lib";

const predictor = () => 60 - numericModifier("hot resistance");

function castBuffs() {
    universalWeightBuffs();
    ensureEffect($effect`smooth movements`);
    ensureEffect($effect`Billiards Belligerence`);
    ensureEffect($effect`Feeling Lonely`);
    equip($slot`acc3`, $item`powerful glove`);
    ensureEffect($effect`invisible avatar`);
    ensureEffect($effect`Blessing of the bird`);
    if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");

    if (haveEffect($effect`fat leon's phat loot lyric`))
        cliExecute("shrug fat leon's phat loot lyric");
    ensureEffect($effect`sonata of sneakiness`);

    if (!get("_olympicSwimmingPool")) cliExecute("swim sprints");

    while (getFuel() < 37) fuelUp();
    if (!have($effect`driving stealthily`)) cliExecute("asdonmartin drive stealthily");

    horse("dark");
}

function godLobster() {
    if (
        !have($effect`silence of the god lobster`) &&
        get("_godLobsterFights") < 3 &&
        have($item`god lobster's ring`)
    ) {
        useFamiliar($familiar`god lobster`);
        equip($slot`familiar`, $item`god lobster's ring`);
        uniform();
        defaultKill.setAutoAttack();
        heal();
        setChoice(1310, 2);
        visitUrl("main.php?fightgodlobster=1");
        runCombat(defaultKill.toString());
        visitUrl("choice.php");
        runChoice(-1);
    }
}

function testPrep() {
    useFamiliar($familiar`disgeist`);
    maximize("-combat, +equip kremlin", false);
    if (predictor() > 1) {
        if (!have($effect`gummed shoes`)) {
            if (availableAmount($item`cop dollar`) < 10) cliExecute("detective solver.ash");
            buy($coinmaster`Precinct Materiel Division`, 1, $item`shoe gum`);
            use($item`shoe gum`);
        }
    }
}

export default function noncombatTest() {
    castBuffs();
    godLobster();
    testPrep();
    if (predictor() > 1) throw "Failed to cap noncombat";
    return predictor();
}
