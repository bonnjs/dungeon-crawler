import React, { useReducer } from 'react';
import { StateContext, DispatchContext } from './contexts';

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer()

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default StoreProvider;
