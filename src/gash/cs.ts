import { burnSafaris } from "./lib";
import { getPermedSkills, Skill } from "kolmafia";
import { $class, $item, $path, ascend, have, Lifestyle, prepareAscension } from "libram";

export function main(args = ""): void {
    burnSafaris();

    prepareAscension({
        garden: "Peppermint Pip Packet",
        eudora: "Our Daily Candles™ order form",
        chateau: {
            desk: "continental juice bar",
            nightstand: "foreign language tapes",
            ceiling: "ceiling fan",
        },
    });

    const lifestyle = args.includes("softcore") ? Lifestyle.softcore : Lifestyle.hardcore;

    const pet = lifestyle === Lifestyle.softcore ? $item`astral chapeau` : $item`astral statuette`;

    const perms = getPermedSkills();
    const permSkills = new Map(
        Skill.all()
            .filter((s) => have(s) && !perms[s.name] && s.permable)
            .map((s) => [s, Lifestyle.hardcore])
    );

    ascend(
        $path`Community Service`,
        $class`Pastamancer`,
        lifestyle,
        "knoll",
        $item`astral six-pack`,
        pet,
        {
            neverAbort: true,
            permSkills,
        }
    );
}
