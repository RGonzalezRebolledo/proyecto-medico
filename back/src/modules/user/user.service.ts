import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    const userFound = await this.userRepository.findOne({ where: { id } });

    if (!userFound) {
      throw new NotFoundException('El usuario no encontrado');
    }

    return userFound;
  }

  async update(id: string, updateUser: UpdateUserDto) {
    const userFound = await this.userRepository.findOne({where: {id}});

    if(!userFound){
      throw new NotFoundException(`Usuario con el id ${id} no encontrado`);
    }

    const newChange = {...userFound, ...updateUser}
    const newUser = await this.userRepository.save(newChange)

    return {message: 'Usuario modificado exitosamente', newUser}
  }

  async remove(id: string) {
    const deleteUser = await this.userRepository.findOne({where: {id}});

    if(!deleteUser){
      throw new NotFoundException(`El usuario con ${id} no fue encontrado`)
    }

    await this.userRepository.delete(deleteUser)
    return {message:'El usuario fue eliminado exitosamente', deleteUser}
  }
}
