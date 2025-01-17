import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DeclarationsModule } from './declarations/declarations.module';
import { User } from './users/entities/user.entity';
import { Declaration } from './declarations/entities/declaration.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5050,
      username: 'postgres',
      password: 'postgresp455w0rd',
      database: 'tax_declarations',
      entities: [User, Declaration],
      autoLoadEntities: true,
      synchronize: true, //Dev
    }),
    UsersModule,
    DeclarationsModule,
    AuthModule,

    AuthModule,
    UsersModule,
    DeclarationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
