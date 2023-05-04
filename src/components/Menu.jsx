import React from 'react';
import './Menu.css';
import MenuItem from './ui/MenuItem';
import { logout } from '../features/userSlice';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase/init';

const Menu = () => {

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
    <div className="menu__backdrop">
      <ul className="menu__links">
        <MenuItem title="Dashboard" />
        <MenuItem title="Reports" />
        <MenuItem title="Settings" />
        <MenuItem title="Help Center" />
        <MenuItem title="Service Desk" />
        <MenuItem className="cursor" onClick={logoutOfApp} title="Sign Out" />
      </ul>
    </div>
  );
}

export default Menu;
