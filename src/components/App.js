import React from 'react';
// import './App.css';
import StoreProvider from '../StoreProvider';
import Player from './Player';
import Map from './Map';

function App() {
  return (
    <StoreProvider>
      <div style={{ display: 'relative' }}>
        <Map />
        <Player />
      </div>
    </StoreProvider>
  );
}

export default App;
