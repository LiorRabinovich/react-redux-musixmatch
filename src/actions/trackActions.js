const apiKey = '7629dddb1ec68ae1209b400db720c6ec';
const allowCrosOriginAnywhere = 'https://cors-anywhere.herokuapp.com/';

export const setTrackActiveAction = (trackID) => {
    return async (dispatch) => {
        const requestObject = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const url = `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackID}`;
        let data = await window.fetch(`${allowCrosOriginAnywhere}${url}&apikey=${apiKey}`, requestObject);
        data = await data.json();
        const lyrics = data.message.body.lyrics;
        
        return dispatch({
            type: "SET_TRACK_LYRICS",
            payload: lyrics
        });
    };
};