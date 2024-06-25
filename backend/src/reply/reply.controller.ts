import { Body, Controller, Get } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { EntityManager } from 'typeorm';

@Controller('replies')
export class ReplyController {

  constructor(private replyService: ReplyService) { }

  @Get()
  async getReplies(): Promise<any> {
    return await this.replyService.getReplies();
  }
}
