import { useSkill } from "kolmafia";
import { $class, $item, $skill, ascend, get, Lifestyle, Paths, prepareAscension } from "libram";

const safariTargets = [
    "Phillammon",
    "Busta_Rhymes",
    "Manendra",
    "Gausie",
    "Beldur",
    "worthawholebean",
    "ReverKiller",
];
while ($skill`Experience Safari`.timescast < get("skillLevel180") && safariTargets) {
    useSkill($skill`Experience Safari`, 1, safariTargets[0]);
    safariTargets.shift();
}

prepareAscension(
    {
        workshed: $item`Asdon Martin keyfob`,
        garden: $item`Peppermint pip packet`,
        eudora: $item`Our Daily Candles™ order form`,
    },
    {
        desk: $item`continental juice bar`,
        nightstand: $item`foreign language tapes`,
        ceiling: $item`ceiling fan`,
    }
);

ascend(
    Paths.CommunityService,
    $class`Pastamancer`,
    Lifestyle.hardcore,
    "knoll",
    $item`astral six-pack`
);
