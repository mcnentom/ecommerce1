import { useState } from 'react'
import './App.css'
import FetchComponent from './Components/FetchComponent'
import SearchBar from './Components/searchBar'

function App() {
  
  return (
    <>
    <h1>Top 100 IBMb movies </h1>
      <SearchBar/>
      <FetchComponent/>
    </>
  )
}

export default App
