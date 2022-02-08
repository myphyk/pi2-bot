import {BaseCommandInteraction, Client, MessageEmbed} from "discord.js";
import { Command } from "../Command";

export const Corona: Command = {
    name: "corona",
    description: "Returns information about corona",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = new MessageEmbed()
            .setColor("#00ffff")
            .setTitle("Corona Extra")
            .setDescription("Corona Extra ist eine mexikanische Biermarke, die von der Grupo Modelo gebraut wird. In Mexiko ist Corona das meistverkaufte Bier!");

        await interaction.followUp({
            embeds: [content]
        });
    }
};