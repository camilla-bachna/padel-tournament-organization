import React, { useState } from 'react';
import Form from './Form';

const Login = (props) => {
  //render

  return (
    <section>
      <Form handleLogin={props.handleLogin} />
    </section>
  );
};

export default Login;
