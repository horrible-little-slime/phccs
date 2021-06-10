import {
  adv1,
  availableAmount,
  buy,
  choiceFollowsFight,
  cliExecute,
  containsText,
  create,
  equip,
  getClanName,
  getProperty,
  handlingChoice,
  haveEffect,
  inMultiFight,
  myMaxhp,
  print,
  restoreHp,
  runChoice,
  runCombat,
  setAutoAttack,
  setProperty,
  sweetSynthesis,
  totalTurnsPlayed,
  toUrl,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import { $effect, $familiar, $item, $location, $skill, $slot, get, have, Macro } from "libram";

export function fuelUp() {
  buy(1, $item`all-purpose flower`);
  use(1, $item`all-purpose flower`);
  buy(availableAmount($item`wad of dough`), $item`soda water`);
  create(availableAmount($item`wad of dough`), $item`soda bread`);
  cliExecute(`asdonmartin fuel ${availableAmount($item`soda bread`)} soda bread`);
}

export function synthExp() {
  if (get("harvestGardenHardcore") === "none") {
    visitUrl("campground.php?action=garden");
  }
  if (get("_candySummons") === 0) {
    useSkill(1, $skill`summon crimbo candy`);
  }
  const fudge = $item`crimbo fudge`;
  const pecan = $item`crimbo candied pecan`;
  const bark = $item`crimbo peppermint bark`;
  const fudges = availableAmount(fudge);
  const pecans = availableAmount(pecan);
  const barks = availableAmount(bark);
  if (fudges >= 2) {
    sweetSynthesis(fudge, fudge);
  } else if (barks >= 1) {
    if (pecans >= 1) {
      sweetSynthesis(pecan, bark);
    } else {
      sweetSynthesis(bark, $item`peppermint sprout`);
    }
  } else {
    if (availableAmount($item`sugar shotgun`) === 0) {
      create(1, $item`sugar shotgun`);
    }
    if (pecans >= 1) {
      sweetSynthesis(pecan, $item`sugar shotgun`);
    } else {
      sweetSynthesis($item`sugar shotgun`, $item`peppermint sprout`);
    }
  }
  if (haveEffect($effect`synthesis: learning`) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize learning. Pwease fix me :c.";
  }
}

export function synthItem() {
  if (get("harvestGardenHardcore") === "none") {
    visitUrl("campground.php?action=garden");
  }
  if (get("_candySummons") === 0) {
    useSkill(1, $skill`summon crimbo candy`);
  }
  const fudge = $item`crimbo fudge`;
  const pecan = $item`crimbo candied pecan`;
  const bark = $item`crimbo peppermint bark`;
  const fudges = availableAmount(fudge);
  const pecans = availableAmount(pecan);
  const barks = availableAmount(bark);
  if (barks >= 2) {
    sweetSynthesis(bark, bark);
  } else {
    if (availableAmount($item`peppermint twist`) === 0) {
      create(1, $item`peppermint twist`);
    }
    if (pecans >= 1) {
      sweetSynthesis(pecan, $item`peppermint twist`);
    } else {
      sweetSynthesis($item`peppermint sprout`, $item`peppermint twist`);
    }
  }
  if (haveEffect($effect`synthesis: collection`) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize collection. Pwease fix me :c.";
  }
}

export function synthMyst() {
  if (get("harvestGardenHardcore") === "none") {
    visitUrl("campground.php?action=garden");
  }
  if (get("_candySummons") === 0) {
    useSkill(1, $skill`summon crimbo candy`);
  }
  const fudge = $item`crimbo fudge`;
  const pecan = $item`crimbo candied pecan`;
  const bark = $item`crimbo peppermint bark`;
  const fudges = availableAmount(fudge);
  const pecans = availableAmount(pecan);
  const barks = availableAmount(bark);
  if (availableAmount($item`bag of many confections`) >= 1) {
    if (!get("_chubbyAndPlumpUsed")) {
      useSkill(1, $skill`chubby and plump`);
    }
    sweetSynthesis($item`chubby and plump`, $item`bag of many confections`);
  } else {
    const mint = $item`senior mints`;
    const mints = availableAmount(mint);
    const orangeHeart = $item`orange candy heart`;
    const orangeHearts = () => availableAmount(orangeHeart);
    const pinkHeart = $item`pink candy heart`;
    const pinkHearts = () => availableAmount($item`pink candy heart`);
    let n = 0;
    while (mints + orangeHearts() + pinkHearts() === 0 && n < 11) {
      useSkill(1, $skill`summon candy heart`);
      n++;
    }
    if (mints + orangeHearts() + pinkHearts() === 0) {
      throw "Failed to summon hearts in a timely manner";
    }
    if (mints >= 1) {
      sweetSynthesis(mint, $item`peppermint sprout`);
    } else if (orangeHearts() >= 1) {
      sweetSynthesis(orangeHeart, $item`peppermint sprout`);
    } else if (pinkHearts() >= 1) {
      if (availableAmount($item`peppermint twist`) === 0) {
        create(1, $item`peppermint twist`);
      }
      sweetSynthesis(pinkHeart, $item`peppermint twist`);
    }
  }
  if (haveEffect($effect`synthesis: smart`) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize smart. Pwease fix me :c.";
  }
}

export function synthHot() {
  //none of us are free of sin. i know how to write this better now, but i won't <3
  const wintoMint = $item`wint-o-fresh mint`;
  const wintoMints = availableAmount(wintoMint);
  const whiteHeart = $item`white candy heart`;
  const whiteHearts = () => availableAmount(whiteHeart);
  const greenHeart = $item`green candy heart`;
  const greenHearts = () => availableAmount(greenHeart);
  const orangeHeart = $item`orange candy heart`;
  const orangeHearts = () => availableAmount(orangeHeart);
  const coldHot = $item`cold hots candy`;
  const coldHots = availableAmount(coldHot);
  const daffyTaffy = $item`daffy taffy`;
  const daffyTaffys = availableAmount(daffyTaffy);
  const yellowHeart = $item`yellow candy heart`;
  const yellowHearts = () => availableAmount(yellowHeart);
  const mrMediocre = $item`mr. mediocrebar`;
  const mrMediocres = availableAmount(mrMediocre);
  const lavenderHeart = $item`lavender candy heart`;
  const lavenderHearts = () => availableAmount(lavenderHeart);
  const pinkHeart = $item`pink candy heart`;
  const pinkHearts = () => availableAmount(pinkHeart);
  let n = 0;
  while (
    (wintoMints + whiteHearts() + greenHearts()) * orangeHearts() === 0 &&
    (coldHots + daffyTaffys + yellowHearts()) * (mrMediocres + lavenderHearts()) === 0 &&
    pinkHearts() !== 2 &&
    n <= 11
  ) {
    useSkill(1, $skill`summon candy heart`);
    n++;
  }
  if (n > 11) {
    throw "Unable to retrieve candies in a timely manner";
  }
  if ((wintoMints + whiteHearts() + greenHearts()) * orangeHearts() !== 0) {
    if (wintoMints > 0) {
      sweetSynthesis(wintoMint, orangeHeart);
    } else if (whiteHearts() > 0) {
      sweetSynthesis(whiteHeart, orangeHeart);
    } else {
      sweetSynthesis(greenHeart, orangeHeart);
    }
  } else if ((coldHots + daffyTaffys + yellowHearts()) * (mrMediocres + lavenderHearts()) !== 0) {
    if (mrMediocres >= 1) {
      if (coldHots >= 1) {
        sweetSynthesis(mrMediocre, daffyTaffy);
      } else if (daffyTaffys >= 1) {
        sweetSynthesis(mrMediocre, daffyTaffy);
      } else if (yellowHearts() >= 1) {
        sweetSynthesis(mrMediocre, yellowHeart);
      }
    } else {
      if (coldHots >= 1) {
        sweetSynthesis(lavenderHeart, daffyTaffy);
      } else if (daffyTaffys >= 1) {
        sweetSynthesis(lavenderHeart, daffyTaffy);
      } else if (yellowHearts() >= 1) {
        sweetSynthesis(lavenderHeart, yellowHeart);
      }
    }
  } else {
    sweetSynthesis(pinkHeart, pinkHeart);
  }
  if (haveEffect($effect`synthesis: hot`) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize hot. Pwease fix me :c.";
  }
}

export function kramcoCheck() {
  const kramcoNumber =
    5 + 3 * get("_sausageFights") + Math.pow(Math.max(0, get("_sausageFights") - 5), 3);
  return totalTurnsPlayed() - get("_lastSausageMonsterTurn") + 1 >= kramcoNumber;
}

export function useDefaultFamiliar() {
  if (!get("_bagOfCandy")) {
    useFamiliar($familiar`stocking mimic`);
  } else if (get("camelSpit") !== 100) {
    useFamiliar($familiar`melodramedary`);
    equip($slot`familiar`, $item`dromedary drinking helmet`);
  } else if (
    get("_neverendingPartyFreeTurns") > 0 &&
    get("_neverendingPartyFreeTurns") < 10 &&
    get("_hipsterAdv") < 1
  ) {
    useFamiliar($familiar`mini-hipster`);
  } else if (
    availableAmount($item`burning newspaper`) + availableAmount($item`burning paper crane`) ===
    0
  ) {
    useFamiliar($familiar`garbage fire`);
  } else {
    useFamiliar($familiar`shorter-order cook`);
  }
}

export enum Test {
  HP = 1,
  MUS = 2,
  MYS = 3,
  MOX = 4,
  FAMILIAR = 5,
  WEAPON = 6,
  SPELL = 7,
  NONCOMBAT = 8,
  ITEM = 9,
  HOT_RES = 10,
  COIL_WIRE = 11,
  DONATE = 30,
}

export function testDone(testNum: number) {
  //stolen directly from bean
  print(`Checking test ${testNum}...`);
  const text = visitUrl("council.php");
  return !containsText(text, `<input type=hidden name=option value=${testNum}>`);
}

export function doTest(testNum: number) {
  //stolen directly from bean
  if (!testDone(testNum)) {
    visitUrl(`choice.php?whichchoice=1089&option=${testNum}`);
    if (!testDone(testNum)) {
      throw 'Failed to do test " + testNum + ". Maybe we are out of turns.';
    }
  } else {
    print(`Test ${testNum} already completed.`);
  }
}

export function ensureInnerElf() {
  //stolen merely mostly from bean
  if (!have($effect`Inner Elf`)) {
    setClan("Hobopolis Vacation Home");
    try {
      useFamiliar($familiar`Machine Elf`);
      equip($slot`acc3`, $item`Kremlin's Greatest Briefcase`);
      setChoice(326, 1);
      ensureEffect($effect`Blood Bubble`);
      advMacro($location`The Slime Tube`, Macro.skill($skill`Tranquilizer Dart`));
    } finally {
      setClan("Alliance From Heck");
    }
  }
}

export function fightSausageIfAble(location: Location, macro: Macro) {
  if (kramcoCheck()) {
    equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
    const sausages = get("_sausageFights");
    advMacroAA(location, macro, () => {
      return sausages === get("_sausageFights");
    });
    if (get("lastEncounter") !== "sausage goblin") {
      throw "Did not fight a sausage, but I thought I would. Uh oh!";
    }
  }
}

export function ensurePotionEffect(ef: Effect, potion: Item) {
  //stolen directly from bean
  if (haveEffect(ef) === 0) {
    if (availableAmount(potion) === 0) {
      create(1, potion);
    }
    if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
      throw `Failed to get effect ${ef.name}.`;
    }
  } else {
    print(`Already have effect ${ef.name}.`);
  }
}

