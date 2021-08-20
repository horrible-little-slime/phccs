import {
    cliExecute,
    create,
    useFamiliar,
    use,
    visitUrl,
    runChoice,
    maximize,
    familiarWeight,
    myFamiliar,
    weightAdjustment,
} from "kolmafia";
import { $effect, get, have, $item, $familiar, $location, Macro, $skill, set } from "libram";
import {
    ensureEffect,
    useDefaultFamiliar,
    horse,
    uniform,
    setChoice,
    advMacroAA,
    tryHead,
} from "./phredhccs-lib";

export function universalWeightBuffs() {
    ensureEffect($effect`Empathy`);
    ensureEffect($effect`Leash of Linguini`);
    ensureEffect($effect`Blood Bond`);
    ensureEffect($effect`Billiards Belligerence`);

    if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");
    if (!get("_freePillKeeperUsed")) {
        cliExecute("pillkeeper familiar");
    }
    if (!have($effect`puzzle champ`)) {
        cliExecute("witchess");
    }
    
    tryHead($effect`do i know you from somewhere`);

    if (have($item`green candy heart`)) ensureEffect($effect`Heart of Green`);
}

function gearAndUncommonBuffs() {
    if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");
    if (have($item`burning newspaper`)) create(1, $item`burning paper crane`);
    if (have($item`short stack of pancakes`)) ensureEffect($effect`shortly stacked`);
    if (!have($item`cracker`)) {
        if (get("tomeSummons") < 3) {
            useFamiliar($familiar`exotic parrot`);
            create(1, $item`familiar jacks`);
            use(1, $item`familiar jacks`);
        } else {
            useFamiliar($familiar`baby bugged bugbear`);
            visitUrl("arena.php");
        }
    }
}

function takeAShower() {
    useDefaultFamiliar(false);
    horse("dark");
    uniform();
    setChoice(1387, 3);
    if (get("_meteorShowerUses") < 5 && !have($effect`meteor showered`)) {
        advMacroAA(
            $location`the dire warren`,
            Macro.skill($skill`meteor shower`).skill($skill`use the force`),
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
    if (have($item`cracker`)) useFamiliar($familiar`exotic parrot`);
    else useFamiliar($familiar`baby bugged bugbear`);
    maximize("Familiar Weight", false);
    if (have($item`silver face paint`)) ensureEffect($effect`robot friends`);
}

export default function familiarTest() {
    universalWeightBuffs();
    gearAndUncommonBuffs();
    takeAShower();
    testPrep();
    return 60 - Math.floor((familiarWeight(myFamiliar()) + weightAdjustment()) / 5);
}
