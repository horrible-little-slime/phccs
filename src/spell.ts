import { CSStrategy, Macro } from "./combat";
import {
  beachTask,
  innerElf,
  meteorShower,
  potionTask,
  restoreBuffTasks,
  skillTask,
  songTask,
} from "./commons";
import { CSEngine, CSQuest } from "./engine";
import { horse, horsery, unequip } from "./lib";
import uniform from "./outfit";
import {
  canadiaAvailable,
  canEquip,
  cliExecute,
  myLevel,
  numericModifier,
  pullsRemaining,
  retrieveItem,
  storageAmount,
  takeStorage,
  use,
  visitUrl,
} from "kolmafia";
import {
  $classes,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  CommunityService,
  get,
  getSaleValue,
  have,
} from "libram";

const buffs = $effects`Carol of the Hells, Arched Eyebrow of the Archmage, Song of Sauce`;
const chefstaves = $items`Staff of the Roaring Hearth, Staff of Simmering Hatred, Staff of Kitchen Royalty, Staff of the Deepest Freeze, Staff of Frozen Lard, Staff of the Peppermint Twist`;

const Spell: CSQuest = {
  name: "Spell Damage",
  type: "SERVICE",
  test: CommunityService.SpellDamage,
  outfit: () => ({
    hat: $items`astral chapeau, Hollandaise helmet, Iunion Crown`,
    weapon: [...chefstaves, $item`weeping willow wand`],
    offhand: $item`Abracandalabra`,
    pants: $item`designer sweatpants`,
    acc1: $items`meteorite necklace, Kremlin's Greatest Briefcase`,
    acc2: $item`codpiece`,
    acc3: $item`battle broom`,
    ...(CSEngine.core === "soft"
      ? { familiar: $familiar`Disembodied Hand`, famequip: $item`Stick-Knife of Loathing` }
      : { familiar: $familiar`Left-Hand Man`, equipment: $item`astral statuette` }),
    back: $items`Buddy Bjorn, protonic accelerator pack`,
    riders: CSEngine.core === "soft" ? { "buddy-bjorn": $familiar`Mechanical Songbird` } : {},
  }),
  turnsSpent: 1,
  maxTurns: 30,
  tasks: [
    skillTask($skill`Simmer`),
    {
      name: "Do You Crush What I Crush?",
      completed: () => have($effect`Do You Crush What I Crush?`),
      ready: () => !have($effect`Holiday Yoked`),
      do: $location`The Dire Warren`,
      outfit: () =>
        uniform({
          changes: { familiar: $familiar`Ghost of Crimbo Carols`, famequip: $item.none },
        }),
      prepare: () => horsery() === "pale" && horse("dark"),
      combat: new CSStrategy(() =>
        Macro.trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`)
          .trySkill($skill`Feel Hatred`)
          .trySkill($skill`Snokebomb`)
          .abort()
      ),
    },
    {
      name: "Barrel Prayer",
      class: $classes`Sauceror`,
      completed: () => get("_barrelPrayer"),
      do: () => cliExecute("barrelprayer buff"),
    },
    potionTask($item`tobiko marble soda`),
    songTask($effect`Jackasses' Symphony of Destruction`, $effect`The Sonata of Sneakiness`),
    ...restoreBuffTasks(buffs),
    beachTask($effect`We're All Made of Starfish`),
    potionTask($item`LOV Elixir #6`),
    {
      name: "Cargopocket",
      completed: () => get("_cargoPocketEmptied"),
      ready: () =>
        $items`sizzling desk bell, frost-rimed desk bell, uncanny desk bell, nasty desk bell, greasy desk bell`.every(
          (item) => getSaleValue(item) < 4 * get("valueOfAdventure")
        ),
      do: () => cliExecute("cargo 177"),
    },
    potionTask($item`Yeg's Motel hand soap`),
    {
      name: "Briefcase",
      ready: () =>
        !$items`meteorite fragment, meteorite earring, meteorite necklace, meteorite ring`.some(
          (item) => have(item)
        ),
      completed: () =>
        numericModifier($item`Kremlin's Greatest Briefcase`, "Spell Damage Percent") > 0,
      do: () => cliExecute("Briefcase.ash enchantment spell"),
    },
    {
      name: "Mariachi Hat",
      completed: () => have($item`mariachi hat`),
      do: () => retrieveItem($item`mariachi hat`),
    },
    {
      name: "Weeping Willow Wand",
      completed: () => have($item`weeping willow wand`),
      core: "hard",
      do: (): void => {
        if (!have($item`flimsy hardwood scraps`)) visitUrl("shop.php?whichshop=lathe");
        retrieveItem($item`weeping willow wand`);
      },
    },
    {
      name: "Tea Party",
      completed: () => get("_madTeaParty"),
      do: () => cliExecute("hatter mariachi hat"),
      prepare: (): void => {
        visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2");
        use($item`"DRINK ME" potion`);
      },
    },
    skillTask($skill`Spirit of Cayenne`),
    potionTask($item`flask of baconstone juice`),
    {
      name: "Saucefingers",
      ready: () => myLevel() >= 15 && have($familiar`Mini-Adventurer`),
      completed: () => have($effect`Saucefingers`),
      class: $classes`Pastamancer`,
      do: $location`The Dire Warren`,
      prepare: () => horsery() === "pale" && horse("dark"),
      outfit: () => uniform({ changes: { familiar: $familiar`Mini-Adventurer` } }),
      combat: new CSStrategy(() =>
        Macro.trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`)
          .trySkill($skill`Feel Hatred`)
          .trySkill($skill`Snokebomb`)
          .abort()
      ),
      choices: { [768]: 4 },
    },
    innerElf(),
    meteorShower(),
    {
      name: "Meteorite Necklace",
      core: "soft",
      completed: () => have($item`meteorite necklace`),
      ready: () =>
        canadiaAvailable() &&
        $items`meteorite fragment, meteorite earring, meteorite ring`.some((item) => have(item)),
      do: (): void => {
        const meteor = $items`meteorite ring, meteorite fragment, meteorite earring`.find((item) =>
          have(item)
        );
        if (meteor) {
          unequip(meteor);
          retrieveItem(1, $item`tenderizing hammer`);
          retrieveItem(1, $item`jewelry-making pliers`);
          if (meteor !== $item`meteorite fragment`) cliExecute(`smash ${meteor}`);
          cliExecute(`make ${$item`meteorite necklace`}`);
        }
      },
    },
    {
      name: "Pull Staff",
      ready: () =>
        chefstaves.filter((s) => storageAmount(s) > 0 && canEquip(s)).length > 0 &&
        pullsRemaining() > 0,
      completed: () => chefstaves.some((staff) => have(staff)),
      core: "soft",
      do: (): void => {
        const staff = chefstaves.find((s) => storageAmount(s) > 0 && canEquip(s));
        if (staff) takeStorage(staff, 1);
      },
    },
  ],
};

export default Spell;
