const dotenv = require('dotenv');

// LOAD ENV CONFIG
dotenv.config();

// SERVER CONFIG
const config = {
  port: process.env.SERVER_PORT
};

module.exports = config;