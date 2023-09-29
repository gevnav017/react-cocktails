import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './component/home';
import CocktailsList from './component/cocktailslist';
import Favorites from './component/favorites';

import { useSelector } from 'react-redux';

import './App.css';

function App() {

  const favorites = useSelector(state => state.favorites)
  const favCount = favorites.length

  return (
    <Router>
      <>
        <ul 
        className="App-header" 
        style={{
          display:'flex',
          justifyContent:'space-evenly',
          listStyle:'none',
          background:'darkblue',
          padding:'10px',
          margin:'0'
        }}
        >
          <li>
            <Link style={{textDecoration:'none', color:'white'}} to="/">Home</Link>
          </li>
          <li>
            <Link style={{textDecoration:'none', color:'white'}} to="/cocktails">Cocktails</Link>
          </li>
          <li>
            <Link style={{textDecoration:'none', color:'white'}} to="/favorites">Favorites ({favCount})</Link>
          </li>
        </ul>
        <Routes>
          <Route  path='/' element={< Home />}></Route>
          <Route  path='/cocktails' element={< CocktailsList />}></Route>
          <Route  path='/favorites' element={< Favorites />}></Route>
        </Routes>
      </>
    </Router>
  )
}

export default App
