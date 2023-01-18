import {
    adv1,
    create,
    eat,
    Effect,
    effectModifier,
    getProperty,
    Item,
    mpCost,
    myLevel,
    myMp,
    Skill,
    toEffect,
    toSkill,
    use,
    useSkill,
} from "kolmafia";
import {
    $effect,
    $familiar,
    $item,
    $location,
    $skill,
    BeachComb,
    Clan,
    CommunityService,
    get,
    have,
} from "libram";
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

export function potionTask(item: Item): CSTask {
    const effect = effectModifier(item, "Effect");
    return {
        name: `${effect}`,
        completed: () => have(effect),
        ready: () => have(item),
        do: () => use(item),
    };
}

export function optional(increasers: CSTask[], test: CommunityService): CSTask[] {
    return increasers.map((task) => ({
        ...task,
        completed: () => task.completed() || test.prediction <= 1,
    }));
}

export function restore(effects: Effect[]): CSTask {
    return {
        name: "Restore",
        completed: () => effects.every((e) => have(e)),
        do: () => {
            if (!have($item`magical sausage`) && have($item`magical sausage casing`)) {
                create(1, $item`magical sausage`);
            }
            if (have($item`magical sausage`)) {
                eat(1, $item`magical sausage`);
            } else {
                use(1, $item`psychokinetic energy blob`);
            }
        },
    };
}

export function skillTask(x: Skill | Effect): CSTask {
    {
        const skill = x instanceof Skill ? x : toSkill(x);
        const effect = x instanceof Effect ? x : toEffect(x);
        return {
            name: skill.name,
            completed: () => have(effect),
            ready: () => myMp() >= mpCost(skill),
            do: () => useSkill(skill),
        };
    }
}
