import {
    autosell,
    buy,
    cliExecute,
    create,
    equip,
    getClanName,
    getWorkshed,
    itemAmount,
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
    $skills,
    Clan,
    CommunityService,
    get,
    have,
    MummingTrunk,
    questStep,
    SongBoom,
    SourceTerminal,
} from "libram";
import { CSQuest } from "./engine";
import { horse, horsery, setClan, tryUse } from "./lib";

const PULLS = [
    $items`repaid diaper, Great Wolf's beastly trousers`,
    $items`meteorite necklace, meteorite ring, meteorite fragment, meteorite earring`,
    $items`Stick-Knife of Loathing`,
    $items`moveable feast, Snow Suit`,
];

let codpieceAttempted = false;

const MARKET_QUESTS = [
    { pref: "questM23Meatsmith", url: "shop.php?whichshop=meatsmith&action=talk" },
    { pref: "questM24Doc", url: "shop.php?whichshop=doc&action=talk" },
    { pref: "questM25Armorer", url: "shop.php?whichshop=armory&action=talk" },
];

const Prologue: CSQuest = {
    type: "MISC",
    name: "Prologue",
    completed: () =>
        !!get("csServicesPerformed")
            .split(",")
            .filter((x) => x.trim().length > 0).length,
    tasks: [
        {
            name: "Set Workshed",
            completed: () => getWorkshed() === $item`Asdon Martin keyfob`,
            do: () => use($item`Asdon Martin keyfob`),
        },
        ...MARKET_QUESTS.map(({ pref, url }) => ({
            name: `Start Quest: ${pref}`,
            completed: () => questStep(pref) > -1,
            do: (): void => {
                visitUrl(url);
                runChoice(1);
            },
        })),
        {
            name: "Non-Staff Pulls",
            core: "soft",
            ready: () => PULLS.some((pullSet) => pullSet.every((pull) => !have(pull))),
            completed: () => get("_roninStoragePulls").split(",").length >= 4,
            do: (): void => {
                for (const pullSet of PULLS) {
                    if (pullSet.some((pull) => have(pull))) continue;
                    const pull = pullSet.find((p) => storageAmount(p) > 0);
                    if (pull) takeStorage(pull, 1);
                    else
                        throw new Error(
                            `Failed to pull one of ${pullSet.join(
                                ", "
                            )}; are you rich enough to run this in softcore?`
                        );
                }
            },
        },
        {
            name: "Borrow Time",
            completed: () => get("_borrowedTimeUsed"),
            do: (): void => {
                if (!have($item`borrowed time`)) {
                    create(1, $item`borrowed time`);
                }
                use(1, $item`borrowed time`);
            },
        },
        {
            name: "Cheat At Cards",
            completed: () => get("_deckCardsDrawn") >= 15,
            do: (): void => {
                cliExecute("cheat forest; cheat island; cheat 1952");
                autosell(1, $item`1952 Mickey Mantle card`);
                useSkill(1, $skill`Ancestral Recall`);
            },
        },
        {
            name: "Juice Bar",
            completed: () => get("_chateauDeskHarvested"),
            do: (): void => {
                visitUrl("place.php?whichplace=chateau&action=chateau_desk2");
                autosell(1, $item`gremlin juice`);
            },
        },
        {
            name: "Vote!",
            completed: () => get("_voteToday"),
            do: (): void => {
                visitUrl("place.php?whichplace=town_right&action=townright_vote");
                visitUrl("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=2&local%5B%5D=3");
                visitUrl("place.php?whichplace=town_right&action=townright_vote");
            },
        },
        {
            name: "Terminal Skills",
            completed: () =>
                SourceTerminal.getSkills().every((skill) =>
                    $skills`Extract, Portscan`.includes(skill)
                ),
            do: () => SourceTerminal.educate([$skill`Extract`, $skill`Portscan`]),
        },
        {
            name: "Change Clan",
            completed: () => getClanName() === get("phccs_mainClan", "Bonus Adventures from Hell"),
            do: () => setClan(get("phccs_mainClan", "Bonus Adventures from Hell")),
        },
        {
            name: "Toot",
            completed: () => have($item`big rock`),
            do: (): void => {
                visitUrl("tutorial.php?action=toot");
                tryUse(1, $item`letter from King Ralph XI`);
                tryUse(1, $item`pork elf goodies sack`);
                autosell(5, $item`baconstone`);
                autosell(5, $item`hamethyst`);
            },
        },
        {
            name: "Accordion",
            completed: () => have($item`toy accordion`),
            do: () => buy(1, $item`toy accordion`),
        },
        {
            name: "Confiscated Items",
            completed: () => !!get("_grimoireConfiscatorSummons"),
            ready: () => have($skill`Summon Confiscated Things`),
            do: (): void => {
                useSkill(1, $skill`Summon Confiscated Things`);
                $items`glow-in-the-dark necklace, "KICK ME" sign, LCD game: Burger Belt, LCD game: Food Eater, LCD game: Garbage River`.forEach(
                    (item) => autosell(itemAmount(item), item)
                );
            },
        },
        {
            name: "Tasteful Items",
            completed: () => !!get("grimoire2Summons"),
            ready: () => have($skill`Summon Tasteful Items`),
            do: (): void => {
                useSkill(1, $skill`Summon Tasteful Items`);
                $items`black-and-blue light, blue plasma ball, cheap studded belt, flavored foot massage oil, foam dart, Loudmouth Larry Lamprey, personal massager, personalized coffee mug, stick-on eyebrow piercing`.forEach(
                    (item) => autosell(itemAmount(item), item)
                );
            },
        },
        {
            name: "Alice's Army",
            completed: () => !!get("grimoire3Summons"),
            ready: () => have($skill`Summon Alice's Army Cards`),
            do: (): void => {
                useSkill(1, $skill`Summon Alice's Army Cards`);
                if (!have($item`tobiko marble soda`) && !CommunityService.SpellDamage.isDone())
                    buy($coinmaster`Game Shoppe Snacks`, 1, $item`tobiko marble soda`);
            },
        },
        {
            name: "Drinking Helmet",
            completed: () => have($item`dromedary drinking helmet`),
            do: (): void => {
                useFamiliar($familiar`Melodramedary`);
                if (!have($item`box of Familiar Jacks`)) {
                    create(1, $item`box of Familiar Jacks`);
                }
                use(1, $item`box of Familiar Jacks`);
            },
        },
        {
            name: "Mummery",
            completed: () => MummingTrunk.currentCostumes().has($familiar`Melodramedary`),
            do: (): void => {
                useFamiliar($familiar`Melodramedary`);
                cliExecute("mummery myst");
            },
        },
        {
            name: "Shortsuit",
            completed: () => !itemAmount($item`tiny stillsuit`),
            do: () => equip($familiar`Shorter-Order Cook`, $item`tiny stillsuit`),
        },
        {
            name: "Horsery",
            completed: () => horsery() === "dark",
            do: () => horse("dark"),
        },
        {
            name: "Cowboy Boots",
            completed: () => have($item`your cowboy boots`),
            do: (): void => {
                visitUrl("place.php?whichplace=town_right&action=townright_ltt");
                runChoice(5);
            },
        },
        {
            name: "Cosplay Saber",
            completed: () => !!get("_saberMod"),
            do: (): void => {
                visitUrl("main.php?action=may4");
                runChoice(4);
            },
        },
        {
            name: "Detective Badge",
            completed: () => have($item`gold detective badge`),
            do: () => visitUrl("place.php?whichplace=town_wrong&action=townwrong_precinct"),
        },
        {
            name: "Codpiece",
            completed: () => have($item`codpiece`) || codpieceAttempted,
            do: (): void => {
                Clan.with("Alliance From Heck", () => cliExecute("acquire codpiece"));
                codpieceAttempted = true;
            },
        },
        {
            name: "Songboom",
            completed: () => SongBoom.song() === "Total Eclipse of Your Meat",
            do: () => SongBoom.setSong("Total Eclipse of Your Meat"),
        },
        {
            name: "Scavenge",
            completed: () => !!get("_daycareGymScavenges"),
            do: (): void => {
                visitUrl("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
                runChoice(3);
                runChoice(2);
                runChoice(5);
                runChoice(4);
            },
        },
    ],
};

export default Prologue;
