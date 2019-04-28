import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const handleFetch = async resource => {
    const resp = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(resp.data);
  };

  useEffect(() => {
    handleFetch(resource);
  }, [resource]);

  return (
    <div>
      {resources.map(r => (
        <p key={r.id}>{r.title}</p>
      ))}
    </div>
  );
};
export default ResourceList;
