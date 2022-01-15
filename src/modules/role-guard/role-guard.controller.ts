import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { RolesGuard } from '../../common/guards/roles.guard'
import { Roles } from '../../common/decorators/roles.decorator'
import { RoleGuardService } from './role-guard.service'

@ApiBearerAuth()
@ApiTags('role-guard')
// 通過該裝飾器 進行權限控制
@UseGuards(RolesGuard)
@Controller('/role-guard')
export class RoleGuardController {
  constructor(private readonly roleGuardService: RoleGuardService) {}

  // 查询
  @Get()
  @Roles('admin')
  fetch(@Query() { id }): string {
    return this.roleGuardService.fetch(id)
  }
}
