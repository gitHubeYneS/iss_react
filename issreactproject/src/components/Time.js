import React from "react";
import moment from "moment";

const Time = ({ time }) => {
	const currentTime = new Date(time * 1000);
	const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

	return ( 
    <div className="Time">
      <div><b>Current UTC time: {hours}:{minutes}</b></div> 
      <div><i>{moment(time*1000).format('dddd, Do MMM YYYY')}</i></div> 
    </div>
	)
}

export default Time;
