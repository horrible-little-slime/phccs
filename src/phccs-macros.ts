import { Macro } from "libram";

export const delevel = Macro.skill("curse of weaksauce")
    .skill("micrometeor")
    .tryItem("time-spinner")
    .skill("summon love gnats");

export const candyblast = Macro.while_(
    '!match "Hey, some of it is even intact afterwards!"',
    Macro.skill("candyblast")
);

export const easyFight = Macro.skill("extract").skill("sing along");
export const defaultKill = Macro.step(delevel).step(easyFight).attack().repeat();
