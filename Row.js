import React, { useEffect, useState, useContext } from 'react';
import axios from './axios';
import './Row.css';
import MyContext from './MyContext';
// import Movie from './App';

const base_url = 'https://image.tmdb.org/t/p/original';

function Row({ title = 'Title', fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const value = useContext(MyContext);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchUrl);
      // const moviesArray = [];
      // const promises = await Promise.all(
      //   request.data.results.map((movie) => {
      //     setTimeout(() => {
      //       moviesArray.push({ ...movie, company: 'CodeCorners' });
      //     }, 50);

      //     return { ...movie, company: 'CodeCorners' };
      //   })
      // );
      // console.log('promises', promises);
      const filteredMovies = request.data.results.filter((movie) =>
        movie.name.toLowerCase().includes(value.searchText.toLowerCase())
      );
      setMovies(filteredMovies);
      //return request();
    }
    fetchdata();
  }, [fetchUrl, value]);
  console.log(movies);

  // const { movie } = useContext(movie);

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row_poster'>
        {movies.map((movie) => {
          return (
            <img
              className='row__poster'
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Row;
