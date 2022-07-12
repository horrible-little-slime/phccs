import {
    availableAmount,
    buy,
    canEquip,
    cliExecute,
    create,
    handlingChoice,
    inHardcore,
    itemAmount,
    myClass,
    myLevel,
    retrieveItem,
    runChoice,
    storageAmount,
    takeStorage,
    useFamiliar,
    useSkill,
    visitUrl,
} from "kolmafia";
import {
    $class,
    $effect,
    $effects,
    $familiar,
    $item,
    $items,
    $location,
    $skill,
    // CommunityService,
    DaylightShavings,
    get,
    getSaleValue,
    have,
    set,
} from "libram";
import Macro from "./combat";
import {
    advMacroAA,
    burnLibrams,
    chefstaves,
    ensureEffect,
    ensureInnerElf,
    horse,
    setChoice,
    unequip,
} from "./lib";
import uniform, { spellOutfit } from "./outfits";

// const predictor = () => CommunityService.SpellDamage.prediction;

function castBuffs() {
    ensureEffect($effect`Simmering`);
    $effects`Pisces in the Skyces, Carol of the Hells, Arched Eyebrow of the Archmage, Song of Sauce, We're All Made of Starfish, Jackasses' Symphony of Destruction`.forEach(
        (effect) => ensureEffect(effect)
    );

    if (
        !get("_cargoPocketEmptied") &&
        !$items`sizzling desk bell, frost-rimed desk bell, uncanny desk bell, nasty desk bell, greasy desk bell`.some(
            (item) => getSaleValue(item) > 4 * get("valueOfAdventure")
        )
    ) {
        cliExecute("cargo 177");
        ensureEffect($effect`Sigils of Yeg`);
    }

    if (availableAmount($item`LOV Elixir #6`) > 0) ensureEffect($effect`The Magic of LOV`);

    if (
        get("tomeSummons") < 3 &&
        $items`astral chapeau, sugar chapeau`.every((item) => !have(item))
    ) {
        useSkill(1, $skill`Summon Sugar Sheets`);
        if (have($item`sugar sheet`)) create(1, $item`sugar chapeau`);
    }
    visitUrl("shop.php?whichshop=lathe");
    if (availableAmount($item`flimsy hardwood scraps`) > 0 && inHardcore()) {
        create(1, $item`weeping willow wand`);
    }

    if (
        inHardcore() ||
        !$items`meteorite necklace, meteorite ring, meteorite fragment, meteorite earring`.some(
            (item) => have(item)
        )
    ) {
        cliExecute("Briefcase.ash enchantment spell");
    }

    if (!get("_madTeaParty")) {
        visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2");
        cliExecute("acquire mariachi hat");
        ensureEffect($effect`Full Bottle in front of Me`);
    }

    useSkill(1, $skill`Spirit of Cayenne`);

    if (availableAmount($item`flask of baconstone juice`) > 0) {
        ensureEffect($effect`Baconstoned`);
    }
    if (myClass() === $class`Sauceror` && get("_barrelPrayer")) cliExecute("barrelprayer buff");
}

function fingies() {
    if (
        !have($effect`Saucefingers`) &&
        myClass() === $class`Pastamancer` &&
        myLevel() >= 15 &&
        have($familiar`Mini-Adventurer`)
    ) {
        useFamiliar($familiar`Mini-Adventurer`);
        horse("dark");
        uniform();
        setChoice(768, 4);
        advMacroAA(
            $location`The Dire Warren`,
            Macro.skill($skill`Feel Hatred`),
            () => !have($effect`Saucefingers`)
        );
    }
}

function shower() {
    useFamiliar($familiar`none`);
    if (!have($effect`Meteor Showered`) && get("_meteorShowerUses") < 5) {
        uniform();
        setChoice(1387, 3);
        advMacroAA(
            $location`The Dire Warren`,
            Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`),
            () => !have($effect`Meteor Showered`),
            () => {
                if (handlingChoice()) runChoice(-1);
            }
        );

        set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
    }
}

function testPrep() {
    if (!inHardcore()) {
        const meteor = $items`meteorite ring, meteorite fragment, meteorite earring`.find((item) =>
            have(item)
        );
        if (meteor) {
            unequip(meteor);
            retrieveItem(1, $item`tenderizing hammer`);
            retrieveItem(1, $item`jewelry-making pliers`);
            cliExecute(`smash ${meteor}`);
            cliExecute(`make ${$item`meteorite necklace`}`);
        }

        if (
            canEquip($item`Staff of the Roaring Hearth`) &&
            storageAmount($item`Staff of the Roaring Hearth`) >= 1 &&
            itemAmount($item`Staff of the Roaring Hearth`) === 0
        ) {
            takeStorage($item`Staff of the Roaring Hearth`, 1);
        } else if (chefstaves.every((staff) => itemAmount(staff) === 0)) {
            const staff = chefstaves.find((chefstave) => storageAmount(chefstave) >= 1);
            if (staff) takeStorage(staff, 1);
        }
    }

    if (!have($item`Abracandalabra`) && !have($item`obsidian nutcracker`) && inHardcore()) {
        buy($item`obsidian nutcracker`);
    }

    spellOutfit.dress();
}

export default function spellTest(): 1 {
    castBuffs();
    fingies();
    uniform(
        ...(myClass() === $class`Sauceror` && !DaylightShavings.hasBuff()
            ? $items`Daylight Shavings Helmet`
            : [])
    );
    ensureInnerElf();
    shower();
    testPrep();
    burnLibrams();
    return 1;
}
