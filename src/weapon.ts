import { canadiaAvailable, cliExecute, handlingChoice, retrieveItem, runChoice, useSkill } from "kolmafia";
import {
    $effect,
    $effects,
    $familiar,
    $item,
    $items,
    $location,
    $monster,
    $skill,
    CombatLoversLocket,
    CommunityService,
    get,
    have,
    set,
} from "libram";
import { CSStrategy, Macro } from "./combat";
import { beachTask, innerElf, potionTask, restore, skillTask } from "./commons";
import { CSEngine, CSQuest } from "./engine";
import { horse, horsery, unequip } from "./lib";
import { uniform } from "./outfit";
const buffs = $effects`Carol of the Bulls, Song of the North, Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, Tenacity of the Snapper, Billiards Belligerence, Blessing of the Bird, Jackasses' Symphony of Destruction`;

let meteors: number;
const Weapon: CSQuest = {
    name: "Weapon Damage",
    type: "SERVICE",
    test: CommunityService.WeaponDamage,
    outfit: () => ({
        hat: $items`seal-skull helmet`,
        weapon: $item`broken champagne bottle`,
        offhand: $item`dented scepter`,
        acc1: $item`Brutal brogues`,
        acc2: $item`Powerful Glove`,
        acc3: $items`meteorite ring, Kremlin's Greatest Briefcase`,
        ...(CSEngine.core === "soft"
            ? { famequip: $item`Stick-Knife of Loathing`, familiar: $familiar`Disembodied Hand` }
            : {}),
    }),
    turnsSpent: 0,
    maxTurns: 1,
    tasks: [
        ...buffs.map(skillTask),
        restore(buffs),
        skillTask($effect`Frenzied, Bloody`),
        potionTask($item`LOV Elixir #3`),
        potionTask($item`vial of hamethyst juice`),
        beachTask($effect`Lack of Body-Building`),
        {
            name: "Do You Crush What I Crush?",
            completed: () => have($effect`Do You Crush What I Crush?`),
            do: $location`The Dire Warren`,
            outfit: () => uniform({ changes: { familiar: $familiar`Ghost of Crimbo Carols` } }),
            prepare: () => horsery() === "pale" && horse("dark"),
        },
        { ...innerElf(), core: "hard" },
        {
            name: "Spit Ungulith",
            completed: () => have($effect`Spit Upon`),
            ready: () => get("camelSpit") >= 100,
            do: (): void => {
                meteors = get("_meteorShowerUses");
                CombatLoversLocket.reminisce($monster`ungulith`);
                if (handlingChoice()) runChoice(-1);
            },
            choices: { [1387]: 3 },
            outfit: () =>
                uniform({
                    changes: {
                        familiar: $familiar`Melodramedary`,
                        weapon: $item`Fourth of May Cosplay Saber`,
                    },
                }),
            post: (): void => {
                if (have($effect`Spit Upon`)) set("camelSpit", 0);
                if (meteors && have($effect`Meteor Showered`))
                    set("_meteorShowerUses", meteors + 1);

                const ungId = $monster`ungulith`.id.toFixed(0);
                const locketIdStrings = get("_locketMonstersFought")
                    .split(",")
                    .map((x) => x.trim())
                    .filter((x) => x.length > 0);
                if (!locketIdStrings.includes(ungId)) {
                    locketIdStrings.push(ungId);
                    set("_locketMonstersFought", locketIdStrings.join(","));
                }
            },
            combat: new CSStrategy(() =>
                Macro.trySkill($skill`%fn, spit on me!`)
                    .trySkill($skill`Meteor Shower`)
                    .skill($skill`Use the Force`)
            ),
        },
        {
            name: "Meteorite Ring",
            core: "soft",
            completed: () => have($item`meteorite ring`),
            ready: () => canadiaAvailable(),
            do: (): void => {
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
        },
        potionTask($item`corrupted marrow`),
        {
            name: "Swagger",
            completed: () => get("_bowleggedSwaggerUsed"),
            do: () => useSkill($skill`Bow-Legged Swagger`)
        }
    ],
};

export default Weapon;
