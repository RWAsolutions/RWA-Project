// src/email/email.service.ts

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';

@Injectable()
export class EmailService {
  private transporter;
  private emailBody: string;

  constructor() {
    this.emailBody = fs.readFileSync('./src/mail/email.template.txt', 'utf8').trim();

    this.transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', 
      port: 587, 
      secure: false,
      auth: {
        user: 'rwa.solutions@outlook.com',
        pass: 'secretPassword',
      },
    });
  }

  async sendMail(to: string): Promise<void> {
    const mailOptions = {
      from: '"RWAsolutions" <rwa.solutions@outlook.com>',
      to: to,
      subject: 'Merlin Password Recovery', 
      text: this.emailBody, 
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
