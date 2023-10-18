import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

function Homepage() {
  return (
    <>
      {/* <NavBar /> */}
      <Outlet />
    </>
  );
}

export default Homepage;
