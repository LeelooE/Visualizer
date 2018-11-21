import { connect } from "react-redux";
import React, { Component } from "react";
import Container from "./Container";
import { fetchData } from '../actions/actions';
import { fakefetchData } from '../actions/actions';

const mapStateToProps = state => ({
  working: state.working
});

class ConnectedApp extends Component {
  componentDidMount() {
    this.props.dispatch(fakefetchData(1)); //starts with one droplet using number 1 as an input
  }

  
  render() {
    const {working} = this.props;
    return (
      <div className="app">
      {console.log(working)}
        <h1>Simulation</h1>
          <Container />
      </div>
    );
  }
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
