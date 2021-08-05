import {
    buy,
    cliExecute,
    eudora,
    getCampground,
    getChateau,
    getWorkshed,
    myAdventures,
    use,
    visitUrl,
} from "kolmafia";
import { $item, have, get, $class } from "libram";
import { ascend, Lifestyle } from "./ascend";
import { Paths } from "./Path";

cliExecute("breakfast");
if (myAdventures() > 0) throw "You sure about that one, cowboy?";

const car = $item`Asdon Martin keyfob`;
const garden = $item`Peppermint Pip Packet`;

if (getWorkshed() !== car && have(car) && !get("_workshedItemUsed")) use(car);
if (getWorkshed() !== car) throw "Unable to get the car!";

if (!Object.getOwnPropertyNames(getCampground()).includes(garden.name) && have(garden)) use(garden);
if (!Object.getOwnPropertyNames(getCampground()).includes(garden.name))
    throw "Unable to plant peppermint!";

if (eudora() !== "Our Daily Candles") eudora("Candles");

if (!getChateau()["foreign language tapes"]) buy($item`foreign language tapes`);
if (!getChateau()["ceiling fan"]) buy($item`ceiling fan`);

visitUrl("ascend.php?action=ascend&confirm=on&confirm2=on");
ascend(
    Paths.CommunityService,
    $class`pastamancer`,
    Lifestyle.hardcore,
    "knoll",
    $item`astral six-pack`
);
