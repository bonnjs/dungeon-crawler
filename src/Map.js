import React from "react";

// prettier-ignore
const tiles = [
	0, 1, 1, 1, 1, 0, 0, 0, 0,
	0, 1, 0, 0, 1, 0, 0, 0, 0,
	0, 1, 0, 0, 1, 0, 0, 0, 0,
	0, 1, 1, 1, 1, 0, 0, 0, 0
];
const width = 9;
const height = tiles.length / width;

function Map() {
	const output = [];
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const style = {
				position: "absolute",
				height: 16,
				width: 16,
				left: x * 16,
				top: y * 16,
				background: tiles[y * width + x] ? "black" : "lightgreen"
			};
			output.push(<div style={style} />);
		}
	}
	return <div style={{ display: "relative" }}>{output}</div>;
}

export default Map;
