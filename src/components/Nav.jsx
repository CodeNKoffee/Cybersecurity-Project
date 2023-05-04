import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../assets/defendix.png';
import NavLink from './ui/NavLink';
import { Link } from 'react-router-dom';

const Nav = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={Logo} alt="Tesla Logo" className="nav__logo--inverted" />
        </Link>
        <ul className="nav__links">
          <NavLink
            title="Collections"
          />
          <NavLink
            title="Price List"
          />
          <NavLink
            title="New Brands"
          />
          <NavLink
            title="Blog"
          />
          <NavLink
            title="Our Story"
          />
        </ul>
        <ul className="nav__links">
          <li className="nav__list">
            <Link exact to="/login" className={isMenuOpen ? "nav__link--hidden" : "nav__link"}>
              Account
            </Link>
          </li>
          <div
            className="nav__list nav__link nav__menu--btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <FontAwesomeIcon icon="times" size="lg" className="nav__menu--btn" />
              ) : (
                "Menu"
              )}
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
