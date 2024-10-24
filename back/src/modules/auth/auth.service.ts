import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async singUp(createAuth: CreateUserDto) {
    const userFound = await this.userRepository.findOne({
      where: { name: createAuth.email },
    });

    if (userFound) {
      throw new ConflictException('El email ya existe');
    }

    if (createAuth.password !== createAuth.repeatPassword) {
      throw new BadRequestException('La contraseña no coincide');
    }

    const newUser = this.userRepository.create({ ...createAuth });
    await this.userRepository.save(newUser);
    return { message: 'El usuario fue creado exitosamente', newUser };
  }

  async singIn(userLogin: LoginUserDto) {
    const userFound = await this.userRepository.findOne({
      where: { email: userLogin.email },
    });

    if (!userFound) {
      throw new NotFoundException('Email incorrectos');
    }

    if (userFound.password !== userLogin.password) {
      throw new BadRequestException('Contraseña incorrecta');
    }

    return { message: 'Inicio de sesión exitoso' };
  }
}
