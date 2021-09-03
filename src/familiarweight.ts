import {
    cliExecute,
    create,
    familiarWeight,
    myFamiliar,
    runChoice,
    use,
    useFamiliar,
    visitUrl,
    weightAdjustment,
} from "kolmafia";
import {
    $effect,
    $familiar,
    $item,
    $location,
    $monster,
    $skill,
    get,
    have,
    Macro,
    set,
    Witchess,
} from "libram";
import { defaultKill } from "./phccs-macros";
import { advMacroAA, ensureEffect, horse, setChoice, tryHead } from "./phredhccs-lib";
import uniform, { famweightOutfit } from "./outfits";

export function universalWeightBuffs(): void {
    ensureEffect($effect`Empathy`);
    ensureEffect($effect`Leash of Linguini`);
    ensureEffect($effect`Blood Bond`);
    ensureEffect($effect`Billiards Belligerence`);

    if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");
    if (!get("_freePillKeeperUsed")) {
        cliExecute("pillkeeper familiar");
    }
    if (!have($effect`Puzzle Champ`)) {
        cliExecute("witchess");
    }

    tryHead($effect`Do I Know You From Somewhere?`);

    if (have($item`green candy heart`)) ensureEffect($effect`Heart of Green`);
}

function gearAndUncommonBuffs() {
    if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");
    if (have($item`burning newspaper`)) create(1, $item`burning paper crane`);
    if (have($item`short stack of pancakes`)) ensureEffect($effect`Shortly Stacked`);
    if (!have($item`cracker`)) {
        if (get("tomeSummons") < 3) {
            useFamiliar($familiar`Exotic Parrot`);
            create(1, $item`box of Familiar Jacks`);
            use(1, $item`box of Familiar Jacks`);
        } else if (have($familiar`Baby Bugged Bugbear`)) {
            useFamiliar($familiar`Baby Bugged Bugbear`);
            visitUrl("arena.php");
        }
    }
}

function familiarStuff() {
    while (
        get("_shortOrderCookCharge") < 11 &&
        5 - Witchess.fightsDone() > 11 - get("_shortOrderCookCharge")
    ) {
        useFamiliar($familiar`Shorter-Order Cook`);
        uniform();
        defaultKill.setAutoAttack();
        Witchess.fightPiece($monster`Witchess Bishop`);
    }
    while (
        get("garbageFireProgress") < 30 &&
        5 - Witchess.fightsDone() > 30 - get("garbageFireProgress")
    ) {
        useFamiliar($familiar`Garbage Fire`);
        uniform();
        defaultKill.setAutoAttack();
        Witchess.fightPiece($monster`Witchess Bishop`);
    }
}

function takeAShower() {
    useFamiliar($familiar`none`);
    horse("dark");
    uniform();
    setChoice(1387, 3);
    if (get("_meteorShowerUses") < 5 && !have($effect`Meteor Showered`)) {
        advMacroAA(
            $location`The Dire Warren`,
            Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`),
            1,
            () => {
                visitUrl("choice.php");
                runChoice(3);
            }
        );
        set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
    }
}

function testPrep() {
    famweightOutfit();
    if (have($item`silver face paint`)) ensureEffect($effect`Robot Friends`);
    while (have($item`love song of icy revenge`) && !have($effect`Cold Hearted`, 20)) {
        use($item`love song of icy revenge`);
    }
}

export default function familiarTest(): number {
    universalWeightBuffs();
    familiarStuff();
    gearAndUncommonBuffs();
    takeAShower();
    testPrep();
    return 60 - Math.floor((familiarWeight(myFamiliar()) + weightAdjustment()) / 5);
}
