import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  singUp(@Body() createAuth: CreateUserDto) {
    return this.authService.singUp(createAuth);
  }

  @Post('signin')
  singIn(@Body() userLogin: LoginUserDto){
    return this.authService.singIn(userLogin)
  }
}
