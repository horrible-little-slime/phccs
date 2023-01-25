import { CSStrategy, Macro } from "./combat";
import {
    beachTask,
    innerElf,
    meteorShower,
    potionTask,
    restore,
    skillTask,
    songTask,
} from "./commons";
import { CSEngine, CSQuest } from "./engine";
import { horse, horsery, unequip } from "./lib";
import uniform from "./outfit";
import {
    canadiaAvailable,
    canEquip,
    cliExecute,
    myLevel,
    numericModifier,
    retrieveItem,
    storageAmount,
    takeStorage,
    use,
    visitUrl,
} from "kolmafia";
import {
    $effect,
    $effects,
    $familiar,
    $item,
    $items,
    $location,
    $skill,
    CommunityService,
    get,
    getSaleValue,
    have,
} from "libram";

const buffs = $effects`Carol of the Hells, Arched Eyebrow of the Archmage, Song of Sauce`;
const chefstaves = $items`Staff of the Roaring Hearth, Staff of Kitchen Royalty, Staff of the Deepest Freeze, Staff of Frozen Lard, Staff of the Peppermint Twist, Staff of the Roaring Hearth`;

const Spell: CSQuest = {
    name: "Spell Damage",
    type: "SERVICE",
    test: CommunityService.SpellDamage,
    outfit: () => ({
        hat: $items`astral chapeau, Hollandaise helmet, Iunion Crown`,
        weapon: CSEngine.core === "soft" ? chefstaves : $item`weeping willow wand`,
        offhand: $item`Abracandalabra`,
        pants: $item`designer sweatpants`,
        acc1: $items`meteorite necklace, Kremlin's Greatest Briefcase`,
        acc2: $item`codpiece`,
        acc3: $item`battle broom`,
        ...(CSEngine.core === "soft"
            ? { familiar: $familiar`Disembodied Hand`, famequip: $item`Stick-Knife of Loathing` }
            : { familiar: $familiar`Left-Hand Man`, equipment: $item`astral statuette` }),
    }),
    turnsSpent: 1,
    maxTurns: 30,
    tasks: [
        skillTask($skill`Simmer`),
        potionTask($item`tobiko marble soda`),
        songTask($effect`Jackasses' Symphony of Destruction`, $effect`The Sonata of Sneakiness`),
        ...buffs.map(skillTask),
        restore(buffs),
        beachTask($effect`We're All Made of Starfish`),
        potionTask($item`LOV Elixir #6`),
        {
            name: "Cargopocket",
            completed: () => get("_cargoPocketEmptied"),
            ready: () =>
                $items`sizzling desk bell, frost-rimed desk bell, uncanny desk bell, nasty desk bell, greasy desk bell`.every(
                    (item) => getSaleValue(item) < 4 * get("valueOfAdventure")
                ),
            do: () => cliExecute("cargo 177"),
        },
        potionTask($item`Yeg's Motel hand soap`),
        {
            name: "Briefcase",
            core: "hard",
            completed: () =>
                numericModifier($item`Kremlin's Greatest Briefcase`, "Spell Damage Percent") > 0,
            do: () => cliExecute("Briefcase.ash enchantment spell"),
        },
        {
            name: "Mariachi Hat",
            completed: () => have($item`mariachi hat`),
            do: () => retrieveItem($item`mariachi hat`),
        },
        {
            name: "Weeping Willow Wand",
            completed: () => have($item`weeping willow wand`),
            core: "hard",
            do: () => retrieveItem($item`weeping willow wand`),
        },
        {
            name: "Tea Party",
            completed: () => get("_madTeaParty"),
            do: () => cliExecute("hatter mariachi hat"),
            prepare: (): void => {
                visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2");
                use($item`"DRINK ME" potion`);
            },
        },
        skillTask($skill`Spirit of Cayenne`),
        potionTask($item`flask of baconstone juice`),
        {
            name: "Saucefingers",
            ready: () => myLevel() >= 15 && have($familiar`Mini-Adventurer`),
            completed: () => have($effect`Saucefingers`),
            do: $location`The Dire Warren`,
            prepare: () => horsery() === "pale" && horse("dark"),
            outfit: () => uniform({ changes: { familiar: $familiar`Mini-Adventurer` } }),
            combat: new CSStrategy(() =>
                Macro.trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`).skill(
                    $skill`Feel Hatred`
                )
            ),
            choices: { [768]: 4 },
        },
        innerElf(),
        meteorShower(),
        {
            name: "Meteorite Necklace",
            core: "soft",
            completed: () => have($item`meteorite necklace`),
            ready: () => canadiaAvailable(),
            do: (): void => {
                const meteor = $items`meteorite ring, meteorite fragment, meteorite earring`.find(
                    (item) => have(item)
                );
                if (meteor) {
                    unequip(meteor);
                    retrieveItem(1, $item`tenderizing hammer`);
                    retrieveItem(1, $item`jewelry-making pliers`);
                    cliExecute(`smash ${meteor}`);
                    cliExecute(`make ${$item`meteorite necklace`}`);
                }
            },
        },
        {
            name: "Pull Staff",
            completed: () => chefstaves.some((staff) => have(staff)),
            core: "soft",
            do: (): void => {
                const staff = chefstaves.find((s) => storageAmount(s) > 0 && canEquip(s));
                if (staff) takeStorage(staff, 1);
            },
        },
    ],
};

export default Spell;
