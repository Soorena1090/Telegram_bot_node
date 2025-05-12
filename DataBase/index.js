import {Poll} from 'pg';
import {PGDATABASE,PGHOST,PGPASSWORD,PGUSER,PGPORT,PGSSLMODE} from '../config/config.js'

const pool = new Poll({
     host:PGHOST,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    port: parseInt(PGPORT, 10),
    ssl: PGSSLMODE === 'require' ? { require: true } : false,
});

export default pool;