import {
    availableAmount,
    buy,
    cliExecute,
    create,
    eat,
    equip,
    getCounters,
    haveEffect,
    haveEquipped,
    knollAvailable,
    maximize,
    mpCost,
    myLevel,
    myMp,
    numericModifier,
    runChoice,
    runCombat,
    toEffect,
    totalFreeRests,
    use,
    useFamiliar,
    useSkill,
    visitUrl,
} from "kolmafia";
import {
    $effect,
    $familiar,
    $item,
    $location,
    $monster,
    $skill,
    $skills,
    $slot,
    get,
    have,
    Macro,
    TunnelOfLove,
    Witchess,
} from "libram";
import { candyblast, defaultKill, delevel, easyFight } from "./phccs-macros";
import {
    advMacro,
    advMacroAA,
    burnLibrams,
    ensureEffect,
    ensureInnerElf,
    ensureMp,
    heal,
    mapMacro,
    multiFightAutoAttack,
    questStep,
    setChoice,
    synthExp,
    synthMyst,
    tryHead,
    useDefaultFamiliar,
} from "./phredhccs-lib";
import uniform from "./outfits";

function initialExp() {
    if (!have($effect`That's Just Cloud-Talk, Man`)) {
        visitUrl("place.php?whichplace=campaway&action=campaway_sky");
    }

    ensureEffect($effect`Inscrutable Gaze`);
    ensureEffect($effect`Thaumodynamic`);

    if (!have($effect`Synthesis: Learning`)) synthExp();

    equip($item`familiar scrapbook`, $slot`off-hand`);

    if (availableAmount($item`a ten-percent bonus`)) {
        use(1, $item`a ten-percent bonus`);
    }
    cliExecute("bastille myst brutalist");
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
    if (!have($effect`Synthesis: Smart`)) synthMyst();

    tryHead($effect`You Learned Something Maybe!`);
    tryHead($effect`We're All Made of Starfish`);

    if (!get("_lyleFavored")) ensureEffect($effect`Favored by Lyle`);
    if (!get("telescopeLookedHigh")) ensureEffect($effect`Starry-Eyed`);

    ensureEffect($effect`Glittering Eyelashes`);

    if (!get("_streamsCrossed")) {
        cliExecute("crossstreams");
    }

    equip($slot`acc3`, $item`Powerful Glove`);
    ensureEffect($effect`Triple-Sized`);
    ensureEffect($effect`Feeling Excited`);

    if (have($item`votive of confidence`)) use($item`votive of confidence`);
}

function castBuffs() {
    useFamiliar($familiar`Left-Hand Man`);
    maximize("mp", false);

    if (get("_sausagesEaten") === 0) {
        cliExecute("eat 1 magic sausage");
        useSkill(1, $skill`Advanced Saucecrafting`);
        useSkill(1, $skill`Advanced Cocktailcrafting`);
        useSkill(1, $skill`Acquire Rhinestones`);
        useSkill(1, $skill`Prevent Scurvy and Sobriety`);
    }

    if (!have($effect`Glowing Blue`)) {
        visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2");
        buy(1, $item`blue rocket`);
        use(1, $item`blue rocket`);
    }

    if (!have($item`turtle totem`)) cliExecute("acquire turtle totem");
    if (!have($item`saucepan`)) cliExecute("acquire saucepan");

    $skills`The Magical Mojomuscular Melody, Stevedave's Shanty of Superiority, Fat Leon's Phat Loot Lyric, The Polka of Plenty, Leash of Linguini, Empathy of the Newt, Blood Bond, Blood Bubble, Song of Bravado, Get Big`.forEach(
        (buff) => {
            if (!have(toEffect(buff))) {
                if (myMp() < mpCost(buff)) {
                    if (totalFreeRests() > get("timesRested")) {
                        visitUrl("place.php?whichplace=chateau&action=chateau_restbox");
                    } else if (availableAmount($item`psychokinetic energy blob`) >= 1) {
                        use(2, $item`psychokinetic energy blob`);
                    } else {
                        eat(1, $item`magical sausage`);
                    }
                }
                useSkill(1, buff);
            }
        }
    );
}

