import { cliExecute } from "kolmafia";
import { $effect, $effects, $familiar, $item, $items, CommunityService, get } from "libram";
import { asdonTask, commonFamiliarWeightBuffs, restore, skillTask, songTask } from "./commons";
import { CSQuest } from "./engine";
import { horse, horsery } from "./lib";

const Noncombat: CSQuest = {
    name: "Noncombat",
    type: "SERVICE",
    test: CommunityService.Noncombat,
    outfit: () => ({
        hat: $item`very pointy crown`,
        back: $item`protonic accelerator pack`,
        weapon: $item`Fourth of May Cosplay Saber`,
        shirt: $item`Jurassic Parka`,
        offhand: $items`unbreakable umbrella, burning paper crane, familiar scrapbook`,
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
        songTask($effect`The Sonata of Sneakiness`, $effect`Fat Leon's Phat Loot Lyric`),
        restore($effects`Smooth Movements, The Sonata of Sneakiness`),
        {
            name: "Swim Sprints",
            completed: () => get("_olympicSwimmingPool"),
            do: () => cliExecute("swim sprints"),
        },
        asdonTask("Stealthily"),
    ],
};

export default Noncombat;
