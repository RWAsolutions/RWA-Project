import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReplyService } from './reply.service';

@Controller('replies')
export class ReplyController {

  constructor(private replyService: ReplyService) { }

  @Get()
  async getReplies(): Promise<any> {
    return await this.replyService.getReplies();
  }

  @Post()
  async createReply(@Body() data: any): Promise<any> {
    return await this.replyService.createReply(data);
  }
}

