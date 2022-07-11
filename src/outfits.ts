import {
    abort,
    buy,
    canEquip,
    cliExecute,
    equip,
    equippedAmount,
    equippedItem,
    Familiar,
    haveEquipped,
    inHardcore,
    Item,
    myFamiliar,
    Slot,
    toSlot,
    useFamiliar,
} from "kolmafia";
import {
    $familiar,
    $item,
    $items,
    $slot,
    $slots,
    arrayContains,
    get,
    getModifier,
    have,
    Requirement,
    RetroCape,
    sum,
} from "libram";
import { BooleanModifier, NumericModifier, numericModifiers } from "libram/dist/modifierTypes";
import { chefstaves } from "./lib";

type Modes = {
    backupcamera?: "ml" | "meat" | "init";
    umbrella?: "broken" | "forward" | "bucket" | "pitchfork" | "twirling" | "cocoon";
    snowsuit?: "eyebrows" | "smirk" | "nose" | "goatee" | "hat";
    edpiece?: "bear" | "owl" | "puma" | "hyena" | "mouse" | "weasel" | "fish";
    retrocape?: ["vampire" | "heck" | "robot", "hold" | "thrill" | "kiss" | "kill"];
};

const modeables = {
    backupcamera: $item`backup camera`,
    umbrella: $item`unbreakable umbrella`,
    snowsuit: $item`Snow Suit`,
    edpiece: $item`The Crown of Ed the Undying`,
    retrocape: $item`unwrapped knock-off retro superhero cape`,
} as const;

const outfitSlots = [
    "weapon",
    "offhand",
    "hat",
    "back",
    "shirt",
    "pants",
    "acc1",
    "acc2",
    "acc3",
    "familiar",
] as const;

type OutfitSlots = typeof outfitSlots[number];

type OutfitParts = Partial<{ [slot in OutfitSlots]: Item }>;
type OutfitAttempt = Partial<{ [slot in OutfitSlots]: Item | Item[] }>;

export class Outfit {
    equips: OutfitParts;
    familiar?: Familiar;
    modes?: Modes;

    /**
     * Construct an outfit object, for rapid equipping
     * @param equips Map of what to equip and where
     * @param familiar Optional familiar to use with outfit
     */
    constructor(equips: OutfitParts, familiar?: Familiar, modes?: Modes) {
        this.equips = equips;
        this.familiar = familiar;
        this.modes = modes;
    }

    dress(): void {
        if (this.familiar) useFamiliar(this.familiar);
        const targetEquipment = Object.values(this.equips);
        const accessorySlots = $slots`acc1, acc2, acc3`;
        const equipmentMap = new Map(
            Array.from(Object.entries(this.equips)).map(([slotName, equipmentItem]) => [
                toSlot(slotName),
                equipmentItem,
            ])
        );
        for (const slot of $slots`weapon, offhand, hat, back, shirt, pants, familiar`) {
            if (
                targetEquipment.includes(equippedItem(slot)) &&
                equipmentMap.get(slot) !== equippedItem(slot)
            )
                equip(slot, $item`none`);
        }

        //Order is anchored here to prevent DFSS shenanigans
        for (const slot of $slots`weapon, offhand, hat, back, shirt, pants, familiar`) {
            const equipment = equipmentMap.get(slot);
            if (equipment) equip(slot, equipment);
        }

        //We don't care what order accessories are equipped in, just that they're equipped
        const accessoryEquips = accessorySlots
            .map((slot) => equipmentMap.get(slot))
            .filter((item) => item !== undefined) as Item[];
        for (const slot of accessorySlots) {
            const toEquip = accessoryEquips.find(
                (equip) =>
                    equippedAmount(equip) <
                    accessoryEquips.filter((accessory) => accessory === equip).length
            );
            if (!toEquip) break;
            const currentEquip = equippedItem(slot);
            //We never want an empty accessory slot
            if (
                currentEquip === $item`none` ||
                equippedAmount(currentEquip) >
                    accessoryEquips.filter((accessory) => accessory === currentEquip).length
            ) {
                equip(slot, toEquip);
            }
        }

        for (const mode in this.modes) {
            if (haveEquipped(modeables[mode as keyof Modes])) {
                const cmd = this.modes[mode as keyof Modes];
                const args = Array.isArray(cmd) ? cmd.join(" ") : cmd;
                cliExecute(`${mode} ${args}`);
            }
        }
    }

