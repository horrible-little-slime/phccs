import { $class, $item, ascend, Lifestyle, Path, Paths, prepareAscension } from "libram";

prepareAscension({
    workshed: $item`Asdon Martin keyfob`,
    garden: $item`Peppermint pip packet`,
    eudora: $item`Our Daily Candles™ order form`,
}, {
    desk: $item`continental juice bar`,
    ceiling: $item`ceiling fan`,
    nightstand: $item`foreign language tapes`,
});

ascend(Paths.CommunityService, $class`pastamancer`, Lifestyle.hardcore, "knoll", $item`astral six-pack`);