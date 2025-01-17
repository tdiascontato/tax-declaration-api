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
    year: number;
  
    @Column({ type: 'jsonb' })
    data: Record<string, any>;
  
    @Column({ default: 'draft' }) // draft, submitted, rectified
    status: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @ManyToOne(() => User, (user) => user.declarations, { eager: true })
    user: User;
  }
  