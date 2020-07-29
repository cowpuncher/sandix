import React from 'react';
import Header from './conponents/Header/Header.js'
import Footer from './conponents/Footer/Footer'
import "../src/App.css";
import {Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
        <Header />
        <Footer />
    </div>
  );
}

export default App;
