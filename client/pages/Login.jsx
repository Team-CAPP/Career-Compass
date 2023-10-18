import React, { useState } from 'react';
import Application from './Application';
import LoginForm from '../components/LoginForm';

function Login() {
  const [authenticated, setAuthenticated] = useState(false);
  console.log(authenticated);
  return (
    <div className='loginContainer'>
      {/* <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/createuser' element={<Register />} />
      </Routes> */}

      {authenticated ? (
        <Application />
      ) : (
        <LoginForm authenticated={authenticated} />
      )}
    </div>
  );
}

export default Login;
