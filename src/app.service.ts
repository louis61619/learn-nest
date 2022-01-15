import { Injectable } from '@nestjs/common'

// 資料庫層
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }
}
