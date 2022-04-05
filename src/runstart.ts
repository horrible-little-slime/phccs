import {
    autosell,
    buy,
    cliExecute,
    create,
    eudoraItem,
    inHardcore,
    Item,
    itemAmount,
    myLevel,
    mySpleenUse,
    runChoice,
    storageAmount,
    takeStorage,
    use,
    useFamiliar,
    useSkill,
    visitUrl,
} from "kolmafia";
import {
    $coinmaster,
    $familiar,
    $item,
    $items,
    $skill,
    Clan,
    get,
    have,
    Pantogram,
    SourceTerminal,
} from "libram";
import { setClan, tryUse } from "./lib";

function juiceBar() {
    visitUrl("place.php?whichplace=chateau&action=chateau_desk2");
    autosell(1, $item`gremlin juice`);
}

function toot() {
    visitUrl("tutorial.php?action=toot");
    tryUse(1, $item`letter from King Ralph XI`);
    tryUse(1, $item`pork elf goodies sack`);
    autosell(5, $item`baconstone`);
    autosell(5, $item`hamethyst`);
    if (!have($item`toy accordion`)) {
        buy(1, $item`toy accordion`);
    }
}

function grimoires() {
    if (!get("_grimoireConfiscatorSummons") && have($skill`Summon Confiscated Things`)) {
        useSkill(1, $skill`Summon Confiscated Things`);
        $items`glow-in-the-dark necklace, "KICK ME" sign, LCD game: Burger Belt, LCD game: Food Eater, LCD game: Garbage River`.forEach(
            (item) => autosell(1, item)
        );
    }
    if (!get("grimoire2Summons") && have($skill`Summon Tasteful Items`)) {
        useSkill(1, $skill`Summon Tasteful Items`);
        $items`black-and-blue light, blue plasma ball, cheap studded belt, flavored foot massage oil, foam dart, Loudmouth Larry Lamprey, personal massager, personalized coffee mug, stick-on eyebrow piercing`.forEach(
            (item) => autosell(5, item)
        );
    }
    if (!get("grimoire3Summons") && have($skill`Summon Alice's Army Cards`)) {
        useSkill(1, $skill`Summon Alice's Army Cards`);
        buy($coinmaster`Game Shoppe Snacks`, 1, $item`tobiko marble soda`);
    }
}

function setSettings() {
    SourceTerminal.educate([$skill`Extract`, $skill`Portscan`]);
    setClan(get("phccs_mainClan", "Bonus Adventures from Hell"));
}

function doPulls() {
    if (inHardcore()) return;

    const pulls: (Item | Item[])[] = [
        $items`repaid diaper, Great Wolf's beastly trousers`,
        $items`meteorite necklace, meteorite ring, meteorite fragment, meteorite earring`,
        $item`Stick-Knife of Loathing`,
        $items`moveable feast, Snow Suit`,
    ];

    for (const pull of pulls) {
        if (
            (Array.isArray(pull) && pull.some((item) => itemAmount(item) > 0)) ||
            (!Array.isArray(pull) && itemAmount(pull) > 0)
        ) {
            continue;
        }
        const pullItem = Array.isArray(pull) ? pull.find((pull) => storageAmount(pull) > 0) : pull;
        if (pullItem) takeStorage(pullItem, 1);
    }
}

function getTurns() {
    if (myLevel() === 1 && !mySpleenUse()) {
        while (get("_universeCalculated") < get("skillLevel144")) {
            cliExecute("numberology 69");
        }
    }
    if (!get("_borrowedTimeUsed")) {
        if (!have($item`borrowed time`)) {
            create(1, $item`borrowed time`);
        }
        use(1, $item`borrowed time`);
    }
}

function prepGear() {
    if (!have($item`dromedary drinking helmet`)) {
        useFamiliar($familiar`Melodramedary`);
        if (!have($item`box of Familiar Jacks`)) {
            create(1, $item`box of Familiar Jacks`);
        }
        use(1, $item`box of Familiar Jacks`);
        cliExecute("mummery myst");
    }
    if (!have($item`your cowboy boots`)) {
        visitUrl("place.php?whichplace=town_right&action=townright_ltt");
        runChoice(5);
    }

    if (have($item`Fourth of May Cosplay Saber`) && !get("_saberMod")) {
        visitUrl("main.php?action=may4");
        runChoice(4);
    }

    if (!have($item`gold detective badge`)) {
        visitUrl("place.php?whichplace=town_wrong&action=townwrong_precinct");
    }
    if (have($item`GameInformPowerDailyPro magazine`)) {
        visitUrl("inv_use.php?whichitem=6174&confirm=Yep.");
    }
    if (eudoraItem() === $item`GameInformPowerDailyPro subscription card`) {
        if (!have($item`scroll of Puddingskin`) && !have($item`dungeoneering kit`)) {
            visitUrl("adventure.php?snarfblat=319");
            use(1, $item`dungeoneering kit`);
        }
    }

    if (!get("_floundryItemCreated")) {
        Clan.with("Bonus Adventures From Hell", () => cliExecute("acquire codpiece"));
    }

    if (!have($item`pantogram pants`)) {
        Pantogram.makePants(
            "Mysticality",
            "Hot Resistance: 2",
            "Maximum HP: 40",
            "Combat Rate: -5",
            "Spell Damage Percent: 20"
        );
    }

    visitUrl("inventory.php?action=useumbrella&pwd");
    runChoice(1);

    if (get("boomBoxSong") !== "Total Eclipse of Your Meat") {
        cliExecute("boombox meat");
    }

    if (inHardcore()) cliExecute("Briefcase.ash enchantment weapon");
}

function vote() {
    if (!get("_voteToday")) {
        visitUrl("place.php?whichplace=town_right&action=townright_vote");
        visitUrl("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=2&local%5B%5D=3");
        visitUrl("place.php?whichplace=town_right&action=townright_vote");
    }
}

function deck() {
    if (!get("_deckCardsDrawn")) {
        cliExecute("cheat ancestral; cheat island; cheat 1952");
        autosell(1, $item`1952 Mickey Mantle card`);
        useSkill(2, $skill`Ancestral Recall`);
    }
}

function scavenge() {
    if (!get("_daycareGymScavenges")) {
        visitUrl("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
        runChoice(3);
        runChoice(2);
        runChoice(5);
        runChoice(4);
    }
}

export default function runStart(): void {
    doPulls();
    setSettings();
    toot();
    getTurns();
    deck();
    juiceBar();
    vote();
    grimoires();
    prepGear();
    scavenge();
}
