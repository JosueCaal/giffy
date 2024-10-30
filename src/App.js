import React, {useState, useEffect} from 'react';
import './App.css';
import getGifs from './services/getGif';
import Gif from './components/Gif';
import ListOfGifs from './components/ListOfGifs';



function App() {

  return (
    <div className="App">
      <section className="App-content">
      <ListOfGifs keyword ="rick"></ListOfGifs>
      </section>
    </div>
  );
}

export default App;
