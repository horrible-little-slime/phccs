import { adv1, create, eat } from "kolmafia";
import {
    $item,
    $location,
    $skill,
    CommunityService,
    get,
    getKramcoWandererChance,
    have,
} from "libram";
import uniform from "./outfit";
import { CSStrategy, Macro } from "./combat";
import { CSQuest } from "./engine";

const CoilWire: CSQuest = {
    type: "SERVICE",
    maxTurns: 60,
    test: CommunityService.CoilWire,
    name: "Coil Wire",
    tasks: [
        {
            name: "Sausage",
            ready: () => getKramcoWandererChance() >= 1,
            completed: () => get("_sausageFights") >= 0,
            do: (): void => {
                adv1($location`Noob Cave`, -1, "");
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
