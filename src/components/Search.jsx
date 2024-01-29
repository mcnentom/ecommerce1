import React, { useState, useEffect } from 'react';

const SearchBar = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    const onChangeHandler = (e) => {
        setQuery(e.target.value);
    }

    const fetchMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=bca0b27dc3c2608802db6d8d9bf57c06&query=${query}`);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
            setMovies([]);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <div className='search'>
                <input
                    type="text"
                    onChange={onChangeHandler}
                    value={query}
                    placeholder="Enter movie name"
                />
                <button type="button" onClick={fetchMovies}>Search</button>
            </div>
            <div>
                {movies.map(movie => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <p><strong>Description:</strong> {movie.overview}</p>
                        <p><strong>Release Date:</strong> {movie.release_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;
