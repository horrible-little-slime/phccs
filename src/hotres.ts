import {
    cliExecute,
    create,
    getFuel,
    handlingChoice,
    haveEffect,
    myHp,
    myMaxhp,
    myMp,
    numericModifier,
    runChoice,
    use,
    useFamiliar,
    useSkill,
} from "kolmafia";
import {
    $effect,
    $familiar,
    $item,
    $items,
    $location,
    $skill,
    $slot,
    BeachComb,
    get,
    have,
} from "libram";
import Macro from "./combat";
import { universalWeightBuffs } from "./familiarweight";
import { advMacroAA, ensureEffect, ensureMp, fuelUp, horse, setChoice } from "./lib";
import uniform, { hotresOutfit, Outfit } from "./outfits";
const predictor = () => 60 - numericModifier("hot resistance");

function castBuffs() {
    universalWeightBuffs();

    BeachComb.tryHead($effect`Hot-Headed`);

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
        uniform([$item`industrial fire extinguisher`, $slot`off-hand`]);
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
    cliExecute("retrocape vampire hold");
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $item`Iunion Crown`],
            [$slot`shirt`, $items`denim jacket`],
            [$slot`back`, $item`unwrapped knock-off retro superhero cape`],
            [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
            [$slot`off-hand`, $item`familiar scrapbook`],
            [$slot`pants`, $item`Cargo Cultist Shorts`],
            [$slot`familiar`, $items`cracker`],
            [$slot`acc1`, $item`your cowboy boots`],
        ]),
        $familiar`Exotic Parrot`
    ).dress();
    while (
        have($skill`Deep Dark Visions`) &&
        haveEffect($effect`Visions of the Deep Dark Deeps`) < 30 &&
        (have($item`magical sausage casing`) || myMp() >= 100)
    ) {
        while (myHp() < myMaxhp()) {
            ensureMp(20);
            useSkill(1, $skill`Cannelloni Cocoon`);
        }
        ensureMp(100);
        if (Math.round(numericModifier("spooky resistance")) < 10) {
            ensureEffect($effect`Does It Have a Skull In There??`);
            if (Math.round(numericModifier("spooky resistance")) < 10) {
                throw "Not enough spooky res for Deep Dark Visions.";
            }
        }
        useSkill(1, $skill`Deep Dark Visions`);
        ensureMp(100);
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
