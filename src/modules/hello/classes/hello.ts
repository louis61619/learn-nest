import { ApiProperty } from '@nestjs/swagger'

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}
// 定義swagger回傳的類
export class Hello {
  @ApiProperty({ example: 'Kitty', description: 'The name of the Cat' })
  name: string

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  age: number

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  breed: string

  @ApiProperty({ enum: UserRole })
  role: UserRole
}

export class GoodBye {
  @ApiProperty({ example: 'Kitty', description: 'The name of the Cat' })
  name: string

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  age: number

  @ApiProperty({ example: 'I am Louis', description: 'The message' })
  message: string

  @ApiProperty({ example: false, description: 'The message' })
  isEnabled: boolean
}