export function ensureEffect(ef: Effect, turns = 1) {
  //stolen directly from bean
  if (haveEffect(ef) < turns) {
    if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
      throw `Failed to get effect ${ef.name}.`;
    }
  } else {
    print(`Already have effect ${ef.name}.`);
  }
}

export function setClan(target: string) {
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

export function setChoice(adv: number, choice: number) {
  //stolen directly from bean
  setProperty(`choiceAdventure${adv}`, `${choice}`);
}

export function uniform() {
  const pants =
    availableAmount($item`pantogram pants`) !== 0 ? $item`pantogram pants` : $item`old sweatpants`;
  const acc3 =
    availableAmount($item`battle broom`) !== 0 ? $item`battle broom` : $item`powerful glove`;
  const back =
    availableAmount($item`lov epaulettes`) !== 0 ? $item`lov epaulettes` : $item`vampyric cloake`;
  equip($slot`hat`, $item`iunion crown`);
  equip($slot`shirt`, $item`fresh coat of paint`);
  equip($slot`pants`, pants);
  equip($slot`weapon`, $item`fourth of may cosplay saber`);
  equip($slot`off-hand`, $item`familiar scrapbook`);
  equip($slot`acc1`, $item`your cowboy boots`);
  equip($slot`acc2`, $item`codpiece`);
  equip($slot`acc3`, acc3);
}

export function tryUse(quantity: number, it: Item) {
  //ripped straight from bean
  if (availableAmount(it) > 0) {
    return use(quantity, it);
  } else {
    return false;
  }
}

export const delevel = Macro.skill("curse of weaksauce")
  .skill("micrometeor")
  .item("time-spinner")
  .skill("summon love gnats");

export const candyblast = Macro.while_(
  '!match "Hey, some of it is even intact afterwards!"',
  Macro.skill("candyblast")
);

export const easyFight = Macro.skill("extract").skill("sing along");

export function multiFightAutoAttack() {
  while (choiceFollowsFight() || inMultiFight()) {
    visitUrl("choice.php");
  }
}

export function heal() {
  restoreHp(myMaxhp());
}

export function advMacroAA(
  location: Location,
  macro: Macro,
  parameter: number | (() => boolean) = 1,
  afterCombatAction?: () => void,
  rebuildMacro: boolean = false
) {
  let n = 0;
  const condition = () => {
    return typeof parameter === "number" ? n < parameter : parameter();
  };
  const macroText = macro.toString();
  macro.setAutoAttack();
  while (condition()) {
    if (rebuildMacro) macro.setAutoAttack();
    adv1(location, -1, (round: number, foe: Monster, text: string) => {
      return rebuildMacro ? macro.toString() : macroText;
    });
    if (afterCombatAction) afterCombatAction();
    n++;
  }
}

export function advMacro(
  location: Location,
  macro: Macro,
  parameter: number | (() => boolean) = 1,
  afterCombatAction?: () => void,
  rebuildMacro: boolean = false
) {
  setAutoAttack(0);
  let n = 0;
  const condition = () => {
    return typeof parameter === "number" ? n < parameter : parameter();
  };
  const macroText = macro.toString();
  while (condition()) {
    adv1(location, -1, () => {
      return rebuildMacro ? macro.toString() : macroText;
    });
    if (afterCombatAction) afterCombatAction();
    n++;
  }
}

export function mapMacro(location: Location, monster: Monster, macro: Macro) {
  macro.setAutoAttack();
  useSkill($skill`Map the Monsters`);
  if (!get("mappingMonsters")) throw `I am not actually mapping anything. Weird!`;
  else {
    while (get("mappingMonsters")) {
      runChoice(1, `heyscriptswhatsupwinkwink=${monster.id}`);
      runCombat(macro.toString());
    }
  }
}

export function horsery() {
  return get("_horsery");
}

export function horse(horse: string) {
  if (!horse.includes("horse")) horse = horse + " horse";
  if (horsery() !== horse) cliExecute(`horsery ${horse}`);
}
