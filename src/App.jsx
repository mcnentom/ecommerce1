import { useState, useEffect } from 'react';
import './App.css';
import moon from './assets/moon.png';
import sun from './assets/sun.jpg';
import FetchComponent from './components/FetchComponent'
import SearchBar from './components/Search'
import Main from './components/Main'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('isDarkTheme') === 'true'
  );

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
    localStorage.setItem('isDarkTheme', isDarkTheme);
  }, [isDarkTheme]);

  const handleDarkMode = () => {
    setIsDarkTheme((previousState) => !previousState);
  };

  return (
    <div className={isDarkTheme ? 'darkMode' : 'lightMode'}>
      <div>
        <button onClick={handleDarkMode} className='btn'>
          {isDarkTheme ? (
            <img src={sun} alt='sun' className='myImage' />
          ) : (
            <img src={moon} alt='moon' className='myImage' />
          )}
        </button>
      </div>
      <Main/>
    </div>
  );
}

export default App;
