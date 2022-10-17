import { Module } from '@nestjs/common';
import { BountyService } from './bounty.service';
import { BountyController } from './bounty.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bounty } from './entities/bounty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bounty])],
  controllers: [BountyController],
  providers: [BountyService],
})
export class BountyModule {}
