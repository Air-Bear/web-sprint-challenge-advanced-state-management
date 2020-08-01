import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const fetchSmurfData = () => dispatch =>{
    dispatch({ type: FETCH_START });

    axios.get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("api call success: ", res.data);
            dispatch({ type: FETCH_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log("api call failed: ", err);
            dispatch({ type: FETCH_FAIL, payload: err.message });
        });
}

export const postSmurfData = smurf => dispatch => {
    dispatch({ type: POST_START });

    axios.post("http://localhost:3333/smurfs", smurf)
        .then(res =>{
            console.log("post success: ", res.data);
            dispatch({ type: POST_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log("post failed: ", err);
            dispatch({ type: POST_FAIL, payload: err.message });
        });
};