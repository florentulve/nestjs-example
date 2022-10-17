import { PartialType } from '@nestjs/mapped-types';
import { CreateBountyDto } from './create-bounty.dto';

export class UpdateBountyDto extends PartialType(CreateBountyDto) {}
