import { api } from '../api';

const getFlashcards = () => api.get('/flashcards');

export {
  getFlashcards
};