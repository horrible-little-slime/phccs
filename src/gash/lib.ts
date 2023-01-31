import { myName, useSkill } from "kolmafia";
import { $skill, get } from "libram";

const lowercaseName = myName().toLowerCase();
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
    "Captain Scotch",
    "threebullethamburgler",
    "BurningBman",
    "Katarn",
    "Baden",
    "Purple Shrimp",
    "Butts McGruff",
    "SSBBHax",
].filter((n) => n.toLowerCase() !== lowercaseName);

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
