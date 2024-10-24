export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  sex: boolean;
  status: string;
  dni: number;
  nacionality: string;
  direction: string;
}
