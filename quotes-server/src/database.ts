import { Sequelize } from "sequelize";
import config from '@/config';

const validateEnvironmentVariables = () => {
  if(!config.MYSQL_DATABASE){
    throw new Error('Missing environment variable MYSQL_DATABASE');
  }
  if(!config.MYSQL_USER){
    throw new Error('Missing environment variable MYSQL_USER');
  }
  if(!config.MYSQL_ROOT_PASSWORD){
    throw new Error('Missing environment variable MYSQL_ROOT_PASSWORD');
  }
  if(!config.DB_HOST){
    throw new Error('Missing environment variable DB_HOST');
  }

  if(!config.DB_PORT){
    throw new Error('Missing environment variable DB_PORT');
  }

  return {
    MYSQL_DATABASE: config.MYSQL_DATABASE,
    MYSQL_USER: config.MYSQL_USER,
    MYSQL_ROOT_PASSWORD: config.MYSQL_ROOT_PASSWORD,
    DB_HOST: config.DB_HOST,
    DB_PORT: config.DB_PORT
  }
};
const sequelize = (() => {
  const {MYSQL_DATABASE, MYSQL_USER, MYSQL_ROOT_PASSWORD, DB_HOST, DB_PORT} =  validateEnvironmentVariables();

  const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_ROOT_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql'
  });
  
  (async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch(error){
      console.log('Unable to connect to the database:', error);
    }
  });

  return sequelize;
})(); 


export default sequelize;