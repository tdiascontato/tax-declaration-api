// src\declarations\dto\create-declaration.dto.ts
import { IsNotEmpty, IsNumber, IsJSON } from 'class-validator';

export class CreateDeclarationDto {
  @IsNotEmpty()
  year: string;

  @IsNotEmpty()
  @IsJSON()
  data: object;

  @IsNotEmpty()
  userId: number;
}
