import { Message } from 'discord.js';
import ChatAdapter from './ChatAdapter';

export default class DangoChatAdapter implements ChatAdapter {

  react(msg: Message): void {
    msg.react("🍡");
  }

  activates(msg: Message): boolean {
    let line : String = msg.content;
    if(line.includes("dango")) return true;
    if(line.includes("guru")) return true;
    if(line.includes("clannad")) return true;
    return false;
  }

}