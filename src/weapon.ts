import {
    cliExecute,
    equip,
    handlingChoice,
    inHardcore,
    numericModifier,
    retrieveItem,
    runChoice,
    use,
    useFamiliar,
    useSkill,
} from "kolmafia";
import {
    $effect,
    $effects,
    $familiar,
    $item,
    $items,
    $location,
    $monster,
    $skill,
    $slot,
    BeachComb,
    get,
    have,
    set,
    uneffect,
} from "libram";
import {
    advMacroAA,
    ensureEffect,
    ensureInnerElf,
    fax,
    horse,
    horsery,
    setChoice,
    setClan,
    unequip,
    useDefaultFamiliar,
} from "./lib";
import Macro from "./combat";
import uniform, { weaponOutfit } from "./outfits";

const predictor = () =>
    60 -
    Math.floor(numericModifier("weapon damage") / 25 + 0.001) -
    Math.floor(numericModifier("weapon damage percent") / 25 + 0.001);

function getCrushed() {
    if (!have($effect`Do You Crush What I Crush?`)) {
        if (have($effect`Holiday Yoked`) && have($item`soft green echo eyedrop antidote`)) {
            uneffect($effect`Holiday Yoked`);
        }
        if (!have($effect`Holiday Yoked`)) {
            useFamiliar($familiar`Ghost of Crimbo Carols`);
            uniform();
            if (horsery().includes("pale")) {
                horse("dark");
            }
            advMacroAA($location`The Dire Warren`, Macro.skill($skill`Feel Hatred`));
        }
    }
}

function castBuffs() {
    $effects`Carol of the Bulls, Song of the North, Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, Tenacity of the Snapper, Billiards Belligerence, Blessing of the Bird, Jackasses' Symphony of Destruction`.forEach(
        (effect) => ensureEffect(effect)
    );
    ensureEffect($effect`Frenzied, Bloody`);
    if (have($item`LOV Elixir #3`)) use($item`LOV Elixir #3`);
    BeachComb.tryHead($effect`Lack of Body-Building`);
}

function forceSpit() {
    if (!get("_photocopyUsed") && inHardcore()) {
        uniform();
        useFamiliar($familiar`Melodramedary`);
        setChoice(1387, 3);
        Macro.trySkill($skill`%fn, spit on me!`)
            .skill($skill`Use the Force`)
            .setAutoAttack();
        try {
            setClan(get("phccs_mainClan", "Beldungeon"));
            fax($monster`ungulith`);
        } finally {
            setClan(get("phccs_mainClan", "Alliance From Heck"));
        }
        use($item`photocopied monster`);
        if (handlingChoice()) runChoice(-1);
        set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
    } else {
        uniform();
        useFamiliar($familiar`Melodramedary`);
        setChoice(1387, 3);
        advMacroAA(
            $location`The Neverending Party`,
            Macro.trySkill($skill`%fn, spit on me!`)
                .trySkill($skill`Meteor Shower`)
                .skill($skill`Use the Force`)
        );
        if (handlingChoice()) runChoice(-1);
        set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
    }
}

function kungFuMeteors() {
    if (!have($effect`Meteor Showered`) && get("_meteorShowerUses") < 5) {
        uniform();
        if (have($familiar`Disembodied Hand`)) {
            useFamiliar($familiar`Disembodied Hand`);
            equip($slot`weapon`, $item`none`);
            equip($slot`off-hand`, $item`none`);
            equip($slot`familiar`, $item`Fourth of May Cosplay Saber`);
        } else {
            useDefaultFamiliar(false);
        }
        setChoice(1387, 3);
        advMacroAA(
            $location`The Neverending Party`,
            Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
        );
        if (handlingChoice()) runChoice(-1);
        set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
    }
}

function testPrep() {
    if (have($item`corrupted marrow`)) use($item`corrupted marrow`);
    if (!get("_bowleggedSwaggerUsed")) useSkill($skill`Bow-Legged Swagger`);
    useFamiliar($familiar`Disembodied Hand`);

    if (!inHardcore()) {
        const meteor = $items`meteorite necklace, meteorite fragment, meteorite earring`.find(
            (item) => have(item)
        );
        if (meteor) {
            unequip(meteor);
            retrieveItem(1, $item`tenderizing hammer`);
            retrieveItem(1, $item`jewelry-making pliers`);
            cliExecute(`smash ${meteor}`);
            cliExecute(`make ${$item`meteorite ring`}`);
        }
    }
    weaponOutfit();
}

export default function weaponTest(): number {
    castBuffs();
    getCrushed();
    forceSpit();
    ensureInnerElf();
    kungFuMeteors();
    testPrep();
    if (predictor() > 1) throw "Failed to cap weapon damage!";
    return predictor();
}
