import { Task } from "grimoire-kolmafia";
import {
    abort,
    adv1,
    availableAmount,
    buy,
    chatPrivate,
    choiceFollowsFight,
    cliExecute,
    containsText,
    create,
    eat,
    Effect,
    equip,
    equippedAmount,
    equippedItem,
    getCampground,
    getClanName,
    getProperty,
    haveEffect,
    inMultiFight,
    Item,
    Location,
    Monster,
    myClass,
    myLevel,
    myMaxhp,
    myMaxmp,
    myMp,
    print,
    restoreHp,
    restoreMp,
    retrieveItem,
    runChoice,
    runCombat,
    setAutoAttack,
    setProperty,
    Skill,
    Slot,
    sweetSynthesis,
    totalTurnsPlayed,
    toUrl,
    use,
    useFamiliar,
    useSkill,
    visitUrl,
    wait,
} from "kolmafia";
import {
    $class,
    $effect,
    $familiar,
    $item,
    $items,
    $location,
    $monster,
    $skill,
    $skills,
    $slot,
    bestLibramToCast,
    clamp,
    get,
    getModifier,
    have,
    possibleLibramSummons,
    PropertiesManager,
    property,
    Witchess,
    withProperty,
} from "libram";
import Macro from "./combat";
import uniform, { Outfit, withOutfit } from "./outfits";

export type CSTask = Task & { core?: "hard" | "soft" };
export const PropertyManager = new PropertiesManager();

export function fuelUp(): void {
    buy(1, $item`all-purpose flower`);
    use(1, $item`all-purpose flower`);
    buy(availableAmount($item`wad of dough`), $item`soda water`);
    create(availableAmount($item`wad of dough`), $item`loaf of soda bread`);
    cliExecute(`asdonmartin fuel ${availableAmount($item`loaf of soda bread`)} soda bread`);
}

export function synthExp(): void {
    if (getCampground()["Peppermint Pip Packet"]) {
        visitUrl("campground.php?action=garden");
    }
    if (!get("_candySummons")) {
        useSkill(1, $skill`Summon Crimbo Candy`);
    }
    const fudge = $item`Crimbo fudge`;
    const pecan = $item`Crimbo candied pecan`;
    const bark = $item`Crimbo peppermint bark`;
    const fudges = availableAmount(fudge);
    const pecans = availableAmount(pecan);
    const barks = availableAmount(bark);
    if (fudges >= 2) {
        sweetSynthesis(fudge, fudge);
    } else if (barks >= 1) {
        if (pecans >= 1) {
            sweetSynthesis(pecan, bark);
        } else {
            sweetSynthesis(bark, $item`peppermint sprout`);
        }
    } else {
        if (!have($item`sugar shotgun`)) {
            if (!have($item`sugar sheet`)) useSkill($skill`Summon Sugar Sheets`);
            create(1, $item`sugar shotgun`);
        }
        if (pecans >= 1) {
            sweetSynthesis(pecan, $item`sugar shotgun`);
        } else {
            sweetSynthesis($item`sugar shotgun`, $item`peppermint sprout`);
        }
    }
    if (!have($effect`Synthesis: Learning`)) {
        throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize learning. Pwease fix me :c.";
    }
}

export function synthItem(): void {
    if (getCampground()["Peppermint Pip Packet"]) {
        visitUrl("campground.php?action=garden");
    }
    if (!get("_candySummons")) {
        useSkill(1, $skill`Summon Crimbo Candy`);
    }
    //const fudge = $item`Crimbo fudge`;
    const pecan = $item`Crimbo candied pecan`;
    const bark = $item`Crimbo peppermint bark`;
    //const fudges = availableAmount(fudge);
    const pecans = availableAmount(pecan);
    const barks = availableAmount(bark);
    if (barks >= 2) {
        sweetSynthesis(bark, bark);
    } else {
        if (!have($item`peppermint twist`)) {
            create(1, $item`peppermint twist`);
        }
        if (pecans >= 1) {
            sweetSynthesis(pecan, $item`peppermint twist`);
        } else {
            sweetSynthesis($item`peppermint sprout`, $item`peppermint twist`);
        }
    }
    if (!have($effect`Synthesis: Collection`)) {
        throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize collection. Pwease fix me :c.";
    }
}

