import { Quest } from "grimoire-kolmafia";
import { cliExecute, reverseNumberology } from "kolmafia";
import { get } from "libram";
import { CSTask } from "./lib";

const GLOBAL_TASKS: CSTask[] = [
    {
        name: "Numberology",
        ready: () => Object.values(reverseNumberology()).includes(69),
        completed: () => get("_universeCalculated") >= get("skillLevel144"),
        do: () => cliExecute("numberology 69"),
    },
];

const GLOBAL_QUEST: Quest<CSTask> = { name: "Global", tasks: GLOBAL_TASKS };

export default GLOBAL_QUEST;
