import React from 'react';
import { updateSmurf, deleteSmurf } from '../actions';
import { connect } from 'react-redux';

const Smurf = (props) => {
    return (
        <div className="smurf-item">
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
            <button>Edit</button>
            <button onClick={() => props.deleteSmurf(props.id)}>Delete</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = {
    updateSmurf,
    deleteSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(Smurf);
