// src\declarations\declarations.controller.ts
import { Controller, Post, Body, Get, Param, HttpException, HttpStatus, Patch, Delete } from '@nestjs/common';
import { DeclarationsService } from './declarations.service';
import { CreateDeclarationDto } from './dto/create-declaration.dto';
import { UpdateDeclarationDto } from './dto/update-declaration.dto';

@Controller('declarations')
export class DeclarationsController {
  constructor(private readonly declarationsService: DeclarationsService) {}

  @Post()
  async create(@Body() createDeclarationDto: CreateDeclarationDto) {
    try {
      console.log(createDeclarationDto)
      return await this.declarationsService.create(createDeclarationDto);
    } catch (error) {
      throw new HttpException(
        'Error creating declaration.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Patch('update/:declarationId') 
  async update(@Param('declarationId') declarationId: string, @Body() updateDeclarationDto: UpdateDeclarationDto) {
    try {
      const id = parseInt(declarationId, 10);
  
      if (isNaN(id)) {
        throw new HttpException('Invalid ID provided', HttpStatus.BAD_REQUEST);
      }
  
      return await this.declarationsService.update(id, updateDeclarationDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':declarationId')
  async remove(@Param('declarationId') declarationId: string) {
    try {
      const id = parseInt(declarationId, 10);

      if (isNaN(id)) {
        throw new HttpException('Invalid ID provided', HttpStatus.BAD_REQUEST);
      }

      await this.declarationsService.remove(id);
      return { message: `Declaration with ID ${id} successfully deleted.` };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }  

  @Get('user/:userId')
  async findByUser(@Param('userId') userId: number) {
    try {
      const declarations = await this.declarationsService.findByUser(userId);
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
