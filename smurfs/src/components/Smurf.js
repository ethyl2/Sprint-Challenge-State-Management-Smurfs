import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const Smurf = props => {
    const handleClick = e => {
        console.log(
            'Time to delete the smurf of id: ', props.smurf.id
        );
        props.deleteSmurf(props.smurf.id);
    }

    return (
        <div>
            <button onClick={handleClick}>X</button>
            <h3>{props.smurf.name}</h3>
            <p>{props.smurf.age} Years Old</p>
            <p>{props.smurf.height} High</p>
        </div>
    )
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { deleteSmurf })(Smurf);