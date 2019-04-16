import _get from 'lodash/get';

const apiKey = '7629dddb1ec68ae1209b400db720c6ec';
const allowCrosOriginAnywhere = 'https://cors-anywhere.herokuapp.com/';

export const searchTrackAction = (trackSearchInput) => {
    return async (dispatch) => {
        const requestObject = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        
        const url = `http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackSearchInput}`;
        let data = await window.fetch(`${allowCrosOriginAnywhere}${url}&apikey=${apiKey}`, requestObject);
        data = await data.json();
        const tracks = _get(data, 'message.body.track_list', []);
        
        return dispatch({
            type: "SET_TRACKS",
            payload: tracks
        });
    };
};