import { Link } from 'react-router-dom';
import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="navbar-nav mr-auto">
      <Link to="/" className=" nav-link">
        Home
      </Link>
      <Link to="/counter" className=" nav-link">
        Counter
      </Link>
      <Link to="/searchbar" className=" nav-link">
        Searchbar
      </Link>
    </div>
  </nav>
);

export default Nav;
