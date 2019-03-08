import React, { Component } from 'react';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';

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
            <div className="smurf-item">
                {!this.state.editSmurf &&
                    <div>
                        <h1>Name: {this.props.name}</h1>
                        <p>Age: {this.props.age}</p>
                        <p>Height: {this.props.height}</p>
                        <button onClick={() => this.editSmurf()}>Edit</button>
                        <button onClick={() => this.props.deleteSmurf(this.props.id)}>Delete</button>
                    </div>
                }
                {this.state.editSmurf &&
                    <SmurfForm smurf={{id: this.props.id, name: this.props.name, age: this.props.age, height: this.props.height}} update={true} finishEditingSmurf={this.finishEditingSmurf} />
                }
            </div>
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
