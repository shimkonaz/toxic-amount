import React, { Component } from 'react';

import UploadArea from 'components/UploadArea';
import ItemInfo from 'components/ItemInfo';

import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <UploadArea>

        </UploadArea>
        <ul>
          <li>
            <ItemInfo>

            </ItemInfo>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
