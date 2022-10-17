import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateBountyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsEmail()
  contact: string;

  @IsNotEmpty()
  start: Date;

  @IsNotEmpty()
  end: Date;

  @IsNotEmpty()
  reward: number;
}
