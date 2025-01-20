// src\declarations\dto\update-declaration.dto.ts
import { IsOptional, IsJSON, IsString } from 'class-validator';

export class UpdateDeclarationDto {
  @IsOptional()
  @IsString()
  year?: string;

  @IsOptional()
  @IsJSON()
  data?: object;

  @IsOptional()
  @IsString()
  status?: string; // e.g., 'draft' or 'submitted'
}
