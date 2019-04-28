import React, { useState } from 'react';
import ResourceList from './ResourceList';

export default function App() {
  const [resource, setResource] = useState('posts');
  return (
    <div className="container">
      <div>
        <button
          className="btn btn-primary"
          onClick={() => setResource('posts')}
          type="button"
        >
          posts
        </button>
        <button
          className="btn btn-warning"
          onClick={() => setResource('todos')}
          type="button"
        >
          todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}
