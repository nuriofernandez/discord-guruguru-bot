import DangoChatAdapter from './DangoChatAdapter';
import BadGuyChatAdapter from './BadGuyChatAdapter';
import LoopChatAdapter from './LoopChatAdapter';
import ChatAdapter from './ChatAdapter';
import { Message } from 'discord.js';

export default class ChatAdapterFactory {

    static adapters: Array<ChatAdapter> = [
        new DangoChatAdapter(),
        new BadGuyChatAdapter(),
        new LoopChatAdapter()
    ];

    static getAdapter(msg: Message): Array<ChatAdapter> {
        return this.adapters.filter(adapter => adapter.activates(msg));
    }

}