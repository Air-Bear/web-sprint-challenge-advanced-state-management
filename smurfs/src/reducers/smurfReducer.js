import { 
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAIL,
    POST_START,
    POST_SUCCESS,
    POST_FAIL 
} from "../actions/smurfActions";

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ""
};

const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return{
                ...state,
                isFetching: true
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ""
            };
        case FETCH_FAIL:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            };
        case POST_START:
            return{
                ...state,
                isPosting: true,
                smurfs: [...state.smurfs]
            };
        case POST_SUCCESS:
            console.log(action.payload);
            return{
                ...state,
                isPosting: false,
                smurfs: action.payload
            };
        case POST_FAIL:
            return{
                ...state,
                isPosting: false,
                err:action.payload
            };
        default:
            return state;
    }
}

export default smurfReducer;