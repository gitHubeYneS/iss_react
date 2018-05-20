import React from "react";

const Position = ({ lat, lng }) => ( 
	<div className="Position">
		<div><b>ISS is now localed at:</b></div>
		<div><i>Lantitude: {lat}, Longtitude: {lng}</i></div>
	</div>
);

export default Position;