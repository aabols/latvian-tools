import React, { useEffect, useState } from 'react';
import './index.css'
import Flashcard from './flashcard';
import { getFlashcards } from '../../_services/flashcardServices';

const shuffle = (arr) => arr
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

export default function Flashcards() {
  // STATES
  const [cards, setCards] = useState();
  const [deck, setDeck] = useState();
  const [cardIndex, setCardIndex] = useState();

  // EFFECTS
  useEffect(() => {
    getFlashcards()
      .then(response => setCards(response.data));
  }, []);

  useEffect(() => {
    if (!cards) return;
    if (cardIndex && cardIndex < cards.length) return;
    setDeck(shuffle(cards));
  }, [cardIndex, cards]);

  useEffect(() => {
    setCardIndex(0);
  }, [deck]);

  // HANDLERS
  const handleNext = (e) => {
    setCardIndex(i => i + 1);
  };

  // COMPONENT
  if (!cards || !deck || !deck[cardIndex]) return null;

  return (
    <div className='flashCardDeck'>
      <Flashcard content={deck[cardIndex].caption} onClick={handleNext} />
      <p>
        {cardIndex + 1} / {deck.length}
      </p>
    </div>
  );
};
