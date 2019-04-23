import React, { useEffect, useState } from 'react';
import { MOVIE_API } from '../api/movie_api';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    fetch(MOVIE_API)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setMovies(res);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
