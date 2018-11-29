import React, { Component } from 'react';

import { UploadArrow } from '../Icons';
import './UploadArea.scss';

class UploadArea extends Component {
  
  render() {
    return (
      <div className="uploadArea">
        <div className="uploadArea__icon">
          <UploadArrow />
        </div>
        <div className="uploadArea__title">
          To upload, click here <br/> or <br/> drop files in this area
        </div>
      </div>
    );
  }
}

export default UploadArea;
