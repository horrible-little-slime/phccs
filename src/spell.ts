import {
    numericModifier,
    cliExecute,
    availableAmount,
    useSkill,
    create,
    visitUrl,
    myClass,
    myLevel,
    useFamiliar,
    handlingChoice,
    runChoice,
    buy,
    itemAmount,
    maximize,
} from "kolmafia";
import {
    $effect,
    $effects,
    get,
    $item,
    $skill,
    have,
    $class,
    $familiar,
    $location,
    Macro,
    set,
} from "libram";
import {
    advMacroAA,
    ensureEffect,
    ensureInnerElf,
    horse,
    setChoice,
    uniform,
} from "./phredhccs-lib";

const predictor = () =>
    61 -
    Math.floor(numericModifier("spell damage") / 50 + 0.001) -
    Math.floor(numericModifier("spell damage percent") / 50 + 0.001);

function castBuffs() {
    ensureEffect($effect`Simmering`);
    $effects`Pisces in the Skyces, Carol of the Hells, Arched Eyebrow of the Archmage, Song of Sauce, We're All Made of Starfish`.forEach(
        (effect) => ensureEffect(effect)
    );

    if (!get("_cargoPocketEmptied")) {
        cliExecute("cargo 177");
        ensureEffect($effect`Sigils of Yeg`);
    }

    if (availableAmount($item`LOV Elixir #6`) > 0) ensureEffect($effect`The Magic of LOV`);

    if (get("tomeSummons") < 3) useSkill(1, $skill`summon sugar sheets`);
    if (have($item`sugar sheet`)) create(1, $item`sugar chapeau`);
    visitUrl("shop.php?whichshop=lathe");
    if (availableAmount($item`flimsy hardwood scraps`) > 0) {
        create(1, $item`weeping willow wand`);
    }

    cliExecute("briefcase enchantment spell");

    if (!get("_madTeaParty")) {
        visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2");
        cliExecute("acquire mariachi hat");
        ensureEffect($effect`Full Bottle in front of Me`);
    }

    useSkill(1, $skill`Spirit of Cayenne`);

    if (availableAmount($item`flask of baconstone juice`) > 0) {
        ensureEffect($effect`Baconstoned`);
    }
}

function fingies() {
    if (!have($effect`saucefingers`) && myClass() === $class`pastamancer` && myLevel() >= 15) {
        useFamiliar($familiar`mini-adventurer`);
        horse("dark");
        uniform();
        setChoice(768, 4);
        advMacroAA(
            $location`the dire warren`,
            Macro.externalIf(
                have($effect`cowrruption`) && have($effect`spit upon`),
                Macro.skill("Meteor Shower").skill("Use the Force")
            ).skill($skill`feel hatred`),
            () => have($effect`saucefingers`)
        );
    }
}

function shower() {
    if (!have($effect`meteor showered`) && get("_meteorShowerUses") < 5) {
        uniform();
        setChoice(1387, 3);
        advMacroAA(
            $location`the dire warren`,
            Macro.skill($skill`meteor shower`).skill($skill`use the force`)
        );
        if (handlingChoice()) runChoice(-1);
        set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
    }
}

function testPrep() {
    if (!have($item`obsidian nutcracker`, 2)) {
        buy(2 - itemAmount($item`obsidian nutcracker`), $item`obsidian nutcracker`);
    }
    useFamiliar($familiar`disembodied hand`);
    maximize("spell damage", false);
    const handTurns = predictor();
    useFamiliar($familiar`left-hand man`);
    maximize("spell damage", false);
    const manTurns = predictor();
    if (handTurns > manTurns) {
        useFamiliar($familiar`disembodied hand`);
        maximize("spell damage", false);
    }
}

export default function spellTest() {
    castBuffs();
    fingies();
    ensureInnerElf();
    shower();
    testPrep();
    return predictor();
}
