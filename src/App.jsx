import { useState } from 'react'
import './App.css'
import moon from './assets/moon.png'
import sun from './assets/sun.jpg'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleDarkMode = () => {
    setIsDarkTheme(previousState => !previousState);
    document.body.classList.toggle('darkMode');
  }

  return (
    <div className={isDarkTheme ? 'darkMode' : 'lightMode'}>
      <div>
        <button onClick={handleDarkMode} className='btn'>{isDarkTheme ? <img src={sun} alt="sun" className='myImage' /> : <img src={moon} alt="moon" className='myImage' />}</button>

      </div>
    </div>
  )
}

export default App