    modifier(mod: NumericModifier): number;
    modifier(mod: BooleanModifier): boolean;
    modifier(mod: NumericModifier | BooleanModifier): number | boolean {
        if (arrayContains(mod, numericModifiers)) {
            return sum(Object.values(this.equips), (it: Item) => getModifier(mod, it));
        } else {
            return Object.values(this.equips).some((it: Item) => getModifier(mod, it));
        }
    }

    /**
     * Identical to withOutfit; executes callback function with equipped outfit, and returns to original outfit
     * @param callback Function to execute
     */
    with<T>(callback: () => T): T {
        return withOutfit(this, callback);
    }

    /**
     * Saves current outfit as an Outfit
     * @param withFamiliar Option to store current familiar as part of outfit
     */
    static current(withFamiliar = false): Outfit {
        const familiar = withFamiliar ? myFamiliar() : undefined;
        const fit: OutfitParts = {};
        for (const slotName of outfitSlots) {
            const slot = toSlot(slotName);
            const item = equippedItem(slot);
            if (item !== $item`none`) fit[slotName] = item;
        }
        return new Outfit(fit, familiar);
    }
}

export class OutfitPlan {
    outline: OutfitAttempt;
    filler?: Requirement;
    familiar?: Familiar;
    modes?: Modes;

    constructor(outline: OutfitAttempt, familiar?: Familiar, filler?: Requirement, modes?: Modes) {
        this.outline = outline;
        this.familiar = familiar;
        this.filler = filler;
        this.modes = modes;
    }

    build(): Outfit {
        const fit: OutfitParts = {};
        for (const slotName of outfitSlots) {
            const itemOrItems = this.outline[slotName];
            if (!itemOrItems) continue;

            const itemChoice = Array.isArray(itemOrItems)
                ? itemOrItems.find(
                      (item) =>
                          have(item) && (toSlot(slotName) === $slot`familiar` || canEquip(item))
                  )
                : itemOrItems;
            if (itemChoice) fit[slotName] = itemChoice;
        }
        return new Outfit(fit, this.familiar, this.modes);
    }

    dress(filler?: Requirement): void {
        const fit = this.build();
        fit.dress();
        if (filler) {
            new Requirement([], { preventSlot: Object.keys(fit).map((s) => toSlot(s)) })
                .merge(filler)
                .maximize();
        }
    }

    with<T>(action: () => T): T {
        return this.build().with(action);
    }

    merge(other: OutfitPlan): OutfitPlan {
        const merged: OutfitAttempt = {};
        for (const slot of outfitSlots) {
            const current = this.outline[slot];
            const alternate = other.outline[slot];
            if (current && alternate) {
                merged[slot] = [alternate, current].flat();
            } else merged[slot] = current ?? alternate;
        }

        return new OutfitPlan(
            merged,
            other.familiar ?? this.familiar,
            other.filler?.merge(this.filler ?? new Requirement([], {})) ?? this.filler,
            { ...(other.modes ?? {}), ...(this.modes ?? {}) }
        );
    }

    static merge(...mergees: OutfitPlan[]): OutfitPlan {
        if (mergees.length === 0) return new OutfitPlan({});
        return mergees.reduce((a, b) => a.merge(b));
    }

    modifier(mod: NumericModifier): number;
    modifier(mod: BooleanModifier): boolean;
    modifier(mod: NumericModifier | BooleanModifier): number | boolean {
        if (arrayContains(mod, numericModifiers)) return this.build().modifier(mod);
        else return this.build().modifier(mod);
    }
}

/**
 * Execute callback while wearing given outfit
 * Then return to what you were previously wearing
 * @param outfit Outfit to use
 * @param callback Function to execute
 */
export function withOutfit<T>(outfit: Outfit, callback: () => T): T {
    const withFamiliar = outfit.familiar !== undefined;
    const cachedOutfit = Outfit.current(withFamiliar);
    outfit.dress();
    try {
        return callback();
    } finally {
        cachedOutfit.dress();
    }
}

