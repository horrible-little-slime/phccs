import { songTask } from "./commons.js";
import { CSQuest } from "./engine.js";
import { drink, itemAmount, myInebriety, use } from "kolmafia";
import { $effect, $item, byStat, clamp, get, have } from "libram";

const totalInebriety = () => myInebriety() + get("_sweatOutSomeBoozeUsed");
const Drink: CSQuest = {
  name: "Drink Pilsners",
  type: "MISC",
  completed: () => totalInebriety() >= 5,
  tasks: [
    {
      name: "Open Pilsners",
      completed: () => !have($item`astral six-pack`),
      do: () => use($item`astral six-pack`),
    },
    songTask(
      $effect`Ode to Booze`,
      byStat({
        Mysticality: $effect`The Magical Mojomuscular Melody`,
        Muscle: $effect`Power Ballad of the Arrowsmith`,
        Moxie: $effect`The Moxious Madrigal`,
      }),
    ),
    {
      name: "Drink Pilsners",
      ready: () => have($item`astral pilsner`),
      completed: () => totalInebriety() >= 5,
      do: () =>
        drink(
          $item`astral pilsner`,
          clamp(itemAmount($item`astral pilsner`), 0, 5 - totalInebriety()),
        ),
    },
  ],
};

export default Drink;
