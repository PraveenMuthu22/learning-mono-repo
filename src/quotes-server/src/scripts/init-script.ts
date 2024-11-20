
import * as fs from 'fs';
import fetchDbSecrets from '@shared/secrets/fetch-db-secrets';

const envVariables = {
  ...fetchDbSecrets(),
  DB_HOST: 'localhost',
  MYSQL_USER: 'root',
};

const config = `
const config = {
  MYSQL_DATABASE: '${envVariables.MYSQL_DATABASE}',
  MYSQL_USER: '${envVariables.MYSQL_USER}',
  MYSQL_ROOT_PASSWORD: '${envVariables.MYSQL_ROOT_PASSWORD}',
  DB_HOST: '${envVariables.DB_HOST}',
  DB_PORT: ${envVariables.DB_PORT}
}
export default config;  
`


try {
  fs.writeFileSync('config.ts', config);
} catch (error) {
  console.error('Error writing config.ts file', error);
  process.exit(1);
}