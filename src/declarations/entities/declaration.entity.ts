// src\declarations\entities\declaration.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { User } from 'src/users/entities/user.entity';
  
  @Entity()
  export class Declaration {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    year: string;
  
    @Column({ type: 'json' })
    data: object;
  
    @Column({ default: 'Sketch' }) // Sketch, submitted
    status: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @ManyToOne(() => User, (user) => user.declarations, { eager: true })
    user: User;
  }
  