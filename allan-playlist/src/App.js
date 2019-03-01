import React, { Component } from 'react';
import Playlist from "./componentes/playlist"
import data from "./api.json"
import './App.css';

class App extends Component {
  render() {
    return (
      <Playlist data={data} />
    );
  }
}

export default App;
