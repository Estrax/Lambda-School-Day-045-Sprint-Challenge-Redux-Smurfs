import React from 'react';
import { updateSmurf, deleteSmurf } from '../actions';
import { connect } from 'react-redux';

const Smurf = (props) => {
    return (
        <div className="smurf-item">
            <h1>Name: {props.name}</h1>
            <p>Age: {props.height}</p>
            <p>Height: {props.height}</p>
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