export function synthMyst(): void {
    if (getCampground()["Peppermint Pip Packet"]) {
        visitUrl("campground.php?action=garden");
    }
    if (!get("_candySummons")) {
        useSkill(1, $skill`Summon Crimbo Candy`);
    }
    //const fudge = $item`Crimbo fudge`;
    //const pecan = $item`Crimbo candied pecan`;
    //const bark = $item`Crimbo peppermint bark`;
    //const fudges = availableAmount(fudge);
    //const pecans = availableAmount(pecan);
    //const barks = availableAmount(bark);
    if (have($item`bag of many confections`)) {
        if (!get("_chubbyAndPlumpUsed")) {
            useSkill(1, $skill`Chubby and Plump`);
        }
        sweetSynthesis($item`Chubby and Plump bar`, $item`bag of many confections`);
    } else {
        const mint = $item`Senior Mints`;
        const mints = availableAmount(mint);
        const orangeHeart = $item`orange candy heart`;
        const orangeHearts = () => availableAmount(orangeHeart);
        const pinkHeart = $item`pink candy heart`;
        const pinkHearts = () => availableAmount($item`pink candy heart`);
        let n = 0;
        while (mints + orangeHearts() + pinkHearts() === 0 && n < 11) {
            useSkill(1, $skill`Summon Candy Heart`);
            n++;
        }
        if (mints + orangeHearts() + pinkHearts() === 0) {
            throw "Failed to summon hearts in a timely manner";
        }
        if (mints >= 1) {
            sweetSynthesis(mint, $item`peppermint sprout`);
        } else if (orangeHearts() >= 1) {
            sweetSynthesis(orangeHeart, $item`peppermint sprout`);
        } else if (pinkHearts() >= 1) {
            if (!have($item`peppermint twist`)) {
                create(1, $item`peppermint twist`);
            }
            sweetSynthesis(pinkHeart, $item`peppermint twist`);
        }
    }
    if (haveEffect($effect`Synthesis: Smart`) === 0) {
        throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize smart. Pwease fix me :c.";
    }
}

export function kramcoCheck(): boolean {
    const kramcoNumber =
        5 + 3 * get("_sausageFights") + Math.pow(Math.max(0, get("_sausageFights") - 5), 3);
    return totalTurnsPlayed() - get("_lastSausageMonsterTurn") + 1 >= kramcoNumber;
}

export function useDefaultFamiliar(canAttack = true): void {
    if (!get("_bagOfCandy") && canAttack) {
        useFamiliar($familiar`Stocking Mimic`);
    } else if (get("camelSpit") !== 100) {
        useFamiliar($familiar`Melodramedary`);
        equip($slot`familiar`, $item`dromedary drinking helmet`);
    } else if (
        canAttack &&
        !have($item`short stack of pancakes`) &&
        !have($effect`Shortly Stacked`) &&
        !get("csServicesPerformed").split(",").includes("Breed More Collies")
    ) {
        useFamiliar($familiar`Shorter-Order Cook`);
        equip($item`tiny stillsuit`);
    } else if (!have($item`burning newspaper`) && !have($item`burning paper crane`)) {
        useFamiliar($familiar`Garbage Fire`);
        equip($item`tiny stillsuit`);
    } else {
        useFamiliar($familiar`Artistic Goth Kid`);
        equip($item`tiny stillsuit`);
    }
}

export function testDone(testNum: number): boolean {
    //stolen directly from bean
    print(`Checking test ${testNum}...`);
    const text = visitUrl("council.php");
    return !containsText(text, `<input type=hidden name=option value=${testNum}>`);
}

