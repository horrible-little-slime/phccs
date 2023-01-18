import { adv1, Effect, getProperty, myLevel } from "kolmafia";
import { $effect, $familiar, $item, $location, $skill, BeachComb, Clan, get, have } from "libram";
import { CSStrategy, Macro } from "./combat";
import { CSTask } from "./lib";
import { uniform } from "./outfit";

export function beachTask(effect: Effect): CSTask {
    const num = 1 + BeachComb.headBuffs.indexOf(effect);
    return {
        name: `Beach Head: ${effect}`,
        completed: () => getProperty("_beachHeadsUsed").split(",").includes(num.toFixed(0)),
        ready: () => get("_freeBeachWalksUsed") < 11,
        do: () => BeachComb.tryHead(effect),
    };
}

export function innerElf(): CSTask {
    return {
        name: "Inner Elf",
        completed: () => have($effect`Inner Elf`),
        ready: () => myLevel() >= 13,
        do: () =>
            Clan.with(get("phccs_elfClan", "Hobopolis Vacation Home"), () => {
                adv1($location`The Slime Tube`, -1, "");
            }),
        outfit: () =>
            uniform({
                changes: {
                    acc3: $item`Kremlin's Greatest Briefcase`,
                    familiar: $familiar`Machine Elf`,
                },
            }),
        choices: { [326]: 1 },
        combat: new CSStrategy(() =>
            Macro.trySkill($skill`KGB tranquilizer dart`).trySkill($skill`Snokebomb`)
        ),
    };
}
