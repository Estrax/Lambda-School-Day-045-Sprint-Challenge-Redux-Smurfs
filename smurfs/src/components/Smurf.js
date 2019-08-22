import React, { Component } from 'react';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';
import styled from 'styled-components';

const SingleSmurf = styled.div`
    background: white;
    width: 200px;
    height: 200px;
    font-weight: 100;
    border: 8px solid cyan;
    padding: 10px;
    display: inline-block;
    position: relative;
    margin: 20px 0;
`;

const SmurfBtnLeft = styled.button`
    background: blue;
    color: white;
    width: 50%;
    position: absolute;
    bottom: 20px;
    left: 0;
`;

const SmurfBtnRight = styled.button`
    background: blue;
    color: white;
    width: 50%;
    position: absolute;
    bottom: 20px;
    right: 0;
`;

class Smurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editSmurf: false
        }

        this.editSmurf = this.editSmurf.bind(this);
        this.finishEditingSmurf = this.finishEditingSmurf.bind(this);
    }

    editSmurf() {
        this.setState({
            ...this.state,
            editSmurf: true
        });
    }

    finishEditingSmurf() {
        this.setState({
            ...this.state,
            editSmurf: false
        })
    }

    render() {
        return (
            <SingleSmurf>
                {!this.state.editSmurf &&
                    <div>
                        <h3>Name: {this.props.name}</h3>
                        <p>Age: {this.props.age}</p>
                        <p>Height: {this.props.height}</p>
                        <SmurfBtnLeft onClick={() => this.editSmurf()}>Edit</SmurfBtnLeft>
                        <SmurfBtnRight onClick={() => this.props.deleteSmurf(this.props.id)}>Delete</SmurfBtnRight>
                    </div>
                }
                {this.state.editSmurf &&
                    <SmurfForm smurf={{id: this.props.id, name: this.props.name, age: this.props.age, height: this.props.height}} update={true} finishEditingSmurf={this.finishEditingSmurf} />
                }
            </SingleSmurf>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        smurfUpdate: state.smurfUpdate,
        smurfUpdated: state.smurfUpdated
    }
};

const mapDispatchToProps = {
    deleteSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(Smurf);
