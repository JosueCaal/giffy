import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './pages/Homes/index.js';
import { Route, Link } from 'wouter';
import searchResults from './pages/SearchResults/index.js';
import StaticContext from './context/StaticContext.js';
import Detail from './pages/Detail/index.js';



function App() {

  return (

      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className='App-logo' alt='giffy-logo' src='/logogiff.png'/>
          </Link>
          <Route 
            component={Home}
            path="/" />
          <Route 
            component={searchResults}
            path="/search/:keyword" />
          <Route 
            component={Detail}
            path="/gif/:id" />
        </section>
      </div>
  );
}

export default App;
