import {
    myBuffedstat,
    myBasestat,
    useSkill,
    retrieveItem,
    use,
    useFamiliar,
    maximize,
    availableAmount,
    create,
    eat,
    itemAmount,
} from "kolmafia";
import { $stat, $skill, $effect, have, $item, $familiar, get } from "libram";
import { ensureEffect, ensureInnerElf, tryUse } from "./phredhccs-lib";

const musclePredictor = () =>
    60 - Math.floor((1 / 30) * (myBuffedstat($stat`muscle`) - myBasestat($stat`mysticality`)));

function musclebuffs() {
    useSkill(1, $skill`Bind Undead Elbow Macaroni`);
    ensureEffect($effect`Big`);
    ensureEffect($effect`Song of Bravado`);
    ensureEffect($effect`Rage of the Reindeer`);
    ensureEffect($effect`Quiet Determination`);
    ensureEffect($effect`Disdain of the War Snapper`);
    ensureEffect($effect`Feeling Excited`);
    ensureEffect($effect`The Power of LOV`);
    if (!have($effect`Go Get 'Em, Tiger!`)) {
        retrieveItem($item`ben-gal balm`);
        use(1, $item`ben-gal balm`);
    }
}

function muscleTestPrep() {
    useFamiliar($familiar`disembodied hand`);
    maximize("muscle", false);

    for (const increaser of [
        () => { if (!get(""))
            ensureEffect($effect`Lack of Body-Building`)}, // will stay on all the way to weapon damage.
        () => ensureEffect($effect`Ham-Fisted`),
        () => ensureInnerElf(),
    ]) {
        if (musclePredictor() > 1) increaser();
    }
}

export function muscleTest() {
    musclebuffs();
    muscleTest();
    return musclePredictor();
}

const mystPredictor = () =>
    60 - Math.floor((1 / 30) * (myBuffedstat($stat`mysticality`) - myBasestat($stat`mysticality`)));

function mystbuffs() {
    ensureEffect($effect`Feeling Excited`);
}

function mystTestPrep() {
    useFamiliar($familiar`disembodied hand`);
    maximize("mysticality", false);
}

export function mystTest() {
    mystbuffs();
    mystTestPrep();
    if (mystPredictor() > 1) throw "Not enough mysticality to cap";
    return mystPredictor();
}

const moxPredictor = () =>
    60 - Math.floor((1 / 30) * (myBuffedstat($stat`moxie`) - myBasestat($stat`mysticality`)));

function moxBuffs() {
    if (have($item`magical sausage casing`)) {
        create(1, $item`magical sausage`);
    }
    if (have($item`magical sausage`)) {
        eat(1, $item`magical sausage`);
    }
    ensureEffect($effect`Feeling Excited`);
    useSkill(1, $skill`Bind Penne Dreadful`);
    ensureEffect($effect`Pomp & Circumsands`);

    use(1, $item`Bird-a-Day Calendar`);
    ensureEffect($effect`Blessing of the Bird`);

    ensureEffect($effect`Quiet Desperation`);
    ensureEffect($effect`Disco Fever`);
    ensureEffect($effect`Blubbered Up`);
    ensureEffect($effect`Mariachi Mood`);
    ensureEffect($effect`disco state of mind`);
    use(availableAmount($item`rhinestone`), $item`rhinestone`);

    if (availableAmount($item`dollop of barbecue sauce`) > 0) {
        use(1, $item`dollop of barbecue sauce`);
    }
    if (itemAmount($item`confiscated love note`) > 0) {
        use(1, $item`confiscated love note`);
    }

    if (!have($effect`Unrunnable Face`)) {
        tryUse(1, $item`runproof mascara`);
    }
}

function moxTestPrep() {
    useFamiliar($familiar`Left-Hand Man`);
    maximize("moxie", false);
    if (moxPredictor() > 1) {
        ensureInnerElf();
    }
    useFamiliar($familiar`Left-Hand Man`);
    maximize("moxie", false);
}

export function moxTest() {
    moxBuffs();
    moxTestPrep();
    if (moxPredictor() > 1) {
        throw "Not enough moxie to cap.";
    }
    return moxPredictor();
}
