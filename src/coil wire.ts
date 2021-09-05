import { create, eat, equip } from "kolmafia";
import { $item, $location, $skill, $slot, get, have, Macro } from "libram";
import uniform, { wireOutfit } from "./outfits";
import { delevel, easyFight } from "./phccs-macros";
import { advMacro, fightSausageIfAble, useDefaultFamiliar } from "./phredhccs-lib";
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

export default function coilWire(): number {
    runStart();
    firstFights();
    wireOutfit();
    return 60;
}
