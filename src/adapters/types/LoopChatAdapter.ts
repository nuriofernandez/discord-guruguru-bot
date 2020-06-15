import { Message, GuildMember } from 'discord.js';
import ChatAdapter from './../ChatAdapter';

export default class LoopChatAdapter implements ChatAdapter {

  react(msg: Message): void {
    this.punish(msg);
    msg.react("🤣");
  }

  activates(msg: Message): boolean {
    let line: String = msg.content;
    if (line.includes("guru") && line.includes("mareame")) return true;
    return false;
  }

  punish(msg: Message): void {
    if (msg.member == null) return;

    let member: GuildMember | null = msg.member;

    this.setTimedInterval(() => {
      console.log("It's working!");
      let channel: string = member?.voice.channel?.id == "722067725530169394" ? "722067685118181378" : "722067725530169394";
      member?.voice.setChannel(channel);
    }, 2000, 30000);

  }

  setTimedInterval(callback: any, delay: number, timeout: number): void {
    var id = setInterval(callback, delay);
    setTimeout(() => {
      clearInterval(id);
    }, timeout);
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

}