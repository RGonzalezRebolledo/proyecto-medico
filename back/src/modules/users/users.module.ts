import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from 'src/entities/User.entity';
import { UsersController } from './users.controller';
import { UsersSeed } from './users.seed';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UsersSeed],
})
export class UsersModule {}
