import GLOBAL_QUEST from "./globaltasks";
import { burnLibrams, CSTask } from "./lib";
import { Engine, getTasks, Outfit, OutfitSpec, Quest } from "grimoire-kolmafia";
import {
  abort,
  cliExecute,
  inHardcore,
  isDarkMode,
  myClass,
  myPath,
  print,
  readCcs,
  setAutoAttack,
  toJson,
  visitUrl,
  writeCcs,
} from "kolmafia";
import {
  $effect,
  $path,
  CommunityService,
  Delayed,
  get,
  PropertiesManager,
  undelay,
  uneffect,
} from "libram";

const HIGHLIGHT = isDarkMode() ? "yellow" : "blue";

type Service = {
  type: "SERVICE";
  test: CommunityService;
  maxTurns: number;
  outfit: () => OutfitSpec;
};
type Misc = {
  type: "MISC";
  name: string;
};
export type CSQuest = Quest<CSTask> & { turnsSpent?: Delayed<number> } & (Service | Misc);

export class CSEngine extends Engine<never, CSTask> {
  private static propertyManager = new PropertiesManager();
  private static core_ = inHardcore() ? "hard" : "soft";
  propertyManager = CSEngine.propertyManager;
  name: string;
  csOptions: Service | Misc;
  turnsSpent?: Delayed<number>;

  static get core(): "hard" | "soft" {
    return CSEngine.core_ as "hard" | "soft";
  }

  constructor(quest: CSQuest) {
    super(getTasks([GLOBAL_QUEST, quest]));
    this.csOptions = quest;
    this.turnsSpent = quest.turnsSpent;
    this.name = this.csOptions.type === "MISC" ? this.csOptions.name : this.csOptions.test.statName;
  }

  destruct(): void {
    setAutoAttack(0);
  }

  available(task: CSTask): boolean {
    const core = undelay(task.core);
    const taskClass = undelay(task.class);
    return (
      super.available(task) &&
      (!core || core === CSEngine.core) &&
      (!taskClass || taskClass.includes(myClass()))
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  initPropertiesManager(): void {}
  private static initiate(): void {
    CSEngine.propertyManager.set({
      customCombatScript: "grimoire_macro",
      battleAction: "custom combat script",
      dontStopForCounters: true,
      hpAutoRecovery: -0.05,
      mpAutoRecovery: -0.05,
      logPreferenceChange: true,
      logPreferenceChangeFilter: [
        ...new Set([
          ...get("logPreferenceChangeFilter").split(","),
          "libram_savedMacro",
          "maximizerMRUList",
          "testudinalTeachings",
          "_lastCombatStarted",
        ]),
      ]
        .sort()
        .filter((a) => a)
        .join(","),
      autoSatisfyWithNPCs: true,
      autoSatisfyWithStorage: false,
      libramSkillsSoftcore: "none",
      requireBoxServants: false,
    });

    CSEngine.propertyManager.setChoices({
      1467: 3,
      1468: 2,
      1469: 3,
      1470: 2,
      1471: 3,
      1472: 1,
      1473: 1,
      1474: 1,
      1475: 1,
    });

    if (!readCcs("grimoire_macro")) {
      writeCcs("[ default ]\nabort", "grimoire_macro");
    }
  }

  private get turns(): number {
    if (!this.turnsSpent) return 0;
    return undelay(this.turnsSpent);
  }

  private runTest(): void {
    const loggingFunction = (action: () => number | void) =>
      this.csOptions.type === "MISC"
        ? CommunityService.logTask(this.name, action)
        : this.csOptions.test.run(action, this.csOptions.maxTurns);
    try {
      const result = loggingFunction(() => {
        this.run();
        if (this.csOptions.type === "SERVICE") {
          const spec = this.csOptions.outfit();
          Outfit.from(
            spec,
            new Error(
              `Failed to equip outfit for ${this.name}. Also, that outfit is ${toJson(spec)}`
            )
          ).dress();
          burnLibrams();
        }

        return this.turns;
      });
      const warning =
        this.csOptions.type === "MISC"
          ? `Failed to execute ${this.name}!`
          : `Failed to cap ${this.name}!`;

      if (result === "failed") throw new Error(warning);

      if (result === "already completed")
        throw new Error(`Libram thinks we already completed ${this.name} but we beg to differ`);
    } finally {
      this.destruct();
    }
  }

  static runTests(...quests: CSQuest[]): void {
    if (myPath() !== $path`Community Service`) abort();
    visitUrl("council.php");
    CSEngine.initiate();

    try {
      for (const quest of quests) {
        const { type } = quest;
        if (type === "MISC" || !quest.test.isDone()) {
          const engine = new CSEngine(quest);
          engine.runTest();
        }
      }
      if (CSEngine.core === "soft") {
        CommunityService.donate();
        cliExecute("refresh all");
        cliExecute(get("kingLiberatedScript"));
        uneffect($effect`Feeling Lost`);
      }

      if (get("_cloudTalkSmoker")) {
        print(
          `${get("_cloudTalkSmoker").slice(10)} has a message for you: ${get("_cloudTalkMessage")}`
        );
      }

      if (["food", "booze"].includes(get("_questPartyFairQuest"))) {
        print("Talk to Gerald/ine!");
      }
    } finally {
      CSEngine.propertyManager.resetAll();

      CommunityService.printLog(HIGHLIGHT);
    }
  }
}
