import { connect } from "react-redux";
import { addDroplet } from "../actions/actions";
import React, { Component } from "react";
import Plate from "./Plate";
import Droplet from "./Droplet";
import Container from "./Container";
import uuidv1 from "uuid";

const mapDispatchToProps = dispatch => {
  return {
    addDroplet: droplet => dispatch(addDroplet(droplet))
  };
};

class ConnectedApp extends Component {
  //preset state of the css components that are passed down
  //puddle component, by editing these you can tell puddle
  //to perform certain animations or be set in the specific
  //place on the plate
  constructor() {
    super();
    this.state = {
      left1: "35px",
      top1: "155px",
      left2: "155px",
      top2: "155px",
      animation1: undefined,
      animation2: undefined,
      color1: "red",
      color2: undefined
    };
    this.handleDroplet = this.handleDroplet.bind(this);
    this.handleSubmit = this.handleSquare.bind(this);
    this.handleCircle = this.handleCircle.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleMix = this.handleMix.bind(this);
  }
  //This function sets the animation of puddle 1 (red puddle)
  //to square for 10s and this automatically is read by that
  //puddle because the state is passed onto it down in the
  //render area. All other onClick functions do the same thing
  //but with varying animations and for different durations.
  handleSquare = () => {
    this.setState({
      animation1: "square 10s"
    });
  };

  handleCircle = () => {
    this.setState({
      animation1: "circle 10s"
    });
  };

  //This resets all the states back to undefined and return
  //the plate display to original view.
  handleReset = () => {
    this.setState({
      animation1: undefined,
      animation2: undefined,
      color2: undefined
    });
  };
  handleMix = () => {
    this.setState({
      color2: "blue",
      animation2: "mix2 6.5s forwards",
      animation1: "mix1 10s forwards"
    });
  };
  handleDroplet() {
    const left = "155px";
    const top = "155px";
    const color = "black";
    const id = uuidv1();
    this.props.addDroplet({ left, top, color, id });
  }

  render() {
    return (
      <div className="app">
        <h1>Simulation</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Container />
          <div className="container">
            <Plate />
            <Droplet
              left={this.state.left1}
              top={this.state.top1}
              animation={this.state.animation1}
              backgroundColor={this.state.color1}
            />
            <Droplet
              left={this.state.left2}
              top={this.state.top2}
              animation={this.state.animation2}
              backgroundColor={this.state.color2}
            />
          </div>
        </div>
        <div className="buttons">
          <button onClick={this.handleSquare}>Square</button>
          <button onClick={this.handleCircle}>Circle</button>
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleMix}>Mix</button>
          <button onClick={this.handleDroplet}>Add Puddle</button>
        </div>
      </div>
    );
  }
}

const App = connect(
  null,
  mapDispatchToProps
)(ConnectedApp);

export default App;
