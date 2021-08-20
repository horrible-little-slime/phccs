import { cliExecute, create, eat, equip } from "kolmafia";
import { $item, $location, $skill, $slot, get, have, Macro } from "libram";
import { delevel, easyFight } from "./phccs-macros";
import { advMacro, fightSausageIfAble, uniform, useDefaultFamiliar } from "./phredhccs-lib";
import { runStart } from "./runstart";

function firstFights() {
    uniform();
    equip($slot`back`, $item`protonic accelerator pack`);
    useDefaultFamiliar();
    fightSausageIfAble(
        $location`Noob Cave`,
        Macro.skill($skill`Micrometeorite`)
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
        equip($slot`off-hand`, $item`latte lovers member's mug`);
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
    equip($slot`pants`, $item`Cargo Cultist Shorts`);
    equip($slot`acc1`, $item`Eight Days a Week Pill Keeper`);
    equip($slot`acc2`, $item`Powerful Glove`);
    equip($slot`acc3`, $item`Lil' Doctor™ bag`);
    cliExecute("/cast * candy heart");
}

export default function coilWire(): number {
    runStart();
    firstFights();
    playDressUp();
    return 60;
}
