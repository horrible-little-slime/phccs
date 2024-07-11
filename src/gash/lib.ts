import {
  getPermedSkills,
  myId,
  myName,
  retrieveItem,
  Skill,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import { $item, $skill, get, have, Lifestyle, withChoice } from "libram";

const lowercaseName = myName().toLowerCase();
const safariTargets = [
  "Kenny Kamakazi",
  "Busta_Rhymes",
  "Manendra",
  "Gausie",
  "Beldur",
  "worthawholebean",
  "ReverKiller",
  "Asmodais",
  "The Dictator",
  "Malibu Stacey",
  "DanceCommander6",
  "Captain Scotch",
  "threebullethamburgler",
  "BurningBman",
  "Katarn",
  "MrFizzyBubbs",
  "Purple Shrimp",
  "Butts McGruff",
  "Haxxi",
].filter((n) => n.toLowerCase() !== lowercaseName);

export function burnSafaris(): void {
  for (let i = safariTargets.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = safariTargets[i];
    safariTargets[i] = safariTargets[j];
    safariTargets[j] = temp;
  }

  while ($skill`Experience Safari`.timescast < get("skillLevel180") && safariTargets.length) {
    useSkill($skill`Experience Safari`, 1, safariTargets[0]);
    safariTargets.shift();
  }
}

export function getSkillsToPerm(): Map<Skill, Lifestyle> {
  const perms = getPermedSkills();
  return new Map(
    Skill.all()
      .filter((s) => have(s) && !perms[s.name] && s.permable)
      .map((s) => [s, Lifestyle.hardcore]),
  );
}

export function smokeEmIfYouGotEm(): void {
  const fullText = visitUrl("https://www.gutenberg.org/cache/epub/1321/pg1321.txt");
  const lines = fullText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const poemLines = lines.slice(
    lines.indexOf("*** START OF THE PROJECT GUTENBERG EBOOK THE WASTE LAND ***"),
    lines.indexOf("*** END OF THE PROJECT GUTENBERG EBOOK THE WASTE LAND ***"),
  );
  const MESSAGE = poemLines[Number(myId()) % poemLines.length];

  retrieveItem($item`campfire smoke`);
  withChoice(1394, `1&message=${MESSAGE}`, () => use($item`campfire smoke`));
}
