import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { dbConfig } from './config/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule,
    UserModule,

    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '10h' },
      secret: process.env.JWT_SECRET,
    }),

    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) =>
        ConfigService.get('database'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
