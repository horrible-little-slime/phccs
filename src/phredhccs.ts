import {
  adv1,
  autosell,
  availableAmount,
  buy,
  cliExecute,
  create,
  drink,
  eat,
  equip,
  eudora,
  getCampground,
  getCounters,
  getFuel,
  getWorkshed,
  haveEffect,
  haveEquipped,
  inMultiFight,
  itemAmount,
  knollAvailable,
  maximize,
  mpCost,
  myBasestat,
  myBuffedstat,
  myClass,
  myInebriety,
  myLevel,
  myMaxhp,
  myMp,
  mySpleenUse,
  numericModifier,
  runChoice,
  runCombat,
  toEffect,
  totalFreeRests,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
  gametimeToInt,
  myTurncount,
  weightAdjustment,
  myFamiliar,
  familiarWeight,
  print,
} from "kolmafia";
import {
  get,
  $skill,
  $item,
  Macro,
  $slot,
  Witchess,
  $familiar,
  $monster,
  $location,
  $effect,
  $skills,
  TunnelOfLove,
  $stat,
  $coinmaster,
  have,
  $class,
  uneffect,
  $effects,
  SourceTerminal,
  property,
} from "libram";
import {
  setChoice,
  ensureEffect,
  testDone,
  Test,
  setClan,
  tryUse,
  uniform,
  candyblast,
  delevel,
  useDefaultFamiliar,
  kramcoCheck,
  easyFight,
  doTest,
  synthExp,
  synthMyst,
  multiFightAutoAttack,
  heal,
  ensureInnerElf,
  fightSausageIfAble,
  advMacroAA,
  advMacro,
  mapMacro,
  synthItem,
  horse,
  fuelUp,
  synthHot,
  horsery,
  testDuration,
  convertMilliseconds,
} from "./phredhccs-lib";

