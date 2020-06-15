import { Message, GuildMember, Channel } from 'discord.js';
import * as settings from './../../settings.json';

import ChatAdapter from './../ChatAdapter';

export default class LoopChatAdapter implements ChatAdapter {

  static channels: Array<string> = settings.adapters.loop.channels;

  react(msg: Message): void {
    let member: GuildMember | null = msg.member;
    if (member == null) return;

    this.startMoving(member);
    msg.react("🤣");
  }

  activates(msg: Message): boolean {
    let line: String = msg.content;
    if (line.includes("guru") && line.includes("mareame")) return true;
    return false;
  }

  startMoving(member: GuildMember): void {
    this.setTimedInterval(() => {
      let channel: string | null = this.getRandomChannel(member);
      if (channel == null) return;
      member?.voice.setChannel(channel);
    }, 2000, 30000);

  }

  getRandomChannel(member: GuildMember): string | null {
    if (LoopChatAdapter.channels.length == 0) return null;
    if (LoopChatAdapter.channels.length <= 1) return LoopChatAdapter.channels[0];

    let randomInt: number = this.getRandomInt(LoopChatAdapter.channels.length);
    let randomChannel: string = LoopChatAdapter.channels[randomInt];

    let currentChannel: string | undefined = member?.voice.channel?.id;
    return (randomChannel == currentChannel) ? this.getRandomChannel(member) : randomChannel;
  }

  setTimedInterval(callback: any, delay: number, timeout: number): void {
    var id = setInterval(callback, delay);
    setTimeout(() => clearInterval(id), timeout);
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

}