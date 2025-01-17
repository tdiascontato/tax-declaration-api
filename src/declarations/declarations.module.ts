import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeclarationsController } from './declarations.controller';
import { DeclarationsService } from './declarations.service';
import { Declaration } from './entities/declaration.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Declaration]), // Registra a entidade no contexto do módulo
    UsersModule, // Importa o módulo Users se o DeclarationsService depende dele
  ],
  controllers: [DeclarationsController],
  providers: [DeclarationsService],
  exports: [DeclarationsService], // Caso precise exportar para outros módulos
})
export class DeclarationsModule {}
