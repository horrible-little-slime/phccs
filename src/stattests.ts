import {
    availableAmount,
    create,
    eat,
    itemAmount,
    retrieveItem,
    use,
    useFamiliar,
    useSkill,
} from "kolmafia";
import { $effect, $familiar, $item, $skill, BeachComb, CommunityService, get, have } from "libram";
import { hpOutfit, moxieOutfit, muscleOutfit, mysticalityOutfit } from "./outfits";
import {
    burnLibrams,
    ensureEffect,
    ensureInnerElf,
    equalizeMoxie,
    equalizeMuscle,
    tryUse,
} from "./lib";

const musclePredictor = () => CommunityService.Muscle.prediction;

function musclebuffs() {
    equalizeMuscle();
    ensureEffect($effect`Big`);
    ensureEffect($effect`Song of Bravado`);
    ensureEffect($effect`Rage of the Reindeer`);
    ensureEffect($effect`Quiet Determination`);
    ensureEffect($effect`Disdain of the War Snapper`);
    ensureEffect($effect`Feeling Excited`);
    ensureEffect($effect`The Power of LOV`);
    if (!have($effect`Go Get 'Em, Tiger!`)) {
        retrieveItem($item`Ben-Gal™ Balm`);
        use(1, $item`Ben-Gal™ Balm`);
    }
}

function muscleTestPrep() {
    muscleOutfit.dress();

    for (const increaser of [
        () => BeachComb.tryHead($effect`Lack of Body-Building`), // will stay on all the way to weapon damage.
        () => ensureEffect($effect`Ham-Fisted`),
        () => ensureInnerElf(),
    ]) {
        if (musclePredictor() > 1) increaser();
    }
}

export function muscleTest(): void {
    musclebuffs();
    muscleTestPrep();
    if (musclePredictor() > 1) throw "Not enough muscle to cap";
    burnLibrams();
}

const mystPredictor = () => CommunityService.Mysticality.prediction;

function mystbuffs() {
    ensureEffect($effect`Feeling Excited`);
}

function mystTestPrep() {
    mysticalityOutfit.dress();
}

export function mystTest(): void {
    mystbuffs();
    mystTestPrep();
    if (mystPredictor() > 1) throw "Not enough mysticality to cap";
    burnLibrams();
}

const moxPredictor = () => CommunityService.Moxie.prediction;

function moxBuffs() {
    if (have($item`magical sausage casing`)) {
        create(1, $item`magical sausage`);
    }
    if (have($item`magical sausage`)) {
        eat(1, $item`magical sausage`);
    }
    ensureEffect($effect`Feeling Excited`);
    equalizeMoxie();
    ensureEffect($effect`Pomp & Circumsands`);

    use(1, $item`Bird-a-Day calendar`);
    ensureEffect($effect`Blessing of the Bird`);

    if (!get("_favoriteBirdVisited")) useSkill($skill`Visit your Favorite Bird`);

    ensureEffect($effect`Quiet Desperation`);
    ensureEffect($effect`Disco Fever`);
    ensureEffect($effect`Blubbered Up`);
    ensureEffect($effect`Mariachi Mood`);
    ensureEffect($effect`Disco State of Mind`);
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
    if (moxPredictor() > 1) {
        ensureInnerElf();
    }
    moxieOutfit.dress();
}

export function moxTest(): void {
    moxBuffs();
    moxTestPrep();
    if (moxPredictor() > 1) {
        throw "Not enough moxie to cap.";
    }
    burnLibrams();
}

function hpBuffs() {
    equalizeMuscle();
    ensureEffect($effect`Big`);
    ensureEffect($effect`Song of Starch`);
    ensureEffect($effect`Rage of the Reindeer`);
    ensureEffect($effect`Quiet Determination`);
    ensureEffect($effect`Disdain of the War Snapper`);
    ensureEffect($effect`Feeling Excited`);
    ensureEffect($effect`The Power of LOV`);
    if (!have($effect`Go Get 'Em, Tiger!`)) {
        retrieveItem($item`Ben-Gal™ Balm`);
        use(1, $item`Ben-Gal™ Balm`);
    }
}

const hpPredictor = () => CommunityService.HP.prediction;
function hpTestPrep() {
    hpOutfit.dress();
}

export function HPTest(): void {
    hpBuffs();
    hpTestPrep();
    if (hpPredictor() > 1) {
        throw "Failed to cap HP";
    }
    burnLibrams();
}
