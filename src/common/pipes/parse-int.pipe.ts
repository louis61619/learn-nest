import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common'

// 將string透過管道轉換成number類型
@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  async transform(value: string) {
    const val = parseInt(value, 10)
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed')
    }
    return val
  }
}
