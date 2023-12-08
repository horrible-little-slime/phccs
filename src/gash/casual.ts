import { burnSafaris } from "./lib";
import { getPermedSkills, Skill, visitUrl } from "kolmafia";
import { $class, $item, $path, ascend, have, Lifestyle, prepareAscension } from "libram";

export function main(): void {
  burnSafaris();
  prepareAscension({
    garden: "packet of thanksgarden seeds",
    eudora: "Our Daily Candles™ order form",
    chateau: {
      desk: "continental juice bar",
      nightstand: "electric muscle stimulator",
      ceiling: "ceiling fan",
    },
  });

  const perms = getPermedSkills();
  const permSkills = new Map(
    Skill.all()
      .filter((s) => have(s) && !perms[s.name] && s.permable)
      .map((s) => [s, Lifestyle.hardcore])
  );

  visitUrl("council.php");

  ascend({
    path: $path.none,
    playerClass: $class`Seal Clubber`,
    lifestyle: Lifestyle.casual,
    moon: "canadia",
    consumable: $item`astral six-pack`,
    pet: undefined,
    permOptions: { neverAbort: true, permSkills },
  });
}
