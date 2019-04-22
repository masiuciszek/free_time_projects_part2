import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const [toggle, setToggle] = useState(false);
  const toggleTxt = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <h2 className="display-2">
        {toggle
          ? 'But click on the blue button to go back '
          : 'Page not found, Sorry'}
      </h2>

      <div className="mb-4">
        <button className="btn btn-warning" onClick={toggleTxt}>
          {toggle ? 'Okey' : 'Help'}
        </button>
      </div>
      <Link className="btn btn-lg btn-primary" to="/">
        Back Home
      </Link>
    </div>
  );
}
