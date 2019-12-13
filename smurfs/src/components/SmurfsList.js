import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';

const SmurfsList = props => {
    return (
        <div>
            <button onClick={props.getSmurfs}>Get Smurfs</button>
            {!props.smurfs && <h3>Go ahead, click for Smurfs!</h3>}
            {props.error && <p>{props.error}</p>}
            {props.isFetching && <p>Loading Smurfs...</p>}
            {props.smurfs && props.smurfs.map(smurf => {
                return (
                    <Smurf key={smurf.id} smurf={smurf} />
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