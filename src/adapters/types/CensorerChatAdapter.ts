import { Message, GuildMember } from 'discord.js';
import * as settings from './../../settings.json';

import ChatAdapter from '../ChatAdapter';

export default class CensorerChatAdapter implements ChatAdapter {

  static censoredWords: Array<string> = settings.adapters.censorer.words;
  static warnMessage: string = settings.adapters.censorer.message;

  react(msg: Message): void {
    this.punish(msg);
    msg.delete();
  }

  activates(msg: Message): boolean {
    return this.isCensored(msg.content);
  }

  punish(msg: Message): void {
    if (msg.member == null) return;

    let member: GuildMember | null = msg.member;

    let message: string = CensorerChatAdapter.warnMessage.replace("%name%", member.displayName)
    msg.channel.send(message);
  }

  isCensored(line: String): boolean {
    let matches: Array<String> = CensorerChatAdapter.censoredWords.filter(word => line.includes(word));
    return matches.length != 0;
  }

}