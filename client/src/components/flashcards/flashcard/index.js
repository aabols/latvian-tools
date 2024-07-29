import React from 'react';
import './index.css';

export default function Flashcard({ content, onClick }) {
  return (
    <div className='flashCard' onClick={onClick}>
      {content}
    </div>
  );
};
