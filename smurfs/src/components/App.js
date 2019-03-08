import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import SmurfsList from './SmurfsList';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsList smurfs={this.props.smurfs} />
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
