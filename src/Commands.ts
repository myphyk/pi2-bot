import { Command } from "./Command";
import {Corona} from "./slashCommands/Corona";
import {Help} from "./slashCommands/Help";
import {CsMap} from "./slashCommands/CsMap";
import {Bier} from "./slashCommands/Bier";

export const Commands: Command[] = [Help, Corona, CsMap, Bier];