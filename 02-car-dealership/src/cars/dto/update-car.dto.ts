import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateCarDTO {
  @IsNotEmpty()
  @IsString()
  readonly id?: string;

  @IsNotEmpty()
  @IsString({ message: 'The input sends is not valid' })
  readonly brand?: string;

  @IsNotEmpty()
  @IsString()
  readonly name?: string;
}
