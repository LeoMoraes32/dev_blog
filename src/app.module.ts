import { Module } from '@nestjs/common';
import { ModulesModule } from './modules.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import useFactory from './infra/typeorm/';

const imports = [
  ConfigModule.forRoot(),
  TypeOrmModule.forRootAsync(useFactory),
  ModulesModule,
];
@Module({
  imports,
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
