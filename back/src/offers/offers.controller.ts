import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { HttpService } from '@nestjs/axios/dist';
import { AxiosResponse } from 'axios';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService,
  ) { }

  @Post()
  create(@Body() createOfferDto: CreateOfferDto) {
    return this.offersService.create(createOfferDto);
  }

  @Get()
  findAll() {
    return this.offersService.findAll();
  }

  @Put(":id")
  addVue(@Param('id') id: number) {
    return this.offersService.addVue(id);
  }
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offersService.findOne(+id);
  }




  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto) {
    return this.offersService.update(+id, updateOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offersService.remove(+id);
  }
}