export function doTest(testNum: number): void {
    //stolen directly from bean
    if (!testDone(testNum)) {
        visitUrl(`choice.php?whichchoice=1089&option=${testNum}`);
        if (!testDone(testNum)) {
            throw 'Failed to do test " + testNum + ". Maybe we are out of turns.';
        }
    } else {
        print(`Test ${testNum} already completed.`);
    }
}

export function ensureInnerElf(): void {
    //stolen merely mostly from bean
    if (!have($effect`Inner Elf`) && myLevel() >= 13) {
        setClan(get("phccs_elfClan", "Hobopolis Vacation Home"));
        try {
            withOutfit(
                new Outfit({ acc3: $item`Kremlin's Greatest Briefcase` }, $familiar`Machine Elf`),
                () => {
                    ensureEffect($effect`Blood Bubble`);
                    setChoice(326, 1);
                    if (get("_kgbTranquilizerDartUses") >= 3) ensureMp(50);
                    advMacro(
                        $location`The Slime Tube`,
                        Macro.trySkill($skill`KGB tranquilizer dart`).trySkill($skill`Snokebomb`)
                    );
                }
            );
        } finally {
            setClan(get("phccs_mainClan", "Alliance From Heck"));
        }
        if (!have($effect`Inner Elf`)) {
            throw "Failed to get effect Inner Elf from Mother Slime.";
        }
    }
}

export function fightSausageIfAble(location: Location, macro: Macro): void {
    if (kramcoCheck()) {
        equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
        const sausages = get("_sausageFights");
        advMacroAA(location, macro, () => {
            return sausages === get("_sausageFights");
        });
        if (get("lastEncounter") !== "sausage goblin") {
            throw "Did not fight a sausage, but I thought I would. Uh oh!";
        }
    }
}

export function ensurePotionEffect(ef: Effect, potion: Item): void {
    //stolen directly from bean
    if (!have(ef)) {
        if (availableAmount(potion) === 0) {
            create(1, potion);
        }
        if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
            throw `Failed to get effect ${ef.name}.`;
        }
    } else {
        print(`Already have effect ${ef.name}.`);
    }
}

export function ensureEffect(ef: Effect, turns = 1): void {
    //stolen directly from bean
    if (haveEffect(ef) < turns) {
        if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
            throw `Failed to get effect ${ef.name}.`;
        }
    } else {
        print(`Already have effect ${ef.name}.`);
    }
}

export function setClan(target: string): boolean {
    //stolen directly from bean
    if (getClanName() !== target) {
        const clanCache = JSON.parse(getProperty("hccs_clanCache") || "{}");
        if (clanCache.target === undefined) {
            const recruiter = visitUrl("clan_signup.php");
            const clanRe = /<option value=([0-9]+)>([^<]+)<\/option>/g;
            let match;
            while ((match = clanRe.exec(recruiter)) !== null) {
                clanCache[match[2]] = match[1];
            }
        }
        setProperty("hccs_clanCache", JSON.stringify(clanCache));

        visitUrl(`showclan.php?whichclan=${clanCache[target]}&action=joinclan&confirm=on&pwd`);
        if (getClanName() !== target) {
            throw `failed to switch clans to ${target}. Did you spell it correctly? Are you whitelisted?`;
        }
    }
    return true;
}

export function setChoice(adv: number, choice: number | string): void {
    PropertyManager.setChoices({ [adv]: choice });
}

export function tryUse(quantity: number, it: Item): boolean {
    //ripped straight from bean
    if (availableAmount(it) > 0) {
        return use(quantity, it);
    } else {
        return false;
    }
}

export function multiFightAutoAttack(): void {
    while (choiceFollowsFight() || inMultiFight()) {
        visitUrl("choice.php");
    }
}