export default function uniform(...changes: (Item | [Item, Slot])[]): void {
    if (get("umbrellaState", "broken") !== "broken") cliExecute("umbrella ml");
    const defaultUniform = {
        hat: $items`astral chapeau, Iunion Crown`,
        shirt: $item`fresh coat of paint`,
        pants: $items`designer sweatpants, old sweatpants`,
        weapon:
            get("_juneCleaverFightsLeft") > 0 && get("_juneCleaverEncounters") < 2
                ? $item`June cleaver`
                : $item`Fourth of May Cosplay Saber`,
        offhand: $item`unbreakable umbrella`,
        acc1: $items`meteorite necklace, your cowboy boots`,
        acc2: $item`codpiece`,
        acc3: $items`battle broom, Powerful Glove`,
        back: $items`LOV Epaulettes, unwrapped knock-off retro superhero cape`,
        familiar: null,
    };

    const alterations = Object.fromEntries(
        changes.map((change) => {
            const slot = Array.isArray(change) ? change[1] : toSlot(change);
            const slotName =
                outfitSlots.find((element) => toSlot(element) === slot) ??
                abort("invalid slot for outfit");
            const equipment = Array.isArray(change) ? change[0] : change;
            return [slotName, equipment];
        })
    ) as OutfitAttempt;

    const chosenOutfit: OutfitAttempt = {};
    for (const slotName of outfitSlots) {
        const itemOrItems = alterations[slotName] ?? defaultUniform[slotName];
        if (itemOrItems) chosenOutfit[slotName] = itemOrItems;
    }
    new OutfitPlan(chosenOutfit).dress();
    if (haveEquipped(RetroCape.item)) RetroCape.set("heck", "thrill");
}

export function wireOutfit(): void {
    new Outfit({
        hat: $item`Iunion Crown`,
        shirt: $item`fresh coat of paint`,
        pants: $item`Cargo Cultist Shorts`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`familiar scrapbook`,
        acc1: $item`Eight Days a Week Pill Keeper`,
        acc2: $item`Powerful Glove`,
        acc3: $item`Guzzlr tablet`,
    }).dress();
}

export function moxieOutfit(): void {
    cliExecute("retrocape robot");
    new OutfitPlan({
        hat: $item`very pointy crown`,
        shirt: $items`shoe ad T-shirt, fresh coat of paint`,
        back: $item`unwrapped knock-off retro superhero cape`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`unbreakable umbrella`,
        pants: $item`Cargo Cultist Shorts`,
        acc1: $item`Beach Comb`,
        acc2: $item`"I Voted!" sticker`,
        acc3: $item`Retrospecs`,
        familiar: $item`miniature crystal ball`,
    }).dress();
}

export function hpOutfit(): void {
    cliExecute("retrocape vampire");
    if (!have($item`wad of used tape`)) cliExecute("fold wad of used tape");
    new OutfitPlan({
        hat: $item`wad of used tape`,
        weapon: $item`dented scepter`,
        offhand: $item`Fourth of May Cosplay Saber`,
        shirt: $items`shoe ad T-shirt, fresh coat of paint`,
        back: $item`unwrapped knock-off retro superhero cape`,
        pants: $item`Cargo Cultist Shorts`,
        acc1: $item`Brutal brogues`,
        acc2: $item`Retrospecs`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        familiar: $item`miniature crystal ball`,
    }).dress();
}

export function muscleOutfit(): void {
    cliExecute("retrocape vampire");
    if (!have($item`wad of used tape`)) cliExecute("fold wad of used tape");
    new OutfitPlan(
        {
            hat: $item`wad of used tape`,
            weapon: $item`dented scepter`,
            offhand: $item`Fourth of May Cosplay Saber`,
            shirt: $items`shoe ad T-shirt, fresh coat of paint`,
            back: $item`unwrapped knock-off retro superhero cape`,
            pants: $item`Cargo Cultist Shorts`,
            acc1: $item`Brutal brogues`,
            acc2: $item`Retrospecs`,
            acc3: $item`Kremlin's Greatest Briefcase`,
            familiar: $item`unbreakable umbrella`,
        },
        $familiar`Left-Hand Man`
    ).dress();
}

export function mysticalityOutfit(): void {
    cliExecute("retrocape heck");
    new OutfitPlan(
        {
            hat: $item`wad of used tape`,
            weapon: $item`Fourth of May Cosplay Saber`,
            offhand: $items`astral statuette, cosmetic football`,
            back: $item`unwrapped knock-off retro superhero cape`,
            shirt: $items`denim jacket, shoe ad T-shirt, fresh coat of paint`,
            pants: $item`designer sweatpants`,
            acc1: $item`your cowboy boots`,
            acc2: $item`codpiece`,
            acc3: $item`battle broom`,
            familiar: $items`Abracandalabra`,
        },
        $familiar`Left-Hand Man`
    ).dress();
}

