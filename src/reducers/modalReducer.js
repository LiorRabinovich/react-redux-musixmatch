const initState = {
    modalActive: {}
}

const tracksReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_MODAL_ACTIVE": {
            state = {
                ...state,
                modalActive: action.payload
            }
            break;
        }
        case "CLOSE_MODAL": {
            state = {
                ...state,
                modalActive: {}
            }
            break;
        }
        default:
            break;
    }
    return state;
}

export default tracksReducer;