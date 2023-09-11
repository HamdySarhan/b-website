import React, { useState } from 'react';
import './CollapsibleCard.css';

const CollapsibleCard = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapsible-card' onClick={toggleCard}>
      <div className='card-header'>
        <span>{title}</span>
        <span className={isOpen ? 'arrow down' : 'arrow top'}></span>
      </div>
      {isOpen && <div className='card-content'>{description}</div>}
    </div>
  );
};

export default CollapsibleCard;
