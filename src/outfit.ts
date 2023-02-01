import { byStat } from "./lib";
import { OutfitSpec } from "grimoire-kolmafia";
import { Familiar, Item, totalTurnsPlayed } from "kolmafia";
import {
    $effect,
    $familiar,
    $item,
    $items,
    CommunityService,
    DaylightShavings,
    get,
    have,
} from "libram";

export const METEOR_ACCESSORY = byStat({
    Mysticality: $item`meteorite necklace`,
    Muscle: $item`meteorite ring`,
    Moxie: $item`meteorite necklace`,
});

const UNCHANGING_OUTFIT: OutfitSpec = {
    shirt: $items`LOV Eardigan, Jurassic Parka, fresh coat of paint`,
    pants: $items`designer sweatpants, old sweatpants`,
    offhand: $item`unbreakable umbrella`,
    acc1: [METEOR_ACCESSORY, $item`your cowboy boots`],
    acc2: byStat<Item | Item[]>({
        Mysticality: $item`codpiece`,
        Moxie: $items`LOV Earrings, Beach Comb`,
        Muscle: $items`Retrospecs, Brutal brogues`,
    }),
    acc3: byStat<Item | Item[]>({
        Mysticality: $items`battle broom, Powerful Glove`,
        default: $item`Powerful Glove`,
    }),
    modes: {
        retrocape: [byStat({ Muscle: "vampire", Moxie: "robot", Mysticality: "heck" }), "thrill"],
        umbrella: "broken",
    },
};

const DEFAULT_UNIFORM = (): OutfitSpec => ({
    ...UNCHANGING_OUTFIT,
    hat: DaylightShavings.buffAvailable()
        ? DaylightShavings.helmet
        : byStat<Item | Item[]>({
              Moxie: $items`very pointy crown, Iunion Crown`,
              Mysticality: $items`astral chapeau, Iunion Crown`,
              Muscle: $item`Iunion Crown`,
          }),
    weapon:
        get("_juneCleaverFightsLeft") > 0 && get("_juneCleaverEncounters") < 2
            ? $item`June cleaver`
            : byStat<Item | Item[]>({
                  Muscle: $items`dented scepter, Fourth of May Cosplay Saber`,
                  default: $item`Fourth of May Cosplay Saber`,
              }),
    back:
        get("questPAGhost") === "unstarted" && get("nextParanormalActivity") <= totalTurnsPlayed()
            ? $item`protonic accelerator pack`
            : $items`LOV Epaulettes, unwrapped knock-off retro superhero cape`,
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
        condition: () =>
            ![$effect`Shortly Stacked`, $item`short stack of pancakes`].some((x) => have(x)) &&
            !CommunityService.FamiliarWeight.isDone(),
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
const DEFAULT_OPTIONS = { changes: {} as OutfitSpec, canAttack: true };
export default function uniform(options: Partial<UniformOptions> = {}): OutfitSpec {
    const { changes, canAttack } = { ...DEFAULT_OPTIONS, ...options };
    if ("familiar" in changes && !("famequip" in changes)) changes.famequip = $item`tiny stillsuit`;
    return { ...DEFAULT_UNIFORM(), ...chooseFamiliar(canAttack), ...changes };
}