function getYoked() {
    uniform();
    useFamiliar($familiar`Ghost of Crimbo Carols`);
    if (get("snojoSetting") === "NONE") {
        visitUrl("place.php?whichplace=snojo&action=snojo_controller");
        runChoice(2);
    }
    heal();
    advMacroAA(
        $location`The X-32-F Combat Training Snowman`,
        Macro.step(delevel).attack().repeat(),
        () => {
            return !have($effect`Holiday Yoked`);
        },
        () => ensureMp(30)
    );
}

function witchGhostAgent() {
    if (questStep("questM25Armorer") === -1) {
        visitUrl("shop.php?whichshop=armory&action=talk");
        runChoice(1);
    }
    uniform();
    equip($slot`back`, $item`protonic accelerator pack`);
    cliExecute("fold makeshift garbage shirt");
    equip($slot`shirt`, $item`makeshift garbage shirt`);
    heal();
    useDefaultFamiliar();
    ensureMp(100);
    Macro.skill("curse of weaksauce").skill("micrometeor").attack().repeat().setAutoAttack();
    if (!have($item`battle broom`)) {
        Witchess.fightPiece($monster`Witchess Witch`);
    }
    equip($slot`acc3`, $item`battle broom`);

    const ghostLocation = get("ghostLocation");
    if (ghostLocation) {
        equip($slot`off-hand`, $item`latte lovers member's mug`);
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
        equip($slot`off-hand`, $item`latte lovers member's mug`);
        advMacroAA(
            $location`Noob Cave`,
            Macro.step(delevel).skill("otoscope").skill("become a bat").skill("chest x-ray"), //1
            () => {
                return getCounters("Portscan", 0, 0) !== "";
            },
            () => () => ensureMp(30)
        );
        const desertAccessItem = knollAvailable()
            ? $item`bitchin' meatcar`
            : $item`Desert Bus pass`;
        if (!have(desertAccessItem)) {
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
        use(1, $item`LOV Extraterrestrial Chocolate`);
    }
    burnLibrams();
}

function tomatoJuiceAndNinjaCostume() {
    cliExecute("backupcamera ml");

    if (have($item`magical sausage casing`) || have($item`magical sausage`)) {
        cliExecute("eat magic sausage");
    }
    uniform();
    if (
        get("_monstersMapped") < 2 &&
        availableAmount($item`tomato`) +
            availableAmount($item`tomato juice of powerful power`) +
            haveEffect($effect`Tomato Power`) ===
            0
    ) {
        equip($slot`acc3`, $item`Lil' Doctor™ bag`);
        useDefaultFamiliar();
        mapMacro(
            $location`The Haunted Pantry`,
            $monster`possessed can of tomatoes`,
            Macro.if_(
                `monsterid ${$monster`possessed can of tomatoes`.id}`,
                Macro.skill($skill`Reflex Hammer`)
            )
        );
        useDefaultFamiliar(false);
        uniform();
        ensureMp(30);
        mapMacro(
            $location`The Haiku Dungeon`,
            $monster`amateur ninja`,
            Macro.if_(
                `monsterid ${$monster`amateur ninja`.id}`,
                Macro.skill($skill`Feel Nostalgic`).skill($skill`Gingerbread Mob Hit`)
            ).step("abort")
        );
    }

    if (!get("hasRange")) {
        if (!have($item`Dramatic™ range`)) {
            buy(1, $item`Dramatic™ range`);
        }
        use(1, $item`Dramatic™ range`);
    }
    useSkill($skill`Advanced Saucecrafting`);
    useSkill($skill`Prevent Scurvy and Sobriety`);
    if (!have($effect`Tomato Power`)) {
        if (!have($item`tomato juice of powerful power`) && have($item`tomato`)) {
            create(1, $item`tomato juice of powerful power`);
        }
        if (have($item`tomato juice of powerful power`)) {
            use(1, $item`tomato juice of powerful power`);
        }
    }
    if (!have($effect`Mystically Oiled`)) {
        if (!have($item`ointment of the occult`)) {
            create(1, $item`ointment of the occult`);
        }
        if (have($item`ointment of the occult`)) {
            use(1, $item`ointment of the occult`);
        }
    }
}

function godLob() {
    if (get("_godLobsterFights") === 0) {
        Macro.step(delevel).step(easyFight).attack().repeat().setAutoAttack();
        uniform();
        heal();
        useFamiliar($familiar`God Lobster`);
        setChoice(1310, 1);
        visitUrl("main.php?fightgodlobster=1");
        runCombat(Macro.step(delevel).step(easyFight).attack().repeat().toString());
        multiFightAutoAttack();
        runChoice(-1);
        equip($slot`familiar`, $item`God Lobster's Scepter`);
        heal();
        visitUrl("main.php?fightgodlobster=1");
        runCombat();
        multiFightAutoAttack();
        runChoice(-1);
        equip($slot`familiar`, $item`God Lobster's Ring`);
    }
}

function snojo() {
    uniform();
    useDefaultFamiliar();
    advMacroAA(
        $location`The X-32-F Combat Training Snowman`,
        Macro.step(delevel).step(easyFight).attack().repeat(),
        () => {
            return get("_snojoFreeFights") < 10;
        },
        () => {
            heal();
            useDefaultFamiliar();
            ensureMp(30);
        }
    );
    cliExecute("hottub");
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
        $location`The Neverending Party`,
        Macro.step(delevel).trySkill("feel pride").step(easyFight).attack().repeat(),
        () => {
            return get("_neverendingPartyFreeTurns") < 10;
        },
        () => {
            useDefaultFamiliar();
            heal();
            if (get("_sausageFights") > 3 && haveEquipped($item`Kramco Sausage-o-Matic™`)) {
                equip($slot`off-hand`, $item`familiar scrapbook`);
            }
            if (get("choiceAdventure1324") !== 5 && questStep("_questPartyFair") > 0) {
                setChoice(1324, 5);
            }
            if (myLevel() >= 13 && !have($effect`Inner Elf`)) {
                ensureInnerElf();
            }
            ensureMp(30);
        }
    );
    advMacroAA(
        $location`The Neverending Party`,
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
            if (get("_sausageFights") > 3 && haveEquipped($item`Kramco Sausage-o-Matic™`)) {
                equip($slot`off-hand`, $item`familiar scrapbook`);
            }
            if (get("choiceAdventure1324") !== 5 && questStep("_questPartyFair") > 0) {
                setChoice(1324, 5);
            }
            if (myLevel() >= 13 && !have($effect`Inner Elf`)) {
                ensureInnerElf();
            }
            ensureMp(30);
        }
    );
    equip($slot`acc3`, $item`Lil' Doctor™ bag`);
    advMacroAA(
        $location`The Neverending Party`,
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
            if (get("_sausageFights") > 3 && haveEquipped($item`Kramco Sausage-o-Matic™`)) {
                equip($slot`off-hand`, $item`familiar scrapbook`);
            }
            if (get("choiceAdventure1324") !== 5 && questStep("_questPartyFair") > 0) {
                setChoice(1324, 5);
            }
            if (myLevel() >= 13 && !have($effect`Inner Elf`)) {
                ensureInnerElf();
            }
            ensureMp(30);
        }
    );
}

