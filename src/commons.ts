import { CSStrategy, Macro } from "./combat";
import { CSTask, currentBirdHas, favouriteBirdHas, horse, horsery } from "./lib";
import uniform from "./outfit";
import {
    adv1,
    availableAmount,
    buy,
    cliExecute,
    create,
    eat,
    Effect,
    effectModifier,
    getFuel,
    getProperty,
    handlingChoice,
    Item,
    mpCost,
    myLevel,
    myMp,
    runChoice,
    Skill,
    toEffect,
    toSkill,
    use,
    useSkill,
} from "kolmafia";
import {
    $effect,
    $effects,
    $familiar,
    $item,
    $location,
    $skill,
    AsdonMartin,
    BeachComb,
    Clan,
    Counter,
    get,
    have,
    set,
} from "libram";
import { NumericModifier } from "libram/dist/modifierTypes";

export function beachTask(effect: Effect): CSTask {
    const num = 1 + BeachComb.headBuffs.indexOf(effect);
    return {
        name: `Beach Head: ${effect}`,
        completed: () => getProperty("_beachHeadsUsed").split(",").includes(num.toFixed(0)),
        ready: () =>
            get("_freeBeachWalksUsed") < 11 &&
            get("beachHeadsUnlocked").split(",").includes(num.toFixed(0)),
        do: () => BeachComb.tryHead(effect),
    };
}

export function innerElf(): CSTask {
    return {
        name: "Inner Elf",
        completed: () => have($effect`Inner Elf`),
        ready: () => myLevel() >= 13 && !Counter.exists("portscan.edu"),
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

export function restoreBuffTasks(buffs: Effect[]): CSTask[] {
    return [...buffs.map(skillTask), restore(buffs)];
}

export function commonFamiliarWeightBuffs(): CSTask[] {
    const buffs = $effects`Empathy, Leash of Linguini, Blood Bond`;
    return [
        potionTask($item`green candy heart`),
        ...restoreBuffTasks(buffs),
        {
            name: "Witchess",
            completed: () => get("_witchessBuff"),
            do: () => cliExecute("witchess"),
        },
        {
            name: "Suzie's Blessing",
            completed: () => get("_clanFortuneBuffUsed"),
            do: () => cliExecute("fortune buff familiar"),
        },
        beachTask($effect`Do I Know You From Somewhere?`),
    ];
}

export function songTask(song: Effect | Skill, shrugSong: Effect | Skill): CSTask {
    const { wantedSongSkill, wantedSongEffect } =
        song instanceof Effect
            ? { wantedSongSkill: toSkill(song), wantedSongEffect: song }
            : { wantedSongSkill: song, wantedSongEffect: toEffect(song) };
    const shrugSongEffect = shrugSong instanceof Effect ? shrugSong : toEffect(shrugSong);
    return {
        name: song.name,
        completed: () => have(wantedSongEffect),
        ready: () => myMp() >= mpCost(wantedSongSkill),
        do: (): void => {
            if (have(shrugSongEffect)) cliExecute(`shrug ${shrugSongEffect}`);
            useSkill(wantedSongSkill);
        },
    };
}

export function asdonTask(style: Effect | keyof typeof AsdonMartin.Driving): CSTask {
    const effect = style instanceof Effect ? style : AsdonMartin.Driving[style];
    return {
        name: effect.name,
        completed: () => have(effect),
        do: () => {
            if (getFuel() < 37) {
                buy(1, $item`all-purpose flower`);
                use(1, $item`all-purpose flower`);
                buy(availableAmount($item`wad of dough`), $item`soda water`);
                create(availableAmount($item`wad of dough`), $item`loaf of soda bread`);
                cliExecute(
                    `asdonmartin fuel ${availableAmount($item`loaf of soda bread`)} soda bread`
                );
            }
            AsdonMartin.drive(effect);
        },
    };
}
let showers = get("_meteorShowerUses");
export function meteorShower(): CSTask {
    return {
        name: "Meteor Showered",
        ready: () => get("_meteorShowerUses") < 5 && get("_saberForceUses") < 5,
        completed: () => have($effect`Meteor Showered`),
        prepare: () => horsery() === "pale" && horse("dark"),
        do: () => {
            adv1($location`The Dire Warren`, -1, "");
            if (handlingChoice()) runChoice(-1);
        },
        outfit: () =>
            uniform({
                changes: {
                    familiar: $familiar.none,
                    famequip: $item.none,
                    weapon: $item`Fourth of May Cosplay Saber`,
                },
            }),
        choices: { [1387]: 3 },
        combat: new CSStrategy(() =>
            Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
        ),
        post: () => {
            if (have($effect`Meteor Showered`)) showers++;
            set("_meteorShowerUses", showers);
        },
    };
}

export function birdTask(modifier: NumericModifier, positive = true): CSTask {
    return {
        name: "Regular Bird",
        completed: () => have($effect`Blessing of the Bird`),
        ready: () => currentBirdHas(modifier, positive) && get("_birdsSoughtToday") < 6,
        do: () => useSkill($skill`Seek out a Bird`),
    };
}

export function favouriteBirdTask(modifier: NumericModifier, positive = true): CSTask {
    return {
        name: "Favourite Bird",
        completed: () => get("_favoriteBirdVisited"),
        ready: () => favouriteBirdHas(modifier, positive),
        do: () => useSkill($skill`Visit your Favorite Bird`),
    };
}

export function deckTask(card: string): CSTask {
    return {
        name: `Cheat At Cards: ${card}`,
        completed: () =>
            get("_deckCardsSeen").toLowerCase().split("|").includes(card.toLowerCase()),
        ready: () => have($item`Deck of Every Card`) && get("_deckCardsDrawn") <= 10,
        do: () => cliExecute(`cheat ${card.toLowerCase()}`),
    };
}
