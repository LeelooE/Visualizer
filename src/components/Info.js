import React from "react";

const Info = props => (
  <div className="info">
    {props.p1visible && <div className="info-bar">
      <div className="info-item">
        <p>Puddle 1</p>
      </div>
      <div className="info-item">
      <p>X: {props.p1left}</p>
      <p>Y: {props.p1top}</p>
      </div>
    </div>}
    {props.p2visible && <div className="info-bar">
      <div className="info-item">
        <p>Puddle 2</p>
      </div>
      <div className="info-item">
        <p>X: {props.p2left}</p>
        <p>Y: {props.p2top}</p>
      </div>
    </div>}
  </div>
);

export default Info;
