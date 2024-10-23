import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/login-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('singup')
  singUp(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.singUp(createAuthDto);
  }

  @Post('singin')
  singIn(@Body() login: )

}
