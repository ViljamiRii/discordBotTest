import { Client, ClientOptions } from "discord.js";
import { token } from '../config.json';
import ready from "./eventListeners/ready"
import interactionCreate from "./eventListeners/interactionCreate";

console.log("Starting up...")

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(token);
