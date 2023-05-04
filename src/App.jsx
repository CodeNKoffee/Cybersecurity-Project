import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase/init';
import Account from './components/Account';
import Loader from './components/ui/Loader';


function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged((userAuth) => {
      setLoading(false);
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
            <Landing user={user} />
          </Route>
          <Route exact path="/login">
          {loading ? (
            <Loader />
          ) : (
            user ? (
              <Redirect to="/account" />
            ) : (
              <Login />
            )
          )}
          </Route>
          <Route exact path="/signup">
            <Signup user={user} />
          </Route>
          <Route exact path="/account">
            {loading ? (
              <Loader />
            ) : (
              !user ?  (
                <Redirect to="login" />
              ) : (
                <>
                  <Account
                    user={user}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                  {isMenuOpen && <Menu />}
                </>
              )
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
