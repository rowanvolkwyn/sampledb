import React from 'react';

import HeaderRow from '../components/HeaderRow';
import CardRow from '../components/CardRow';

const cards = [
    { name: 'Doom Blade', color: 'Black', set: 'M10' },
    { name: 'Dark Ritual', color: 'Black', set: 'A25' },
    { name: 'Jeskai Ascendancy', color: 'Jeskai', set: 'KTK' },
    { name: "Jeska's Will", color: 'Red', set: 'CMR' },
    { name: 'Wheel of Fortune', color: 'Red', set: 'VMA' },
    { name: 'Guttersnipe', color: 'Red', set: 'RTR' }
  ];
  

const Collection = () => {
  return (
    <div className='content'>
        <h1>Collection</h1>
        <h2>All Cards</h2>
        <div className='collection-container'>
            <HeaderRow />
            {cards.map((rowData, index) => (
            <CardRow
                cardName={rowData.name}
                color={rowData.color}
                set={rowData.set}
                isEven={index % 2 === 0}
            />
            ))}
      </div>
    </div>
  );
};

export default Collection;