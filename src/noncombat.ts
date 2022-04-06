import { availableAmount, buy, cliExecute, equip, getFuel, use } from "kolmafia";
import {
    $coinmaster,
    $effect,
    $item,
    $slot,
    AsdonMartin,
    CommunityService,
    get,
    have,
} from "libram";
import { universalWeightBuffs } from "./familiarweight";
import { burnLibrams, ensureEffect, fuelUp, horse } from "./lib";
import { noncombatOutfit } from "./outfits";

const predictor = () => CommunityService.Noncombat.prediction - 6;

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

function testPrep() {
    noncombatOutfit();
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
    testPrep();
    if (predictor() > 1) throw "Failed to cap noncombat";
    burnLibrams();
}
