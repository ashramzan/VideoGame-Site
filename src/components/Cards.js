import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Today's Top Stories</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src='images/gow.jpg'
                text='Did Epic Games Just Tease A Potential Remaster?'
                label='Games'
                path='/games'
                />
                <CardItem
                src='images/ps5slim.png'
                text='EXCLUSIVE: The New Playstation 5 Slim'
                label='Console'
                path='/consoles'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                src='images/eldenring.jpeg'
                text='PSA: Elden Ring Enjoyers Look Out For Some Fresh Content Heading Your Way!'
                label='Games'
                path='/games'
                />
                <CardItem
                src='images/dbdchucky.jpg'
                text='Get A Sneak Peek at Chucky In Dead By Daylight'
                label='Games'
                path='/games'
                />
                <CardItem
                src='images/segaConsole.png'
                text='BLAST FROM THE PAST: Is The New Sega Megadrive Mini Worth It?'
                label='Console'
                path='/consoles'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
