import { itemAmount, myThrall, Thrall, use, useSkill } from "kolmafia";
import {
    $effects,
    $familiar,
    $item,
    $items,
    $thrall,
    CommunityService,
    have,
    RetroCape,
} from "libram";
import { potionTask, restore, skillTask } from "./commons";
import { CSQuest } from "./engine";
import { CSTask } from "./lib";

const SKILL_BUFFS = {
    MUSCLE: $effects`Feeling Excited, Big, Song of Bravado, Rage of the Reindeer, Quiet Determination, Disdain of the War Snapper, The Power of LOV`,
    MYSTICALITY: $effects`Feeling Excited, Big, Song of Bravado`,
    MOXIE: $effects`Feeling Excited, Big, Song of Bravado, Blessing of the Bird, Quiet Desperation, Disco Fever, Blubbered Up, Mariachi Mood, Disco State of Mind`,
    HP: $effects`Feeling Excited, Big, Song of Starch, Rage of the Reindeer, Quiet Determination, Disdain of the War Snapper, The Power of LOV`,
};

function skillBuffTasks(key: keyof typeof SKILL_BUFFS): CSTask[] {
    return [...SKILL_BUFFS[key].map(skillTask), restore(SKILL_BUFFS[key])];
}

function thrallTask(thrall: Thrall): CSTask {
    return {
        name: thrall.name,
        completed: () => myThrall() === thrall,
        do: () => useSkill(thrall.skill),
    };
}

const Muscle: CSQuest = {
    name: "Muscle",
    type: "SERVICE",
    test: CommunityService.Muscle,
    outfit: () => ({
        hat: $item`wad of used tape`,
        weapon: $item`dented scepter`,
        offhand: $item`Fourth of May Cosplay Saber`,
        shirt: $items`shoe ad T-shirt, fresh coat of paint`,
        back: $item`unwrapped knock-off retro superhero cape`,
        pants: $item`Cargo Cultist Shorts`,
        acc1: $item`Brutal brogues`,
        acc2: $item`Retrospecs`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        familiar: $familiar`Left-Hand Man`,
        modes: { retrocape: ["vampire", RetroCape.currentMode()] },
        famequip: $item`unbreakable umbrella`,
    }),
    turnsSpent: 0,
    maxTurns: 1,
    tasks: [...skillBuffTasks("MUSCLE"), thrallTask($thrall`Elbow Macaroni`)],
};

const Mysticality: CSQuest = {
    name: "Mysticality",
    type: "SERVICE",
    test: CommunityService.Mysticality,
    outfit: () => ({
        hat: $item`wad of used tape`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $items`astral statuette, cosmetic football`,
        back: $item`unwrapped knock-off retro superhero cape`,
        shirt: $items`denim jacket, shoe ad T-shirt, fresh coat of paint`,
        pants: $item`designer sweatpants`,
        acc1: $item`your cowboy boots`,
        acc2: $item`codpiece`,
        acc3: $item`battle broom`,
        famequip: $items`Abracandalabra`,
        familiar: $familiar`Left-Hand Man`,
        modes: { retrocape: ["vampire", RetroCape.currentMode()] },
    }),
    turnsSpent: 0,
    maxTurns: 1,
    tasks: [...skillBuffTasks("MYSTICALITY")],
};

const Moxie: CSQuest = {
    name: "Moxie",
    type: "SERVICE",
    test: CommunityService.Moxie,
    outfit: () => ({
        hat: $item`very pointy crown`,
        shirt: $items`shoe ad T-shirt, fresh coat of paint`,
        back: $item`unwrapped knock-off retro superhero cape`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`unbreakable umbrella`,
        pants: $item`Cargo Cultist Shorts`,
        acc1: $item`Beach Comb`,
        acc2: $item`"I Voted!" sticker`,
        acc3: $item`Retrospecs`,
        famequip: $item`miniature crystal ball`,
        modes: { retrocape: ["robot", RetroCape.currentMode()] },
    }),
    turnsSpent: 0,
    maxTurns: 1,
    tasks: [
        ...skillBuffTasks("MOXIE"),
        ...$items`runproof mascara, confiscated love note, dollop of barbecue sauce`.map(
            potionTask
        ),
        {
            name: "Rhinestones",
            completed: () => !have($item`rhinestone`),
            do: () => use(itemAmount($item`rhinestone`), $item`rhinestone`),
        },
        thrallTask($thrall`Penne Dreadful`),
    ],
};

const Hitpoints: CSQuest = {
    name: "Hitpoints",
    type: "SERVICE",
    test: CommunityService.HP,
    turnsSpent: 0,
    maxTurns: 1,
    outfit: () => ({
        hat: $item`wad of used tape`,
        weapon: $item`dented scepter`,
        offhand: $item`Fourth of May Cosplay Saber`,
        shirt: $items`Jurassic Parka, shoe ad T-shirt, fresh coat of paint`,
        back: $item`unwrapped knock-off retro superhero cape`,
        pants: $item`Cargo Cultist Shorts`,
        acc1: $item`Brutal brogues`,
        acc2: $item`Retrospecs`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        famequip: $item`miniature crystal ball`,
        modes: { retrocape: ["vampire", RetroCape.currentMode()], parka: "kachungasaur" },
    }),
    tasks: [...skillBuffTasks("HP"), thrallTask($thrall`Elbow Macaroni`)],
};

export { Muscle, Mysticality, Moxie, Hitpoints };
