import React, { Component } from 'react';

import UploadArea from '../UploadArea';

import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <UploadArea />
        {/* <ItemsList>
        </ItemsList> */}
      </div>
    );
  }
}

export default App;
