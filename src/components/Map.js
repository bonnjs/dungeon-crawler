import React from 'react';
import useStoreState from '../hooks/useStoreState';

// prettier-ignore
// const tiles = [
// 	0, 1, 1, 1, 1, 0, 0, 0, 0,
// 	0, 1, 0, 0, 1, 0, 0, 0, 0,
// 	0, 1, 0, 0, 1, 0, 0, 0, 0,
// 	0, 1, 1, 1, 1, 0, 0, 0, 0
// ];
// const width = 9;

function Map() {
	const { tiles, width } = useStoreState();
	const height = tiles.length / width;

	const output = [];
	for (let y = 0; y < height; y += 1) {
		for (let x = 0; x < width; x += 1) {
			const index = y * width + x;
			const style = {
				position: "absolute",
				height: 16,
				width: 16,
				left: x * 16,
				top: y * 16,
				background: tiles[index] ? "black" : "lightgreen"
			};
			output.push(<div key={index} style={style} />);
		}
	}
	return <>{output}</>;
}

export default Map;
