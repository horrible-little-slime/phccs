import { CSStrategy, Macro } from "./combat";
import { CSQuest } from "./engine";
import { byStat } from "./lib";
import uniform from "./outfit";
import { adv1, create, eat } from "kolmafia";
import {
    $classes,
    $effect,
    $item,
    $location,
    $monster,
    $skill,
    Cartography,
    CombatLoversLocket,
    CommunityService,
    get,
    getKramcoWandererChance,
    have,
} from "libram";

const CoilWire: CSQuest = {
    type: "SERVICE",
    maxTurns: 60,
    test: CommunityService.CoilWire,
    name: "Coil Wire",
    tasks: [
        {
            name: "Sausage",
            ready: () => getKramcoWandererChance() >= 1,
            completed: () => get("_sausageFights") > 0,
            do: (): void => {
                adv1(
                    byStat({
                        Mysticality: $location`The Haunted Pantry`,
                        Moxie: $location`The Sleazy Back Alley`,
                        Muscle: $location`The Outskirts of Cobb's Knob`,
                    }),
                    -1,
                    ""
                );
                if (have($item`magical sausage casing`)) {
                    create(1, $item`magical sausage`);
                }
                eat(1, $item`magical sausage`);
            },
            outfit: () => uniform({ changes: { offhand: $item`Kramco Sausage-o-Matic™` } }),
            combat: new CSStrategy(() =>
                Macro.skill($skill`Micrometeorite`)
                    .attack()
                    .repeat()
            ),
        },
        {
            name: "Fruity Skeleton",
            class: $classes`Sauceror, Seal Clubber, Turtle Tamer`,
            completed: () => have($item`cherry`),
            ready: () => !have($effect`Everything Looks Yellow`),
            do: (): void => {
                Cartography.mapMonster(
                    $location`The Skeleton Store`,
                    $monster`novelty tropical skeleton`
                );
            },
            outfit: () =>
                uniform({
                    canAttack: false,
                    changes: { shirt: $item`Jurassic Parka`, modes: { parka: "dilophosaur" } },
                }),
            combat: new CSStrategy(() => Macro.skill($skill`Spit jurassic acid`)),
        },
        {
            name: "Evil Olive",
            class: $classes`Disco Bandit, Accordion Thief`,
            completed: () => have($item`jumbo olive`),
            ready: () => !have($effect`Everything Looks Yellow`),
            do: () => CombatLoversLocket.reminisce($monster`Evil Olive`),
            outfit: () =>
                uniform({
                    canAttack: false,
                    changes: { shirt: $item`Jurassic Parka`, modes: { parka: "dilophosaur" } },
                }),
            combat: new CSStrategy(() => Macro.skill($skill`Spit jurassic acid`)),
        },
    ],
    outfit: () => ({
        hat: $item`Iunion Crown`,
        shirt: $item`fresh coat of paint`,
        pants: $item`Cargo Cultist Shorts`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`familiar scrapbook`,
        acc1: $item`Eight Days a Week Pill Keeper`,
        acc2: $item`Powerful Glove`,
        acc3: $item`Guzzlr tablet`,
    }),
};

export default CoilWire;
