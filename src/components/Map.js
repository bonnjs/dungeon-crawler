import React from 'react';
import styled from 'styled-components';
import useStoreState from '../hooks/useStoreState';
import Player from './Player';
import DungeonTileset from '../DungeonTileset.png';

function indexToPosition({ index, width }) {
  return {
    x: index % width,
    y: Math.floor(index / width),
  };
}

const TileGrid = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(${props => props.width}, 16px);
  grid-template-rows: repeat(${props => props.height}, 16px);
  align-items: stretch;
  justify-items: stretch;
  background-color: lightgreen;
`;

const Tile = styled.div`
  background-image: url(${DungeonTileset});
  background-position: -16px -${props => (props.type === 1 ? 16 : 64)}px;
  grid-column: ${({ position }) => position.x + 1} / span 1;
  grid-row: ${({ position }) => position.y + 1} / span 1;
`;

function Map() {
  const { tiles, width } = useStoreState();
  const height = tiles.length / width;

  return (
    <TileGrid width={width} height={height}>
      {tiles.map(
        (tile, index) =>
          // eslint-disable-next-line react/no-array-index-key
          !!tile && <Tile key={index} type={tile} position={indexToPosition({ index, width })} />,
      )}
      <Player />
    </TileGrid>
  );
}

export default Map;
