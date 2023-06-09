import React, { useEffect, useState } from 'react';
import './Login.css';
import CredentialsNav from './CredentialsNav';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/init';
import Loader from './ui/Loader';

const Login = () => {
  
  const [isEmpty, setIsEmpty] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState('')
  const [notFound, setNotFound] = useState('')
  const [loading, setLoading] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmpty(event.target.value === '');
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleNextClick = (event) => {
    event.preventDefault();
    setShowPassword(true);
    console.log(`This is your email: ${email}`)
  }

  const handleSignInClick = (event) => {
    // TODO: Implement sign in logic
    signIn(event);
    console.log(`This is your password: ${password}`)
  }

  const signIn = (e) => {
    setLoading(true)
    loading && <Loader />
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        setLoading(false)
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
        }))
        history.push('/account')
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          const notFoundMessage = 
            "Your email or password is incorrect. Please try again or sign up for a new account."
            setNotFound(notFoundMessage)
        }
        else {
          const errorMessage =
            "An error has occurred, please try again. If the error persists, please contact us at hatemthedev@gmail.com";
          console.error(error);
          setError(errorMessage);
        }
      })
  }


  useEffect(() => {
    console.log(email);
  }, [email]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  return (
    <section id="login">
      <CredentialsNav />
      <div className="container">
        <div className="row">
          <div className="row__column">
            <div className="login__info">
              <h1>Sign In</h1>
              {notFound && (
                <React.Fragment>
                  <p className="error__message">{notFound}</p>
                  {setTimeout(() => {
                    history.push('/signup');
                  }, 5000) && <></>}
                </React.Fragment>
              )}
              {error && <p className="error__message">{error}</p>}
              <form action="" className="login__form">
                {showPassword ? (
                  <div className="login__form--field">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handlePasswordChange}
                      value={password}
                    />
                  </div>
                ) : (
                  <div className="login__form--field">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleEmailChange}
                      value={email}
                    />
                  </div>
                )}
                {showPassword ? (
                  <button
                    className={`btn login__form--btn ${password === '' ? 'frosted no-cursor' : ''}`}
                    onClick={handleSignInClick}
                    disabled={password === ''}
                  >
                    Sign In
                  </button>
                ) : (
                  <button
                    className={`btn login__form--btn ${isEmpty ? 'frosted no-cursor' : ''}`}
                    onClick={handleNextClick}
                    disabled={isEmpty}
                  >
                    Next
                  </button>
                )}
              </form>
              <a href="" target="_blank" className="href">Trouble Signing In?</a>
              <span>Or</span>
              <Link to="/signup" className="btn__wrapper">
                <button className="btn login__btn--create">
                  Create Account
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
