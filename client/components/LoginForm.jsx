import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(props.authenticated);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = async event => {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (response.status === 200) {
      setauthenticated(true);
      Navigate('/application');
    } else {
      Navigate('/createuser');
    }
  };

  return (
    <div className='Login-Container'>
      <form className='Login-Form'>
        <label>
          Username
          <input
            type='text'
            name='username'
            className='Input-Line'
            value={username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type='text'
            name='password'
            className='Input-Line'
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <input type='submit' value='Submit' onClick={handleSubmit} />
      </form>
      <p>
        Don't have an account? <Link to='/createuser'>Sign Up!</Link>
      </p>
    </div>
  );
}

export default LoginForm;
