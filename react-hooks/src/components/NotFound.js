import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h3 className="display-4">Page not found</h3>
      <Link className="btn btn-lg primary" to="/">
        Back Home
      </Link>
    </div>
  );
}
