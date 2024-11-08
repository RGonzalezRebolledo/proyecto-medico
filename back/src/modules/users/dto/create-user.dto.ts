import { IsString, IsNotEmpty, IsEmail, IsBoolean, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  age: number;

  @IsBoolean()
  @IsNotEmpty()
  sex: boolean;

  @IsInt()
  @IsNotEmpty()
  dni: number;

  @IsString()
  @IsNotEmpty()
  nacionality: string;

  @IsString()
  @IsNotEmpty()
  direction: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  @IsNotEmpty()
  isAdmin?: boolean;
}
