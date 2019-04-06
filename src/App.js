import React, { useState, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import Player from "./components/Player.js";
import Map from "./components/Map.js";

const MOVE_UP = "MOVE_UP";
const MOVE_DOWN = "MOVE_DOWN";
const MOVE_LEFT = "MOVE_LEFT";
const MOVE_RIGHT = "MOVE_RIGHT";

function App() {
	const [state, dispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
				case MOVE_UP: {
					return state;
				}
				case MOVE_DOWN: {
					return state;
				}
				case MOVE_LEFT: {
					return state;
				}
				case MOVE_RIGHT: {
					return state;
				}
				default: {
					return state;
				}
			}
		},
		{
			// prettier-ignore
			tiles: [
        0, 1, 1, 1, 1, 0, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0, 0, 0,
      ],
			width: 9,
			entities: [{ type: "", position: [0, 0] }],
			player: { position: [0, 0], health: 100 }
		}
	);

	return (
		<div style={{ display: "relative" }}>
			<Map />
			<Player />
		</div>
	);
}

export default App;
