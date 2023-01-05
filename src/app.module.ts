import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from './users/Users.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [],
})
export class AppModule {}
