import React from 'react';
import Login from './Login';
import Profile from './Profile';

const Player = (props) => {
  const isPlayerLoggedIn = props.isPlayerLoggedIn;
  if (isPlayerLoggedIn) {
    return <Profile handleLogout={props.handleLogout} player={props.player} />;
  } else {
    return (
      <Login
        loginError={props.loginError}
        handleLogin={props.handleLogin}
        gender={props.gender}
        handleSelect={props.handleSelect}
        handlePlayer={props.handlePlayer}
        handlePin={props.handlePin}
        player={props.player}
        pin={props.pin}
      />
    );
  }
};

export default Player;
