import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="ui secondary pointing menu main-header">
    <Link to="/" className="item">
      Streamy
    </Link>
    <div className="right-menu right menu">
      <Link to="/">All Streams</Link>
    </div>
    <div className="hr wrap">
      <hr />
    </div>
  </div>
);

export default Header;
