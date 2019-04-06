import React, { useEffect } from 'react';
import useStoreState from '../hooks/useStoreState';
import useDispatch from '../hooks/useDispatch';
import { MOVE_LEFT, MOVE_UP, MOVE_RIGHT, MOVE_DOWN } from '../Reducers';

// const player = { position: { x: 2, y: 1 }, health: 100 };

function Player() {
  const { player } = useStoreState();
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('keydown', e => {
      const [LEFT, UP, RIGHT, DOWN] = [37, 38, 39, 40];

      switch (e.keyCode) {
        case LEFT:
          dispatch({ type: MOVE_LEFT });
          break;
        case UP:
          dispatch({ type: MOVE_UP });
          break;
        case RIGHT:
          dispatch({ type: MOVE_RIGHT });
          break;
        case DOWN:
          dispatch({ type: MOVE_DOWN });
          break;
        default:
      }
    });
  }, []);

  const style = {
    position: 'absolute',
    height: 16,
    width: 16,
    left: player.position.x * 16,
    top: player.position.y * 16,
    background: 'blue',
  };
  return <div style={style} />;
}

export default Player;
