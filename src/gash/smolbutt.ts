import { burnSafaris, getSkillsToPerm, smokeEmIfYouGotEm } from "./lib";
import { Args } from "grimoire-kolmafia";
import { visitUrl } from "kolmafia";
import { $class, $item, $path, ascend, Lifestyle, makeByXFunction, prepareAscension } from "libram";

const args = Args.create(
  "smolbutt",
  "This script is designed to help you hop the astral gash in a way that makes Butts McGruff smol.",
  {
    class: Args.class({
      help: "What class should we ascend as?",
      default: $class`Seal Clubber`,
    }),
  }
);

const byAscendingStat = makeByXFunction(() => args.class.primestat.toString());

export function main(input = ""): void {
  Args.fill(args, input);

  if (args.help) {
    Args.showHelp(args);
    return;
  }

  burnSafaris();
  smokeEmIfYouGotEm();
  prepareAscension({
    eudora: "Our Daily Candles™ order form",
    chateau: {
      desk: "continental juice bar",
      nightstand: byAscendingStat({
        Mysticality: "foreign language tapes",
        Moxie: "bowl of potpourri",
        Muscle: "electric muscle stimulator",
      }),
      ceiling: "ceiling fan",
    },
  });

  visitUrl("council.php");

  ascend({
    path: $path`A Shrunken Adventurer am I`,
    playerClass: args.class,
    lifestyle: Lifestyle.softcore,
    moon: "platypus",
    consumable: $item`astral six-pack`,
    pet: $item`astral mask`,
    permOptions: {
      neverAbort: true,
      permSkills: getSkillsToPerm(),
    },
  });
}
