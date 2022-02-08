import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const EmptyCommand: Command = {
    name: "name",
    description: "description",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = "test";
        await interaction.followUp({
            content
        });
    }
};