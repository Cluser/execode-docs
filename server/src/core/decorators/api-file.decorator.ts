import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { diskStorage } from 'multer';

export function ApiFile(path: string, allowedExtensions: string[]) {
  return applyDecorators(
    UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: function (req, file, cb) {
                var fs = require('fs');
                var dir = `uploads/${path}/`;
                
                if (!fs.existsSync(dir)){
                    fs.mkdirSync(dir, { recursive: true });
                }
                cb(null, `uploads/${path}/`)
            },
            filename: function (req, file, cb) {
                var date = new Date();
                var dateString = date.getUTCFullYear() + ("0" + (date.getUTCMonth()+1)).slice(-2) + ("0" + date.getUTCDate()).slice(-2) +
                                                         ("0" + date.getUTCHours()).slice(-2) + ("0" + date.getUTCMinutes()).slice(-2) +
                                                         ("0" + date.getUTCSeconds()).slice(-2);
                cb(null, Buffer.from(file.originalname.split('.').join(' ' + dateString + '.'), 'latin1').toString('utf8'))
            }
        }),
        fileFilter: (req, file, cb) => {
            // if (!allowedExtensions.includes(file.mimetype)) {
            //   return cb(new Error('file is not allowed'), null)
            // }
        
            cb(null, true)
          }
    })),
    ApiConsumes('multipart/form-data'),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          file: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    }),
  );
  
}
