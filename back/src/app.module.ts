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

@Module({
  imports: [  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [User, Offer,Company],
    synchronize: true,
  }), UsersModule, CompaniesModule, OffersModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
