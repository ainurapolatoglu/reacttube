//React core
import React from 'react';

//Assets and style
import logo from './logo.svg';
import './App.css';

//Components
import Card from './organism/Card.js'

function App() {
//Data

  const information = require('./information.json');
  const cards = information.map((item) =>
    <Card key={item.id} title={item.title} channelName={item.channelName} />
  )

  // Render
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {cards}      
      </header>
    </div>
  );
}

export default App;
