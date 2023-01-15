import { Get, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Http2Server } from 'http2';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Offer } from './entities/offer.entity';
import axios from "axios"
import { FetchService } from 'nestjs-fetch';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
@Injectable()
export class OffersService {

  constructor(
    @InjectRepository(Offer)
    private readonly offersRepository: Repository<Offer>,

  ) { }


  async create(createOfferDto: CreateOfferDto) {
    createOfferDto.createdAt = new Date()
    return this.offersRepository.save(createOfferDto)
  }

  findAll() {
    return this.offersRepository.find({
      order: {
        createdAt: "ASC",
      },

    })
  }
  async addVue(id){
    let offerModal = new Offer()
    offerModal.id = id 
    offerModal.vue = undefined
    let offerBdd = await this.offersRepository.findOneBy(offerModal)

    if(!offerBdd){
      return new HttpException('offer  introuvable', 404);
    }else {
      offerModal = offerBdd
      offerModal.vue = offerBdd.vue + 1
      return this.offersRepository.save(offerModal)
    }
  }

  findOne(id: number) {
    let offerModal = new Offer()
    offerModal.id = id
    offerModal.vue = undefined
    return this.offersRepository.findOneBy(offerModal);
  }

  update(id: number, updateOfferDto: UpdateOfferDto) {
    return `This action updates a #${id} offer`;
  }

  remove(id: number) {
    return `This action removes a #${id} offer`;
  }
}
