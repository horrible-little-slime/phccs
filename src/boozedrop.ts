import {
    canAdventure,
    cliExecute,
    create,
    knollAvailable,
    myClass,
    use,
    useSkill,
    visitUrl,
} from "kolmafia";
import {
    $class,
    $effect,
    $familiar,
    $item,
    $items,
    $location,
    $skill,
    CommunityService,
    get,
    have,
    SourceTerminal,
} from "libram";
import { CSStrategy, Macro } from "./combat";
import { asdonTask, potionTask, skillTask, songTask } from "./commons";
import { CSQuest } from "./engine";
import { uniform } from "./outfit";

const BoozeDrop: CSQuest = {
    name: "Booze Drop",
    type: "SERVICE",
    test: CommunityService.BoozeDrop,
    outfit: () => ({
        hat: $item`wad of used tape`,
        weapon: $items`extra-large utility candle`,
        offhand: $item`cursed magnifying glass`,
        back: $item`protonic accelerator pack`,
        acc1: $item`Guzzlr tablet`,
        acc2: $item`gold detective badge`,
        acc3: $items`government-issued night-vision goggles`,
        famequip: $item`li'l ninja costume`,
        familiar: $familiar`Trick-or-Treating Tot`,
    }),
    turnsSpent: 0,
    maxTurns: 1,
    tasks: [
        {
            name: "Batform",
            completed: () => have($effect`Bat-Adjacent Form`),
            do: $location`The Dire Warren`,
            outfit: () =>
                uniform({
                    changes: {
                        back: $item`vampyric cloake`,
                        offhand: $item`latte lovers member's mug`,
                    },
                    canAttack: false,
                }),
            combat: new CSStrategy(() =>
                Macro.skill($skill`Become a Bat`).skill($skill`Throw Latte on Opponent`)
            ),
        },
        songTask($effect`Fat Leon's Phat Loot Lyric`, $effect`Ode to Booze`),
        {
            name: "Items.enh",
            completed: () => have($effect`items.enh`),
            do: () => SourceTerminal.enhance($effect`items.enh`),
        },
        skillTask($skill`The Spirit of Taking`),
        asdonTask("Observantly"),
        {
            name: "Unlock Beach",
            ready: () => have($item`government cheese`),
            completed: () => canAdventure($location`South of the Border`),
            do: (): void => {
                const desertAccessItem = knollAvailable()
                    ? $item`bitchin' meatcar`
                    : $item`Desert Bus pass`;
                if (!have(desertAccessItem)) {
                    cliExecute(`acquire ${desertAccessItem.name}`);
                }
            },
        },
        {
            name: "Get Anticheese",
            ready: () => canAdventure($location`South of the Border`),
            completed: () => get("lastAnticheeseDay") > 0,
            do: () => visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse"),
        },
        {
            name: "Government",
            ready: () => have($item`anticheese`) && have($item`government cheese`),
            completed: () => have($effect`I See Everything Thrice!`),
            do: () => create(1, $item`government`) && use(1, $item`government`),
        },
        {
            name: "Pray",
            ready: () => myClass() === $class`Pastamancer`,
            completed: () => get("_barrelPrayer"),
            do: () => cliExecute("barrelprayer buff"),
        },
        ...$items`Salsa Caliente™ candle, lavender candy heart, bag of grain`.map(potionTask),
        {
            name: "Steely-Eyed Squint",
            completed: () => have($effect`Steely-Eyed Squint`),
            do: () => useSkill($skill`Steely-Eyed Squint`),
        },
        {
            name: "Feel Lost",
            completed: () => have($effect`Feeling Lost`),
            do: () => useSkill($skill`Feel Lost`),
        },
    ],
};

export default BoozeDrop;
