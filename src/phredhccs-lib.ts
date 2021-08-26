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
    equip,
    getClanName,
    getProperty,
    haveEffect,
    inMultiFight,
    myMaxhp,
    myMaxmp,
    myMp,
    myTurncount,
    print,
    restoreHp,
    restoreMp,
    retrieveItem,
    runChoice,
    runCombat,
    setAutoAttack,
    setProperty,
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
    $effect,
    $familiar,
    $item,
    $location,
    $skill,
    $slot,
    get,
    have,
    Macro,
    PropertiesManager,
    property,
} from "libram";

export const PropertyManager = new PropertiesManager();

export function fuelUp(): void {
    buy(1, $item`all-purpose flower`);
    use(1, $item`all-purpose flower`);
    buy(availableAmount($item`wad of dough`), $item`soda water`);
    create(availableAmount($item`wad of dough`), $item`loaf of soda bread`);
    cliExecute(`asdonmartin fuel ${availableAmount($item`loaf of soda bread`)} soda bread`);
}

export function synthExp(): void {
    if (get("harvestGardenHardcore") === "none") {
        visitUrl("campground.php?action=garden");
    }
    if (get("_candySummons") === 0) {
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
        if (availableAmount($item`sugar shotgun`) === 0) {
            create(1, $item`sugar shotgun`);
        }
        if (pecans >= 1) {
            sweetSynthesis(pecan, $item`sugar shotgun`);
        } else {
            sweetSynthesis($item`sugar shotgun`, $item`peppermint sprout`);
        }
    }
    if (haveEffect($effect`Synthesis: Learning`) === 0) {
        throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize learning. Pwease fix me :c.";
    }
}

export function synthItem(): void {
    if (get("harvestGardenHardcore") === "none") {
        visitUrl("campground.php?action=garden");
    }
    if (get("_candySummons") === 0) {
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
        if (availableAmount($item`peppermint twist`) === 0) {
            create(1, $item`peppermint twist`);
        }
        if (pecans >= 1) {
            sweetSynthesis(pecan, $item`peppermint twist`);
        } else {
            sweetSynthesis($item`peppermint sprout`, $item`peppermint twist`);
        }
    }
    if (haveEffect($effect`Synthesis: Collection`) === 0) {
        throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize collection. Pwease fix me :c.";
    }
}

export function synthMyst(): void {
    if (get("harvestGardenHardcore") === "none") {
        visitUrl("campground.php?action=garden");
    }
    if (get("_candySummons") === 0) {
        useSkill(1, $skill`Summon Crimbo Candy`);
    }
    //const fudge = $item`Crimbo fudge`;
    //const pecan = $item`Crimbo candied pecan`;
    //const bark = $item`Crimbo peppermint bark`;
    //const fudges = availableAmount(fudge);
    //const pecans = availableAmount(pecan);
    //const barks = availableAmount(bark);
    if (availableAmount($item`bag of many confections`) >= 1) {
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
            if (availableAmount($item`peppermint twist`) === 0) {
                create(1, $item`peppermint twist`);
            }
            sweetSynthesis(pinkHeart, $item`peppermint twist`);
        }
    }
    if (haveEffect($effect`Synthesis: Smart`) === 0) {
        throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize smart. Pwease fix me :c.";
    }
}

export function synthHot(): void {
    //none of us are free of sin. i know how to write this better now, but i won't <3
    const wintoMint = $item`Wint-O-Fresh mint`;
    const wintoMints = availableAmount(wintoMint);
    const whiteHeart = $item`white candy heart`;
    const whiteHearts = () => availableAmount(whiteHeart);
    const greenHeart = $item`green candy heart`;
    const greenHearts = () => availableAmount(greenHeart);
    const orangeHeart = $item`orange candy heart`;
    const orangeHearts = () => availableAmount(orangeHeart);
    const coldHot = $item`Cold Hots candy`;
    const coldHots = availableAmount(coldHot);
    const daffyTaffy = $item`Daffy Taffy`;
    const daffyTaffys = availableAmount(daffyTaffy);
    const yellowHeart = $item`yellow candy heart`;
    const yellowHearts = () => availableAmount(yellowHeart);
    const mrMediocre = $item`Mr. Mediocrebar`;
    const mrMediocres = availableAmount(mrMediocre);
    const lavenderHeart = $item`lavender candy heart`;
    const lavenderHearts = () => availableAmount(lavenderHeart);
    const pinkHeart = $item`pink candy heart`;
    const pinkHearts = () => availableAmount(pinkHeart);
    let n = 0;
    while (
        (wintoMints + whiteHearts() + greenHearts()) * orangeHearts() === 0 &&
        (coldHots + daffyTaffys + yellowHearts()) * (mrMediocres + lavenderHearts()) === 0 &&
        pinkHearts() !== 2 &&
        n <= 11
    ) {
        useSkill(1, $skill`Summon Candy Heart`);
        n++;
    }
    if (n > 11) {
        throw "Unable to retrieve candies in a timely manner";
    }
    if ((wintoMints + whiteHearts() + greenHearts()) * orangeHearts() !== 0) {
        if (wintoMints > 0) {
            sweetSynthesis(wintoMint, orangeHeart);
        } else if (whiteHearts() > 0) {
            sweetSynthesis(whiteHeart, orangeHeart);
        } else {
            sweetSynthesis(greenHeart, orangeHeart);
        }
    } else if ((coldHots + daffyTaffys + yellowHearts()) * (mrMediocres + lavenderHearts()) !== 0) {
        if (mrMediocres >= 1) {
            if (coldHots >= 1) {
                sweetSynthesis(mrMediocre, daffyTaffy);
            } else if (daffyTaffys >= 1) {
                sweetSynthesis(mrMediocre, daffyTaffy);
            } else if (yellowHearts() >= 1) {
                sweetSynthesis(mrMediocre, yellowHeart);
            }
        } else {
            if (coldHots >= 1) {
                sweetSynthesis(lavenderHeart, daffyTaffy);
            } else if (daffyTaffys >= 1) {
                sweetSynthesis(lavenderHeart, daffyTaffy);
            } else if (yellowHearts() >= 1) {
                sweetSynthesis(lavenderHeart, yellowHeart);
            }
        }
    } else {
        sweetSynthesis(pinkHeart, pinkHeart);
    }
    if (haveEffect($effect`Synthesis: Hot`) === 0) {
        throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize hot. Pwease fix me :c.";
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
        !testDone(Test.FAMILIAR)
    ) {
        useFamiliar($familiar`Shorter-Order Cook`);
    } else if (!have($item`burning newspaper`) && !have($item`burning paper crane`)) {
        useFamiliar($familiar`Garbage Fire`);
    } else {
        useFamiliar($familiar`Puck Man`);
    }
}

