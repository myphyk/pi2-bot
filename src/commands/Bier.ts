import {BaseCommandInteraction, Client, MessageAttachment, MessageEmbed} from "discord.js";
import { Command } from "../Command";

export const Bier: Command = {
    name: "bier",
    description: "Der Bot schenkt dir ein Bierchen",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const attachment = new MessageAttachment("../pictures/dasBier.jpg", "dasBier.jpg");
        const content = new MessageEmbed()
            .setColor("#00ffff")
            .setTitle("Hold my Corona")
            .setImage("attachment://dasBier.jpg");
        await interaction.followUp({
            embeds: [content]
        });
    }
};