import { cliExecute, drink, myInebriety, use, useSkill } from "kolmafia";
import { $effect, $item, $skill, have } from "libram";
import { CSQuest } from "./engine";

const Drink: CSQuest = {
    name: "Drink Pilsners",
    type: "MISC",
    tasks: [
        {
            name: "Open Pilsners",
            completed: () => !have($item`astral six-pack`),
            do: () => use($item`astral six-pack`),
        },
        {
            name: "Ensure Ode",
            completed: () => have($effect`Ode to Booze`),
            do: (): void => {
                if (have($effect`The Magical Mojomuscular Melody`))
                    cliExecute("shrug The Magical Mojomuscular Melody");
                useSkill($skill`The Ode to Booze`);
            },
        },
        {
            name: "Drink Pilsners",
            ready: () => have($item`astral pilsner`),
            completed: () => myInebriety() >= 5,
            do: () => drink($item`astral pilsner`),
        },
    ],
};

export default Drink;
