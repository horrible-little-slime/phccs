import { cliExecute, equip, equippedItem, myFamiliar, useFamiliar } from "kolmafia";
import { $familiar, $item, $items, $slot, $slots, have } from "libram";

export class Outfit {
    equips: Map<Slot, Item>;
    familiar?: Familiar;

    constructor(equips: Map<Slot, Item>, familiar?: Familiar) {
        this.equips = equips;
        this.familiar = familiar;
    }

    dress() {
        if (this.familiar) useFamiliar(this.familiar);
        const targetEquipment = Array.from(this.equips.keys());
        for (const slot in Slot.all()) {
            if (
                targetEquipment.includes(equippedItem(slot)) &&
                this.equips.get(slot) !== equippedItem(slot)
            )
                equip(slot, $item`none`);
        }
        for (const [slot, item] of this.equips.entries()) {
            equip(slot, item);
        }
    }

    static doYourBest(outfit: Map<Slot, Item | Item[]>, familiar?: Familiar): Outfit {
        const returnValue = new Map<Slot, Item>();
        for (const [slot, itemOrItems] of outfit.entries()) {
            const item = Array.isArray(itemOrItems)
                ? itemOrItems.find((item) => have(item))
                : itemOrItems;
            if (item) returnValue.set(slot, item);
        }
        return new Outfit(returnValue, familiar);
    }

    static current(withFamiliar = false): Outfit {
        const familiar = withFamiliar ? myFamiliar() : undefined;
        const slots = $slots`hat, shirt, back, weapon, off-hand, pants, acc1, acc2, acc3`;
        if (withFamiliar) slots.push($slot`familiar`);
        const outfitMap = new Map<Slot, Item>();
        for (const slot of slots) {
            const item = equippedItem(slot);
            if (item !== $item`none`) outfitMap.set(slot, item);
        }
        return new Outfit(outfitMap, familiar);
    }
}

export function withOutfit(outfit: Outfit, action: () => void) {
    const withFamiliar = outfit.familiar !== undefined;
    const cachedOutfit = Outfit.current(withFamiliar);
    outfit.dress();
    try {
        action();
    } finally {
        cachedOutfit.dress();
    }
}

export default function uniform(): void {
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $item`Iunion Crown`],
            [$slot`shirt`, $item`fresh coat of paint`],
            [$slot`pants`, $items`pantogram pants, old sweatpants`],
            [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
            [$slot`off-hand`, $item`familiar scrapbook`],
            [$slot`acc1`, $item`your cowboy boots`],
            [$slot`acc2`, $item`codpiece`],
            [$slot`acc3`, $items`battle broom, Powerful Glove`],
            [$slot`back`, $items`LOV Epaulettes, vampyric cloake`],
        ])
    ).dress();
}

export function wireOutfit(): void {
    new Outfit(
        new Map<Slot, Item>([
            [$slot`hat`, $item`Iunion Crown`],
            [$slot`shirt`, $item`fresh coat of paint`],
            [$slot`pants`, $item`Cargo Cultist Shorts`],
            [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
            [$slot`off-hand`, $item`familiar scrapbook`],
            [$slot`acc1`, $item`Eight Days a Week Pill Keeper`],
            [$slot`acc2`, $item`Powerful Glove`],
            [$slot`acc3`, $item`Lil' Doctor™ bag`],
        ])
    ).dress();
}

export function moxieOutfit(): void {
    cliExecute("retrocape robot");
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $item`very pointy crown`],
            [$slot`shirt`, $items`shoe ad t-shirt, fresh coat of paint`],
            [$slot`back`, $item`unwrapped knock-off retro superhero cape`],
            [$slot`weapon`, $item`fourth of may cosplay saber`],
            [$slot`pants`, $item`cargo cultist shorts`],
            [$slot`acc1`, $item`beach comb`],
            [$slot`acc2`, $item`"I Voted!" sticker`],
            [$slot`acc3`, $item`retrospecs`],
            [$slot`familiar`, $item`miniature crystal ball`],
        ])
    ).dress();
}

export function hpOutfit(): void {
    cliExecute("retrocape vampire");
    if (!have($item`wad of used tape`)) cliExecute("fold wad of used tape");
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $item`wad of used tape`],
            [$slot`off-hand`, $item`fourth of may cosplay saber`],
            [$slot`weapon`, $item`dented scepter`],
            [$slot`shirt`, $items`shoe ad t-shirt, fresh coat of paint`],
            [$slot`back`, $item`unwrapped knock-off retro superhero cape`],
            [$slot`pants`, $item`cargo cultist shorts`],
            [$slot`acc1`, $item`brutal brogues`],
            [$slot`acc2`, $item`retrospecs`],
            [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
            [$slot`familiar`, $item`miniature crystal ball`],
        ])
    ).dress();
}

