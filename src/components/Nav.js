import HamburgerMenu from './HamburgerMenu';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
  function blur(e) {
    e.target.blur();
  }

  const [logo, setLogo] = useState(false);

  const handleLogo = () => {
      setLogo(!logo);
  }

  return (
    <motion.nav initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2, delay: 1}} className="main-nav" onClick={blur}>
      <NavLink to="/" className="site-title">
        <img src="/portfolio-logo-02.png" alt="site-logo" onClick={handleLogo} className={logo === false ? 'site-logo' : 'site-logo-2'}/>
      </NavLink>  
      <div className="hamburger">
        <HamburgerMenu />
      </div>
    </motion.nav>
  );
};

export default Nav;