import { CommandInteraction, Client } from "discord.js";
import { Command } from "src/Command";

export const Test: Command = {
    name: "test",
    description: "Test how this works",
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Apparently it works.";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};