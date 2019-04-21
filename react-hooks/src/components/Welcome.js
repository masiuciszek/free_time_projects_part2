import React, { useState } from 'react';

export default function Welcome() {
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn(!on);
  };
  return (
    <div className="welcome">
      <h1>{on ? 'Welcome Master' : null}</h1>
      <button
        className="btn btn-primary btn-lg my-5"
        type="button"
        onClick={toggle}
      >
        {on ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
