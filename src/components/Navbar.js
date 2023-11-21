import React, {useState, useEffect} from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './button';

console.log(logo);

function Navbar() {
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect (() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            GamingSpot <i class="fa-solid fa-gamepad"></i>
            </Link>  
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/consoles' className='nav-links' onClick={closeMobileMenu}>
                        Consoles
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/games' className='nav-links' onClick={closeMobileMenu}>
                        Games
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
