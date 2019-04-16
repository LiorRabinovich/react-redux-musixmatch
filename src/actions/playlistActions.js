export const toggleToPlaylistAction = (trackObject, action) => {
    let actionName = 'ADD_TO_PLAYLIST';

    if (!action) {
        actionName = 'REMOVE_FROM_PLAYLIST';
    }

    return { type: actionName, payload: trackObject };
};

export const addAndRemovePlaylistAction = (trackAdd, trackRemove) => {
    return async (dispatch) => {
        dispatch({ type: "ADD_TO_PLAYLIST", payload: trackAdd });
        dispatch({ type: "REMOVE_FROM_PLAYLIST", payload: trackRemove });
    }
};

export const sortPlaylistAction = (playlist,sortOption) => {
    return async (dispatch) => {
        let playlistCopy = [...playlist];

        playlistCopy.sort((a, b) => {
            if (a.track[sortOption] < b.track[sortOption])
                return -1;
            if (a.track[sortOption] > b.track[sortOption])
                return 1;
            return 0;
        });

        const payload = {
            sortOption,
            playlist: playlistCopy
        }

        dispatch({ type: "SET_PLAYLIST", payload });
    }
};