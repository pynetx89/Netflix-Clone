import { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [searchText, setSearchText] = useState('');

  return (
    <MyContext.Provider
      value={{
        searchText: searchText,
        setSearchText: setSearchText,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
