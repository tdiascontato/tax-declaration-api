// src\declarations\declarations.controller.ts
import { Controller, Post, Body, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { DeclarationsService } from './declarations.service';
import { CreateDeclarationDto } from './dto/create-declaration.dto';

@Controller('declarations')
export class DeclarationsController {
  constructor(private readonly declarationsService: DeclarationsService) {}

  @Post()
  async create(@Body() createDeclarationDto: CreateDeclarationDto) {
    try {
      return await this.declarationsService.create(createDeclarationDto);
    } catch (error) {
      throw new HttpException(
        'Error creating declaration.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('user/:userId')
  async findByUser(@Param('userId') userId: number) {
    try {
      const declarations = await this.declarationsService.findByUser(userId);
      if (!declarations.length) {
        throw new HttpException('No declarations found for this user.', HttpStatus.NOT_FOUND);
      }
      return declarations;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const declaration = await this.declarationsService.findOne(id);
    if (!declaration) {
      throw new HttpException('Declaration not found', HttpStatus.NOT_FOUND);
    }
    return declaration;
  }

  @Get()
  async findAll() {
    return await this.declarationsService.findAll();
  }
}
