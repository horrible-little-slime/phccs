import {
    cliExecute,
    handlingChoice,
    inHardcore,
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
    BeachComb,
    CombatLoversLocket,
    CommunityService,
    get,
    have,
    set,
    uneffect,
} from "libram";
import {
    advMacroAA,
    burnLibrams,
    ensureEffect,
    ensureInnerElf,
    horse,
    horsery,
    setChoice,
    unequip,
} from "./lib";
import Macro from "./combat";
import uniform, { weaponOutfit } from "./outfits";

const predictor = () => CommunityService.WeaponDamage.prediction;

function getCrushed() {
    if (!have($effect`Do You Crush What I Crush?`)) {
        if (have($effect`Holiday Yoked`) && have($item`soft green echo eyedrop antidote`)) {
            uneffect($effect`Holiday Yoked`);
        }
        if (!have($effect`Holiday Yoked`)) {
            useFamiliar($familiar`Ghost of Crimbo Carols`);
            uniform();
            if (horsery() === "pale") {
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
    uniform();
    useFamiliar($familiar`Melodramedary`);
    setChoice(1387, 3);
    Macro.trySkill($skill`%fn, spit on me!`)
        .trySkill($skill`Meteor Shower`)
        .skill($skill`Use the Force`)
        .setAutoAttack();
    CombatLoversLocket.reminisce($monster`ungulith`);
    if (handlingChoice()) runChoice(-1);
    if (have($effect`Meteor Showered`)) set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
    if (have($effect`Spit Upon`)) set("camelSpit", 0);

    const ungId = $monster`ungulith`.id.toFixed(0);
    const locketIdStrings = get("_locketMonstersFought")
        .split(",")
        .map((x) => x.trim())
        .filter((x) => x.length > 0);
    if (!locketIdStrings.includes(ungId)) {
        locketIdStrings.push(ungId);
        set("_locketMonstersFought", locketIdStrings.join(","));
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

export default function weaponTest(): void {
    castBuffs();
    getCrushed();
    if (inHardcore()) ensureInnerElf();
    forceSpit();
    testPrep();
    if (predictor() > 1) throw "Failed to cap weapon damage!";
    burnLibrams();
}
