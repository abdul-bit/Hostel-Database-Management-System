import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Reviews</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/review1.png'
              path='/'
            />
            <CardItem
              src='images/review2.png'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/review3.png'

              path='/'
            />
            <CardItem
              src='images/review4.png'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
