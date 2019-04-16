import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchTrackAction } from '../actions/tracksActions';

import Search from '../components/Search';

import TracksList from '../containers/TracksList';

class SearchTracksPage extends Component {
    constructor() {
        super();

        this.state = {
            isShowTracks: false
        }
    }

    handlerTrackSearch = (trackSearchInput) => {
        this.setState({isShowTracks: false});
        const isTrackSearchInputNotEmpty = trackSearchInput !== '';

        if (isTrackSearchInputNotEmpty) {
            this.props.searchTrack(trackSearchInput).then(()=>{
                this.setState({isShowTracks: true});
            })
        } else {
            alert('Please Enter Track To Search');
        }
    }

    render() {
        let tracksListRender = (this.state.isShowTracks ? <TracksList tracks={this.props.tracks} /> : '');
        return (
            <div className="track-list-page">
                <h1>Search Tracks</h1>
                <Search handlerSearch={this.handlerTrackSearch} placeholder="Please Enter Text To Search..." />
                {tracksListRender}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tracks: state.tracksReducer.tracks
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchTrack: (trackSearchInput) => {
            return dispatch(searchTrackAction(trackSearchInput));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTracksPage);
