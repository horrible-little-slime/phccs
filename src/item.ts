import {
    cliExecute,
    create,
    equip,
    getFuel,
    getWorkshed,
    myClass,
    numericModifier,
    use,
    useFamiliar,
    visitUrl,
} from "kolmafia";
import {
    $class,
    $effect,
    $familiar,
    $item,
    $location,
    $skill,
    $slot,
    CommunityService,
    get,
    have,
} from "libram";
import { itemOutfit } from "./outfits";
import Macro from "./combat";
import {
    advMacroAA,
    burnLibrams,
    ensureEffect,
    fuelUp,
    horse,
    synthItem,
    useDefaultFamiliar,
} from "./lib";

const predictor = () => CommunityService.BoozeDrop.prediction;

function prelude() {
    horse("dark");
}

function castBuffs() {
    if (!have($effect`Synthesis: Collection`)) synthItem();
    cliExecute("shrug ode");
    ensureEffect($effect`Fat Leon's Phat Loot Lyric`);
    ensureEffect($effect`The Spirit of Taking`);
    ensureEffect($effect`items.enh`);

    if (getWorkshed() === $item`Asdon Martin keyfob` && !have($effect`Driving Observantly`)) {
        if (getFuel() < 37) fuelUp();
        cliExecute("asdonmartin drive observantly");
    }

    if (!have($effect`I See Everything Thrice!`)) {
        if (!have($item`government`)) {
            if (!have($item`anticheese`)) {
                visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse");
            }
            if (have($item`government cheese`)) {
                create(1, $item`government`);
            }
        }
        if (have($item`government`)) {
            use(1, $item`government`);
        }
    }

    if (myClass() === $class`Pastamancer` && !get("_barrelPrayer")) {
        cliExecute("barrelprayer buff");
    }
    if (have($item`Salsa Caliente™ candle`)) use($item`Salsa Caliente™ candle`);
    if (have($item`lavender candy heart`)) ensureEffect($effect`Heart of Lavender`);
}

function batForm() {
    if (
        get("_latteRefillsUsed") < 3 &&
        numericModifier($item`latte lovers member's mug`, "Item Drop") < 20
    ) {
        const latte = `pumpkin ${get("latteUnlocks").includes("carrot") ? "carrot " : "vanilla "}${
            get("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon"
        }`;
        if (latte !== "") {
            cliExecute(`latte refill ${latte}`);
        }
    }
    if (!have($effect`Bat-Adjacent Form`)) {
        const run = Macro.skill($skill`Become a Bat`);
        if (!get("_latteBanishUsed")) {
            useDefaultFamiliar(false);
            equip($slot`off-hand`, $item`latte lovers member's mug`);
            equip($slot`back`, $item`vampyric cloake`);
            run.skill($skill`Throw Latte on Opponent`);
        } else {
            useFamiliar($familiar`Frumious Bandersnatch`);
            ensureEffect($effect`Ode to Booze`);
            run.step("runaway");
        }
        advMacroAA($location`The Dire Warren`, run);
    }
    if (
        get("_latteRefillsUsed") < 3 &&
        numericModifier($item`latte lovers member's mug`, "Item Drop") < 20
    ) {
        const latte = `pumpkin ${get("latteUnlocks").includes("carrot") ? "carrot" : "vanilla"} ${
            get("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon"
        }`;
        if (latte !== "") {
            cliExecute(`latte refill ${latte}`);
        }
    }
}

function testPrep() {
    if (!get("_steelyEyedSquintUsed")) {
        ensureEffect($effect`Steely-Eyed Squint`);
    }
    useFamiliar($familiar`Trick-or-Treating Tot`);
    itemOutfit.dress();
    if (predictor() > 1) ensureEffect($effect`Nearly All-Natural`);
}

export default function itemTest(): void {
    prelude();
    castBuffs();
    batForm();
    testPrep();
    if (predictor() > 1) throw "Failed to cap item";
    burnLibrams();
}
