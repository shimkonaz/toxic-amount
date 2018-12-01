import React, { Component } from 'react';

import UploadArea from '../UploadArea/UploadArea';
import ItemsList from '../ItemsList';

import './App.scss';

class App extends Component {
  state = {
    mockItems: [
      {
        id: 1,
        itemName: 'one',
        itemDescription: 'one_descr'
      },
      {
        id: 2,
        itemName: 'two',
        itemDescription: 'two_descr'
      },
      {
        id: 3,
        itemName: 'three',
        itemDescription: 'three_descr'
      }
    ]
  }

  render() {

    return (
      <div className="App">
        <UploadArea>
        </UploadArea>
        <ItemsList items={this.state.mockItems}/>
      </div>
    );
  }
}

export default App;
