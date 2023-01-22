import { OutfitSpec } from "grimoire-kolmafia";
import { Familiar, Item, totalTurnsPlayed } from "kolmafia";
import { $effect, $familiar, $item, $items, DaylightShavings, get, have } from "libram";

const DEFAULT_UNIFORM = (): OutfitSpec => ({
    hat: DaylightShavings.buffAvailable()
        ? DaylightShavings.helmet
        : $items`astral chapeau, Iunion Crown`,
    shirt: $items`Jurassic Parka, fresh coat of paint`,
    pants: $items`designer sweatpants, old sweatpants`,
    weapon:
        get("_juneCleaverFightsLeft") > 0 && get("_juneCleaverEncounters") < 2
            ? $item`June cleaver`
            : $item`Fourth of May Cosplay Saber`,
    offhand: $item`unbreakable umbrella`,
    acc1: $items`meteorite necklace, your cowboy boots`,
    acc2: $item`codpiece`,
    acc3: $items`battle broom, Powerful Glove`,
    back:
        get("questPAGhost") === "unstarted" && get("nextParanormalActivity") <= totalTurnsPlayed()
            ? $item`protonic accelerator pack`
            : $items`LOV Epaulettes, unwrapped knock-off retro superhero cape`,
    modes: {
        retrocape: ["heck", "thrill"],
        umbrella: "broken",
    },
});

const FAMILIAR_PICKS = [
    {
        familiar: $familiar`Stocking Mimic`,
        famequip: $item.none,
        condition: () => !get("_bagOfCandy"),
    },
    {
        familiar: $familiar`Melodramedary`,
        famequip: $item`dromedary drinking helmet`,
        condition: () => get("camelSpit") < 100 && !have($effect`Spit Upon`),
    },
    {
        familiar: $familiar`Shorter-Order Cook`,
        condition: () => $familiar`Shorter-Order Cook`.dropsToday < 1,
    },
    {
        familiar: $familiar`Garbage Fire`,
        condition: () => $familiar`Garbage Fire`.dropsToday < 1,
    },
];

function chooseFamiliar(canAttack: boolean): { familiar: Familiar; famequip: Item } {
    const pick = FAMILIAR_PICKS.find(
        ({ condition, familiar }) =>
            condition() &&
            have(familiar) &&
            (canAttack || !(familiar.elementalDamage || familiar.physicalDamage))
    );
    if (pick) {
        return { famequip: pick.famequip ?? $item`tiny stillsuit`, familiar: pick.familiar };
    }
    return { famequip: $item`tiny stillsuit`, familiar: $familiar`Puck Man` };
}

type UniformOptions = { changes: OutfitSpec; canAttack: boolean };
const DEFAULT_OPTIONS = { changes: {}, canAttack: true };
export default function uniform(options: Partial<UniformOptions> = {}): OutfitSpec {
    const { changes, canAttack } = { ...DEFAULT_OPTIONS, ...options };
    if ("familiar" in changes && !("famequip" in changes)) changes.famequip = $item`tiny stillsuit`;
    return { ...DEFAULT_UNIFORM(), ...chooseFamiliar(canAttack), ...changes };
}
