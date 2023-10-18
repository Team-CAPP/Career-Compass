import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
  const handleLogin = async event => {
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

    if (response.json().status === 200) {
      return Navigate('/app') // need to double check the endpoint
    }

  };
  // SAMPLE AUTH ROUTER FROM ANOTHER PROJECT AS REFERENCE
  // try {
  //   const { username, password } = req.body;
  //   const user = await User.findOne({ username });
  //   const response = await bcrypt.compare(password, user.password);
  //   if (!response) res.status(400).json('Invalid Credentials');
  //   res.locals.username = username;
  //   res.locals.id = user._id.toString();
  //   return next();
  // } catch (err) {
  //   console.log(err);
  //   return res.status(400).json('Username or Password invalid');
  // }

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
        <input type='submit' value='Login' onClick={handleLogin} />
      </form>
    </div>
  );
}

export default CreateUser;