visitUrl("council.php");
cliExecute("ccs twiddle");
const defaultKill = Macro.step(delevel).step(easyFight).attack().repeat();
const tests: testDuration[] = [];
const startTime = gametimeToInt();
try {
  if (!testDone(Test.COIL_WIRE)) {
    cliExecute("terminal educate digitize; terminal educate extract;");
    setClan("Bonus Adventures from Hell");
    if (get("_clanFortuneConsultUses") < 3) {
      while (get("_clanFortuneConsultUses") < 3) {
        cliExecute("fortune cheesefax");
        cliExecute("wait 5");
      }
    }
    setClan("Alliance From Heck");

    if (myLevel() === 1 && mySpleenUse() === 0) {
      while (get("_universeCalculated") < get("skillLevel144")) {
        cliExecute("numberology 69");
      }
    }

    // Chateau juice bar
    visitUrl("place.php?whichplace=chateau&action=chateau_desk2");
    autosell(1, $item`gremlin juice`);

    // Sell pork gems + tent
    visitUrl("tutorial.php?action=toot");
    tryUse(1, $item`letter from King Ralph XI`);
    tryUse(1, $item`pork elf goodies sack`);
    autosell(5, $item`baconstone`);
    autosell(5, $item`porquoise`);
    autosell(5, $item`hamethyst`);
    if (!have($item`toy accordion`)) {
      buy(1, $item`toy accordion`);
    }
    if (get("_grimoireConfiscatorSummons") === 0) {
      useSkill(1, $skill`Summon Confiscated Things`);
      autosell(1, $item`glow-in-the-dark necklace`);
      autosell(1, $item`"KICK ME" sign`);
      autosell(1, $item`LCD Game: Burger Belt`);
      autosell(1, $item`LCD Game: Food Eater`);
      autosell(1, $item`LCD Game: Garbage River`);
    }
    if (get("grimoire2Summons") === 0) {
      useSkill(1, $skill`Summon Tasteful Items`);
      autosell(5, $item`black-and-blue light`);
      autosell(5, $item`blue plasma ball`);
      autosell(5, $item`cheap studded belt`);
      autosell(5, $item`flavored foot massage oil`);
      autosell(5, $item`foam dart`);
      autosell(5, $item`Loudmouth Larry Lamprey`);
      autosell(5, $item`personal massager`);
      autosell(5, $item`personalized coffee mug`);
      autosell(5, $item`stick-on eyebrow piercing`);
    }
    if (get("grimoire3Summons") === 0) {
      useSkill(1, $skill`Summon Alice's Army Cards`);
      buy($coinmaster`Game Shoppe Snacks`, 1, $item`tobiko marble soda`);
    }
    if (!have($item`your cowboy boots`)) {
      visitUrl("place.php?whichplace=town_right&action=townright_ltt");
      runChoice(5);
    }

    if (!have($item`gold detective badge`)) {
      cliExecute("detective solver.ash");
    }
    if (have($item`GameInformPowerDailyPro magazine`)) {
      visitUrl("inv_use.php?whichitem=6174&confirm=Yep.");
    }
    if (eudora() === "Gameinform") {
      if (!have($item`scroll of Puddingskin`) && !have($item`dungeoneering kit`)) {
        visitUrl("adventure.php?snarfblat=319");
        use(1, $item`dungeoneering kit`);
      }
    }

    if (!get("_floundryItemCreated")) {
      cliExecute("acquire codpiece");
    }

    if (!get("_borrowedTimeUsed")) {
      if (!have($item`borrowed time`)) {
        create(1, $item`borrowed time`);
      }
      use(1, $item`borrowed time`);
    }

    if (get("_saberMod") === 0) {
      visitUrl("main.php?action=may4");
      runChoice(4);
    }

    if (!have($item`dromedary drinking helmet`)) {
      useFamiliar($familiar`melodramedary`);
      if (!have($item`familiar jacks`)) {
        create(1, $item`familiar jacks`);
      }
      use(1, $item`familiar jacks`);
      cliExecute("mummery myst");
      useFamiliar($familiar`shorter-order cook`);
      cliExecute("mummery meat");
    }

    if (get("tomeSummons") < 3) {
      useSkill(1, $skill`summon sugar sheets`);
    }

    if (!get("_voteToday")) {
      visitUrl("place.php?whichplace=town_right&action=townright_vote");
      visitUrl("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=2&local%5B%5D=3");
    }

    if (get("_deckCardsDrawn") === 0) {
      cliExecute("cheat ancestral; cheat island; cheat 1952");
      autosell(1, $item`1952 Mickey Mantle card`);
      useSkill(2, $skill`Ancestral Recall`);
    }

    if (get("_daycareGymScavenges") === 0) {
      visitUrl("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
      runChoice(3);
      runChoice(2);
      runChoice(5);
      runChoice(4);
    }

    if (!have($item`pantogram pants`)) {
      cliExecute("pantogram mysticality|hot|drops of blood|some self-respect|your dreams|silent");
    }

    uniform();
    equip($slot`back`, $item`protonic accelerator pack`);
    useDefaultFamiliar();

    if (get("boomBoxSong") !== "Total Eclipse of Your Meat") {
      cliExecute("boombox meat");
    }

    SourceTerminal.educate([$skill`extract`, $skill`digitize`]);
    if (have($item`magical sausage casing`)) {
      create(1, $item`magical sausage`);
    }
    if (have($item`magical sausage`)) {
      eat(1, $item`magical sausage`);
    }

    Macro.step(delevel)
      .skill("digitize")
      .step(easyFight)
      .step(candyblast)
      .attack()
      .repeat()
      .setAutoAttack();
    if (get("_sourceTerminalDigitizeMonster") === $monster`none`) {
      Witchess.fightPiece($monster`witchess bishop`);
      equip($slot`familiar`, $item`none`);
    }

    SourceTerminal.educate([$skill`extract`, $skill`portscan`]);

    const ghostLocation = get("ghostLocation");
    if (ghostLocation) {
      equip($slot`off-hand`, $item`latte lover member's mug`);
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

    fightSausageIfAble(
      $location`noob cave`,
      Macro.step(delevel).step(candyblast).attack().repeat()
    );

    equip($slot`pants`, $item`cargo cultist shorts`);
    equip($slot`acc1`, $item`eight days a week pill keeper`);
    equip($slot`acc2`, $item`powerful glove`);
    equip($slot`acc3`, $item`Lil' Doctor™ Bag`);
    cliExecute("/cast * candy hearts");
    doTest(Test.COIL_WIRE);
    tests.push({
      testName: "wire-coiling",
      turnPrediction: 60,
      turnCost: myTurncount(),
    });
  }

  if (!testDone(Test.HP)) {
    const startTurns = myTurncount();
    if (!have($effect`That's Just Cloud-Talk, Man`)) {
      visitUrl("place.php?whichplace=campaway&action=campaway_sky");
    }

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

    ensureEffect($effect`Inscrutable Gaze`);
    ensureEffect($effect`Thaumodynamic`);
    ensureEffect($effect`You Learned Something Maybe!`);

    if (!have($effect`synthesis: learning`)) synthExp();
    if (!have($effect`synthesis: smart`)) synthMyst();

    if (availableAmount($item`a ten-percent bonus`)) {
      use(1, $item`a ten-percent bonus`);
    }

    if (get("_daycareGymScavenges") == 0) {
      visitUrl("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
      runChoice(3);
      runChoice(2);
      runChoice(5);
      runChoice(4);
    }

    // Configure briefcase
    cliExecute("briefcase enchantment weapon hot -combat");
    /* while (getPropertyInt('_kgbClicksUsed') < 20) {
     cliExecute('briefcase buff random');
   } */

    // Depends on Ez's Bastille script.
    cliExecute("bastille myst brutalist");

    horse("crazy");
    ensureEffect($effect`Favored by Lyle`);
    ensureEffect($effect`Starry-Eyed`);
    ensureEffect($effect`We're All Made of Starfish`); // Beach Comb - should bridge all the way to spell dmg.
    if (
      availableAmount($item`glittery mascara`) + haveEffect($effect`glittering eyelashes`) ===
      0
    ) {
      buy(1, $item`glittery mascara`);
    }
    ensureEffect($effect`Glittering Eyelashes`);

    // Plan is for these buffs to fall all the way through to item -> hot res -> fam weight.
    ensureEffect($effect`Fidoxene`);
    ensureEffect($effect`Do I Know You From Somewhere?`);
    ensureEffect($effect`Puzzle Champ`);
    ensureEffect($effect`Billiards Belligerence`);
    ensureEffect($effect`meat.enh`);
    if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");

    equip($slot`acc3`, $item`powerful glove`);
    ensureEffect($effect`Triple-Sized`);
    ensureEffect($effect`Feeling Excited`);

    if (!get("_streamsCrossed")) {
      cliExecute("crossstreams");
    }

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

    uniform();
    useFamiliar($familiar`ghost of crimbo carols`);
    if (get("snojoSetting") === "NONE") {
      visitUrl("place.php?whichplace=snojo&action=snojo_controller");
      runChoice(2);
    }
    heal();
    advMacroAA($location`The X-32-F Combat Training Snowman`, delevel.attack().repeat(), () => {
      return !have($effect`holiday yoked`);
    });

    equip($slot`back`, $item`protonic accelerator pack`);
    cliExecute("fold makeshift garbage shirt");
    equip($slot`shirt`, $item`makeshift garbage shirt`);
    heal();
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
        delevel.skill("otoscope").skill("become a bat").skill("chest x-ray"), //1
        () => {
          return getCounters("Portscan", 0, 0) !== "";
        }
      );
      const desertAccessItem = knollAvailable() ? $item`bitchin' meatcar` : $item`desert bus pass`;
      if (availableAmount(desertAccessItem) == 0) {
        cliExecute(`acquire ${desertAccessItem.name}`);
      }
      visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse");
    }

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

    heal();
    if (get("_pocketProfessorLectures") === 0) {
      useFamiliar($familiar`pocket professor`);
      uniform();
      equip($slot`off-hand`, $item`latte lovers member's mug`);
      equip($slot`acc1`, $item`hewn moon-rune spoon`);
      equip($slot`acc2`, $item`beach comb`);
      equip($slot`acc3`, $item`brutal brogues`);
      const meteors = get("_meteorShowerUses");
      const profchain = Macro.step(delevel)
        .if_(
          `(!hasskill "lecture on relativity") && (match "Meteor Shower (${
            5 - meteors
          } charges left)")`,
          Macro.skill($skill`meteor shower`)
        )
        .skill($skill`lecture on relativity`)
        .step(candyblast)
        .attack()
        .repeat();
      profchain.setAutoAttack();
      if (getCounters("Digitize", 0, 0) !== "") {
        do {
          adv1($location`madness bakery`, -1, "");
        } while (get("lastEncounter") === "Our Bakery in the Middle of Our Street");
        while (inMultiFight()) runCombat();
      } else if (kramcoCheck()) {
        equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
        adv1($location`madness bakery`, -1, "");
        while (inMultiFight()) runCombat();
      } else if (get("_witchessFights") < 3) {
        Witchess.fightPiece($monster`witchess bishop`);
        runCombat();
        while (inMultiFight()) runCombat();
      }
    }

    cliExecute("backupcamera ml");

    if (
      get("_monstersMapped") < 3 &&
      availableAmount($item`tomato`) +
        availableAmount($item`tomato juice of powerful power`) +
        haveEffect($effect`tomato power`) ===
        0
    ) {
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
      advMacroAA(
        $location` X-32-F Combat Training Snowman`,
        Macro.skill($skill`feel nostalgia`).step(defaultKill)
      );
    }

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

    if (getCampground()["Dramatic™ range"] !== 1) {
      if (!have($item`Dramatic™ range`)) {
        buy(1, $item`Dramatic™ range`);
      }
      use(1, $item`Dramatic™ range`);
    }

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

    //do snojo here
    uniform();
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

    if (kramcoCheck()) {
      uniform();
      heal();
      useDefaultFamiliar();
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
      equip($slot`shirt`, $item`makeshift garbage shirt`);
      advMacroAA(
        $location`the madness bakery`,
        Macro.step(delevel).step(candyblast).attack().repeat()
      );
    }
    if (get("_backUpUses") < 11) {
      equip($slot`acc3`, $item`backup camera`);
      equip($slot`off-hand`, $item`latte lovers member's mug`);
      heal();
      if (
        !property.getMonster("lastCopyableMonster")?.attributes.includes("FREE") &&
        get("_witchessFights") < 3
      ) {
        defaultKill.setAutoAttack();
        Witchess.fightPiece($monster`witchess bishop`);
      }
      if (property.getMonster("lastCopyableMonster")?.attributes.includes("FREE")) {
        advMacroAA(
          $location`the dire warren`,
          Macro.skill("back-up to your last enemy").step(delevel).step(easyFight).attack().repeat(),
          () => {
            return get("_backUpUses") < 11;
          },
          () => {
            heal();
            useDefaultFamiliar();
            if (
              get("latteUnlocks").includes("carrot") &&
              haveEquipped($item`latte lovers member's mug`)
            ) {
              equip($slot`off-hand`, $item`familiar scrapbook`);
            }
          }
        );
      }
    }

    setChoice(1322, 2);
    setChoice(1324, 5);
    uniform();
    equip($slot`shirt`, $item`makeshift garbage shirt`);
    equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
    useDefaultFamiliar();
    advMacroAA(
      $location`the neverending party`,
      Macro.step(delevel).trySkill("feel pride").step("easyFight").attack().repeat(),
      () => {
        return get("_neverendingPartyFreeTurns") < 10;
      },
      () => {
        useDefaultFamiliar();
        heal();
        if (get("_sausageFights") > 2) {
          equip($slot`off-hand`, $item`familiar scrapbook`);
        }
      }
    );

    advMacroAA(
      $location`the neverending party`,
      Macro.if_(
        "!monstername sausage goblin",
        Macro.trySkill("shattering punch").trySkill("gingerbread mob hit").trySkill("chest x-ray")
      ).if_("monstername sausage goblin", Macro.step(delevel).step(candyblast).attack().repeat()),
      () => {
        return get("_shatteringPunchUsed") < 3 && !get("_gingerbreadMobHitUsed");
      },
      () => {
        heal();
        useDefaultFamiliar();
      }
    );
    equip($slot`acc3`, $item`Lil' Doctor™ bag`);
    advMacroAA(
      $location`the neverending party`,
      Macro.if_(
        "!monstername sausage goblin",
        Macro.trySkill("shattering punch").trySkill("gingerbread mob hit").trySkill("chest x-ray")
      ).if_("monstername sausage goblin", Macro.step(delevel).step(candyblast).attack().repeat()),
      () => {
        return get("_chestXRayUsed") < 3;
      },
      () => {
        heal();
        useDefaultFamiliar();
      }
    );

    useFamiliar($familiar`machine elf`);
    advMacroAA(
      $location`the deep machine tunnels`,
      defaultKill,
      () => {
        return get("_machineTunnelsAdv") < 5;
      },
      heal
    );

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
      delevel.attack().repeat().setAutoAttack();
      uniform();
      useDefaultFamiliar();
      heal();
      Witchess.fightPiece($monster`witchess king`);
    }

    while (get("timesRested") < totalFreeRests()) {
      cliExecute("/cast * candy heart");
      visitUrl("place.php?whichplace=chateau&action=chateau_restbox");
    }

    useFamiliar($familiar`disembodied hand`);

    useSkill(1, $skill`Bind Undead Elbow Macaroni`);

    ensureEffect($effect`song of starch`);
    maximize("hp", false);

    if (myMaxhp() - myBuffedstat($stat`muscle`) - 3 < 1770) {
      throw "Failed to cap HP";
    }
    doTest(Test.HP);
    tests.push({
      testName: "HP",
      turnPrediction: 60 - Math.floor((myMaxhp() - myBuffedstat($stat`muscle`) - 3) / 30),
      turnCost: myTurncount() - startTurns,
    });
  }
  if (!testDone(Test.MUS)) {
    const startTurns = myTurncount();
    useSkill(1, $skill`Bind Undead Elbow Macaroni`);
    ensureEffect($effect`Big`);
    ensureEffect($effect`Song of Bravado`);
    ensureEffect($effect`Rage of the Reindeer`);
    ensureEffect($effect`Quiet Determination`);
    ensureEffect($effect`Disdain of the War Snapper`);
    ensureEffect($effect`Feeling Excited`);

    maximize("muscle", false);

    for (const increaser of [
      () => ensureEffect($effect`Lack of Body-Building`), // will stay on all the way to weapon damage.
      () => ensureEffect($effect`Ham-Fisted`),
      () => ensureInnerElf(),
    ]) {
      if (myBuffedstat($stat`muscle`) - myBasestat($stat`mysticality`) < 1770) increaser();
    }
    if (myBuffedstat($stat`muscle`) - myBasestat($stat`mysticality`) < 1770) {
      throw "Not enough muscle to cap.";
    }

    doTest(Test.MUS);
    tests.push({
      testName: "muscle",
      turnPrediction:
        60 - Math.floor((1 / 30) * (myBuffedstat($stat`muscle`) - myBasestat($stat`mysticality`))),
      turnCost: myTurncount() - startTurns,
    });
  }
  if (!testDone(Test.MYS)) {
    const startTurns = myTurncount();
    ensureEffect($effect`Feeling Excited`);
    maximize("mysticality", false);
    if (myBuffedstat($stat`mysticality`) - myBasestat($stat`mysticality`) < 1770) {
      throw "Not enough mysticality to cap.";
    }
    doTest(Test.MYS);
    tests.push({
      testName: "mysticality",
      turnPrediction:
        60 -
        Math.floor((1 / 30) * (myBuffedstat($stat`mysticality`) - myBasestat($stat`mysticality`))),
      turnCost: myTurncount() - startTurns,
    });
  }
  if (!testDone(Test.MOX)) {
    const startTurns = myTurncount();
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

    useFamiliar($familiar`Left-Hand Man`);
    maximize("moxie", false);
    if (myBuffedstat($stat`moxie`) - myBasestat($stat`mysticality`) < 1770) {
      throw "Not enough moxie to cap.";
    }
    doTest(Test.MOX);
    tests.push({
      testName: "moxie",
      turnPrediction:
        60 - Math.floor((1 / 30) * (myBuffedstat($stat`moxie`) - myBasestat($stat`mysticality`))),
      turnCost: myTurncount() - startTurns,
    });
  }
  if (!testDone(Test.ITEM)) {
    const startTurns = myTurncount();
    horse("dark");
    if (availableAmount($item`astral six-pack`) !== 0) use(1, $item`astral six-pack`);
    if (have($effect`The Magical Mojomuscular Melody`))
      cliExecute("shrug The Magical Mojomuscular Melody");
    while (myInebriety() < 5) {
      drink(1, $item`astral pilsner`);
    }

    if (!have($effect`synthesis: collection`)) synthItem();

    if (!have($effect`Bat-Adjacent Form`)) {
      const run = Macro.skill($skill`become a bat`);
      if (!get("_latteBanishUsed")) {
        useFamiliar($familiar`none`);
        equip($slot`off-hand`, $item`latte lovers member's mug`);
        equip($slot`back`, $item`vampyric cloake`);
        run.skill($skill`throw latte`);
      } else {
        useFamiliar($familiar`frumious bandersnatch`);
        ensureEffect($effect`ode to booze`);
        run.step("runaway");
      }
      advMacroAA($location`dire warren`, run);
    }

    cliExecute("shrug ode");
    ensureEffect($effect`fat leon's phat loot lyric`);
    ensureEffect($effect`The Spirit of Taking`);
    ensureEffect($effect`items.enh`);

    if (getWorkshed() === $item`Asdon Martin keyfob` && !have($effect`driving observantly`)) {
      if (getFuel() < 37) fuelUp();
      cliExecute("asdonmartin drive observantly");
    }

    if (!get("_steelyEyedSquintUsed")) {
      ensureEffect($effect`steely-eyed squint`);
    }

    if (!have($effect`I See Everything Thrice`)) {
      if (!have($item`government`)) {
        if (!have($item`anticheese`)) {
          visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse");
        }
        if (have($item`government cheese`)) {
          create(1, $item`government`);
        }
      }
      if (have($item`government`)) {
        use(1, $item`government`);
      }
    }

    if (myClass() === $class`pastamancer` && !get("_barrelPrayer")) {
      cliExecute("barrelprayer buff");
    }

    if (have($item`lavender candy heart`)) ensureEffect($effect`heart of lavender`);

    const itemCheck = () => {
      return (
        60 -
          Math.floor(numericModifier("item drop") / 30 + 0.001) -
          Math.floor(numericModifier("booze drop") / 15 + 0.001) <=
        1
      );
    };

    if (get("_latteRefillsUsed") === 0) {
      const latte: string =
        "pumpkin " +
        (get("latteUnlocks").includes("carrot") ? "carrot " : "vanilla ") +
        (get("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon");
      if (latte !== "") {
        cliExecute(`latte refill ${latte}`);
      }
    }

    useFamiliar($familiar`trick-or-treating tot`);
    maximize(
      "item, 2 booze drop, -equip broken champagne bottle, -equip surprisingly capacious handbag",
      false
    );

    if (!itemCheck()) {
      ensureEffect($effect`nearly all-natural`);
    }
    if (!itemCheck()) throw `Failed to cap item!`;
    doTest(Test.ITEM);
    tests.push({
      testName: "item drop",
      turnPrediction:
        60 -
        Math.floor(numericModifier("item drop") / 30 + 0.001) -
        Math.floor(numericModifier("booze drop") / 15 + 0.001),
      turnCost: myTurncount() - startTurns,
    });
  }
  if (!testDone(Test.HOT_RES)) {
    const startTurns = myTurncount();
    if (!get("_freePillKeeperUsed")) {
      cliExecute("pillkeeper familiar");
    }
    if (!have($effect`puzzle champ`)) {
      cliExecute("witchess");
    }
    ensureEffect($effect`do i know you from somewhere`);
    ensureEffect($effect`Empathy`);
    ensureEffect($effect`Leash of Linguini`);
    ensureEffect($effect`Blood Bond`);
    ensureEffect($effect`Billiards Belligerence`);
    if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");

    uniform();
    useFamiliar($familiar`none`);
    if (get("_monstersMapped") < 3 && !have($item`lava-proof pants`)) {
      useFamiliar($familiar`none`);
      while (getFuel() < 137) fuelUp();
      mapMacro(
        $location`LavaCo™ Lamp Factory`,
        $monster`factory worker (female)`,
        Macro.skill($skill`become a cloud of mist`).skill($skill`Asdon Martin: Missile Launcher`)
      );
    }

    if (!have($effect`synthesis: hot`)) synthHot();

    if (!have($item`tenderizing hammer`)) {
      buy(1, $item`tenderizing hammer`);
    }
    cliExecute("smash * ratty knitted cap");
    cliExecute("smash * red-hot sausage fork");
    cliExecute("smash * smoldering bagel punch");
    if (!have($effect`Sleazy Hands`)) {
      if (!have($item`lotion of sleaziness`)) create(1, $item`lotion of sleaziness`);
      if (have($item`lotion of sleaziness`)) use(1, $item`lotion of sleaziness`);
    }
    if (!have($effect` Flame-Retardant Trousers`) && have($item`hot powder`)) {
      use(1, $item`hot powder`);
    }

    ensureEffect($effect`elemental saucesphere`);
    ensureEffect($effect`astral shell`);
    ensureEffect($effect`Hot-Headed`);
    ensureEffect($effect`Feeling Peaceful`);
    if (have($item`scroll of protection from bad stuff`)) {
      ensureEffect($effect`protection from bad stuff`);
    }

    if (!have($item`meteorite guard`) && have($item`metal meteoroid`)) {
      create(1, $item`meteorite guard`);
    }

    horse("pale");
    useFamiliar($familiar`exotic parrot`);
    if (!have($item`astral pet sweater`) && get("tomeSummons") < 3) {
      create(1, $item`familiar jacks`);
      use(1, $item`familiar jacks`);
    }
    maximize("hot res", false);
    if (Math.round(numericModifier("hot resistance")) < 59) {
      while (getFuel() < 37) fuelUp();
      cliExecute("asdonmartin drive safely");
    }
    if (Math.round(numericModifier("hot resistance")) < 59) {
      throw "Failed to cap hot res";
    }
    doTest(Test.HOT_RES);
    tests.push({
      testName: "hot resistance",
      turnPrediction: 60 - numericModifier("hot resistance"),
      turnCost: myTurncount() - startTurns,
    });
  }
  if (!testDone(Test.NONCOMBAT)) {
    const startTurns = myTurncount();
    if (!get("_freePillKeeperUsed")) {
      cliExecute("pillkeeper familiar");
    }
    if (!have($effect`puzzle champ`)) {
      cliExecute("witchess");
    }
    ensureEffect($effect`Empathy`);
    ensureEffect($effect`Leash of Linguini`);
    ensureEffect($effect`Blood Bond`);
    ensureEffect($effect`do i know you from somewhere`);
    ensureEffect($effect`smooth movements`);
    ensureEffect($effect`Billiards Belligerence`);
    ensureEffect($effect`Feeling Lonely`);
    equip($slot`acc3`, $item`powerful glove`);
    ensureEffect($effect`invisible avatar`);
    ensureEffect($effect`Blessing of the bird`);
    if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");

    if (haveEffect($effect`fat leon's phat loot lyric`))
      cliExecute("shrug fat leon's phat loot lyric");
    ensureEffect($effect`sonata of sneakiness`);

    if (!get("_olympicSwimmingPool")) cliExecute("swim sprints");

    while (getFuel() < 37) fuelUp();
    if (!have($effect`driving stealthily`)) cliExecute("asdonmartin drive stealthily");

    horse("dark");

    if (
      !have($effect`silence of the god lobster`) &&
      get("_godLobsterFights") < 3 &&
      have($item`god lobster's ring`)
    ) {
      useFamiliar($familiar`god lobster`);
      equip($slot`familiar`, $item`god lobster's ring`);
      uniform();
      defaultKill.setAutoAttack();
      heal();
      setChoice(1310, 2);
      visitUrl("main.php?fightgodlobster=1");
      runCombat(defaultKill.toString());
      visitUrl("choice.php");
      runChoice(-1);
    }

    useFamiliar($familiar`disgeist`);
    maximize("-combat, +equip kremlin", false);
    if (Math.round(numericModifier("combat rate")) > -40) {
      throw "failed to cap noncombat";
    }

    doTest(Test.NONCOMBAT);
    tests.push({
      testName: "noncombat",
      turnPrediction: 60 + (20 + numericModifier("combat rate")) * 3,
      turnCost: myTurncount() - startTurns,
    });
  }
  if (!testDone(Test.FAMILIAR)) {
    const startTurns = myTurncount();
    ensureEffect($effect`Empathy`);
    ensureEffect($effect`Leash of Linguini`);
    ensureEffect($effect`Blood Bond`);
    if (!get("_freePillKeeperUsed")) {
      cliExecute("pillkeeper familiar");
    }
    if (!have($effect`puzzle champ`)) {
      cliExecute("witchess");
    }
    ensureEffect($effect`do i know you from somewhere`);
    ensureEffect($effect`Billiards Belligerence`);
    ensureEffect($effect`Heart of Green`);
    if (have($item`silver face paint`)) ensureEffect($effect`robot friends`);
    if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");
    if (have($item`burning newspaper`)) create(1, $item`burning paper crane`);
    useFamiliar($familiar`none`);
    horse("dark");
    uniform();
    setChoice(1387, 3);
    advMacroAA(
      $location`the dire warren`,
      Macro.skill($skill`meteor shower`).skill($skill`use the force`),
      1,
      () => {
        visitUrl("choice.php");
        runChoice(3);
      }
    );
    if (!have($item`astral pet sweater`)) {
      if (!have($item`cracker`)) {
        if (get("tomeSummons") < 3) {
          useFamiliar($familiar`exotic parrot`);
          create(1, $item`familiar jacks`);
          use(1, $item`familiar jacks`);
        } else {
          useFamiliar($familiar`baby bugged bugbear`);
          visitUrl("arena.php");
        }
      } else useFamiliar($familiar`exotic parrot`);
    } else useFamiliar($familiar`shorter-order cook`);
    if (have($item`short stack of pancakes`)) ensureEffect($effect`shortly stacked`);
    maximize("familiar weight", false);
    doTest(Test.FAMILIAR);
    tests.push({
      testName: "familiar weight",
      turnPrediction: 60 - Math.floor((familiarWeight(myFamiliar()) + weightAdjustment()) / 5),
      turnCost: myTurncount() - startTurns,
    });
  }
  if (!testDone(Test.WEAPON)) {
    const startTurns = myTurncount();
    if (getCounters("Digitize", -11, 0) !== "") {
      uniform();
      useDefaultFamiliar();
      advMacroAA(
        $location`noob cave`,
        defaultKill,
        () => getCounters("Digitize", -11, 0) !== "",
        useDefaultFamiliar
      );
    }
    ensureInnerElf();
    if (!have($effect`do you crush what i crush`)) {
      if (have($effect`holiday yoked`) && have($item`soft green echo eyedrop antidote`)) {
        uneffect($effect`holiday yoked`);
      }
      if (!have($effect`holiday yoked`)) {
        useFamiliar($familiar`ghost of crimbo carols`);
        uniform();
        if (horsery().includes("pale")) {
          horse("dark");
        }
        advMacroAA($location`the dire warren`, Macro.skill($skill`feel hatred`));
      }
    }
    $effects`Carol of the Bulls, Song of the North, Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, Tenacity of the Snapper, Billiards Belligerence, The Power of LOV`.forEach(
      (effect) => ensureEffect(effect)
    );
    ensureEffect($effect`frenzied, bloody`);

    if (get("chateauMonster") === $monster`ungulith` && !get("_chateauMonsterFought")) {
      uniform();
      useFamiliar($familiar`melodramedary`);
      setChoice(1387, 3);
      Macro.trySkill($skill`spit on me`)
        .skill($skill`use the force`)
        .setAutoAttack();
      visitUrl("place.php?whichplace=chateau&action=chateau_painting");
      use(1, $item`corrupted marrow`);
    }
    if (!have($effect`meteor showered`)) {
      useFamiliar($familiar`disembodied hand`);
      uniform();
      equip($slot`weapon`, $item`none`);
      equip($slot`off-hand`, $item`none`);
      equip($slot`familiar`, $item`fourth of may cosplay saber`);
      setChoice(1387, 3);
      advMacroAA(
        $location`the neverending party`,
        Macro.skill($skill`meteor shower`).skill($skill`use the force`)
      );
    }
    ensureEffect($effect`bow-legged swagger`);
    maximize("weapon damage", false);
    if (
      60 -
        Math.floor(numericModifier("weapon damage") / 25 + 0.001) -
        Math.floor(numericModifier("weapon damage percent") / 25 + 0.001) >
      1
    ) {
      throw "Failed to cap weapon damage";
    }
    doTest(Test.WEAPON);
    tests.push({
      testName: "weapon damage",
      turnPrediction:
        60 -
        Math.floor(numericModifier("weapon damage") / 25 + 0.001) -
        Math.floor(numericModifier("weapon damage percent") / 25 + 0.001),
      turnCost: myTurncount() - startTurns,
    });
  }
  if (!testDone(Test.SPELL)) {
    const startTurns = myTurncount();
    ensureEffect($effect`Simmering`);
    $effects`Pisces in the Skyces, Carol of the Hells, Arched Eyebrow of the Archmage, Song of Sauce, We're All Made of Starfish`.forEach(
      (effect) => ensureEffect(effect)
    );

    if (!get("_cargoPocketEmptied")) {
      cliExecute("cargo 177");
      ensureEffect($effect`Sigils of Yeg`);
    }

    if (availableAmount($item`LOV Elixir #6`) > 0) ensureEffect($effect`The Magic of LOV`);

    if (get("tomeSummons") < 3) useSkill(1, $skill`summon sugar sheets`);
    if (have($item`sugar sheet`)) create(1, $item`sugar chapeau`);
    visitUrl("shop.php?whichshop=lathe");
    if (availableAmount($item`flimsy hardwood scraps`) > 0) {
      create(1, $item`weeping willow wand`);
    }

    cliExecute("briefcase enchantment spell");

    if (!get("_madTeaParty")) {
      visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2");
      cliExecute("acquire mariachi hat");
      ensureEffect($effect`Full Bottle in front of Me`);
    }

    useSkill(1, $skill`Spirit of Cayenne`);

    if (availableAmount($item`flask of baconstone juice`) > 0) {
      ensureEffect($effect`Baconstoned`);
    }

    if (!have($effect`saucefingers`) && myClass() === $class`sauceror` && myLevel() >= 15) {
      useFamiliar($familiar`mini-adventurer`);
      horse("dark");
      uniform();
      setChoice(768, 4);
      advMacroAA(
        $location`the dire warren`,
        Macro.skill($skill`feel hatred`),
        () => get("miniAdvClass") === 0
      );
    }

    ensureInnerElf();

    if (!have($effect`meteor showered`)) {
      uniform();
      useFamiliar($familiar`melodramedary`);
      if (!get("_chateauMonsterFought")) {
        Macro.trySkill($skill`spit on me`)
          .skill($skill`meteor shower`)
          .skill($skill`use the force`)
          .setAutoAttack();
        visitUrl("place.php?whichplace=chateau&action=chateau_painting");
        use(1, $item`corrupted marrow`);
      } else {
        advMacroAA(
          $location`the dire warren`,
          Macro.trySkill($skill`spit on me`)
            .skill($skill`meteor shower`)
            .skill($skill`use the force`)
        );
      }
    }

    buy(3, $item`obsidian nutcracker`);
    useFamiliar($familiar`disembodied hand`);
    maximize("spell damage", false);
    const handTurns =
      60 -
      Math.floor(numericModifier("spell damage") / 50 + 0.001) -
      Math.floor(numericModifier("spell damage percent") / 50 + 0.001);
    useFamiliar($familiar`left-hand man`);
    maximize("spell damage", false);
    const manTurns =
      60 -
      Math.floor(numericModifier("spell damage") / 50 + 0.001) -
      Math.floor(numericModifier("spell damage percent") / 50 + 0.001);
    const spellFamiliar =
      handTurns > manTurns ? $familiar`left-hand man` : $familiar`disembodied hand`;
    useFamiliar(spellFamiliar);
    maximize("spell damage", false);
    doTest(Test.SPELL);
    tests.push({
      testName: "spell damage",
      turnPrediction:
        61 -
        Math.floor(numericModifier("spell damage") / 50 + 0.001) -
        Math.floor(numericModifier("spell damage percent") / 50 + 0.001),
      turnCost: myTurncount() - startTurns,
    });
  }
} finally {
  tests.forEach((testDuration) => {
    print(
      `We expected the ${testDuration.testName} test to take ${testDuration.turnPrediction} turns, and it cost ${testDuration.turnCost} turns.`,
      "blue"
    );
  });
  print(
    `This loop took ${convertMilliseconds(
      gametimeToInt() - startTime
    )} milliseconds, assuming it ran contiguously. Otherwise, this run of the program lasted that many milliseconds. Hope whatever number you see is good!`,
    "red"
  );
}
