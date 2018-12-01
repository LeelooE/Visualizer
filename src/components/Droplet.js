import React from "react";

const Droplet = props => (
  <div 
  className="droplet" 
  style={{
    left: props.left, 
    top: props.top, 
    animation: props.animation, 
    backgroundColor: props.backgroundColor,
    width: props.width,
    height: props.height,
  }}
  >
  </div>
);

export default Droplet;