import { Message } from 'discord.js';

import DangoChatAdapter from './types/DangoChatAdapter';
import CensorerChatAdapter from './types/CensorerChatAdapter';
import LoopChatAdapter from './types/LoopChatAdapter';
import ChatAdapter from './ChatAdapter';

export default class ChatAdapterFactory {

    static adapters: Array<ChatAdapter> = [
        new DangoChatAdapter(),
        new CensorerChatAdapter(),
        new LoopChatAdapter()
    ];

    static getAdapter(msg: Message): Array<ChatAdapter> {
        return this.adapters.filter(adapter => adapter.activates(msg));
    }

}