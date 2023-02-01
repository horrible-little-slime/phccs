import { CSStrategy, Macro } from "./combat";
import { beachTask, innerElf } from "./commons";
import { CSQuest } from "./engine";
import { burnLibrams, hasNcBird, synthExp } from "./lib";
import uniform from "./outfit";
import { OutfitSpec } from "grimoire-kolmafia";
import {
    buy,
    cliExecute,
    create,
    mpCost,
    myLevel,
    myMaxmp,
    myMp,
    numericModifier,
    print,
    runChoice,
    runCombat,
    toEffect,
    totalFreeRests,
    use,
    useSkill,
    visitUrl,
} from "kolmafia";
import {
    $effect,
    $effects,
    $familiar,
    $item,
    $items,
    $location,
    $monster,
    $skill,
    $skills,
    Cartography,
    Counter,
    get,
    have,
    TunnelOfLove,
    Witchess,
    withProperties,
} from "libram";

const levellingComplete = myLevel() >= 13 && get("_neverendingPartyFreeTurns") >= 10;
let lovePotionConsidered = false;

const foldshirt = (): void => {
    if (!have($item`makeshift garbage shirt`)) cliExecute("fold makeshift garbage shirt");
};

const CastSkills =
    $skills`Advanced Saucecrafting, Advanced Cocktailcrafting, Acquire Rhinestones, Prevent Scurvy and Sobriety, The Magical Mojomuscular Melody, Stevedave's Shanty of Superiority, Fat Leon's Phat Loot Lyric, The Polka of Plenty, Leash of Linguini, Empathy of the Newt, Blood Bond, Blood Bubble, Song of Bravado, Get Big`
        .map((s) => ({
            name: s.name,
            do: (): void => {
                useSkill(s);
            },
            completed: () => (s.buff ? have(toEffect(s)) : s.timescast > 0),
            ready: () => myMp() >= mpCost(s),
        }))
        .map((task) => ({
            ...task,
            outfit: () => uniform({ changes: { offhand: $item`Abracandalabra` } }),
        }));

const Recovery = [
    {
        name: "Rest",
        completed: () => get("timesRested") >= totalFreeRests(),
        mp: 150,
        do: (): void => {
            visitUrl("place.php?whichplace=chateau&action=chateau_restlabelfree");
        },
    },
    {
        name: "Psychokinetic Energy Blob",
        completed: () => !have($item`psychokinetic energy blob`),
        mp: 30,
        do: (): void => {
            use($item`psychokinetic energy blob`);
        },
    },
].map((task) => ({
    ...task,
    outfit: () => uniform({ changes: { offhand: $item`Abracandalabra` } }),
    completed: () => task.completed() || CastSkills.every(({ completed }) => completed()),
    ready: () => myMp() + task.mp < myMaxmp(),
}));

