import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() userLogin: LoginUserDto) {
    return await this.authService.signIn(userLogin);
  }
  
  @Post('signup')
  @HttpCode(HttpStatus.OK)
  async signUp(@Body() createAuth: CreateUserDto) {
    return this.authService.signUp(createAuth);
  }
}