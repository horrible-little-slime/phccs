import { $item, $skill, have, Macro } from "libram";

export const delevel = Macro.trySkill($skill`Curse of Weaksauce`)
    .trySkill($skill`Micrometeorite`)
    .tryItem($item`Time-Spinner`)
    .trySkill($skill`Summon Love Gnats`);

export const candyblast = Macro.externalIf(
    have($skill`Candyblast`),
    Macro.while_(
        '!match "Hey, some of it is even intact afterwards!"',
        Macro.trySkill($skill`Candyblast`)
    )
);

export const easyFight = Macro.trySkill($skill`Extract`).trySkill($skill`Sing Along`);
export const defaultKill = Macro.step(delevel).step(easyFight).attack().repeat();
