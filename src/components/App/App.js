import React, { Component } from 'react';

import UploadArea from 'components/UploadArea';
import ItemsList from 'components/ItemsList';

import { HARMS } from "consts";

import './App.scss';

class App extends Component {
  state = {
    items: HARMS
  }

  render() {

    return (
      <div className="App">
        <UploadArea>
        </UploadArea>
        <ItemsList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
