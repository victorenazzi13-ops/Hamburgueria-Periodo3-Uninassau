'use strict';
import { Sequelize } from 'sequelize';
import process from 'process';
import 'dotenv/config';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT || 'mysql',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      },
      connectTimeout: 60000
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000
    },
    logging: false
  }
);

try {
  await sequelize.authenticate();
  console.log('Conexão com o banco realizada com sucesso');
} catch (error) {
  console.error('Erro ao autenticar com o banco:', error.message);
}

export default sequelize;