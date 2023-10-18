import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

function Register(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [authenticated, setauthenticated] = useState(props.authenticated);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = async event => {
    event.preventDefault();

    const response = await fetch('/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    });

    console.log(response);

    if (response.status === 200) {
      setauthenticated(true);
      console.log(authenticated);
      Navigate('/application');
    } else {
      Navigate('/');
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
        <label>
          Email
          <input
            type='text'
            name='email'
            className='Input-Line'
            value={email}
            onChange={handleChange}
          />
        </label>
        <input type='submit' value='Submit' onClick={handleSubmit} />
      </form>
      <p>
        Already have an account? <Link to='/'>Login!</Link>
      </p>
    </div>
  );
}

export default Register;
