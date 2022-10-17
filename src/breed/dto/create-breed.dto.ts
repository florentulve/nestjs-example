import { IsNotEmpty } from 'class-validator';

export class CreateBreedDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}
