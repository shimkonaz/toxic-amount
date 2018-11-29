import React, { Component } from 'react';

<<<<<<< HEAD
import UploadArea from '../UploadArea/UploadArea';
import ItemsList from '../ItemsList';
=======
import UploadArea from '../UploadArea';
>>>>>>> added elements to component

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
<<<<<<< HEAD
        <UploadArea>
        </UploadArea>
        <ItemsList items={this.state.mockItems}/>
=======
        <UploadArea />
        {/* <ItemsList>
        </ItemsList> */}
>>>>>>> added elements to component
      </div>
    );
  }
}

export default App;
