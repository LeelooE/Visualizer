import React from "react";
import Box from "./Box";
import { connect } from "react-redux";
import Droplet from "./Droplet";

const mapStateToProps = state => {
  return {
    droplets: state.droplets
  };
};

const ConnectedPlate = ({ droplets }) => (
  <div className="plate">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    {droplets.map(el => {
      let width = el.volume * 15;
      let height = el.volume * 15;
      let left =
        el.location.x > 0 ? el.location.x * 60 + ((60 - width)/2) : ((60 - width)/2);
      let top =
        el.location.y > 0 ? el.location.y * 60 + ((60 - width)/2) : ((60 - width)/2);
      return (
        <Droplet
          key={el.id}
          top={`${top}px`}
          left={`${left}px`}
          backgroundColor={el.color}
          width={`${width}px`}
          height={`${height}px`}
        />
      );
    })}
  </div>
);

const Plate = connect(mapStateToProps)(ConnectedPlate);
export default Plate;
