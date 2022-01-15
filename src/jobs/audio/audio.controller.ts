import { InjectQueue } from '@nestjs/bull'
import { Controller, Post } from '@nestjs/common'
import { Queue } from 'bull'

// 利用redis實現一個轉碼mp3的隊列
@Controller('audio')
export class AudioController {
  constructor(@InjectQueue('audio') private readonly audioQueue: Queue) {}

  @Post('transcode')
  async transcode() {
    await this.audioQueue.add(
      'transcode',
      {
        file: 'audio.mp3',
      },
      { delay: 1000 },
    )
  }
}
