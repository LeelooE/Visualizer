import React from "react";
import { connect } from "react-redux";
import Droplet from "./Droplet";
import Plate from "./Plate";

const mapStateToProps = state => {
  return { droplets: state.droplets };
};

const ConnectedContainer = ({ droplets }) => (
  <div className='container'>
    <Plate />
    {droplets.map(el => (
      <Droplet
        key={el.id}
        left={el.left}
        top={el.top}
        backgroundColor={el.color}
      />
    ))}
  </div>
);

const Container = connect(mapStateToProps)(ConnectedContainer);

export default Container;
