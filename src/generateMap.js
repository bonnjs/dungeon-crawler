function getRandomFloatBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomPosition({ width, height }) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);

  return { x, y };
}

function getRandomRoomIncludingPoint(
  { x, y },
  {
    minWidth = 3,
    maxWidth = 12,
    minHeight = 3,
    maxHeight = 12,
  }
) {
  const width = Math.round(getRandomFloatBetween(minWidth, maxWidth));
  const height = Math.round(Math.random() * (maxHeight - minHeight)) + minHeight;
  const relativeOrigin = getRandomPosition({ width, height });
  const origin = { x: x - relativeOrigin.x, y: y - relativeOrigin.y };

  return { origin, width, height };
}

function getClusterOfRoomsIncludingPoint({ x, y }, { min = 1, max = 6 }) {
  const count = Math.ceil(getRandomFloatBetween(min, max));

  let rooms = []

  for (let index = 0; index < count; index += 1) {
    rooms = [...rooms, getRandomRoomIncludingPoint({x, y})];
  }

  return rooms;
}

function generateMap({ width = 256, height = 256 }) {
  // generate empty map
  let map = []
  for (let column = 0; column < width; column += 1) {
    map.push([])

    for (let row = 0; row < height; row += 1) {
      map[column].push(0);
    }
  }

  // gengerate clusters of overlapping rooms
  let rooms = [];
  const clusterCount = getRandomFloatBetween(width/24, width/12);

  for (let index = 0; index < clusterCount; index += 1) {
    const pointOfIntersection = {
      x: Math.floor(getRandomFloatBetween(0, width)),
      y: Math.floor(getRandomFloatBetween(0, height)),
    }
    const intersectingRooms = getClusterOfRoomsIncludingPoint(pointOfIntersection)

    rooms = [...rooms, ...intersectingRooms];
  }

  // fill map
  rooms.forEach(({ origin, width, heigth }) => {
    for (let column = origin.x; column < origin.x + width; column += 1) {
      for (let row = origin.y; row < origin.y + height; row += 1) {
        map[column][row] = 1;
      }
    }
  });

  // generate pathways between the rooms

  // generate entities

  // place player
}
