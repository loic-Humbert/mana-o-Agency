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


  cityIsFound(cityClient, cityApi) {
    let cityApiName = cityApi.map((city) => city.nom)
    let result = cityApiName.filter(((apiCity) => apiCity === cityClient))
    if (result) {
      return true
    } else {
      return false
    }

  }


  async create(createOfferDto: CreateOfferDto, cityApi) {
    createOfferDto.createdAt = new Date()
    createOfferDto.vue = 0

    if (this.cityIsFound(createOfferDto.city, cityApi)) {
      return this.offersRepository.save(createOfferDto)

    }else {
      return new HttpException('ville   introuvable', 404);

    }

  }

  findAll() {
    return this.offersRepository.find({
      order: {
        createdAt: "ASC",
      },

    })
  }
  async addVue(id) {
    let offerModal = new Offer()
    offerModal.id = id
    offerModal.vue = undefined
    let offerBdd = await this.offersRepository.findOneBy(offerModal)

    if (!offerBdd) {
      return new HttpException('offer  introuvable', 404);
    } else {
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
