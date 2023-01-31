import 'dotenv/config';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const database = process.env.DB_NAME;
const port = Number(process.env.DB_PORT);

export default {
  type: 'mysql',
  port,
  host,
  username,
  password,
  database,
  //entities: [path.resolve(__dirname, './src/*/entities/*.{ts,js}')],
  entities: ['./src/*/entities/*'],
  // entities: [
  //   path.resolve(__dirname, '..', '..', '..', '..', '**', 'entites', '*'),
  // ],
  synchronize: false,
  migrations: ['./src/migrations/*'],
  cli: {
    migrationsDir: './src/migrations',
    entitiesDir: [path.resolve(__dirname, './src/*/entities/*')],
    // entitiesDir: path.resolve(
    //   __dirname,
    //   '..',
    //   '..',
    //   '..',
    //   '..',
    //   '**',
    //   'entites',
    //   '*',
    // ),
  },
} as TypeOrmModuleOptions;
