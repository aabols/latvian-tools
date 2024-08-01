const dotenv = require('dotenv');
const path = require('path');

// LOAD ENV CONFIG
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// SERVER CONFIG
const config = {
  port: process.env.SERVER_PORT,
  db: {
    dialect: process.env.DB_DIALECT || 'sqlite',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'dev-db',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'rootpw',
    seederStorage: 'sequelize',
    storage: process.env.DB_STORAGE || path.resolve(__dirname, 'db/dev-db.sqlite3')
  }
};

module.exports = config;