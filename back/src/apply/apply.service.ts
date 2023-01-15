import { HttpException, Injectable } from '@nestjs/common';
import { Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Offer } from 'src/offers/entities/offer.entity';
import { Repository } from 'typeorm';
import { CreateApplyDto } from './dto/create-apply.dto';
import { UpdateApplyDto } from './dto/update-apply.dto';
import { Apply } from './entities/apply.entity';



@Injectable()
export class ApplyService {
  constructor(
    @InjectRepository(Apply)
    private readonly offersRepository: Repository<Apply>,
  ) { }

  async create(offerId, createApplyDto: CreateApplyDto, filePath) {
    let applyModel = new Apply()
    let offerModel = new Offer()
    applyModel.email = "default"
    applyModel.lastName = "default"
    applyModel.firstName = "default"
    applyModel.file
    offerModel.id = offerId
    applyModel.offer = offerModel
    applyModel.file = filePath
    
    return   await this.offersRepository.save(applyModel)
    
    

  }



  findAll() {
    return `This action returns all apply`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apply`;
  }

  async update(id: number,createApplyDto) {
    const apply = await this.offersRepository.findOneBy({ id });
    let applyModel = new Apply()
    applyModel.email = createApplyDto.email
    applyModel.firstName = createApplyDto.firstName
    applyModel.lastName = createApplyDto.lastName
    applyModel.file = apply.file
    applyModel.id = id



    if (!apply) {
      return new HttpException('apply  introuvable', 404);
    } else {

      return this.offersRepository.save(applyModel).then((apply) => {
        return apply;
      });
    }

  }

  remove(id: number) {
    return `This action removes a #${id} apply`;
  }
}
