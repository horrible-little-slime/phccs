import { adv1, handlingChoice, myHp, myMaxhp, runChoice, useSkill, visitUrl } from "kolmafia";
import {
    $effect,
    $effects,
    $familiar,
    $item,
    $items,
    $location,
    $skill,
    CommunityService,
    get,
    have,
} from "libram";
import { CSStrategy, Macro } from "./combat";
import { asdonTask, beachTask, commonFamiliarWeightBuffs, restore, skillTask } from "./commons";
import { CSQuest } from "./engine";
import { ensureMp, horse, horsery } from "./lib";
import { uniform } from "./outfit";
const buffs = $effects`Elemental Saucesphere, Astral Shell`;

const HotRes: CSQuest = {
    name: "Hot Res",
    type: "SERVICE",
    test: CommunityService.HotRes,
    outfit: () => ({
        back: $item`unwrapped knock-off retro superhero cape`,
        weapon: $item`Fourth of May Cosplay Saber`,
        shirt: $item`Jurassic Parka`,
        offhand: $item`meteorite guard`,
        pants: $item`designer sweatpants`,
        acc1: $item`your cowboy boots`,
        acc2: $item`Brutal brogues`,
        acc3: $item`Beach Comb`,
        familiar: $familiar`Exotic Parrot`,
        modes: { retrocape: ["vampire", "hold"], parka: "pterodactyl" },
    }),
    turnsSpent: 0,
    maxTurns: 1,
    tasks: [
        ...buffs.map(skillTask),
        restore(buffs),
        ...commonFamiliarWeightBuffs(),
        beachTask($effect`Hot-Headed`),
        beachTask($effect`Does It Have a Skull In There??`),
        asdonTask("Safely"),
        {
            name: "Extinguisher",
            completed: () => have($effect`Fireproof Foam Suit`),
            ready: () => get("_saberForceUses") < 5,
            do: (): void => {
                adv1($location`The Dire Warren`, -1, "");
                if (handlingChoice()) runChoice(-1);
            },
            choices: { [1387]: 3 },
            outfit: () =>
                uniform({
                    changes: {
                        familiar: $familiar.none,
                        famequip: $item.none,
                        weapon: $item`Fourth of May Cosplay Saber`,
                        offhand: $item`industrial fire extinguisher`,
                    },
                }),
            combat: new CSStrategy(() =>
                Macro.skill($skill`Fire Extinguisher: Foam Yourself`).skill($skill`Use the Force`)
            ),
            post: () =>
                visitUrl(`desc_item.php?whichitem=${$item`industrial fire extinguisher`.descid}`),
        },
        {
            name: "Pale Horse",
            completed: () => horsery() === "pale",
            do: () => horse("pale"),
        },
        {
            name: "Deep Dark Visions",
            completed: () => have($effect`Visions of the Deep Dark Deeps`, 30),
            do: (): void => {
                while (myHp() < myMaxhp()) {
                    ensureMp(20);
                    useSkill(1, $skill`Cannelloni Cocoon`);
                }
                ensureMp(100);
                useSkill(1, $skill`Deep Dark Visions`);
            },
            outfit: {
                hat: $item`Iunion Crown`,
                shirt: $items`Jurassic Parka, denim jacket`,
                back: $item`unwrapped knock-off retro superhero cape`,
                weapon: $item`Fourth of May Cosplay Saber`,
                offhand: $item`familiar scrapbook`,
                pants: $item`Cargo Cultist Shorts`,
                acc1: $item`your cowboy boots`,
                familiar: $familiar`Exotic Parrot`,
                modes: { parka: "ghostasaurus", retrocape: ["vampire", "hold"] },
            },
        },
    ],
};

export default HotRes;
