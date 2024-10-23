import { Entity } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  id: string;
  name: string;
  age: number;
  sex: boolean;
  dni: number;
  nacionality: string;
  direction: string;
}
