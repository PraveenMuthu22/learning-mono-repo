import dotenv from 'dotenv'; 
import { fileURLToPath } from 'url';
import path from 'path';

const currentPath = fileURLToPath(import.meta.url);
dotenv.config({ path: path.resolve(path.dirname(currentPath), '../.env') });

console.log(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_ROOT_PASSWORD, process.env.DB_HOST, process.env.DB_PORT);