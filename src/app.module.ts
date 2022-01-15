// import * as path from 'path'
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ScheduleModule } from '@nestjs/schedule'
// import { MailerModule } from '@nest-modules/mailer'
// import { PugAdapter } from '@nest-modules/mailer/dist/adapters/pug.adapter'
import { LoggerMiddleware } from './common/middleware/logger.middleware'
import { HelloModule } from './modules/hello/hello.module'
import { ExceptionModule } from './modules/exception/exception.module'
import { RoleGuardModule } from './modules/role-guard/role-guard.module'
import { EmailModule } from './modules/email/email.module'
import { AuthModule } from './modules/auth/auth.module'
import { UsersModule } from './modules/users/users.module'
import { TasksModule } from './tasks/tasks.module'
import { AudioModule } from './jobs/audio/audio.module'
import { AlbumModule } from './modules/album/album.module'

// config
import emailConfig from './config/email.config'
import databaseConfig from './config/database.config'
import fileConfig from './config/file.config'

// 路由模塊
@Module({
  // 子路由
  imports: [
    // 如果要在子模塊中引用全局變數
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true, // no need to import into other modules
      load: [emailConfig, databaseConfig, fileConfig],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    // MailerModule.forRootAsync({
    //   useFactory: () => ({
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
    //       dir: path.join(__dirname, './templates/email'),
    //       adapter: new PugAdapter(),
    //       options: {
    //         strict: true,
    //       },
    //     },
    //   }),
    // }),
    // 上傳
    AlbumModule,
    // 隊列任務
    AudioModule,
    // 定時任務
    // ScheduleModule.forRoot(),
    // TasksModule,
    AuthModule,
    HelloModule,
    ExceptionModule,
    RoleGuardModule,
    EmailModule,
    UsersModule,
  ],
})
export class AppModule {
  // 為該模塊添加中間件
  configure(consumer: MiddlewareConsumer) {
    // 添加中間件
    consumer
      .apply(LoggerMiddleware)
      // 排除
      .exclude({ path: 'hello', method: RequestMethod.POST })
      // 對應的路由
      .forRoutes('hello')
  }
}
