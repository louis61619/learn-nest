import { registerAs } from '@nestjs/config'
import { join } from 'path'

export default registerAs('database', () => ({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_DATABASE,
  database: process.env.MYSQL_PASSWORD,
  entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')],
  synchronize: true,
}))
