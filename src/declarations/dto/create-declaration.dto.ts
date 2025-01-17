import { IsNotEmpty, IsNumber, IsJSON } from 'class-validator';

export class CreateDeclarationDto {
  @IsNumber()
  year: number;

  @IsNotEmpty()
  @IsJSON()
  data: Record<string, any>;

  @IsNotEmpty()
  userId: number;
}
