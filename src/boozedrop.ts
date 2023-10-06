import { CSStrategy, Macro } from "./combat";
import { asdonTask, deckTask, potionTask, skillTask, songTask } from "./commons";
import { CSQuest } from "./engine";
import uniform from "./outfit";
import { OutfitSpec } from "grimoire-kolmafia";
import { canAdventure, cliExecute, create, use, useSkill, visitUrl } from "kolmafia";
import {
  $classes,
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  byClass,
  CommunityService,
  get,
  have,
  SourceTerminal,
} from "libram";

const BoozeDrop: CSQuest = {
  name: "Booze Drop",
  type: "SERVICE",
  test: CommunityService.BoozeDrop,
  outfit: (): OutfitSpec => {
    cliExecute("fold wad of used tape");
    return {
      hat: $item`wad of used tape`,
      weapon: $items`extra-large utility candle, runed taper candle, novelty sparkling candle, Fourth of May Cosplay Saber`,
      offhand: $item`unbreakable umbrella`,
      back: $items`Buddy Bjorn, protonic accelerator pack`,
      riders: { "buddy-bjorn": $familiar`Party Mouse` },
      acc1: $item`Guzzlr tablet`,
      acc2: $item`Cincho de Mayo`,
      acc3: $items`barrel hoop earring, gold detective badge, government-issued night-vision goggles, combat lover's locket`,
      famequip: $item`li'l ninja costume`,
      familiar: $familiar`Trick-or-Treating Tot`,
      modes: { umbrella: "bucket style" },
    };
  },
  turnsSpent: 0,
  maxTurns: byClass({ Pastamancer: 1, default: 3 }),
  tasks: [
    {
      name: "Batform",
      completed: () => have($effect`Bat-Adjacent Form`),
      do: $location`The Dire Warren`,
      outfit: () =>
        uniform({
          changes: {
            back: $item`vampyric cloake`,
            offhand: $item`latte lovers member's mug`,
          },
          canAttack: false,
        }),
      combat: new CSStrategy(() =>
        Macro.skill($skill`Become a Bat`).skill($skill`Throw Latte on Opponent`)
      ),
    },
    {
      ...deckTask("X - The Wheel of Fortune"),
      // These classes aren't using barrel for +item
      class: $classes`Sauceror, Turtle Tamer`,
      core: "hard",
    },
    songTask($effect`Fat Leon's Phat Loot Lyric`, $effect`Ode to Booze`),
    {
      name: "Items.enh",
      completed: () => have($effect`items.enh`),
      do: () => SourceTerminal.enhance($effect`items.enh`),
    },
    skillTask($skill`The Spirit of Taking`),
    skillTask($skill`Singer's Faithful Ocelot`),
    {
      name: "Play Pool",
      completed: () => have($effect`Hustlin'`),
      do: () => cliExecute("pool 3"),
    },
    asdonTask("Observantly"),
    {
      name: "Get Anticheese",
      ready: () => canAdventure($location`South of the Border`),
      completed: () => get("lastAnticheeseDay") > 0,
      do: () => visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse"),
    },
    {
      name: "Government",
      ready: () => have($item`anticheese`) && have($item`government cheese`),
      completed: () => have($effect`I See Everything Thrice!`),
      do: () => create(1, $item`government`) && use(1, $item`government`),
    },
    {
      name: "Pray",
      class: $classes`Pastamancer`,
      completed: () => get("_barrelPrayer"),
      do: () => cliExecute("barrelprayer buff"),
    },
    ...$items`Salsa Caliente™ candle, lavender candy heart, bag of grain, emergency glowstick, autumn leaf`.map(
      potionTask
    ),
    {
      name: "Steely-Eyed Squint",
      completed: () => have($effect`Steely-Eyed Squint`),
      do: () => useSkill($skill`Steely-Eyed Squint`),
    },
    {
      name: "Feel Lost",
      completed: () => have($effect`Feeling Lost`),
      do: () => useSkill($skill`Feel Lost`),
    },
  ],
};

export default BoozeDrop;
