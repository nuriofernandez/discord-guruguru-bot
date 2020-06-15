import { Message } from 'discord.js';

export default interface ChatAdapter {

    react(msg: Message): void;

    activates(msg: Message): boolean;

}