import {
  beachTask,
  birdTask,
  favouriteBirdTask,
  innerElf,
  potionTask,
  restoreBuffTasks,
} from "./commons";
import { CSQuest } from "./engine";
import { CSTask } from "./lib";
import {
  cliExecute,
  create,
  effectModifier,
  Item,
  itemAmount,
  myThrall,
  Thrall,
  use,
  useSkill,
} from "kolmafia";
import {
  $classes,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $thrall,
  byStat,
  CommunityService,
  get,
  have,
  RetroCape,
} from "libram";

const SKILL_BUFFS = {
  MUSCLE: $effects`Feeling Excited, Big, Song of Bravado, Rage of the Reindeer, Quiet Determination, Disdain of the War Snapper`,
  MYSTICALITY: $effects`Feeling Excited, Big, Song of Bravado, Quiet Judgement`,
  MOXIE: $effects`Feeling Excited, Big, Song of Bravado, Quiet Desperation, Disco Fever, Blubbered Up, Mariachi Mood, Disco State of Mind`,
  HP: $effects`Feeling Excited, Big, Song of Starch, Rage of the Reindeer, Quiet Determination, Disdain of the War Snapper`,
};

function skillBuffTasks(key: keyof typeof SKILL_BUFFS): CSTask[] {
  return restoreBuffTasks(SKILL_BUFFS[key]);
}

function thrallTask(thrall: Thrall): CSTask {
  return {
    name: thrall.toString(),
    class: $classes`Pastamancer`,
    completed: () => myThrall() === thrall,
    do: () => useSkill(thrall.skill),
  };
}

function equalizeTasks(): CSTask[] {
  const equalizerPotion = byStat({
    Moxie: $item`oil of slipperiness`,
    Muscle: $item`oil of stability`,
    Mysticality: $item`oil of expertise`,
  });
  const equalizerFruit = byStat({
    Moxie: $item`jumbo olive`,
    Muscle: $item`lime`,
    Mysticality: $item`cherry`,
  });
  return [
    {
      name: `Create ${equalizerPotion}`,
      ready: () => have(equalizerFruit) && get("hasRange"),
      completed: () => have(equalizerPotion) || have(effectModifier(equalizerPotion, "Effect")),
      do: () => create(equalizerPotion),
      class: $classes`Seal Clubber, Turtle Tamer, Disco Bandit, Accordion Thief, Sauceror`,
    },
    {
      ...potionTask(equalizerPotion),
      class: $classes`Seal Clubber, Turtle Tamer, Disco Bandit, Accordion Thief, Sauceror`,
    },
  ];
}

