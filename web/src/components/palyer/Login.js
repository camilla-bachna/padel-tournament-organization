import React, { useState } from 'react';
import Form from './Form';

const Login = (props) => {
  //render

  return (
    <section>
      <Form
        handleLogin={props.handleLogin}
        gender={props.gender}
        handleSelect={props.handleSelect}
        handlePlayer={props.handlePlayer}
        handlePin={props.handlePin}
        player={props.player}
        pin={props.pin}
        loginError={props.loginError}
      />
    </section>
  );
};

export default Login;
