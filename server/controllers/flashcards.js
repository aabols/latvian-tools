const { Flashcard } = require('../db/models');

const getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.findAll();
    res.json(flashcards);
  } catch ({ status, message }) {
    res.status(status || 500).json({ message });
  }
};

module.exports = {
  getFlashcards
};