export function heal(): void {
    restoreHp(myMaxhp());
}

export function advMacroAA(
    location: Location,
    macro: Macro,
    parameter: number | (() => boolean) = 1,
    afterCombatAction?: () => void
): void {
    let n = 0;
    const condition = () => {
        return typeof parameter === "number" ? n < parameter : parameter();
    };
    macro.setAutoAttack();
    while (condition()) {
        adv1(location, -1, (_round: number, _foe: Monster, pageText: string) => {
            if (pageText.includes("Macro Aborted")) abort();
            return Macro.cachedAutoAttacks.get(macro.name) ?? Macro.abort().toString();
        });
        if (afterCombatAction) afterCombatAction();
        n++;
    }
}

export function advMacro(
    location: Location,
    macro: Macro,
    parameter: number | (() => boolean) = 1,
    afterCombatAction?: () => void
): void {
    setAutoAttack(0);
    let n = 0;
    const condition = () => {
        return typeof parameter === "number" ? n < parameter : parameter();
    };

    while (condition()) {
        adv1(location, -1, (_round: number, _foe: Monster, pageText: string) => {
            if (pageText.includes("Macro Aborted")) abort();
            return Macro.if_("!pastround 2", macro).abort().toString();
        });
        if (afterCombatAction) afterCombatAction();
        n++;
    }
}

export function mapMacro(location: Location, monster: Monster, macro: Macro): void {
    macro.setAutoAttack();
    useSkill($skill`Map the Monsters`);
    if (!get("mappingMonsters")) throw `I am not actually mapping anything. Weird!`;
    else {
        while (get("mappingMonsters")) {
            visitUrl(toUrl(location));
            runChoice(1, `heyscriptswhatsupwinkwink=${monster.id}`);
            runCombat(macro.toString());
        }
    }
}

type Horse = "dark" | "normal" | "crazy" | "pale" | null;

export function horsery(): Horse {
    return (get("_horsery").split(" ")[0] as Horse) ?? null;
}

export function horse(horse: Horse): void {
    if (horsery() !== horse) cliExecute(`horsery ${horse} horse`);
}

function checkFax(monster: Monster): boolean {
    cliExecute("fax receive");
    if (property.getString("photocopyMonster").toLowerCase() === monster.name.toLowerCase())
        return true;
    cliExecute("fax send");
    return false;
}

export function fax(monster: Monster): void {
    if (!get("_photocopyUsed")) {
        if (checkFax(monster)) return;
        chatPrivate("cheesefax", monster.name);
        for (let i = 0; i < 3; i++) {
            wait(5 + i);
            if (checkFax(monster)) return;
        }
        abort(`Failed to acquire photocopied ${monster.name}.`);
    }
}

export function questStep(questName: string): number {
    const stringStep = property.getString(questName);
    if (stringStep === "unstarted" || stringStep === "") return -1;
    else if (stringStep === "started") return 0;
    else if (stringStep === "finished") return 999;
    else {
        if (stringStep.substring(0, 4) !== "step") {
            throw "Quest state parsing error.";
        }
        return parseInt(stringStep.substring(4), 10);
    }
}

export function ensureMp(mp: number): void {
    if (myMp() > mp) return;
    if (mp > myMaxmp()) throw `Insufficient maximum mp!`;
    while (
        have($item`magical sausage`) ||
        (have($item`magical sausage casing`) && myMp() < mp && get("_sausagesEaten") < 23)
    ) {
        retrieveItem($item`magical sausage`);
        eat($item`magical sausage`);
    }
    while (have($item`psychokinetic energy blob`) && myMp() < mp) {
        use($item`psychokinetic energy blob`);
    }
    if (myMp() < mp) restoreMp(mp);
}

export const maximizeFamiliar = have($familiar`Disembodied Hand`)
    ? $familiar`Disembodied Hand`
    : $familiar`Left-Hand Man`;

