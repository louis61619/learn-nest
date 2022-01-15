import { IsInt, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

// 不太理解這塊是幹嘛的
// 感覺是定義通用的類型 透過插件機制進行加載
export class CreateCatDto {
  @IsString()
  readonly name: string

  @IsInt()
  readonly age: number

  @IsString()
  readonly breed: string
}

enum RoleEnum {
  name = 'name',
}

export class CreateUserDto {
  @ApiProperty()
  email: string

  @ApiProperty()
  password: string

  @ApiProperty({ enum: RoleEnum, default: [], isArray: true })
  roles: RoleEnum[] = []

  @ApiProperty({ required: false, default: true })
  isEnabled?: boolean = true
}
