import { IsString } from 'class-validator';

export class CreateCarDTO {
  @IsString({ message: 'The input sends is not valid' })
  readonly brand: string;

  @IsString()
  readonly name: string;
}
