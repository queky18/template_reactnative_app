const initialState = {
    places : [],
    selectedPlace : null
};

// if we don't have a state we start with initial state
const reducer = (state = initialState, action) => {
    switch( action.type ) {
        default : 
            return state;
    } 
};

export default reducer;