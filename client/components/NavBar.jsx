import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className='navBar'>
        <nav className='navBarOptions'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/dashboard'>Application Dashboard</Link>
            </li>
            <li>
              <Link to='/application'>New Job Application</Link>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
