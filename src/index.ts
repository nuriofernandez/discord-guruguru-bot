import Discord from "discord.js";
import * as settings from "./settings.json";

import ChatAdapter from './ChatAdapter'
import ChatAdapterFactory from './ChatAdapterFactory'

const client = new Discord.Client();

client.on('ready', () => {
    if (client.user == null) return;
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    let adapters: Array<ChatAdapter> = ChatAdapterFactory.getAdapter(msg);
    adapters.forEach(adapter => adapter.react(msg));

});

client.login(settings.token);