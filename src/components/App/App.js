import React, { Component } from 'react';

import UploadArea from '../UploadArea/UploadArea';

import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <UploadArea>
        </UploadArea>
        <ItemsList>
        </ItemsList>
      </div>
    );
  }
}

export default App;
