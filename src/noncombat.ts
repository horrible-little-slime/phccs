import { CSStrategy } from "./combat";
import {
    asdonTask,
    birdTask,
    commonFamiliarWeightBuffs,
    favouriteBirdTask,
    restore,
    skillTask,
    songTask,
} from "./commons";
import { CSQuest } from "./engine";
import { horse, horsery } from "./lib";
import uniform from "./outfit";
import { cliExecute, runChoice, runCombat, useSkill, visitUrl } from "kolmafia";
import { $effect, $effects, $familiar, $item, $items, $skill, CommunityService, get, have } from "libram";

const Noncombat: CSQuest = {
    name: "Noncombat",
    type: "SERVICE",
    test: CommunityService.Noncombat,
    outfit: () => ({
        hat: $item`very pointy crown`,
        back: $item`protonic accelerator pack`,
        weapon: $item`Fourth of May Cosplay Saber`,
        shirt: $item`Jurassic Parka`,
        offhand: $item`unbreakable umbrella`,
        acc1: $items`over-the-shoulder Folder Holder, hewn moon-rune spoon`,
        acc2: $item`codpiece`,
        acc3: $item`Brutal brogues`,
        familiar: $familiar`Disgeist`,
        modes: { umbrella: "cocoon", parka: "pterodactyl" },
    }),
    turnsSpent: 0,
    maxTurns: 1,
    tasks: [
        {
            name: "Horse",
            completed: () => horsery() === "dark",
            do: () => horse("dark"),
        },
        ...commonFamiliarWeightBuffs(),
        skillTask($effect`Smooth Movements`),
        skillTask($effect`Feeling Lonely`),
        {
            name: "Invisible Avatar",
            completed: () => have($effect`Invisible Avatar`),
            do: () => useSkill($skill`CHEAT CODE: Invisible Avatar`),
            outfit: { acc3: $item`Powerful Glove` },
        },
        birdTask("Combat Rate", false),
        favouriteBirdTask("Combat Rate", false),
        songTask($effect`The Sonata of Sneakiness`, $effect`Fat Leon's Phat Loot Lyric`),
        restore($effects`Smooth Movements, The Sonata of Sneakiness`),
        {
            name: "Swim Sprints",
            completed: () => get("_olympicSwimmingPool"),
            do: () => cliExecute("swim sprints"),
        },
        asdonTask("Stealthily"),
        {
            name: "God Lobster",
            completed: () => get("_godLobsterFights") >= 3,
            do: (): void => {
                visitUrl("main.php?fightgodlobster=1");
                runCombat();
                visitUrl("choice.php");
                runChoice(-1);
            },
            outfit: () =>
                uniform({
                    changes: {
                        familiar: $familiar`God Lobster`,
                        famequip: $item`God Lobster's Ring`,
                    },
                }),
            choices: { [1310]: 2 },
            combat: new CSStrategy(),
        },
    ],
};

export default Noncombat;
