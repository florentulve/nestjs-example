import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BountyService } from './bounty.service';
import { CreateBountyDto } from './dto/create-bounty.dto';
import { UpdateBountyDto } from './dto/update-bounty.dto';

@Controller('bounty')
export class BountyController {
  constructor(private readonly bountyService: BountyService) {}

  @Post()
  create(@Body() createBountyDto: CreateBountyDto) {
    return this.bountyService.create(createBountyDto);
  }

  @Get()
  findAll() {
    return this.bountyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bountyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBountyDto: UpdateBountyDto) {
    return this.bountyService.update(+id, updateBountyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bountyService.remove(+id);
  }
}
