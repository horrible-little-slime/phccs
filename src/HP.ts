import {
    visitUrl,
    equip,
    availableAmount,
    use,
    runChoice,
    cliExecute,
    numericModifier,
    useSkill,
    haveEffect,
    buy,
    create,
    eat,
    getCampground,
    getCounters,
    knollAvailable,
    maximize,
    mpCost,
    myMp,
    toEffect,
    totalFreeRests,
    useFamiliar,
    runCombat,
    adv1,
    inMultiFight,
    myBuffedstat,
    myMaxhp,
    myThrall,
} from "kolmafia";
import {
    have,
    $effect,
    $item,
    $slot,
    get,
    $skill,
    $familiar,
    $location,
    $monster,
    $skills,
    Macro,
    TunnelOfLove,
    Witchess,
    $stat,
    $thrall,
} from "libram";
import { delevel, easyFight, candyblast, defaultKill } from "./phccs-macros";
import {
    advMacro,
    advMacroAA,
    ensureEffect,
    heal,
    kramcoCheck,
    mapMacro,
    multiFightAutoAttack,
    PropertyManager,
    questStep,
    setChoice,
    synthExp,
    synthMyst,
    tryHead,
    uniform,
    useDefaultFamiliar,
} from "./phredhccs-lib";

function initialExp() {
    if (!have($effect`That's Just Cloud-Talk, Man`)) {
        visitUrl("place.php?whichplace=campaway&action=campaway_sky");
    }

    ensureEffect($effect`Inscrutable Gaze`);
    ensureEffect($effect`Thaumodynamic`);

    if (!have($effect`synthesis: learning`)) synthExp();

    equip($item`familiar scrapbook`, $slot`off-hand`);

    if (availableAmount($item`a ten-percent bonus`)) {
        use(1, $item`a ten-percent bonus`);
    }
    cliExecute("bastille myst brutalist");
    if (get("_daycareGymScavenges") == 0) {
        visitUrl("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
        runChoice(3);
        runChoice(2);
        runChoice(5);
        runChoice(4);
    }
}

function buffMyst() {
    const lovePotion = $item`Love Potion #0`;
    const loveEffect = $effect`Tainted Love Potion`;
    if (!have(loveEffect)) {
        if (!have(lovePotion)) {
            useSkill(1, $skill`Love Mixology`);
        }
        visitUrl(`desc_effect.php?whicheffect=${loveEffect.descid}`);
        if (
            numericModifier(loveEffect, "mysticality") > 10 &&
            numericModifier(loveEffect, "muscle") > -30 &&
            numericModifier(loveEffect, "moxie") > -30 &&
            numericModifier(loveEffect, "maximum hp percent") > -0.001
        ) {
            use(1, lovePotion);
        }
    }

    ensureEffect($effect`Uncucumbered`);
    if (!have($effect`synthesis: smart`)) synthMyst();

    tryHead($effect`You Learned Something Maybe!`);
    tryHead($effect`We're All Made of Starfish`);

    if (!get("_lyleFavored")) ensureEffect($effect`Favored by Lyle`);
    if (!get("telescopeLookedHigh")) ensureEffect($effect`Starry-Eyed`);

    if (
        availableAmount($item`glittery mascara`) + haveEffect($effect`glittering eyelashes`) ===
        0
    ) {
        buy(1, $item`glittery mascara`);
    }
    ensureEffect($effect`Glittering Eyelashes`);

    if (!get("_streamsCrossed")) {
        cliExecute("crossstreams");
    }

    equip($slot`acc3`, $item`powerful glove`);
    ensureEffect($effect`Triple-Sized`);
    ensureEffect($effect`Feeling Excited`);
}

function castBuffs() {
    useFamiliar($familiar`left-hand man`);
    maximize("mp", false);

    if (get("_sausagesEaten") === 0) {
        cliExecute("eat 1 magic sausage");
        useSkill(1, $skill`Advanced Saucecrafting`);
        useSkill(1, $skill`Advanced Cocktailcrafting`);
        useSkill(1, $skill`Acquire Rhinestones`);
        useSkill(1, $skill`Prevent Scurvy and Sobriety`);
    }

    if (!have($item`turtle totem`)) cliExecute("acquire turtle totem");
    if (!have($item`saucepan`)) cliExecute("acquire saucepan");

    const castableBuffs = $skills`The Magical Mojomuscular Melody, Stevedave's Shanty of Superiority, Fat Leon's Phat Loot Lyric, The Polka of Plenty, leash of linguini, empathy of the newt, blood bond, blood bubble, Song of Bravado, Get Big`;
    castableBuffs.forEach((buff) => {
        if (!have(toEffect(buff))) {
            if (myMp() < mpCost(buff)) {
                if (totalFreeRests() > get("timesRested")) {
                    visitUrl("place.php?whichplace=chateau&action=chateau_restbox");
                } else if (availableAmount($item`psychokinetic energy`) >= 1) {
                    use(2, $item`psychokinetic energy`);
                } else {
                    eat(1, $item`magical sausage`);
                }
            }
            useSkill(1, buff);
        }
    });
}

function getYoked() {
    uniform();
    useFamiliar($familiar`ghost of crimbo carols`);
    if (get("snojoSetting") === "NONE") {
        visitUrl("place.php?whichplace=snojo&action=snojo_controller");
        runChoice(2);
    }
    heal();
    advMacroAA(
        $location`The X-32-F Combat Training Snowman`,
        Macro.step(delevel).attack().repeat(),
        () => {
            return !have($effect`holiday yoked`);
        }
    );
}

function witchGhostAgent() {
    uniform();
    equip($slot`back`, $item`protonic accelerator pack`);
    cliExecute("fold makeshift garbage shirt");
    equip($slot`shirt`, $item`makeshift garbage shirt`);
    heal();
    useDefaultFamiliar();
    Macro.skill("curse of weaksauce").skill("micrometeor").attack().repeat().setAutoAttack();
    if (!have($item`battle broom`)) {
        Witchess.fightPiece($monster`Witchess Witch`);
    }
    equip($slot`acc3`, $item`battle broom`);

    if (get("questM25Armorer") === "unstarted") {
        visitUrl("shop.php?whichshop=armory&action=talk");
        runChoice(1);
    }

    const ghostLocation = get("ghostLocation");
    if (ghostLocation) {
        equip($slot`off-hand`, $item`latte lover member's mug`);
        useDefaultFamiliar();
        advMacro(
            ghostLocation,
            Macro.step(delevel)
                .step(easyFight)
                .skill("portscan")
                .skill("shoot ghost")
                .skill("shoot ghost")
                .skill("shoot ghost")
                .skill("trap ghost")
        );
    }
    if (!have($item`government`) && !have($item`government cheese`)) {
        equip($slot`back`, $item`vampyric cloake`);
        useDefaultFamiliar();
        equip($slot`acc2`, $item`gold detective badge`);
        equip($slot`acc3`, $item`Lil' Doctor™ bag`);
        equip($slot`off-hand`, $item`latte lover member's mug`);
        advMacroAA(
            $location`noob cave`,
            Macro.step(delevel).skill("otoscope").skill("become a bat").skill("chest x-ray"), //1
            () => {
                return getCounters("Portscan", 0, 0) !== "";
            }
        );
        const desertAccessItem = knollAvailable()
            ? $item`bitchin' meatcar`
            : $item`desert bus pass`;
        if (availableAmount(desertAccessItem) == 0) {
            cliExecute(`acquire ${desertAccessItem.name}`);
        }
        visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse");
    }
}

function lov() {
    uniform();
    equip($slot`back`, $item`protonic accelerator pack`);
    cliExecute("fold makeshift garbage shirt");
    equip($slot`shirt`, $item`makeshift garbage shirt`);
    heal();
    useDefaultFamiliar();
    Macro.if_("monstername LOV enforcer", Macro.attack().repeat())
        .if_(
            "monstername LOV Engineer",
            Macro.step(candyblast).skill("weapon of the pastalord").repeat()
        )
        .if_(
            "monstername LOV equivocator",
            Macro.step(delevel).step(easyFight).step(candyblast).attack().repeat()
        )
        .setAutoAttack();
    if (!get("_loveTunnelUsed")) {
        TunnelOfLove.fightAll(
            "LOV Epaulettes",
            "Open Heart Surgery",
            "LOV Extraterrestrial Chocolate"
        );
        use(1, $item`lov extraterrestrial chocolate`);
    }
    cliExecute("/cast * candy heart");
}

function tomatoJuice() {
    cliExecute("backupcamera ml");

    uniform();
    if (
        get("_monstersMapped") < 3 &&
        availableAmount($item`tomato`) +
            availableAmount($item`tomato juice of powerful power`) +
            haveEffect($effect`tomato power`) ===
            0
    ) {
        equip($slot`acc3`, $item`Lil' Doctor™ bag`);
        useDefaultFamiliar();
        mapMacro(
            $location`the haunted pantry`,
            $monster`possessed can of tomatoes`,
            Macro.if_(
                `monsterid ${$monster`possessed can of tomatoes`.id}`,
                Macro.skill($skill`reflex hammer`)
            )
        );
        useDefaultFamiliar();
        uniform();
        advMacroAA(
            $location` X-32-F Combat Training Snowman`,
            Macro.skill($skill`feel nostalgic`).step(defaultKill)
        );
    }

    if (getCampground()["Dramatic™ range"] !== 1) {
        if (!have($item`Dramatic™ range`)) {
            buy(1, $item`Dramatic™ range`);
        }
        use(1, $item`Dramatic™ range`);
    }
    useSkill($skill`Advanced Saucecrafting`);
    useSkill($skill`prevent scurvy and sobriety`);
    if (!have($effect`tomato power`)) {
        if (!have($item`tomato juice of powerful power`) && have($item`tomato`)) {
            create(1, $item`tomato juice of powerful power`);
        }
        if (have($item`tomato juice of powerful power`)) {
            use(1, $item`tomato juice of powerful power`);
        }
    }
    if (!have($effect`mystically oiled`)) {
        if (!have($item`ointment of the occult`)) {
            create(1, $item`ointment of the occult`);
        }
        if (have($item`ointment of the occult`)) {
            use(1, $item`ointment of the occult`);
        }
    }
}

function ninjaCostume() {
    if (get("_monstersMapped") < 3 && !have($item`li'l ninja costume`)) {
        useDefaultFamiliar();
        mapMacro(
            $location`haiku dungeon`,
            $monster`amateur ninja`,
            Macro.if_(
                `monsterid ${$monster`amateur ninja`.id}`,
                Macro.skill($skill`gingerbread mob hit`)
            ).step("abort")
        );
    }
}

function godLob() {
    if (get("_godLobsterFights") === 0) {
        Macro.step(delevel).step(easyFight).attack().repeat().setAutoAttack();
        uniform();
        heal();
        useFamiliar($familiar`god lobster`);
        setChoice(1310, 1);
        visitUrl("main.php?fightgodlobster=1");
        runCombat(Macro.step(delevel).step(easyFight).attack().repeat().toString());
        multiFightAutoAttack();
        runChoice(-1);
        equip($slot`familiar`, $item`god lobster's scepter`);
        heal();
        visitUrl("main.php?fightgodlobster=1");
        runCombat();
        multiFightAutoAttack();
        runChoice(-1);
        equip($slot`familiar`, $item`god lobster's ring`);
    }
}

function snojo() {
    uniform();
    useDefaultFamiliar();
    advMacroAA(
        $location`the x-32-f combat training snowman`,
        Macro.step(delevel).step(easyFight).attack().repeat(),
        () => {
            return get("_snojoFreeFights") < 10;
        },
        () => {
            heal();
            useDefaultFamiliar();
        }
    );
    cliExecute("hottub");
}

function lectureChain() {
    heal();
    if (get("_pocketProfessorLectures") === 0) {
        useFamiliar($familiar`pocket professor`);
        uniform();
        equip($slot`off-hand`, $item`latte lovers member's mug`);
        equip($slot`acc1`, $item`hewn moon-rune spoon`);
        equip($slot`acc2`, $item`beach comb`);
        equip($slot`acc3`, $item`brutal brogues`);
        const profchain = Macro.step(delevel)
            .trySkill("Lecture on Relativity")
            .step(candyblast)
            .attack()
            .repeat();
        profchain.setAutoAttack();
        if (kramcoCheck()) {
            equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
            do {
                adv1($location`madness bakery`, -1, profchain.toString());
            } while (get("lastEncounter") === "Our Bakery in the Middle of Our Street");
            multiFightAutoAttack();
        } else if (get("_witchessFights") < 3) {
            Witchess.fightPiece($monster`witchess bishop`);
            multiFightAutoAttack();
        }
    }
}

function NEP() {
    if (get("_questPartyFair") === "unstarted") {
        setChoice(1322, "");
        visitUrl("adventure.php?snarfblat=528");
        if (get("_questPartyFairQuest") === "food") {
            runChoice(1);
            setChoice(1324, 2);
            setChoice(1326, 3);
        } else if (get("_questPartyFairQuest") === "booze") {
            runChoice(1);
            setChoice(1324, 3);
            setChoice(1327, 3);
        } else {
            runChoice(2);
            setChoice(1324, 5);
        }
    }

    uniform();
    equip($slot`shirt`, $item`makeshift garbage shirt`);
    equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
    useDefaultFamiliar();
    advMacroAA(
        $location`the neverending party`,
        Macro.step(delevel).trySkill("feel pride").step(easyFight).attack().repeat(),
        () => {
            return get("_neverendingPartyFreeTurns") < 10;
        },
        () => {
            useDefaultFamiliar();
            heal();
            if (get("_sausageFights") > 2) {
                equip($slot`off-hand`, $item`familiar scrapbook`);
            }
            if (get("choiceAdventure1324") !== 5 && questStep("_questPartyFair") > 0) {
                setChoice(1324, 5);
            }
        }
    );
    advMacroAA(
        $location`the neverending party`,
        Macro.if_(
            "!monstername sausage goblin",
            Macro.trySkill("shattering punch")
                .trySkill("gingerbread mob hit")
                .trySkill("chest x-ray")
        ).if_("monstername sausage goblin", Macro.step(delevel).step(candyblast).attack().repeat()),
        () => {
            return get("_shatteringPunchUsed") < 3 && !get("_gingerbreadMobHitUsed");
        },
        () => {
            heal();
            useDefaultFamiliar();
            if (get("choiceAdventure1324") !== 5 && questStep("_questPartyFair") > 0) {
                setChoice(1324, 5);
            }
        }
    );
    equip($slot`acc3`, $item`Lil' Doctor™ bag`);
    advMacroAA(
        $location`the neverending party`,
        Macro.if_(
            "!monstername sausage goblin",
            Macro.trySkill("shattering punch")
                .trySkill("gingerbread mob hit")
                .trySkill("chest x-ray")
        ).if_("monstername sausage goblin", Macro.step(delevel).step(candyblast).attack().repeat()),
        () => {
            return get("_chestXRayUsed") < 3;
        },
        () => {
            heal();
            useDefaultFamiliar();
            if (get("choiceAdventure1324") !== 5 && questStep("_questPartyFair") > 0) {
                setChoice(1324, 5);
            }
        }
    );
}

function mElfLeveling() {
    uniform();
    cliExecute("fold garbage shirt");
    equip($slot`shirt`, $item`makeshift garbage shirt`);
    useFamiliar($familiar`machine elf`);
    advMacroAA(
        $location`the deep machine tunnels`,
        defaultKill,
        () => {
            return get("_machineTunnelsAdv") < 5;
        },
        heal
    );
}

function royalty() {
    if (!have($item`very pointy crown`)) {
        Macro.tryItem("jam band flyer")
            .tryItem("gas can")
            .item("time-spinner")
            .attack()
            .repeat()
            .setAutoAttack();
        uniform();
        useDefaultFamiliar();
        heal();
        Witchess.fightPiece($monster`witchess queen`);
    }
    if (!have($item`dented scepter`)) {
        Macro.step(delevel).attack().repeat().setAutoAttack();
        uniform();
        useDefaultFamiliar();
        heal();
        Witchess.fightPiece($monster`witchess king`);
    }
}

function restAndBuff() {
    while (get("timesRested") < totalFreeRests()) {
        ensureEffect($effect`song of starch`);
        if (myThrall() !== $thrall`undead elbow macaroni`)
            useSkill($skill`bind undead elbow macaroni`);
        cliExecute("/cast * candy heart");
        visitUrl("place.php?whichplace=chateau&action=chateau_restbox");
    }
}
const predictor = () => 60 - Math.floor((myMaxhp() - myBuffedstat($stat`muscle`) - 3) / 30);
function testPrep() {
    maximize("hp", false);

    if (predictor() > 1) {
        throw "Failed to cap HP";
    }
}

export default function HPTest() {
    initialExp();
    buffMyst();
    castBuffs();
    tomatoJuice();
    getYoked();
    witchGhostAgent();
    lov();
    ninjaCostume();
    godLob();
    snojo();
    lectureChain();
    mElfLeveling();
    NEP();
    royalty();
    restAndBuff();
    testPrep();
    return predictor();
}
