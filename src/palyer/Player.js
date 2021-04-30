import React from 'react';
import Login from './Login';
import Profile from './Profile';

const Player = (props) => {
  return props.isPlayerLoggedIn ? (
    <Profile handleLogout={props.handleLogout} />
  ) : (
    <Login loginError={props.loginError} handleLogin={props.handleLogin} />
  );
};

export default Player;