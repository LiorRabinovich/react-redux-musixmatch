import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setTrackActiveAction } from '../actions/trackActions';

class TrackPage extends Component {
    componentWillMount() {
        this.props.setTrackActive(this.props.match.params.trackID);
    }
    render() {
        const isLyricsExist = this.props.track.lyrics && Object.keys(this.props.track.lyrics).length > 0;
        const lyricsBodyRender = isLyricsExist ? <p><strong>Lyrics Body</strong> {this.props.track.lyrics.lyrics_body}</p> : '';
        return (
            <div className="track-page">
                <h2>Lyrics:</h2>
                {lyricsBodyRender}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        track: state.trackReducer.trackActive
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTrackActive: (trackSearchInput) => {
            return dispatch(setTrackActiveAction(trackSearchInput));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackPage);
