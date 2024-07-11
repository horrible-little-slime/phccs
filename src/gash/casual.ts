import { burnSafaris, getSkillsToPerm, smokeEmIfYouGotEm } from "./lib.js";
import { visitUrl } from "kolmafia";
import { $class, $item, $path, ascend, Lifestyle, prepareAscension } from "libram";

export function main(): void {
  burnSafaris();
  smokeEmIfYouGotEm();
  prepareAscension({
    garden: "packet of thanksgarden seeds",
    eudora: "Our Daily Candles™ order form",
    chateau: {
      desk: "continental juice bar",
      nightstand: "electric muscle stimulator",
      ceiling: "ceiling fan",
    },
  });

  $item`farto`;

  visitUrl("council.php");

  ascend({
    path: $path.none,
    playerClass: $class`Seal Clubber`,
    lifestyle: Lifestyle.casual,
    moon: "canadia",
    consumable: $item`astral six-pack`,
    permOptions: { neverAbort: true, permSkills: getSkillsToPerm() },
  });
}
