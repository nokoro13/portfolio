// Nav
import HamburgerMenu from './HamburgerMenu';
import { NavLink } from "react-router-dom";
//import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  function blur(e) {
    e.target.blur();
  }

  return (
    <nav className="main-nav" onClick={blur}>
      <NavLink to="/" className="site-title">
        <img src="portfolio-logo-02.png" alt="site-logo" className="site-logo"/>
      </NavLink>  
      <div className="hamburger">
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;