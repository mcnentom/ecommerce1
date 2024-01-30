import React, { useEffect, useState } from 'react';
import './styling.css';

const FetchComponent = ({handleGenreChange, filteredMovies,selectedGenre }) => {
  return (
    <div className='general-div'>
      <p className='ptagVal'>ALL MOVIES</p>
      <div className='selectDiv'>
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
