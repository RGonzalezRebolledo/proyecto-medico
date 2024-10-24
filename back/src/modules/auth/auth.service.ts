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
import * as bcrypt from 'bcrypt';
import { Role } from '../decorators/roles.enum';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async singUp(createAuth: CreateUserDto) {
    const userFound = await this.userRepository.findOne({
      where: { email: createAuth.email },
    });
    if (userFound) {
      throw new ConflictException('El email ya existe');
    }
    if (createAuth.password !== createAuth.repeatPassword) {
      throw new BadRequestException('La contraseña no coincide');
    }

    const hashPassword = await bcrypt.hash(createAuth.password, 10);
    if (!hashPassword) {
      throw new BadRequestException('Error al hashear la contraseña');
    }

    const newUser = this.userRepository.create({
      ...createAuth,
      password: hashPassword,
    });
    const { password, repeatPassword, ...rest } = newUser;
    await this.userRepository.save(newUser);
    return { message: 'El usuario fue creado exitosamente', rest };
  }

  async singIn(userLogin: LoginUserDto) {
    const userFound = await this.userRepository.findOne({
      where: { email: userLogin.email },
    });
    if (!userFound) {
      throw new NotFoundException('Datos incorrectos');
    }

    const validPassword = await bcrypt.compare(
      userLogin.password,
      userFound.password,
    );
    if (!validPassword) {
      throw new BadRequestException('Datos incorrectos');
    }

    const userPlayLoad = {
      sub: userFound.id,
      id: userFound.id,
      email: userFound.email,
      roles: [userFound.isAdmin ? Role.ADMIN : Role.USER],
    };

    const token = this.jwtService.sign(userPlayLoad);
    return { message: 'Inicio de sesión exitoso', token };
  }
}
