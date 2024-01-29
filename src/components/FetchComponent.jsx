import React, { useEffect, useState } from 'react';
import './styling.css';

const FetchComponent = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.themoviedb.org/3/movie/popular?api_key=bca0b27dc3c2608802db6d8d9bf57c06';

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('API request failed');
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const filteredMovies = selectedGenre
    ? movies.filter(movie => movie.genre_ids.includes(parseInt(selectedGenre)))
    : movies;

  return (
    <div className='general-div'>
      <p>ALL MOVIES</p>
      <div>
        <select value={selectedGenre} onChange={handleGenreChange} className='dropdown'>
          <option value="">All Genres</option>
          <option value="18">Drama</option>
          <option value="28">Action</option>
          <option value="27">Horror</option>
          <option value="53">Thriller</option>
        </select>
      </div>
      <div className='myFetch-div'>
        {Array.isArray(filteredMovies) && filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <div key={movie.id} className='fetchedData'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p>Genres: {movie.genre_ids.join(', ')}</p>
            </div>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>
    </div>
  );
};

export default FetchComponent;
