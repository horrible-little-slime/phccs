import { CSStrategy, Macro } from "./combat.js";
import { asdonTask, beachTask, commonFamiliarWeightBuffs, restoreBuffTasks } from "./commons.js";
import { CSQuest } from "./engine.js";
import { ensureMp } from "./lib.js";
import uniform from "./outfit.js";
import { adv1, create, handlingChoice, myHp, myMaxhp, runChoice, useSkill } from "kolmafia";
import {
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  CommunityService,
  examine,
  get,
  have,
  Horsery,
} from "libram";

const buffs = $effects`Elemental Saucesphere, Astral Shell`;

const HotRes: CSQuest = {
  name: "Hot Res",
  type: "SERVICE",
  test: CommunityService.HotRes,
  outfit: () => ({
    hat: $item`Daylight Shavings Helmet`,
    shirt: $items`Jurassic Parka, denim jacket`,
    back: $item`unwrapped knock-off retro superhero cape`,
    weapon: $item`industrial fire extinguisher`,
    offhand: $items`meteorite guard, Fourth of May Cosplay Saber`,
    pants: $item`designer sweatpants`,
    acc1: $item`your cowboy boots`,
    acc2: $item`Beach Comb`,
    acc3: $item`Brutal brogues`,
    familiar: $familiar`Exotic Parrot`,
    famequip: $item`tiny stillsuit`,
    modes: { parka: "pterodactyl", retrocape: ["vampire", "hold"] },
  }),
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [
    ...restoreBuffTasks(buffs),
    ...commonFamiliarWeightBuffs(),
    { ...beachTask($effect`Hot-Headed`), core: "hard" },
    beachTask($effect`Does It Have a Skull In There??`),
    asdonTask("Safely"),
    {
      name: "Extinguisher",
      completed: () => have($effect`Fireproof Foam Suit`),
      ready: () => get("_saberForceUses") < 5,
      do: (): void => {
        adv1($location`The Dire Warren`, -1, "");
        if (handlingChoice()) runChoice(-1);
      },
      choices: { [1387]: 3 },
      outfit: () =>
        uniform({
          changes: {
            familiar: $familiar.none,
            famequip: $item.none,
            weapon: $item`Fourth of May Cosplay Saber`,
            offhand: $item`industrial fire extinguisher`,
          },
        }),
      combat: new CSStrategy(() =>
        Macro.skill($skill`Fire Extinguisher: Foam Yourself`).skill($skill`Use the Force`),
      ),
      post: () => examine($item`industrial fire extinguisher`),
    },
    {
      core: "hard",
      name: "Pale Horse",
      completed: () => Horsery.current() === "pale",
      do: () => Horsery.changeHorse("pale"),
    },
    {
      name: "Deep Dark Visions",
      completed: () => have($effect`Visions of the Deep Dark Deeps`, 20),
      do: (): void => {
        while (myHp() < myMaxhp()) {
          ensureMp(20);
          useSkill(1, $skill`Cannelloni Cocoon`);
        }
        ensureMp(100);
        useSkill(1, $skill`Deep Dark Visions`);
      },
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        shirt: $items`Jurassic Parka, denim jacket`,
        back: $item`unwrapped knock-off retro superhero cape`,
        weapon: $item`industrial fire extinguisher`,
        offhand: $item`Fourth of May Cosplay Saber`,
        pants: $item`Cargo Cultist Shorts`,
        acc1: $item`your cowboy boots`,
        acc2: $item`Beach Comb`,
        acc3: $item`Brutal brogues`,
        familiar: $familiar`Exotic Parrot`,
        famequip: $item`tiny stillsuit`,
        modes: { parka: "ghostasaurus", retrocape: ["vampire", "hold"] },
      },
    },
    {
      name: "Meteorite Guard",
      completed: () => have($item`meteorite guard`),
      ready: () => have($item`metal meteoroid`),
      do: () => create($item`meteorite guard`),
    },
  ],
};

export default HotRes;
