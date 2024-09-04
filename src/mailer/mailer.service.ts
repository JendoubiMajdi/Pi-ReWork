import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
    private transporter;

    constructor(){
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user : '',
                pass : '',
            }
        });
    }

    async sendMail(to: string, subject: string, text: string){
        const mailOption = {
            from : 'majdi.jendoubi@esprit.tn',
            to,
            subject,
            text,
        };

        try{
            const info = await this.transporter.sendMail(mailOption);
            console.log('Email sent :',info.response);
        }catch(error){
            console.error('Email sending error', error);
        }
    }
}
