import { visitUrl, toInt, myPrimestat, containsText, print } from "kolmafia";
import { $item, $class, $items, $stat } from "libram";

export function ascend(
    path: string | number,
    playerClass: Class,
    core: string | number,
    moon: string | number,
    consumable: Item = $item`astral six-pack`,
    pet: Item = $item`none`
) {
    if (!containsText(visitUrl("charpane.php"), "Astral Spirit")) {
        print("It'd really be better if you were already through the gash. Oh well!", "blue");
        visitUrl("ascend.php?action=ascend&confirm=on&confirm2=on");
    }
    if (!containsText(visitUrl("charpane.php"), "Astral Spirit")) throw "Failed to ascend.";

    const avatarPaths = [8, 10, 12, 17, 23, 26, 29, 35, 38];
    const paths = new Map<string, number>([
        ["unrestricted", 0],
        ["boozetarian", 1],
        ["teetotaler", 2],
        ["oxygenarian", 3],
        ["bees hate you", 4],
        ["way of the surprising fist", 6],
        ["trendy", 7],
        ["avatar of boris", 8],
        ["bugbear invasion", 9],
        ["zombie slayer", 10],
        ["class act", 11],
        ["avatar of jarlsberg", 12],
        ["big!", 14],
        ["kolhs", 15],
        ["class act ii: a class for pigs", 16],
        ["avatar of sneaky pete", 17],
        ["slow and steady", 18],
        ["heavy rains", 19],
        ["picky", 21],
        ["standard", 22],
        ["actually ed the undying", 23],
        ["one crazy random summer", 24],
        ["community service", 25],
        ["avatar of west of loathing", 26],
        ["the source", 27],
        ["nuclear autumn", 28],
        ["gelatinous noob", 29],
        ["license to adventure", 30],
        ["live. ascend. repeat.", 31],
        ["pocket familiars", 32],
        ["g-lover", 33],
        ["disguises delimit", 34],
        ["dark gyffte", 35],
        ["two crazy random summer", 36],
        ["kingdom of exploathing", 37],
        ["path of the plumber", 38],
        ["low key summer", 39],
        ["grey goo", 40],
        ["you, robot", 41],
    ]);
    const cores = new Map<string, number>([
        ["casual", 1],
        ["softcore", 2],
        ["normal", 2],
        ["hardcore", 3],
    ]);
    const moons = new Map<string, number>([
        ["mongoose", 1],
        ["wallaby", 2],
        ["vole", 3],
        ["platypus", 4],
        ["opossum", 5],
        ["marmot", 6],
        ["wombat", 7],
        ["blender", 8],
        ["packrat", 9],
        [
            "knoll",
            myPrimestat() === $stat`muscle` ? 1 : myPrimestat() === $stat`mysticality` ? 2 : 3,
        ],
        [
            "canada",
            myPrimestat() === $stat`muscle` ? 4 : myPrimestat() === $stat`mysticality` ? 5 : 6,
        ],
        [
            "gnomads",
            myPrimestat() === $stat`muscle` ? 7 : myPrimestat() === $stat`mysticality` ? 8 : 9,
        ],
    ]);
    const moonid = typeof moon === "number" ? moon : moons.get(moon.toLowerCase());
    const coreid = typeof core === "number" ? core : cores.get(core.toLowerCase());
    const pathid = typeof path === "number" ? path : paths.get(path.toLowerCase());
    const classid = toInt(playerClass);
    if (
        !pathid ||
        !coreid ||
        !moonid ||
        !Array.from(cores.values()).includes(coreid) ||
        !Array.from(moons.values()).includes(moonid) ||
        !Array.from(paths.values()).includes(pathid) ||
        (playerClass === $class`none` && !avatarPaths.includes(pathid)) ||
        !$items`astral six-pack, astral hot dog dinner, none`.includes(consumable) ||
        !$items`astral bludgeon, astral shield, astral chapeau, astral bracer, astral longbow, astral shorts, astral mace, astral ring, astral statuette, astral pistol, astral mask, astral pet sweater, astral shirt, astral belt, none`.includes(
            pet
        )
    )
        throw "Invalid selection!";

    visitUrl("afterlife.php?action=pearlygates");

    if (consumable !== $item`none`)
        visitUrl(`afterlife.php?action=buydeli&whichitem=${toInt(consumable)}`);

    if (pet !== $item`none`) visitUrl(`afterlife.php?action=buyarmory&whichitem=${toInt(pet)}`);

    visitUrl(
        `afterlife.php?action=ascend&confirmascend=1&whichsign=${moonid}&gender=2&whichclass=${classid}&whichpath=${pathid}&asctype=${coreid}&nopetok=1&noskillsok=1&pwd`,
        true
    );
}