export function itemOutfit(): void {
    if (!have($item`wad of used tape`)) cliExecute("fold wad of used tape");
    new OutfitPlan(
        {
            hat: $item`wad of used tape`,
            weapon: $items`extra-large utility candle`,
            offhand: $item`cursed magnifying glass`,
            back: $item`protonic accelerator pack`,
            acc1: $item`Guzzlr tablet`,
            acc2: $item`gold detective badge`,
            acc3: $items`government-issued night-vision goggles`,
            familiar: $item`li'l ninja costume`,
        },
        $familiar`Trick-or-Treating Tot`
    ).dress();
}

export function hotresOutfit(): void {
    cliExecute("retrocape vampire hold");
    new OutfitPlan(
        {
            back: $item`unwrapped knock-off retro superhero cape`,
            weapon: $item`Fourth of May Cosplay Saber`,
            offhand: $item`meteorite guard`,
            pants: $item`designer sweatpants`,
            acc1: $item`your cowboy boots`,
            acc2: $item`Brutal brogues`,
            acc3: $item`Beach Comb`,
            familiar: $items`cracker`,
        },
        $familiar`Exotic Parrot`
    ).dress();
}

export function noncombatOutfit(): void {
    if (get("umbrellaState", "cocoon") !== "cocoon") cliExecute("umbrella nc");
    new OutfitPlan(
        {
            hat: $item`very pointy crown`,
            back: $item`protonic accelerator pack`,
            weapon: $item`Fourth of May Cosplay Saber`,
            offhand: $items`unbreakable umbrella, burning paper crane, familiar scrapbook`,
            acc1: $item`hewn moon-rune spoon`,
            acc2: $item`codpiece`,
            acc3: $item`Brutal brogues`,
        },
        $familiar`Disgeist`
    ).dress();
}

export function famweightOutfit(): void {
    const familiarAndEquip = have($item`Snow Suit`)
        ? { fam: $familiar`Blood-Faced Volleyball`, equip: $item`Snow Suit` }
        : have($item`cracker`)
        ? { fam: $familiar`Exotic Parrot`, equip: $item`cracker` }
        : have($familiar`Baby Bugged Bugbear`)
        ? { fam: $familiar`Baby Bugged Bugbear`, equip: $item`bugged beanie` }
        : {
              fam: $familiar`Blood-Faced Volleyball`,
              equip: $items`astral pet sweater`,
          };
    new OutfitPlan(
        {
            hat: $item`Daylight Shavings Helmet`,
            weapon: $item`Fourth of May Cosplay Saber`,
            offhand: $items`burning paper crane, familiar scrapbook`,
            pants: $items`repaid diaper, Great Wolf's beastly trousers, designer sweatpants`,
            acc1: $item`Beach Comb`,
            acc2: $item`Brutal brogues`,
            acc3: $item`hewn moon-rune spoon`,
            familiar: familiarAndEquip.equip,
        },
        familiarAndEquip.fam
    ).dress();
}

export function weaponOutfit(): void {
    if (!have($item`broken champagne bottle`)) cliExecute("fold broken champagne bottle");
    new OutfitPlan(
        {
            hat: $items`seal-skull helmet`,
            weapon: $item`broken champagne bottle`,
            offhand: $item`dented scepter`,
            acc1: $item`Brutal brogues`,
            acc2: $item`Powerful Glove`,
            acc3: $items`meteorite ring, Kremlin's Greatest Briefcase`,
            familiar: $items`Stick-Knife of Loathing`,
        },
        $familiar`Disembodied Hand`
    ).dress();
}

export function spellOutfit(): void {
    if (!have($item`Abracandalabra`) && !have($item`obsidian nutcracker`) && inHardcore()) {
        buy($item`obsidian nutcracker`);
    }
    const { familiar, famEquip } = inHardcore()
        ? { familiar: $familiar`Left-Hand Man`, famEquip: $items`astral statuette` }
        : { familiar: $familiar`Disembodied Hand`, famEquip: $items`Stick-Knife of Loathing` };

    new OutfitPlan(
        {
            hat: $items`sugar chapeau, astral chapeau, Hollandaise helmet`,
            weapon: !inHardcore() ? chefstaves : $item`weeping willow wand`,
            offhand: [
                $item`Abracandalabra`,
                ...(inHardcore()
                    ? $items`weeping willow wand, astral statuette`
                    : $items`obsidian nutcracker`),
            ],
            familiar: famEquip,
            pants: $item`designer sweatpants`,
            acc1: $items`meteorite necklace, Kremlin's Greatest Briefcase`,
            acc2: $item`codpiece`,
            acc3: $item`battle broom`,
        },
        familiar
    ).dress();
}
