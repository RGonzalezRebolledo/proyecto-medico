import { Injectable } from '@nestjs/common';
import { CreateAuthDto, LoginUserDto } from './dto/login-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  singUp(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  singIn(userLogin: LoginUserDto) {
    return `This action returns all auth`;
  }
}
