import React from 'react';
import './App.css';
import StoreProvider from './StoreProvider';
import Player from './components/Player';
import Map from './components/Map';
import Entities from "./components/Entities.js";

function App() {
  return (
    <StoreProvider>
      <div style={{ display: 'relative' }}>
        <Map />
        <Entities />
        <Player />
      </div>
    </StoreProvider>
  );
}

export default App;
