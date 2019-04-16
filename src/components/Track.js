import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Track extends Component {

    handlerClickToToggleToPlaylist = () => {
        const action = !this.props.isInPlaylist;
        this.props.handlerToggleToPlayList(this.props.trackIndex, action);
    }
    
    render() {
        let trackButtonAction = 'Add to playlist';
        let buttonRemoveClass = '';
        if(this.props.isInPlaylist) {
            trackButtonAction = 'Remove from playlist';
            buttonRemoveClass = 'button-red';
        }

        return (
            <div className="card">
                <img className="card-img" src="img/no-image-available.jpg" alt={this.props.trackName} />
                <div className="card-body">
                    <Link to={`/track/${this.props.trackID}`} className="card-title">{this.props.trackName}</Link>
                    <p className="card-text"><strong>Album</strong> <span>{this.props.albumName}</span></p>
                    <p className="card-text"><strong>Artist</strong> <span>{this.props.artistName}</span></p>    
                    <button className={`button ${buttonRemoveClass}`} onClick={this.handlerClickToToggleToPlaylist}>{trackButtonAction}</button>
                </div>
            </div>
        );
    }
}


export default Track;
