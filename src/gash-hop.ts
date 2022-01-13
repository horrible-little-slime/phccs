import { useSkill } from "kolmafia";
import {
    $class,
    $familiar,
    $item,
    $skill,
    ascend,
    get,
    have,
    Lifestyle,
    Paths,
    prepareAscension,
} from "libram";

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
];

while ($skill`Experience Safari`.timescast < get("skillLevel180") && safariTargets.length) {
    useSkill($skill`Experience Safari`, 1, safariTargets[0]);
    safariTargets.shift();
}

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

const pet = have($familiar`Baby Bugged Bugbear`)
    ? $item`astral statuette`
    : $item`astral pet sweater`;

ascend(
    Paths.CommunityService,
    $class`Pastamancer`,
    Lifestyle.hardcore,
    "knoll",
    $item`astral six-pack`,
    pet
);
