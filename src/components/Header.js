import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h3>My portfolio Ver2.0</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/works">My Works</Link>
          </li>
          <li>
            <Link to="/links">Links</Link>
          </li>
        </ul>
      </nav>
    </header>

  );
}

export default Header;