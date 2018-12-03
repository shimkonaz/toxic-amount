import React, { Component } from 'react';

import UploadArea from '../UploadArea/UploadArea';
import ItemsList from '../ItemsList';

import { HARMS } from "../../consts";

import './App.scss';

class App extends Component {
  state = {
    HARMS
  }

  render() {

    return (
      <div className="App">
        <UploadArea>
        </UploadArea>
        <ItemsList items={this.state.HARMS}/>
      </div>
    );
  }
}

export default App;
