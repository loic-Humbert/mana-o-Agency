import { forwardRef, Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { Offer } from './entities/offer.entity';
import { FetchModule, FetchService } from 'nestjs-fetch';
import { HttpModule, HttpService } from '@nestjs/axios/dist';

@Module({
  imports: [TypeOrmModule.forFeature([Offer]), forwardRef(() => OffersModule), HttpModule],
  controllers: [OffersController],
  providers: [OffersService],
  exports: [OffersService]

})
export class OffersModule { }
