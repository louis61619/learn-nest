import { join } from 'path'
import { registerAs } from '@nestjs/config'
import { diskStorage } from 'multer'

export default registerAs('file', () => ({
  root: join(__dirname, '../uploads'),
  storage: diskStorage({
    destination: join(__dirname, `../uploads/${new Date().toLocaleDateString()}`),
    filename: (req, file, cb) => {
      const filename = `${new Date().getTime()}.${file.mimetype.split('/')[1]}`
      return cb(null, filename)
    },
  }),
}))
