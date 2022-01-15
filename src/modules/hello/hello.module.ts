import { Module } from '@nestjs/common'
import { HelloController } from './hello.controller'
import { HelloService } from './hello.service'

@Module({
  imports: [],
  // 控制層 寫邏輯
  controllers: [HelloController],
  // 資料庫層 寫sql查詢
  providers: [HelloService],
})
export class HelloModule {}
