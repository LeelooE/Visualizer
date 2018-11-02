import { connect } from "react-redux";
import { addDroplet } from "../actions/actions";
import React, { Component } from "react";
import uuidv1 from "uuid";

const mapDispatchToProps = dispatch => {
  return {
    addDroplet: droplet => dispatch(addDroplet(droplet))
  };
};

class ConnectedBox extends Component {
  constructor() {
    super();

    this.handleDroplet = this.handleDroplet.bind(this);
  }

  handleDroplet() {
    const left = this.props.left;
    const top = this.props.top;
    const color = this.props.color;
    const id = uuidv1();
    this.props.addDroplet({ left, top, color, id });
  }

  render() {
    return (
      <button 
      onClick={this.handleDroplet} 
      className="box"
      />
    )
  }
}

const Box = connect(
  null,
  mapDispatchToProps
)(ConnectedBox);

export default Box;