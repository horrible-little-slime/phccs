import { CSStrategy, Macro } from "./combat";
import { beachTask, favouriteBirdTask, innerElf, potionTask, restoreBuffTasks } from "./commons";
import { CSQuest } from "./engine";
import { burnLibrams, currentBirdHas, favouriteBirdHas, SYNTH_EFFECT, synthExp } from "./lib";
import uniform from "./outfit";
import { OutfitSpec } from "grimoire-kolmafia";
import {
  buy,
  cliExecute,
  create,
  effectModifier,
  mpCost,
  myFamiliar,
  myHp,
  myLevel,
  myMaxmp,
  myMp,
  myPrimestat,
  numericModifier,
  print,
  runChoice,
  runCombat,
  Stat,
  toEffect,
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
  byStat,
  CampAway,
  Cartography,
  Counter,
  get,
  have,
  TunnelOfLove,
  uneffect,
  Witchess,
  withProperties,
} from "libram";

const levellingComplete = myLevel() >= 13 && get("_neverendingPartyFreeTurns") >= 10;
let lovePotionConsidered = false;

const foldshirt = (): void => {
  if (!have($item`makeshift garbage shirt`)) cliExecute("fold makeshift garbage shirt");
};

const CastSkills =
  $skills`Advanced Saucecrafting, Advanced Cocktailcrafting, Acquire Rhinestones, Prevent Scurvy and Sobriety, The Magical Mojomuscular Melody, Stevedave's Shanty of Superiority, Fat Leon's Phat Loot Lyric, Leash of Linguini, Empathy of the Newt, Blood Bond, Blood Bubble, Song of Bravado, Get Big, Mathematical Precision, Ruthless Efficiency, Carol of the Bulls, Rage of the Reindeer`.map(
    (s) => ({
      name: s.name,
      do: (): void => {
        useSkill(s);
      },
      completed: () => (s.buff ? have(toEffect(s)) : s.timescast >= s.dailylimit),
      ready: () => myMp() >= mpCost(s),
      outfit: () => uniform({ changes: { offhand: $item`Abracandalabra` } }),
    })
  );

const generalStoreItem = byStat({
  Muscle: $item`Ben-Gal™ Balm`,
  Mysticality: $item`glittery mascara`,
  Moxie: $item`hair spray`,
});

const { saucePotion, sauceFruit, sauceEffect } = byStat({
  Mysticality: {
    sauceFruit: $item`grapefruit`,
    saucePotion: $item`ointment of the occult`,
    sauceEffect: $effect`Mystically Oiled`,
  },
  Muscle: {
    sauceFruit: $item`lemon`,
    saucePotion: $item`philter of phorce`,
    sauceEffect: $effect`Phorcefullness`,
  },
  Moxie: {
    sauceFruit: $item`olive`,
    saucePotion: $item`serum of sarcasm`,
    sauceEffect: $effect`Superhuman Sarcasm`,
  },
});

