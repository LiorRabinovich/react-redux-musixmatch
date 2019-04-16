const initState = {
    trackActive: {
        lyrics: null
    }
}

const tracksReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_TRACK_LYRICS": {
            state = {
                ...state,
                trackActive: {...state.trackActive, lyrics: action.payload}
            }
            break;
        }
        default:
            break;
    }
    return state;
}

export default tracksReducer;