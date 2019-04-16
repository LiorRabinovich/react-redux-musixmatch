const initState = {
    tracks: []
}

const tracksReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_TRACKS": {
            state = {
                ...state,
                tracks: action.payload
            }
            break;
        }
        default:
            break;
    }
    return state;
}

export default tracksReducer;