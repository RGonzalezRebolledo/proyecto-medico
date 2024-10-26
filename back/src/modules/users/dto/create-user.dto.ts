import { IsString, IsNotEmpty, IsEmail, IsBoolean, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  repeatPassword: string;

  @IsBoolean()
  sex: boolean;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsInt()
  dni: number;

  @IsString()
  nacionality: string;

  @IsString()
  direction: string;

  @IsBoolean()
  isAdmin: boolean;
}
