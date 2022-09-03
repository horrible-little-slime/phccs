import { $class, $familiar, $item, $path, ascend, have, Lifestyle, prepareAscension } from "libram";
import { burnSafaris } from "./casual-gash";

export function main(args = ""): void {
    burnSafaris();

    prepareAscension({
        workshed: "Asdon Martin keyfob",
        garden: "Peppermint Pip Packet",
        eudora: "Our Daily Candles™ order form",
        chateau: {
            desk: "continental juice bar",
            nightstand: "foreign language tapes",
            ceiling: "ceiling fan",
        },
    });

    const lifestyle = args.includes("softcore") ? Lifestyle.softcore : Lifestyle.hardcore;

    const pet =
        lifestyle === Lifestyle.softcore
            ? $item`astral chapeau`
            : have($familiar`Baby Bugged Bugbear`)
            ? $item`astral statuette`
            : $item`astral pet sweater`;

    ascend(
        $path`Community Service`,
        $class`Pastamancer`,
        lifestyle,
        "knoll",
        $item`astral six-pack`,
        pet
    );
}
