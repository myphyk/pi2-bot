import { Client } from "discord.js";
import { readFileSync } from "fs";

import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";


const config = JSON.parse(readFileSync("./local-config.json", "utf8"));
const token = config.token;

console.log("Bot is starting");

const client = new Client ({intents: []});
ready(client);
interactionCreate(client);
client.login(token);