function mElfLeveling() {
    uniform();
    cliExecute("fold garbage shirt");
    equip($slot`shirt`, $item`makeshift garbage shirt`);
    useFamiliar($familiar`Machine Elf`);
    advMacroAA(
        $location`The Deep Machine Tunnels`,
        defaultKill,
        () => {
            return get("_machineTunnelsAdv") < 5;
        },
        () => {
            heal();
            ensureMp(30);
        }
    );
}

function royalty() {
    if (!have($item`very pointy crown`)) {
        Macro.tryItem("jam band flyer")
            .tryItem("gas can")
            .tryItem("time-spinner")
            .attack()
            .repeat()
            .setAutoAttack();
        uniform();
        useDefaultFamiliar();
        heal();
        Witchess.fightPiece($monster`Witchess Queen`);
    }
    if (!have($item`dented scepter`)) {
        Macro.step(delevel).attack().repeat().setAutoAttack();
        uniform();
        useDefaultFamiliar();
        heal();
        Witchess.fightPiece($monster`Witchess King`);
    }
}

function restAndBuff() {
    while (get("timesRested") < totalFreeRests()) {
        burnLibrams();
        visitUrl("place.php?whichplace=chateau&action=chateau_restbox");
    }
}

export default function levelUp(): void {
    initialExp();
    buffMyst();
    castBuffs();
    tomatoJuiceAndNinjaCostume();
    getYoked();
    witchGhostAgent();
    lov();
    godLob();
    snojo();
    mElfLeveling();
    NEP();
    royalty();
    restAndBuff();
}
