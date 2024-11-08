import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({nullable: true})
  age: number;

  @Column({nullable: true})
  sex: boolean;

  @Column({nullable: true})
  dni: number;

  @Column({nullable: true})
  nacionality: string;

  @Column({nullable: true})
  direction: string;

  @Column({unique: true})
  email: string;

  @Column({nullable: true})
  password: string;

  @Column({ default: false })
  isAdmin?: boolean;

  @Column({ nullable: true })
  authProvider?: string;

  @Column({ nullable: true })
  authProviderId?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
