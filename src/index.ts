import {
    abort,
    availableAmount,
    cliExecute,
    drink,
    gametimeToInt,
    myInebriety,
    myLevel,
    myPathId,
    print,
    setAutoAttack,
    toItem,
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
import { convertMilliseconds, PropertyManager, Test, tests, testWrapper } from "./lib";
import spellTest from "./spell";
import { HPTest, moxTest, muscleTest, mystTest } from "./stattests";
import weaponTest from "./weapon";
import { $effect, $item, $skill, get, have } from "libram";

//preamble
if (myPathId() !== 25) abort();
visitUrl("council.php");
cliExecute("ccs twiddle");

PropertyManager.set({
    customCombatScript: "twiddle",
    battleAction: "custom combat script",
    dontStopForCounters: true,
    hpAutoRecovery: -0.05,
    mpAutoRecovery: -0.05,
});
const startTime = gametimeToInt();
try {
    testWrapper("wire-coiling", Test.COIL_WIRE, coilWire);
    if (myLevel() < 13) levelUp();
    testWrapper("moxie", Test.MOX, moxTest);
    testWrapper("HP", Test.HP, HPTest);
    testWrapper("muscle", Test.MUS, muscleTest);
    testWrapper("mysticality", Test.MYS, mystTest);
    if (availableAmount($item`astral six-pack`) !== 0) use(1, $item`astral six-pack`);
    if (have($effect`The Magical Mojomuscular Melody`))
        cliExecute("shrug The Magical Mojomuscular Melody");
    useSkill($skill`The Ode to Booze`);
    while (myInebriety() < 5) {
        drink(1, $item`astral pilsner`);
    }
    testWrapper("item", Test.ITEM, itemTest);
    testWrapper("hot res", Test.HOT_RES, hotTest);
    testWrapper("noncombat", Test.NONCOMBAT, noncombatTest);
    testWrapper("familiar", Test.FAMILIAR, familiarTest);
    testWrapper("weapon damage", Test.WEAPON, weaponTest);
    testWrapper("spell damage", Test.SPELL, spellTest);
} finally {
    tests.forEach((testDuration) => {
        print(
            `We expected the ${testDuration.testName} test to take ${testDuration.turnPrediction} turns, and it cost ${testDuration.turnCost} turns.`,
            "blue"
        );
    });
    print(
        `This loop took ${convertMilliseconds(
            gametimeToInt() - startTime
        )}, assuming it ran contiguously. Otherwise, this run of the program lasted that much time. Hope whatever number you see is good!`,
        "red"
    );
    if (["food", "booze"].includes(get("_questPartyFairQuest"))) {
        const partyFairInfo = get("_questPartyFairProgress").split(" ");
        print(
            `Gerald/ine wants ${partyFairInfo[0]} ${toItem(partyFairInfo[1]).plural}, please!`,
            "red"
        );
    }
    setAutoAttack(0);
    PropertyManager.resetAll();
}
