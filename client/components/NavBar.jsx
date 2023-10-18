import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className='NavBar'>
        <div className='NavBarOptions'>
          <ul>
            <li>
              <Link to='createuser'>Home</Link>
            </li>
            <li>
              <Link to='/'>Login</Link>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
