import { Client } from "discord.js";
import {Commands} from "../Commands";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands, "705036646315196507");
        await client.user.setActivity("/help", { type: "LISTENING"});

        console.log(`${client.user.username} is online`);
    });
};