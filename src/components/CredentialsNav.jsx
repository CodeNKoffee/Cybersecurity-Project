import React from 'react';
import './CredentialsNav.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/defendix.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CredentialsNav = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={Logo} alt="Defendix Logo" className="nav__logo--inverted" />
        </Link>
        <button className="btn credential__lang">
          <FontAwesomeIcon className="credential__icon" icon="globe" />
          <span className="credential__lang--txt">en-US</span>
        </button>
      </div>
    </nav>
  );
}

export default CredentialsNav;