const Muscle: CSQuest = {
  name: "Muscle",
  type: "SERVICE",
  test: CommunityService.Muscle,
  outfit: () => {
    if (!have($item`wad of used tape`)) cliExecute("fold wad of used tape");
    return {
      hat: $item`wad of used tape`,
      weapon: $item`Fourth of May Cosplay Saber`,
      offhand: $item`dented scepter`,
      shirt: $item`Jurassic Parka`,
      back: $item`unwrapped knock-off retro superhero cape`,
      pants: $item`designer sweatpants`,
      acc1: $item`Brutal brogues`,
      acc2: $items`meteorite necklace, Retrospecs`,
      acc3: byStat({
        Muscle: $item`your cowboy boots`,
        default: $item`Kremlin's Greatest Briefcase`,
      }),
      familiar: $familiar`Left-Hand Man`,
      modes: {
        retrocape: ["vampire", RetroCape.currentMode()],
        parka: "dilophosaur",
        umbrella: "broken",
      },
      famequip: $item`unbreakable umbrella`,
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [
    ...skillBuffTasks("MUSCLE"),
    potionTask($item`LOV Elixir #3`),
    thrallTask($thrall`Elbow Macaroni`),
    beachTask($effect`Lack of Body-Building`),
    birdTask("Muscle Percent"),
    favouriteBirdTask("Muscle Percent"),
    { ...innerElf(), core: "hard" },
    { ...potionTask($item`Ben-Gal™ Balm`), core: "hard" },
    ...equalizeTasks(),
  ],
};

const Mysticality: CSQuest = {
  name: "Mysticality",
  type: "SERVICE",
  test: CommunityService.Mysticality,
  outfit: () => {
    if (!have($item`wad of used tape`)) cliExecute("fold wad of used tape");
    return {
      hat: $item`wad of used tape`,
      weapon: $item`Fourth of May Cosplay Saber`,
      offhand: $items`astral statuette, industrial fire extinguisher`,
      back: $item`unwrapped knock-off retro superhero cape`,
      shirt: $items`denim jacket, shoe ad T-shirt, fresh coat of paint`,
      pants: $item`designer sweatpants`,
      acc1: byStat<Item | Item[]>({
        Mysticality: $item`your cowboy boots`,
        default: $items`barrel hoop earring, Powerful Glove`,
      }),
      acc2: $item`codpiece`,
      acc3: $item`battle broom`,
      famequip: $items`Abracandalabra`,
      familiar: $familiar`Left-Hand Man`,
      modes: { retrocape: ["heck", RetroCape.currentMode()] },
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [
    ...skillBuffTasks("MYSTICALITY"),
    birdTask("Mysticality Percent"),
    favouriteBirdTask("Mysticality Percent"),
    ...equalizeTasks(),
  ],
};

const Moxie: CSQuest = {
  name: "Moxie",
  type: "SERVICE",
  test: CommunityService.Moxie,
  outfit: () => ({
    hat: $item`very pointy crown`,
    shirt: $item`Jurassic Parka`,
    back: $item`unwrapped knock-off retro superhero cape`,
    weapon: $item`Fourth of May Cosplay Saber`,
    offhand: $item`unbreakable umbrella`,
    pants: $item`Cargo Cultist Shorts`,
    acc1: $item`Beach Comb`,
    acc2: byStat({ Moxie: $item`your cowboy boots`, default: $item`"I Voted!" sticker` }),
    acc3: $items`meteorite necklace, Retrospecs`,
    famequip: $item`miniature crystal ball`,
    modes: { retrocape: ["robot", RetroCape.currentMode()], umbrella: "broken" },
  }),
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [
    ...skillBuffTasks("MOXIE"),
    birdTask("Moxie Percent"),
    favouriteBirdTask("Moxie Percent"),
    ...$items`runproof mascara, confiscated love note, dollop of barbecue sauce`.map(potionTask),
    {
      name: "Rhinestones",
      completed: () => !have($item`rhinestone`),
      do: () => use(itemAmount($item`rhinestone`), $item`rhinestone`),
    },
    thrallTask($thrall`Penne Dreadful`),
    ...equalizeTasks(),
  ],
};

const Hitpoints: CSQuest = {
  name: "Hitpoints",
  type: "SERVICE",
  test: CommunityService.HP,
  turnsSpent: 0,
  maxTurns: 1,
  outfit: () => {
    if (!have($item`wad of used tape`)) cliExecute("fold wad of used tape");
    return {
      hat: $item`wad of used tape`,
      weapon: $item`dented scepter`,
      offhand: $item`Fourth of May Cosplay Saber`,
      shirt: $items`Jurassic Parka, shoe ad T-shirt, fresh coat of paint`,
      back: $item`unwrapped knock-off retro superhero cape`,
      pants: $item`Cargo Cultist Shorts`,
      acc1: $item`Brutal brogues`,
      acc2: byStat({
        Muscle: $item`your cowboy boots`,
        default: $item`Kremlin's Greatest Briefcase`,
      }),
      acc3: $items`meteorite necklace, Retrospecs`,
      famequip: $item`miniature crystal ball`,
      modes: { retrocape: ["vampire", RetroCape.currentMode()], parka: "kachungasaur" },
    };
  },
  tasks: [
    ...skillBuffTasks("HP"),
    birdTask("Muscle Percent"),
    favouriteBirdTask("Muscle Percent"),
    potionTask($item`LOV Elixir #3`),
    thrallTask($thrall`Elbow Macaroni`),
    ...equalizeTasks(),
  ],
};

const StatTests = byStat({
  Mysticality: [Moxie, Muscle, Hitpoints, Mysticality],
  Muscle: [Moxie, Mysticality, Hitpoints, Muscle],
  Moxie: [Mysticality, Muscle, Hitpoints, Moxie],
});

export default StatTests;
