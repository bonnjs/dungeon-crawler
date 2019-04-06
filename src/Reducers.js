const WALL_NUMS = [1];

export const MOVE_UP = 'MOVE_UP';
export const MOVE_DOWN = 'MOVE_DOWN';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';

const IS_WALL = 'IS_WALL';
const IS_ENEMY = 'IS_ENEMY';
const IS_EMPTY = 'IS_EMPTY';
const IS_VOID = 'IS_VOID';

const lookAtPosition = (state, position) => {
  const mapWidth = state.width;
  const mapHeight = state.tiles.length / state.width;
  if (position.y < 0 || position.y >= mapHeight || position.x < 0 || position.x >= mapWidth) {
    return IS_VOID;
  }
  const location = state.tiles[position.y * state.width + position.x];
  // WALL CHECK
  const isWall = WALL_NUMS.includes(location);
  if (isWall) return IS_WALL;
  // ENEMY CHECK
  const enemyAtLocation = state.entities.find(
    obj => obj.position.x === position.x && obj.position.y === position.y,
  );
  const isEnemy = enemyAtLocation !== undefined;
  if (isEnemy) return IS_ENEMY;
  // DEFAULT
  return IS_EMPTY;
};

const getDamage = reduction => {
  const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

  let damage = 0;
  const isCrit = Math.random() > 0.75;
  damage += getRandomInt(20);
  if (isCrit) damage *= 2;
  if (reduction) damage /= reduction;
  if (damage < 0) damage = 0;
  damage = Math.round(damage);

  return { damage, isCrit };
};

const moveReducer = (oldState, action) => {
  const state = { ...oldState };
  if (state.player.health <= 0) {
    console.log(`You're dead`);
    return state;
  }

  const newPos = { x: state.player.position.x, y: state.player.position.y };
  switch (action.type) {
    case MOVE_UP:
      newPos.y -= 1;
      break;
    case MOVE_DOWN:
      newPos.y -= 1;
      break;
    case MOVE_LEFT:
      newPos.x -= 1;
      break;
    case MOVE_RIGHT:
      newPos.x -= 1;
      break;
    default:
  }
  const positionInfo = lookAtPosition(state, newPos);
  switch (positionInfo) {
    case IS_WALL:
      break;
    case IS_ENEMY: {
      const damageToEnemy = getDamage();
      const damageToPlayer = getDamage(2);
      const enemy = state.entities.find(
        obj => obj.position.x === newPos.x && obj.position.y === newPos.y,
      );
      const indexOfEnemy = state.entities.indexOf(enemy);

      enemy.health -= damageToEnemy.damage;
      if (enemy.health <= 0) {
        state.entities.splice(indexOfEnemy, 1);
      } else {
        state.entities[indexOfEnemy] = enemy;
      }
      state.player.health -= damageToPlayer.damage;
      if (state.player.health <= 0) {
        console.log(`You're dead`);
      }

      break;
    }
    case IS_EMPTY:
      state.player.position = newPos;
      break;
    case IS_VOID:
    default:
  }

  return state;
};

export default moveReducer;
