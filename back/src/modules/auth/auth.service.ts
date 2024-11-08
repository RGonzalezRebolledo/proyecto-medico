import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from 'src/entities/User.entity';
import { Role } from 'src/decorators/roles.enum';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(userLogin: LoginUserDto) {
    const userFound = await this.userRepository.findOne({
      where: { email: userLogin.email },
    });
    if (!userFound) {
      throw new BadRequestException('Datos incorrectos');
    }
    const isValidPassword = await bcrypt.compare(
      userLogin.password,
      userFound.password,
    );
    if (!isValidPassword) {
      throw new BadRequestException('Datos incorrectos');
    }
    const userPlayLoad = {
      sub: userFound.id,
      id: userFound.id,
      email: userFound.email,
      roles: [userFound.isAdmin ? Role.ADMIN : Role.USER],
    };
    const token = this.jwtService.sign(userPlayLoad);
    return { success: 'Inicio de sesión exitoso', token };
  }

  async signUp(createAuth: CreateUserDto) {
    const userFound = await this.userRepository.findOne({
      where: { email: createAuth.email },
    });
    if (userFound) {
      throw new BadRequestException('El email ya existe');
    }
    if (createAuth.password !== createAuth.repeatPassword) {
      throw new BadRequestException('Las contraseñas no coinciden');
    }

    const hashePassword = await bcrypt.hash(createAuth.password, 10);
    if (!hashePassword) {
      throw new BadRequestException('Error al hashear la contraseña');
    }
    const newUser = this.userRepository.create({
      ...createAuth,
      password: hashePassword,
    });
    const { password, repeatPassword, ...rest } = newUser;
    await this.userRepository.save(newUser);
    return { success: 'Usuario creado exitosamente', rest };
  }
}
