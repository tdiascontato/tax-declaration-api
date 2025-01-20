// src\declarations\declarations.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Declaration } from './entities/declaration.entity';
import { CreateDeclarationDto } from './dto/create-declaration.dto';
import { UsersService } from '../users/users.service';
import { UpdateDeclarationDto } from './dto/update-declaration.dto';

@Injectable()
export class DeclarationsService {
  constructor(
    @InjectRepository(Declaration)
    private readonly declarationRepository: Repository<Declaration>,
    private readonly usersService: UsersService,
  ) {}

  async create(createDeclarationDto: CreateDeclarationDto): Promise<Declaration> {
    const { userId, year, data } = createDeclarationDto;

    const user = await this.usersService.findOneById(userId);
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found.`);
    }

    const newDeclaration = this.declarationRepository.create({
      year,
      data,
      user,
    });

    return await this.declarationRepository.save(newDeclaration);
  }

  async update(id: number, updateDeclarationDto: UpdateDeclarationDto): Promise<Declaration> {
    const declaration = await this.findOne(id);
  
    if (!declaration) {
      throw new NotFoundException(`Declaration with ID ${id} not found.`);
    }
  
    declaration.data = { ...declaration.data, ...updateDeclarationDto };
    const savedDeclaration = await this.declarationRepository.save(declaration);
  
    return savedDeclaration;
  }
  
  
  

  async findByUser(userId: number): Promise<Declaration[]> {
    const user = await this.usersService.findOneById(userId);
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found.`);
    }

    return await this.declarationRepository.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }

  async findOne(id: number): Promise<Declaration> {
    const declaration = await this.declarationRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!declaration) {
      throw new NotFoundException(`Declaration with ID ${id} not found.`);
    }

    return declaration;
  }

  async findAll(): Promise<Declaration[]> {
    return await this.declarationRepository.find({
      relations: ['user'],
    });
  }
}
