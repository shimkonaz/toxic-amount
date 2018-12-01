import React, { Component } from 'react';

import { UploadArrow } from '../Icons';
import './UploadArea.scss';

class UploadArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null
    }
  }

  // tessaractRes.filter(item => item)

  // componentWillUnmount() {

  // url.revokeObjectUrl
  // }
  
  handleAreaClick = () => {
    this.inputElement.click();
  }
  
  handleFileSelection = (e) => {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    })
  }

  render() {
    return (
      <div 
        className="uploadArea"
        onClick={this.handleAreaClick}
        style={{
          backgroundImage: 'url(' + this.state.file + ')', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}>

        <input
          onChange={this.handleFileSelection}
          type="file"
          ref={input => this.inputElement = input}
          style={{display: 'none'}} />
        
        <div className="uploadArea__icon">
          <UploadArrow />
        </div>

        <div className="uploadArea__title">
          To upload, click here <br/> or <br/>
           drop files in this area
        </div>
      </div>
    );
  }
}

export default UploadArea;
