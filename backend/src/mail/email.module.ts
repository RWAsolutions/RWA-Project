// src/app.module.ts
import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';


@Module({
  imports: [],
  controllers: [ EmailController ],
  providers: [ EmailService ],
})
export class EmailModule {}
