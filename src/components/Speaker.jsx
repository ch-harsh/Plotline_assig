import React from "react";
function Speaker(props) {
  return (
    <div>
      <div className="speaker">
        <img className="speaker-img" src={props.img} alt="speaker-img" />
        <p className="speaker-name">{props.name}</p>
        <p className="time">{props.time}</p>
      </div>
      <div className="comment">{props.comment}</div>
    </div>
  );
}
export default Speaker;
