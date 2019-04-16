import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sortPlaylistAction } from '../actions/playlistActions';

import SortBox from '../components/SortBox';
import TracksList from '../containers/TracksList';

class PlaylistPage extends Component {
    constructor(props) {
        super();

        this.state = {
            sortOptions: ['track_name', 'album_name', 'artist_name']
        }
    }
    handlerSort = (e) => {
        const sortOption = e.target.value;
        this.props.sortPlaylist(this.props.tracksPlaylist, sortOption);
    }
    render() {
        const sortBoxRender = this.getSortBoxRender();
        return (
            <div className="playlist-page">
                <h1>Playlist</h1>
                {sortBoxRender}
                <TracksList tracks={this.props.tracksPlaylist} />
            </div>
        );
    }
    getSortBoxRender() {
        if (this.props.tracksPlaylist.length > 0) {
            return <SortBox
                options={this.state.sortOptions}
                value={this.props.sortOption}
                handlerSort={this.handlerSort} />
        }
        return '';
    }
}

const mapStateToProps = (state) => {
    return {
        tracksPlaylist: state.playlistReducer.tracks,
        sortOption: state.playlistReducer.sortOption
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sortPlaylist: (playlist, sortOption) => {
            return dispatch(sortPlaylistAction(playlist, sortOption));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPage);
