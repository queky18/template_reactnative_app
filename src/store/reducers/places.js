import {
    ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE
} from '../actions/actionTypes';

// Take into account the initial state
const initialState = {
    places : [],
    selectedPlace : null
};

//if we don't have a state we start with initial state
const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case ADD_PLACE :
            return {
                ...state,
                places: state.places.concat({
                    key : Math.random(),
                    name : action.placeName,
                    image : {
                      uri : "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-1/c144.0.813.813a/s160x160/46221961_972315006291212_8670713817212125184_n.jpg?_nc_cat=108&_nc_ht=scontent.ftsr1-1.fna&oh=d17001d7c9eadeaf9c0e71a82d1c61c5&oe=5CCBC064"
                    }
                })
            };
        case DELETE_PLACE :
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace : null
            };
        case SELECT_PLACE : 
            return {
                ...state,
                selectedPlace : state.places.find(place => {
                    return place.key === action.placeKey;
                })
            }
        case DESELECT_PLACE :
            return {
                ...state,
                selectedPlace : null
            }
        default : 
            return state;
    } 
};

export default reducer;