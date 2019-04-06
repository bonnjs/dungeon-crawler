const WALL_NUMS = [ 1 ];

const MOVE_UP = 'MOVE_UP';
const MOVE_DOWN = 'MOVE_DOWN';
const MOVE_LEFT = 'MOVE_LEFT';
const MOVE_RIGHT = 'MOVE_RIGHT';

const IS_WALL = 'IS_WALL';
const IS_ENEMY = 'IS_ENEMY';
const IS_EMPTY = 'IS_EMPTY';
const IS_VOID = 'IS_VOID';

const lookAtPosition = (state, position) => {
  const mapWidth = state.width;
  const mapHeight = state.tiles / state.width;
  if (position.y < 0 || position.y > mapHeight || position.x < 0 || position.x > mapWidth) {
    return IS_VOID;
  }
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
    case IS_WALL:
      return state;
    case IS_ENEMY:
      state.entities
        .find(obj => obj.position.x === newPos.x && obj.position.y === newPos.y)
        .health -= getDamage();
      state.player.health -= getDamage();
      return state;
    case IS_EMPTY:
      state.player.position = newPos;
      return state;
    case IS_VOID:
    default:
      return state;
  }
};

const getDamage = (reduction) => {
  const getRandomInt = (max) =>
    Math.floor(Math.random() * Math.floor(max));

  let damage = 0;
  const isCrit = Math.random() > 0.75;
  damage += getRandomInt(20);
  if (isCrit) damage *= 2;
  if (reduction) damage -= reduction;
  if (damage < 0) damage = 0;

  return { damage, isCrit };
};

export default moveReducer;
