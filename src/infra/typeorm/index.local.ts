import 'dotenv/config';

import * as path from 'path';
import { DataSource } from 'typeorm';

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const database = process.env.DB_NAME;
const port = Number(process.env.DB_PORT);

export default new DataSource({
  type: 'mysql',
  port,
  host,
  username,
  password,
  database,
  entities: [
    path.resolve(__dirname, '..', '..', '..', '..', '**', 'entites', '*'),
  ],
  synchronize: false,
  migrations: ['./src/migrations/*'],
});
