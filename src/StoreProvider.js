import React, { useReducer } from 'react';
import { StateContext, DispatchContext } from './contexts';
import rootReducer from './Reducers';

const initialState = {
  /* eslint-disable prettier/prettier */
  tiles: [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,
  0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0,
  0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0,
  0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0,
  0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0,
  0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0,
  0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0,
  0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0,
  0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0,
  0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  /* eslint-enable prettier/prettier */
  width: 22,
  entities: [],
  player: { position: { x: 2, y: 2 }, health: 100 },
};

function getRandomEntities(tiles, mapWidth) {
  const entities = [];
  for (let i = 0; i < tiles.length; i += 1) {
    /* eslint-disable no-continue */
    if (tiles[i] !== 0) {
      continue;
    }
    const shouldGenerate = Math.random() <= 0.05;
    if (!shouldGenerate) {
      continue;
    }
    /* eslint-enable no-continue */
    const newEntity = {
      position: {
        x: i % mapWidth,
        y: Math.floor(i / mapWidth),
      },
      type: 'enemy',
      health: Math.ceil(Math.random() * 100),
    };
    entities.push(newEntity);
  }
  return entities;
}

initialState.entities = getRandomEntities(initialState.tiles, initialState.width);

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <StateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
    );
}

export default StoreProvider;
