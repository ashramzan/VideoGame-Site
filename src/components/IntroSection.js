import React from 'react'
import { Button } from './button'
import '../App.css';
import './IntroSection.css';

function IntroSection() {
  return (
    <div className='intro-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>IMMERSE YOURSELF</h1>
      <p>Into a whole new world!</p>
      <div className='intro-btns'>
        <Button className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'>
            Get Started
        </Button>
        <Button className='btns' 
        buttonStyle='btn--primary'
        buttonSize='btn--large'>
            WHAT WE DO <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  )
}

export default IntroSection
