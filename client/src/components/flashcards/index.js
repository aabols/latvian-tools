import React, { useState } from 'react';
import './index.css'
import Flashcard from './flashcard';

const cards = ['A', 'Ā', 'B', 'C', 'Č', 'D', 'E', 'Ē', 'F', 'G', 'Ģ', 'H', 'I', 'Ī', 'J', 'K', 'Ķ', 'L', 'Ļ', 'M', 'N', 'Ņ', 'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'Ū', 'V', 'Z', 'Ž'];
const shuffleCards = () => cards
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

export default function Flashcards() {
  const [cardIndex, setCardIndex] = useState(0);

  const [deck, setDeck] = useState(
    shuffleCards()
  );

  const handleNext = (e) => {
    if (cardIndex >= deck.length - 1) {
      setDeck(shuffleCards());
      setCardIndex(0);
      return;
    }
    setCardIndex(i => i + 1);
  };

  return (
    <div className='flashCardDeck'>
      <Flashcard content={deck[cardIndex]} onClick={handleNext} />
      <p>
        {cardIndex + 1} / {deck.length}
      </p>
    </div>
  );
};
