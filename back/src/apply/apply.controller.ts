import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { Put, UploadedFile, UploadedFiles } from '@nestjs/common/decorators';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { last } from 'rxjs';
import { ApplyService } from './apply.service';
import { CreateApplyDto } from './dto/create-apply.dto';

import { UpdateApplyDto } from './dto/update-apply.dto';


@Controller('apply')
export class ApplyController {
  constructor(private readonly applyService: ApplyService) { }

  @Post(':offerId/upload')
  @UseInterceptors(FileInterceptor('file',
    {
      storage: diskStorage({
        destination: './cv',

        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          return cb(null, `${randomName}${extname(file.originalname)}`)
        }
      })
    }
  )
  )
  uploadCv(@Param('offerId') offerId: number, @Body() createApplyDto: CreateApplyDto, @UploadedFile() file) {
    return this.applyService.create(offerId, createApplyDto, `http://localhost:3000/` + file.path)
  }


  @Get()
  findAll() {
    return this.applyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applyService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createApplyDto: CreateApplyDto,) {
    return this.applyService.update(+id, createApplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applyService.remove(+id);
  }
}
