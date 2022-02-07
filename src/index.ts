import {
    abort,
    availableAmount,
    cliExecute,
    drink,
    gametimeToInt,
    isDarkMode,
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
import { convertMilliseconds, PropertyManager } from "./lib";
import spellTest from "./spell";
import { HPTest, moxTest, muscleTest, mystTest } from "./stattests";
import weaponTest from "./weapon";
import { $effect, $item, $skill, CommunityService, get, have } from "libram";

const HIGHLIGHT = isDarkMode() ? "yellow" : "blue";

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
    logPreferenceChange: true,
});
const startTime = gametimeToInt();
try {
    CommunityService.CoilWire.run(coilWire);
    if (myLevel() < 13) levelUp();
    CommunityService.Moxie.run(moxTest);
    CommunityService.HP.run(HPTest);
    CommunityService.Muscle.run(muscleTest);
    CommunityService.Mysticality.run(mystTest);
    if (availableAmount($item`astral six-pack`) !== 0) use(1, $item`astral six-pack`);
    if (have($effect`The Magical Mojomuscular Melody`))
        cliExecute("shrug The Magical Mojomuscular Melody");
    useSkill($skill`The Ode to Booze`);
    while (myInebriety() < 5) {
        drink(1, $item`astral pilsner`);
    }
    CommunityService.BoozeDrop.run(itemTest);
    CommunityService.HotRes.run(hotTest);
    CommunityService.Noncombat.run(noncombatTest);
    CommunityService.FamiliarWeight.run(familiarTest);
    CommunityService.WeaponDamage.run(weaponTest);
    CommunityService.SpellDamage.run(spellTest);
} finally {
    for (const [name, { predictedTurns, turnCost }] of Object.entries(CommunityService.log)) {
        const truePrediction = name === "Make Sausage" ? predictedTurns + 1 : predictedTurns;
        print(
            `It took us ${
                turnCost ? `${turnCost} turns ` : ""
            }to do ${name}, and we predicted it would take ${truePrediction} turns.`,
            HIGHLIGHT
        );
    }
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
