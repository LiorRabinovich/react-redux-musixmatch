import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import trackReducer from './reducers/trackReducer';
import tracksReducer from './reducers/tracksReducer';
import playlistReducer from './reducers/playlistReducer';
import modalReducer from './reducers/modalReducer';

const store = createStore(
    combineReducers({
        trackReducer,
        tracksReducer,
        playlistReducer,
        modalReducer
    }),
    {},
    applyMiddleware(thunk)
)

let playlist;
let playlistSort;
store.subscribe(() => {
    const state = store.getState()
    const isPlaylistChange = state.playlistReducer.tracks !== playlist;
    const isPlaylistSortChange = state.playlistReducer.sortOption !== playlistSort;

    if (isPlaylistChange) {
        playlist = state.playlistReducer.tracks;
        localStorage.setItem('playlist', JSON.stringify(playlist));
    }

    if (isPlaylistSortChange) {
        playlistSort = state.playlistReducer.sortOption;
        localStorage.setItem('playlist-sort', playlistSort);
    }
});

export default store;