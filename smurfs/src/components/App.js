import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    console.log(this.props.smurfs);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfsFetching: state.smurfsFetching,
    smurfsFetched: state.smurfsFetched,
    smurfAdd: state.smurfAdd,
    smurfAdded: state.smurfAdded,
    smurfUpdate: state.smurfUpdate,
    smurfUpdated: state.smurfUpdated,
    smurfDelete: state.smurfDelete,
    smurfDeleted: state.smurfDeleted,
    error: state.error,
    smurfs: state.smurfs
  }
}

const mapDispatchToProps = {
  getSmurfs
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
