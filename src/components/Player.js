import React from "react";

const player = { position: { x: 2, y: 1 }, health: 100 };

function Player() {
	const style = {
		position: "absolute",
		height: 16,
		width: 16,
		left: player.position.x * 16,
		top: player.position.y * 16,
		background: "blue"
	};
	return <div style={style} />;
}

export default Player;
