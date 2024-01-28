import React, { useEffect, useState } from 'react';

const FetchComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.themoviedb.org/3/movie/popular?api_key=bca0b27dc3c2608802db6d8d9bf57c06';
      
      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('API request failed');
        }
        
        const data = await response.json();
        setMovies(data.results); // Assuming movie data is in the 'results' field
      } catch (error) {
        console.error(error);
        // Handle API errors
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <p>ALL MOVIES</p>
      {Array.isArray(movies) && movies.length > 0 ? (
        movies.map(movie => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p><strong>Description:</strong> {movie.overview}</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p>Genre:{}</p>
          </div>
        ))
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
};

export default FetchComponent;
