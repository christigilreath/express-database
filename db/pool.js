import { Pool } from "pg";

export const pool = new Pool({
host: 'localhost',
user: 'postgres',
database: 'top_users',
password: 'hunter',
port: '5432'
})