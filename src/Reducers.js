const WALL_NUMS = [ 1 ];

const IS_WALL = 'IS_WALL';
const IS_ENEMY = 'IS_ENEMY';
const IS_EMPTY = 'IS_EMPTY';

const lookAtPosition = (state, position) => {
  const location = state.tiles[position.y * state.width + position.x];
  console.log('Checking location', location, 'at position', position);
  // WALL CHECK
  const isWall = WALL_NUMS.includes(location);
  if (isWall) return IS_WALL;
  // ENEMY CHECK
  const enemyAtLocation = state.entities
  .find(obj => obj.position.x === position.x && obj.position.y === position.y);
  const isEnemy = enemyAtLocation !== undefined;
  if (isEnemy) return IS_ENEMY;
  // DEFAULT
  return IS_EMPTY;
};

const moveReducer = (state, action) => {
  let newPos = { x: state.player.x, y: state.player.y };
  switch (action.type) {
    case MOVE_UP: newPos.y--;
    case MOVE_DOWN: newPos.y++;
    case MOVE_LEFT: newPos.x--;
    case MOVE_RIGHT: newPos.x++;
  }
  const positionInfo = lookAtPosition(state, newPos);
  console.log('Got location info:', positionInfo);
  switch (positionInfo) {
    IS_WALL:
      return state;
    IS_ENEMY:
      return state;
    IS_EMPTY:
      state.player.position = newPos;
      return state;
    default:
      return state;
  }
}
