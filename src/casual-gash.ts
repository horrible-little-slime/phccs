import { useSkill } from "kolmafia";
import {
    $class,
    $item,
    $path,
    $skill,
    ascend,
    get,
    Lifestyle,
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
    "Malibu Stacey",
    "DanceCommander6",
];
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
export function main(): void {
    burnSafaris();
    prepareAscension({
        workshed: "Asdon Martin keyfob",
        garden: "packet of thanksgarden seeds",
        eudora: "Our Daily Candles™ order form",
        chateau: {
            desk: "continental juice bar",
            nightstand: "electric muscle stimulator",
            ceiling: "ceiling fan",
        },
    });

    ascend($path.none, $class`Seal Clubber`, Lifestyle.casual, "canadia", $item`astral six-pack`);
}
