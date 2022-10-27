import HamburgerMenu from './HamburgerMenu';
import { NavLink } from "react-router-dom";
import { useState } from 'react';

const Nav = () => {
  function blur(e) {
    e.target.blur();
  }

  const [logo, setLogo] = useState(false);

  const handleLogo = () => {
      setLogo(!logo);
  }

  return (
    <nav className="main-nav" onClick={blur}>
      <NavLink to="/" className="site-title">
        <img src="portfolio-logo-02.png" alt="site-logo" onClick={handleLogo} className={logo === false ? 'site-logo' : 'site-logo-2'}/>
      </NavLink>  
      <div className="hamburger">
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;