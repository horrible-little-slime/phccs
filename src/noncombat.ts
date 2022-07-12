import {
    availableAmount,
    buy,
    cliExecute,
    equip,
    getFuel,
    runChoice,
    runCombat,
    use,
    useFamiliar,
    visitUrl,
} from "kolmafia";
import {
    $coinmaster,
    $effect,
    $familiar,
    $item,
    $slot,
    AsdonMartin,
    CommunityService,
    get,
    have,
} from "libram";
import Macro from "./combat";
import { universalWeightBuffs } from "./familiarweight";
import { burnLibrams, ensureEffect, fuelUp, heal, horse, setChoice } from "./lib";
import uniform, { noncombatOutfit } from "./outfits";

const predictor = () => CommunityService.Noncombat.prediction;

function castBuffs() {
    universalWeightBuffs();
    ensureEffect($effect`Smooth Movements`);
    ensureEffect($effect`Feeling Lonely`);
    equip($slot`acc3`, $item`Powerful Glove`);
    ensureEffect($effect`Invisible Avatar`);
    ensureEffect($effect`Blessing of the Bird`);
    if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");

    if (have($effect`Fat Leon's Phat Loot Lyric`)) cliExecute("shrug fat leon's phat loot lyric");
    ensureEffect($effect`The Sonata of Sneakiness`);

    if (!get("_olympicSwimmingPool")) cliExecute("swim sprints");

    while (getFuel() < 37) fuelUp();
    AsdonMartin.drive(AsdonMartin.Driving.Stealthily);

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
        Macro.defaultKill().setAutoAttack();
        heal();
        use(3, $item`psychokinetic energy blob`);
        setChoice(1310, 2);
        visitUrl("main.php?fightgodlobster=1");
        runCombat(Macro.defaultKill().toString());
        visitUrl("choice.php");
        runChoice(-1);
    }
}

function testPrep() {
    noncombatOutfit.dress();
    if (predictor() > 1) {
        if (!have($effect`Gummed Shoes`)) {
            if (availableAmount($item`cop dollar`) < 10) cliExecute("Detective Solver.ash");
            buy($coinmaster`Precinct Materiel Division`, 1, $item`shoe gum`);
            use($item`shoe gum`);
        }
    }
}

export default function noncombatTest(): void {
    castBuffs();
    godLobster();
    testPrep();
    if (predictor() > 1) throw "Failed to cap noncombat";
    burnLibrams();
}
