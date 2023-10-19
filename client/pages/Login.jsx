import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import Dashboard from '../pages/Dashboard';

function Login() {
  const [authenticated, setAuthenticated] = useState(false);
  console.log('authenticated: ', authenticated);
  return (
    <div className='loginContainer'>
      {/* <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/createuser' element={<Register />} />
      </Routes> */}

      {authenticated ? (
        <Dashboard authenticated={authenticated} />
      ) : (
        <LoginForm authenticated={authenticated} />
      )}
    </div>
  );
}

export default Login;
