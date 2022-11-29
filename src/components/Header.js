import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h1>My site</h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/my-portfolio">Home</Link>
          </li>
          <li>
            <Link to="/my-portfolio/works">My Works</Link>
          </li>
          <li>
            <Link to="/my-portfolio/links">Links</Link>
          </li>
        </ul>
      </nav>
    </header>

  );
}

export default Header;