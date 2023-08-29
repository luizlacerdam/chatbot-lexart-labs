require('dotenv').config();

const options = {
    host: process.env.MYSQL_HOST || process.env.HOSTNAME || 'localhost',
    port: process.env.MYSQL_PORT || '3306',
    database: 
      'chatbot-app',
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    dialect: 'mysql',
    dialectOptions: {
      timezone: 'Z',
    },
    logging: false,
  };
  
  module.exports = {
    development: {
      ...options,
    },
    test: {
      ...options,
    },
    production: {
      ...options,
    },
  };
  