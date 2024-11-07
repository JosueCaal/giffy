import React, {useState, useEffect} from 'react';
import './App.css';
import getGifs from './services/getGif';
import Gif from './components/Gif';
import ListOfGifs from './components/ListOfGifs';
import Home from './pages/Homes/index.js';
import { Route, Link } from 'wouter';



function App() {

  return (
    <div className="App">
      <section className="App-content">

        <Route 
          component={Home}
          path="/" />
        <Route 
          component={ListOfGifs}
          path="/search/:keyword" />
        <Route 
          //component={Detail}
          path="/gif/:id" />
      </section>
    </div>
  );
}

export default App;
