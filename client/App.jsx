import React from 'react';
import AppForm from './components/Application';
import Notes from './components/Notes';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';
import Application from './components/Application';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppDashboard from './pages/Dashboard';

function App() {
  return (
    <>
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
