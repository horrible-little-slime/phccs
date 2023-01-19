import { drink, myInebriety, use } from "kolmafia";
import { $effect, $item, have } from "libram";
import { songTask } from "./commons";
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
        songTask($effect`Ode to Booze`, $effect`The Magical Mojomuscular Melody`),
        {
            name: "Drink Pilsners",
            ready: () => have($item`astral pilsner`),
            completed: () => myInebriety() >= 5,
            do: () => drink($item`astral pilsner`),
        },
    ],
};

export default Drink;
