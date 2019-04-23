import React, { useState } from 'react';

const Search = props => {
  const [searchValue, setSearchValue] = useState('');
  const handleInputChanges = e => {
    setSearchValue(e.target.value);
  };
  const resetInputField = () => {
    setSearchValue('');
  };
  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };
  return (
    <form className="search form-group">
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChanges}
        className="form-control"
      />
      <input
        type="submit"
        onClick={callSearchFunction}
        value="search"
        className="btn btn-info mt-4"
        style={{ display: 'block', margin: 'auto' }}
      />
    </form>
  );
};

export default Search;
