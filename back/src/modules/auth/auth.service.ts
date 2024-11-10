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

    const userPayload = {
      sub: userFound.id,
      id: userFound.id,
      email: userFound.email,
      roles: [userFound.isAdmin ? Role.ADMIN : Role.USER],
    };
    const token = this.jwtService.sign(userPayload);
    return { success: 'Inicio de sesión exitoso', token, user: userFound };
  }

  async signUp(createAuth: CreateUserDto) {
    const userFound = await this.userRepository.findOne({
      where: { email: createAuth.email },
    });
    if (userFound) {
      throw new BadRequestException('El email ya existe');
    }

    const hashedPassword = await bcrypt.hash(createAuth.password, 10);
    if (!hashedPassword) {
      throw new BadRequestException('Error al hashear la contraseña');
    }

    const newUser = this.userRepository.create({
      ...createAuth,
      password: hashedPassword,
    });
    const { password, ...rest } = await this.userRepository.save(newUser);
    return { success: 'Usuario creado exitosamente', user: rest };
  }

  async signInWithSocialProvider(email: string, authProvider: string, authProviderId: string) {
    let user = await this.userRepository.findOne({ where: { email } });
    
    if (!user) {
      // Si el usuario no existe, lo creamos
      user = this.userRepository.create({
        email,
        authProvider,
        authProviderId,
      });
      await this.userRepository.save(user);
    } else if (user.authProvider !== authProvider) {
      // Si el usuario existe pero con un proveedor diferente, actualizamos sus datos
      user.authProvider = authProvider;
      user.authProviderId = authProviderId;
      await this.userRepository.save(user);
    }

    const userPayload = {
      sub: user.id,
      id: user.id,
      email: user.email,
      roles: [user.isAdmin ? Role.ADMIN : Role.USER],
    };
    const token = this.jwtService.sign(userPayload);
    return { success: 'Inicio de sesión exitoso', token, user };
  }
}