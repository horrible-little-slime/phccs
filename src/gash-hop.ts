import { retrieveItem } from "kolmafia";
import { $class, $familiar, $item, ascend, have, Lifestyle, Paths, prepareAscension } from "libram";
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

    if (lifestyle === Lifestyle.softcore) retrieveItem(1, $item`corrupted marrow`);

    ascend(
        Paths.CommunityService,
        $class`Pastamancer`,
        lifestyle,
        "knoll",
        $item`astral six-pack`,
        pet
    );
}
