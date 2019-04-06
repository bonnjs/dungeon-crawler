import { useContext } from 'react';
import { StateContext } from '../contexts';

function useStoreState() {
  const state = useContext(StateContext);

  return state;
}

export default useStoreState;
