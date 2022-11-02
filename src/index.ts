import {
    abort,
    availableAmount,
    cliExecute,
    drink,
    inHardcore,
    isDarkMode,
    myInebriety,
    myLevel,
    myPath,
    setAutoAttack,
    use,
    useSkill,
    visitUrl,
} from "kolmafia";
import coilWire from "./coil wire";
import familiarTest from "./familiarweight";
import hotTest from "./hotres";
import itemTest from "./item";
import levelUp from "./level";
import noncombatTest from "./noncombat";
import { PropertyManager } from "./lib";
import spellTest from "./spell";
import { HPTest, moxTest, muscleTest, mystTest } from "./stattests";
import weaponTest from "./weapon";
import {
    $effect,
    $item,
    $path,
    $skill,
    CommunityService,
    get,
    have,
    sinceKolmafiaRevision,
} from "libram";

const HIGHLIGHT = isDarkMode() ? "yellow" : "blue";

const runTest = (
    test: CommunityService,
    preparation: (() => void) | (() => number),
    cap: number,
    warning: string
) => {
    const status = test.run(preparation, cap);
    if (status === "failed") throw new Error(warning);
    if (status === "already completed" && !get("csServicesPerformed").includes(test.name))
        throw new Error(
            `Libram thinks we successfully completed test ${test.name} but Mafia disagrees.`
        );
};

//preamble
sinceKolmafiaRevision(26538);
if (myPath() !== $path`Community Service`) abort();
visitUrl("council.php");
cliExecute("ccs twiddle");

PropertyManager.set({
    customCombatScript: "twiddle",
    battleAction: "custom combat script",
    dontStopForCounters: true,
    hpAutoRecovery: -0.05,
    mpAutoRecovery: -0.05,
    logPreferenceChange: true,
});

PropertyManager.setChoices({
    1467: 3,
    1468: 2,
    1469: 3,
    1470: 2,
    1471: 3,
    1472: 1,
    1473: 1,
    1474: 1,
    1475: 1,
});

const softcore = !inHardcore();

try {
    runTest(CommunityService.CoilWire, coilWire, 60, "Failed to coil wire!");
    if (myLevel() < 13) CommunityService.logTask("levelling", levelUp);
    runTest(CommunityService.Moxie, moxTest, 1, "Failed to cap Moxie test!");
    runTest(CommunityService.HP, HPTest, 1, "Failed to cap HP test!");
    runTest(CommunityService.Muscle, muscleTest, 1, "Failed to cap Muscle test!");
    runTest(CommunityService.Mysticality, mystTest, 1, "Failed to cap Mysticality test!");
    CommunityService.logTask("getting drunk", () => {
        if (availableAmount($item`astral six-pack`) !== 0) use(1, $item`astral six-pack`);
        if (have($effect`The Magical Mojomuscular Melody`))
            cliExecute("shrug The Magical Mojomuscular Melody");
        useSkill($skill`The Ode to Booze`);
        while (myInebriety() < 5) {
            drink(1, $item`astral pilsner`);
        }
    });
    runTest(CommunityService.BoozeDrop, itemTest, 1, "Failed to cap Item test!");
    runTest(CommunityService.HotRes, hotTest, 1, "Failed to cap Hot Res test!");
    runTest(CommunityService.Noncombat, noncombatTest, 1, "Failed to cap NC test!");
    runTest(CommunityService.FamiliarWeight, familiarTest, 30, "Failed to perform Familiar test!");
    runTest(CommunityService.WeaponDamage, weaponTest, 1, "Failed to cap Weapon Damage test!");
    runTest(CommunityService.SpellDamage, spellTest, 30, "Failed to perform Spell Damage test!");
} finally {
    CommunityService.printLog(HIGHLIGHT);
    if (softcore) CommunityService.donate();
    setAutoAttack(0);
    PropertyManager.resetAll();
}
