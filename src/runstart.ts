import {
    visitUrl,
    autosell,
    buy,
    useSkill,
    myLevel,
    mySpleenUse,
    cliExecute,
    create,
    use,
    useFamiliar,
    runChoice,
    eudora,
    eudoraItem,
} from "kolmafia";
import { $item, have, get, $skill, $coinmaster, $familiar, SourceTerminal } from "libram";
import { setClan, tryUse } from "./phredhccs-lib";

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
    if (!get("_grimoireConfiscatorSummons")) {
        useSkill(1, $skill`Summon Confiscated Things`);
        autosell(1, $item`glow-in-the-dark necklace`);
        autosell(1, $item`"KICK ME" sign`);
        autosell(1, $item`LCD Game: Burger Belt`);
        autosell(1, $item`LCD Game: Food Eater`);
        autosell(1, $item`LCD Game: Garbage River`);
    }
    if (!get("grimoire2Summons")) {
        useSkill(1, $skill`Summon Tasteful Items`);
        autosell(5, $item`black-and-blue light`);
        autosell(5, $item`blue plasma ball`);
        autosell(5, $item`cheap studded belt`);
        autosell(5, $item`flavored foot massage oil`);
        autosell(5, $item`foam dart`);
        autosell(5, $item`Loudmouth Larry Lamprey`);
        autosell(5, $item`personal massager`);
        autosell(5, $item`personalized coffee mug`);
        autosell(5, $item`stick-on eyebrow piercing`);
    }
    if (!get("grimoire3Summons")) {
        useSkill(1, $skill`Summon Alice's Army Cards`);
        buy($coinmaster`Game Shoppe Snacks`, 1, $item`tobiko marble soda`);
    }
}

function setSettings() {
    SourceTerminal.educate([$skill`extract`, $skill`portscan`]);
    setClan("Alliance From Heck");
}

function getTurns() {
    if (myLevel() === 1 && mySpleenUse() === 0) {
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
        useFamiliar($familiar`melodramedary`);
        if (!have($item`familiar jacks`)) {
            create(1, $item`familiar jacks`);
        }
        use(1, $item`familiar jacks`);
        cliExecute("mummery myst");
    }
    if (!have($item`your cowboy boots`)) {
        visitUrl("place.php?whichplace=town_right&action=townright_ltt");
        runChoice(5);
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
        cliExecute("acquire codpiece");
    }

    if (!have($item`pantogram pants`)) {
        cliExecute("pantogram mysticality|hot|drops of blood|some self-respect|your dreams|silent");
    }

    if (get("boomBoxSong") !== "Total Eclipse of Your Meat") {
        cliExecute("boombox meat");
    }
}

function vote() {
    if (!get("_voteToday")) {
        visitUrl("place.php?whichplace=town_right&action=townright_vote");
        visitUrl("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=2&local%5B%5D=3");
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

export function runStart() {
    setSettings();
    toot();
    getTurns();
    deck();
    juiceBar();
    vote();
    grimoires();
    prepGear();
}
