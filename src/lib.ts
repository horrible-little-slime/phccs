import { CSStrategy } from "./combat";
import { StrictCombatTask } from "grimoire-kolmafia";
import {
  availableAmount,
  buy,
  Class,
  cliExecute,
  create,
  eat,
  equip,
  equippedAmount,
  equippedItem,
  getCampground,
  getClanName,
  getProperty,
  haveEffect,
  Item,
  MafiaClass,
  myMaxmp,
  myMp,
  print,
  restoreMp,
  retrieveItem,
  setProperty,
  Skill,
  Slot,
  sweetSynthesis,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $skill,
  $skills,
  bestLibramToCast,
  byStat,
  clamp,
  Delayed,
  get,
  getModifier,
  have,
  possibleLibramSummons,
  PropertiesManager,
  Witchess,
} from "libram";
import { NumericModifier } from "libram/dist/modifierTypes";

export type CSTask = StrictCombatTask<never, CSStrategy> & {
  core?: Delayed<"hard" | "soft">;
  class?: Delayed<Class[]>;
};
export const PropertyManager = new PropertiesManager();

export function fuelUp(): void {
  buy(1, $item`all-purpose flower`);
  use(1, $item`all-purpose flower`);
  buy(availableAmount($item`wad of dough`), $item`soda water`);
  create(availableAmount($item`wad of dough`), $item`loaf of soda bread`);
  cliExecute(`asdonmartin fuel ${availableAmount($item`loaf of soda bread`)} soda bread`);
}

const SYNTH_PAIRS = byStat({
  Mysticality: [
    [$item`Crimbo fudge`, $item`Crimbo fudge`],
    [$item`Crimbo fudge`, $item`bag of many confections`],
    [$item`Crimbo peppermint bark`, $item`Crimbo candied pecan`],
    [$item`Crimbo peppermint bark`, $item`peppermint sprout`],
    [$item`Crimbo candied pecan`, $item`peppermint crook`],
  ],
  Muscle: [
    [$item`Crimbo fudge`, $item`Crimbo peppermint bark`],
    [$item`bag of many confections`, $item`Crimbo peppermint bark`],
    [$item`Crimbo candied pecan`, $item`peppermint patty`],
    [$item`peppermint sprout`, $item`peppermint patty`],
  ],
  Moxie: [
    [$item`Crimbo fudge`, $item`Crimbo candied pecan`],
    [$item`Crimbo fudge`, $item`peppermint sprout`],
    [$item`bag of many confections`, $item`Crimbo candied pecan`],
    [$item`bag of many confections`, $item`peppermint sprout`],
    [$item`Crimbo peppermint bark`, $item`peppermint twist`],
  ],
});
export function synthExp(): void {
  if (getCampground()["Peppermint Pip Packet"]) {
    visitUrl("campground.php?action=garden");
  }
  if (!get("_candySummons")) {
    useSkill(1, $skill`Summon Crimbo Candy`);
  }
  for (const [candy1, candy2] of SYNTH_PAIRS) {
    const enough = candy1 === candy2 ? have(candy1, 2) : have(candy1) && retrieveItem(candy2);
    if (enough) {
      if (sweetSynthesis(candy1, candy2)) return;
    }
  }
  throw new Error("Failed to synthesize!");
}

export const SYNTH_EFFECT = byStat({
  Mysticality: $effect`Synthesis: Learning`,
  Moxie: $effect`Synthesis: Style`,
  Muscle: $effect`Synthesis: Movement`,
});

export function setClan(target: string): boolean {
  //stolen directly from bean
  if (getClanName() !== target) {
    const clanCache = JSON.parse(getProperty("hccs_clanCache") || "{}");
    if (clanCache.target === undefined) {
      const recruiter = visitUrl("clan_signup.php");
      const clanRe = /<option value=([0-9]+)>([^<]+)<\/option>/g;
      let match;
      while ((match = clanRe.exec(recruiter)) !== null) {
        clanCache[match[2]] = match[1];
      }
    }
    setProperty("hccs_clanCache", JSON.stringify(clanCache));

    visitUrl(`showclan.php?whichclan=${clanCache[target]}&action=joinclan&confirm=on&pwd`);
    if (getClanName() !== target) {
      throw `failed to switch clans to ${target}. Did you spell it correctly? Are you whitelisted?`;
    }
  }
  return true;
}

export function tryUse(quantity: number, it: Item): boolean {
  //ripped straight from bean
  if (availableAmount(it) > 0) {
    return use(quantity, it);
  } else {
    return false;
  }
}

export function ensureMp(mp: number): void {
  if (myMp() > mp) return;
  if (mp > myMaxmp()) throw `Insufficient maximum mp!`;
  while (
    have($item`magical sausage`) ||
    (have($item`magical sausage casing`) && myMp() < mp && get("_sausagesEaten") < 23)
  ) {
    retrieveItem($item`magical sausage`);
    eat($item`magical sausage`);
  }
  while (have($item`psychokinetic energy blob`) && myMp() < mp) {
    use($item`psychokinetic energy blob`);
  }
  if (myMp() < mp) restoreMp(mp);
}

export const maximizeFamiliar = have($familiar`Disembodied Hand`)
  ? $familiar`Disembodied Hand`
  : $familiar`Left-Hand Man`;

