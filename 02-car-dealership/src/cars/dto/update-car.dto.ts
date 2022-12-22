import { IsString, IsOptional } from 'class-validator';

export class UpdateCarDTO {
  @IsOptional()
  @IsString()
  readonly id?: string;

  @IsOptional()
  @IsString({ message: 'The input sends is not valid' })
  readonly brand?: string;

  @IsOptional()
  @IsString()
  readonly name?: string;
}
