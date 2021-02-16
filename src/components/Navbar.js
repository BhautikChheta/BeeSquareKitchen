import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
               <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                   BeeSquareKitchen <i class="fas fa-egg" />
               </Link>
               <div className="menu-icon" onClick={() => setClick(!click)}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />   
               </div>
               <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                            Menu
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/recipes-blog' className='nav-links' onClick={closeMobileMenu}>
                            Recipes Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact-us' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Contact-Us
                        </Link>
                    </li>
               </ul>
               {button && <Button buttonStyle='btn--outline' page='/contact-us'>Contact-Us</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
