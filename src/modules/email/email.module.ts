import { Module } from '@nestjs/common'
import { MailerModule } from '@nestjs-modules/mailer'
import { ConfigService } from '@nestjs/config'
import { EmailController } from './email.controller'
import { EmailService } from './email.service'

// @Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      // useFactory: (config: ConfigService) => {
      //   console.log(config.get('email'))
      //   return {
      //     transport: {
      //       host: 'smtp.163.com',
      //       port: '465',
      //       auth: {
      //         user: 'renny61619@163.com',
      //         pass: 'FPWAQDXFBYRCIJPG',
      //       },
      //     },
      //     defaults: {
      //       from: '"nest-modules" <modules@nestjs.com>',
      //     },
      //     // 靜態模板要在nest-cli中先進行設置
      //     template: {
      //       // dir: __dirname + '/templates',
      //       dir: join(__dirname, '../../templates/email'),
      //       adapter: new PugAdapter(),
      //       options: {
      //         strict: true,
      //       },
      //     },
      //   }
      // },
      useFactory: (config: ConfigService) => {
        return config.get('email')
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
