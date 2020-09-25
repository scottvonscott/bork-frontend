


function healthReducer (state= {}, action) {
    // Passing in initial state, and the action desired.
    switch (action.type) {
        case "ADD":
            return {...state, };
            // remember to use the spread operator as to not erase the other state properties/values.
        case "SUBTRACT":
            return {...state, };
            default:
                return state;
    }
}

export default healthReducer;