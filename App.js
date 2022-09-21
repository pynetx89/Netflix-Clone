import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import MyProvider from './MyProvider';
import Search from './Search';
// export const movies = createContext();

function App() {
  // const movieSearch = () => {};
  return (
    <MyProvider>
      <div className='App'>
        <Search />
        <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romantic Movies' fetchUrl={requests.fetchRomanceMovies} />
      </div>
    </MyProvider>
  );
}

export default App;
