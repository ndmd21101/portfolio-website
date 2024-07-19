import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body'; // Assuming Introduction.js exists

function App() {
  return (
    <div className="app">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
