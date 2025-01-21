// src\declarations\dto\create-declaration.dto.ts
import { IsNotEmpty } from 'class-validator';

export class CreateDeclarationDto {
  @IsNotEmpty()
  year: string;

  @IsNotEmpty()
  data: object;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  status: string;
}
