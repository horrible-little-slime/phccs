import { cliExecute, getCampground, getWorkshed, myAdventures, use, visitUrl } from "kolmafia";
import { $item, have, get, $class } from "libram";
import { ascend, lifestyle, path } from "./ascend";

cliExecute("breakfast");
if (myAdventures() > 0) throw "You sure about that one, cowboy?";

const car = $item`Asdon Martin keyfob`;
const garden = $item`Peppermint Pip Packet`;

if (getWorkshed() !== car && have(car) && !get("_workshedItemUsed")) use(car);
if (getWorkshed() !== car) throw "Unable to get the car!";

if (!Object.getOwnPropertyNames(getCampground()).includes(garden.name) && have(garden)) use(garden);
if (!Object.getOwnPropertyNames(getCampground()).includes(garden.name))
    throw "Unable to plant peppermint!";

visitUrl("ascend.php?action=ascend&confirm=on&confirm2=on");
ascend(path.katarnCore, $class`pastamancer`, lifestyle.hardcore, "knoll", $item`astral six-pack`);
