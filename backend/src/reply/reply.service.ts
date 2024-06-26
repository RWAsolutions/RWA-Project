import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class ReplyService {

  constructor(private manager: EntityManager) { }

  async getReplies(): Promise<any> {
    let replies = await this.manager.query(`SELECT * FROM Reply`);
    return replies;
  }

  createReply(data: any): any {
    return this.manager.query(`
      INSERT INTO Reply (content, userID, notificationID, dateAdded) 
      VALUES ('${data.content}', ${data.userID}, ${data.notificationID}, '${data.dateAdded}');
`);
  }
}

