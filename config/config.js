import dotenv from 'dotenv';
import {Pool} from 'pg';
dotenv.config();

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: parseInt(process.env.PGPORT, 10),
    ssl: process.env.PGSSLMODE === 'require' ? { require: true } : false,
});

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export {
    pool,
    TELEGRAM_TOKEN
};