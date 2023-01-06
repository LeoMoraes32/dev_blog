import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UsersController } from './users/Users.controller';
import useFactory from './infra/typeorm';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRootAsync(useFactory)],
  controllers: [AppController, UsersController],
  providers: [],
})
export class AppModule {}
