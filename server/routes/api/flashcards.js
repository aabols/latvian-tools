const express = require('express');

const { getFlashcards } = require('../../controllers/flashcards');

const router = express.Router();

router.get('/', getFlashcards);

module.exports = router;
