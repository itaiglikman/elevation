import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(`mysql://root:${process.env.PASSWORD}@localhost:3306/poke_corp`);