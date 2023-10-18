import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(props.authenticated);
  const navigate = useNavigate();

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
    console.log(response);
    if (response.status === 200) {
      setAuthenticated(true);
      console.log('logging in: ', authenticated);
      navigate('/dashboard');
    } else {
      navigate('/createuser');
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
