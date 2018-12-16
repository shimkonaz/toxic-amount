import React, { Component } from 'react';

import { UploadArrow } from 'components/Icons';
import './UploadArea.scss';

class UploadArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
      words: []
    }
  }

  /**
   * FLOW:
   * 1. upload photo
   * 2. show photo preview
   * 3. scan for words
   * 4. save results into redux store
   * 5. redirect to results page
   * 6. show results as list
   * 7. redirect to specific item
  */

  componentWillUnmount() {
    URL.revokeObjectURL(this.state.file);
  }
  
  handleAreaClick = () => {
    this.inputElement.click();
  }
  
  handleFileSelection = (e) => {
    this.storePhotoUrl(e.target.files[0]);
    this.detectWordsInPhoto(e.target.files[0]);
  }
  
  storePhotoUrl(photo) {
    this.setState({
      file: URL.createObjectURL(photo)
    })
  }
  
  detectWordsInPhoto(photo) {
    window.Tesseract.recognize(photo, {
      lang: 'eng'
    })
    .progress(p => console.log(p))
    .then(result => {
      this.setState({
        words: result.words
          .filter(
            word => 
              word.confidence > 50 
              && word.text.length > 3
            )
          .map(word => word.text)
      })
      console.log(this.state.words);
    })
  }

  render() {
    return (
      <div 
        className="uploadArea"
        onClick={this.handleAreaClick}
        style={{
          backgroundImage: 'url(' + this.state.file + ')'
        }}>

        <input
          type="file"
          onChange={this.handleFileSelection}
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
