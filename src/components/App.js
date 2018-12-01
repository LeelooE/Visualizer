import { connect } from "react-redux";
import React, { Component } from "react";
import Container from "./Container";
import { fetchData, fakefetchData } from '../actions/actions';

const mapStateToProps = state => ({
  working: state.working,
  droplets: state.droplets
});

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
    this.timer = setInterval(this.tick2, 10000);
    this.timer = setInterval(this.tick3, 20000);
    this.timer = setInterval(this.tick1, 30000);
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

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
