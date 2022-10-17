import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToPlain, plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateBountyDto } from './dto/create-bounty.dto';
import { UpdateBountyDto } from './dto/update-bounty.dto';
import { Bounty } from './entities/bounty.entity';

@Injectable()
export class BountyService {
  constructor(
    @InjectRepository(Bounty)
    private bountyRepository: Repository<Bounty>,
  ) {}

  create(createBountyDto: CreateBountyDto) {
    const bounty: Bounty = new Bounty();
    bounty.description = createBountyDto.description;
    bounty.contact = createBountyDto.contact;
    bounty.end = createBountyDto.end;
    bounty.start = createBountyDto.start;
    bounty.reward = createBountyDto.reward;
    bounty.name = createBountyDto.name;
    this.bountyRepository.save(bounty);
  }

  findAll() {
    return this.bountyRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} bounty`;
  }

  update(id: number, updateBountyDto: UpdateBountyDto) {
    return `This action updates a #${id} bounty`;
  }

  remove(id: number) {
    return `This action removes a #${id} bounty`;
  }
}