function canCastLibrams(): boolean {
  const summonNumber = 1 + get("libramSummons");
  const cost = 1 + (summonNumber * (summonNumber - 1)) / 2;
  return myMp() >= cost;
}

function totalDuration(item: Item): number {
  const effect = getModifier("Effect", item);
  return haveEffect(effect) + getModifier("Effect Duration", item) * availableAmount(item);
}

export const availableFights: () => number = () =>
  clamp(5 - Witchess.fightsDone(), 0, 5) +
  clamp(availableAmount($item`BRICKO eye brick`), 0, 10 - get("_brickoFights"));

const potentialFights = () =>
  clamp(5 - Witchess.fightsDone(), 0, 5) +
  clamp(availableAmount($item`BRICKO eye brick`), 0, 10 - get("_brickoFights")) +
  clamp(3 - get("_brickoEyeSummons"), 0, 10 - get("_brickoFights"));

function castPriciestLibram(): boolean {
  const choice = bestLibramToCast();
  if (!choice) return false;
  return useSkill(1, choice);
}
export function burnLibrams(): void {
  const testsDone = get("csServicesPerformed").split(",");
  if (
    !$skills`Summon BRICKOs, Summon Taffy, Summon Love Song, Summon Candy Heart`.some((skill) =>
      have(skill)
    )
  )
    return;
  while (canCastLibrams()) {
    if (!testsDone.includes("Breed More Collies")) {
      const libramPossibilities = possibleLibramSummons();
      const decisionMap = new Map<Skill, number>();

      if (have($skill`Summon Candy Heart`) && totalDuration($item`green candy heart`) <= 0) {
        const probability =
          libramPossibilities.get($skill`Summon Candy Heart`)?.get($item`green candy heart`) ?? 0;
        decisionMap.set($skill`Summon Candy Heart`, 3 * probability);
      }

      if (have($skill`Summon Taffy`) && totalDuration($item`pulled blue taffy`) < 50) {
        const probability =
          libramPossibilities.get($skill`Summon Taffy`)?.get($item`pulled blue taffy`) ?? 0;
        decisionMap.set($skill`Summon Taffy`, 1 * probability);
      }

      if (have($skill`Summon Love Song`) && totalDuration($item`love song of icy revenge`) < 20) {
        const probability =
          libramPossibilities.get($skill`Summon Love Song`)?.get($item`love song of icy revenge`) ??
          0;
        const currentWeightValue = clamp(
          Math.ceil(totalDuration($item`love song of icy revenge`) / 2),
          0,
          10
        );
        const newWeightValue = clamp(
          Math.ceil((totalDuration($item`love song of icy revenge`) + 5) / 2),
          0,
          10
        );
        decisionMap.set(
          $skill`Summon Love Song`,
          probability * (newWeightValue - currentWeightValue)
        );
      }

      if (
        have($skill`Summon BRICKOs`) &&
        get("_brickoEyeSummons") < 3 &&
        testsDone.includes("Donate Blood")
      ) {
        const probability =
          libramPossibilities.get($skill`Summon BRICKOs`)?.get($item`BRICKO eye brick`) ?? 0;
        if (
          have($familiar`Shorter-Order Cook`) &&
          totalDuration($item`short stack of pancakes`) === 0 &&
          availableFights() < 11 - get("_shortOrderCookCharge") &&
          potentialFights() >= 11 - get("_shortOrderCookCharge")
        ) {
          decisionMap.set(
            $skill`Summon BRICKOs`,
            (probability * 11) / (11 - get("_shortOrderCookCharge") - availableFights())
          );
        }

        if (
          have($familiar`Garbage Fire`) &&
          !have($item`burning paper crane`) &&
          !have($item`burning newspaper`) &&
          availableFights() < 30 - get("garbageFireProgress") &&
          potentialFights() >= 30 - get("garbageFireProgress")
        ) {
          const value = (5 / (30 - get("garbageFireProgress") - availableFights())) * probability;
          const otherBrickoValue = decisionMap.get($skill`Summon BRICKOs`) ?? 0;
          if (value > otherBrickoValue) {
            decisionMap.set($skill`Summon BRICKOs`, value);
          }
        }
      }
      const bestLibrams = Array.from(decisionMap).sort((a, b) => b[1] - a[1]);
      if (bestLibrams.length === 0) {
        if (!castPriciestLibram()) return;
      } else {
        const decision = bestLibrams[0][0];
        useSkill(1, decision);
      }
    } else if (!castPriciestLibram()) return;
  }
}

export function unequip(item: Item): void {
  while (equippedAmount(item) > 0) {
    const slot = Slot.all().find((equipmentSlot) => equippedItem(equipmentSlot) === item);
    if (!slot) return;
    equip(slot, $item`none`);
  }
}

export function favouriteBirdHas(modifier: NumericModifier, positive = true): boolean {
  const sign = positive ? "+" : "-";
  return get("yourFavoriteBirdMods")
    .split(",")
    .some((mod) => mod.includes(`${modifier}: ${sign}`));
}

export function currentBirdHas(modifier: NumericModifier, positive = true): boolean {
  const sign = positive ? "+" : "-";
  return get("_birdOfTheDayMods")
    .split(",")
    .some((mod) => mod.includes(`${modifier}: ${sign}`));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function printJson(json: any): void {
  print(
    JSON.stringify(json, (k, v) => {
      if (v instanceof MafiaClass) {
        return v.toString();
      }
      return v;
    })
  );
}
