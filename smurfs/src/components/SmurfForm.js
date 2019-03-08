import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, updateSmurf } from '../actions';

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.smurf.name || '',
            age: this.props.smurf.age || '',
            height: this.props.smurf.height || ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.addSmurf = this.addSmurf.bind(this);
        this.updateSmurf = this.updateSmurf.bind(this);
    }

    handleInput(event) {
        event.preventDefault;
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addSmurf(event) {
        event.preventDefault();

        this.props.addSmurf({
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        });

        this.setState({
            ...this.state,
            name: '',
            age: '',
            height: ''
        });
    }

    updateSmurf(event) {
        event.preventDefault();

        this.props.addSmurf({
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        });

        this.setState({
            ...this.state,
            name: '',
            age: '',
            height: ''
        });
    }

    render() {
        return (
            <form>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={this.state.name}
                    onChange={this.handleInput}
                />
                <input
                    type='text'
                    name='age'
                    placeholder='Age'
                    value={this.state.age}
                    onChange={this.handleInput}
                />
                <input
                    type='text'
                    name='height'
                    placeholder='Height'
                    value={this.state.height}
                    onChange={this.handleInput}
                />
                <input
                    type="submit"
                    onClick={this.addSmurf}
                />
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        smurfAdd: state.smurfAdd,
        smurfAdded: state.smurfAdded,
        smurfUpdate: state.smurfUpdate,
        smurfUpdated: state.smurfUpdated,
        error: state.error,
    }
};

const mapDispatchToProps = {
    addSmurf,
    updateSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);