export enum Test {
    HP = 1,
    MUS = 2,
    MYS = 3,
    MOX = 4,
    FAMILIAR = 5,
    WEAPON = 6,
    SPELL = 7,
    NONCOMBAT = 8,
    ITEM = 9,
    HOT_RES = 10,
    COIL_WIRE = 11,
    DONATE = 30,
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
    if (!have($effect`Inner Elf`)) {
        setClan("Hobopolis Vacation Home");
        try {
            useFamiliar($familiar`Machine Elf`);
            equip($slot`acc3`, $item`Kremlin's Greatest Briefcase`);
            setChoice(326, 1);
            ensureEffect($effect`Blood Bubble`);
            advMacro(
                $location`The Slime Tube`,
                Macro.trySkill($skill`KGB tranquilizer dart`).trySkill($skill`Snokebomb`)
            );
        } finally {
            setClan("Alliance From Heck");
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

export function uniform(): void {
    const pants =
        availableAmount($item`pantogram pants`) !== 0
            ? $item`pantogram pants`
            : $item`old sweatpants`;
    const acc3 =
        availableAmount($item`battle broom`) !== 0 ? $item`battle broom` : $item`Powerful Glove`;
    const back =
        availableAmount($item`LOV Epaulettes`) !== 0
            ? $item`LOV Epaulettes`
            : $item`vampyric cloake`;
    equip($slot`hat`, $item`Iunion Crown`);
    equip($slot`shirt`, $item`fresh coat of paint`);
    equip($slot`pants`, pants);
    equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
    equip($slot`off-hand`, $item`familiar scrapbook`);
    equip($slot`acc1`, $item`your cowboy boots`);
    equip($slot`acc2`, $item`codpiece`);
    equip($slot`acc3`, acc3);
    equip($slot`back`, back);
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
        adv1(location, -1, () => {
            return Macro.if_("!pastround 2", macro).abort().toString();
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
        adv1(location, -1, () => {
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

export function horsery(): string {
    return get("_horsery");
}

export function horse(horse: string): void {
    if (!horse.includes("horse")) horse = `${horse} horse`;
    if (horsery() !== horse) cliExecute(`horsery ${horse}`);
}

export interface testDuration {
    testName: string;
    turnPrediction: number;
    turnCost: number;
}

export function convertMilliseconds(milliseconds: number): string {
    const seconds = milliseconds / 1000;
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds - minutes * 60;
    const hours = Math.floor(minutes / 60);
    const minutesLeft = minutes - hours * 60;
    return (
        (hours !== 0 ? `${hours} hours, ` : "") +
        (minutesLeft !== 0 ? `${minutesLeft} minutes, ` : "") +
        (secondsLeft !== 0 ? `${secondsLeft} seconds` : "")
    );
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
            wait(10);
            if (checkFax(monster)) return;
        }
        abort(`Failed to acquire photocopied ${monster.name}.`);
    }
}

export const tests: testDuration[] = [];

export function testWrapper(name: string, test: Test, prepare: () => number): void {
    if (testDone(test)) return;
    const startTurns = myTurncount();
    const predictedTurns = prepare();
    doTest(test);
    tests.push({
        testName: name,
        turnPrediction: predictedTurns,
        turnCost: myTurncount() - startTurns,
    });
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

const heads = [
    $effect`Hot-Headed`,
    $effect`Cold as Nice`,
    $effect`A Brush with Grossness`,
    $effect`Does It Have a Skull In There??`,
    $effect`Oiled, Slick`,
    $effect`Lack of Body-Building`,
    $effect`We're All Made of Starfish`,
    $effect`Pomp & Circumsands`,
    $effect`Resting Beach Face`,
    $effect`Do I Know You From Somewhere?`,
    $effect`You Learned Something Maybe!`,
];

export function tryHead(effect: Effect): void {
    if (!heads.includes(effect)) return;
    const headNumber = 1 + heads.indexOf(effect);
    if (property.getString("_beachHeadsUsed").split(",").includes(headNumber.toString())) return;
    ensureEffect(effect);
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
