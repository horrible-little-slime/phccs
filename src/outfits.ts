import { equip, equippedItem, useFamiliar } from "kolmafia";
import { $item, $items, $slot, have } from "libram";

class Outfit {
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
            if (targetEquipment.includes(equippedItem(slot)) && this.equips.get(slot) !== equippedItem(slot)) equip(slot, $item`none`);
    }
    for (const [slot, item] of this.equips.entries()) {
        equip(slot, item);
    }}

    static doYourBest(outfit: Map<Slot, Item | Item[]>, familiar?: Familiar): Outfit {
        const returnValue = new Map<Slot, Item>();
        for (const [slot, itemOrItems] of outfit.entries()) {
            const item = Array.isArray(itemOrItems) ? itemOrItems.find((item) => have(item)) || $item`none` : itemOrItems;
            returnValue.set(slot, item);
        }
        return new Outfit(returnValue, familiar);
    }
}

export default function uniform(): void {
    Outfit.doYourBest(new Map<Slot, Item | Item[]>([
        [$slot`hat`, $item`Iunion Crown`],
        [$slot`shirt`, $item`fresh coat of paint`],
        [$slot`pants`, $items`pantogram pants, old sweatpants`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`off-hand`, $item`familiar scrapbook`],
        [$slot`acc1`, $item`your cowboy boots`],
        [$slot`acc2`, $item`codpiece`],
        [$slot`acc3`, $items`battle broom, Powerful Glove`],
        [$slot`back`, $items`LOV Epaulettes, vampyric cloake`]
    ])).dress();
}
