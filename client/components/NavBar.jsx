import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <nav className='navbarOptions'>
          <ul>
            <li id='list'>
              <Link to='/dashboard'>Application Dashboard | </Link>
              <Link to='/application'>New Job Application | </Link>
              <Link to='/'>Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
