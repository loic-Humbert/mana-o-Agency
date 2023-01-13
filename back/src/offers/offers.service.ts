import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OffersService {

  constructor(
    @InjectRepository(Offer)
    private readonly offersRepository: Repository<Offer>,
  ) { }


  create(createOfferDto: CreateOfferDto) {
    return this.offersRepository.save(createOfferDto)
  }

  findAll() {
    return this.offersRepository.find();
  }

  findOne(id: number) {
    let offerModal = new Offer()
    offerModal.id = id
    return this.offersRepository.findOneBy(offerModal);
  }

  update(id: number, updateOfferDto: UpdateOfferDto) {
    return `This action updates a #${id} offer`;
  }

  remove(id: number) {
    return `This action removes a #${id} offer`;
  }
}
