import dotenv from 'dotenv'; 
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

console.log(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_ROOT_PASSWORD, process.env.DB_HOST, process.env.DB_PORT);