import { Module } from '@nestjs/common';
import { ApplyService } from './apply.service';
import { ApplyController } from './apply.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apply } from './entities/apply.entity';
import { AppModule } from 'src/app.module';
import { forwardRef } from '@nestjs/common/utils';

@Module({
  imports: [TypeOrmModule.forFeature([Apply]), forwardRef(() =>  AppModule)],
  controllers: [ApplyController],
  providers: [ApplyService],
  exports : [ApplyService]

})
export class ApplyModule {}
