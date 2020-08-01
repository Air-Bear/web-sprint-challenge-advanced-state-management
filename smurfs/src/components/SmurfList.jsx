import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { fetchSmurfData } from "../actions/smurfActions";

const SmurfList = props => {
    useEffect(()=>{
        props.fetchSmurfData();
    }, []);

    if(props.isFetching){
        return(<h1>loading...</h1>) 
    }
    
    return(
        <div>
            {props.smurfs.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return{ 
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(mapStateToProps, {fetchSmurfData})(SmurfList);