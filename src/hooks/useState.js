import { useContext } from 'react';
import { StateContext } from '../contexts';

function useState() {
  const state = useContext(StateContext);

  return state;
}

export default useState;
