import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resource = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const resp = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
  };
  return (
    <div>
      <h3>{resource}</h3>
    </div>
  );
};

export default Resource;
