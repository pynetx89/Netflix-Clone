import React, { useState, useContext } from 'react';
import MyContext from './MyContext';

function Search() {
  const value = useContext(MyContext);
  const [text, setText] = useState(value.searchText);
  // const { query, setQuery } = useContext('');

  return (
    <MyContext.Consumer>
      {(value) => (
        <>
          <input
            type='text'
            placeholder='Search Your Movie'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={(e) => {
              value.setSearchText(text);
            }}
          >
            Search
          </button>
        </>
      )}
    </MyContext.Consumer>
  );
}

export default Search;
