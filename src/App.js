import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './pages/Homes/index.js';
import { Route, Link } from 'wouter';
import searchResults from './pages/SearchResults/index.js';
import Detail from './pages/Detail/index.js';
import StaticContext from './context/StaticContext.js';
import { GifsContextProvider } from './context/GifsContext.js';


function App() {

  return (
    <StaticContext.Provider value={{  name:'cesar',suscribete: true}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className='App-logo' alt='giffy-logo' src='/logogiff.png'/>
          </Link>
          <GifsContextProvider>
            <Route 
              component={Home}
              path="/" />
            <Route 
              component={searchResults}
              path="/search/:keyword" />
            <Route 
              component={Detail}
              path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
