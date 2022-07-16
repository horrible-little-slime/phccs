import { create, eat } from "kolmafia";
import { $item, $items, $location, $skill, get, have } from "libram";
import uniform, { wireOutfit } from "./outfits";
import { advMacro, burnLibrams, fightSausageIfAble, juneCleave, useDefaultFamiliar } from "./lib";
import runStart from "./runstart";
import Macro from "./combat";

function firstFights() {
    uniform(...$items`protonic accelerator pack, Daylight Shavings Helmet`);
    useDefaultFamiliar();
    fightSausageIfAble(
        $location`Noob Cave`,
        Macro.skill($skill`Micrometeorite`)
            .attack()
            .repeat()
    );
    juneCleave();

    if (have($item`magical sausage casing`)) {
        create(1, $item`magical sausage`);
    }
    if (have($item`magical sausage`)) {
        eat(1, $item`magical sausage`);
    }

    const ghostLocation = get("ghostLocation");
    if (ghostLocation) {
        uniform(...$items`latte lovers member's mug, protonic accelerator pack`);
        useDefaultFamiliar();
        advMacro(
            ghostLocation,
            Macro.delevel()
                .easyFight()
                .trySkill($skill`Shoot Ghost`)
                .trySkill($skill`Shoot Ghost`)
                .trySkill($skill`Shoot Ghost`)
                .trySkill($skill`Trap Ghost`)
        );
    }
}

export default function coilWire(): void {
    runStart();
    firstFights();
    wireOutfit.dress();
    burnLibrams();
}
