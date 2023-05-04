import React from 'react';
import './Landing.css';
import landingImg from '../assets/pexels-cottonbro-studio-5473950.jpg'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__info">
            <div className="landing__left--side">
                <h1 className="landing__title">
                  Protect Your Security System And Make Secure Assets & Code
                </h1>
                <p className="landing__para">
                  Cyber attack can cause on average $1.4 million to a company. With Our advanced AI System we can block the attack before it even happens.
                </p>
                <div className="landing__btns">
                  <Link to="/login">
                    <button className="landing__btn--start">
                      Get Started
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="landing__btn--learn">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
              <div className="landing__right--side">
                <figure className="landing__img--wrapper">
                  <img src={landingImg} alt="Photo by cottonbro studio: https://www.pexels.com/photo/woman-with-red-light-on-face-5473950/" className="landing__img" />
                </figure>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
