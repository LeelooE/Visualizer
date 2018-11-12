import React from "react";
import { connect } from "react-redux";
import Plate from "./Plate";


const ConnectedContainer = props => (
  <div className='container'>
    <Plate />
  </div>
);

const Container = connect(null)(ConnectedContainer);

export default Container;
