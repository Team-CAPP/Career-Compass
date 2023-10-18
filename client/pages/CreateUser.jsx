import React, { useState } from 'react';

function CreateUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

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

    const response = await fetch('/api/createUser', {
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
    </div>
  );
}

export default CreateUser;
