import { Injectable } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  sendEmail() {
    this.mailerService.sendMail({
      to: 'louis61619@gmail.com',
      // from: 'renny61619@163.com',
      // subject: 'Testing Nest MailerModule ✔',
      subject: 'Walker Lee Love You ✔',
      // html: '<b>Welcome Frost!</b>',
      template: './welcome',
    })
  }
}
