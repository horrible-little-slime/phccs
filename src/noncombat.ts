import { cliExecute, runChoice, runCombat, useSkill, visitUrl } from "kolmafia";
import { $effect, $effects, $familiar, $item, $skill, CommunityService, get, have } from "libram";
import { CSStrategy } from "./combat";
import { asdonTask, commonFamiliarWeightBuffs, restore, skillTask, songTask } from "./commons";
import { CSQuest } from "./engine";
import { hasNcBird, horse, horsery } from "./lib";
import uniform from "./outfit";

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
        acc1: $item`hewn moon-rune spoon`,
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
        skillTask($effect`Blessing of the Bird`),
        {
            name: "Favourite Bird",
            completed: () => get("_favoriteBirdVisited"),
            ready: hasNcBird,
            do: () => useSkill($skill`Visit your Favorite Bird`),
        },
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
            combat: new CSStrategy(),
        },
    ],
};

export default Noncombat;
