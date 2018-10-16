import React from "react";

//Puddle component that accepts props which can edit it's
//original style, this componenet can be reused.
const Puddle = props => (
  <div className="puddle" style={{left: props.left, top: props.top, animation: props.animation, backgroundColor: props.backgroundColor}}>
  </div>
);

export default Puddle;