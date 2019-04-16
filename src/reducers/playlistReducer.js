const playlistStorage = localStorage.getItem('playlist');
const playlistSortStorage = localStorage.getItem('playlist-sort');

let initState = {
    tracks: (playlistStorage ? JSON.parse(playlistStorage) : []),
    maxTracks: 19,
    sortOption: (playlistSortStorage ? playlistSortStorage : null)
}

const playlistReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TO_PLAYLIST": {
            state = {
                ...state,
                tracks: [action.payload, ...state.tracks],
                sortOption: null
            }
            break;
        }
        case "REMOVE_FROM_PLAYLIST": {
            let tracks = state.tracks;
            tracks = tracks.filter((val) => {
                return val.track.track_id !== action.payload.track.track_id
            });

            state = {
                ...state,
                tracks,
                sortOption: null
            }
            break;
        }
        case "SET_PLAYLIST": {
            state = {
                ...state,
                tracks: action.payload.playlist,
                sortOption: action.payload.sortOption
            }
            break;
        }
        default:
            break;
    }
    return state;
}

export default playlistReducer;