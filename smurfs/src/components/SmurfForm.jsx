import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfData } from "../actions/smurfActions";

function SmurfForm(props){
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });

    const changeHandler = event => {
        setSmurf({
            ...smurf,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = event => {
        event.preventDefault();
        props.postSmurfData(smurf);
    };

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="name"></label>
                <input
                    type="text"
                    name="name"
                    label="name"
                    placeholder="enter name"
                    value={smurf.name}
                    onChange={changeHandler}
                />

                <label htmlFor="age"></label>
                <input
                    type="text"
                    name="age"
                    label="age"
                    placeholder="enter age"
                    value={smurf.age}
                    onChange={changeHandler}
                />

                <label htmlFor="height"></label>
                <input
                    type="text"
                    name="height"
                    label="height"
                    placeholder="enter height"
                    value={smurf.height}
                    onChange={changeHandler}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    };
};

export default connect(mapStateToProps, {postSmurfData})(SmurfForm);