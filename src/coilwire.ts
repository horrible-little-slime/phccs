import { CSStrategy, Macro } from "./combat";
import { asdonTask } from "./commons";
import { CSQuest } from "./engine";
import { guildQuestZone } from "./lib";
import uniform from "./outfit";
import { adv1, buy, create, eat, visitUrl } from "kolmafia";
import {
  $classes,
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  Cartography,
  CombatLoversLocket,
  CommunityService,
  get,
  getKramcoWandererChance,
  have,
} from "libram";

const CoilWire: CSQuest = {
  type: "SERVICE",
  maxTurns: 60,
  test: CommunityService.CoilWire,
  name: "Coil Wire",
  tasks: [
    {
      name: "Sausage",
      ready: () => getKramcoWandererChance() >= 1,
      completed: () => get("_sausageFights") > 0,
      do: (): void => {
        adv1(guildQuestZone, -1, "");
        if (have($item`magical sausage casing`)) {
          create(1, $item`magical sausage`);
        }
        eat(1, $item`magical sausage`);
      },
      outfit: () =>
        uniform({
          changes: {
            offhand: $item`Kramco Sausage-o-Matic™`,
            familiar: $familiar`Left-Hand Man`,
            famequip: $item`Roman Candelabra`,
          },
        }),
      combat: new CSStrategy(() =>
        Macro.trySkill($skill`Blow the Purple Candle!`)
          .trySkill($skill`Blow the Red Candle!`)
          .skill($skill`Micrometeorite`)
          .attack()
          .repeat()
      ),
    },
    {
      name: "Acquire Sombrero-Mounted Sparkler",
      completed: () => have($item`sombrero-mounted sparkler`),
      do: () => {
        visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2");
        buy(1, $item`sombrero-mounted sparkler`);
      },
    },
    asdonTask("Obnoxiously"),
    {
      name: "Spring Run",
      completed: () => have($effect`Everything Looks Green`),
      do: guildQuestZone,
      outfit: () =>
        uniform({
          canAttack: false,
          changes: { acc1: $item`spring shoes`, hat: $item`sombrero-mounted sparkler` },
        }),
      combat: new CSStrategy(() => Macro.trySkill($skill`Spring Away`)),
    },
    {
      name: "Fruity Skeleton",
      class: $classes`Sauceror`,
      completed: () => have($item`cherry`),
      ready: () => !have($effect`Everything Looks Yellow`),
      do: (): void => {
        Cartography.mapMonster($location`The Skeleton Store`, $monster`novelty tropical skeleton`);
      },
      outfit: () =>
        uniform({
          canAttack: false,
          changes: { shirt: $item`Jurassic Parka`, modes: { parka: "dilophosaur" } },
        }),
      combat: new CSStrategy(() => Macro.skill($skill`Spit jurassic acid`)),
    },
    {
      name: "Evil Olive",
      class: $classes`Disco Bandit, Accordion Thief`,
      completed: () => have($item`jumbo olive`),
      ready: () => !have($effect`Everything Looks Yellow`),
      do: () => CombatLoversLocket.reminisce($monster`Evil Olive`),
      outfit: () =>
        uniform({
          canAttack: false,
          changes: { shirt: $item`Jurassic Parka`, modes: { parka: "dilophosaur" } },
        }),
      combat: new CSStrategy(() => Macro.skill($skill`Spit jurassic acid`)),
    },
  ],
  outfit: () => ({
    hat: $items`astral chapeau, Iunion Crown`,
    shirt: $item`Jurassic Parka`,
    pants: $item`Cargo Cultist Shorts`,
    weapon: $item`Fourth of May Cosplay Saber`,
    offhand: $item`august scepter`,
    acc1: $item`Eight Days a Week Pill Keeper`,
    acc2: $item`Powerful Glove`,
    acc3: $item`Guzzlr tablet`,
    familiar: $familiar`Left-Hand Man`,
    famequip: $items`Abracandalabra, unbreakable umbrella`,
    modes: { parka: "ghostasaurus" },
  }),
};

export default CoilWire;
