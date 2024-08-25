import { CombatStrategy } from "grimoire-kolmafia";
import { Item, itemAmount, myClass } from "kolmafia";
import {
  $class,
  $item,
  $items,
  $skill,
  byStat,
  chunk,
  Delayed,
  getTodaysHolidayWanderers,
  have,
  StrictMacro,
  Tuple,
} from "libram";

export class CSStrategy extends CombatStrategy {
  constructor(
    macro: Delayed<Macro> = () => Macro.defaultKill(),
    {
      fallthrough,
      fightHolidayWanderer,
    }: { fallthrough?: Delayed<Macro>; fightHolidayWanderer?: boolean } = {}
  ) {
    super();
    this.macro(
      fightHolidayWanderer ? macro : Macro.skill($skill`Feel Hatred`),
      getTodaysHolidayWanderers()
    )
      .autoattack(
        fightHolidayWanderer ? macro : Macro.skill($skill`Feel Hatred`),
        getTodaysHolidayWanderers()
      )
      .autoattack(macro)
      .macro(fallthrough ?? macro);
  }
}

export class Macro extends StrictMacro {
  tryBowl(): Macro {
    return this.if_(
      "!hascombatitem cosmic bowling ball",
      Macro.item($item`Time-Spinner`).if_(
        $item`cosmic bowling ball`,
        Macro.item([$item`Time-Spinner`, $item`cosmic bowling ball`])
      )
    );
  }
  static tryBowl(): Macro {
    return new Macro().tryBowl();
  }

  delevel(hard = false): Macro {
    return this.trySkill($skill`Curse of Weaksauce`)
      .trySkill($skill`Micrometeorite`)
      .externalIf(hard, Macro.tryBowl(), Macro.item($item`Time-Spinner`))
      .trySkill($skill`Summon Love Gnats`);
  }

  static delevel(hard = false): Macro {
    return new Macro().delevel(hard);
  }

  candyblast(): Macro {
    return this.externalIf(
      have($skill`Candyblast`),
      Macro.while_(
        '!match "Hey, some of it is even intact afterwards!"',
        Macro.trySkill($skill`Candyblast`)
      )
    );
  }
  static candyblast(): Macro {
    return new Macro().candyblast();
  }

  easyFight(): Macro {
    return this.trySkill($skill`Extract`).trySkill($skill`Sing Along`);
  }
  static easyFight(): Macro {
    return new Macro().easyFight();
  }

  defaultKill(): Macro {
    return this.delevel()
      .easyFight()
      .externalIf(
        myClass() === $class`Sauceror`,
        Macro.skill($skill`Saucegeyser`).repeat(),
        Macro.attack().repeat()
      );
  }
  static defaultKill(): Macro {
    return new Macro().defaultKill();
  }

  throwLoveSongs(): Macro {
    const LOVE_SONG_PRIORITY = byStat({
      Moxie: $items`love song of naughty innuendo, love song of vague ambiguity, love song of smoldering passion, love song of disturbing obsession`,
      Muscle: $items`love song of vague ambiguity, love song of smoldering passion, love song of naughty innuendo, love song of disturbing obsession`,
      Mysticality: [],
    });

    const odds = LOVE_SONG_PRIORITY.filter((song) => itemAmount(song) % 2);
    for (const songChunk of chunk(odds, 2)) {
      this.item(songChunk.length === 2 ? (songChunk as Tuple<Item, 2>) : songChunk[0]);
    }
    for (const song of LOVE_SONG_PRIORITY) this.while_(song, Macro.item([song, song]));
    return this;
  }

  static throwLoveSongs(): Macro {
    return new Macro().throwLoveSongs();
  }
}
