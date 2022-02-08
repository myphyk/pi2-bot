import {Client, Intents} from "discord.js";
import { readFileSync } from "fs";

import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import message from "./listeners/message";


const config = JSON.parse(readFileSync("./local-config.json", "utf8"));
const token = config.token;

console.log("Bot is starting");

const client = new Client ({intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]});
ready(client);
interactionCreate(client);
message(client);
void client.login(token);
