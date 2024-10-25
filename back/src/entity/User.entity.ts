import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  repeatPassword: string;

  @Column()
  sex: boolean;

  @Column()
  status: string;

  @Column()
  dni: number;

  @Column()
  nacionality: string;

  @Column()
  direction: string;

  @Column({default: false})
  isAdmin: boolean;
}
