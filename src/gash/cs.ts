import { burnSafaris } from "./lib";
import { Args } from "grimoire-kolmafia";
import { abort, equippedItem, getPermedSkills, Skill, StatType, userConfirm } from "kolmafia";
import {
    $class,
    $familiar,
    $item,
    $monster,
    $path,
    $slot,
    ascend,
    CombatLoversLocket,
    have,
    Lifestyle,
    prepareAscension,
} from "libram";

const args = Args.create(
    "phccs_gash",
    "This script is designed to help you hop the astral gash in a way that makes phccs run well. It will also ensure that you have some of the more specific requirements necessary to run phccs.",
    {
        softcore: Args.flag({
            setting: "phccs_softcore",
            help: "Ascend into softcore",
            default: false,
        }),
        class: Args.class({
            setting: "phccs_class",
            help: "What class should we ascend as?",
            default: $class`Pastamancer`,
        }),
        ignorewarnings: Args.flag({
            setting: "phccs_ignoreGashWarnings",
            help: "Don't warn you when you are making a huge mistake",
            default: false,
        }),
    }
);

const SPECIAL_REQUIREMENTS: Record<
    StatType,
    { name: string; meets: () => boolean; reason: string }[]
> = {
    Moxie: [
        {
            name: "Evil Olive in locket",
            meets: () => CombatLoversLocket.unlockedLocketMonsters().includes($monster`Evil Olive`),
            reason: "we need to be able to make equalizer potions!",
        },
        {
            name: "Meteor Earring",
            meets: () => !args.softcore || have($item`meteorite earring`),
            reason: "we don't start in a canadian moonsign!",
        },
        {
            name: "Stocking Mimic",
            meets: () => have($familiar`Stocking Mimic`),
            reason: "sweet synthesis is complicated!",
        },
        {
            name: "Cowboy Boots",
            meets: () => equippedItem($slot`boot skin`) === $item`mountain lion skin`,
            reason: "we want to crank that mainstat for leveling reasons",
        },
    ],
    Muscle: [
        {
            name: "Meteor Ring",
            meets: () => !args.softcore || have($item`meteorite ring`),
            reason: "we don't start in a canadian moonsign!",
        },
        {
            name: "Cowboy Boots",
            meets: () => equippedItem($slot`boot skin`) === $item`grizzled bearskin`,
            reason: "we want to crank that mainstat for leveling reasons",
        },
    ],
    Mysticality: [
        {
            name: "Meteor Necklace",
            meets: () => !args.softcore || have($item`meteorite necklace`),
            reason: "we don't start in a canadian moonsign!",
        },
        {
            name: "Cowboy Boots",
            meets: () => equippedItem($slot`boot skin`) === $item`frontwinder skin`,
            reason: "we want to crank that mainstat for leveling reasons",
        },
    ],
};

export function main(input = ""): void {
    Args.fill(args, input);
    const { softcore, ignorewarnings } = args;
    const playerClass = args.class;
    burnSafaris();

    if (!ignorewarnings) {
        for (const { name, reason, meets } of SPECIAL_REQUIREMENTS[
            playerClass.primestat.toString()
        ]) {
            if (
                !meets() &&
                !userConfirm(
                    `We have failed to meet the requirement ${name} to ascend as a ${playerClass}; this is important because ${reason}. Are you sure you wish to proceed?`
                )
            ) {
                abort();
            }
        }
    }

    prepareAscension({
        garden: "Peppermint Pip Packet",
        eudora: "Our Daily Candles™ order form",
        chateau: {
            desk: "continental juice bar",
            nightstand: "foreign language tapes",
            ceiling: "ceiling fan",
        },
    });

    const lifestyle = softcore ? Lifestyle.softcore : Lifestyle.hardcore;

    const pet = softcore ? $item`astral chapeau` : $item`astral statuette`;

    const perms = getPermedSkills();
    const permSkills = new Map(
        Skill.all()
            .filter((s) => have(s) && !perms[s.name] && s.permable)
            .map((s) => [s, Lifestyle.hardcore])
    );

    ascend($path`Community Service`, playerClass, lifestyle, "knoll", $item`astral six-pack`, pet, {
        neverAbort: true,
        permSkills,
    });
}
