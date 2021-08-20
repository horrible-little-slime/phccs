import { cliExecute, gametimeToInt, print, setAutoAttack, visitUrl } from "kolmafia";
import coilWire from "./coil wire";
import familiarTest from "./familiarweight";
import hotTest from "./hotres";
import HPTest from "./HP";
import itemTest from "./item";
import noncombatTest from "./noncombat";
import { convertMilliseconds, PropertyManager, Test, tests, testWrapper } from "./phredhccs-lib";
import spellTest from "./spell";
import { moxTest, muscleTest, mystTest } from "./stattests";
import weaponTest from "./weapon";

//preamble
visitUrl("council.php");
cliExecute("ccs twiddle");

const startTime = gametimeToInt();
try {
    testWrapper("wire-coiling", Test.COIL_WIRE, coilWire);
    testWrapper("HP", Test.HP, HPTest);
    testWrapper("muscle", Test.MUS, muscleTest);
    testWrapper("mysticality", Test.MYS, mystTest);
    testWrapper("moxie", Test.MOX, moxTest);
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
    setAutoAttack(0);
    PropertyManager.resetAll();
}
