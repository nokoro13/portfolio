import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';



const HamburgerMenu = ( )=> {

    const [burgerMenu, setBurgerMenu] = useState(false);
    
    const closeMenu = () => {
        setBurgerMenu(false);
    };

    return (
        <nav className='nav-bar'>
            <Hamburger toggled={burgerMenu} toggle={setBurgerMenu}/>
            <ul className={burgerMenu ? "showMenu" : "menuNav"}>

                <li className='burger-item'>
                <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                </li>

                <li className='burger-item'>
                <NavLink to="/work" onClick={closeMenu}>Work</NavLink>
                </li>

                <li className='burger-item'>
                <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                </li>

            </ul>
        </nav>  
    )
}

export default HamburgerMenu;