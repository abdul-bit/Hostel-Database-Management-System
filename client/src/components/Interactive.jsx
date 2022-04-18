import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ButtonStudent } from './ButtonStudent';
import { Button } from './Button';
import './Interactive.css';
import Header from './Header';

function Interactive() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);



    return (
        <div>

            <nav className='navbar'>
                <div className='navbar-container'>

                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Hostel Management
                        <i class='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/aboutus'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/fees'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Fees
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>

        </div>
    )
}

export default Interactive
