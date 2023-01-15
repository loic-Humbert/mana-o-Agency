import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { OffersModule } from './offers/offers.module';
import { Offer } from './offers/entities/offer.entity';
import { Company } from './companies/entities/company.entity';
import { ApplyModule } from './apply/apply.module';
import { Apply } from './apply/entities/apply.entity';
import { FetchModule } from 'nestjs-fetch';
import { HttpService } from '@nestjs/axios/dist';

@Module({
  imports: [  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [User, Offer,Company, Apply],
    synchronize: true,
  }), UsersModule, CompaniesModule, OffersModule, ApplyModule 
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
