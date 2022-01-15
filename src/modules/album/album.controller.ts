import { Controller, Post, UploadedFile, UseInterceptors, Get, Res } from '@nestjs/common'
import { Response } from 'express'
import { FileInterceptor } from '@nestjs/platform-express'
import { AlbumService } from './album.service'

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    this.albumService.upload(file)
    return true
  }

  @Get('export')
  async downloadAll(@Res() res: Response) {
    const { filename, tarStream } = await this.albumService.downloadAll()
    // 設置請求頭
    res.setHeader('Content-Type', 'application/octet-stream')
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`)
    // 使用流進行傳輸
    tarStream.pipe(res)
  }
}
