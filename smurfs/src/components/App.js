import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import SmurfsList from './SmurfsList';
import SmurfForm from './SmurfForm';

import styled from 'styled-components';

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AppTitle = styled.h1`
  color: blue;
  text-align: center;
`;

const Divider = styled.div`
  width: 100vw;
  height: 50px;
`;

const NewSmurf = styled.div`
  align-self: center;
  max-width: 250px;
`;

const NewSmurfTitle = styled.h2`
  text-align: center;
`;

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <AppDiv>
        <AppTitle>SMURFS Village! 2.0 w/ Redux</AppTitle>
        <SmurfsList smurfs={this.props.smurfs} />
        <Divider/>
        <NewSmurf>
          <NewSmurfTitle>Add New Smurf</NewSmurfTitle>
          <SmurfForm smurf={{name: undefined, age: undefined, height: undefined}} update={false} finishEditingSmurf={undefined} />
        </NewSmurf>
        <Divider/>
      </AppDiv>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfsFetching: state.smurfsFetching,
    smurfsFetched: state.smurfsFetched,
    smurfAdd: state.smurfAdd,
    smurfAdded: state.smurfAdded,
    smurfEdit: state.smurfEdit,
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
