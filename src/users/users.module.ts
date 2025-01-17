// src\users\users.module.ts
import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeclarationsController } from 'src/declarations/declarations.controller';
import { DeclarationsModule } from 'src/declarations/declarations.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => DeclarationsModule)],
  providers: [UsersService],
  controllers: [UsersController, DeclarationsController],
  exports: [UsersService],
})
export class UsersModule {}
