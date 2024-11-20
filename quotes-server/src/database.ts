import { Sequelize } from "sequelize";

const validateEnvironmentVariables = () => {
  if(!process.env.MYSQL_DATABASE){
    throw new Error('Missing environment variable MYSQL_DATABASE');
  }
  if(!process.env.MYSQL_USER){
    throw new Error('Missing environment variable MYSQL_USER');
  }
  if(!process.env.MYSQL_ROOT_PASSWORD){
    throw new Error('Missing environment variable MYSQL_ROOT_PASSWORD');
  }
  if(!process.env.DB_HOST){
    throw new Error('Missing environment variable DB_HOST');
  }

  if(!process.env.DB_PORT){
    throw new Error('Missing environment variable DB_PORT');
  }

  if(isNaN(parseInt(process.env.DB_PORT))){
    throw new Error('DB_PORT must be a number');
  }

  return {
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: parseInt(process.env.DB_PORT)
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