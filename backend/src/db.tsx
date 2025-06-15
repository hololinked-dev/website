import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://user:password@localhost:5432/myapp';
export const sequelize = new Sequelize(POSTGRES_URI, {dialect: "postgres"});

sequelize.authenticate()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch((err: any) => console.error('PostgreSQL connection error:', err));