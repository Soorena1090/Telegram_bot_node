import dotenv from 'dotenv';
dotenv.config();


const PGHOST = process.env.PGHOST;
const PGUSER = process.env.PGUSER;
const PGPASSWORD = process.env.PGPASSWORD;
const PGDATABASE = process.env.PGDATABASE;
const PGPORT = process.env.PGPORT;
const PGSSLMODE = process.env.PGSSLMODE;

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export {
    PGDATABASE,
    PGHOST,
    PGPASSWORD,
    PGUSER,
    PGPORT,
    PGSSLMODE,
    TELEGRAM_TOKEN
};