const lovePotion = $item`Love Potion #XYZ`;
const loveEffect = $effect`Tainted Love Potion`;
const Level: CSQuest = {
  type: "MISC",
  name: "Level",
  completed: () => levellingComplete,
  tasks: [
    innerElf(),
    {
      name: "That's Just Cloud Talk, Man",
      completed: () => CampAway.getCloudBuffsToday() > 0,
      do: () => CampAway.gaze(),
    },
    {
      name: SYNTH_EFFECT.name,
      completed: () => have(SYNTH_EFFECT),
      do: synthExp,
    },
    {
      name: "shower",
      completed: () => get("_aprilShower"),
      do: () => cliExecute(`shower ${myPrimestat()}`),
    },
    {
      name: "Ten-Percent Bonus",
      completed: () => !have($item`a ten-percent bonus`),
      outfit: () => uniform({ changes: { offhand: $item`familiar scrapbook` } }),
      effects: byStat({ Mysticality: $effects`Inscrutable Gaze`, default: [] }),
      do: () => use(1, $item`a ten-percent bonus`),
    },
    {
      name: "Bastille",
      completed: () => get("_bastilleGames") > 0,
      do: () => cliExecute(`bastille ${myPrimestat()} brutalist`),
    },
    {
      name: "Get Love Potion",
      completed: () => $skill`Love Mixology`.timescast > 0,
      do: () => useSkill(1, $skill`Love Mixology`),
    },
    {
      name: "Consider Love Potion",
      ready: () => have(lovePotion),
      completed: () => lovePotionConsidered,
      do: (): void => {
        visitUrl(`desc_effect.php?whicheffect=${loveEffect.descid}`);
        lovePotionConsidered = true;

        if (
          numericModifier(loveEffect, myPrimestat().toString()) > 10 &&
          Stat.all().every((stat) => numericModifier(loveEffect, stat.toString()) > -30) &&
          numericModifier(loveEffect, "Maximum HP Percent") > -0.001
        ) {
          use(1, lovePotion);
        }
      },
    },
    favouriteBirdTask(`${myPrimestat().toString()} Percent`),
    {
      name: "Vaccine",
      completed: () => get("_spacegateVaccine"),
      ready: () => get("spacegateVaccine2") && get("spacegateAlways"),
      do: () => cliExecute("spacegate vaccine 2"),
    },
    {
      name: "Boxing Daybuff",
      completed: () => get("_daycareSpa"),
      do: () => cliExecute(`daycare ${myPrimestat().toString().toLowerCase()}`),
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
      name: "Buy General Store Potion",
      completed: () => have(generalStoreItem) || have(effectModifier(generalStoreItem, "Effect")),
      do: () => buy(1, generalStoreItem),
    },
    potionTask(generalStoreItem),
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

    ...$items`votive of confidence, natural magick candle, MayDay™ supply package, Napalm In The Morning™ candle`.map(
      potionTask
    ),

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
        $items`turtle totem, saucepan`.forEach((i) => !have(i) && cliExecute(`acquire ${i}`)),
    },
    ...CastSkills,
    {
      name: "Psychokinetic Energy Blob",
      completed: () =>
        !have($item`psychokinetic energy blob`) || CastSkills.every(({ completed }) => completed()),
      do: (): void => {
        use($item`psychokinetic energy blob`);
      },
      outfit: () => uniform({ changes: { offhand: $item`Abracandalabra` } }),
      ready: () => myMp() + 30 < myMaxmp(),
    },
    ...restoreBuffTasks(
      byStat({
        Mysticality: $effects`Inscrutable Gaze`,
        Moxie: $effects`Quiet Desperation`,
        Muscle: $effects`Quiet Determination`,
      })
    ),
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
      name: "Make & Use Sauce Potion",
      completed: () => have(sauceEffect),
      ready: () => have(sauceFruit),
      do: (): void => {
        if (!have(saucePotion)) {
          create(1, saucePotion);
        }
        if (have(saucePotion)) {
          use(1, saucePotion);
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
      ready: () => have($item`green mana`) && get("_snojoFreeFights") < 10,
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
      ready: () => have($item`green mana`) && get("_snojoFreeFights") < 10,
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
      name: "Witch",
      completed: () => have($item`battle broom`),
      outfit: (): OutfitSpec => {
        foldshirt();
        return uniform({
          changes: {
            weapon: byStat({
              default: $item`Fourth of May Cosplay Saber`,
              Muscle: $item`June cleaver`,
            }),
            shirt: $item`makeshift garbage shirt`,
            offhand: $item`familiar scrapbook`,
            familiar: $familiar`Shorter-Order Cook`,
          },
        });
      },
      prepare: (): void => {
        useSkill($skill`Cannelloni Cocoon`);
      },
      ready: () => Witchess.fightsDone() < 5,
      do: () => Witchess.fightPiece($monster`Witchess Witch`),
      combat: new CSStrategy(() => Macro.delevel(true).attack().repeat()),
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
            weapon: byStat({
              default: $item`Fourth of May Cosplay Saber`,
              Muscle: $item`June cleaver`,
            }),
            shirt: $item`makeshift garbage shirt`,
            offhand: $item`familiar scrapbook`,
            familiar: $familiar`Shorter-Order Cook`,
          },
        });
      },
      combat: new CSStrategy(() => Macro.attack().repeat()),
      prepare: (): void => {
        useSkill($skill`Cannelloni Cocoon`);
      },
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
            weapon: byStat({
              default: $item`Fourth of May Cosplay Saber`,
              Muscle: $item`June cleaver`,
            }),
            shirt: $item`makeshift garbage shirt`,
            offhand: $item`familiar scrapbook`,
            familiar: $familiar`Shorter-Order Cook`,
          },
        });
      },
      combat: new CSStrategy(() => Macro.tryBowl().attack().repeat()),
      prepare: (): void => {
        useSkill($skill`Cannelloni Cocoon`);
        if (!have($effect`Psalm of Pointiness`)) useSkill($skill`The Psalm of Pointiness`);
      },
      post: () => uneffect($effect`Psalm of Pointiness`),
    },
    {
      name: "Oliver's Place: Prime Portscan",
      completed: () => get("_sourceTerminalPortscanUses") > 0,
      do: $location`An Unusually Quiet Barroom Brawl`,
      outfit: () =>
        uniform(
          have($familiar`Nanorhino`) && get("_nanorhinoCharge") >= 100
            ? { changes: { familiar: $familiar`Nanorhino` } }
            : {}
        ),
      combat: new CSStrategy(
        () =>
          Macro.skill($skill`Portscan`)
            .externalIf(
              myFamiliar() === $familiar`Nanorhino`,
              Macro.trySkill(
                byStat({
                  Mysticality: $skill`Spaghetti Spear`,
                  Moxie: $skill`Suckerpunch`,
                  Muscle: $skill`Clobber`,
                })
              )
            )
            .defaultKill(),
        {
          fightHolidayWanderer: true,
        }
      ),
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
          .defaultKill()
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
          byStat({
            Mysticality: "LOV Epaulettes",
            Muscle: "LOV Eardigan",
            Moxie: "LOV Earring",
          }),
          "Open Heart Surgery",
          "LOV Extraterrestrial Chocolate"
        ),
      combat: new CSStrategy(() =>
        Macro.if_($monster`LOV Enforcer`, Macro.attack().repeat())
          .if_(
            $monster`LOV Engineer`,
            Macro.candyblast().trySkillRepeat($skill`Weapon of the Pastalord`)
          )
          .if_($monster`LOV Equivocator`, Macro.delevel().easyFight().candyblast().defaultKill())
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
            if (have($effect`Beaten Up`) || myHp() === 0 || !get("_lastCombatWon")) {
              cliExecute("hottub");
            }
          }
        }),
      outfit: uniform,
      combat: new CSStrategy(() => Macro.delevel().candyblast().defaultKill()),
    },
    {
      name: "God Lobster",
      completed: () =>
        get("_godLobsterFights") >=
        (favouriteBirdHas("Combat Rate", false) && currentBirdHas("Combat Rate", false) ? 3 : 2),
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
        [1310]: () =>
          favouriteBirdHas("Combat Rate", false) && currentBirdHas("Combat Rate", false) ? 3 : 1,
      },
      combat: new CSStrategy(),
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
        return uniform({
          changes: {
            shirt: $items`makeshift garbage shirt`,
            ...(get("_sausageFights") > 4 ? {} : { offhand: $item`Kramco Sausage-o-Matic™` }),
          },
        });
      },
      combat: new CSStrategy(() =>
        Macro.if_(
          $effect`Inner Elf`,
          Macro.if_(
            `!hascombatitem ${$item`cosmic bowling ball`}`,
            Macro.trySkill($skill`Feel Pride`)
          )
        )
          .trySkill($skill`Bowl Sideways`)
          .delevel()
          .defaultKill()
      ),
      choices: { [1324]: 5 },
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
          .trySkill($skill`Bowl Sideways`)
          .trySkill($skill`Spit jurassic acid`)
          .trySkill($skill`Chest X-Ray`)
          .trySkill($skill`Shattering Punch`)
          .trySkill($skill`Gingerbread Mob Hit`)
          .abort()
      ),
      choices: { [1324]: 5 },
    },
  ],
};

export default Level;
