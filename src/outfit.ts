import { OutfitSpec } from "grimoire-kolmafia";
import { Familiar, Item, totalTurnsPlayed } from "kolmafia";
import {
  $effect,
  $familiar,
  $familiars,
  $item,
  $items,
  byStat,
  CommunityService,
  DaylightShavings,
  get,
  have,
} from "libram";

const UNCHANGING_OUTFIT: OutfitSpec = {
  shirt: $items`LOV Eardigan, Jurassic Parka, fresh coat of paint`,
  offhand: $item`unbreakable umbrella`,
  ...byStat({
    Mysticality: {
      acc1: $items`meteorite necklace, your cowboy boots`,
      acc2: $item`codpiece`,
      acc3: $items`battle broom, Retrospecs`,
    },
    Muscle: {
      acc1: $item`your cowboy boots`,
      acc2: $items`Brutal brogues, Powerful Glove`,
      acc3: $items`Retrospecs`,
    },
    Moxie: {
      acc1: $item`your cowboy boots`,
      acc2: $items`LOV Earrings, Beach Comb`,
      acc3: $item`Cincho de Mayo`,
    },
  }),
  modes: {
    retrocape: [
      byStat({ Muscle: "vampire", Moxie: "robot", Mysticality: "heck" } as const),
      "thrill",
    ],
    umbrella: "broken",
    parka: "spikolodon",
  },
};

const DEFAULT_UNIFORM = (): OutfitSpec => ({
  ...UNCHANGING_OUTFIT,
  hat: DaylightShavings.buffAvailable()
    ? $item`Daylight Shavings Helmet`
    : byStat<Item | Item[]>({
        Moxie: $items`very pointy crown, Iunion Crown`,
        Mysticality: $items`astral chapeau, Iunion Crown`,
        Muscle: $item`Iunion Crown`,
      }),
  pants:
    get("sweat") < 100
      ? $item`designer sweatpants`
      : $items`astral trousers, astral shorts, designer sweatpants`,
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

function findFirstFamiliar(fams: Familiar[]) {
  return fams.find((f) => have(f));
}

function chooseFamiliar(canAttack: boolean): Pick<OutfitSpec, "familiar" | "famequip"> {
  const pick = FAMILIAR_PICKS.find(
    ({ condition, familiar }) =>
      condition() &&
      have(familiar) &&
      (canAttack || !(familiar.elementalDamage || familiar.physicalDamage)),
  );
  if (pick) {
    return { famequip: pick.famequip ?? $item`tiny stillsuit`, familiar: pick.familiar };
  }
  return {
    famequip: $item`tiny stillsuit`,
    familiar:
      findFirstFamiliar($familiars`Puck Man, Ms. Puck Man`) ?? $familiar`Blood-Faced Volleyball`,
  };
}

type UniformOptions = { changes: OutfitSpec; canAttack: boolean };
const DEFAULT_OPTIONS = { changes: {} as OutfitSpec, canAttack: true };
export default function uniform(options: Partial<UniformOptions> = {}): OutfitSpec {
  const { changes, canAttack } = { ...DEFAULT_OPTIONS, ...options };
  if ("familiar" in changes && !("famequip" in changes)) changes.famequip = $item`tiny stillsuit`;
  return { ...DEFAULT_UNIFORM(), ...chooseFamiliar(canAttack), ...changes };
}
