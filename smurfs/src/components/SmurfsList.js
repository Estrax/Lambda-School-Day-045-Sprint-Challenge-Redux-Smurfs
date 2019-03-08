import React from 'react';
import Smurf from './Smurf';
import styled from 'styled-components';

const Smurfs = styled.div`
    background: blue;
    padding: 50px 0;
`;

const SmurfsListTitle = styled.h1`
    color: white;
    text-align: center;
`;

const AllSmurfs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const SmurfsList = (props) => {
    return (
        <Smurfs>
            <SmurfsListTitle>Welcome to the Smurfs Village!</SmurfsListTitle>
            <AllSmurfs>
                {props.smurfs.map(smurf => <Smurf key={smurf.id} id={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />)}
            </AllSmurfs>
        </Smurfs>
    );
}

export default SmurfsList;
