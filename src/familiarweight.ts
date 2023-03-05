import { CSStrategy, Macro } from "./combat";
import { commonFamiliarWeightBuffs, meteorShower, potionTask } from "./commons";
import { CSQuest } from "./engine";
import { availableFights, unequip } from "./lib";
import uniform from "./outfit";
import { create, mySign, runCombat, use, visitUrl } from "kolmafia";
import {
    $effect,
    $familiar,
    $item,
    $items,
    $monster,
    CommunityService,
    get,
    have,
    Witchess,
} from "libram";

const FamiliarWeight: CSQuest = {
    name: "Familiar Weight",
    type: "SERVICE",
    test: CommunityService.FamiliarWeight,
    outfit: () => ({
        hat: $item`Daylight Shavings Helmet`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $items`burning paper crane, familiar scrapbook`,
        pants: $items`repaid diaper, Great Wolf's beastly trousers, designer sweatpants`,
        acc1: $item`Beach Comb`,
        acc2: $item`Brutal brogues`,
        acc3: $item`hewn moon-rune spoon`,
        familiar: $familiar`Mini-Trainbot`,
        famequip: $item`overloaded Yule battery`,
    }),
    turnsSpent: 0,
    maxTurns: 30,
    tasks: [
        ...commonFamiliarWeightBuffs(),
        potionTask($item`short stack of pancakes`),
        {
            name: "Moveable Feast",
            core: "soft",
            completed: () => get("_feastedFamiliars").split(";").includes("Mini-Trainbot"),
            ready: () => have($item`moveable feast`),
            do: () => use($item`moveable feast`),
            outfit: { familiar: $familiar`Mini-Trainbot` },
        },
        {
            name: "Get Yule Battery",
            completed: () => have($item`overloaded Yule battery`),
            do: (): void => {
                if (!have($item`box of Familiar Jacks`)) create($item`box of Familiar Jacks`);
                use($item`box of Familiar Jacks`);
            },
            outfit: { familiar: $familiar`Mini-Trainbot` },
        },
        {
            name: "Paper Crane",
            completed: () => have($item`burning paper crane`),
            do: () => create($item`burning paper crane`),
            ready: () => have($item`burning newspaper`),
        },
        {
            name: "Shorty Fights (Witchess)",
            completed: () =>
                [$effect`Shortly Stacked`, $item`short stack of pancakes`].some((x) => have(x)),
            ready: () =>
                availableFights() >= 11 - get("_shortOrderCookCharge") && 5 > Witchess.fightsDone(),
            do: () => Witchess.fightPiece($monster`Witchess Bishop`),
            outfit: () => uniform({ changes: { familiar: $familiar`Shorter-Order Cook` } }),
            combat: new CSStrategy(() => Macro.defaultKill()),
        },
        {
            name: "Shorty Fights (BRICKO)",
            completed: () =>
                [$effect`Shortly Stacked`, $item`short stack of pancakes`].some((x) => have(x)),
            ready: () =>
                availableFights() >= 11 - get("_shortOrderCookCharge") &&
                have($item`BRICKO eye brick`),
            do: (): void => {
                if (!have($item`BRICKO ooze`)) create($item`BRICKO ooze`);
                use($item`BRICKO ooze`);
                runCombat();
            },
            outfit: () => uniform({ changes: { familiar: $familiar`Shorter-Order Cook` } }),
            combat: new CSStrategy(() => Macro.defaultKill()),
        },
        {
            name: "Garbage Fights (Witchess)",
            completed: () => $familiar`Garbage Fire`.dropsToday > 0,
            ready: () =>
                availableFights() >= 30 - get("garbageFireProgress") && 5 > Witchess.fightsDone(),
            do: () => Witchess.fightPiece($monster`Witchess Bishop`),
            outfit: () => uniform({ changes: { familiar: $familiar`Garbage Fire` } }),
            combat: new CSStrategy(() => Macro.defaultKill()),
        },
        {
            name: "Garbage Fights (BRICKO)",
            completed: () => $familiar`Garbage Fire`.dropsToday > 0,
            ready: () =>
                availableFights() >= 30 - get("garbageFireProgress") &&
                have($item`BRICKO eye brick`),
            do: (): void => {
                if (!have($item`BRICKO ooze`)) create($item`BRICKO ooze`);
                use($item`BRICKO ooze`);
                runCombat();
            },
            outfit: () => uniform({ changes: { familiar: $familiar`Garbage Fire` } }),
            combat: new CSStrategy(() => Macro.defaultKill()),
        },
        {
            name: "Icy Revenge",
            ready: () => have($item`love song of icy revenge`),
            completed: () => have($effect`Cold Hearted`, 20),
            do: () => use($item`love song of icy revenge`),
        },
        {
            name: "Blue Taffy",
            ready: () => have($item`pulled blue taffy`),
            completed: () => have($effect`Blue Swayed`, 50),
            do: () => use($item`pulled blue taffy`),
        },
        {
            name: "Tune Moon",
            ready: () => mySign() !== "Platypus",
            completed: () => get("moonTuned"),
            do: (): void => {
                unequip($item`hewn moon-rune spoon`);
                visitUrl("inv_use.php?whichitem=10254&pwd&doit=96&whichsign=4");
            },
            core: "soft",
        },
        potionTask($item`silver face paint`),
        meteorShower(),
    ],
};

export default FamiliarWeight;