export function muscleOutfit(): void {
    cliExecute("retrocape vampire");
    if (!have($item`wad of used tape`)) cliExecute("fold wad of used tape");
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $item`wad of used tape`],
            [$slot`off-hand`, $item`cosmetic football`],
            [$slot`weapon`, $item`dented scepter`],
            [$slot`shirt`, $items`shoe ad t-shirt, fresh coat of paint`],
            [$slot`back`, $item`unwrapped knock-off retro superhero cape`],
            [$slot`pants`, $item`cargo cultist shorts`],
            [$slot`acc1`, $item`brutal brogues`],
            [$slot`acc2`, $item`retrospecs`],
            [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
            [$slot`familiar`, $item`fourth of may cosplay saber`],
        ]),
        $familiar`disembodied hand`
    ).dress();
}

export function mysticalityOutfit(): void {
    cliExecute("retrocape heck");
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $item`wad of used tape`],
            [$slot`weapon`, $item`fourth of may cosplay saber`],
            [$slot`off-hand`, $item`astral statuette`],
            [$slot`back`, $item`unwrapped knock-off superhero cape`],
            [$slot`shirt`, $items`denim jacket, shoe ad t-shirt, fresh coat of paint`],
            [$slot`pants`, $item`pantogram pants`],
            [$slot`acc1`, $item`your cowboy boots`],
            [$slot`acc2`, $item`codpiece`],
            [$slot`acc3`, $item`battle broom`],
            [$slot`familiar`, $item`abracandalabra`],
        ]),
        $familiar`left-hand man`
    ).dress();
}

export function itemOutfit(): void {
    if (!have($item`wad of used tape`)) cliExecute("fold wad of used tape");
    new Outfit(
        new Map<Slot, Item>([
            [$slot`hat`, $item`wad of used tape`],
            [$slot`off-hand`, $item`Kramco Sausage-o-Matic™`],
            [$slot`back`, $item`protonic accelerator pack`],
            [$slot`acc1`, $item`guzzlr tablet`],
            [$slot`acc2`, $item`gold detective badge`],
            [$slot`acc3`, $item`government-issued night-vision goggles`],
            [$slot`familiar`, $item`li'l ninja costume`],
        ]),
        $familiar`trick-or-treating tot`
    ).dress();
}

export function hotresOutfit(): void {
    cliExecute("retrocape vampire hold");
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`back`, $item`unwrapped knock-off retro superhero cape`],
            [$slot`off-hand`, $item`meteorite guard`],
            [$slot`pants`, $item`lava-proof pants`],
            [$slot`acc1`, $item`your cowboy boots`],
            [$slot`acc2`, $item`heat-resistant gloves`],
            [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
            [$slot`familiar`, $items`cracker`],
        ]),
        $familiar`exotic parrot`
    ).dress();
}

export function noncombatOutfit(): void {
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $item`very pointy crown`],
            [$slot`back`, $item`protonic accelerator pack`],
            [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
            [$slot`off-hand`, $items`burning paper crane, familiar scrapbook`],
            [$slot`acc1`, $item`Kremlin's Greatest Briefcase`],
            [$slot`acc2`, $item`codpiece`],
            [$slot`acc3`, $item`Brutal brogues`],
        ]),
        $familiar`Disgeist`
    ).dress();
}

export function famweightOutfit(): void {
    const familiarAndEquip = have($item`cracker`)
        ? { fam: $familiar`Exotic Parrot`, equip: $item`cracker` }
        : have($familiar`Baby Bugged Bugbear`)
        ? { fam: $familiar`Baby Bugged Bugbear`, equip: $item`bugged beanie` }
        : {
              fam: $familiar`Blood-Faced Volleyball`,
              equip: have($item`astral pet sweater`) ? $item`astral pet sweater` : $item`none`,
          };
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
            [$slot`off-hand`, $items`burning paper crane, familiar scrapbook`],
            [$slot`acc1`, $item`Beach Comb`],
            [$slot`acc2`, $item`Brutal brogues`],
            [$slot`acc3`, $item`hewn moon-rune spoon`],
            [$slot`familiar`, familiarAndEquip.equip],
        ]),
        familiarAndEquip.fam
    );
}

export function weaponOutfit(): void {
    if (!have($item`broken champagne bottle`)) cliExecute("fold broken champagne bottle");
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $items`seal-skull helmet`],
            [$slot`weapon`, $item`broken champagne bottle`],
            [$slot`off-hand`, $item`dented scepter`],
            [$slot`acc1`, $item`brutal brogues`],
            [$slot`acc2`, $item`kremlin's greatest briefcase`],
            [$slot`acc3`, $item`powerful glove`],
        ])
    );
}

export function spellOutfit(): void {
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $items`sugar chapeau, hollandaise helmet`],
            [$slot`weapon`, $item`weeping willow wand`],
            [$slot`off-hand`, $item`Abracandalabra`],
            [$slot`familiar`, $item`astral statuette`],
            [$slot`pants`, $item`pantogram pants`],
            [$slot`acc1`, $item`kremlin's greatest briefcase`],
            [$slot`acc2`, $item`codpiece`],
            [$slot`acc3`, $item`battle broom`],
        ]),
        $familiar`Left-Hand Man`
    ).dress();
}