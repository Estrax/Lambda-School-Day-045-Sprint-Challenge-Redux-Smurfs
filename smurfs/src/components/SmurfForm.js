import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, updateSmurf } from '../actions';
import styled from 'styled-components';

const SingleSmurfForm = styled.form`
    width: 100%;
    max-width: 200px;
`;

const SingleSmurfFormInput = styled.input`
    width: 100%;
    margin: 10px 0;
`;

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            name: '',
            age: '',
            height: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.addSmurf = this.addSmurf.bind(this);
        this.updateSmurf = this.updateSmurf.bind(this);
    }

    componentDidMount() {
        if(this.props.update){
            this.setState({
                name: this.props.smurf.name,
                age: this.props.smurf.age,
                height: this.props.smurf.height
            })
        }
    }

    handleInput(event) {
        event.preventDefault();
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
        this.props.updateSmurf({
            id: this.props.smurf.id,
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
        
        this.props.finishEditingSmurf();
    }

    render() {
        return (
            <SingleSmurfForm onSubmit={e => e.preventDefault()}>
                Name:
                <SingleSmurfFormInput
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={this.state.name}
                    onChange={this.handleInput}
                />
                Age:
                <SingleSmurfFormInput
                    type='text'
                    name='age'
                    placeholder='Age'
                    value={this.state.age}
                    onChange={this.handleInput}
                />
                Height:
                <SingleSmurfFormInput
                    type='text'
                    name='height'
                    placeholder='Height'
                    value={this.state.height}
                    onChange={this.handleInput}
                />
                
                {!this.props.update &&
                    <SingleSmurfFormInput
                        type="submit"
                        onClick={this.addSmurf}
                        value="Add smurf"
                    />
                }
                
                {this.props.update &&
                    <SingleSmurfFormInput
                        type="submit"
                        onClick={this.updateSmurf}
                        value="Update smurf"
                    />
                }
            </SingleSmurfForm>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
};

const mapDispatchToProps = {
    addSmurf,
    updateSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);
