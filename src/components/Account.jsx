import React, { useEffect, useState } from 'react';
import './Account.css';
import userImg from '../assets/user.png';
import AccountNav from './AccountNav';
import AccountSubNav from './AccountSubNav';

// import AccountSubNav from './AccountSubNav';
// import Car from './Car';
// import Nav from './Nav';
// import NavLink from './ui/NavLink';

const TeslaAccount = ({ user, isMenuOpen, setIsMenuOpen }) => {

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tesla__account">
      <AccountNav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <AccountSubNav
        user={user}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="container">
        <div className="row">
          <main className="teslaaccount__dashboard">
            <h2>Profile</h2>
            <div className="profile__info">
              <figure className="profile__img--wrapper">
                <img src={userImg} alt="" className="profile__img" />
              </figure>
              <form>
                <div className="name__field">
                  <label htmlFor="">Full Name</label>
                  <input type="text" />
                </div>
                <div className="name__field">
                  <label htmlFor="">Email</label>
                  <input disabled type="text" />
                </div>
                <div className="name__field">
                  <label htmlFor="">Role</label>
                  <input disabled type="text" />
                </div>
                <div className="name__field">
                  <label htmlFor="">Company</label>
                  <input disabled type="text" />
                </div>
                <div className="name__field">
                  <label htmlFor="">Language</label>
                  <input disabled type="text" />
                </div>
                <div className="name__field"> 
                  <span className="timezone">{dateTime.toLocaleString()}</span>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

export default TeslaAccount;
