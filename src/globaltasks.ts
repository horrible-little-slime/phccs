import { CSStrategy, Macro } from "./combat";
import { CSTask } from "./lib";
import uniform from "./outfit";
import { Quest } from "grimoire-kolmafia";
import { abort, adv1, cliExecute, myInebriety, reverseNumberology, useSkill } from "kolmafia";
import { $effect, $item, $location, $skill, Counter, get, have, withProperty } from "libram";

const GLOBAL_TASKS: CSTask[] = [
  {
    name: "Beaten Up!",
    completed: () => !have($effect`Beaten Up`),
    ready: () => "Poetic Justice" !== get("lastEncounter"),
    do: () => abort("Beaten up!"),
  },
  {
    name: "Sweat Out some Booze",
    completed: () => get("_sweatOutSomeBoozeUsed") >= 3,
    ready: () => myInebriety() > 0 && get("sweat") >= 25,
    do: () => useSkill($skill`Sweat Out Some Booze`),
    outfit: { pants: $item`designer sweatpants` },
  },
  {
    name: "Numberology",
    ready: () => Object.values(reverseNumberology()).includes(69) && get("skillLevel144") <= 3,
    completed: () => get("_universeCalculated") >= get("skillLevel144"),
    do: () => cliExecute("numberology 69"),
  },
  {
    name: "June Cleaver",
    completed: () => get("_juneCleaverFightsLeft") > 0,
    ready: () => !Counter.exists("portscan.edu"),
    do: () =>
      withProperty("recoveryScript", "", () => {
        adv1($location`Noob Cave`, -1, "");
        if (get("lastEncounter") === "Poetic Justice") useSkill($skill`Tongue of the Walrus`);
      }),
    outfit: { weapon: $item`June cleaver` },
  },
  {
    name: "Ghost",
    completed: () => get("questPAGhost") === "unstarted",
    ready: () =>
      have($item`protonic accelerator pack`) &&
      get("questPAGhost") !== "unstarted" &&
      !!get("ghostLocation") &&
      !have($effect`Meteor Showered`),
    do: () => get("ghostLocation") ?? abort("Failed to identify ghost location"),
    combat: new CSStrategy(() =>
      Macro.delevel()
        .easyFight()
        .trySkill($skill`Shoot Ghost`)
        .trySkill($skill`Shoot Ghost`)
        .trySkill($skill`Shoot Ghost`)
        .trySkill($skill`Trap Ghost`)
    ),
    outfit: () => uniform({ changes: { back: $item`protonic accelerator pack` } }),
  },
];

const GLOBAL_QUEST: Quest<CSTask> = { name: "Global", tasks: GLOBAL_TASKS };

export default GLOBAL_QUEST;
