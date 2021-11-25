import { myClass } from "kolmafia";
import { $class, $item, $skill, have, StrictMacro } from "libram";

export default class Macro extends StrictMacro {
    delevel(): Macro {
        return this.trySkill($skill`Curse of Weaksauce`)
            .trySkill($skill`Micrometeorite`)
            .tryItem($item`Time-Spinner`)
            .trySkill($skill`Summon Love Gnats`);
    }

    static delevel(): Macro {
        return new Macro().delevel();
    }

    candyblast(): Macro {
        return this.externalIf(
            have($skill`Candyblast`),
            Macro.while_(
                '!match "Hey, some of it is even intact afterwards!"',
                Macro.trySkill($skill`Candyblast`)
            )
        );
    }

    static candyblast(): Macro {
        return new Macro().candyblast();
    }

    easyFight(): Macro {
        return this.trySkill($skill`Extract`).trySkill($skill`Sing Along`);
    }
    static easyFight(): Macro {
        return new Macro().easyFight();
    }

    defaultKill(): Macro {
        return this.delevel()
            .easyFight()
            .externalIf(
                myClass() === $class`Sauceror`,
                Macro.skill($skill`Saucegeyser`).repeat(),
                Macro.attack().repeat()
            );
    }

    static defaultKill(): Macro {
        return new Macro().defaultKill();
    }
}