const lovePotion = $item`Love Potion #0`;
const loveEffect = $effect`Tainted Love Potion`;
const Level: CSQuest = {
    type: "MISC",
    name: "Level",
    completed: () => levellingComplete,
    tasks: [
        innerElf(),
        {
            name: "That's Just Cloud Talk, Man",
            completed: () => !!get("_campAwayCloudBuffs"),
            do: () => visitUrl("place.php?whichplace=campaway&action=campaway_sky"),
        },
        {
            name: "Synth: Learning",
            completed: () => have($effect`Synthesis: Learning`),
            do: synthExp,
        },
        {
            name: "Ten-Percent Bonus",
            completed: () => !have($item`a ten-percent bonus`),
            outfit: () => uniform({ changes: { offhand: $item`familiar scrapbook` } }),
            effects: $effects`Inscrutable Gaze, Thaumodynamic`,
            do: () => use(1, $item`a ten-percent bonus`),
        },
        {
            name: "Bastille",
            completed: () => get("_bastilleGames") > 0,
            do: () => cliExecute("bastille myst brutalist"),
        },
        {
            name: "Get Love Potion",
            completed: () => $skill`Love Mixology`.timescast > 0,
            do: () => useSkill(1, $skill`Love Mixology`),
        },
        {
            name: "Consider Love Potion",
            completed: () => lovePotionConsidered,
            do: (): void => {
                visitUrl(`desc_effect.php?whicheffect=${loveEffect.descid}`);
                lovePotionConsidered = true;

                if (
                    numericModifier(loveEffect, "mysticality") > 10 &&
                    numericModifier(loveEffect, "muscle") > -30 &&
                    numericModifier(loveEffect, "moxie") > -30 &&
                    numericModifier(loveEffect, "maximum hp percent") > -0.001
                ) {
                    use(1, lovePotion);
                }
            },
        },
        {
            name: "Favourite Bird",
            completed: () => get("_favoriteBirdVisited"),
            ready: () =>
                get("yourFavoriteBirdMods")
                    .split(",")
                    .some((mod) => mod.includes("Mysticality Percent: +")),
            do: () => useSkill($skill`Visit your Favorite Bird`),
        },
        {
            name: "Vaccine",
            completed: () => get("_spacegateVaccine"),
            ready: () => get("spacegateVaccine2") && get("spacegateAlways"),
            do: () => cliExecute("spacegate vaccine 2"),
        },
        {
            name: "Boxing Daybuff",
            completed: () => get("_daycareSpa"),
            do: () => cliExecute("daycare mysticality"),
        },
        beachTask($effect`You Learned Something Maybe!`),
        beachTask($effect`We're All Made of Starfish`),
        {
            name: "Smile of Lyle",
            completed: () => get("_lyleFavored"),
            do: () => cliExecute("monorail buff"),
        },
        {
            name: "Telescope",
            completed: () => get("telescopeLookedHigh"),
            do: () => cliExecute("telescope look high"),
        },
        {
            name: "Cross Streams",
            completed: () => get("_streamsCrossed"),
            do: () => cliExecute("crossstreams"),
        },
        {
            name: "Glittering Eyelashes",
            completed: () => have($effect`Glittering Eyelashes`),
            do: (): void => {
                const mascara = $item`glittery mascara`;
                if (!have(mascara)) buy(1, mascara);
                use(1, mascara);
            },
        },
        {
            name: "Triple-Sized",
            completed: () => have($effect`Triple-Sized`),
            do: () => useSkill($skill`CHEAT CODE: Triple Size`, 1),
            outfit: { acc3: $item`Powerful Glove` },
        },
        {
            name: "Feel Excited",
            completed: () => get("_feelExcitementUsed") > 0,
            do: () => useSkill($skill`Feel Excitement`),
        },
        {
            name: "Misc Items",
            completed: () =>
                $items`votive of confidence, natural magick candle, MayDay™ supply package`.every(
                    (i) => !have(i)
                ),
            do: () =>
                $items`votive of confidence, natural magick candle, MayDay™ supply package`.forEach(
                    (i) => have(i) && use(i)
                ),
        },
        {
            name: "Acquire Blue Rocket",
            completed: () => have($effect`Glowing Blue`) || have($item`blue rocket`),
            do: (): void => {
                visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2");
                buy(1, $item`blue rocket`);
            },
        },
        {
            // not strictly necessary
            name: "Acquire Casting Items",
            completed: () => $items`turtle totem, saucepan`.every((i) => have(i)),
            do: () =>
                $items`turtle totem, saucepan`.forEach(
                    (i) => !have(i) && cliExecute(`acquire ${i}`)
                ),
        },
        ...CastSkills,
        ...Recovery,
        {
            name: "Get Range",
            completed: () => get("hasRange"),
            do: (): void => {
                if (!have($item`Dramatic™ range`)) {
                    buy(1, $item`Dramatic™ range`);
                }
                use(1, $item`Dramatic™ range`);
            },
        },
        {
            name: "Make & Use Ointment",
            completed: () => have($effect`Mystically Oiled`),
            ready: () => have($item`grapefruit`),
            do: (): void => {
                if (!have($item`ointment of the occult`)) {
                    create(1, $item`ointment of the occult`);
                }
                if (have($item`ointment of the occult`)) {
                    use(1, $item`ointment of the occult`);
                }
            },
        },
        {
            name: "Set Snojo",
            completed: () => !!get("snojoSetting"),
            do: (): void => {
                visitUrl("place.php?whichplace=snojo&action=snojo_controller");
                runChoice(3);
            },
        },
        {
            name: "Holiday Yoked, Giant Growth, and Blue Rocket",
            core: "hard",
            completed: () => have($effect`Holiday Yoked`),
            do: $location`The X-32-F Combat Training Snowman`,
            outfit: () =>
                uniform({
                    changes: { familiar: $familiar`Ghost of Crimbo Carols`, famequip: $item.none },
                }),
            combat: new CSStrategy(() =>
                Macro.externalIf(
                    !have($effect`Cosmic Ball in the Air`),
                    Macro.skill($skill`Bowl Straight Up`)
                )
                    .delevel()
                    .tryItem($item`blue rocket`)
                    .trySkill($skill`Giant Growth`)
                    .defaultKill()
            ),
        },
        {
            name: "Giant Growth and Blue Rocket",
            core: "soft",
            completed: () => have($effect`Giant Growth`),
            do: $location`The X-32-F Combat Training Snowman`,
            outfit: uniform,
            combat: new CSStrategy(() =>
                Macro.externalIf(
                    !have($effect`Cosmic Ball in the Air`),
                    Macro.skill($skill`Bowl Straight Up`)
                )
                    .delevel()
                    .tryItem($item`blue rocket`)
                    .trySkill($skill`Giant Growth`)
                    .defaultKill()
            ),
        },
        // A proton ghost should get fought here
        // It happens in globaltasks.ts
        {
            name: "Map Ninja",
            completed: () => have($item`li'l ninja costume`),
            do: (): void => {
                Cartography.mapMonster($location`The Haiku Dungeon`, $monster`amateur ninja`);
            },
            combat: new CSStrategy(() =>
                Macro.if_($monster`amateur ninja`, Macro.skill($skill`Chest X-Ray`)).abort()
            ),
            outfit: () => uniform({ canAttack: false, changes: { acc3: $item`Lil' Doctor™ bag` } }),
        },
        {
            name: "Eleven Rests",
            completed: () => get("timesRested") >= 11,
            do: (): void => {
                burnLibrams();
                visitUrl("place.php?whichplace=chateau&action=chateau_restlabelfree");
            },
            outfit: () => uniform({ changes: { offhand: $item`familiar scrapbook` } }),
        },
        {
            name: "Witchess Witch",
            completed: () => have($item`battle broom`),
            outfit: (): OutfitSpec => {
                foldshirt();
                return uniform({
                    changes: {
                        weapon: $item`Fourth of May Cosplay Saber`,
                        shirt: $item`makeshift garbage shirt`,
                        offhand: $item`familiar scrapbook`,
                    },
                });
            },
            prepare: (): void => {
                useSkill($skill`Cannelloni Cocoon`);
            },
            ready: () => Witchess.fightsDone() < 5,
            do: () => Witchess.fightPiece($monster`Witchess Witch`),
            combat: new CSStrategy(() => Macro.delevel().attack().repeat()),
        },
        {
            name: "Oliver's Place: Prime Portscan",
            completed: () => get("_speakeasyFreeFights") > 0,
            do: $location`An Unusually Quiet Barroom Brawl`,
            outfit: () => uniform(),
            combat: new CSStrategy(() => Macro.skill($skill`Portscan`).defaultKill()),
        },
        {
            name: "Oliver's Place: Use Portscan",
            ready: () => Counter.get("Portscan") === 0,
            completed: () => have($item`government cheese`),
            do: $location`An Unusually Quiet Barroom Brawl`,
            outfit: () =>
                uniform({
                    changes: { back: $item`vampyric cloake`, acc3: $item`Lil' Doctor™ bag` },
                }),
            combat: new CSStrategy(() =>
                Macro.skill($skill`Become a Bat`)
                    .skill($skill`Otoscope`)
                    .attack()
                    .repeat()
            ),
        },
        {
            name: "LOV",
            completed: () => get("_loveTunnelUsed"),
            outfit: (): OutfitSpec => {
                foldshirt();
                return uniform({
                    changes: {
                        weapon: $item`Fourth of May Cosplay Saber`,
                        shirt: $item`makeshift garbage shirt`,
                    },
                    canAttack: false,
                });
            },
            do: () =>
                TunnelOfLove.fightAll(
                    "LOV Epaulettes",
                    "Open Heart Surgery",
                    "LOV Extraterrestrial Chocolate"
                ),
            combat: new CSStrategy(() =>
                Macro.if_($monster`LOV Enforcer`, Macro.attack().repeat())
                    .if_(
                        $monster`LOV Engineer`,
                        Macro.candyblast().trySkillRepeat($skill`Weapon of the Pastalord`)
                    )
                    .if_(
                        $monster`LOV Equivocator`,
                        Macro.delevel().easyFight().candyblast().defaultKill()
                    )
            ),
            post: (): void => {
                use(1, $item`LOV Extraterrestrial Chocolate`);
                burnLibrams();
            },
        },
        {
            name: "Snojo",
            completed: () => get("_snojoFreeFights") >= 10,
            ready: () => !!get("snojoSetting"),
            outfit: uniform,
            do: $location`The X-32-F Combat Training Snowman`,
            combat: new CSStrategy(() => Macro.delevel().easyFight().attack().repeat()),
        },
        {
            name: "Post-Snojo Hottub",
            completed: () =>
                $effects`Snowballed, Half-Blooded, Half-Drained, Bruised, Relaxed Muscles, Hypnotized, Bad Haircut`.every(
                    (effect) => !have(effect)
                ),
            do: () => cliExecute("hottub"),
        },
        {
            name: "Tentacle",
            completed: () => get("_eldritchHorrorEvoked"),
            do: () =>
                withProperties({ autoAbortThreshold: -0.05, hpAutoRecoveryTarget: -0.05 }, () => {
                    try {
                        useSkill($skill`Evoke Eldritch Horror`);
                        runCombat();
                    } catch (e) {
                        print(`${e}`);
                    } finally {
                        if (have($effect`Beaten Up`)) cliExecute("hottub");
                    }
                }),
            outfit: uniform,
            combat: new CSStrategy(() => Macro.delevel().candyblast().defaultKill()),
        },
        {
            name: "God Lobster",
            completed: () => get("_godLobsterFights") >= (hasNcBird() ? 3 : 2),
            do: (): void => {
                visitUrl("main.php?fightgodlobster=1");
                runCombat();
                visitUrl("choice.php");
                runChoice(-1);
            },
            outfit: (): OutfitSpec => {
                const gear =
                    $items`God Lobster's Crown, God Lobster's Robe, God Lobster's Rod, God Lobster's Ring, God Lobster's Scepter`.find(
                        (it) => have(it)
                    ) ?? $item`tiny stillsuit`;
                return uniform({ changes: { familiar: $familiar`God Lobster`, famequip: gear } });
            },
            choices: {
                // Stats
                [1310]: () => (hasNcBird() ? 3 : 1),
            },
            combat: new CSStrategy(),
        },
        {
            name: "Rest of the Rests",
            completed: () => get("timesRested") >= totalFreeRests(),
            outfit: () => uniform({ changes: { offhand: $item`familiar scrapbook` } }),
            do: () => visitUrl("place.php?whichplace=chateau&action=chateau_restlabelfree"),
            prepare: burnLibrams,
        },
        {
            name: "DMT",
            completed: () => get("_machineTunnelsAdv") >= 5,
            do: $location`The Deep Machine Tunnels`,
            outfit: (): OutfitSpec => {
                foldshirt();
                return uniform({
                    changes: {
                        shirt: $item`makeshift garbage shirt`,
                        familiar: $familiar`Machine Elf`,
                    },
                });
            },
            combat: new CSStrategy(),
        },
        {
            name: "Queen",
            completed: () => have($item`very pointy crown`),
            do: () => Witchess.fightPiece($monster`Witchess Queen`),
            ready: () => Witchess.fightsDone() < 5,
            outfit: (): OutfitSpec => {
                foldshirt();
                return uniform({
                    changes: {
                        weapon: $item`Fourth of May Cosplay Saber`,
                        shirt: $item`makeshift garbage shirt`,
                        offhand: $item`familiar scrapbook`,
                    },
                });
            },
            combat: new CSStrategy(() =>
                Macro.tryItem($item`jam band bootleg`)
                    .tryItem($item`gas can`)
                    .tryItem($item`Time-Spinner`)
                    .attack()
                    .repeat()
            ),
            prepare: (): void => {
                useSkill($skill`Cannelloni Cocoon`);
            },
        },
        {
            name: "King",
            completed: () => have($item`dented scepter`),
            do: () => Witchess.fightPiece($monster`Witchess King`),
            ready: () => Witchess.fightsDone() < 5,
            outfit: (): OutfitSpec => {
                foldshirt();
                return uniform({
                    changes: {
                        weapon: $item`Fourth of May Cosplay Saber`,
                        shirt: $item`makeshift garbage shirt`,
                        offhand: $item`familiar scrapbook`,
                    },
                });
            },
            combat: new CSStrategy(() => Macro.attack().repeat()),
            prepare: (): void => {
                useSkill($skill`Cannelloni Cocoon`);
            },
        },
        {
            name: "NEP Quest",
            completed: () => get("_questPartyFair") !== "unstarted",
            do: (): void => {
                visitUrl("adventure.php?snarfblat=528");
                const choice = ["food", "booze"].includes(get("_questPartyFairQuest")) ? 1 : 2;
                runChoice(choice);
            },
        },
        {
            name: "Regular NEP",
            completed: () => get("_neverendingPartyFreeTurns") >= 10,
            do: $location`The Neverending Party`,
            outfit: (): OutfitSpec => {
                foldshirt();
                const enoughSausages = get("_sausageFights") > 4;
                const changes = {
                    shirt: $items`makeshift garbage shirt`,
                    ...(enoughSausages ? {} : { offhand: $item`Kramco Sausage-o-Matic™` }),
                };
                return uniform({ changes });
            },
            combat: new CSStrategy(() =>
                Macro.delevel()
                    .if_($effect`Inner Elf`, Macro.trySkill($skill`Feel Pride`))
                    .trySkill($skill`Bowl Sideways`)
                    .defaultKill()
            ),
        },
        {
            name: "Freekill NEP",
            completed: () =>
                get("_shatteringPunchUsed") >= 3 &&
                get("_gingerbreadMobHitUsed") &&
                have($effect`Everything Looks Yellow`) &&
                get("_chestXRayUsed") >= 3,
            do: $location`The Neverending Party`,
            outfit: (): OutfitSpec => {
                foldshirt();
                const killSource = !have($effect`Everything Looks Yellow`)
                    ? { shirt: $item`Jurassic Parka`, modes: { parka: "dilophosaur" as const } }
                    : get("_chestXRayUsed") < 3
                    ? { acc3: $item`Lil' Doctor™ bag` }
                    : {};
                const enoughSausages = get("_sausageFights") > 4;
                const changes = {
                    shirt: $items`makeshift garbage shirt`,
                    ...killSource,
                    ...(enoughSausages ? {} : { offhand: $item`Kramco Sausage-o-Matic™` }),
                };
                return uniform({ changes });
            },
            combat: new CSStrategy(() =>
                Macro.if_($monster`sausage goblin`, Macro.defaultKill())
                    .trySkill($skill`Spit jurassic acid`)
                    .trySkill($skill`Chest X-Ray`)
                    .trySkill($skill`Shattering Punch`)
                    .trySkill($skill`Gingerbread Mob Hit`)
                    .abort()
            ),
        },
    ],
};

export default Level;
