import React, { useState, useEffect } from 'react';

function Counter() {
  // same as state in class component
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // check the title
    document.title = `You Clicked ${count} times`;
  });

  return (
    <div className="counter mt-5">
      <h3 className="display-3">You cliked a {count} of times </h3>
      <button
        type="button"
        className="btn bt lg btn-primary mx-3"
        onClick={() => setCount(count + 1)} // setState
      >
        Add
      </button>
      <button
        type="button"
        className="btn bt lg btn-danger"
        onClick={() => setCount(count - 1)} // setState
      >
        Substract
      </button>
    </div>
  );
}

export default Counter;
