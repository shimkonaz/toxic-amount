import React, { Component } from 'react';

import UploadArea from 'components/UploadArea';
import ItemsList from 'components/ItemsList';

import './App.scss';

class App extends Component {
  render() {

    return (
      <div className="App">
        <UploadArea />
        <ItemsList />
      </div>
    );
  }
}

export default App;
