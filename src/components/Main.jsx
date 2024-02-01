import { useState, useEffect } from 'react';
import FetchComponent from './FetchComponent';
import Search from './Search';
import './styling.css';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [query, setQuery] = useState('');

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

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

  const filteredMovies = movies.filter((item) => {
    const isInGenre = selectedGenre
      ? item.genre_ids.includes(parseInt(selectedGenre))
      : true;
    const isInTitle = item.title.toLowerCase().includes(query.toLowerCase());
    return isInGenre && isInTitle;
  });

  return (
    <div className="AppDiv">
      <Search
        query={query}
        onChangeHandler={onChangeHandler}
        selectedGenre={selectedGenre}
        
      />
      <FetchComponent filteredMovies={filteredMovies}  handleGenreChange={handleGenreChange}/>
    </div>
  );
};

export default Main;
