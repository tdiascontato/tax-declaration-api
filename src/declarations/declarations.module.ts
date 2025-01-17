// src\declarations\declarations.module.ts
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeclarationsController } from './declarations.controller';
import { DeclarationsService } from './declarations.service';
import { Declaration } from './entities/declaration.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Declaration]),
    forwardRef(() => UsersModule),
  ],
  controllers: [DeclarationsController],
  providers: [DeclarationsService],
  exports: [DeclarationsService],
})
export class DeclarationsModule {}
