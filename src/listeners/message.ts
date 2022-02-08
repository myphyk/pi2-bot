import {Client, Message} from "discord.js";
import help from "../messageCommands/Help";

export default (client: Client): void => {
    client.on("messageCreate", async (msg: Message) => {
        if (!msg.author.bot && msg.content.charAt(0) === "*") {
            const command = msg.content.split(" ");
            switch (command[0]) {
                case "*help":
                    await help(client, msg);
                    break;
            }
        }
    });
}