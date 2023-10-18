import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <div className='App'>
        <h1>Career Compass</h1>
        <div className='navBar'>
          <NavBar />
        </div>
        <div className='mainContainer'>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Homepage;
