import { getPermedSkills, Skill } from "kolmafia";
import { $class, $item, $path, ascend, have, Lifestyle, prepareAscension } from "libram";
import { burnSafaris } from "./lib";

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

    ascend(
        $path.none,
        $class`Seal Clubber`,
        Lifestyle.casual,
        "canadia",
        $item`astral six-pack`,
        undefined,
        { neverAbort: true, permSkills }
    );
}
