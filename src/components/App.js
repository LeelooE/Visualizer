import { connect } from "react-redux";
import React, { Component } from "react";
import Container from "./Container";
import { fetchData, transition } from '../actions/actions';
import { fakefetchData } from '../actions/actions';

const mapStateToProps = state => ({
  working: state.working,
  droplets: state.droplets
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   transition: (prevLocation, newLocation) => dispatch(transition(prevLocation, newLocation))
// });

class ConnectedApp extends Component {
  tick1 = () => {
    this.props.dispatch(fakefetchData(1));
  }
  tick2 = () => {
    this.props.dispatch(fakefetchData(2));
  }
  tick3 = () => {
    this.props.dispatch(fakefetchData(3));
  }
  
  componentDidMount() {
    this.props.dispatch(fakefetchData(1)); 
    this.timer = setInterval(this.tick2, 5000);
    this.timer = setInterval(this.tick3, 10000);
    this.timer = setInterval(this.tick1, 15000);
  }
  componentDidUpdate(prevProps) {
    const prevDroplets = prevProps.droplets;
    const newDroplets = this.props.droplets;
    if(prevDroplets !== newDroplets) {
      for(var i = 0; i < newDroplets.length; i++) {
          const id = newDroplets[i].id;
          let sum = 0;
          for(var j = 0; j < prevDroplets.length; j++) {
            const prevId = prevDroplets[j].id;
            if (prevId === id) {
              console.log("probably moving or stationary");
              // if(prevId.location !== id.location) {
              //   this.props.transition(prevId.location, id.location);
              // }
            }
            sum = sum + prevDroplets[j].id;
            if(sum === id){
              console.log("mixing maybe");
            }
          }
      }
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Simulation</h1>
          <Container />
      </div>
    );
  }
}

const App = connect(
  mapStateToProps, 
  //mapDispatchToProps
  )(ConnectedApp);

export default App;
