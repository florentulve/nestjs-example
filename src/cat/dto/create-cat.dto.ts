import { IsNotEmpty } from 'class-validator';
import { Bounty } from 'src/bounty/entities/bounty.entity';

export class CreateCatDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  bounties: string[];
}