function canCastLibrams(): boolean {
    const summonNumber = 1 + get("libramSummons");
    const cost = 1 + (summonNumber * (summonNumber - 1)) / 2;
    return myMp() >= cost;
}

function totalDuration(item: Item): number {
    const effect = getModifier("Effect", item);
    return haveEffect(effect) + getModifier("Effect Duration", item) * availableAmount(item);
}

export const availableFights: () => number = () =>
    clamp(5 - Witchess.fightsDone(), 0, 5) +
    clamp(availableAmount($item`BRICKO eye brick`), 0, 10 - get("_brickoFights"));

const potentialFights = () =>
    clamp(5 - Witchess.fightsDone(), 0, 5) +
    clamp(availableAmount($item`BRICKO eye brick`), 0, 10 - get("_brickoFights")) +
    clamp(3 - get("_brickoEyeSummons"), 0, 10 - get("_brickoFights"));

function castPriciestLibram(): boolean {
    const choice = bestLibramToCast();
    if (!choice) return false;
    return useSkill(1, choice);
}
export function burnLibrams(): void {
    const testsDone = get("csServicesPerformed").split(",");
    if (
        !$skills`Summon BRICKOs, Summon Taffy, Summon Love Song, Summon Candy Heart`.some((skill) =>
            have(skill)
        )
    )
        return;
    while (canCastLibrams()) {
        if (!testsDone.includes("Breed More Collies")) {
            const libramPossibilities = possibleLibramSummons();
            const decisionMap = new Map<Skill, number>();

            if (have($skill`Summon Candy Heart`) && totalDuration($item`green candy heart`) <= 0) {
                const probability =
                    libramPossibilities
                        .get($skill`Summon Candy Heart`)
                        ?.get($item`green candy heart`) ?? 0;
                decisionMap.set($skill`Summon Candy Heart`, 3 * probability);
            }

            if (have($skill`Summon Taffy`) && totalDuration($item`pulled blue taffy`) < 50) {
                const probability =
                    libramPossibilities.get($skill`Summon Taffy`)?.get($item`pulled blue taffy`) ??
                    0;
                decisionMap.set($skill`Summon Taffy`, 1 * probability);
            }

            if (
                have($skill`Summon Love Song`) &&
                totalDuration($item`love song of icy revenge`) < 20
            ) {
                const probability =
                    libramPossibilities
                        .get($skill`Summon Love Song`)
                        ?.get($item`love song of icy revenge`) ?? 0;
                const currentWeightValue = clamp(
                    Math.ceil(totalDuration($item`love song of icy revenge`) / 2),
                    0,
                    10
                );
                const newWeightValue = clamp(
                    Math.ceil((totalDuration($item`love song of icy revenge`) + 5) / 2),
                    0,
                    10
                );
                decisionMap.set(
                    $skill`Summon Love Song`,
                    probability * (newWeightValue - currentWeightValue)
                );
            }

            if (
                have($skill`Summon BRICKOs`) &&
                get("_brickoEyeSummons") < 3 &&
                testsDone.includes("Donate Blood")
            ) {
                const probability =
                    libramPossibilities.get($skill`Summon BRICKOs`)?.get($item`BRICKO eye brick`) ??
                    0;
                if (
                    have($familiar`Shorter-Order Cook`) &&
                    totalDuration($item`short stack of pancakes`) === 0 &&
                    availableFights() < 11 - get("_shortOrderCookCharge") &&
                    potentialFights() >= 11 - get("_shortOrderCookCharge")
                ) {
                    decisionMap.set(
                        $skill`Summon BRICKOs`,
                        (probability * 11) / (11 - get("_shortOrderCookCharge") - availableFights())
                    );
                }

                if (
                    have($familiar`Garbage Fire`) &&
                    !have($item`burning paper crane`) &&
                    !have($item`burning newspaper`) &&
                    availableFights() < 30 - get("garbageFireProgress") &&
                    potentialFights() >= 30 - get("garbageFireProgress")
                ) {
                    const value =
                        (5 / (30 - get("garbageFireProgress") - availableFights())) * probability;
                    const otherBrickoValue = decisionMap.get($skill`Summon BRICKOs`) ?? 0;
                    if (value > otherBrickoValue) {
                        decisionMap.set($skill`Summon BRICKOs`, value);
                    }
                }
            }
            const bestLibrams = Array.from(decisionMap).sort((a, b) => b[1] - a[1]);
            if (bestLibrams.length === 0) {
                if (!castPriciestLibram()) return;
            } else {
                const decision = bestLibrams[0][0];
                useSkill(1, decision);
            }
        } else if (!castPriciestLibram()) return;
    }
}

