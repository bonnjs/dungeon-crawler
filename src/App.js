import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

const MOVE_UP = 'MOVE_UP';
const MOVE_DOWN = 'MOVE_DOWN';
const MOVE_LEFT = 'MOVE_LEFT';
const MOVE_RIGHT = 'MOVE_RIGHT';

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case MOVE_UP: {
          return state;
        }
        case MOVE_DOWN: {
          return state;
        }
        case MOVE_LEFT: {
          return state;
        }
        case MOVE_RIGHT: {
          return state;
        }
        default: {
          return state;
        }
      }
    },
    {
      tiles: [
        0, 1, 1, 1, 1, 0, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0, 0, 0,
      ],
      width: 9,
      entities: [{ type: '', position: [0, 0] }],
      player: { position: [0, 0], health: 100 },
    }
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
