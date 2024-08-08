const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');
const flashcardRouter = require('./routes/flashcards');
const apiRouter = require('./routes/api');
const db = require('./db/models');

// APP CONFIG
const app = express();
const port = config.port;

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());

// ROUTES
const root = express.Router();
root.use('/api', apiRouter);
root.use('/burti', flashcardRouter);
app.use('/', root);

// LAUNCH APP
db.sequelize.sync({ force: false });
const logPort = () => { console.log(`Server listening on ${port}...`); };
app.listen(port, logPort);
