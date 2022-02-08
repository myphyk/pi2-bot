import { Command } from "./Command";
import {Corona} from "./commands/Corona";
import {Help} from "./commands/Help";
import {CsMap} from "./commands/CsMap";
import {Bier} from "./commands/Bier";

export const Commands: Command[] = [Help, Corona, CsMap, Bier];