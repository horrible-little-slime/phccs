import {
    numericModifier,
    useFamiliar,
    use,
    handlingChoice,
    runChoice,
    equip,
    maximize,
    useSkill,
} from "kolmafia";
import {
    have,
    $effect,
    $item,
    uneffect,
    $familiar,
    $location,
    Macro,
    $skill,
    $effects,
    get,
    $monster,
    $slot,
    set,
} from "libram";
import {
    uniform,
    horsery,
    horse,
    advMacroAA,
    ensureEffect,
    setChoice,
    fax,
    tryHead,
} from "./phredhccs-lib";

const predictor = () =>
    60 -
    Math.floor(numericModifier("weapon damage") / 25 + 0.001) -
    Math.floor(numericModifier("weapon damage percent") / 25 + 0.001);

function getCrushed() {
    if (!have($effect`do you crush what i crush`)) {
        if (have($effect`holiday yoked`) && have($item`soft green echo eyedrop antidote`)) {
            uneffect($effect`holiday yoked`);
        }
        if (!have($effect`holiday yoked`)) {
            useFamiliar($familiar`ghost of crimbo carols`);
            uniform();
            if (horsery().includes("pale")) {
                horse("dark");
            }
            advMacroAA($location`the dire warren`, Macro.skill($skill`feel hatred`));
        }
    }
}

function castBuffs() {
    $effects`Carol of the Bulls, Song of the North, Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, Tenacity of the Snapper, Billiards Belligerence, blessing of the bird`.forEach(
        (effect) => ensureEffect(effect)
    );
    ensureEffect($effect`frenzied, bloody`);
    if (have($item`lov elixir #3`)) use($item`lov elixir #3`);
    tryHead($effect`Lack of Body-Building`);
}

function forceSpit() {
    if (!get("_photocopyUsed")) {
        uniform();
        useFamiliar($familiar`melodramedary`);
        setChoice(1387, 3);
        Macro.trySkill($skill`spit on me`)
            .skill($skill`use the force`)
            .setAutoAttack();
        fax($monster`ungulith`);
        use($item`photocopied monster`);
        if (handlingChoice()) runChoice(-1);
    }
}

function kungFuMeteors() {
    if (!have($effect`meteor showered`) && get("_meteorShowerUses") < 5) {
        useFamiliar($familiar`disembodied hand`);
        uniform();
        equip($slot`weapon`, $item`none`);
        equip($slot`off-hand`, $item`none`);
        equip($slot`familiar`, $item`fourth of may cosplay saber`);
        setChoice(1387, 3);
        advMacroAA(
            $location`the neverending party`,
            Macro.skill($skill`meteor shower`).skill($skill`use the force`)
        );
        if (handlingChoice()) runChoice(-1);
        set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
    }
}

function testPrep() {
    if (have($item`corrupted marrow`)) use($item`corrupted marrow`);
    if (!get("_bowleggedSwaggerUsed")) useSkill($skill`bow-legged swagger`);
    useFamiliar($familiar`disembodied hand`);
    maximize("weapon damage", false);
}

export default function weaponTest() {
    castBuffs();
    getCrushed();
    forceSpit();
    kungFuMeteors();
    if (predictor() > 1) throw "Failed to cap weapon damage!";
    return predictor();
}
