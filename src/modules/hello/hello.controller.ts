import { Controller, Get, Post, Patch, Query, Delete, Body, Param, Headers } from '@nestjs/common'
import { ApiResponse, ApiTags, ApiQuery, ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger'
import { HelloService } from './hello.service'

import { Hello, UserRole, GoodBye } from './classes/hello'

@ApiBearerAuth()
@ApiTags('hello')
// 子路由名稱
@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // 透過裝飾器注入
  @Get()
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'role', enum: UserRole })
  @ApiQuery({ name: 'id', type: Number })
  // 定義回傳的描述和範例
  @ApiResponse({
    status: 200,
    description: 'get hello response ...',
    type: Hello,
  })
  fetch(@Query() { id, name, role }, @Headers('token') token): string {
    console.log(token)
    return this.helloService.fetch(id, name, role)
  }

  // 創建
  // body 可以同時對form-urlcode進行解析
  @Post()
  // 描述body中的要帶的東西
  @ApiBody({ description: '送出更新內容', type: GoodBye })
  // @ApiResponse({
  //   status: 200,
  //   description: 'get hello response ...',
  //   type: Hello,
  // })
  save(@Body() { message }): string {
    return this.helloService.save(message)
  }

  // 更新
  @Patch(':id')
  // param是url網址中的參數
  @ApiParam({ name: 'id' })
  update(@Param() { id }, @Body() { message }): string {
    return this.helloService.update(id, message)
  }

  // 刪除
  @Delete()
  remove(@Query() { id }): string {
    return this.helloService.remove(id)
  }
}
