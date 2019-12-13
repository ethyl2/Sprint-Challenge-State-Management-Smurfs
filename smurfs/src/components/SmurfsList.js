import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

const SmurfsList = props => {
    return (
        <div>
            <button onClick={props.getSmurfs}>Get Smurfs</button>
            {!props.smurfs && <h3>Go ahead, click for Smurfs!</h3>}
            {props.error && <p>{props.error}</p>}
            {props.isFetching && <p>Loading Smurfs...</p>}
            {props.smurfs && props.smurfs.map(smurf => {
                return (
                    <div key={smurf.id}>
                        <h3>{smurf.name}</h3>
                        <p>{smurf.age} Years Old</p>
                        <p>{smurf.height} High</p>
                    </div>
                )
                })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, { getSmurfs })(SmurfsList);