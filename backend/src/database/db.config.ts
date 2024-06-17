import 'dotenv/config';
import { knex as configKnex, Knex } from 'knex';

export const config: Knex.Config = {
  client: process.env.DATABASE_CLIENT,
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
  migrations:{
    extension: 'ts',
    directory: './src/database/migrations'
  }
}
export const knex = configKnex(config)

