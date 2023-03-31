import { songTask } from "./commons";
import { CSQuest } from "./engine";
import { drink, inebrietyLimit, itemAmount, myInebriety, use } from "kolmafia";
import { $effect, $item, clamp, have } from "libram";

const Drink: CSQuest = {
    name: "Drink Pilsners",
    type: "MISC",
    completed: () => myInebriety() >= 5,
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
            do: () =>
                drink(
                    $item`astral pilsner`,
                    clamp(itemAmount($item`astral pilsner`), 0, inebrietyLimit() - myInebriety())
                ),
        },
    ],
};

export default Drink;
