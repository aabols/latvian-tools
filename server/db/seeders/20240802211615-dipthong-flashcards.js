'use strict';
const { v4: uuidv4 } = require('uuid');

const now = new Date("2024-08-02T21:16:15+00:00");
const dipthongs = [
  'AI', 'AO', 'AU',
  'EA', 'EI', 'EO', 'EU',
  'IA', 'IE', 'IO', 'IU',
  'OA', 'OE', 'OI',
  'UA', 'UE', 'UI'
];
const cards = dipthongs.map(dipthong => ({
  caption: dipthong,
  id: uuidv4(),
  createdAt: now,
  updatedAt: now
}));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Flashcards',
      cards
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      'Flashcards',
      { createdAt: now }
    );
  }
};
