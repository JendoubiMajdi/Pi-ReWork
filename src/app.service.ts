import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

 /* public example(): void {
    this
      .mailerService
      .sendMail({
        to: 'user@gmail.com', // List of receivers email address
        from: 'user@outlook.com', // Senders email address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcome</b>', // HTML body content
      })
      .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  public example2(): void {
    this
      .mailerService
      .sendMail({
        to: 'user@gmail.com', // List of receivers email address
        from: 'user@outlook.com', // Senders email address
        subject: 'Testing Nest Mailermodule with template ✔',
        template: 'index', // The `.pug` or `.hbs` extension is appended automatically.
        context: {  // Data to be sent to template engine.
          code: 'cf1a3f828287',
          username: 'john doe',
        },
      })
      .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      });
  }*/
}
