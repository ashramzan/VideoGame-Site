import React from 'react';
import { Button } from './button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Subcribe to the Gaming HQ for all the latest updates regarding everything gaming and tech.
        </p>
        <p className='footer-subscription-text'>
            You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
            <form>
                <input type='email' 
                name='email' 
                placeholder='Your Email' 
                className='footer-input'
                />
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How It Works</Link>
            <Link to='/'>Our Mission Statement</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Business Enquiries</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>X</Link>
            <Link to='/'>YouTube</Link>
            <Link to='/'>Facebook</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Reviews</Link>
            <Link to='/'>Vlogs</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Submit Video</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/'className='social-logo'>
              Gaming HQ <i class="fa-solid fa-gamepad"></i>
            </Link>
          </div>
          <small class='website-rights'>Gaming HQ &copy; </small>
          <div className='social-icons'>
            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>
            <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </Link>
            <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
              <i className='fab fa-youtube' />
            </Link>
            <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='Linkedin'>
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
