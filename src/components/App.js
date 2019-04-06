import React from 'react';
// import './App.css';
import StoreProvider from '../StoreProvider';
import Player from './Player';
import Map from './Map';
import Entities from './Entities';

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
