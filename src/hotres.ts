import {
    cliExecute,
    create,
    eat,
    equip,
    getFuel,
    handlingChoice,
    haveEffect,
    maximize,
    myHp,
    myMaxhp,
    myMp,
    numericModifier,
    runChoice,
    use,
    useFamiliar,
    useSkill,
} from "kolmafia";
import { $effect, $familiar, $item, $location, $skill, $slot, get, have, Macro } from "libram";
import { universalWeightBuffs } from "./familiarweight";
import { advMacroAA, ensureEffect, fuelUp, horse, setChoice, tryHead } from "./lib";
import uniform, { hotresOutfit } from "./outfits";
const predictor = () => 60 - numericModifier("hot resistance");

function castBuffs() {
    universalWeightBuffs();

    tryHead($effect`Hot-Headed`);

    ensureEffect($effect`Elemental Saucesphere`);
    ensureEffect($effect`Astral Shell`);
    ensureEffect($effect`Feeling Peaceful`);
    if (have($item`scroll of Protection from Bad Stuff`)) {
        ensureEffect($effect`Protection from Bad Stuff`);
    }

    if (!have($item`meteorite guard`) && have($item`metal meteoroid`)) {
        create(1, $item`meteorite guard`);
    }
}

function thisFireIsOutOfControl() {
    if (get("_saberForceUses") < 5 && !have($effect`Fireproof Foam Suit`)) {
        uniform();

        equip($slot`off-hand`, $item`industrial fire extinguisher`);
        useFamiliar($familiar`none`);
        setChoice(1387, 3);
        advMacroAA(
            $location`The Dire Warren`,

            Macro.skill($skill`Fire Extinguisher: Foam Yourself`).skill($skill`Use the Force`),

            () => !have($effect`Fireproof Foam Suit`),
            () => {
                if (handlingChoice()) runChoice(-1);
            }
        );
    }
}

function deepDarkVisions() {
    horse("pale");
    useFamiliar($familiar`Exotic Parrot`);
    if (!have($item`astral pet sweater`) && get("tomeSummons") < 3) {
        create(1, $item`box of Familiar Jacks`);
        use(1, $item`box of Familiar Jacks`);
    }

    maximize("spooky res", false);
    while (
        have($skill`Deep Dark Visions`) &&
        haveEffect($effect`Visions of the Deep Dark Deeps`) < 30 &&
        have($item`magical sausage casing`)
    ) {
        if (myMp() < 20 && have($item`magical sausage casing`)) {
            create(1, $item`magical sausage`);
            eat(1, $item`magical sausage`);
        }
        while (myHp() < myMaxhp()) {
            useSkill(1, $skill`Cannelloni Cocoon`);
        }
        if (myMp() < 100 && have($item`magical sausage casing`)) {
            create(1, $item`magical sausage`);
            eat(1, $item`magical sausage`);
        }
        if (Math.round(numericModifier("spooky resistance")) < 10) {
            ensureEffect($effect`Does It Have a Skull In There??`);
            if (Math.round(numericModifier("spooky resistance")) < 10) {
                throw "Not enough spooky res for Deep Dark Visions.";
            }
        }
        useSkill(1, $skill`Deep Dark Visions`);
    }
}

function testPrep() {
    hotresOutfit();
    const improvements = [
        () => {
            while (getFuel() < 37) fuelUp();
            cliExecute("asdonmartin drive safely");
        },
        () => ensureEffect($effect`Amazing`),
    ];
    for (const improvement of improvements) {
        if (predictor() > 1) improvement();
    }
}

export default function hotTest(): number {
    castBuffs();
    thisFireIsOutOfControl();
    deepDarkVisions();
    testPrep();
    return predictor();
}
