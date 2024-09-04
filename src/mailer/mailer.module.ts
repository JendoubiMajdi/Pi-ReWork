import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service'; // Adjust the path as necessary

@Module({
  providers: [MailerService],
  exports: [MailerService], // Export MailerService
})
export class MailerModule {}
