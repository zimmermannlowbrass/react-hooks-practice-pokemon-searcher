import React from "react";

function Search({ searchTerm, handleSearch }) {

  function handleChange(e) {
    handleSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        onChange={handleChange} 
        className="prompt"
        value = {searchTerm} 
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
