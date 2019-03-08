import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';

class SmurfsList extends Component {

    render() {
        return (
            <div className="smurfs-list">
                {this.props.smurfs.map(smurf => <Smurf key={smurf.id} id={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = {
    getSmurfs
}

export default connect(mapStateToProps, mapDispatchToProps)(SmurfsList);