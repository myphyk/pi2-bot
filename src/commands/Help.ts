import {BaseCommandInteraction, Client, MessageEmbed} from "discord.js";
import { Command } from "../Command";
import { Commands } from "../Commands";

export const Help: Command = {
    name: "help",
    description: "Returns a list of all possible commands",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = new MessageEmbed()
            .setColor("#00ffff")
            .setTitle("Bot Commands:");
        for (let i = 0; i < Commands.length; i++) {
            content.addField(Commands[i].name, Commands[i].description);
        }
        await interaction.followUp({
            embeds: [content]
        });
    }
};