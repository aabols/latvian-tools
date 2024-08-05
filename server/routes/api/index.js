const express = require('express');

const router = express.Router();

const flashcardsRoute = require('./flashcards');

router.use('/flashcards', flashcardsRoute);

module.exports = router;