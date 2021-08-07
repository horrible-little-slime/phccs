import { $class, $item, ascend, Lifestyle, Paths, prepareAscension } from "libram";

prepareAscension(
    {
        workshed: $item`Asdon Martin keyfob`,
        garden: $item`Peppermint pip packet`,
        eudora: $item`Our Daily Candles™ order form`,
    },
    {
        desk: $item`continental juice bar`,
        nightstand: $item`foreign language tapes `,
        ceiling: $item`ceiling fan`,
    }
);

ascend(
    Paths.CommunityService,
    $class`Pastamancer`,
    Lifestyle.hardcore,
    "knoll",
    $item`astral six-pack`
);
