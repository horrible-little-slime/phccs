import { equip, create, eat, cliExecute } from "kolmafia";
import { $slot, $item, $location, Macro, have, get, $skill } from "libram";
import { delevel, easyFight } from "./phccs-macros";
import { uniform, useDefaultFamiliar, fightSausageIfAble, advMacro } from "./phredhccs-lib";
import { runStart } from "./runstart";

function firstFights() {
    uniform();
    equip($slot`back`, $item`protonic accelerator pack`);
    useDefaultFamiliar();
    fightSausageIfAble(
        $location`noob cave`,
        Macro.skill($skill`micrometeorite`)
            .attack()
            .repeat()
    );

    if (have($item`magical sausage casing`)) {
        create(1, $item`magical sausage`);
    }
    if (have($item`magical sausage`)) {
        eat(1, $item`magical sausage`);
    }

    const ghostLocation = get("ghostLocation");
    if (ghostLocation) {
        equip($slot`off-hand`, $item`latte lover member's mug`);
        useDefaultFamiliar();
        advMacro(
            ghostLocation,
            Macro.step(delevel)
                .step(easyFight)
                .skill("shoot ghost")
                .skill("shoot ghost")
                .skill("shoot ghost")
                .skill("trap ghost")
        );
    }
}

function playDressUp() {
    equip($slot`pants`, $item`cargo cultist shorts`);
    equip($slot`acc1`, $item`eight days a week pill keeper`);
    equip($slot`acc2`, $item`powerful glove`);
    equip($slot`acc3`, $item`Lil' Doctor™ Bag`);
    cliExecute("/cast * candy heart");
}

export default function coilWire() {
    runStart();
    firstFights();
    playDressUp();
    return 60;
}