export function equalizeMuscle(): boolean {
    if (myClass() === $class`Pastamancer`) return useSkill(1, $skill`Bind Undead Elbow Macaroni`);
    else {
        if (have($effect`Expert Oiliness`)) return true;
        if (!have($item`oil of expertise`)) {
            if (!have($item`cherry`) && get("_monstersMapped") < 2) {
                uniform();
                useDefaultFamiliar();
                setChoice(1387, 3);
                if (get("questM23Meatsmith") === "unstarted") {
                    visitUrl("shop.php?whichshop=meatsmith&action=talk");
                    runChoice(1);
                }
                mapMacro(
                    $location`The Skeleton Store`,
                    $monster`novelty tropical skeleton`,
                    Macro.skill($skill`Use the Force`)
                );
            }
            if (!get("hasRange")) {
                if (!have($item`Dramatic™ range`)) {
                    buy(1, $item`Dramatic™ range`);
                }
                use(1, $item`Dramatic™ range`);
            }
            useSkill($skill`Advanced Saucecrafting`);
            create($item`oil of expertise`);
        }
        return use($item`oil of expertise`);
    }
}

export function equalizeMoxie(): boolean {
    if (myClass() === $class`Pastamancer`) return useSkill(1, $skill`Bind Penne Dreadful`);
    else {
        if (have($effect`Expert Oiliness`)) return true;
        if (!have($item`oil of expertise`)) {
            if (!have($item`cherry`) && get("_monstersMapped") < 2) {
                uniform();
                useDefaultFamiliar();
                setChoice(1387, 3);
                if (get("questM23Meatsmith") === "unstarted") {
                    visitUrl("shop.php?whichshop=meatsmith&action=talk");
                    runChoice(1);
                }
                mapMacro(
                    $location`The Skeleton Store`,
                    $monster`novelty tropical skeleton`,
                    Macro.skill($skill`Use the Force`)
                );
            }
            if (!get("hasRange")) {
                if (!have($item`Dramatic™ range`)) {
                    buy(1, $item`Dramatic™ range`);
                }
                use(1, $item`Dramatic™ range`);
            }
            useSkill($skill`Advanced Saucecrafting`);
            create($item`oil of expertise`);
        }
        return use($item`oil of expertise`);
    }
}

export function unequip(item: Item): void {
    while (equippedAmount(item) > 0) {
        const slot = Slot.all().find((equipmentSlot) => equippedItem(equipmentSlot) === item);
        if (!slot) return;
        equip(slot, $item`none`);
    }
}

export const chefstaves = $items`Staff of Kitchen Royalty, Staff of the Deepest Freeze, Staff of Frozen Lard, Staff of the Peppermint Twist, Staff of the Roaring Hearth`;

export function juneCleave(): void {
    if (get("_juneCleaverFightsLeft") > 0) return;
    withOutfit(new Outfit({ weapon: $item`June cleaver` }), () => {
        withProperty("recoveryScript", "", () => {
            adv1($location`Noob Cave`, -1, "");
            if (get("lastEncounter") === "Poetic Justice") useSkill($skill`Tongue of the Walrus`);
        });
    });
}
