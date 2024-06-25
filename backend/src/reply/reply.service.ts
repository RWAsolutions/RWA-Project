import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class ReplyService {

  constructor(private manager: EntityManager) { }

  // TODO: need to get notification id from the request
  async getReplies(): Promise<any> {
    let replies = await this.manager.query(`SELECT * FROM Reply`);
    return replies;
  }
}
