import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

const csmaps:string[] = ["Inferno", "Overpass", "Train", "Mirage", "Dust 2"];

function randomIntFromInterval(min:number, max:number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const CsMap: Command = {
    name: "csmap",
    description: "description",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        let rndInt = randomIntFromInterval(0, csmaps.length);
        const content = csmaps[rndInt];
        await interaction.followUp({
            content
        });
    }
};
