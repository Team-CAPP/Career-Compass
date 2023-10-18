import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <div className='App'>
        <div className='navBar'>
          <Navbar />
        </div>
        <div className='mainContainer'>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Homepage;
