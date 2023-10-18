import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='navBar'>
        <nav className='navBarOptions'>
          <ul>
            <li>
              <Link to='/'>Logout | </Link>
              <Link to='/dashboard'>Application Dashboard | </Link>
              <Link to='/application'>New Job Application | </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
