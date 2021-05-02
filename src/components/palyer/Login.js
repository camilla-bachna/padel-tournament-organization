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
        player={props.player}
      />
    </section>
  );
};

export default Login;
