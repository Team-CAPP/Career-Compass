import React from 'react';
import Register from './components/RegForm';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';
import Application from './pages/Application';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Career Compass</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route index element={<Login />} />
          <Route path='/createuser' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/application' element={<Application />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
