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

const assert = (action: boolean, warning: string) => {
    if (!action) throw new Error(warning);
};

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
    assert(CommunityService.CoilWire.run(coilWire, false, 60), "Failed to coil wire!");
    if (myLevel() < 13) levelUp();
    assert(CommunityService.Moxie.run(moxTest, false, 1), "Failed to cap moxie test!");
    assert(CommunityService.HP.run(HPTest, false, 1), "Failed to cap HP test!");
    assert(CommunityService.Muscle.run(muscleTest, false, 1), "Failed to cap Muscle test!");
    assert(CommunityService.Mysticality.run(mystTest, false, 1), "Failed to cap Mysticality test!");
    if (availableAmount($item`astral six-pack`) !== 0) use(1, $item`astral six-pack`);
    if (have($effect`The Magical Mojomuscular Melody`))
        cliExecute("shrug The Magical Mojomuscular Melody");
    useSkill($skill`The Ode to Booze`);
    while (myInebriety() < 5) {
        drink(1, $item`astral pilsner`);
    }
    assert(CommunityService.BoozeDrop.run(itemTest, false, 1), "Failed to cap Item test!");
    assert(CommunityService.HotRes.run(hotTest, false, 1), "Failed to cap Hot Res test!");
    assert(CommunityService.Noncombat.run(noncombatTest, false, 1), "Failed to cap NC test!");
    assert(
        CommunityService.FamiliarWeight.run(familiarTest, false, 30),
        "Failed to perform Familiar test!"
    );
    assert(
        CommunityService.WeaponDamage.run(weaponTest, false, 1),
        "Failed to cap Weapon Damage test!"
    );
    assert(
        CommunityService.SpellDamage.run(spellTest, false, 30),
        "Failed to perform Spell Damage test!"
    );
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
