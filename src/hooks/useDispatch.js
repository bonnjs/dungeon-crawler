import { useContext } from 'react';
import { DispatchContext } from '../contexts';

function useDispatch() {
  const dispatch = useContext(DispatchContext);

  return dispatch;
}

export default useDispatch;
