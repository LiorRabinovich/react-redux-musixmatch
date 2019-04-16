import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleToPlaylistAction, addAndRemovePlaylistAction } from '../actions/playlistActions';
import { setModalActiveAction } from '../actions/modalActions';

import Track from '../components/Track'

class TracksList extends Component {
    constructor() {
        super();

        this.state = {
            tracksPlaylistHasTable: {}
        }
    }

    componentWillMount() {
        this.updateTracksPlaylistHashTable(this.props.tracksPlaylist);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.tracksPlaylist !== nextProps.tracksPlaylist) {
            this.updateTracksPlaylistHashTable(nextProps.tracksPlaylist);
        }
    }

    render() {
        console.log(this.props.tracks);
        const tracksRender = this.getTracksRender();
        return (
            <div className="cards">
                {tracksRender}
            </div>
        );
    }

    getTracksRender() {
        if (this.props.tracks.length > 0) {
            return this.props.tracks.map((track, trackIndex) =>
                <Track
                    key={trackIndex}
                    trackIndex={trackIndex}
                    trackName={track.track.track_name}
                    trackID={track.track.track_id}
                    albumName={track.track.album_name}
                    artistName={track.track.artist_name}
                    isInPlaylist={this.isInPlaylist(track.track.track_id)}
                    handlerToggleToPlayList={this.handlerToggleToPlayList}
                />
            )
        } else {
            return <p>Not Found Results</p>
        }
    }

    updateTracksPlaylistHashTable(tracksPlaylist) {
        let tracksPlaylistHasTable = {};
        for (let trackIndex = 0; trackIndex < tracksPlaylist.length; trackIndex++) {
            const track = tracksPlaylist[trackIndex].track;
            tracksPlaylistHasTable[track.track_id] = true;
        }

        this.setState({
            tracksPlaylistHasTable
        })

    }

    isInPlaylist(trackID) {
        const isInPlaylist = typeof this.state.tracksPlaylistHasTable[trackID] !== 'undefined';
        return isInPlaylist;
    }

    handlerToggleToPlayList = (trackIndex, action) => {
        const trackObject = this.props.tracks[trackIndex];

        const isOverMaxTracksPlaylist = this.props.tracksPlaylist.length >= this.props.maxTracksPlaylist;
        if (isOverMaxTracksPlaylist) {
            const trackRemove = this.props.tracksPlaylist[this.props.tracksPlaylist.length - 1];

            this.props.setModalActive({
                title: 'The playlist is full!',
                body: 'Do you want to remove the older track and add this track?',
                buttons: [{
                    label: 'Yes',
                    action: this.props.addAndRemovePlaylist.bind(this, trackObject, trackRemove)
                }]
            });
            return false;
        }

        this.props.toggleToPlaylist(trackObject, action);
    }
}

const mapStateToProps = (state) => {
    return {
        maxTracksPlaylist: state.playlistReducer.maxTracks,
        tracksPlaylist: state.playlistReducer.tracks
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleToPlaylist: (trackObject, action) => {
            dispatch(toggleToPlaylistAction(trackObject, action));
        },
        setModalActive: (modal) => {
            dispatch(setModalActiveAction(modal));
        },
        addAndRemovePlaylist: (trackAdd, trackRemove) => {
            dispatch(addAndRemovePlaylistAction(trackAdd, trackRemove));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TracksList);