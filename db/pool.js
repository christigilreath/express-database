import { Pool } from "pg";
import * as dotenv from 'dotenv';
dotenv.config();

export const pool = new Pool({
host: process.env.RENDER_HOST,
user: process.env.RENDER_USERNAME,
database: process.env.RENDER_DATABASE,
password: process.env.RENDER_PASSWORD,
port: '5432'
})