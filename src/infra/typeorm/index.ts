import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';
import * as path from 'path';
import { UserEntity } from 'src/users/entities/UserEntity';

export default {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    const username = process.env.DB_USER;
    const password = process.env.DB_PASS;
    const host = process.env.DB_HOST;
    const database = process.env.DB_NAME;
    const port = Number(process.env.DB_PORT);

    return {
      type: 'mysql',
      port,
      host,
      username,
      password,
      database,
      // entities: [
      //   path.resolve(__dirname, '..', '..', '..', '..', '**', 'entites', '*'),
      // ],
      entities: [path.resolve(__dirname, '..', '..', '**', 'entities', '*')],
      // entities: [UserEntity],
      //entities: [path.resolve(__dirname, './src/*/entities/*.{ts,js}')],
      synchronize: false,
      migrations: ['./dist/migrations/*'],
    };
  },
};
