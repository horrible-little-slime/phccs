import {
    buy,
    cliExecute,
    create,
    eat,
    equip,
    getFuel,
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
    visitUrl,
} from "kolmafia";
import { $effect, $familiar, $item, $location, $skill, $slot, get, have, Macro } from "libram";
import { universalWeightBuffs } from "./familiarweight";
import {
    advMacroAA,
    ensureEffect,
    fuelUp,
    horse,
    tryHead,
    useDefaultFamiliar,
} from "./phredhccs-lib";
import uniform, { hotresOutfit } from "./outfits";
const predictor = () => 60 - numericModifier("hot resistance");

function castBuffs() {
    universalWeightBuffs();

    tryHead($effect`Hot-Headed`);

    if (!have($item`tenderizing hammer`)) {
        buy(1, $item`tenderizing hammer`);
    }
    cliExecute("smash * ratty knitted cap");
    cliExecute("smash * red-hot sausage fork");
    cliExecute("smash * smoldering bagel punch");
    if (!have($effect`Sleazy Hands`)) {
        if (!have($item`lotion of sleaziness`)) create(1, $item`lotion of sleaziness`);
        if (have($item`lotion of sleaziness`)) use(1, $item`lotion of sleaziness`);
    }
    if (!have($effect`Flame-Retardant Trousers`) && have($item`hot powder`)) {
        use(1, $item`hot powder`);
    }

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
    uniform();
    useDefaultFamiliar(false);
    // eslint-disable-next-line libram/verify-constants
    if (get("_saberForceUses") < 5 && !have($effect`Fireproof Foam Suit`)) {
        // eslint-disable-next-line libram/verify-constants
        equip($slot`off-hand`, $item`industrial fire extinguisher`);
        useDefaultFamiliar(false);
        advMacroAA(
            $location`Noob Cave`,
            // eslint-disable-next-line libram/verify-constants
            Macro.skill($skill`Fire Extinguisher: Foam Yourself`).skill($skill`Use the Force`),
            // eslint-disable-next-line libram/verify-constants
            () => !have($effect`Fireproof Foam Suit`),
            () => {
                visitUrl("choice.php");
                runChoice(3);
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
        haveEffect($effect`Visions of the Deep Dark Deeps`) < 30
    ) {
        if (myMp() < 20) {
            create(1, $item`magical sausage`);
            eat(1, $item`magical sausage`);
        }
        while (myHp() < myMaxhp()) {
            useSkill(1, $skill`Cannelloni Cocoon`);
        }
        if (myMp() < 100) {
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
