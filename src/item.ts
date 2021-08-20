import {
    numericModifier,
    availableAmount,
    use,
    cliExecute,
    useSkill,
    myInebriety,
    drink,
    getWorkshed,
    getFuel,
    visitUrl,
    create,
    myClass,
    equip,
    useFamiliar,
    maximize,
} from "kolmafia";
import {
    $item,
    have,
    $effect,
    $skill,
    $class,
    get,
    Macro,
    $slot,
    $familiar,
    $location,
} from "libram";
import {
    horse,
    synthItem,
    ensureEffect,
    fuelUp,
    useDefaultFamiliar,
    advMacroAA,
} from "./phredhccs-lib";

const predictor = () =>
    60 -
    Math.floor(numericModifier("item drop") / 30 + 0.001) -
    Math.floor(numericModifier("booze drop") / 15 + 0.001);

function prelude() {
    horse("dark");
    if (availableAmount($item`astral six-pack`) !== 0) use(1, $item`astral six-pack`);
    if (have($effect`The Magical Mojomuscular Melody`))
        cliExecute("shrug The Magical Mojomuscular Melody");
    useSkill($skill`the ode to booze`);
    while (myInebriety() < 5) {
        drink(1, $item`astral pilsner`);
    }
}

function castBuffs() {
    if (!have($effect`synthesis: collection`)) synthItem();
    cliExecute("shrug ode");
    ensureEffect($effect`fat leon's phat loot lyric`);
    ensureEffect($effect`The Spirit of Taking`);
    ensureEffect($effect`items.enh`);

    if (getWorkshed() === $item`Asdon Martin keyfob` && !have($effect`driving observantly`)) {
        if (getFuel() < 37) fuelUp();
        cliExecute("asdonmartin drive observantly");
    }

    if (!have($effect`I See Everything Thrice`)) {
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

    if (myClass() === $class`pastamancer` && !get("_barrelPrayer")) {
        cliExecute("barrelprayer buff");
    }

    if (have($item`lavender candy heart`)) ensureEffect($effect`heart of lavender`);
}

function batForm() {
    if (
        get("_latteRefillsUsed") < 3 &&
        numericModifier($item`latte lovers member's mug`, "Item Drop") < 20
    ) {
        const latte: string =
            "pumpkin " +
            (get("latteUnlocks").includes("carrot") ? "carrot " : "vanilla ") +
            (get("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon");
        if (latte !== "") {
            cliExecute(`latte refill ${latte}`);
        }
    }
    if (!have($effect`Bat-Adjacent Form`)) {
        const run = Macro.skill($skill`become a bat`);
        if (!get("_latteBanishUsed")) {
            useDefaultFamiliar(false);
            equip($slot`off-hand`, $item`latte lovers member's mug`);
            equip($slot`back`, $item`vampyric cloake`);
            run.skill($skill`throw latte`);
        } else {
            useFamiliar($familiar`frumious bandersnatch`);
            ensureEffect($effect`ode to booze`);
            run.step("runaway");
        }
        advMacroAA($location`dire warren`, run);
    }
    if (
        get("_latteRefillsUsed") < 3 &&
        numericModifier($item`latte lovers member's mug`, "Item Drop") < 20
    ) {
        const latte: string =
            "pumpkin " +
            (get("latteUnlocks").includes("carrot") ? "carrot " : "vanilla ") +
            (get("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon");
        if (latte !== "") {
            cliExecute(`latte refill ${latte}`);
        }
    }
}

function testPrep() {
    if (!get("_steelyEyedSquintUsed")) {
        ensureEffect($effect`steely-eyed squint`);
    }
    useFamiliar($familiar`trick-or-treating tot`);
    maximize(
        "item, 2 booze drop, -equip broken champagne bottle, -equip surprisingly capacious handbag",
        false
    );
    if (predictor() > 1) ensureEffect($effect`nearly all-natural`);
}

export default function itemTest() {
    prelude();
    castBuffs();
    batForm();
    testPrep();
    if (predictor() > 1) throw "Failed to cap item";
    return predictor();
}
