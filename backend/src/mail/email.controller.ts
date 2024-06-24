// src/email/email.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}
  
  @Post('send-email')
  @Public()
  async sendEmail(@Body('to') to: string): Promise<void> {
    if (!to) {
      throw new Error('Recipient email address is missing');
    }
    await this.emailService.sendMail(to);
  }
}
