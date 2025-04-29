import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { Repository } from 'typeorm';
import { adminMock } from './admin-mock';
import * as bcrypt from 'bcrypt';
import { Roles } from 'src/decorators/roles.enum';

@Injectable()
export class UsersSeed {
  constructor(
    @InjectRepository(User) private readonly useRepository: Repository<User>,
  ) {}

  async seedAdmin() {
    const adminfound = await this.useRepository.findOne({
      where: { role: Roles.Admin },
    });
    if (!adminfound) {
      console.log('Creando usuario administrador por defecto...');

      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(adminMock.password, salt);

      const admin = this.useRepository.create({
        name: adminMock.name,
        email: adminMock.email,
        password: hashedPassword,
        role: Roles.Admin,
      });

      await this.useRepository.save(admin);
      console.log('Usuario administrador creado exitosamente');
    } else {
      console.log('El usuario administrador ya existe');
    }
  }
}
