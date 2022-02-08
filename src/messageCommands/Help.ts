import {Client, Message, MessageEmbed} from "discord.js";
import COMMANDS from "./messageCommandList";

export default async function run(client: Client, msg: Message) {
    const content = new MessageEmbed()
        .setColor("#00ffff")
        .setTitle("Bot Commands:")
        .setDescription("This only shows the \"*\" commands of this Bot! For other commands use \"/help\"!");
    for (let i = 0; i < COMMANDS.length; i++) {
        content.addField(COMMANDS[i].name, COMMANDS[i].description);
    }
    await msg.reply({
        embeds: [content]
    });
}