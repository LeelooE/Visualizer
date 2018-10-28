import React from "react";

//Puddle component that accepts props which can edit it's
//original style, this componenet can be reused.
const Droplet = props => (
  <div 
  className="droplet" 
  style={{
    left: props.left, 
    top: props.top, 
    animation: props.animation, 
    backgroundColor: props.backgroundColor,
  }}
  >
  </div>
);

export default Droplet;