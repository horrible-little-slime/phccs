import { songTask } from "./commons";
import { CSQuest } from "./engine";
import { drink, itemAmount, myInebriety, use } from "kolmafia";
import { $effect, $item, clamp, get, have } from "libram";

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
    songTask($effect`Ode to Booze`, $effect`The Magical Mojomuscular Melody`),
    {
      name: "Drink Pilsners",
      ready: () => have($item`astral pilsner`),
      completed: () => totalInebriety() >= 5,
      do: () =>
        drink(
          $item`astral pilsner`,
          clamp(itemAmount($item`astral pilsner`), 0, 5 - totalInebriety())
        ),
    },
  ],
};

export default Drink;
