import { join } from 'path'
import { registerAs } from '@nestjs/config'
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter'

export default registerAs('email', () => {
  // console.log(process.env.MAIL_HOST)
  return {
    // transport: {
    //   host: 'smtp.163.com',
    //   port: '465',
    //   auth: {
    //     user: 'renny61619@163.com',
    //     pass: 'FPWAQDXFBYRCIJPG',
    //   },
    // },
    // defaults: {
    //   from: '"nest-modules" <modules@nestjs.com>',
    // },
    transport: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_POST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    },
    defaults: {
      from: `"No Reply" <${process.env.MAIL_FROM}>`,
    },
    // 靜態模板要在nest-cli中先進行設置
    template: {
      dir: join(__dirname, '../templates/email'),
      adapter: new PugAdapter(),
      options: {
        strict: true,
      },
    },
  }
})
