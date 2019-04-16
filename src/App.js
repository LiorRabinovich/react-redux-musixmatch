import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import SearchTracksPage from './containers/SearchTracksPage';
import PlaylistPage from './containers/PlaylistPage';
import TrackPage from './containers/TrackPage';
import ModalContainer from './containers/ModalContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="toolbar">
          <Link className="logo" to="/">Musixmatch</Link>

          <ul className="menu">
            <li><NavLink exact to="/">Search Tracks</NavLink></li>
            <li><NavLink to="/playlist">My Playlist</NavLink></li>
          </ul>
        </nav>

        <main>
          <Route path="/" exact component={SearchTracksPage} />
          <Route path="/playlist" component={PlaylistPage} />
          <Route path="/track/:trackID" component={TrackPage} />
        </main>

        <ModalContainer />
      </Router>
    );
  }
}

export default App;
