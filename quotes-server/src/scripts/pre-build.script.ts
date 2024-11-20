
import * as fs from 'fs';
import fetchDbSecrets from '@/src/shared/secrets/fetch-db-secrets';

const envVariables = {
  ...fetchDbSecrets(),
  DB_HOST: 'localhost',
  MYSQL_USER: 'root',
};

// Convert the variables object to a string in `key=value` format
const envContent = Object.entries(envVariables)
  .map(([key, value]) => `${key}=${value}`)
  .join('\n');

try {
  fs.writeFileSync('.env', envContent);
} catch (error) {
  console.error('Error writing .env file', error);
  process.exit(1);
}