import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'
import Flashcard from './flashcard';

const shuffle = (arr) => arr
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

export default function Flashcards() {
  const [cards, setCards] = useState();
  const [deck, setDeck] = useState();
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get('/api/flashcards');
        setCards(res.data);
      } catch (err) { } finally { }
    };

    fetchCards();
  }, []);

  useEffect(() => {
    if (!cards) return;
    setDeck(shuffle(cards));
  }, [cards])


  const handleNext = (e) => {
    if (cardIndex >= deck.length - 1) {
      setDeck(shuffle(cards));
      setCardIndex(0);
      return;
    }
    setCardIndex(i => i + 1);
  };

  if (!cards || !deck) return null;

  return (
    <div className='flashCardDeck'>
      <Flashcard content={deck[cardIndex].caption} onClick={handleNext} />
      <p>
        {cardIndex + 1} / {deck.length}
      </p>
    </div>
  );
};
