import {
    cliExecute,
    create,
    familiarWeight,
    maximize,
    myFamiliar,
    runChoice,
    use,
    useFamiliar,
    visitUrl,
    weightAdjustment,
} from "kolmafia";
import { $effect, $familiar, $item, $location, $skill, get, have, Macro, set } from "libram";
import {
    advMacroAA,
    ensureEffect,
    horse,
    setChoice,
    tryHead,
    uniform,
    useDefaultFamiliar,
} from "./phredhccs-lib";

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
        } else {
            useFamiliar($familiar`Baby Bugged Bugbear`);
            visitUrl("arena.php");
        }
    }
}

function takeAShower() {
    useDefaultFamiliar(false);
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
    if (have($item`cracker`)) useFamiliar($familiar`Exotic Parrot`);
    else useFamiliar($familiar`Baby Bugged Bugbear`);
    maximize("Familiar Weight", false);
    if (have($item`silver face paint`)) ensureEffect($effect`Robot Friends`);
}

export default function familiarTest(): number {
    universalWeightBuffs();
    gearAndUncommonBuffs();
    takeAShower();
    testPrep();
    return 60 - Math.floor((familiarWeight(myFamiliar()) + weightAdjustment()) / 5);
}
