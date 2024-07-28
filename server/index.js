const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');
const testRouter = require('./routes/test');
const clientRouter = require('./routes/client');

// APP CONFIG
const app = express();
const port = config.port;

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());

// ROUTES
const root = express.Router();
root.use('/test', testRouter);
root.use('/', clientRouter);
app.use('/', root);

// LAUNCH APP
const logPort = () => { console.log(`Server listening on ${port}...`); };
app.listen(port, logPort);