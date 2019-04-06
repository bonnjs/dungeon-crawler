import React from "react";
import useStoreState from "../hooks/useStoreState";

function Entities() {
	const { entities } = useStoreState();

	const entitiesEl = entities.map((ent, index) => {
		const style = {
			position: "absolute",
			height: 16,
			width: 16,
			left: ent.position.x * 16,
			top: ent.position.y * 16,
			background: "red"
		};
		return <div key={index} style={style} />;
	})

	return <>{entitiesEl}</>;
}

export default Entities;
