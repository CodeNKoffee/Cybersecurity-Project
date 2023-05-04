import React from 'react';
import './Nav.css';
import './AccountNav.css';
import { logout } from '../features/userSlice';
import Logo from '../assets/defendix.png'
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth } from '../firebase/init';
import { useDispatch, useSelector } from 'react-redux';

const AccountNav = ({ isMenuOpen, setIsMenuOpen }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutOfApp = () => {
    auth.signOut()
      .then(() => {
        dispatch(logout())
        history.push('/')
      })
      .catch((error) => alert(error.message))
  }

  return (
    <nav className="account__nav">
      <div className="nav__container">
        <Link to="/">
          <img src={Logo} alt="Defendix Logo" className="nav__logo account__nav--logo" />
        </Link>
        <input
          id="quick_search"
          className="nav__search"
          name="quick_search"
          placeholder="Search here..."
          type="text"
        />
        <ul className="account__nav--links">
          <li className="account__nav--list">
            <Link exact to="/login" className={isMenuOpen ? "account__nav--link--hidden" : "account__nav--link"}>
              Account
            </Link>
          </li>
          <li className="account__nav--list">
            <Link to=""
              onClick={logoutOfApp}
              className={isMenuOpen ?
                "account__nav--link--hidden" : "account__nav--link"
              }
            >
              Logout
            </Link>
          </li>
          <div
            className="account__nav--list account__nav--link account__nav--menu--btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <FontAwesomeIcon icon="times" size="lg" className="account__nav--menu--btn" />
              ) : (
                "Menu"
              )}
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default AccountNav;
