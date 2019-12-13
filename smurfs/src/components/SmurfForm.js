import React, { useState } from 'react';
//import { connect } from 'react-redux';
//import { addSmurf } from '../actions';

const SmurfForm = props => {
    const [smurf, setSmurf] = useState({name: '', age: 0, height: ''});
    

    const handleChanges = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value});
    }

    const submitForm = e => {
        e.preventDefault();
        console.log(smurf);
        const newSmurf = {...smurf, id: Date.now()}
        console.log(newSmurf);
        //props.addSmurf(newSmurf);
        setSmurf({name: '', age: 0, height: ''});
    }

    return (
        <div>
        <h2>Add a Smurf</h2>
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name: </label>
            <input
                id='name'
                name='name'
                type='text'
                onChange={handleChanges}
                value={smurf.name}
            />
            <br />

            <label htmlFor='age'>Age: </label>
            <input
                id='age'
                name='age'
                type='number'
                onChange={handleChanges}
                value={smurf.age}
            />
            <br />

            <label htmlFor='height'>Height: </label>
            <input
                id='height'
                name='height'
                type='text'
                onChange={handleChanges}
                value={smurf.height}
            />
            <br />

            <button type='submit'>Submit Smurf</button>

        </form>
        </div>
    )
}

export default SmurfForm;