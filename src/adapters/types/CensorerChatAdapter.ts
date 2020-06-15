import { Message, GuildMember } from 'discord.js';
import ChatAdapter from './../ChatAdapter';

export default class BadGuyChatAdapter implements ChatAdapter {

  react(msg: Message): void {
    this.punish(msg);
    msg.delete();
  }

  activates(msg: Message): boolean {
    let line: String = msg.content;
    if (this.isBad(line) && line.includes("dango")) return true;
    return false;
  }

  punish(msg: Message): void {
    if (msg.member == null) return;

    let member: GuildMember | null = msg.member;
    msg.channel.send(member.displayName + " esas cosas no se pueden decir aqui.");
    member.voice.kick();
  }

  isBad(line: String): boolean {
    if (line.includes("odio")) return true;
    if (line.includes("puto")) return true;
    if (line.includes("feo")) return true;
    if (line.includes("maldito")) return true;
    if (line.includes("puta")) return true;
    if (line.includes("mamaguevo")) return true;
    if (line.includes("mamahuevo")) return true;
    return false;
  }

}